import { formatTime } from "./formatTime";
import useTimer from "./useTimer";
import React, { useRef, useState } from 'react';

function App() {
const [timer, setTimer] = useState(0);
  const timer2 = useRef(0);
  let a = 0;
  let b = 0;

  const handleClick = () => {
    console.log('timer: ', timer);
    console.log('timer2: ', timer2);
    console.log('a: ', a);
    console.log('b: ', b);
  };

  const handleIncrease = () => {
    setTimer(timer + 1);
    
    a += 1;
  };

  const handleTimer2 = () => {
    timer2.current += 1;
    b += 1;
  }

  return (
    <div>
      <p style={{ color: 'black'}}>Hello timer 1: {timer} </p>
      <br/>
      <p style={{ color: 'black'}}>Hello timer 2: {`${timer2.current}`}</p>
      <br/>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleIncrease}>Timer 1</button>
      <button onClick={handleTimer2}>Timer 2</button>
    </div>
  );
//   const { time, startTimer, stopTimer, resetTimer, active } = useTimer(0);

//   return (
//     <div className="App container">
//       <h1>Coder Timer</h1>
//       <div className="timer__wrapper">
//         <div className="timer__display">
//           <p>{formatTime(time)}</p>
//         </div>
//         <div className="button__wrapper">
//           <button className="button" onClick={stopTimer}>
//             Stop
//           </button>
//           <button
//             className="button"
//             ref={"Your code here"}
//             onClick={startTimer}
//           >
//             Start
//           </button>
//           <button className="button" onClick={resetTimer}>
//             Reset
//           </button>
//         </div>
//       </div>
//     </div>
//   );
}

export default App;
