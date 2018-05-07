import * as React from 'react';
import { defaultRanges, DateRange, Range } from "react-date-range";

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
