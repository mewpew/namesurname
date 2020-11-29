import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 210,
    height: 210,
    borderRadius: 105,
    marginTop: 70,
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: 30,
    textAlign: 'center',
  },
  text2: {
    fontSize: 90,
    marginBottom: 70,
  },
});

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{uri: 'https://www.jingu.ru/sirius/jingu-logo-512.png'}}
        />
        <Text style={styles.text1}>Катя Емельянова</Text>
        <Text style={styles.text2}>🚀</Text>
      </View>
    </>
  );
};

export default App;
