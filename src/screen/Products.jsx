import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "./Data";

const Products = () => {
  let { id } = useParams();
  let filterData = productData.filter((e) => {
    return e.id == id;
  });
  console.log(filterData)
  return (
    <div>
      <h1>Product Details</h1>
      {filterData.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <img src={item.image} alt={item.name} />
        </div>
      ))}
      <button onClick={() => window.history.back()}>Go Back</button>
      <button onClick={() => window.location.reload()}>Refresh</button>
    </div>
  );
};

export default Products;
