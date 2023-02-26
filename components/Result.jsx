import { View, Text } from 'react-native'
import React from 'react'
import { COLOURS } from '../data/data'

const Result = ({title}) => {
  return (
    <View>
        <View style={{
            backgroundColor:COLOURS.button,
            padding:15,
            borderRadius:10,
          
        }}>
      <Text style={{
          color:"#fff"
      }}>{title}</Text>
      </View>
    </View>
  )
}

export default Result