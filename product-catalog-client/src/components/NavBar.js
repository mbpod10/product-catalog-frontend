import React from "react";
import { Link } from "react-router-dom";
import * as RBS from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <RBS.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <RBS.Navbar.Brand>
          <Link to="/">Home</Link>
        </RBS.Navbar.Brand>
        <RBS.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <RBS.Navbar.Collapse id="responsive-navbar-nav">
          <RBS.Nav className="mr-auto">
            <RBS.Nav.Link href=" ">
              <Link to="/catalog">Products</Link>
            </RBS.Nav.Link>

            {/* <RBS.Nav.Link href=" ">
              <Link to="/calc-tax">Calc</Link>
            </RBS.Nav.Link>

            <RBS.Nav.Link href=" ">
              <Link to="/dependents">Dependents</Link>
            </RBS.Nav.Link>

            <RBS.Nav.Link href=" ">
              <Link to="/credits">Credits</Link>
            </RBS.Nav.Link>

            <RBS.Nav.Link href=" ">
              <Link to="/tax-rates">Rates</Link>
            </RBS.Nav.Link> */}

            {/* {loggedIn === "LOGGED_IN" ? (
              <>
                <RBS.Nav.Link href=" ">
                  <Link to="/dashboard">Dashboard</Link>
                </RBS.Nav.Link>
                <RBS.Nav.Link href=" ">
                  <Link to={`/profile/${user.id}`}>Profile</Link>
                </RBS.Nav.Link>
              </>
            ) : null} */}
          </RBS.Nav>

          {/* <RBS.Nav>
            {loggedIn === "LOGGED_IN" ? (
              <>
                <RBS.Nav.Link eventKey={2} href=" ">
                  <Link to="/"> {email}</Link>
                </RBS.Nav.Link>
                <RBS.Nav.Link eventKey={2} href=" ">
                  <Link to="/" onClick={() => handleLogoutClick()}>
                    {" "}
                    Logout
                  </Link>
                </RBS.Nav.Link>
              </>
            ) : (
              <RBS.Nav.Link eventKey={2}>
                <Link to="/login">Login</Link>
              </RBS.Nav.Link>
            )}
          </RBS.Nav> */}
        </RBS.Navbar.Collapse>
      </RBS.Navbar>
    </>
  );
};

export default NavBar;
