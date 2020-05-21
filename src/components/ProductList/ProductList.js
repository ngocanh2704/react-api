import React from 'react'

const ProductList = () =>{
    return( <div className="panel panel-primary">
    <div className="panel-heading">
      <h3 className="panel-title">Dánh sách sản phẩm</h3>
    </div>
    <div className="panel-body">
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã SP</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Trạng Thái</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>Iphone 6 Plus</td>
            <td>500</td>
            <td>
              <span className="label label-warning">Còn Hàng</span>
            </td>
            <td>
              <button type="button" className="btn btn-success mr-10">
                Sửa
              </button>

              <button type="button" className="btn btn-danger">
                Xóa
              </button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>Iphone 6 Plus</td>
            <td>500</td>
            <td>
              <span className="label label-warning">Còn Hàng</span>
            </td>
            <td>
              <button type="button" className="btn btn-success mr-10">
                Sửa
              </button>

              <button type="button" className="btn btn-danger">
                Xóa
              </button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>Iphone 6 Plus</td>
            <td>500</td>
            <td>
              <span className="label label-warning">Còn Hàng</span>
            </td>
            <td>
              <button type="button" className="btn btn-success mr-10">
                Sửa
              </button>

              <button type="button" className="btn btn-danger">
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>)
}

export default ProductList