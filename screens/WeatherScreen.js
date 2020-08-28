import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../constants/Colors';
import { API_KEY } from '../utils/WeatherAPIKey'
import Weather from '../components/Weather'
export default class WeatherScreen extends React.Component {
    state = {
        isLoading: true,
        temperature: 0,
        weatherCondition: null,
        city: '',
        onUpdate: null,
        latitude: 0,
        longitude: 0
    };
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.fetchWeather(position.coords.latitude, position.coords.longitude);
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                })
            },
            error => {
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },

        );
    }
    fetchWeather(lat, lon) {
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
        )
            .then(res => res.json())
            .then(json => {
                this.setState({
                    temperature: json.main.temp,
                    weatherCondition: json.weather[0].main,
                    city: json.name,
                    isLoading: false,
                });
            });
    }
    render() {
        const { isLoading, weatherCondition, temperature, city, latitude, longitude } = this.state;
        return (
            <View style={styles.container}>
                {isLoading
                    ? <View style={styles.load}>
                        <Text style={styles.loadText}>Carregando dados do clima :)</Text>
                    </View>

                    : <View style={styles.container}>
                        <Weather
                            weather={weatherCondition}
                            temperature={temperature}
                            city={city}
                            onUpdate={() => { this.fetchWeather(latitude, longitude) }}
                        />
                    </View>
                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    load: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
    },
    loadText: {
        fontSize: 16,
        color: '#FFF',
        fontFamily: 'open-sans-bold',
        marginVertical: 6
    },
});

