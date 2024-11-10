import React from 'react';
import './App.css';
<<<<<<< Updated upstream
import { useState, useEffect } from 'react';
import {timer} from './timer';

const timerState = {
  notstarted : "NOT STARTED",
  paused: 'PAUSED',
  running: 'RUNNING'
}

const workState = {
  work: 'WORK',
  rest: 'REST' 
}

=======
import creature from './Images/licker.png'; //logic statement that changes the source of the image depending on time
import hammer from './Images/hammer.png'; //shows up when you cancel a task. 
import styles from './App.css';
>>>>>>> Stashed changes


function Button() {
  return (
    <div className = "container">
      <button className = "startButton">
        Begin Hatching Process
      </button>
    </div>
  );
}

const Image = () => (
  <img
    className={styles.image}
    src="/Images/licker.png'"
    alt="licker"
    />
)
function App() {
  const [gameState, setGameState] = useState(timerState.notstarted);
  const [work, setWork] = useState(workState.work);
  const [timerAmount, setTimerAmount] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);



  useEffect(() => {
    let interval;

    const getTime = () => {
      if (!(gameState === timerState.paused)) {
        const time = timerAmount - 1;
      setTimerAmount(time);
      
      setHours(Math.floor((timerAmount / (60 * 60)) % 24));
      setMinutes(Math.floor((timerAmount / 60) % 60));
      setSeconds(Math.floor(timerAmount % 60));
      }
    };

    // Change the timerAmount based off if its a work session or rest session
    if (gameState === timerState.notstarted) {
       if (work === workState.work) {
        setTimerAmount(1500)
       } else if (work === workState.rest) {
        setTimerAmount(300)
       }
       // Start updating the timer
       interval = setInterval(() => getTime(timerAmount), 1000);
    } //else if (gameState === timerState.paused){
      // Stop the timer, 
    
      else if (gameState === timerState.running) {
      // Start updating the timer, without changing the timerAmount
      interval = setInterval(() => getTime(timerAmount), 1000);
      // Check if timerAmount is equal to zero
    }
    
    return () => clearInterval(interval);

  }, [gameState, timerAmount, work])


  return (
    <div>
      <h1 style = {{ textAlign: 'center' }}>My Productivity Pal</h1>
<<<<<<< Updated upstream
      <h1>{seconds}</h1>
      <h1>{minutes}</h1>
      <h1>{hours}</h1>
=======
      <img className ="stationary-image" src={creature} width={250} height={250}alt="Hammer"/>
      <img className ="image" src={hammer} width={250} height={250}alt="Best Friend" />
      <Button />
      <Image />
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
