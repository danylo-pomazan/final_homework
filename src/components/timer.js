import { useState, useEffect } from "react";

const IdleTimer = () => {
  const [lastInteractionTime, setLastInteractionTime] = useState(Date.now());
  const [isActive, setIsActive] = useState(true);

  const idleTime = 60000; // 1 minute in milliseconds

  useEffect(() => {
    let timer;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsActive(false);
      } else {
        setIsActive(true);
        setLastInteractionTime(Date.now());
      }
    };

    const handleMouseMove = () => {
      setIsActive(true);
      setLastInteractionTime(Date.now());
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isActive) {
        const idleTimeElapsed = Date.now() - lastInteractionTime;
        if (idleTimeElapsed > idleTime) {
          const confirmStay = window.confirm("Ви ще тут?");
          if (confirmStay) {
            setLastInteractionTime(Date.now());
          } else {
            window.close();
          }
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, lastInteractionTime, idleTime]);

  return null;
};

export default IdleTimer;
