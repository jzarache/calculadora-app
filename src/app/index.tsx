import ButtonApp from "@/components/ButtonApp";
import { globalStyle } from "@/styles/globalStyle";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const CalculatorAPP = () => {
  const handlesPressButton = (value: number) => {
    console.log('El botón me retornó el número:', value); 
  }

  const handlesLongPressButton = (value: number) => {
    console.log('El botón me retornó el número:', value); 
  }

  const numbers = [0,1,2,3,4,5,6,7,8,9]
  return (
    <View style={ globalStyle.calculatorContainer }>
      <Text style={globalStyle.mainResult}>
        550 x 500
      </Text>
        {
          numbers.map(e => {
            return (
              <ButtonApp
              label={e.toString()}
              onPress={handlesPressButton}
              onLongPress={handlesLongPressButton}
              />
            )
          })
        }      
    </View>
  )
}

const { width } = Dimensions.get('window');
const COLUMNS = 3;
const MARGIN = 10;
const BUTTON_SIZE = (width - (MARGIN * (COLUMNS + 1))) / COLUMNS;

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',     // Coloca los elementos en fila
    flexWrap: 'wrap',         // Hace que salten a la siguiente línea al llenarse
    justifyContent: 'flex-start', // Alinea los elementos al inicio
    padding: MARGIN,          // Margen externo del contenedor
  },
  gridButton: {
    width: BUTTON_SIZE,       // Ancho exacto para que entren N columnas
    height: BUTTON_SIZE,      // Cuadrados perfectos (opcional)
    margin: MARGIN / 2,       // Espaciado uniforme entre botones
    justifyContent: 'center', 
    alignItems: 'center',
  },
});
export default CalculatorAPP;