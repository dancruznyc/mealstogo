import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.searchContainer}>
          <Text>search</Text>
      </View>
      <View style={styles.listContainer}>
        <Text>List!!</Text>
            </View>
    </SafeAreaView>
    <ExpoStatusBar style='auto'/>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
 searchContainer: {
  backgroundColor: 'green',
  padding: 16,
 },
 listContainer: {
  backgroundColor: 'blue',
  flex: 1,
  padding: 16,
 }
});
