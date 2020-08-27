import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { API_KEY } from '../utils/WeatherAPIKey'
import Weather from '../components/Weather'
export default class WeatherScreen extends React.Component {
    state = {
        isLoading: true,
        temperature: 0,
        weatherCondition: null,
    };
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.fetchWeather(position.coords.latitude, position.coords.longitude);
            },
            error => {
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
    }
    fetchWeather(lat = 25, lon = 25) {
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
        )
            .then(res => res.json())
            .then(json => {
                this.setState({
                    temperature: json.main.temp,
                    weatherCondition: json.weather[0].main,
                    isLoading: false
                });
            });
    }
    render() {
        const { isLoading, weatherCondition, temperature } = this.state;
        return (
            <View style={styles.container}>
                {isLoading
                    ? <Text>Fetching The Weather</Text>
                    : <Weather weather={weatherCondition} temperature={temperature}  />
                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

