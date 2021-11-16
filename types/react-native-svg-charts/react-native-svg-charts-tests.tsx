import * as React from 'react';
import { View } from 'react-native';
import { LinearGradientProps, Stop } from 'react-native-svg';
import { BarChart, StackedAreaChart, StackedBarChart, XAxis, Grid, Decorators } from 'react-native-svg-charts';
import { curveNatural } from 'd3-shape';
import { scaleTime } from 'd3-scale';

// Inlined https://github.com/react-native-svg/react-native-svg/pull/1652
declare const Defs: React.ComponentClass<{ children?: React.ReactNode }>;
declare const LinearGradient: React.ComponentClass<React.PropsWithChildren<LinearGradientProps>>;

interface Data {
    time: number;
    cpuUsage: number;
    totalMemoryConsumption: number;
    privateMemoryConsumption: number;
}

interface Props {
    data: Data[];
    width: number;
}

class Example extends React.Component<Props> {
    renderStackedAreaChart = ({data, width}: Props) => (
        <StackedAreaChart
            style={{ height: 200 }}
            data={data}
            keys={['totalMemoryConsumption', 'privateMemoryConsumption']}
            colors={['url(#totalMemoryConsumption)', 'url(#privateMemoryConsumption)']}
            contentInset={{ top: 20 }}
            curve={curveNatural}
            showGrid={true}
            animate={true}
            animationDuration={350}
            numberOfTicks={10}
        >
            <Defs key="defs">
                <LinearGradient id="totalMemoryConsumption" x1="0%" y1="0%" x2="0%" y2="100%">
                    <Stop offset="0%" stopColor="#4ccfef" stopOpacity={0.9} />
                    <Stop offset="100%" stopColor="#182b41" stopOpacity={0.9} />
                </LinearGradient>
                <LinearGradient id="privateMemoryConsumption" x1="0%" y1="0%" x2="0%" y2="100%">
                    <Stop offset="0%" stopColor="#a1d343" stopOpacity={0.8} />
                    <Stop offset="100%" stopColor="#a1d343" stopOpacity={0.3} />
                </LinearGradient>
            </Defs>
            <XAxis
                data={data}
                formatLabel={(value) => new Date(value).toTimeString()}
                numberOfTicks={8}
                scale={scaleTime}
                contentInset={{ left: 10, right: 10 }}
                svg={{
                    fillOpacity: .2,
                    fill: '#fff',
                    fontFamily: 'Regular',
                    fontSize: 10,
                }}
                xAccessor={({ item }) => item.time}
            />
            <Grid
                direction="BOTH"
                ticks={[20, 40, 60, 80]}
                x={x => x * width}
                y={y => y * width}
                svg={{
                    stroke: '#fff',
                    strokeOpacity: .2,
                }}
                belowChart={true}
            />
            <Decorators.Tooltip text="Test" />
            <Decorators.Point />
        </StackedAreaChart>
    )

    renderStackedBarChart = ({data, width}: Props) => (
        <StackedBarChart
          animate={true}
          animationDuration={250}
          style={{ height: 100 }}
          keys={['totalMemoryConsumption', 'privateMemoryConsumption']}
          colors={['green', 'red']}
          data={data}
          horizontal={true}
          contentInset={{ top: 10, bottom: 20 }}
        />
    )

    renderBarChart = ({data, width}: Props) => (
        <BarChart
          animate={true}
          animationDuration={250}
          style={{ height: 100 }}
          data={data}
          horizontal={true}
          contentInset={{ top: 10, bottom: 20 }}
        />
    )

    render() {
        const { data, width } = this.props;
        return (
            <View>
                {this.renderStackedAreaChart(this.props)}
                {this.renderStackedBarChart(this.props)}
            </View>
        );
    }
}
