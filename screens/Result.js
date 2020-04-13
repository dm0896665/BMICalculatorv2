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
} from 'react-native';

const style = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  big: {
    fontSize: 17,
  },
  red: {
    color: 'red',
  },
});

function getTitle(bmi)
{
    var title;
    if(bmi < 18.5)
        {
            title = "Underweight";
        }
        else if(bmi >= 18.5 && bmi <= 24.9)
        {
            title = "Normal";
        }
        else if(bmi > 24.9 && bmi <= 29.9)
        {
            title = "Overweight";
        }
        else if(bmi > 29.9)
        {
            title = "Obese";
        }
    return title
}
export default class Result extends Component {
    constructor() {
        super()
        this.state = {
           title: 'Underweight'
        }
     }

     updateText = () => {
        this.setState({myText: 'My Changed Text'})
     }
    render() {
      return (
        <View style={styles.body}>
            <View style={styles.sectionContainer, style.center}>

                <Image style={{width:370, height:250}} source={require('../img/bmi.jpg')} />

                <Text style={styles.sectionTitle}>Your Body mass index is...</Text>

                <Text style={styles.result}>
                    {this.props.navigation.state.params.bmi}
                </Text>
                <Text style={styles.title}>
                    {getTitle(this.props.navigation.state.params.bmi)}
                </Text>
            </View>
        </View>
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
  title: 
  {
    fontSize: 30,
    padding: 20
  },
  result:
  {
    fontSize: 36,
    padding: 20
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    padding: 20,
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
