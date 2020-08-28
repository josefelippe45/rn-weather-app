import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import Header from '../components/UI/Header';
import Colors from '../constants/Colors';
import { Feather } from '@expo/vector-icons';
const HelpScreen = ({ navigation }) => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) TouchableCmp = TouchableNativeFeedback;
    return (
        <View style={styles.container}>
            <Header text="Sobre o App" />
            <View style={styles.content}>
                <Text style={styles.contentTitle}>
                    Como funciona:
                </Text>
                <Text style={styles.contentText}>
                    O app tem como principal funcionalidade exibir o clima da sua região.
                    Para utilizar basta digitar um nome válido e pressione o botão "Continuar".
                </Text>
                <Text style={styles.contentTitle}>
                    Requisitos:
                </Text>
                <Text style={styles.contentText}>
                    O app precisa ter acesso a sua localização e o seu smartphone precisa
                    estar conectado a internet
                </Text>
                <View style={styles.touchableCmp}>
                    <TouchableCmp onPress={() => { navigation.dispatch(CommonActions.goBack()); }}>
                        <Feather name="arrow-left" size={36} color='#FFF' />
                    </TouchableCmp>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.secondary,
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
    contentTitle: {
        fontSize: 24,
        color: Colors.primary_dark,
        fontFamily: 'open-sans-bold',
        marginVertical: 6
    },
    contentText: {
        fontSize: 18,
        color: Colors.primary_dark,
        fontFamily: 'open-sans'
    },
    touchableCmp: {
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: Colors.primary_dark,
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 8,
        padding: 10
    },
});

export default HelpScreen;