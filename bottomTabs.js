import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DashboardTab from './dashboard';
import ProfileTab from './profile';
import CategoriesTab from './categories'
import CartTab from './cart'
import MaterialCommunityIcons from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';




const Tab = createMaterialBottomTabNavigator();


const bottomTabs = () => {
    return (
        <Tab.Navigator barStyle={{alignContent:'center',justifyContent:'center',position:'absolute',bottom:15,left:20,right:20,borderRadius:15,elevation:10,height:70,backgroundColor:'#212121'}}>
        <Tab.Screen name="Home" component={DashboardTab}  options={{
          tabBarLabel: 'Home',
      
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
        <Tab.Screen name="categories" component={CategoriesTab}
         options={{
            tabBarLabel: 'Categories',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="dashboard" color={color} size={26} />
            ),
          }} />
        <Tab.Screen name="Cart" component={CartTab}  options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shopping-cart" color={color} size={26} />
          ),
        }} />
        <Tab.Screen name="profile" component={ProfileTab}  options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="user" color={color} size={26} />
          ),
        }} />
      </Tab.Navigator>
    )
}

export default bottomTabs
