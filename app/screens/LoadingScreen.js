import React,{Component} from 'react';
import {View, Text, StyleSheet,ActivityIndicator} from 'react-native';
import {fb,db,auth,storage} from '../../config/config';
import Fire from '../../config/Fire';

export default class LoadingScreen extends Component {
        
    componentDidMount(){
        fb.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth");
        })
    }


    render(){
        return(
            <View style={styles.container}> 
                <Text>Loading Screen</Text>
                <ActivityIndicator
                    size="large"
                ></ActivityIndicator>
            </View>
        )
    }
} 


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
});