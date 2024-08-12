/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../ui/Header/Header";
import Welcome from "../../ui/Welcome/Welcome";
import Products from "../Products/Products";

function Homepage() {
    return (
        <>
            <Welcome />
            <Products />
        </>
    );
}

export default Homepage;
