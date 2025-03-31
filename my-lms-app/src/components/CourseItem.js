import React, { useState } from 'react';

function CourseItem({ course, onEnroll }) {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <div 
      className="course-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={course.image} alt={course.name} />
      <h3>{course.name}</h3>
      <p className="instructor">Instructor: {course.instructor}</p>
      
      {showDescription ? (
        <p className="description">{course.description}</p>
      ) : (
        <p className="duration">Duration: {course.duration}</p>
      )}
      
      <button 
        className="enroll-button" 
        onClick={() => onEnroll(course)}
      >
        Enroll Now
      </button>
    </div>
  );
}

export default CourseItem; 