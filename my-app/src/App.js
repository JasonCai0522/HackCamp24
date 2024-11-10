import React from 'react';
import './App.css';

function Button() {
  return (
    <div className = "container">
      <button className = "startButton">
        Begin Hatching Process
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 style = {{ textAlign: 'center' }}>My Productivity Pal</h1>
      <Button />
    </div>
  );
}

export default App;
