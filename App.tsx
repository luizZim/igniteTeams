import { ThemeProvider } from "styled-components/native";
import theme from './src/theme'

import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { StatusBar } from "react-native";
import React from "react";

import { Routes } from "./src/routes"
import { Loading } from "@components/Loading";


export default function App() {
  const [ fontsLoaded ]= useFonts({Roboto_400Regular, Roboto_700Bold})

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor={"transparent"}
        translucent
      />
      {fontsLoaded ? <Routes/> : <Loading />}
    </ThemeProvider>
    
  );
}

