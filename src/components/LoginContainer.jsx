import React from 'react';
import styled from '@emotion/styled';
import { Logo } from './Logo';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate=useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email} Password: ${password}`);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Wrapper>
          <Logo />
          <LoginText>Log In</LoginText>
          <div
            style={{
              display: 'flex',
              height: '100px',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Input
              placeholder='Email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type='password'
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <RememberMeForgot>
            <RememberMeInput>
              <input type='checkbox' id='vehicle1' name='vehicle1' value='Bike' />
              <label htmlFor='vehicle1'> Remember me</label>
            </RememberMeInput>

            <ForgotPassword>Forgot password</ForgotPassword>
          </RememberMeForgot>
          <ButtonLogin onClick={()=> navigate('/dashboard')}>Log In</ButtonLogin>
          <RememberMeInput style={{ marginTop: '10px' }}>
            If you don’t have an account, register <b>here</b>
          </RememberMeInput>
        </Wrapper>
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
`;

const RememberMeForgot = styled.div`
  display: flex;
  justify-content: space-between;
  width: 560px;
  margin-top: 27px;
  margin-bottom: 27px;
`;

const RememberMeInput = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 100px;
  width: 560px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ForgotPassword = styled.button`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  border: none;
  background: none;
  line-height: 24px;
`;

const ButtonLogin = styled.button`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 231px;
  gap: 40px;
  background: #c05c35;
  border-radius: 30px;
  height: 60px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
`;

const LoginText = styled.div`
  width: 100%;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 60px;
  color: #536036;
  margin-top: 70px;
  margin-bottom: 71px;
`;

const Input = styled.input`
  width: 560px;
  height: 30px;
  padding: 5px;
  border: 1px solid #536036;
  border-radius: 20px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  padding-left: 10px;
  color: rgba(83, 96, 54, 0.85);
  ::placeholder {
    padding-left: 10px;
  }
`;
