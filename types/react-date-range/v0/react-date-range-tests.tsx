import * as React from "react";
import {
    defaultRanges,
    DateRange,
    DateRangePicker,
    Range
} from "react-date-range";

class ReactDatePicker extends React.Component<any, any> {
    constructor(props: {}) {
        super(props);
    }

    handleChange(range: Range) {
        console.log(range);
    }

    render() {
        return (
            <div>
                <DateRange
                    linkedCalendars={true}
                    ranges={defaultRanges}
                    onInit={this.handleChange}
                    onChange={this.handleChange}
                    theme={{
                        Calendar: { width: 200 },
                        PredefinedRanges: { marginLeft: 10, marginTop: 10 }
                    }}
                />
            </div>
        );
    }
}

class ReactDateRangePicker extends React.Component<any, any> {
    constructor(props: {}) {
        super(props);
    }

    handleChange(range: Range) {
        console.log(range);
    }

    render() {
        return (
            <div>
                <DateRangePicker
                    linkedCalendars={true}
                    ranges={defaultRanges}
                    scroll={{enabled: true}}
                    onInit={this.handleChange}
                    onChange={this.handleChange}
                    showSelectionPreview={true}
                    editableDateInputs={true}
                    showMonthArrow={true}
                    months={1}
                    moveRangeOnFirstSelection={false}
                    direction="horizontal"
                    weekStartsOn={1}
                    theme={{
                        Calendar: { width: 200 },
                        PredefinedRanges: { marginLeft: 10, marginTop: 10 }
                    }}
                />
            </div>
        );
    }
}
