import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  TextInput,
  useState
} from 'react-native';

const style = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  big: {
    fontSize: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    margin: 20
  },
  red: {
    color: 'red',
  },
});

function calculateBMI(weight, height)
{
    var bmi = Math.round(((weight / Math.pow(height, 2)) * 703) * 10)/10
    console.log("Weight = " + weight)
    console.log("Height = " + height)
    console.log("BMI = " + bmi)
    return bmi
}


export default class Home extends Component
{
    constructor()
    {
        super()
        this.state =
        {
            weight: "",
            height: "",
        }
        this.handleChangeWeight = this.handleChangeWeight.bind(this)
        this.handleChangeHeight = this.handleChangeHeight.bind(this)
    }
    handleChangeWeight(newText){
        this.setState({
            value: newText
        })
        this.state.weight = newText
    }

    handleChangeHeight(newText){
        this.setState({
            value: newText
        })
        this.state.height = newText
    }

    

    render()
    {
        return (

            <ScrollView style={styles.body}>
              <View style={styles.sectionContainer, style.center}>
      
                <Text style={styles.sectionTitle}>BMI Calculator</Text>
      
                <Image style={{width:370, height:250}} source={require('../img/scale.jpg')} />
      
                <TextInput
                  style={[style.center, style.big]}
                  placeholder="Enter Weight in Pounds"
                  onChangeText={this.handleChangeWeight}
               />

                <TextInput
                  style={[style.big, style.center]}
                  placeholder="Enter Height in Inches"
                  onChangeText={this.handleChangeHeight}
               />
      
                  <Button title='Calculate' onPress={() => {
                        var bmi = calculateBMI(this.state.weight, this.state.height)
                        console.log(this.state.weight)
                        console.log(bmi)
                        this.props.navigation.navigate('Result', {bmi: bmi})
                    }}/>
              </View>
            </ScrollView>
          )
    }
}

const styles = StyleSheet.create({
  scrollView: {
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    padding: 10,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
