import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Button, IncreaseButton, ReduceButton } from "../components/Button";
import BottomNavigation from "../components/BottomNavigation";
import FocusedStatusBar from "../components/FocusedStatusBar";
import { DefaultTheme } from "@react-navigation/native";
import Scan, { ProgressSpinner, Spinner } from "../components/Scan";
import { useReactContext } from "../context/ContextProvider";
import Activity from "../components/Activity";
import HomeHeader from "../components/HomeHeader";
import Report from "./Report";
const Home = () => {
  const { setProgress, progress,startProgressBar } = useReactContext();
  const handleDecrease = ()=>{
        setProgress(0)
  }

  return (
    <>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor={DefaultTheme.colors.dark}
      />
       
      <HomeHeader title="Hi" />
      {progress !==100 ?(
 <View
 style={{
   flex: 1,
   alignItems: "center",
 }}
>
 
 <Spinner />
 <IncreaseButton start="Detect Phishing Link" />


 <Activity />
 <BottomNavigation />
</View>
      ):
      
        <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
       >
      <Report />
      </View>
    }
     
  

    </>
  );
};

export default Home;
