import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Header from './UI/Header';
import Colors from '../constants/Colors';
import { weatherConditions } from '../utils/WeatherConditions';

const Weather = ({ weather, temperature }) => {
    if (weather != null) {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Feather
                        name={weatherConditions[weather].icon}
                        color={weatherConditions[weather].color}
                        size={50}
                    />
                    <Text style={{
                        ...styles.contentText,
                        color: weatherConditions[weather].color
                    }}>
                        {temperature}ºC
                             </Text>
                </View>
                <View style={styles.footer}>
                    <Text style={{
                        ...styles.footerText,
                        color: weatherConditions[weather].color
                    }}>
                        {weatherConditions[weather].title}
                    </Text>
                    <Text style={{
                        ...styles.footerSubText,
                        color: weatherConditions[weather].color
                    }}>
                        {weatherConditions[weather].subtitle}
                    </Text>
                </View>
            </View>
        );
    } else {
        return (
            <View>
                <Text>..</Text>
            </View>
        )
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        paddingTop: 12,
        paddingLeft: 25,
        backgroundColor: '#fff',
        overflow: "hidden",
        marginHorizontal: 10,
    },
    contentText: {
        fontFamily: 'open-sans-bold',
        fontSize: 50,

    },
    footer: {
    },
    footerText: {
        fontSize: 48,

        marginLeft: 8,
        fontFamily: 'open-sans-bold',
    },
    footerSubText: {
        marginLeft: 8,
        marginBottom: 10,
        fontSize: 24,
        fontFamily: 'open-sans-bold',

    }
});

export default Weather;