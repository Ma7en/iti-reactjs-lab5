/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useContext } from "react";

// congfig
import axiosInstance from "./../../api/config";
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";

// bootstrap
import { Alert, Row, Spinner } from "react-bootstrap";

// components
import Product from "./Product/Product";

function Products() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        axiosInstance
            .get(`products`)
            .then((respons) => {
                console.log(respons.data.products);
                setProducts(respons.data.products);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    return (
        <>
            <div className={`products ${darkMode ? "text-bg-dark" : ""}`}>
                <div className="container py-5">
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {loading ? (
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </Spinner>
                        ) : products ? (
                            <>
                                {products.map((post) => (
                                    <React.Fragment key={post.id}>
                                        <Product {...post} />
                                    </React.Fragment>
                                ))}
                            </>
                        ) : (
                            <Alert variant={"danger"}>
                                Error Fetching Data
                            </Alert>
                        )}
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Products;
