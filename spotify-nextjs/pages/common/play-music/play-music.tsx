import {
  Card,
  CardContent,
  IconButton,
  LinearProgress,
  Paper,
} from "@material-ui/core";
import { NextPage } from "next";
import React from "react";
import styles from "./_playMusic.module.scss";
import AutorenewSharpIcon from "@material-ui/icons/AutorenewSharp";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import WavesSharpIcon from "@material-ui/icons/WavesSharp";

const PlayMusic: NextPage = () => {
  const [progress, setProgress] = React.useState(30);

  return (
    <div>
      <Card className={styles.play__container}>
        <CardContent className={styles.play__content}>
          <WavesSharpIcon
            aria-label="previous"
            className={
              styles.button__previous +
              " " +
              styles.white__color +
              " " +
              styles.margin_around +
              " " +
              styles.icon__size
            }
          />

          <IconButton
            aria-label="previous"
            className={
              styles.button__previous +
              " " +
              styles.white__color +
              " " +
              styles.margin_around +
              " " +
              styles.icon__size
            }
          >
            <SkipNextIcon />
          </IconButton>

          <IconButton
            aria-label="play/pause"
            className={
              styles.button__play__pause +
              " " +
              styles.margin_around +
              " " +
              styles.icon__size
            }
          >
            <PlayArrowIcon />
          </IconButton>

          <IconButton
            aria-label="next"
            className={
              styles.next +
              " " +
              styles.white__color +
              " " +
              styles.margin_around +
              " " +
              styles.icon__size
            }
          >
            <SkipPreviousIcon />
          </IconButton>

          <IconButton
            aria-label="previous"
            className={
              styles.button__previous +
              " " +
              styles.white__color +
              " " +
              styles.margin_around +
              " " +
              styles.icon__size
            }
          >
            <AutorenewSharpIcon />
          </IconButton>
        </CardContent>

        <div className={styles.play__progress_bar_container}>
          <span>00 : 00</span>
          <LinearProgress
            className={styles.play__progress_bar}
            variant="determinate"
            value={progress}
          />
          <span>03 : 50</span>
        </div>
      </Card>
    </div>
  );
};

export default PlayMusic;
