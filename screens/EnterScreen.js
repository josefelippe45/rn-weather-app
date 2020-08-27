import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Platform, TouchableNativeFeedback, TouchableOpacity, Alert } from 'react-native';
import Header from '../components/UI/Header'
import Colors from '../constants/Colors'
const EnterScreen = props => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) TouchableCmp = TouchableNativeFeedback;
    const [userName, setUserName] = useState('');
    return (
        <View style={styles.container}>
            <Header text="Bem Vindo!"/>
            <View style={styles.content}>
                <Text style={styles.contentText}>Entre com um nome para continuar: </Text>
                <TextInput
                    style={styles.input}
                    maxLength={25}
                    onChangeText={name => { setUserName(name) }}
                    value={userName}
                />
                <View style={styles.touchableCmp}>
                    <TouchableCmp onPress={() => {
                        if (userName === '') {
                            Alert.alert(
                                title = "Nome inválido",
                                message = "Digite um nome",
                                [{ text: 'Okay', style: 'default' }])
                        } else {
                            props.navigation.navigate('Weather', {name: userName})
                        }
                    }}>
                        <Text style={styles.buttonText}>Continuar</Text>
                    </TouchableCmp>
                </View>
            </View>
            <View style={styles.touchableCmp}>
                <TouchableCmp style={styles.help} onPress={props.navigation.navigate('Help')}>
                    <Text style={styles.buttonText}>Mais informações e ajuda</Text>
                </TouchableCmp>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.secondary,
    },
    input: {
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        margin: 30,
        maxWidth: '95%',
        minWidth: 150
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        padding: 40,
        marginHorizontal: 10,
        marginTop: -20,
        backgroundColor: '#FFF',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
    },
    contentText: {
        fontSize: 18,
        color: Colors.primary_dark,
        fontFamily: 'open-sans-bold'
    },
    touchableCmp: {
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: Colors.primary_dark,
        margin: 20,
        borderRadius: 8,
        padding: 20
    },
    buttonText: {
        fontSize: 16,
        color: '#FFF',
        fontFamily: 'open-sans-bold'
    }
});
export default EnterScreen;