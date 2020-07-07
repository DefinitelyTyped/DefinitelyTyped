import * as React from 'react';
import { AreaChart, BarChart, Legend, LineChart, PieChart, ScatterplotChart } from 'react-easy-chart';

class BarChartData extends React.Component {
    render(): any {
        return (
            <BarChart
                data={[
                    { x: 'A', y: 20 },
                    { x: 'B', y: 30 },
                    { x: 'C', y: 40 },
                    { x: 'D', y: 20 },
                    { x: 'E', y: 40 },
                    { x: 'F', y: 25 },
                    { x: 'G', y: 5 }
                ]}
                />
        );
    }
}

class BarChartHeightAndWidth extends React.Component {
    render(): any {
        return (
            <BarChart
                height={150}
                width={350}
                data={[
                    {
                        x: 'A',
                        y: 46
                    },
                    {
                        x: 'B',
                        y: 26
                    }
                ]}
                />
        );
    }
}

class BarChartColorBars extends React.Component {
    render(): any {
        return (
            <BarChart
                colorBars
                height={150}
                width={650}
                data={[
                    {
                        x: 'A',
                        y: 46
                    },
                    {
                        x: 'B',
                        y: 26
                    }
                ]}
                />
        );
    }
}

class BarChartMargin extends React.Component {
    render(): any {
        return (
            <BarChart
                colorBars
                height={150}
                width={650}
                data={[]}
                margin={{ top: 0, right: 0, bottom: 30, left: 100 }}
                />
        );
    }
}

class BarChartOverridingBarColors extends React.Component {
    render(): any {
        return (
            <BarChart
                data={[
                    { x: 'A', y: 20 },
                    { x: 'B', y: 30, color: '#f00' },
                    { x: 'C', y: 40 },
                    { x: 'D', y: 20 },
                    { x: 'E', y: 40 },
                    { x: 'F', y: 25 },
                    { x: 'G', y: 5, color: 'orange' }
                ]}
                />
        );
    }
}

class BarChartAxes extends React.Component {
    render(): any {
        return (
            <BarChart
                axes
                height={250}
                width={650}
                data={[
                    {
                        x: 'A',
                        y: 46
                    },
                    {
                        x: 'B',
                        y: 26
                    }
                ]}
                />
        );
    }
}

class BarChartAxesLabels extends React.Component {
    render(): any {
        return (
            <BarChart
                axisLabels={{ x: 'My x Axis', y: 'My y Axis' }}
                axes
                data={[
                    {
                        x: 'A',
                        y: 46
                    },
                    {
                        x: 'B',
                        y: 26
                    }
                ]}
                />
        );
    }
}

class BarChartYAxisOrientation extends React.Component {
    render(): any {
        return (
            <BarChart
                axes
                axisLabels={{ x: 'My x Axis', y: 'My y Axis' }}
                yAxisOrientRight
                height={250}
                width={650}
                data={[
                    {
                        x: 'A',
                        y: 46
                    },
                    {
                        x: 'B',
                        y: 26
                    }
                ]}
                />
        );
    }
}

class BarChartYAxesType extends React.Component {
    render(): any {
        return (
            <BarChart
                axisLabels={{ x: 'My x Axis', y: 'My y Axis' }}
                axes
                height={250}
                width={650}
                xType={'linear'}
                data={[
                    { x: 10, y: 20 },
                    { x: 12, y: 20 },
                    { x: 30, y: 30, color: '#f00' },
                    { x: 40, y: 40 }
                ]}
                />
        );
    }
}

class BarChartYAxesType2 extends React.Component {
    render(): any {
        return (
            <BarChart
                axisLabels={{ x: 'My x Axis', y: 'My y Axis' }}
                axes
                height={250}
                width={650}
                colorBars
                xType={'time'}
                data={[
                    { x: '1-Jan-15', y: 20 },
                    { x: '2-Jan-15', y: 10 },
                    { x: '3-Jan-15', y: 33 }
                ]}
                />
        );
    }
}

class BarChartDatePattern extends React.Component {
    render(): any {
        return (
            <BarChart
                axisLabels={{ x: 'My x Axis', y: 'My y Axis' }}
                axes
                height={250}
                width={650}
                datePattern="%d-%b-%y %H:%M"
                colorBars
                xType={'time'}
                data={[
                    { x: '1-Jan-15 13:00', y: 20 },
                    { x: '1-Jan-15 14:00', y: 10 },
                    { x: '1-Jan-15 15:00', y: 33 }
                ]}
                />
        );
    }
}

class BarChartBarWidth extends React.Component {
    render(): any {
        return (
            <BarChart
                axisLabels={{ x: 'My x Axis', y: 'My y Axis' }}
                axes
                height={250}
                width={650}
                margin={{ top: 50, right: 100, bottom: 50, left: 100 }}
                colorBars
                barWidth={40}
                xType={'time'}
                data={[
                    { x: '1-Jan-15', y: 20 },
                    { x: '2-Jan-15', y: 10 },
                    { x: '3-Jan-15', y: 33 }
                ]}
                />
        );
    }
}

class BarChartDomainRange extends React.Component {
    render(): any {
        return (
            <BarChart
                axisLabels={{ x: 'My x Axis', y: 'My y Axis' }}
                axes
                colorBars
                height={250}
                width={650}
                barWidth={20}
                xType={'time'}
                xDomainRange={['5-Jan-15', '18-Jan-15']}
                yDomainRange={[5, 50]}
                data={[
                    { x: '10-Jan-15', y: 20 },
                    { x: '12-Jan-15', y: 10 },
                    { x: '15-Jan-15', y: 33 }
                ]}
                />
        );
    }
}

