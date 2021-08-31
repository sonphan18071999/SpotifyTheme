import { Card, Paper } from "@material-ui/core";
import type { NextPage } from "next";
import React from "react";
import ArtistListHeader from "../artist-list-header/artist-list-header";
import styles from "./artistList.module.scss";

const ArtistList: NextPage = () => {
  return (
    <div>
      <Card className={styles.artist__list_container}>
        <ArtistListHeader />
      </Card>
    </div>
  );
};

export default ArtistList;
