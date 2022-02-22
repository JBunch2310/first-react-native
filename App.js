import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={ styles.headingText}>Hello World</Text>
      <Button title= "press me!"
      accessibilityLabel= 'Press this button to popup an alert'
      onPress={() => Alert.alert("you pressed the button!")}
      color="red" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darksalmon',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    fontSize: 48,
    color: 'white',
    fontWeight: '900',
  }
});
