import "./index.css";

const Breadcrumb = (props) => {
  const { disp_order_id, order_status, onApproveOrder } = props;

  const approveBtnText =
    order_status === "Approved" ? "Cancel order" : "Approve Order";

  const approveOrder = () => {
    onApproveOrder(disp_order_id);
  };
  return (
    <div className="order-screen-breadcrumb">
      <p className="order-from-back-end">
        Orders{` > `}
        <span>Order {disp_order_id}</span>
      </p>
      <div className="order-screen-header">
        <h1 className="order-screen-header-heading">Order {disp_order_id}</h1>
        <div className="order-action-button-container1">
          <button
            className="order-screen-header-btn white-bg-btn"
            type="button"
          >
            Back
          </button>
          <button
            className="order-screen-header-btn green-bg-btn"
            onClick={approveOrder}
            type="button"
          >
            {approveBtnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
