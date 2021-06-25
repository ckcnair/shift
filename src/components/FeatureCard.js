import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "inline",
    maxWidth: 100,
    backgroundColor: "#f9fafc",
    objectFit: "none",
    width: "12%",
  },
  title: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
    color: "#000",
  },
  media: {
    height: 40,
    objectFit: "scale-down",
  },
  carddiv: {
    backgroundColor: "#f9fafc",
    padding: "10px",
  },
});

export default function FeatureCard({ image, title }) {
  const classes = useStyles();
  return (
    <div className={classes.carddiv}>
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
    </div>
  );
}