class BarChartTickDisplayFormat extends React.Component {
    render(): any {
        return (
            <BarChart
                axisLabels={{ x: 'My x Axis', y: 'My y Axis' }}
                axes
                colorBars
                height={250}
                width={650}
                barWidth={20}
                xType={'time'}
                tickTimeDisplayFormat={'%a'}
                xDomainRange={['1-Jan-15', '20-Jan-15']}
                data={[
                    { x: '10-Jan-15', y: 20 },
                    { x: '12-Jan-15', y: 10 },
                    { x: '15-Jan-15', y: 33 }
                ]}
                />
        );
    }
}

class BarChartNumberOfTicks extends React.Component {
    render(): any {
        return (
            <BarChart
                axisLabels={{ x: 'My x Axis', y: 'My y Axis' }}
                axes
                colorBars
                height={250}
                width={650}
                barWidth={20}
                xTickNumber={5}
                yTickNumber={3}
                xType={'time'}
                xDomainRange={['1-Jan-15', '20-Jan-15']}
                data={[
                    { x: '10-Jan-15', y: 20 },
                    { x: '12-Jan-15', y: 10 },
                    { x: '15-Jan-15', y: 33 }
                ]}
                />
        );
    }
}

class BarChartGrid extends React.Component {
    render(): any {
        return (
            <BarChart
                axisLabels={{ x: 'My x Axis', y: 'My y Axis' }}
                axes
                grid
                colorBars
                height={250}
                width={650}
                data={[
                    {
                        x: 'A',
                        y: 46
                    },
                    {
                        x: 'B',
                        y: 26
                    }
                ]}
                />
        );
    }
}

class BarChartBarAndLine extends React.Component {
    render(): any {
        return (
            <BarChart
                axisLabels={{ x: 'My x Axis', y: 'My y Axis', y2: 'My second y Axis' }}
                axes
                grid
                colorBars
                height={450}
                width={650}
                interpolate={'cardinal'}
                y2Type="linear"
                lineData={[
                    {
                        x: 'A',
                        y: 1000
                    },
                    {
                        x: 'B',
                        y: 2000
                    }
                ]}
                data={[
                    {
                        x: 'A',
                        y: 46
                    },
                    {
                        x: 'B',
                        y: 26
                    }
                ]}
                />
        );
    }
}

class BarChartMouseHandlers extends React.Component {
    mouseOverHandler(d: any, e: any) {
    }

    mouseMoveHandler(e: any) {
    }

    mouseOutHandler() {
    }

    render(): any {
        return (
            <BarChart
                axisLabels={{ x: 'My x Axis', y: 'My y Axis' }}
                axes
                grid
                colorBars
                height={250}
                width={650}
                data={[
                    {
                        x: 'A',
                        y: 46
                    },
                    {
                        x: 'B',
                        y: 26
                    }
                ]}
                clickHandler={(d) => this.setState({ dataDisplay: `The value on the ${d.x} is ${d.y}` })}
                mouseOverHandler={this.mouseOverHandler}
                mouseOutHandler={this.mouseOutHandler}
                mouseMoveHandler={this.mouseMoveHandler}
                yDomainRange={[0, 100]}
                />
        );
    }
}


class PieChartData extends React.Component {
    render(): any {
        return (
            <PieChart
                data={[
                    { key: 'A', value: 100 },
                    { key: 'B', value: 200 },
                    { key: 'C', value: 50 }
                ]}
                />
        );
    }
}

class PieChartColor extends React.Component {
    render(): any {
        return (

            <PieChart
                data={[
                    { key: 'A', value: 100, color: '#aaac84' },
                    { key: 'B', value: 200, color: '#dce7c5' },
                    { key: 'C', value: 50, color: '#e3a51a' }
                ]}
                />
        );
    }
}

class PieChartSize extends React.Component {
    render(): any {
        return (
            <PieChart
                size={100}
                data={[
                    { key: 'A', value: 100, color: '#aaac84' },
                    { key: 'B', value: 200, color: '#dce7c5' },
                    { key: 'C', value: 50, color: '#e3a51a' }
                ]}
                />
        );
    }
}

class PieChartDonut extends React.Component {
    render(): any {
        return (
            <PieChart
                size={400}
                innerHoleSize={200}
                data={[
                    { key: 'A', value: 100, color: '#aaac84' },
                    { key: 'B', value: 200, color: '#dce7c5' },
                    { key: 'C', value: 50, color: '#e3a51a' }
                ]}
                />
        );
    }
}

class PieChartPadding extends React.Component {
    render(): any {
        return (
            <PieChart
                padding={50}
                data={[
                    { key: 'A', value: 100, color: '#aaac84' },
                    { key: 'B', value: 200, color: '#dce7c5' },
                    { key: 'C', value: 50, color: '#e3a51a' }
                ]}
                />
        );
    }
}

class PieChartLabels extends React.Component {
    render(): any {
        return (
            <PieChart
                labels
                data={[
                    { key: 'A', value: 100, color: '#aaac84' },
                    { key: 'B', value: 200, color: '#dce7c5' },
                    { key: 'C', value: 50, color: '#e3a51a' }
                ]}
                styles={{
                    '<div className="cha"></div>rt_text': {
                        fontSize: '1em',
                        fill: '#fff'
                    }
                }}
                />
        );
    }
}

class PieChartStyle extends React.Component {
    render(): any {
        return (
            <PieChart
                labels
                styles={{
                    '.chart_lines': {
                        strokeWidth: 0
                    },
                    '.chart_text': {
                        fontFamily: 'serif',
                        fontSize: '1.25em',
                        fill: '#333'
                    }
                }}
                data={[
                    { key: 'A', value: 100, color: '#aaac84' },
                    { key: 'B', value: 200, color: '#dce7c5' },
                    { key: 'C', value: 50, color: '#e3a51a' }
                ]}
                />
        );
    }
}

