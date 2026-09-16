import { Slot } from 'expo-router';
import { Text, View } from 'react-native';

const RootLayout = () => {

  // const [] = useFonts({
  //   academic_m54: require('@/assets/academic_m54/Academic M54.ttf')
  // })

  return (
    <View>
      <Text>Header</Text>
      <Slot />
      <Text>Footer</Text>
    </View>
  );
}

export default RootLayout;