import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';

export default function currency() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <Text>currency</Text>
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
