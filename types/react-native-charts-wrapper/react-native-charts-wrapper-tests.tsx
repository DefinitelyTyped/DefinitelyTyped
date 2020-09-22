import {
    LineChart,
    ChartSelectEvent,
    BarChart,
    BubbleChart,
    CandleStickChart,
    HorizontalBarChart,
    CombinedChart,
    PieChart,
    AxisLimitLine,
} from 'react-native-charts-wrapper';
import * as React from 'react';
import { View, processColor, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    chart: {
        flex: 1,
    },
});

const COLOR_PURPLE = processColor('#697dfb');

function _randomYValues(range: number, size: number) {
    const nextValueMaxDiff = 0.2;
    const lastValue = range / 2;

    return Array.from({ length: size })
        .fill(0)
        .map(() => {
            const min = lastValue * (1 - nextValueMaxDiff);
            const max = lastValue * (1 + nextValueMaxDiff);
            return { y: Math.random() * (max - min) + min };
        });
}

class AxisLineChartScreen extends React.Component {
    handleSelect(event: ChartSelectEvent) {
        console.log(event.nativeEvent);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <LineChart
                        data={{
                            dataSets: [
                                {
                                    values: _randomYValues(100, 30),
                                    label: '',
                                    config: {
                                        lineWidth: 1.5,
                                        drawCircles: false,
                                        drawCubicIntensity: 0.3,
                                        drawHighlightIndicators: false,
                                        color: COLOR_PURPLE,
                                        drawFilled: true,
                                        fillColor: COLOR_PURPLE,
                                        fillAlpha: 90,
                                    },
                                },
                            ],
                        }}
                        chartDescription={{ text: '' }}
                        xAxis={{
                            textColor: processColor('red'),
                            textSize: 16,
                            gridColor: processColor('red'),
                            gridLineWidth: 1,
                            axisLineColor: processColor('darkgray'),
                            axisLineWidth: 1.5,
                            gridDashedLine: {
                                lineLength: 10,
                                spaceLength: 10,
                            },
                            avoidFirstLastClipping: true,
                            position: 'BOTTOM',
                        }}
                        yAxis={{
                            left: {
                                drawGridLines: false,
                            },
                            right: {
                                enabled: false,
                            },
                        }}
                        legend={{ enabled: false }}
                        onSelect={this.handleSelect.bind(this)}
                        onChange={event => console.log(event.nativeEvent)}
                    />
                </View>
            </View>
        );
    }
}

class BarChartScreen extends React.Component {
    handleSelect(event: ChartSelectEvent) {
        console.log(event.nativeEvent);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <BarChart
                        data={{
                            dataSets: [
                                {
                                    values: [
                                        { y: 100 },
                                        { y: 105 },
                                        { y: 102 },
                                        { y: 110 },
                                        { y: 114 },
                                        { y: 109 },
                                        { y: 105 },
                                        { y: 99 },
                                        { y: 95 },
                                    ],
                                    label: 'Bar dataSet',
                                    config: {
                                        color: processColor('teal'),
                                        barShadowColor: processColor('lightgrey'),
                                        highlightAlpha: 90,
                                        highlightColor: processColor('red'),
                                    },
                                },
                            ],

                            config: {
                                barWidth: 0.7,
                            },
                        }}
                        xAxis={{
                            valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                            granularityEnabled: true,
                            granularity: 1,
                        }}
                        animation={{ durationX: 2000 }}
                        legend={{
                            enabled: true,
                            textSize: 14,
                            form: 'SQUARE',
                            formSize: 14,
                            xEntrySpace: 10,
                            yEntrySpace: 5,
                            formToTextSpace: 5,
                            wordWrapEnabled: true,
                            maxSizePercent: 0.5,
                        }}
                        gridBackgroundColor={processColor('#ffffff')}
                        visibleRange={{ x: { min: 5, max: 5 } }}
                        drawBarShadow={false}
                        drawValueAboveBar={true}
                        onSelect={this.handleSelect.bind(this)}
                        highlights={[{ x: 3 }, { x: 6 }]}
                        onChange={event => console.log(event.nativeEvent)}
                    />
                </View>
            </View>
        );
    }
}

