import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Colors from '../constants/Colors'
const WeatherScreen = ({ route }) => {
    const [isLoading, setIsLoading] = useState(true);
    //pegando o parametro de nome
    const userName = route.params?.name;
    return (
        <View style={styles.container}>
            {isLoading ? (
                <Text>Estamos carregando os dados!</Text>
            ) : (
                    <Text>Opa, {userName}!</Text>
                )
            }
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 80
    },
    contentText: {
        fontSize: 18,
        color: Colors.primary_dark,
        fontFamily: 'open-sans-bold'
    }
})

export default WeatherScreen;