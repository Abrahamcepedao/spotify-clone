import React from 'react';
import Sidebar from './Sidebar';
import Body from './Body';
import "./Player.css";
import Footer from './Footer';
import { useDataLayerValue } from './DataLayer';

function Player({ spotify }) {
    const [{song}, dispatch] = useDataLayerValue();
    return (
        <div className="player">
            {/* Sidebar */}
            <div className="player__body">
                <Sidebar spotify={spotify}/>
                <Body  spotify={spotify}/>
            </div>
            {/* Body */}
            {/* Footer */}
            {song && <Footer/>}
        </div>
    )
}

export default Player
