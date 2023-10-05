import React, { useState, useEffect } from 'react';
import './admindashboardcss/Table.css';

function Enrollees() {
    const [enrollmentRequests, setEnrollmentRequests] = useState([]);

    useEffect(() => {
      fetch('')
        .then((response) => response.json())
        .then((data) => setEnrollmentRequests(data))
        .catch((error) => console.error('Error fetching enrollment requests:', error));
    }, []);
    const handleApproveRequest = (request) => {
      // Send a request to your server to approve the enrollment request
      // You will need to define an API endpoint for this
      fetch('your-approve-request-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      })
        .then((response) => response.json())
        .then((data) => {
          // Update the student's profile with the approved request data
          fetchStudentData();
        })
        .catch((error) => {
          console.error('Error approving enrollment request:', error);
        });
    };
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
