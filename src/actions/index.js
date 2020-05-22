import { FETCH_PRODUCTS } from "./actionTypes";
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
