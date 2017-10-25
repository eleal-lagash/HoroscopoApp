import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
  render() {
    return (
      <Image style={styles.container} source={{uri: 'https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?w=1500'}}>
        <View style={styles.logocontainer}>
          <Image source={require('./src/img/logo.png')} style={styles.logo}></Image>
        </View>

        <LoginForm></LoginForm>

      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf:'stretch',
    width: null,
    padding: 20
  },
  logocontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 140,
    height: 140
  }
});
