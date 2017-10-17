import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, ReferenceLine, ReferenceArea } from 'recharts';

const Component = (props: {}) => {
    const data = [
        {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
        {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
        {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
        {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
        {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
        {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
        {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    ];

    return (
        <LineChart width={500} height={300} data={data}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
            <Tooltip />
            <ReferenceLine />
            <ReferenceArea
                stroke="red"
                fill="red"
                y2={1}
                strokeOpacity={0.2}
                fillOpacity={0.1}
            />
        </LineChart>
    );
};

ReactDOM.render(<Component />, document.getElementById('app'));
