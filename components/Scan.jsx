import React, { useState } from "react";
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Stop,
  Path,
} from "react-native-svg";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { useReactContext } from "../context/ContextProvider";
import LottieView from "lottie-react-native";
import { FONTS } from "../data/data";
import Report from "../screens/Report";
export const Scan = () => {
  return (
    <View
      style={{
        margin: 20,
      }}
    >
      <LottieView
        source={require("../assets/images/data 18")}
        autoPlay
        loop
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textView: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    marginTop:50,
    // justifyContent: "center",
    alignItems: "center",
  },
});

const defaultProps = {
  percentage: 40,
  blankColor: "#eaeaea",
  donutColor: "#43cdcf",
  fillColor: "#252747",
  progressWidth: 35,
  size: 250,
};

const generateArc = (percentage, radius) => {
  const angle = percentage * 0.02 * Math.PI;
  const x = radius + radius * Math.sin(angle);
  const y = radius - radius * Math.cos(angle);
  const largeArcFlag = percentage > 50 ? 1 : 0;
  return `A${radius} ${radius} 0 ${largeArcFlag} 1 ${x} ${y}`;
};

export const Spinner = (props) => {
  const { progress } = useReactContext();
  const {
    percentage,
    blankColor,
    donutColor,
    fillColor,
    progressWidth,
    size,
    children,
  } = { ...defaultProps, ...props };
  const radius = size / 2;
  const circleProps = {
    cx: radius,
    cy: radius,
    r: radius - progressWidth / 2,
    fill: "none",
    stroke:
      progress < 20
        ? '#ff0008' // red
        : progress < 40
            ? '#ffbc49'  // yello:
            : progress < 75
              ? '#008cff' // blue
              
              :'#37ff00', // green
    
    strokeWidth: 15,
    strokeDasharray: "3, 5",
  };
  const outlineProps = {
    cx: radius,
    cy: radius,
    r: radius - progressWidth / 2,
    fill: "none",
    stroke: "red",
    strokeWidth: 12,
    strokeDasharray: "3, 5",
  };

  const progressProps = {
    cx: radius,
    cy: radius,
    r: 90,
    fill: fillColor,
  };
  return (
    <View style={{ width: size, height: size,marginLeft:50,marginRight:50, marginBottom:10}}>
      <Svg width={size} height={size}>
      <Circle {...outlineProps} />
        <Circle {...circleProps} />
        {/* <Path {...pathProps} /> */}
        <Circle {...progressProps} />
      </Svg>
      <View style={styles.textView}>
      <LottieView
        source={require("../assets/images/105091-cybersecurity.json")}
        autoPlay
        loop
        style={{ width: 60, height: 60 }}
      />
        <Text style={{color:'#fff', fontSize: 10, padding:4, fontFamily: FONTS.bold}}>
          {progress < 20 ? 'Current Protection Level is Low' : progress < 60 ? 'You are still at Risk' : 'You are Protected'  }
          
          </Text>
        <Text style={{color:'#fff', fontSize: 36, margin:6,  fontFamily: FONTS.sport}}>{progress}%</Text>
      </View>
    </View>
  );
};
// "#0074d9",