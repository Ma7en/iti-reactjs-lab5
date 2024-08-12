/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";

function Register() {
    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    const [formValues, setFormValues] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
    });

    const [formErrors, setFormErrors] = useState({
        name: false,
        username: false,
        email: false,
        password: false,
        confirmpassword: false,
    });

    const checkEmail = () => {
        const emailAddress = formValues.email;
        if (
            emailAddress.length > 7 &&
            String(emailAddress)
                .toLowerCase()
                .match(/^\S+@\S+\.\S+$/)
        ) {
            setFormErrors({ ...formErrors, email: false });
        } else {
            setFormErrors({ ...formErrors, email: true });
        }
    };

    const checkPassword = () => {
        const _password = formValues.password;

        if (
            _password.length > 7 &&
            String(_password)
                .toLowerCase()
                .match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
        ) {
            setFormErrors({ ...formErrors, password: false });
        } else {
            setFormErrors({ ...formErrors, password: true });
        }
    };

    const checkConfirmPassword = () => {
        if (formValues.password === formValues.confirmpassword) {
            setFormErrors({ ...formErrors, confirmpassword: true });
        } else {
            setFormErrors({ ...formErrors, confirmpassword: false });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Object.values(formErrors).every((value) => !value)) {
            console.log("Form Failed to submit");
        } else {
            console.log("Form submitted successfully");
        }
    };

    const handleFormChange = (e) => {
        const changed_element = e.target;
        const name = changed_element.name;
        const new_values = { ...formValues };
        new_values[name] = changed_element.value;
        setFormValues(new_values);

        switch (name) {
            case "name":
                if (changed_element.value.length < 5) {
                    setFormErrors({ ...formErrors, name: true });
                } else {
                    setFormErrors({ ...formErrors, name: false });
                }
                break;
            case "username":
                if (
                    changed_element.value.length < 5 ||
                    /\s/.test(changed_element.value)
                ) {
                    setFormErrors({ ...formErrors, username: true });
                } else {
                    setFormErrors({ ...formErrors, username: false });
                }
                break;
            case "email":
                checkEmail();
                break;
            case "password":
                checkPassword();
                break;
            case "confirmpassword":
                checkConfirmPassword();
                break;
            default:
                break;
        }
    };

    return (
        <div
            className={`register   ${
                darkMode ? "text-bg-dark" : "text-bg-white"
            }`}
            dir={`${language === "en" ? "ltr" : "rtl"}`}
        >
            <div className="container py-5 ">
                <Form
                    onSubmit={handleSubmit}
                    onChange={handleFormChange}
                    dir={`${language === "en" ? "ltr" : "rtl"}`}
                >
                    {/* name */}
                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Label className="w-100 ">Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="First Name"
                            required
                            name="name"
                            value={formValues.name}
                            onChange={handleFormChange}
                        />
                        {formErrors.name && (
                            <Form.Text className="text-danger  w-100 d-block">
                                Invalid Name.
                            </Form.Text>
                        )}
                    </Form.Group>

                    {/* user name */}
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label className="w-100 ">User Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="User Name"
                            name="username"
                            value={formValues.username}
                            required
                            onChange={handleFormChange}
                        />
                        {formErrors.username && (
                            <Form.Text className="text-danger  w-100 d-block">
                                Invalid Username.
                            </Form.Text>
                        )}
                    </Form.Group>

                    {/* email */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="w-100 ">
                            Email address
                        </Form.Label>
                        <Form.Control
                            name="email"
                            required
                            type="email"
                            placeholder="Enter email"
                            value={formValues.email}
                            onChange={handleFormChange}
                        />
                        <Form.Text className="text-muted  w-100 d-block">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        {formErrors.email && (
                            <Form.Text className="text-danger  w-100 d-block">
                                Invalid Email.
                            </Form.Text>
                        )}
                    </Form.Group>

                    {/* password */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="w-100 ">Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            name="password"
                            value={formValues.password}
                            placeholder="Password"
                            onChange={handleFormChange}
                        />
                        {formErrors.password && (
                            <Form.Text className="text-danger  w-100 d-block">
                                Invalid Password.
                            </Form.Text>
                        )}
                    </Form.Group>

                    {/* Confirm password */}
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicConfirmPassword"
                    >
                        <Form.Label className="w-100 ">
                            Confirm Password
                        </Form.Label>
                        <Form.Control
                            required
                            type="password"
                            name="confirmpassword"
                            value={formValues.confirmpassword}
                            placeholder="Confirm Password"
                            onChange={handleFormChange}
                        />
                        {formErrors.confirmpassword && (
                            <Form.Text className="text-danger  w-100 d-block">
                                Passwords do not match.
                            </Form.Text>
                        )}
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Register;
