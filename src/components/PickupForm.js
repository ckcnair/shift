import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(12, 4),
  },
  textFieldInput: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  editbtn: {
    backgroundColor: "#d71a62",
    borderRadius: 20,
    marginLeft: "auto",
  },
  chip: {
    backgroundColor: "#d71a62",
    textAlign: "right",
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
        <Grid item xs={12} sm={6}>
          <Grid container justify="center" spacing="2">
            <Grid item xs={5}>
              <InputLabel htmlFor="inventoryId">Inventory</InputLabel>
            </Grid>
            <Grid item xs={4}>
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
                Edit
              </Button>
            </Grid>
            <Grid item xs={5}>
              <InputLabel htmlFor="pickupid">Pickup</InputLabel>
            </Grid>
            <Grid item xs={4}>
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
                Edit
              </Button>
            </Grid>
            <Grid item xs={5}>
              <InputLabel htmlFor="dropoffid">Drop-off</InputLabel>
            </Grid>
            <Grid item xs={4}>
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
                Edit
              </Button>
            </Grid>
            <Grid item xs={7}>
              <InputLabel htmlFor="twopeople">
                Do you require 2 people?
              </InputLabel>
            </Grid>
            <Grid item xs={2}>
              &nbsp;
            </Grid>
            <Grid item xs={3}>
              <Checkbox
                id="twopeople"
                inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                style={{ color: "#d71a62" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default PickupForm;
