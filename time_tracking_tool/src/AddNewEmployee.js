import React from 'react';
import Form from 'react-bootstrap/Form';
import {Col, Row, Button, Container} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';

class NewEmployeeForm extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h2>Provide employee's details</h2>
                    </Container>
                </Jumbotron>     
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                            Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Name" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalSurname">
                        <Form.Label column sm={2}>
                            Surname
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Surname" />
                        </Col>
                    </Form.Group>
                    <fieldset>
                    <Form.Group as={Row}>
                        <Form.Label as="FormHorizontalRadio" column sm={2}>
                            Type of contract
                        </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="Full-time"
                                    name="formHorizontalRadios"
                                    id="fullTimeEmployee"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Part-time"
                                    name="formHorizontalRadios"
                                    id="partTimeEmployee"
                                />
                            </Col>
                    </Form.Group>
                    </fieldset>
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Save</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>  
        )
    }
}

export default NewEmployeeForm