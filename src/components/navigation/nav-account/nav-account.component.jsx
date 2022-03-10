import React from 'react';
import Button from '../../button/button.component';

import './nav-account.component.scss';

const NavAccount = () => {
  const pricingHandler = () => {
    alert('pricing handler been passed correctly');
  };
  const signupHandler = () => {
    alert('signup handler been passed correctly');
  };

  return (
    <div className='nav-account'>
      <Button className='button__pricing' clickHandler={pricingHandler}>
        pricing
      </Button>
      <Button className='button__login-signup' clickHandler={signupHandler}>
        free account
      </Button>
      <Button className='button__login-signup' clickHandler={signupHandler}>
        log in
      </Button>
    </div>
  );
};

export default NavAccount;
