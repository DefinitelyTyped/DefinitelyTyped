import * as Plotly from 'plotly.js';
import { Config, Datum, Layout, PlotData, newPlot, Template } from 'plotly.js';

const graphDiv = '#test';

//////////////////////////////////////////////////////////////////////
// Plotly.newPlot
// combination of https://plotly.com/javascript/multiple-transforms/#all-transforms and
// https://plotly.com/javascript/2d-density-plots/

(() => {
    const testrows = [
        {
            country: 'Afghanistan',
            year: 2002,
            pop: 8425333,
            continent: 'Asia',
            lifeExp: 28.801,
            gdpPercap: 779.4453145,
        },
        {
            country: 'Argentina',
            year: 2002,
            pop: 38331121,
            continent: 'Americas',
            lifeExp: 74.34,
            gdpPercap: 8797.640716,
        },
        {
            country: 'Australia',
            year: 2002,
            pop: 13177000,
            continent: 'Oceania',
            lifeExp: 71.93,
            gdpPercap: 16788.62948,
        },
        {
            country: 'Austria',
            year: 2002,
            pop: 7914969,
            continent: 'Europe',
            lifeExp: 76.04,
            gdpPercap: 27042.01868,
        },
        {
            country: 'Austria',
            year: 2001,
            pop: 7914969,
            continent: 'Europe',
            lifeExp: 76.04,
            gdpPercap: 27042.01868,
        },
    ];

    interface DataRow {
        [key: string]: string | number;
    }

    function unpack(rows: DataRow[], key: string) {
        return rows.map((row: DataRow) => row[key]);
    }

    const trace1 = {
        mode: 'markers',
        x: unpack(testrows, 'lifeExp'),
        y: unpack(testrows, 'gdpPercap'),
        text: unpack(testrows, 'continent'),
        marker: {
            size: unpack(testrows, 'pop'),
            sizemode: 'area',
            sizeref: 200000,
            pattern: {
                shape: '/',
            },
        },
        type: 'scatter',
        transforms: [
            {
                type: 'filter',
                target: unpack(testrows, 'year'),
                operation: '=',
                value: '2002',
            },
            {
                type: 'groupby',
                nameformat: `%{group}`,
                groups: unpack(testrows, 'continent'),
                styles: [
                    { target: 'Asia', value: { marker: { color: 'red' } } },
                    { target: 'Europe', value: { marker: { color: 'blue' } } },
                    { target: 'Americas', value: { marker: { color: 'orange' } } },
                    { target: 'Africa', value: { marker: { color: 'green' } } },
                    { target: 'Oceania', value: { marker: { color: 'purple' } } },
                ],
            },
            {
                type: 'aggregate',
                groups: unpack(testrows, 'continent'),
                aggregations: [
                    { target: 'x', func: 'avg' },
                    { target: 'y', func: 'avg' },
                    { target: 'marker.size', func: 'sum' },
                ],
            },
        ],
        width: 2,
    } as PlotData;
    const trace2 = {
        yaxis: 'y2',
        x: unpack(testrows, 'lifeExp'),
        name: 'x density',
        marker: { color: 'rgb(102,0,0)' },
        type: 'histogram',
        width: [2],
        xhoverformat: ',.0f',
        yhoverformat: ',.',
    } as PlotData;
    const trace3 = {
        xaxis: 'x2',
        y: unpack(testrows, 'gdpPercap'),
        name: 'y density',
        marker: { color: 'rgb(102,0,0)' },
        type: 'histogram',
        xhoverformat: ',.0f',
        yhoverformat: ',.',
    } as PlotData;
    const data = [trace1, trace2, trace3];
    const layout = {
        title: 'Gapminder',
        xaxis: {
            title: 'Life Expectancy',
            domain: [0, 0.85],
            showgrid: false,
            zeroline: false,
        },
        yaxis: {
            title: 'GDP per Cap',
            showline: false,
            domain: [0, 0.85],
            showgrid: false,
            zeroline: false,
        },
        xaxis2: {
            domain: [0.85, 1],
            showgrid: false,
            zeroline: false,
        },
        yaxis2: {
            domain: [0.85, 1],
            showgrid: false,
            zeroline: false,
        },
    };
    Plotly.newPlot(graphDiv, data, layout);
})();
(() => {
    // deprecated: calling plot again will add new trace(s) to the plot,
    // but will ignore new layout.
    const data2 = [
        {
            x: [1999, 2000, 2001, 2002],
            y: [10, 9, 8, 7],
            type: 'scatter',
        } as PlotData,
    ];
    const layout2 = { title: 'Revenue' };
    Plotly.newPlot(graphDiv, data2, layout2);
})();
(() => {
    const data: Array<Partial<PlotData>> = [
        {
            type: 'bar',
            labels: ['Eve', 'Cain', 'Seth', 'Enos', 'Noam', 'Abel', 'Awan', 'Enoch', 'Azura'],
            parents: ['', 'Eve', 'Eve', 'Seth', 'Seth', 'Eve', 'Eve', 'Awan', 'Eve'],
            values: [65, 14, 12, 10, 2, 6, 6, 4, 4],
            marker: { line: { width: 2 } },
            offset: -0.25,
        },
    ];

    const layout = {
        margin: { l: 0, r: 0, b: 0, t: 0 },
    };
    Plotly.newPlot('myDiv', data, layout, {
        plotlyServerURL: 'https://chart-studio.plotly.com/',
        showSendToCloud: true,
        showEditInChartStudio: true,
    });
})();
// Should create new plot with tickformatstop
(() => {
    const data: Array<Partial<PlotData>> = [
        {
            x: ['2005-01', '2005-02', '2005-03', '2005-04', '2005-05', '2005-06', '2005-07'],
            y: [-20, 10, -5, 0, 5, -10, 20],
            type: 'scatter',
        },
    ];
    const layout: Partial<Layout> = {
        xaxis: {
            tickformatstops: [
                {
                    dtickrange: [null, 1000],
                    value: '%H:%M:%S.%L ms',
                },
                {
                    dtickrange: [1000, 60000],
                    value: '%H:%M:%S s',
                },
                {
                    dtickrange: [60000, 3600000],
                    value: '%H:%M m',
                },
                {
                    dtickrange: [3600000, 86400000],
                    value: '%H:%M h',
                },
                {
                    dtickrange: [86400000, 604800000],
                    value: '%e. %b d',
                },
                {
                    dtickrange: [604800000, 'M1'],
                    value: '%e. %b w',
                },
                {
                    dtickrange: ['M1', 'M12'],
                    value: "%b '%y M",
                },
                {
                    dtickrange: ['M12', null],
                    value: '%Y Y',
                },
            ],
        },
    };

    Plotly.newPlot(graphDiv, data, layout);
})();
(() => {
    // Test the template with practical types.
    // https://plotly.com/javascript/layout-template/
    const data: Array<Partial<PlotData>> = [
        {
            type: 'bar',
            name: 'bar',
            text: ['2', '3', '1', '4'],
            x: ['Jan', 'Feb', 'Mar', 'Apr'],
            y: [2, 3, 1, 4],
            cliponaxis: false,
        },
        {
            type: 'scatter',
            name: 'scatter',
            x: [1, 2, 3, 4],
            y: [2, 4, 1, 5],
        },
    ];
    const template: Template = {
        data: {
            bar: [{ marker: { color: '#3183BD', opacity: 0.7 }, textposition: 'auto' }],
            scatter: [{
                mode: 'lines+markers',
                line: { color: 'red', width: 3 },
                marker: { color: 'red', size: 8, symbol: 'circle-open' },
            }],
        },
        layout: { barmode: 'stack', showlegend: false, xaxis: { tickangle: -45 } },
    };

    // Test the modebar with practical types.
    // https://plotly.com/javascript/reference/layout/#layout-modebar
    const modebar = {
        color: '#ff0000',
        bgcolor: 'rgba(0,0,0,0)',
        activecolor: '#00ff00',
        orientation: 'h' as 'h' | 'v',
    };

    const layout: Partial<Layout> = { showlegend: true, title: 'January 2013 Sales Report', template, modebar };
    const config: Partial<Config> = {
        modeBarButtons: [
            [
                {
                    name: 'save',
                    title: 'Download plot data',
                    icon: {
                        width: 857.1,
                        height: 1000,
                        path:
                            'm214-7h429v214h-429v-214z m500 0h72v500q0 8-6 21t-11 20l-157 156q-5 6-19 12t-22 5v-232q0-22-15-38t-38-16h-322q-22 0-37 16t-16 38v232h-72v-714h72v232q0 22 16 38t37 ' +
                            '16h465q22 0 38-16t15-38v-232z m-214 518v178q0 8-5 13t-13 5h-107q-7 0-13-5t-5-13v-178q0-8 5-13t13-5h107q7 0 13 5t5 13z m357-18v-518q0-22-15-38t-38-16h-750q-23 0-38 ' +
                            '16t-16 38v750q0 22 16 38t38 16h517q23 0 50-12t42-26l156-157q16-15 27-42t11-49z',
                        ascent: 850,
                        transform: 'matrix(1 0 0 -1 0 850)',
                    },
                    click: (gd, ev) => console.log('Download data'),
                },
                'pan2d',
                'zoom2d',
            ],
            ['toImage'],
        ],
        setBackground: 'transparent',
        watermark: false,
    };
    Plotly.newPlot('myDiv', data, layout, config);
})();
(() => {
    // should create a polar scatterplot with a rotation and direction
    const r: number[] = [10, 20, 30, 50, 10, 10, 0, 30];
    const theta: number[] = [90, 80, 180, 299, 64, 71, 277, 340];

    const data: Array<Partial<Plotly.PlotData>> = [
        {
            r,
            theta,
            type: 'scatterpolar',
            name: 'group A',
        },
    ];
    const layout: Partial<Plotly.PolarLayout> = {
        angularaxis: {
            rotation: 90,
            direction: 'clockwise',
        },
        radialaxis: {
            range: [0, 100],
        },
    };
    Plotly.newPlot('myDiv', data, layout);
})();
(() => {
    // should create a boxplot with boxmode 'group'
    const y: number[] = [];
    const x: string[] = [];
    for (let i = 0; i < 50; i++) {
        y.push(Math.random());
        x.push('category 1');
        y.push(Math.random() + 1);
        x.push('category 2');
    }
    const data: Array<Partial<Plotly.BoxPlotData>> = [
        {
            y,
            x,
            type: 'box',
            name: 'group A',
        },
        {
            y: y.map(e => e + 1),
            x,
            type: 'box',
            name: 'group B',
        },
    ];
    const layout: Partial<Layout> = {
        title: 'Grouped Box Plot',
        boxmode: 'overlay',
    };

    Plotly.newPlot('myDiv', data, layout);
})();
(() => {
    // Test slider APIs
    const data: Array<Partial<PlotData>> = [
        {
            colorbar: {
                title: 'Test',
            },
            locationmode: 'ISO-3',
            locations: ['USA', 'NLD'],
            reversescale: true,
            type: 'choropleth',
            z: [1, 2],
        },
    ];
    const layout: Partial<Layout> = {
        showlegend: true,
        title: 'World Map',
        geo: {
            projection: { type: 'Mercator' },
            showcoastlines: true,
            showframe: true,
        },
        sliders: [
            {
                pad: { t: 30 },
                y: 1.3,
                x: 0.2,
                len: 0.8,
                currentvalue: {
                    visible: true,
                    prefix: 'Date:',
                    xanchor: 'right',
                    font: { size: 20, color: '#666' },
                },
                steps: [
                    {
                        method: 'animate',
                        label: '2019-02-04',
                        args: [
                            ['2019-02-04'],
                            {
                                mode: 'immediate',
                                transition: {
                                    duration: 300,
                                },
                                frame: {
                                    duration: 300,
                                    redraw: false,
                                },
                            },
                        ],
                    },
                ],
            },
        ],
    };
    Plotly.newPlot('myDiv', data, layout);
})();
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Plotly.restyle
// restyle a single trace using attribute strings
(() => {
    const update = {
        opacity: 0.4,
        'marker.color': 'red',
    };
    Plotly.restyle(graphDiv, update, 0);
})();