class PieChartMouseHandlers extends React.Component {
    mouseOverHandler(d: any, e: any) { }
    mouseMoveHandler(e: any) { }
    mouseOutHandler() { }
    render(): any {
        return (
            <PieChart
                data={[
                    { key: 'A', value: 100, color: '#aaac84' },
                    { key: 'B', value: 200, color: '#dce7c5' },
                    { key: 'C', value: 50, color: '#e3a51a' }
                ]}
                innerHoleSize={200}
                clickHandler={(d) => this.setState({})}
                mouseOverHandler={this.mouseOverHandler}
                mouseOutHandler={this.mouseOutHandler.bind(this)}
                mouseMoveHandler={this.mouseMoveHandler.bind(this)}
                padding={10}
                />
        );
    }
}


class LineChartData extends React.Component {
    render(): any {
        return (
            <LineChart
                data={[
                    [
                        { x: 1, y: 20 },
                        { x: 2, y: 10 },
                        { x: 3, y: 25 }
                    ]
                ]}
                />
        );
    }
}

class LineChartData2 extends React.Component {
    render(): any {
        return (
            <LineChart
                data={[
                    [
                        { x: 1, y: 20 },
                        { x: 2, y: 10 },
                        { x: 3, y: 25 }
                    ], [
                        { x: 1, y: 10 },
                        { x: 2, y: 12 },
                        { x: 3, y: 4 }
                    ]
                ]}
                />
        );
    }
}

class LineChartHeightAndWidth extends React.Component {
    render(): any {
        return (
            <LineChart
                width={50}
                height={50}
                data={[
                    [
                        { x: 1, y: 20 },
                        { x: 2, y: 10 },
                        { x: 3, y: 25 }
                    ], [
                        { x: 1, y: 10 },
                        { x: 2, y: 12 },
                        { x: 3, y: 4 }
                    ]
                ]}
                />
        );
    }
}

class LineChartMargin extends React.Component {
    render(): any {
        return (
            <LineChart
                margin={{ top: 0, right: 0, bottom: 30, left: 100 }}
                width={250}
                height={250}
                data={[
                    [
                        { x: 1, y: 20 },
                        { x: 2, y: 10 },
                        { x: 3, y: 25 }
                    ], [
                        { x: 1, y: 10 },
                        { x: 2, y: 12 },
                        { x: 3, y: 4 }
                    ]
                ]}
                />
        );
    }
}

class LineChartAxes extends React.Component {
    render(): any {
        return (
            <LineChart
                axes
                width={250}
                height={250}
                data={[
                    [
                        { x: 1, y: 20 },
                        { x: 2, y: 10 },
                        { x: 3, y: 25 }
                    ], [
                        { x: 1, y: 10 },
                        { x: 2, y: 12 },
                        { x: 3, y: 4 }
                    ]
                ]}
                />
        );
    }
}

class LineChartAxesLabels extends React.Component {
    render(): any {
        return (
            <LineChart
                axes
                margin={{ top: 10, right: 10, bottom: 50, left: 50 }}
                axisLabels={{ x: 'My x Axis', y: 'My y Axis' }}
                width={250}
                height={250}
                data={[
                    [
                        { x: 1, y: 20 },
                        { x: 2, y: 10 },
                        { x: 3, y: 25 }
                    ], [
                        { x: 1, y: 10 },
                        { x: 2, y: 12 },
                        { x: 3, y: 4 }
                    ]
                ]}
                />
        );
    }
}

class LineChartYAxisOrientation extends React.Component {
    render(): any {
        return (
            <LineChart
                axes
                axisLabels={{ x: 'My x Axis', y: 'My y Axis' }}
                yAxisOrientRight
                width={450}
                height={250}
                data={[
                    [
                        { x: 1, y: 20 },
                        { x: 2, y: 10 },
                        { x: 3, y: 25 }
                    ], [
                        { x: 1, y: 10 },
                        { x: 2, y: 12 },
                        { x: 3, y: 4 }
                    ]
                ]}
                />
        );
    }
}

class LineChartInterpolate extends React.Component {
    render(): any {
        return (
            <LineChart
                axes
                margin={{ top: 10, right: 10, bottom: 50, left: 50 }}
                axisLabels={{ x: 'My x Axis', y: 'My y Axis' }}
                width={250}
                interpolate={'cardinal'}
                height={250}
                data={[
                    [
                        { x: 1, y: 20 },
                        { x: 2, y: 10 },
                        { x: 3, y: 25 }
                    ], [
                        { x: 1, y: 10 },
                        { x: 2, y: 12 },
                        { x: 3, y: 4 }
                    ]
                ]}
                />
        );
    }
}

class LineChartXType extends React.Component {
    render(): any {
        return (
            <LineChart
                xType={'text'}
                axes
                width={350}
                height={250}
                interpolate={'cardinal'}
                data={[
                    [
                        { x: 'Mon', y: 20 },
                        { x: 'Tue', y: 10 },
                        { x: 'Wed', y: 33 },
                        { x: 'Thu', y: 45 },
                        { x: 'Fri', y: 15 }
                    ], [
                        { x: 'Mon', y: 10 },
                        { x: 'Tue', y: 15 },
                        { x: 'Wed', y: 13 },
                        { x: 'Thu', y: 15 },
                        { x: 'Fri', y: 10 }
                    ]
                ]}
                />
        );
    }
}

class LineChartXTypeTime extends React.Component {
    render(): any {
        return (
            <LineChart
                xType={'time'}
                axes
                interpolate={'cardinal'}
                width={750}
                height={250}
                data={[
                    [
                        { x: '1-Jan-15', y: 20 },
                        { x: '1-Feb-15', y: 10 },
                        { x: '1-Mar-15', y: 33 },
                        { x: '1-Apr-15', y: 45 },
                        { x: '1-May-15', y: 15 }
                    ], [
                        { x: '1-Jan-15', y: 10 },
                        { x: '1-Feb-15', y: 15 },
                        { x: '1-Mar-15', y: 13 },
                        { x: '1-Apr-15', y: 15 },
                        { x: '1-May-15', y: 10 }
                    ]
                ]}
                />
        );
    }
}

