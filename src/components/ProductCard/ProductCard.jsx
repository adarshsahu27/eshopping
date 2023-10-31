import React, { useContext, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Stack,
  IconButton,
  Rating,
  Box,
  CardActions,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import WishListContext from "../../context/wish.context";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CartContext from "../../context/cart.context";

const ProductCard = ({ data }) => {
  const maxLength = 100;
  const maxLengthForTitle = 18;
  const [isReadMore, setIsReadMore] = useState(false);
  const { addToWishList, removeFromWishList, wishList } =
    useContext(WishListContext);
  const { addToCart, removeFromCart, cart, input } = useContext(CartContext);

  const { id, title, rating, count, category, description, image, price } =
    data;
  console.log(data);
  const updateddescription = description
    ? isReadMore
      ? description
      : description.slice(0, maxLength)
    : "";
  const updatedTitle = title
    ? isReadMore
      ? title
      : title.slice(0, maxLengthForTitle)
    : "";

  return (
    <>
      {data && (
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ position: "relative" }}>
            <Typography>
              {wishList.some((product) => product.id === id) ? (
                <Button
                  variant="text"
                  style={{ border: "none" }}
                  onClick={() => removeFromWishList(id)}
                >
                  <FavoriteIcon color="error" />
                </Button>
              ) : (
                <Button
                  variant="text"
                  style={{ border: "none" }}
                  onClick={() => addToWishList(data,input)}
                >
                  <FavoriteBorderIcon />
                </Button>
              )}
            </Typography>
            <Link to={`/product/${id}`}>
              <CardMedia
                component="img"
                alt={title}
                image={image}
                title={title}
                sx={{
                  display: "block",
                  margin: "auto",
                  width: "180px",
                  height: "200px",
                  objectFit: "contain",
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  {updatedTitle}{" "}
                  {title && title.length >= maxLengthForTitle && (
                    <span
                      style={{
                        cursor: "pointer",
                        color: "blue",
                        marginLeft: "5px",
                      }}
                      onClick={() => setIsReadMore(!isReadMore)}
                    >
                      {isReadMore ? "Show less" : "...Read more"}
                    </span>
                  )}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Category: {category}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  descriptionription: {updateddescription}
                  {description && description.length >= maxLength && (
                    <span
                      style={{
                        cursor: "pointer",
                        color: "blue",
                        marginLeft: "5px",
                      }}
                      onClick={() => setIsReadMore(!isReadMore)}
                    >
                      {isReadMore ? "Show less" : "...Read more"}
                    </span>
                  )}
                </Typography>
                <Typography variant="body1">Price: ${price}</Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Rating
                    name="read-only"
                    value={rating.rate}
                    readOnly
                    precision={0.5}
                    sx={{
                      color: rating.rate < 3 ? "yellow" : "green",
                      marginRight: 1,
                    }}
                  />
                  <Typography variant="body2" color="textSecondary">
                    ({count} reviews)
                  </Typography>
                </Box>
                {/* <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "20px 0",
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{ fontWeight: "bold" }}
                    startIcon={<ShoppingCartIcon />}
                  >
                    Add to Cart
                  </Button>
                </Stack> */}
              </CardContent>
            </Link>
            <CardActions
              style={{
                display: "block",
                margin: "30px auto",
                textAlign: "center",
              }}
            >
              {cart.some((product) => product.id === data.id) ? (
                <Button
                  onClick={() => removeFromCart(data.id)}
                  variant="contained"
                >
                  {" "}
                  <ShoppingCartIcon /> Remove From Cart
                </Button>
              ) : (
                <Button onClick={() => addToCart(data, 1)} variant="outlined">
                  <AddShoppingCartIcon /> Add To Cart
                </Button>
              )}
            </CardActions>
          </Card>
        </Grid>
      )}
    </>
  );
};

export default ProductCard;
