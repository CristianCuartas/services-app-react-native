import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import ProfileScreen from '../views/Profile/ProfileScreen';
import CreateService from '../views/Services/NewService';
import ListOfServices from '../views/Services/ListOfServices';
import CreateTypeService from '../views/TypesOfServices/NewTypeOfService'
import ListTypeOfServices from '../views/TypesOfServices/ListTypesOfServices';
import DetailsScreen from '../views/TypesOfServices/DetailsScreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={ListOfServices} options={{title:"Services"}} />
            <Stack.Screen name="CreateService" component={CreateService} options={{title:"Add service"}} />
            <Stack.Screen name="ListTypesServices" component={ListTypeOfServices} options={{title:"Types of services"}} />
            <Stack.Screen name="CreateTypeService" component={CreateTypeService} options={{title:"Add type of service"}} />
            <Stack.Screen name="DetailsService" component={DetailsScreen} options={{title:"Service details"}} />
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



export {MainStackNavigator, ProfileStackNavigator}