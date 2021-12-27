import React, { useState } from 'react'
import { View, Text ,Image, TouchableOpacity,FlatList} from 'react-native'
import { SearchBar } from 'react-native-elements'
import auth from '@react-native-firebase/auth';
import AnimatedLottieView from 'lottie-react-native';


const dashboard = ({navigation}) => {
    const [search,setSearch] = useState('');
    const handleSignOut = () => {
      auth()
  .signOut()
  .then(() => navigation.pop(),
  console.log('User signed out!'));
    }

    const DATA = [
      {
        id:1,
        title: "The Necklace",
        picture:require('./assets/necklace.png'),
        price:2999
      },
      {
        id:1,
        title: "Emerald King",
        picture:require('./assets/emerald.png'),
        price:1999
      },
      {
        id:1,
        title: "The Swan's Ring",
        picture:require('./assets/ring2.png'),
        price:1999
      },
      {
        id:1,
        title: "Lord of the Rings",
        picture:require('./assets/ring3.png'),
        price:1999
      },
      
    ];
    return (
        <View style={{backgroundColor:"#fffbf0",flex:1}}>
            <View style={{flex:1,marginLeft:20,marginRight:20}}>
              <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',alignContent:'center',marginTop:5}}>
                <View style={{flex:0.5,height:"100%",width:"100%",marginRight:20}}>
              <AnimatedLottieView source={require('./assets/diamondyellow.json')}  autoPlay loop />
              </View>
              <Text style={{alignSelf:'center',color:"#212121",fontFamily:"BebasNeue-Regular",fontSize:45}}>Dashboard</Text>
              <Image style={{width:50,height:50, borderRadius:50, marginLeft:20,alignSelf:'flex-end'}}
        source={require('./assets/profile3.jpg')} />
              </View>
            
            <SearchBar
        placeholder="Type Here..."
        onChangeText={search => setSearch(search)}
        value={search}
        lightTheme
        round
        platform={'android'}
        containerStyle={{elevation:5,borderRadius:10,marginTop:10,padding:10,backgroundColor:'#fff'}}
      />

      <TouchableOpacity style={{flexDirection:'row',width:"100%",height:170,backgroundColor:"#da855e",borderRadius:15,elevation:10,alignSelf:'center',marginTop:30,alignContent:'center',justifyContent:'center'}}>
          <View style={{alignSelf:'center'}}>
          <Text style={{fontSize:45,marginLeft:20,color:"#fff",fontFamily:"BebasNeue-Regular"}}>New</Text>
          <Text style={{fontSize:55,marginLeft:20,color:"#fff",fontFamily:"BebasNeue-Regular"}}>Arrivals</Text>
          </View>
         <Image source={require('./assets/Ring.png')} style={{width:200,height:200,alignSelf:'center'}}></Image>
      </TouchableOpacity>

      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <Text style={{marginTop:20,fontSize:34,color:"#212121",fontFamily:"BeautyMountains"}}>Most Popular</Text>
      <TouchableOpacity><Text style={{marginTop:20,fontSize:22,color:"#da855e",fontWeight:'bold'}}>See All</Text></TouchableOpacity>
      </View>

      <FlatList
          
          data={DATA}
          horizontal
          keyExtractor={(item, index) => index}
          renderItem={({item,index}) =>
          <View style={{marginRight:20}}>
  
          <TouchableOpacity style={{marginTop:20,width:"100%",height:"60%",elevation:10,backgroundColor:"#fff",alignSelf:'flex-start',borderRadius:17,padding:1}}>
         <Image source={item.picture} style={{margin:10,width:170,height:150,backgroundColor:'#ebecf0',alignSelf:'center',borderRadius:15}}></Image>
          <Text style={{marginLeft:20,fontSize:20,color:'#212121',fontFamily:"Righteous-Regular"}}>{item.title}</Text>
          <Text style={{marginLeft:20,fontSize:18,color:'#212121'}}>{item.price} PKR</Text>

       </TouchableOpacity>
       </View>
          }
          /> 
      
        </View>
        
        
 
        
        
        </View>
    )
}

export default dashboard
