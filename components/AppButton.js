import React from 'react'
import { Text,StyleSheet,TouchableOpacity,Platform } from 'react-native'
import colors from "../config/colors";

export default function AppButton({title,OnPress}) {
    return (
        <TouchableOpacity style={styles.button} OnPress={OnPress}  >
            <Text style={styles.text}>{title}</Text>          
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems:"center",
        padding: 15,
        width: Platform.OS === "android" ? "40%" : "100%"
    },
    text:{
        color:colors.white,
        fontSize:18,
        textTransform:"uppercase",
        fontWeight:"bold"
    }
})
