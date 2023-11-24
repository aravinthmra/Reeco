import './OrderItems.css'
// asset imports
import avocadoHass from '../../assets/images/avocadoHass.jpg'
import checkSolidGreen from '../../assets/images/checkSolidGreen.svg'
import checkSolidGrey from '../../assets/images/checkSolidGrey.svg'

import crossSolidGrey from '../../assets/images/crossSolidGrey.svg'
import crossSolidOrange from '../../assets/images/crossSolidOrange.svg'
import crossSolidRed from '../../assets/images/crossSolidRed.svg'

import Popup from 'reactjs-popup';

const OrderItems = (props) => {
    const {itemData, onClickTick, onMissingOnly, onUrgentlyMissing, onClickCross} = props
    const {product_name, brand, price, quantity, status} = itemData

    const tickImage = status === "Approved" ? checkSolidGreen : checkSolidGrey
    const crossImage = status === "Missing" ? crossSolidOrange : status ==="Urgent" ? crossSolidRed : crossSolidGrey

    const statusText = status === "Missing" ? "Missing" : status === "Urgent" ? "Missing-Urgent" : status === "Approved" ? "Approved" : ""
    const statusBG = status === "Missing" ? "missing" : status === "Urgent" ? "urgent" : status === "Approved" ? "approved" : "hide-status"

    const clickTick = () => {
        onClickTick(itemData.id)
    }

    const missingOnly = () => {
        onMissingOnly(itemData.id)
    }

    const urgentlyMissing = () => {
        onUrgentlyMissing(itemData.id)
    }

    const clickCross = () => {
        console.log("cross clicked")
        onClickCross()
    }

    return(
        <li className="order-item-container table-row">
            <div className="table-cell product-name-image-container1 expanded-column">
                <img className="product-image1" src={avocadoHass} alt="product" />
                <div className="product-name1">{product_name}</div>
            </div>
            <div className="table-cell">{brand}</div>
            <div className="table-cell">$ {price}</div>
            <div className="table-cell">{quantity}</div>        
            <div className="table-cell">$ {price * quantity}</div>
            <div className="table-cell status-cta-container expanded-column">
                <p className={`current-status ${statusBG}`}>{statusText}</p>
                <div className="status-cta-container">
                    <button className="button1" onClick={clickTick}>
                        <img className="tick-image" src={tickImage} alt="tick" />
                    </button>
                    <Popup trigger=
                        {<button className="button1" onClick={clickCross}>
                            <img className="cross-image" src={crossImage} alt="tick" />
                        </button>} 
                        modal nested>
                        {   
                            close => (
                                <div className='modal'>
                                    <div className='modal-heading-container'>
                                        <h1 className="modal-heading1">Missing product</h1>
                                        <button className="button1" onClick={() => close()}>
                                            <img className="cross-image" src={crossSolidGrey} alt="tick" />
                                        </button>
                                    </div>
                                    <div>
                                        <p>Is {product_name} urgent?</p>
                                    </div>
                                    <div className='modal-buttons-container'>
                                        <button className="button1 button2" onClick={() => {
                                            close()
                                            missingOnly()
                                        }}>No</button>
                                        <button className="button1 button2" onClick={() => {
                                            close()
                                            urgentlyMissing()
                                        }}>Yes</button>
                                    </div>
                                </div>
                            )
                        }
                    </Popup>
                    
                    <button className="edit-button" type="button">
                        <p>Edit</p>
                    </button>
                </div>
            </div>
            
        </li>
    )
}

export default OrderItems;