import React from 'react';
import {View, Text} from 'react-native';
import RNDeviceInfo from 'react-native-device-info';

export default function DeviceInfo() {
  return (
    <View>
      <Text>Device Info</Text>
      <Text>Version: {RNDeviceInfo.getVersion()}</Text>
      <Text>Brand: {RNDeviceInfo.getBrand()}</Text>
      <Text>Model: {RNDeviceInfo.getModel()}</Text>
    </View>
  );
}
