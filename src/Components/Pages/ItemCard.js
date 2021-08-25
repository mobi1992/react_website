import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
export const ItemCard = ({item}) => {
    const priceStyle = {
        color : '#5b18b0',
        fontWeight : 'bold',
        fontFamily : 'Arial'
    }
    return (
                //    <img key = {item.id} className = "card-img img-responsive" src={item.picture} alt="Card image"/>  

        <div className = 'col-lg-3 col-md-3 col-sm-6 col-6'>
                <div className = "card card-body mt-5">
                    <img key = {item.id} className = "card-img img-responsive" src={item.picture} alt="Card image"/>  
               <h6 className = 'mt-3 card-title responsive-content'>{item.name} </h6>
               <h6 className = 'card-title' style = {priceStyle}>Rs {item.price}</h6>
               <Link to = {`/${item.id}`}>
                   <button className = 'btn responsive-content btn-itemCard'>View the item</button>
                </Link>
                    </div> 
                </div> 
    )
}
export default ItemCard


