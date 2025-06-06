import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ theme, primary }) => primary ? theme.colors.primary : theme.colors.white};
  color: ${({ theme, primary }) => primary ? theme.colors.white : theme.colors.primary};
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;