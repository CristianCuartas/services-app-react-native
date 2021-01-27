import React, { useEffect } from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import R from 'ramda'


const ProfileScreen = (props) => {
    const {navigation} = props;

    return(
        // eslint-disable-next-line prettier/prettier
        <View style={styles.container}>
            <Text> Welcome your profile {props.name}! </Text>

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

export default ProfileScreen;