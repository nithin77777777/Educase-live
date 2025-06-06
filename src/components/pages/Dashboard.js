import styled from 'styled-components';
import Header from '../common/Header';

const DashboardContainer = styled.div`
  padding: 24px;
  background-color: #F8FAFC;
  min-height: calc(100vh - 64px);
`;

const Greeting = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #1E293B;
  margin-bottom: 24px;
`;

const CourseCard = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CourseTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #1E293B;
  margin-bottom: 8px;
`;

const CourseMeta = styled.div`
  display: flex;
  justify-content: space-between;
  color: #64748B;
  font-size: 14px;
`;

const ProgressBar = styled.div`
  height: 6px;
  background: #E2E8F0;
  border-radius: 3px;
  margin-top: 8px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  width: ${props => props.percentage}%;
  background: #2563EB;
  border-radius: 3px;
`;

const Dashboard = () => {
  return (
    <>
      <Header title="Dashboard" />
      <DashboardContainer>
        <Greeting>Hello, User!</Greeting>
        
        <CourseCard>
          <CourseTitle>Mathematics 101</CourseTitle>
          <CourseMeta>
            <span>10 Lessons</span>
            <span>80% Complete</span>
          </CourseMeta>
          <ProgressBar>
            <Progress percentage={80} />
          </ProgressBar>
        </CourseCard>
        
        <CourseCard>
          <CourseTitle>Science Fundamentals</CourseTitle>
          <CourseMeta>
            <span>8 Lessons</span>
            <span>45% Complete</span>
          </CourseMeta>
          <ProgressBar>
            <Progress percentage={45} />
          </ProgressBar>
        </CourseCard>
        
        <CourseCard>
          <CourseTitle>History of Technology</CourseTitle>
          <CourseMeta>
            <span>12 Lessons</span>
            <span>30% Complete</span>
          </CourseMeta>
          <ProgressBar>
            <Progress percentage={30} />
          </ProgressBar>
        </CourseCard>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;