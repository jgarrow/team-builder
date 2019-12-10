import React, { useState } from "react";

import Form from "./Form";

import "./App.css";

function App() {
    const [teamMembers, setTeamMembers] = useState([]);

    return (
        <div>
            <Form teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
            {teamMembers !== [] && teamMembers.map((person, index) => (
                <div key={index}>
                    <h2>Name: {person.name}</h2>
                    <p>Email: {person.email}</p>
                    <p>Role: {person.role}</p>
                </div>
            ))}
        </div>
    );
}

export default App;
