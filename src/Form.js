import React, { useState } from "react";

export default ({ teamMembers, setTeamMembers }) => {
    const [teamMember, setTeamMember] = useState([]);

    const handleChange = e => {
        let value = e.target.value;
        setTeamMember({ ...teamMember, [e.target.name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setTeamMembers([...teamMembers, teamMember]);
        console.log("Submitting: ", teamMember);
    }

    console.log(teamMember);

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" value={teamMember.name} onChange={handleChange}/>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" value={teamMember.email} onChange={handleChange}/>
            <label htmlFor="role">Role: </label>
            <input type="text" name="role" id="role" value={teamMember.role} onChange={handleChange}/>
            <button>Submit</button>
        </form>
    );
};
