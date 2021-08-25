import React, {useState, useEffect} from 'react'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Shop from './Pages/Shop'
import {endPoints} from './@serverData/apis/index'
import Contact from './Pages/Contact'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Nav from './Nav'
import Item from './Pages/Item'
// const initialState = {
//     openHome : false,
//     openAboutUs : false,
//     openShop : false,
//     openContact : false
// }

// const reducer = (state, action) => {
//     switch(action.type) {
//         case 'OPEN_HOME':
//             return {openHome : true, openAboutUs : false, openShop : false, openContact : false}
//         case 'OPEN_ABOUT_US':
//             return {openAboutUs : true, openHome : false, openShop : false, openContact : false}
//         case 'OPEN_SHOP':
//             return {openShop : true, openHome : false, openAboutUs : false, openContact : false}
//         case 'OPEN_CONTACT':
//             return {openContact : true, openHome : false, openShop : false, openAboutUs : false}
//         default:
//             return state
//     }
// }
function Routes() {
    //const [state, dispatch] = useReducer(reducer, initialState)
    // const [homeData, setHomeData] = useState([])
    // const getHomeData = async () => {
    //         const { data } = await endPoints.home.call();
    //         console.log('[HOME]', data);
    //         setHomeData(data)
    //         console.log(homeData)
    // }

    
    useEffect(() => {
        <Router>
            <Route path = '/' exact component = {Home}></Route> 
        </Router>
    }, [])

    // const clickHome = (e) => {
    //     e.preventDefault()
    //     dispatch({type : 'OPEN_HOME'})
    // }

    // const clickAboutUs = (e) => {
    //     e.preventDefault()
    //     dispatch({type : 'OPEN_ABOUT_US'})
    // }

    // const clickShop = (e) => {
    //     e.preventDefault()
    //     dispatch({type : 'OPEN_SHOP'})
    // }

    // const clickContact = (e) => {
    //     e.preventDefault()
    //     dispatch({type : 'OPEN_CONTACT'})
    // }
    return (
        <div>
            <Router>
            <Nav />
            <Switch>
                {/* <Route path = '/' exact render = {() => <Home homeData = {homeData} getHomeData = {getHomeData}/>}/>  */}
                <Route path = '/' exact component = {Home}></Route> 
                <Route path = '/AboutUs' component = {AboutUs}></Route> 
                <Route path = '/Shop' component = {Shop}></Route> 
                <Route path = '/Contact' component = {Contact}></Route> 
                <Route path = '/:id' exact component = {Item}></Route> 
            </Switch>
            </Router>
            {/* {state.openHome ? <Home /> : ''}
            {state.openAboutUs ? <AboutUs /> : ''}
            {state.openShop ? <Shop /> : ''}
            {state.openContact ? <Contact /> : ''} */}
        </div>
    )
}

export default Routes
