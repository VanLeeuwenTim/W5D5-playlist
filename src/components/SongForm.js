import React from "react";

const SongForm = props => {
  // console.log("props in SongForm", props);
  return (
    <form onSubmit={props.addSong}>
      <input
        id="title"
        type={"text"}
        placeholder="--add title here--"
        name="songTitle"
      />
      <input
        id="artist"
        type={"text"}
        placeholder="--add artist here--"
        name="artist"
      />
      <input
        id="genre"
        type={"text"}
        placeholder="--add genre here--"
        name="genre"
      />
      <input
        id="rating"
        type={"text"}
        placeholder="--add rating here--"
        name="rating"
      />
      <input type="submit" value="Add Song" />
    </form>
  );
};

export default SongForm;
