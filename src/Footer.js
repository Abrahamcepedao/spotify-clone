import React from 'react';
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import './Footer.css';
import { Grid, Slider } from '@material-ui/core';
import { useDataLayerValue } from "./DataLayer";


function Footer() {
    const [{song}, dispatch] = useDataLayerValue();
    function truncate(str, n) {
      return str?.length > n ? str.substring(0, n - 1) + "..." : str;
    }

    return (
      <div className="footer">
        <div className="footer__left">
          <img
            className="footer__albumCover"
            src={song.album.images[0].url}
            alt=""
          />
          <div className="footer__songInfo">
            <h4>{truncate(song.name, 50)}</h4>
            <p>{truncate(song.artists.map((artist) => artist.name).join(", "), 50)}</p>
          </div>
        </div>
        <div className="footer__center">
          <ShuffleIcon className="footer__green" />
          <SkipPreviousIcon className="footer__icon" />
          <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
          <SkipNextIcon className="footer__icon" />
          <RepeatIcon className="footer__green" />
        </div>
        <div className="footer__right">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>
            <Grid item>
              <VolumeDownIcon />
            </Grid>
            <Grid item xs>
              <Slider aria-labelledby="continuous-slider" />
            </Grid>
          </Grid>
        </div>
      </div>
    );
}

export default Footer;
