import * as React from 'react'
import * as ReactDOM from 'react-dom';

import { CartesianGrid, LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts';

const Component = (props: {}) => {
    return (
        <LineChart width={500} height={300} data={ data }>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
    );
}


ReactDOM.render(<Component />, document.getElementById('app'));
