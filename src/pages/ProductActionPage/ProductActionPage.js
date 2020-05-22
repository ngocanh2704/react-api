import React, { useState, useEffect } from "react";
import apiCaller from "../../utils/apiCaller";
import { Link, useParams, useHistory } from "react-router-dom";

const ProductActionPage = (props) => {
  const [state, setState] = useState({
    id: "",
    txtName: "",
    txtPrice: "",
    chkbStatus: "",
  });
  var { id } = useParams();
  var test = useHistory();

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
    var { id, txtName, txtPrice, chkbStatus } = state;
    if (id) {
      apiCaller(`products/${id}`, "PUT", {
        name: txtName,
        price: txtPrice,
        status: chkbStatus,
      }).then((res) => {
        test.goBack();
      });
    } else {
      apiCaller("products", "POST", {
        name: txtName,
        price: txtPrice,
        status: chkbStatus,
      }).then((res) => test.goBack());
    }
  };

  useEffect(() => {
    if (id) {
      apiCaller(`products/${id}`, "GET", null).then((res) => {
        setState({
          id: res.data.id,
          txtName: res.data.name,
          txtPrice: res.data.price,
          chkbStatus: res.data.status,
        });
      });
    }
    //tat loi React Hook useEffect has a missing dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var { chkbStatus, txtName, txtPrice } = state;

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
              checked={chkbStatus}
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
