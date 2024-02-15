import 
{ 
    StyleSheet, 
    Text, 
    View 
} 
from 'react-native'
import React from 'react'
import { currencyByRupee } from '../constants'
import CurrencyButtons from './CurrencyButtons'

export default function CurrencyList() {
  return (
    <View>
      <Text>Currency List</Text>
      {currencyByRupee.map((el, index) : JSX.Element=>{
        return <CurrencyButtons key = {index} name = {el.name} flag = {el.flag}></CurrencyButtons>
      })}
      
    </View>
  )
}

const styles = StyleSheet.create({})