import { Button, Grid, Slider } from "@material-ui/core";
import React, { useEffect, useState, useRef } from "react";
import playIcon from "./play.svg";
import "./styles.css";

type Props = {
  audioName: string;
};
const AudioPlayer: React.FC<Props> = ({ audioName }) => {
  const audio = new Audio(audioName);

  useEffect(() => {
    audio.load();
  });
  const [duration, setDuration] = useState<number>(0);
  const [playLocation, setPlayLocation] = useState<number>(0);
  const [play, setPlay] = useState<boolean>(false);
  audio.addEventListener("loadedmetadata", (e) => {
    if (e.target) {
      let a = e.target as HTMLAudioElement;
      setDuration(a.duration);
    }
  });
  const handleChange = (newValue: number | number[]) => {
    setPlayLocation(((newValue as number) / 100) * duration);

    audio.currentTime = ((newValue as number) / 100) * duration;
    console.log(audio.currentTime);
  };
  const toggle = () => setPlay(!play);

  useEffect(() => {
    play ? audio.play() : audio.pause();
    audio.currentTime = 0;
    console.log(audio.paused, play);
  }, [play]);

  useEffect(() => {
    setPlayLocation((audio.currentTime / duration) * 100);

    console.log(audio.currentTime);
  }, [audio.currentTime]);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item>
          <Button style={{ minWidth: "0px" }} onClick={() => toggle()}>
            <img className="button-icon" src={playIcon}></img>
          </Button>
        </Grid>
        <Grid item xs>
          <Slider
            value={(playLocation / duration) * 100}
            onChange={(e, v: number | number[]) => handleChange(v)}
            style={{ color: "#000000" }}
          ></Slider>
        </Grid>
        <Grid item>{duration}</Grid>
      </Grid>
    </div>
  );
};

export default AudioPlayer;
