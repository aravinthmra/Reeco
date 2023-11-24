import './OrderTable.css'

const OrderTable = () =>{
    return (
    <div className="table-header">
        <div className="table-header-cell product-name1">Product Name</div>
        <div className="table-header-cell">Brand</div>
        <div className="table-header-cell">Price</div>
        <div className="table-header-cell">Quantity</div>
        <div className="table-header-cell">Total</div>
        <div className="table-header-cell product-name1">Status</div>
    </div>
    );
}
  
export default OrderTable;