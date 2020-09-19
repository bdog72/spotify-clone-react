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
        <img src='' alt='' />
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
        <Repeat className='footer__icon' />
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
