import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseCatalog from './components/CourseCatalog';
import EnrollmentList from './components/EnrollmentList';
import './App.css';

function CoursesPage() {
  return (
    <div className="courses-page">
      <Header />
      <div className="content">
        <CourseCatalog />
        <EnrollmentList />
      </div>
      <Footer />
    </div>
  );
}

export default CoursesPage;
