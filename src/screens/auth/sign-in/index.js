import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
    Text
} from 'react-native';
import { Input } from 'react-native-elements';
import { FontAwesome5, Feather, MaterialIcons } from "@expo/vector-icons";
import COLORS from "../../../constants/colors";

const Login = props => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.authContainer}>
                <ImageBackground source={require('../../../../assets/images/background.jpg')} style={styles.image}>
                    {/* <Text style={styles.text}>Inside</Text> */}
                    <View style={styles.formContainer}>
                        <View style={styles.textContainer}>
                            <Input
                                keyboardType='number-pad'
                                placeholder="Mobile No"
                                leftIcon={() => (
                                    <FontAwesome5 name='mobile-alt' size={22} color={COLORS.PRIMARY} />
                                )}
                                inputContainerStyle={{ borderBottomWidth: 0 }}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.textInput}>SIGN IN</Text>
                        </TouchableOpacity>
                        <View style={styles.verticalLine}></View>
                        <View style={styles.roundView}>
                            <Text style={styles.textInput}>OR</Text>
                        </View>
                        <View style={styles.verticalLine}></View>
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                            props.navigation.navigate('Registration')
                        }}>
                            <Text style={styles.textInput}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    authContainer: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    formContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        top: '25%'
    },
    textContainer: {
        width: '80%',
        alignSelf: 'center',
        height: 50,
        borderWidth: 2,
        borderColor: COLORS.PRIMARY,
        borderRadius: 10,
        margin: 5
    },
    buttonContainer: {
        width: '60%',
        alignSelf: 'center',
        height: 50,
        borderWidth: 2,
        borderColor: COLORS.PRIMARY,
        backgroundColor: COLORS.PRIMARY,
        borderRadius: 50,
        margin: 10
    },
    verticalLine: {
        alignSelf: 'center',
        height: '5%',
        width: 3,
        borderRadius: 5,
        backgroundColor: COLORS.PRIMARY,
    },
    textInput: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginTop: 13
    },
    roundView: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: COLORS.PRIMARY,
        backgroundColor: COLORS.PRIMARY,
        borderRadius: 50,
        alignSelf: 'center'
    }
});


export default Login;