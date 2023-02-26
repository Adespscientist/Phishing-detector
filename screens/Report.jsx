import { View, Text, Touchable } from 'react-native'
import React from 'react'
import Result from '../components/Result'
import Details from '../components/Details'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useReactContext } from '../context/ContextProvider'
import { useNavigation } from '@react-navigation/native'

const Report = () => {
  const navigation = useNavigation()
  const { setProgress, progress,startProgressBar } = useReactContext();
  const handleDecrease = ()=>{
        navigation.goBack('Home')
        setProgress(0)
  }
  return (
    <View>
      <TouchableOpacity onPress={handleDecrease}>
      <Result title="Report" />
      </TouchableOpacity>
     
      <Details />
    </View>
  )
}

export default Report