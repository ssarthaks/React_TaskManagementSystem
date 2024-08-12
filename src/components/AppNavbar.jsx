import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function AppNavbar() {
  return (
    <div className="mt-4">
      <Navbar bg="dark" data-bs-theme="dark" className="mb-4">
        <Container>
          <Nav className="mx-auto gap-16 text-lg">
            <Nav.Link href="/" active={location.pathname === "/"}>
              Home
            </Nav.Link>
            <Nav.Link
              href="/addtask"
              active={location.pathname === "/addtask"}
            >
              Add Task
            </Nav.Link>
            <Nav.Link
              href="/viewtask"
              active={location.pathname === "/viewtask"}
            >
              View Tasks
            </Nav.Link>
            <Nav.Link href="/usersetting" active={location.pathname === "/usersetting"}>
              Settings
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}

export default AppNavbar;
