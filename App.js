import React from 'react';
import {NavigationContainer } from '@react-navigation/native' ; //(mom to all) this import with all navigation 
import { createStackNavigator} from '@react-navigation/stack' ; //this and likly them after previse above

import ScreenR from './src/Screenrg'; // import to page 
import Screenloin from './src/Screenloin' ;

const Stackap = createStackNavigator() // intial


export default function App() {  
  return( 

 
  <NavigationContainer>
  <Stackap.Navigator  mode="modal" > 

  <Stackap.Screen name="تسجيل الدخول " options={{ headerShown:false }} component={ScreenR} /> 
  <Stackap.Screen name="login" component={Screenloin} />

  </Stackap.Navigator>
</NavigationContainer>






  );
}

