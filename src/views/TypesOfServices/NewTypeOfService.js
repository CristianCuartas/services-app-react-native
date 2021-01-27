import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {database, typesServicesCollection} from './../../model/index';

const CreateTypeService = ({navigation, route}) => {
    const [serviceName, setServiceName] = useState('');
    const [servicePrice, setServicePrice] = useState('');
    const [service_id, setServiceId] = useState('');

    async function postTypeService (name, price, service_id){
        await database.action(async () => {
          const newTypeService = await typesServicesCollection.create(type => {
            type._raw['service_id'] = service_id
            type._raw['name'] = name
            type._raw['price'] = price
          })
        })      
      }   

    useEffect(() => {
        if (route.params) {
          setServiceId(route.params)
        }
    }, [route.params]);      

    return(
        <View style={styles.container}>
            <Text> Create new type of service </Text>
            <TextInput
                multiline
                style={styles.nameText}
                placeholder="Name of service"
                value={serviceName}
                onChangeText={setServiceName}
            />
               <TextInput
                multiline
                style={styles.priceText}
                placeholder="Price of service"
                value={servicePrice}
                onChangeText={setServicePrice}
            />
            <Button 
                title='Done' 
                onPress={()=>{
                    postTypeService(serviceName, servicePrice, service_id)
                    navigation.navigate('ListTypesServices')
                }} 
                disabled={servicePrice.length === 0 || serviceName.length === 0} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignSelf:'center',
        justifyContent:'center'
    },
    nameText:{
        alignSelf:'stretch',
        height: 40,
        width:300,
        padding: 10, 
        backgroundColor: 'white'
    },
    priceText:{
        height: 40, 
        width:300,
        padding: 10, 
        backgroundColor: 'white'
    }
})

export default CreateTypeService;