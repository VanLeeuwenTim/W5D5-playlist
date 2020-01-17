import React from "react";
import SongItem from "./SongItem";

const SongList = props => {
  console.log("props in SongList:", props);

  const inList = props.songs.map(item => (
    <SongItem
      article={item}
      key={item.songTitle}
      title={item.songTitle}
      // id={item.id}
      name={item.songTitle}
      deleteSong={props.deleteSong}
    />
  ));

  return <>{inList}</>;
};

export default SongList;
