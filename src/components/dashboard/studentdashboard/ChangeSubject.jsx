import React, { useState } from 'react';
import './studentdashboardcss/ChangeSubject.css';
import { useNavigate } from 'react-router-dom';
import './studentdashboardcss/ChangeSubject.css';

function ChangeSubject() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [prevSub, setPrevSub] = useState('');
  const [newSub, setNewSub] = useState('');
  const [reasonChange, setReasonChange] = useState('');

  const navigate = useNavigate();

  const handleChangeSubject = () => {
    if (firstName === '' || lastName === '' || prevSub === '' || newSub === '' || reasonChange=== '') {
      alert('All fields are required');
    } else {
      alert('Request change of subject sent');
      navigate('/student-dashboard/home');
    }
  };

    return (
      <div className="change-form-container">
      <div className="change-row">
        <div className="change-column">
          <label htmlFor="firstName">First Name*</label>
          <input 
          type="text" 
          id="firstName" 
          name="input1" 
          autoComplete="given-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="change-column">
          <label  htmlFor="family-name">Last Name*</label>
          <input 
          type="text" 
          id="family-name" 
          name="input2" 
          autoComplete="family-name" 
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}/>
        </div>
      </div>
      <div className="change-row">
        <div className="change-column">
          <label  htmlFor="email">Previous Subject*</label>
          <input 
          type="text" 
          id="email" name="input3" 
          autoComplete="off"
          value={prevSub}
          onChange={(e) => setPrevSub(e.target.value)} />
        </div>
        <div className="change-column">
          <label  htmlFor="number">New Subject*</label>
          <input 
          type="text" 
          id="number" 
          name="input4" 
          value={newSub}
          onChange={(e) => setNewSub(e.target.value)} />
        </div>
      </div>
      <div id="last" className="change-row">
        <div id="last" className="change-column">
          <label  htmlFor="course">Reason for chaging subject*</label>
          <input 
          type="text" 
          id="course" 
          name="input5" 
          value={reasonChange}
          onChange={(e) => setReasonChange(e.target.value)} />
        </div>
        </div>
        <div className="button-group">
        <button onClick={handleChangeSubject} className="submit-button">
          SUBMIT
        </button>
      </div>
      </div>
    );
  }
  
export default ChangeSubject;
