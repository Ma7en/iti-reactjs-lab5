/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";

// context
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";

// bootstrap
import { Col, Row } from "react-bootstrap";

// components
import Shop from "./shop/Shop";

function ShoppingCard() {
    const { shoppingList, totalPrice, totalCount } = useSelector(
        (state) => state.shoppingList
    );

    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    return (
        <>
            <div
                className={`shopping-title  ${
                    darkMode ? "text-bg-dark" : "text-bg-white"
                }`}
                dir={language === "en" ? "ltr" : "rtl"}
            >
                <div className="container py-3">
                    <h3>Card</h3>
                </div>
            </div>

            <div
                className={`products ${
                    darkMode ? "text-bg-dark" : "text-bg-white"
                }`}
                dir={language === "en" ? "ltr" : "rtl"}
            >
                <div className="container py-5">
                    <Row xs={1} className="g-4">
                        {totalCount === 0 ? (
                            <p>Your cart is empty</p>
                        ) : (
                            shoppingList.map((shop, index) => (
                                <React.Fragment key={index}>
                                    <Shop {...shop} />
                                </React.Fragment>
                            ))
                        )}
                    </Row>

                    <Row>
                        <Col className="ms-auto">
                            <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default ShoppingCard;