// restyle all traces using attribute strings
(() => {
    const update = {
        opacity: 0.4,
        'marker.color': 'red',
    };
    Plotly.restyle(graphDiv, update);
})();
// restyle the first trace's marker color 'red' and the second's 'green'
(() => {
    const update = {
        'marker.color': ['red', 'green'],
    };
    Plotly.restyle(graphDiv, update, [0, 1]);
})();

// alternate between red and green for all traces (note omission of traces)
(() => {
    const update = {
        'marker.color': ['red', 'green'],
    };
    Plotly.restyle(graphDiv, update);
})();

// restyle two traces using attribute strings
(() => {
    const update = {
        opacity: 0.4,
        'marker.color': 'red',
    };
    Plotly.restyle(graphDiv, update, [1, 2]);
})();

// update the color attribute of the first trace so that the markers within the same trace
// have different colors
(() => {
    const update = {
        'marker.color': [['red', 'green']],
    };
    Plotly.restyle(graphDiv, update, [0]);
})();

// update two traces with new z data
(() => {
    const update = {
        z: [
            [
                [1, 2, 3],
                [2, 1, 2],
                [1, 1, 1],
            ],
            [
                [0, 1, 1],
                [0, 2, 1],
                [3, 2, 1],
            ],
        ],
    };
    Plotly.restyle(graphDiv, update, [1, 2]);
})();