function _randomYSizeValues(range: number, size: number) {
    return Array.from({ length: size })
        .fill(0)
        .map(() => {
            return {
                y: Math.random() * range,
                size: Math.random() * range,
            };
        });
}

class BubbleChartScreen extends React.Component {
    handleSelect(event: ChartSelectEvent) {
        console.log(event.nativeEvent);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <BubbleChart
                        data={{
                            dataSets: [
                                {
                                    values: _randomYSizeValues(20, 10),
                                    label: 'DS 1',
                                    config: {
                                        color: processColor('#C0FF8C'),
                                        highlightCircleWidth: 2,
                                    },
                                },
                                {
                                    values: _randomYSizeValues(20, 10),
                                    label: 'DS 2',
                                    config: {
                                        color: processColor('#FFF78C'),
                                    },
                                },
                                {
                                    values: _randomYSizeValues(20, 10),
                                    label: 'DS 3',
                                    config: {
                                        color: processColor('#FFD08C'),
                                    },
                                },
                            ],
                        }}
                        legend={{
                            enabled: true,
                            textSize: 14,
                            form: 'CIRCLE',
                            wordWrapEnabled: true,
                        }}
                        animation={{
                            durationX: 1500,
                            durationY: 1500,
                            easingX: 'EaseInCirc',
                        }}
                        onSelect={this.handleSelect.bind(this)}
                        onChange={event => console.log(event.nativeEvent)}
                    />
                </View>
            </View>
        );
    }
}

