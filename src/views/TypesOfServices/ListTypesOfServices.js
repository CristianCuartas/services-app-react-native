import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import R from 'ramda'
import {typesServicesCollection, servicesCollection} from './../../model/index';
import { Q } from '@nozbe/watermelondb';

const ListTypeOfServices = ({navigation, route}) => {
    const [dataServices, setDataServices] = useState([]);
    const [errorRequest,setErrorRequest] = useState(false);

  const Item = ({item, onPress, style}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.titleName}>{item.name}</Text>
      <Text style={styles.titlePrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    let backgroundColor = '#D4CFCE';
    return (
      <Item
        item={item._raw}
        onPress={() => navigation.navigate('DetailsService', item._raw)}
        style={{backgroundColor}}
      />
    );
  };

  const propName = R.prop('name');
  const sortOne = R.sortWith([
  R.ascend(propName),
  ]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      typesServicesCollection.query(Q.where('service_id', route.params)).fetch()
      .then((allServices)=>{
         setDataServices(allServices)
         setErrorRequest(false)
        })
      .catch(error=>{
        setErrorRequest(true)
      })
    });
  }, [navigation, route.params]);

  if(errorRequest){
    return (
    <>
      <Text style={styles.errorMessage}>Oops, an error occurred, try again later.</Text>
      <Button 
        style={styles.createServiceButton}
        title=" + New type of service"
        onPress={() => navigation.navigate('CreateTypeService', route.params)}
      />
    </>
    )
  }

    return (
        <SafeAreaView style={styles.container}>
      
        {dataServices.length > 0 ? (          
          <>
            <FlatList
              data={dataServices}
              renderItem={renderItem}
              keyExtractor={(item) => item.name}
            />
            <Button
              style={styles.createServiceButton}
              title=" + New type of service"
              onPress={() => navigation.navigate('CreateTypeService', route.params)}
            />
          </>
        ) : (
          <>
            <Text style={styles.errorMessage}>There are no types of services, add one!</Text>
            <Button
              style={styles.createServiceButton}
              title=" + New type of service"
              onPress={() => navigation.navigate('CreateTypeService', route.params)}
            />
          </>
        )}
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    errorMessage: {
      flex: 10,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    item: {
      padding: 3,
      marginVertical: 3,
      marginHorizontal: 3,
    },
    titleName: {
      fontSize: 25,
    },
    titlePrice: {
      fontSize: 15,
    },
    createServiceButton: {
      padding: 10,
      flex: 3,
      height: 40,
      width: 300,
    },
  });
  
export default ListTypeOfServices
