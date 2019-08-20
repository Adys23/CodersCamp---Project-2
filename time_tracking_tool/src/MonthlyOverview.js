import React from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Container, Row, Col } from "react-bootstrap";

class MonthlyOverview extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <DropdownButton id="dropdown-basic-button" title="Select year">
                                <Dropdown.Item href="#/action-1">2019</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">2020</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">2021</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                        <Col>
                            <DropdownButton id="dropdown-basic-button" title="Select month">
                                <Dropdown.Item href="#/action-1">January</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">February</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">March</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">April</Dropdown.Item>
                                <Dropdown.Item href="#/action-5">May</Dropdown.Item>
                                <Dropdown.Item href="#/action-6">June</Dropdown.Item>
                                <Dropdown.Item href="#/action-7">July</Dropdown.Item>
                                <Dropdown.Item href="#/action-8">August</Dropdown.Item>
                                <Dropdown.Item href="#/action-9">September</Dropdown.Item>
                                <Dropdown.Item href="#/action-10">October</Dropdown.Item>
                                <Dropdown.Item href="#/action-11">November</Dropdown.Item>
                                <Dropdown.Item href="#/action-12">December</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default MonthlyOverview