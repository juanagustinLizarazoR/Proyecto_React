import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div` 
  .color-nav{
    background-color: #000e16;
  }
  .fas{
    color:white;
  }
`;

function MyNav(props) {
  const logged_out_nav = (
    <div className="mynav">
      <Navbar className="color-nav" variant="dark" expand="lg">
        <span><i className="fas fa-users-cog mr-3 fa-2x"></i></span>
        <Navbar.Brand href="#home">User Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="mr-4"><span><i className="fas fa-user mr-3  fa-1x"></i></span>Login</Nav.Link>

            <Nav.Link href="/register"><span><i className="fas fa-user-plus mr-3 fa-1x"></i></span>Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );

  const logged_in_nav = (
    <Navbar expand="lg">
    <Navbar.Brand href="#home">{props.logged_in}</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link onClick={props.handle_logout}>Log Out</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
  return (
    <Styles>{props.logged_in ? logged_in_nav : logged_out_nav}</Styles>
  );
}

export default MyNav;

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};