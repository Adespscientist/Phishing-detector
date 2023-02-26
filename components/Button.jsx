import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FONTS, SIZES } from "../data/data";
import { useReactContext } from "../context/ContextProvider";
export const Button = ({ skip, next, onPressNext, onPressSkip }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 15,
      }}
    >
      <TouchableOpacity onPress={onPressSkip}>
        <Text
          style={{
            color: "#fff",
            padding: 10,
          }}
        >
          {skip}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressNext}>
        <Text
          style={{
            color: "#fff",
            padding: 10,
          }}
        >
          {next}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export const StartButton = ({ start, handleStartPress }) => {
  return (
    <TouchableOpacity onPress={handleStartPress}>
      <View
        style={{
          justifyContent: "center",
          margin: 10,
          backgroundColor: "#4254FC",
          borderRadius: 8,
          padding: 15,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontFamily: FONTS.yagora,
            fontSize: SIZES.medium,
          }}
        >
          {start}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const IncreaseButton = ({ start, handleStartPress, handleDecrease }) => {
  const {startProgressBar, progress, setProgress}=useReactContext()
  return (
    <TouchableOpacity onPress={startProgressBar}>
      <View
        style={{
          flexDirection:'row',
           width:250,
          justifyContent: "center",
          margin: 10,
          backgroundColor: "#4254FC",
          borderRadius: 8,
          padding: 15,
          alignContent: "center",
          
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontFamily: FONTS.yagora,
            fontSize: SIZES.medium,
          }}
        >
          {start}
        </Text>
      </View>
    </TouchableOpacity>
  );

        }
export const ReduceButton = ({ start, handleStartPress, handleDecrease }) => {
  const {startProgressBar, progress, setProgress}=useReactContext()
  return (
    <TouchableOpacity onPress={handleDecrease}>
      <View
        style={{
          flexDirection:'row',
           width:100,
          justifyContent: "center",
      
          backgroundColor: "#4254FC",
          borderRadius: 8,
        
          alignContent: "center",
          
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontFamily: FONTS.yagora,
            fontSize: SIZES.medium,
          }}
        >
          {start}
        </Text>
      </View>
    </TouchableOpacity>
  );

        }