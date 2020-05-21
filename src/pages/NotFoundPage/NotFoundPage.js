import React from "react";

const NotFoundPage = () => {
  return (
    <div className="container">
      <div className="alert alert-warning">
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-hidden="true"
        >
          &times;
        </button>
        <strong>Không tìm thấy trang!</strong>
      </div>
    </div>
  );
};
export default NotFoundPage;
