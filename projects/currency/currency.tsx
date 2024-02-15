import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import CurrencyList from './components/CurrencyList';


export default function currency() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <Text>currency</Text>
        <CurrencyList></CurrencyList>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  mainContainer: {
    backgroundColor: 'lightblue',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
