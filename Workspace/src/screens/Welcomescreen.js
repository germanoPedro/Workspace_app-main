import React from "react";
import {View, Text, ImageBackground} from "react-native";
import GlobalStyle from "../utils/GlobalStyle";

//TODO implement UI

const Welcomescreen = ({navigation}) => {

    return (
      <ImageBackground 
      style={[GlobalStyle.body, {justifyContent: 'center', alignItems: 'center',}]}
      source={require('../../Assets/photos/exampleImage.jpg')}
      >
        <Text style={[GlobalStyle.loneText, {color: '#000',}]}
        onPress={() => {navigation.navigate('Register')}}
        >Welcome</Text>
      </ImageBackground>
    );
}

export default Welcomescreen;