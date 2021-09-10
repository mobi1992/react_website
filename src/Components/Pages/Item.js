import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import SizeChart from '../subPages/SizeChart'
import CartContainer from '../subPages/CartContainer'
import ItemPicture from '../subPages/ItemPicture'
import { itemContext } from '../ParentComponent'
 //export const qtyContext = React.createContext()
function Item({match}) {
    const context = useContext(itemContext)
    const [szChart, showSzChart] = useState(false)
    const [cart, showCart] = useState(false)
    const [itemPic, showItemPic] = useState(false)
    const [item, setItem] = useState({})
    
    // const [items, setItems] = useState([])
    
    // const [msg, setMsg] = useState('')

    // Generate message if cart is empty or a new item is added
    
    const priceStyle = {
        color : '#5b18b0',
        fontWeight : 'bold',
        fontFamily : 'Arial'
    }
    useEffect(() => {
        fetchItem()
        
    }, [])
    const fetchItem = () => {
        axios.get(`http://143.110.189.47:3000/items/${match.params.id}`)
        .then(res => {
            console.log(res.data)
            setItem(res.data)
            context.setTheItem(res.data)
        })
        .catch(err => console.log(err))
        console.log(match)
        
    }

    // Implementing Local storage data saving and data retrieving
    // const getItemsFromLS = () => {
    //     let itms;
    //     if(localStorage.getItem('itms') === null){
    //         itms = []
    //     } else {
    //         itms = JSON.parse(localStorage.getItem('itms'))
    //     }
    //     console.log(itms)
    //     return itms;
    // }

    // const addItemtoLS = () => {
    //     const itms = getItemsFromLS();
    //     const itm = addItem()
    //     // if there is item, push it to items array in LS
    //     if(itm){
    //         itms.push(itm);
    //     }
    //     localStorage.setItem('itms', JSON.stringify(itms))
    // }

    // const addItem = () => {
    //     // append the item to add a property of quantity
    //     const newItem = Object.assign(item, {quantity : 1})
    //     console.log(newItem)
    //     const itms = getItemsFromLS()
    //     const newItems = [...itms, newItem]
    //     setItems(newItems)
    //     console.log(items)
    //     return newItem
    // }

    // const setUpdate = (qty, id) => {
    //     const updated_items = items;
    //     // loop through items
    //     updated_items.map(item => {
    //         if(item.id === id){
    //             item.quantity = qty;
    //         }
    //     })
    //     setItems(updated_items)
    //     updateLS(qty, id);
    // }

    // const updateLS = (qty, id) => {
    //     const itms = getItemsFromLS();
    //     itms.map(item => {
    //         if(item.id === id){
    //             item.quantity = qty;
    //         }
    //         localStorage.setItem('itms', JSON.stringify(itms))
    //     })
    // }
    // const deleteItemFromLS = (id) => {
    //     const itms = getItemsFromLS();
    //     itms.forEach((item, index) => {
    //         if(item.id === id){
    //             itms.splice(index,1);
    //         }
    //     });
    //     localStorage.setItem('itms', JSON.stringify(itms));
    // }

    // const deleteItem = (id) => {
    //     const filteredItems = items.filter(item => item.id !== id)
    //     setItems(filteredItems)
    //    deleteItemFromLS(id);
    // }

    // const generateMessage = () => {
    //     const items = getItemsFromLS()
    //     if(items !== [])
    //     {
    //         setMsg('Item has been successfully added to your cart.')
    //     }
    //     else {
    //         setMsg('Your cart is empty now.')
    //     }
    // }
    const showSizeChart = () => {
        showSzChart(true)
    }

    const onCloseSizeChart = () => {
        showSzChart(false)
    }

    const showTheCart = (e) => {
        showCart(true)
        const id = e.target.id
        
        let alreadyExists = false
        const itms = context.getItemsFromLS();
        console.log(itms)
        itms.forEach(item => {
            if(item.id === id)
            {
                const quantity = item.quantity
                context.setUpdate(quantity+1, id)
                alreadyExists = true
                const updated_items = context.getItemsFromLS()
                context.setItems(updated_items)
            }
        })
        if(alreadyExists === false)
        {
            context.addItemtoLS()
        }
        //generateMessage()
    }

    const onCloseCart = () => {
        showCart(false)
    }

    const showItemPicture = () => {
        showItemPic(true)
    }

    const onCloseItemPicture = () => {
        showItemPic(false)
    }

    
    return (
        <div className = 'conatiner-fluid'>
            <div className = 'row justify-content-left'>
                <div className = 'col-lg-6 col-md-6 col-sm-12 col-12'>
                    <div className = 'card card-body mt-5'>
                    <img key = {item.id} className = "card-img img-responsive" src={item.picture} alt="Card image" onClick = {showItemPicture}/>  
                    </div>
                </div>
                <div className = 'col-lg-6 col-md-6 col-sm-12 col-12'>
                    <div className = 'card card-body mt-5'>
                        <h1 className = 'mt-3 card-title responsive-content-heading'>{item.name} </h1>
                        <br></br>
                        <h1 className = 'responsive-content-heading'>Price</h1>
                        <h3 className = 'card-title responsive-content-heading' style = {priceStyle}>Rs {item.price}</h3>
                        <br></br>
                        <Link to = {`/${item.id}`}>
                            <button className = 'btn responsive-content-item btn-item' onClick = {showSizeChart}>Size Chart</button>
                        </Link>

                        <br></br>
                        <h1 className = 'responsive-content-heading'>Description:</h1>
                        <h5 className = 'responsive-content-description'>{item.description}</h5>
                        <br></br>
                        <Link to = {`/${item.id}`}>
                            <button id = {item.id} className = 'btn responsive-content-item btn-item' onClick = {showTheCart}>Add To Cart</button>
                        </Link>

                        <br></br>
                        <Link to = {`/${item.id}`}>
                            <button className = 'btn responsive-content-item btn-item'>Shop Now</button>
                        </Link>
                        {
                            szChart ? <SizeChart onCloseSizeChart = {onCloseSizeChart}/> : ''
                        }

                        {
                            cart ? 
                            //  <qtyContext.Provider value = {{quantity : quantity, setQuantity : setQuantity}}>
                            <CartContainer onCloseCart = {onCloseCart}/> 
                            //  </qtyContext.Provider>
                            : ''
                        }

                        {
                            itemPic ? <ItemPicture item = {item} onCloseItemPicture = {onCloseItemPicture}/> : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
