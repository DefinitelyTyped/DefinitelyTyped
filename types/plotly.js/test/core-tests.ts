import * as Plotly from 'plotly.js/lib/core';
import {
    Datum,
    ScatterData,
    Layout,
    newPlot,
    PlotData,
    ViolinData,
    CandlestickData,
    PieData,
} from 'plotly.js/lib/core';

const graphDiv = '#test';
const trace1 = {
    x: [1999, 2000, 2001, 2002],
    y: [10, 15, 13, 17],
    customdata: [1, 2, 3],
    type: 'scatter',
} as ScatterData;
const trace2 = {
    x: [1999, 2000, 2001, 2002],
    y: [16, 5, 11, 9],
    customdata: [
        [1, 'a'],
        [2, 'b'],
        [3, 'c'],
    ],
    type: 'scatter',
} as ScatterData;
const data = [trace1, trace2];
const tickangle: 'auto' = 'auto';
const layout = {
    title: 'Sales Growth',
    xaxis: {
        title: 'Year',
        showgrid: false,
        zeroline: false,
        tickangle,
    },
    yaxis: {
        title: 'Percent',
        showline: false,
    },
    uirevision: 'true',
    datarevision: 0,
    editrevision: 0,
    selectionrevision: 0,
};

//////////////////////////////////////////////////////////////////////
// Plotly.newPlot
(() => {
    Plotly.newPlot(graphDiv, data, layout);

    const violinTrace = {
        name: 'Values',
        type: 'violin',
        y: [10, 15, 13, 17],
        points: 'all',
        pointpos: -1,
        marker: { opacity: 0.6 },
        box: {
            visible: true,
            fillcolor: 'yellow',
        },
        line: { color: 'black' },
        opacity: 0.6,
        meanline: { visible: true },
    } as ViolinData;
    Plotly.newPlot(graphDiv, [violinTrace], { title: 'Sales growth' });

    const candlestickTrace: Partial<CandlestickData> = {
        x: [
            '2017-01-04',
            '2017-01-05',
            '2017-01-06',
            '2017-01-09',
            '2017-01-10',
            '2017-01-11',
            '2017-01-12',
            '2017-01-13',
            '2017-01-17',
            '2017-01-18',
            '2017-01-19',
            '2017-01-20',
            '2017-01-23',
            '2017-01-24',
            '2017-01-25',
            '2017-01-26',
            '2017-01-27',
            '2017-01-30',
            '2017-01-31',
            '2017-02-01',
            '2017-02-02',
            '2017-02-03',
            '2017-02-06',
            '2017-02-07',
            '2017-02-08',
            '2017-02-09',
            '2017-02-10',
            '2017-02-13',
            '2017-02-14',
            '2017-02-15',
        ],
        close: [
            116.019997, 116.610001, 117.910004, 118.989998, 119.110001, 119.75, 119.25, 119.040001, 120, 119.989998,
            119.779999, 120, 120.080002, 119.970001, 121.879997, 121.940002, 121.949997, 121.629997, 121.349998, 128.75,
            128.529999, 129.080002, 130.289993, 131.529999, 132.039993, 132.419998, 132.119995, 133.289993, 135.020004,
            135.509995,
        ],
        decreasing: {
            line: {
                color: '#7F7F7F',
            },
        },
        high: [
            116.510002, 116.860001, 118.160004, 119.43, 119.379997, 119.93, 119.300003, 119.620003, 120.239998, 120.5,
            120.089996, 120.449997, 120.809998, 120.099998, 122.099998, 122.440002, 122.349998, 121.629997, 121.389999,
            130.490005, 129.389999, 129.190002, 130.5, 132.089996, 132.220001, 132.449997, 132.940002, 133.820007,
            135.089996, 136.270004,
        ],
        increasing: {
            line: {
                color: '#17BECF',
            },
        },
        low: [
            115.75, 115.809998, 116.470001, 117.940002, 118.300003, 118.599998, 118.209999, 118.809998, 118.220001,
            119.709999, 119.370003, 119.730003, 119.769997, 119.5, 120.279999, 121.599998, 121.599998, 120.660004,
            120.620003, 127.010002, 127.779999, 128.160004, 128.899994, 130.449997, 131.220001, 131.119995, 132.050003,
            132.75, 133.25, 134.619995,
        ],
        open: [
            115.849998, 115.919998, 116.779999, 117.949997, 118.769997, 118.739998, 118.900002, 119.110001, 118.339996,
            120, 119.400002, 120.449997, 120, 119.550003, 120.419998, 121.669998, 122.139999, 120.93, 121.150002,
            127.029999, 127.980003, 128.309998, 129.130005, 130.539993, 131.350006, 131.649994, 132.460007, 133.080002,
            133.470001, 135.520004,
        ],
        type: 'candlestick',
        xaxis: 'x',
    };
    Plotly.newPlot(graphDiv, [candlestickTrace], { title: 'Stock price' });
})();
(() => {
    // deprecated: calling plot again will add new trace(s) to the plot,
    // but will ignore new layout.
    const data2 = [
        {
            x: [1999, 2000, 2001, 2002],
            y: [10, 9, 8, 7],
            type: 'scatter',
        } as ScatterData,
    ];
    const layout2 = { title: 'Revenue' };
    Plotly.newPlot(graphDiv, data2, layout2);
})();

