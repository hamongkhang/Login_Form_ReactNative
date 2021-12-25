import React from 'react';
import {View,Image, Text,TextInput, Button, TouchableOpacity, Stylesheet} from 'react-native';
import styles from './style/style';


export default class LoginForm extends React.Component{
    render(){
        return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('./image/image1.png')}/>
            <Text style={styles.title}>Accoiona Account Ussers eg.@acciona,@colemanrail etc. Sign in with your corporate</Text>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>AccionaCorporateLogin</Text></TouchableOpacity>
            <View style={styles.hr}>
            <Text style={styles.gach}></Text>
            <Text>OR</Text>
            <Text style={styles.gach}></Text>
            </View>
            <Text style={styles.title2}>All Other Users  Use the login form below</Text>
            <View style={styles.email}>
            <Text style={styles.emailTitle}>Email</Text>
            <TextInput placeholder="name@host.com" style={styles.input1} />
            <Text style={styles.emailTitle}>Password</Text>
            <TextInput placeholder="Password" style={styles.input1} />
            </View>
            <Text style={styles.forgot}>Forgot your password?</Text>
            <TouchableOpacity style={styles.loginButton}><Text style={styles.textLogin}>Login</Text></TouchableOpacity>
            <Text style={styles.title3}>Forgot your password or having trouble signing in ?</Text>
            <Text style={styles.title3}>Contact the Service Desk on: <Text style={styles.redColor}>03 2933 22222</Text></Text>
            <Text style={styles.title3}>Raise an incident via <Text style={styles.redColor}>Service Now Portal</Text></Text>
        </View>
        );
    }
} 
