import React from 'react';
import { StyleSheet, Text, View , WebView} from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'

import Dashboard from './Dashboard.js';
import CameraController from './CameraController.js';
// import NewListing from './'

export default class App extends React.Component {
  // componentDidMount() {
  //     let request = new Request('http://localhost:8080/api', {
  //       method: 'GET',
  //     });
  //     fetch(request).then((resp) => {
  //       // console.log(resp);
  //       return resp.json();
  //     }).then((data) => {
  //       console.log(data);
  //       this.setState({message: data.message});
  //     })
  //     .catch(error => console.log("Error received: " + error));
  // }

  render() {
    return (
      <NativeRouter style={{flex: 1}}>
      <View style={{flex: 1}}>
  
        <Route exact path="/" component={Dashboard}/>
        <Route path="/camera" component={CameraController}/>
      </View>
    </NativeRouter>
    // <View style={{flex: 1}}>
    //   <WebView
    //       source={{uri: 'https://awesome-table.com/-KujR1fFtmBqJqm3v1_o/view'}}
    //       style={{flex: 1}}
    //   />
    //   </View>
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
