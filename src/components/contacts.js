import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";

const UseStyles = makeStyles((theme) => ({
    form: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      position: "absolute",
    },
    button: {
      marginTop: "1rem",
      color: "#985F6F",
      borderColor: "#985F6F",
    },
  }));

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#985F6F",
        },
        "& label": {
            color: "#F7C4A5",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#F7C4A5",
            },
            "&:hover fieldset": {
                borderColor: "#F7C4A5",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#F7C4A5",
            },
        },
    },
})(TextField);

const contacts = () => {
    const classes = UseStyles();
    return (
        <Box component="div" style={{ background: "#233", height: "100vh" }}>
            <Navbar />
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography variant="h5" style={{color: "#985F6F", textAlign: "center", textTransform: "uppercase"}}>
                        hire or contact me...
                    </Typography>
                    <InputField
                        fullWidth={true}
                        label="Name"
                        variant="outlined"
                        inputProps={{ style: { color: "white" } }}
                        margin="dense"
                        size="medium" />
                    <br />
                    <InputField
                        fullWidth={true}
                        label="Email"
                        variant="outlined"
                        inputProps={{ style: { color: "white" } }}
                        margin="dense"
                        size="medium" />
                    <br />
                    <InputField
                        fullWidth={true}
                        label="Company"
                        variant="outlined"
                        inputProps={{ style: { color: "white" } }}
                        margin="dense"
                        size="medium" />
                    <br />
                    <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
                        contact me
                        </Button>
                </Box>
            </Grid>
        </Box>
    )
};

export default contacts
