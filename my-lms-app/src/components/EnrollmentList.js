import React, { useState, useEffect } from 'react';
import EnrolledCourse from './EnrolledCourse';
import courses from '../data/courses';

function EnrollmentList() {
  const [enrollments, setEnrollments] = useState({});
  const [totalCreditHours, setTotalCreditHours] = useState(0);

  // load enrollments from local storage when component mounts
  useEffect(() => {
    const savedEnrollments = localStorage.getItem('enrollments');
    if (savedEnrollments) {
      setEnrollments(JSON.parse(savedEnrollments));
    }
  }, []);

  // save enrollments to local storage when they change
  useEffect(() => {
    localStorage.setItem('enrollments', JSON.stringify(enrollments));
    
    // calculate credits (3 per course)
    const totalHours = Object.keys(enrollments).length * 3;
    setTotalCreditHours(totalHours);
  }, [enrollments]);

  // handle dropping a course
  const handleDropCourse = (courseId) => {
    setEnrollments(prevEnrollments => {
      const updatedEnrollments = { ...prevEnrollments };
      
      if (updatedEnrollments[courseId]) {
        // decrease count
        updatedEnrollments[courseId] -= 1;
        
        // remove if zero
        if (updatedEnrollments[courseId] === 0) {
          delete updatedEnrollments[courseId];
        }
      }
      
      return updatedEnrollments;
    });
  };

  // add a course
  const handleEnroll = (course) => {
    setEnrollments(prevEnrollments => {
      const updatedEnrollments = { ...prevEnrollments };
      
      // add or increment count
      updatedEnrollments[course.id] = (updatedEnrollments[course.id] || 0) + 1;
      
      return updatedEnrollments;
    });
  };

  // get course data from ids
  const getEnrolledCourses = () => {
    return Object.keys(enrollments).map(courseId => {
      const courseData = courses.find(course => course.id === parseInt(courseId));
      return {
        course: courseData,
        enrollmentCount: enrollments[courseId]
      };
    });
  };

  // make enroll function available globally
  window.handleEnroll = handleEnroll;

  const enrolledCourses = getEnrolledCourses();

  return (
    <div className="enrollment-list">
      <h2>Enrollment List</h2>
      
      {enrolledCourses.length > 0 ? (
        <>
          <div className="enrolled-courses">
            {enrolledCourses.map(({ course, enrollmentCount }) => (
              <EnrolledCourse
                key={course.id}
                course={course}
                enrollmentCount={enrollmentCount}
                onDrop={handleDropCourse}
              />
            ))}
          </div>
          
          <div className="total-credits">
            <p>Total Credit Hours: {totalCreditHours}</p>
          </div>
        </>
      ) : (
        <p className="no-enrollments">No courses enrolled yet.</p>
      )}
    </div>
  );
}

export default EnrollmentList; 