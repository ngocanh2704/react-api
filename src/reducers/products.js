import { FETCH_PRODUCTS } from "../actions/actionTypes";

var initialState = [];

const products = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      state = action.products;
      return [...state];
    default:
      return [...state];
  }
};

export default products;
