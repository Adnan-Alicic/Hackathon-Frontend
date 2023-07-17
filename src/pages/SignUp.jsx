import React from 'react';
import picture from '../assets/signup.png';
import { SignupContainer } from '../components/SignupContainer';

export const SignUp = () => {
  return (
    <div style={{ display: 'flex', width:'100%', height:'100vh' }}>
      <SignupContainer/>
      <img src={picture} alt="" width={'60%'} height={'100%'} />
    </div>
  );
};
