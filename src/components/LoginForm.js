import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default class LoginForm extends React.Component {
  render() {
    return (
        <View style={styles.loginformcontainer}>
          <TextInput underLineColorAndroid='transparent' placeholder='Correo' style={styles.textinput}></TextInput>
          <TextInput underLineColorAndroid='transparent' placeholder='Contraseña' style={styles.textinput}></TextInput>

          <TouchableOpacity style={styles.loginbtn}>
            <Text>INICIAR SESIÓN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.registerbtn}>
            <Text>REGISTRARSE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotbtn}>
            <Text>OLVIDAR CONTRASEÑA</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  loginformcontainer: {
    alignItems: 'center'
  },
  textinput:{
    color: '#fff',
    alignSelf: 'stretch',
    padding: 12,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: '#ffff',
    borderWidth: 0.6
  },
  loginbtn: {
    backgroundColor: '#ecf0f1',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14,
    marginTop: 10
  },
  registerbtn: {
    backgroundColor: '#95a5a6',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14,
    marginTop: 10
  },
  forgotbtn: {
    backgroundColor: '#e74c3c',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14,
    marginTop: 10
  }
});
