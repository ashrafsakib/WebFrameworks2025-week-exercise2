import React from 'react';
import Course from './Course';
import { CourseData } from './App';

interface CourseListProps {
  courses: CourseData[];
}
const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div>
      {courses.map((course, index) => (
        <Course
          key={index}
          name={course.name}
          courseId={course.courseId}
          studentPositions={course.studentPositions}
        />
      ))}
    </div>
  );
};

export default CourseList;