class LineChartYTypeText extends React.Component {
    render(): any {
        return (
            <LineChart
                yType={'text'}
                xType={'text'}
                axes
                margin={{ top: 0, right: 0, bottom: 100, left: 100 }}
                yDomainRange={['Allot', 'Middle', 'Less']}
                interpolate={'cardinal'}
                width={350}
                height={250}
                data={[
                    [
                        { x: 'Mon', y: 'Little' },
                        { x: 'Tue', y: 'Perfect' },
                        { x: 'Wed', y: 'Allot' },
                        { x: 'Thu', y: 'Little' },
                        { x: 'Fri', y: 'Perfect' }
                    ]
                ]}
                />
        );
    }
}

class LineChartYTypeTime extends React.Component {
    render(): any {
        return (
            <LineChart
                axisLabels={{ x: 'Total Revenue', y: 'January' }}
                margin={{ top: 10, right: 30, bottom: 50, left: 70 }}
                yType={'time'}
                axes
                width={500}
                height={500}
                data={[
                    [
                        { x: 10, y: '1-Jan-15' },
                        { x: 20, y: '10-Jan-15' },
                        { x: 40, y: '21-Jan-15' },
                        { x: 80, y: '31-Jan-15' }
                    ], [
                        { x: 0, y: '1-Jan-15' },
                        { x: 15, y: '10-Jan-15' },
                        { x: 20, y: '21-Jan-15' },
                        { x: 25, y: '31-Jan-15' }
                    ]
                ]}
                />
        );
    }
}

class LineChartGrid extends React.Component {
    render(): any {
        return (
            <LineChart
                axisLabels={{ x: 'Total Revenue', y: 'January' }}
                margin={{ top: 10, right: 30, bottom: 50, left: 70 }}
                yType={'time'}
                axes
                grid
                width={500}
                height={500}
                data={[
                    [
                        { x: 10, y: '1-Jan-15' },
                        { x: 20, y: '10-Jan-15' },
                        { x: 40, y: '21-Jan-15' },
                        { x: 80, y: '31-Jan-15' }
                    ], [
                        { x: 0, y: '1-Jan-15' },
                        { x: 15, y: '10-Jan-15' },
                        { x: 20, y: '21-Jan-15' },
                        { x: 25, y: '31-Jan-15' }
                    ]
                ]}
                />
        );
    }
}

class LineChartVerticalGrid extends React.Component {
    render(): any {
        return (
            <LineChart
                xType={'time'}
                axes
                grid
                verticalGrid
                interpolate={'cardinal'}
                width={750}
                height={250}
                data={[
                    [
                        { x: '1-Jan-15', y: 20 },
                        { x: '1-Feb-15', y: 10 },
                        { x: '1-Mar-15', y: 33 },
                        { x: '1-Apr-15', y: 45 },
                        { x: '1-May-15', y: 15 }
                    ], [
                        { x: '1-Jan-15', y: 10 },
                        { x: '1-Feb-15', y: 15 },
                        { x: '1-Mar-15', y: 13 },
                        { x: '1-Apr-15', y: 15 },
                        { x: '1-May-15', y: 10 }
                    ]
                ]}
                />
        );
    }
}

class LineChartDomainRange extends React.Component {
    render(): any {
        return (
            <LineChart
                axes
                xDomainRange={[0, 100]}
                yDomainRange={[0, 100]}
                margin={{ top: 0, right: 0, bottom: 100, left: 100 }}
                width={250}
                height={250}
                interpolate={'cardinal'}
                data={[
                    [
                        { x: 10, y: 25 },
                        { x: 20, y: 10 },
                        { x: 30, y: 25 },
                        { x: 40, y: 10 },
                        { x: 50, y: 12 },
                        { x: 60, y: 25 }
                    ], [
                        { x: 10, y: 40 },
                        { x: 20, y: 30 },
                        { x: 30, y: 25 },
                        { x: 40, y: 60 },
                        { x: 50, y: 22 },
                        { x: 60, y: 9 }
                    ]
                ]}
                />
        );
    }
}

class LineChartTickDisplayFormat extends React.Component {
    render(): any {
        return (
            <LineChart
                axisLabels={{ x: 'Total Revenue', y: 'January' }}
                margin={{ top: 10, right: 30, bottom: 50, left: 70 }}
                yType={'time'}
                axes
                interpolate={'cardinal'}
                tickTimeDisplayFormat={'%a'}
                width={500}
                height={500}
                data={[
                    [
                        { x: 10, y: '1-Jan-15' },
                        { x: 20, y: '10-Jan-15' },
                        { x: 40, y: '21-Jan-15' },
                        { x: 80, y: '31-Jan-15' }
                    ], [
                        { x: 0, y: '1-Jan-15' },
                        { x: 15, y: '10-Jan-15' },
                        { x: 20, y: '21-Jan-15' },
                        { x: 25, y: '31-Jan-15' }
                    ]
                ]}
                />
        );
    }
}

class LineChartNumberOfTicks extends React.Component {
    render(): any {
        return (
            <LineChart
                axes
                xTicks={5}
                yTicks={5}
                xDomainRange={[0, 100]}
                yDomainRange={[0, 100]}
                width={500}
                height={250}
                interpolate={'cardinal'}
                data={[
                    [
                        { x: 10, y: 25 },
                        { x: 20, y: 10 },
                        { x: 30, y: 25 },
                        { x: 40, y: 10 },
                        { x: 50, y: 12 },
                        { x: 60, y: 25 }
                    ], [
                        { x: 10, y: 40 },
                        { x: 20, y: 30 },
                        { x: 30, y: 25 },
                        { x: 40, y: 60 },
                        { x: 50, y: 22 },
                        { x: 60, y: 9 }
                    ]
                ]}
                />
        );
    }
}

