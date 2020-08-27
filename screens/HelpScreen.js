import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/UI/Header';
const HelpScreen = props => {
    return (
        <View>
            <Header/>
            <Text>

            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
});

export default HelpScreen;