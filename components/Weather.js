import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Header from './UI/Header';
import Colors from '../constants/Colors';
import { weatherConditions } from '../utils/WeatherConditions';

const Weather = ({ weather, temperature, city, onUpdate }) => {
    // let TouchableCmp = TouchableOpacity;
    // if (Platform.OS === 'android' && Platform.Version >= 21) TouchableCmp = TouchableNativeFeedback;
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
                    <Text style={{
                        ...styles.contentTextCity,
                        color: weatherConditions[weather].color
                    }}>
                        {city}
                    </Text>
                    <View style={{margin: 20, overflow: 'hidden'}}>
                    <TouchableOpacity onPress={onUpdate}>
                        <Feather name='rotate-ccw' color={'#8888'} size={50}/>
                    </TouchableOpacity>
                </View>
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
    contentTextCity:{
        fontFamily: 'open-sans-bold',
        fontSize: 20,
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