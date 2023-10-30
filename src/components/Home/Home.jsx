import { useEffect, useState } from "react";
import { Grid, Tab, Tabs } from "@mui/material";
import getAllCategories from "../../services/getAllCategories";
import getByCategory from "../../services/getByCategory";
import ProductCard from "../ProductCard/ProductCard";

export default function Home() {
  const [type, setType] = useState(0);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  async function allCategories() {
    const res = await getAllCategories();
    if (res.isSuccess) {
      setData(res.data);
    }
  }
  async function getSingleCategory() {
    let params;
    if (type === 0) params = "electronics";
    if (type === 1) params = "jewelery";
    if (type === 2) params = "men's clothing";
    if (type === 3) params = "women's clothing";
    const res = await getByCategory(params);
    if (res.isSuccess) {
      setCategory(res.data);
    }
  }

  useEffect(() => {
    allCategories();
    getSingleCategory();
  }, [type]);

  return (
    <div >
      <Tabs
        value={type}
        onChange={(event, newValue) => {
          setType(newValue);
        }}
        style={{
            backgroundColor: "white",
            position: "fixed",
            top: "60px", 
            left: "0",
            right: "0",
            zIndex: 1,
          }}
        aria-label="disabled tabs example"
      >
        {data &&
          data.map((e, i) => {
            return (
              <Tab key={i} style={{ width: "23%", color: "black" }} label={e} />
            );
          })}
      </Tabs>
      <Grid container spacing={2} style={{ marginTop: "80px" }}>
        {category &&
          category.map((e) => {
            console.log(category);
            return (
              <ProductCard
                key={e.id}
                id={e.id} 
                title={e.title}
                rating={e.rating.rate}
                count={e.rating.count}
                category={e.category}
                desc={e.description}
                img={e.image}
                price={e.price}
              />
            );
          })}
      </Grid>
    </div>
  );
}
