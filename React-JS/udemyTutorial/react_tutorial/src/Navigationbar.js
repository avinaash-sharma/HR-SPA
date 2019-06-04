import React, { Component } from 'react'
// import { Text, View } from 'react-native'
import {NavigationBar} from 'react-bootstrap';

export default class avigationbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <a className="navbar-brand">{this.props.brand}</a>
        </div>
      </nav>
    )
  }
}

