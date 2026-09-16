import { StyleSheet, Text, View } from "react-native"

const Calculator = () => {
  return (
    <View>
      <Text
        style={style.title}
      >Calculator</Text>
    </View>
  )
}
export default Calculator;


const style = StyleSheet.create({
  title: {
    color: "#f50000",
    fontSize: 40
  }
})