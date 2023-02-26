
import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const Details = () => {
  return (
    <View>
      <View style={{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',

      }}>
        
        {/* <LottieView source={require('../assets/images/84037-pattern-animation.json')} autoPlay loop style={{width:100, height:10s0, borderRadius:100, position:'absolute'}}/> */}
        <LottieView source={require('../assets/images/shieldpro.json')} autoPlay loop style={{width:100, height:100 }}/>
      </View>
    </View>
  )
}

export default Details