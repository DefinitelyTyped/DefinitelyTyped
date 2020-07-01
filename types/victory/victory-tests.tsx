import * as React from 'react';
import {
    VictoryAnimation,
    VictoryLabel,
    AnimationStyle,
    VictoryArea,
    VictoryAxis,
    VictoryStack,
    VictoryBar,
    VictoryLine,
    VictoryChart,
    VictoryScatter,
    VictoryPie,
    VictoryStyleInterface,
    VictoryTheme,
    VictoryThemeDefinition,
    VictoryLegend,
    VictoryBoxPlot,
    VictoryGroup,
    createContainer,
    VictoryZoomContainerProps,
    VictoryBrushContainerProps,
    ScatterSymbolType,
    Flyout,
    VictoryClipContainer,
    VictoryPortal,
    VictoryStringOrNumberCallback,
    VictorySliceProps,
} from 'victory';

const commonData1 = [
    { amount: 1, yield: 1, error: 0.5 },
    { amount: 2, yield: 2, error: 1.1 },
    { amount: 3, yield: 3, error: 0 },
    { amount: 4, yield: 2, error: 0.1 },
    { amount: 5, yield: 1, error: 1.5 },
];

const commonData2 = [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 1 },
    { x: 4, y: 3 },
    { x: 5, y: 2 },
    { x: 6, y: 5 },
];

// VictoryAnimation test
let test = (
    <VictoryAnimation
        data={[{ color: 'red' }, { color: 'green' }, { color: 'blue' }, { color: 'yellow' }, { color: 'purple' }]}
        delay={3000}
        easing="back"
        duration={500}
        onEnd={() => {}}
    >
        {(style: AnimationStyle) => <span style={{ color: style['color'] as string }}>Hello!</span>}
    </VictoryAnimation>
);

// VictoryClipContainer test
test = (
    <VictoryClipContainer
        circleComponent={<circle />}
        className="container-class"
        clipHeight={100}
        clipId={10}
        clipPadding={{
            top: 10,
            bottom: 20,
            left: 30,
            right: 40,
        }}
        clipPathComponent={<clipPath />}
        clipWidth={300}
        events={{ onClick: () => {} }}
        groupComponent={<g />}
        origin={{ x: 0, y: 30 }}
        polar={true}
        radius={45}
        rectComponent={<rect />}
        translateX={50}
        translateY={70}
    >
        {[<span>child a</span>, <span>child b</span>]}
    </VictoryClipContainer>
);

// Flyout test
test = (
    <Flyout
        active={true}
        center={{ x: 0, y: 2 }}
        className="flyout-class"
        cornerRadius={3}
        data={[]}
        datum={{ x: -3, y: 3 }}
        dx={-6}
        dy={30}
        events={{
            onClick: () => {},
        }}
        height={50}
        id="ab"
        index={0}
        orientation="top"
        origin={{ x: 0, y: 0 }}
        pathComponent={<rect />}
        pointerLength={5}
        pointerWidth={10}
        polar={false}
        role="button"
        shapeRendering="crispEdges"
        style={{
            fill: 'blue',
        }}
        transform="rotate(0 10 100)"
        width={200}
        x={0}
        y={0}
    >
        {'Flyout child!'}
    </Flyout>
);

// VictoryLabel test
test = (
    <VictoryLabel
        x={50}
        y={10}
        angle={90}
        capHeight={() => 50}
        textAnchor="middle"
        verticalAnchor="start"
        events={{
            onClick: () => {},
        }}
        text="test"
        transform="scale(1.2)"
        dx={10}
        dy={10}
        lineHeight={1.5}
    >
        {'data viz \n is \n fun!'}
    </VictoryLabel>
);

test = (
    <VictoryLabel text={({ datum }) => datum.label} labelPlacement="perpendicular" renderInPortal>
        {'data viz \n is \n fun!'}
    </VictoryLabel>
);

test = (
    <VictoryLabel text={['some', 'text', 'strings']} labelPlacement="vertical" renderInPortal lineHeight={'12'}>
        {'data viz \n is \n fun!'}
    </VictoryLabel>
);

