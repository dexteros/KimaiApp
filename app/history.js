import React, { Component } from 'react';
import {  
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class HistoryView extends Component {
  static navigationOptions = {
    tabBar: {
      label: 'History',
      icon: (
        <Icon name="playlist-check" size={25} color="#fff" />
      ),
    },
    header: ({ navigate }) => {
       return {
        visible: true,
       title:'KIMAI',
       tintColor: "#FFFFFF",
       style: {
          backgroundColor: '#CC0066',          
       },
       right: (
          <TouchableOpacity onPress={() => navigate('Signup')}>
            <Icon name="magnify" size={30} color="#fff" />        
          </TouchableOpacity>      
      )
       }
    },
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}