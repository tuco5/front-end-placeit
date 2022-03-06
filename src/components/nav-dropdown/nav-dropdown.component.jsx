import React from 'react';
import { Link } from 'react-router-dom';

import DropdownBox from '../dropdown-box/dropdown-box.component';

import DropdownArrow from './dropdown-arrow.svg';
import './nav-dropdown.component.scss';

const NavDropdown = ({ label, path, categories }) => (
  <div className='nav-dropdown'>
    <Link to={path} className='nav-dropdown__item'>
      <span>{label}</span>
      <img src={DropdownArrow} alt='arrow' className='nav-dropdown__arrow' />
    </Link>

    <div className='nav-dropdown__box'>
      <DropdownBox categories={categories} />
    </div>
  </div>
);

export default NavDropdown;
