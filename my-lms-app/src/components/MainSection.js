import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import courses from '../data/courses';
import testimonials from '../data/testimonials';

function MainSection() {
  // get random courses to display
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [displayedTestimonials, setDisplayedTestimonials] = useState([]);
  
  useEffect(() => {
    // select random courses
    const randomCourses = [...courses].sort(() => 0.5 - Math.random()).slice(0, 3);
    setFeaturedCourses(randomCourses);
    
    // select random testimonials
    const randomTestimonials = [...testimonials].sort(() => 0.5 - Math.random()).slice(0, 2);
    setDisplayedTestimonials(randomTestimonials);
  }, []);
  
  return (
    <main className="main-section">
      <section className="hero-section">
        <h1>Welcome to Our Learning Management System</h1>
        <p>Discover a world of knowledge with our comprehensive courses.</p>
        <Link to="/courses" className="cta-button">Browse Courses</Link>
      </section>
      
      <section className="featured-courses">
        <h2>Featured Courses</h2>
        <div className="course-list">
          {featuredCourses.map(course => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.name} />
              <h3>{course.name}</h3>
              <p className="instructor">Instructor: {course.instructor}</p>
              <p className="description">{course.description}</p>
              <p className="duration">Duration: {course.duration}</p>
            </div>
          ))}
        </div>
        <Link to="/courses" className="view-all">View All Courses</Link>
      </section>
      
      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonial-list">
          {displayedTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <h3>{testimonial.studentName}</h3>
              <p className="course">{testimonial.courseName}</p>
              <p className="review">"{testimonial.review}"</p>
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default MainSection;
