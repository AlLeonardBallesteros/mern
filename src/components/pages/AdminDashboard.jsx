import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../dashboard/admindashboard/Dashboard';
import AdminProfile from '../dashboard/admindashboard/AdminProfile';
import RegisteredStudent from '../dashboard/admindashboard/RegisteredStudent';
import ShifeeStudent from '../dashboard/admindashboard/ShifteeStudent';
import RequestChange from '../dashboard/admindashboard/RequestChange';
import Header from '../dashboard/Header';
import './pagescss/StudentAdminDashboard.css';



function StudentDashboard() {
  return (
  <div className="dashboard">
  <Header />
    <Navbar>
      <Container>
          <Nav className="sidebar">
            <Nav.Link href="/admin-dashboard/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/admin-dashboard/admin-profile">Profile</Nav.Link>
            <Nav.Link href="/admin-dashboard/registered-student">registered student</Nav.Link>
            <Nav.Link href="/admin-dashboard/shiftee-student">shiftee student</Nav.Link>
            <Nav.Link href="/admin-dashboard/request-change">Request Change Of Subject</Nav.Link>
          </Nav>
      </Container>
    </Navbar>


  <Routes>
  <Route path="dashboard" element={<Dashboard />} /> 
  <Route path="admin-profile" element={<AdminProfile />} />
  <Route path="registered-student" element={<RegisteredStudent />} />
  <Route path="shiftee-student" element={<ShifeeStudent />} />
  <Route path="request-change" element={<RequestChange />} />
  </Routes>
  </div>
  
  );
}

export default StudentDashboard;