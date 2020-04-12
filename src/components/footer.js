import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Twitter from "@material-ui/icons/Twitter";
import GitHub from '@material-ui/icons/GitHub';

const UseStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "#F7C4A5",
            "&:hover": {
              fill: "#985F6F",
              fontSize: "1.8rem",
            },
          },
        },
      });

const footer = () => {
    const classes = UseStyles();
    return (
      <BottomNavigation width="auto" style={{ background: "#222" }}>
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<LinkedIn />}
        />
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<Twitter />}
        />
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<GitHub />}
        />
      </BottomNavigation>
    );
  };
  

export default footer
