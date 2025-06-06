import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #2563EB;
  color: white;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: white;
  font-size: 20px;
  
  &:hover {
    opacity: 0.8;
  }
`;

const IconGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <IconButton aria-label="Menu">☰</IconButton>
      
      <HeaderTitle>{title}</HeaderTitle>
      
      <IconGroup>
        <IconButton aria-label="Notifications">
          <span role="img" aria-label="notification">🔔</span>
        </IconButton>
      </IconGroup>
    </HeaderContainer>
  );
};

export default Header;