import React from 'react';

import './button.component.scss';

const Button = ({ children, className, type, clickHandler }) => {
  return (
    <button
      className={`button ${className}`}
      type={type || 'button'}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
