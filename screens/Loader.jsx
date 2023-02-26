import { View, Text, SafeAreaView } from 'react-native'
import React, {useEffect, useState} from 'react'
import LottieView from 'lottie-react-native'
import { COLOURS, FONTS, SIZES } from '../data/data'
import { DefaultTheme } from '@react-navigation/native'
import FocusedStatusBar from '../components/FocusedStatusBar'
import Interface from './Interface'
const Loader = ({}) => {
  const [changeScreen, setChangeScreen] = useState(false)
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setChangeScreen(true)
    },5000)
    return () => clearTimeout(timeout)
  })
  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar barStyle="light-content" backgroundColor={DefaultTheme.colors.dark}/>
      {!changeScreen ? (
 <View style={{
  flex:1,
  alignItems: 'center',
  justifyContent: 'center'
}}>
  <LottieView source={require('../assets/images/105091-cybersecurity.json')} autoPlay loop style={{width:200, height:200}}/>
  <Text style={{
    fontFamily: FONTS.medium,
    fontSize: SIZES.large,
    color: DefaultTheme.colors.border,
    fontFamily: FONTS.semibold
  }}>Phishing Detector</Text>
</View>
      ):
      
      <View style={{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Interface />
      </View>
    }
   
    </SafeAreaView>
  )
}

export default Loader

// import React, { useEffect, useState } from 'react';
// import { Text, View } from 'react-native';
// import Gmail from '../gmail';

// function Loader() {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const messages = await Gmail.getMessages();
//       setMessages(messages);
//     }

//     fetchData();
//   }, []);

//   return (
//     <View style={{
//       backgroundColor:"red"
//     }}>
//       <Text style={{color:"#000"}}>Hello</Text>
//     </View>
//   );
// }

// export default Loader;
