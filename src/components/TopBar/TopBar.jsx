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
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link, useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CartContext from "../../context/cart.context";
import { useContext } from "react";
const style = {
  "&:hover": {
    backgroundColor: "#1976D2",
    color: "white",
  },
};
export default function TopBar() {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

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
            <Button
              onClick={() => navigate("/cart")}
              color="inherit"
              variant="outlined"
              sx={style}
            >
              {cart.length === 0 ? (
                <AddShoppingCartIcon />
              ) : (
                <ShoppingCartIcon />
              )}
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              onClick={() => navigate("wishList")}
            >
              <FavoriteBorderIcon />
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
