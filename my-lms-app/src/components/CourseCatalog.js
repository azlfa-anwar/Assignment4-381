import React from 'react';
import CourseItem from './CourseItem';
import courses from '../data/courses';

function CourseCatalog() {
  // handle course enrollment
  const handleEnroll = (course) => {
    // get enrollment function from global scope
    if (window.handleEnroll) {
      window.handleEnroll(course);
      alert(`Successfully enrolled in ${course.name}`);
    }
  };

  return (
    <div className="course-catalog">
      <h2>Available Courses</h2>
      <div className="course-grid">
        {courses.map(course => (
          <CourseItem 
            key={course.id} 
            course={course} 
            onEnroll={handleEnroll}
          />
        ))}
      </div>
    </div>
  );
}

export default CourseCatalog; 