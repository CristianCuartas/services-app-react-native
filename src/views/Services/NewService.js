import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {database, servicesCollection} from './../../model/index';

const CreateService = ({navigation}) => {
    const [serviceName, setServiceName] = useState('');

    async function postService (name){
        await database.action(async () => {
          const newService = await servicesCollection.create(service => {
            service._raw['name'] = name
          })
        })      
      }      

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
            <Button 
                title='Done' 
                onPress={()=>{
                    postService(serviceName);
                    navigation.navigate('Home')
                }} 
                disabled={ serviceName.length === 0} 
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
    }
})

export default CreateService;