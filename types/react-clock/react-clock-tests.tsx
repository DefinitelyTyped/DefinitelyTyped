import * as React from 'react';
import Clock, { ClockValue } from 'react-clock';

function MyApp() {
    const [value] = React.useState<ClockValue>(new Date());

    return (
        <div>
            <Clock value={value} />
        </div>
    );
}
