// send-email.js
import React from 'react'
import { StyleSheet, Button, View, Linking,Icon,ImageBackground,Image } from 'react-native'
import email from 'react-native-email'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Seperator = () => <View style = {styles.seperator} />
export default class App extends React.Component {
    render() {
        return (


            <View style={styles.container}>
                <ImageBackground
                source=
                {require('../assets/show.jpg')}
                     style={{flex: 1,
                        justifyContent: "center",
                        alignItems: "center"}}>
                </ImageBackground>
                <Button 
                color="#008000"
                onPress={() =>
           
            {Linking.openURL('tel:05550800438');}}
        
        
        title="📞    05550800438"  
      
        />
         <Seperator/>
       <Button 
       
     
       color="#FF0000"
                onPress={() =>
                    
                   
            {Linking.openURL('tel:05074527478');}}
        
        
        title="📞     05074527478"  />
         <Seperator/>
            <Button 
            color="#0000CC"
                onPress={() =>
           
            {Linking.openURL('tel:05314956411');}}
        
        
        title="📞    05314956411"  />
     <Seperator/>
                <Button 
             
                color="#330000"
                resizeMode= "cover"
               style={styles.mail}
                onPress={this.handleEmail}
               
                title="📨   showotorotbalans38@gmail.com" />
                
            </View>
        )
    }

    handleEmail = () => {
        const to = ['showotorotbalans38@gmail.com'] // string or array of email addresses
        email(to, {        
            body: 'Mesajınızı buraya yazınız',
            checkCanOpen: false // Call Linking.canOpenURL prior to Linking.openURL
        }).catch(console.error)
    }
}

const styles = StyleSheet.create({

  arama: {
 
    
  }, container: {
   flex: 1,
    height: 100,
        width: 400,
    alignSelf: 'stretch',
    justifyContent: 'center',
        
   
    backgroundColor: 'black',
    
    },
  seperator:{
marginVertical: 6,
borderBottomColor: "#737373"
  }

      
   
    
})