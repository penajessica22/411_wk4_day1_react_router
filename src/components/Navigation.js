import React from "react";
import { AppBar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton color="inherit"></IconButton>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          FakeCars.com
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
