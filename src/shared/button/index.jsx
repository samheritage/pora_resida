import React from 'react';
import './buttonStyle.css';

const Button = ({style, btnName, outline, rightIcon, leftIcon}) => {
  return (
    <div style={style} className={`${outline ? "outline" : "btn"}`}>
      {leftIcon && <span className='left_icon'>{leftIcon}</span>}
      {btnName}
      {rightIcon && <span className='right_icon'>{rightIcon}</span>}
      </div>
  )
}

export default Button;