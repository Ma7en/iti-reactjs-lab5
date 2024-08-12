/* eslint-disable no-unused-vars */

import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/fontawesome-svg-core";
import {} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/react-fontawesome";

// context
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";

// bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
    const { totalCount } = useSelector((state) => state.shoppingList);

    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    return (
        <>
            <Navbar
                expand="lg"
                className="bg-body-tertiary"
                bg={darkMode ? "dark" : "light"}
                data-bs-theme={darkMode ? "dark" : "light"}
                dir={language === "en" ? "ltr" : "rtl"}
            >
                <Container fluid>
                    <Link to={"/"} className="navbar-brand">
                        Products App
                    </Link>

                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className={`${
                                language === "en" ? "ms-auto" : "me-auto"
                            }  my-2 my-lg-0`}
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Link to={"/register"} className="nav-link">
                                Register
                            </Link>

                            <Link to={"/login"} className="nav-link">
                                Login
                            </Link>

                            <Link to={"/shoppingcard"} className="nav-link">
                                <FontAwesomeIcon icon={faBasketShopping} />
                                {/* <Button variant="primary">
                                    Profile 
                                    <Badge bg="secondary">9</Badge>
                                    <span className="visually-hidden">
                                        unread messages
                                    </span>
                                </Button> */}
                                <span>{totalCount}</span>
                            </Link>

                            {/* <div> */}
                            <Nav.Link>
                                <svg
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        transform: `rotateZ(${
                                            darkMode ? "180deg" : "0deg"
                                        })`,
                                    }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    onClick={() => setDarkMode(!darkMode)}
                                >
                                    <path d="M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                                </svg>
                            </Nav.Link>

                            <Nav.Link>
                                <span
                                    style={{ cursor: "pointer" }}
                                    className="p-2 "
                                    onClick={() =>
                                        setLanguage(
                                            language === "en" ? "ar" : "en"
                                        )
                                    }
                                >
                                    {language}
                                </span>
                            </Nav.Link>
                            {/* </div> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
