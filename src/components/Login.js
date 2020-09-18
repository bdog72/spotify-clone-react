//
//

import React from 'react';
import { spotifyLogo } from '../links/LoginLinks';

import { loginUrl } from '../spotify';
import '../styles/Login.css';

function Login() {
  return (
    <div className='login'>
      <img src={spotifyLogo} alt='spotify logo' />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}
export default Login;
