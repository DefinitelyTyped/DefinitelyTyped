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
