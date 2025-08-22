import React from 'react';
import './index.css';

const LogoBoxes = ({ name, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="logo-box">
      <div className="logo-inner">
        <div className='logo-img capitalize'>
            {name}
        </div>
      </div>
    </a>
  );
}

export default LogoBoxes;
