import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import StudentLogin from './components/pages/StudentLogin';
import AdminLogin from './components/pages/AdminLogin';
import StudentCreateAccount from './components/pages/StudentCreateAccount';
import StudentDashboard from './components/pages/StudentDashboard';
import AdminDashboard from './components/pages/AdminDashboard';





function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="admin-login" element={<AdminLogin />} />
        <Route path="student-login" element={<StudentLogin />} />
        <Route path="student-create-account" element={<StudentCreateAccount />} />
        <Route path="student-dashboard/*" element={<StudentDashboard />} />
        <Route path="admin-dashboard/*" element={<AdminDashboard />} />
      </Routes>
  );
}

export default App;