class LineChartLineColors extends React.Component {
    render(): any {
        return (
            <LineChart
                xType={'time'}
                axes
                grid
                verticalGrid
                interpolate={'cardinal'}
                lineColors={['pink', 'cyan']}
                width={750}
                height={250}
                data={[
                    [
                        { x: '1-Jan-15', y: 20 },
                        { x: '1-Feb-15', y: 10 },
                        { x: '1-Mar-15', y: 33 },
                        { x: '1-Apr-15', y: 45 },
                        { x: '1-May-15', y: 15 }
                    ], [
                        { x: '1-Jan-15', y: 10 },
                        { x: '1-Feb-15', y: 15 },
                        { x: '1-Mar-15', y: 13 },
                        { x: '1-Apr-15', y: 15 },
                        { x: '1-May-15', y: 10 }
                    ]
                ]}
                />
        );
    }
}

class LineChartDataPoints extends React.Component {
    render(): any {
        return (
            <LineChart
                axes
                dataPoints
                xDomainRange={[0, 100]}
                yDomainRange={[0, 100]}
                width={500}
                height={250}
                interpolate={'cardinal'}
                data={[
                    [
                        { x: 10, y: 25 },
                        { x: 20, y: 10 },
                        { x: 30, y: 25 },
                        { x: 40, y: 10 },
                        { x: 50, y: 12 },
                        { x: 60, y: 25 }
                    ], [
                        { x: 10, y: 40 },
                        { x: 20, y: 30 },
                        { x: 30, y: 25 },
                        { x: 40, y: 60 },
                        { x: 50, y: 22 },
                        { x: 60, y: 9 }
                    ]
                ]}
                />
        );
    }
}

class LineChartMouseEvents extends React.Component {
    mouseOverHandler(d: any, e: any) { }
    mouseMoveHandler(e: any) { }
    mouseOutHandler() { }
    render(): any {
        return (
            <LineChart
                axes
                dataPoints
                grid
                xDomainRange={[0, 100]}
                yDomainRange={[0, 100]}
                clickHandler={() => { } }
                mouseOverHandler={this.mouseOverHandler}
                mouseOutHandler={this.mouseOutHandler}
                mouseMoveHandler={this.mouseMoveHandler}
                width={700}
                height={350}
                interpolate={'cardinal'}
                data={[
                    [
                        { x: 10, y: 25 },
                        { x: 20, y: 10 },
                        { x: 30, y: 25 },
                        { x: 40, y: 10 },
                        { x: 50, y: 12 },
                        { x: 60, y: 25 }
                    ], [
                        { x: 10, y: 40 },
                        { x: 20, y: 30 },
                        { x: 30, y: 25 },
                        { x: 40, y: 60 },
                        { x: 50, y: 22 },
                        { x: 60, y: 9 }
                    ]
                ]}
                />
        );
    }
}


class AreaChartData extends React.Component {
    render(): any {
        return (
            <AreaChart
                data={[
                    [
                        { x: 1, y: 20 },
                        { x: 2, y: 10 },
                        { x: 3, y: 25 }
                    ]
                ]}
                />
        );
    }
}

class AreaChartData2 extends React.Component {
    render(): any {
        return (
            <AreaChart
                data={[
                    [
                        { x: 1, y: 20 },
                        { x: 2, y: 10 },
                        { x: 3, y: 25 }
                    ], [
                        { x: 1, y: 10 },
                        { x: 2, y: 12 },
                        { x: 3, y: 4 }
                    ]
                ]}
                />
        );
    }
}

class AreaChartHeightAndWidth extends React.Component {
    render(): any {
        return (
            <AreaChart
                width={50}
                height={50}
                data={[
                    [
                        { x: 1, y: 20 },
                        { x: 2, y: 10 },
                        { x: 3, y: 25 }
                    ], [
                        { x: 1, y: 10 },
                        { x: 2, y: 12 },
                        { x: 3, y: 4 }
                    ]
                ]}
                />
        );
    }
}

class AreaChartMargin extends React.Component {
    render(): any {
        return (
            <AreaChart
                margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
                width={250}
                height={250}
                data={[
                    [
                        { x: 1, y: 20 },
                        { x: 2, y: 10 },
                        { x: 3, y: 25 }
                    ], [
                        { x: 1, y: 10 },
                        { x: 2, y: 12 },
                        { x: 3, y: 4 }
                    ]
                ]}
                />
        );
    }
}

class AreaChartAxes extends React.Component {
    render(): any {
        return (
            <AreaChart
                axes
                width={250}
                height={250}
                data={[
                    [
                        { x: 1, y: 20 },
                        { x: 2, y: 10 },
                        { x: 3, y: 25 }
                    ], [
                        { x: 1, y: 10 },
                        { x: 2, y: 12 },
                        { x: 3, y: 4 }
                    ]
                ]}
                />
        );
    }
}

class AreaChartAxesLabels extends React.Component {
    render(): any {
        return (
            <AreaChart
                axes
                margin={{ top: 10, right: 10, bottom: 50, left: 50 }}
                axisLabels={{ x: 'My x Axis', y: 'My y Axis' }}
                width={250}
                height={250}
                data={[
                    [
                        { x: 1, y: 20 },
                        { x: 2, y: 10 },
                        { x: 3, y: 25 }
                    ], [
                        { x: 1, y: 10 },
                        { x: 2, y: 12 },
                        { x: 3, y: 4 }
                    ]
                ]}
                />
        );
    }
}