test = (
    <VictoryLabel
        text={['some', 'text', 'strings']}
        style={[{ fill: '#ff0000' }, { fill: '#00ff00' }, { fill: '#0000ff' }]}
    />
);

// VictoryArea test
test = <VictoryArea data={commonData1} x={'amount'} y={data => data.yield + data.error} />;

test = (
    <VictoryArea
        height={400}
        style={{
            data: { fill: 'gold' },
        }}
        data={commonData2}
        scale="sqrt"
        events={[
            {
                target: 'data',
                eventKey: 'all',
                eventHandlers: {
                    onClick: () => ({
                        mutation: () => ({ style: { fill: 'orange' } }),
                    }),
                    onMouseEnter: () => [
                        {
                            target: 'labels',
                            mutation: () => ({ text: 'hey' }),
                        },
                    ],
                },
            },
        ]}
    />
);

test = (
    <VictoryStack
        height={800}
        style={{
            data: {
                strokeDasharray: '5,5',
                strokeWidth: 2,
                fillOpacity: 0.4,
            },
        }}
    >
        <VictoryArea
            style={{
                data: {
                    fill: 'tomato',
                    stroke: 'tomato',
                },
            }}
            data={[
                { x: 1, y: 1 },
                { x: 2, y: 2 },
                { x: 3, y: 3 },
            ]}
        />
        <VictoryArea
            style={{
                data: {
                    fill: 'orange',
                    stroke: 'orange',
                },
            }}
            data={[
                { x: 1, y: 2 },
                { x: 2, y: 1 },
                { x: 3, y: 1 },
            ]}
        />
        <VictoryArea
            style={{
                data: {
                    fill: 'gold',
                    stroke: 'gold',
                },
            }}
            data={[
                { x: 1, y: 3 },
                { x: 2, y: 4 },
                { x: 3, y: 2 },
            ]}
        />
    </VictoryStack>
);

test = (
    <VictoryAxis
        style={{
            axis: { stroke: 'black' },
            grid: { strokeWidth: 2 },
            ticks: { stroke: 'red' },
            tickLabels: { fontSize: 12 },
            axisLabel: { fontSize: 16 },
        }}
        label="Planets"
        tickValues={['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']}
    />
);

test = (
    <VictoryAxis
        scale="time"
        style={{
            grid: { strokeWidth: tick => tick.x },
            ticks: { stroke: tick => tick.color },
            tickLabels: { fontSize: tick => tick.y },
        }}
        tickValues={[
            new Date(1980, 1, 1),
            new Date(1990, 1, 1),
            new Date(2000, 1, 1),
            new Date(2010, 1, 1),
            new Date(2020, 1, 1),
        ]}
        tickFormat={x => x.getFullYear()}
    />
);

test = (
    <VictoryAxis
        dependentAxis
        padding={{ left: 50, top: 20, bottom: 20 }}
        scale="log"
        domain={{ x: [new Date(Date.UTC(2016, 0, 1)), new Date()], y: [1, 5] }}
    />
);

test = <VictoryAxis axisValue={3} />;

test = <VictoryAxis axisValue="series1" />;

// VictoryBar test
test = <VictoryBar data={commonData2} />;

test = <VictoryBar data={commonData1} x={'amount'} y={data => data.yield + data.error} />;

test = (
    <VictoryBar
        height={500}
        padding={75}
        style={{
            labels: { fontSize: 20 },
        }}
        data={[
            { x: 1, y: 1, fill: 'gold', label: 'SO' },
            { x: 2, y: 3, fill: 'orange' },
            { x: 3, y: 2, fill: 'tomato', label: 'WOW' },
            { x: 4, y: 4, fill: 'pink' },
            { x: 5, y: 3, fill: 'magenta', label: 'SUCH' },
            { x: 6, y: 5, fill: 'purple' },
            { x: 7, y: 6, fill: 'blue', label: 'LABEL' },
        ]}
    />
);

test = (
    <VictoryBar
        height={500}
        padding={75}
        style={{
            data: {
                fill: 'red',
            },
        }}
        data={commonData2}
        barWidth={20}
        barRatio={100}
        cornerRadius={2}
    />
);

