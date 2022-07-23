import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StyledButton from './Components/StyledButton/Btn';
import ContainerStyles from './Components/Styles/Styles.Container';

export default function App() {
  return (
    <View style={ContainerStyles.MainContainer}>
      
      <Text>Hello World</Text>

      <StatusBar style="auto" />

      {/* <StyledButton content = "hello"></StyledButton> */}

      <View style = {ContainerStyles.ContactsContainer}>
        <Text>Person 1</Text>
      </View>

    </View>

  );
}


