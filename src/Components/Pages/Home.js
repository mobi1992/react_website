import React, {useState, useContext, useReducer ,useEffect} from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'
import {endPoints} from '../@serverData/apis/index'
import {_GET as get} from '../@serverData/apis/api-methods'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Item from './Item'
import ItemCard from './ItemCard'
import carousel1 from '../@assets/images/carousel1.gif'
import carousel2 from '../@assets/images/carousel2.jpg'
import carousel3 from '../@assets/images/carousel3.jpg'
//import HomeScreen from './HomeScreen'

function Home() {
    // const [idFromButtonClick, setID] = useState('')
    const [homeData, setHomeData] = useState([])
    const getHomeData = async () => {
            const { data } = await endPoints.home.call();
            console.log('[HOME]', data);
            setHomeData(data)
            console.log(homeData)
    }

    // const getId = (e) => {
    //     const id = e.target.id
    //     setID(id)
    //     console.log(id)
    //     console.log(idFromButtonClick)
    // }

    
    useEffect(() => {
        getHomeData()
    }, [])
    // useEffect(() => {
    //     get()
    // },[])

    return (
        
                <div>
                <h1 className = 'mt-3'>Home page</h1>

                <div id="demo" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={carousel1} alt="Los Angeles" width="1100" height="500"/>
                        </div>
                        <div class="carousel-item">
                        <img src={carousel2} width="1100" height="500"/>
                        </div>
                        <div class="carousel-item">
                        <img src={carousel3} width="1100" height="500"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#demo" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#demo" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
                <div className = 'row justify-content-left'>
                
                
           {
               homeData.map(item => (
                   
                    <ItemCard item = {item}/>
            //     <div className = 'col-lg-4 col-md-4 col-sm-6 col-6'>
            //     <div className = "card card-body mt-5">
            //     <buttonContext.Provider value = {`${item.id}`}/>

            //         <img key = {item.id} className = "card-img img-responsive" src={item.picture} alt="Card image"/>  
            //    <h6 className = 'mt-3 card-title'>{item.name} </h6>
            //    <h6 className = 'card-title'>Rs {item.price}</h6>
            //    <Link to = {`/${item.id}`}>
            //        <button id = {item.id} className = 'btn btn-nav' onClick = {getId}>View the item</button>
            //     </Link>
                
            //         </div> 
            //     </div> 
                //    <Route path = {`/${item.id}`} component = {Item}></Route>
                   
            //     <div className = 'col-lg-4 col-md-4 col-sm-6 col-6'>
            //     <div className = "card card-body mt-5">
            //         <img key = {item.id} className = "card-img img-responsive" src={item.picture} alt="Card image"/>  
            //    <h6 className = 'mt-3 card-title'>{item.name} </h6>
            //    <h6 className = 'card-title'>Rs {item.price}</h6>
            //    <Link to = {`/${item.id}`}> 
            //        <button className = 'btn btn-nav' onClick = {set}>View the item</button>
            //     </Link>
            //         </div> 
            //         {
            //            itemDetail ? <Item item = {item}/>: ''

            //         }
            //     </div> 
            ))
           }
           {/* {homeData} */}
           {/* <div></div>
           <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}
           
           </div>
           </div>
          
           
           
    )
}

export default Home

