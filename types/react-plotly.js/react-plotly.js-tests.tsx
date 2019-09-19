import * as React from 'react';
import Plot from 'react-plotly.js';
import createPlotlyComponent from 'react-plotly.js/factory';

/**
 * based on https://plot.ly/javascript/react/#quick-start
 */
export class SimpleChartComponent extends React.PureComponent<any> {
    render() {
        return(
            <Plot
                data={[
                    {
                        x: [1, 2, 3],
                        y: [2, 6, 3],
                        type: 'scatter',
                        marker: {color: 'red'},
                    },
                    {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                ]}
                layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
            />
        );
    }
}

/**
 * This creates a minified Plotly Plot, if a minified version is
 * supplied to createPlotlyComponent for example plotly.js-basic-dist
 */
const MinPlot = createPlotlyComponent(Plot);

export class MinChartComponent extends React.PureComponent<any> {
    render() {
        return(
            <MinPlot
                data={[
                    {
                        x: [1, 2, 3],
                        y: [2, 6, 3],
                        type: 'scatter',
                        marker: {color: 'red'},
                    },
                    {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                ]}
                layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
            />
        );
    }
}
