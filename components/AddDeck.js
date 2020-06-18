import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native'
import {
  background,
  lightPink,
  lightYellow,
  lightGreen,
  lightBlue,
  dark,
  primary,
} from '../utils/colors'
import CustomInput from './CustomInput'
import CustomButton from './CustomButton'
import { color } from 'react-native-reanimated'

function ColorPicker({ color, handleSelect, selectedColor }) {
  return (
    <TouchableOpacity
      onPress={() => handleSelect(color)}
      style={[
        styles.colorItem,
        { backgroundColor: color },
        selectedColor === color && styles.selectedItem,
      ]}
    />
  )
}

export default class AddDeck extends Component {
  state = {
    query: '',
    selectedColor: '',
  }
  handleInput = (query) => {
    this.setState(() => ({
      query,
    }))
  }
  handleSelect = (color) => {
    this.setState(() => ({
      selectedColor: color,
    }))
  }
  handleSubmit = () => {
    const {query, selectedColor} = this.state
    if (query === '') Alert.alert('Title cannot be empty!')
    else if (selectedColor === '') Alert.alert('Please select a color')
    else {
      console.log(query, selectedColor)
      this.setState(() => ({
        query: '',
        selectedColor: '',
      }))
    }
  }
  render() {
    const colors = [lightPink, lightYellow, lightGreen, lightBlue]
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.header}>Enter Deck Title</Text>
          <CustomInput
            handleInput={this.handleInput}
            value={this.state.query}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.header}>Choose Color</Text>
          <FlatList
            data={colors}
            numColumns={2}
            renderItem={({ item }) => (
              <ColorPicker
                color={item}
                selectedColor={this.state.selectedColor}
                handleSelect={this.handleSelect}
              />
            )}
            keyExtractor={(item) => item}
          />
        </View>
        <View style={styles.inputContainer}>
          <CustomButton color={dark} handleSubmit={this.handleSubmit}>Submit</CustomButton>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    margin: 28,
  },
  colorItem: {
    width: 65,
    height: 65,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 65,
    margin: 8,
  },
  selectedItem: {
    borderWidth: 5,
    borderColor: primary,
  },
})