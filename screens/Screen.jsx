import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { DefaultTheme } from '@react-navigation/native'
import FocusedStatusBar from '../components/FocusedStatusBar'
import { useEffect } from 'react'
import Loader from './Loader'
const Screen = () => {
  const [change, setChange] = useState(false)
  useEffect(()=>{
    const timeout= setTimeout(()=>{
        setChange(true)
    }, 2000)
    return ()=> clearTimeout(timeout)
  })
 
  return (
    <SafeAreaView style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
      <FocusedStatusBar barStyle="light-content" backgroundColor={DefaultTheme.colors.dark}/>
  
     <Loader />
   
       
    </SafeAreaView>
  )
}

export default Screen