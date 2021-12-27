import React from 'react'
import { View, Text, TouchableOpacity,TextInput,StyleSheet, StatusBar, ScrollView } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import AnimatedLottieView from 'lottie-react-native';


const signup = ({navigation}) => {
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
    const [name, onChangeName] = React.useState(null);

    const handleSignUp = () => {
      auth()
    .createUserWithEmailAndPassword(number, text)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });
  }
    
      return (
          <View style={{flex:1,backgroundColor:'#fff',padding:20}}>
            <ScrollView>
                   <StatusBar backgroundColor="transparent" />
            <View style={{flex:1,flexDirection:'row',margin:10,justifyContent:'flex-start',alignItems:'center'}}>
              <TouchableOpacity style={{width:50,height:50, borderRadius:10, backgroundColor:'#da855e',marginEnd:20, elevation:5, borderColor:'#212121',borderWidth:2,justifyContent:'center',alignItems:'center'}}
                 onPress={()=>navigation.popToTop()}>
              <MaterialIcon name="keyboard-arrow-left" size={45} color="#212121" />
                </TouchableOpacity>
            <Text style={{fontSize:36,color:"#212121",fontFamily:"BeautyMountains"}}>Sign Up</Text>
            <View style={{flex:1,flexDirection:'row',height:"100%",width:"100%",justifyContent:'flex-end',alignContent:'flex-end',alignSelf:'flex-end',marginLeft:50}}>
          <AnimatedLottieView source={require('./assets/diamond.json')} autoPlay loop style={{flex:1,alignSelf:'flex-end'}} />
          </View>
            
            </View>

  
            <View style={{marginTop:40,justifyContent:'center'}}>
             <Text style={{color:'#707070',fontSize:17,marginLeft:10}}>Sign Up with one of the following options</Text>
             <View style={{marginTop:10,flexDirection:'row',justifyContent:'center',alignItems:'center',marginLeft:20,marginEnd:20}}>
               <TouchableOpacity style={{width:170,height:70, borderRadius:20, backgroundColor:'#fff',marginEnd:20, elevation:10,justifyContent:'center',alignItems:'center'}}>
               <AntDesignIcon name="google" size={35} color="#212121" />
               </TouchableOpacity>
               <TouchableOpacity style={{width:170,height:70, borderRadius:20, backgroundColor:'#fff', elevation:10,justifyContent:'center',alignItems:'center'}}>
               <MaterialIcon name="facebook" size={40} color="#212121" />                      
                </TouchableOpacity>
             </View>

             <View>
               <Text style={{color:'#212121',fontSize:17,fontWeight:'bold',marginLeft:10,marginTop:20}}>Name</Text>
               <View>
               <TextInput
                  style={styles.input}
                     onChangeText={(name)=>onChangeName(name)}
                    value={name}
                       placeholder="Enter Name"
                        placeholderTextColor='#707070'
                           selectionColor='#da855e'
                             textContentType="name"
                             color="#212112"
                             fontSize={17}
                             padding={20}
                             
                            
                                                             />
               </View>
             </View>
  
             <View>
               <Text style={{color:'#212121',fontSize:17,fontWeight:'bold',marginLeft:10,marginTop:10}}>Email</Text>
               <View>
               <TextInput
                  style={styles.input}
                     onChangeText={(email)=>onChangeNumber(email)}
                    value={number}
                       placeholder="Enter Email"
                        placeholderTextColor='#707070'
                           selectionColor='#da855e'
                             textContentType="emailAddress"
                             color="#212121"
                             fontSize={17}
                             padding={20}
                             
                            
                                                             />
               </View>
             </View>
             <View>
               <Text style={{color:'#212121',fontSize:17,fontWeight:'bold',marginLeft:10,marginTop:10}}>Password</Text>
               <View>
               <TextInput
                  style={styles.input}
                     onChangeText={(password)=>onChangeText(password)}
                    value={text}
                       placeholder="Enter Password"
                        placeholderTextColor='#707070'
                           selectionColor='#da855e'
                             textContentType="password"
                             color="#212121"
                             fontSize={17}
                             padding={20}
                             secureTextEntry/>
               </View>
              
               <TouchableOpacity style={{height: 60,
      
                 borderRadius:20,
                    margin: 12,
               elevation:10,
                justifyContent:'center',
                 alignItems:'center',
                  marginTop:20}} onPress={handleSignUp}>
         <LinearGradient style={styles.linearGradient} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} colors={['#da855e', '#ffae6d', '#da855e']}>
                           <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Create Account</Text>
                           </LinearGradient>
               </TouchableOpacity>
              
               <View style={{flexDirection:'row', justifyContent:'center',alignContent:'center',marginTop:10}}>
               <Text style={{color:'#fff',alignSelf:'center'}}>Already have An Account?  </Text>
               <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>navigation.goBack()}><Text style={{color:'#da855e',fontWeight:'bold',fontSize:16}}>Log In</Text></TouchableOpacity>
               </View>
             </View>
             
            </View>
            </ScrollView>
          </View>
             
      )
}

export default signup

const styles = StyleSheet.create({
    input: {
        height: 66,
        backgroundColor:'#fff',
        elevation:10,
        borderRadius:10,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        borderColor:'#da855e',
        color:'#212121'
        
      },
      linearGradient: {
        height:'100%',
        width:'100%',
        flex:1,
        borderRadius: 20,
        justifyContent:'center',
        alignItems:'center'
        
      },
})
