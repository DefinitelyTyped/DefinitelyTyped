import * as React from "react";
import {
    Range,
    DateRange,
    DateRangePicker, OnDateRangeChangeProps,
    RangeWithKey,
} from 'react-date-range';

const range: RangeWithKey = {
    startDate: new Date('2020-11-01'),
    endDate: new Date('2020-11-30'),
    key: 'selection'
};

class ReactDatePicker extends React.Component<any, any> {
    constructor(props: {}) {
        super(props);
    }

    handleInit(range: Range) {
        console.log(range);
    }

    handleChange(range: OnDateRangeChangeProps) {
        console.log(range);
    }

    render() {
        return (
            <div>
                <DateRange
                    linkedCalendars={true}
                    ranges={[range]}
                    onInit={this.handleInit}
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

const customizedKeyRange: Range = {
    startDate: new Date('2020-11-01'),
    endDate: new Date('2020-11-30'),
    key: 'customizedKey'
};

class ReactDateRangePicker extends React.Component<any, any> {
    constructor(props: {}) {
        super(props);
    }

    handleInit(range: Range) {
        console.log(range);
    }

    handleChange(range: OnDateRangeChangeProps) {
        console.log(range);
    }

    render() {
        return (
            <div>
                <DateRangePicker
                    linkedCalendars={true}
                    ranges={[customizedKeyRange]}
                    scroll={{enabled: true}}
                    onInit={this.handleInit}
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
