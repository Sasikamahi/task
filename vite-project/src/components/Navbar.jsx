import { Link } from "react-router-dom";
import "./css/Navbar.css";
import { useEffect, useState } from "react";
const Navbar = () => {
  const isLogin = localStorage.getItem("isLogin") === "false";
  var [dropdown, showDropdown] = useState(false);
  var [dropdown2, showDropdown2] = useState(false);
  var [dept, showDept] = useState("");
  useEffect(() => {
    console.log("Welcome to", dept);
  }, [dept]);
  const logout = () => {
    localStorage.setItem("isLogin","false");
    alert("Logout Successful");
    window.location.href = "/";
  }
  return (
    <nav>
      <li>
        <Link to="/" className="link">
          Home
        </Link>
      </li>
      <li>
        <div
          className="dropdown"
          onMouseEnter={() => showDropdown2((dropdown2) => !dropdown2)}
          onMouseLeave={() => showDropdown2((dropdown2) => !dropdown2)}
        >
          <span className="link">Placements</span>
          {dropdown2 && (
            <ul className="dropdown-list">
              <li>
                <Link
                  to="/i-t"
                  className="dropdown-link"
                  onClick={() => showDept("CSE")}
                >
                  IT
                </Link>
              </li>
              <li>
                <Link
                  to="/core"
                  className="dropdown-link"
                  onClick={() => showDept("IT")}
                >
                  Core
                </Link>
              </li>
              <li>
                <Link
                  to="/it-core"
                  className="dropdown-link"
                  onClick={() => showDept("CCE")}
                >
                  IT & Core
                </Link>
              </li>
            </ul>
          )}
        </div>
      </li>
      <li>
        <div
          className="dropdown"
          onMouseEnter={() => showDropdown((dropdown) => !dropdown)}
          onMouseLeave={() => showDropdown((dropdown) => !dropdown)}
        >
          <span className="link">Courses</span>
          {dropdown && (
            <ul className="dropdown-list">
              <li>
                <Link
                  to="/cse"
                  className="dropdown-link"
                  onClick={() => showDept("CSE")}
                >
                  CSE
                </Link>
              </li>
              <li>
                <Link
                  to="/it"
                  className="dropdown-link"
                  onClick={() => showDept("IT")}
                >
                  IT
                </Link>
              </li>
              <li>
                <Link
                  to="/cce"
                  className="dropdown-link"
                  onClick={() => showDept("CCE")}
                >
                  CCE
                </Link>
              </li>
              <li>
                <Link
                  to="/aiml"
                  className="dropdown-link"
                  onClick={() => showDept("AIML")}
                >
                  AIML
                </Link>
              </li>
              <li>
                <Link
                  to="/aids"
                  className="dropdown-link"
                  onClick={() => showDept("AIDS")}
                >
                  AIDS
                </Link>
              </li>
            </ul>
          )}
        </div>
      </li>
      <li>
        {console.log("In NavBar",isLogin)}
        {isLogin ? (
          <Link to="/login" className="link">
            Login
          </Link>
        ) : (
          
          <span className="link" onClick={logout}>Logout</span>
        )}
      </li>
    </nav>
  );
};
export default Navbar;
