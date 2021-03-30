import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Shoes",
    price: "125",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptatum?",
  },
  {
    id: 2,
    name: "Bags",
    price: "105",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptatum?",
  },
];

const ProductsList = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products &&
          products.map((product) => {
            // console.log(product);
            return (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} />
              </Grid>
            );
          })}
      </Grid>
    </main>
  );
};

export default ProductsList;
