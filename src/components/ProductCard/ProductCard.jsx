import React, { useState } from "react";
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
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  title,
  rating,
  count,
  category,
  desc,
  img,
  price,
}) => {
  const maxLength = 100;
  const maxLengthForTitle = 18;
  const [isReadMore, setIsReadMore] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
console.log(id)
  const updatedDesc = isReadMore ? desc : `${desc.slice(0, maxLength)}`;
  const updatedTitle = isReadMore
    ? title
    : `${title.slice(0, maxLengthForTitle)}`;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Link to={`/product/${id}`}>
        <Card sx={{ position: "relative" }}>
          <IconButton
            sx={{
              position: "absolute",
              top: "8px",
              right: "8px",
              backgroundColor: "white",
              zIndex: 1,
            }}
            onClick={() => setIsInWishlist(!isInWishlist)}
          >
            {isInWishlist ? (
              <FavoriteIcon color="error" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
          <CardMedia
            component="img"
            alt={title}
            image={img}
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
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              {updatedTitle}{" "}
              {title.length >= maxLengthForTitle && (
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
              Description: {updatedDesc}
              {desc.length >= maxLength && (
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
                value={rating}
                readOnly
                sx={{
                  color: rating < 3 ? "yellow" : "green",
                  marginRight: 1,
                }}
              />
              <Typography variant="body2" color="textSecondary">
                ({count} reviews)
              </Typography>
            </Box>
            <Stack
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
            </Stack>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default ProductCard;
