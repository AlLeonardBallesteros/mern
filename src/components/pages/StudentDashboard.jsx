import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from '../dashboard/studentdashboard/Home';
import Profile from '../dashboard/studentdashboard/Profile';
import Programs from '../dashboard/studentdashboard/Programs';
import Bscs from '../dashboard/studentdashboard/Bscs';
import Bsit from '../dashboard/studentdashboard/Bsit';
import Webdev from '../dashboard/studentdashboard/Webdev';
import Sysdev from '../dashboard/studentdashboard/Sysdev';
import Animation from '../dashboard/studentdashboard/Animation';
import Enrollment from '../dashboard/studentdashboard/Enrollment';
import ChangeSubject from '../dashboard/studentdashboard/ChangeSubject';
import ShiftingCourse from '../dashboard/studentdashboard/ShiftingCourse';
import ContactUs from '../dashboard/studentdashboard/ContactUs'
import Header from '../dashboard/Header';
import './pagescss/StudentAdminDashboard.css';


function StudentDashboard() {
  return (
  <div className="dashboard"> 
          <Header />

      <Navbar expand="lg" className="flex-column bg-light">
        <Navbar.Collapse id="sidebar-nav">
        <Nav className="flex-column">
            <Nav.Link href="/student-dashboard/home">Home</Nav.Link>
            <Nav.Link href="/student-dashboard/profile">Profile</Nav.Link>
            <Nav.Link href="/student-dashboard/programs">Programs</Nav.Link>
            <NavDropdown title="Cite Courses" id="basic-nav-dropdown">
              <NavDropdown.Item href="/student-dashboard/bscs">BSCS</NavDropdown.Item>
              <NavDropdown.Item href="/student-dashboard/bsit">BSIT</NavDropdown.Item>
              <NavDropdown.Item href="/student-dashboard/web-dev">WEB DEV</NavDropdown.Item>
              <NavDropdown.Item href="/student-dashboard/sys-dev">SYS DEV</NavDropdown.Item>
              <NavDropdown.Item href="/student-dashboard/animation">Animation</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/student-dashboard/enrollment">Enrollment</Nav.Link>
            <Nav.Link href="/student-dashboard/change-subject">Request Change Of Subject</Nav.Link>
            <Nav.Link href="/student-dashboard/shifting-course">Shifting Course</Nav.Link>
            <Nav.Link href="/student-dashboard/contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    <Routes>
    <Route path="home" element={<Home />} />
    <Route path="profile" element={<Profile />} />
    <Route path="programs" element={<Programs />} />
    <Route path="bscs" element={<Bscs />} />
    <Route path="bsit" element={<Bsit />} />
    <Route path="web-dev" element={<Webdev />} />
    <Route path="sys-dev" element={<Sysdev />} />
    <Route path="animation" element={<Animation />} />
    <Route path="enrollment" element={<Enrollment />} />
    <Route path="change-subject" element={<ChangeSubject />} />
    <Route path="shifting-course" element={<ShiftingCourse />} />
    <Route path="contact-us" element={<ContactUs />} />
    </Routes>
  </div>
  
  );
}

export default StudentDashboard;
