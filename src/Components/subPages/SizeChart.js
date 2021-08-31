import React from 'react'
import ReactDOM from 'react-dom'
import sizechart from '../@assets/images/sizechart.jpeg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/fontawesome-free-solid'
function SizeChart({onCloseSizeChart}) {
    return (
        <div className = 'row justify-content-center align-items-center' style = {{
            position: 'fixed',
            top : '0px',
            bottom : '0px',
            left : '0px',
            right : '0px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }} onClick = {onCloseSizeChart}>
            <div className = 'col-lg-8 col-md-8 col-sm-11 col-11'
            style = {{
                position : 'relative'
            }}>
                <div onClick={e => {
                    // do not close modal if anything inside modal content is clicked
                     e.stopPropagation();
                    }} className = 'card card-body mt-5 size-chart'>
                    <h2 className = 'mt-2 card-title responsive-content-sizechart'>Shirt Size Chart 
                    <span><FontAwesomeIcon onClick = {onCloseSizeChart} style = {{
                        position : 'absolute',
                        top : '0px',
                        bottom : '0px',
                        right : '0px'
                        }}icon = {faTimesCircle}/></span>
                    </h2>
                    <img className = "card-img img-responsive" src={sizechart} alt="Card image"/>  
                </div>
            </div>
        </div> 
    )
}

export default SizeChart
