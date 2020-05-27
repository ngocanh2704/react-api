import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  actAddProductRequest,
  actGetProductRequest,
  actUpdateProductRequest,
} from "../../actions/index";

const ProductActionPage = (props) => {
  const dispatch = useDispatch();
  const itemEditing = useSelector((state) => state.itemEditing);

  const getProductRequest = (id) => dispatch(actGetProductRequest(id));
  const updateProduct = (product) => dispatch(actUpdateProductRequest(product));

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

  const clearState = () => {
    setState({
      ...state,
      id: "",
      txtName: "",
      txtPrice: "",
      chkbStatus: "",
    });
  };

  const onSave = (e) => {
    e.preventDefault();
    var { txtName, txtPrice, chkbStatus } = state;
    if (id) {
      updateProduct({
        id: id,
        name: txtName,
        price: txtPrice,
        status: chkbStatus,
      });
      clearState()
    } else {
      
      dispatch(
        actAddProductRequest({
          name: txtName,
          price: txtPrice,
          status: chkbStatus,
        })
      );
    }
    test.goBack();
  };

  useEffect(() => {
    if (id) {
      getProductRequest(id);
    }
    //tat loi React Hook useEffect has a missing dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setState({
      id: itemEditing.id,
      txtName: itemEditing.name,
      txtPrice: itemEditing.price,
      chkbStatus: itemEditing.status,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemEditing.id]);

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
            value={txtName || ''}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Giá: </label>
          <input
            type="text"
            className="form-control"
            name="txtPrice"
            value={txtPrice || ''}
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
              checked={!!chkbStatus}
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
