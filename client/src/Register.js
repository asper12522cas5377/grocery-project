import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        name: "",
        email: "",
        password: "",
        phone: ""

    });

    //-------------- HANDLE CHANGE---------------//
  
    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    //------------- REGISTER-----------------//

    const handleRegister = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post("http://localhost:3001/register",formData);

            alert(response.data.message);

            navigate("/login");

        } catch (error) {

            console.log(error);

            alert(error.response?.data?.message ||"Registration Failed");
        }
    };


    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow p-4">

                        <h2 className="text-center mb-4">
                            Register
                        </h2>

                        <form onSubmit={handleRegister}>

                            {/* NAME */}

                            <div className="mb-3">

                                <label className="form-label">
                                    Username
                                </label>

                                
                                <input type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Enter Username"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required />
                            </div>

                            {/* EMAIL */}

                            <div className="mb-3">

                                <label className="form-label">
                                    Email
                                </label>

                                
                                <input type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Enter Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required />
                            </div>

                            {/* PHONE */}

                            <div className="mb-3">

                                <label className="form-label">
                                    Phone Number
                                </label>

                                
                                <input type="text"
                                    name="phone"
                                    className="form-control"
                                    placeholder="Enter Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required />
                            </div>

                            {/* PASSWORD */}

                            <div className="mb-3">

                                <label className="form-label">
                                    Password
                                </label>

                                
                                <input type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required />
                            </div>

                            {/* BUTTON */}

                            <button type="submit" className="btn btn-success w-100">
                                Register
                            </button>

                        </form>

                        <p className="text-center mt-3">

                            Already have an account ?

                        <Link to="/login" className="ms-2">
                            Login
                        </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register;