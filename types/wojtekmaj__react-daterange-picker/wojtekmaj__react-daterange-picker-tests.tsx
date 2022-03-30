import * as React from 'react';
import DateRangePicker, { DateRangePickerProps } from 'wojtekmaj__react-daterange-picker/index';

function MyApp() {
    const [value, onChange] = React.useState<DateRangePickerProps['value']>([new Date(), new Date()]);

    return (
        <div>
            <DateRangePicker onChange={onChange} value={value} />
        </div>
    );
}
