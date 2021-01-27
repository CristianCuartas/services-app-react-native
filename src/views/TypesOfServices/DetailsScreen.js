import React, { useEffect } from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const DetailsScreen = ({route}) => {
    return(
        <View style={styles.container}>
            <Text>Name: {route.params?.name} </Text>
            <Text>Price: {route.params?.price} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default DetailsScreen;