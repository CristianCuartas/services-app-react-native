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

const ListOfServices = ({navigation, route}) => {
    const [dataServices, setDataServices] = useState([]);

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
        item={item}
        onPress={() => navigation.navigate('Details', item)}
        style={{backgroundColor}}
      />
    );
  };

  const propName = R.prop('name');
  const sortOne = R.sortWith([
  R.ascend(propName),
  ]);

  useEffect(() => {
    if (route.params) {
      setDataServices(sortOne([...dataServices, route.params]));
    }
  }, [route.params]);

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
              title="New service"
              onPress={() => navigation.navigate('CreateService')}
            />
          </>
        ) : (
          <>
            <Text style={styles.errorMessage}>No services, add one!</Text>
            <Button
              style={styles.createServiceButton}
              title="New service"
              onPress={() => navigation.navigate('CreateService')}
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
  
export default ListOfServices
