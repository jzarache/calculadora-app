import { Pressable, Text, ViewStyle } from 'react-native';
import { stylesButton } from './button.style';


export type TButtonType = "digito" | "operador" | "accion";
export interface IButtonCalculadora {
  label: string;
  type: TButtonType;
}

type TButtonProps = {
  dataBtn: IButtonCalculadora;
  onPress: () => void;
  onLongPress?: () => void;
  customStyles?: ViewStyle;
};

// componente
export default function ButtonApp(props: TButtonProps) {
  const { dataBtn, onLongPress, onPress, customStyles } = props;
  return (
    <Pressable
      style={[stylesButton.button, customStyles]}
      onPress={() => onPress}
      onLongPress={() => onLongPress}
    >
      <Text style={stylesButton.text}>
        {dataBtn.label}
      </Text>
    </Pressable>
  );
};

