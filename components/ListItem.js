import React from 'react'
import { View,StyleSheet, Image } from 'react-native'
import AppText from "./AppText";

export default function ListItem({title,subTitle,image}) {
    return (
        <View style={styles.container}>
            <Image styles={styles.image} source={image}/>
            <View>
                <AppText>{title}</AppText>
                <AppText></AppText>   
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row"
    },
    image:{
        height:70,
        width:70,
        borderRadius:35,
        marginRight:10
    }
});