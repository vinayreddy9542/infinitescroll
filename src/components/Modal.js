import React from 'react'
import './styles.css'
import Close from './close.png'
const Modal = (props) =>{
    return(
        <div className='popup'>
        <div className='popup_inner'>
    {/*<button className='close_btn' onClick={props.closePopup}>*/}
      <img src={Close} className='close_btn' onClick={props.closePopup}/>
      {/*</button>*/}
        <br></br>
        <img className="image" src={props.url} width="400" height="400"/>
        <br></br>
        <p>Uploaded by : {props.name} 
        <br></br>
        Likes : {props.like}</p>
        </div>
      </div>
    )
}

export default Modal