// replace the entire marker object with the one provided
(() => {
    const update = {
        marker: { color: 'red' },
    };
    Plotly.restyle(graphDiv, update, [0]);
})();

// Set the first trace's line to red, the second to the default, and ignore the third
(() => {
    Plotly.restyle(
        graphDiv,
        {
            'line.color': ['red', null, undefined],
        },
        [0, 1, 2],
    );
})();
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Plotly.relayout
// update only values within nested objects
(() => {
    const update = {
        title: 'some new title', // updates the title
        'xaxis.range': [0, 5], // updates the xaxis range
        'yaxis.range[1]': 15, // updates the end of the yaxis range
    } as Layout;
    Plotly.relayout(graphDiv, update);
})();

(() => {
    const data_update = {
        marker: { color: 'red' },
    };
    const layout_update = {
        title: 'some new title', // updates the title
    };
    Plotly.update(graphDiv, data_update, layout_update);
})();

(() => {
    const update = {
        title: {
            text: 'some new title',
            font: {
                size: 1.2,
            },
            x: 0.9,
            pad: {
                t: 20,
            },
        }, // updates the title
        'xaxis.range': [0, 5], // updates the xaxis range
        'yaxis.range[1]': 15, // updates the end of the yaxis range
    } as Layout;
    Plotly.relayout(graphDiv, update);
})();
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Plotly.update
(() => {
    const data_update = {
        marker: { color: 'red' },
    };
    const layout_update = {
        title: 'some new title', // updates the title
    };
    Plotly.update(graphDiv, data_update, layout_update);
})();
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Plotly.addTraces
(() => {
    // add a single trace to an existing graphDiv
    Plotly.addTraces(graphDiv, { y: [2, 1, 2] });

    // add two traces
    Plotly.addTraces(graphDiv, [{ y: [2, 1, 2] }, { y: [4, 5, 7] }]);

    // add a trace at the beginning of the data array
    Plotly.addTraces(graphDiv, { y: [1, 5, 7] }, 0);
})();
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Plotly.deleteTraces
(() => {
    // remove the first trace
    Plotly.deleteTraces(graphDiv, 0);

    // remove the last two traces
    Plotly.deleteTraces(graphDiv, [-2, -1]);
})();
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Plotly.moveTraces
(() => {
    // move the first trace (at index 0) the the end of the data array
    Plotly.moveTraces(graphDiv, 0);

    // move selected traces (at indices [0, 3, 5]) to the end of the data array
    Plotly.moveTraces(graphDiv, [0, 3, 5]);

    // move last trace (at index -1) to the beginning of the data array (index 0)
    Plotly.moveTraces(graphDiv, -1, 0);

    // move selected traces (at indices [1, 4, 5]) to new indices [0, 3, 2]
    Plotly.moveTraces(graphDiv, [1, 4, 5], [0, 3, 2]);
})();
//////////////////////////////////////////////////////////////////////