const getOpacity: VictoryStringOrNumberCallback = arg1 => {
    const { datum, horizontal, x, y, scale } = arg1;
    const newX = scale.x(1);
    const newY = scale.y(1);
    const orientation = horizontal ? x : y;
    return orientation;
};

test = (
    <VictoryBar
        height={500}
        style={{
            data: { fill: 'blue', width: 20, opacity: getOpacity },
            labels: { fontSize: 20 },
        }}
        labels={['a', 'b', 'c', 'd', 'e']}
        data={[
            { x: 1, y: 1 },
            { x: 2, y: 2 },
            { x: 3, y: 3, label: 'click me' },
            { x: 4, y: 2 },
            { x: 5, y: 1 },
        ]}
        alignment="start"
        barWidth={({ datum, active }) => (active ? datum.x : datum.y)}
        cornerRadius={{ top: 2, bottom: 4 }}
        events={[
            {
                target: 'data',
                eventKey: 2,
                eventHandlers: {
                    onClick: evt => {
                        evt.stopPropagation();
                        return [
                            {
                                mutation: () => ({ style: { fill: 'orange', width: 20 } }),
                            },
                            {
                                target: 'labels',
                                eventKey: 3,
                                mutation: () => ({ text: 'now click me' }),
                            },
                        ];
                    },
                },
            },
            {
                target: 'parent',
                eventHandlers: {
                    onClick: () => [
                        {
                            target: 'data',
                            mutation: () => ({ style: { fill: 'tomato', width: 10 } }),
                        },
                    ],
                },
            },
        ]}
    />
);

// VictoryBoxPlot test
test = (
    <VictoryBoxPlot
        animate={{
            duration: 1000,
            onEnter: {
                duration: 500,
                before: () => ({ y: 0, label: ' ' }),
                after: datum => ({ y: datum.y, label: 'NEW' }),
            },
        }}
        boxWidth={10}
        domain={[0, 10]}
        domainPadding={5}
        data={[
            { x: 1, y: [1, 2, 3, 5] },
            { x: 2, y: [3, 2, 8, 10] },
            { x: 3, y: [2, 8, 6, 5] },
            { x: 4, y: [1, 3, 2, 9] },
        ]}
        events={[
            {
                target: 'data',
                eventKey: 2,
                eventHandlers: {
                    onClick: evt => {
                        evt.stopPropagation();
                        return [
                            {
                                mutation: () => ({ style: { fill: 'orange', width: 20 } }),
                            },
                            {
                                target: 'labels',
                                eventKey: 3,
                                mutation: () => ({ text: 'now click me' }),
                            },
                        ];
                    },
                },
            },
            {
                target: 'parent',
                eventHandlers: {
                    onClick: () => [
                        {
                            target: 'data',
                            mutation: () => ({ style: { fill: 'tomato', width: 10 } }),
                        },
                    ],
                },
            },
        ]}
        height={500}
        labelOrientation="top"
        labels={true}
        max="max_value"
        min={() => 10}
        q1="bonds.q1"
        q3={['bonds', 'q3']}
        q3Component={<div />}
        q3LabelComponent={<VictoryLabel />}
        name="BoxPlot"
        style={{
            min: { stroke: 'tomato' },
            max: { stroke: 'orange' },
            q1: { fill: 'tomato' },
            q3: { fill: 'orange' },
            median: { stroke: 'white', strokeWidth: 2 },
            minLabels: { fill: 'tomato' },
            maxLabels: { fill: 'orange' },
        }}
        whiskerWidth={5}
    />
);

// VictoryChart test
test = (
    <VictoryChart animate minDomain={5} maxDomain={{ x: 5 }}>
        <VictoryLine y={data => 0.5 * data.x * data.x} />
    </VictoryChart>
);

test = (
    <VictoryChart>
        <VictoryLine style={{ data: { stroke: 'red', strokeWidth: 4 } }} y={data => Math.sin(2 * Math.PI * data.x)} />
        <VictoryLine style={{ data: { stroke: 'blue', strokeWidth: 4 } }} y={data => Math.cos(2 * Math.PI * data.x)} />
    </VictoryChart>
);

