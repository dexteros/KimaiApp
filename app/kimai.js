import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

/*Importar Vistas*/
import LoginView from './login';
import SignupView from './signup';
import TaskView from './task';
import HistoryView from './history';

export const Kimai = StackNavigator({
  Login: { screen: LoginView },
  Signup: { screen: SignupView },
  Task: { screen: TabNavigator({
                    Home: {
                      screen: TaskView,
                    },
                    Notifications: {
                      screen: HistoryView,
                    },
                  }, {
                    tabBarOptions: {
                      activeTintColor: '#FFFFFF',
                      showIcon: true,
                      style: {
                        backgroundColor: '#CC0066',
                      },
                    },
                  })
        }
},
{
  initialRouteName: 'Login',
});