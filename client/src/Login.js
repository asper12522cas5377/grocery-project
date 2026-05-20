import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        email: "",
        password: ""

    });

    //---------- HANDLE CHANGE------------//
   
    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    //---------- LOGIN------------//

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post("http://localhost:3001/login",formData);

            // SAVE USER

            localStorage.setItem(

                "user",

                JSON.stringify(response.data.user)

            );

            alert(response.data.message);

            navigate("/shop");

        } catch (error) {

            console.log(error);

            alert(error.response?.data?.message ||"Login Failed");
        }
    };

    
    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow p-4">

                        <h2 className="text-center mb-4">
                            Login
                        </h2>

                        <form onSubmit={handleLogin}>

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
                                    required/>
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
                                    required/>
                            </div>

                            {/* BUTTON */}

                            <button type="submit" className="btn btn-success w-100">
                                Login
                            </button>

                        </form>

                        <p className="text-center mt-3">

                            Don't have an account ?

                            <Link to="/reg" className="ms-2">
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;