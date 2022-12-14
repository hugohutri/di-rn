import React from 'react';
import {Text, View} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

export default function NetworkInfo() {
  const netInfo = NetInfo.useNetInfo();

  return (
    <View>
      <Text>Network Info</Text>
      <Text>{`IsConnected: ${netInfo.isConnected}`}</Text>
      <Text>{`IsInternetReachable: ${netInfo.isInternetReachable}`}</Text>
      <Text>{`Type: ${netInfo.type}`}</Text>
    </View>
  );
}
