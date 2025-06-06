import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { login } from '../../utils/auth';

// Styled Components
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 24px;
  background-color: #F8FAFC;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #2563EB;
  margin-bottom: 40px;
`;

const LoginCard = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  padding: 40px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #1E293B;
  margin-bottom: 8px;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #64748B;
  margin-bottom: 32px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #2563EB;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #2563EB;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 8px;
  box-shadow: 0 2px 4px rgba(37, 99, 235, 0.2);
  
  &:hover {
    opacity: 0.9;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-bottom: 16px;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    if (login(email, password)) {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Use: user@educase.com / educase123');
    }
  };

  return (
    <LoginContainer>
      <Logo>Educase</Logo>
      <LoginCard>
        <Title>Welcome Back</Title>
        <Subtitle>Enter your credentials to access your account</Subtitle>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Sign In</Button>
        </form>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;