import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';

type CurrencyButtonProps = PropsWithChildren<{
  name: string;
  flag: string;
  symbol?: string;
  value?: number;
}>;

export default function CurrencyButtons(props: CurrencyButtonProps): JSX.Element {
  return (
    <>
      <Text>{props.name}</Text>
      <Text>{props.flag}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer : {
  },
});
