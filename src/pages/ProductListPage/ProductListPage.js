import React, { useEffect } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
// import { useSelector } from "react-redux";
import apiCaller from "../../utils/apiCaller";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actFetchProducsRequest, actDeleteProductRequest } from "../../actions";

const ProductListPage = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const fetchAllProducts = () => dispatch(actFetchProducsRequest());

  useEffect(() => {
    apiCaller("products", "GET", null).then((res) =>
      fetchAllProducts(res.data)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDelete = (id) => {
    dispatch(actDeleteProductRequest(id));
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
