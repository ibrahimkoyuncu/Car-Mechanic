import { View, Text,Image,StyleSheet} from 'react-native'
import React from 'react'

const KuponScreen = () => {
  return (
    <View>
      <Image
 style={styles.image1}
      source={require('../assets/hizmet.jpeg')}/>
    
    </View>
  )
}
const styles= StyleSheet.create (

  {
    image1: {
      width: 360,
      height: 517,
      
      }
    })
    export default KuponScreen
