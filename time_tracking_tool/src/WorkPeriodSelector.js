import React from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Container, Row, Col } from "react-bootstrap";

class WorkPeriodSelector extends React.Component {
    handleClickYear = (year) => {
        
        console.log(year);
      }
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <DropdownButton id="dropdown-basic-button" title="Select year">
                                <Dropdown.Item href="#" value="2019" onClick={this.handleClickYear(this.value)}>2019</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={this.handleClickYear}>2020</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={this.handleClickYear}>2021</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                        <Col>
                            <DropdownButton id="dropdown-basic-button" title="Select month">
                                <Dropdown.Item href="#" onClick={this.handleClickMonth}>January</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={this.handleClickMonth}>February</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={this.handleClickMonth}>March</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={this.handleClickMonth}>April</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={this.handleClickMonth}>May</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={this.handleClickMonth}>June</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={this.handleClickMonth}>July</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={this.handleClickMonth}>August</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={this.handleClickMonth}>September</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={this.handleClickMonth}>October</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={this.handleClickMonth}>November</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={this.handleClickMonth}>December</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default WorkPeriodSelector