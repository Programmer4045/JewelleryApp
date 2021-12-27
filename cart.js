import React from 'react'
import { useState } from 'react';
import { View, Text ,FlatList,TouchableOpacity,Image} from 'react-native'
import CounterInput from "react-native-counter-input";

const cart = () => {
    const DATA = [
        {
          id:1,
          title: "The Ring",
          picture:require('./assets/ring4.png'),
          price:1999
        },
        {
          id:2,
          title: "The Swan's Ring",
          picture:require('./assets/emerald.png'),
          price:1999
        },
        {
          id:3,
          title: "The Swan's Ring",
          picture:require('./assets/ring2.png'),
          price:1999
        },
       
         
        
      ];
      const [counter,setCounter] = useState(null);

    return (
        <View style={{backgroundColor:"#EAE9ff",flex:1}}>
            
                <Text style={{alignSelf:'center',color:"#212121",fontFamily:"Pushster",fontSize:45}}>Cart</Text>


                <FlatList
          
          data={DATA}
          keyExtractor={(item, index) => index}
          renderItem={({item,index}) =>
         
        <TouchableOpacity style={{flex:2,flexDirection:'row',marginTop:20,width:"90%",alignSelf:'center',height:"45%",elevation:10,backgroundColor:"#FAFAFA",borderRadius:17,padding:1,alignItems:'center'}}>
          <Image source={item.picture} style={{margin:10,width:100,height:100,backgroundColor:'#ebecf0',alignSelf:'center',borderRadius:15}}></Image>
          <View>
          <Text style={{marginLeft:10,fontSize:18,color:'#212121',fontWeight:'bold'}}>{item.title}</Text>
          <Text style={{marginLeft:10,fontSize:18,color:'#212121'}}>{item.price} PKR</Text>
          
          </View>
          <View style={{justifyContent:'flex-end',alignContent:'flex-end',alignSelf:'center'}}>
         
          </View>
        </TouchableOpacity>
       
          }
          /> 

<TouchableOpacity style={{bottom:100,flexDirection:'row',marginTop:20,width:"90%",alignSelf:'center',height:"10%",elevation:10,backgroundColor:"#3d3d3d",borderRadius:17,padding:1,alignItems:'center',justifyContent:'center'}}>
         
          <Text style={{marginLeft:10,fontSize:24,color:'#fff',fontWeight:'bold',textAlign:'center'}}>Check Out</Text>
          
       </TouchableOpacity>
             
        </View>
    )
}

export default cart
