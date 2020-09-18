import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import './Header.css';
import { Avatar } from '@material-ui/core';
function Header({spotify}) {
    return (
      <div className="header">
        <div className="header__left">
          <SearchIcon />
          <input placeholder="Search for Artists, Songs" type="text" />
        </div>
        <div className="header__right">
          <Avatar src="" alt="C" />
          <h4>Cepedios</h4>
        </div>
      </div>
    );
}

export default Header;
