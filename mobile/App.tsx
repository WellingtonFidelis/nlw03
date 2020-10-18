import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            fontSize: 24,
          }}
        >
          Aguarde no Salmo 40.
        </Text>
      </View>
    );
  }

  return <Routes />;
}
