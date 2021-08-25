import React from 'react'
import {Link} from 'react-router-dom'
import logo from './@assets/images/logo.gif'
function Nav() {
    return (
        <nav class="navbar navbar-expand-md navbar-dark">
                <div className = 'container-fluid'>
                
                    <a class="navbar-brand" href="#"><img className = 'logo-img'src = {logo} ></img></a>
                    <button class="navbar-nav navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <Link to = '/'>
                            <li className="nav-item">
                                <a className="nav-link" href="Home.js">
                                    <button className = 'btn btn-nav'>Home</button>
                                </a>
                            </li>
                        </Link>

                        <Link to = '/AboutUs'>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <button className = 'btn btn-nav'>About Us</button>
                                </a>
                            </li>
                        </Link>

                        <Link to = '/Shop'>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <button className = 'btn btn-nav'>Shop</button>
                                </a>
                            </li>
                        </Link>

                        <Link to = '/Contact'>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <button className = 'btn btn-nav'>Contact</button>
                                </a>
                            </li> 
                        </Link> 
                        
                        </ul>

                    <br></br>
                </div>
            
            </div>
            </nav>
    )
}

export default Nav
