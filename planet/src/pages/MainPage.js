import React from 'react';
import {View,Text, SafeAreaView,StyleSheet,Image} from 'react-native';
import Merkur from  "./Merkur"

const MainPage =()=>{
 

  return (
    <SafeAreaView  style={styles.container} >
        <View >
            <View> 
              <Text style={styles.textStyle}>Planets</Text>  
              <Text>Solar System</Text>  
            </View>
        </View> 

        <View>
              <Image style={styles.imageStyle} source={require("./images/planets.jpg")}></Image>
        </View>   

         <View>
          <Text > {"\n"}Planet List</Text>
              <View>
                <Image style={styles.planetStyle} source={require("./images/merkur.png")}></Image>
                <Text sytle={styles.planetInnerStyle}>Mercury</Text>
              </View> 
              
          </View>
      
    </SafeAreaView>
  )
}
export default MainPage;
const styles=StyleSheet.create({
  container:{     
    marginLeft:15,
  },
  
  textStyle:{
    fontSize:40,
    fontFamily:"PlayfairDisplay-VariableFont_wght"
  },
 
  imageStyle:{
    marginTop:7,
    height:300,
    width:370,
    borderWidth:2,
    borderRadius:10
  },
 planetStyle:{
   height:120,
   width:120,
   
 },



});