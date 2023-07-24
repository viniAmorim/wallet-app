import React from 'react';
import AppLoading from 'expo-app-loading';
import { Text, View } from 'react-native';

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';

import { DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return(
    <View>
      <Text>
        WALLET app
      </Text>
    </View>
  );
}

export default App;