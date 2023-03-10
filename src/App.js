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
import Timer from "./components/timer";

const LoadingScreen = forwardRef((props, ref) => {
  return <Animation ref={ref} />;
});

const App = () => {
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
        <LoadingScreen ref={loadingScreenRef} />
      </CSSTransition>
      {!isLoading && (
        <>
          <Timer />
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
