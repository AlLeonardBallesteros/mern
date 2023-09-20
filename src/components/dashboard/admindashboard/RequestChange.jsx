import React from 'react';
import './admindashboardcss/Table.css';

function RequestChange() {
  const requestChangeData = [
    { id: 1, firstName: 'John', lastName: 'Doe', prevCourse: '', newCourse: '', reason: '' },
    { id: 2, firstName: 'Al Leonard', lastName: 'Ballesters', prevCourse: 'ITE233', newCourse: 'FIL1300', reason: 'ANG HIRAP NITO KALA KO PINDOT PINDOT LANG' },
  
  ];

  return (
    <div className="centered">
      <p>Total Requests: {requestChangeData.length}</p>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Previous Subject</th>
            <th>New Subject</th>
            <th>Reason for Changing</th>
          </tr>
        </thead>
        <tbody>
          {requestChangeData.map(student => (
            <tr key={student.id}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.prevCourse}</td>
              <td>{student.newCourse}</td>
              <td>{student.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RequestChange;

