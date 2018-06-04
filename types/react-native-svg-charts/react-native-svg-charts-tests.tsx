import * as React from 'react';
import { Defs, LinearGradient, Stop } from 'react-native-svg';
import { StackedAreaChart, XAxis, Grid } from 'react-native-svg-charts';
import { curveNatural } from 'd3-shape';
import { scaleTime } from 'd3-scale';

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
	render() {
        const { data, width } = this.props;
		return (
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
            </StackedAreaChart>
		);
	}
}
