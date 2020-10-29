import React from 'react';
import './button.scss';

const Button = (props) => {
  const { text } = props;
  const { btnClasses = '' } = props;
  const { icon: Icon } = props;
  const { iconClasses } = props;
  const { fill } = props;
  return (
    <button type="button" className={`button ${btnClasses}`}>
      <Icon className={iconClasses} fill={fill} />
      {text}
    </button>
  );
};

export default Button;
