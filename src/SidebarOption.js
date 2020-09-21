import React from 'react';
import { useDataLayerValue } from './DataLayer';
import './SidebarOption.css'

function SidebarOption({ title, Icon, playlistData, spotify }) {
    const [{playlist}, dispatch] = useDataLayerValue();
    const handleClick = () => {
        {playlistData &&
          spotify.getPlaylist(playlistData.id).then((response) => {
            dispatch({
              type: "SET_PLAYLIST",
              playlist: response,
            });
          });
        }
    };
    function truncate(str, n) {
      return str?.length > n ? str.substring(0, n - 1) + "..." : str;
    }
    return (
      <div className="sidebarOption" onClick={() => handleClick()}>
        {Icon && <Icon className="sidebarOption__icon" />}
        {Icon ? <h4>{title}</h4> : <p>{truncate(title, 30)}</p>}
      </div>
    );
}

export default SidebarOption;
