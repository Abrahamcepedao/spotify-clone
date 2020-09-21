import React from 'react';
import Sidebar from './Sidebar';
import Body from './Body';
import "./Player.css";
import Footer from './Footer';

function Player({ spotify }) {
    return (
        <div className="player">
            {/* Sidebar */}
            <div className="player__body">
                <Sidebar spotify={spotify}/>
                <Body  spotify={spotify}/>
            </div>
            {/* Body */}
            {/* Footer */}
            <Footer/>
        </div>
    )
}

export default Player
