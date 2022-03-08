import React from 'react';

import './subcategory-menu.component.scss';
import { Link } from 'react-router-dom';

const SubcategoryMenu = ({ id, label, path }) => (
  <li key={id} className='subcategories__item'>
    <Link to={path} className='subcategories__link'>
      {label}
    </Link>
  </li>
);

export default SubcategoryMenu;
