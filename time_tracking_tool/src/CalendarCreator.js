import React from "react";
import WorkPeriodSelector from "./WorkPeriodSelector";
 

const CalendarCreator = () => {



    function daysInMonth(m, y){
        return(m===2?y&3||!(y%25)&&y&15?28:29:30+(5546>>m&1));
    }
    
    let monthEnd = daysInMonth(currentMonth, currentYear);
    
    let monthArray = [];
    
    for (var i = 1; i <= monthEnd; i++) {
        monthArray.push(i);
    }

    return (
        <tr key={monthArray}>
            <td>{monthArray}</td>
        </tr>
    )
}

export default CalendarCreator