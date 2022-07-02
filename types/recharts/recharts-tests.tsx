import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    CartesianGrid, Line, LineChart, PieChart, Pie,
    Sector, XAxis, YAxis, Tooltip, ReferenceLine,
    ReferenceArea, ResponsiveContainer, Label, LabelList, Brush,
    ScatterChart, ZAxis, Legend, Scatter, Bar, BarChart, Text, Area, AreaChart, Customized,
    RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Sankey, Layer
} from 'recharts';

interface ComponentState {
    activeIndex: number;
}

class Component extends React.Component<{}, ComponentState> {
    state = {
        activeIndex: 0
    };

    private clickHandler(...args: any[]) {
        console.log(`Handling a click on a chart: ${JSON.stringify(args)}`);
    }

    renderYAxisTitle = () => {
        return (
            <Text textAnchor="start" verticalAnchor="start" capHeight="0.8em" lineHeight="2em">
                pv of page
            </Text>
        );
    }

    private renderCustomizedElement(props: any) {
        console.log('Customized props', props);
        return (<Text x={0} y={0} width={100} height={20} className="customized-text">Customized element</Text>);
    }
    render() {
        const data = [
            { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
            { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
            { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
            { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
            { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
            { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
            { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
        ];

        const data2 = [
            { name: 'Group A', value: 400 },
            { name: 'Group B', value: 300 },
            { name: 'Group C', value: 300 },
            { name: 'Group D', value: 200 }
        ];

        const data3 = {
            nodes: [
              { name: "Accept" },
              { name: "Reject" },
              { name: "Hold" },
              { name: "Unaffected" },
              { name: "Accept" },
              { name: "Reject" },
              { name: "Hold" },
              { name: "Unaffected" },
            ],
            links: [
              { source: 0, target: 4, value: 1 },
              { source: 0, target: 5, value: 1 },
              { source: 0, target: 6, value: 1 },
              { source: 1, target: 4, value: 1 },
              { source: 1, target: 5, value: 4 },
              { source: 2, target: 6, value: 1 },
              { source: 3, target: 5, value: 10 },
              { source: 3, target: 7, value: 10 },
            ],
          };

        const renderActiveShape = (props: any) => {
            const RADIAN = Math.PI / 180;
            const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
                fill, payload, percent, value } = props;
            const sin = Math.sin(-RADIAN * midAngle);
            const cos = Math.cos(-RADIAN * midAngle);
            const sx = cx + (outerRadius + 10) * cos;
            const sy = cy + (outerRadius + 10) * sin;
            const mx = cx + (outerRadius + 30) * cos;
            const my = cy + (outerRadius + 30) * sin;
            const ex = mx + (cos >= 0 ? 1 : -1) * 22;
            const ey = my;
            const textAnchor = cos >= 0 ? 'start' : 'end';

            return (
                <g>
                    <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
                    <Sector
                        cx={cx}
                        cy={cy}
                        innerRadius={innerRadius}
                        outerRadius={outerRadius}
                        startAngle={startAngle}
                        endAngle={endAngle}
                        fill={fill}
                    />
                    <Sector
                        cx={cx}
                        cy={cy}
                        startAngle={startAngle}
                        endAngle={endAngle}
                        innerRadius={outerRadius + 6}
                        outerRadius={outerRadius + 10}
                        fill={fill}
                    />
                    <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                    <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                    <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
                    <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                        {`(Rate ${(percent * 100).toFixed(2)}%)`}
                    </text>
                </g>
            );
        };
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <ResponsiveContainer height={300}>
                    <LineChart width={500} height={300} data={data}>
                        <XAxis dataKey="name">
                            <Label fontSize="8px">X axis - name</Label>
                        </XAxis>
                        <YAxis stroke="#8884d8">
                            <Label>Y axis</Label>
                        </YAxis>
                        <CartesianGrid vertical={true} horizontal={false} verticalFill={["#fafafa", "#c8c8c8"]} />
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" onClick={this.clickHandler} />
                        <Line id="custom-id" type="monotone" dataKey="pv" stroke="#82ca9d" />
                        <Line id="custom-id2" type="monotone" dataKey="pv" stroke="#82ca9d" dot={false} />
                        <Line id="custom-id3" type="monotone" dataKey="pv" stroke="#82ca9d" dot={({ payload }) => <span>{payload.x}</span>} />
                        <Line id="custom-id3" type="monotone" dataKey="pv" stroke="#82ca9d" dot={{ stroke: 'red', strokeWidth: 2 }} />
                        <Tooltip />
                        <Brush dataKey="name" />
                        <Brush dataKey="name" gap={3} />
                        <Brush dataKey="name" leaveTimeOut={55} />
                        <ReferenceLine label={"reference"} />
                        <ReferenceArea
                            stroke="red"
                            fill="red"
                            y2={1}
                            strokeOpacity={0.2}
                            fillOpacity={0.1}
                        />
                        <Customized component={<Text x={0} y={0} width={100} height={20}>Customized element</Text>} />
                    </LineChart>
                </ResponsiveContainer>
                <ResponsiveContainer height={300}>
                    <LineChart width={500} height={300} data={data}>
                        <XAxis dataKey="name">
                            <Label>X axis - name</Label>
                        </XAxis>
                        <YAxis>
                            <Label>Y axis</Label>
                        </YAxis>
                        <CartesianGrid vertical={false} horizontal={true} horizontalFill={["#fafafa", "#c8c8c8"]} />
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" onClick={this.clickHandler} />
                        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                        <Tooltip />
                        <Brush dataKey="name" />
                        <ReferenceLine />
                        <ReferenceArea
                            label="Reference Area"
                            stroke="red"
                            fill="red"
                            y2={1}
                            strokeOpacity={0.2}
                            fillOpacity={0.1}
                        />
                        <Customized component={this.renderCustomizedElement} />
                    </LineChart>
                </ResponsiveContainer>
                <ResponsiveContainer height={300}>
                    <LineChart width={500} height={300} data={data}>
                        <XAxis dataKey="name" label={{ value: "X axis - name" }} />
                        <YAxis label={{ value: "Y axis" }} allowDuplicatedCategory={false} />
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" onClick={this.clickHandler} />
                        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                        <Tooltip />
                        <Brush dataKey="name" />
                        <ReferenceLine />
                        <ReferenceArea
                            stroke="red"
                            fill="red"
                            y2={1}
                            strokeOpacity={0.2}
                            fillOpacity={0.1}
                        />
                    </LineChart>
                </ResponsiveContainer>
                <ResponsiveContainer height={400}>
                    <PieChart width={800} height={400}>
                        <Pie
                            label={(props: { name: string }) => <Label>{props.name}</Label>}
                            dataKey="value"
                            activeIndex={this.state.activeIndex}
                            activeShape={renderActiveShape}
                            data={data2}
                            cx={300}
                            cy={200}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                        >
                            <Label>A Pie Chart</Label>
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <ResponsiveContainer height={300}>
                    <ScatterChart width={500} height={300}>
                        <XAxis type="number" dataKey="uv" name="stature" unit="cm" angle={30} dx={20} dy={20} />
                        <YAxis dataKey="pv" name="weight" unit="kg" angle={30} dx={20} dy={20} />
                        <ZAxis dataKey="amt" range={[64, 144]} name="score" unit="km" />
                        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                        <Legend />
                        <Scatter id="custom-id" name="A school" data={data} fill="#8884d8" />
                    </ScatterChart>
                </ResponsiveContainer>
                <ResponsiveContainer height={250}>
                    <BarChart
                        width={730}
                        height={250}
                        data={data}
                        margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name">
                            <Label value="Pages of my website" offset={0} position="insideBottom" />
                        </XAxis>
                        <YAxis>
                            <Label position="top" content={this.renderYAxisTitle} />
                        </YAxis>
                        <Legend align="right" verticalAlign="top" height={36} width={800} wrapperStyle={{ top: 5 }} />
                        <Bar dataKey="pv" fill="#8884d8" id="custom-id">
                            <LabelList dataKey="name" position="insideTop" angle={45} />
                        </Bar>
                        <Bar dataKey="uv" fill="#82ca9d" radius={[10, 10, 0, 0]}>
                            <LabelList valueAccessor={(entry: any) => entry["uv"]} position="top" />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
                <ResponsiveContainer height={250}>
                    <AreaChart width={730} height={250} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" padding={{left: 20}} />
                        <YAxis padding={{top: 10}} />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area id="custom-id" type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </ResponsiveContainer>
                <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" allowDuplicatedCategory={false} />
                    <PolarRadiusAxis allowDuplicatedCategory={true} />
                    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
                <ResponsiveContainer height={250}>
                    <Sankey width={960} height={500} data={data3} iterations={32} nodeWidth={10} nodePadding={60}>
                        <Tooltip></Tooltip>
                    </Sankey>
                </ResponsiveContainer>
                <ResponsiveContainer height={250}>
                    <Layer className="original-classname" key="custom-key"></Layer>
                </ResponsiveContainer>
            </div>
        );
    }
}

ReactDOM.render(<Component />, document.getElementById('app'));
