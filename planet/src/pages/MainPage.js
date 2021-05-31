import React from 'react';
import {View,Text, SafeAreaView,StyleSheet,Image} from 'react-native';


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
             <Text>Planet List</Text>
              <Image style={styles.imageStyle} source={require("./images/merkur.png")}></Image>
        </View>     
        
    </SafeAreaView>
  )
}
export default MainPage;
const styles=StyleSheet.create({
  container:{     
    margin:15,
  },
  
  textStyle:{
    fontSize:40,
    fontFamily:"PlayfairDisplay-VariableFont_wght"
  },
 
  imageStyle:{
    marginTop:7,
    maxHeight:300,
    maxWidth:370,
    borderWidth:2,
    borderRadius:10
  },
 

});