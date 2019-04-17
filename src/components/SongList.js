import React from 'react';
import SongDetail from './SongDetail';

const SongList = (props) => {
  render() {
  const songNodes = props.data.map(song => {
      return(
        <SongDetail name={song.entry}> </SongDetail>
      )
    })
    return(
      <div className="song-list">
      {songNodes}
      </div>
  );
}

export default SongList;
