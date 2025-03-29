import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

function Header(){
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="LMS Logo"/>
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