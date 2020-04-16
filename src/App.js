import React, { Component } from 'react';
import './App.css';
import MusicPlayer from 'react-responsive-music-player';

class App extends Component {
  render() {

    const playlist = [
  {
    url: 'lead groove with piano.mp3',
    cover: 'mee.png',
    title: 'Someday',
    artist: [
      'Terry',
      'Dennis'
    ]
  },
  {
    url: 'path/to/mp3',
    cover: 'path/to/jpg',
    title: 'Bedtime Stories',
    artist: [
      'Jay Chou'
    ]
  }
]



    return (
      <div className = 'center'>
      <div className = 'cent'>
        <MusicPlayer playlist={playlist} />
        </div>
      </div>
    );
  }
}

export default App;
