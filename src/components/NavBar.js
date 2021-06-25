import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    backgroundColor: "#d71a62",
    padding: 10,
  },
  title: {
    fontSize: 55,
    fontWeight: "bold",
    flexGrow: 1,
    align: "center",
  },
});
const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" className={classes.root}>
        <ToolBar>
          <Typography className={classes.title}>shift</Typography>
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default NavBar;
