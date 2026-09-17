import { globalStyles } from '@/styles/globalStyle';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function RootLayout() {
  return (
    <View style={[globalStyles.background]}>
      <StatusBar style='light' />
      <Slot />
    </View>
  );
}
