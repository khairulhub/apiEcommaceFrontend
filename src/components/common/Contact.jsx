import axios from 'axios';

import { Fragment, useState, useRef } from 'react';

import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppUrl from '../../api/AppUrl';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    
    // useRef to access the button element
    const sendBtnRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation checks before sending the request
        if (message.length === 0) {
            toast.error('Please fill in the message field');
            return;
        }
        if (name.length === 0) {
            toast.error('Please fill in the name field');
            return;
        }
        if (email.length === 0) {
            toast.error('Please fill in the email field');
            return;
        }
        if (phone.length === 0) {
            toast.error('Please fill in the phone number field');
            return;
        }

        // Changing button text to "Sending..."
        if (sendBtnRef.current) {
            sendBtnRef.current.innerHTML = 'Sending...';
        }

        // Sending the form data to your backend API
        axios.post(AppUrl.PostContactUrl, {
            name: name,
            email: email,
            phone: phone,
            message: message
        })
        .then(function (response) {
            if (response.status === 200) {
                toast.success('Thank you for contacting us. We will get back to you soon.');
                // Clear the form fields only after successful submission
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
                if (sendBtnRef.current) {
                    sendBtnRef.current.innerHTML = 'Send';
                }
            } else {
                toast.error('Failed to send the message. Please try again later.');
                if (sendBtnRef.current) {
                    sendBtnRef.current.innerHTML = 'Send';
                }
            }
        })
        .catch(function (error) {
            toast.error('Error: ' + error);
            if (sendBtnRef.current) {
                sendBtnRef.current.innerHTML = 'Send';
            }
        });
    }

    return (
        <Fragment>
            <Container>
                <Row className="p-2">
                    <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                        <Row className="text-center">
                            <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                <Form className="onboardForm" onSubmit={handleSubmit}>
                                    <h4 className="section-title-login">CONTACT WITH US</h4>
                                    <h6 className="section-sub-title">Please Contact With Us</h6>
                                    <input
                                        className="form-control m-2"
                                        type="text"
                                        name="name"
                                        placeholder="Enter Your Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <input
                                        className="form-control m-2"
                                        type="email"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <input
                                        className="form-control m-2"
                                        type="text"
                                        name="phone"
                                        placeholder="Enter Your Phone Number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        className="form-control m-2"
                                        type="text"
                                        name="message"
                                        placeholder="Enter Your Message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                    <Button ref={sendBtnRef} id="sendBtn" type="submit" className="btn btn-block m-2 site-btn-login">
                                        Send
                                    </Button>
                                </Form>
                            </Col>

                            <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                <br/><br/>
                                <p className="section-title-contact">
                                    1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104
                                    Email: Support@easylearningbd.com
                                </p>
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162771.1102477064!2d-74.10054944459704!3d40.70681480276415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1627241390779!5m2!1sen!2sbd" 
                                    width="550" 
                                    height="450" 
                                    style={{ border: 0 }} 
                                    allowFullScreen="" 
                                    loading="lazy">
                                </iframe>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <ToastContainer />
        </Fragment>
    );
};

export default Contact;
