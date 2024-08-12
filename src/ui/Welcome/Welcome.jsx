/* eslint-disable no-unused-vars */
import React from "react";
import { useContext } from "react";
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";

function Welcome() {
    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    return (
        <>
            <div className={`welcome ${darkMode ? "text-bg-dark" : ""}`}>
                <div className={`container py-3 `}>
                    <h3>Welcome to our shopping website, start browsing...</h3>
                </div>
            </div>
        </>
    );
}

export default Welcome;
