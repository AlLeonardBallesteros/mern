import React, { useState, useEffect } from 'react';
import './admindashboardcss/Table.css';

function Enrollees() {
    const [enrollmentRequests, setEnrollmentRequests] = useState([]);

    useEffect(() => {
      fetch('/api/enrollment-requests') 
        .then((response) => response.json())
        .then((data) => setEnrollmentRequests(data))
        .catch((error) => console.error('Error fetching enrollment requests:', error));
    }, []);
  
    return (
      <div className="centered">
        <p>Enrollment Requests</p>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {enrollmentRequests.map((request, index) => (
              <tr key={index}>
                <td>{request.firstName}</td>
                <td>{request.lastName}</td>
                <td>{request.email}</td>
                <td>{request.number}</td>
                <td>{request.selectedCourse}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
export default Enrollees;
