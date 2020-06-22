import React, { Component } from 'react';

import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    LineMarkSeries,
    HexbinSeries,
    ChartLabel,
    VerticalBarSeries
} from 'react-vis';

export function Example() {
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

const DATA: any[] = [];

const DIMENSIONS = [
    'economy (mpg)',
    'cylinders',
    'displacement (cc)',
    'power (hp)',
    'weight (lb)',
    '0-60 mph (s)',
    'year',
];

export class HexbinSizeExample extends Component {
    state = {
        xAxis: 0,
        yAxis: 3,
    };

    render() {
        const { xAxis, yAxis } = this.state;
        const data = DATA.map((d: any) => ({
            x: Number(d[DIMENSIONS[xAxis]]),
            y: Number(d[DIMENSIONS[yAxis]]),
        }));

        return (
            <div className="centered-and-flexed">
                <XYPlot width={500} height={300} margin={50}>
                    <HexbinSeries
                        animation
                        sizeHexagonsWithCount
                        className="hexbin-size-example"
                        radius={15}
                        data={data}
                    />
                    <XAxis />
                    <YAxis />
                    <ChartLabel
                        text={DIMENSIONS[xAxis]}
                        className="alt-x-label"
                        xPercent={0.9}
                        yPercent={0.65}
                        style={{
                            transform: 'rotate(90)',
                            textAnchor: 'end',
                        }}
                    />

                    <ChartLabel
                        text={DIMENSIONS[yAxis]}
                        className="alt-y-label"
                        xPercent={0.1}
                        yPercent={0.0}
                        style={{
                            textAnchor: 'start',
                        }}
                    />
                </XYPlot>
            </div>
        );
    }
}

export class BarSeriesExample extends Component {
    state = {
        xAxis: 0,
        yAxis: 3,
    };

    render() {
        const { xAxis, yAxis } = this.state;
        const data = DATA.map((d: any) => ({
            x: Number(d[DIMENSIONS[xAxis]]),
            y: Number(d[DIMENSIONS[yAxis]]),
        }));

        return (
            <div className="centered-and-flexed">
                <XYPlot
                    xType="ordinal"
                    width={250}
                    height={250}
                    colorType={"literal"}
                    style={{ fill: "#ffffff", height: "300px" }}
                    margin={{ left: 0, top: 25 }} >
                    <XAxis />
                    <VerticalBarSeries data={data} stroke={0} barWidth={1.0} />
                </XYPlot>
            </div>
        );
    }
}
