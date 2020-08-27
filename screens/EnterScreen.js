import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, Platform, TouchableNativeFeedback, TouchableOpacity, ScrollView } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
const EnterScreen = props => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) TouchableCmp = TouchableNativeFeedback;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerRight}>
                    <Text style={styles.headerText}>Bem </Text>
                    <BorderlessButton>
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-help' : 'ios-help'}
                            size={30}
                            color="#FFF"
                        />
                    </BorderlessButton>
                </View>
                <Text style={{ ...styles.headerText, paddingLeft: 30 }}>vindo!</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.contentText}>Entre com um nome para continuar: </Text>
                <TextInput style={styles.input} />
                <Button color={Colors.primary_dark} title="Continuar" onPress={() => { props.navigation.navigate('Weather') }} />
            </View>
            <View style={styles.footer}>
                <TouchableCmp style={styles.help}>
                    <Text style={styles.helpText}>Ajuda/Manual</Text>
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
    header: {
        paddingVertical: 50,
        paddingHorizontal: 15,
        backgroundColor: Colors.primary,
    },
    headerRight: {
        flexDirection: "row",
        justifyContent: 'space-between',
        /**x line */
        alignItems: "center"
    },
    headerText: {
        fontSize: 60,
        color: '#FFF'
    },
    input: {
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        margin: 30
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
        color: Colors.primary_dark
    },
    footer: {
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: Colors.primary_dark,
        margin: 20,
        borderRadius: 8,
        padding: 20
    },
    helpText: {
        fontSize: 16,
        color: '#FFF'
    }
});
export default EnterScreen;