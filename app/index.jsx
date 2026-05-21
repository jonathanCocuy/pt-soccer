import { StyleSheet, Text, View , Button, Image } from 'react-native';
import { useState } from 'react';
import Logo from '../assets/icon-image.png'
import TranslationES from './translation.es.json'
import { Link } from 'expo-router';

/* 
    StyleSheet: This is for the styles
    Text: In react native we use text is like <p></p>
    View: This is like a div in react 
*/

const textMap = TranslationES.title

const Home = () => {
    const [ isChange, setIsChange ] = useState(true);
    return (
        <View style={styles.mainContainer}>
            <View style={styles.textContent}>
                <Text style={styles.text}>{textMap} {isChange ? "Football" : "Soccer"}</Text>
                <Button
                    onPress={() => setIsChange(!isChange)}
                    style={styles.btn}
                    title='Change'
                />
                <Link href="/about">About page</Link>
            </View>
                <Image source={Logo} style={styles.image} />
            <View style={styles.containerText}>
                <Text style={styles.paragraph}>Software engineer in NYC (UTC-4) crafting delightful user experiences. On YouTube I document my creative and tech journey with a community of 90K+ subscribers.</Text>
            </View>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#202020',
        gap: 12
    },

    textContent: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        gap: 12,
        padding: 8,
        borderRadius: 8,
    },

    containerText: {
        width: 350,
        justifyContent: 'left',
        backgroundColor: 'lightgray',
        padding: 16,
        borderRadius: 8,
    },

    text: {
        color: '#000',
        fontSize: 22,
        borderColor: '#fff',
        borderWidth: 2,    
        borderStyle: 'solid',
        padding: 12,
        borderRadius: 23,
        fontFamily: 'Inter-Bold',
        letterSpacing: -0.5, 
    },

    paragraph: {
        fontFamily: 'Inter-Regular',
        fontSize: 16,
        color: '#000',
        letterSpacing: -0.3,  // Similar to SF Pro
    },

    image: {
        width: 200,
        height: 200
    },

    btn: {
        borderRadius: 10,
        backgroundColor: '#fff'
    }
})
