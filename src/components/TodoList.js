import React, { Component } from 'react'
import TitleTodo from './header/Header';
import { FooterTodo } from './footer/Footer';
import { ListTodo } from './body/ListTodo';
export default class TodoList extends Component {
  render() {
    return (
      <div>
        <TitleTodo />
        <ListTodo todo="This is a first task!" />
        <ListTodo todo="This is a second task!" />
        <ListTodo todo="This is a Third task!" />
        <ListTodo todo="This is a Fourth task!" />
        <ListTodo todo="This is a Fifth task!" />
        <ListTodo todo="This is a Fifth task!" />
        <FooterTodo />
      </div>
    )
  }
}
