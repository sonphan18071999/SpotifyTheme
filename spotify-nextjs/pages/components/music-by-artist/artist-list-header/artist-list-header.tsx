import { Button, Card } from "@material-ui/core";
import type { NextPage } from "next";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import ArrowBack from "@material-ui/icons/ArrowBack";
import ArrowForward from "@material-ui/icons/ArrowForward";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";

import styles from "./_artisitListHeader.module.scss";
import Image from "next/image";

const ArtistListHeader: NextPage = () => {
  return (
    <div>
      <Card className={styles.artist__list}>
        <Toolbar>
          <ArrowBack />
          <ArrowForward />
          <div className={styles.spacer}></div>
          <Button
            variant="outlined"
            className={styles.button__padding + " " + styles.margin__right}
          >
            Upgrade
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={styles.button__profile + " " + styles.button__padding}
          >
            Sơn Phan
            <ArrowDropDown />
          </Button>
        </Toolbar>
      </Card>
    </div>
  );
};

export default ArtistListHeader;
