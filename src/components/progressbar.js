import React, { useState, useEffect } from "react";
import "../assets/css/progress.css";

function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = window.scrollY;
      const progress = (scroll / maxScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <progress className="progress" value={scrollProgress} max="100">
      {scrollProgress}%
    </progress>
  );
}

export default ScrollProgressBar;
