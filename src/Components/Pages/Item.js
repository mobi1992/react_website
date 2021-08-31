import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import SizeChart from '../subPages/SizeChart'
import CartContainer from '../subPages/CartContainer'
import ItemPicture from '../subPages/ItemPicture'
function Item({match}) {
    const [szChart, showSzChart] = useState(false)
    const [cart, showCart] = useState(false)
    const [itemPic, showItemPic] = useState(false)
    const [item, setItem] = useState({})
    const [items, setItems] = useState([])
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
        })
        .catch(err => console.log(err))
        console.log(match)
    }

    // Implementing Local storage data saving and data retrieving
    const getItemsFromLS = () => {
        let itms;
        if(localStorage.getItem('itms') === null){
            itms = []
        } else {
            itms = JSON.parse(localStorage.getItem('itms'))
        }
        console.log(itms)
        return itms;
    }

    const addItemtoLS = () => {
        const itms = getItemsFromLS();
        const itm = addItem()
        // if there is item, push it to items array in LS
        if(itm){
            itms.push(itm);
        }
        localStorage.setItem('itms', JSON.stringify(itms))
    }

    const addItem = () => {
        const newItem = item
        const itms = getItemsFromLS()
        const newItems = [...itms, newItem]
        setItems(newItems)
        console.log(items)
        return newItem
    }
    const deleteItemFromLS = (key) => {
        const itms = getItemsFromLS();
        itms.forEach((item, index) => {
            if(item.key === key){
                itms.splice(index,1);
            }
        });
        localStorage.setItem('itms', JSON.stringify(itms));
    }

    const showSizeChart = () => {
        showSzChart(true)
    }

    const onCloseSizeChart = () => {
        showSzChart(false)
    }

    const showTheCart = () => {
        showCart(true)
        // setPrice(parseInt(item.price))
        addItemtoLS()
       // addItem()
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
                            <button className = 'btn responsive-content-item btn-item' onClick = {showTheCart}>Add To Cart</button>
                        </Link>

                        <br></br>
                        <Link to = {`/${item.id}`}>
                            <button className = 'btn responsive-content-item btn-item'>Shop Now</button>
                        </Link>
                        {
                            szChart ? <SizeChart onCloseSizeChart = {onCloseSizeChart}/> : ''
                        }

                        {
                            cart ? <CartContainer item = {item} items = {items} onCloseCart = {onCloseCart}/> : ''
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
