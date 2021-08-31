import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/fontawesome-free-solid'
import Cart from './Cart';
function CartContainer({onCloseCart, items}) {
    const [total, setTotal] = useState(0)
    const cal_total = (itm_price) => {
        setTotal(prevTotal => prevTotal + itm_price)
    }
    const listItems = items.map(item => {
        return <Cart cal_total = {cal_total} item = {item}></Cart>
    })
 
    return (
            <div className = 'row justify-content-center align-items-center' style = {{
                position: 'fixed',
                top : '0px',
                bottom : '0px',
                left : '0px',
                right : '0px',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }} onClick = {onCloseCart}>
                <div className = 'col-lg-8 col-md-8 col-sm-11 col-11'
                style = {{
                    position : 'relative',
                    overflowY: 'scroll'
                }}>
                    <div onClick={e => {
                        // do not close modal if anything inside modal content is clicked
                         e.stopPropagation();
                }} className = 'card card-body mt-5 cart'>
                        <h4 className = 'mt-2 card-title responsive-content-cart'>Your Item has been successfully added to cart 
                        <span><FontAwesomeIcon onClick = {onCloseCart} style = {{
                            position : 'absolute',
                            top : '0px',
                            bottom : '0px',
                            right : '0px'
                            }}icon = {faTimesCircle}/></span>
                        </h4>
                        
                        <div className = 'row'>
                            <div style = {{
                                overflowY : 'scroll',
                                height : '300px'
                            }} className = 'col-lg-8 col-md-8'>
                                {listItems}
                            </div> 
        
                            <div className = 'col-lg-4 col-md-4'>
                                <button className = 'responsive-content-cart-button btn muted btn-block'>Quick Cart</button>
                                    <div class = 'row'>
                                        <div className = 'col-6'>
                                            <h2 className = 'text-center responsive-content-cart-button'>Total: </h2>
                                        </div>
                                        <div className = 'col-6'>
                                            <h2 className = 'text-center responsive-content-cart-button'>{total} </h2>
                                        </div>
                                    </div>
                                <button style = {{
                                    backgroundColor : 'maroon',
                                    color : 'white'
                                }} className = 'responsive-content-cart-button btn btn-block'>Proceed to Checkout</button>
                                <button style = {{
                                    backgroundColor : 'maroon',
                                    color : 'white'
                                }} className = 'responsive-content-cart-button btn btn-block'>Continue Shopping</button>

                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default CartContainer
