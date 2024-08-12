/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Register() {
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
                    setFormErrors({ ...formErrors, fname: true });
                } else {
                    setFormErrors({ ...formErrors, fname: false });
                }
                break;
            case "username":
                if (changed_element.value.length < 5) {
                    setFormErrors({ ...formErrors, lname: true });
                } else {
                    setFormErrors({ ...formErrors, lname: false });
                }
                break;

            case "email":
                checkEmail();
                break;

            case "password":
                checkPassword();
                break;
            case "confirmpassword":
                checkPassword();
                break;
        }
    };

    return (
        <>
            {/* <div>Register</div> */}
            <div className="register">
                <div className="container py-5">
                    <Form
                        // className="container w-50 p-5"
                        onSubmit={handleSubmit}
                        onChange={handleFormChange}
                    >
                        {/* name */}
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicFirstName"
                        >
                            <Form.Label className="w-100 text-start">
                                Name
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="First Name"
                                required
                                name="name"
                                value={formValues.name}
                            />
                            {formErrors.name && (
                                <Form.Text className="text-danger text-start w-100 d-block">
                                    Invalid Name.
                                </Form.Text>
                            )}
                        </Form.Group>

                        {/* user name */}
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicLastName"
                        >
                            <Form.Label className="w-100 text-start">
                                user name
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                name="lname"
                                value={formValues.username}
                                required
                            />
                            {formErrors.username && (
                                <Form.Text className="text-danger text-start w-100 d-block">
                                    Invalid Last Name.
                                </Form.Text>
                            )}
                        </Form.Group>

                        {/* email */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="w-100 text-start">
                                Email address
                            </Form.Label>
                            <Form.Control
                                name="email"
                                required
                                type="email"
                                placeholder="Enter email"
                                value={formValues.email}
                            />
                            <Form.Text className="text-muted text-start w-100 d-block">
                                We'll never share your email with anyone else.
                            </Form.Text>
                            {formErrors.email && (
                                <Form.Text className="text-danger text-start w-100 d-block">
                                    Invalid mail.
                                </Form.Text>
                            )}
                        </Form.Group>

                        {/* password */}
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label className="w-100 text-start">
                                Password
                            </Form.Label>
                            <Form.Control
                                required
                                type="password"
                                name="password"
                                value={formValues.password}
                                placeholder="Password"
                            />
                            {formErrors.password && (
                                <Form.Text className="text-danger text-start w-100 d-block">
                                    Invalid Password.
                                </Form.Text>
                            )}
                        </Form.Group>

                        {/* Confirm password */}
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label className="w-100 text-start">
                                Confirm password
                            </Form.Label>

                            <Form.Control
                                required
                                type="password"
                                name="password"
                                value={formValues.confirmpassword}
                                placeholder="confir mpassword"
                            />
                            {formErrors.confirmpassword && (
                                <Form.Text className="text-danger text-start w-100 d-block">
                                    Invalid confirm password.
                                </Form.Text>
                            )}
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                    {/* <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form> */}
                </div>
            </div>
        </>
    );
}

export default Register;
