import React,{Component,useState,useEffect} from 'react';
import {View, Text, StyleSheet,TouchableOpacity,LayoutAnimation,FlatList,Image} from 'react-native';
import {fb,db,auth,storage,} from '../../config/config';
import {Ionicons} from "@expo/vector-icons";
import colors from '../../config/colors';
import Fire from '../../config/Fire';
import Card from '../../components/Card';
export default class HomeScreen extends Component {

    componentDidMount(){
            
    }

    render(){
        return(
           <Card 
            title="title goes here"
            content = "content goes here"
            
           />
        )
    }
} 


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#EFECF4"
    },
    header:{
        paddingTop:64,
        paddingBottom:16,
        backgroundColor:colors.white,
        alignItems:"center",
        justifyContent:"center",
        borderBottomColor:"#EBECF4",
        shadowColor:"#454D65",
        shadowRadius:15,
        shadowOpacity:0.2,
        zIndex:10
    },
    headerTitle:{
        fontSize:20,
        fontWeight:"500"
    }
});