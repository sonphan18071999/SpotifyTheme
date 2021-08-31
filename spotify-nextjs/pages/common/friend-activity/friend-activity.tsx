import { Button, Card, CardContent, Typography } from "@material-ui/core";
import type { NextPage } from "next";
import React from "react";
import styles from "./friendArticle.module.scss";

const FriendActivity: NextPage = () => {
  return (
    <div>
      <Card className={styles.friend__activity + " " + styles.padding_left}>
        <CardContent>
          <h2>Friend Activity</h2>
          <h4>Connect with Facebook to see what your friends are playing.</h4>
          <Button
            variant="contained"
            color="primary"
            className={styles.button__facebook}
          >
            <span className={styles.normal__text}>Connect Facebook</span>
          </Button>
          <br />
          <h5>
            We never post anything without your permission. Show and hide Friend
            Activity from Setting.
          </h5>
        </CardContent>
      </Card>
    </div>
  );
};

export default FriendActivity;
