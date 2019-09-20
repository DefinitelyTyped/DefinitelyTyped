import * as React from 'react';
import { render } from 'react-dom';
import Dayzed, { DateObj } from 'dayzed';

interface State {
    selectedDate: Date;
    monthOffset: number;
}

class App extends React.Component<{}, State> {
    state = {
        selectedDate: new Date(),
        monthOffset: 0,
    };

    handleSetDate = (dateObj: DateObj) => {
        this.setState({ selectedDate: dateObj.date });
    }

    render() {
        return (
            <Dayzed
                selected={this.state.selectedDate}
                offset={this.state.monthOffset}
                onDateSelected={this.handleSetDate}
            >
                {({ calendars, ...rp }) => calendars.map(cal => (
                    <div>
                        Calendar:

                        {cal.weeks.map(week => (
                            <div>
                                Week:

                                {week.map(day => day && (
                                    <span {...rp.getDateProps({ dateObj: day })}>Day({day.date.getDate()}):</span>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </Dayzed>
        );
    }
}

render(<App />, document.body);
