import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './style.css'
export class ListTodo extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }
  render() {
    return (
      <>
        <div className='task'>
          <div className='title-task'>{this.props.todo} </div>
          <div>
            <FontAwesomeIcon className='title-icon-check' icon={faCheck} />
            <FontAwesomeIcon className='title-icon-close' icon={faXmark} />
          </div>
        </div></>
    )
  }
}
