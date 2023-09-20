import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import './admindashboardcss/Dashboard.css';

class Dashboard extends Component{
  state = {
    registeredStudents: 4,
    shifteeStudents: 4,
    subjectChangeRequestStudents: 4,
  };

  
  render() {
    return (
      <div className="dashboard-container">
        <Card className="dashboard-card">
            <Card.Title>Registered Students</Card.Title>
            <p>{this.state.registeredStudents}</p>
            <Button href="/admin-dashboard/registered-student">View more</Button>
            </Card>
            <Card className="dashboard-card">
            <Card.Title>Shiftee Students</Card.Title>
            <p>{this.state.shifteeStudents}</p>
            <Button href="/admin-dashboard/shiftee-student">View more</Button>
            </Card>
            <Card className="dashboard-card">
            <Card.Title>Students who have requested to change subjects</Card.Title>
            <p>{this.state.subjectChangeRequestStudents}</p>
            <Button href="/admin-dashboard/request-change">View more</Button>
        </Card>
      </div>
    );
  }
}

export default Dashboard;
