import './App.css';
import { useState, useEffect } from 'react';
import {timer} from './timer';
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


  const [isActive, setIsActive] = useState(false);

  const toggleButton = (event) => {
    setIsActive(prevState => !prevState);  // Toggle the state
    console.log('Button clicked:', event.target.className);

  };

  return (
    <div>
      <h1 style = {{ textAlign: 'center' }}>My Productivity Pal</h1>

      <div className = "container">    

        <button
        onClick={toggleButton}
        className={isActive ? 'startButton' : "pauseButton"}
        >{isActive ? 'Start Hatching Process' : 'Pause Hatching Process'}
        </button>
        
        <button
        className='cancelButton'
        >Cancel Hatching Process?
        </button>

      </div>
    </div>  

  );
}


export default App;
