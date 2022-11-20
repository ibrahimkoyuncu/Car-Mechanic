import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

import * as Location from 'expo-location';

export default function SettingScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    
  }

  return (

    <View style={styles.body}>
      
    <MapView
 
 
     style={styles.map}
     region={{
       latitude: 38.733783750847,
       longitude: 35.440642068113284,
       latitudeDelta: 0.015,
       longitudeDelta: 0.0121,
     }}
   >
    <MapView.Marker
          coordinate={{latitude: 38.733783750847,
          longitude: 35.440642068113284}}
          title={"title"}
          description={"description"}
       />
   </MapView>

  
  </View >
)
}
const styles = StyleSheet.create(
{
body: {
  flex:1,
  alignItem: 'center'
},
map:{
  width:'100%',
  height:'100%'

}
}
)
