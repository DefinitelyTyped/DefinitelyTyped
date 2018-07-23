import * as React from 'react';
import Plot from 'react-plotly.js';

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
