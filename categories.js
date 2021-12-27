import React from 'react'
import { View, Text ,FlatList,TouchableOpacity,Image} from 'react-native'


const categories = () => {
    const DATA = [
        {
          id:1,
          title: "Rings",
          picture:require('./assets/ring4.png'),
         
        },
        {
          id:1,
          title: "Necklaces",
          picture:require('./assets/emerald.png'),
         
        },
        {
          id:1,
          title: "Braclets",
          picture:require('./assets/Ring.png'),
         
        },
        {
            id:1,
            title: "Pins",
            picture:require('./assets/Ring.png'),
           
          },
         
        
      ];
    return (
        <View style={{backgroundColor:"#EAEEEE",flex:1}}>
             <View style={{marginLeft:20,marginRight:20}}>
                <Text style={{alignSelf:'center',color:"#212121",fontFamily:"BeautyMountains",fontSize:45}}>Categories</Text>
             </View>
             <FlatList
          
          data={DATA}
          keyExtractor={(item, index) => index}
          renderItem={({item,index}) =>
         
        <TouchableOpacity style={{flex:1,flexDirection:'row',marginTop:20,width:"90%",alignSelf:'center',height:"15%",elevation:10,backgroundColor:"#FAFAFA",borderRadius:17,padding:1,alignItems:'center'}}>
          <Image source={item.picture} style={{margin:10,width:100,height:100,backgroundColor:'#ebecf0',alignSelf:'center',borderRadius:15}}></Image>
          <View>
          <Text style={{marginLeft:10,fontSize:22,color:'#212121',fontWeight:'bold'}}>{item.title}</Text>
          </View>
        </TouchableOpacity>
       
          }
          /> 
        </View>
    )
}

export default categories
