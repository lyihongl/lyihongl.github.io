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
        4th year Computer Engineering student @ UWaterloo. Interested in asic/digital design
        and capital markets.
      </BodyText>
      <BodyText>
        I take pictures sometimes - recently I went on exchange to 
        National Taiwan University, and took some <a href="exchange">pictures</a>
      </BodyText>
      <BodyText>
        Currently in progress - I'm trying to teach myself FPGA by making a series of CPU's in verilog.
        Follow my progress <a href="">here</a>.
      </BodyText>
      <BodyText>Here's some of my experience:</BodyText>
      <ul>
        <li>Amazon - SDE Intern, RDS backups and exports team <div>(Summer 2023)</div></li>
        {/* <li>Foreign exchange - National Taiwan University <div>
          (Fall 2022) -&nbsp;
          <a href="/exchange">Pictures</a>
        </div>
        </li> */}
        <li>Amazon - SDE Intern, RDS backups and exports team <div>(Summer 2022)</div></li>
        <li>Asana - Infrastructure Security Intern (Winter 2022)</li>
        <li>Shopify - Backend Developer Co-op (Fall 2021)</li>
        <li>PointClickCare - Software Engineering Co-op (Winter 2021)</li>
        <li>TD Securities, Structured Notes - Summer Associate <div>(Summer 2020)</div></li>
        <li>University of Waterloo - Undergraduate TA (Fall 2019)</li>
        <li>Axsium Group - Solutions Developer Co-op (Winter 2019)</li>
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
      <BodyText className="indent-text">
        Here is a very cherry picked sample that we generated :)
      </BodyText>
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
