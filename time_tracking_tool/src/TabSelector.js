import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import AddNewEmployee from './AddNewEmployee';
import RecordHolidays from './RecordHolidays';
import EmployeeOverview from './EmployeeOverview';
import MonthlyOverview from './MonthlyOverview';


class TabSelector extends React.Component {
    render() {
        return (
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="monthOverview" title="Monthly overview">
                    <MonthlyOverview />
                </Tab>
                <Tab eventKey="employeeOverview" title="Employee overview">
                    <EmployeeOverview />
                </Tab>
                <Tab eventKey="recordHoliday" title="Record holiday">
                    <RecordHolidays />
                </Tab>
                <Tab eventKey="addNewEmployee" title="Add new employee">
                    <AddNewEmployee />
                </Tab>
            </Tabs>
        )
    }
}

export default TabSelector