import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: ;
`;

const SubmitButton = styled.button`
    width: 50px;
    height: 30px;
    margin: 1rem auto 0;
`;

export default ({ submitForm, addNewTeamMember, memberToEdit, editMember }) => {
    const [teamMember, setTeamMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    useEffect(() => {
        if (memberToEdit) {
            setTeamMember(memberToEdit);
        }
    }, [memberToEdit]);

    const handleChange = e => {
        setTeamMember({ ...teamMember, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        submitForm(teamMember);
        setTeamMember({ name: "", email: "", role: "" });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <InputContainer>
                <label htmlFor="name">
                    Name:
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={teamMember.name}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="email">
                    Email:
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={teamMember.email}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="role">
                    Role:
                    <input
                        type="text"
                        name="role"
                        id="role"
                        placeholder="Role"
                        value={teamMember.role}
                        onChange={handleChange}
                    />
                </label>
            </InputContainer>
            <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
    );
};
