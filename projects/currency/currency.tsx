import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  Pressable
} from 'react-native';
import React from 'react';
import {currencyByRupee} from './constants';
import CurrencyButtons from './components/CurrencyButtons';

export default function currency() {

  function fn(item : any) : any
  {

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.mainHeading}>currency converter</Text>

        <View style={styles.inputContainer}>
          <View style={styles.inputSymbol}>
            <Text style={styles.inputSymbolText}>₹</Text>
          </View>

          <TextInput
            placeholder="enter the amount in INR"
            maxLength={10}
            keyboardType={'numeric'}
            style={styles.inputfeild}
          />
        </View>

        <View style={styles.outputContainer}>
          <View style={styles.outputContainerText}>
            <Text>ss</Text>
          </View>

          <View style={styles.outputContainerText}>
            <Text>10038.887</Text>
          </View>
        </View>

        <FlatList
          style={styles.flatlist}
          numColumns={2}
          data={currencyByRupee}
          keyExtractor={item => item.name}
          renderItem={({item}) => {
            return (
              <Pressable 
              style={styles.buttonContainer}
              onPress={()=>fn(item)}
              >
                <CurrencyButtons name = {item.name} flag = {item.flag} ></CurrencyButtons>
              </Pressable>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  mainContainer: {
    backgroundColor: 'lightblue',
    display: 'flex',
    width : "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainHeading: {
    // backgroundColor : "orchid",
    padding: 10,
    fontSize: 20,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputSymbol: {
    backgroundColor: 'pink',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  inputSymbolText: {
    fontSize: 20,
  },
  inputfeild: {
    backgroundColor: 'pink',
    height: 50,
    padding: 10,
    marginVertical: 10,
  },
  outputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outputContainerText: {
    height: 50,
    backgroundColor: 'pink',
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatlist: {
    marginVertical: 10,
    padding: 10,
    width : "100%",
    // backgroundColor : "grey"
  },
  buttonContainer : {
    width : "50%",
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    backgroundColor : "orange",
    padding : 10,
    margin : 5,
  },
});
