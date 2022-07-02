import DatePicker from 'gestalt-datepicker';
import * as React from 'react';

const handleChange = (value: Date) => value;

<DatePicker id="example-basic" label="Select a date" onChange={({ value }) => handleChange(value)} />;

<DatePicker
    disabled
    id="example-preselected value"
    minDate={new Date(1984, 6, 6)}
    maxDate={new Date(2020, 6, 10)}
    label="Alberto's birth date"
    onChange={({ value }) => handleChange(value)}
    value={new Date(1985, 6, 4)}
/>;
