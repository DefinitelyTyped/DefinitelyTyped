import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Recharts } from 'recharts';

const data: any[] = [];

const Component = (props: {}) => {
    return (
        <Recharts.LineChart width={500} height={300} data={ data }>
            <Recharts.XAxis dataKey="name"/>
            <Recharts.YAxis/>
            <Recharts.CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
            <Recharts.Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Recharts.Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </Recharts.LineChart>
    );
};

ReactDOM.render(<Component />, document.getElementById('app'));
