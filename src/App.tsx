import React, { useEffect, useState } from "react";
import { Button, makeStyles } from "@material-ui/core";
import logo from "./logo.svg";
import "./App.css";
import VolumeLogo from "./assets/reduced-volume.svg";
import BodyText from "./BodyText";
import name from "./assets/name.mp3";
import ai_midi_demo from "./assets/ai-midi-demo.mp3";
import AudioPlayer from "./components/audioPlayer";
import ReactAudioPlayer from "react-audio-player";

function App() {
  let audio = new Audio(name);
  useEffect(() => {
    audio.load();
  });
  const start = () => {
    audio.play();
    console.log(audio);
  };
  return (
    <div className="container">
      <div className="header-text header-margin">
        Hello, My name is Yihong Liu&nbsp;
        <Button
          style={{ minWidth: "0px" }}
          className="volume-button"
          onClick={start}
        >
          <img src={VolumeLogo} className="volume-logo"></img>
        </Button>
      </div>
      <BodyText>
        <a
          href="https://ca.linkedin.com/in/yihong-liu-b70a96170"
          target="_blank"
        >
          LinkedIn
        </a>{" "}
        <a href="https://github.com/lyihongl" target="_blank">
          Github
        </a>{" "}
        <a href="mailto: yh22liu@uwaterloo.ca">Email</a>
      </BodyText>
      <BodyText>
        3rd year Computer Engineering student @ UWaterloo. Interested in game
        development and capital markets.
      </BodyText>
      <BodyText>Here's where I've worked:</BodyText>
      <ul>
        <li>PointClickCare - Software Engineering Co-op</li>
        <li>TD Securities, Structured Notes - Summer Associate</li>
        <li>University of Waterloo - Undergraduate TA</li>
        <li>Axsium Group - Solutions Developer Co-op</li>
      </ul>
      <BodyText>
        I like to tinker a lot, but have a tendency to never finish my side
        projects...
      </BodyText>
      <BodyText>Here are some of my more complete projects:</BodyText>
      <ul>
        <li>
          <a
            href="https://github.com/MustafaMuhammad2000/Ai-Lofi"
            target="_blank"
          >
            Ai-Lofi
          </a>
          : architected model in Keras to produce new MIDIs. We eventually ran
          out of GCP credits, but the model is kind of ok [Python, GCP]
        </li>
      </ul>
      Here is a very cherry picked sample that we generated :)
      <ReactAudioPlayer
        src={ai_midi_demo}
        controls
        className="sound-player"
      ></ReactAudioPlayer>
      <ul>
        <li>
          <a href="https://github.com/lyihongl/evosim" target="_blank">
            EvoSim
          </a>
          : Used genetic algorithms and MLPs (glorified matrix multiplication)
          to simulate evolution [C++, SFML]
        </li>
      </ul>
    </div>
  );
}

export default App;