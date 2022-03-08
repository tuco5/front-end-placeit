import React from 'react';

import './nav-account.component.scss';

const NavAccount = () => (
  <div className='nav-account'>
    <button type='button' className='nav-account__btn'>
      pricing
    </button>
    <div className='nav-account__link'>free account</div>
    <div className='nav-account__link'>log in</div>
  </div>
);

export default NavAccount;
