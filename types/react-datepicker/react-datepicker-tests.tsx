import * as React from 'react';
import DatePicker from 'react-datepicker';

<DatePicker
	selected={new Date()}
	onChange={(date: Date | null) => {}}
	onYearChange={(date: Date) => {}}
	popperModifiers={{
		flip: {
			enabled: false
		}
	}}
	includeTimes={[new Date()]}
>
	<div/>
	<span/>
</DatePicker>;
