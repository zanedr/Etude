import React, { Component } from 'react';
import ReactMusicPlayer from 'react-music-player';

import { SongDisplay } from '../SongDisplay/SongDisplay';
import { mockSongs } from '../../mocks/songs.js';
import { songs } from '../../mocks/player.js';
import '../../assets/styles/main.css';


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      songs: mockSongs
    }
  }

  componentWillMount() {
    fetch('/api/v1/songs')
    .then(res => res.text())
    .then(song => console.log(song))
  }

  render() {
    return (
      <div className="App">
        <h1>Etude</h1>
        <SongDisplay songs={this.state.songs}/>
        <ReactMusicPlayer className='music-player' songs={songs} autoplay />
      </div>
    );
  }
}
