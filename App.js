import React from 'react';
import {YellowBox} from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Ionicons} from '@expo/vector-icons';

//FORMAT AND DESIGN
import colors from './config/colors'

import LoadingScreen from './app/screens/LoadingScreen';
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';
import SignupScreen from './app/screens/SignupScreen';

import MessageScreen from "./app/screens/MessageScreen"
import NotificationScreen from "./app/screens/NotificationScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import PostScreen from  "./app/screens/PostScreen";


//YellowBox.ignoreWarnings(['Setting a timer for a long period of time'])
const AppContainer = createStackNavigator(
  {
    default: createBottomTabNavigator(
        {
          Home: {
            screen: () => <HomeScreen/>,
            navigationOptions: {
              tabBarIcon:({tintColor}) => <Ionicons name="ios-home" size={24} color={tintColor}/>
            }
          },
          Message: {
            screen: () => <MessageScreen/>,
            navigationOptions: {
              tabBarIcon:({tintColor}) => <Ionicons name="ios-chatboxes" size={24} color={tintColor}/>
            } 
          },
          Post: {
            screen: () => <PostScreen/>,
            navigationOptions: {
              tabBarIcon:({tintColor}) => 
              <Ionicons name="ios-add-circle" size={48} color={colors.plus} 
                style={{
                  shadowColor:colors.plus, 
                  shadowOffset:{width:0, height:0},
                  shadowRadius:10, 
                  shadowOpacity:0.3
              }}
              />
            } 
          },
          Notification: {
            screen: () => <NotificationScreen/>,
            navigationOptions: {
              tabBarIcon:({tintColor}) => <Ionicons name="ios-notifications" size={24} color={tintColor}/>
            } 
          },
          ProfileScreen: {
            screen: () => <ProfileScreen/>,
            navigationOptions: {
              tabBarIcon:({tintColor}) => <Ionicons name="ios-person" size={24} color={tintColor}/>
            } 
          },
        },
        {
          defaultNavigationOptions:{
            tabBarOnPress:({navigation, defaultHandler}) => {
              if(navigation.state.key == "Post"){
                  navigation.navigate("postModal")
              } else{
                defaultHandler()
              }
            }
          },
          tabBarOptions:{
            activeTintColor:"#161F3D",
            inactiveTintColor:"#B8BBC4",
            showLabel:false
          }
        }
    ),
     postModal:{
       screen: () => <PostScreen/>
     }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
)


const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Signup: SignupScreen,
})


export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppContainer,
      Auth: AuthStack,
    },
    {
      initialRouteName:"Loading",
    }
  )
);