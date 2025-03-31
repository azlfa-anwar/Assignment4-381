import { Link } from "react-router-dom";

function Header(){
  return (
    <header className="header">
      <div className="logo">
        <img src="https://placehold.co/200x80/navy/white?text=LMS+Logo" alt="LMS Logo"/>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;