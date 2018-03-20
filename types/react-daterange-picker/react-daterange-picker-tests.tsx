// test app from https://github.com/onefinestay/react-daterange-picker/blob/master/example/index.jsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DateRangePicker from "react-daterange-picker";
import * as ReactDateRangePicker from "react-daterange-picker";

import * as MomentRange from "moment-range";
import Moment = require("moment");

const moment = MomentRange.extendMoment(Moment);

type AppProps = ReactDateRangePicker.Props;

class App extends React.Component<AppProps, any> {
    constructor(props: AppProps, context: any) {
        super(props, context);

        this.state = {};
    }

    handleSelect(value: AppProps, states: any): void {
        this.setState({ value, states });
    }

    render(): any {
        return (
            <div>
                <DateRangePicker {...this.props}
                    onSelect={this.handleSelect.bind(this)}
                    value={this.state.value} />
                <div>
                    <input type="text"
                        value={this.state.value ? this.state.value.start.format('LL') : ""}
                        readOnly={true}
                        placeholder="Start date" />
                    <input type="text"
                        value={this.state.value ? this.state.value.end.format('LL') : ""}
                        readOnly={true}
                        placeholder="End date" />
                </div>
            </div>
        );
    }
}

class DateSinglePicker extends React.Component<AppProps, any> {
    constructor(props: AppProps, context: any) {
        super(props, context);

        this.state = {};
    }

    handleSelect(value: AppProps) {
        this.setState({ value });
    }

    render() {
        return (
            <div>
                <DateRangePicker {...this.props} onSelect={this.handleSelect.bind(this)}
                    value={this.state.value} />
                <div>
                    <input type="text"
                        value={this.state.value ? this.state.value.format('LL') : ""}
                        readOnly={true} />
                </div>
            </div>
        );
    }
}

export class Main extends React.Component {
    render() {
        const stateDefinitions: ReactDateRangePicker.StateDefinitions = {
            available: {
                color: '#ffffff',
                label: 'Available',
            },
            enquire: {
                color: '#ffd200',
                label: 'Enquire',
            },
            unavailable: {
                selectable: false,
                color: '#78818b',
                label: 'Unavailable',
            }
        };

        const dateRanges = [
            {
                state: 'enquire',
                range: moment.range(
                    moment().add(2, 'weeks').subtract(5, 'days'),
                    moment().add(2, 'weeks').add(6, 'days')
                ),
            },
            {
                state: 'unavailable',
                range: moment.range(
                    moment().add(3, 'weeks'),
                    moment().add(3, 'weeks').add(5, 'days')
                ),
            },
        ];

        const initialStart = moment().add(1, 'weeks').startOf('day');
        const initialEnd = moment().add(1, 'weeks').add(3, 'days').startOf('day');
        const range = moment.range(initialStart, initialEnd);

        return (
            <div className="content">
                <div className="example">
                    <App
                        firstOfWeek={1}
                        numberOfCalendars={2}
                        selectionType='range'
                        minimumDate={new Date()}
                        maximumDate={moment().add(2, 'years').toDate()}
                        stateDefinitions={stateDefinitions}
                        dateStates={dateRanges}
                        defaultState="available"
                        value={range}
                        showLegend={true}
                    />
                </div>

                <div className="examples">
                    <h2>Examples</h2>

                    <div className="example">
                        <h4>Range with no date states</h4>
                        <App
                            numberOfCalendars={2}
                            selectionType="range"
                            minimumDate={new Date()}
                        />
                    </div>

                    <div className="example">
                        <h4>Range with day-long ranges allowed</h4>
                        <App
                            numberOfCalendars={2}
                            selectionType="range"
                            singleDateRange={true}
                            minimumDate={new Date()}
                        />
                    </div>

                    <div className="example">
                        <h4>Range with no minimum date</h4>
                        <App
                            numberOfCalendars={2}
                            selectionType="range"
                            singleDateRange={true}
                        />
                    </div>
                    <div className="example">
                        <h4>Single with no date states</h4>
                        <DateSinglePicker
                            numberOfCalendars={2}
                            selectionType="single"
                            minimumDate={new Date()}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const MainFactory = React.createFactory(Main);

ReactDOM.render(
    MainFactory(),
    document.getElementById('app')
);