function rand() {
    return Math.random();
}

//////////////////////////////////////////////////////////////////////
// Plotly.extendTraces
(() => {
    // extend one trace
    Plotly.extendTraces(graphDiv, { y: [[rand()]] }, [0]);

    // extend multiple traces
    Plotly.extendTraces(graphDiv, { y: [[rand()], [rand()]] }, [0, 1]);

    // extend multiple traces up to a maximum of 10 points per trace
    Plotly.extendTraces(graphDiv, { y: [[rand()], [rand()]] }, [0, 1], 10);
})();
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Plotly.prependTraces
(() => {
    // prepend one trace
    Plotly.prependTraces(graphDiv, { y: [[rand()]] }, [0]);

    // prepend multiple traces
    Plotly.prependTraces(graphDiv, { y: [[rand()], [rand()]] }, [0, 1]);
})();
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Plotly.purge
(() => {
    // purge will be used on the div that you wish clear of Plotly plots
    Plotly.purge(graphDiv);
})();
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Plotly.toImage
(() => {
    // Plotly.toImage will turn the plot in the given div into a data URL string
    // toImage takes the div as the first argument and an object specifying image properties as the other
    Plotly.toImage(graphDiv, { format: 'png', width: 800, height: 600 }).then(dataUrl => {
        // use the dataUrl
    });
})();
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Plotly.downloadImage
(() => {
    // downloadImage will accept the div as the first argument and an object specifying image properties as the other
    Plotly.downloadImage(graphDiv, { format: 'png', width: 800, height: 600, filename: 'newplot' });
})();
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Plotly.addFrames + Plotly.deleteFrames as per https://plot.ly/javascript/animations/
(() => {
    const n = 100;
    const frames = [
        { name: 'sine', data: [{ x: new Array<number>(100), y: new Array<number>(n) }] },
        { name: 'cosine', data: [{ x: new Array<number>(100), y: new Array<number>(n) }] },
        { name: 'circle', data: [{ x: new Array<number>(100), y: new Array<number>(n) }] },
    ];

    for (let i = 0; i < n; i++) {
        const t = (i / (n - 1)) * 2 - 1;

        // A sine wave:
        frames[0].data[0].x[i] = t * Math.PI;
        frames[0].data[0].y[i] = Math.sin(t * Math.PI);

        // A cosine wave:
        frames[1].data[0].x[i] = t * Math.PI;
        frames[1].data[0].y[i] = Math.cos(t * Math.PI);

        // A circle:
        frames[2].data[0].x[i] = Math.sin(t * Math.PI);
        frames[2].data[0].y[i] = Math.cos(t * Math.PI);
    }
    Plotly.addFrames(graphDiv, frames);

    Plotly.deleteFrames(graphDiv, [2]);
})();
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Using events
(async () => {
    const myPlot = await newPlot(graphDiv, [
        {
            x: [1999, 2000, 2001, 2002],
            y: [10, 9, 8, 7],
            type: 'scatter',
        },
    ]);
    myPlot.on('plotly_click', data => {
        let pn = 0;
        let tn = 0;
        let colors = [] as string[];
        for (const pt of data.points) {
            pn = pt.pointNumber;
            tn = pt.curveNumber;
            colors = pt.data.marker.color as string[];
        }
        colors[pn] = '#C54C82';

        const update = { marker: { color: colors, size: 16 } };
        Plotly.restyle('myDiv', update, [tn]);
    });

    myPlot.on('plotly_hover', data => {
        let pn = 0;
        let tn = 0;
        let colors = [] as string[];
        for (const pt of data.points) {
            pn = pt.pointNumber;
            tn = pt.curveNumber;
            colors = pt.data.marker.color as string[];
        }
        colors[pn] = '#C54C82';

        const update = { marker: { color: colors, size: 16 } };
        Plotly.restyle('myDiv', update, [tn]);
    });

    myPlot.on('plotly_unhover', data => {
        let pn = 0;
        let tn = 0;
        let colors = [] as string[];
        for (const pt of data.points) {
            pn = pt.pointNumber;
            tn = pt.curveNumber;
            colors = pt.data.marker.color as string[];
        }
        colors[pn] = '#00000';

        const update = { marker: { color: colors, size: 16 } };
        Plotly.restyle('myDiv', update, [tn]);
    });

    myPlot.on('plotly_selected', data => {
        const x = [] as Datum[];
        const y = [] as Datum[];
        const N = 1000;
        const color1 = '#7b3294';
        const color1Light = '#c2a5cf';

        const colors = [] as string[];
        for (let i = 0; i < N; i++) colors.push(color1Light);

        data.points.forEach(pt => {
            x.push(pt.x);
            y.push(pt.y);
            colors[pt.pointNumber] = color1;
        });

        Plotly.restyle(
            myPlot,
            {
                x: [x, y],
            },
            [1, 2],
        );

        Plotly.restyle(
            myPlot,
            {
                'marker.color': [colors],
            },
            [0],
        );
    });

    myPlot.on('plotly_relayout', eventdata => {
        eventdata['xaxis.autorange']; // $ExpectType boolean | undefined
        eventdata['xaxis.autorange']; // $ExpectType boolean | undefined
        eventdata['xaxis.range[0]']; // $ExpectType number | undefined
        eventdata['xaxis.range[1]']; // $ExpectType number | undefined
        eventdata['yaxis.range[0]']; // $ExpectType number | undefined
        eventdata['yaxis.range[1]']; // $ExpectType number | undefined
    });

    myPlot.on('plotly_relayouting', eventdata => {
        eventdata['xaxis.autorange']; // $ExpectType boolean | undefined
        eventdata['xaxis.autorange']; // $ExpectType boolean | undefined
        eventdata['xaxis.range[0]']; // $ExpectType number | undefined
        eventdata['xaxis.range[1]']; // $ExpectType number | undefined
        eventdata['yaxis.range[0]']; // $ExpectType number | undefined
        eventdata['yaxis.range[1]']; // $ExpectType number | undefined
    });

    myPlot.on('plotly_restyle', data => {
        console.log('restyling');
    });

    myPlot.on('plotly_doubleclick', () => {
        const orgColors = ['#00000', '#00000', '#00000', '#00000', '#00000', '#00000'];
        const update = { marker: { color: orgColors, size: 16 } };
        Plotly.restyle('myDiv', update);
    });

    myPlot.on('plotly_beforeplot', event => {
        console.log('plotting');
        const okToPlot = true;
        return okToPlot;
    });

    myPlot.on('plotly_afterplot', () => {
        console.log('done plotting');
    });

    myPlot.on('plotly_animatingframe', event => {
        console.log(`animating ${event.frame.name} with ${event.animation.transition.easing}`);
    });

    myPlot.on('plotly_legendclick', event => {
        console.log('clicked on legend');
        const clickVal = true;
        return clickVal;
    });

    myPlot.on('plotly_legenddoubleclick', event => {
        console.log('dbl clicked on legend');
        const dblClickVal = true;
        return dblClickVal;
    });

    myPlot.on('plotly_sliderchange', event => {
        console.log(`Slider at [${event.slider.x},${event.slider.y} with ${event.step.method}`);
    });

    myPlot.on('plotly_sliderstart', event => {
        console.log(`Slider at [${event.slider.x},${event.slider.y}`);
    });

    myPlot.on('plotly_sliderend', event => {
        console.log(`Slider at [${event.slider.x},${event.slider.y} with ${event.step.method}`);
    });

    myPlot.on('plotly_beforeexport', () => {
        console.log('starting export');
    });

    myPlot.on('plotly_afterexport', () => {
        console.log('done exporting');
    });

    myPlot.on('plotly_animated', () => {
        console.log('done animation');
    });

    myPlot.on('plotly_animationinterrupted', () => {
        console.log('animation interrupted');
    });

    myPlot.on('plotly_framework', () => {
        console.log('framework');
    });

    myPlot.on('plotly_transitioning', () => {
        console.log('starting transition');
    });

    myPlot.on('plotly_transitioninterrupted', () => {
        console.log('transition interrupted');
    });

    myPlot.removeAllListeners('plotly_restyle');
})();
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Sunburst specific properties and events
(async () => {
    const sunburst = await newPlot(graphDiv, [
        {
            type: 'sunburst',
            ids: ['root', 'child1', 'child2'],
            branchvalues: 'total',
            level: 'child1',
            parents: ['', 'root', 'root'],
        },
    ]);

    sunburst.on('plotly_sunburstclick', event => {
        console.log(`Clicked button ${event.event.button} to navigate to ${event.nextLevel}`);

        const point = event.points[0];
        console.log(`Clicked id ${point.id} with label ${point.label} and parent label ${point.parent}`);
        console.log(`Point is number ${point.pointNumber} on trace ${point.curveNumber}`);
        console.log(`Click happened while at level *labelled* ${point.entry}, and root *labelled* ${point.root}`);
        console.log(`Point has value ${point.value}`);
        console.log(
            `Point takes up proportions of (previous level, parent, root): (${point.percentEntry}, ${point.percentParent}, ${point.percentRoot})`,
        );
        console.log(`Colored ${point.color} and hover ${point.hovertext}`);
        console.log(`Can access trace data ${point.data.name} and full data ${point.fullData.name}`);
    });
})();

//////////////////////////////////////////////////////////////////////
// Scatter texttemplate

(async () => {
    const scatter = await newPlot(graphDiv, [
        {
            type: 'scatter',
            name: 'scatter',
            x: [1, 2, 3, 4],
            y: [2, 4, 1, 5],
            texttemplate: 'x: %{x}<br>y: %{y}',
        },
        {
            type: 'scatter',
            name: 'scatter',
            x: [1, 2, 3, 4],
            y: [2, 4, 1, 5],
            texttemplate: ['x: %{x}', 'y: %{y}'],
        },
    ]);
})();
