import React from 'react';

import navItems from './nav-items';

import PlaceitLogo from '../placeit-logo/placeit-logo.component';
import NavCategories from './nav-categories/nav-categories.component';
import NavAccount from './nav-account/nav-account.component';

import './navigation.component.scss';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <div className='navigation__categories'>
        <div className='navigation__item'>
          <PlaceitLogo />
        </div>

        {navItems.map(({ id, ...otherProps }) => (
          <div className='navigation__item'>
            <NavCategories key={id} {...otherProps} />
          </div>
        ))}
      </div>

      <NavAccount />
    </nav>
  );
};

export default Navigation;