test = (
    <VictoryChart
        height={500}
        padding={{
            top: 75,
            bottom: 40,
            left: 40,
            right: 40,
        }}
        domainPadding={{ x: 20 }}
    >
        <VictoryAxis label="X AXIS" orientation="top" />
        <VictoryAxis
            dependentAxis
            tickValues={[0, 1.5, 3, 4.5]}
            style={{
                grid: {
                    stroke: 'grey',
                    strokeWidth: 1,
                },
                axis: { stroke: 'transparent' },
                ticks: { stroke: 'transparent' },
            }}
        />
        <VictoryBar
            style={{
                data: {
                    width: 15,
                    fill: 'gold',
                },
            }}
            data={commonData2}
        />
    </VictoryChart>
);

test = (
    <VictoryChart
        height={450}
        scale={{
            x: 'time',
        }}
    >
        <VictoryAxis
            label="Decades"
            tickValues={[new Date(1980, 1, 1), new Date(2000, 1, 1), new Date(2020, 1, 1)]}
            tickFormat={x => x.getFullYear()}
        />
        <VictoryLine
            data={[
                { x: new Date(1982, 1, 1), y: 125 },
                { x: new Date(1987, 1, 1), y: 257 },
                { x: new Date(1993, 1, 1), y: 345 },
                { x: new Date(1997, 1, 1), y: 515 },
                { x: new Date(2001, 1, 1), y: 132 },
                { x: new Date(2005, 1, 1), y: 305 },
                { x: new Date(2011, 1, 1), y: 270 },
                { x: new Date(2015, 1, 1), y: 470 },
            ]}
        />
    </VictoryChart>
);

test = (
    <VictoryChart horizontal>
        <VictoryBar
            categories={{ x: ['A', 'B', 'C'] }}
            data={[
                { y: 5, x: 'A' },
                { y: 6, x: 'B' },
                { y: 7, x: 'C' },
            ]}
            y0={d => d.y - 1}
        />
    </VictoryChart>
);

// VictoryGroup test
test = (
    <VictoryGroup color="#46c85e" offset={40}>
        <VictoryBar
            data={[
                { x: 'a', y: 2 },
                { x: 'b', y: 3 },
                { x: 'c', y: 5 },
            ]}
        />
        <VictoryBar
            data={[
                { x: 'a', y: 1 },
                { x: 'b', y: 4 },
                { x: 'c', y: 5 },
            ]}
        />
        <VictoryBar
            data={[
                { x: 'a', y: 3 },
                { x: 'b', y: 2 },
                { x: 'c', y: 6 },
            ]}
        />
    </VictoryGroup>
);

test = (
    <VictoryGroup color="#46c85e" offset={40} data={commonData2}>
        <VictoryBar />
        <VictoryBar />
        <VictoryBar />
    </VictoryGroup>
);

// VictoryLine test
test = <VictoryLine data={commonData2} />;

test = <VictoryLine data={commonData1} x={'amount'} y={data => data.yield + data.error} />;

test = (
    <VictoryLine
        domain={[0, 5]}
        padding={75}
        height={500}
        data={commonData2}
        interpolation="cardinal"
        label="LINE"
        style={{
            data: {
                stroke: '#822722',
                strokeWidth: 3,
            },
            labels: { fontSize: 18 },
        }}
    />
);

// VictoryScatter test
test = (
    <VictoryScatter
        data={commonData1}
        style={{
            data: {
                fill: ({ datum }) => datum.x,
                stroke: ({ datum, active }) => (active ? datum.x : datum.y),
                strokeWidth: 3,
            },
        }}
        x={'amount'}
        y={data => data.yield + data.error}
    />
);

test = (
    <VictoryScatter
        data={commonData2}
        size={8}
        symbol="star"
        style={{
            data: {
                fill: 'gold',
                stroke: 'orange',
                strokeWidth: 3,
            },
        }}
    />
);

test = <VictoryScatter data={commonData2} size={() => 5} />;

// VictoryPie test
test = (
    <VictoryPie
        data={[
            { animal: 'Cat', pet: 45, wild: 17 },
            { animal: 'Dog', pet: 85, wild: 6 },
            { animal: 'Fish', pet: 55, wild: 0 },
            { animal: 'Bird', pet: 15, wild: 40 },
        ]}
        x={'animal'}
        innerRadius={(props: VictorySliceProps) => 2 }
        y={data => data.pet + data.wild}
    />
);

