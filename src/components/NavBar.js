import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    backgroundColor: "#d71a62",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
});
const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" className={classes.root}>
        <ToolBar>
          <Typography className={classes.title} component="h2">
            shift
          </Typography>
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default NavBar;
