import * as React from "react";
import {
    DateRange,
    DateRangePicker,
    OnChangeProps
} from "react-date-range";

const range = {
    startDate: new Date('2020-11-01'),
    endDate: new Date('2020-11-30'),
    key: 'selected'
};

class ReactDatePicker extends React.Component<any, any> {
    constructor(props: {}) {
        super(props);
    }

    handleChange(range: OnChangeProps) {
        console.log(range);
    }

    render() {
        return (
            <div>
                <DateRange
                    linkedCalendars={true}
                    ranges={[range]}
                    onInit={this.handleChange}
                    onChange={this.handleChange}
                    theme={{
                        Calendar: { width: 200 },
                        PredefinedRanges: { marginLeft: 10, marginTop: 10 }
                    }}
                    classNames={{
                        dateDisplay: 'dateDisplayCustom'
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

    handleChange(range: OnChangeProps) {
        console.log(range);
    }

    render() {
        return (
            <div>
                <DateRangePicker
                    linkedCalendars={true}
                    ranges={[range]}
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
                    classNames={{
                        dateDisplay: 'dateDisplayCustom'
                    }}
                />
            </div>
        );
    }
}
