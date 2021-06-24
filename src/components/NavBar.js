import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const NavBar = () => {
  return (
    <div>
      <AppBar position="fixed" style={{ background: "#d71a62" }}>
        <ToolBar>
          <Typography
            variant="h2"
            color="inherit"
            style={{
              fontWeight: "bold",
            }}
          >
            shift
          </Typography>
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default NavBar;
