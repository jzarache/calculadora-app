import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';

type TProps = { 
  label: string; 
  value?: string; 
  onPress?: (value: number) => void; 
  onLongPress?: (value: number) => void; 
  customStyles?: ViewStyle;
};

const ButtonApp = (props: TProps) => {
  const { label, value, onLongPress, onPress, customStyles } = props;

  return (
    <Pressable 
      style={[styles.button, customStyles]} 
      onPress={() => onPress?.(Number(value))}   
      onLongPress={() => onLongPress?.(Number(value))}
    >
      <Text style={styles.text}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 100,
    alignItems: 'center',
    height: 50,
    width: 50,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default ButtonApp;
