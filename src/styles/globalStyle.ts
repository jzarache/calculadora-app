import { Colors } from "@/constants/Colors";
import { Dimensions, StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background
    },
    calculatorContainer: {
        flex: 1,
        color: 'white',
        justifyContent: 'flex-end',
        paddingBottom: 20,
    },
    mainResult: {
        color: Colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        fontWeight: '600'
    },
    subResult: {
        color: Colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '400'
    }
})

export { globalStyles };
