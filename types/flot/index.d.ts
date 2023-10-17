/// <reference types="jquery" />

declare namespace jquery.flot {
    interface plotOptions {
        colors?: any[] | undefined;
        series?: seriesOptions | undefined;
        legend?: legendOptions | undefined;
        xaxis?: axisOptions | undefined;
        yaxis?: axisOptions | undefined;
        xaxes?: axisOptions[] | undefined;
        yaxes?: axisOptions[] | undefined;
        grid?: gridOptions | undefined;
        interaction?: interaction | undefined;
        hooks?: hooks | undefined;
    }

    interface hooks {
        processOptions?: { (plot: plot, options: plotOptions): void }[] | undefined;
        processRawData?: { (plot: plot, series: dataSeries, data: any[], datapoints: datapoints): void }[] | undefined;
        processDatapoints?: { (plot: plot, series: dataSeries, datapoints: datapoints): void }[] | undefined;
        processOffset?: { (plot: plot, offset: canvasPoint): void }[] | undefined;
        drawBackground?: { (plot: plot, context: CanvasRenderingContext2D): void }[] | undefined;
        drawSeries?: { (plot: plot, context: CanvasRenderingContext2D, series: dataSeries): void }[] | undefined;
        draw?: { (plot: plot, context: CanvasRenderingContext2D): void }[] | undefined;
        bindEvents?: { (plot: plot, eventHolder: JQuery): void }[] | undefined;
        drawOverlay?: { (plot: plot, context: CanvasRenderingContext2D): void }[] | undefined;
        shutdown?: { (plot: plot, eventHolder: JQuery): void }[] | undefined;
    }

    interface interaction {
        redrawOverlayInterval?: number | undefined;
    }

    interface gridOptions {
        show?: boolean | undefined;
        aboveData?: boolean | undefined;
        color?: any; // color
        backgroundColor?: any; // color/gradient or null
        margin?: any; // number or margin object
        labelMargin?: number | undefined;
        axisMargin?: number | undefined;
        markings?: any; // array of markings or (fn: axes -> array of markings)
        borderWidth?: any; // number or width object
        borderColor?: any; // color or null
        minBorderMargin?: number | undefined; // or null
        clickable?: boolean | undefined;
        hoverable?: boolean | undefined;
        autoHighlight?: boolean | undefined;
        mouseActiveRadius?: number | undefined;
        tickColor?: any;
        markingsColor?: any;
        markingsLineWidth?: number | undefined;
    }

    interface legendOptions {
        show?: boolean | undefined;
        labelFormatter?: ((label: string, series: any) => string) | undefined; //  null or (fn: string, series object -> string)
        labelBoxBorderColor?: any; // color
        noColumns?: number | undefined;
        position?: string | undefined; // "ne" or "nw" or "se" or "sw"
        margin?: any; // number of pixels or [x margin, y margin]
        backgroundColor?: any; // null or color
        backgroundOpacity?: number | undefined; // between 0 and 1
        container?: JQuery | undefined; // null or jQuery object/DOM element/jQuery expression
        sorted?: any; // null/false, true, "ascending", "descending" or a comparator
    }

    interface seriesOptions {
        color?: any; // color or number
        label?: string | undefined;
        lines?: linesOptions | undefined;
        bars?: barsOptions | undefined;
        points?: pointsOptions | undefined;
        xaxis?: number | undefined;
        yaxis?: number | undefined;
        clickable?: boolean | undefined;
        hoverable?: boolean | undefined;
        shadowSize?: number | undefined;
        highlightColor?: any;
    }

    interface dataSeries extends seriesOptions {
        data: any[];
    }

    interface axisOptions {
        show?: boolean | undefined; // null or true/false
        position?: string | undefined; // "bottom" or "top" or "left" or "right"
        mode?: string | undefined; // "time"
        monthNames?: string[] | undefined; // array of month names

        color?: any; // null or color spec
        tickColor?: any; // null or color spec
        font?: any; // null or font spec object

        min?: number | undefined;
        max?: number | undefined;
        autoscaleMargin?: number | undefined;

        transform?: ((v: number) => number) | undefined; // null or fn: number -> number
        inverseTransform?: ((v: number) => number) | undefined; // null or fn: number -> number

        ticks?: any; // null or number or ticks array or (fn: axis -> ticks array)
        tickSize?: any; // number or array
        minTickSize?: any; // number or array
        tickFormatter?: ((t: number, a?: axis) => string) | undefined; // (fn: number, object -> string) or string
        tickDecimals?: number | undefined;

        labelWidth?: number | undefined;
        labelHeight?: number | undefined;
        reserveSpace?: boolean | undefined;

        tickLength?: number | undefined;

        alignTicksWithAxis?: number | undefined;

        timezone?: string | undefined; // "browser" or timezone (only makes sense for mode: "time")
        timeformat?: string | undefined; // null or format string
        twelveHourClock?: boolean | undefined;
    }

    interface seriesTypeBase {
        show?: boolean | undefined;
        lineWidth?: number | undefined;
        fill?: any; // boolean or number
        fillColor?: any; // null or color/gradient
    }

    interface linesOptions extends seriesTypeBase {
        steps?: boolean | undefined;
    }

    interface barsOptions extends seriesTypeBase {
        barWidth?: number | undefined;
        align?: string | undefined;
        horizontal?: boolean | undefined;
    }

    interface pointsOptions extends seriesTypeBase {
        radius?: number | undefined;
        symbol?: any;
    }

    interface gradient {
        colors: any[];
    }

    interface item {
        datapoint: number[]; // the point, e.g. [0, 2]
        dataIndex: number; // the index of the point in the data array
        series: dataSeries; // the series object
        seriesIndex: number; // the index of the series
        pageX: number;
        pageY: number; // the global screen coordinates of the point
    }

    interface datapoints {
        points: number[];
        pointsize: number;
        format: datapointFormat[];
    }

    interface datapointFormat {
        x?: boolean | undefined;
        y?: boolean | undefined;
        number: boolean;
        required: boolean;
        defaultValue?: number | undefined;
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
        bottom?: number | undefined;
        right?: number | undefined;
    }

    interface axes {
        xaxis: axis;
        yaxis: axis;
        x2axis?: axis | undefined;
        y2axis?: axis | undefined;
    }

    interface axis extends axisOptions {
        options: axisOptions;
        p2c(point: point): canvasPoint;
        c2p(canvasPoint: canvasPoint): point;
    }

    interface plugin {
        init(options: plotOptions): any;
        options?: any;
        name?: string | undefined;
        version?: string | undefined;
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
