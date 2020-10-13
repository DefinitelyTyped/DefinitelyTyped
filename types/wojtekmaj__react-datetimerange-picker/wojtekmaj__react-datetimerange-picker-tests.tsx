import React, { useState } from 'react';
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';

function MyApp() {
    const [value, onChange] = useState([new Date(), new Date()]);

    return (
        <div>
            <DateTimeRangePicker onChange={onChange} value={value} />
        </div>
    );
}