class AreaChartYAxisOrientation extends React.Component {
    render(): any {
        return (
            <AreaChart
                axes
                axisLabels={{ x: 'My x Axis', y: 'My y Axis' }}
                yAxisOrientRight
                width={450}
                height={250}
                data={[
                    [
                        { x: 1, y: 20 },
                        { x: 2, y: 10 },
                        { x: 3, y: 25 }
                    ], [
                        { x: 1, y: 10 },
                        { x: 2, y: 12 },
                        { x: 3, y: 4 }
                    ]
                ]}
                />
        );
    }
}

class AreaChartInterpolate extends React.Component {
    render(): any {
        return (
            <AreaChart
                axes
                margin={{ top: 10, right: 10, bottom: 50, left: 50 }}
                axisLabels={{ x: 'My x Axis', y: 'My y Axis' }}
                width={250}
                interpolate={'cardinal'}
                height={250}
                data={[
                    [
                        { x: 1, y: 20 },
                        { x: 2, y: 10 },
                        { x: 3, y: 25 }
                    ], [
                        { x: 1, y: 10 },
                        { x: 2, y: 12 },
                        { x: 3, y: 4 }
                    ]
                ]}
                />
        );
    }
}

class AreaChartAxisType extends React.Component {
    render(): any {
        return (
            <AreaChart
                xType={'text'}
                axes
                width={350}
                height={250}
                interpolate={'cardinal'}
                data={[
                    [
                        { x: 'Mon', y: 20 },
                        { x: 'Tue', y: 10 },
                        { x: 'Wed', y: 33 },
                        { x: 'Thu', y: 45 },
                        { x: 'Fri', y: 15 }
                    ], [
                        { x: 'Mon', y: 10 },
                        { x: 'Tue', y: 15 },
                        { x: 'Wed', y: 13 },
                        { x: 'Thu', y: 15 },
                        { x: 'Fri', y: 10 }
                    ]
                ]}
                />
        );
    }
}

class AreaChartAxisTypeXTime extends React.Component {
    render(): any {
        return (
            <AreaChart
                xType={'time'}
                axes
                interpolate={'cardinal'}
                width={750}
                height={250}
                data={[
                    [
                        { x: '1-Jan-15', y: 20 },
                        { x: '1-Feb-15', y: 10 },
                        { x: '1-Mar-15', y: 33 },
                        { x: '1-Apr-15', y: 45 },
                        { x: '1-May-15', y: 15 }
                    ], [
                        { x: '1-Jan-15', y: 10 },
                        { x: '1-Feb-15', y: 15 },
                        { x: '1-Mar-15', y: 13 },
                        { x: '1-Apr-15', y: 15 },
                        { x: '1-May-15', y: 10 }
                    ]
                ]}
                />
        );
    }
}

class AreaChartYTypeText extends React.Component {
    render(): any {
        return (
            <AreaChart
                yType={'text'}
                xType={'text'}
                axes
                margin={{ top: 0, right: 0, bottom: 100, left: 100 }}
                yDomainRange={['Allot', 'Middle', 'Less']}
                interpolate={'cardinal'}
                width={350}
                height={250}
                data={[
                    [
                        { x: 'Mon', y: 'Little' },
                        { x: 'Tue', y: 'Perfect' },
                        { x: 'Wed', y: 'Allot' },
                        { x: 'Thu', y: 'Little' },
                        { x: 'Fri', y: 'Perfect' }
                    ]
                ]}
                />
        );
    }
}

class AreaChartGrid extends React.Component {
    render(): any {
        return (
            <AreaChart
                xType={'time'}
                axes
                grid
                interpolate={'cardinal'}
                width={750}
                height={250}
                data={[
                    [
                        { x: '1-Jan-15', y: 20 },
                        { x: '1-Feb-15', y: 10 },
                        { x: '1-Mar-15', y: 33 },
                        { x: '1-Apr-15', y: 45 },
                        { x: '1-May-15', y: 15 }
                    ], [
                        { x: '1-Jan-15', y: 10 },
                        { x: '1-Feb-15', y: 15 },
                        { x: '1-Mar-15', y: 13 },
                        { x: '1-Apr-15', y: 15 },
                        { x: '1-May-15', y: 10 }
                    ]
                ]}
                />
        );
    }
}

class AreaChartVerticalGrid extends React.Component {
    render(): any {
        return (
            <AreaChart
                xType={'time'}
                axes
                grid
                verticalGrid
                interpolate={'cardinal'}
                width={750}
                height={250}
                data={[
                    [
                        { x: '1-Jan-15', y: 20 },
                        { x: '1-Feb-15', y: 10 },
                        { x: '1-Mar-15', y: 33 },
                        { x: '1-Apr-15', y: 45 },
                        { x: '1-May-15', y: 15 }
                    ], [
                        { x: '1-Jan-15', y: 10 },
                        { x: '1-Feb-15', y: 15 },
                        { x: '1-Mar-15', y: 13 },
                        { x: '1-Apr-15', y: 15 },
                        { x: '1-May-15', y: 10 }
                    ]
                ]}
                />
        );
    }
}

class AreaChartDomainRange extends React.Component {
    render(): any {
        return (
            <AreaChart
                axes
                xDomainRange={[0, 100]}
                yDomainRange={[0, 100]}
                margin={{ top: 0, right: 0, bottom: 100, left: 100 }}
                width={750}
                height={250}
                interpolate={'cardinal'}
                data={[
                    [
                        { x: 10, y: 25 },
                        { x: 20, y: 10 },
                        { x: 30, y: 25 },
                        { x: 40, y: 10 },
                        { x: 50, y: 12 },
                        { x: 60, y: 25 }
                    ], [
                        { x: 10, y: 40 },
                        { x: 20, y: 30 },
                        { x: 30, y: 25 },
                        { x: 40, y: 60 },
                        { x: 50, y: 22 },
                        { x: 60, y: 9 }
                    ]
                ]}
                />
        );
    }
}

