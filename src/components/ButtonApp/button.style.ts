import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const stylesButton = StyleSheet.create({
    button: {
        padding: 0,
        backgroundColor: Colors.orange,
        borderRadius: 100,
        alignItems: 'center',
        height: 40,
        width: 40,
    },
    text: {
        color: Colors.textPrimary,
        fontSize: 40,
    },
});