// Plotly.newPlot (pie)
(() => {
    const data: Array<Partial<PieData>> = [
        {
            values: [19, 26, 55],
            labels: ['Residential', 'Non-Residential', 'Utility'],
            type: 'pie',
            direction: 'counterclockwise',
        },
    ];
    const layout = {
        height: 400,
        width: 500,
    };
    Plotly.newPlot(graphDiv, data, layout);
})();

(() => {
    const allLabels = ['1st', '2nd', '3rd', '4th', '5th'];

    const allValues = [
        [38, 27, 18, 10, 7],
        [28, 26, 21, 15, 10],
        [38, 19, 16, 14, 13],
        [31, 24, 19, 18, 8],
    ];

    const ultimateColors = [
        ['rgb(56, 75, 126)', 'rgb(18, 36, 37)', 'rgb(34, 53, 101)', 'rgb(36, 55, 57)', 'rgb(6, 4, 4)'],
        ['rgb(177, 127, 38)', 'rgb(205, 152, 36)', 'rgb(99, 79, 37)', 'rgb(129, 180, 179)', 'rgb(124, 103, 37)'],
        ['rgb(33, 75, 99)', 'rgb(79, 129, 102)', 'rgb(151, 179, 100)', 'rgb(175, 49, 35)', 'rgb(36, 73, 147)'],
        ['rgb(146, 123, 21)', 'rgb(177, 180, 34)', 'rgb(206, 206, 40)', 'rgb(175, 51, 21)', 'rgb(35, 36, 21)'],
    ];

    const data: Array<Partial<PieData>> = [
        {
            values: allValues[0],
            labels: allLabels,
            type: 'pie',
            name: 'Starry Night',
            marker: {
                colors: ultimateColors[0],
            },
            domain: {
                row: 0,
                column: 0,
            },
            hoverinfo: 'label+percent+name',
            textinfo: 'none',
        },
        {
            values: allValues[1],
            labels: allLabels,
            type: 'pie',
            name: 'Sunflowers',
            marker: {
                colors: ultimateColors[1],
            },
            domain: {
                row: 1,
                column: 0,
            },
            hoverinfo: 'label+percent+name',
            textinfo: 'none',
        },
        {
            values: allValues[2],
            labels: allLabels,
            type: 'pie',
            name: 'Irises',
            marker: {
                colors: ultimateColors[2],
            },
            domain: {
                row: 0,
                column: 1,
            },
            hoverinfo: 'label+percent+name',
            textinfo: 'none',
        },
        {
            values: allValues[3],
            labels: allLabels,
            type: 'pie',
            name: 'The Night Cafe',
            marker: {
                colors: ultimateColors[3],
            },
            domain: {
                x: [0.52, 1],
                y: [0, 0.48],
            },
            hoverinfo: 'label+percent+name',
            textinfo: 'none',
        },
    ];

    const layout = {
        height: 400,
        width: 500,
        grid: { rows: 2, columns: 2 },
    };

    Plotly.newPlot(graphDiv, data, layout);
})();

