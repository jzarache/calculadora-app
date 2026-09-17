import { globalStyle } from '@/styles/globalStyle';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

const RootLayout = () => {
  return (
    <View style={globalStyle.background}>
      <Slot />
      <StatusBar style='light' />
    </View>
  );
}

export default RootLayout;