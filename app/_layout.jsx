import { useEffect } from 'react';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';
import { View, StyleSheet, Text } from 'react-native'

// Mantiene la pantalla de carga (Splash Screen) visible mientras cargan los assets
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        'Inter-Regular': Inter_400Regular,
        'Inter-Bold': Inter_700Bold,
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        // Stack just should be use in the layout component.
        <View style={styles.container}>
            <Stack
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#FFF',
                    },
                    headerTitleStyle: {
                        fontFamily: 'Inter-Bold',
                    },
                    headerTintColor: '#000',
                }}
            >
                <Stack.Screen 
                    name='index'
                    options={{ title: 'This is the main screen' }}
                />
                <Stack.Screen 
                    name='about'
                    options={{ title: 'This is about' }}
                />
            </Stack>
            <View style={styles.content}>
                <Text style={styles.text}>This text will always appear.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    content: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        color: '#000'
    }
})