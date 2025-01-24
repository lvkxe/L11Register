import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';

const Register = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleRegister = () => {
        if (!username || !email || !phone) {
            Alert.alert('Error', 'All fields are required!');
            return;
        }

        const newUser = { username, email, phone };

        fetch('https://jsonhost.com/json/3b8b1eb1c16734a7bb80ddee136d1e18', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'qh3rruyevkthrh6pwvvwrskjqtlhfl28',
            },
        })
            .then(response => response.json())
            .then(existingData => {
                const updatedData = Array.isArray(existingData) ? existingData : [];
                updatedData.push(newUser);

                return fetch('https://jsonhost.com/json/3b8b1eb1c16734a7bb80ddee136d1e18', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'qh3rruyevkthrh6pwvvwrskjqtlhfl28',
                    },
                    body: JSON.stringify(updatedData),
                });
            })
            .then(() => {
                Alert.alert('Success', 'You have registered successfully!');
                navigation.navigate('Home');
            })
            .catch(error => {
                console.error('Error registering user:', error);
                Alert.alert('Error', 'Something went wrong while registering!');
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register for the Competition</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                placeholderTextColor="#aaa"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="#aaa"
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
                placeholderTextColor="#aaa"
            />
            <TouchableOpacity style={styles.submitButton} onPress={handleRegister}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#1c1c1e',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        color: '#f4f4f5',
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#444',
        borderRadius: 12,
        marginBottom: 20,
        paddingHorizontal: 15,
        backgroundColor: '#2c2c2e',
        color: '#f4f4f5',
        fontSize: 16,
    },
    submitButton: {
        height: 50,
        backgroundColor: '#32d74b',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Register;
