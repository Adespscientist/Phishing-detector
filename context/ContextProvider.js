import { View, Text } from "react-native";
import React, { createContext, useContext, useState } from "react";
const ReactContext = createContext();
export const ContextProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);
  const [errorEmailState, setErrorEmailState] = useState(0);
  const [emailCheckState, setEmailCheckState] = useState(2220);
  const [errorSmsState, setErrorSmsState] = useState(3);
  const [smsCheckState, setSmsCheckState] = useState(20);
  const [errorCallState, setErrorCallState] = useState(10);
  const [callCheckState, setCallCheckState] = useState(9);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const startProgressBar = () => {
    let progressInterval = setInterval(() => {
      setProgress((progress) => {
        if (progress === 100) {
          clearInterval(progressInterval);
          return progress;
        } else {
          return progress + 1;
        }
      }, 5000);
    });
  };
  const handleDrawer = () =>{
    setIsDrawerOpen(!isDrawerOpen)
  }
  return (
    <ReactContext.Provider
      value={{
        progress,
        setProgress,
        startProgressBar,
        errorEmailState, setErrorEmailState,
        emailCheckState, setEmailCheckState,
        errorSmsState, setErrorSmsState,
        smsCheckState, setSmsCheckState,
        errorCallState, setErrorCallState,
        callCheckState, setCallCheckState,
        handleDrawer,
        isDrawerOpen, setIsDrawerOpen

      }}
    >
      {children}
    </ReactContext.Provider>
  );
};

export const useReactContext = () => useContext(ReactContext);
