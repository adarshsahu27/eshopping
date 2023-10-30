import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            UL KARt
          </Typography>
          <Stack direction={"row"} spacing={4}>
            <Button color="inherit" variant="outlined">
              Sign In
            </Button>
            <Button color="inherit" variant="outlined">
              Sign Up
            </Button>
            <Button color="inherit" variant="outlined">
              
            <ShoppingCartIcon />
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}
