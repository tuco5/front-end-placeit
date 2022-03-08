import React from 'react';

import SubcategoryMenu from '../subcategory-menu/subcategory-menu.component';

import RightPointer from './right-pointer.svg';
import './category-menu.component.scss';

const CategoryMenu = ({ categories }) => (
  <ul className='dropdown-box'>
    {categories.map(({ id, label, subCategories }) => (
      <li key={id} className='dropdown-box__item-box'>
        <div className='dropdown-box__item'>
          <p className='dropdown-box__label'>{label}</p>
          <img
            src={RightPointer}
            alt='open submenu'
            className='dropdown-box__pointer'
          />
        </div>
        <ul className='subcategories'>
          {subCategories.map(({ id, label, path }) => (
            <SubcategoryMenu id={id} label={label} path={path} />
          ))}
        </ul>
      </li>
    ))}
  </ul>
);

export default CategoryMenu;
