Dygraph.Plotters;

Dygraph.PointType;

// $ExpectType Dygraph<HTMLDivElement>
const d = new Dygraph(new HTMLDivElement(), 'data', {
    animatedZooms: true,
    axes: {
        x: {
            axisLabelWidth: 100,
            pixelsPerLabel: 100,
            valueRange: [0, 100],
            drawGrid: false,
            independentTicks: false,
            gridLinePattern: [2, 2],
            labelsKMB: true,
            axisLabelFormatter: (v, granularity, opts, dygraph) => {
                // $ExpectType number | Date
                v;

                // $ExpectType number
                granularity;

                // $ExpectType (name: string) => any
                opts;

                // $ExpectType Readonly<Dygraph<HTMLDivElement>>
                dygraph;
            },
            valueFormatter: (v, opts, seriesName, dygraph, row, col) => {
                // $ExpectType number
                v;

                // $ExpectType (name: string) => any
                opts;

                // $ExpectType string
                seriesName;

                // $ExpectType Readonly<Dygraph<HTMLDivElement>>
                dygraph;

                // $ExpectType number
                row;

                // $ExpectType number
                col;
            },
        },
    },
    drawPoints: true,
    errorBars: true,
    height: 320,
    highlightCircleSize: 2,
    highlightSeriesOpts: {
        highlightCircleSize: 5,
        strokeBorderWidth: 1,
        strokeWidth: 3,
    },
    labels: ['Date', 'Y1', 'Y2', 'Y3', 'Y4'],
    labelsDivStyles: { boxShadow: '4px 4px 4px #888' },
    labelsDivWidth: 100,
    labelsKMB: true,
    labelsSeparateLines: true,
    legend: 'always',
    rollPeriod: 14,
    series: {
        y: {
            strokePattern: [25, 5],
            strokeWidth: 3,
            highlightCircleSize: 10,
            drawPoints: true,
            pointSize: 1.5,
            axis: 'y2',
        },
    },
    showRoller: true,
    stackedGraph: false,
    strokeBorderWidth: 1,
    strokeWidth: 2,
    width: 480,
    y2label: 'Secondary y-axis',
    ylabel: 'Primary y-axis',
    underlayCallback: (canvas, area, dygraph) => {
        // $ExpectType CanvasRenderingContext2D
        canvas;

        // $ExpectType Area
        area;

        // $ExpectType Readonly<Dygraph<HTMLDivElement>>
        dygraph;
    },
    drawCallback: (dygraph, is_initial) => {
        // $ExpectType Readonly<Dygraph<HTMLDivElement>>
        dygraph;

        // $ExpectType boolean
        is_initial;
    },
    highlightCallback: (event, x, points, row, seriesName) => {
        // $ExpectType MouseEvent
        event;

        // $ExpectType number
        x;

        // $ExpectType ReadonlyArray<Point<HTMLDivElement>>
        points;

        // $ExpectType number
        row;

        // $ExpectType string
        seriesName;
    },
    unhighlightCallback: event => {
        // $ExpectType MouseEvent
        event;
    },
    clickCallback: (event, x, points) => {
        // $ExpectType MouseEvent
        event;

        // $ExpectType number
        x;

        // $ExpectType ReadonlyArray<Point<HTMLDivElement>>
        points;
    },
    pointClickCallback: (event, point) => {
        // $ExpectType MouseEvent
        event;

        // $ExpectType Readonly<Point<HTMLDivElement>>
        point;
    },
    zoomCallback: (minDate, maxDate, yRanges) => {
        // $ExpectType number
        minDate;

        // $ExpectType number
        maxDate;

        // $ExpectType ReadonlyArray<[number, number]>
        yRanges;
    },
});

// $ExpectType void
d.resize();

// $ExpectType void
d.resize(300, 200);

// $ExpectType void
d.adjustRoll(10);

// $ExpectType 10
d.toDataXCoord(10);

// $ExpectType null
d.toDataXCoord(null);

// $ExpectType 10
d.toDataYCoord(10);

// $ExpectType null
d.toDataYCoord(null);

// $ExpectType [null, 1]
d.toDataCoords(null, 1);

// $ExpectType [1, null]
d.toDataCoords(1, null);

// $ExpectType 0 | 1
d.toPercentXCoord(10);

// $ExpectType null
d.toPercentXCoord(null);

// $ExpectType [0, -20]
d.toDomCoords(0, -20);

// $ExpectType [1, 20]
d.toDomCoords(1, 20);

// $ExpectType void
d.setSelection(false, 's005');

// $ExpectType void
d.setAnnotations([
    {
        cssClass: 'annotation',
        height: 23,
        icon: 'dollar.png',
        series: 'sine wave',
        shortText: '',
        text: 'Stock Market Crash',
        tickHeight: 4,
        width: 18,
        x: '200610',
        clickHandler: (anotation, point, dygraph, event) => {
            // $ExpectType Readonly<Annotation<HTMLDivElement>>
            anotation;

            // $ExpectType Readonly<Point<HTMLDivElement>>
            point;

            // $ExpectType Readonly<Dygraph<HTMLDivElement>>
            dygraph;

            // $ExpectType MouseEvent
            event;
        },
    },
]);

// $ExpectType Annotation<HTMLDivElement>[]
d.annotations();

// $ExpectType void
d.updateOptions({
    fillGraph: true,
    annotationClickHandler: (anotation, point, dygraph, event) => {
        // $ExpectType Annotation<HTMLDivElement>
        anotation;

        // $ExpectType Point<HTMLDivElement>
        point;

        // $ExpectType Dygraph<HTMLDivElement>
        dygraph;

        // $ExpectType MouseEvent
        event;
    },
    annotationDblClickHandler: (anotation, point, dygraph, event) => {
        // $ExpectType Annotation<HTMLDivElement>
        anotation;

        // $ExpectType Point<HTMLDivElement>
        point;

        // $ExpectType Dygraph<HTMLDivElement>
        dygraph;

        // $ExpectType MouseEvent
        event;
    },
    annotationMouseOverHandler: (anotation, point, dygraph, event) => {
        // $ExpectType Annotation<HTMLDivElement>
        anotation;

        // $ExpectType Point<HTMLDivElement>
        point;

        // $ExpectType Dygraph<HTMLDivElement>
        dygraph;

        // $ExpectType MouseEvent
        event;
    },
    annotationMouseOutHandler: (anotation, point, dygraph, event) => {
        // $ExpectType Annotation<HTMLDivElement>
        anotation;

        // $ExpectType Point<HTMLDivElement>
        point;

        // $ExpectType Dygraph<HTMLDivElement>
        dygraph;

        // $ExpectType MouseEvent
        event;
    },
    pointClickCallback: (event, point) => {
        // $ExpectType Readonly<Point<HTMLDivElement>>
        point;

        // $ExpectType MouseEvent
        event;
    },
});
