import React from "react";
import { productData } from "./prodctData";

import { Link } from "react-router-dom";
import "./product.css";
import ProductItems from "./ProductItems";

const Products = () => {
  return (
    <ul className="menus5">
    {productData .map((menu, index) => {
      const depthLevel = 0;
      return <ProductItems items={menu} key={index} depthLevel={depthLevel} />;
    })}
  </ul>
  );
};

export default Products;
