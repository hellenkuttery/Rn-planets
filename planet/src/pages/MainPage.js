import React from 'react';
import {View,Text, SafeAreaView,StyleSheet,Image, ScrollView} from 'react-native';
import Merkur from  "./Merkur"

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
          <Text > {"\n"}Solar System</Text>
        
          <View style={{flex:1,flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
           
              <View style={styles.planetContainer}>
                <Image style={styles.planetStyle} source={require("./images/merkur.png")}></Image>
                <Text sytle={styles.planetInnerStyle}>Mercury</Text>
              </View>  

              <View>
                <Image style={styles.planetStyle} source={require("./images/venus.png")}></Image>
                <Text sytle={styles.planetInnerStyle}>Venus</Text>
              </View>  

              <View>
                <Image style={styles.planetStyle} source={require("./images/earth.png")}></Image>
                <Text sytle={styles.planetInnerStyle}>Earth</Text>
              </View> 
              <View>
                <Image style={styles.planetStyle} source={require("./images/mars.png")}></Image>
                <Text sytle={styles.planetInnerStyle}>Mars</Text>
              </View> 
              <View>
                <Image style={styles.planetStyle} source={require("./images/jupiter.png")}></Image>
                <Text sytle={styles.planetInnerStyle}>Jupiter</Text>
              </View> 
              <View>
                <Image style={styles.planetStyle} source={require("./images/saturn.png")}></Image>
                <Text sytle={styles.planetInnerStyle}>Saturn</Text>
              </View> 
              <View>
                <Image style={styles.planetStyle} source={require("./images/uranus.png")}></Image>
                <Text sytle={styles.planetInnerStyle}>Uranus</Text>
              </View> 
              <View>
                <Image style={styles.planetStyle} source={require("./images/neptune.png")}></Image>
                <Text sytle={styles.planetInnerStyle}>Neptune</Text>
              </View> 
            
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
  marginLeft:20
  
},
planetContianer:{
 
  
}


});