import * as React from 'react';
import TimePicker, { TimePickerValue } from 'react-time-picker';

function MyApp() {
    const [value, setValue] = React.useState<TimePickerValue>(new Date());

    return (
        <div>
            <TimePicker value={value} onChange={setValue} />
        </div>
    );
}
