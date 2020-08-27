import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const Weather = props => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Feather name="sun" color={Colors.secondary} />
                <Text>Temperatura</Text>
            </View>
            <View style={styles.content}>

            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Ensolarado</Text>
                <Text style={styles.footerSubText}>Ande com um protetor solar!</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.sunny,
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 40
    },
    footer:{

    },
    footerText: {
        fontSize: 48,
        color: '#fff'
    },
    footerSubText: {
        fontSize: 24,
        color: '#fff'
    }
});

export default Weather;