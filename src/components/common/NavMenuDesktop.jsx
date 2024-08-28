import React, { Fragment, useState } from "react";

import { Button, Col, Container, Navbar, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

import MegaMenu from "../home/MegaMenu";
import Logo from "../../assets/images/easyshop.png";

const NavMenuDesktop = () => {




    // Using useState to manage SideNav and Overlay states
    const [sideNavState, setSideNavState] = useState("sideNavClose");
    const [contentOverState, setContentOverState] = useState("ContentOverlayClose");

    // Function to toggle SideNav and Overlay states
    const sideNavOpenClose = () => {
        if (sideNavState === "sideNavOpen") {
            setSideNavState("sideNavClose");
            setContentOverState("ContentOverlayClose");
        } else {
            setSideNavState("sideNavOpen");
            setContentOverState("ContentOverlayOpen");
        }
    };

    //  <Button onClick={this.MenuBarClickHandler} className="btn"><i className="fa fa-bars"></i>  </Button>
    return (
        <Fragment>
            <div className="TopSectionDown">
                <Navbar fixed="top" className="navbar" bg="light">
                    <Container fluid className="fixed-top shadow-sm p-2 mb-0 bg-white">
                        <Row className=" d-flex justify-content-between w-100">
                            <Col lg={4} md={4} sm={12} xs={12}>

                                <Link to="/">
                                    <img className="nav-logo" src={Logo} alt="Logo" />
                                </Link>
                            </Col>

                            <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                                <div className="input-group w-100">
                                    <input type="text" className="form-control" />
                                    <Button type="button" className="btn site-btn">
                                        <i className="fa fa-search"></i>
                                    </Button>
                                </div>
                            </Col>

                            <Col className="p-1 mt-1 d-flex justify-content-end" lg={4} md={4} sm={12} xs={12}>
                                <Link to="/favourite" className="btn">
                                    <i className="fa h4 fa-heart"></i>
                                    <sup>
                                        <span className="badge text-white bg-danger">3</span>
                                    </sup>
                                </Link>
                                <Link to="/notification" className="btn">
                                    <i className="fa h4 fa-bell"></i>
                                    <sup>
                                        <span className="badge text-white bg-danger">5</span>
                                    </sup>
                                </Link>

                                <Link to="/login" className="h4 btn">
                                    LOGIN
                                </Link>
                                <Link to="/cart" className="cart-btn"><i className="fa fa-shopping-cart"></i> 3 Items </Link>
                            </Col>
                        </Row>
                    </Container>
                </Navbar>
            </div>

            <div className={sideNavState}>
                <MegaMenu />
            </div>

            <div onClick={sideNavOpenClose} className={contentOverState}></div>
        </Fragment>
    );
};

export default NavMenuDesktop;


// <Button className="btn ">
//     <i className="fa h4 fa-mobile-alt"></i>
// </Button>