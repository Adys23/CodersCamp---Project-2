import React from 'react';
import Form from 'react-bootstrap/Form';
import {Container, Col, Row, Button} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import DatePicker1 from './DatePicker';

class RecordHolidays extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h2>Enter holidays period</h2>
                    </Container>
                </Jumbotron>
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalHolidayBeginning">
                        <Form.Label column sm={2}>
                            Start Date
                        </Form.Label>
                        <Col>
                            <DatePicker1 />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalHolidayEnd">
                        <Form.Label column sm={2}>
                            End Date
                        </Form.Label>
                        <Col>
                            <DatePicker1 />
                        </Col>
                    </Form.Group>
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
export default RecordHolidays