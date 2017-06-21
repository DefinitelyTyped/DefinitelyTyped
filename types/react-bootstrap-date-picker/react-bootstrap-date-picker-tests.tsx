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
