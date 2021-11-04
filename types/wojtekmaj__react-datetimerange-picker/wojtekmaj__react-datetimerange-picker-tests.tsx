import * as React from 'react';
import DateTimeRangePicker, { DateTimeRangePickerProps } from 'wojtekmaj__react-datetimerange-picker';

function MyApp() {
    const [value, onChange] = React.useState<DateTimeRangePickerProps['value']>([new Date(), new Date()]);

    return (
        <div>
            <DateTimeRangePicker onChange={onChange} value={value} />
        </div>
    );
}

function IncorrectType() {
    const [value, onChange] = React.useState([0, 0]);

    return <DateTimeRangePicker onChange={onChange} value={value} />; // $ExpectError
}

function ChangeHandlerWrongType() {
    const [value, _onChange] = React.useState<[Date?, Date?]>([new Date(), new Date()]);

    const handleChange = React.useCallback((_: Date) => {}, []);

    return (
        <DateTimeRangePicker
            onChange={handleChange} // $ExpectError
            value={value}
        />
    );
}

function MayReturnNull() {
    return (
        <DateTimeRangePicker
            onChange={React.useCallback((_: [Date?, Date?]) => {}, [])} // $ExpectError
            value={[new Date(), new Date()]}
        />
    );
}

function MayReturnUndefined() {
    return (
        <DateTimeRangePicker
            onChange={React.useCallback((_: [Date, Date?] | null) => {}, [])} // $ExpectError
            value={[new Date(), new Date()]}
        />
    );
}
