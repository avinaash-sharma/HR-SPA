import React, { Component } from 'react'
// import { Text, View } from 'react-native'
// import jumbotron from './jumbotron';
import Navigationbar from './Navigationbar';
import Jumbotron from './Jumbotron';
// import { threadId } from 'worker_threads';

export default class Theme extends Component {
  render() {
    return (
      <div>
        
        <Navigationbar brand='CheckIng'/>
        <Jumbotron />
        <div>From Theme</div>
      </div>
    )
  }
}

