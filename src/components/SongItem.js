import React from "react";

const SongItem = props => {
  return (
    <tr>
      <td>{props.article.songTitle}</td>
      <td>{props.article.artist}</td>
      <td>{props.article.genre}</td>
      <td>{props.article.rating}</td>
      <td>
        <button onClick={props.deleteSong} name={props.article.songTitle}>
          Delete Song
        </button>
      </td>
    </tr>
  );
};

export default SongItem;
