import * as vega from 'vega';

type Spec = vega.Spec;

// https://vega.github.io/editor/#/examples/vega/bar-chart
const barChart: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 400,
    height: 200,
    padding: 5,

    data: [
        {
            name: 'table',
            values: [
                { category: 'A', amount: 28 },
                { category: 'B', amount: 55 },
                { category: 'C', amount: 43 },
                { category: 'D', amount: 91 },
                { category: 'E', amount: 81 },
                { category: 'F', amount: 53 },
                { category: 'G', amount: 19 },
                { category: 'H', amount: 87 },
            ],
        },
    ],

    signals: [
        {
            name: 'tooltip',
            value: {},
            on: [
                { events: 'rect:mouseover', update: 'datum' },
                { events: 'rect:mouseout', update: '{}' },
            ],
        },
    ],

    scales: [
        {
            name: 'xscale',
            type: 'band',
            domain: { data: 'table', field: 'category' },
            range: 'width',
            padding: 0.05,
            round: true,
        },
        {
            name: 'yscale',
            domain: { data: 'table', field: 'amount' },
            nice: true,
            range: 'height',
        },
    ],

    axes: [
        { orient: 'bottom', scale: 'xscale' },
        { orient: 'left', scale: 'yscale' },
    ],

    marks: [
        {
            type: 'rect',
            from: { data: 'table' },
            encode: {
                enter: {
                    x: { scale: 'xscale', field: 'category' },
                    width: { scale: 'xscale', band: 1 },
                    y: { scale: 'yscale', field: 'amount' },
                    y2: { scale: 'yscale', value: 0 },
                },
                update: {
                    fill: { value: 'steelblue' },
                },
                hover: {
                    fill: { value: 'red' },
                },
            },
        },
        {
            type: 'text',
            encode: {
                enter: {
                    align: { value: 'center' },
                    baseline: { value: 'bottom' },
                    fill: { value: '#333' },
                },
                update: {
                    x: {
                        scale: 'xscale',
                        signal: 'tooltip.category',
                        band: 0.5,
                    },
                    y: {
                        scale: 'yscale',
                        signal: 'tooltip.amount',
                        offset: -2,
                    },
                    text: { signal: 'tooltip.amount' },
                    fillOpacity: [
                        { test: 'datum === tooltip', value: 0 },
                        { value: 1 },
                    ],
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/stacked-bar-chart
const stackedBarChart: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 500,
    height: 200,
    padding: 5,

    data: [
        {
            name: 'table',
            values: [
                { x: 0, y: 28, c: 0 },
                { x: 0, y: 55, c: 1 },
                { x: 1, y: 43, c: 0 },
                { x: 1, y: 91, c: 1 },
                { x: 2, y: 81, c: 0 },
                { x: 2, y: 53, c: 1 },
                { x: 3, y: 19, c: 0 },
                { x: 3, y: 87, c: 1 },
                { x: 4, y: 52, c: 0 },
                { x: 4, y: 48, c: 1 },
                { x: 5, y: 24, c: 0 },
                { x: 5, y: 49, c: 1 },
                { x: 6, y: 87, c: 0 },
                { x: 6, y: 66, c: 1 },
                { x: 7, y: 17, c: 0 },
                { x: 7, y: 27, c: 1 },
                { x: 8, y: 68, c: 0 },
                { x: 8, y: 16, c: 1 },
                { x: 9, y: 49, c: 0 },
                { x: 9, y: 15, c: 1 },
            ],
            transform: [
                {
                    type: 'stack',
                    groupby: ['x'],
                    sort: { field: 'c' },
                    field: 'y',
                },
            ],
        },
    ],

    scales: [
        {
            name: 'x',
            type: 'band',
            range: 'width',
            domain: { data: 'table', field: 'x' },
        },
        {
            name: 'y',
            type: 'linear',
            range: 'height',
            nice: true,
            zero: true,
            domain: { data: 'table', field: 'y1' },
        },
        {
            name: 'color',
            type: 'ordinal',
            range: 'category',
            domain: { data: 'table', field: 'c' },
        },
    ],

    axes: [
        { orient: 'bottom', scale: 'x', zindex: 1 },
        { orient: 'left', scale: 'y', zindex: 1 },
    ],

    marks: [
        {
            type: 'rect',
            from: { data: 'table' },
            encode: {
                enter: {
                    x: { scale: 'x', field: 'x' },
                    width: { scale: 'x', band: 1, offset: -1 },
                    y: { scale: 'y', field: 'y0' },
                    y2: { scale: 'y', field: 'y1' },
                    fill: { scale: 'color', field: 'c' },
                },
                update: {
                    fillOpacity: { value: 1 },
                },
                hover: {
                    fillOpacity: { value: 0.5 },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/grouped-bar-chart
const groupedBarChart: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 300,
    height: 240,
    padding: 5,

    data: [
        {
            name: 'table',
            values: [
                { category: 'A', position: 0, value: 0.1 },
                { category: 'A', position: 1, value: 0.6 },
                { category: 'A', position: 2, value: 0.9 },
                { category: 'A', position: 3, value: 0.4 },
                { category: 'B', position: 0, value: 0.7 },
                { category: 'B', position: 1, value: 0.2 },
                { category: 'B', position: 2, value: 1.1 },
                { category: 'B', position: 3, value: 0.8 },
                { category: 'C', position: 0, value: 0.6 },
                { category: 'C', position: 1, value: 0.1 },
                { category: 'C', position: 2, value: 0.2 },
                { category: 'C', position: 3, value: 0.7 },
            ],
        },
    ],

    scales: [
        {
            name: 'yscale',
            type: 'band',
            domain: { data: 'table', field: 'category' },
            range: 'height',
            padding: 0.2,
        },
        {
            name: 'xscale',
            type: 'linear',
            domain: { data: 'table', field: 'value' },
            range: 'width',
            round: true,
            zero: true,
            nice: true,
        },
        {
            name: 'color',
            type: 'ordinal',
            domain: { data: 'table', field: 'position' },
            range: { scheme: 'category20' },
        },
    ],

    axes: [
        {
            orient: 'left',
            scale: 'yscale',
            tickSize: 0,
            labelPadding: 4,
            zindex: 1,
        },
        { orient: 'bottom', scale: 'xscale' },
    ],

    marks: [
        {
            type: 'group',

            from: {
                facet: {
                    data: 'table',
                    name: 'facet',
                    groupby: 'category',
                },
            },

            encode: {
                enter: {
                    y: { scale: 'yscale', field: 'category' },
                },
            },

            signals: [{ name: 'height', update: "bandwidth('yscale')" }],

            scales: [
                {
                    name: 'pos',
                    type: 'band',
                    range: 'height',
                    domain: { data: 'facet', field: 'position' },
                },
            ],

            marks: [
                {
                    name: 'bars',
                    from: { data: 'facet' },
                    type: 'rect',
                    encode: {
                        enter: {
                            y: { scale: 'pos', field: 'position' },
                            height: { scale: 'pos', band: 1 },
                            x: { scale: 'xscale', field: 'value' },
                            x2: { scale: 'xscale', value: 0 },
                            fill: { scale: 'color', field: 'position' },
                        },
                    },
                },
                {
                    type: 'text',
                    from: { data: 'bars' },
                    encode: {
                        enter: {
                            x: { field: 'x2', offset: -5 },
                            y: {
                                field: 'y',
                                offset: { field: 'height', mult: 0.5 },
                            },
                            fill: { value: 'white' },
                            align: { value: 'right' },
                            baseline: { value: 'middle' },
                            text: { field: 'datum.value' },
                        },
                    },
                },
            ],
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/nested-bar-chart
const nestedBarChart: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 300,
    padding: 5,
    autosize: 'pad',

    signals: [
        {
            name: 'rangeStep',
            value: 20,
            bind: { input: 'range', min: 5, max: 50, step: 1 },
        },
        {
            name: 'innerPadding',
            value: 0.1,
            bind: { input: 'range', min: 0, max: 0.7, step: 0.01 },
        },
        {
            name: 'outerPadding',
            value: 0.2,
            bind: { input: 'range', min: 0, max: 0.4, step: 0.01 },
        },
        {
            name: 'height',
            update: 'trellisExtent[1]',
        },
    ],

    data: [
        {
            name: 'tuples',
            values: [
                { a: 0, b: 'a', c: 6.3 },
                { a: 0, b: 'a', c: 4.2 },
                { a: 0, b: 'b', c: 6.8 },
                { a: 0, b: 'c', c: 5.1 },
                { a: 1, b: 'b', c: 4.4 },
                { a: 2, b: 'b', c: 3.5 },
                { a: 2, b: 'c', c: 6.2 },
            ],
            transform: [
                {
                    type: 'aggregate',
                    groupby: ['a', 'b'],
                    fields: ['c'],
                    ops: ['average'],
                    as: ['c'],
                },
            ],
        },
        {
            name: 'trellis',
            source: 'tuples',
            transform: [
                {
                    type: 'aggregate',
                    groupby: ['a'],
                },
                {
                    type: 'formula',
                    as: 'span',
                    expr:
                        'rangeStep * bandspace(datum.count, innerPadding, outerPadding)',
                },
                {
                    type: 'stack',
                    field: 'span',
                },
                {
                    type: 'extent',
                    field: 'y1',
                    signal: 'trellisExtent',
                },
            ],
        },
    ],

    scales: [
        {
            name: 'xscale',
            domain: { data: 'tuples', field: 'c' },
            nice: true,
            zero: true,
            round: true,
            range: 'width',
        },
        {
            name: 'color',
            type: 'ordinal',
            range: 'category',
            domain: { data: 'trellis', field: 'a' },
        },
    ],

    axes: [{ orient: 'bottom', scale: 'xscale', domain: true }],

    marks: [
        {
            type: 'group',

            from: {
                data: 'trellis',
                facet: {
                    name: 'faceted_tuples',
                    data: 'tuples',
                    groupby: 'a',
                },
            },

            encode: {
                enter: {
                    x: { value: 0 },
                    width: { signal: 'width' },
                },
                update: {
                    y: { field: 'y0' },
                    y2: { field: 'y1' },
                },
            },

            scales: [
                {
                    name: 'yscale',
                    type: 'band',
                    paddingInner: { signal: 'innerPadding' },
                    paddingOuter: { signal: 'outerPadding' },
                    round: true,
                    domain: { data: 'faceted_tuples', field: 'b' },
                    range: { step: { signal: 'rangeStep' } },
                },
            ],

            axes: [
                {
                    orient: 'left',
                    scale: 'yscale',
                    ticks: false,
                    domain: false,
                    labelPadding: 4,
                },
            ],

            marks: [
                {
                    type: 'rect',
                    from: { data: 'faceted_tuples' },
                    encode: {
                        enter: {
                            x: { value: 0 },
                            x2: { scale: 'xscale', field: 'c' },
                            fill: { scale: 'color', field: 'a' },
                            strokeWidth: { value: 2 },
                        },
                        update: {
                            y: { scale: 'yscale', field: 'b' },
                            height: { scale: 'yscale', band: 1 },
                            stroke: { value: null },
                            zindex: { value: 0 },
                        },
                        hover: {
                            stroke: { value: 'firebrick' },
                            zindex: { value: 1 },
                        },
                    },
                },
            ],
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/line-chart
const lineChart: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 300,
    padding: 5,
    autosize: 'pad',

    signals: [
        {
            name: 'rangeStep',
            value: 20,
            bind: { input: 'range', min: 5, max: 50, step: 1 },
        },
        {
            name: 'innerPadding',
            value: 0.1,
            bind: { input: 'range', min: 0, max: 0.7, step: 0.01 },
        },
        {
            name: 'outerPadding',
            value: 0.2,
            bind: { input: 'range', min: 0, max: 0.4, step: 0.01 },
        },
        {
            name: 'height',
            update: 'trellisExtent[1]',
        },
    ],

    data: [
        {
            name: 'tuples',
            values: [
                { a: 0, b: 'a', c: 6.3 },
                { a: 0, b: 'a', c: 4.2 },
                { a: 0, b: 'b', c: 6.8 },
                { a: 0, b: 'c', c: 5.1 },
                { a: 1, b: 'b', c: 4.4 },
                { a: 2, b: 'b', c: 3.5 },
                { a: 2, b: 'c', c: 6.2 },
            ],
            transform: [
                {
                    type: 'aggregate',
                    groupby: ['a', 'b'],
                    fields: ['c'],
                    ops: ['average'],
                    as: ['c'],
                },
            ],
        },
        {
            name: 'trellis',
            source: 'tuples',
            transform: [
                {
                    type: 'aggregate',
                    groupby: ['a'],
                },
                {
                    type: 'formula',
                    as: 'span',
                    expr:
                        'rangeStep * bandspace(datum.count, innerPadding, outerPadding)',
                },
                {
                    type: 'stack',
                    field: 'span',
                },
                {
                    type: 'extent',
                    field: 'y1',
                    signal: 'trellisExtent',
                },
            ],
        },
    ],

    scales: [
        {
            name: 'xscale',
            domain: { data: 'tuples', field: 'c' },
            nice: true,
            zero: true,
            round: true,
            range: 'width',
        },
        {
            name: 'color',
            type: 'ordinal',
            range: 'category',
            domain: { data: 'trellis', field: 'a' },
        },
    ],

    axes: [{ orient: 'bottom', scale: 'xscale', domain: true }],

    marks: [
        {
            type: 'group',

            from: {
                data: 'trellis',
                facet: {
                    name: 'faceted_tuples',
                    data: 'tuples',
                    groupby: 'a',
                },
            },

            encode: {
                enter: {
                    x: { value: 0 },
                    width: { signal: 'width' },
                },
                update: {
                    y: { field: 'y0' },
                    y2: { field: 'y1' },
                },
            },

            scales: [
                {
                    name: 'yscale',
                    type: 'band',
                    paddingInner: { signal: 'innerPadding' },
                    paddingOuter: { signal: 'outerPadding' },
                    round: true,
                    domain: { data: 'faceted_tuples', field: 'b' },
                    range: { step: { signal: 'rangeStep' } },
                },
            ],

            axes: [
                {
                    orient: 'left',
                    scale: 'yscale',
                    ticks: false,
                    domain: false,
                    labelPadding: 4,
                },
            ],

            marks: [
                {
                    type: 'rect',
                    from: { data: 'faceted_tuples' },
                    encode: {
                        enter: {
                            x: { value: 0 },
                            x2: { scale: 'xscale', field: 'c' },
                            fill: { scale: 'color', field: 'a' },
                            strokeWidth: { value: 2 },
                        },
                        update: {
                            y: { scale: 'yscale', field: 'b' },
                            height: { scale: 'yscale', band: 1 },
                            stroke: { value: null },
                        },
                        hover: {
                            stroke: { value: 'firebrick' },
                        },
                    },
                },
            ],
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/area-chart
const areaChart: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 500,
    height: 200,
    padding: 5,

    signals: [
        {
            name: 'interpolate',
            value: 'monotone',
            bind: {
                input: 'select',
                options: [
                    'basis',
                    'cardinal',
                    'catmull-rom',
                    'linear',
                    'monotone',
                    'natural',
                    'step',
                    'step-after',
                    'step-before',
                ],
            },
        },
    ],

    data: [
        {
            name: 'table',
            values: [
                { u: 1, v: 28 },
                { u: 2, v: 55 },
                { u: 3, v: 43 },
                { u: 4, v: 91 },
                { u: 5, v: 81 },
                { u: 6, v: 53 },
                { u: 7, v: 19 },
                { u: 8, v: 87 },
                { u: 9, v: 52 },
                { u: 10, v: 48 },
                { u: 11, v: 24 },
                { u: 12, v: 49 },
                { u: 13, v: 87 },
                { u: 14, v: 66 },
                { u: 15, v: 17 },
                { u: 16, v: 27 },
                { u: 17, v: 68 },
                { u: 18, v: 16 },
                { u: 19, v: 49 },
                { u: 20, v: 15 },
            ],
        },
    ],

    scales: [
        {
            name: 'xscale',
            type: 'linear',
            range: 'width',
            zero: false,
            domain: { data: 'table', field: 'u' },
        },
        {
            name: 'yscale',
            type: 'linear',
            range: 'height',
            nice: true,
            zero: true,
            domain: { data: 'table', field: 'v' },
        },
    ],

    axes: [
        { orient: 'bottom', scale: 'xscale', tickCount: 20 },
        { orient: 'left', scale: 'yscale' },
    ],

    marks: [
        {
            type: 'area',
            from: { data: 'table' },
            encode: {
                enter: {
                    x: { scale: 'xscale', field: 'u' },
                    y: { scale: 'yscale', field: 'v' },
                    y2: { scale: 'yscale', value: 0 },
                    fill: { value: 'steelblue' },
                },
                update: {
                    interpolate: { signal: 'interpolate' },
                    fillOpacity: { value: 1 },
                },
                hover: {
                    fillOpacity: { value: 0.5 },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/stacked-area-chart
const stackedAreaChart: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 500,
    height: 200,
    padding: 5,

    data: [
        {
            name: 'table',
            values: [
                { x: 0, y: 28, c: 0 },
                { x: 0, y: 55, c: 1 },
                { x: 1, y: 43, c: 0 },
                { x: 1, y: 91, c: 1 },
                { x: 2, y: 81, c: 0 },
                { x: 2, y: 53, c: 1 },
                { x: 3, y: 19, c: 0 },
                { x: 3, y: 87, c: 1 },
                { x: 4, y: 52, c: 0 },
                { x: 4, y: 48, c: 1 },
                { x: 5, y: 24, c: 0 },
                { x: 5, y: 49, c: 1 },
                { x: 6, y: 87, c: 0 },
                { x: 6, y: 66, c: 1 },
                { x: 7, y: 17, c: 0 },
                { x: 7, y: 27, c: 1 },
                { x: 8, y: 68, c: 0 },
                { x: 8, y: 16, c: 1 },
                { x: 9, y: 49, c: 0 },
                { x: 9, y: 15, c: 1 },
            ],
            transform: [
                {
                    type: 'stack',
                    groupby: ['x'],
                    sort: { field: 'c' },
                    field: 'y',
                },
            ],
        },
    ],

    scales: [
        {
            name: 'x',
            type: 'point',
            range: 'width',
            domain: { data: 'table', field: 'x' },
        },
        {
            name: 'y',
            type: 'linear',
            range: 'height',
            nice: true,
            zero: true,
            domain: { data: 'table', field: 'y1' },
        },
        {
            name: 'color',
            type: 'ordinal',
            range: 'category',
            domain: { data: 'table', field: 'c' },
        },
    ],

    axes: [
        { orient: 'bottom', scale: 'x', zindex: 1 },
        { orient: 'left', scale: 'y', zindex: 1 },
    ],

    marks: [
        {
            type: 'group',
            from: {
                facet: {
                    name: 'series',
                    data: 'table',
                    groupby: 'c',
                },
            },
            marks: [
                {
                    type: 'area',
                    from: { data: 'series' },
                    encode: {
                        enter: {
                            interpolate: { value: 'monotone' },
                            x: { scale: 'x', field: 'x' },
                            y: { scale: 'y', field: 'y0' },
                            y2: { scale: 'y', field: 'y1' },
                            fill: { scale: 'color', field: 'c' },
                        },
                        update: {
                            fillOpacity: { value: 1 },
                        },
                        hover: {
                            fillOpacity: { value: 0.5 },
                        },
                    },
                },
            ],
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/horizon-graph
const horizonGraph: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 500,
    height: 100,

    signals: [
        {
            name: 'layers',
            value: 2,
            on: [{ events: 'mousedown!', update: '1 + (layers % 4)' }],
            bind: { input: 'select', options: [1, 2, 3, 4] },
        },
        {
            name: 'height',
            update: 'floor(200 / layers)',
        },
        {
            name: 'vheight',
            update: 'height * layers',
        },
        {
            name: 'opacity',
            update: 'pow(layers, -2/3)',
        },
    ],

    data: [
        {
            name: 'layer_indices',
            values: [0, 1, 2, 3],
            transform: [
                { type: 'filter', expr: 'datum.data < layers' },
                { type: 'formula', expr: 'datum.data * -height', as: 'offset' },
            ],
        },
        {
            name: 'table',
            values: [
                { x: 1, y: 28 },
                { x: 2, y: 55 },
                { x: 3, y: 43 },
                { x: 4, y: 91 },
                { x: 5, y: 81 },
                { x: 6, y: 53 },
                { x: 7, y: 19 },
                { x: 8, y: 87 },
                { x: 9, y: 52 },
                { x: 10, y: 48 },
                { x: 11, y: 24 },
                { x: 12, y: 49 },
                { x: 13, y: 87 },
                { x: 14, y: 66 },
                { x: 15, y: 17 },
                { x: 16, y: 27 },
                { x: 17, y: 68 },
                { x: 18, y: 16 },
                { x: 19, y: 49 },
                { x: 20, y: 15 },
            ],
        },
    ],

    scales: [
        {
            name: 'x',
            type: 'linear',
            range: 'width',
            zero: false,
            round: true,
            domain: { data: 'table', field: 'x' },
        },
        {
            name: 'y',
            type: 'linear',
            range: [{ signal: 'vheight' }, 0],
            nice: true,
            zero: true,
            domain: { data: 'table', field: 'y' },
        },
    ],

    axes: [{ orient: 'bottom', scale: 'x', tickCount: 20 }],

    marks: [
        {
            type: 'group',
            encode: {
                update: {
                    width: { field: { group: 'width' } },
                    height: { field: { group: 'height' } },
                    clip: { value: true },
                },
            },
            marks: [
                {
                    type: 'group',
                    from: { data: 'layer_indices' },
                    encode: {
                        update: {
                            y: { field: 'offset' },
                        },
                    },
                    marks: [
                        {
                            type: 'area',
                            from: { data: 'table' },
                            encode: {
                                enter: {
                                    interpolate: { value: 'monotone' },
                                    x: { scale: 'x', field: 'x' },
                                    fill: { value: 'steelblue' },
                                },
                                update: {
                                    y: { scale: 'y', field: 'y' },
                                    y2: { scale: 'y', value: 0 },
                                    fillOpacity: { signal: 'opacity' },
                                },
                            },
                        },
                    ],
                },
            ],
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/job-voyager
const jobVoyager: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 800,
    height: 500,
    padding: 5,

    signals: [
        {
            name: 'sex',
            value: 'all',
            bind: { input: 'radio', options: ['men', 'women', 'all'] },
        },
        {
            name: 'query',
            value: '',
            on: [
                { events: 'area:click!', update: 'datum.job' },
                { events: 'dblclick!', update: "''" },
            ],
            bind: { input: 'text', placeholder: 'search', autocomplete: 'off' },
        },
    ],

    data: [
        {
            name: 'jobs',
            url: 'data/jobs.json',
            transform: [
                {
                    type: 'filter',
                    expr:
                        "(sex === 'all' || datum.sex === sex) && (!query || test(regexp(query,'i'), datum.job))",
                },
                {
                    type: 'stack',
                    field: 'perc',
                    groupby: ['year'],
                    sort: {
                        field: ['job', 'sex'],
                        order: ['descending', 'descending'],
                    },
                },
            ],
        },
        {
            name: 'series',
            source: 'jobs',
            transform: [
                {
                    type: 'aggregate',
                    groupby: ['job', 'sex'],
                    fields: ['perc', 'perc'],
                    ops: ['sum', 'argmax'],
                    as: ['sum', 'argmax'],
                },
            ],
        },
    ],

    scales: [
        {
            name: 'x',
            type: 'linear',
            range: 'width',
            zero: false,
            round: true,
            domain: { data: 'jobs', field: 'year' },
        },
        {
            name: 'y',
            type: 'linear',
            range: 'height',
            round: true,
            zero: true,
            domain: { data: 'jobs', field: 'y1' },
        },
        {
            name: 'color',
            type: 'ordinal',
            domain: ['men', 'women'],
            range: ['#33f', '#f33'],
        },
        {
            name: 'alpha',
            type: 'linear',
            zero: true,
            domain: { data: 'series', field: 'sum' },
            range: [0.4, 0.8],
        },
        {
            name: 'font',
            type: 'sqrt',
            range: [0, 20],
            round: true,
            zero: true,
            domain: { data: 'series', field: 'argmax.perc' },
        },
        {
            name: 'opacity',
            type: 'quantile',
            range: [0, 0, 0, 0, 0, 0.1, 0.2, 0.4, 0.7, 1.0],
            domain: { data: 'series', field: 'argmax.perc' },
        },
        {
            name: 'align',
            type: 'quantize',
            range: ['left', 'center', 'right'],
            zero: false,
            domain: [1730, 2130],
        },
        {
            name: 'offset',
            type: 'quantize',
            range: [6, 0, -6],
            zero: false,
            domain: [1730, 2130],
        },
    ],

    axes: [
        {
            orient: 'bottom',
            scale: 'x',
            format: 'd',
            tickCount: 15,
        },
        {
            orient: 'right',
            scale: 'y',
            format: '%',
            grid: true,
            domain: false,
            tickSize: 12,
            encode: {
                grid: { enter: { stroke: { value: '#ccc' } } },
                ticks: { enter: { stroke: { value: '#ccc' } } },
            },
        },
    ],

    marks: [
        {
            type: 'group',
            from: {
                data: 'series',
                facet: {
                    name: 'facet',
                    data: 'jobs',
                    groupby: ['job', 'sex'],
                },
            },

            marks: [
                {
                    type: 'area',
                    from: { data: 'facet' },
                    encode: {
                        update: {
                            x: { scale: 'x', field: 'year' },
                            y: { scale: 'y', field: 'y0' },
                            y2: { scale: 'y', field: 'y1' },
                            fill: { scale: 'color', field: 'sex' },
                            fillOpacity: {
                                scale: 'alpha',
                                field: { parent: 'sum' },
                            },
                        },
                        hover: {
                            fillOpacity: { value: 0.2 },
                        },
                    },
                },
            ],
        },
        {
            type: 'text',
            from: { data: 'series' },
            interactive: false,
            encode: {
                update: {
                    x: { scale: 'x', field: 'argmax.year' },
                    dx: { scale: 'offset', field: 'argmax.year' },
                    y: {
                        signal:
                            "scale('y', 0.5 * (datum.argmax.y0 + datum.argmax.y1))",
                    },
                    fill: { value: '#000' },
                    fillOpacity: { scale: 'opacity', field: 'argmax.perc' },
                    fontSize: {
                        scale: 'font',
                        field: 'argmax.perc',
                        offset: 5,
                    },
                    text: { field: 'job' },
                    align: { scale: 'align', field: 'argmax.year' },
                    baseline: { value: 'middle' },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/pie-chart
const pieChart: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 200,
    height: 200,
    autosize: 'none',

    signals: [
        {
            name: 'startAngle',
            value: 0,
            bind: { input: 'range', min: 0, max: 6.29, step: 0.01 },
        },
        {
            name: 'endAngle',
            value: 6.29,
            bind: { input: 'range', min: 0, max: 6.29, step: 0.01 },
        },
        {
            name: 'padAngle',
            value: 0,
            bind: { input: 'range', min: 0, max: 0.1 },
        },
        {
            name: 'innerRadius',
            value: 0,
            bind: { input: 'range', min: 0, max: 90, step: 1 },
        },
        {
            name: 'cornerRadius',
            value: 0,
            bind: { input: 'range', min: 0, max: 10, step: 0.5 },
        },
        {
            name: 'sort',
            value: false,
            bind: { input: 'checkbox' },
        },
    ],

    data: [
        {
            name: 'table',
            values: [
                { id: 1, field: 4 },
                { id: 2, field: 6 },
                { id: 3, field: 10 },
                { id: 4, field: 3 },
                { id: 5, field: 7 },
                { id: 6, field: 8 },
            ],
            transform: [
                {
                    type: 'pie',
                    field: 'field',
                    startAngle: { signal: 'startAngle' },
                    endAngle: { signal: 'endAngle' },
                    sort: { signal: 'sort' },
                },
            ],
        },
    ],

    scales: [
        {
            name: 'color',
            type: 'ordinal',
            range: { scheme: 'category20' },
        },
    ],

    marks: [
        {
            type: 'arc',
            from: { data: 'table' },
            encode: {
                enter: {
                    fill: { scale: 'color', field: 'id' },
                    x: { signal: 'width / 2' },
                    y: { signal: 'height / 2' },
                },
                update: {
                    startAngle: { field: 'startAngle' },
                    endAngle: { field: 'endAngle' },
                    padAngle: { signal: 'padAngle' },
                    innerRadius: { signal: 'innerRadius' },
                    outerRadius: { signal: 'width / 2' },
                    cornerRadius: { signal: 'cornerRadius' },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/donut-chart
const donutChart: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 200,
    height: 200,
    autosize: 'none',

    signals: [
        {
            name: 'startAngle',
            value: 0,
            bind: { input: 'range', min: 0, max: 6.29, step: 0.01 },
        },
        {
            name: 'endAngle',
            value: 6.29,
            bind: { input: 'range', min: 0, max: 6.29, step: 0.01 },
        },
        {
            name: 'padAngle',
            value: 0,
            bind: { input: 'range', min: 0, max: 0.1 },
        },
        {
            name: 'innerRadius',
            value: 60,
            bind: { input: 'range', min: 0, max: 90, step: 1 },
        },
        {
            name: 'cornerRadius',
            value: 0,
            bind: { input: 'range', min: 0, max: 10, step: 0.5 },
        },
        {
            name: 'sort',
            value: false,
            bind: { input: 'checkbox' },
        },
    ],

    data: [
        {
            name: 'table',
            values: [
                { id: 1, field: 4 },
                { id: 2, field: 6 },
                { id: 3, field: 10 },
                { id: 4, field: 3 },
                { id: 5, field: 7 },
                { id: 6, field: 8 },
            ],
            transform: [
                {
                    type: 'pie',
                    field: 'field',
                    startAngle: { signal: 'startAngle' },
                    endAngle: { signal: 'endAngle' },
                    sort: { signal: 'sort' },
                },
            ],
        },
    ],

    scales: [
        {
            name: 'color',
            type: 'ordinal',
            range: { scheme: 'category20' },
        },
    ],

    marks: [
        {
            type: 'arc',
            from: { data: 'table' },
            encode: {
                enter: {
                    fill: { scale: 'color', field: 'id' },
                    x: { signal: 'width / 2' },
                    y: { signal: 'height / 2' },
                },
                update: {
                    startAngle: { field: 'startAngle' },
                    endAngle: { field: 'endAngle' },
                    padAngle: { signal: 'padAngle' },
                    innerRadius: { signal: 'innerRadius' },
                    outerRadius: { signal: 'width / 2' },
                    cornerRadius: { signal: 'cornerRadius' },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/radial-plot
const radialPlot: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 200,
    height: 200,

    data: [
        {
            name: 'table',
            values: [12, 23, 47, 6, 52, 19],
            transform: [{ type: 'pie', field: 'data' }],
        },
    ],

    scales: [
        {
            name: 'r',
            type: 'sqrt',
            domain: { data: 'table', field: 'data' },
            zero: true,
            range: [20, 100],
        },
    ],

    marks: [
        {
            type: 'arc',
            from: { data: 'table' },
            encode: {
                enter: {
                    x: { field: { group: 'width' }, mult: 0.5 },
                    y: { field: { group: 'height' }, mult: 0.5 },
                    startAngle: { field: 'startAngle' },
                    endAngle: { field: 'endAngle' },
                    innerRadius: { value: 20 },
                    outerRadius: { scale: 'r', field: 'data' },
                    stroke: { value: '#fff' },
                },
                update: {
                    fill: { value: '#ccc' },
                },
                hover: {
                    fill: { value: 'pink' },
                },
            },
        },

        {
            type: 'text',
            from: { data: 'table' },
            encode: {
                enter: {
                    x: { field: { group: 'width' }, mult: 0.5 },
                    y: { field: { group: 'height' }, mult: 0.5 },
                    radius: { scale: 'r', field: 'data', offset: 8 },
                    theta: { signal: '(datum.startAngle + datum.endAngle)/2' },
                    fill: { value: '#000' },
                    align: { value: 'center' },
                    baseline: { value: 'middle' },
                    text: { field: 'data' },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/scatter-plot
const scatterPlot: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 200,
    height: 200,
    padding: 5,

    data: [
        {
            name: 'source',
            url: 'data/cars.json',
            transform: [
                {
                    type: 'filter',
                    expr:
                        "datum['Horsepower'] != null && datum['Miles_per_Gallon'] != null && datum['Acceleration'] != null",
                },
            ],
        },
    ],

    scales: [
        {
            name: 'x',
            type: 'linear',
            round: true,
            nice: true,
            zero: true,
            domain: { data: 'source', field: 'Horsepower' },
            range: 'width',
        },
        {
            name: 'y',
            type: 'linear',
            round: true,
            nice: true,
            zero: true,
            domain: { data: 'source', field: 'Miles_per_Gallon' },
            range: 'height',
        },
        {
            name: 'size',
            type: 'linear',
            round: true,
            nice: false,
            zero: true,
            domain: { data: 'source', field: 'Acceleration' },
            range: [4, 361],
        },
    ],

    axes: [
        {
            scale: 'x',
            grid: true,
            domain: false,
            orient: 'bottom',
            tickCount: 5,
            title: 'Horsepower',
        },
        {
            scale: 'y',
            grid: true,
            domain: false,
            orient: 'left',
            titlePadding: 5,
            title: 'Miles_per_Gallon',
        },
    ],

    legends: [
        {
            size: 'size',
            title: 'Acceleration',
            format: 's',
            encode: {
                symbols: {
                    update: {
                        strokeWidth: { value: 2 },
                        opacity: { value: 0.5 },
                        stroke: { value: '#4682b4' },
                        shape: { value: 'circle' },
                    },
                },
            },
        },
    ],

    marks: [
        {
            name: 'marks',
            type: 'symbol',
            from: { data: 'source' },
            encode: {
                update: {
                    x: { scale: 'x', field: 'Horsepower' },
                    y: { scale: 'y', field: 'Miles_per_Gallon' },
                    size: { scale: 'size', field: 'Acceleration' },
                    shape: { value: 'circle' as 'circle' },
                    strokeWidth: { value: 2 },
                    opacity: { value: 0.5 },
                    stroke: { value: '#4682b4' },
                    fill: { value: 'transparent' },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/scatter-plot-null-values
const scatterPlotNullValues: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 450,
    height: 450,
    padding: 5,
    autosize: { type: 'fit', resize: true },

    signals: [
        {
            name: 'yField',
            value: 'IMDB_Rating',
            bind: {
                input: 'select',
                options: [
                    'IMDB_Rating',
                    'Rotten_Tomatoes_Rating',
                    'US_Gross',
                    'Worldwide_Gross',
                ],
            },
        },
        {
            name: 'xField',
            value: 'Rotten_Tomatoes_Rating',
            bind: {
                input: 'select',
                options: [
                    'IMDB_Rating',
                    'Rotten_Tomatoes_Rating',
                    'US_Gross',
                    'Worldwide_Gross',
                ],
            },
        },
        { name: 'nullSize', value: 8 },
        { name: 'nullGap', update: 'nullSize + 10' },
    ],

    data: [
        {
            name: 'movies',
            url: 'data/movies.json',
            transform: [
                {
                    type: 'formula',
                    expr:
                        "datum.Title + ' (' + (year(datum.Release_Date) || '?') + ')'",
                    as: 'tooltip',
                },
            ],
        },
        {
            name: 'valid',
            source: 'movies',
            transform: [
                {
                    type: 'filter',
                    expr: 'datum[xField] != null && datum[yField] != null',
                },
            ],
        },
        {
            name: 'nullXY',
            source: 'movies',
            transform: [
                {
                    type: 'filter',
                    expr: 'datum[xField] == null && datum[yField] == null',
                },
                { type: 'aggregate' },
            ],
        },
        {
            name: 'nullY',
            source: 'movies',
            transform: [
                {
                    type: 'filter',
                    expr: 'datum[xField] != null && datum[yField] == null',
                },
            ],
        },
        {
            name: 'nullX',
            source: 'movies',
            transform: [
                {
                    type: 'filter',
                    expr: 'datum[xField] == null && datum[yField] != null',
                },
            ],
        },
    ],

    scales: [
        {
            name: 'yscale',
            type: 'linear',
            range: [{ signal: 'height - nullGap' }, 0],
            nice: true,
            domain: { data: 'valid', field: { signal: 'yField' } },
        },
        {
            name: 'xscale',
            type: 'linear',
            range: [{ signal: 'nullGap' }, { signal: 'width' }],
            nice: true,
            domain: { data: 'valid', field: { signal: 'xField' } },
        },
    ],

    axes: [
        {
            orient: 'bottom',
            scale: 'xscale',
            offset: 5,
            format: 's',
            title: { signal: 'xField' },
        },
        {
            orient: 'left',
            scale: 'yscale',
            offset: 5,
            format: 's',
            title: { signal: 'yField' },
        },
    ],

    marks: [
        {
            type: 'symbol',
            from: { data: 'valid' },
            encode: {
                enter: {
                    size: { value: 50 },
                    tooltip: { field: 'tooltip' },
                },
                update: {
                    x: { scale: 'xscale', field: { signal: 'xField' } },
                    y: { scale: 'yscale', field: { signal: 'yField' } },
                    fill: { value: 'steelblue' },
                    fillOpacity: { value: 0.5 },
                    zindex: { value: 0 },
                },
                hover: {
                    fill: { value: 'firebrick' },
                    fillOpacity: { value: 1 },
                    zindex: { value: 1 },
                },
            },
        },
        {
            type: 'symbol',
            from: { data: 'nullY' },
            encode: {
                enter: {
                    size: { value: 50 },
                    tooltip: { field: 'tooltip' },
                },
                update: {
                    x: { scale: 'xscale', field: { signal: 'xField' } },
                    y: { signal: 'height - nullSize/2' },
                    fill: { value: '#aaa' },
                    fillOpacity: { value: 0.2 },
                },
                hover: {
                    fill: { value: 'firebrick' },
                    fillOpacity: { value: 1 },
                },
            },
        },
        {
            type: 'symbol',
            from: { data: 'nullX' },
            encode: {
                enter: {
                    size: { value: 50 },
                    tooltip: { field: 'tooltip' },
                },
                update: {
                    x: { signal: 'nullSize/2' },
                    y: { scale: 'yscale', field: { signal: 'yField' } },
                    fill: { value: '#aaa' },
                    fillOpacity: { value: 0.2 },
                    zindex: { value: 0 },
                },
                hover: {
                    fill: { value: 'firebrick' },
                    fillOpacity: { value: 1 },
                    zindex: { value: 1 },
                },
            },
        },
        {
            type: 'text',
            interactive: false,
            from: { data: 'nullXY' },
            encode: {
                update: {
                    x: { signal: 'nullSize', offset: -4 },
                    y: { signal: 'height', offset: 13 },
                    text: { signal: "datum.count + ' null'" },
                    align: { value: 'right' },
                    baseline: { value: 'top' },
                    fill: { value: '#999' },
                    fontSize: { value: 9 },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/connected-scatter-plot
const connectedScatterPlot: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 800,
    height: 500,
    padding: 5,

    data: [
        {
            name: 'drive',
            url: 'data/driving.json',
        },
    ],

    scales: [
        {
            name: 'x',
            type: 'linear',
            domain: { data: 'drive', field: 'miles' },
            range: 'width',
            nice: true,
            zero: false,
            round: true,
        },
        {
            name: 'y',
            type: 'linear',
            domain: { data: 'drive', field: 'gas' },
            range: 'height',
            nice: true,
            zero: false,
            round: true,
        },
        {
            name: 'align',
            type: 'ordinal',
            domain: ['left', 'right', 'top', 'bottom'],
            range: ['right', 'left', 'center', 'center'],
        },
        {
            name: 'base',
            type: 'ordinal',
            domain: ['left', 'right', 'top', 'bottom'],
            range: ['middle', 'middle', 'bottom', 'top'],
        },
        {
            name: 'dx',
            type: 'ordinal',
            domain: ['left', 'right', 'top', 'bottom'],
            range: [-7, 6, 0, 0],
        },
        {
            name: 'dy',
            type: 'ordinal',
            domain: ['left', 'right', 'top', 'bottom'],
            range: [1, 1, -5, 6],
        },
    ],

    axes: [
        {
            orient: 'top',
            scale: 'x',
            tickCount: 5,
            tickSize: 0,
            grid: true,
            domain: false,
            encode: {
                domain: {
                    enter: { stroke: { value: 'transparent' } },
                },
                labels: {
                    enter: {
                        align: { value: 'left' },
                        baseline: { value: 'top' },
                        fontSize: { value: 12 },
                        fontWeight: { value: 'bold' },
                    },
                },
            },
        },
        {
            title: 'Miles driven per capita each year',
            orient: 'bottom',
            scale: 'x',
            domain: false,
            ticks: false,
            labels: false,
        },
        {
            orient: 'left',
            scale: 'y',
            tickCount: 5,
            tickSize: 0,
            grid: true,
            domain: false,
            format: '$0.2f',
            encode: {
                domain: {
                    enter: { stroke: { value: 'transparent' } },
                },
                labels: {
                    enter: {
                        align: { value: 'left' },
                        baseline: { value: 'bottom' },
                        fontSize: { value: 12 },
                        fontWeight: { value: 'bold' },
                    },
                },
            },
        },
        {
            title: 'Price of a gallon of gasoline (adjusted for inflation)',
            orient: 'right',
            scale: 'y',
            domain: false,
            ticks: false,
            labels: false,
        },
    ],

    marks: [
        {
            type: 'line',
            from: { data: 'drive' },
            encode: {
                enter: {
                    interpolate: { value: 'cardinal' },
                    x: { scale: 'x', field: 'miles' },
                    y: { scale: 'y', field: 'gas' },
                    stroke: { value: '#000' },
                    strokeWidth: { value: 3 },
                },
            },
        },
        {
            type: 'symbol',
            from: { data: 'drive' },
            encode: {
                enter: {
                    x: { scale: 'x', field: 'miles' },
                    y: { scale: 'y', field: 'gas' },
                    fill: { value: '#fff' },
                    stroke: { value: '#000' },
                    strokeWidth: { value: 1 },
                    size: { value: 49 },
                },
            },
        },
        {
            type: 'text',
            from: { data: 'drive' },
            encode: {
                enter: {
                    x: { scale: 'x', field: 'miles' },
                    y: { scale: 'y', field: 'gas' },
                    dx: { scale: 'dx', field: 'side' },
                    dy: { scale: 'dy', field: 'side' },
                    fill: { value: '#000' },
                    text: { field: 'year' },
                    align: { scale: 'align', field: 'side' },
                    baseline: { scale: 'base', field: 'side' },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/error-bars
const errorBars: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 500,
    height: 160,
    padding: 5,

    config: {
        axisBand: {
            bandPosition: 1,
            tickExtra: true,
            tickOffset: 0,
        },
    },

    signals: [
        {
            name: 'errorMeasure',
            value: '95% Confidence Interval',
            bind: {
                input: 'select',
                options: [
                    '95% Confidence Interval',
                    'Standard Error',
                    'Standard Deviation',
                    'Interquartile Range',
                ],
            },
        },
        {
            name: 'lookup',
            value: {
                '95% Confidence Interval': 'ci',
                'Standard Deviation': 'stdev',
                'Standard Error': 'stderr',
                'Interquartile Range': 'iqr',
            },
        },
        {
            name: 'measure',
            update: 'lookup[errorMeasure]',
        },
    ],

    data: [
        {
            name: 'barley',
            url: 'data/barley.json',
        },
        {
            name: 'summary',
            source: 'barley',
            transform: [
                {
                    type: 'aggregate',
                    groupby: ['variety'],
                    fields: [
                        'yield',
                        'yield',
                        'yield',
                        'yield',
                        'yield',
                        'yield',
                        'yield',
                    ],
                    ops: ['mean', 'stdev', 'stderr', 'ci0', 'ci1', 'q1', 'q3'],
                    as: [
                        'mean',
                        'stdev',
                        'stderr',
                        'ci0',
                        'ci1',
                        'iqr0',
                        'iqr1',
                    ],
                },
                {
                    type: 'formula',
                    as: 'stdev0',
                    expr: 'datum.mean - datum.stdev',
                },
                {
                    type: 'formula',
                    as: 'stdev1',
                    expr: 'datum.mean + datum.stdev',
                },
                {
                    type: 'formula',
                    as: 'stderr0',
                    expr: 'datum.mean - datum.stderr',
                },
                {
                    type: 'formula',
                    as: 'stderr1',
                    expr: 'datum.mean + datum.stderr',
                },
            ],
        },
    ],

    scales: [
        {
            name: 'yscale',
            type: 'band',
            range: 'height',
            domain: {
                data: 'summary',
                field: 'variety',
                sort: { op: 'max', field: 'mean', order: 'descending' },
            },
        },
        {
            name: 'xscale',
            type: 'linear',
            range: 'width',
            round: true,
            domain: { data: 'summary', fields: ['stdev0', 'stdev1'] },
            zero: false,
            nice: true,
        },
    ],

    axes: [
        { orient: 'bottom', scale: 'xscale', zindex: 1, title: 'Barley Yield' },
        { orient: 'left', scale: 'yscale', tickCount: 5, zindex: 1 },
    ],

    marks: [
        {
            type: 'rect',
            from: { data: 'summary' },
            encode: {
                enter: {
                    fill: { value: 'black' },
                    height: { value: 1 },
                },
                update: {
                    y: { scale: 'yscale', field: 'variety', band: 0.5 },
                    x: { scale: 'xscale', signal: "datum[measure+'0']" },
                    x2: { scale: 'xscale', signal: "datum[measure+'1']" },
                },
            },
        },
        {
            type: 'symbol',
            from: { data: 'summary' },
            encode: {
                enter: {
                    fill: { value: 'black' },
                    size: { value: 40 },
                },
                update: {
                    x: { scale: 'xscale', field: 'mean' },
                    y: { scale: 'yscale', field: 'variety', band: 0.5 },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/barley-trellis-plot
const barleyTrellisPlot: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 200,
    padding: 5,

    signals: [
        { name: 'offset', value: 15 },
        { name: 'cellHeight', value: 100 },
        { name: 'height', update: '6 * (offset + cellHeight)' },
    ],

    data: [
        {
            name: 'barley',
            url: 'data/barley.json',
        },
    ],

    scales: [
        {
            name: 'gscale',
            type: 'band',
            range: [0, { signal: 'height' }],
            round: true,
            domain: {
                data: 'barley',
                field: 'site',
                sort: {
                    field: 'yield',
                    op: 'median',
                    order: 'descending',
                },
            },
        },
        {
            name: 'xscale',
            type: 'linear',
            nice: true,
            range: 'width',
            round: true,
            domain: { data: 'barley', field: 'yield' },
        },
        {
            name: 'cscale',
            type: 'ordinal',
            range: 'category',
            domain: { data: 'barley', field: 'year' },
        },
    ],

    axes: [{ orient: 'bottom', scale: 'xscale', zindex: 1 }],

    legends: [
        {
            stroke: 'cscale',
            title: 'Year',
            padding: 4,
            encode: {
                symbols: {
                    enter: {
                        strokeWidth: { value: 2 },
                        size: { value: 50 },
                    },
                },
            },
        },
    ],

    marks: [
        {
            name: 'site',
            type: 'group',

            from: {
                facet: {
                    data: 'barley',
                    name: 'sites',
                    groupby: 'site',
                },
            },

            encode: {
                enter: {
                    y: {
                        scale: 'gscale',
                        field: 'site',
                        offset: { signal: 'offset' },
                    },
                    height: { signal: 'cellHeight' },
                    width: { signal: 'width' },
                    stroke: { value: '#ccc' },
                },
            },

            scales: [
                {
                    name: 'yscale',
                    type: 'point',
                    range: [0, { signal: 'cellHeight' }],
                    padding: 1,
                    round: true,
                    domain: {
                        data: 'barley',
                        field: 'variety',
                        sort: {
                            field: 'yield',
                            op: 'median',
                            order: 'descending',
                        },
                    },
                },
            ],

            axes: [
                {
                    orient: 'left',
                    scale: 'yscale',
                    tickSize: 0,
                    domain: false,
                    grid: true,
                    encode: {
                        grid: {
                            enter: { strokeDash: { value: [3, 3] } },
                        },
                    },
                },
                {
                    orient: 'right',
                    scale: 'yscale',
                    tickSize: 0,
                    domain: false,
                },
            ],

            marks: [
                {
                    type: 'symbol',
                    from: { data: 'sites' },
                    encode: {
                        enter: {
                            x: { scale: 'xscale', field: 'yield' },
                            y: { scale: 'yscale', field: 'variety' },
                            stroke: { scale: 'cscale', field: 'year' },
                            strokeWidth: { value: 2 },
                            size: { value: 50 },
                        },
                    },
                },
            ],
        },

        {
            type: 'text',
            from: { data: 'site' },
            encode: {
                enter: {
                    x: { field: 'width', mult: 0.5 },
                    y: { field: 'y' },
                    fontSize: { value: 11 },
                    fontWeight: { value: 'bold' },
                    text: { field: 'datum.site' },
                    align: { value: 'center' },
                    baseline: { value: 'bottom' },
                    fill: { value: '#000' },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/histogram
const histogram: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 500,
    height: 100,
    padding: 5,

    signals: [
        {
            name: 'binOffset',
            value: 0,
            bind: { input: 'range', min: -0.1, max: 0.1 },
        },
        {
            name: 'binStep',
            value: 0.1,
            bind: { input: 'range', min: 0.001, max: 0.4, step: 0.001 },
        },
    ],

    data: [
        {
            name: 'points',
            url: 'data/normal-2d.json',
        },
        {
            name: 'binned',
            source: 'points',
            transform: [
                {
                    type: 'bin',
                    field: 'u',
                    extent: [-1, 1],
                    anchor: { signal: 'binOffset' },
                    step: { signal: 'binStep' },
                    nice: false,
                },
                {
                    type: 'aggregate',
                    key: 'bin0',
                    groupby: ['bin0', 'bin1'],
                    fields: ['bin0'],
                    ops: ['count'],
                    as: ['count'],
                },
            ],
        },
    ],

    scales: [
        {
            name: 'xscale',
            type: 'linear',
            range: 'width',
            domain: [-1, 1],
        },
        {
            name: 'yscale',
            type: 'linear',
            range: 'height',
            round: true,
            domain: { data: 'binned', field: 'count' },
            zero: true,
            nice: true,
        },
    ],

    axes: [
        { orient: 'bottom', scale: 'xscale', zindex: 1 },
        { orient: 'left', scale: 'yscale', tickCount: 5, zindex: 1 },
    ],

    marks: [
        {
            type: 'rect',
            from: { data: 'binned' },
            encode: {
                update: {
                    x: { scale: 'xscale', field: 'bin0' },
                    x2: {
                        scale: 'xscale',
                        field: 'bin1',
                        offset: { signal: 'binStep > 0.02 ? -0.5 : 0' },
                    },
                    y: { scale: 'yscale', field: 'count' },
                    y2: { scale: 'yscale', value: 0 },
                    fill: { value: 'steelblue' },
                },
                hover: { fill: { value: 'firebrick' } },
            },
        },
        {
            type: 'rect',
            from: { data: 'points' },
            encode: {
                enter: {
                    x: { scale: 'xscale', field: 'u' },
                    width: { value: 1 },
                    y: { value: 25, offset: { signal: 'height' } },
                    height: { value: 5 },
                    fill: { value: 'steelblue' },
                    fillOpacity: { value: 0.4 },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/histogram-null-values
const histogramNullValues: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 400,
    height: 200,
    padding: 5,
    autosize: { type: 'fit', resize: true },

    signals: [
        {
            name: 'maxbins',
            value: 10,
            bind: { input: 'select', options: [5, 10, 20] },
        },
        {
            name: 'binDomain',
            update: 'sequence(bins.start, bins.stop + bins.step, bins.step)',
        },
        {
            name: 'nullGap',
            value: 10,
        },
        {
            name: 'barStep',
            update: '(width - nullGap) / binDomain.length',
        },
    ],

    data: [
        {
            name: 'table',
            url: 'data/movies.json',
            transform: [
                {
                    type: 'extent',
                    field: 'IMDB_Rating',
                    signal: 'extent',
                },
                {
                    type: 'bin',
                    signal: 'bins',
                    field: 'IMDB_Rating',
                    extent: { signal: 'extent' },
                    maxbins: { signal: 'maxbins' },
                },
            ],
        },
        {
            name: 'counts',
            source: 'table',
            transform: [
                {
                    type: 'filter',
                    expr: "datum['IMDB_Rating'] != null",
                },
                {
                    type: 'aggregate',
                    groupby: ['bin0', 'bin1'],
                },
            ],
        },
        {
            name: 'nulls',
            source: 'table',
            transform: [
                {
                    type: 'filter',
                    expr: "datum['IMDB_Rating'] == null",
                },
                {
                    type: 'aggregate',
                },
            ],
        },
    ],

    scales: [
        {
            name: 'yscale',
            type: 'linear',
            range: 'height',
            round: true,
            nice: true,
            domain: {
                fields: [
                    { data: 'counts', field: 'count' },
                    { data: 'nulls', field: 'count' },
                ],
            },
        },
        {
            name: 'xscale',
            type: 'bin-linear',
            range: [{ signal: 'barStep + nullGap' }, { signal: 'width' }],
            round: true,
            domain: { signal: 'binDomain' },
        },
        {
            name: 'xscale-null',
            type: 'band',
            range: [0, { signal: 'barStep' }],
            round: true,
            domain: [null],
        },
    ],

    axes: [
        { orient: 'bottom', scale: 'xscale', tickCount: 10 },
        { orient: 'bottom', scale: 'xscale-null' },
        { orient: 'left', scale: 'yscale', tickCount: 5, offset: 5 },
    ],

    marks: [
        {
            type: 'rect',
            from: { data: 'counts' },
            encode: {
                update: {
                    x: { scale: 'xscale', field: 'bin0', offset: 1 },
                    x2: { scale: 'xscale', field: 'bin1' },
                    y: { scale: 'yscale', field: 'count' },
                    y2: { scale: 'yscale', value: 0 },
                    fill: { value: 'steelblue' },
                },
                hover: {
                    fill: { value: 'firebrick' },
                },
            },
        },
        {
            type: 'rect',
            from: { data: 'nulls' },
            encode: {
                update: {
                    x: { scale: 'xscale-null', value: null, offset: 1 },
                    x2: { scale: 'xscale-null', band: 1 },
                    y: { scale: 'yscale', field: 'count' },
                    y2: { scale: 'yscale', value: 0 },
                    fill: { value: '#aaa' },
                },
                hover: {
                    fill: { value: 'firebrick' },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/probability-density
const probabilityDensity: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 500,
    height: 100,
    padding: 5,

    signals: [
        {
            name: 'bandwidth',
            value: 0,
            bind: { input: 'range', min: 0, max: 0.1, step: 0.001 },
        },
        {
            name: 'steps',
            value: 100,
            bind: { input: 'range', min: 10, max: 500, step: 1 },
        },
        {
            name: 'method',
            value: 'pdf',
            bind: { input: 'radio', options: ['pdf', 'cdf'] },
        },
    ],

    data: [
        {
            name: 'points',
            url: 'data/normal-2d.json',
        },
        {
            name: 'summary',
            source: 'points',
            transform: [
                {
                    type: 'aggregate',
                    fields: ['u', 'u'],
                    ops: ['mean', 'stdev'],
                    as: ['mean', 'stdev'],
                },
            ],
        },
        {
            name: 'density',
            source: 'points',
            transform: [
                {
                    type: 'density',
                    extent: { signal: "domain('xscale')" },
                    steps: { signal: 'steps' },
                    method: { signal: 'method' },
                    distribution: {
                        function: 'kde',
                        field: 'u',
                        bandwidth: { signal: 'bandwidth' },
                    },
                },
            ],
        },
        {
            name: 'normal',
            transform: [
                {
                    type: 'density',
                    extent: { signal: "domain('xscale')" },
                    steps: { signal: 'steps' },
                    method: { signal: 'method' },
                    distribution: {
                        function: 'normal',
                        mean: { signal: "data('summary')[0].mean" },
                        stdev: { signal: "data('summary')[0].stdev" },
                    },
                },
            ],
        },
    ],

    scales: [
        {
            name: 'xscale',
            type: 'linear',
            range: 'width',
            domain: { data: 'points', field: 'u' },
            nice: true,
        },
        {
            name: 'yscale',
            type: 'linear',
            range: 'height',
            round: true,
            domain: {
                fields: [
                    { data: 'density', field: 'density' },
                    { data: 'normal', field: 'density' },
                ],
            },
        },
        {
            name: 'color',
            type: 'ordinal',
            domain: ['Normal Estimate', 'Kernel Density Estimate'],
            range: ['#444', 'steelblue'],
        },
    ],

    axes: [{ orient: 'bottom', scale: 'xscale', zindex: 1 }],

    legends: [{ orient: 'top-left', fill: 'color', offset: 0, zindex: 1 }],

    marks: [
        {
            type: 'area',
            from: { data: 'density' },
            encode: {
                update: {
                    x: { scale: 'xscale', field: 'value' },
                    y: { scale: 'yscale', field: 'density' },
                    y2: { scale: 'yscale', value: 0 },
                    fill: {
                        signal: "scale('color', 'Kernel Density Estimate')",
                    },
                },
            },
        },
        {
            type: 'line',
            from: { data: 'normal' },
            encode: {
                update: {
                    x: { scale: 'xscale', field: 'value' },
                    y: { scale: 'yscale', field: 'density' },
                    stroke: { signal: "scale('color', 'Normal Estimate')" },
                    strokeWidth: { value: 2 },
                },
            },
        },
        {
            type: 'rect',
            from: { data: 'points' },
            encode: {
                enter: {
                    x: { scale: 'xscale', field: 'u' },
                    width: { value: 1 },
                    y: { value: 25, offset: { signal: 'height' } },
                    height: { value: 5 },
                    fill: { value: 'steelblue' },
                    fillOpacity: { value: 0.4 },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/box-plot
const boxPlot: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 500,
    height: 100,
    padding: 5,

    signals: [
        {
            name: 'bandwidth',
            value: 0,
            bind: { input: 'range', min: 0, max: 0.1, step: 0.001 },
        },
        {
            name: 'steps',
            value: 100,
            bind: { input: 'range', min: 10, max: 500, step: 1 },
        },
        {
            name: 'method',
            value: 'pdf',
            bind: { input: 'radio', options: ['pdf', 'cdf'] },
        },
    ],

    data: [
        {
            name: 'points',
            url: 'data/normal-2d.json',
        },
        {
            name: 'summary',
            source: 'points',
            transform: [
                {
                    type: 'aggregate',
                    fields: ['u', 'u'],
                    ops: ['mean', 'stdev'],
                    as: ['mean', 'stdev'],
                },
            ],
        },
        {
            name: 'density',
            source: 'points',
            transform: [
                {
                    type: 'density',
                    extent: { signal: "domain('xscale')" },
                    steps: { signal: 'steps' },
                    method: { signal: 'method' },
                    distribution: {
                        function: 'kde',
                        field: 'u',
                        bandwidth: { signal: 'bandwidth' },
                    },
                },
            ],
        },
        {
            name: 'normal',
            transform: [
                {
                    type: 'density',
                    extent: { signal: "domain('xscale')" },
                    steps: { signal: 'steps' },
                    method: { signal: 'method' },
                    distribution: {
                        function: 'normal',
                        mean: { signal: "data('summary')[0].mean" },
                        stdev: { signal: "data('summary')[0].stdev" },
                    },
                },
            ],
        },
    ],

    scales: [
        {
            name: 'xscale',
            type: 'linear',
            range: 'width',
            domain: { data: 'points', field: 'u' },
            nice: true,
        },
        {
            name: 'yscale',
            type: 'linear',
            range: 'height',
            round: true,
            domain: {
                fields: [
                    { data: 'density', field: 'density' },
                    { data: 'normal', field: 'density' },
                ],
            },
        },
        {
            name: 'color',
            type: 'ordinal',
            domain: ['Normal Estimate', 'Kernel Density Estimate'],
            range: ['#444', 'steelblue'],
        },
    ],

    axes: [{ orient: 'bottom', scale: 'xscale', zindex: 1 }],

    legends: [{ orient: 'top-left', fill: 'color', offset: 0, zindex: 1 }],

    marks: [
        {
            type: 'area',
            from: { data: 'density' },
            encode: {
                update: {
                    x: { scale: 'xscale', field: 'value' },
                    y: { scale: 'yscale', field: 'density' },
                    y2: { scale: 'yscale', value: 0 },
                    fill: {
                        signal: "scale('color', 'Kernel Density Estimate')",
                    },
                },
            },
        },
        {
            type: 'line',
            from: { data: 'normal' },
            encode: {
                update: {
                    x: { scale: 'xscale', field: 'value' },
                    y: { scale: 'yscale', field: 'density' },
                    stroke: { signal: "scale('color', 'Normal Estimate')" },
                    strokeWidth: { value: 2 },
                },
            },
        },
        {
            type: 'rect',
            from: { data: 'points' },
            encode: {
                enter: {
                    x: { scale: 'xscale', field: 'u' },
                    width: { value: 1 },
                    y: { value: 25, offset: { signal: 'height' } },
                    height: { value: 5 },
                    fill: { value: 'steelblue' },
                    fillOpacity: { value: 0.4 },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/violin-plot
const violinPlot: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 500,
    padding: 5,

    config: {
        axisBand: {
            bandPosition: 1,
            tickExtra: true,
            tickOffset: 0,
        },
    },

    signals: [
        {
            name: 'fields',
            value: ['petalWidth', 'petalLength', 'sepalWidth', 'sepalLength'],
        },
        { name: 'plotWidth', value: 60 },
        { name: 'height', update: '(plotWidth + 10) * length(fields)' },
        {
            name: 'bandwidth',
            value: 0,
            bind: { input: 'range', min: 0, max: 0.5, step: 0.005 },
        },
        {
            name: 'steps',
            value: 100,
            bind: { input: 'range', min: 10, max: 500, step: 1 },
        },
    ],

    data: [
        {
            name: 'iris',
            url: 'data/iris.json',
            transform: [
                {
                    type: 'fold',
                    fields: { signal: 'fields' },
                    as: ['organ', 'value'],
                },
            ],
        },
    ],

    scales: [
        {
            name: 'layout',
            type: 'band',
            range: 'height',
            domain: { data: 'iris', field: 'organ' },
        },
        {
            name: 'xscale',
            type: 'linear',
            range: 'width',
            round: true,
            domain: { data: 'iris', field: 'value' },
            zero: true,
            nice: true,
        },
        {
            name: 'color',
            type: 'ordinal',
            range: 'category',
        },
    ],

    axes: [
        { orient: 'bottom', scale: 'xscale', zindex: 1 },
        { orient: 'left', scale: 'layout', tickCount: 5, zindex: 1 },
    ],

    marks: [
        {
            type: 'group',
            from: {
                facet: {
                    data: 'iris',
                    name: 'organs',
                    groupby: 'organ',
                },
            },

            encode: {
                enter: {
                    yc: { scale: 'layout', field: 'organ', band: 0.5 },
                    height: { signal: 'plotWidth' },
                    width: { signal: 'width' },
                },
            },

            data: [
                {
                    name: 'density',
                    transform: [
                        {
                            type: 'density',
                            steps: { signal: 'steps' },
                            distribution: {
                                function: 'kde',
                                from: 'organs',
                                field: 'value',
                                bandwidth: { signal: 'bandwidth' },
                            },
                        },
                        {
                            type: 'stack',
                            groupby: ['value'],
                            field: 'density',
                            offset: 'center',
                            as: ['y0', 'y1'],
                        },
                    ],
                },
                {
                    name: 'summary',
                    source: 'organs',
                    transform: [
                        {
                            type: 'aggregate',
                            fields: ['value', 'value', 'value'],
                            ops: ['q1', 'median', 'q3'],
                            as: ['q1', 'median', 'q3'],
                        },
                    ],
                },
            ],

            scales: [
                {
                    name: 'yscale',
                    type: 'linear',
                    range: [0, { signal: 'plotWidth' }],
                    domain: { data: 'density', field: 'density' },
                },
            ],

            marks: [
                {
                    type: 'area',
                    from: { data: 'density' },
                    encode: {
                        enter: {
                            fill: {
                                scale: 'color',
                                field: { parent: 'organ' },
                            },
                        },
                        update: {
                            x: { scale: 'xscale', field: 'value' },
                            y: { scale: 'yscale', field: 'y0' },
                            y2: { scale: 'yscale', field: 'y1' },
                        },
                    },
                },
                {
                    type: 'rect',
                    from: { data: 'summary' },
                    encode: {
                        enter: {
                            fill: { value: 'black' },
                            height: { value: 2 },
                        },
                        update: {
                            yc: { signal: 'plotWidth / 2' },
                            x: { scale: 'xscale', field: 'q1' },
                            x2: { scale: 'xscale', field: 'q3' },
                        },
                    },
                },
                {
                    type: 'rect',
                    from: { data: 'summary' },
                    encode: {
                        enter: {
                            fill: { value: 'black' },
                            width: { value: 2 },
                            height: { value: 8 },
                        },
                        update: {
                            yc: { signal: 'plotWidth / 2' },
                            x: { scale: 'xscale', field: 'median' },
                        },
                    },
                },
            ],
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/top-k-plot
const topKPlot: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 500,
    height: 410,
    padding: 5,
    autosize: 'fit',

    signals: [
        {
            name: 'k',
            value: 20,
            bind: { input: 'range', min: 10, max: 30, step: 1 },
        },
        {
            name: 'op',
            value: 'average',
            bind: { input: 'select', options: ['average', 'median', 'sum'] },
        },
        {
            name: 'label',
            value: { average: 'Average', median: 'Median', sum: 'Total' },
        },
    ],

    title: {
        text: {
            signal: "'Top Directors by ' + label[op] + ' Worldwide Gross'",
        },
        anchor: 'start',
    },

    data: [
        {
            name: 'directors',
            url: 'data/movies.json',
            transform: [
                {
                    type: 'filter',
                    expr:
                        'datum.Director != null && datum.Worldwide_Gross != null',
                },
                {
                    type: 'aggregate',
                    groupby: ['Director'],
                    ops: [{ signal: 'op' }],
                    fields: ['Worldwide_Gross'],
                    as: ['Gross'],
                },
                {
                    type: 'window',
                    sort: { field: 'Gross', order: 'descending' },
                    ops: ['row_number'],
                    as: ['rank'],
                },
                {
                    type: 'filter',
                    expr: 'datum.rank <= k',
                },
            ],
        },
    ],

    marks: [
        {
            type: 'rect',
            from: { data: 'directors' },
            encode: {
                update: {
                    x: { scale: 'x', value: 0 },
                    x2: { scale: 'x', field: 'Gross' },
                    y: { scale: 'y', field: 'Director' },
                    height: { scale: 'y', band: 1 },
                },
            },
        },
    ],

    scales: [
        {
            name: 'x',
            type: 'linear',
            domain: { data: 'directors', field: 'Gross' },
            range: 'width',
            nice: true,
        },
        {
            name: 'y',
            type: 'band',
            domain: {
                data: 'directors',
                field: 'Director',
                sort: { op: 'max', field: 'Gross', order: 'descending' },
            },
            range: 'height',
            padding: 0.1,
        },
    ],

    axes: [
        {
            scale: 'x',
            orient: 'bottom',
            format: '$,d',
            tickCount: 5,
        },
        {
            scale: 'y',
            orient: 'left',
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/top-k-plot-with-others
const topKPlotWithOthers: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 500,
    height: 410,
    padding: 5,
    autosize: 'fit',

    signals: [
        {
            name: 'k',
            value: 20,
            bind: { input: 'range', min: 10, max: 30, step: 1 },
        },
        {
            name: 'op',
            value: 'average',
            bind: { input: 'select', options: ['average', 'median', 'sum'] },
        },
        {
            name: 'label',
            value: { average: 'Average', median: 'Median', sum: 'Total' },
        },
    ],

    title: {
        text: {
            signal: "'Top Directors by ' + label[op] + ' Worldwide Gross'",
        },
        anchor: 'start',
    },

    data: [
        {
            name: 'source',
            url: 'data/movies.json',
            transform: [
                {
                    type: 'filter',
                    expr:
                        'datum.Director != null && datum.Worldwide_Gross != null',
                },
            ],
        },
        {
            name: 'ranks',
            source: 'source',
            transform: [
                {
                    type: 'aggregate',
                    groupby: ['Director'],
                    ops: [{ signal: 'op' }],
                    fields: ['Worldwide_Gross'],
                    as: ['Gross'],
                },
                {
                    type: 'window',
                    sort: { field: 'Gross', order: 'descending' },
                    ops: ['row_number'],
                    as: ['rank'],
                },
            ],
        },
        {
            name: 'directors',
            source: 'source',
            transform: [
                {
                    type: 'lookup',
                    from: 'ranks',
                    key: 'Director',
                    values: ['rank'],
                    fields: ['Director'],
                },
                {
                    type: 'formula',
                    as: 'Category',
                    expr: "datum.rank < k ? datum.Director : 'All Others'",
                },
                {
                    type: 'aggregate',
                    groupby: ['Category'],
                    ops: [{ signal: 'op' }],
                    fields: ['Worldwide_Gross'],
                    as: ['Gross'],
                },
            ],
        },
    ],

    marks: [
        {
            type: 'rect',
            from: { data: 'directors' },
            encode: {
                update: {
                    x: { scale: 'x', value: 0 },
                    x2: { scale: 'x', field: 'Gross' },
                    y: { scale: 'y', field: 'Category' },
                    height: { scale: 'y', band: 1 },
                },
            },
        },
    ],

    scales: [
        {
            name: 'x',
            type: 'linear',
            domain: { data: 'directors', field: 'Gross' },
            range: 'width',
            nice: true,
        },
        {
            name: 'y',
            type: 'band',
            domain: {
                data: 'directors',
                field: 'Category',
                sort: { op: 'max', field: 'Gross', order: 'descending' },
            },
            range: 'height',
            padding: 0.1,
        },
    ],

    axes: [
        {
            scale: 'x',
            orient: 'bottom',
            format: '$,d',
            tickCount: 5,
        },
        {
            scale: 'y',
            orient: 'left',
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/binned-scatter-plot
const binnedScatterPlot: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 200,
    height: 200,
    padding: 5,
    autosize: 'pad',

    data: [
        {
            name: 'source',
            url: 'data/cars.json',
            transform: [
                {
                    type: 'filter',
                    expr:
                        "datum['Horsepower'] != null && datum['Miles_per_Gallon'] != null && datum['Acceleration'] != null",
                },
            ],
        },
        {
            name: 'summary',
            source: 'source',
            transform: [
                {
                    type: 'extent',
                    field: 'Horsepower',
                    signal: 'hp_extent',
                },
                {
                    type: 'bin',
                    field: 'Horsepower',
                    maxbins: 10,
                    extent: { signal: 'hp_extent' },
                    as: ['hp0', 'hp1'],
                },
                {
                    type: 'extent',
                    field: 'Miles_per_Gallon',
                    signal: 'mpg_extent',
                },
                {
                    type: 'bin',
                    field: 'Miles_per_Gallon',
                    maxbins: 10,
                    extent: { signal: 'mpg_extent' },
                    as: ['mpg0', 'mpg1'],
                },
                {
                    type: 'aggregate',
                    groupby: ['hp0', 'hp1', 'mpg0', 'mpg1'],
                },
            ],
        },
    ],

    scales: [
        {
            name: 'x',
            type: 'linear',
            round: true,
            nice: true,
            zero: true,
            domain: { data: 'source', field: 'Horsepower' },
            range: 'width',
        },
        {
            name: 'y',
            type: 'linear',
            round: true,
            nice: true,
            zero: true,
            domain: { data: 'source', field: 'Miles_per_Gallon' },
            range: 'height',
        },
        {
            name: 'size',
            type: 'linear',
            zero: true,
            domain: { data: 'summary', field: 'count' },
            range: [0, 360],
        },
    ],

    axes: [
        {
            scale: 'x',
            grid: true,
            domain: false,
            orient: 'bottom',
            tickCount: 5,
            title: 'Horsepower',
        },
        {
            scale: 'y',
            grid: true,
            domain: false,
            orient: 'left',
            titlePadding: 5,
            title: 'Miles_per_Gallon',
        },
    ],

    legends: [
        {
            size: 'size',
            title: 'Count',
            format: 's',
            encode: {
                symbols: {
                    update: {
                        strokeWidth: { value: 2 },
                        stroke: { value: '#4682b4' },
                        shape: { value: 'circle' },
                    },
                },
            },
        },
    ],

    marks: [
        {
            name: 'marks',
            type: 'symbol',
            from: { data: 'summary' },
            encode: {
                update: {
                    x: { scale: 'x', signal: '(datum.hp0 + datum.hp1) / 2' },
                    y: { scale: 'y', signal: '(datum.mpg0 + datum.mpg1) / 2' },
                    size: { scale: 'size', field: 'count' },
                    shape: { value: 'circle' as 'circle' },
                    strokeWidth: { value: 2 },
                    stroke: { value: '#4682b4' },
                    fill: { value: 'transparent' },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/contour-plot
const contourPlot: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 500,
    height: 400,
    padding: 5,
    autosize: 'pad',

    signals: [
        {
            name: 'count',
            value: 10,
            bind: { input: 'select', options: [1, 5, 10, 20] },
        },
        {
            name: 'points',
            value: true,
            bind: { input: 'checkbox' },
        },
    ],

    data: [
        {
            name: 'source',
            url: 'data/cars.json',
            transform: [
                {
                    type: 'filter',
                    expr:
                        "datum['Horsepower'] != null && datum['Miles_per_Gallon'] != null",
                },
            ],
        },
        {
            name: 'contours',
            source: 'source',
            transform: [
                {
                    type: 'contour',
                    x: { expr: "scale('x', datum.Horsepower)" },
                    y: { expr: "scale('y', datum.Miles_per_Gallon)" },
                    size: [{ signal: 'width' }, { signal: 'height' }],
                    count: { signal: 'count' },
                },
            ],
        },
    ],

    scales: [
        {
            name: 'x',
            type: 'linear',
            round: true,
            nice: true,
            zero: false,
            domain: { data: 'source', field: 'Horsepower' },
            range: 'width',
        },
        {
            name: 'y',
            type: 'linear',
            round: true,
            nice: true,
            zero: false,
            domain: { data: 'source', field: 'Miles_per_Gallon' },
            range: 'height',
        },
        {
            name: 'color',
            type: 'sequential',
            zero: true,
            domain: { data: 'contours', field: 'value' },
            range: 'heatmap',
        },
    ],

    axes: [
        {
            scale: 'x',
            grid: true,
            domain: false,
            orient: 'bottom',
            title: 'Horsepower',
        },
        {
            scale: 'y',
            grid: true,
            domain: false,
            orient: 'left',
            title: 'Miles_per_Gallon',
        },
    ],

    legends: [
        {
            fill: 'color',
            type: 'gradient',
        },
    ],

    marks: [
        {
            type: 'path',
            from: { data: 'contours' },
            encode: {
                enter: {
                    stroke: { value: '#888' },
                    strokeWidth: { value: 1 },
                    fill: { scale: 'color', field: 'value' },
                    fillOpacity: { value: 0.35 },
                },
            },
            transform: [{ type: 'geopath', field: 'datum' }],
        },
        {
            name: 'marks',
            type: 'symbol',
            from: { data: 'source' },
            encode: {
                update: {
                    x: { scale: 'x', field: 'Horsepower' },
                    y: { scale: 'y', field: 'Miles_per_Gallon' },
                    size: { value: 4 },
                    fill: [
                        { test: 'points', value: 'black' },
                        { value: 'transparent' },
                    ],
                },
            },
        },
    ],

    config: {
        range: {
            heatmap: { scheme: 'greenblue' },
        },
    },
};

// https://vega.github.io/editor/#/examples/vega/wheat-plot
const wheatPlot: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 500,
    padding: 5,

    signals: [
        {
            name: 'symbolDiameter',
            value: 4,
            bind: { input: 'range', min: 1, max: 8, step: 0.25 },
        },
        {
            name: 'binOffset',
            value: 0,
            bind: { input: 'range', min: -0.1, max: 0.1 },
        },
        {
            name: 'binStep',
            value: 0.075,
            bind: { input: 'range', min: 0.001, max: 0.2, step: 0.001 },
        },
        { name: 'height', update: 'extent[1] * (1 + symbolDiameter)' },
    ],

    data: [
        {
            name: 'points',
            url: 'data/normal-2d.json',
            transform: [
                {
                    type: 'bin',
                    field: 'u',
                    extent: [-1, 1],
                    anchor: { signal: 'binOffset' },
                    step: { signal: 'binStep' },
                    nice: false,
                    signal: 'bins',
                },
                {
                    type: 'stack',
                    groupby: ['bin0'],
                    sort: { field: 'u' },
                },
                {
                    type: 'extent',
                    signal: 'extent',
                    field: 'y1',
                },
            ],
        },
    ],

    scales: [
        {
            name: 'xscale',
            type: 'linear',
            range: 'width',
            domain: [-1, 1],
        },
        {
            name: 'yscale',
            type: 'linear',
            range: 'height',
            domain: [0, { signal: 'extent[1]' }],
        },
    ],

    axes: [
        {
            orient: 'bottom',
            scale: 'xscale',
            values: {
                signal:
                    'sequence(bins.start, bins.stop + bins.step, bins.step)',
            },
            domain: false,
            ticks: false,
            labels: false,
            grid: true,
            zindex: 0,
        },
        { orient: 'bottom', scale: 'xscale', zindex: 1 },
    ],

    marks: [
        {
            type: 'symbol',
            from: { data: 'points' },
            encode: {
                enter: {
                    fill: { value: 'transparent' },
                    strokeWidth: { value: 0.5 },
                },
                update: {
                    x: { scale: 'xscale', field: 'u' },
                    y: { scale: 'yscale', field: 'y0' },
                    size: { signal: 'symbolDiameter * symbolDiameter' },
                    stroke: { value: 'steelblue' },
                },
                hover: {
                    stroke: { value: 'firebrick' },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/county-unemployment
const countyUnemployment: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 960,
    height: 500,
    autosize: 'none',

    data: [
        {
            name: 'unemp',
            url: 'data/unemployment.tsv',
            format: { type: 'tsv', parse: 'auto' },
        },
        {
            name: 'counties',
            url: 'data/us-10m.json',
            format: { type: 'topojson', feature: 'counties' },
            transform: [
                {
                    type: 'lookup',
                    from: 'unemp',
                    key: 'id',
                    fields: ['id'],
                    values: ['rate'],
                },
                { type: 'filter', expr: 'datum.rate != null' },
            ],
        },
    ],

    projections: [
        {
            name: 'projection',
            type: 'albersUsa',
        },
    ],

    scales: [
        {
            name: 'color',
            type: 'quantize',
            domain: [0, 0.15],
            range: { scheme: 'blues-9' },
        },
    ],

    legends: [
        {
            fill: 'color',
            orient: 'bottom-right',
            title: 'Unemployment',
            format: '0.1%',
            encode: {
                symbols: {
                    update: {
                        shape: { value: 'square' },
                        stroke: { value: '#ccc' },
                        strokeWidth: { value: 0.2 },
                    },
                },
            },
        },
    ],

    marks: [
        {
            type: 'shape',
            from: { data: 'counties' },
            encode: {
                enter: { tooltip: { signal: "format(datum.rate, '0.1%')" } },
                update: { fill: { scale: 'color', field: 'rate' } },
                hover: { fill: { value: 'red' } },
            },
            transform: [{ type: 'geoshape', projection: 'projection' }],
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/dorling-cartogram
const dorlingCartogram: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 900,
    height: 520,
    autosize: 'none',

    config: {
        legend: {
            gradientWidth: 120,
            gradientHeight: 10,
        },
    },

    data: [
        {
            name: 'states',
            url: 'data/us-10m.json',
            format: { type: 'topojson', feature: 'states' },
        },
        {
            name: 'obesity',
            url: 'data/obesity.json',
            transform: [
                {
                    type: 'lookup',
                    from: 'states',
                    key: 'id',
                    fields: ['id'],
                    as: ['geo'],
                },
                {
                    type: 'filter',
                    expr: 'datum.geo',
                },
                {
                    type: 'formula',
                    as: 'centroid',
                    expr: "geoCentroid('projection', datum.geo)",
                },
            ],
        },
    ],

    projections: [
        {
            name: 'projection',
            type: 'albersUsa',
            scale: 1100,
            translate: [{ signal: 'width / 2' }, { signal: 'height / 2' }],
        },
    ],

    scales: [
        {
            name: 'size',
            domain: { data: 'obesity', field: 'rate' },
            range: [0, 5000],
        },
        {
            name: 'color',
            type: 'sequential',
            nice: true,
            domain: { data: 'obesity', field: 'rate' },
            range: 'ramp',
        },
    ],

    legends: [
        {
            title: '% of Obese Adults',
            orient: 'bottom-right',
            type: 'gradient',
            fill: 'color',
            format: '.1%',
        },
    ],

    marks: [
        {
            name: 'circles',
            type: 'symbol',
            from: { data: 'obesity' },
            encode: {
                enter: {
                    size: { scale: 'size', field: 'rate' },
                    fill: { scale: 'color', field: 'rate' },
                    stroke: { value: 'white' },
                    strokeWidth: { value: 1.5 },
                    x: { field: 'centroid[0]' },
                    y: { field: 'centroid[1]' },
                    tooltip: {
                        signal: "'Obesity Rate: ' + format(datum.rate, '.1%')",
                    },
                },
            },
            transform: [
                {
                    type: 'force',
                    static: true,
                    forces: [
                        {
                            force: 'collide',
                            radius: { expr: '1 + sqrt(datum.size) / 2' },
                        },
                        { force: 'x', x: 'datum.centroid[0]' },
                        { force: 'y', y: 'datum.centroid[1]' },
                    ],
                },
            ],
        },
        {
            type: 'text',
            interactive: false,
            from: { data: 'circles' },
            encode: {
                enter: {
                    align: { value: 'center' },
                    baseline: { value: 'middle' },
                    fontSize: { value: 13 },
                    fontWeight: { value: 'bold' },
                    text: { field: 'datum.state' },
                },
                update: {
                    x: { field: 'x' },
                    y: { field: 'y' },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/world-map
const worldMap: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 900,
    height: 500,
    autosize: 'none',

    encode: {
        update: {
            fill: { signal: 'background' },
        },
    },

    signals: [
        {
            name: 'type',
            value: 'mercator',
            bind: {
                input: 'select',
                options: [
                    'albers',
                    'albersUsa',
                    'azimuthalEqualArea',
                    'azimuthalEquidistant',
                    'conicConformal',
                    'conicEqualArea',
                    'conicEquidistant',
                    'equirectangular',
                    'gnomonic',
                    'mercator',
                    'orthographic',
                    'stereographic',
                    'transverseMercator',
                ],
            },
        },
        {
            name: 'scale',
            value: 150,
            bind: { input: 'range', min: 50, max: 2000, step: 1 },
        },
        {
            name: 'rotate0',
            value: 0,
            bind: { input: 'range', min: -180, max: 180, step: 1 },
        },
        {
            name: 'rotate1',
            value: 0,
            bind: { input: 'range', min: -90, max: 90, step: 1 },
        },
        {
            name: 'rotate2',
            value: 0,
            bind: { input: 'range', min: -180, max: 180, step: 1 },
        },
        {
            name: 'center0',
            value: 0,
            bind: { input: 'range', min: -180, max: 180, step: 1 },
        },
        {
            name: 'center1',
            value: 0,
            bind: { input: 'range', min: -90, max: 90, step: 1 },
        },
        { name: 'translate0', update: 'width / 2' },
        { name: 'translate1', update: 'height / 2' },

        {
            name: 'graticuleDash',
            value: 0,
            bind: { input: 'radio', options: [0, 3, 5, 10] },
        },
        {
            name: 'borderWidth',
            value: 1,
            bind: { input: 'text' },
        },
        {
            name: 'background',
            value: '#ffffff',
            bind: { input: 'color' },
        },
        {
            name: 'invert',
            value: false,
            bind: { input: 'checkbox' },
        },
    ],

    projections: [
        {
            name: 'projection',
            type: { signal: 'type' },
            scale: { signal: 'scale' },
            rotate: [
                { signal: 'rotate0' },
                { signal: 'rotate1' },
                { signal: 'rotate2' },
            ],
            center: [{ signal: 'center0' }, { signal: 'center1' }],
            translate: [{ signal: 'translate0' }, { signal: 'translate1' }],
        },
    ],

    data: [
        {
            name: 'world',
            url: 'data/world-110m.json',
            format: {
                type: 'topojson',
                feature: 'countries',
            },
        },
        {
            name: 'graticule',
            transform: [{ type: 'graticule' }],
        },
    ],

    marks: [
        {
            type: 'shape',
            from: { data: 'graticule' },
            encode: {
                update: {
                    strokeWidth: { value: 1 },
                    strokeDash: { signal: '[+graticuleDash, +graticuleDash]' },
                    stroke: { signal: "invert ? '#444' : '#ddd'" },
                    fill: { value: null },
                },
            },
            transform: [{ type: 'geoshape', projection: 'projection' }],
        },
        {
            type: 'shape',
            from: { data: 'world' },
            encode: {
                update: {
                    strokeWidth: { signal: '+borderWidth' },
                    stroke: { signal: "invert ? '#777' : '#bbb'" },
                    fill: { signal: "invert ? '#fff' : '#000'" },
                    zindex: { value: 0 },
                },
                hover: {
                    strokeWidth: { signal: '+borderWidth + 1' },
                    stroke: { value: 'firebrick' },
                    zindex: { value: 1 },
                },
            },
            transform: [{ type: 'geoshape', projection: 'projection' }],
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/earthquakes
const earthquakes: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    padding: 10,
    width: 450,
    height: 450,
    autosize: 'none',

    signals: [
        {
            name: 'quakeSize',
            value: 6,
            bind: { input: 'range', min: 0, max: 12 },
        },
        {
            name: 'rotate0',
            value: 90,
            bind: { input: 'range', min: -180, max: 180 },
        },
        {
            name: 'rotate1',
            value: -5,
            bind: { input: 'range', min: -180, max: 180 },
        },
    ],

    data: [
        {
            name: 'sphere',
            values: [{ type: 'Sphere' }],
        },
        {
            name: 'world',
            url: 'data/world-110m.json',
            format: {
                type: 'topojson',
                feature: 'countries',
            },
        },
        {
            name: 'earthquakes',
            url: 'data/earthquakes.json',
            format: {
                type: 'json',
                property: 'features',
            },
        },
    ],

    projections: [
        {
            name: 'projection',
            scale: 225,
            type: 'orthographic',
            translate: { signal: '[width/2, height/2]' },
            rotate: [{ signal: 'rotate0' }, { signal: 'rotate1' }, 0],
        },
    ],

    scales: [
        {
            name: 'size',
            type: 'sqrt',
            domain: [0, 100],
            range: [0, { signal: 'quakeSize' }],
        },
    ],

    marks: [
        {
            type: 'shape',
            from: { data: 'sphere' },
            encode: {
                update: {
                    fill: { value: 'aliceblue' },
                    stroke: { value: 'black' },
                    strokeWidth: { value: 1.5 },
                },
            },
            transform: [
                {
                    type: 'geoshape',
                    projection: 'projection',
                },
            ],
        },
        {
            type: 'shape',
            from: { data: 'world' },
            encode: {
                update: {
                    fill: { value: 'mintcream' },
                    stroke: { value: 'black' },
                    strokeWidth: { value: 0.35 },
                },
            },
            transform: [
                {
                    type: 'geoshape',
                    projection: 'projection',
                },
            ],
        },
        {
            type: 'shape',
            from: { data: 'earthquakes' },
            encode: {
                update: {
                    opacity: { value: 0.25 },
                    fill: { value: 'red' },
                },
            },
            transform: [
                {
                    type: 'geoshape',
                    projection: 'projection',
                    pointRadius: {
                        expr: "scale('size', exp(datum.properties.mag))",
                    },
                },
            ],
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/projections
const projections: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    autosize: 'pad',

    signals: [
        { name: 'mapWidth', value: 300 },
        { name: 'mapHeight', value: 200 },
        { name: 'projScale', value: 45 },
        { name: 'projTranslate', update: '[mapWidth / 2, mapHeight / 2]' },
    ],

    data: [
        {
            name: 'projections',
            values: [
                'azimuthalEquidistant',
                'conicConformal',
                'gnomonic',
                'mercator',
                'stereographic',
                'airy',
                'armadillo',
                'baker',
                'berghaus',
                'bottomley',
                'collignon',
                'eckert1',
                'guyou',
                'hammer',
                'littrow',
                'mollweide',
                'wagner6',
                'wiechel',
                'winkel3',
                'interruptedSinusoidal',
                'interruptedMollweide',
                'interruptedMollweideHemispheres',
                'polyhedralButterfly',
                'peirceQuincuncial',
            ],
        },
        {
            name: 'world',
            url: 'data/world-110m.json',
            format: {
                type: 'topojson',
                feature: 'countries',
            },
        },
        {
            name: 'graticule',
            transform: [{ type: 'graticule' }],
        },
        {
            name: 'sphere',
            values: [{ type: 'Sphere' }],
        },
        {
            name: 'labelOffsets',
            values: [
                { dx: -1, dy: -1 },
                { dx: -1, dy: 1 },
                { dx: 1, dy: -1 },
                { dx: 1, dy: 1 },
            ],
        },
    ],

    layout: {
        columns: 3,
        padding: 20,
    },

    marks: [
        {
            type: 'group',
            from: { data: 'projections' },

            signals: [
                { name: 'width', update: 'mapWidth' },
                { name: 'height', update: 'mapHeight' },
            ],

            encode: {
                enter: {
                    width: { signal: 'mapWidth' },
                    height: { signal: 'mapHeight' },
                    clip: { value: true },
                },
            },

            projections: [
                {
                    name: 'projection',
                    type: { signal: 'parent.data' },
                    scale: { signal: 'projScale' },
                    translate: { signal: 'projTranslate' },
                },
            ],

            marks: [
                {
                    type: 'shape',
                    from: { data: 'sphere' },
                    encode: {
                        enter: {
                            fill: { value: 'aliceblue' },
                        },
                    },
                    transform: [{ type: 'geoshape', projection: 'projection' }],
                },
                {
                    type: 'shape',
                    from: { data: 'graticule' },
                    clip: { sphere: 'projection' },
                    interactive: false,
                    encode: {
                        enter: {
                            strokeWidth: { value: 1 },
                            stroke: { value: '#ddd' },
                        },
                    },
                    transform: [{ type: 'geoshape', projection: 'projection' }],
                },
                {
                    type: 'shape',
                    from: { data: 'world' },
                    clip: { sphere: 'projection' },
                    encode: {
                        enter: {
                            strokeWidth: { value: 0.25 },
                            stroke: { value: '#888' },
                            fill: { value: 'black' },
                        },
                    },
                    transform: [{ type: 'geoshape', projection: 'projection' }],
                },
                {
                    type: 'text',
                    from: { data: 'labelOffsets' },
                    encode: {
                        enter: {
                            fill: { value: 'white' },
                            dx: { field: 'dx' },
                            dy: { field: 'dy' },
                            x: { value: 5 },
                            y: { signal: 'mapHeight - 5' },
                            baseline: { value: 'bottom' },
                            fontSize: { value: 14 },
                            fontWeight: { value: 'bold' },
                            text: { signal: 'parent.data' },
                        },
                    },
                },
                {
                    type: 'text',
                    encode: {
                        enter: {
                            fill: { value: 'black' },
                            x: { value: 5 },
                            y: { signal: 'mapHeight - 5' },
                            baseline: { value: 'bottom' },
                            fontSize: { value: 14 },
                            fontWeight: { value: 'bold' },
                            text: { signal: 'parent.data' },
                        },
                    },
                },
            ],
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/zoomable-world-map
const zoomableWorldMap: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 900,
    height: 500,
    autosize: 'none',

    signals: [
        { name: 'tx', update: 'width / 2' },
        { name: 'ty', update: 'height / 2' },
        {
            name: 'scale',
            value: 150,
            on: [
                {
                    events: { type: 'wheel', consume: true },
                    update:
                        'clamp(scale * pow(1.0005, -event.deltaY * pow(16, event.deltaMode)), 150, 3000)',
                },
            ],
        },
        {
            name: 'angles',
            value: [0, 0],
            on: [
                {
                    events: 'mousedown',
                    update: '[rotateX, centerY]',
                },
            ],
        },
        {
            name: 'cloned',
            value: null,
            on: [
                {
                    events: 'mousedown',
                    update: "copy('projection')",
                },
            ],
        },
        {
            name: 'start',
            value: null,
            on: [
                {
                    events: 'mousedown',
                    update: 'invert(cloned, xy())',
                },
            ],
        },
        {
            name: 'drag',
            value: null,
            on: [
                {
                    events: '[mousedown, window:mouseup] > window:mousemove',
                    update: 'invert(cloned, xy())',
                },
            ],
        },
        {
            name: 'delta',
            value: null,
            on: [
                {
                    events: { signal: 'drag' },
                    update: '[drag[0] - start[0], start[1] - drag[1]]',
                },
            ],
        },
        {
            name: 'rotateX',
            value: 0,
            on: [
                {
                    events: { signal: 'delta' },
                    update: 'angles[0] + delta[0]',
                },
            ],
        },
        {
            name: 'centerY',
            value: 0,
            on: [
                {
                    events: { signal: 'delta' },
                    update: 'clamp(angles[1] + delta[1], -60, 60)',
                },
            ],
        },
    ],

    projections: [
        {
            name: 'projection',
            type: 'mercator',
            scale: { signal: 'scale' },
            rotate: [{ signal: 'rotateX' }, 0, 0],
            center: [0, { signal: 'centerY' }],
            translate: [{ signal: 'tx' }, { signal: 'ty' }],
        },
    ],

    data: [
        {
            name: 'world',
            url: 'data/world-110m.json',
            format: {
                type: 'topojson',
                feature: 'countries',
            },
        },
        {
            name: 'graticule',
            transform: [{ type: 'graticule', step: [15, 15] }],
        },
    ],

    marks: [
        {
            type: 'shape',
            from: { data: 'graticule' },
            encode: {
                enter: {
                    strokeWidth: { value: 1 },
                    stroke: { value: '#ddd' },
                    fill: { value: null },
                },
            },
            transform: [{ type: 'geoshape', projection: 'projection' }],
        },
        {
            type: 'shape',
            from: { data: 'world' },
            encode: {
                enter: {
                    strokeWidth: { value: 0.5 },
                    stroke: { value: '#bbb' },
                    fill: { value: '#e5e8d3' },
                },
            },
            transform: [{ type: 'geoshape', projection: 'projection' }],
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/distortion-comparison
const distortionComparison: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 900,
    height: 500,
    autosize: 'none',

    signals: [
        {
            name: 'baseProjection',
            value: 'azimuthalEqualArea',
            bind: {
                input: 'select',
                options: [
                    'albers',
                    'albersUsa',
                    'azimuthalEqualArea',
                    'azimuthalEquidistant',
                    'conicConformal',
                    'conicEqualArea',
                    'conicEquidistant',
                    'equirectangular',
                    'gnomonic',
                    'mercator',
                    'orthographic',
                    'stereographic',
                    'transverseMercator',
                ],
            },
        },
        {
            name: 'altProjection',
            value: 'mercator',
            bind: {
                input: 'select',
                options: [
                    'albers',
                    'albersUsa',
                    'azimuthalEqualArea',
                    'azimuthalEquidistant',
                    'conicConformal',
                    'conicEqualArea',
                    'conicEquidistant',
                    'equirectangular',
                    'gnomonic',
                    'mercator',
                    'orthographic',
                    'stereographic',
                    'transverseMercator',
                ],
            },
        },
        {
            name: 'baseColor',
            value: '#bb8800',
            bind: { input: 'color' },
        },
        {
            name: 'altColor',
            value: '#0088bb',
            bind: { input: 'color' },
        },
        {
            name: 'opacity',
            value: 0.15,
            bind: { input: 'range', min: 0, max: 1, step: 0.05 },
        },
        {
            name: 'scaleFactor',
            value: 1,
            bind: { input: 'range', min: 0.05, max: 2, step: 0.05 },
        },
    ],

    projections: [
        {
            name: 'projection1',
            type: { signal: 'baseProjection' },
            scale: 150,
            rotate: [0, 0, 0],
            center: [0, 0],
            translate: [{ signal: 'width / 2' }, { signal: 'height / 2' }],
        },
        {
            name: 'projection2',
            type: { signal: 'altProjection' },
            scale: 150,
            rotate: [0, 0, 0],
            center: [0, 0],
            translate: [{ signal: 'width / 2' }, { signal: 'height / 2' }],
        },
    ],

    data: [
        {
            name: 'world',
            url: 'data/world-110m.json',
            format: {
                type: 'topojson',
                feature: 'countries',
            },
            transform: [
                {
                    type: 'formula',
                    expr: "geoCentroid('projection1', datum)",
                    as: 'centroid',
                },
                {
                    type: 'formula',
                    expr: "geoArea('projection1', datum)",
                    as: 'area1',
                },
                {
                    type: 'formula',
                    expr: "geoArea('projection2', datum)",
                    as: 'area2',
                },
            ],
        },
        {
            name: 'graticule',
            transform: [{ type: 'graticule' }],
        },
    ],

    marks: [
        {
            type: 'shape',
            from: { data: 'graticule' },
            encode: {
                update: {
                    strokeWidth: { value: 1 },
                    stroke: { value: '#ddd' },
                    fill: { value: null },
                },
            },
            transform: [{ type: 'geoshape', projection: 'projection1' }],
        },
        {
            type: 'symbol',
            from: { data: 'world' },
            encode: {
                update: {
                    strokeWidth: { value: 1 },
                    stroke: { value: '#bbb' },
                    fill: { signal: 'altColor' },
                    fillOpacity: { signal: 'opacity' },
                    zindex: { value: 0 },
                    x: { field: 'centroid[0]' },
                    y: { field: 'centroid[1]' },
                    size: { field: 'area2', mult: { signal: 'scaleFactor' } },
                },
                hover: {
                    strokeWidth: { value: 2 },
                    stroke: { value: 'firebrick' },
                    zindex: { value: 1 },
                },
            },
        },
        {
            type: 'symbol',
            from: { data: 'world' },
            encode: {
                update: {
                    strokeWidth: { value: 1 },
                    stroke: { value: '#bbb' },
                    fill: { signal: 'baseColor' },
                    fillOpacity: { signal: 'opacity' },
                    zindex: { value: 0 },
                    x: { field: 'centroid[0]' },
                    y: { field: 'centroid[1]' },
                    size: { field: 'area1', mult: { signal: 'scaleFactor' } },
                },
                hover: {
                    strokeWidth: { value: 2 },
                    stroke: { value: 'firebrick' },
                    zindex: { value: 1 },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/tree-layout
const treeLayout: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 600,
    height: 1600,
    padding: 5,

    signals: [
        {
            name: 'labels',
            value: true,
            bind: { input: 'checkbox' },
        },
        {
            name: 'layout',
            value: 'tidy',
            bind: { input: 'radio', options: ['tidy', 'cluster'] },
        },
        {
            name: 'links',
            value: 'diagonal',
            bind: {
                input: 'select',
                options: ['line', 'curve', 'diagonal', 'orthogonal'],
            },
        },
    ],

    data: [
        {
            name: 'tree',
            url: 'data/flare.json',
            transform: [
                {
                    type: 'stratify',
                    key: 'id',
                    parentKey: 'parent',
                },
                {
                    type: 'tree',
                    method: { signal: 'layout' },
                    size: [{ signal: 'height' }, { signal: 'width - 100' }],
                    as: ['y', 'x', 'depth', 'children'],
                },
            ],
        },
        {
            name: 'links',
            source: 'tree',
            transform: [
                { type: 'treelinks', key: 'id' },
                {
                    type: 'linkpath',
                    orient: 'horizontal',
                    shape: { signal: 'links' },
                },
            ],
        },
    ],

    scales: [
        {
            name: 'color',
            type: 'sequential',
            range: { scheme: 'magma' },
            domain: { data: 'tree', field: 'depth' },
            zero: true,
        },
    ],

    marks: [
        {
            type: 'path',
            from: { data: 'links' },
            encode: {
                update: {
                    path: { field: 'path' },
                    stroke: { value: '#ccc' },
                },
            },
        },
        {
            type: 'symbol',
            from: { data: 'tree' },
            encode: {
                enter: {
                    size: { value: 100 },
                    stroke: { value: '#fff' },
                },
                update: {
                    x: { field: 'x' },
                    y: { field: 'y' },
                    fill: { scale: 'color', field: 'depth' },
                },
            },
        },
        {
            type: 'text',
            from: { data: 'tree' },
            encode: {
                enter: {
                    text: { field: 'name' },
                    fontSize: { value: 9 },
                    baseline: { value: 'middle' },
                },
                update: {
                    x: { field: 'x' },
                    y: { field: 'y' },
                    dx: { signal: 'datum.children ? -7 : 7' },
                    align: { signal: "datum.children ? 'right' : 'left'" },
                    opacity: { signal: 'labels ? 1 : 0' },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/radial-tree-layout
const radialTreeLayout: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 720,
    height: 720,
    padding: 5,
    autosize: 'none',

    signals: [
        {
            name: 'labels',
            value: true,
            bind: { input: 'checkbox' },
        },
        {
            name: 'radius',
            value: 280,
            bind: { input: 'range', min: 20, max: 600 },
        },
        {
            name: 'extent',
            value: 360,
            bind: { input: 'range', min: 0, max: 360, step: 1 },
        },
        {
            name: 'rotate',
            value: 0,
            bind: { input: 'range', min: 0, max: 360, step: 1 },
        },
        {
            name: 'layout',
            value: 'tidy',
            bind: { input: 'radio', options: ['tidy', 'cluster'] },
        },
        {
            name: 'links',
            value: 'line',
            bind: {
                input: 'select',
                options: ['line', 'curve', 'diagonal', 'orthogonal'],
            },
        },
        { name: 'originX', update: 'width / 2' },
        { name: 'originY', update: 'height / 2' },
    ],

    data: [
        {
            name: 'tree',
            url: 'data/flare.json',
            transform: [
                {
                    type: 'stratify',
                    key: 'id',
                    parentKey: 'parent',
                },
                {
                    type: 'tree',
                    method: { signal: 'layout' },
                    size: [1, { signal: 'radius' }],
                    as: ['alpha', 'radius', 'depth', 'children'],
                },
                {
                    type: 'formula',
                    expr: '(rotate + extent * datum.alpha + 270) % 360',
                    as: 'angle',
                },
                {
                    type: 'formula',
                    expr: 'PI * datum.angle / 180',
                    as: 'radians',
                },
                {
                    type: 'formula',
                    expr: 'inrange(datum.angle, [90, 270])',
                    as: 'leftside',
                },
                {
                    type: 'formula',
                    expr: 'originX + datum.radius * cos(datum.radians)',
                    as: 'x',
                },
                {
                    type: 'formula',
                    expr: 'originY + datum.radius * sin(datum.radians)',
                    as: 'y',
                },
            ],
        },
        {
            name: 'links',
            source: 'tree',
            transform: [
                { type: 'treelinks', key: 'id' },
                {
                    type: 'linkpath',
                    shape: { signal: 'links' },
                    orient: 'radial',
                    sourceX: 'source.radians',
                    sourceY: 'source.radius',
                    targetX: 'target.radians',
                    targetY: 'target.radius',
                },
            ],
        },
    ],

    scales: [
        {
            name: 'color',
            type: 'sequential',
            range: { scheme: 'magma' },
            domain: { data: 'tree', field: 'depth' },
            zero: true,
        },
    ],

    marks: [
        {
            type: 'path',
            from: { data: 'links' },
            encode: {
                update: {
                    x: { signal: 'originX' },
                    y: { signal: 'originY' },
                    path: { field: 'path' },
                    stroke: { value: '#ccc' },
                },
            },
        },
        {
            type: 'symbol',
            from: { data: 'tree' },
            encode: {
                enter: {
                    size: { value: 100 },
                    stroke: { value: '#fff' },
                },
                update: {
                    x: { field: 'x' },
                    y: { field: 'y' },
                    fill: { scale: 'color', field: 'depth' },
                },
            },
        },
        {
            type: 'text',
            from: { data: 'tree' },
            encode: {
                enter: {
                    text: { field: 'name' },
                    fontSize: { value: 9 },
                    baseline: { value: 'middle' },
                },
                update: {
                    x: { field: 'x' },
                    y: { field: 'y' },
                    dx: { signal: '(datum.leftside ? -1 : 1) * 6' },
                    angle: {
                        signal:
                            'datum.leftside ? datum.angle - 180 : datum.angle',
                    },
                    align: { signal: "datum.leftside ? 'right' : 'left'" },
                    opacity: { signal: 'labels ? 1 : 0' },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/treemap
const treemap: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 960,
    height: 500,
    padding: 2.5,
    autosize: 'none',

    signals: [
        {
            name: 'layout',
            value: 'squarify',
            bind: {
                input: 'select',
                options: ['squarify', 'binary', 'slicedice'],
            },
        },
        {
            name: 'aspectRatio',
            value: 1.6,
            bind: { input: 'range', min: 0.2, max: 5, step: 0.1 },
        },
    ],

    data: [
        {
            name: 'tree',
            url: 'data/flare.json',
            transform: [
                {
                    type: 'stratify',
                    key: 'id',
                    parentKey: 'parent',
                },
                {
                    type: 'treemap',
                    field: 'size',
                    sort: { field: 'value' },
                    round: true,
                    method: { signal: 'layout' },
                    ratio: { signal: 'aspectRatio' },
                    size: [{ signal: 'width' }, { signal: 'height' }],
                },
            ],
        },
        {
            name: 'nodes',
            source: 'tree',
            transform: [{ type: 'filter', expr: 'datum.children' }],
        },
        {
            name: 'leaves',
            source: 'tree',
            transform: [{ type: 'filter', expr: '!datum.children' }],
        },
    ],

    scales: [
        {
            name: 'color',
            type: 'ordinal',
            range: [
                '#3182bd',
                '#6baed6',
                '#9ecae1',
                '#c6dbef',
                '#e6550d',
                '#fd8d3c',
                '#fdae6b',
                '#fdd0a2',
                '#31a354',
                '#74c476',
                '#a1d99b',
                '#c7e9c0',
                '#756bb1',
                '#9e9ac8',
                '#bcbddc',
                '#dadaeb',
                '#636363',
                '#969696',
                '#bdbdbd',
                '#d9d9d9',
            ],
        },
        {
            name: 'size',
            type: 'ordinal',
            domain: [0, 1, 2, 3],
            range: [256, 28, 20, 14],
        },
        {
            name: 'opacity',
            type: 'ordinal',
            domain: [0, 1, 2, 3],
            range: [0.15, 0.5, 0.8, 1.0],
        },
    ],

    marks: [
        {
            type: 'rect',
            from: { data: 'nodes' },
            interactive: false,
            encode: {
                enter: {
                    fill: { scale: 'color', field: 'name' },
                },
                update: {
                    x: { field: 'x0' },
                    y: { field: 'y0' },
                    x2: { field: 'x1' },
                    y2: { field: 'y1' },
                },
            },
        },
        {
            type: 'rect',
            from: { data: 'leaves' },
            encode: {
                enter: {
                    stroke: { value: '#fff' },
                },
                update: {
                    x: { field: 'x0' },
                    y: { field: 'y0' },
                    x2: { field: 'x1' },
                    y2: { field: 'y1' },
                    fill: { value: 'transparent' },
                },
                hover: {
                    fill: { value: 'red' },
                },
            },
        },
        {
            type: 'text',
            from: { data: 'nodes' },
            interactive: false,
            encode: {
                enter: {
                    font: { value: 'Helvetica Neue, Arial' },
                    align: { value: 'center' },
                    baseline: { value: 'middle' },
                    fill: { value: '#000' },
                    text: { field: 'name' },
                    fontSize: { scale: 'size', field: 'depth' },
                    fillOpacity: { scale: 'opacity', field: 'depth' },
                },
                update: {
                    x: { signal: '0.5 * (datum.x0 + datum.x1)' },
                    y: { signal: '0.5 * (datum.y0 + datum.y1)' },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/circle-packing
const circlePacking: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 600,
    height: 600,
    padding: 5,
    autosize: 'none',

    data: [
        {
            name: 'tree',
            url: 'data/flare.json',
            transform: [
                {
                    type: 'stratify',
                    key: 'id',
                    parentKey: 'parent',
                },
                {
                    type: 'pack',
                    field: 'size',
                    sort: { field: 'value' },
                    size: [{ signal: 'width' }, { signal: 'height' }],
                },
            ],
        },
    ],

    scales: [
        {
            name: 'color',
            type: 'ordinal',
            range: { scheme: 'category20' },
        },
    ],

    marks: [
        {
            type: 'symbol',
            from: { data: 'tree' },
            encode: {
                enter: {
                    shape: { value: 'circle' as 'circle' },
                    fill: { scale: 'color', field: 'depth' },
                    tooltip: {
                        signal:
                            "datum.name + (datum.size ? ', ' + datum.size + ' bytes' : '')",
                    },
                },
                update: {
                    x: { field: 'x' },
                    y: { field: 'y' },
                    size: { signal: '4 * datum.r * datum.r' },
                    stroke: { value: 'white' },
                    strokeWidth: { value: 0.5 },
                },
                hover: {
                    stroke: { value: 'red' },
                    strokeWidth: { value: 2 },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/sunburst
const sunburst: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 600,
    height: 600,
    padding: 5,
    autosize: 'none',

    data: [
        {
            name: 'tree',
            url: 'data/flare.json',
            transform: [
                {
                    type: 'stratify',
                    key: 'id',
                    parentKey: 'parent',
                },
                {
                    type: 'partition',
                    field: 'size',
                    sort: { field: 'value' },
                    size: [{ signal: '2 * PI' }, { signal: 'width / 2' }],
                    as: ['a0', 'r0', 'a1', 'r1', 'depth', 'children'],
                },
            ],
        },
    ],

    scales: [
        {
            name: 'color',
            type: 'ordinal',
            range: { scheme: 'tableau20' },
        },
    ],

    marks: [
        {
            type: 'arc',
            from: { data: 'tree' },
            encode: {
                enter: {
                    x: { signal: 'width / 2' },
                    y: { signal: 'height / 2' },
                    fill: { scale: 'color', field: 'depth' },
                    tooltip: {
                        signal:
                            "datum.name + (datum.size ? ', ' + datum.size + ' bytes' : '')",
                    },
                },
                update: {
                    startAngle: { field: 'a0' },
                    endAngle: { field: 'a1' },
                    innerRadius: { field: 'r0' },
                    outerRadius: { field: 'r1' },
                    stroke: { value: 'white' },
                    strokeWidth: { value: 0.5 },
                    zindex: { value: 0 },
                },
                hover: {
                    stroke: { value: 'red' },
                    strokeWidth: { value: 2 },
                    zindex: { value: 1 },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/edge-bundling
const edgeBundling: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    padding: 5,
    width: 720,
    height: 720,
    autosize: 'none',

    signals: [
        {
            name: 'tension',
            value: 0.85,
            bind: { input: 'range', min: 0, max: 1, step: 0.01 },
        },
        {
            name: 'radius',
            value: 280,
            bind: { input: 'range', min: 20, max: 400 },
        },
        {
            name: 'extent',
            value: 360,
            bind: { input: 'range', min: 0, max: 360, step: 1 },
        },
        {
            name: 'rotate',
            value: 0,
            bind: { input: 'range', min: 0, max: 360, step: 1 },
        },
        {
            name: 'textSize',
            value: 8,
            bind: { input: 'range', min: 2, max: 20, step: 1 },
        },
        {
            name: 'textOffset',
            value: 2,
            bind: { input: 'range', min: 0, max: 10, step: 1 },
        },
        {
            name: 'layout',
            value: 'cluster',
            bind: { input: 'radio', options: ['tidy', 'cluster'] },
        },
        { name: 'colorIn', value: 'firebrick' },
        { name: 'colorOut', value: 'forestgreen' },
        { name: 'originX', update: 'width / 2' },
        { name: 'originY', update: 'height / 2' },
        {
            name: 'active',
            value: null,
            on: [
                { events: 'text:mouseover', update: 'datum.id' },
                { events: 'mouseover[!event.item]', update: 'null' },
            ],
        },
    ],

    data: [
        {
            name: 'tree',
            url: 'data/flare.json',
            transform: [
                {
                    type: 'stratify',
                    key: 'id',
                    parentKey: 'parent',
                },
                {
                    type: 'tree',
                    method: { signal: 'layout' },
                    size: [1, 1],
                    as: ['alpha', 'beta', 'depth', 'children'],
                },
                {
                    type: 'formula',
                    expr: '(rotate + extent * datum.alpha + 270) % 360',
                    as: 'angle',
                },
                {
                    type: 'formula',
                    expr: 'inrange(datum.angle, [90, 270])',
                    as: 'leftside',
                },
                {
                    type: 'formula',
                    expr:
                        'originX + radius * datum.beta * cos(PI * datum.angle / 180)',
                    as: 'x',
                },
                {
                    type: 'formula',
                    expr:
                        'originY + radius * datum.beta * sin(PI * datum.angle / 180)',
                    as: 'y',
                },
            ],
        },
        {
            name: 'leaves',
            source: 'tree',
            transform: [
                {
                    type: 'filter',
                    expr: '!datum.children',
                },
            ],
        },
        {
            name: 'dependencies',
            url: 'data/flare-dependencies.json',
            transform: [
                {
                    type: 'formula',
                    expr: "treePath('tree', datum.source, datum.target)",
                    as: 'treepath',
                    initonly: true,
                },
            ],
        },
        {
            name: 'selected',
            source: 'dependencies',
            transform: [
                {
                    type: 'filter',
                    expr: 'datum.source === active || datum.target === active',
                },
            ],
        },
    ],

    marks: [
        {
            type: 'text',
            from: { data: 'leaves' },
            encode: {
                enter: {
                    text: { field: 'name' },
                    baseline: { value: 'middle' },
                },
                update: {
                    x: { field: 'x' },
                    y: { field: 'y' },
                    dx: { signal: 'textOffset * (datum.leftside ? -1 : 1)' },
                    angle: {
                        signal:
                            'datum.leftside ? datum.angle - 180 : datum.angle',
                    },
                    align: { signal: "datum.leftside ? 'right' : 'left'" },
                    fontSize: { signal: 'textSize' },
                    fontWeight: [
                        {
                            test: "indata('selected', 'source', datum.id)",
                            value: 'bold',
                        },
                        {
                            test: "indata('selected', 'target', datum.id)",
                            value: 'bold',
                        },
                        { value: null },
                    ],
                    fill: [
                        { test: 'datum.id === active', value: 'black' },
                        {
                            test: "indata('selected', 'source', datum.id)",
                            signal: 'colorIn',
                        },
                        {
                            test: "indata('selected', 'target', datum.id)",
                            signal: 'colorOut',
                        },
                        { value: 'black' },
                    ],
                },
            },
        },
        {
            type: 'group',
            from: {
                facet: {
                    name: 'path',
                    data: 'dependencies',
                    field: 'treepath',
                },
            },
            marks: [
                {
                    type: 'line',
                    interactive: false,
                    from: { data: 'path' },
                    encode: {
                        enter: {
                            interpolate: { value: 'bundle' },
                            strokeWidth: { value: 1.5 },
                        },
                        update: {
                            stroke: [
                                {
                                    test: 'parent.source === active',
                                    signal: 'colorOut',
                                },
                                {
                                    test: 'parent.target === active',
                                    signal: 'colorIn',
                                },
                                { value: 'steelblue' },
                            ],
                            strokeOpacity: [
                                {
                                    test:
                                        'parent.source === active || parent.target === active',
                                    value: 1,
                                },
                                { value: 0.2 },
                            ],
                            tension: { signal: 'tension' },
                            x: { field: 'x' },
                            y: { field: 'y' },
                        },
                    },
                },
            ],
        },
    ],

    scales: [
        {
            name: 'color',
            type: 'ordinal',
            domain: ['depends on', 'imported by'],
            range: [{ signal: 'colorIn' }, { signal: 'colorOut' }],
        },
    ],

    legends: [
        {
            stroke: 'color',
            orient: 'bottom-right',
            title: 'Dependencies',
            encode: {
                symbols: {
                    enter: {
                        shape: { value: 'M-0.5,0H1' },
                    },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/force-directed-layout
const forceDirectedLayout: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 700,
    height: 500,
    padding: 0,
    autosize: 'none',

    signals: [
        { name: 'cx', update: 'width / 2' },
        { name: 'cy', update: 'height / 2' },
        {
            name: 'nodeRadius',
            value: 8,
            bind: { input: 'range', min: 1, max: 50, step: 1 },
        },
        {
            name: 'nodeCharge',
            value: -30,
            bind: { input: 'range', min: -100, max: 10, step: 1 },
        },
        {
            name: 'linkDistance',
            value: 30,
            bind: { input: 'range', min: 5, max: 100, step: 1 },
        },
        {
            name: 'static',
            value: true,
            bind: { input: 'checkbox' },
        },
        {
            description: 'State variable for active node fix status.',
            name: 'fix',
            value: 0,
            on: [
                {
                    events: 'symbol:mouseout[!event.buttons], window:mouseup',
                    update: '0',
                },
                {
                    events: 'symbol:mouseover',
                    update: 'fix || 1',
                },
                {
                    events:
                        '[symbol:mousedown, window:mouseup] > window:mousemove!',
                    update: '2',
                    force: true,
                },
            ],
        },
        {
            description: 'Graph node most recently interacted with.',
            name: 'node',
            value: null,
            on: [
                {
                    events: 'symbol:mouseover',
                    update: 'fix === 1 ? item() : node',
                },
            ],
        },
        {
            description: 'Flag to restart Force simulation upon data changes.',
            name: 'restart',
            value: false,
            on: [{ events: { signal: 'fix' }, update: 'fix > 1' }],
        },
    ],

    data: [
        {
            name: 'node-data',
            url: 'data/miserables.json',
            format: { type: 'json', property: 'nodes' },
        },
        {
            name: 'link-data',
            url: 'data/miserables.json',
            format: { type: 'json', property: 'links' },
        },
    ],

    scales: [
        {
            name: 'color',
            type: 'ordinal',
            range: { scheme: 'category20c' },
        },
    ],

    marks: [
        {
            name: 'nodes',
            type: 'symbol',
            zindex: 1,

            from: { data: 'node-data' },
            on: [
                {
                    trigger: 'fix',
                    modify: 'node',
                    values:
                        'fix === 1 ? {fx:node.x, fy:node.y} : {fx:x(), fy:y()}',
                },
                {
                    trigger: '!fix',
                    modify: 'node',
                    values: '{fx: null, fy: null}',
                },
            ],

            encode: {
                enter: {
                    fill: { scale: 'color', field: 'group' },
                    stroke: { value: 'white' },
                },
                update: {
                    size: { signal: '2 * nodeRadius * nodeRadius' },
                    cursor: { value: 'pointer' },
                },
            },

            transform: [
                {
                    type: 'force',
                    iterations: 300,
                    restart: { signal: 'restart' },
                    static: { signal: 'static' },
                    forces: [
                        {
                            force: 'center',
                            x: { signal: 'cx' },
                            y: { signal: 'cy' },
                        },
                        { force: 'collide', radius: { signal: 'nodeRadius' } },
                        { force: 'nbody', strength: { signal: 'nodeCharge' } },
                        {
                            force: 'link',
                            links: 'link-data',
                            distance: { signal: 'linkDistance' },
                        },
                    ],
                },
            ],
        },
        {
            type: 'path',
            from: { data: 'link-data' },
            interactive: false,
            encode: {
                update: {
                    stroke: { value: '#ccc' },
                    strokeWidth: { value: 0.5 },
                },
            },
            transform: [
                {
                    type: 'linkpath',
                    shape: 'line',
                    sourceX: 'datum.source.x',
                    sourceY: 'datum.source.y',
                    targetX: 'datum.target.x',
                    targetY: 'datum.target.y',
                },
            ],
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/reorderable-matrix
const reorderableMatrix: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 770,
    height: 770,
    padding: 2,

    signals: [
        { name: 'cellSize', value: 10 },
        { name: 'width', update: "span(range('position'))" },
        { name: 'height', update: 'width' },
        {
            name: 'src',
            value: {},
            on: [
                { events: 'text:mousedown', update: 'datum' },
                { events: 'window:mouseup', update: '{}' },
            ],
        },
        {
            name: 'dest',
            value: {},
            on: [
                {
                    events: '[text:mousedown, window:mouseup] > text:mouseover',
                    update: 'src.name != null ? datum : dest',
                },
                { events: 'text:mouseout', update: '{}' },
            ],
        },
        { name: 'destOrder', update: 'dest.order' },
        { name: 'dragging', update: 'src.name && dest.name' },
    ],

    data: [
        {
            name: 'nodes',
            url: 'data/miserables.json',
            format: { type: 'json', property: 'nodes' },
            transform: [
                { type: 'collect', sort: { field: 'group' } },
                { type: 'window', ops: ['rank'], as: ['order'] },
                {
                    type: 'formula',
                    as: 'order',
                    expr:
                        'dragging && datum === dest ? src.order : datum.order',
                },
                {
                    type: 'formula',
                    as: 'order',
                    expr: 'dragging && datum === src ? destOrder : datum.order',
                },
            ],
        },
        {
            name: 'edges',
            url: 'data/miserables.json',
            format: { type: 'json', property: 'links' },
            transform: [
                {
                    type: 'lookup',
                    from: 'nodes',
                    key: 'index',
                    fields: ['source', 'target'],
                    as: ['sourceNode', 'targetNode'],
                },
                {
                    type: 'formula',
                    as: 'group',
                    expr:
                        'datum.sourceNode.group === datum.targetNode.group ? datum.sourceNode.group : -1',
                },
            ],
        },
        {
            name: 'cross',
            source: 'nodes',
            transform: [{ type: 'cross' }],
        },
    ],

    scales: [
        {
            name: 'position',
            type: 'band',
            domain: { data: 'nodes', field: 'order', sort: true },
            range: { step: { signal: 'cellSize' } },
        },
        {
            name: 'color',
            type: 'ordinal',
            range: 'category',
            domain: { data: 'nodes', field: 'group' },
        },
        {
            name: 'labels',
            type: 'ordinal',
            domain: { data: 'nodes', field: 'order' },
            range: { data: 'nodes', field: 'name' },
        },
    ],

    marks: [
        {
            type: 'rect',
            from: { data: 'cross' },
            encode: {
                update: {
                    x: { scale: 'position', field: 'a.order' },
                    y: { scale: 'position', field: 'b.order' },
                    width: { scale: 'position', band: 1, offset: -1 },
                    height: { scale: 'position', band: 1, offset: -1 },
                    fill: [
                        {
                            test: 'datum.a === src || datum.b === src',
                            value: '#ddd',
                        },
                        { value: '#f5f5f5' },
                    ],
                },
            },
        },
        {
            type: 'rect',
            from: { data: 'edges' },
            encode: {
                update: {
                    x: { scale: 'position', field: 'sourceNode.order' },
                    y: { scale: 'position', field: 'targetNode.order' },
                    width: { scale: 'position', band: 1, offset: -1 },
                    height: { scale: 'position', band: 1, offset: -1 },
                    fill: { scale: 'color', field: 'group' },
                },
            },
        },
        {
            type: 'rect',
            from: { data: 'edges' },
            encode: {
                update: {
                    x: { scale: 'position', field: 'targetNode.order' },
                    width: { scale: 'position', band: 1, offset: -1 },
                    y: { scale: 'position', field: 'sourceNode.order' },
                    height: { scale: 'position', band: 1, offset: -1 },
                    fill: { scale: 'color', field: 'group' },
                },
            },
        },
        {
            type: 'text',
            from: { data: 'nodes' },
            encode: {
                update: {
                    x: { scale: 'position', field: 'order' },
                    y: { offset: -2 },
                    dy: { scale: 'position', band: 0.5 },
                    text: { field: 'name' },
                    fontSize: { value: 10 },
                    angle: { value: -90 },
                    align: { value: 'left' },
                    baseline: { value: 'middle' },
                    fill: [
                        { test: 'datum === src', value: 'steelblue' },
                        { value: 'black' },
                    ],
                },
            },
        },
        {
            type: 'text',
            from: { data: 'nodes' },
            encode: {
                update: {
                    x: { offset: -2 },
                    y: { scale: 'position', field: 'order' },
                    dy: { scale: 'position', band: 0.5 },
                    text: { field: 'name' },
                    fontSize: { value: 10 },
                    align: { value: 'right' },
                    baseline: { value: 'middle' },
                    fill: [
                        { test: 'datum === src', value: 'steelblue' },
                        { value: 'black' },
                    ],
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/arc-diagram
const arcDiagram: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 770,
    padding: 5,

    data: [
        {
            name: 'edges',
            url: 'data/miserables.json',
            format: { type: 'json', property: 'links' },
        },
        {
            name: 'sourceDegree',
            source: 'edges',
            transform: [{ type: 'aggregate', groupby: ['source'] }],
        },
        {
            name: 'targetDegree',
            source: 'edges',
            transform: [{ type: 'aggregate', groupby: ['target'] }],
        },
        {
            name: 'nodes',
            url: 'data/miserables.json',
            format: { type: 'json', property: 'nodes' },
            transform: [
                { type: 'window', ops: ['rank'], as: ['order'] },
                {
                    type: 'lookup',
                    from: 'sourceDegree',
                    key: 'source',
                    fields: ['index'],
                    as: ['sourceDegree'],
                    default: { count: 0 },
                },
                {
                    type: 'lookup',
                    from: 'targetDegree',
                    key: 'target',
                    fields: ['index'],
                    as: ['targetDegree'],
                    default: { count: 0 },
                },
                {
                    type: 'formula',
                    as: 'degree',
                    expr: 'datum.sourceDegree.count + datum.targetDegree.count',
                },
            ],
        },
    ],

    scales: [
        {
            name: 'position',
            type: 'band',
            domain: { data: 'nodes', field: 'order', sort: true },
            range: 'width',
        },
        {
            name: 'color',
            type: 'ordinal',
            range: 'category',
            domain: { data: 'nodes', field: 'group' },
        },
    ],

    marks: [
        {
            type: 'symbol',
            name: 'layout',
            interactive: false,
            from: { data: 'nodes' },
            encode: {
                enter: {
                    opacity: { value: 0 },
                },
                update: {
                    x: { scale: 'position', field: 'order' },
                    y: { value: 0 },
                    size: { field: 'degree', mult: 5, offset: 10 },
                    fill: { scale: 'color', field: 'group' },
                },
            },
        },
        {
            type: 'path',
            from: { data: 'edges' },
            encode: {
                update: {
                    stroke: { value: '#000' },
                    strokeOpacity: { value: 0.2 },
                    strokeWidth: { field: 'value' },
                },
            },
            transform: [
                {
                    type: 'lookup',
                    from: 'layout',
                    key: 'datum.index',
                    fields: ['datum.source', 'datum.target'],
                    as: ['sourceNode', 'targetNode'],
                },
                {
                    type: 'linkpath',
                    sourceX: {
                        expr: 'min(datum.sourceNode.x, datum.targetNode.x)',
                    },
                    targetX: {
                        expr: 'max(datum.sourceNode.x, datum.targetNode.x)',
                    },
                    sourceY: { expr: '0' },
                    targetY: { expr: '0' },
                    shape: 'arc',
                },
            ],
        },
        {
            type: 'symbol',
            from: { data: 'layout' },
            encode: {
                update: {
                    x: { field: 'x' },
                    y: { field: 'y' },
                    fill: { field: 'fill' },
                    size: { field: 'size' },
                },
            },
        },
        {
            type: 'text',
            from: { data: 'nodes' },
            encode: {
                update: {
                    x: { scale: 'position', field: 'order' },
                    y: { value: 7 },
                    fontSize: { value: 9 },
                    align: { value: 'right' },
                    baseline: { value: 'middle' },
                    angle: { value: -90 },
                    text: { field: 'name' },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/airport-connections
const airportConnections: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 900,
    height: 560,
    padding: { top: 25, left: 0, right: 0, bottom: 0 },
    autosize: 'none',

    signals: [
        {
            name: 'scale',
            value: 1200,
            bind: { input: 'range', min: 500, max: 3000 },
        },
        {
            name: 'translateX',
            value: 450,
            bind: { input: 'range', min: -500, max: 1200 },
        },
        {
            name: 'translateY',
            value: 260,
            bind: { input: 'range', min: -300, max: 700 },
        },
        {
            name: 'shape',
            value: 'line',
            bind: { input: 'radio', options: ['line', 'curve'] },
        },
        {
            name: 'hover',
            value: null,
            on: [
                { events: '@cell:mouseover', update: 'datum' },
                { events: '@cell:mouseout', update: 'null' },
            ],
        },
        {
            name: 'title',
            value: 'U.S. Airports, 2008',
            update:
                "hover ? hover.name + ' (' + hover.iata + ')' : 'U.S. Airports, 2008'",
        },
        {
            name: 'cell_stroke',
            value: null,
            on: [
                { events: 'dblclick', update: "cell_stroke ? null : 'brown'" },
                { events: 'mousedown!', update: 'cell_stroke' },
            ],
        },
    ],

    data: [
        {
            name: 'states',
            url: 'data/us-10m.json',
            format: { type: 'topojson', feature: 'states' },
            transform: [
                {
                    type: 'geopath',
                    projection: 'projection',
                },
            ],
        },
        {
            name: 'traffic',
            url: 'data/flights-airport.csv',
            format: { type: 'csv', parse: 'auto' },
            transform: [
                {
                    type: 'aggregate',
                    groupby: ['origin'],
                    fields: ['count'],
                    ops: ['sum'],
                    as: ['flights'],
                },
            ],
        },
        {
            name: 'airports',
            url: 'data/airports.csv',
            format: {
                type: 'csv',
                parse: 'auto',
            },
            transform: [
                {
                    type: 'lookup',
                    from: 'traffic',
                    key: 'origin',
                    fields: ['iata'],
                    as: ['traffic'],
                },
                {
                    type: 'filter',
                    expr: 'datum.traffic != null',
                },
                {
                    type: 'geopoint',
                    projection: 'projection',
                    fields: ['longitude', 'latitude'],
                },
                {
                    type: 'filter',
                    expr: 'datum.x != null && datum.y != null',
                },
                {
                    type: 'voronoi',
                    x: 'x',
                    y: 'y',
                },
                {
                    type: 'collect',
                    sort: {
                        field: 'traffic.flights',
                        order: 'descending',
                    },
                },
            ],
        },
        {
            name: 'routes',
            url: 'data/flights-airport.csv',
            format: { type: 'csv', parse: 'auto' },
            transform: [
                {
                    type: 'filter',
                    expr: 'hover && hover.iata == datum.origin',
                },
                {
                    type: 'lookup',
                    from: 'airports',
                    key: 'iata',
                    fields: ['origin', 'destination'],
                    as: ['source', 'target'],
                },
                {
                    type: 'filter',
                    expr: 'datum.source && datum.target',
                },
                {
                    type: 'linkpath',
                    shape: { signal: 'shape' },
                },
            ],
        },
    ],

    projections: [
        {
            name: 'projection',
            type: 'albersUsa',
            scale: { signal: 'scale' },
            translate: [{ signal: 'translateX' }, { signal: 'translateY' }],
        },
    ],

    scales: [
        {
            name: 'size',
            type: 'linear',
            domain: { data: 'traffic', field: 'flights' },
            range: [16, 1000],
        },
    ],

    marks: [
        {
            type: 'path',
            from: { data: 'states' },
            encode: {
                enter: {
                    fill: { value: '#dedede' },
                    stroke: { value: 'white' },
                },
                update: {
                    path: { field: 'path' },
                },
            },
        },
        {
            type: 'symbol',
            from: { data: 'airports' },
            encode: {
                enter: {
                    size: { scale: 'size', field: 'traffic.flights' },
                    fill: { value: 'steelblue' },
                    fillOpacity: { value: 0.8 },
                    stroke: { value: 'white' },
                    strokeWidth: { value: 1.5 },
                },
                update: {
                    x: { field: 'x' },
                    y: { field: 'y' },
                },
            },
        },
        {
            type: 'path',
            name: 'cell',
            from: { data: 'airports' },
            encode: {
                enter: {
                    fill: { value: 'transparent' },
                    strokeWidth: { value: 0.35 },
                },
                update: {
                    path: { field: 'path' },
                    stroke: { signal: 'cell_stroke' },
                },
            },
        },
        {
            type: 'path',
            interactive: false,
            from: { data: 'routes' },
            encode: {
                enter: {
                    path: { field: 'path' },
                    stroke: { value: 'black' },
                    strokeOpacity: { value: 0.35 },
                },
            },
        },
        {
            type: 'text',
            interactive: false,
            encode: {
                enter: {
                    x: { value: 895 },
                    y: { value: 0 },
                    fill: { value: 'black' },
                    fontSize: { value: 20 },
                    align: { value: 'right' },
                },
                update: {
                    text: { signal: 'title' },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/heatmap
const heatMap: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 800,
    height: 500,
    padding: 5,

    config: {
        title: { fontSize: 14 },
    },

    title: {
        text: 'Seattle Annual Temperatures',
        anchor: 'start',
        offset: 4,
    },

    signals: [
        {
            name: 'palette',
            value: 'Viridis',
            bind: {
                input: 'select',
                options: [
                    'Viridis',
                    'Magma',
                    'Inferno',
                    'Plasma',
                    'Blues',
                    'Greens',
                    'Greys',
                    'Purples',
                    'Reds',
                    'Oranges',
                    'BlueOrange',
                    'BrownBlueGreen',
                    'PurpleGreen',
                    'PinkYellowGreen',
                    'PurpleOrange',
                    'RedBlue',
                    'RedGrey',
                    'RedYellowBlue',
                    'RedYellowGreen',
                    'BlueGreen',
                    'BluePurple',
                    'GreenBlue',
                    'OrangeRed',
                    'PurpleBlueGreen',
                    'PurpleBlue',
                    'PurpleRed',
                    'RedPurple',
                    'YellowGreenBlue',
                    'YellowGreen',
                    'YellowOrangeBrown',
                    'YellowOrangeRed',
                ],
            },
        },
        {
            name: 'reverse',
            value: false,
            bind: { input: 'checkbox' },
        },
    ],

    data: [
        {
            name: 'temperature',
            url: 'data/seattle-temps.csv',
            format: { type: 'csv', parse: { temp: 'number', date: 'date' } },
            transform: [
                { type: 'formula', as: 'hour', expr: 'hours(datum.date)' },
                {
                    type: 'formula',
                    as: 'date',
                    expr:
                        'datetime(year(datum.date), month(datum.date), date(datum.date))',
                },
            ],
        },
    ],

    scales: [
        {
            name: 'x',
            type: 'time',
            domain: { data: 'temperature', field: 'date' },
            range: 'width',
        },
        {
            name: 'y',
            type: 'band',
            domain: [
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                0,
                1,
                2,
                3,
                4,
                5,
            ],
            range: 'height',
        },
        {
            name: 'color',
            type: 'sequential',
            range: { scheme: { signal: 'palette' } },
            domain: { data: 'temperature', field: 'temp' },
            reverse: { signal: 'reverse' },
            zero: false,
            nice: false,
        },
    ],

    axes: [
        {
            orient: 'bottom',
            scale: 'x',
            domain: false,
            title: 'Month',
            format: '%b',
        },
        {
            orient: 'left',
            scale: 'y',
            domain: false,
            title: 'Hour',
            encode: {
                labels: {
                    update: {
                        text: {
                            signal:
                                "datum.value === 0 ? 'Midnight' : datum.value === 12 ? 'Noon' : datum.value < 12 ? datum.value + ':00 am' : (datum.value - 12) + ':00 pm'",
                        },
                    },
                },
            },
        },
    ],

    legends: [{ fill: 'color', type: 'gradient', title: 'Avg. Temp (°F)' }],

    marks: [
        {
            type: 'rect',
            from: { data: 'temperature' },
            encode: {
                enter: {
                    x: { scale: 'x', field: 'date' },
                    width: { value: 5 },
                    y: { scale: 'y', field: 'hour' },
                    height: { scale: 'y', band: 1 },
                },
                update: {
                    fill: { scale: 'color', field: 'temp' },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/parallel-coordinates
const parallelCoordinates: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 700,
    height: 400,
    padding: 5,

    config: {
        axisY: {
            titleX: -2,
            titleY: 410,
            titleAngle: 0,
            titleAlign: 'right',
            titleBaseline: 'top',
        },
    },

    data: [
        {
            name: 'cars',
            url: 'data/cars.json',
            format: {
                type: 'json',
                parse: { Year: 'date:%Y-%m-%d' },
            },
            transform: [
                {
                    type: 'filter',
                    expr: 'datum.Horsepower && datum.Miles_per_Gallon',
                },
                {
                    type: 'formula',
                    as: 'Year',
                    expr:
                        'isNumber(datum.year) ? datum.year : year(datum.Year)',
                },
            ],
        },
        {
            name: 'fields',
            values: [
                'Cylinders',
                'Displacement',
                'Weight_in_lbs',
                'Horsepower',
                'Acceleration',
                'Miles_per_Gallon',
                'Year',
            ],
        },
    ],

    scales: [
        {
            name: 'ord',
            type: 'point',
            range: 'width',
            round: true,
            domain: { data: 'fields', field: 'data' },
        },
        {
            name: 'Cylinders',
            type: 'linear',
            range: 'height',
            zero: false,
            nice: true,
            domain: { data: 'cars', field: 'Cylinders' },
        },
        {
            name: 'Displacement',
            type: 'linear',
            range: 'height',
            zero: false,
            nice: true,
            domain: { data: 'cars', field: 'Displacement' },
        },
        {
            name: 'Weight_in_lbs',
            type: 'linear',
            range: 'height',
            zero: false,
            nice: true,
            domain: { data: 'cars', field: 'Weight_in_lbs' },
        },
        {
            name: 'Horsepower',
            type: 'linear',
            range: 'height',
            zero: false,
            nice: true,
            domain: { data: 'cars', field: 'Horsepower' },
        },
        {
            name: 'Acceleration',
            type: 'linear',
            range: 'height',
            zero: false,
            nice: true,
            domain: { data: 'cars', field: 'Acceleration' },
        },
        {
            name: 'Miles_per_Gallon',
            type: 'linear',
            range: 'height',
            zero: false,
            nice: true,
            domain: { data: 'cars', field: 'Miles_per_Gallon' },
        },
        {
            name: 'Year',
            type: 'linear',
            range: 'height',
            zero: false,
            nice: true,
            domain: { data: 'cars', field: 'Year' },
        },
    ],

    axes: [
        {
            orient: 'left',
            zindex: 1,
            scale: 'Cylinders',
            title: 'Cylinders',
            offset: { scale: 'ord', value: 'Cylinders', mult: -1 },
        },
        {
            orient: 'left',
            zindex: 1,
            scale: 'Displacement',
            title: 'Displacement',
            offset: { scale: 'ord', value: 'Displacement', mult: -1 },
        },
        {
            orient: 'left',
            zindex: 1,
            scale: 'Weight_in_lbs',
            title: 'Weight_in_lbs',
            offset: { scale: 'ord', value: 'Weight_in_lbs', mult: -1 },
        },
        {
            orient: 'left',
            zindex: 1,
            scale: 'Horsepower',
            title: 'Horsepower',
            offset: { scale: 'ord', value: 'Horsepower', mult: -1 },
        },
        {
            orient: 'left',
            zindex: 1,
            scale: 'Acceleration',
            title: 'Acceleration',
            offset: { scale: 'ord', value: 'Acceleration', mult: -1 },
        },
        {
            orient: 'left',
            zindex: 1,
            scale: 'Miles_per_Gallon',
            title: 'Miles_per_Gallon',
            offset: { scale: 'ord', value: 'Miles_per_Gallon', mult: -1 },
        },
        {
            orient: 'left',
            zindex: 1,
            scale: 'Year',
            title: 'Year',
            format: 'd',
            offset: { scale: 'ord', value: 'Year', mult: -1 },
        },
    ],

    marks: [
        {
            type: 'group',
            from: { data: 'cars' },
            marks: [
                {
                    type: 'line',
                    from: { data: 'fields' },
                    encode: {
                        enter: {
                            x: { scale: 'ord', field: 'data' },
                            y: {
                                scale: { datum: 'data' },
                                field: { parent: { datum: 'data' } },
                            },
                            stroke: { value: 'steelblue' },
                            strokeWidth: { value: 1.01 },
                            strokeOpacity: { value: 0.3 },
                        },
                    },
                },
            ],
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/timelines
const timelines: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 500,
    height: 80,
    padding: 5,

    data: [
        {
            name: 'people',
            values: [
                {
                    label: 'Washington',
                    born: -7506057600000,
                    died: -5366196000000,
                    enter: -5701424400000,
                    leave: -5453884800000,
                },
                {
                    label: 'Adams',
                    born: -7389766800000,
                    died: -4528285200000,
                    enter: -5453884800000,
                    leave: -5327740800000,
                },
                {
                    label: 'Jefferson',
                    born: -7154586000000,
                    died: -4528285200000,
                    enter: -5327740800000,
                    leave: -5075280000000,
                },
                {
                    label: 'Madison',
                    born: -6904544400000,
                    died: -4213184400000,
                    enter: -5075280000000,
                    leave: -4822819200000,
                },
                {
                    label: 'Monroe',
                    born: -6679904400000,
                    died: -4370518800000,
                    enter: -4822819200000,
                    leave: -4570358400000,
                },
            ],
        },
        {
            name: 'events',
            format: { type: 'json', parse: { when: 'date' } },
            values: [
                { name: 'Decl. of Independence', when: 'July 4, 1776' },
                { name: 'U.S. Constitution', when: '3/4/1789' },
                { name: 'Louisiana Purchase', when: 'April 30, 1803' },
                { name: 'Monroe Doctrine', when: 'Dec 2, 1823' },
            ],
        },
    ],

    scales: [
        {
            name: 'yscale',
            type: 'band',
            range: [0, { signal: 'height' }],
            domain: { data: 'people', field: 'label' },
        },
        {
            name: 'xscale',
            type: 'time',
            range: 'width',
            round: true,
            domain: { data: 'people', fields: ['born', 'died'] },
        },
    ],

    axes: [{ orient: 'bottom', scale: 'xscale' }],

    marks: [
        {
            type: 'text',
            from: { data: 'events' },
            encode: {
                enter: {
                    x: { scale: 'xscale', field: 'when' },
                    y: { value: -10 },
                    angle: { value: -25 },
                    fill: { value: '#000' },
                    text: { field: 'name' },
                    fontSize: { value: 10 },
                },
            },
        },
        {
            type: 'rect',
            from: { data: 'events' },
            encode: {
                enter: {
                    x: { scale: 'xscale', field: 'when' },
                    y: { value: -8 },
                    width: { value: 1 },
                    height: { field: { group: 'height' }, offset: 8 },
                    fill: { value: '#888' },
                },
            },
        },
        {
            type: 'text',
            from: { data: 'people' },
            encode: {
                enter: {
                    x: { scale: 'xscale', field: 'born' },
                    y: { scale: 'yscale', field: 'label', offset: -3 },
                    fill: { value: '#000' },
                    text: { field: 'label' },
                    fontSize: { value: 10 },
                },
            },
        },
        {
            type: 'rect',
            from: { data: 'people' },
            encode: {
                enter: {
                    x: { scale: 'xscale', field: 'born' },
                    x2: { scale: 'xscale', field: 'died' },
                    y: { scale: 'yscale', field: 'label' },
                    height: { value: 2 },
                    fill: { value: '#557' },
                },
            },
        },
        {
            type: 'rect',
            from: { data: 'people' },
            encode: {
                enter: {
                    x: { scale: 'xscale', field: 'enter' },
                    x2: { scale: 'xscale', field: 'leave' },
                    y: { scale: 'yscale', field: 'label', offset: -1 },
                    height: { value: 4 },
                    fill: { value: '#e44' },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/beeswarm-plot
const beeswarmPlot: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 800,
    height: 100,
    padding: { left: 5, right: 5, top: 0, bottom: 20 },
    autosize: 'none',

    signals: [
        { name: 'cx', update: 'width / 2' },
        { name: 'cy', update: 'height / 2' },
        {
            name: 'radius',
            value: 8,
            bind: { input: 'range', min: 2, max: 15, step: 1 },
        },
        {
            name: 'collide',
            value: 1,
            bind: { input: 'range', min: 1, max: 10, step: 1 },
        },
        {
            name: 'gravityX',
            value: 0.2,
            bind: { input: 'range', min: 0, max: 1 },
        },
        {
            name: 'gravityY',
            value: 0.1,
            bind: { input: 'range', min: 0, max: 1 },
        },
        { name: 'static', value: true, bind: { input: 'checkbox' } },
    ],

    data: [
        {
            name: 'people',
            url: 'data/miserables.json',
            format: { type: 'json', property: 'nodes' },
        },
    ],

    scales: [
        {
            name: 'xscale',
            type: 'band',
            domain: {
                data: 'people',
                field: 'group',
                sort: true,
            },
            range: 'width',
        },
        {
            name: 'color',
            type: 'ordinal',
            range: { scheme: 'category20c' },
        },
    ],

    axes: [{ orient: 'bottom', scale: 'xscale' }],

    marks: [
        {
            name: 'nodes',
            type: 'symbol',
            from: { data: 'people' },
            encode: {
                enter: {
                    fill: { scale: 'color', field: 'group' },
                    xfocus: { scale: 'xscale', field: 'group', band: 0.5 },
                    yfocus: { signal: 'cy' },
                },
                update: {
                    size: { signal: 'pow(2 * radius, 2)' },
                    stroke: { value: 'white' },
                    strokeWidth: { value: 1 },
                    zindex: { value: 0 },
                },
                hover: {
                    stroke: { value: 'purple' },
                    strokeWidth: { value: 3 },
                    zindex: { value: 1 },
                },
            },
            transform: [
                {
                    type: 'force',
                    iterations: 300,
                    static: { signal: 'static' },
                    forces: [
                        {
                            force: 'collide',
                            iterations: { signal: 'collide' },
                            radius: { signal: 'radius' },
                        },
                        {
                            force: 'x',
                            x: 'xfocus',
                            strength: { signal: 'gravityX' },
                        },
                        {
                            force: 'y',
                            y: 'yfocus',
                            strength: { signal: 'gravityY' },
                        },
                    ],
                },
            ],
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/budget-forecasts
const budgetForecasts: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 700,
    height: 400,
    padding: 5,
    background: '#edf1f7',

    config: {
        axisBand: {
            bandPosition: 0,
            labelPadding: 5,
            tickExtra: false,
        },
    },

    signals: [
        {
            name: 'dragging',
            value: false,
            on: [
                { events: '@handle:mousedown', update: 'true' },
                { events: 'mouseup', update: 'false' },
            ],
        },
        {
            name: 'handleYear',
            value: 2010,
            on: [
                {
                    events:
                        '[@handle:mousedown, window:mouseup] > window:mousemove!',
                    update: "invert('x', clamp(x(), 0, width))",
                },
            ],
        },
        {
            name: 'currentYear',
            update: 'clamp(handleYear, 1980, 2010)',
        },
        {
            name: 'tipYear',
            on: [
                {
                    events: 'mousemove',
                    update: "dragging ? tipYear : invert('x', x())",
                },
            ],
        },
        {
            name: 'tipValue',
            on: [
                {
                    events: 'mousemove',
                    update: "dragging ? tipValue : invert('y', y())",
                },
            ],
        },
        {
            name: 'cursor',
            value: 'default',
            on: [
                {
                    events: { signal: 'dragging' },
                    update: "dragging ? 'pointer' : 'default'",
                },
            ],
        },
    ],

    data: [
        {
            name: 'budgets',
            url: 'data/budgets.json',
            transform: [
                { type: 'formula', as: 'abs', expr: 'abs(datum.value)' },
                {
                    type: 'formula',
                    as: 'type',
                    expr: "datum.value < 0 ? 'deficit' : 'surplus'",
                },
            ],
        },
        {
            name: 'budgets-current',
            source: 'budgets',
            transform: [
                { type: 'filter', expr: 'datum.budgetYear <= currentYear' },
            ],
        },
        {
            name: 'budgets-actual',
            source: 'budgets',
            transform: [
                {
                    type: 'filter',
                    expr:
                        'datum.budgetYear <= currentYear && datum.forecastYear == datum.budgetYear - 1',
                },
            ],
        },
        {
            name: 'tooltip',
            source: 'budgets',
            transform: [
                {
                    type: 'filter',
                    expr:
                        'datum.budgetYear <= currentYear && datum.forecastYear == tipYear && abs(datum.value - tipValue) <= 0.1',
                },
                {
                    type: 'aggregate',
                    fields: ['value', 'value'],
                    ops: ['min', 'argmin'],
                    as: ['min', 'argmin'],
                },
                {
                    type: 'formula',
                    as: 'tooltipYear',
                    expr: 'datum.argmin.budgetYear',
                },
            ],
        },
        {
            name: 'tooltip-forecast',
            source: 'budgets',
            transform: [
                {
                    type: 'lookup',
                    from: 'tooltip',
                    key: 'tooltipYear',
                    fields: ['budgetYear'],
                    as: ['tooltip'],
                },
                { type: 'filter', expr: 'datum.tooltip' },
            ],
        },
    ],

    scales: [
        {
            name: 'x',
            type: 'band',
            domain: { data: 'budgets', field: 'forecastYear' },
            range: 'width',
        },
        {
            name: 'y',
            type: 'linear',
            zero: true,
            domain: { data: 'budgets', field: 'value' },
            range: 'height',
        },
    ],

    axes: [
        {
            orient: 'bottom',
            scale: 'x',
            grid: true,
            domain: false,
            values: [
                1982,
                1986,
                1990,
                1994,
                1998,
                2002,
                2006,
                2010,
                2014,
                2018,
            ],
            tickSize: 0,
            encode: {
                grid: {
                    enter: {
                        stroke: { value: 'white' },
                        strokeOpacity: { value: 0.75 },
                    },
                },
                labels: {
                    update: {
                        x: { scale: 'x', field: 'value' },
                    },
                },
            },
        },
        {
            orient: 'right',
            scale: 'y',
            grid: true,
            domain: false,
            values: [0, -0.5, -1, -1.5],
            tickSize: 0,
            encode: {
                grid: {
                    enter: {
                        stroke: { value: 'white' },
                        strokeOpacity: { value: 0.75 },
                    },
                },
                labels: {
                    enter: {
                        text: {
                            signal: "format(datum.value, '$.1f') + ' trillion'",
                        },
                    },
                },
            },
        },
    ],

    marks: [
        {
            type: 'group',
            from: {
                facet: {
                    name: 'facet',
                    data: 'budgets-current',
                    groupby: 'budgetYear',
                },
            },

            marks: [
                {
                    type: 'line',
                    from: { data: 'facet' },
                    encode: {
                        update: {
                            x: { scale: 'x', field: 'forecastYear' },
                            y: { scale: 'y', field: 'value' },
                            stroke: { value: 'steelblue' },
                            strokeWidth: { value: 1 },
                            strokeOpacity: { value: 0.25 },
                        },
                    },
                },
            ],
        },
        {
            type: 'line',
            from: { data: 'budgets-actual' },
            encode: {
                update: {
                    x: { scale: 'x', field: 'forecastYear' },
                    y: { scale: 'y', field: 'value' },
                    stroke: { value: 'steelblue' },
                    strokeWidth: { value: 3 },
                },
            },
        },

        {
            type: 'line',
            from: { data: 'tooltip-forecast' },
            encode: {
                update: {
                    x: { scale: 'x', field: 'forecastYear' },
                    y: { scale: 'y', field: 'value' },
                    stroke: { value: 'black' },
                    strokeWidth: { value: 1 },
                },
            },
        },
        {
            type: 'symbol',
            from: { data: 'tooltip' },
            encode: {
                update: {
                    x: { scale: 'x', field: 'argmin.forecastYear' },
                    y: { scale: 'y', field: 'argmin.value' },
                    size: { value: 50 },
                    fill: { value: 'black' },
                },
            },
        },

        {
            type: 'rule',
            encode: {
                enter: {
                    y: { scale: 'y', value: 0 },
                    stroke: { value: '#000' },
                    strokeWidth: { value: 1 },
                },
                update: {
                    x: { value: 0 },
                    x2: { scale: 'x', signal: 'currentYear' },
                },
            },
        },
        {
            name: 'handle',
            type: 'symbol',
            encode: {
                enter: {
                    y: { scale: 'y', value: 0, offset: 1 },
                    shape: { value: 'triangle-down' },
                    size: { value: 400 },
                    stroke: { value: '#000' },
                    strokeWidth: { value: 0.5 },
                },
                update: {
                    x: { scale: 'x', signal: 'currentYear' },
                    fill: { signal: "dragging ? 'lemonchiffon' : '#fff'" },
                },
                hover: {
                    fill: { value: 'lemonchiffon' },
                    cursor: { value: 'pointer' },
                },
            },
        },
        {
            type: 'text',
            encode: {
                enter: {
                    x: { value: 0 },
                    y: { value: 25 },
                    fontSize: { value: 32 },
                    fontWeight: { value: 'bold' },
                    fill: { value: 'steelblue' },
                },
                update: {
                    text: { signal: 'currentYear' },
                },
            },
        },

        {
            type: 'group',
            from: { data: 'tooltip' },
            interactive: false,
            encode: {
                update: {
                    x: { scale: 'x', field: 'argmin.forecastYear', offset: -5 },
                    y: { scale: 'y', field: 'argmin.value', offset: 20 },
                    width: { value: 150 },
                    height: { value: 35 },
                    fill: { value: '#fff' },
                    fillOpacity: { value: 0.85 },
                    stroke: { value: '#aaa' },
                    strokeWidth: { value: 0.5 },
                },
            },
            marks: [
                {
                    type: 'text',
                    interactive: false,
                    encode: {
                        update: {
                            x: { value: 6 },
                            y: { value: 14 },
                            text: {
                                signal:
                                    "'Forecast from early ' + parent.argmin.budgetYear",
                            },
                            fill: { value: 'black' },
                            fontWeight: { value: 'bold' },
                        },
                    },
                },
                {
                    type: 'text',
                    interactive: false,
                    encode: {
                        update: {
                            x: { value: 6 },
                            y: { value: 29 },
                            text: {
                                signal:
                                    "parent.argmin.forecastYear + ': ' + format(parent.argmin.abs, '$.3f') + ' trillion ' + parent.argmin.type",
                            },
                            fill: { value: 'black' },
                            align: { value: 'left' },
                        },
                    },
                },
            ],
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/wheat-and-wages
const wheatAndWages: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 900,
    height: 465,
    padding: 5,

    data: [
        {
            name: 'wheat',
            url: 'data/wheat.json',
        },
        {
            name: 'wheat-filtered',
            source: 'wheat',
            transform: [{ type: 'filter', expr: '!!datum.wages' }],
        },
        {
            name: 'monarchs',
            url: 'data/monarchs.json',
            transform: [
                {
                    type: 'formula',
                    expr:
                        '((!datum.commonwealth && datum.index % 2) ? -1: 1) * 2 + 95',
                    as: 'offset',
                },
            ],
        },
    ],

    scales: [
        {
            name: 'x',
            type: 'linear',
            range: 'width',
            domain: [1565, 1825],
            zero: false,
        },
        {
            name: 'y',
            type: 'linear',
            range: 'height',
            zero: true,
            domain: { data: 'wheat', field: 'wheat' },
        },
        {
            name: 'c',
            type: 'ordinal',
            range: ['black', 'white'],
            domain: { data: 'monarchs', field: 'commonwealth' },
        },
    ],

    axes: [
        {
            orient: 'bottom',
            scale: 'x',
            tickCount: 5,
            format: '04d',
        },
        {
            orient: 'right',
            scale: 'y',
            grid: true,
            domain: false,
            zindex: 1,
            tickCount: 5,
            offset: 5,
            tickSize: 0,
            encode: {
                grid: {
                    enter: {
                        stroke: { value: '#fff' },
                        strokeWidth: { value: 1 },
                        strokeOpacity: { value: 0.25 },
                    },
                },
                labels: {
                    enter: {
                        fontStyle: { value: 'italic' },
                    },
                },
            },
        },
    ],

    marks: [
        {
            type: 'rect',
            from: { data: 'wheat' },
            encode: {
                enter: {
                    x: { scale: 'x', field: 'year' },
                    width: { value: 17 },
                    y: { scale: 'y', field: 'wheat' },
                    y2: { scale: 'y', value: 0 },
                    fill: { value: '#aaa' },
                    stroke: { value: '#5d5d5d' },
                    strokeWidth: { value: 0.25 },
                },
            },
        },
        {
            type: 'area',
            from: { data: 'wheat-filtered' },
            encode: {
                enter: {
                    interpolate: { value: 'linear' },
                    x: { scale: 'x', field: 'year' },
                    y: { scale: 'y', field: 'wages' },
                    y2: { scale: 'y', value: 0 },
                    fill: { value: '#B3D9E6' },
                    fillOpacity: { value: 0.8 },
                },
            },
        },
        {
            type: 'line',
            from: { data: 'wheat-filtered' },
            encode: {
                enter: {
                    interpolate: { value: 'linear' },
                    x: { scale: 'x', field: 'year' },
                    y: { scale: 'y', field: 'wages' },
                    stroke: { value: '#ff7e79' },
                    strokeWidth: { value: 3 },
                },
            },
        },
        {
            type: 'line',
            from: { data: 'wheat-filtered' },
            encode: {
                enter: {
                    interpolate: { value: 'linear' },
                    x: { scale: 'x', field: 'year' },
                    y: { scale: 'y', field: 'wages' },
                    stroke: { value: '#000' },
                    strokeWidth: { value: 1 },
                },
            },
        },
        {
            name: 'monarch_rects',
            type: 'rect',
            from: { data: 'monarchs' },
            encode: {
                enter: {
                    x: { scale: 'x', field: 'start' },
                    x2: { scale: 'x', field: 'end' },
                    y: { scale: 'y', value: 95 },
                    y2: { scale: 'y', field: 'offset' },
                    fill: { scale: 'c', field: 'commonwealth' },
                    stroke: { value: '#000' },
                    strokeWidth: { value: 2 },
                },
            },
        },
        {
            type: 'text',
            from: { data: 'monarch_rects' },
            encode: {
                enter: {
                    x: { field: 'x' },
                    dx: { field: 'width', mult: 0.5 },
                    y: { field: 'y2', offset: 14 },
                    text: { field: 'datum.name' },
                    align: { value: 'center' },
                    fill: { value: 'black' },
                    font: { value: 'Helvetica Neue, Arial' },
                    fontSize: { value: 10 },
                    fontStyle: { value: 'italic' },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/falkensee-population
const falkenseePopulation: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 500,
    height: 250,
    padding: 5,
    config: {
        title: {
            fontSize: 16,
        },
    },

    title: {
        text: {
            signal:
                "'Population of Falkensee from ' + years[0] + ' to ' + years[1]",
        },
    },

    data: [
        {
            name: 'table',
            values: [
                { year: 1875, population: 1309 },
                { year: 1890, population: 1558 },
                { year: 1910, population: 4512 },
                { year: 1925, population: 8180 },
                { year: 1933, population: 15915 },
                { year: 1939, population: 24824 },
                { year: 1946, population: 28275 },
                { year: 1950, population: 29189 },
                { year: 1964, population: 29881 },
                { year: 1971, population: 26007 },
                { year: 1981, population: 24029 },
                { year: 1985, population: 23340 },
                { year: 1989, population: 22307 },
                { year: 1990, population: 22087 },
                { year: 1991, population: 22139 },
                { year: 1992, population: 22105 },
                { year: 1993, population: 22242 },
                { year: 1994, population: 22801 },
                { year: 1995, population: 24273 },
                { year: 1996, population: 25640 },
                { year: 1997, population: 27393 },
                { year: 1998, population: 29505 },
                { year: 1999, population: 32124 },
                { year: 2000, population: 33791 },
                { year: 2001, population: 35297 },
                { year: 2002, population: 36179 },
                { year: 2003, population: 36829 },
                { year: 2004, population: 37493 },
                { year: 2005, population: 38376 },
                { year: 2006, population: 39008 },
                { year: 2007, population: 39366 },
                { year: 2008, population: 39821 },
                { year: 2009, population: 40179 },
                { year: 2010, population: 40511 },
                { year: 2011, population: 40465 },
                { year: 2012, population: 40905 },
                { year: 2013, population: 41258 },
                { year: 2014, population: 41777 },
            ],
            transform: [
                {
                    type: 'extent',
                    field: 'year',
                    signal: 'years',
                },
            ],
        },
        {
            name: 'annotation',
            values: [
                {
                    start: 1933,
                    end: 1945,
                    text: 'Nazi Rule',
                },
                {
                    start: 1948,
                    end: 1989,
                    text: 'GDR (East Germany)',
                },
            ],
        },
    ],

    scales: [
        {
            name: 'x',
            type: 'linear',
            range: 'width',
            zero: false,
            domain: { data: 'table', field: 'year' },
        },
        {
            name: 'y',
            type: 'linear',
            range: 'height',
            nice: true,
            zero: true,
            domain: { data: 'table', field: 'population' },
        },
        {
            name: 'color',
            type: 'ordinal',
            domain: { data: 'annotation', field: 'text' },
            range: ['black', 'red'],
        },
    ],

    axes: [
        {
            orient: 'left',
            scale: 'y',
            title: 'Population',
            titlePadding: 10,
            grid: true,
        },
        {
            orient: 'bottom',
            scale: 'x',
            format: 'd',
            title: 'Year',
            tickCount: 15,
        },
    ],

    marks: [
        {
            type: 'rect',
            from: { data: 'annotation' },
            encode: {
                enter: {
                    x: { scale: 'x', field: 'start' },
                    x2: { scale: 'x', field: 'end' },
                    y: { value: 0 },
                    y2: { signal: 'height' },
                    fill: { scale: 'color', field: 'text' },
                    opacity: { value: 0.2 },
                },
            },
        },
        {
            type: 'line',
            from: { data: 'table' },
            encode: {
                enter: {
                    interpolate: { value: 'monotone' },
                    x: { scale: 'x', field: 'year' },
                    y: { scale: 'y', field: 'population' },
                    stroke: { value: 'steelblue' },
                    strokeWidth: { value: 3 },
                },
            },
        },
        {
            type: 'symbol',
            from: { data: 'table' },
            encode: {
                enter: {
                    x: { scale: 'x', field: 'year' },
                    y: { scale: 'y', field: 'population' },
                    stroke: { value: 'steelblue' },
                    strokeWidth: { value: 1.5 },
                    fill: { value: 'white' },
                    size: { value: 30 },
                },
            },
        },
    ],

    legends: [
        {
            fill: 'color',
            title: 'Period',
            orient: 'top-left',
            offset: 8,
            encode: {
                symbols: {
                    update: {
                        strokeWidth: { value: 0 },
                        shape: { value: 'square' },
                        opacity: { value: 0.3 },
                    },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/annual-temperature
const annualTemperature: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 800,
    padding: 5,

    config: {
        title: { fontSize: 14 },
    },

    title: {
        text: 'Seattle Annual Temperatures',
        anchor: 'start',
        offset: 4,
    },

    signals: [
        { name: 'rangeStep', value: 25 },
        { name: 'height', update: 'rangeStep * 24' },
    ],

    data: [
        {
            name: 'temperature',
            url: 'data/seattle-temps.csv',
            format: { type: 'csv', parse: { temp: 'number', date: 'date' } },
            transform: [
                { type: 'formula', as: 'hour', expr: 'hours(datum.date)' },
                {
                    type: 'formula',
                    as: 'date',
                    expr:
                        'datetime(year(datum.date), month(datum.date), date(datum.date))',
                },
            ],
        },
    ],

    scales: [
        {
            name: 'row',
            type: 'band',
            domain: [
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                0,
                1,
                2,
                3,
                4,
                5,
            ],
            range: { step: { signal: 'rangeStep' } },
        },
        {
            name: 'x',
            type: 'time',
            domain: { data: 'temperature', field: 'date' },
            range: 'width',
        },
        {
            name: 'y',
            type: 'linear',
            zero: false,
            domain: { data: 'temperature', field: 'temp' },
            range: [{ signal: 'rangeStep' }, 1],
        },
    ],

    axes: [
        {
            orient: 'bottom',
            scale: 'x',
            domain: false,
            title: 'Month',
            format: '%b',
        },
        {
            orient: 'left',
            scale: 'row',
            domain: false,
            title: 'Hour',
            tickSize: 0,
            encode: {
                labels: {
                    update: {
                        text: {
                            signal:
                                "datum.value === 0 ? 'Midnight' : datum.value === 12 ? 'Noon' : datum.value < 12 ? datum.value + ':00 am' : (datum.value - 12) + ':00 pm'",
                        },
                    },
                },
            },
        },
    ],

    marks: [
        {
            type: 'group',
            from: {
                facet: {
                    name: 'hour',
                    data: 'temperature',
                    groupby: 'hour',
                },
            },
            encode: {
                enter: {
                    x: { value: 0 },
                    y: { scale: 'row', field: 'hour' },
                    width: { signal: 'width' },
                    height: { signal: 'rangeStep' },
                },
            },
            marks: [
                {
                    type: 'area',
                    from: { data: 'hour' },
                    encode: {
                        enter: {
                            x: { scale: 'x', field: 'date' },
                            y: { scale: 'y', field: 'temp' },
                            y2: { signal: 'rangeStep' },
                        },
                    },
                },
            ],
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/weekly-temperature
const weeklyTemperature: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 250,
    height: 200,

    data: [
        {
            name: 'weather',
            url: 'data/weather.json',
        },
        {
            name: 'actual',
            source: 'weather',
            transform: [{ type: 'filter', expr: 'datum.actual' }],
        },
        {
            name: 'forecast',
            source: 'weather',
            transform: [{ type: 'filter', expr: 'datum.forecast' }],
        },
    ],

    scales: [
        {
            name: 'x',
            type: 'band',
            range: 'width',
            padding: 0.1,
            round: true,
            domain: { data: 'weather', field: 'id' },
        },
        {
            name: 'y',
            type: 'linear',
            range: 'height',
            nice: true,
            zero: false,
            round: true,
            domain: {
                data: 'weather',
                fields: ['record.low', 'record.high'],
            },
        },
    ],

    axes: [
        {
            orient: 'right',
            scale: 'y',
            tickCount: 3,
            tickSize: 0,
            labelPadding: 0,
            grid: true,
            domain: false,
            zindex: 1,
            encode: {
                grid: { enter: { stroke: { value: 'white' } } },
            },
        },
    ],

    marks: [
        {
            type: 'text',
            from: { data: 'weather' },
            encode: {
                enter: {
                    x: { scale: 'x', field: 'id' },
                    dx: { scale: 'x', band: 0.5 },
                    y: { value: 0 },
                    fill: { value: '#000' },
                    text: { field: 'day' },
                    align: { value: 'center' },
                    baseline: { value: 'bottom' },
                },
            },
        },
        {
            type: 'rect',
            from: { data: 'weather' },
            encode: {
                enter: {
                    x: { scale: 'x', field: 'id' },
                    width: { scale: 'x', band: 1, offset: -1 },
                    y: { scale: 'y', field: 'record.low' },
                    y2: { scale: 'y', field: 'record.high' },
                    fill: { value: '#ccc' },
                },
            },
        },
        {
            type: 'rect',
            from: { data: 'weather' },
            encode: {
                enter: {
                    x: { scale: 'x', field: 'id' },
                    width: { scale: 'x', band: 1, offset: -1 },
                    y: { scale: 'y', field: 'normal.low' },
                    y2: { scale: 'y', field: 'normal.high' },
                    fill: { value: '#999' },
                },
            },
        },
        {
            type: 'rect',
            from: { data: 'actual' },
            encode: {
                enter: {
                    x: { scale: 'x', field: 'id', offset: 4 },
                    width: { scale: 'x', band: 1, offset: -8 },
                    y: { scale: 'y', field: 'actual.low' },
                    y2: { scale: 'y', field: 'actual.high' },
                    fill: { value: '#000' },
                },
            },
        },
        {
            type: 'rect',
            from: { data: 'forecast' },
            encode: {
                enter: {
                    x: { scale: 'x', field: 'id', offset: 9 },
                    width: { scale: 'x', band: 1, offset: -18 },
                    y: { scale: 'y', field: 'forecast.low.low' },
                    y2: { scale: 'y', field: 'forecast.high.high' },
                    fill: { value: '#000' },
                },
            },
        },
        {
            type: 'rect',
            from: { data: 'forecast' },
            encode: {
                enter: {
                    x: { scale: 'x', field: 'id', offset: 4 },
                    width: { scale: 'x', band: 1, offset: -8 },
                    y: { scale: 'y', field: 'forecast.low.low' },
                    y2: { scale: 'y', field: 'forecast.low.high' },
                    fill: { value: '#000' },
                },
            },
        },
        {
            type: 'rect',
            from: { data: 'forecast' },
            encode: {
                enter: {
                    x: { scale: 'x', field: 'id', offset: 4 },
                    width: { scale: 'x', band: 1, offset: -8 },
                    y: { scale: 'y', field: 'forecast.high.low' },
                    y2: { scale: 'y', field: 'forecast.high.high' },
                    fill: { value: '#000' },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/u-district-cuisine
const uDistrictCuisine: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 500,
    height: 380,
    padding: 5,
    autosize: 'pad',

    config: {
        text: {
            font: 'Ideal Sans, Avenir Next, Helvetica',
        },
        title: {
            font: 'Ideal Sans, Avenir Next, Helvetica',
            fontWeight: 500,
            fontSize: 17,
            limit: -1,
        },
        axis: {
            labelFont: 'Ideal Sans, Avenir Next, Helvetica',
            labelFontSize: 12,
        },
    },

    signals: [
        { name: 'size', value: 2.3 },
        { name: 'domainMax', value: 5000 },
        { name: 'bandwidth', value: 0.0005 },
        {
            name: 'offsets',
            value: {
                bubbletea: -1,
                chinese: -1.5,
                japanese: -2,
                korean: -3,
                mideastern: -2,
                indian: -1,
                breakfast: -3.5,
                latin: 31,
            },
        },
        {
            name: 'categories',
            value: [
                'coffee',
                'drinks',
                'bubbletea',
                'vietnamese',
                'thai',
                'chinese',
                'japanese',
                'korean',
                'mideastern',
                'indian',
                'burgers',
                'pizza',
                'american',
                'breakfast',
                'bakeries',
                'seafood',
                'hawaiian',
                'veg',
                'latin',
            ],
        },
        {
            name: 'names',
            value: [
                'Coffee',
                'Pubs, Lounges',
                'Bubble Tea, Juice',
                'Vietnamese',
                'Thai',
                'Chinese',
                'Japanese',
                'Korean',
                'Middle Eastern',
                'Indian, Pakistani',
                'Pizza',
                'Burgers',
                'American',
                'Breakfast, Brunch',
                'Bakeries',
                'Seafood',
                'Hawaiian',
                'Vegetarian, Vegan',
                'Mexican, Latin American',
            ],
        },
        {
            name: 'colors',
            value: [
                '#7f7f7f',
                '#7f7f7f',
                '#7f7f7f',
                '#1f77b4',
                '#1f77b4',
                '#1f77b4',
                '#1f77b4',
                '#1f77b4',
                '#2ca02c',
                '#2ca02c',
                '#ff7f0e',
                '#ff7f0e',
                '#ff7f0e',
                '#8c564b',
                '#8c564b',
                '#e377c2',
                '#e377c2',
                '#bcbd22',
                '#17becf',
            ],
        },
    ],

    data: [
        {
            name: 'source',
            url: 'data/udistrict.json',
        },
        {
            name: 'annotation',
            values: [
                { name: 'Boat St.', align: 'left', lat: 47.6516 },
                { name: '40th St.', align: 'center', lat: 47.655363 },
                { name: '42nd St.', align: 'center', lat: 47.6584 },
                { name: '45th St.', align: 'center', lat: 47.6614 },
                { name: '50th St.', align: 'center', lat: 47.664924 },
                { name: '55th St.', align: 'center', lat: 47.668519 },
            ],
        },
    ],

    title: {
        text: 'A Mile-Long Global Food Market: Mapping Cuisine from “The Ave”',
        orient: 'top',
        anchor: 'start',
        offset: 48,
        encode: {
            update: {
                dx: { value: -1 },
            },
        },
    },

    scales: [
        {
            name: 'xscale',
            type: 'linear',
            range: 'width',
            zero: false,
            domain: { data: 'source', field: 'lat' },
        },
        {
            name: 'yscale',
            type: 'band',
            range: 'height',
            round: true,
            padding: 0,
            domain: { signal: 'categories' },
        },
        {
            name: 'color',
            type: 'ordinal',
            range: { signal: 'colors' },
            domain: { signal: 'categories' },
        },
        {
            name: 'names',
            type: 'ordinal',
            domain: { signal: 'categories' },
            range: { signal: 'names' },
        },
    ],

    axes: [
        {
            orient: 'right',
            scale: 'yscale',
            domain: false,
            ticks: false,
            encode: {
                labels: {
                    update: {
                        dx: { value: 2 },
                        dy: { value: 2 },
                        y: { scale: 'yscale', field: 'value', band: 1 },
                        text: { scale: 'names', field: 'value' },
                        baseline: { value: 'bottom' },
                    },
                },
            },
        },
    ],

    marks: [
        {
            type: 'rule',
            from: { data: 'annotation' },
            encode: {
                update: {
                    x: { signal: "round(scale('xscale', datum.lat)) + 0.5" },
                    y: { value: 20 },
                    x2: { signal: "round(scale('xscale', datum.lat)) + 0.5" },
                    y2: { signal: 'height', offset: 6 },
                    stroke: { value: '#ddd' },
                    strokeDash: { value: [3, 2] },
                },
            },
        },
        {
            type: 'text',
            from: { data: 'annotation' },
            encode: {
                update: {
                    x: { scale: 'xscale', field: 'lat', offset: 0 },
                    dx: { signal: "datum.align === 'left' ? -1 : 0" },
                    y: { signal: 'height', offset: 6 },
                    align: { field: 'align' },
                    baseline: { value: 'top' },
                    text: { field: 'name' },
                    fontStyle: { value: 'italic' },
                },
            },
        },
        {
            type: 'group',
            from: {
                facet: {
                    data: 'source',
                    name: 'category',
                    groupby: 'key',
                    aggregate: {
                        ops: ['min', 'max', 'count'],
                        fields: ['lat', 'lat', 'lat'],
                        as: ['min_lat', 'max_lat', 'count'],
                    },
                },
            },
            encode: {
                update: {
                    y: { scale: 'yscale', field: 'key' },
                    width: { signal: 'width' },
                    height: { scale: 'yscale', band: 1 },
                },
            },
            sort: {
                field: 'y',
                order: 'ascending',
            },
            signals: [{ name: 'height', update: "bandwidth('yscale')" }],
            data: [
                {
                    name: 'density',
                    source: 'category',
                    transform: [
                        {
                            type: 'density',
                            steps: 200,
                            extent: { signal: "domain('xscale')" },
                            distribution: {
                                function: 'kde',
                                field: 'lat',
                                bandwidth: { signal: 'bandwidth' },
                            },
                        },
                    ],
                },
            ],
            scales: [
                {
                    name: 'yinner',
                    type: 'linear',
                    range: [
                        { signal: 'height' },
                        { signal: '0 - size * height' },
                    ],
                    domain: [0, { signal: 'domainMax' }],
                },
            ],
            marks: [
                {
                    type: 'area',
                    from: { data: 'density' },
                    encode: {
                        enter: {
                            fill: { scale: 'color', field: { parent: 'key' } },
                            fillOpacity: { value: 0.7 },
                            stroke: { value: 'white' },
                            strokeWidth: { value: 1 },
                        },
                        update: {
                            x: { scale: 'xscale', field: 'value' },
                            y: {
                                scale: 'yinner',
                                signal: 'parent.count * datum.density',
                            },
                            y2: { scale: 'yinner', value: 0 },
                        },
                    },
                },
                {
                    type: 'rule',
                    clip: true,
                    encode: {
                        update: {
                            y: { signal: 'height', offset: -0.5 },
                            x: {
                                scale: 'xscale',
                                field: { parent: 'min_lat' },
                                offset: {
                                    signal:
                                        "scale('xscale', 0) - scale('xscale', 2*bandwidth) + (offsets[parent.key] || 1) - 3",
                                },
                            },
                            x2: { signal: 'width' },
                            stroke: { value: '#aaa' },
                            strokeWidth: { value: 0.25 },
                            strokeOpacity: { value: 1 },
                        },
                    },
                },
                {
                    type: 'symbol',
                    from: { data: 'category' },
                    encode: {
                        enter: {
                            fillOpacity: { value: 0 },
                            size: { value: 50 },
                            tooltip: { field: 'name' },
                        },
                        update: {
                            x: { scale: 'xscale', field: 'lat' },
                            y: { scale: 'yscale', band: 0.5 },
                            fill: { scale: 'color', field: 'key' },
                        },
                    },
                },
            ],
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/crossfilter-flights
const crossfilterFlights: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 500,
    padding: 5,

    signals: [
        { name: 'chartHeight', value: 100 },
        { name: 'chartPadding', value: 50 },
        { name: 'height', update: '(chartHeight + chartPadding) * 3' },
        { name: 'delayExtent', value: [-60, 180] },
        { name: 'timeExtent', value: [0, 24] },
        { name: 'distExtent', value: [0, 2400] },
        {
            name: 'delayStep',
            value: 10,
            bind: { input: 'range', min: 2, max: 20, step: 1 },
        },
        {
            name: 'timeStep',
            value: 1,
            bind: { input: 'range', min: 0.25, max: 2, step: 0.25 },
        },
        {
            name: 'distStep',
            value: 100,
            bind: { input: 'range', min: 50, max: 200, step: 50 },
        },
        {
            name: 'delayRange',
            update: 'delayExtent',
            on: [
                {
                    events: { signal: 'delayZoom' },
                    update:
                        '[(delayRange[0]+delayRange[1])/2 - delayZoom, (delayRange[0]+delayRange[1])/2 + delayZoom]',
                },
                {
                    events: '@delay:dblclick!, @delayBrush:dblclick!',
                    update: '[delayExtent[0], delayExtent[1]]',
                },
                {
                    events:
                        '[@delayBrush:mousedown, window:mouseup] > window:mousemove!',
                    update:
                        "[delayRange[0] + invert('delayScale', x()) - invert('delayScale', xmove), delayRange[1] + invert('delayScale', x()) - invert('delayScale', xmove)]",
                },
                {
                    events:
                        '[@delay:mousedown, window:mouseup] > window:mousemove!',
                    update:
                        "[min(delayAnchor, invert('delayScale', x())), max(delayAnchor, invert('delayScale', x()))]",
                },
            ],
        },
        {
            name: 'delayZoom',
            value: 0,
            on: [
                {
                    events: '@delay:wheel!, @delayBrush:wheel!',
                    update:
                        '0.5 * abs(span(delayRange)) * pow(1.0005, event.deltaY * pow(16, event.deltaMode))',
                },
            ],
        },
        {
            name: 'delayAnchor',
            value: 0,
            on: [
                {
                    events: '@delay:mousedown!',
                    update: "invert('delayScale', x())",
                },
            ],
        },
        {
            name: 'timeRange',
            update: 'timeExtent',
            on: [
                {
                    events: { signal: 'timeZoom' },
                    update:
                        '[(timeRange[0]+timeRange[1])/2 - timeZoom, (timeRange[0]+timeRange[1])/2 + timeZoom]',
                },
                {
                    events: '@time:dblclick!, @timeBrush:dblclick!',
                    update: '[timeExtent[0], timeExtent[1]]',
                },
                {
                    events:
                        '[@timeBrush:mousedown, window:mouseup] > window:mousemove!',
                    update:
                        "[timeRange[0] + invert('timeScale', x()) - invert('timeScale', xmove), timeRange[1] + invert('timeScale', x()) - invert('timeScale', xmove)]",
                },
                {
                    events:
                        '[@time:mousedown, window:mouseup] > window:mousemove!',
                    update:
                        "[min(timeAnchor, invert('timeScale', x())), max(timeAnchor, invert('timeScale', x()))]",
                },
            ],
        },
        {
            name: 'timeZoom',
            value: 0,
            on: [
                {
                    events: '@time:wheel!, @timeBrush:wheel!',
                    update:
                        '0.5 * abs(span(timeRange)) * pow(1.0005, event.deltaY * pow(16, event.deltaMode))',
                },
            ],
        },
        {
            name: 'timeAnchor',
            value: 0,
            on: [
                {
                    events: '@time:mousedown!',
                    update: "invert('timeScale', x())",
                },
            ],
        },
        {
            name: 'distRange',
            update: 'distExtent',
            on: [
                {
                    events: { signal: 'distZoom' },
                    update:
                        '[(distRange[0]+distRange[1])/2 - distZoom, (distRange[0]+distRange[1])/2 + distZoom]',
                },
                {
                    events: '@dist:dblclick!, @distBrush:dblclick!',
                    update: '[distExtent[0], distExtent[1]]',
                },
                {
                    events:
                        '[@distBrush:mousedown, window:mouseup] > window:mousemove!',
                    update:
                        "[distRange[0] + invert('distScale', x()) - invert('distScale', xmove), distRange[1] + invert('distScale', x()) - invert('distScale', xmove)]",
                },
                {
                    events:
                        '[@dist:mousedown, window:mouseup] > window:mousemove!',
                    update:
                        "[min(distAnchor, invert('distScale', x())), max(distAnchor, invert('distScale', x()))]",
                },
            ],
        },
        {
            name: 'distZoom',
            value: 0,
            on: [
                {
                    events: '@dist:wheel!, @distBrush:wheel!',
                    update:
                        '0.5 * abs(span(distRange)) * pow(1.0005, event.deltaY * pow(16, event.deltaMode))',
                },
            ],
        },
        {
            name: 'distAnchor',
            value: 0,
            on: [
                {
                    events: '@dist:mousedown!',
                    update: "invert('distScale', x())",
                },
            ],
        },
        {
            name: 'xmove',
            value: 0,
            on: [{ events: 'window:mousemove', update: 'x()' }],
        },
    ],

    data: [
        {
            name: 'flights',
            url: 'data/flights-200k.json',
            transform: [
                {
                    type: 'bin',
                    field: 'delay',
                    extent: { signal: 'delayExtent' },
                    step: { signal: 'delayStep' },
                    as: ['delay0', 'delay1'],
                },
                {
                    type: 'bin',
                    field: 'time',
                    extent: { signal: 'timeExtent' },
                    step: { signal: 'timeStep' },
                    as: ['time0', 'time1'],
                },
                {
                    type: 'bin',
                    field: 'distance',
                    extent: { signal: 'distExtent' },
                    step: { signal: 'distStep' },
                    as: ['dist0', 'dist1'],
                },
                {
                    type: 'crossfilter',
                    signal: 'xfilter',
                    fields: ['delay', 'time', 'distance'],
                    query: [
                        { signal: 'delayRange' },
                        { signal: 'timeRange' },
                        { signal: 'distRange' },
                    ],
                },
            ],
        },
    ],

    scales: [
        {
            name: 'layout',
            type: 'band',
            domain: ['delay', 'time', 'distance'],
            range: 'height',
        },
        {
            name: 'delayScale',
            type: 'linear',
            round: true,
            domain: { signal: 'delayExtent' },
            range: 'width',
        },
        {
            name: 'timeScale',
            type: 'linear',
            round: true,
            domain: { signal: 'timeExtent' },
            range: 'width',
        },
        {
            name: 'distScale',
            type: 'linear',
            round: true,
            domain: { signal: 'distExtent' },
            range: 'width',
        },
    ],

    marks: [
        {
            description: 'Delay Histogram',
            name: 'delay',
            type: 'group',
            encode: {
                enter: {
                    y: { scale: 'layout', value: 'delay', offset: 20 },
                    width: { signal: 'width' },
                    height: { signal: 'chartHeight' },
                    fill: { value: 'transparent' },
                },
            },

            data: [
                {
                    name: 'delay-bins',
                    source: 'flights',
                    transform: [
                        {
                            type: 'resolvefilter',
                            ignore: 1,
                            filter: { signal: 'xfilter' },
                        },
                        {
                            type: 'aggregate',
                            groupby: ['delay0', 'delay1'],
                            key: 'delay0',
                            drop: false,
                        },
                    ],
                },
            ],

            scales: [
                {
                    name: 'yscale',
                    type: 'linear',
                    domain: { data: 'delay-bins', field: 'count' },
                    range: [{ signal: 'chartHeight' }, 0],
                },
            ],

            axes: [{ orient: 'bottom', scale: 'delayScale' }],

            marks: [
                {
                    type: 'rect',
                    name: 'delayBrush',
                    encode: {
                        enter: {
                            y: { value: 0 },
                            height: { signal: 'chartHeight' },
                            fill: { value: '#fcfcfc' },
                        },
                        update: {
                            x: { signal: "scale('delayScale', delayRange[0])" },
                            x2: {
                                signal: "scale('delayScale', delayRange[1])",
                            },
                        },
                    },
                },
                {
                    type: 'rect',
                    interactive: false,
                    from: { data: 'delay-bins' },
                    encode: {
                        enter: {
                            fill: { value: 'steelblue' },
                        },
                        update: {
                            x: { scale: 'delayScale', field: 'delay0' },
                            x2: {
                                scale: 'delayScale',
                                field: 'delay1',
                                offset: -1,
                            },
                            y: { scale: 'yscale', field: 'count' },
                            y2: { scale: 'yscale', value: 0 },
                        },
                    },
                },
                {
                    type: 'rect',
                    interactive: false,
                    encode: {
                        enter: {
                            y: { value: 0 },
                            height: { signal: 'chartHeight' },
                            fill: { value: 'firebrick' },
                        },
                        update: {
                            x: { signal: "scale('delayScale', delayRange[0])" },
                            width: { value: 1 },
                        },
                    },
                },
                {
                    type: 'rect',
                    interactive: false,
                    encode: {
                        enter: {
                            y: { value: 0 },
                            height: { signal: 'chartHeight' },
                            fill: { value: 'firebrick' },
                        },
                        update: {
                            x: { signal: "scale('delayScale', delayRange[1])" },
                            width: { value: 1 },
                        },
                    },
                },
                {
                    type: 'text',
                    interactive: false,
                    encode: {
                        enter: {
                            y: { value: -5 },
                            text: { value: 'Arrival Delay (min)' },
                            baseline: { value: 'bottom' },
                            fontSize: { value: 14 },
                            fontWeight: { value: '500' },
                            fill: { value: 'black' },
                        },
                    },
                },
            ],
        },

        {
            description: 'Time Histogram',
            name: 'time',
            type: 'group',
            encode: {
                enter: {
                    y: { scale: 'layout', value: 'time', offset: 20 },
                    width: { signal: 'width' },
                    height: { signal: 'chartHeight' },
                    fill: { value: 'transparent' },
                },
            },

            data: [
                {
                    name: 'time-bins',
                    source: 'flights',
                    transform: [
                        {
                            type: 'resolvefilter',
                            ignore: 2,
                            filter: { signal: 'xfilter' },
                        },
                        {
                            type: 'aggregate',
                            groupby: ['time0', 'time1'],
                            key: 'time0',
                            drop: false,
                        },
                    ],
                },
            ],

            scales: [
                {
                    name: 'yscale',
                    type: 'linear',
                    domain: { data: 'time-bins', field: 'count' },
                    range: [{ signal: 'chartHeight' }, 0],
                },
            ],

            axes: [{ orient: 'bottom', scale: 'timeScale' }],

            marks: [
                {
                    type: 'rect',
                    name: 'timeBrush',
                    encode: {
                        enter: {
                            y: { value: 0 },
                            height: { signal: 'chartHeight' },
                            fill: { value: '#fcfcfc' },
                        },
                        update: {
                            x: { signal: "scale('timeScale', timeRange[0])" },
                            x2: { signal: "scale('timeScale', timeRange[1])" },
                        },
                    },
                },
                {
                    type: 'rect',
                    from: { data: 'time-bins' },
                    interactive: false,
                    encode: {
                        enter: {
                            fill: { value: 'steelblue' },
                        },
                        update: {
                            x: { scale: 'timeScale', field: 'time0' },
                            x2: {
                                scale: 'timeScale',
                                field: 'time1',
                                offset: -1,
                            },
                            y: { scale: 'yscale', field: 'count' },
                            y2: { scale: 'yscale', value: 0 },
                        },
                    },
                },
                {
                    type: 'rect',
                    interactive: false,
                    encode: {
                        enter: {
                            y: { value: 0 },
                            height: { signal: 'chartHeight' },
                            fill: { value: 'firebrick' },
                        },
                        update: {
                            x: { signal: "scale('timeScale', timeRange[0])" },
                            width: { value: 1 },
                        },
                    },
                },
                {
                    type: 'rect',
                    interactive: false,
                    encode: {
                        enter: {
                            y: { value: 0 },
                            height: { signal: 'chartHeight' },
                            fill: { value: 'firebrick' },
                        },
                        update: {
                            x: { signal: "scale('timeScale', timeRange[1])" },
                            width: { value: 1 },
                        },
                    },
                },
                {
                    type: 'text',
                    interactive: false,
                    encode: {
                        enter: {
                            y: { value: -5 },
                            text: { value: 'Local Departure Time (hour)' },
                            baseline: { value: 'bottom' },
                            fontSize: { value: 14 },
                            fontWeight: { value: '500' },
                            fill: { value: 'black' },
                        },
                    },
                },
            ],
        },

        {
            description: 'Distance Histogram',
            name: 'dist',
            type: 'group',
            encode: {
                enter: {
                    y: { scale: 'layout', value: 'distance', offset: 20 },
                    width: { signal: 'width' },
                    height: { signal: 'chartHeight' },
                    fill: { value: 'transparent' },
                },
            },

            data: [
                {
                    name: 'dist-bins',
                    source: 'flights',
                    transform: [
                        {
                            type: 'resolvefilter',
                            ignore: 4,
                            filter: { signal: 'xfilter' },
                        },
                        {
                            type: 'aggregate',
                            groupby: ['dist0', 'dist1'],
                            key: 'dist0',
                            drop: false,
                        },
                    ],
                },
            ],

            scales: [
                {
                    name: 'yscale',
                    type: 'linear',
                    domain: { data: 'dist-bins', field: 'count' },
                    range: [{ signal: 'chartHeight' }, 0],
                },
            ],

            axes: [{ orient: 'bottom', scale: 'distScale' }],

            marks: [
                {
                    type: 'rect',
                    name: 'distBrush',
                    encode: {
                        enter: {
                            y: { value: 0 },
                            height: { signal: 'chartHeight' },
                            fill: { value: '#fcfcfc' },
                        },
                        update: {
                            x: { signal: "scale('distScale', distRange[0])" },
                            x2: { signal: "scale('distScale', distRange[1])" },
                        },
                    },
                },
                {
                    type: 'rect',
                    interactive: false,
                    from: { data: 'dist-bins' },
                    encode: {
                        enter: {
                            fill: { value: 'steelblue' },
                        },
                        update: {
                            x: { scale: 'distScale', field: 'dist0' },
                            x2: {
                                scale: 'distScale',
                                field: 'dist1',
                                offset: -1,
                            },
                            y: { scale: 'yscale', field: 'count' },
                            y2: { scale: 'yscale', value: 0 },
                        },
                    },
                },
                {
                    type: 'rect',
                    interactive: false,
                    encode: {
                        enter: {
                            y: { value: 0 },
                            height: { signal: 'chartHeight' },
                            fill: { value: 'firebrick' },
                        },
                        update: {
                            x: { signal: "scale('distScale', distRange[0])" },
                            width: { value: 1 },
                        },
                    },
                },
                {
                    type: 'rect',
                    interactive: false,
                    encode: {
                        enter: {
                            y: { value: 0 },
                            height: { signal: 'chartHeight' },
                            fill: { value: 'firebrick' },
                        },
                        update: {
                            x: { signal: "scale('distScale', distRange[1])" },
                            width: { value: 1 },
                        },
                    },
                },
                {
                    type: 'text',
                    interactive: false,
                    encode: {
                        enter: {
                            y: { value: -5 },
                            text: { value: 'Travel Distance (miles)' },
                            baseline: { value: 'bottom' },
                            fontSize: { value: 14 },
                            fontWeight: { value: '500' },
                            fill: { value: 'black' },
                        },
                    },
                },
            ],
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/overview-plus-detail
const overviewPlusDetail: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 720,
    height: 480,
    padding: 5,

    data: [
        {
            name: 'sp500',
            url: 'data/sp500.csv',
            format: { type: 'csv', parse: { price: 'number', date: 'date' } },
        },
    ],

    signals: [
        {
            name: 'detailDomain',
        },
    ],

    marks: [
        {
            type: 'group',
            name: 'detail',
            encode: {
                enter: {
                    height: { value: 390 },
                    width: { value: 720 },
                },
            },
            scales: [
                {
                    name: 'xDetail',
                    type: 'time',
                    range: 'width',
                    domain: { data: 'sp500', field: 'date' },
                    domainRaw: { signal: 'detailDomain' },
                },
                {
                    name: 'yDetail',
                    type: 'linear',
                    range: [390, 0],
                    domain: { data: 'sp500', field: 'price' },
                    nice: true,
                    zero: true,
                },
            ],
            axes: [
                { orient: 'bottom', scale: 'xDetail' },
                { orient: 'left', scale: 'yDetail' },
            ],
            marks: [
                {
                    type: 'group',
                    encode: {
                        enter: {
                            height: { field: { group: 'height' } },
                            width: { field: { group: 'width' } },
                            clip: { value: true },
                        },
                    },
                    marks: [
                        {
                            type: 'area',
                            from: { data: 'sp500' },
                            encode: {
                                update: {
                                    x: { scale: 'xDetail', field: 'date' },
                                    y: { scale: 'yDetail', field: 'price' },
                                    y2: { scale: 'yDetail', value: 0 },
                                    fill: { value: 'steelblue' },
                                },
                            },
                        },
                    ],
                },
            ],
        },

        {
            type: 'group',
            name: 'overview',
            encode: {
                enter: {
                    x: { value: 0 },
                    y: { value: 430 },
                    height: { value: 70 },
                    width: { value: 720 },
                    fill: { value: 'transparent' },
                },
            },
            signals: [
                {
                    name: 'brush',
                    value: 0,
                    on: [
                        {
                            events: '@overview:mousedown',
                            update: '[x(), x()]',
                        },
                        {
                            events:
                                '[@overview:mousedown, window:mouseup] > window:mousemove!',
                            update: '[brush[0], clamp(x(), 0, width)]',
                        },
                        {
                            events: { signal: 'delta' },
                            update:
                                'clampRange([anchor[0] + delta, anchor[1] + delta], 0, width)',
                        },
                    ],
                },
                {
                    name: 'anchor',
                    value: null,
                    on: [
                        { events: '@brush:mousedown', update: 'slice(brush)' },
                    ],
                },
                {
                    name: 'xdown',
                    value: 0,
                    on: [{ events: '@brush:mousedown', update: 'x()' }],
                },
                {
                    name: 'delta',
                    value: 0,
                    on: [
                        {
                            events:
                                '[@brush:mousedown, window:mouseup] > window:mousemove!',
                            update: 'x() - xdown',
                        },
                    ],
                },
                {
                    name: 'detailDomain',
                    push: 'outer',
                    on: [
                        {
                            events: { signal: 'brush' },
                            update:
                                "span(brush) ? invert('xOverview', brush) : null",
                        },
                    ],
                },
            ],
            scales: [
                {
                    name: 'xOverview',
                    type: 'time',
                    range: 'width',
                    domain: { data: 'sp500', field: 'date' },
                },
                {
                    name: 'yOverview',
                    type: 'linear',
                    range: [70, 0],
                    domain: { data: 'sp500', field: 'price' },
                    nice: true,
                    zero: true,
                },
            ],
            axes: [{ orient: 'bottom', scale: 'xOverview' }],
            marks: [
                {
                    type: 'area',
                    interactive: false,
                    from: { data: 'sp500' },
                    encode: {
                        update: {
                            x: { scale: 'xOverview', field: 'date' },
                            y: { scale: 'yOverview', field: 'price' },
                            y2: { scale: 'yOverview', value: 0 },
                            fill: { value: 'steelblue' },
                        },
                    },
                },
                {
                    type: 'rect',
                    name: 'brush',
                    encode: {
                        enter: {
                            y: { value: 0 },
                            height: { value: 70 },
                            fill: { value: '#333' },
                            fillOpacity: { value: 0.2 },
                        },
                        update: {
                            x: { signal: 'brush[0]' },
                            x2: { signal: 'brush[1]' },
                        },
                    },
                },
                {
                    type: 'rect',
                    interactive: false,
                    encode: {
                        enter: {
                            y: { value: 0 },
                            height: { value: 70 },
                            width: { value: 1 },
                            fill: { value: 'firebrick' },
                        },
                        update: {
                            x: { signal: 'brush[0]' },
                        },
                    },
                },
                {
                    type: 'rect',
                    interactive: false,
                    encode: {
                        enter: {
                            y: { value: 0 },
                            height: { value: 70 },
                            width: { value: 1 },
                            fill: { value: 'firebrick' },
                        },
                        update: {
                            x: { signal: 'brush[1]' },
                        },
                    },
                },
            ],
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/brushing-scatter-plots
const brushingScatterPlots: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    padding: 10,
    config: {
        axis: {
            tickColor: '#ccc',
        },
    },

    signals: [
        { name: 'chartSize', value: 120 },
        { name: 'chartPad', value: 15 },
        { name: 'chartStep', update: 'chartSize + chartPad' },
        { name: 'width', update: 'chartStep * 4' },
        { name: 'height', update: 'chartStep * 4' },
        {
            name: 'cell',
            value: null,
            on: [
                {
                    events: '@cell:mousedown',
                    update: 'group()',
                },
                {
                    events: '@cell:mouseup',
                    update: '!span(brushX) && !span(brushY) ? null : cell',
                },
            ],
        },
        {
            name: 'brushX',
            value: 0,
            on: [
                {
                    events: '@cell:mousedown',
                    update: '[x(cell), x(cell)]',
                },
                {
                    events:
                        '[@cell:mousedown, window:mouseup] > window:mousemove',
                    update: '[brushX[0], clamp(x(cell), 0, chartSize)]',
                },
                {
                    events: { signal: 'delta' },
                    update:
                        'clampRange([anchorX[0] + delta[0], anchorX[1] + delta[0]], 0, chartSize)',
                },
            ],
        },
        {
            name: 'brushY',
            value: 0,
            on: [
                {
                    events: '@cell:mousedown',
                    update: '[y(cell), y(cell)]',
                },
                {
                    events:
                        '[@cell:mousedown, window:mouseup] > window:mousemove',
                    update: '[brushY[0], clamp(y(cell), 0, chartSize)]',
                },
                {
                    events: { signal: 'delta' },
                    update:
                        'clampRange([anchorY[0] + delta[1], anchorY[1] + delta[1]], 0, chartSize)',
                },
            ],
        },
        {
            name: 'down',
            value: [0, 0],
            on: [{ events: '@brush:mousedown', update: '[x(cell), y(cell)]' }],
        },
        {
            name: 'anchorX',
            value: null,
            on: [{ events: '@brush:mousedown', update: 'slice(brushX)' }],
        },
        {
            name: 'anchorY',
            value: null,
            on: [{ events: '@brush:mousedown', update: 'slice(brushY)' }],
        },
        {
            name: 'delta',
            value: [0, 0],
            on: [
                {
                    events:
                        '[@brush:mousedown, window:mouseup] > window:mousemove',
                    update: '[x(cell) - down[0], y(cell) - down[1]]',
                },
            ],
        },
        {
            name: 'rangeX',
            value: [0, 0],
            on: [
                {
                    events: { signal: 'brushX' },
                    update: "invert(cell.datum.x.data + 'X', brushX)",
                },
            ],
        },
        {
            name: 'rangeY',
            value: [0, 0],
            on: [
                {
                    events: { signal: 'brushY' },
                    update: "invert(cell.datum.y.data + 'Y', brushY)",
                },
            ],
        },
        {
            name: 'cursor',
            value: "'default'",
            on: [
                {
                    events:
                        '[@cell:mousedown, window:mouseup] > window:mousemove!',
                    update: "'nwse-resize'",
                },
                {
                    events:
                        '@brush:mousemove, [@brush:mousedown, window:mouseup] > window:mousemove!',
                    update: "'move'",
                },
                {
                    events: '@brush:mouseout, window:mouseup',
                    update: "'default'",
                },
            ],
        },
    ],

    data: [
        {
            name: 'iris',
            url: 'data/iris.json',
        },
        {
            name: 'fields',
            values: ['petalWidth', 'petalLength', 'sepalWidth', 'sepalLength'],
        },
        {
            name: 'cross',
            source: 'fields',
            transform: [
                { type: 'cross', as: ['x', 'y'] },
                { type: 'formula', as: 'xscale', expr: "datum.x.data + 'X'" },
                { type: 'formula', as: 'yscale', expr: "datum.y.data + 'Y'" },
            ],
        },
    ],

    scales: [
        {
            name: 'groupx',
            type: 'band',
            range: 'width',
            domain: { data: 'fields', field: 'data' },
        },
        {
            name: 'groupy',
            type: 'band',
            range: [{ signal: 'height' }, 0],
            domain: { data: 'fields', field: 'data' },
        },
        {
            name: 'color',
            type: 'ordinal',
            domain: { data: 'iris', field: 'species' },
            range: 'category',
        },

        {
            name: 'petalWidthX',
            zero: false,
            nice: true,
            domain: { data: 'iris', field: 'petalWidth' },
            range: [0, { signal: 'chartSize' }],
        },
        {
            name: 'petalLengthX',
            zero: false,
            nice: true,
            domain: { data: 'iris', field: 'petalLength' },
            range: [0, { signal: 'chartSize' }],
        },
        {
            name: 'sepalWidthX',
            zero: false,
            nice: true,
            domain: { data: 'iris', field: 'sepalWidth' },
            range: [0, { signal: 'chartSize' }],
        },
        {
            name: 'sepalLengthX',
            zero: false,
            nice: true,
            domain: { data: 'iris', field: 'sepalLength' },
            range: [0, { signal: 'chartSize' }],
        },

        {
            name: 'petalWidthY',
            zero: false,
            nice: true,
            domain: { data: 'iris', field: 'petalWidth' },
            range: [{ signal: 'chartSize' }, 0],
        },
        {
            name: 'petalLengthY',
            zero: false,
            nice: true,
            domain: { data: 'iris', field: 'petalLength' },
            range: [{ signal: 'chartSize' }, 0],
        },
        {
            name: 'sepalWidthY',
            zero: false,
            nice: true,
            domain: { data: 'iris', field: 'sepalWidth' },
            range: [{ signal: 'chartSize' }, 0],
        },
        {
            name: 'sepalLengthY',
            zero: false,
            nice: true,
            domain: { data: 'iris', field: 'sepalLength' },
            range: [{ signal: 'chartSize' }, 0],
        },
    ],

    axes: [
        {
            orient: 'left',
            scale: 'petalWidthY',
            minExtent: 25,
            title: 'Petal Width',
            tickCount: 5,
            domain: false,
            position: { signal: '3 * chartStep' },
        },
        {
            orient: 'left',
            scale: 'petalLengthY',
            minExtent: 25,
            title: 'Petal Length',
            tickCount: 5,
            domain: false,
            position: { signal: '2 * chartStep' },
        },
        {
            orient: 'left',
            scale: 'sepalWidthY',
            minExtent: 25,
            title: 'Sepal Width',
            tickCount: 5,
            domain: false,
            position: { signal: '1 * chartStep' },
        },
        {
            orient: 'left',
            scale: 'sepalLengthY',
            minExtent: 25,
            title: 'Sepal Length',
            tickCount: 5,
            domain: false,
        },
        {
            orient: 'bottom',
            scale: 'petalWidthX',
            title: 'Petal Width',
            tickCount: 5,
            domain: false,
            offset: { signal: '-chartPad' },
        },
        {
            orient: 'bottom',
            scale: 'petalLengthX',
            title: 'Petal Length',
            tickCount: 5,
            domain: false,
            offset: { signal: '-chartPad' },
            position: { signal: '1 * chartStep' },
        },
        {
            orient: 'bottom',
            scale: 'sepalWidthX',
            title: 'Sepal Width',
            tickCount: 5,
            domain: false,
            offset: { signal: '-chartPad' },
            position: { signal: '2 * chartStep' },
        },
        {
            orient: 'bottom',
            scale: 'sepalLengthX',
            title: 'Sepal Length',
            tickCount: 5,
            domain: false,
            offset: { signal: '-chartPad' },
            position: { signal: '3 * chartStep' },
        },
    ],

    legends: [
        {
            fill: 'color',
            title: 'Species',
            offset: 0,
            encode: {
                symbols: {
                    update: {
                        fillOpacity: { value: 0.5 },
                        stroke: { value: 'transparent' },
                    },
                },
            },
        },
    ],

    marks: [
        {
            type: 'rect',
            encode: {
                enter: {
                    fill: { value: '#eee' },
                },
                update: {
                    opacity: { signal: 'cell ? 1 : 0' },
                    x: { signal: 'cell ? cell.x + brushX[0] : 0' },
                    x2: { signal: 'cell ? cell.x + brushX[1] : 0' },
                    y: { signal: 'cell ? cell.y + brushY[0] : 0' },
                    y2: { signal: 'cell ? cell.y + brushY[1] : 0' },
                },
            },
        },
        {
            name: 'cell',
            type: 'group',
            from: { data: 'cross' },

            encode: {
                enter: {
                    x: { scale: 'groupx', field: 'x.data' },
                    y: { scale: 'groupy', field: 'y.data' },
                    width: { signal: 'chartSize' },
                    height: { signal: 'chartSize' },
                    fill: { value: 'transparent' },
                    stroke: { value: '#ddd' },
                },
            },

            marks: [
                {
                    type: 'symbol',
                    from: { data: 'iris' },
                    interactive: false,
                    encode: {
                        enter: {
                            x: {
                                scale: { parent: 'xscale' },
                                field: { datum: { parent: 'x.data' } },
                            },
                            y: {
                                scale: { parent: 'yscale' },
                                field: { datum: { parent: 'y.data' } },
                            },
                            fillOpacity: { value: 0.5 },
                            size: { value: 36 },
                        },
                        update: {
                            fill: [
                                {
                                    test:
                                        '!cell || inrange(datum[cell.datum.x.data], rangeX) && inrange(datum[cell.datum.y.data], rangeY)',
                                    scale: 'color',
                                    field: 'species',
                                },
                                { value: '#ddd' },
                            ],
                        },
                    },
                },
            ],
        },
        {
            type: 'rect',
            name: 'brush',
            encode: {
                enter: {
                    fill: { value: 'transparent' },
                },
                update: {
                    x: { signal: 'cell ? cell.x + brushX[0] : 0' },
                    x2: { signal: 'cell ? cell.x + brushX[1] : 0' },
                    y: { signal: 'cell ? cell.y + brushY[0] : 0' },
                    y2: { signal: 'cell ? cell.y + brushY[1] : 0' },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/zoomable-scatter-plot
const zoomableScatterPlot: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 500,
    height: 300,
    padding: {
        top: 10,
        left: 30,
        bottom: 30,
        right: 10,
    },
    autosize: 'none',

    config: {
        axis: {
            domain: false,
            tickSize: 3,
            tickColor: '#888',
            labelFont: 'Monaco, Courier New',
        },
    },

    signals: [
        {
            name: 'margin',
            value: 20,
        },
        {
            name: 'hover',
            on: [
                { events: '*:mouseover', encode: 'hover' },
                { events: '*:mouseout', encode: 'leave' },
                { events: '*:mousedown', encode: 'select' },
                { events: '*:mouseup', encode: 'release' },
            ],
        },
        {
            name: 'xoffset',
            update: '-(height + padding.bottom)',
        },
        {
            name: 'yoffset',
            update: '-(width + padding.left)',
        },
        { name: 'xrange', update: '[0, width]' },
        { name: 'yrange', update: '[height, 0]' },

        {
            name: 'down',
            value: null,
            on: [
                { events: 'touchend', update: 'null' },
                { events: 'mousedown, touchstart', update: 'xy()' },
            ],
        },
        {
            name: 'xcur',
            value: null,
            on: [
                {
                    events: 'mousedown, touchstart, touchend',
                    update: 'slice(xdom)',
                },
            ],
        },
        {
            name: 'ycur',
            value: null,
            on: [
                {
                    events: 'mousedown, touchstart, touchend',
                    update: 'slice(ydom)',
                },
            ],
        },
        {
            name: 'delta',
            value: [0, 0],
            on: [
                {
                    events: [
                        {
                            source: 'window',
                            type: 'mousemove',
                            consume: true,
                            between: [
                                { type: 'mousedown' },
                                { source: 'window', type: 'mouseup' },
                            ],
                        },
                        {
                            type: 'touchmove',
                            consume: true,
                            filter: 'event.touches.length === 1',
                        },
                    ],
                    update: 'down ? [down[0]-x(), y()-down[1]] : [0,0]',
                },
            ],
        },

        {
            name: 'anchor',
            value: [0, 0],
            on: [
                {
                    events: 'wheel',
                    update: "[invert('xscale', x()), invert('yscale', y())]",
                },
                {
                    events: {
                        type: 'touchstart',
                        filter: 'event.touches.length===2',
                    },
                    update:
                        '[(xdom[0] + xdom[1]) / 2, (ydom[0] + ydom[1]) / 2]',
                },
            ],
        },
        {
            name: 'zoom',
            value: 1,
            on: [
                {
                    events: 'wheel!',
                    force: true,
                    update:
                        'pow(1.001, event.deltaY * pow(16, event.deltaMode))',
                },
                {
                    events: { signal: 'dist2' },
                    force: true,
                    update: 'dist1 / dist2',
                },
            ],
        },
        {
            name: 'dist1',
            value: 0,
            on: [
                {
                    events: {
                        type: 'touchstart',
                        filter: 'event.touches.length===2',
                    },
                    update: 'pinchDistance(event)',
                },
                {
                    events: { signal: 'dist2' },
                    update: 'dist2',
                },
            ],
        },
        {
            name: 'dist2',
            value: 0,
            on: [
                {
                    events: {
                        type: 'touchmove',
                        consume: true,
                        filter: 'event.touches.length===2',
                    },
                    update: 'pinchDistance(event)',
                },
            ],
        },

        {
            name: 'xdom',
            update: 'slice(xext)',
            react: false,
            on: [
                {
                    events: { signal: 'delta' },
                    update:
                        '[xcur[0] + span(xcur) * delta[0] / width, xcur[1] + span(xcur) * delta[0] / width]',
                },
                {
                    events: { signal: 'zoom' },
                    update:
                        '[anchor[0] + (xdom[0] - anchor[0]) * zoom, anchor[0] + (xdom[1] - anchor[0]) * zoom]',
                },
            ],
        },
        {
            name: 'ydom',
            update: 'slice(yext)',
            react: false,
            on: [
                {
                    events: { signal: 'delta' },
                    update:
                        '[ycur[0] + span(ycur) * delta[1] / height, ycur[1] + span(ycur) * delta[1] / height]',
                },
                {
                    events: { signal: 'zoom' },
                    update:
                        '[anchor[1] + (ydom[0] - anchor[1]) * zoom, anchor[1] + (ydom[1] - anchor[1]) * zoom]',
                },
            ],
        },
        {
            name: 'size',
            update: 'clamp(20 / span(xdom), 1, 1000)',
        },
    ],

    data: [
        {
            name: 'points',
            url: 'data/normal-2d.json',
            transform: [
                { type: 'extent', field: 'u', signal: 'xext' },
                { type: 'extent', field: 'v', signal: 'yext' },
            ],
        },
    ],

    scales: [
        {
            name: 'xscale',
            zero: false,
            domain: { signal: 'xdom' },
            range: { signal: 'xrange' },
        },
        {
            name: 'yscale',
            zero: false,
            domain: { signal: 'ydom' },
            range: { signal: 'yrange' },
        },
    ],

    axes: [
        {
            scale: 'xscale',
            orient: 'top',
            offset: { signal: 'xoffset' },
        },
        {
            scale: 'yscale',
            orient: 'right',
            offset: { signal: 'yoffset' },
        },
    ],

    marks: [
        {
            type: 'symbol',
            from: { data: 'points' },
            encode: {
                enter: {
                    fillOpacity: { value: 0.6 },
                    fill: { value: 'steelblue' },
                },
                update: {
                    x: { scale: 'xscale', field: 'u' },
                    y: { scale: 'yscale', field: 'v' },
                    size: { signal: 'size' },
                },
                hover: { fill: { value: 'firebrick' } },
                leave: { fill: { value: 'steelblue' } },
                select: { size: { signal: 'size', mult: 5 } },
                release: { size: { signal: 'size' } },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/global-development
const globalDevelopment: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 800,
    height: 600,
    padding: 5,

    data: [
        {
            name: 'gapminder',
            url: 'data/gapminder.json',
        },
        {
            name: 'clusters',
            values: [
                { id: 0, name: 'South Asia' },
                { id: 1, name: 'Europe & Central Asia' },
                { id: 2, name: 'Sub-Saharan Africa' },
                { id: 3, name: 'America' },
                { id: 4, name: 'East Asia & Pacific' },
                { id: 5, name: 'Middle East & North Africa' },
            ],
        },
        {
            name: 'country_timeline',
            source: 'gapminder',
            transform: [
                {
                    type: 'filter',
                    expr: 'timeline && datum.country == timeline.country',
                },
                { type: 'collect', sort: { field: 'year' } },
            ],
        },
        {
            name: 'thisYear',
            source: 'gapminder',
            transform: [{ type: 'filter', expr: 'datum.year == currentYear' }],
        },
        {
            name: 'prevYear',
            source: 'gapminder',
            transform: [
                {
                    type: 'filter',
                    expr: 'datum.year == currentYear - stepYear',
                },
            ],
        },
        {
            name: 'nextYear',
            source: 'gapminder',
            transform: [
                {
                    type: 'filter',
                    expr: 'datum.year == currentYear + stepYear',
                },
            ],
        },
        {
            name: 'countries',
            source: 'gapminder',
            transform: [{ type: 'aggregate', groupby: ['country'] }],
        },
        {
            name: 'interpolate',
            source: 'countries',
            transform: [
                {
                    type: 'lookup',
                    from: 'thisYear',
                    key: 'country',
                    fields: ['country'],
                    as: ['this'],
                    default: {},
                },
                {
                    type: 'lookup',
                    from: 'prevYear',
                    key: 'country',
                    fields: ['country'],
                    as: ['prev'],
                    default: {},
                },
                {
                    type: 'lookup',
                    from: 'nextYear',
                    key: 'country',
                    fields: ['country'],
                    as: ['next'],
                    default: {},
                },
                {
                    type: 'formula',
                    as: 'target_fertility',
                    expr:
                        'interYear > currentYear ? datum.next.fertility : (datum.prev.fertility||datum.this.fertility)',
                },
                {
                    type: 'formula',
                    as: 'target_life_expect',
                    expr:
                        'interYear > currentYear ? datum.next.life_expect : (datum.prev.life_expect||datum.this.life_expect)',
                },
                {
                    type: 'formula',
                    as: 'inter_fertility',
                    expr:
                        'interYear==2000 ? datum.this.fertility : datum.this.fertility + (datum.target_fertility-datum.this.fertility) * abs(interYear-datum.this.year)/5',
                },
                {
                    type: 'formula',
                    as: 'inter_life_expect',
                    expr:
                        'interYear==2000 ? datum.this.life_expect : datum.this.life_expect + (datum.target_life_expect-datum.this.life_expect) * abs(interYear-datum.this.year)/5',
                },
            ],
        },
        {
            name: 'trackCountries',
            on: [{ trigger: 'active', toggle: '{country: active.country}' }],
        },
    ],

    signals: [
        { name: 'minYear', value: 1955 },
        { name: 'maxYear', value: 2005 },
        { name: 'stepYear', value: 5 },
        {
            name: 'active',
            value: {},
            on: [
                {
                    events: '@point:mousedown, @point:touchstart',
                    update: 'datum',
                },
                { events: 'window:mouseup, window:touchend', update: '{}' },
            ],
        },
        { name: 'isActive', update: 'active.country' },
        {
            name: 'timeline',
            value: {},
            on: [
                {
                    events: '@point:mouseover',
                    update: 'isActive ? active : datum',
                },
                { events: '@point:mouseout', update: 'active' },
                { events: { signal: 'active' }, update: 'active' },
            ],
        },
        {
            name: 'tX',
            on: [
                {
                    events: 'mousemove!, touchmove!',
                    update: "isActive ? scale('x', active.this.fertility) : tX",
                },
            ],
        },
        {
            name: 'tY',
            on: [
                {
                    events: 'mousemove, touchmove',
                    update:
                        "isActive ? scale('y', active.this.life_expect) : tY",
                },
            ],
        },
        {
            name: 'pX',
            on: [
                {
                    events: 'mousemove, touchmove',
                    update: "isActive ? scale('x', active.prev.fertility) : pX",
                },
            ],
        },
        {
            name: 'pY',
            on: [
                {
                    events: 'mousemove, touchmove',
                    update:
                        "isActive ? scale('y', active.prev.life_expect) : pY",
                },
            ],
        },
        {
            name: 'nX',
            on: [
                {
                    events: 'mousemove, touchmove',
                    update: "isActive ? scale('x', active.next.fertility) : nX",
                },
            ],
        },
        {
            name: 'nY',
            on: [
                {
                    events: 'mousemove, touchmove',
                    update:
                        "isActive ? scale('y', active.next.life_expect) : nY",
                },
            ],
        },
        {
            name: 'thisDist',
            value: 0,
            on: [
                {
                    events: 'mousemove, touchmove',
                    update:
                        'isActive ? sqrt(pow(x()-tX, 2) + pow(y()-tY, 2)) : thisDist',
                },
            ],
        },
        {
            name: 'prevDist',
            value: 0,
            on: [
                {
                    events: 'mousemove, touchmove',
                    update:
                        'isActive ? sqrt(pow(x()-pX, 2) + pow(y()-pY, 2)): prevDist',
                },
            ],
        },
        {
            name: 'nextDist',
            value: 0,
            on: [
                {
                    events: 'mousemove, touchmove',
                    update:
                        'isActive ? sqrt(pow(x()-nX, 2) + pow(y()-nY, 2)) : nextDist',
                },
            ],
        },
        {
            name: 'prevScore',
            value: 0,
            on: [
                {
                    events: 'mousemove, touchmove',
                    update:
                        'isActive ? ((pX-tX) * (x()-tX) + (pY-tY) * (y()-tY))/prevDist || -999999 : prevScore',
                },
            ],
        },
        {
            name: 'nextScore',
            value: 0,
            on: [
                {
                    events: 'mousemove, touchmove',
                    update:
                        'isActive ? ((nX-tX) * (x()-tX) + (nY-tY) * (y()-tY))/nextDist || -999999 : nextScore',
                },
            ],
        },
        {
            name: 'interYear',
            value: 1980,
            on: [
                {
                    events: 'mousemove, touchmove',
                    update:
                        'isActive ? (min(maxYear, currentYear+5, max(minYear, currentYear-5, prevScore > nextScore ? (currentYear - 2.5*prevScore/sqrt(pow(pX-tX, 2) + pow(pY-tY, 2))) : (currentYear + 2.5*nextScore/sqrt(pow(nX-tX, 2) + pow(nY-tY, 2)))))) : interYear',
                },
            ],
        },
        {
            name: 'currentYear',
            value: 1980,
            on: [
                {
                    events: 'mousemove, touchmove',
                    update:
                        'isActive ? (min(maxYear, max(minYear, prevScore > nextScore ? (thisDist < prevDist ? currentYear : currentYear-5) : (thisDist < nextDist ? currentYear : currentYear+5)))) : currentYear',
                },
            ],
        },
    ],

    scales: [
        {
            name: 'x',
            type: 'linear',
            nice: true,
            domain: { data: 'gapminder', field: 'fertility' },
            range: 'width',
        },
        {
            name: 'y',
            type: 'linear',
            nice: true,
            zero: false,
            domain: { data: 'gapminder', field: 'life_expect' },
            range: 'height',
        },
        {
            name: 'color',
            type: 'ordinal',
            domain: { data: 'gapminder', field: 'cluster' },
            range: 'category',
        },
        {
            name: 'label',
            type: 'ordinal',
            domain: { data: 'clusters', field: 'id' },
            range: { data: 'clusters', field: 'name' },
        },
    ],

    axes: [
        {
            title: 'Fertility',
            orient: 'bottom',
            scale: 'x',
            grid: true,
            tickCount: 5,
        },
        {
            title: 'Life Expectancy',
            orient: 'left',
            scale: 'y',
            grid: true,
            tickCount: 5,
        },
    ],

    legends: [
        {
            fill: 'color',
            title: 'Region',
            orient: 'right',
            encode: {
                symbols: {
                    enter: {
                        fillOpacity: { value: 0.5 },
                    },
                },
                labels: {
                    update: {
                        text: { scale: 'label', field: 'value' },
                    },
                },
            },
        },
    ],

    marks: [
        {
            type: 'text',
            encode: {
                update: {
                    text: { signal: 'currentYear' },
                    x: { value: 300 },
                    y: { value: 300 },
                    fill: { value: 'grey' },
                    fillOpacity: { value: 0.25 },
                    fontSize: { value: 100 },
                },
            },
        },
        {
            type: 'text',
            from: { data: 'country_timeline' },
            interactive: false,
            encode: {
                enter: {
                    x: { scale: 'x', field: 'fertility', offset: 5 },
                    y: { scale: 'y', field: 'life_expect' },
                    fill: { value: '#555' },
                    fillOpacity: { value: 0.6 },
                    text: { field: 'year' },
                },
            },
        },
        {
            type: 'line',
            from: { data: 'country_timeline' },
            encode: {
                update: {
                    x: { scale: 'x', field: 'fertility' },
                    y: { scale: 'y', field: 'life_expect' },
                    stroke: { value: '#bbb' },
                    strokeWidth: { value: 5 },
                    strokeOpacity: { value: 0.5 },
                },
            },
        },
        {
            name: 'point',
            type: 'symbol',
            from: { data: 'interpolate' },
            encode: {
                enter: {
                    fill: { scale: 'color', field: 'this.cluster' },
                    size: { value: 150 },
                },
                update: {
                    x: { scale: 'x', field: 'inter_fertility' },
                    y: { scale: 'y', field: 'inter_life_expect' },
                    fillOpacity: [
                        {
                            test:
                                "datum.country==timeline.country || indata('trackCountries', 'country', datum.country)",
                            value: 1,
                        },
                        { value: 0.5 },
                    ],
                },
            },
        },
        {
            type: 'text',
            from: { data: 'interpolate' },
            interactive: false,
            encode: {
                enter: {
                    fill: { value: '#333' },
                    fontSize: { value: 14 },
                    fontWeight: { value: 'bold' },
                    text: { field: 'country' },
                    align: { value: 'center' },
                    baseline: { value: 'bottom' },
                },
                update: {
                    x: { scale: 'x', field: 'inter_fertility' },
                    y: { scale: 'y', field: 'inter_life_expect', offset: -7 },
                    fillOpacity: [
                        {
                            test:
                                "datum.country==timeline.country || indata('trackCountries', 'country', datum.country)",
                            value: 0.8,
                        },
                        { value: 0 },
                    ],
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/interactive-legend
const interactiveLegend: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    description: 'Scatter plot with interactive legend and x-axis.',
    width: 200,
    height: 200,
    padding: 5,
    autosize: 'pad',

    signals: [
        {
            name: 'clear',
            value: true,
            on: [
                {
                    events: 'mouseup[!event.item]',
                    update: 'true',
                    force: true,
                },
            ],
        },
        {
            name: 'shift',
            value: false,
            on: [
                {
                    events: '@legendSymbol:click, @legendLabel:click',
                    update: 'event.shiftKey',
                    force: true,
                },
            ],
        },
        {
            name: 'clicked',
            value: null,
            on: [
                {
                    events: '@legendSymbol:click, @legendLabel:click',
                    update: '{value: datum.value}',
                    force: true,
                },
            ],
        },
        {
            name: 'brush',
            value: 0,
            on: [
                {
                    events: { signal: 'clear' },
                    update: 'clear ? [0, 0] : brush',
                },
                {
                    events: '@xaxis:mousedown',
                    update: '[x(), x()]',
                },
                {
                    events:
                        '[@xaxis:mousedown, window:mouseup] > window:mousemove!',
                    update: '[brush[0], clamp(x(), 0, width)]',
                },
                {
                    events: { signal: 'delta' },
                    update:
                        'clampRange([anchor[0] + delta, anchor[1] + delta], 0, width)',
                },
            ],
        },
        {
            name: 'anchor',
            value: null,
            on: [{ events: '@brush:mousedown', update: 'slice(brush)' }],
        },
        {
            name: 'xdown',
            value: 0,
            on: [{ events: '@brush:mousedown', update: 'x()' }],
        },
        {
            name: 'delta',
            value: 0,
            on: [
                {
                    events:
                        '[@brush:mousedown, window:mouseup] > window:mousemove!',
                    update: 'x() - xdown',
                },
            ],
        },
        {
            name: 'domain',
            on: [
                {
                    events: { signal: 'brush' },
                    update: "span(brush) ? invert('x', brush) : null",
                },
            ],
        },
    ],

    data: [
        {
            name: 'source',
            url: 'data/cars.json',
            transform: [
                {
                    type: 'filter',
                    expr:
                        "datum['Horsepower'] != null && datum['Miles_per_Gallon'] != null && datum['Origin'] != null",
                },
            ],
        },
        {
            name: 'selected',
            on: [
                { trigger: 'clear', remove: true },
                { trigger: '!shift', remove: true },
                { trigger: '!shift && clicked', insert: 'clicked' },
                { trigger: 'shift && clicked', toggle: 'clicked' },
            ],
        },
    ],

    scales: [
        {
            name: 'x',
            type: 'linear',
            round: true,
            nice: true,
            zero: true,
            domain: { data: 'source', field: 'Horsepower' },
            range: [0, 200],
        },
        {
            name: 'y',
            type: 'linear',
            round: true,
            nice: true,
            zero: true,
            domain: { data: 'source', field: 'Miles_per_Gallon' },
            range: [200, 0],
        },
        {
            name: 'color',
            type: 'ordinal',
            range: { scheme: 'category10' },
            domain: { data: 'source', field: 'Origin' },
        },
    ],

    axes: [
        {
            scale: 'x',
            grid: true,
            domain: false,
            orient: 'bottom',
            tickCount: 5,
            title: 'Horsepower',
        },
        {
            scale: 'y',
            grid: true,
            domain: false,
            orient: 'left',
            titlePadding: 5,
            title: 'Miles_per_Gallon',
        },
    ],

    legends: [
        {
            stroke: 'color',
            title: 'Origin',
            encode: {
                symbols: {
                    name: 'legendSymbol',
                    interactive: true,
                    update: {
                        fill: { value: 'transparent' },
                        strokeWidth: { value: 2 },
                        opacity: [
                            {
                                test:
                                    "!length(data('selected')) || indata('selected', 'value', datum.value)",
                                value: 0.7,
                            },
                            { value: 0.15 },
                        ],
                        size: { value: 64 },
                    },
                },
                labels: {
                    name: 'legendLabel',
                    interactive: true,
                    update: {
                        opacity: [
                            {
                                test:
                                    "!length(data('selected')) || indata('selected', 'value', datum.value)",
                                value: 1,
                            },
                            { value: 0.25 },
                        ],
                    },
                },
            },
        },
    ],

    marks: [
        {
            type: 'rect',
            name: 'xaxis',
            interactive: true,
            encode: {
                enter: {
                    x: { value: 0 },
                    height: { value: 35 },
                    fill: { value: 'transparent' },
                    cursor: { value: 'ew-resize' },
                },
                update: {
                    y: { signal: 'height' },
                    width: { signal: "span(range('x'))" },
                },
            },
        },
        {
            type: 'rect',
            interactive: false,
            encode: {
                enter: {
                    y: { value: 0 },
                    height: { signal: 'height' },
                    fill: { value: '#ddd' },
                },
                update: {
                    x: { signal: 'brush[0]' },
                    x2: { signal: 'brush[1]' },
                    fillOpacity: { signal: 'domain ? 0.2 : 0' },
                },
            },
        },
        {
            name: 'marks',
            type: 'symbol',
            from: { data: 'source' },
            interactive: false,
            encode: {
                update: {
                    x: { scale: 'x', field: 'Horsepower' },
                    y: { scale: 'y', field: 'Miles_per_Gallon' },
                    shape: { value: 'circle' },
                    strokeWidth: { value: 2 },
                    opacity: [
                        {
                            test:
                                "(!domain || inrange(datum.Horsepower, domain)) && (!length(data('selected')) || indata('selected', 'value', datum.Origin))",
                            value: 0.7,
                        },
                        { value: 0.15 },
                    ],
                    stroke: [
                        {
                            test:
                                "(!domain || inrange(datum.Horsepower, domain)) && (!length(data('selected')) || indata('selected', 'value', datum.Origin))",
                            scale: 'color',
                            field: 'Origin',
                        },
                        { value: '#ccc' },
                    ],
                    fill: { value: 'transparent' },
                },
            },
        },
        {
            type: 'rect',
            name: 'brush',
            encode: {
                enter: {
                    y: { value: 0 },
                    height: { signal: 'height' },
                    fill: { value: 'transparent' },
                },
                update: {
                    x: { signal: 'brush[0]' },
                    x2: { signal: 'brush[1]' },
                },
            },
        },
        {
            type: 'rect',
            interactive: false,
            encode: {
                enter: {
                    y: { value: 0 },
                    height: { signal: 'height' },
                    width: { value: 1 },
                    fill: { value: 'firebrick' },
                },
                update: {
                    fillOpacity: { signal: 'domain ? 1 : 0' },
                    x: { signal: 'brush[0]' },
                },
            },
        },
        {
            type: 'rect',
            interactive: false,
            encode: {
                enter: {
                    y: { value: 0 },
                    height: { signal: 'height' },
                    width: { value: 1 },
                    fill: { value: 'firebrick' },
                },
                update: {
                    fillOpacity: { signal: 'domain ? 1 : 0' },
                    x: { signal: 'brush[1]' },
                },
            },
        },
    ],
};

// https://vega.github.io/editor/#/examples/vega/stock-index-chart
const stockIndexChart: Spec = {
    $schema: 'https://vega.github.io/schema/vega/v3.json',
    width: 650,
    height: 300,
    padding: 5,
    autosize: { type: 'fit', contains: 'padding' },

    signals: [
        {
            name: 'indexDate',
            update: "time('Jan 1 2005')",
            on: [
                {
                    events: 'mousemove',
                    update: "invert('x', clamp(x(), 0, width))",
                },
            ],
        },
        {
            name: 'maxDate',
            update: "time('Mar 1 2010')",
        },
    ],

    data: [
        {
            name: 'stocks',
            url: 'data/stocks.csv',
            format: { type: 'csv', parse: { price: 'number', date: 'date' } },
        },
        {
            name: 'index',
            source: 'stocks',
            transform: [
                {
                    type: 'filter',
                    expr:
                        'month(datum.date) == month(indexDate) && year(datum.date) == year(indexDate)',
                },
            ],
        },
        {
            name: 'indexed_stocks',
            source: 'stocks',
            transform: [
                {
                    type: 'lookup',
                    from: 'index',
                    key: 'symbol',
                    fields: ['symbol'],
                    as: ['index'],
                    default: { price: 0 },
                },
                {
                    type: 'formula',
                    as: 'indexed_price',
                    expr:
                        'datum.index.price > 0 ? (datum.price - datum.index.price)/datum.index.price : 0',
                },
            ],
        },
    ],

    scales: [
        {
            name: 'x',
            type: 'time',
            domain: { data: 'stocks', field: 'date' },
            range: 'width',
        },
        {
            name: 'y',
            type: 'linear',
            domain: { data: 'indexed_stocks', field: 'indexed_price' },
            nice: true,
            zero: true,
            range: 'height',
        },
        {
            name: 'color',
            type: 'ordinal',
            range: 'category',
            domain: { data: 'stocks', field: 'symbol' },
        },
    ],

    axes: [{ orient: 'left', scale: 'y', grid: true, format: '%' }],

    marks: [
        {
            type: 'group',
            from: {
                facet: {
                    name: 'series',
                    data: 'indexed_stocks',
                    groupby: 'symbol',
                },
            },
            data: [
                {
                    name: 'label',
                    source: 'series',
                    transform: [
                        { type: 'filter', expr: 'datum.date == maxDate' },
                    ],
                },
            ],
            marks: [
                {
                    type: 'line',
                    from: { data: 'series' },
                    encode: {
                        update: {
                            x: { scale: 'x', field: 'date' },
                            y: { scale: 'y', field: 'indexed_price' },
                            stroke: { scale: 'color', field: 'symbol' },
                            strokeWidth: { value: 2 },
                        },
                    },
                },
                {
                    type: 'text',
                    from: { data: 'label' },
                    encode: {
                        update: {
                            x: { scale: 'x', field: 'date', offset: 2 },
                            y: { scale: 'y', field: 'indexed_price' },
                            fill: { scale: 'color', field: 'symbol' },
                            text: { field: 'symbol' },
                            baseline: { value: 'middle' },
                        },
                    },
                },
            ],
        },
        {
            type: 'rule',
            encode: {
                update: {
                    x: { field: { group: 'x' } },
                    x2: { field: { group: 'width' } },
                    y: {
                        value: 0.5,
                        offset: { scale: 'y', value: 0, round: true },
                    },
                    stroke: { value: 'black' },
                    strokeWidth: { value: 1 },
                },
            },
        },
        {
            type: 'rule',
            encode: {
                update: {
                    x: { scale: 'x', signal: 'indexDate', offset: 0.5 },
                    y: { value: 0 },
                    y2: { field: { group: 'height' } },
                    stroke: { value: 'firebrick' },
                },
            },
        },
        {
            type: 'text',
            encode: {
                update: {
                    x: { scale: 'x', signal: 'indexDate' },
                    y2: { field: { group: 'height' }, offset: 15 },
                    align: { value: 'center' },
                    text: { signal: "timeFormat(indexDate, '%b %Y')" },
                    fill: { value: 'firebrick' },
                },
            },
        },
    ],
};

// Runtime examples from https://vega.github.io/vega/usage/

function clientSideApi() {
    var view;

    vega
        .loader()
        .load('https://vega.github.io/vega/examples/bar-chart.vg.json')
        .then(function(data) {
            render(JSON.parse(data));
        });

    function render(spec: Spec) {
        view = new vega.View(vega.parse(spec))
            .renderer('canvas') // set renderer (canvas or svg)
            .initialize('#view') // initialize view within parent DOM container
            .hover() // enable hover encode set processing
            .run();
    }
}

function serverSideApi() {
    // create a new view instance for a given Vega JSON spec
    var view = new vega.View(vega.parse(histogram))
        .renderer('none')
        .initialize();

    // generate a static SVG image
    view
        .toSVG()
        .then(function(svg) {
            // process svg string
        })
        .catch(function(err) {
            console.error(err);
        });

    // generate a static PNG image
    view
        .toCanvas()
        .then(function(canvas) {
            // process node-canvas instance
            // for example, generate a PNG stream to write
            var stream = canvas.createPNGStream();
        })
        .catch(function(err) {
            console.error(err);
        });
}
