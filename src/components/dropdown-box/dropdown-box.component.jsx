import React from 'react';

import './dropdown-box.component.scss';

const DropdownMenu = ({ categories }) => {
  console.log(categories);
  return (
    <div className='dropdown-box'>
      {categories.map(({ id, label, subCategories }) => (
        <div key={id} className='dropdown-box__item'>
          <div className='dropdown-box__label'>{label}</div>
          <div className='dropdown-box__sub-categories'></div>
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
