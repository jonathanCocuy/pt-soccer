import { useEffect } from 'react';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';

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
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#ffffff',
                },
                headerTitleStyle: {
                    fontFamily: 'Inter-Bold',
                },
                headerTintColor: '#000000',
            }}
        />
    );
}