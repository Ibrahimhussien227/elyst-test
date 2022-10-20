import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const whiteColor = { color: "white" };

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">
          <Link style={whiteColor} to="/">
            elyts
          </Link>
        </Typography>
        <Box display="flex" ml={10} gap={4} color="white">
          <Link style={whiteColor} to="/">
            Home
          </Link>
          <Link style={whiteColor} to="/news">
            news
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
