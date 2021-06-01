import React from 'react';
import {View,Text, SafeAreaView,StyleSheet,Image} from 'react-native';


const PlanetNames =(props)=>{
 

  return (
    <Text  style={{alignSelf:"center"}}>{props.title}</Text>
  )
}
export default PlanetNames;