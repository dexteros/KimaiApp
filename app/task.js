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
import ActionButton from 'react-native-action-button';
const { width, height } = Dimensions.get("window");


export default class TaskView extends Component {
  static navigationOptions = {
    tabBar: {
      label: 'Run Task',
      icon: (
        <Icon name="play-circle-outline" size={25} color="#fff" />
      ),
    },
    header: ({ navigate }) =>{
    	return {
	    	visible: true,
	       	title:'KIMAI',
	       	tintColor: "#FFFFFF",
	       	style: {
	          backgroundColor: '#CC0066'
	       	},
	       	right: (
	      		<TouchableOpacity onPress={() => navigate('Login')}>
	        		<Icon name="dots-vertical" size={30} color="#fff" />        
	      		</TouchableOpacity>      
	    	)
    	}       
    },
  }

  render() {
    return (
      <View style={styles.container}>

      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      
       <ActionButton
  			buttonColor="rgba(231,76,60,1)"
  			onPress={() => { console.log("hi")}}
  			icon={<Icon name="play" size={32} color="#FFF" />}
		/>

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1
    }
});