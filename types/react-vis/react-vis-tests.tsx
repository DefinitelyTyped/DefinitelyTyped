import React, { Component, useState } from 'react';

import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    LineMarkSeries,
    HexbinSeries,
    ChartLabel,
    VerticalBarSeries,
    LineSeries,
    Highlight,
    HighlightArea,
    VerticalRectSeries,
    Treemap,
    Sunburst
} from 'react-vis';

export function Example() {
    return (
        <XYPlot width={300} height={300}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis
                style={{
                    strokeWidth: '3px',
                    line: { stroke: 'red' },
                    ticks: { stroke: 'green' },
                    title: { textTransform: 'uppercase' },
                    text: {
                        stroke: 'none',
                        fill: 'blue',
                        fontWeight: 600
                    },
                }}
            />
            <YAxis
                style={{
                    strokeWidth: '3px',
                    line: { stroke: 'purple' },
                    ticks: { stroke: 'orange' },
                    title: { textTransform: 'capitalize' },
                    text: {
                        stroke: 'none',
                        fill: 'rgb(70%, 80%, 54%)',
                        fontWeight: 600
                    },
                }}/>
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
                    colorType={'literal'}
                    style={{ fill: '#ffffff', height: '300px' }}
                    margin={{ left: 0, top: 25 }}
                >
                    <XAxis />
                    <VerticalBarSeries data={data} stroke={0} barWidth={1.0} />
                </XYPlot>
            </div>
        );
    }
}

export class HighlightExample extends Component {
    render() {
        const data = [
            { x: 0, y: 8 },
            { x: 1, y: 5 },
            { x: 2, y: 4 },
            { x: 3, y: 9 },
            { x: 4, y: 1 },
        ];
        return (
            <div className="highlight-example">
                <XYPlot height={300} width={300}>
                    <LineSeries data={data} />
                    <Highlight />
                </XYPlot>
            </div>
        );
    }
}

export const HighlightDragExample: React.FC = () => {
    const data = [
        { x0: 0, x: 1, y0: 0, y: 1 },
        { x0: 1, x: 2, y0: 0, y: 2 },
        { x0: 2, x: 3, y0: 0, y: 10 },
        { x0: 3, x: 4, y0: 0, y: 6 },
        { x0: 4, x: 5, y0: 0, y: 5 },
        { x0: 5, x: 6, y0: 0, y: 3 },
        { x0: 6, x: 7, y0: 0, y: 1 },
    ];

    const [selection, setSelection] = useState<{
        start: number;
        end: number;
    } | null>(null);

    const updateDragState = (area: HighlightArea | null) => {
        if (!area || area.left === undefined || area.right === undefined) {
            setSelection(null);
        } else {
            setSelection({ start: area.left, end: area.right });
        }
    };
    return (
        <XYPlot width={500} height={300}>
            <XAxis />
            <YAxis />
            <VerticalRectSeries
                className="highlight-drag-example"
                data={data}
                stroke="white"
                colorType="literal"
                getColor={d => {
                    if (!selection) {
                        return '#1E96BE';
                    }
                    const inX = d.x >= selection.start && d.x <= selection.end;
                    const inX0 = d.x0 >= selection.start && d.x0 <= selection.end;
                    const inStart = selection.start >= d.x0 && selection.start <= d.x;
                    const inEnd = selection.end >= d.x0 && selection.end <= d.x;

                    return inStart || inEnd || inX || inX0 ? '#12939A' : '#1E96BE';
                }}
            />
            <Highlight color="#829AE3" drag enableY={false} onDrag={updateDragState} onDragEnd={updateDragState} />
        </XYPlot>
    );
};

const treemapData = {
  title: "first level",
  children: [
    {
      title: "second level",
      children: [
        {
          title: "#ff0000",
          size: 29,
          children: [
            {
              title: "third level",
              size: 30
            }
          ]
        },
      ]
    }
  ]
};

export function TreemapExample(): JSX.Element {
  return <Treemap data={treemapData} mode={"partition"} height={150} width={150}/>;
}

export function SunburstExample(): JSX.Element {
  return <Sunburst data={treemapData} mode={"partition"} height={150} width={150}/>;
}
