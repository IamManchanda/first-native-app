import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appText}>
          Hello React Native World {'\n'}
          My first Cross-Platform Native App.{'\n'} 
          Really Works on both iOS and Android!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  appText: {
    color: '#0ea29d',
    fontSize: 20,
    justifyContent: 'center',
  },
});
