import React, {useState, useEffect, useContext} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/fontawesome-free-solid'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { itemContext } from '../ParentComponent'
import MainCart from './MainCart';
function MainCartContainer() {
    const context = useContext(itemContext)
    const items = context.getItemsFromLS()
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
        // context.setTotal(total)
    },[total])

    const listItems = items.map(item => {
        return <MainCart cal_total = {cal_total} key = {item.id} item = {item}></MainCart>
    })
    return (
        <div className = 'container'>
            <div className = 'row'>
            <div className = 'col'>
           
                        <h4 className = 'mt-2 card-title responsive-content-cart'>{msg} 
                        </h4>
                        
                        <div className = 'row'>
                            <div style = {{
                                overflowY : 'scroll',
                                height : '550px'
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
                                <Link to = '/checkout'>
                                    <button className = 'responsive-content-cart-button btn btn-block btn-item'>Proceed to Checkout</button>
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

export default MainCartContainer
