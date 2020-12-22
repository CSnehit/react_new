import React from "react";
import { AppBar, Toolbar, Grid, Card, CardContent, CardMedia, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Data from "../Data.js";
// import img from "../img1.png"
import logo from "../logo.jpg"

const useStyles = makeStyles({
    carddexContainer: {
        paddingTop: "40px",
        paddingLeft: "40px",
        paddingRight: "40px",
    },
    CardMedia: {
        margin: "auto",
    },
    logo: {
        maxWidth: 140,
    },
});


const Carddex = () => {
    const classes = useStyles();
    const [cardData, setCardData] = useState(Data);

    const getCard = (cardId) => {
        console.log(cardData[`${cardId}`]);
        const { id, name, cost, disc, url } = cardData[`${cardId}`];

        return (
            <Grid item xs={6} sm={3}>
                <Card style={{
                    // backgroundColor: "#dde1e7", 
                    borderRadius: "15px", 
                    boxShadow: "-3px -3px 5px #ffffff70, 3px 3px 15px #00000070"}}>
                    <CardMedia
                        className={classes.classMedia}
                        image={`${url}`}
                        // image={img}
                        // image="C:/Users/Arcane/Documents/Project/React/assignment/public/images/img1.png"
                        // square imageUrl="/images/img2.png"
                        style={{ width: "auto", height: "200px", borderRadius: "10px" }}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography>{`${id}.${name}`} </Typography>
                        <Typography style={{ color: "gray" }}>{`${cost}`} </Typography>
                        <Typography style={{ color: "green" }}>{`${disc}`} </Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
    };
    return (
        <>
            <AppBar position="static" style={{ background: '#ffffff', color: "#000000" }} >
                <Toolbar background-color="white" style={{ display: "flex", justifyContent: "space-between" }} >
                    <div style={{ paddingRight: "100px" }}>
                        <img src={logo} alt="logo" className={classes.logo} />
                    </div>

                    <div style={{ display: "flex" }} >
                        <Typography variant="h6" className={classes.title} style={{ paddingRight: "40px" }}>
                            Explore
    </Typography>
                        <Typography variant="h6" className={classes.title} style={{ paddingRight: "40px" }}>
                            My NFTs
    </Typography>
                        <Button variant="contained" >connect</Button>
                    </div>

                </Toolbar>
            </AppBar>
            <div style={{ paddingLeft: "150px", paddingRight: "80px", paddingTop: "20px" }}>
                <h1 >Your Collection</h1>
            </div>

            <div style={{ paddingLeft: "150px", paddingRight: "150px" }}>
                <Grid container spacing={4} className={classes.carddexContainer}>
                    {Object.keys(cardData).map((cardId) =>
                        getCard(cardId)
                    )}
                </Grid>
            </div>
        </>
    )
}
export default Carddex;