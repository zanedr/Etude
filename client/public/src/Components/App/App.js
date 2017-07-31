import React, { Component } from 'react';
import './App.css';
import { SongDisplay } from '../SongDisplay/SongDisplay'
import { mockSongs } from '../../mock-data/songs.js'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      songs: mockSongs
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
        <SongDisplay songs={this.state.songs}/>
      </div>
    );
  }
}
