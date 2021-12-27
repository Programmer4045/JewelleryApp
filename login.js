import React from 'react'
import { View, Text, TouchableOpacity,TextInput,StyleSheet, StatusBar, Keyboard } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import AnimatedLottieView from 'lottie-react-native';


const login = ({navigation}) => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  const handleLogin = () =>{
    auth()
    .signInWithEmailAndPassword(number, text)
    .then(() => {
      console.log('User account created & signed in!');
      Keyboard.dismiss();
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
           
                 <StatusBar backgroundColor="transparent" />
          <View style={{flexDirection:'row',margin:10,justifyContent:'flex-start',alignItems:'center'}}>
            <TouchableOpacity style={{width:50,height:50,elevation:10, borderRadius:10, backgroundColor:'#da855e',marginEnd:20, elevation:5, borderColor:'#212121',borderWidth:2,justifyContent:'center',alignItems:'center'}}>
            <MaterialIcon name="keyboard-arrow-left" size={45} color="#212121" />
              </TouchableOpacity>
          <Text style={{fontSize:46,color:"#101010", fontFamily:"BeautyMountains"}}>Login</Text>
           <View style={{flex:1,flexDirection:'row',height:100,width:"100%",justifyContent:'flex-end',alignContent:'flex-end',alignSelf:'flex-end',marginLeft:50}}>
          <AnimatedLottieView source={require('./assets/diamond3.json')} autoPlay loop style={{flex:1,alignSelf:'flex-end'}} />
          </View>
          </View>

          <View style={{marginTop:30,justifyContent:'center'}}>
           <Text style={{color:'#707070',fontSize:17,marginLeft:10}}>Login with one of the following options</Text>
           
           <View style={{marginTop:10,flexDirection:'row',justifyContent:'center'}}>
             <TouchableOpacity style={{width:170,height:80, borderRadius:20, backgroundColor:'#fff',marginEnd:20, elevation:10,justifyContent:'center',alignItems:'center'}}>
             <AntDesignIcon name="google" size={45} color="#3d3d3d" />
             </TouchableOpacity>
             <TouchableOpacity style={{width:170,height:80, borderRadius:20, backgroundColor:'#fff', elevation:10,justifyContent:'center',alignItems:'center'}}>
             <MaterialIcon name="facebook" size={50} color="#3d3d3d" />                      
              </TouchableOpacity>
           </View>

           <View>
             <Text style={{color:'#101010',fontSize:17,fontWeight:'bold',marginLeft:10,marginTop:40}}>Email</Text>
             <View>
             <TextInput
                style={styles.input}
                   onChangeText={(email)=>onChangeNumber(email)}
                  value={number}
                     placeholder="Enter Email"
                      placeholderTextColor='#707070'
                         selectionColor='#bb18d4'
                           textContentType="emailAddress"
                           color="#101010"
                           fontSize={17}
                           padding={20}
                           
                          
                                                           />
             </View>
           </View>
           <View>
             <Text style={{color:'#101010',fontSize:17,fontWeight:'bold',marginLeft:10,marginTop:10}}>Password</Text>
             <View>
             <TextInput
                style={styles.input}
                   onChangeText={(password)=>onChangeText(password)}
                  value={text}
                     placeholder="Enter Password"
                      placeholderTextColor='#707070'
                         selectionColor='#bb18d4'
                           textContentType="password"
                           color="#101010"
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
                marginTop:20}} onPress={handleLogin }>
                 
       <LinearGradient style={styles.linearGradient} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} colors={['#da855e', '#ffae6d', '#da855e']}>
                         <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Log In</Text>
                         </LinearGradient>
             </TouchableOpacity>
            
             <View style={{flexDirection:'row', justifyContent:'center',alignContent:'center',marginTop:10}}>
             <Text style={{color:'#fff',alignSelf:'center'}}>Don't have An Account?  </Text>
             <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>navigation.navigate("Signup")}><Text style={{color:'#da855e',fontWeight:'bold',fontSize:16}}>Sign Up</Text></TouchableOpacity>
             </View>
           </View>
           
          </View>
        </View>
           
    )
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    backgroundColor:'#fff',
    borderRadius:10,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderColor:'#da855e',
    elevation:10,
    color:"#212121"
    
  },
  linearGradient: {
    height:'100%',
    width:'100%',
    flex:1,
    borderRadius: 20,
    justifyContent:'center',
    alignItems:'center'
    
  },
});

export default login
