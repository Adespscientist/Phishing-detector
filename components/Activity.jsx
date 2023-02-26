import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { FONTS, SIZES } from "../data/data";
import { ScrollView } from "react-native";
import { useReactContext } from "../context/ContextProvider";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ReduceButton } from "./Button";

const Activity = () => {
    const {progress, setProgress, errorEmailState, emailCheckState, errorSmsState, smsCheckState, errorCallState, callCheckState,handleDrawer, isDrawerOpen, setIsDrawerOpen} = useReactContext() 
    const handleDecrease = ()=>{
      setProgress(0)
}

  const ListContent = [
    {
      id: 1,
      title: "Emails",
      status: "Monitored",
      icon: 'email',
      status1:'error-outline',
      status2:'check-circle-outline',
      color: '#ff9254',
      statusRed:errorEmailState ,
      statusGreen:emailCheckState 
    },
    {
      id: 2,
      title: "SMS",
      status: "Monitored",
      icon:'sms',
      status1:'error-outline',
      status2:'check-circle-outline',
      color: '#d8b2ff',
      statusRed:errorSmsState ,
      statusGreen:smsCheckState 
    },
    {
      id: 3,
      title: "Calls",
      status: "Monitored",
      icon: 'add-ic-call',
      status1:'error-outline',
      status2:'check-circle-outline',
      color: '#0ad357',
      statusRed:errorCallState ,
      statusGreen:callCheckState 
    },
  ];
  const Item = ({title, icon, status1, status2, color, statusRed, statusGreen, status})=>{

    return(
        <ScrollView>
        <View style={{
            flexDirection: 'row',
            justifyContent:'space-between',
            padding:5,
            margin:10
            
        }}>
        <View style={{
            flexDirection: 'row',
            alignItems:'center',
            gap:15
            
        }}>
            <MaterialIcons name={icon} size={20} style={{backgroundColor:color, padding:10, borderRadius:10, color:'#fff'}}/>
            <View>
            <Text style={{
                color:'#fff',
                fontFamily: FONTS.bold
            }}>{title}</Text>
            <Text style={{
                color:'#fff',
                fontFamily: FONTS.light,
                fontSize: SIZES.small + 2,
                color:'#c4c4c4',
                marginTop:4
            }}>{status}</Text>
            </View>
          
            
        </View>
        <View style={{
            flexDirection: 'row',
            justifyContent:'space-between',
            gap:20,
            alignItems:'center'
            
        }}>
        <View style={{
            flexDirection: 'row',
            alignItems:'center',
            backgroundColor:'rgba(255, 0, 0,0.2)',
            borderRadius:15,
            padding:10,
            gap:10
        }}>
        <MaterialIcons name={status1} size={14} style={{
            color:'#ff0000',

           }}/>
           <Text style={{
             color:'#ff0000',
           }}>{statusRed}</Text>
        </View>
        <View
        style={{
            flexDirection: 'row',
            alignItems:'center',
            backgroundColor:'rgba(0, 255, 0, 0.2)',
            borderRadius:15,
            padding:10,
            gap:10
        }}>
        <MaterialIcons name={status2}  size={14} style={{
            color:'#00ff00',

        }}/>
        <Text style={{
             color:'#00ff00',
        }}>{statusGreen}</Text>
        </View>
     
        </View>
        </View>
        </ScrollView>
    )
  }
  return (
    
    <View style={{
        flex: 1,
        backgroundColor: "#191C37",
        width: "100%",
        height:'36%',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
       position:'absolute',
       bottom:0,
       ...(isDrawerOpen ? {height: '58%',marginBottom:10} : {})
   
      }}>
        
    <View style={{
        // height:'100%',
      
    }} >
        <TouchableOpacity onPress={handleDrawer}>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
               flexDirection: 'row',
            // marginTop:-20
              
            }} >
            <MaterialIcons name="minimize" size={40} style={{color:'#fff'}}/>
            </View>
        </TouchableOpacity>
        <ReduceButton start="Decrease" handleDecrease={handleDecrease} />
    <View
     
    >
      <Text
        style={{
          fontSize: SIZES.medium,
          fontFamily: FONTS.bold,
          color: "#fff",
          padding:5,
          marginLeft:10
        }}
      >
        Activity
      </Text>
      <FlatList
        data={ListContent}
        renderItem={({item})=> <Item title={item.title} icon={item.icon} status ={item.status} status1={item.status1} status2={item.status2} color={item.color} statusRed={item.statusRed} statusGreen={item.statusGreen}/>}
        keyExtractor={(item)=> item.id}
      >

      </FlatList>
    </View>
    </View>
    </View>
  );
};

export default Activity;
