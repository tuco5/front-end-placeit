import React from 'react';
import { Link } from 'react-router-dom';

import CategoryMenu from '../category-menu/category-menu.component';

import DropdownArrow from './dropdown-arrow.svg';
import './nav-categories.component.scss';

const NavCategories = ({ label, path, categories }) => (
  <div className='nav-categories'>
    <Link to={path} className='nav-categories__item'>
      <span>{label}</span>
      <img src={DropdownArrow} alt='arrow' className='nav-categories__arrow' />
    </Link>

    <div className='nav-categories__box'>
      <CategoryMenu categories={categories} />
    </div>
  </div>
);

export default NavCategories;