class CandleStickChartScreen extends React.Component {
    handleSelect(event: ChartSelectEvent) {
        console.log(event.nativeEvent);
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <CandleStickChart
                        data={{
                            dataSets: [
                                {
                                    values: [
                                        { shadowH: 101.76, shadowL: 100.4, open: 100.78, close: 101.03 },
                                        { shadowH: 101.58, shadowL: 100.27, open: 101.31, close: 101.12 },
                                        { shadowH: 102.24, shadowL: 100.15, open: 101.41, close: 101.17 },
                                        { shadowH: 102.28, shadowL: 101.5, open: 102.24, close: 102.23 },
                                        { shadowH: 102.91, shadowL: 101.78, open: 101.91, close: 102.52 },
                                        { shadowH: 105.18, shadowL: 103.85, open: 103.96, close: 104.58 },
                                        { shadowH: 106.31, shadowL: 104.59, open: 104.61, close: 105.97 },
                                        { shadowH: 106.47, shadowL: 104.96, open: 105.52, close: 105.8 },
                                        { shadowH: 106.5, shadowL: 105.19, open: 106.34, close: 105.92 },
                                        { shadowH: 107.65, shadowL: 105.1401, open: 105.93, close: 105.91 },
                                        { shadowH: 107.29, shadowL: 105.21, open: 105.25, close: 106.72 },
                                        { shadowH: 107.07, shadowL: 105.9, open: 106.48, close: 106.13 },
                                        { shadowH: 106.25, shadowL: 104.89, open: 105.47, close: 105.67 },
                                        { shadowH: 106.19, shadowL: 105.06, open: 106, close: 105.19 },
                                        { shadowH: 107.79, shadowL: 104.88, open: 104.89, close: 107.7 },
                                        { shadowH: 110.42, shadowL: 108.6, open: 108.65, close: 109.56 },
                                        { shadowH: 109.9, shadowL: 108.88, open: 109.72, close: 108.99 },
                                        { shadowH: 110, shadowL: 108.2, open: 108.78, close: 109.99 },
                                        { shadowH: 112.19, shadowL: 110.27, open: 110.42, close: 111.08 },
                                        { shadowH: 110.73, shadowL: 109.42, open: 109.51, close: 109.81 },
                                        { shadowH: 110.98, shadowL: 109.2, open: 110.23, close: 110.96 },
                                        { shadowH: 110.42, shadowL: 108.121, open: 109.95, close: 108.54 },
                                        { shadowH: 109.77, shadowL: 108.17, open: 108.91, close: 108.66 },
                                        { shadowH: 110.61, shadowL: 108.83, open: 108.97, close: 109.04 },
                                        { shadowH: 110.5, shadowL: 108.66, open: 109.34, close: 110.44 },
                                        { shadowH: 112.34, shadowL: 110.8, open: 110.8, close: 112.0192 },
                                        { shadowH: 112.39, shadowL: 111.33, open: 111.62, close: 112.1 },
                                        { shadowH: 112.3, shadowL: 109.73, open: 112.11, close: 109.85 },
                                        { shadowH: 108.95, shadowL: 106.94, open: 108.89, close: 107.48 },
                                        { shadowH: 108, shadowL: 106.23, open: 107.88, close: 106.91 },
                                        { shadowH: 108.09, shadowL: 106.06, open: 106.64, close: 107.13 },
                                        { shadowH: 106.93, shadowL: 105.52, open: 106.93, close: 105.97 },
                                        { shadowH: 106.48, shadowL: 104.62, open: 105.01, close: 105.68 },
                                        { shadowH: 105.65, shadowL: 104.51, open: 105, close: 105.08 },
                                        { shadowH: 105.3, shadowL: 103.91, open: 103.91, close: 104.35 },
                                        { shadowH: 98.71, shadowL: 95.68, open: 96, close: 97.82 },
                                        { shadowH: 97.88, shadowL: 94.25, open: 97.61, close: 94.8075 },
                                        { shadowH: 94.72, shadowL: 92.51, open: 93.99, close: 93.75 },
                                        { shadowH: 94.08, shadowL: 92.4, open: 93.965, close: 93.65 },
                                        { shadowH: 95.74, shadowL: 93.68, open: 94.2, close: 95.18 },
                                        { shadowH: 95.9, shadowL: 93.82, open: 95.2, close: 94.19 },
                                        { shadowH: 94.07, shadowL: 92.68, open: 94, close: 93.24 },
                                        { shadowH: 93.45, shadowL: 91.85, open: 93.37, close: 92.72 },
                                        { shadowH: 93.77, shadowL: 92.59, open: 93, close: 92.82 },
                                        { shadowH: 93.57, shadowL: 92.11, open: 93.33, close: 93.39 },
                                        { shadowH: 93.57, shadowL: 92.46, open: 93.48, close: 92.51 },
                                        { shadowH: 92.78, shadowL: 89.47, open: 92.72, close: 90.32 },
                                        { shadowH: 91.67, shadowL: 90, open: 90, close: 90.52 },
                                    ],
                                    label: 'AAPL',
                                    config: {
                                        highlightColor: processColor('darkgray'),

                                        shadowColor: processColor('black'),
                                        shadowWidth: 1,
                                        shadowColorSameAsCandle: true,
                                        increasingColor: processColor('#71BD6A'),
                                        increasingPaintStyle: 'FILL',
                                        decreasingColor: processColor('#D14B5A'),
                                    },
                                },
                            ],
                        }}
                        marker={{
                            enabled: true,
                            markerColor: processColor('#2c3e50'),
                            textColor: processColor('white'),
                        }}
                        chartDescription={{ text: 'CandleStick' }}
                        legend={{
                            enabled: true,
                            textSize: 14,
                            form: 'CIRCLE',
                            wordWrapEnabled: true,
                        }}
                        xAxis={{
                            drawLabels: true,
                            drawGridLines: true,
                            position: 'BOTTOM',
                            yOffset: 5,
                            limitLines: Array.from({ length: 47 / 5 })
                                .fill(0)
                                .map<AxisLimitLine>((_, i) => {
                                    return {
                                        limit: 5 * (i + 1) + 0.5,
                                        lineColor: processColor('darkgray'),
                                        lineWidth: 1,
                                        label: (i + 1).toString(),
                                    };
                                }),
                        }}
                        yAxis={{
                            left: {
                                valueFormatter: '$ #',
                                limitLines: [
                                    {
                                        limit: 112.4,
                                        lineColor: processColor('red'),
                                        lineDashPhase: 2,
                                        lineDashLengths: [10, 20],
                                    },
                                    {
                                        limit: 89.47,
                                        lineColor: processColor('red'),
                                        lineDashPhase: 2,
                                        lineDashLengths: [10, 20],
                                    },
                                ],
                            },
                            right: {
                                enabled: false,
                            },
                        }}
                        maxVisibleValueCount={16}
                        autoScaleMinMaxEnabled={true}
                        // zoom={{scaleX: 2, scaleY: 1, xValue:  400000, yValue: 1}}
                        zoom={{ scaleX: 15.41, scaleY: 1, xValue: 40, yValue: 916, axisDependency: 'LEFT' }}
                        onSelect={this.handleSelect.bind(this)}
                        ref="chart"
                        onChange={event => console.log(event.nativeEvent)}
                    />
                </View>
            </View>
        );
    }
}

