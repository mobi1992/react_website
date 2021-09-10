import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Routes from './Routes'

export const itemContext = React.createContext()
function ParentComponent() {
    // State variables and functions to show the cart
    const [item, setTheItem] = useState({})
    const [items, setItems] = useState([])
    // const [total, setTotal] = useState(0)


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
        // append the item to add a property of quantity
        const newItem = Object.assign(item, {quantity : 1})
        console.log(newItem)
        const itms = getItemsFromLS()
        const newItems = [...itms, newItem]
        setItems(newItems)
        console.log(items)
        return newItem
    }

    const setUpdate = (qty, id) => {
        const updated_items = items;
        // loop through items
        updated_items.map(item => {
            if(item.id === id){
                item.quantity = qty;
            }
        })
        setItems(updated_items)
        updateLS(qty, id);
    }

    const updateLS = (qty, id) => {
        const itms = getItemsFromLS();
        itms.map(item => {
            if(item.id === id){
                item.quantity = qty;
            }
            localStorage.setItem('itms', JSON.stringify(itms))
        })
    }
    const deleteItemFromLS = (id) => {
        const itms = getItemsFromLS();
        itms.forEach((item, index) => {
            if(item.id === id){
                itms.splice(index,1);
            }
        });
        localStorage.setItem('itms', JSON.stringify(itms));
    }

    const deleteItem = (id) => {
        const filteredItems = items.filter(item => item.id !== id)
        setItems(filteredItems)
       deleteItemFromLS(id);
    }

    // const showTheCart = (e) => {
    //     showCart(true)
    //     const id = e.target.id
        
    //     let alreadyExists = false
    //     const itms = getItemsFromLS();
    //     console.log(itms)
    //     itms.forEach(item => {
    //         if(item.id === id)
    //         {
    //             const quantity = item.quantity
    //             setUpdate(quantity+1, id)
    //             alreadyExists = true
    //             const updated_items = getItemsFromLS()
    //             setItems(updated_items)
    //         }
    //     })
    //     if(alreadyExists === false)
    //     {
    //         addItemtoLS()
    //     }
    //     //generateMessage()
    // }

    // const onCloseCart = () => {
    //     showCart(false)
    // }
    return (
        <itemContext.Provider value = {{setTheItem : setTheItem, items : items, deleteItem : deleteItem, setUpdate : setUpdate, setItems : setItems, getItemsFromLS : getItemsFromLS, addItemtoLS : addItemtoLS}}>
        <Routes/>
        </itemContext.Provider>
    )
}

export default ParentComponent