class AreaChartTickDisplayFormat extends React.Component {
    render(): any {
        return (
            <AreaChart
                xType={'time'}
                axes
                grid
                tickTimeDisplayFormat={'%d %m'}
                interpolate={'cardinal'}
                width={750}
                height={250}
                data={[
                    [
                        { x: '1-Jan-15', y: 20 },
                        { x: '1-Feb-15', y: 10 },
                        { x: '1-Mar-15', y: 33 },
                        { x: '1-Apr-15', y: 45 },
                        { x: '1-May-15', y: 15 }
                    ], [
                        { x: '1-Jan-15', y: 10 },
                        { x: '1-Feb-15', y: 15 },
                        { x: '1-Mar-15', y: 13 },
                        { x: '1-Apr-15', y: 15 },
                        { x: '1-May-15', y: 10 }
                    ]
                ]}
                />
        );
    }
}

class AreaChartTickNumbers extends React.Component {
    render(): any {
        return (
            <AreaChart
                xType={'time'}
                axes
                xTicks={5}
                yTicks={3}
                grid
                tickTimeDisplayFormat={'%d %m'}
                interpolate={'cardinal'}
                width={750}
                height={250}
                data={[
                    [
                        { x: '1-Jan-15', y: 20 },
                        { x: '1-Feb-15', y: 10 },
                        { x: '1-Mar-15', y: 33 },
                        { x: '1-Apr-15', y: 45 },
                        { x: '1-May-15', y: 15 }
                    ], [
                        { x: '1-Jan-15', y: 10 },
                        { x: '1-Feb-15', y: 15 },
                        { x: '1-Mar-15', y: 13 },
                        { x: '1-Apr-15', y: 15 },
                        { x: '1-May-15', y: 10 }
                    ]
                ]}
                />
        );
    }
}

class AreaChartDataPoints extends React.Component {
    render(): any {
        return (
            <AreaChart
                xType={'time'}
                axes
                dataPoints
                xTicks={5}
                yTicks={3}
                grid
                tickTimeDisplayFormat={'%d %m'}
                interpolate={'cardinal'}
                width={750}
                height={250}
                data={[
                    [
                        { x: '1-Jan-15', y: 20 },
                        { x: '1-Feb-15', y: 10 },
                        { x: '1-Mar-15', y: 33 },
                        { x: '1-Apr-15', y: 45 },
                        { x: '1-May-15', y: 15 }
                    ], [
                        { x: '1-Jan-15', y: 10 },
                        { x: '1-Feb-15', y: 15 },
                        { x: '1-Mar-15', y: 13 },
                        { x: '1-Apr-15', y: 15 },
                        { x: '1-May-15', y: 10 }
                    ]
                ]}
                />
        );
    }
}

class AreaChartMouseHandlers extends React.Component {
    mouseOverHandler(d: any, e: any) { }
    mouseMoveHandler(e: any) { }
    mouseOutHandler() { }
    render(): any {
        return (
            <AreaChart
                xType={'time'}
                axes
                dataPoints
                xTicks={5}
                yTicks={3}
                grid
                clickHandler={(d) => { } }
                mouseOverHandler={this.mouseOverHandler}
                mouseOutHandler={this.mouseOutHandler}
                mouseMoveHandler={this.mouseMoveHandler}
                tickTimeDisplayFormat={'%d %m'}
                interpolate={'cardinal'}
                width={750}
                height={250}
                data={[
                    [
                        { x: '1-Jan-15', y: 20 },
                        { x: '1-Feb-15', y: 10 },
                        { x: '1-Mar-15', y: 33 },
                        { x: '1-Apr-15', y: 45 },
                        { x: '1-May-15', y: 15 }
                    ], [
                        { x: '1-Jan-15', y: 10 },
                        { x: '1-Feb-15', y: 15 },
                        { x: '1-Mar-15', y: 13 },
                        { x: '1-Apr-15', y: 15 },
                        { x: '1-May-15', y: 10 }
                    ]
                ]}
                />
        );
    }
}


const data = [
    {
        type: 'One',
        x: 1,
        y: 5
    },
    {
        type: 'Two',
        x: 3,
        y: 1
    },
    {
        type: 'Three',
        x: 0,
        y: 6
    },
    {
        type: 'Four',
        x: 5,
        y: 2
    },
    {
        type: 'Five',
        x: 4,
        y: 4
    },
    {
        type: 'Six',
        x: 5,
        y: 9
    },
    {
        type: 'Seven',
        x: 9,
        y: 1
    },
    {
        type: 'Eight',
        x: 5,
        y: 6
    },
    {
        type: 'Nine',
        x: 3,
        y: 9
    },
    {
        type: 'Ten',
        x: 7,
        y: 9
    }
];

class ScatterplotData extends React.Component {
    render(): any {
        return (
            <ScatterplotChart data={data} />
        );
    }
}

class ScatterplotHeightAndWidth extends React.Component {
    render(): any {
        return (
            <ScatterplotChart data={data} width={160} height={90} />
        );
    }
}

class ScatterplotMargin extends React.Component {
    render(): any {
        return (
            <ScatterplotChart
                data={data}
                margin={{ top: 10, right: 10, bottom: 30, left: 100 }} />
        );
    }
}

class ScatterplotAxes extends React.Component {
    render(): any {
        return (
            <ScatterplotChart
                data={data}
                axes
                width={480}
                height={270} />
        );
    }
}

class ScatterplotYAxisOrientation extends React.Component {
    render(): any {
        return (
            <ScatterplotChart
                data={data}
                axes
                yAxisOrientRight
                axisLabels={{ x: 'My x Axis', y: 'My y Axis' }}
                width={480}
                height={270}
                />
        );
    }
}

