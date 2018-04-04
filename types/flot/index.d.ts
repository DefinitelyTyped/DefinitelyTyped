// Type definitions for Flot
// Project: http://www.flotcharts.org/
// Definitions by:  Matt Burland <https://github.com/burlandm>
//                  Timo Mühlbach <https://github.com/Anticom>
//                  Ariel Kuechler <https://github.com/admiralsmaster> 
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3


/// <reference types="jquery" />

declare namespace jquery.flot {
    interface plotOptions {
        colors?: any[];
        series?: seriesOptions;
        legend?: legendOptions;
        xaxis?: axisOptions;
        yaxis?: axisOptions;
        xaxes?: axisOptions[];
        yaxes?: axisOptions[];
        grid?: gridOptions;
        interaction?: interaction;
        hooks?: hooks;
    }

    interface hooks {
        processOptions?: { (plot: plot, options: plotOptions): void; } [];
        processRawData?: { (plot: plot, series: dataSeries, data: any[], datapoints: datapoints): void; }[];
        processDatapoints?: { (plot: plot, series: dataSeries, datapoints: datapoints): void; }[];
        processOffset?: { (plot: plot, offset: canvasPoint): void; }[];
        drawBackground?: { (plot: plot, context: CanvasRenderingContext2D): void; }[];
        drawSeries?: { (plot: plot, context: CanvasRenderingContext2D, series: dataSeries): void; }[];
        draw?: { (plot: plot, context: CanvasRenderingContext2D): void; }[];
        bindEvents?: { (plot: plot, eventHolder: JQuery): void; }[];
        drawOverlay?: { (plot: plot, context: CanvasRenderingContext2D): void; }[];
        shutdown?: { (plot: plot, eventHolder: JQuery): void; }[];
    }

    interface interaction {
        redrawOverlayInterval?: number;
    }

    interface gridOptions {
        show?: boolean;
        aboveData?: boolean;
        color?: any;                // color
        backgroundColor?: any;      //color/gradient or null
        margin?: any;                // number or margin object
        labelMargin?: number;
        axisMargin?: number;
        markings?: any;             //array of markings or (fn: axes -> array of markings)
        borderWidth?: any;          // number or width object
        borderColor?: any;          // color or null
        minBorderMargin?: number;       // or null
        clickable?: boolean;
        hoverable?: boolean;
        autoHighlight?: boolean;
        mouseActiveRadius?: number;
        tickColor?: any;
        markingsColor?: any;
        markingsLineWidth?: number;
    }

    interface legendOptions {
        show?: boolean;
        labelFormatter?: (label: string, series: any) => string; //  null or (fn: string, series object -> string)
        labelBoxBorderColor?: any;   //color
        noColumns?: number;
        position?: string;           //"ne" or "nw" or "se" or "sw"
        margin?: any;                //number of pixels or [x margin, y margin]
        backgroundColor?: any;       //null or color
        backgroundOpacity?: number;  // between 0 and 1
        container?: JQuery;         // null or jQuery object/DOM element/jQuery expression
        sorted?: any;                //null/false, true, "ascending", "descending" or a comparator
    }

    interface seriesOptions {
        color?: any;            // color or number
        label?: string;
        lines?: linesOptions;
        bars?: barsOptions;
        points?: pointsOptions;
        xaxis?: number;
        yaxis?: number;
        clickable?: boolean;
        hoverable?: boolean;
        shadowSize?: number;
        highlightColor?: any;
    }

    interface dataSeries extends seriesOptions {
        data: any[];
    }

    interface axisOptions {
        show?: boolean;            // null or true/false
        position?: string;      // "bottom" or "top" or "left" or "right"
        mode?: string;          // "time"
        monthNames?: string[];  // array of month names

        color?: any;            // null or color spec
        tickColor?: any;        // null or color spec
        font?: any;             // null or font spec object

        min?: number;
        max?: number;
        autoscaleMargin?: number;

        transform?: (v: number) => number;              // null or fn: number -> number
        inverseTransform?: (v: number) => number;       // null or fn: number -> number

        ticks?: any;                                    // null or number or ticks array or (fn: axis -> ticks array)
        tickSize?: any;                                 // number or array
        minTickSize?: any;                              // number or array
        tickFormatter?: (t: number, a?: axis) => string;                            // (fn: number, object -> string) or string
        tickDecimals?: number;

        labelWidth?: number;
        labelHeight?: number;
        reserveSpace?: boolean;

        tickLength?: number;

        alignTicksWithAxis?: number;
        
        timezone?: string;                      // "browser" or timezone (only makes sense for mode: "time")
        timeformat?: string;                    // null or format string
        twelveHourClock?: boolean;
    }

    interface seriesTypeBase {
        show?: boolean;
        lineWidth?: number;
        fill?: any;              //boolean or number
        fillColor?: any;         //null or color/gradient
    }

    interface linesOptions extends seriesTypeBase {
        steps?: boolean;
    }

    interface barsOptions extends seriesTypeBase {
        barWidth?: number;
        align?: string;
        horizontal?: boolean;
    }

    interface pointsOptions extends seriesTypeBase {
        radius?: number;
        symbol?: any;
    }

    interface gradient {
        colors: any[];
    }

    interface item {
        datapoint: number[];        // the point, e.g. [0, 2]
        dataIndex: number;          // the index of the point in the data array
        series: dataSeries;             //the series object
        seriesIndex: number;        //the index of the series
        pageX: number;
        pageY: number;              //the global screen coordinates of the point
    }

    interface datapoints {
        points: number[];
        pointsize: number;
        format: datapointFormat[];
    }

    interface datapointFormat {
        x?: boolean;
        y?: boolean;
        number: boolean;
        required: boolean;
        defaultValue?: number;
    }

    interface point {
        x: number;
        y: number;
    }

    interface offset {
        left: number;
        top: number;
    }

    interface canvasPoint {
        top: number;
        left: number;
        bottom?: number;
        right?: number;
    }

    interface axes {
        xaxis: axis;
        yaxis: axis;
        x2axis?: axis;
        y2axis?: axis;
    }

    interface axis extends axisOptions {
        options: axisOptions;
        p2c(point: point):canvasPoint;
        c2p(canvasPoint: canvasPoint):point;
    }

    interface plugin {
        init(options: plotOptions): any;
        options?: any;
        name?: string;
        version?: string;
    }

    interface plot {
        highlight(series: dataSeries, datapoint: item): void;
        unhighlight(): void;
        unhighlight(series: dataSeries, datapoint: item): void;
        setData(data: any): void;
        setupGrid(): void;
        draw(): void;
        triggerRedrawOverlay(): void;
        width(): number;
        height(): number;
        offset(): JQueryCoordinates;
        pointOffset(point: point): offset;
        resize(): void;
        shutdown(): void;
        getData(): dataSeries[];
        getAxes(): axes;
        getXAxes(): axis[];
        getYAxes(): axis[];
        getPlaceholder(): JQuery;
        getCanvas(): HTMLCanvasElement;
        getPlotOffset(): canvasPoint;
        getOptions(): plotOptions;
    }

    interface plotStatic {
        (placeholder: JQuery, data: dataSeries[], options?: plotOptions): plot;
        (placeholder: JQuery, data: any[], options?: plotOptions): plot;
        plugins: plugin[];
    }
}

interface JQueryStatic {
    plot: jquery.flot.plotStatic;
}
