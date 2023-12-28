import React, { Component } from "react";
import HomeScreen from "./screens/Home";
import DailyPicScreen from "./screens/DailyPic";
import SpaceCraftsScreen from "./screens/SpaceCrafts";
import StarMapScreen from "./screens/StarMap";
import StackNavigator from "./components/StackNavigator";

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigatior initialRouteName="Home" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen} />
                <Stack.Screen name="DailyPic" component={DailyPicScreen} />
                <Stack.Screen name="StarMap" component={StarMapScreen} />
            </Stack.Navigatior>
        </NavigationContainer>
    )
}
    
//I didn't know how to complete task 1 from 'Getting started' and task 3 from 'specific tasks to Complete'
//Im also unsure of how to check the output on VS editor