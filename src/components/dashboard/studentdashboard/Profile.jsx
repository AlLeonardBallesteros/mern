import React from "react";
import { TextField } from "@material-ui/core";
import './studentdashboardcss/Profile.css';

const Profile = () => {
  const [student, setStudent] = React.useState({
    name: "",
    course: "",
    yearLevel: "",
    address: "",
    birthdate: "",
    birthplace: "",
    nationality: "",
    contactNum: "",
    emailAddress: "",
    facebookUsername: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudent({ ...student, [name]: value });
  };

  return (
    <div className="profile-container">
      <h1>Profile information</h1>
      <div className="horizontal">
      <TextField
        label="Course"
        value={student.course}
        onChange={handleChange}
      />
      <TextField
        label="Year Level"
        value={student.yearLevel}
        onChange={handleChange}
      />
      </div>
      <TextField
        label="Name"
        value={student.name}
        onChange={handleChange}
      />
      <TextField
        label="Address"
        value={student.address}
        onChange={handleChange}
      />
      <TextField
        label="Birthdate"
        value={student.birthdate}
        onChange={handleChange}
      />
      <TextField
        label="Birthplace"
        value={student.birthplace}
        onChange={handleChange}
      />
      <TextField
        label="Nationality"
        value={student.nationality}
        onChange={handleChange}
      />
      <TextField
        label="Contact Number"
        value={student.contactNum}
        onChange={handleChange}
      />
      <TextField
        label="Email Address"
        value={student.emailAddress}
        onChange={handleChange}
      />
      <TextField
        label="Facebook Username"
        value={student.facebookUsername}
        onChange={handleChange}
      />
    </div>
  
  );
};

export default Profile;
