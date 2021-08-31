import React from 'react'
import ReactDOM from 'react-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/fontawesome-free-solid'
import Item from '../Pages/Item';
function SizeChart({onCloseItemPicture, item}) {
    return (
        <div className = 'row justify-content-center align-items-center' style = {{
            position: 'fixed',
            top : '0px',
            bottom : '0px',
            left : '0px',
            right : '0px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }} onClick = {onCloseItemPicture}>
            <div className = 'col-lg-5 col-md-5 col-sm-11 col-11'
            style = {{
                position : 'relative'
            }}>
                <div onClick={e => {
                    // do not close modal if anything inside modal content is clicked
                     e.stopPropagation();
                    }} className = 'card card-body item-image'>
                    <span><FontAwesomeIcon onClick = {onCloseItemPicture} style = {{
                        position : 'absolute',
                        top : '0px',
                        bottom : '0px',
                        right : '0px'
                        }}icon = {faTimesCircle}/></span>
                    <img className = "card-img img-responsive" src={item.picture} alt="Card image"/>  
                </div>
            </div>
        </div> 
    )
}

export default SizeChart
