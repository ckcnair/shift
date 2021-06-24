import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 400,
  },
  slider: {
    color: "#d71a62",
    height: 8,
  },
  thumb: {
    color: "#d71a62",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
  title: {
    fontSize: 20,
    textAlign: "left",
    fontWeight: "bold",
    color: "#000",
  },
});

function valuetext(value) {
  return `${value}pm`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([2, 10]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom className={classes.title}>
        Your Pickup between 2pm and 10pm
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        className={classes.slider}
      />
    </div>
  );
}
