import ButtonApp, { IButtonCalculadora } from "@/components/ButtonApp/ButtonApp";
import { buttonsApp } from "@/constants/Buttons";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/globalStyle";
import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

export default function CalculatorAPP() {
  const handlesPressButton = () => {
    console.log('Press buttton:');
  }

  const handlesLongPressButton = () => {
    console.log('LongPress buttton:');
  }

  return (
    <View style={globalStyles.calculatorContainer}>
      <Text style={globalStyles.mainResult} numberOfLines={4} adjustsFontSizeToFit >20 x 3</Text>
      <Text style={globalStyles.subResult}>560</Text>
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {buttonsApp.map((e, index) => {
          return (
            <ButtonApp
              key={index.toString()}
              dataBtn={e}
              onPress={handlesPressButton}
              onLongPress={handlesLongPressButton}
              customStyles={styles.gridButton}
            />

          );
        })}
      </ScrollView>
    </View>
  )
}

const { width, height, scale, fontScale } = Dimensions.get('window');

const styles = StyleSheet.create({
  gridContainer: {
    width: width,
    flexDirection: 'row',
    columnGap: 10,
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    padding: 10,
  },
  gridButton: {
    width: 80,
    height: 65,
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});