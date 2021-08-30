import { ListItem, ListItemIcon, ListItemText, Paper } from "@material-ui/core";
import type { NextPage } from "next";
import CreateNewFolder from "@material-ui/icons/CreateNewFolder";
import Card from "@material-ui/core/Card";
import Home from "@material-ui/icons/Home";
import LibraryMusic from "@material-ui/icons/LibraryMusic";
import Search from "@material-ui/icons/Search";
import Favorite from "@material-ui/icons/Favorite";

import styles from "./navigation.module.scss";

const Navigation: NextPage = () => {
  return (
    <div>
      <Card
        className={styles.navigation__container}
        elevation={3}
        variant="outlined"
        square
      >
        <ListItem button>
          <ListItemIcon>
            <Home style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Search style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LibraryMusic style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Your Library" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <CreateNewFolder style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Create Playlist" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Favorite style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Liked Songs" />
        </ListItem>
        <hr />
        <ListItem button>
          <ListItemText primary="My Playlist #1" />
        </ListItem>
      </Card>
    </div>
  );
};

export default Navigation;
