import React from 'react';
import { useDataLayerValue } from './DataLayer';
import './SongRow.css';

function SongRow({track}) {
    const [{song}, dispatch] = useDataLayerValue();
    const handleClick = () => {
        dispatch({
            type: "SET_SONG",
            song: track
        })
        console.log(track)
    }

    return (
      <div className="songRow" onClick={() => handleClick()}>
        <img
          className="songRow__album"
          src={track.album.images[0].url}
          alt=""
        />
        <div className="songRow__info">
          <h1>{track.name}</h1>
          <p>
            {track.artists.map((artist) => artist.name).join(", ")}
            {" • "}
            {track.album.name}
          </p>
        </div>
        <div className="songRow__duration">
          <p>
            {Math.floor(track.duration_ms * 0.00001667)}
            {":"}
            {Math.floor(
              (track.duration_ms -
                Math.floor(track.duration_ms * 0.00001667) / 0.00001667) *
                0.001
            ) < 10 && "0"}
            {Math.floor(
              (track.duration_ms -
                Math.floor(track.duration_ms * 0.00001667) / 0.00001667) *
                0.001
            )}
          </p>
        </div>
      </div>
    );
}

export default SongRow;
