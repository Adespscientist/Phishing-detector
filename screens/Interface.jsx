import { View, Text, SafeAreaView, Animated } from "react-native";
import React, { useState, useEffect } from "react";
import { Slide1, Slide2, Slide3 } from "../data/data";
import FocusedStatusBar from "../components/FocusedStatusBar";
import { DefaultTheme, useNavigation } from "@react-navigation/native";
import { withNavigation } from 'react-navigation';
import {  Button, StartButton } from "../components/Button";
import { render } from "react-dom";


const Interface = () => {
  const navigation = useNavigation()
  const [slide, setSlide] = useState()
  const [currentStep, setCurrentStep] = useState(0)
  const [fadeAnim] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [currentStep]);


const lastStep =()=>{
  switch(currentStep){
    case 2:
      return <Slide3
      title="Peace of Mind"
      content="We will help you manage and control all phishing links sent to emails, sms and other services on your mobile phone"

    />;
    default:
      return null;
  }
}
  const renderStep = ()=>{
    
    switch (currentStep){
      case 0:
        return <Slide1
          title="Data Privacy"
          content="We will help you manage and control all phishing links sent to emails, sms and other services on your mobile phone"
     
        />;
        case 1: 
        return  <Slide2
        title="Bots Information"
        content="We will help you manage and control all phishing links sent to emails, sms and other services on your mobile phone"
      />;
      case 2:
        return lastStep();
      default:
        return null;
    }
  }
  const handlePressNext = () =>{
    setCurrentStep(currentStep + 1)
  }
  const handlePressSkip = () =>{
    setCurrentStep(2)
  
  }
  const handleStartPress = ()=>{
    navigation.navigate('Home')
  }
  return (

    <SafeAreaView style={{ flex: 1}}>
      <FocusedStatusBar
        barStyle="light-content" 
        backgroundColor={DefaultTheme.colors.dark}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          margin: 20,
        }}
      >
          
        {renderStep()}
      
        {currentStep !==2 ? (<View>
          <Button skip="Skip" onPressSkip={handlePressSkip} next="Next" onPressNext={handlePressNext} />
        </View>):
         <StartButton start="Get Started" handleStartPress={handleStartPress}/>
        }
        
      </View>
      
     
    </SafeAreaView>
  );
};

export default Interface;
