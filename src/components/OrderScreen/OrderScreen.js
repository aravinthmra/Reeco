import { Component } from "react";
// component imports
import Navbar from "../Navbar/Navbar";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import OrderDetails from "../OrderDetails/OrderDetails";
import OrderTable from "../OrderTable/OrderTable";
import OrderItems from '../OrderItems/OrderItems'
// data imports
import orders from '../../data/orders.json'
import order_details from '../../data/order_details.json'

import './OrderScreen.css'

class OrderScreen extends Component {
  
  state = {cart_items: [...order_details], orders_list: [...orders], total: 0, searchInput: "", specialBG: ""}

  onSearchInput = (event) => {
    this.setState({searchInput: event.target.value})  
  }

  onClickTick = (id) => {
    const {cart_items} = this.state
    const updatedCartItems = cart_items.map(item => {
      if(item.id === id) {
        item.status = item.status === "Approved" ? "" : "Approved"
      }
      return item
    })
    this.setState({cart_items: updatedCartItems})
  }

  onClickCross = () => {
    console.log("cross clicked")
    this.setState(prevState => ({specialBG: prevState.specialBG === "translucent" ? "" : "translucent"}))
  }

  onMissingOnly = (id) => {
    const {cart_items} = this.state
    const updatedCartItems = cart_items.map(item => {
      if(item.id === id) {
        item.status = "Missing"
      }
      return item
    })
    this.setState({cart_items: updatedCartItems})
  }

  onUrgentlyMissing = (id) => {
    const {cart_items} = this.state
    const updatedCartItems = cart_items.map(item => {
      if(item.id === id) {
        item.status = "Urgent"
      }
      return item
    })
    this.setState({cart_items: updatedCartItems})
  }

  componentDidMount() {
    this.setState({total: order_details.reduce((total, item) => total + item.price * item.quantity, 0)})
  }

  onApproveOrder = (disp_order_id) => {
    const {orders_list} = this.state
    const updatedOrdersList = orders_list.map(order => {
      if(order.order_id === disp_order_id) {
        order.status = order.status === "Approved" ? "Awaiting your approval" : "Approved"
      }
      return order
    })
    this.setState({orders_list: updatedOrdersList})
  }
    
  render() {
    const {cart_items, orders_list, total, searchInput, specialBG} = this.state
    console.log(specialBG)
    
    const disp_order_id = "32457ABC"
    const order = orders_list.find(order => order.order_id === disp_order_id)

    const filteredCartItems = cart_items.filter(item => item.product_name.toLowerCase().includes(searchInput.toLowerCase()))
    
    return(
        <div className={`order-screen-container ${specialBG}`}>

          <Navbar count={filteredCartItems.length}/>

          <Breadcrumb disp_order_id={disp_order_id} order_status={order.status} onApproveOrder={this.onApproveOrder}/>

          <div className="order-details-item-container">
            <OrderDetails order={order} total={total} />
          </div>
          
          <div className="cart-items-container">
            <div className="search-bar-container">
              <input className="search-bar" type="text" placeholder="Search..." onChange={this.onSearchInput} value={searchInput} id="search-bar"/>
              <img className="search-icon" src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" alt="search" />
            </div>

            <div className="order-table">
                <OrderTable />
            </div>

            <ul className="table-body">
              {filteredCartItems.map(item => (
                <OrderItems
                  itemData={item}
                  onClickTick={this.onClickTick}
                  onClickCross={this.onClickCross}
                  onMissingOnly={this.onMissingOnly}
                  onUrgentlyMissing={this.onUrgentlyMissing}
                  key={item.id}
                />
              ))}
            </ul>
          </div>
            

      </div>    
    )
  }
}

export default OrderScreen;