import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {MainStackNavigator, ProfileStackNavigator} from './../navigation/StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                let iconName;
              if (route.name === 'Home') {
                iconName = 'home'
              } else if (route.name === 'Profile') {
                iconName = 'account_box';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'skyblue',
            inactiveTintColor: 'gray',
          }}
        >
            <Tab.Screen name="Home" component={MainStackNavigator} />        
            <Tab.Screen name="Profile" component={ProfileStackNavigator} />           
        </Tab.Navigator>
    )
}

export {BottomTabNavigator}