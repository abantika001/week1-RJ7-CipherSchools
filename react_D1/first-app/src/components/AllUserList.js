import React, { useState } from "react";
import Test from "./Test";
import UserDetails from "./UserDetails";

const AllUserList = () => {
    const [state, setState] = useState({
        name: "Priyanshu Saxena",
    });
    let allUsers = [
        { name: "John", email: "john@email.com", phoneNumber: "+91-9876543210"},
        { name: "Shreyus", email: "shreyus@email.com", phoneNumber: "+91-78964563217"},
        { name: "Abantika", email: "abantika@email.com", phoneNumber: "+91-9876543210"},
    ];

    let setStateName = (name) => {
        setState({ ...state, name});
    };

    return (
        <div>
            <Test name={state.name} setName={5} />
            {allUsers.map((user, index) => (
            <UserDetails key={index} user={user} />
            ))}
        </div>
    );
};
export default AllUserList;