import React, {useState, useEffect, useContext} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/fontawesome-free-solid'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { itemContext } from '../ParentComponent';
import Cart from './Cart';
function CartContainer({onCloseCart}) {
    const context = useContext(itemContext)
   // const context = useContext(qtyContext)
    const [total, setTotal] = useState(0)
    const [msg, setMsg] = useState('')

    // const generateMessage = () => {
    //     emp()
    //     if(!empty)
    //     {
    //         setMsg('Item has been successfully added to your cart.')
    //     }
    //     else {
    //         setMsg('Your cart is empty now.')
    //     }
    // }
    const cal_total = (itm_price) => {
        setTotal(prevTotal => prevTotal + itm_price)
    }

    useEffect(() => {
        console.log('cartcontainer useEffect called')
        if(total !== 0)
            setMsg('Item has been successfully added to your cart.')
        else 
            setMsg('Your cart is empty now.')
    },[total])
    const listItems = context.items.map(item => {
        return <Cart cal_total = {cal_total} key = {item.id} item = {item}></Cart>
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
                        <h4 className = 'mt-2 card-title responsive-content-cart'>{msg} 
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
                                <div className = 'mb-2'>
                                <Link to = '/Cart'>
                                    <button className = 'responsive-content-cart-button btn btn-block btn-item'>View The Cart</button>
                                </Link>
                                </div>
                                <button className = 'responsive-content-cart-button btn btn-block btn-item'>Continue Shopping</button>

                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default CartContainer
