import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import VolumeLogo from './assets/reduced-volume.svg';
import test from './assets/test.mp3';


function App() {
  let audio = new Audio(test)
  useEffect(()=>{
    audio.load()
  })
  const start = () => {
    audio.play();
    console.log(audio);
  }
  return (
    <div className="container">
      <div className="header-text header-margin">
        Hello
      </div>
      <div className="header-text body-text">
        My Name is Yihong Liu
        <button className="volume-button" onClick={start}>
          <img src={VolumeLogo} className="volume-logo"></img>
        </button>
      </div>

    </div>
  );
}

export default App;
