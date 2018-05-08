import * as React from 'react';
import moment = require('moment');
import DatePicker from 'react-datepicker';

class ReactDatePicker extends React.Component<{}, { startDate: moment.Moment; displayName: string; }> {
	constructor(props: {}) {
		super(props);
		this.state = {
			startDate: moment(),
			displayName: 'Example'
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = function(date?: moment.Moment | null) {
		this.setState({
			startDate: date
		});
	};

	handleYearChange = (date: moment.Moment) => {
		this.setState({
			startDate: date
		});
	}

	render() {
		return (
			<DatePicker
				selected={this.state.startDate}
				onChange={this.handleChange}
				onYearChange={this.handleYearChange}
			/>
		);
	}
}
