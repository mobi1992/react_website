import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/fontawesome-free-solid'
function Cart({item, cal_total}) {
    const priceStyle = {
        color : '#5b18b0',
        fontWeight : 'bold',
        fontFamily : 'Arial'
    }

    // Quantity of item to be added in the cart
    const [quantity, setQuantity] = useState(1)

    // Price of item to be added in the cart
    const [price, setPrice] = useState(parseInt(item.price))

    const handleChange = (e) => {
        setQuantity(parseInt(e.target.value))
    }
    const incrementQuantity = () => {
        setQuantity(prevQuan => prevQuan + 1)
    }

    const decrementQuantity = () => {
        setQuantity(prevQuan => prevQuan - 1)
    }

    useEffect(() => {
        setPrice(quantity * parseInt(item.price))
        cal_total(price)
    }, [quantity])
    return (
        <div>
                                <div class="row border-top border-bottom">
                                    <div className = 'row main align-items-center'>
                                        <div className = 'col-3'>
                                            <img key = {item.id} class="img-fluid" src={item.picture}/>
                                        </div>
                                        <div className = 'col'>
                                            <div className = 'row text-muted responsive-content-cart'>{item.name}</div>
                                        </div>
                                    </div>
                                    <div className = 'row main align-items-center'>
                                        <div className = 'col-8'>
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <button class="btn btn-outline-secondary" type="button" onClick = {decrementQuantity}>-</button>
                                                </div>
                                                <input type='number' class="text-center form-control" value = {quantity} onChange = {handleChange}/>
                                                <div class="input-group-append">
                                                    <button class="btn btn-outline-secondary" type="button" onClick = {incrementQuantity}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = 'col'>
                                            <div className = 'row text-center responsive-content-cart' style = {priceStyle}>Price</div>
                                            <div className = 'row text-muted responsive-content-cart cart-price-padding' style = {priceStyle}>Rs {price}</div>
                                        </div>
                                    </div>
                                </div>
    </div>
    )
}

export default Cart
