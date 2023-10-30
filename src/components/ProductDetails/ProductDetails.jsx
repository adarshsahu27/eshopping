import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CardMedia from "@mui/material/CardMedia"; // Import CardMedia for displaying product image

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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
            marginTop: "50px"
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
          <Typography variant="h5" color="textSecondary" gutterBottom sx={{ padding: "16px" , fontWeight:"bold"}}>
            {product.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ padding: "16px" }}>
            {" "}
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </Typography>
          <Typography variant="body1" sx={{ padding: "16px" }}>
            {" "}
            Description: {product.description}
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ padding: "16px", fontWeight:"bold" }}>
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
            </Grid>
          </Grid>
        </CardContent>
      </Grid>
    </Grid>
  );
}
