import React from 'react';

interface CourseProps {
  name: string;
  courseId: string;
  studentPositions: number;
}
const Course: React.FC<CourseProps> = ({ name, courseId, studentPositions }) => {
  return (
    <div className="course" style={{
      padding: '10px',
      margin: '10px',
      textAlign: 'center',
      border: '1px solid gray'
    }}>
      <h2>{name}</h2>
      <p>{courseId}</p>
      <p>Student Positions: {studentPositions}</p>
    </div>
  );
};

export default Course;
