import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import WriteStoryScreen from './screens/WriteStory';
import ReadStoryScreen from './screens/ReadStory';
import { Header } from 'react-native-elements';


export default class App extends React.Component{
  render(){
    return(
      <View>
        <TabNavigator/>
      </View>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteScreen:{
    screen:WriteStoryScreen,
    navigationOptions:{
      tabBarIcon:<Image source={require("../Assets/write.png")} style={{width:20, height:20}}/>,
      
      tabBarLabel:"Write"
    }
  },
  ReadScreen:{
    screen:ReadStoryScreen,
    navigationOptions:{
      tabBarIcon:<Image source={require("../Assets/read.png")} style={{width:20, height:20}}/>,
      
      tabBarLabel:"Read"
    }
  }
})