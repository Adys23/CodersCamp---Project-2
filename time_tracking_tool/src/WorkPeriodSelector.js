import React from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Container, Row, Col } from "react-bootstrap";

class WorkPeriodSelector extends React.Component {

    state = {
        buttonTextYear: "Select year",
        buttonTextMonth: "Select month"
    };

    yearButtonClicker = (yearProvided) => {
        this.setState({
            buttonTextYear: yearProvided
        });
        let yearSelected = yearProvided;
        console.log(yearSelected);
    };

    monthButtonClicker = (monthProvided) => {
        this.setState({
            buttonTextMonth: monthProvided
        });

        let monthSelected;

        switch (monthProvided) {
            case "January":
                monthSelected = 0;
                break;
            case "February":
                monthSelected = 1;
                break;
            case "March":
                monthSelected = 2;
                break;
            case "April":
                monthSelected = 3;
                break;
            case "May":
                monthSelected = 4;
                break;
            case "June":
                monthSelected = 5;
                break;
            case "July":
                monthSelected = 6;
                break;
            case "August":
                monthSelected = 7;
                break;
            case "September":
                monthSelected = 8;
                break;
            case "October":
                monthSelected = 9;
                break;
            case "November":
                monthSelected = 10;
                break;
            case "December":
                monthSelected = 11;
                break;
            default:
                monthSelected = "None of the months was selected"
        }

        console.log(monthSelected);
    };

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <DropdownButton id="dropdown-basic-button" title={this.state.buttonTextYear}>
                                <Dropdown.Item href="#" value='2019' onClick={() => this.yearButtonClicker(2019)}>2019</Dropdown.Item>
                                <Dropdown.Item href="#" value='2020' onClick={() => this.yearButtonClicker(2020)}>2020</Dropdown.Item>
                                <Dropdown.Item href="#" value='2021' onClick={() => this.yearButtonClicker(2021)}>2021</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                        <Col>
                            <DropdownButton id="dropdown-basic-button" title={this.state.buttonTextMonth}>
                                <Dropdown.Item href="#" onClick={() => this.monthButtonClicker("January")}>January</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => this.monthButtonClicker("February")}>February</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => this.monthButtonClicker("March")}>March</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => this.monthButtonClicker("April")}>April</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => this.monthButtonClicker("May")}>May</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => this.monthButtonClicker("June")}>June</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => this.monthButtonClicker("July")}>July</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => this.monthButtonClicker("August")}>August</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => this.monthButtonClicker("September")}>September</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => this.monthButtonClicker("October")}>October</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => this.monthButtonClicker("November")}>November</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => this.monthButtonClicker("December")}>December</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


export default WorkPeriodSelector