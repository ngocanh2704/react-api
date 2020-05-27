import {
  FETCH_PRODUCTS,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  UPDATE_PRODUCT,
} from "./actionTypes";
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

export const actAddProductRequest = (product) => {
  return (dispatch) => {
    return apiCaller(`products`, "POST", product).then((res) =>
      dispatch(actAddProduct(res.data))
    );
  };
};

export const actAddProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product,
  };
};

export const actGetProductRequest = (id) => {
  return (dispatch) => {
    return apiCaller(`products/${id}`, "GET", null).then((res) =>
      dispatch(actGetProduct(res.data))
    );
  };
};

export const actGetProduct = (product) => {
  return {
    type: EDIT_PRODUCT,
    product,
  };
};

export const actUpdateProductRequest = (product) => {
  console.log(product)
  return (dispatch) => {
    return apiCaller(`products/${product.id}`, "PUT", product).then((res) =>
      dispatch(actUpdateProduct(res.data))
    );
  };
};

export const actUpdateProduct = (product) => {
  return {
    type: UPDATE_PRODUCT,
    product,
  };
};
