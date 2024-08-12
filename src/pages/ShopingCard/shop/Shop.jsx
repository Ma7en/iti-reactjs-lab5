/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";

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

// store
import {
    addToShopping,
    incrementItemCount,
    decrementItemCount,
    removeFromShooping,
    emptyShopping,
} from "../../../store/slices/shoppingSlice";

// bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Shop({ ...shop }) {
    const dispatch = useDispatch();
    const {
        id,
        availabilityStatus: stock,
        description,
        thumbnail: image,
        title,
        rating,
        price,
        count,
    } = shop;

    // star
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.25 && rating - fullStars < 0.75;

    return (
        <>
            {count !== 0 ? (
                <Row className="py-4">
                    <Col xs="2">
                        <div>
                            <Card className="position-relative">
                                <Card.Img
                                    variant="top"
                                    src={image}
                                    className="object-fit-contain"
                                />
                            </Card>
                        </div>
                    </Col>

                    <Col xs="4">
                        <div className="row g-2 mb-3">
                            <div className="col-9">
                                <Card.Title className="fw-bold">
                                    {title}
                                </Card.Title>
                            </div>
                        </div>

                        <Card.Text>{description}</Card.Text>
                    </Col>

                    <Col xs="4">
                        <div className="row w-100">
                            <div className="col-5">
                                <Button
                                    variant="outline-success"
                                    className="text-capitalize rounded-5 fw-bold"
                                    onClick={() =>
                                        dispatch(incrementItemCount(shop))
                                    }
                                >
                                    +
                                </Button>
                            </div>

                            <div className="col-2">
                                <Button
                                    variant="outline-success"
                                    className="text-capitalize rounded-5 fw-bold"
                                >
                                    {count}
                                </Button>
                            </div>

                            <div className="col-5">
                                <Button
                                    variant="outline-success"
                                    className="text-capitalize rounded-5 fw-bold"
                                    onClick={() =>
                                        dispatch(decrementItemCount(shop))
                                    }
                                >
                                    -
                                </Button>
                            </div>
                        </div>
                    </Col>

                    <Col xs="1">
                        <div>
                            <Button
                                variant="outline-success"
                                className="text-capitalize rounded-5 fw-bold"
                                onClick={() =>
                                    dispatch(removeFromShooping(shop))
                                }
                            >
                                X
                            </Button>
                        </div>
                    </Col>

                    <Col xs="1">
                        <div className="col-3">
                            <Card.Text className="fw-bold">
                                ${(price * count).toFixed(2)}
                            </Card.Text>
                        </div>
                    </Col>
                </Row>
            ) : (
                ""
            )}
        </>
    );
}

export default Shop;