class StackedBarChartScreen extends React.Component {
    handleSelect(event: ChartSelectEvent) {
        console.log(event.nativeEvent);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <BarChart
                        xAxis={{
                            valueFormatter: ['1990', '1991', '1992', '1993', '1994'],
                            granularityEnabled: true,
                            granularity: 1,
                            axisMaximum: 5,
                            axisMinimum: 0,
                            centerAxisLabels: true,
                        }}
                        data={{
                            dataSets: [
                                {
                                    values: [5, 40, 77, 81, 43],
                                    label: 'Company A',
                                    config: {
                                        drawValues: false,
                                        colors: [processColor('red')],
                                    },
                                },
                                {
                                    values: [40, 5, 50, 23, 79],
                                    label: 'Company B',
                                    config: {
                                        drawValues: false,
                                        colors: [processColor('blue')],
                                    },
                                },
                                {
                                    values: [10, 55, 35, 90, 82],
                                    label: 'Company C',
                                    config: {
                                        drawValues: false,
                                        colors: [processColor('green')],
                                    },
                                },
                            ],
                            config: {
                                barWidth: 0.2,
                                group: {
                                    fromX: 0,
                                    groupSpace: 0.1,
                                    barSpace: 0.1,
                                },
                            },
                        }}
                        legend={{
                            enabled: true,
                            textSize: 14,
                            form: 'SQUARE',
                            formSize: 14,
                            xEntrySpace: 10,
                            yEntrySpace: 5,
                            wordWrapEnabled: true,
                        }}
                        drawValueAboveBar={false}
                        onSelect={this.handleSelect.bind(this)}
                        onChange={event => console.log(event.nativeEvent)}
                        highlights={[
                            { x: 1, y: 40 },
                            { x: 2, y: 50 },
                        ]}
                        marker={{
                            enabled: true,
                            markerColor: processColor('#F0C0FF8C'),
                            textColor: processColor('white'),
                            textSize: 14,
                        }}
                    />
                </View>
            </View>
        );
    }
}

class HorizontalBarChartScreen extends React.Component {
    handleSelect(event: ChartSelectEvent) {
        console.log(event.nativeEvent);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <HorizontalBarChart
                        style={styles.chart}
                        data={{
                            dataSets: [
                                {
                                    values: [
                                        { y: 100 },
                                        { y: 105 },
                                        { y: 102 },
                                        { y: 110 },
                                        { y: 114 },
                                        { y: 109 },
                                        { y: 105 },
                                        { y: 99 },
                                        { y: 95 },
                                    ],
                                    label: 'Bar dataSet',
                                    config: {
                                        color: processColor('teal'),
                                        barShadowColor: processColor('lightgrey'),
                                        highlightAlpha: 90,
                                        highlightColor: processColor('red'),
                                    },
                                },
                            ],
                        }}
                        xAxis={{
                            valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                            position: 'BOTTOM',
                            granularityEnabled: true,
                            granularity: 1,
                            labelCount: 10,
                        }}
                        yAxis={{ left: { axisMinimum: 0 } }}
                        animation={{ durationX: 2000 }}
                        legend={{
                            enabled: true,
                            textSize: 14,
                            form: 'SQUARE',
                            formSize: 14,
                            xEntrySpace: 10,
                            yEntrySpace: 5,
                            formToTextSpace: 5,
                            wordWrapEnabled: true,
                            maxSizePercent: 0.5,
                        }}
                        gridBackgroundColor={processColor('#ffffff')}
                        drawBarShadow={false}
                        drawValueAboveBar={true}
                        onSelect={this.handleSelect.bind(this)}
                        onChange={event => console.log(event.nativeEvent)}
                    />
                </View>
            </View>
        );
    }
}