(() => {
    const data: Array<Partial<PieData>> = [
        {
            values: [16, 15, 12, 6, 5, 4, 42],
            labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World'],
            domain: { column: 0 },
            name: 'GHG Emissions',
            hoverinfo: 'label+percent+name',
            hole: 0.4,
            type: 'pie',
        },
        {
            values: [27, 11, 25, 8, 1, 3, 25],
            labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World'],
            text: 'CO2',
            textposition: 'inside',
            domain: { column: 1 },
            name: 'CO2 Emissions',
            hoverinfo: 'label+percent+name',
            hole: 0.4,
            type: 'pie',
        },
    ];

    const layout = {
        title: 'Global Emissions 1990-2011',
        annotations: [
            {
                font: {
                    size: 20,
                },
                showarrow: false,
                text: 'GHG',
                x: 0.17,
                y: 0.5,
            },
            {
                font: {
                    size: 20,
                },
                showarrow: false,
                text: 'CO2',
                x: 0.82,
                y: 0.5,
            },
        ],
        height: 400,
        width: 600,
        showlegend: false,
        grid: { rows: 1, columns: 2 },
        griddash: 'solid',
    };

    Plotly.newPlot('myDiv', data, layout);
})();

(() => {
    const data: Array<Partial<PieData>> = [
        {
            type: 'pie',
            values: [2, 3, 4, 4],
            labels: ['Wages', 'Operating expenses', 'Cost of sales', 'Insurance'],
            textinfo: 'label+percent',
            textposition: 'outside',
            automargin: true,
        },
    ];

    const layout = {
        height: 400,
        width: 400,
        margin: { t: 0, b: 0, l: 0, r: 0 },
        showlegend: false,
    };

    Plotly.newPlot('myDiv', data, layout);
})();

(() => {
    const data: Array<Partial<PieData>> = [
        {
            type: 'pie',
            values: [2, 3, 4, 4],
            labels: ['Wages', 'Operating expenses', 'Cost of sales', 'Insurance'],
            textinfo: 'label+percent',
            insidetextorientation: 'radial',
        },
    ];

    const layout = {
        height: 700,
        width: 700,
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
    const update: Partial<Layout> = {
        title: 'some new title', // updates the title
        'xaxis.range': [0, 5], // updates the xaxis range
        'yaxis.range[1]': 15, // updates the end of the yaxis range
    };
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
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Plotly.update
(() => {
    const data_update: Partial<PlotData> = {
        marker: { color: 'red' },
        type: 'bar',
    };
    const layout_update: Partial<Layout> = {
        title: 'some new title', // updates the title
        barmode: 'stack',
        barnorm: 'fraction',
        bargap: 0,
        bargroupgap: 0,
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
// Plotly.toImage + scale parameter
(() => {
    // Plotly.toImage will turn the plot in the given div into a data URL string
    // toImage takes the div as the first argument and an object specifying image properties as the other
    Plotly.toImage(graphDiv, { format: 'png', width: 800, height: 600, scale: 2 }).then(dataUrl => {
        // use the dataUrl
    });
})();
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Plotly.toImage raw data input
(() => {
    // Plotly.toImage will turn the plot data into a data URL string
    // toImage takes the data as the first argument and an object specifying image properties as the other
    Plotly.toImage({ data, layout }, { format: 'png', width: 800, height: 600, scale: 2 }).then(dataUrl => {
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
})();
//////////////////////////////////////////////////////////////////////
