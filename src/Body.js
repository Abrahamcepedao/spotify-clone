import React from 'react';
import Header from './Header';
import SongRow from './SongRow';
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body({spotify}) {
    const [{ playlist }, dispatch] = useDataLayerValue();
    function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
    }
    return (
      <div className="body">
        <Header spotify={spotify} />
        <div className="body__info">
          <img src={playlist?.images[0].url} alt="" />
          <div className="body__infoText">
            <p><strong>PLAYLIST</strong></p>
            <h2>{truncate(playlist?.name, 30)}</h2>
            <p>{truncate(playlist?.description, 50)}</p>
            <p><strong>{playlist?.owner.display_name}{" • "}{playlist?.followers.total}{" followers"}{" • "}{playlist?.tracks.total}{" songs"}</strong></p>
          </div>
        </div>
        <div className="body__songs">
          <div className="body__icons">
            <PlayCircleFilledIcon className="body__shuffle" />
            <FavoriteIcon fontSize="large" />
            <MoreHorizIcon />
          </div>
          {playlist?.tracks.items.map((item) => (
            <SongRow track={item.track} key={item.track.id}/>
          ))}
        </div>
      </div>
    );
}

export default Body;
