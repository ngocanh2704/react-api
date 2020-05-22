import React, { useState, useEffect } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
// import { useSelector } from "react-redux";
import apiCaller from "../../utils/apiCaller";
import { Link } from "react-router-dom";

const ProductListPage = () => {
  // const products = useSelector((state) => state.products);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    apiCaller("products", "GET", null).then((res) => setProducts(res.data));
  }, []);

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
      <Link to="/product/add" className="btn btn-info mb-10">
        Thêm sản phẩm
      </Link>

      <ProductList>{showProducts(products)}</ProductList>
    </div>
  );
};
export default ProductListPage;