test = (
    <VictoryPie
        style={{
            labels: {
                fill: 'white',
                fontSize: 12,
                fontWeight: 'bold',
            },
        }}
        data={[
            { x: '<5', y: 6279 },
            { x: '5-13', y: 9182 },
            { x: '14-17', y: 5511 },
            { x: '18-24', y: 7164 },
            { x: '25-44', y: 6716 },
            { x: '45-64', y: 4263 },
            { x: '≥65', y: 7502 },
        ]}
        innerRadius={110}
        colorScale={['#D85F49', '#F66D3B', '#D92E1D', '#D73C4C', '#FFAF59', '#E28300', '#F6A57F']}
    />
);

test = (
    <VictoryPie
        data={[
            { x: 'Cat', y: 62 },
            { x: 'Dog', y: 91 },
            { x: 'Fish', y: 55 },
            { x: 'Bird', y: 55 },
        ]}
        events={[
            {
                target: 'data',
                eventHandlers: {
                    onClick: () => [
                        {
                            mutation: () => ({ style: { fill: 'orange' } }),
                        },
                        {
                            target: 'labels',
                            eventKey: [1, 2, 3],
                            mutation: () => ({ text: 'KITTEN' }),
                        },
                    ],
                },
            },
        ]}
    />
);

test = (
    <VictoryPie
        data={[
            { x: 'Cat', y: 62 },
            { x: 'Dog', y: 91 },
            { x: 'Fish', y: 55 },
            { x: 'Bird', y: 55 },
        ]}
        animate={{
            duration: 1000,
            onEnter: {
                duration: 500,
                before: () => ({ y: 0, label: ' ' }),
                after: datum => ({ y: datum.y, label: 'NEW' }),
            },
        }}
        labelRadius={20}
    />
);

test = <VictoryChart animate={{ duration: 2000, easing: 'bounce' }} />;

// VictoryLegend test

test = (
    <VictoryLegend
        data={[
            { name: 'A', symbol: { type: 'circle' } },
            { name: 'B', symbol: { type: 'square' } },
            { name: 'C', symbol: { type: 'star' } },
        ]}
        gutter={10}
        orientation="horizontal"
        title="Title"
        symbolSpacer={8}
        width={100}
        height={50}
        x={5}
        y={5}
        theme={VictoryTheme.material}
        style={{
            data: { fill: 'tomato', opacity: 0.7 },
            labels: { fontSize: 12 },
            parent: { border: '1px solid #ccc' },
        }}
        standalone
        padding={{ top: 20, right: 40, bottom: 60, left: 20 }}
        colorScale="heatmap"
        events={[
            {
                target: 'data',
                eventKey: 'thisOne',
                eventHandlers: {
                    onClick: () => [
                        {
                            eventKey: 'theOtherOne',
                            mutation: props => ({
                                style: { ...props.style, fill: 'orange' },
                            }),
                        },
                        {
                            eventKey: 'theOtherOne',
                            target: 'labels',
                            mutation: () => ({ text: 'hey' }),
                        },
                    ],
                },
            },
        ]}
    />
);

// VictoryPortal test
test = (
    <VictoryPortal groupComponent={<div>groupComponent</div>}>
        <div>Child</div>
    </VictoryPortal>
);

// createContainer test
const VictoryZoomBrushContainer = createContainer<VictoryZoomContainerProps, VictoryBrushContainerProps>(
    'zoom',
    'brush',
);

test = <VictoryZoomBrushContainer brushDomain={[0, 500]} zoomDomain={[0, 500]} />;

// Gutter test
test = (
    <VictoryLegend
        x={125}
        y={50}
        orientation="horizontal"
        gutter={{ left: 10, right: 10 }}
        data={[{ name: 'One' }, { name: 'Two' }, { name: 'Three' }]}
    />
);

const emptyTheme: VictoryThemeDefinition = {};

type RecursiveRequired<T> = {
    [P in keyof T]-?: T[P] extends (infer U)[]
        ? RecursiveRequired<U>[]
        : T[P] extends object
        ? RecursiveRequired<T[P]>
        : T[P];
};

