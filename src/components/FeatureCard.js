import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import shifter from "../static/images/shifter.png";
import van from "../static/images/van.png";
import pc from "../static/images/pc.png";

const useStyles = makeStyles({
  root: {
    display: "inline",
    maxWidth: 100,
    backgroundColor: "#f9fafc",
    objectFit: "none",
    width: "20%",
  },
  title: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
    color: "#000",
  },
  media: {
    height: 50,
    objectFit: "scale-down",
  },
});

export default function FeatureCard({ image, title }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="70"
          image={image}
          title="Contemplative Reptile"
          className={classes.media}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h5"
            className={classes.title}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
