import React from 'react';
import { XAxis, YAxis, XYPlot, MarkSeriesCanvas, Borders, Highlight } from 'react-vis';

import Iris from '../../datasets/iris.json';

import './iris-dashboard.scss';
const AXES = ['sepal length', 'sepal width', 'petal length', 'petal width'];

const SPECIES = ['setosa', 'versicolor', 'virginica'];

const SIZE = 200;

export default class IrisDashboard extends React.Component {
    state = {
        filters: AXES.reduce((acc, axis) => {
            acc[axis] = { min: null, max: null };
            return acc;
        }, {}),
    };

    render() {
        const { filters } = this.state;

        const data = Iris.map(d => {
            const unselected = AXES.some(key => {
                const filter = filters[key];
                return filter.min !== filter.max && (filter.min > d[key] || filter.max < d[key]);
            });
            return { ...d, selected: !unselected };
        });
        return (
            <div className="iris-dasboard-example">
                <div className="chart-container">
                    {AXES.map(yAxis => {
                        return (
                            <div key={yAxis} className="chart-row">
                                {AXES.map(xAxis => {
                                    if (xAxis === yAxis) {
                                        return (
                                            <div
                                                key={`${xAxis}-${yAxis}`}
                                                className="axis-label"
                                                style={{ height: SIZE, width: SIZE }}
                                            >
                                                <h3>{xAxis}</h3>
                                            </div>
                                        );
                                    }
                                    const updateFilter = area => {
                                        if (!area) {
                                            filters[xAxis] = { min: null, max: null };
                                            filters[yAxis] = { min: null, max: null };
                                            this.setState({ filters });
                                        } else {
                                            const { left, right, top, bottom } = area;
                                            filters[xAxis] = { min: left, max: right };
                                            filters[yAxis] = { min: bottom, max: top };
                                        }
                                        this.setState({ filters });
                                    };
                                    return (
                                        <XYPlot height={SIZE} width={SIZE} key={`${xAxis}-${yAxis}`}>
                                            <MarkSeriesCanvas
                                                data={data.map(d => ({
                                                    x: Number(d[xAxis]),
                                                    y: Number(d[yAxis]),
                                                    color: d.species,
                                                    selected: d.selected,
                                                }))}
                                                colorType="category"
                                                colorDomain={SPECIES}
                                                colorRange={['#19CDD7', 'red', '#88572C']}
                                                getOpacity={d => (d.selected ? 1 : 0.1)}
                                                size={2}
                                            />
                                            <Borders style={{ all: { fill: '#fff' } }} />
                                            <XAxis title={xAxis} />
                                            <YAxis title={yAxis} />
                                            <Highlight
                                                drag
                                                onBrush={updateFilter}
                                                onDrag={updateFilter}
                                                onBrushEnd={updateFilter}
                                            />
                                        </XYPlot>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
