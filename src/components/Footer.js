//
//

import React from 'react';
import '../styles/Footer.css';

import {
  PlayCircleOutline,
  PlaylistPlay,
  Repeat,
  Shuffle,
  SkipNext,
  SkipPrevious,
  VolumeDown,
} from '@material-ui/icons';
import { Grid, Slider } from '@material-ui/core';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <img
          className='footer__albumLogo'
          src='https://upload.wikimedia.org/wikipedia/en/4/45/Way_Out_West_-_The_Gift_%281996_Single%29.png'
          alt=''
        />
        <div className='footer__songInfo'>
          <h4>The Gift</h4>
          <p>Way Out West</p>
        </div>
      </div>

      <div className='footer__center'>
        <Shuffle className='footer__green' />
        <SkipPrevious className='footer__icon' />
        <PlayCircleOutline fontSize='large' className='footer__icon' />
        <SkipNext className='footer__icon' />
        <Repeat className='footer__green' />
      </div>

      <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
