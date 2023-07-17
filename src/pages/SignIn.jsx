import React from 'react';
import { LoginContainer } from '../components/LoginContainer';
import picture from '../assets/pic-right.png'

export const SignIn = () => {
  
    

  return (
    <div style={{ display: 'flex', width:'100%', height:'100vh' }}>
      <LoginContainer/>
      <img src={picture} alt="" width={'60%'} height={'100%'} />
    </div>
  );
};
