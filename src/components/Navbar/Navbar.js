import cart from '../../assets/images/cart.png'
import reecoLogoWhiteText from '../../assets/images/reecoLogoWhiteText.png'
import './Navbar.css'


const Navbar = (props) => {
  const {count} = props;
    return(
        <nav className="order-screen-nav">
          <ul className="order-screen-menus-container">
          <li className="order-screen-nav-item nav-logo">
            <img className="main-logo1" src={reecoLogoWhiteText} alt="logo" />
          </li>
          <li className="order-screen-nav-item">Store</li>
          <li className="order-screen-nav-item">Orders</li>
          <li className="order-screen-nav-item">Analytics</li>
          </ul>
          <ul className="order-screen-menus-container right-menus">
          <li className="order-screen-nav-item cart-container1">            
            <p className="cart-count-para">{count}</p>
            <img className="order-screen-nav-item-img" src={cart} alt="cart" />
          </li>
          <li className="order-screen-nav-item">Hello, James</li>
          </ul>
        </nav>
    )
}

export default Navbar;