import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class FormUserDetails extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
import React, { Component } from 'react'

export class FormUserDetails extends Component {
  render() {
    return (
      <div>
        <h1>Hello from From FormUserDetails</h1>
      </div>
    )
  }
}

export default FormUserDetails

