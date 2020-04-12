import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "#233"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "#F7C4A5"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"
            }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "#985F6F",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color: "#985F6F",
        padding: "3rem 0",
        textTransform: "uppercase"

    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }
}));

const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    working experience
            </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2011-2012
                </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Direct Care Staff
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "#985F6F"}}>
                        Ariland Services
                    </Typography>
                    <Typography variant="subtitle1" align="center"style={{color: "#F7C4A5"}}>
                        Anim adipisicing labore id sit adipisicing occaecat. Aute ut laboris pariatur aute velit ipsum. Aute excepteur cillum dolor commodo do Lorem labore. In aliquip velit veniam proident ex consequat deserunt pariatur excepteur adipisicing cillum. Consequat qui incididunt anim est excepteur minim ullamco proident incididunt laboris commodo. Aliquip ut mollit sit consectetur culpa ipsum nulla do.
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2012-2016
                </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Delivery Driver
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "#985F6F"}}>
                        Papa John's
                    </Typography>
                    <Typography variant="subtitle1" align="center"style={{color: "#F7C4A5"}}>
                        Exercitation eiusmod minim cillum id duis sunt ad do laboris proident sit. Quis tempor eiusmod veniam cillum reprehenderit fugiat laborum pariatur nulla dolore dolore. Veniam eiusmod minim id eu sit aute ex esse Lorem dolor dolore duis tempor. Nulla cupidatat exercitation consectetur ut aliquip ex officia exercitation sint quis duis esse. Incididunt nulla nostrud aliqua ea voluptate eiusmod eiusmod ea eu eiusmod aliqua minim.
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2014-2019
                </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Delivery Driver
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "#985F6F"}}>
                        Takeout Central
                    </Typography>
                    <Typography variant="subtitle1" align="center"style={{color: "#F7C4A5"}}>
                        Minim est ad tempor ullamco minim fugiat duis magna qui ipsum. Cillum consequat proident id mollit quis adipisicing ipsum irure. Deserunt ex veniam cillum magna consequat eiusmod aute in. Officia et deserunt ut nulla sint voluptate ullamco reprehenderit sit eu. Elit veniam cillum nostrud dolor minim labore ea commodo excepteur velit. Tempor ad id laboris anim reprehenderit do ex.
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2019-
                </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Delivery Driver
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "#985F6F"}}>
                        Chop Chop RVA
                    </Typography>
                    <Typography variant="subtitle1" align="center"style={{color: "#F7C4A5"}}>
                        Irure consectetur minim ipsum reprehenderit aliquip adipisicing excepteur occaecat cupidatat. Non velit exercitation ex consequat ullamco deserunt cillum excepteur voluptate reprehenderit non eiusmod velit. Minim nisi consequat incididunt pariatur anim amet ad aliqua. Irure est eiusmod dolore Lorem ea ullamco veniam ea do. Nisi Lorem occaecat enim dolore ullamco esse sint ut veniam id laborum ut fugiat cillum.
                    </Typography>
                </Box>

            </Box>
        </Box>

        </>
    );
};

export default Resume
