import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Checkbox from "@material-ui/core/Checkbox";
import FeatureCard from "./FeatureCard";
import shifter from "../static/images/shifter.png";
import van from "../static/images/van.png";
import pc from "../static/images/pc.png";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(18, 4),
  },
  textFieldInput: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  editbtn: {
    backgroundColor: "#d71a62",
    borderRadius: 20,
    marginLeft: "auto",
    height: 30,
    textTransform: "none",
    fontWeight: "normal",
  },
  chip: {
    backgroundColor: "#d71a62",
    textAlign: "right",
  },
  inputlabel: {
    textAlign: "left",
  },
  rightalign: {
    textAlign: "right",
  },
  chkbox: {
    color: "#d71a62",
    transform: "scale(1.5)",
  },
}));
const PickupForm = () => {
  const classes = useStyles();
  const [isInventoryVisible, setIsInventoryVisible] = useState(false);
  const [isPickupVisible, setIsPickupVisible] = useState(false);
  const [isDropOffVisible, setIsDropOffVisible] = useState(false);

  return (
    <Container component="section" className={classes.root}>
      <Grid container spacing="3" alignItems="center" justify="center">
        <Grid item xs={12} sm={4}>
          <Grid container justify="center" spacing="1">
            <Grid item xs={3} alignItems="left">
              <InputLabel htmlFor="inventoryId" className={classes.inputlabel}>
                Inventory
              </InputLabel>
            </Grid>
            <Grid item xs={6} className={classes.rightalign}>
              {isInventoryVisible ? (
                <TextField
                  size="medium"
                  id="inventoryId"
                  variant="outlined"
                  visibility="hidden"
                  fullWidth
                  InputProps={{
                    classes: {
                      input: classes.textFieldInput,
                    },
                  }}
                />
              ) : (
                <Chip
                  size="medium"
                  label="2 x Items"
                  color="secondary"
                  className={classes.chip}
                />
              )}
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.editbtn}
                onClick={() => setIsInventoryVisible(!isInventoryVisible)}
                id="inventory"
              >
                edit
              </Button>
            </Grid>
            <Grid item xs={3} alignItems="left">
              <InputLabel htmlFor="pickupid" className={classes.inputlabel}>
                Pickup
              </InputLabel>
            </Grid>
            <Grid item xs={6} className={classes.rightalign}>
              {isPickupVisible ? (
                <TextField
                  id="pickupid"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    classes: {
                      input: classes.textFieldInput,
                    },
                  }}
                />
              ) : (
                <Chip
                  size="medium"
                  label="The Old Shippen, Ivybridge"
                  color="secondary"
                  className={classes.chip}
                />
              )}
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.editbtn}
                id="pickup"
                onClick={() => setIsPickupVisible(!isPickupVisible)}
              >
                edit
              </Button>
            </Grid>
            <Grid item xs={3}>
              <InputLabel htmlFor="dropoffid" className={classes.inputlabel}>
                Drop-off
              </InputLabel>
            </Grid>
            <Grid item xs={6} className={classes.rightalign}>
              {isDropOffVisible ? (
                <TextField
                  size="medium"
                  id="dropoffid"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    classes: {
                      input: classes.textFieldInput,
                    },
                  }}
                />
              ) : (
                <Chip
                  size="medium"
                  label="Broadmoor Farm, Beworth"
                  color="secondary"
                  className={classes.chip}
                />
              )}
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.editbtn}
                id="dropoff"
                onClick={() => setIsDropOffVisible(!isDropOffVisible)}
              >
                edit
              </Button>
            </Grid>
            <Grid item xs={7}>
              <InputLabel htmlFor="twopeople" className={classes.inputlabel}>
                Do you require 2 people?
              </InputLabel>
            </Grid>
            <Grid item xs={2}>
              &nbsp;
            </Grid>
            <Grid item xs={3}>
              <Checkbox
                id="twopeople"
                size="medium"
                inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                className={classes.chkbox}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing="3" alignItems="center" justify="center">
        <Grid item xs={12} sm={6}>
          <Grid container justify="center" spacing="1">
            <Grid item xs={4}>
              <FeatureCard
                image={shifter}
                title={"A vetted and rated shifter"}
              />
            </Grid>
            <Grid item xs={4}>
              <FeatureCard
                image={van}
                title={"Big enogh to fit everything in"}
              />
            </Grid>
            <Grid item xs={4}>
              <FeatureCard image={pc} title={"Fixed price, no matter what!"} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default PickupForm;
