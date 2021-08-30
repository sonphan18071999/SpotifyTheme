import { Box, Button, Card } from "@material-ui/core";
import type { NextPage } from "next";
import React from "react";
import styles from "./friendArticle.module.scss";

const FriendActivity: NextPage = () => {
  return (
    <div>
      <Card className={styles.friend__activity}>
        <h2>
          <b>Friend Activity</b>
        </h2>
        <p>Connect with Facebook to see what your friends are playing.</p>
        <Button
          variant="contained"
          color="primary"
          className={styles.button__facebook}
        >
          <span className={styles.text__small}>Connect with Facebook</span>
        </Button>
        <p className={styles.text__small}>
          {" "}
          We never post anything without your permission. Show and hide Friend
          Activity from Setting.{" "}
        </p>
      </Card>
    </div>
  );
};

export default FriendActivity;
