import * as React from "react";
import { DropdownMenu } from "react-bootstrap";
import * as DatePicker from "react-bootstrap-date-picker";

const Custom: React.StatelessComponent = () => {
    return (<div />);
};

class Test extends React.Component {
    render() {
        return (
            <DatePicker autoFocus={ false }
                        onChange={ (value: string, c: string) => {} }
                        dateFormat="MM/DD/YYYY"
                        minDate="2017-01-01T00:00:00.000Z"
                        maxDate="2017-12-31T23:59:59.999Z"
                        clearButtonElement="x"
                        showClearButton={ true }
                        onClear={ () => {} }
                        previousButtonElement="<"
                        nextButtonElement=">"
                        cellPadding="2px"
                        dayLabels={ ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] }
                        monthLabels={ ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] }
                        calendarPlacement="top"
                        weekStartsOnMonday={ true }
                        showTodayButton={ true }
                        todayButtonLabel="Today"
                        customControl={ Custom } />
        );
    }
}
