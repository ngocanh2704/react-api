import React, { useState } from "react";
import apiCaller from "../../utils/apiCaller";
import { Link } from "react-router-dom";

const ProductActionPage = (props) => {
  const [state, setState] = useState({
    id: "",
    txtName: "",
    txtPrice: "",
    chkbStatus: "",
  });

  const onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    setState({
      ...state,
      [name]: value,
    });
  };

  const onSave = (e) => {
    e.preventDefault();
    var { txtName, txtPrice, chkbStatus } = state;
    var { history } = props;
    apiCaller("products", "POST", {
      name: txtName,
      price: txtPrice,
      status: chkbStatus,
    }).then((res) => history.goBack());
  };

  var { txtName, txtPrice, chkbStatus } = state;

  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <form onSubmit={onSave}>
        <div className="form-group">
          <label>Tên sản phẩm: </label>
          <input
            type="text"
            className="form-control"
            name="txtName"
            defaultValue={txtName}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Giá: </label>
          <input
            type="text"
            className="form-control"
            name="txtPrice"
            defaultValue={txtPrice}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Trạng Thái: </label>
        </div>

        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              name="chkbStatus"
              defaultValue={chkbStatus}
              onChange={onChange}
            />
            Còn Hàng
          </label>
        </div>

        <button type="submit" className="btn btn-primary mr-10">
          Lưu lại
        </button>
        <Link to="/products-list" className="btn btn-danger ">
          Hủy
        </Link>
      </form>
    </div>
  );
};

export default ProductActionPage;
