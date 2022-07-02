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

    // @ts-expect-error
    return <DateTimeRangePicker onChange={onChange} value={value} />;
}

function ChangeHandlerWrongType() {
    const [value, _onChange] = React.useState<[Date?, Date?]>([new Date(), new Date()]);

    const handleChange = React.useCallback((_: Date) => {}, []);

    return (
        <DateTimeRangePicker
            // @ts-expect-error
            onChange={handleChange}
            value={value}
        />
    );
}

function MayReturnNull() {
    return (
        <DateTimeRangePicker
            // @ts-expect-error
            onChange={React.useCallback((_: [Date?, Date?]) => {}, [])}
            value={[new Date(), new Date()]}
        />
    );
}

function MayReturnUndefined() {
    return (
        <DateTimeRangePicker
            // @ts-expect-error
            onChange={React.useCallback((_: [Date, Date?] | null) => {}, [])}
            value={[new Date(), new Date()]}
        />
    );
}
