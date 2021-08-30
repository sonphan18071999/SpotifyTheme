import { Paper } from "@material-ui/core";
import { NextPage } from "next";
import styles from "./_playMusic.module.scss";

const PlayMusic: NextPage = () => {
  return (
    <div>
      <Paper className={styles.play__container} />
    </div>
  );
};

export default PlayMusic;
