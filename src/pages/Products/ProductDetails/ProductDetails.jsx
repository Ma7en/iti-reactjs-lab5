/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/fontawesome-svg-core";
import {} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/react-fontawesome";
import {
    faStar,
    faStarHalfAlt,
    faStar as farStar,
} from "@fortawesome/free-solid-svg-icons";

// config
import axiosInstance from "../../../api/config";

// context
import themeContext from "../../../context/themeContext";
import languageContext from "../../../context/languageContext";

// store
import { addToShopping } from "../../../store/slices/shoppingSlice";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Alert, Spinner } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Badge } from "react-bootstrap";

function ProductDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    const [product, setProduct] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        axiosInstance
            .get(`products/${id}`)
            .then((respons) => {
                console.log(respons.data);
                setProduct(respons.data);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) return;

    // console.log(product);

    const {
        availabilityStatus: stock,
        description,
        thumbnail: image,
        title,
        rating,
        price,
        images,
    } = product;

    // star
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.25 && rating - fullStars < 0.75;

    return (
        <>
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : product ? (
                <>
                    <div
                        className={`productdetails   ${
                            darkMode ? "text-bg-dark" : "text-bg-white"
                        }`}
                        dir={language === "en" ? "ltr" : "rtl"}
                    >
                        <Container className="py-5">
                            <Row>
                                <Col>
                                    <div>
                                        <Card
                                            className={`position-relative   ${
                                                darkMode
                                                    ? "text-bg-dark"
                                                    : "text-bg-white"
                                            }`}
                                        >
                                            <Card.Img
                                                variant="top"
                                                src={image}
                                                className="object-fit-contain"
                                            />
                                        </Card>

                                        <Row className="py-5 g-3">
                                            {images.map((image, index) => (
                                                <React.Fragment key={index}>
                                                    <Col md="3">
                                                        <Card
                                                            className={`position-relative   ${
                                                                darkMode
                                                                    ? "text-bg-dark"
                                                                    : "text-bg-white"
                                                            }`}
                                                        >
                                                            <Card.Img
                                                                variant="top"
                                                                src={image}
                                                                className="object-fit-contain"
                                                            />
                                                        </Card>
                                                    </Col>
                                                </React.Fragment>
                                            ))}
                                        </Row>
                                    </div>
                                </Col>

                                <Col>
                                    <Card
                                        className={`position-relative   ${
                                            darkMode
                                                ? "text-bg-dark"
                                                : "text-bg-white"
                                        }`}
                                    >
                                        <div
                                            className="position-absolute "
                                            style={{
                                                right: "20px",
                                                top: "10px",
                                            }}
                                        >
                                            {stock === "In Stock" ? (
                                                <Badge pill bg="success">
                                                    In Stock
                                                </Badge>
                                            ) : stock === "Low Stock" ? (
                                                <Badge
                                                    pill
                                                    bg="danger"
                                                    className="text-capitalize"
                                                >
                                                    out Stock
                                                </Badge>
                                            ) : (
                                                ""
                                            )}
                                        </div>

                                        <Card.Body>
                                            <div className="row g-2 mb-3">
                                                <div className="col-9">
                                                    <Card.Title className="fw-bold">
                                                        {title}
                                                    </Card.Title>
                                                </div>

                                                <div className="col-3">
                                                    <Card.Text className="fw-bold">
                                                        ${price}
                                                    </Card.Text>
                                                </div>
                                            </div>

                                            <Card.Text>{description}</Card.Text>

                                            <div className="rating-stars my-3">
                                                {[...Array(fullStars)].map(
                                                    (_, index) => (
                                                        <FontAwesomeIcon
                                                            key={index}
                                                            icon={faStar}
                                                            color="#2fa023"
                                                        />
                                                    )
                                                )}
                                                {hasHalfStar && (
                                                    <FontAwesomeIcon
                                                        icon={faStarHalfAlt}
                                                        color="#2fa023"
                                                    />
                                                )}
                                            </div>

                                            <div className="row">
                                                <div className="col-6">
                                                    <Button
                                                        variant="outline-success"
                                                        className="text-capitalize rounded-5 fw-bold"
                                                        onClick={() =>
                                                            dispatch(
                                                                addToShopping(
                                                                    product
                                                                )
                                                            )
                                                        }
                                                    >
                                                        Add to card
                                                    </Button>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </>
            ) : (
                <Alert variant={"danger"}>Error Fetching Data</Alert>
            )}
            {/* <div className="productdetails">
                <Container>
                    <Row>
                        <Col>1 of 2</Col>
                        <Col>
                            <Card className="position-relative">
                                <div
                                    className="position-absolute "
                                    style={{ right: "20px", top: "10px" }}
                                >
                                    {stock === "In Stock" ? (
                                        <Badge pill bg="success">
                                            In Stock
                                        </Badge>
                                    ) : stock === "Low Stock" ? (
                                        <Badge
                                            pill
                                            bg="danger"
                                            className="text-capitalize"
                                        >
                                            out Stock
                                        </Badge>
                                    ) : (
                                        ""
                                    )}
                                </div>

                                <Card.Img
                                    variant="top"
                                    src={image}
                                    className="object-fit-contain"
                                />

                                <Card.Body>
                                    <div className="row g-2 mb-3">
                                        <div className="col-9">
                                            <Card.Title className="fw-bold">
                                                {title}
                                            </Card.Title>
                                        </div>

                                        <div className="col-3">
                                            <Card.Text className="fw-bold">
                                                ${price}
                                            </Card.Text>
                                        </div>
                                    </div>

                                    <Card.Text>{descriptionE}</Card.Text>

                                    <div className="rating-stars my-3">
                                        {[...Array(fullStars)].map(
                                            (_, index) => (
                                                <FontAwesomeIcon
                                                    key={index}
                                                    icon={faStar}
                                                    color="#2fa023"
                                                />
                                            )
                                        )}
                                        {hasHalfStar && (
                                            <FontAwesomeIcon
                                                icon={faStarHalfAlt}
                                                color="#2fa023"
                                            />
                                        )}
                                    </div>

                                    <div className="row">
                                        <div className="col-6">
                                            <Button
                                                variant="outline-success"
                                                className="text-capitalize rounded-5 fw-bold"
                                            >
                                                Add to card
                                            </Button>
                                        </div>

                                        <div className="col-6">
                                            <Button
                                                variant="outline-success"
                                                className="text-capitalize rounded-5 fw-bold"
                                            >
                                                <Link
                                                    className="nav-link"
                                                    to={`/products/${id}`}
                                                >
                                                    Details
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div> */}
        </>
    );
}

export default ProductDetails;
