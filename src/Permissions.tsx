import React from 'react';
import { Platform, Text } from 'react-native';
import { useAsync } from './utils';
import { check, PERMISSIONS, request } from 'react-native-permissions';

async function requestCameraPermission() {
  if (Platform.OS === 'ios') {
    return await request(PERMISSIONS.IOS.CAMERA);
  }
  if (Platform.OS === 'android') {
    return await request(PERMISSIONS.ANDROID.CAMERA);
  }
}

async function checkCameraPermission() {
  if (Platform.OS === 'ios') {
    return await check(PERMISSIONS.IOS.CAMERA);
  }
  if (Platform.OS === 'android') {
    return await check(PERMISSIONS.ANDROID.CAMERA);
  }
}

export default function Permissions() {
  checkCameraPermission();
  const { value: status } = useAsync(requestCameraPermission, true);
  return <Text>Permissions status: {status}</Text>;
}
