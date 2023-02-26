import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FONTS, SIZES } from '../data/data'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LottieView from 'lottie-react-native'
import { useReactContext } from '../context/ContextProvider'
const HomeHeader = ({title}) => {
  const {handleDrawer}= useReactContext()
  return (
    <View style={{
      marginTop:20,
      padding:24,
      flexDirection:'row',
      justifyContent:'space-between'
    }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap:5
      }}>
      <View style={{
        backgroundColor:'#c4c4c4',
        borderRadius:8
        
      }}>
        <LottieView source={require('../assets/images/data 8.json')} style={{width:30, height:30}}/>
      </View>
      <Text style={{color:'#fff', fontFamily: FONTS.medium, fontSize: SIZES.medium}}>{title}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={handleDrawer}>
            <MaterialIcons name="menu" size={24} style={{color:"#fff"}}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeHeader