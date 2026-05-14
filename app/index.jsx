import { StyleSheet, Text, View } from 'react-native';

/* 
  SyleSheet: This is for the styles
  Text: In react native we use text is like <p></p>
  View: This is like a div in react 
*/

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a ProTraining Soccer</Text>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202020'
  },

  text: {
    color: '#fff',
    fontSize: 24
  }
})
