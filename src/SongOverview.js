import React, { Component } from "react";
import SongForm from "./components/SongForm";
import SongList from "./components/SongList";

class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          id: 1,
          songTitle: "Four Chords That Made A Million",
          artist: "Porcupine Tree",
          genre: "Progressive",
          rating: 8
        },
        {
          id: 2,
          songTitle: "Quixoticelixer ",
          artist: "Red Hot Chili Peppers",
          genre: "Rock",
          rating: 7
        }
      ]
    };
    this.addSong = this.addSong.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
  }

  addSong(event) {
    event.preventDefault();
    let targetSongTitle = event.target.songTitle.value;
    let targetArtist = event.target.artist.value;
    let targetGenre = event.target.genre.value;
    let targetRating = event.target.rating.value;

    this.setState(prevState => {
      const updatedSongList = prevState.songs;
      updatedSongList.push({
        songTitle: targetSongTitle,
        artist: targetArtist,
        genre: targetGenre,
        rating: targetRating
      });
      return {
        songs: updatedSongList
      };
    });
  }

  emptySongList = () => {
    //console.log('emptySongList button');
    this.setState(prevState => {
      return {
        songs: []
      };
    });
  };

  deleteSong(event) {
    const deleteSongID = event.target.name;
    this.setState(prevState => {
      const updatedSongList = prevState.songs;
      updatedSongList.splice(
        updatedSongList.findIndex(i => i.songTitle === deleteSongID),
        1
      );

      return {
        songs: updatedSongList
      };
    });
  }

  render() {
    return (
      <div>
        <SongForm addSong={this.addSong} />
        <table style={{ width: "100%" }}>
          <thead>
            <tr className="song-header">
              <th className="song-row__item">Song</th>
              <th className="song-row__item">Artist</th>
              <th className="song-row__item">Genre</th>
              <th className="song-row__item">Rating</th>
            </tr>
          </thead>
          <tbody>
            <SongList songs={this.state.songs} deleteSong={this.deleteSong} />
          </tbody>
        </table>
        <button onClick={this.emptySongList}>Empty Songlist!</button>
      </div>
    );
  }
}

export default SongOverview;
