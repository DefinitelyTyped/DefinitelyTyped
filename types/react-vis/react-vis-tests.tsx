import React from 'react';
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineMarkSeries } from 'react-vis';

export default function Example() {
    return (
        <XYPlot width={300} height={300}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <LineMarkSeries
                className="linemark-series-example"
                style={{
                    strokeWidth: '3px',
                }}
                lineStyle={{ stroke: 'red' }}
                markStyle={{ stroke: 'blue' }}
                data={[
                    { x: 1, y: 10 },
                    { x: 2, y: 5 },
                    { x: 3, y: 15 },
                ]}
            />
            <LineMarkSeries
                className="linemark-series-example-2"
                curve={'curveMonotoneX'}
                data={[
                    { x: 1, y: 11 },
                    { x: 1.5, y: 29 },
                    { x: 3, y: 7 },
                ]}
            />
        </XYPlot>
    );
}
