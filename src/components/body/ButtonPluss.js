import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import './style.css'
export default class ButtonPluss extends Component {
    render() {
        return (
            <div className='button-pluss' >
                <FontAwesomeIcon className='button-input-plus' icon={faCirclePlus} />
            </div>
        )
    }
}