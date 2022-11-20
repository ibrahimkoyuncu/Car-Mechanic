import   React  from 'react';
import { ImageBackground, Text, View,StyleSheet,Image, Button } from 'react-native';
import { NavigationContainer } from  '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import KuponScreen from './screens/KuponScreen';
import AnaScreen from './screens/AnaScreen';
import SettingScreen from './screens/SettingScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function App  ()  {


const Tab = createBottomTabNavigator();



  return (
    <NavigationContainer>
    <Tab.Navigator
     
     
     screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Show Oto') {
            iconName = focused ? 'hammer' : 'hammer';
          } else if (route.name === 'Adres') {
            iconName = focused ? 'location' : 'location';
          }  else if (route.name === 'İletişim') {
            iconName = focused ? 'create' : 'create';
          }  else if (route.name === 'Hizmetlerimiz') {
            iconName = focused ? 'list' : 'list';
        
          }
          
          return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        upperCaseLabel: false,
        showIcon: true,
        showLabel: true

      })}
      >

        <Tab.Screen name="Show Oto" component={AnaScreen} />
        <Tab.Screen name="Adres" component={SettingScreen}/>
        <Tab.Screen name="İletişim" component={LoginScreen} />
        <Tab.Screen name="Hizmetlerimiz" component={KuponScreen} />
        
      </Tab.Navigator>

    </NavigationContainer>
  );


 
  }