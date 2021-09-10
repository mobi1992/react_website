import React, {useState, useEffect, useContext} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/fontawesome-free-solid'
import { itemContext } from '../ParentComponent';
function MainCart({item, cal_total}) {
    const context = useContext(itemContext)
    const priceStyle = {
        color : '#5b18b0',
        fontWeight : 'bold',
        fontFamily : 'Arial'
    }
    // const quantityContext = useContext(qtyContext)
    // Quantity of item to be added in the cart
    const [quantity, setQuantity] = useState(item.quantity)
    const [prevPrice, setPrevPrice] = useState(0)
    const [change, onChange] = useState(false)
    // Price of item to be added in the cart
    const [price, setPrice] = useState(parseInt(item.price))
    const incrementQuantity = () => {
        setQuantity(prevQuan => prevQuan + 1)
        //setUpdate(quantity, item.id)
        console.log('increment button')
        cal_total(parseInt(item.price))
    }
    

    const decrementQuantity = () => {
        if(quantity >= 2)
        {
            setQuantity(prevQuan => prevQuan - 1)
            //setUpdate(quantity, item.id)
            console.log('decrement button')

            cal_total(-parseInt(item.price))
        }
    }

    const handleChange = (e) => {
        setQuantity(parseInt(e.target.value))
        //setUpdate(quantity, item.id)
        console.log(quantity)
        console.log('input handle change')

        if(isNaN(parseInt(e.target.value)))
        {
            setQuantity('')
        }
        else {
            onChange(true)
            window.location.reload(true)
        }
    }

    // Total will be calculates with input when we click on the update cart button
    // const onClick = () => {
    //     if(change)
    //     // whenever an item is added in the cart, the initail quantity is 1 and the total price is calculated at every step, so when we change the input and enter something, item.price needs to be subtracted from the answer as it is already added that to total price before...
    //     // Initially prevPrice is 0, when when we enter the input again, the prev answer needs to be subtracted from the total price and then we need to calculate the total again... prevPrice takes care of that for us...
    //         cal_total(((quantity * item.price)-item.price) - prevPrice)
    //     onChange(false)
    //     entryAgain()
    // }

    // const entryAgain = () => {
    //          setPrevPrice((quantity * item.price) - item.price)
    // }
    
    const deleteTheItem = (e) => {
        const id = e.target.id
        console.log(id)
        if (id !== '')
        {
            context.deleteItem(id)
            cal_total(-(quantity * item.price))
        }
    }
    useEffect(() => {
        // The functions which depend upon quantity will be put in useEffect, as when the state changesm they will be executed
        setPrice(quantity * parseInt(item.price))
        context.setUpdate(quantity, item.id)
    }, [quantity])


    useEffect(() => {
        setQuantity(item.quantity)
        console.log(quantity)
        cal_total((quantity * parseInt(item.price)))
        // return block runs when the component unmounts
        return (
            () => 
            {
                cal_total(0)
                setQuantity(0)
                console.log('cart unmounted')
            }
        )
    }, [])

    // const update_cart = () => {
    // }
    return (
        <div>
                                <div class="row border-top border-bottom">
                                    <div className = 'row main align-items-center'>
                                        <div className = 'col-3'>
                                            <img key = {item.id} class="img-fluid" src={item.picture}/>
                                        </div>
                                        <div className = 'col-7'>
                                            <div className = 'row text-muted responsive-content-cart'>{item.name}</div>
                                        </div>
                                        <div className = 'col'>
                                            <div className = 'row'>
                                                <button style = {{
                                                position : 'relative',
                                                top : '0px',
                                                botton : '0px',
                                                left : '2vh'
                                            }}
                                                type = 'button' className = 'btn responsive-content-item btn-item btn-cross' id = {item.id} onClick = {deleteTheItem}>X</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className = 'row main align-items-center'>
                                        <div className = 'col-8'>
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <button class="btn btn-outline-secondary responsive-content-item btn-inc-dec" type="button" onClick = {decrementQuantity}>-</button>
                                                </div>
                                                <input type='text' class="text-center form-control" value = {quantity} onChange = {handleChange}/>
                                                <div class="input-group-append">
                                                    <button class="btn btn-outline-secondary responsive-content-item btn-inc-dec" type="button" onClick = {incrementQuantity}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = 'col'>
                                            <div className = 'row text-center responsive-content-cart' style = {priceStyle}>Price</div>
                                            <div className = 'row text-muted responsive-content-cart' style = {priceStyle}>{quantity} X {item.price}</div>
                                            <div className = 'row text-muted responsive-content-cart' style = {priceStyle}>= Rs {price}</div>
                                        </div>
                                    </div>
                                    {/* <div className = 'row main align-items-center'>
                                        <div className = 'col-12'>
                                            <button className = 'btn responsive-content-item btn-dark text-white' onClick = {update_cart}>Update Cart</button>
                                        </div>
                                    </div> */}
                                </div>
    </div>
    )
}

export default MainCart
