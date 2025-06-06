import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../common/Header';

const ProfileContainer = styled.div`
  padding: 24px;
  background-color: #F8FAFC;
  min-height: calc(100vh - 64px);
`;

const ProfileCard = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 24px;
`;

const ProfileTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1E293B;
  margin-bottom: 16px;
`;

const ProfileInfo = styled.div`
  margin-bottom: 16px;
  
  p {
    margin-bottom: 8px;
    
    strong {
      color: #2563EB;
    }
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: #2563EB;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
`;

const Profile = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header title="Profile" />
      <ProfileContainer>
        <ProfileCard>
          <ProfileTitle>User Information</ProfileTitle>
          <ProfileInfo>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> user@educase.com</p>
            <p><strong>Role:</strong> Student</p>
            <p><strong>Joined:</strong> January 2023</p>
          </ProfileInfo>
          <Button onClick={() => navigate('/dashboard')}>
            Back to Dashboard
          </Button>
        </ProfileCard>
      </ProfileContainer>
    </>
  );
};

export default Profile;