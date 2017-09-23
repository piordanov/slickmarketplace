import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    message: 'no message',
  }
  componentDidMount() {
      let request = new Request('http://localhost:8080/api', {
        method: 'GET',
      });
      fetch(request).then((resp) => {
        // console.log(resp);
        return resp.json();
      }).then((data) => {
        console.log(data);
        this.setState({message: data.message});
      })
      .catch(error => console.log("Error received: " + error));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>{this.state.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
