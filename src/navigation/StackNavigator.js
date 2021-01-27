import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import CreateService from '../views/Services/NewService';
import DetailsScreen from '../views/Details/DetailsScreen';
import ProfileScreen from '../views/Profile/ProfileScreen';
import ListOfServices from '../views/Services/ListOfServices';
import { Button } from 'react-native';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={ListOfServices} options={{title:"Developer services"}} />
            <Stack.Screen name="CreateService" component={CreateService} options={{title:"Add service"}} />
            <Stack.Screen name="Details" component={DetailsScreen} 
            options={({ route }) => ({              
                title: route.params?.name,
                headerTitleStyle: {
                fontWeight: 'bold',
                fontSize:15
                }})}
            />
       </Stack.Navigator>
    )
}

const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator>  
            <Stack.Screen  name="Profile">
                {props => <ProfileScreen {...props} name="Cristian Hernandez" />}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

const CreateServiceStackNavigator = () => {
    return (
        <Stack.Navigator>  
            <Stack.Screen 
                name="CreateService" 
                component={CreateService} 
                options={{
                    title:"Add service",
                }} 
            />
        </Stack.Navigator>
    )
}


export {MainStackNavigator, ProfileStackNavigator, CreateServiceStackNavigator}