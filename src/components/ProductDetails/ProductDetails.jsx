import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getSingleProduct from "../../services/getSingleProduct";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Select,
  MenuItem,
  Stack,
  CardContent,
  Rating,
  CardActions,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardMedia from "@mui/material/CardMedia";
import WishListContext from "../../context/wish.context";
import CartContext from "../../context/cart.context";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToWishList, removeFromWishList, wishList } =
    useContext(WishListContext);
  const { addToCart, removeFromCart, cart, handleQuantityChange } =
    useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProductDetails() {
      const res = await getSingleProduct(id);
      if (res.isSuccess) {
        setProduct(res.data);
      }
    }

    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <CardMedia
          sx={{
            display: "block",
            margin: "auto",
            width: "75%",
            height: "75%",
            objectFit: "contain",
            marginTop: "50px",
          }}
          component="img"
          image={product.image}
          alt={product.title}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardContent
          component="div"
          sx={{
            marginTop: "80px",
            "&:hover": {
              boxShadow: "0 0 10px black",
            },
          }}
        >
          <Typography>
            {wishList.some((products) => products.id === product.id) ? (
              <Button
                variant="text"
                style={{ border: "none" }}
                onClick={() => removeFromWishList(product.id)}
              >
                <FavoriteIcon color="error" />
                Remove from WishList
              </Button>
            ) : (
              <Button
                variant="text"
                style={{ border: "none" }}
                onClick={() => addToWishList(product)}
              >
                <FavoriteBorderIcon />
                Add to wishList
              </Button>
            )}
          </Typography>
          <Typography
            variant="h5"
            color="textSecondary"
            gutterBottom
            sx={{ padding: "16px", fontWeight: "bold" }}
          >
            {product.title}
          </Typography>
          <Rating
            name="read-only"
            value={product.rating.rate}
            readOnly
            precision={0.5}
            sx={{
              color: product.rating.rate < 3 ? "yellow" : "green",
              marginRight: 1,
            }}
          />
          <Typography variant="subtitle1" sx={{ padding: "16px" }}>
            {" "}
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </Typography>
          <Typography variant="body1" sx={{ padding: "16px" }}>
            {" "}
            Description: {product.description}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ padding: "16px", fontWeight: "bold" }}
          >
            {" "}
            Price: ${product.price}
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6}>
              <Select
                label="Quantity"
                defaultValue={1}
                sx={{ padding: "16px" }}
              >
                {" "}
                {[1, 2, 3, 4, 5].map((value) => (
                  <MenuItem key={value} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6}>
              <CardActions
                style={{
                  display: "block",
                  margin: "30px auto",
                  textAlign: "center",
                }}
              >
                {cart.some((products) => products.id === product.id) ? (
                  <>
                    <Button
                      onClick={() => removeFromCart(product.id)}
                      variant="contained"
                    >
                      <ShoppingCartIcon /> Remove From Cart
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => navigate("/cart")}
                    >
                      Go to Cart
                    </Button>
                  </>
                ) : (
                  <Button
                    onClick={() => addToCart(product, 1)}
                    variant="outlined"
                  >
                    <AddShoppingCartIcon /> Add To Cart
                  </Button>
                )}
              </CardActions>
            </Grid>
          </Grid>
        </CardContent>
      </Grid>
    </Grid>
  );
}
