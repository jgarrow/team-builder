import React, { useState } from "react";
import styled from "@emotion/styled";

import { FaEdit } from "react-icons/fa";

import Form from "./Form";

import "./App.css";

const PersonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
    grid-gap: 1rem;
    margin: 2rem auto 0;
`;

const PersonWrapper = styled.div`
    margin: 0 auto;
    position: relative;
    width: fit-content;
    box-sizing: border-box;
    padding: 0.5rem;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
`;

const EditIcon = styled(FaEdit)`
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
`;

function App() {
    const [teamMembers, setTeamMembers] = useState([]);
    const [memberToEdit, setMemberToEdit] = useState(-1); //index of member we are editing

    const handleEditIconClick = member => {
        setMemberToEdit(member);
    };

    const addNewTeamMember = teamMember => {
        const newTeamMembers = [...teamMembers, teamMember];
        setTeamMembers(newTeamMembers);
    };

    const editMember = editedMember => {
        const members = [...teamMembers];
        members[memberToEdit] = editedMember;
        setTeamMembers(members);
        setMemberToEdit(-1);
    };

    const submitForm = teamMember => {
        if (memberToEdit > -1) {
            editMember(teamMember);
        } else {
            addNewTeamMember(teamMember);
        }
    };

    return (
        <div className="App">
            <Form submitForm={submitForm} />
            <PersonContainer>
                {teamMembers !== [] &&
                    teamMembers.map((person, index) => (
                        <PersonWrapper key={index}>
                            <EditIcon
                                onClick={() => handleEditIconClick(index)}
                            />
                            <div>
                                <h2>Name: {person.name}</h2>
                                <p>Email: {person.email}</p>
                                <p>Role: {person.role}</p>
                            </div>
                        </PersonWrapper>
                    ))}
            </PersonContainer>
            {memberToEdit > -1 && (
                <Form
                    submitForm={submitForm}
                    memberToEdit={teamMembers[memberToEdit]}
                />
            )}
        </div>
    );
}

export default App;
