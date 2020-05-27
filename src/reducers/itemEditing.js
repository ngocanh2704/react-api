import { EDIT_PRODUCT } from "../actions/actionTypes";

var initialState = {};

const itemEditing = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PRODUCT:
      state = action.product
      return {...state};
    default:
      return state;
  }
};

export default itemEditing