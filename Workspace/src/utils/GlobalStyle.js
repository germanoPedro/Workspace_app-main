import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    body: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    edit: {
      padding: 20,
      paddingLeft: 30,
      borderWidth: 2,
      borderColor: '#999',
      borderRadius: 10,
      marginBottom: 20,
      alignItems: 'center'
    },
    text: {
      fontStyle: 'bold',
      fontSize: 30,
      textAlign: 'center',
      color: '#000',
    },
    btnBack: {
      backgroundColor: '#e2e2e2',
      fontStyle: 'bold',
      fontSize: 10,
      alignItems: 'center',
      width: 40,
      borderRadius: 5,
      margin: 10,
      padding: 2,
    },
    viewsBody: {
      flex: 1,
      flexDirection: 'column',
    },
    buttons: {
      padding: 10,
      backgroundColor: '#0C3B2E',
      color: '#fff',
      alignItems: 'center',
      borderRadius: 30,
      padding: 15,
      width: '60%',
    },
    loneText: {
      fontSize: 30,
      color: '#0C3B2E',
    },
  });