//
//

import React from 'react';
import { useDataLayerValue } from '../DataLayer';

import {
  Favorite,
  MoreHoriz,
  PlayCircleFilledOutlined,
} from '@material-ui/icons';
import '../styles/Body.scss';

import Header from './Header';
import SongRow from './SongRow';

function Body({ spotify }) {
  const [{ melodicTechno }, dispatch] = useDataLayerValue();

  return (
    <div className='body'>
      <Header spotify={spotify} />
      <div className='body__info'>
        <img src={melodicTechno?.images[0].url} alt='' />
        <div className='body__infoText'>
          <strong>PLAYLIST</strong>
          <h2>Melodic Techno</h2>
          <p>{melodicTechno?.description}</p>
        </div>
      </div>
      <div className='body__songs'>
        <div className='body__icons'>
          <PlayCircleFilledOutlined className='body__shuffle' />
          <Favorite fontSize='large' />
          <MoreHoriz />
        </div>
        {melodicTechno?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
