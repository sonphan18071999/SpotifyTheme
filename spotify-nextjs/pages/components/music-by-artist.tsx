import { Grid } from "@material-ui/core";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Navigation from "../common/navigation/navigation";
import PlayMusic from "../common/play-music/play-music";
import styles from "../../styles/Home.module.scss";
import ArtistList from "./music-by-artist/artist-list/artist-list";
import FriendActivity from "../common/friend-activity/friend-activity";

const MusicByArtist: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spotify</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid className={styles.root}>
        <Navigation />
        <ArtistList />
        <FriendActivity />
      </Grid>
      <PlayMusic />
    </div>
  );
};

export default MusicByArtist;