// tslint:disable-next-line: no-object-literal-type-assertion
const cssProps: Required<React.CSSProperties> = {} as Required<React.CSSProperties>;
const colorScale: string[] = ['blue'];
const scatterSymbolType: { type: ScatterSymbolType } = { type: 'square' };
const victoryStyle: RecursiveRequired<Required<VictoryStyleInterface>> = {
    parent: cssProps,
    data: cssProps,
    labels: cssProps,
};
const fullTheme: RecursiveRequired<Required<VictoryThemeDefinition>> = {
    area: {
        style: {
            data: cssProps,
            labels: cssProps,
        },
        colorScale,
        height: 0,
        padding: 0,
        width: 0,
    },
    axis: {
        style: {
            axis: cssProps,
            axisLabel: cssProps,
            grid: cssProps,
            ticks: cssProps,
            tickLabels: cssProps,
        },
        colorScale,
        height: 0,
        padding: 0,
        width: 0,
    },
    bar: {
        colorScale,
        height: 0,
        padding: 0,
        style: { data: cssProps, labels: cssProps },
        width: 0,
    },
    boxplot: {
        style: {
            max: cssProps,
            maxLabels: cssProps,
            median: cssProps,
            medianLabels: cssProps,
            min: cssProps,
            minLabels: cssProps,
            q1: cssProps,
            q1Labels: cssProps,
            q3: cssProps,
            q3Labels: cssProps,
        },
        boxWidth: 0,
        colorScale,
        height: 0,
        padding: 0,
        width: 0,
    },
    candlestick: {
        style: { data: cssProps, labels: cssProps },
        candleColors: {
            positive: '#ffffff',
            negative: '#000000',
        },
        colorScale,
        height: 0,
        padding: 0,
        width: 0,
    },
    chart: { width: 0, height: 0, colorScale, padding: 0 },
    errorbar: {
        style: { data: cssProps, labels: cssProps },
        borderWidth: 0,
        colorScale,
        height: 0,
        padding: 0,
        width: 0,
    },
    group: {
        colorScale,
        height: 0,
        padding: 0,
        width: 0,
    },
    legend: {
        style: { data: { ...cssProps, ...scatterSymbolType }, labels: cssProps, title: cssProps },
        colorScale,
        gutter: 0,
        height: 0,
        orientation: 'vertical',
        padding: 0,
        titleOrientation: 'top',
        width: 0,
    },
    line: {
        style: { data: cssProps, labels: cssProps },
        colorScale,
        height: 0,
        padding: 0,
        width: 0,
    },
    pie: {
        style: { data: cssProps, labels: cssProps },
        colorScale,
        height: 0,
        padding: 0,
        width: 0,
    },
    scatter: {
        style: { data: cssProps, labels: cssProps },
        colorScale,
        height: 0,
        padding: 0,
        width: 0,
    },
    stack: {
        colorScale,
        height: 0,
        padding: 50,
        width: 0,
    },
    tooltip: {
        cornerRadius: 0,
        flyoutStyle: cssProps,
        pointerLength: 0,
        style: cssProps,
    },
    voronoi: {
        style: { data: cssProps, labels: cssProps, flyout: cssProps },
        colorScale,
        height: 0,
        padding: 0,
        width: 0,
    },
};

// Slice.props
const sliceProps: VictorySliceProps = {
    cornerRadius: props => props.cornerRadius, // $ExpectError
    datum: { x: 'Cat', y: 62 },
    innerRadius: props => props.innerRadius, // $ExpectError
    padAngle: props => props.padAngle, // $ExpectError
    pathFunction: sliceProps => 'M1,1',
    radius: props => props.radius, // $ExpectError
    slice: {
        data: [],
        endAngle: 0,
        padAngle: 0,
        startAngle: 0,
    },
    sliceEndAngle: props => props.sliceEndAngle, // $ExpectError
    sliceStartAngle: props => props.slieStartAngle, // $ExpectError
};

// singleQuadrantDomainPadding test
test = <VictoryArea singleQuadrantDomainPadding={true} />;
test = <VictoryArea singleQuadrantDomainPadding={{ x: true }} />;
test = <VictoryArea singleQuadrantDomainPadding={5} />; // $ExpectError
