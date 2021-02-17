import { Button, Grid, Slider } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import playIcon from "./play.svg";
import "./styles.css";

type Props = {
  audioName: string;
};
const AudioPlayer: React.FC<Props> = ({ audioName }) => {
  let audio = new Audio(audioName);

  useEffect(() => {
    audio.load();
  });

  let duration = audio.addEventListener("loadedmetadata", (e) => {
    let a = e.target! as HTMLAudioElement;
    return a.duration;
  });

  console.log("duration" + duration);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item>
          <Button style={{ minWidth: "0px" }} onClick={() => audio.play()}>
            <img className="button-icon" src={playIcon}></img>
          </Button>
        </Grid>
        <Grid item xs>
          <Slider style={{ color: "#000000" }}></Slider>
        </Grid>
      </Grid>
    </div>
  );
};

export default AudioPlayer;
