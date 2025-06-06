import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  display: flex;
  justify-content: space-around;
  padding: 12px 0;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
  z-index: 100;
`;

const NavItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #64748B;
  font-size: 12px;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.2s ease;
  
  &.active {
    color: #2563EB;
  }
`;

const Icon = styled.span`
  font-size: 24px;
  margin-bottom: 4px;
`;

const Navigation = () => {
  return (
    <NavContainer>
      <NavItem to="/dashboard">
        <Icon>📊</Icon>
        Dashboard
      </NavItem>
      <NavItem to="/profile">
        <Icon>👤</Icon>
        Profile
      </NavItem>
    </NavContainer>
  );
};

export default Navigation;