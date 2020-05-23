import { FETCH_PRODUCTS, DELETE_PRODUCT } from "./actionTypes";
import apiCaller from "../utils/apiCaller";

export const actFetchProducs = (products) => {
  return {
    type: FETCH_PRODUCTS,
    products,
  };
};

export const actFetchProducsRequest = () => {
  return (dispatch) => {
    return apiCaller("products", "GET", null).then((res) => {
      dispatch(actFetchProducs(res.data));
    });
  };
};

export const actDeleteProductRequest = (id) => {
  return (dispatch) => {
    return apiCaller(`products/${id}`, "DELETE", null).then((res) =>
      dispatch(actDeleteProduct(id))
    );
  };
};

export const actDeleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    id,
  };
};
