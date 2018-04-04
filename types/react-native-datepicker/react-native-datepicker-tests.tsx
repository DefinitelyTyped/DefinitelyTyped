import * as React from 'react';
import DatePicker from 'react-native-datepicker';

interface MyDatePickerState {
    date: string;
}

export default class MyDatePicker extends React.Component<{}, MyDatePickerState> {
    datepicker: DatePicker | null;

    constructor(props: {}) {
        super(props);
        this.state = {date: "2016-05-15"};
    }

    componentDidMount() {
        if (this.datepicker) {
            this.datepicker.onPressDate();
        }
    }

    render() {
        return (
            <DatePicker
                ref={datepicker => this.datepicker = datepicker}
                style={{width: 200}}
                date={this.state.date}
                mode="date"
                androidMode="calendar"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                }}
                onDateChange={(date: string) => { this.setState({date}); }}
            />
        );
    }
}
