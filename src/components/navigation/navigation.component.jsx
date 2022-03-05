import React from 'react';
import { Link } from 'react-router-dom';

import navItems from './nav-items';

import PlaceitLogo from './assets/placeit-and-envato.svg';
import DropdownArrow from './assets/dropdown-arrow.svg';

import './navigation.component.scss';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <div className='navigation__categories'>
        <Link to='/' className='navigation__item'>
          <div className='navigation__logo-box'>
            <img src={PlaceitLogo} alt='Placeit Logo' className='logo' />
          </div>
        </Link>

        <Link to='/mockups' className='navigation__item'>
          <span>mockups</span>
          <img
            src={DropdownArrow}
            alt='dropdow arrow'
            className='navigation__dropdown-arrow'
          />
        </Link>

        <Link to='/design-templates' className='navigation__item'>
          <span>Designs</span>
          <img
            src={DropdownArrow}
            alt='dropdow'
            className='navigation__dropdown-arrow'
          />
        </Link>

        <Link to='/logo-maker' className='navigation__item'>
          <span>Logos</span>
          <img
            src={DropdownArrow}
            alt='dropdow'
            className='navigation__dropdown-arrow'
          />
        </Link>

        <Link to='/video-maker' className='navigation__item'>
          <span>Videos</span>
          <img
            src={DropdownArrow}
            alt='dropdow'
            className='navigation__dropdown-arrow'
          />
        </Link>

        <Link to='/gaming-tamplates' className='navigation__item'>
          <span>Gaming</span>
          <img
            src={DropdownArrow}
            alt='dropdow'
            className='navigation__dropdown-arrow'
          />
        </Link>
      </div>

      <ul className='navigation__account'>account</ul>
    </nav>
  );
};

export default Navigation;
