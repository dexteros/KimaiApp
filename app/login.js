import React, { Component } from 'react';
import {  
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { API_URL } from './config/globals';

const { width, height } = Dimensions.get("window");
const background = require("./assets/images/bg.jpg");
const mark = require("./assets/images/logo.png");

export default class LoginView extends Component {
  
  static navigationOptions = {
    title: 'Sign In',
    header: {
       visible: false,
    },
  };

  constructor(props) {
    super(props);
    this.state = { username: '','password': '' };
  }

  render() {
    
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Image source={background} style={styles.background} resizeMode="cover">
          <View style={styles.markWrap}>                        
            <Image source={mark} style={styles.mark} resizeMode="contain" />
          </View>
          <View style={styles.wrapper}>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>                
                <Icon name="account-outline" size={30} color="#fff" />
              </View>
              <TextInput 
                onChangeText={(username) => this.setState({username})}
                placeholder="Username" 
                placeholderTextColor="#FFF"
                style={styles.input} 
              />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Icon name="lock-outline" size={30} color="#fff" />
              </View>
              <TextInput 
                onChangeText={(password) => this.setState({password})}
                placeholderTextColor="#FFF"
                placeholder="Password" 
                style={styles.input} 
                secureTextEntry 
              />
            </View>
            <TouchableOpacity activeOpacity={.5}>
              <View>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5} onPress={this.doLogin}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>SIGN IN ></Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.signupWrap}>
              <Text style={styles.accountText}>Don't have an account? </Text>
              <TouchableOpacity activeOpacity={.5}>
                <View>
                  <Text style={styles.signupLinkText}
                  onPress={() => navigate('Task')}>SIGN UP</Text>                  
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Image>
      </View>
    );
  }


  doLogin = () => {
    
      fetch(API_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: null,
          method:'authenticate',
          params:{"username":this.state.username,"password":this.state.password}
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
          if(responseJson.result.success == true){
              alert(responseJson.result.items[0].apiKey);
          }else{
              alert(responseJson.result.error.msg);
          }
        
        return;
      })
      .catch((error) => {
        alert(error);
        //console.error(error);        
      });
  }

}

const styles = StyleSheet.create({
  container: {
      flex: 1            
    },
    markWrap: {
      flex: 1,
      paddingVertical: 30,
    },
    mark: {
      width: null,
      height: null,
      flex: 1,      
    },
    background: {
      width,
      height,
    },
    wrapper: {
      paddingVertical: 30,
    },
    inputWrap: {
      flexDirection: "row",
      marginVertical: 10,
      height: 40,
      borderBottomWidth: 1,
      borderBottomColor: "#CCC"
    },
    iconWrap: {
      paddingHorizontal: 7,
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      height: 20,
      width: 20,
    },
    input: {
      flex: 1,
      paddingHorizontal: 10,
      color: "#FFFFFF"
    },
    button: {
      backgroundColor: "#00CCCC",
      paddingVertical: 20,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
    },
    buttonText: {
      color: "#FFF",
      fontSize: 18,
    },
    forgotPasswordText: {
      color: "#D8D8D8",
      backgroundColor: "transparent",
      textAlign: "right",
      paddingRight: 15,
    },
    signupWrap: {
      backgroundColor: "transparent",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    accountText: {
      color: "#D8D8D8"
    },
    signupLinkText: {
      color: "#FFF",
      marginLeft: 5,
    }
});