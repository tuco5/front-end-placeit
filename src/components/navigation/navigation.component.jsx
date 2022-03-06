import React from 'react';

import navItems from './nav-items';

import PlaceitLogo from '../placeit-logo/placeit-logo.component';
import NavDropdown from '../nav-dropdown/nav-dropdown.component';

import './navigation.component.scss';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <div className='navigation__categories'>
        <div className=' navigation__item'>
          <PlaceitLogo />
        </div>

        {navItems.map(({ id, ...otherProps }) => (
          <div className='navigation__item'>
            <NavDropdown key={id} {...otherProps} />
          </div>
        ))}
      </div>

      <ul className='navigation__account'>account</ul>
    </nav>
  );
};

export default Navigation;
