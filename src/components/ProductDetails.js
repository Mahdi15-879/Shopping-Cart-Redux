import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// API
import { getProductsDetail } from "../services/api";

// Style
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [load, setLoad] = useState(true);

  const params = useParams();
  const id = params.id;
  // const data = useContext(ProductsContext);
  // const product = data[id - 1];
  // const { image, title, description, price, category } = product;
  useEffect(() => {
    const fetchAPI = async () => {
      setProduct(await getProductsDetail(id));
      setLoad(false);
    };

    fetchAPI();
  }, []);

  return (
    <div className={styles.container}>
      {load === true ? (
        <h2 className={styles.loading}>Loading...</h2>
      ) : (
        <div className={styles.bodyContainer}>
          <img className={styles.image} src={product.image} alt="product" />
          <div className={styles.textContainer}>
            <h3>{product.title}</h3>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.category}>
              <span>Category:</span> {product.category}
            </p>
            <div className={styles.buttonContainer}>
              <span className={styles.price}>${product.price}</span>
              <Link to="/products">Back to Shop</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
