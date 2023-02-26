import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Interface, Home, Loader } from "./screens";
import { useFonts } from "expo-font";
import 'react-native-gesture-handler'
import { ContextProvider } from "./context/ContextProvider";
import Report from "./screens/Report";
import { authAsync } from './auth';
import {useEffect, useState} from 'react'
const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: DefaultTheme.colors.dark,
  },
};

const App = () => {
  const [authState, setAuthState] = useState(null);

 useEffect(() => {
    authAsync()
      .then((authState) => setAuthState(authState))
      .catch((error) => console.log(error));
  }, []);

  const [loaded] = useFonts({
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Sports": require("./assets/fonts/Sports.ttf"),
    "Yagora": require("./assets/fonts/Yagora.ttf"),
    "FabarLight": require("./assets/fonts/FabarSansLight.ttf"),
    "FabarSans": require("./assets/fonts/FabarSansPro.ttf"),
    "UFont": require("./assets/fonts/UFont-Sans-Medium.ttf"),
  });
  return (
    <ContextProvider>
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Loader">
        <Stack.Screen name="Loader" component={Loader} navigation/>
        <Stack.Screen name="Interface" component={Interface} navigation/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Report" component={Report} />
      </Stack.Navigator>
    </NavigationContainer>
    </ContextProvider>
  );
};
export default App;
