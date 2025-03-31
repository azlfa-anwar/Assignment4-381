import React from 'react';

function EnrolledCourse({ course, enrollmentCount, onDrop }) {
  return (
    <div className="enrolled-course">
      <div className="course-info">
        <h4>{course.name}</h4>
        <p>Credit Hours: 3</p>
        <p>Enrollment Count: {enrollmentCount}</p>
      </div>
      <button 
        className="drop-button"
        onClick={() => onDrop(course.id)}
      >
        Drop Course
      </button>
    </div>
  );
}

export default EnrolledCourse; 