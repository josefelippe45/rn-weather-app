import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
const Header = props => {
    return (
        <View style={styles.header}>
                <Text style={styles.headerText}>{props.text}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        paddingVertical: 50,
        paddingHorizontal: 15,
        backgroundColor: Colors.primary,
    },
    headerText: {
        fontSize: 60,
        color: '#FFF',
        fontFamily: 'open-sans-bold',
        marginLeft: 30
    },
});

export default Header;