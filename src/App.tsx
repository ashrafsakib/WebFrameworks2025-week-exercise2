import './App.css'

import React from 'react';
import CourseList from './CourseList';

export interface CourseData {
  name: string;
  courseId: string;
  studentPositions: number;
}

const App: React.FC<{ courses: CourseData[] }> = ({ courses }) => {
  return (
    <div className="App">
      <CourseList courses={courses} />
    </div>
  );
};

export default App;

