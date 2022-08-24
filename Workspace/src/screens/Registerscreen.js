import React, { useState } from "react";
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    TextInput,
    Alert,
    Button,
  } from 'react-native';
import CustomButton from "../components/CustomButton";
  import GlobalStyle from "../utils/GlobalStyle";

  //TODO Complete screen and add tab navgator for Register and Login 
  //TODO Create login screen

  
const Registerscreen = ({navigation}) => {
  
    const [pressed, setPressed] = useState(false)
    const [clickedP, setClickedP] = useState(false)
    const [register, setRegister] = useState(true)
    const [nae, setNae] = useState('')
    const [surnae, setSurnae] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [pass, confrimPass] = useState('')
  
  
    const onChangeHanler = () =>{
      setClickedP(!clickedP)
    }
    const onPressHandler = () =>{
      setPressed(!pressed)
      if (pass == password){
        alert(`Name: ${nae} \nSurname: ${surnae}\nEmail: ${mail}\nPassword: ${password}\nCofirmPassword: ${pass}`)
        setNae('')
        setMail('')
        setPassword('')
        setSurnae('')
        confrimPass('')
        navigation.navigate('Home')
      }
      else{
        Alert.alert('Error!!!', 'Invalid password!', [
          {
            text:'Cancel', onPress: () => console.warn('Cancel Pressed!')
          },
          {
            text:'OK', onPress: () => {
              confrimPass('')
            }
          }
        ])
      }
    }
  
    return(
      <ScrollView style={GlobalStyle.body}>
        <View title='topBar' style={{
          flex: 1,
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
            <Text style={GlobalStyle.loneText}>Register</Text>
              
          </View>
  
        </View>
          <View title='body' style={GlobalStyle.body}>
            
          <TextInput
            style={GlobalStyle.edit}
            placeholder='Name'
            onChangeText={setNae} 
            value ={nae}
          />
              
          <TextInput
            style={GlobalStyle.edit}
            placeholder='Surname'
            onChangeText={setSurnae}
            value={surnae} 
          />
  
          <TextInput
            style={GlobalStyle.edit}
            placeholder='Email'
            onChangeText={setMail}
            value={mail}
            textContentType='emailAddress'
          />
          <TextInput
            style={GlobalStyle.edit}
            placeholder='Password'
            secureTextEntry
            onChangeText={(value) => {
              setPassword(value)
              setClickedP(true)
            }}
            value={password}
          />
            {clickedP ? <TextInput
                style={GlobalStyle.edit}
                secureTextEntry
                placeholder='Confirm Password'
                onChangeText={confrimPass}
                value={pass}
                />
                :
                null
            }
        </View>
        <View style={[GlobalStyle.body, {justifyContent: 'center', alignItems: 'center',}]}>
          <CustomButton
           onPressMethod={onPressHandler}
           title='Register' 
          />
        </View>
      </ScrollView>
    )
  }  

export default Registerscreen;