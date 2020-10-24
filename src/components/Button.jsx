import React from 'react';


const Button = (props) => {
  const textBtn = props.text;
  const btnClasses = props.btnClasses;
  const icon = props.icon
  return (
    <button className={`button ${btnClasses}`}>
      <img src={icon} alt=""/>
      {textBtn}
    </button>
  )
}

export default Button;
