import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'

class Inputs extends Component {
    state = {
       weight: '',
       height: '',
       bmi: '',
    }
    handleWeight = (text) => {
       this.setState({ weight: text })
    }
    handleHeight = (text) => {
       this.setState({ height: text })
    }
    login = (email, pass) => {
       navigation.navigate('Result', bmi)
    }
    render() {
       return (
          <View style = {styles.container}>
             <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Enter Weight in Pounds"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.handleWeight}/>
             
             <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Enter Height in Inches"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.handleHeight}/>
             
             <TouchableOpacity
                style = {styles.submitButton}
                onPress = {
                   () => this.login(this.state.weight, this.state.height)
                }>
                <Text style = {styles.submitButtonText}> Calculate </Text>
             </TouchableOpacity>
          </View>
       )
    }
 }
 export default Inputs

 const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })