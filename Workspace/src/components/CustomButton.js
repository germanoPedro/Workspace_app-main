import React from "react";
import GlobalStyle from "../utils/GlobalStyle";
import { Text, Pressable } from "react-native";

const CustomButton = (props) =>{
    return(
        <Pressable
              style={({pressed}) => [
                GlobalStyle.buttons,
                {backgroundColor: pressed ? '#e3e3e3' : '#0C3B2E',}
              ]}
              onPress={props.onPressMethod}
            >
            <Text style={{
              textAlign: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: 20,
            }}>{props.title}</Text>
          </Pressable>
    )
}

export default CustomButton;