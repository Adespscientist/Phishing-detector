import { Text, TouchableOpacity, View } from 'react-native'
import LottieView from 'lottie-react-native'
import {Feather} from 'react-native-vector-icons/Feather'
import {AiFillHome, AiFillNotification, AiFillUser, AiFillSetting } from 'react-icons/ai'
export const SIZES={
    extrasmall: 6,
    small: 10,
    medium: 16,
    large: 24,
    extralarge: 32
}

export const COLOURS={
    white: "#fff",
    dark:"#000",
    button:"#4254FC"
}

export const FONTS ={
    bold: "Inter-Bold",
    medium: "Inter-Medium",
    light: "Inter-Light",
    semibold: "Inter-SemiBold",
    sport: "Sports",
    yagora: "Yagora",
    fabarLight: "FabarLight",
    fabarSans: "FabarSans",
    ufont: "UFont"
}
export const Slide1= ({title, content}) =>{
    return(

        <View style={{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
              <LottieView source={require('../assets/images/data 13.json')} autoPlay loop style={{width:200, height:200}} />
              <Text style={{
                fontFamily: FONTS.sport,
                fontSize: SIZES.extralarge,
                marginBottom:SIZES.large,
                color:'#fff'
              }}>{title}</Text>
              <Text style={{
                fontFamily: FONTS.yagora,
                fontSize: SIZES.medium,
                textAlign: 'center',
                color:'#fff'
              }}>{content}</Text>
          </View>
    )
}
export const Slide2= ({title, content}) =>{
    return(

        <View style={{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
              <LottieView source={require('../assets/images/data 3.json')} autoPlay loop style={{width:200, height:200}} />
              <Text style={{
               fontFamily: FONTS.sport,
               fontSize: SIZES.extralarge,
               marginBottom:SIZES.large,
                color:'#fff'
              }}>{title}</Text>
              <Text style={{
                fontFamily: FONTS.medium,
                fontSize: SIZES.medium,
                textAlign: 'center',
                color:'#fff'
              }}>{content}</Text>
          </View>
    )
}
export const Slide3= ({title, content}) =>{
    return(

        <View style={{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
              <LottieView source={require('../assets/images/data 5.json')} autoPlay loop style={{width:200, height:200}} />
              <Text style={{
                fontFamily: FONTS.sport,
                fontSize: SIZES.extralarge -10,
                marginBottom:SIZES.large,
                color:'#fff'
              }}>{title}</Text>
              <Text style={{
                fontFamily: FONTS.fabarLight,
                fontSize: SIZES.medium,
                textAlign: 'center',
                color:'#fff'
              }}>{content}</Text>
          </View>
    )
}



export const Item =({icons})=>{
  return(
    <TouchableOpacity >
        <Feather name={icons} size={24} color={'#fff'} />
      </TouchableOpacity>
  
  )
}