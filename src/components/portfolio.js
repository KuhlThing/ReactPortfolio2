import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core";
import Navbar from './Navbar';
import project1 from "../images/getInfoScrn2.png";
import project2 from "../images/spotifeelsScrn.png";
import project3 from "../images/budgetScrn.png";
import project4 from "../images/PassGen.png"

const UseStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "5rem auto"
    }
});

const portfolio = () => {
    const classes = UseStyles()
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container justify="center">
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 1"
                                height="200"
                                image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Laborum ad laborum reprehenderit ea laborum nisi.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                        
                    </Card>
                </Grid>
                {/* Project 2 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 2"
                                height="200"
                                image={project2}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 2
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Velit adipisicing pariatur ipsum tempor consectetur aute fugiat aliqua laborum irure consequat commodo occaecat nulla.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                                </Button>
                            <Button size="small" color="primary">
                                Live Demo
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* Project 3 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 3"
                                height="200"
                                image={project3}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 3
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Consectetur ullamco consequat ad duis qui proident dolor commodo magna.
                                </Typography>
                            </CardContent>                        
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                {/* Project 4 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 4"
                                height="200"
                                image={project4}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 4
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Sunt minim duis qui qui nostrud ex id aliqua eu. Labore adipisicing do tempor occaecat veniam sunt laboris nostrud sit in consectetur veniam aliquip ut.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                                </Button>
                            <Button size="small" color="primary">
                                Live Demo
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            Hello from Portfolio
        </Box>
    )
}

export default portfolio
