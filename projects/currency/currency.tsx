import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  Pressable
} from 'react-native';
import React, {useState} from 'react';
import {currencyByRupee} from './constants';
import CurrencyButtons from './components/CurrencyButtons';

export default function currency(): JSX.Element {

  const [value, setValue] = useState(0);
  const [convertedValue, setConvertedValue] = useState("");
  const [convertedSymbol, setCovertedSymbol] = useState("-");



  function changeConvertion(item : Currency) : void
  {
    console.log(item.value);
    
    //the selected currency background should change
    //if given value is 0
    //snackbar should appear to enter the amount

    if(!value)
    {
      console.log("please enter values");
    }

    const currencyValue : Number = Number(item.value);
    // console.log(currencyValue);
    const inputValue = value;
    // console.log(inputValue);
    const result : Number =  Number(currencyValue) * Number(inputValue);
    // console.log(result);
    setConvertedValue(result.toFixed(2));
    setCovertedSymbol(item.symbol)
    

  }

  function changeHandler(text : string): void
  {
    setValue(parseFloat(text));
    console.log(value, typeof(value));

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style = {styles.headingContainer}>
          <Text style={styles.mainHeading}>currency converter</Text>
        </View>
        

        <View style={styles.inputContainer}>
          <View style={styles.inputSymbol}>
            <Text style={styles.inputSymbolText}>₹</Text>
          </View>

          <TextInput
            placeholder="enter the amount in INR"
            
            maxLength={10}
            keyboardType={'numeric'}
            style={styles.inputfeild}
            onChangeText={(text)=>changeHandler(text)}
          />
        </View>

        <View style={styles.outputContainer}>
          <View style={styles.outputContainerText}>
            <Text style = {styles.outputContainerOriginalText}>{convertedSymbol}</Text>
          </View>

          <View style={styles.outputContainerText}>
            <Text style = {styles.outputContainerOriginalText}>{convertedValue}</Text>
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
              onPress={()=>changeConvertion(item)}
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
    // backgroundColor: 'lightblue',
    
  },
  headingContainer : {
    display : "flex",
    alignItems : "center"

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
    // backgroundColor: 'pink',
    fontSize : 30,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outputContainerOriginalText : {
    fontSize : 30,
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
