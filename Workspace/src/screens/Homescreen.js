import React from "react";
import { View, Text } from "react-native";

//TODO implement UI

const Homescreen = ({navigation}) => {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
            <Text style={{
                fontSize: 30,
                textAlign: 'center',
                color: '#0C3B2E',
            }}>Home screen</Text>
        </View>
    )
}

export default Homescreen;