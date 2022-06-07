import React, { Component } from 'react';
import './style.css'
export default class InputTask extends Component {
    render() {
        return (
            <div className='input'>
                <input type='text' placeholder='Add new task in here' />
            </div>
        )
    }
}