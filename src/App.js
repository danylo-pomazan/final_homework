import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { CSSTransition } from "react-transition-group";

import "./App.css";
import Header from "./components/header";
import WhatWeDo from "./components/whatWeDo";
import AboutUs from "./components/aboutUs";
import Success from "./components/success";
import Completed from "./components/completed";
import Testimonials from "./components/testimonials";
import LatestNews from "./components/latestNews";
import SignUp from "./components/signUp";
import Footer from "./components/footer";
import Animation from "./components/animation";

const LoadingScreen = forwardRef((props, ref) => {
  return <Animation ref={ref} />;
});

const App = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let timer;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    const startTimer = () => {
      timer = setTimeout(() => {
        if (isActive) {
          if (window.confirm("Ви ще тут?")) {
            setIsActive(true);
            startTimer();
          } else {
            setIsActive(false);
            window.close();
          }
        }
      }, 60000); // 1 хвилина в мілісекундах
    };

    startTimer();

    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isActive]);

  const [isLoading, setIsLoading] = useState(true);
  const nodeRef = useRef(null);
  const loadingScreenRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  useImperativeHandle(loadingScreenRef, () => ({
    getNode: () => {
      return nodeRef.current;
    },
  }));

  return (
    <div>
      <CSSTransition
        in={isLoading}
        classNames="loading-screen"
        timeout={0}
        unmountOnExit
        nodeRef={nodeRef}
      >
        <LoadingScreen ref={nodeRef} />
      </CSSTransition>
      {!isLoading && (
        <>
          <Header />
          <WhatWeDo />
          <AboutUs />
          <Success />
          <Completed />
          <Testimonials />
          <LatestNews />
          <SignUp />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
