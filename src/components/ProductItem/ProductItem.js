import React from "react";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const onDelete = (id) => {
    if (confirm("Bạn có chắc chắn muốn xóa ?")) {//eslint-disable-line
      props.onDelete(id);
    }
  };

  var { product, index } = props;
  var statusName = product.status ? "Còn Hàng" : "Hết Hàng";
  var statusClass = product.status ? "warning" : "default";
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        <span className={`label label-${statusClass}`}>{statusName}</span>
      </td>
      <td>
        <Link
          to={`product/edit/${product.id}`}
          className="btn btn-success mr-10"
        >
          Sửa
        </Link>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDelete(product.id)}
        >
          Xóa
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
