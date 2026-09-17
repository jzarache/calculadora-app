import { Colors } from "@/constants/theme";
import { StyleSheet } from "react-native";

const globalStyle = StyleSheet.create({
    background: {
        flex: 1,
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
    }
})

export { globalStyle };
