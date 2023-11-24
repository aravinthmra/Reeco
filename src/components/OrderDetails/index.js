import { Fragment } from "react";
import "./index.css";

const OrderDetails = (props) => {
  const { order, total } = props;
  const { supplier, shipping_date, category, department, status } = order;

  return (
    <Fragment>
      <div className="order-details-item">
        <p className="order-details-item-label">Supplier</p>
        <p className="order-details-item-value">{supplier}</p>
      </div>
      <div className="vl"></div>
      <div className="order-details-item">
        <p className="order-details-item-label">Shipping Date</p>
        <p className="order-details-item-value">{shipping_date}</p>
      </div>
      <div className="vl"></div>
      <div className="order-details-item">
        <p className="order-details-item-label">Order Total</p>
        <p className="order-details-item-value">$ {total}</p>
      </div>
      <div className="vl"></div>
      <div className="order-details-item">
        <p className="order-details-item-label">Category</p>
        <p className="order-details-item-value">{category}</p>
      </div>
      <div className="vl"></div>
      <div className="order-details-item">
        <p className="order-details-item-label">Department</p>
        <p className="order-details-item-value">{department}</p>
      </div>
      <div className="vl"></div>
      <div className="order-details-item status-item">
        <p className="order-details-item-label">Status</p>
        <p className="order-details-item-value">{status}</p>
      </div>
    </Fragment>
  );
};

export default OrderDetails;
