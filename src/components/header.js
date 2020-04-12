import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../images/avatar.jpg";

// CSS Styles
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "#985F6F"
    },
    subtitle: {
        color: "#F7C4A5",
        marginBottom: "3rem"
    },
    typedContainer: {
      position: "absolute", 
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100vw",
      textAlign: "center",
      zIndex: 1
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
            <Avatar className={classes.avatar} src={avatar} alt="Patrick" />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Patrick McDowell"]} typeSpeed={40} />
            </Typography>
            <br />
            {/* Maybe get rid of the loop */}
            <Typography className={classes.subtitle} variant="h5">
                <Typed
                    strings={["Web Development", "Social Politics", "Random Trivia"]}
                    typeSpeed={40}
                    backspeed={60}
                    loop
                />
            </Typography>
        </Box>
    );
}

export default Header
