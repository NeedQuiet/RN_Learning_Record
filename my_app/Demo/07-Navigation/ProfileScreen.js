import React, { Component } from 'react'
import { Text, StyleSheet, View ,Button} from 'react-native'

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile Screen'
  }
  render() {
    return (
      <View>
        <Text> two </Text>
        <Button title="back" onPress={() => this.props.navigation.goBack()} />
      </View>
    )
  }
}

const styles = StyleSheet.create({})