import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

const getProductsDetail = async (id) => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data;
};

export { getProducts, getProductsDetail };
