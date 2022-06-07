import React, { Component } from 'react';
import ButtonPluss from '../body/ButtonPluss';
import InputTask from '../body/InputTask';
import './style.css';
export default class TitleTodo extends Component {
    render() {
        return (
            <div className='titletodo'>
                <h1>TO DO LIST APPLICATION</h1>
                <div className='input-gr'>
                    <InputTask />
                    <ButtonPluss />
                </div>
            </div>
        )
    }
}