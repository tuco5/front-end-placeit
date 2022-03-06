import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './placeit-and-envato.svg';

import './placeit-logo.component.scss';

const PlaceitLogo = () => (
  <Link to='/' className='logo-box'>
    <img src={Logo} alt='Placeit Logo' className='logo' />
  </Link>
);

export default PlaceitLogo;
