import React from 'react';
import styled from '@emotion/styled';
import pizzaLogo from '../assets/pizza.png';
import logo from '../assets/logo.png';

export const Logo = () => {
  return (
    <Container>
      <img src={logo} alt='' style={{ paddingTop: '30px' }} />
      <img src={pizzaLogo} alt='' height={'60px'} />
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  display: flex;
`;
