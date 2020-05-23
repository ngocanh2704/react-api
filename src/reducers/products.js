import { FETCH_PRODUCTS, DELETE_PRODUCT } from "../actions/actionTypes";

var initialState = [];

const findIndex = (data, id) => {
  var result = -1;
  data.forEach((product, index) => {
    if (product.id === id) {
      result = index;
    }
  });
  return result;
};

const products = (state = initialState, action) => {
  var index = -1;
  switch (action.type) {
    case FETCH_PRODUCTS:
      state = action.products;
      return [...state];
    case DELETE_PRODUCT:
      index = findIndex(state, action.id);
      state.splice(index, 1);
      return [...state];
    default:
      return [...state];
  }
};

export default products;