class Combined extends React.Component {
    static displayName = 'Combined';

    handleSelect(event: ChartSelectEvent) {
        console.log(event.nativeEvent);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <CombinedChart
                        data={{
                            barData: {
                                dataSets: [
                                    {
                                        values: [
                                            { y: [40, 30, 20], marker: ['row1', 'row2', 'row3'] },
                                            { y: [10, 20, 10], marker: 'second' },
                                            { y: [30, 20, 50], marker: ['hello', 'world', 'third'] },
                                            { y: [30, 50, 10], marker: 'fourth' },
                                        ],
                                        label: 'Stacked Bar dataset',
                                        config: {
                                            colors: [
                                                processColor('#C0FF8C'),
                                                processColor('#FFF78C'),
                                                processColor('#FFD08C'),
                                            ],
                                            stackLabels: ['Engineering', 'Sales', 'Marketing'],
                                        },
                                    },
                                ],
                            },
                            lineData: {
                                dataSets: [
                                    {
                                        values: [50, 100, 50, 100, 50],
                                        label: 'Sine function',

                                        config: {
                                            drawValues: false,
                                            colors: [processColor('green')],
                                            mode: 'CUBIC_BEZIER',
                                            drawCircles: false,
                                            lineWidth: 2,
                                            axisDependency: 'RIGHT',
                                        },
                                    },
                                    {
                                        values: [100, 50, 100, 50, 100],
                                        label: 'Cosine function',

                                        config: {
                                            drawValues: false,
                                            colors: [processColor('blue')],
                                            mode: 'CUBIC_BEZIER',
                                            drawCircles: false,
                                            lineWidth: 2,
                                        },
                                    },
                                ],
                            },
                            bubbleData: {
                                dataSets: [
                                    {
                                        values: [
                                            {
                                                size: 2.3,
                                                y: 180,
                                                marker: 'marker 1',
                                            },
                                            {
                                                size: 1.4,
                                                y: 150,
                                                marker: 'marker 2',
                                            },
                                            {
                                                size: 2.0,
                                                y: 106,
                                                marker: 'marker 3',
                                            },
                                            {
                                                size: 5.0,
                                                y: 100,
                                            },
                                            {
                                                size: 4.1,
                                                y: 65,
                                            },
                                        ],
                                        label: 'Company A',
                                        config: {
                                            drawValues: false,
                                            colors: [processColor('pink')],
                                            axisDependency: 'RIGHT',
                                        },
                                    },
                                ],
                            },
                            candleData: {
                                dataSets: [
                                    {
                                        values: [
                                            {
                                                shadowH: 20,
                                                shadowL: 5,
                                                open: 15,
                                                close: 10,
                                                marker: 'marker 1',
                                            },
                                            {
                                                shadowH: 30,
                                                shadowL: 10,
                                                open: 25,
                                                close: 15,
                                                marker: 'marker 1',
                                            },
                                            {
                                                shadowH: 10,
                                                shadowL: 5,
                                                open: 15,
                                                close: 10,
                                                marker: 'marker 1',
                                            },
                                            {
                                                shadowH: 50,
                                                shadowL: 5,
                                                open: 15,
                                                close: 25,
                                            },
                                        ],
                                        label: 'Company A',

                                        config: {
                                            drawValues: false,
                                            axisDependency: 'RIGHT',
                                            highlightColor: processColor('darkgray'),

                                            shadowColor: processColor('black'),
                                            shadowWidth: 1,
                                            shadowColorSameAsCandle: true,
                                            increasingColor: processColor('yellow'),
                                            increasingPaintStyle: 'FILL',
                                            decreasingColor: processColor('green'),
                                        },
                                    },
                                ],
                            },
                            scatterData: {
                                dataSets: [
                                    {
                                        values: [15, 40, 77, 81, 43],
                                        label: 'Company A',

                                        config: {
                                            colors: [processColor('purple')],
                                            drawValues: false,
                                            scatterShape: 'SQUARE',
                                        },
                                    },
                                    {
                                        values: [40, 5, 50, 23, 79],
                                        label: 'Company B',

                                        config: {
                                            drawValues: false,
                                            colors: [processColor('grey')],
                                            scatterShape: 'CIRCLE',
                                        },
                                    },
                                    {
                                        values: [10, 55, 35, 90, 82],
                                        label: 'Company C',

                                        config: {
                                            drawValues: false,
                                            axisDependency: 'RIGHT',
                                            colors: [processColor('brown')],
                                            scatterShape: 'TRIANGLE',
                                        },
                                    },
                                ],
                            },
                        }}
                        xAxis={{
                            valueFormatter: ['1990', '1991', '1992', '1993', '1994'],
                            granularityEnabled: true,
                            granularity: 1,
                        }}
                        yAxis={{
                            left: {
                                granularityEnabled: true,
                                granularity: 10,
                            },
                            right: {
                                granularityEnabled: true,
                                granularity: 100,
                            },
                        }}
                        onSelect={this.handleSelect.bind(this)}
                        onChange={event => console.log(event.nativeEvent)}
                        marker={{
                            enabled: true,
                            markerColor: processColor('#F0C0FF8C'),
                            textColor: processColor('white'),
                            textSize: 14,
                        }}
                        highlights={[
                            { x: 1, y: 150, dataIndex: 4 },
                            { x: 2, y: 106, dataIndex: 4 },
                        ]}
                        highlightFullBarEnabled={false}
                        drawOrder={['SCATTER', 'LINE', 'BAR']}
                        style={styles.container}
                    />
                </View>
            </View>
        );
    }
}

