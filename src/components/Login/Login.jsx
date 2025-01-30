import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; 

const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const [error, setError] = useState(null);

    const USERNAME = "user";
    const PASSWORD = "user";

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = form;
        if (username === USERNAME && password === PASSWORD) {
            navigate("/products");
        } else {
            setError("El usuario o contraseña es incorrecto");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <section className="login-container">
            <h1 className="login-title">Log in FakeStore</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="login-form-group">
                    <label htmlFor="username" className="login-label">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="login-input"
                        value={form.username}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="Enter username"
                    />
                </div>
                <div className="login-form-group">
                    <label htmlFor="password" className="login-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="login-input"
                        value={form.password}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="Enter password"
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
            {error && <p className="login-error">{error}</p>}
        </section>
    );
};

export default Login;
