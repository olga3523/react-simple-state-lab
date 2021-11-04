import React, { Component } from 'react';

export default class Cell extends Component {

    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

    onClick() {
        this.setState({
            color: '#333'
        })
    }
    
    render() {
        return (<div onClick={this.onClick.bind(this)} style={{backgroundColor: this.state.color}} className='cell'></div>)
    }
}