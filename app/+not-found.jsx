import { Stack, Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Not found, please try existing links</Text>
      <Link href={"/"} style={styles.link}>About me</Link>
      <Link href={"/experience"} style={styles.link}>My experience</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#669999',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
  link: {
    color: 'blue',
    fontSize: 24,
    textDecorationLine: 'underline',
  }

});