import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import SizeChart from './SizeChart'
function Item({match}) {
    const [szChart, showSzChart] = useState(false)
    const priceStyle = {
        color : '#5b18b0',
        fontWeight : 'bold',
        fontFamily : 'Arial'
    }
    const [item, setItem] = useState({})
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
    const showSizeChart = () => {
        showSzChart(true)
    }

    const onClose = () => {
        showSzChart(false)
    }
    return (
        <div className = 'conatiner-fluid'>
            <div className = 'row justify-content-left'>
                <div className = 'col-lg-6 col-md-6 col-sm-12 col-12'>
                    <div className = 'card card-body mt-5'>
                    <img key = {item.id} className = "card-img img-responsive" src={item.picture} alt="Card image"/>  
                    </div>
                </div>
                <div className = 'col-lg-6 col-md-6 col-sm-12 col-12'>
                    <div className = 'card card-body mt-5'>
                        <h1 className = 'mt-3 card-title'>{item.name} </h1>
                        <br></br>
                        <h1>Price</h1>
                        <h3 className = 'card-title' style = {priceStyle}>Rs {item.price}</h3>
                        <br></br>
                        <h1>Description:</h1>
                        <h5>{item.description}</h5>
                        <br></br>
                        <Link to = {`/${item.id}`}>
                            <button className = 'btn responsive-content-item btn-item' onClick = {showSizeChart}>Size Chart</button>
                        </Link>
                        {
                            szChart ? <SizeChart onClose = {onClose}/> : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
