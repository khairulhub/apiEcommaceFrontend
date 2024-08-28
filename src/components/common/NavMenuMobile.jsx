// import '@fortawesome/fontawesome-free/css/all.min.css';  

import React, { Component, Fragment } from 'react';

import { Button, Col, Container, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import MegaMenu from '../home/MegaMenu';
import MegaMenuMobile from '../home/MegaMenuMobile';
import Logo from "../../assets/images/easyshop.png";

class NavMenuMobile extends Component {
    constructor() {
        super();
        this.state = {
            SideNavState: "sideNavClose",
            ContentOverState: "ContentOverlayClose"
        };
    }

    MenuBarClickHandler = () => {
        this.SideNavOpenClose();
    }

    ContentOverlayClickHandler = () => {
        this.SideNavOpenClose();
    }

    SideNavOpenClose = () => {
        let { SideNavState, ContentOverState } = this.state;
        if (SideNavState === "sideNavOpen") {
            this.setState({ SideNavState: "sideNavClose", ContentOverState: "ContentOverlayClose" });
        } else {
            this.setState({ SideNavState: "sideNavOpen", ContentOverState: "ContentOverlayOpen" });
        }
    }

    render() {
        return (
            <Fragment>
                <div className="TopSectionDown">


                    <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
                        <Row>
                            <Col lg={4} md={4} sm={12} xs={12}>

                            <Button onClick={this.MenuBarClickHandler} className="btn"><i className="fa fa-bars"></i>  </Button> 

                                <Link to="/"> <img className="nav-logo" src={Logo} /> </Link>

                                <Button className="cart-btn"><i className="fa fa-shopping-cart"></i> 3 Items </Button>
                            </Col>

                        </Row>

                    </Container>

                    
                    <div className={this.state.SideNavState}>
                
                <MegaMenuMobile />
          </div>

                    <div onClick={this.ContentOverlayClickHandler} className={this.state.ContentOverState}>

                    </div>




                </div>
            </Fragment>
        );
    }
}

export default NavMenuMobile;


// // <div className="sideNavOpen">
// <hr className="w-80" />
// <div className="list-group">
//     <a className="list-group-item nav-font nav-itemmenu list-group-item-action" ><i className="fa mr-2 fa-home"></i>Home </a>
// </div>
// </div>
