import React from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useSelector } from "react-redux";
import axios from "axios";

const ProductListPage = () => {
  // const products = useSelector((state) => state.products);
  var products = [];

  axios({
    method: "GET",
    url: "http://localhost:3000/products",
    data: null,
  })
    .then((res) => (products = res.data))
    .catch((err) => console.log(err));

  const showProducts = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem key={index} product={product} index={index} />;
      });
    }
    return result;
  };
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <button type="button" className="btn btn-info mb-10">
        Thêm sản phẩm
      </button>

      <ProductList>{showProducts(products)}</ProductList>
    </div>
  );
};
export default ProductListPage;
