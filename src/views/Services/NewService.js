import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
{/*import {saveService} from './../../models/Helpers';*/}

const CreateService = ({navigation, route}) => {
    const [serviceName, setServiceName] = useState('');
    const [servicePrice, setServicePrice] = useState('');

   {/* const handleSavePress = async () => {
        await saveService({serviceName, servicePrice})
    } */}

    return(
        <View style={styles.container}>
            <Text> Create new service </Text>
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
                    /*handleSavePress();*/
                    navigation.navigate('Home', {name: serviceName, price:servicePrice})
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

export default CreateService;