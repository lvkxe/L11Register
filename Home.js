import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={{ uri: 'https://www.k1speed.com/wp-content/uploads/2021/01/slide-3-karts-mobile.jpg' }}
                style={styles.headerImage}
                resizeMode="cover"
            />
            <View style={styles.content}>
                <Text style={styles.title}>Go-Karting Competition!</Text>
                <Text style={styles.description}>
                    Ready to show your skills in Racing? Join the Go-Karting competition and stand to win amazing prizes!
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.buttonText}>Register Now</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1e',
    },
    headerImage: {
        width: '100%',
        height: 280,
    },
    content: {
        padding: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c2c2e',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: -25,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#f4f4f5',
        textAlign: 'center',
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        color: '#d1d1d6',
        textAlign: 'center',
        marginBottom: 30,
        lineHeight: 22,
    },
    button: {
        backgroundColor: '#32d74b',
        paddingVertical: 14,
        paddingHorizontal: 35,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Home;
