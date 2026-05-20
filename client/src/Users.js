import React, { useEffect, useState } from "react";
import axios from "axios";

function UsersTable() {

    const [users, setUsers] = useState([]);

    // Fetch Users
    const getUsers = async () => {

        try {

            const response = await axios.get(
                "http://localhost:3001/users"
            );

            setUsers(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    // Delete User
    const deleteUser = async (id) => {

        try {

            await axios.delete(
                `http://localhost:3001/users/${id}`
            );

            alert("User Deleted");

            getUsers();

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        getUsers();

    }, []);

    return (

        <div className="container mt-5">

            <h2 className="mb-4 text-center">
                User Data Table
            </h2>

            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                    <tr>

                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Role</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        users.map((user, index) => (

                            <tr key={user._id}>

                                <td>{index + 1}</td>

                                <td>{user.name}</td>

                                <td>{user.email}</td>

                                <td>{user.phone}</td>

                                <td>{user.role}</td>

                                <td>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteUser(user._id)}
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    );
}

export default UsersTable;