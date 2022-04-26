import React from 'react';
// import { GrTechnology } from 'react-icons/gr';
import logo from '../../public/home.png';
import LogoStyles from '../styles/LogoStyles';

function Logo() {
  return (
    <LogoStyles to="/">
      {/* <GrTechnology /> */}
      <img src={logo} alt="Iv Quest Logo" />
    </LogoStyles>
  );
}

export default Logo;
