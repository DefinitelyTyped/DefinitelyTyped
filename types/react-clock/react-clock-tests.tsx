import * as React from 'react';
import Clock, { ClockProps } from 'react-clock';

function MyApp() {
    const [value] = React.useState<ClockProps['value']>(new Date());

    return (
        <div>
            <Clock value={value} />
        </div>
    );
}
