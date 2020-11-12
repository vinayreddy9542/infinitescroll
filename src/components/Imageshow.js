import React, { Component } from 'react'
import Modal from './Modal'
class Imageshow extends Component{
    constructor(props){
        super(props)
        this.state={
            showPopup:false
        }
    }
    clickHandler(){
        this.setState({
            showPopup:!this.state.showPopup
        })
    }
    render(){
    return(
        <span>
            <button onClick={this.clickHandler.bind(this)}>
            <img src={this.props.url} width="200" height="200"/>
            {this.state.showPopup ?
                <Modal url={this.props.url} name ={this.props.name} like={this.props.like}
                    closePopup={this.clickHandler.bind(this)}/>: null
            }
            </button>
        </span>
    )
        }
}

export default Imageshow