import React from 'react';
import {View,Text, SafeAreaView,StyleSheet,Image, ScrollView, TouchableOpacity} from 'react-native';

import PlanetNames from "./PlanetNames"

const MainPage =()=>{
 

  return (
    <SafeAreaView  style={styles.container} >
      <ScrollView>
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
         <TouchableOpacity>
          <Text  style={{alignSelf:"center",fontSize:20}}> {"\n"}Solar System</Text>
        </TouchableOpacity>
          <View style={{flex:1,flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity>
              <View style={styles.planetContainer}>
                <Image style={styles.planetStyle} source={require("./images/merkur.png")}></Image>
                <PlanetNames title="Mercury"/>
              </View>  
            </TouchableOpacity>

            <TouchableOpacity>
              <View>
                <Image style={styles.planetStyle} source={require("./images/venus.png")}></Image>
                <PlanetNames title="Venus"/>
              </View>  
            </TouchableOpacity>
              
            <TouchableOpacity>
              <View>
                <Image style={styles.planetStyle} source={require("./images/earth.png")}></Image>
                <PlanetNames title="Earth"/>
              </View> 
            </TouchableOpacity>

            <TouchableOpacity>
              <View>
                <Image style={styles.planetStyle} source={require("./images/mars.png")}></Image>
                <PlanetNames title="Mars"/>
              </View> 
            </TouchableOpacity>

            <TouchableOpacity>
              <View>
                <Image style={styles.planetStyle} source={require("./images/jupiter.png")}></Image>
                <PlanetNames title="Jupiter"/>
              </View>
            </TouchableOpacity> 

            <TouchableOpacity>
              <View>
                <Image style={styles.planetStyle} source={require("./images/saturn.png")}></Image>
                <PlanetNames title="Saturn"/>
              </View> 
            </TouchableOpacity>

            <TouchableOpacity>
              <View>
                <Image style={styles.planetStyle} source={require("./images/uranus.png")}></Image>
                <PlanetNames title="Uranus"/>
              </View> 
            </TouchableOpacity>

            <TouchableOpacity>
              <View>
                <Image style={styles.planetStyle} source={require("./images/neptune.png")}></Image>
                <PlanetNames title="Neptune"/>
              </View> 
            </TouchableOpacity>
          </View>   
          
        </View>
        </ScrollView>    
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
   margin:20
 },
planetInnerStyle:{
  fontFamily:"Limelight-Regular",
  marginLeft:20,
  alignSelf:"center"
  
},
planetContianer:{
 
  
}


});