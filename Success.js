import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Success = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>Thank you for registering!</Text>
            <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
    },
    message: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default Success;
