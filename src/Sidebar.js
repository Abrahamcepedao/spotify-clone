import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from './DataLayer';

function Sidebar({spotify}) {
    const [{ playlists }, dispatch] = useDataLayerValue();
    

    return (
      <div className="sidebar">
        <img
          className="sidebar__logo"
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt=""
        />
        <SidebarOption title="Home" Icon={HomeIcon} />
        <SidebarOption title="Search" Icon={SearchIcon} />
        <SidebarOption title="Your library" Icon={LibraryMusicIcon} />
        <hr />
        <strong className="sidebar__title">PLAYLISTS</strong>
        {playlists?.items?.map((playlist) => (
          <SidebarOption
            title={playlist.name}
            playlistData={playlist}
            spotify={spotify}
          />
        ))}
      </div>
    );
}

export default Sidebar;
