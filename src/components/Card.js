import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    borderRadius: 20,
  },
  title: {
    fontSize: 25,
    textAlign: "left",
    fontWeight: "normal",
    color: "#000",
  },
  date: {
    marginBottom: 1,
    textAlign: "left",
    fontSize: 12,
  },
  bestprice: {
    backgroundColor: "#d71a62",
    borderRadius: 8,
  },
  price: {
    marginLeft: "auto",
    color: "#d71a62",
    fontWeight: "bold",
    fontSize: 25,
  },
  cardcontent: {
    paddingBottom: 0,
  },
  cardaction: {
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 15,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardcontent}>
        <Typography className={classes.title} color="textSecondary">
          Wednesday
        </Typography>
        <Typography className={classes.date} color="textSecondary">
          5th February
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardaction}>
        <Chip
          size="small"
          label="Best Price"
          color="secondary"
          className={classes.bestprice}
        />
        <Button size="large" color="secondary" className={classes.price}>
          &pound;67 <ArrowForwardIosIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
