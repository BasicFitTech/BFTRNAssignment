import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet
} from 'react-native';
import theme from './src/theme';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.message}>Good luck with your assignment!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary.orange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.primary.white
  }
});

export default App;
