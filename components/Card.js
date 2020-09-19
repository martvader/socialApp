import React from 'react'
import { View, Text,StyleSheet,Image} from 'react-native';
import defautlStyles from '../config/styles';
import AppText from './AppText';

export default function Card({title, content, image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source ={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{content}</AppText>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:defautlStyles.colors.white,
        marginBottom:20,
        overflow:"hidden"
    },
    image:{
        width:"100%",
        height:200   
    },
    detailsContainer:{
        padding:20,
    },
    title:{
        marginBottom:7,      
    },
    subTitle:{
        color:defautlStyles.colors.secondary,
        fontWeight:"bold"
    }
})