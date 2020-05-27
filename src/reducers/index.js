import { combineReducers } from "redux";
import products from "./products";
import itemEditing from './itemEditing'

const allReducers = combineReducers({ products, itemEditing });

export default allReducers;