class ScatterplotAxesLabels extends React.Component {
    render(): any {
        return (
            <ScatterplotChart
                data={data}
                axes
                axisLabels={{ x: 'My x Axis', y: 'My y Axis' }}
                width={480}
                height={270}
                />
        );
    }
}

class ScatterplotDotRadius extends React.Component {
    render(): any {
        return (
            <ScatterplotChart
                data={data}
                axes
                axisLabels={{ x: 'My x Axis', y: 'My y Axis' }}
                dotRadius={10}
                width={480}
                height={270}
                />
        );
    }
}

class ScatterplotConfig extends React.Component {
    config = [
        {
            type: 'One',
            color: '#ff0000',
            stroke: 'blue'
        },
        {
            type: 'Two',
            color: '#00ff00',
            stroke: 'blue'
        },
        {
            type: 'Three',
            color: '#ffffff',
            stroke: 'black'
        }
    ];
    render(): any {
        return (
            <ScatterplotChart data={data} config={this.config} />
        );
    }
}

class ScatterplotGrid extends React.Component {
    render(): any {
        return (
            <ScatterplotChart
                data={data}
                axes
                axisLabels={{ x: 'My x Axis', y: 'My y Axis' }}
                dotRadius={10}
                width={480}
                height={270}
                grid
                />
        );
    }
}

class ScatterplotVerticalGrid extends React.Component {
    render(): any {
        return (
            <ScatterplotChart
                data={data}
                axes
                verticalGrid
                axisLabels={{ x: 'My x Axis', y: 'My y Axis' }}
                dotRadius={10}
                width={480}
                height={270}
                grid
                />
        );
    }
}

class ScatterplotAxisType extends React.Component {

    typedData = [
        {
            type: 1,
            x: 'Tue',
            y: 10
        },
        {
            type: 1,
            x: 'Wed',
            y: 20
        },
        {
            type: 2,
            x: 'Tue',
            y: 30
        },
        {
            type: 3,
            x: 'Thu',
            y: 40
        }
    ];
    render(): any {
        return (

            <ScatterplotChart
                data={this.typedData}
                axes
                axisLabels={{ x: 'My x Axis', y: 'My y Axis' }}
                dotRadius={6}
                width={480}
                height={270}
                grid
                xType="text"
                />
        );
    }
}

class ScatterplotDomainRange extends React.Component {

    typedData = [
        {
            type: 1,
            x: '1-Jan-15',
            y: 10
        },
        {
            type: 1,
            x: '2-Jan-15',
            y: 20
        },
        {
            type: 2,
            x: '1-Jan-15',
            y: 30
        },
        {
            type: 2,
            x: '2-Jan-15',
            y: 30
        },
        {
            type: 3,
            x: '3-Jan-15',
            y: 40
        }
    ];

    render(): any {
        return (
            <ScatterplotChart
                data={this.typedData}
                axes
                axisLabels={{ x: 'My x Axis', y: 'My y Axis' }}
                dotRadius={6}
                width={480}
                height={270}
                grid
                xType="time"
                xDomainRange={['31-Dec-14', '4-Jan-15']}
                />
        );
    }
}

class ScatterplotMouseEvents extends React.Component {
    mouseOverHandler(d: any, e: any) { }
    mouseMoveHandler(e: any) { }
    mouseOutHandler() { }
    render(): any {
        return (

            <ScatterplotChart
                data={data}
                axes
                axisLabels={{ x: 'My x Axis', y: 'My y Axis' }}
                dotRadius={6}
                width={480}
                height={270}
                grid
                mouseOverHandler={this.mouseOverHandler}
                mouseOutHandler={this.mouseOutHandler}
                mouseMoveHandler={this.mouseMoveHandler}
                clickHandler={(d) => { } }
                />
        );
    }
}


const pieData = [
    { key: 'Cats', value: 100 },
    { key: 'Dogs', value: 200 },
    { key: 'Other', value: 50 }
];

class LegendData extends React.Component {
    render(): any {
        return (
            <Legend data={pieData} dataId={'key'} />
        );
    }
}

class LegendHorizontal extends React.Component {
    render(): any {
        return (
            <Legend data={pieData} dataId={'key'} horizontal />
        );
    }
}

const pieDataCustom = [
    { key: 'Cats', value: 100, color: '#aaac84' },
    { key: 'Dogs', value: 200, color: '#dce7c5' },
    { key: 'Other', value: 50, color: '#e3a51a' }
];

const config = [
    { color: '#aaac84' },
    { color: '#dce7c5' },
    { color: '#e3a51a' }
];

class LegendConfig extends React.Component {
    render(): any {
        return (
            <Legend data={pieDataCustom} dataId={'key'} config={config} />
        );
    }
}


/* default component styles */
const defaultStyles = {
    '.legend': {
        'list-style': 'none',
        margin: 0,
        padding: 0
    },
    '.legend li': {
        display: 'block',
        lineHeight: '24px',
        marginRight: '24px',
        marginBottom: '6px',
        paddingLeft: '24px',
        position: 'relative'
    },
    '.legend li.horizontal': {
        display: 'inline-block'
    },
    '.legend .icon': {
        width: '12px',
        height: '12px',
        background: 'red',
        borderRadius: '6px',
        position: 'absolute',
        left: '0',
        top: '50%',
        marginTop: '-6px'
    }
};

/* example override */
const customStyle = {
    '.legend': {
        backgroundColor: '#f9f9f9',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        fontSize: '0.8em',
        maxWidth: '300px',
        padding: '12px'
    }
};

class LegendStyles extends React.Component {
    render(): any {
        return (
            <Legend
                data={pieDataCustom}
                dataId={'key'}
                config={config}
                styles={customStyle}
                horizontal
                />
        );
    }
}
