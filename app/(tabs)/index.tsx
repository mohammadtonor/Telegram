import {Image, StyleSheet, Platform, View, Text, StatusBar} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {SplashScreen} from "expo-router";
import {useEffect} from "react";


export default function HomeScreen() {

  return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white">
          <Text>Open up App.js to start working on your app!</Text>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
