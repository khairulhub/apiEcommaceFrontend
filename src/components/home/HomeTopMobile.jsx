import React, { Fragment } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import HomeSlider from './HomeSlider';

const HomeTopMobile = () => {
    return (
        <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid>
                         <Row className="p-0 m-0 overflow-hidden"> 
                              <Col lg={12} md={12} sm={12}> 
                              <HomeSlider />
                              </Col>
                         </Row>
                    </Container>
               </Fragment>
    );
};

export default HomeTopMobile;