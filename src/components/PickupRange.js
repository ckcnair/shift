import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: "100%",
    paddingTop: 15,
    paddingBottom: 15,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#000",
    paddingBottom: 5,
  },
  highlight: {
    color: "#d71a62",
  },
});

function valuetext(value) {
  return `${value}pm`;
}

function RangeSlider(props) {
  const classes = useStyles();
  const [value, setValue] = useState([14, 22]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log("called handle change");
  };

  return (
    <div className={classes.root}>
      <div id="range-slider" gutterBottom className={classes.title}>
        Your Pickup will be between{" "}
        <span className={classes.highlight}>2pm</span> and{" "}
        <span className={classes.highlight}>10pm</span>
      </div>

      <TimeSlider
        step={props.step}
        defaultValue={props.defaultValue}
        max={props.max}
        handleChange={props.handleChange}
        onChange={handleChange}
        value={value}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
      />
    </div>
  );
}

const TimeSlider = withStyles({
  root: {
    color: "#d71a62",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "5px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default RangeSlider;
