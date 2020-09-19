//
//

import React, { useEffect, useState } from 'react';
import './App.css';

import Login from './components/Login';
import { getTokenFromUrl } from './spotify';

import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';

import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      // setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });
      spotify.getPlaylist('5JZIMFv2aXvRvqzAsFArM0').then((response) => {
        dispatch({
          type: 'MELODIC_TECHNO',
          melodicTechno: response,
        });
      });
      // spotify.getPlaylist('2M7Q8K6OiDEcm9inqV6xxS').then((response) => {
      //   dispatch({
      //     type: 'SET_BOZOBOY_&_MOLLYMOO',
      //     bozoboymollymoo: response,
      //   });
      // });
    }
  }, []);

  // prettier-ignore
  return (
    <div className='app'>
      {
      token ? <Player spotify={spotify} />
      : <Login />
      }
    </div>
  )
}

export default App;