class PieChartScreen extends React.Component {
    handleSelect(event: ChartSelectEvent) {
        console.log(event.nativeEvent);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <PieChart
                        style={styles.chart}
                        logEnabled={true}
                        chartBackgroundColor={processColor('pink')}
                        chartDescription={{
                            text: 'This is Pie chart description',
                            textSize: 15,
                            textColor: processColor('darkgray'),
                        }}
                        data={{
                            dataSets: [
                                {
                                    values: [
                                        { value: 45, label: 'Sandwiches' },
                                        { value: 21, label: 'Salads' },
                                        { value: 15, label: 'Soup' },
                                        { value: 9, label: 'Beverages' },
                                        { value: 15, label: 'Desserts' },
                                    ],
                                    label: 'Pie dataset',
                                    config: {
                                        colors: [
                                            processColor('#C0FF8C'),
                                            processColor('#FFF78C'),
                                            processColor('#FFD08C'),
                                            processColor('#8CEAFF'),
                                            processColor('#FF8C9D'),
                                        ],
                                        valueTextSize: 20,
                                        valueTextColor: processColor('green'),
                                        sliceSpace: 5,
                                        selectionShift: 13,
                                        xValuePosition: 'OUTSIDE_SLICE',
                                        yValuePosition: 'OUTSIDE_SLICE',
                                        valueFormatter: "#.#'%'",
                                        valueLineColor: processColor('green'),
                                        valueLinePart1Length: 0.5,
                                    },
                                },
                            ],
                        }}
                        legend={{
                            enabled: true,
                            textSize: 15,
                            form: 'CIRCLE',

                            horizontalAlignment: 'RIGHT',
                            verticalAlignment: 'CENTER',
                            orientation: 'VERTICAL',
                            wordWrapEnabled: true,
                        }}
                        highlights={[{ x: 2 }]}
                        entryLabelColor={processColor('green')}
                        entryLabelTextSize={20}
                        drawEntryLabels={true}
                        rotationEnabled={true}
                        rotationAngle={45}
                        usePercentValues={true}
                        styledCenterText={{ text: 'Pie center text!', color: processColor('pink'), size: 20 }}
                        centerTextRadiusPercent={100}
                        holeRadius={40}
                        holeColor={processColor('#f0f0f0')}
                        transparentCircleRadius={45}
                        transparentCircleColor={processColor('#f0f0f088')}
                        maxAngle={350}
                        onSelect={this.handleSelect.bind(this)}
                        onChange={event => console.log(event.nativeEvent)}
                    />
                </View>
            </View>
        );
    }
}
