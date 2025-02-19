import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);

  const isStart = useRef(true);
  const active = useRef({disabled: false});
  const refInterval = useRef(0);

  const startTimer = () => {
    // "Your code here";
    refInterval.current = setInterval(() => {
      setTime(prevTime=>prevTime +1)
    }, 1000);
    console.log(active);
    active.current.disabled = true;
    isStart.current = true;
  };

  const stopTimer = () => {
    // "Your code here";
    clearInterval(refInterval.current);
    isStart.current = false;
    active.current.disabled = false;
  };

  const resetTimer = () => {
    // "Your code here";
    setTime(0);
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;


// dùng use ref ở đây để có thể chẹkc 