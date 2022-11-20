import { View, Text,Image,StyleSheet,ScrollView } from 'react-native'
import { ImageSlider } from "react-native-image-slider-banner";
import React from 'react'
const Icon = () => {}
const AnaScreen = () => {
  return (

<View style={{alignItems: 'center', resizeMode:'cover',}}>
              
           
<ImageSlider 

data={[
        {img: 'https://pbs.twimg.com/media/FgBbuiFXoAAkAwE?format=jpg&name=medium'},
      {img:'https://pbs.twimg.com/media/FgBbuiFXEAA6Eq_?format=jpg&name=medium'},
      {img:'https://pbs.twimg.com/media/FgBcpBRXEAc2Xo1?format=jpg&name=large'},
      {img:'https://pbs.twimg.com/media/FgBcpCnWAAAVqPK?format=jpg&name=large'},
     {img:'https://pbs.twimg.com/media/FgLXfGJXkAQx5sS?format=jpg&name=large'},
      {img:'https://pbs.twimg.com/media/FgLXV9PXEAUuK9v?format=jpg&name=large'},
       {img:'https://pbs.twimg.com/media/FgLXV9DWIAAYZvi?format=jpg&name=large'},
        {img: 'https://pbs.twimg.com/media/FgLXV9GXEAEw1Pi?format=jpg&name=large'},
        {img: 'https://pbs.twimg.com/media/FgLXV9LXoAE4lUt?format=jpg&name=large'},
        {img: 'https://pbs.twimg.com/media/FgLTuk6XkAAbO4n?format=jpg&name=large'},
        {img: 'https://pbs.twimg.com/media/FgLTulkWYAAk0Z7?format=jpg&name=large'},
        {img: 'https://pbs.twimg.com/media/FgLTul3WQAQd8C0?format=jpg&name=large'},
        {img: 'https://pbs.twimg.com/media/FgLTumbX0AUPmzV?format=jpg&name=large'},
        {img: 'https://pbs.twimg.com/media/FgLTplfXwAMQrqW?format=jpg&name=large'},
        {img: 'https://pbs.twimg.com/media/FgLTpljXwAEwKxZ?format=jpg&name=large'},
        {img: 'https://pbs.twimg.com/media/FgLTplkWAAUBKC8?format=jpg&name=large'},
        {img: 'https://pbs.twimg.com/media/FgLTpmNaAAAZEPJ?format=jpg&name=large'}
    ]}
    autoPlay={true}
        closeIconColor="#fff"
     preview={true}
 caroselImageStyle={{ resizeMode: 'cover', alignItems: 'center', height: 600 , width: 400}}
  />
</View>  
   


 
  
  );
  
}




export default AnaScreen