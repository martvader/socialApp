import React,{Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity,Image,StatusBar} from 'react-native';
import colors from '../../config/colors';
import {fb,db,auth,storage} from '../../config/config';
import {LinearGradient} from 'expo-linear-gradient';
import { color } from 'react-native-reanimated';

export default class LoginScreen extends Component {

    state={
        email:"",
        password: "",
        errorMessage: null
    }
    handleLogin = () => {
        const {email, password} = this.state
        fb.auth().signInWithEmailAndPassword(email, password)
        .catch(error => this.setState({errorMessage: error.message}));
    }


    render(){
        return(
            <LinearGradient colors={["#F6F0EA","#F1DFD1"]} style={styles.container}>
            <View>
                <StatusBar barStyle="light-content"> </StatusBar>
                <Text style={styles.greeting}>{`Hello again.\n Welcome Back`}</Text>
                <View style={styles.errorMessage}>
                     {this.state.errorMessage && <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>}
                </View>
                <View style={styles.form}>

                    <View>
                        <Text style={styles.inputTitle}> Email Address</Text>
                        <TextInput style={styles.input} 
                            autoCapitalize="none" 
                            onChangeText={email => this.setState({email})}
                            value = {this.state.email}
                            ></TextInput>
                    </View>

                      <View style={{marginTop:32}}>
                        <Text style={styles.inputTitle}> Password </Text>
                        <TextInput 
                            style={styles.input} 
                            secureTextEntry 
                            autoCapitalize="none"
                            onChangeText={password => this.setState({password})}
                            value={this.state.password}
                        ></TextInput>
                    </View>
                </View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={this.handleLogin}
                >
                    <Text style={{color: colors.white, fontWeight:"500"}}> Sign in </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                          style={{alignSelf: "center", marginTop:32}} 
                          onPress={() => this.props.navigation.navigate("Signup")}> 
                        <Text style={{color:colors.link, fontSize:13}}>
                                New to Bluebird ? <Text style={{fontWeight:"500", color:colors.button}}> Sign up </Text>
                        </Text>
                </TouchableOpacity>
            </View>
          </LinearGradient>
        )
    }
} 


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    greeting:{
        marginTop: 32,
        fontSize:18,
        fontWeight:"400",
        textAlign:"center"
    },
    error:{
        color:colors.error,
        fontSize:13,
        fontWeight:"600",
        textAlign:"center"
    },
    errorMessage:{
        height: 72,
        alignItems:"center",
        color:colors.button,
        justifyContent:"center",
        marginHorizontal:30
    },
    form:{
        marginBottom:48,
        marginHorizontal:30
    },
    inputTitle:{
        color: colors.gray,
        fontSize:10,
        textTransform:"uppercase"
    },
    input:{
        borderBottomColor: colors.gray,
        borderBottomWidth: StyleSheet.hairlineWidth,
        height:40,
        fontSize:15,
        color:colors.textColor
    },
    button:{
        marginHorizontal: 30,
        backgroundColor: colors.button,
        borderRadius:4,
        height: 52,
        alignItems:"center",
        justifyContent:"center"

    },
    image:{
        marginTop:-176,
        marginLeft:-50,
    }
});