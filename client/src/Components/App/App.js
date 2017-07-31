import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      welcome: ''
    }
  }

  componentWillMount() {
    fetch('api/v1/songs')
    .then(res => res.text())
    .then(song => console.log(song))
  }
  render() {
    return (
      <div className="App">
        <h1>Etude</h1>
      </div>
    );
  }
}
