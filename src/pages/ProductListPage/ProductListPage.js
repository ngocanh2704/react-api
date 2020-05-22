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

  const onDelete = (id) => {
    apiCaller(`products/${id}`, "DELETE", null).then((res) => {
      if (res.status === 200) {
        var index = findIndex(products, id);
        var newData = products.splice(index, 1)
        console.log(newData)
        setProducts(newData)
      }
    });
  };

  const findIndex = (data, id) => {
    var result = -1;
    data.forEach((product, index) => {
      if (product.id === id) {
        result = index;
      }
    });
    return result;
  };

  const showProducts = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={onDelete}
          />
        );
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
