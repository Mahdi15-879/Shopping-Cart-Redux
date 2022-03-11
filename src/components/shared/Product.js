import React from "react";
import { Link } from "react-router-dom";

// Functions
import { shorten } from "../../helpers/function";

const Product = ({ productData }) => {
  return (
    <div>
      <img src={productData.image} alt="Product" style={{ width: "200px" }} />
      <h3>{shorten(productData.title)}</h3>
      <p>${productData.price}</p>
      <div>
        <Link to={`/products/${productData.id}`}>details</Link>
        <div>
          <button>add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
