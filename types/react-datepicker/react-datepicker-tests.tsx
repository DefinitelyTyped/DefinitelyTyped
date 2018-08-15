import * as React from 'react';
import * as moment from 'moment';
import DatePicker from 'react-datepicker';

<DatePicker
	selected={moment()}
	onChange={(date: moment.Moment | null) => {}}
	onYearChange={(date: moment.Moment) => {}}
	popperModifiers={{
		flip: {
			enabled: false
		}
	}}
	includeTimes={[moment()]}
>
	<div/>
	<span/>
</DatePicker>;
