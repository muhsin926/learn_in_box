import React from "react";

const Button = ({ stlye, title, handleClick, icon }) => (
   <button className={stlye} onClick={handleClick || '/'}>
    {title}
    <img className={icon ? 'null' : 'hidden'} src={icon} alt="" />
   </button>
);

export default Button;