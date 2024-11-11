import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import creature from './Images/licker.png'; //logic statement that changes the source of the image depending on time
import hammer from './Images/hammer.png'; //shows up when you cancel a task. 
import styles from './App.css';


const timerState = {
  notstarted : "NOT STARTED",
  paused: 'PAUSED',
  running: 'RUNNING'
}

const workState = {
  work: 'WORK',
  rest: 'REST' 
}


function App() {
  const [gameState, setGameState] = useState(timerState.notstarted);
  const [work, setWork] = useState(workState.work);
  const [timerAmount, setTimerAmount] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const[count, setCount] = useState(0);

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);


  const toggleButton = () => {
    if (gameState === timerState.paused || gameState === timerState.notstarted) {
      setGameState(timerState.running);
      console.log(gameState);
    } else if (gameState === timerState.running){
      setGameState(timerState.paused)
    }

    if (isActive) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }

  const cancelButton = () => {
    setGameState(timerState.notstarted);
    setIsActive(true);
  }

  useEffect(() => {
    let interval;

    const getTime = () => {
      if (gameState === timerState.running) {
        const time = timerAmount - 1;
      setTimerAmount(time);
      }
      setHours(Math.floor((timerAmount / (60 * 60)) % 24));
      setMinutes(Math.floor((timerAmount / 60) % 60));
      setSeconds(Math.floor(timerAmount % 60));
    };

    // Change the timerAmount based off if its a work session or rest session
    if (gameState === timerState.notstarted) {
       if (work === workState.work) {
        setTimerAmount(20)
       } else if (work === workState.rest) {
        setTimerAmount(10)
       }
       setIsActive(true)

       // Start updating the timer
       interval = setInterval(() => getTime(timerAmount), 1000);
    } //else if (gameState === timerState.paused){
      // Stop the timer, 
    
      else if (gameState === timerState.running) {
      // Start updating the timer, without changing the timerAmount
      interval = setInterval(() => getTime(timerAmount), 1000);
      // Check if timerAmount is equal to zero
      if (timerAmount === 0) {
        if (work === workState.work) {
          setWork(workState.rest);
          setCount(count + 1)
          console.log(count)
         } else if (work === workState.rest) {
          setWork(workState.work);
         }
         setGameState(timerState.notstarted)
         
      }
    }
    
    return () => clearInterval(interval);

  }, [gameState, timerAmount, work, count])


  return (
    <div>
      <h1 style = {{ textAlign: 'center' }}>My Productivity Pal</h1>

      <div>00 : {minutes} : {seconds} </div>

      <div className = "container">    
        <button
        onClick={toggleButton}
        className={isActive ? 'startButton' : "pauseButton"}
        >{isActive ? 'Start Hatching Process' : 'Pause Hatching Process'}
        </button>
        
        <button
        onClick = {cancelButton}
        className='cancelButton'
        >Cancel Hatching Process?
        </button>
      </div>
    </div>  
  );
}

export default App;
