import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Search = ({ handleSubmit }) => {
    return (
        //for padding yung mt-4; Col xs={9}-this occupies 9 of 12 of the parent width or column
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <Form onSubmit={handleSubmit}>

                        <Form.Row>
                            
                            <Col xs={9}>
                                <Form.Control placeholder="Search for Image" />

                            </Col>

                            <Col>
                               <Button variant="primary" type="submit">Search</Button>

                            </Col>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
};

export default Search;

