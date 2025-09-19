import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const courses = [
  { name: "Course 1", courseId: "ABC123", studentPositions: 30 },
  { name: "Course 2", courseId: "DEF456", studentPositions: 25 },
  { name: "Course 3", courseId: "GHI789", studentPositions: 20 },
];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App courses={courses} />
  </StrictMode>,
)
