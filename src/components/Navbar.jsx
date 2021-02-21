import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const AppNav = ({ children }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <AppNavLink title="Home" route="/" />
            <AppNavLink title="About" route="/about" />
            <AppNavLink title="Contact" route="/contact" />
            <NavDropdown title="Devices" id="basic-nav-dropdown">
              <AppNavLink
                title="Laptop"
                route="/devices/laptop"
                className="dropdown-item"
              />
              <AppNavLink
                title="Mobile"
                route="/devices/mobile"
                className="dropdown-item"
              />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="m-3">{children}</div>
    </>
  );
};

export default AppNav;

function AppNavLink({ title, route, ...props }) {
  return (
    <NavLink
      to={route}
      activeClassName="active"
      className="nav-link"
      exact
      {...props}
    >
      {title}
    </NavLink>
  );
}
