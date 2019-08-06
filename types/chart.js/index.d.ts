// Type definitions for Chart.js 2.7
// Project: https://github.com/nnnick/Chart.js, https://www.chartjs.org
// Definitions by: Alberto Nuti <https://github.com/anuti>
//                 Fabien Lavocat <https://github.com/FabienLavocat>
//                 KentarouTakeda <https://github.com/KentarouTakeda>
//                 Larry Bahr <https://github.com/larrybahr>
//                 Daniel Luz <https://github.com/mernen>
//                 Joseph Page <https://github.com/josefpaij>
//                 Dan Manastireanu <https://github.com/danmana>
//                 Guillaume Rodriguez <https://github.com/guillaume-ro-fr>
//                 Simon Archer <https://github.com/archy-bold>
//                 Ken Elkabany <https://github.com/braincore>
//                 Francesco Benedetto <https://github.com/frabnt>
//                 Alexandros Dorodoulis <https://github.com/alexdor>
//                 Manuel Heidrich <https://github.com/mahnuh>
//                 Conrad Holtzhausen <https://github.com/Conrad777>
//                 Adrián Caballero <https://github.com/adripanico>
//                 wertzui <https://github.com/wertzui>
//                 Martin Trobäck <https://github.com/lekoaf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare class Chart {
    static readonly Chart: typeof Chart;
    constructor(
        context: string | CanvasRenderingContext2D | HTMLCanvasElement | ArrayLike<CanvasRenderingContext2D | HTMLCanvasElement>,
        options: Chart.ChartConfiguration
    );
    config: Chart.ChartConfiguration;
    data: Chart.ChartData;
    destroy: () => {};
    update: ({duration, lazy, easing}?: Chart.ChartUpdateProps) => {};
    render: ({duration, lazy, easing}?: Chart.ChartRenderProps) => {};
    stop: () => {};
    resize: () => {};
    clear: () => {};
    toBase64Image: () => string;
    generateLegend: () => {};
    getElementAtEvent: (e: any) => [{}];
    getElementsAtEvent: (e: any) => Array<{}>;
    getDatasetAtEvent: (e: any) => Array<{}>;
    getDatasetMeta: (index: number) => Meta;
    ctx: CanvasRenderingContext2D | null;
    canvas: HTMLCanvasElement | null;
    width: number | null;
    height: number | null;
    aspectRatio: number | null;
    options: Chart.ChartOptions;
    chartArea: Chart.ChartArea;
    static pluginService: PluginServiceStatic;
    static plugins: PluginServiceStatic;

    static defaults: {
        global: Chart.ChartOptions & Chart.ChartFontOptions;
        [key: string]: any;
    };

    static controllers: {
        [key: string]: any;
    };

    static helpers: {
        [key: string]: any;
    };

    // Tooltip Static Options
    static Tooltip: Chart.ChartTooltipsStaticConfiguration;
}
declare class PluginServiceStatic {
    register(plugin: Chart.PluginServiceGlobalRegistration & Chart.PluginServiceRegistrationOptions): void;
    unregister(plugin: Chart.PluginServiceGlobalRegistration & Chart.PluginServiceRegistrationOptions): void;
}

interface Meta {
    type: Chart.ChartType;
    data: MetaData[];
    dataset?: Chart.ChartDataSets;
    controller: { [key: string]: any; };
    hidden?: boolean;
    total?: string;
    xAxisID?: string;
    yAxisID?: string;
    "$filler"?: { [key: string]: any; };
}

interface MetaData {
    _chart: Chart;
    _datasetIndex: number;
    _index: number;
    _model: Model;
    _start?: any;
    _view: Model;
    _xScale: Chart.ChartScales;
    _yScale: Chart.ChartScales;
    hidden?: boolean;
}

interface Model {
    backgroundColor: string;
    borderColor: string;
    borderWidth?: number;
    controlPointNextX: number;
    controlPointNextY: number;
    controlPointPreviousX: number;
    controlPointPreviousY: number;
    hitRadius: number;
    pointStyle: string;
    radius: string;
    skip?: boolean;
    steppedLine?: undefined;
    tension: number;
    x: number;
    y: number;
    base: number;
    head: number;
}

declare namespace Chart {
    type ChartType = 'line' | 'bar' | 'horizontalBar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'pie' | 'scatter';

    type TimeUnit = 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';

    type ScaleType = 'category' | 'linear' | 'logarithmic' | 'time' | 'radialLinear';

    type PointStyle = 'circle' | 'cross' | 'crossRot' | 'dash' | 'line' | 'rect' | 'rectRounded' | 'rectRot' | 'star' | 'triangle';

    type PositionType = 'left' | 'right' | 'top' | 'bottom';

    type InteractionMode = 'point' | 'nearest' | 'single' | 'label' | 'index' | 'x-axis' | 'dataset' | 'x' | 'y';

    type Easing = 'linear' | 'easeInQuad' | 'easeOutQuad' | 'easeInOutQuad' | 'easeInCubic' | 'easeOutCubic' | 'easeInOutCubic' |
        'easeInQuart' | 'easeOutQuart' | 'easeInOutQuart' | 'easeInQuint' | 'easeOutQuint' | 'easeInOutQuint' | 'easeInSine' | 'easeOutSine' |
        'easeInOutSine' | 'easeInExpo' | 'easeOutExpo' | 'easeInOutExpo' | 'easeInCirc' | 'easeOutCirc' | 'easeInOutCirc' | 'easeInElastic' |
        'easeOutElastic' | 'easeInOutElastic' | 'easeInBack' | 'easeOutBack' | 'easeInOutBack' | 'easeInBounce' | 'easeOutBounce' | 'easeInOutBounce';

    interface ChartArea {
        top: number;
        right: number;
        bottom: number;
        left: number;
    }

    interface ChartLegendItem {
        text?: string;
        fillStyle?: string;
        hidden?: boolean;
        lineCap?: 'butt' | 'round' | 'square';
        lineDash?: number[];
        lineDashOffset?: number;
        lineJoin?: 'bevel' | 'round' | 'miter';
        lineWidth?: number;
        strokeStyle?: string;
        pointStyle?: PointStyle;
    }

    interface ChartLegendLabelItem extends ChartLegendItem {
        datasetIndex: number;
    }

    interface ChartTooltipItem {
        label?: string;
        value?: string;
        xLabel?: string | number;
        yLabel?: string | number;
        datasetIndex?: number;
        index?: number;
        x?: number;
        y?: number;
    }

    interface ChartTooltipLabelColor {
        borderColor: ChartColor;
        backgroundColor: ChartColor;
    }

    interface ChartTooltipCallback {
        beforeTitle?(item: ChartTooltipItem[], data: ChartData): string | string[];
        title?(item: ChartTooltipItem[], data: ChartData): string | string[];
        afterTitle?(item: ChartTooltipItem[], data: ChartData): string | string[];
        beforeBody?(item: ChartTooltipItem[], data: ChartData): string | string[];
        beforeLabel?(tooltipItem: ChartTooltipItem, data: ChartData): string | string[];
        label?(tooltipItem: ChartTooltipItem, data: ChartData): string | string[];
        labelColor?(tooltipItem: ChartTooltipItem, chart: Chart): ChartTooltipLabelColor;
        labelTextColor?(tooltipItem: ChartTooltipItem, chart: Chart): string;
        afterLabel?(tooltipItem: ChartTooltipItem, data: ChartData): string | string[];
        afterBody?(item: ChartTooltipItem[], data: ChartData): string | string[];
        beforeFooter?(item: ChartTooltipItem[], data: ChartData): string | string[];
        footer?(item: ChartTooltipItem[], data: ChartData): string | string[];
        afterFooter?(item: ChartTooltipItem[], data: ChartData): string | string[];
    }

    interface ChartAnimationParameter {
        chartInstance?: any;
        animationObject?: any;
    }

    interface ChartPoint {
        x?: number | string | Date;
        y?: number | string | Date;
        r?: number;
        t?: number | string | Date;
    }

    interface ChartConfiguration {
        type?: ChartType | string;
        data?: ChartData;
        options?: ChartOptions;
        plugins?: PluginServiceRegistrationOptions[];
    }

    interface ChartData {
        labels?: Array<string | string[]>;
        datasets?: ChartDataSets[];
    }

	interface RadialChartOptions extends ChartOptions {
		scale?: RadialLinearScale;
	}

    interface ChartSize {
        height: number;
        width: number;
    }

    interface ChartOptions {
        responsive?: boolean;
        responsiveAnimationDuration?: number;
        aspectRatio?: number;
        maintainAspectRatio?: boolean;
        events?: string[];
        legendCallback?(chart: Chart): string;
        onHover?(this: Chart, event: MouseEvent, activeElements: Array<{}>): any;
        onClick?(event?: MouseEvent, activeElements?: Array<{}>): any;
        onResize?(this: Chart, newSize: ChartSize): void;
        title?: ChartTitleOptions;
        legend?: ChartLegendOptions;
        tooltips?: ChartTooltipOptions;
        hover?: ChartHoverOptions;
        animation?: ChartAnimationOptions;
        elements?: ChartElementsOptions;
        layout?: ChartLayoutOptions;
        scales?: ChartScales;
        showLines?: boolean;
        spanGaps?: boolean;
        cutoutPercentage?: number;
        circumference?: number;
        rotation?: number;
        devicePixelRatio?: number;
        plugins?: ChartPluginsOptions;
    }

    interface ChartFontOptions {
        defaultFontColor?: ChartColor;
        defaultFontFamily?: string;
        defaultFontSize?: number;
        defaultFontStyle?: string;
    }

    interface ChartTitleOptions {
        display?: boolean;
        position?: PositionType;
        fullWidth?: boolean;
        fontSize?: number;
        fontFamily?: string;
        fontColor?: ChartColor;
        fontStyle?: string;
        padding?: number;
        text?: string | string[];
    }

    interface ChartLegendOptions {
        display?: boolean;
        position?: PositionType;
        fullWidth?: boolean;
        onClick?(event: MouseEvent, legendItem: ChartLegendLabelItem): void;
        onHover?(event: MouseEvent, legendItem: ChartLegendLabelItem): void;
        labels?: ChartLegendLabelOptions;
        reverse?: boolean;
    }

    interface ChartLegendLabelOptions {
        boxWidth?: number;
        fontSize?: number;
        fontStyle?: string;
        fontColor?: ChartColor;
        fontFamily?: string;
        padding?: number;
        generateLabels?(chart: Chart): ChartLegendLabelItem[];
        filter?(legendItem: ChartLegendLabelItem, data: ChartData): any;
        usePointStyle?: boolean;
    }

    interface ChartTooltipOptions {
        enabled?: boolean;
        custom?(a: any): void;
        mode?: InteractionMode;
        intersect?: boolean;
        backgroundColor?: ChartColor;
        titleFontFamily?: string;
        titleFontSize?: number;
        titleFontStyle?: string;
        titleFontColor?: ChartColor;
        titleSpacing?: number;
        titleMarginBottom?: number;
        bodyFontFamily?: string;
        bodyFontSize?: number;
        bodyFontStyle?: string;
        bodyFontColor?: ChartColor;
        bodySpacing?: number;
        footerFontFamily?: string;
        footerFontSize?: number;
        footerFontStyle?: string;
        footerFontColor?: ChartColor;
        footerSpacing?: number;
        footerMarginTop?: number;
        xPadding?: number;
        yPadding?: number;
        caretSize?: number;
        cornerRadius?: number;
        multiKeyBackground?: string;
        callbacks?: ChartTooltipCallback;
        filter?(item: ChartTooltipItem, data: ChartData): boolean;
        itemSort?(itemA: ChartTooltipItem, itemB: ChartTooltipItem): number;
        position?: string;
        caretPadding?: number;
        displayColors?: boolean;
        borderColor?: ChartColor;
        borderWidth?: number;
    }

    // NOTE: declare plugin options as interface instead of inline '{ [plugin: string]: any }'
    // to allow module augmentation in case some plugins want to strictly type their options.
    interface ChartPluginsOptions {
        [pluginId: string]: any;
    }

    interface ChartTooltipsStaticConfiguration {
        positioners: { [mode: string]: ChartTooltipPositioner };
    }

    type ChartTooltipPositioner = (elements: any[], eventPosition: Point) => Point;

    interface ChartHoverOptions {
        mode?: InteractionMode;
        animationDuration?: number;
        intersect?: boolean;
        onHover?(this: Chart, event: MouseEvent, activeElements: Array<{}>): any;
    }

    interface ChartAnimationObject {
        currentStep?: number;
        numSteps?: number;
        easing?: Easing;
        render?(arg: any): void;
        onAnimationProgress?(arg: any): void;
        onAnimationComplete?(arg: any): void;
    }

    interface ChartAnimationOptions {
        duration?: number;
        easing?: Easing;
        onProgress?(chart: any): void;
        onComplete?(chart: any): void;
        animateRotate?: boolean;
        animateScale?: boolean;
    }

    interface ChartElementsOptions {
        point?: ChartPointOptions;
        line?: ChartLineOptions;
        arc?: ChartArcOptions;
        rectangle?: ChartRectangleOptions;
    }

    interface ChartArcOptions {
        backgroundColor?: ChartColor;
        borderColor?: ChartColor;
        borderWidth?: number;
    }

    interface ChartLineOptions {
        cubicInterpolationMode?: 'default' | 'monotone';
        tension?: number;
        backgroundColor?: ChartColor;
        borderWidth?: number;
        borderColor?: ChartColor;
        borderCapStyle?: string;
        borderDash?: any[];
        borderDashOffset?: number;
        borderJoinStyle?: string;
        capBezierPoints?: boolean;
        fill?: 'zero' | 'top' | 'bottom' | boolean;
        stepped?: boolean;
    }

    interface ChartPointOptions {
        radius?: number;
        pointStyle?: PointStyle;
        backgroundColor?: ChartColor;
        borderWidth?: number;
        borderColor?: ChartColor;
        hitRadius?: number;
        hoverRadius?: number;
        hoverBorderWidth?: number;
    }

    interface ChartRectangleOptions {
        backgroundColor?: ChartColor;
        borderWidth?: number;
        borderColor?: ChartColor;
        borderSkipped?: string;
    }

    interface ChartLayoutOptions {
        padding?: ChartLayoutPaddingObject | number;
    }

    interface ChartLayoutPaddingObject {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    }

    interface GridLineOptions {
        display?: boolean;
        color?: ChartColor;
        borderDash?: number[];
        borderDashOffset?: number;
        lineWidth?: number | number[];
        drawBorder?: boolean;
        drawOnChartArea?: boolean;
        drawTicks?: boolean;
        tickMarkLength?: number;
        zeroLineWidth?: number;
        zeroLineColor?: ChartColor;
        zeroLineBorderDash?: number[];
        zeroLineBorderDashOffset?: number;
        offsetGridLines?: boolean;
    }

    interface ScaleTitleOptions {
        display?: boolean;
        labelString?: string;
        lineHeight?: number | string;
        fontColor?: ChartColor;
        fontFamily?: string;
        fontSize?: number;
        fontStyle?: string;
        padding?: ChartLayoutPaddingObject | number;
    }

    interface TickOptions extends NestedTickOptions {
        minor?: NestedTickOptions | false;
        major?: NestedTickOptions | false;
    }

    interface NestedTickOptions {
        autoSkip?: boolean;
        autoSkipPadding?: number;
        backdropColor?: ChartColor;
        backdropPaddingX?: number;
        backdropPaddingY?: number;
        beginAtZero?: boolean;
        callback?(value: any, index: any, values: any): string | number;
        display?: boolean;
        fontColor?: ChartColor;
        fontFamily?: string;
        fontSize?: number;
        fontStyle?: string;
        labelOffset?: number;
        lineHeight?: number;
        max?: any;
        maxRotation?: number;
        maxTicksLimit?: number;
        min?: any;
        minRotation?: number;
        mirror?: boolean;
        padding?: number;
        reverse?: boolean;
        showLabelBackdrop?: boolean;
        source?: 'auto' | 'data' | 'labels';
        stepSize?: number;
        suggestedMax?: number;
        suggestedMin?: number;
    }

    interface AngleLineOptions {
        display?: boolean;
        color?: ChartColor;
        lineWidth?: number;
    }

    interface PointLabelOptions {
        callback?(arg: any): any;
        fontColor?: ChartColor;
        fontFamily?: string;
        fontSize?: number;
        fontStyle?: string;
    }

    interface LinearTickOptions extends TickOptions {
        maxTicksLimit?: number;
        stepSize?: number;
        precision?: number;
        suggestedMin?: number;
        suggestedMax?: number;
    }

    // tslint:disable-next-line no-empty-interface
    interface LogarithmicTickOptions extends TickOptions {
    }

    type ChartColor = string | CanvasGradient | CanvasPattern | string[];

    interface ChartDataSets {
        cubicInterpolationMode?: 'default' | 'monotone';
        backgroundColor?: ChartColor | ChartColor[];
        borderWidth?: number | number[];
        borderColor?: ChartColor | ChartColor[];
        borderCapStyle?: 'butt' | 'round' | 'square';
        borderDash?: number[];
        borderDashOffset?: number;
        borderJoinStyle?: 'bevel' | 'round' | 'miter';
        borderSkipped?: PositionType;
        data?: Array<number | null | undefined> | ChartPoint[];
        fill?: boolean | number | string;
        hoverBackgroundColor?: ChartColor | ChartColor[];
        hoverBorderColor?: ChartColor | ChartColor[];
        hoverBorderWidth?: number | number[];
        label?: string;
        lineTension?: number;
        steppedLine?: 'before' | 'after' | 'middle' | boolean;
        pointBorderColor?: ChartColor | ChartColor[];
        pointBackgroundColor?: ChartColor | ChartColor[];
        pointBorderWidth?: number | number[];
        pointRadius?: number | number[];
        pointHoverRadius?: number | number[];
        pointHitRadius?: number | number[];
        pointHoverBackgroundColor?: ChartColor | ChartColor[];
        pointHoverBorderColor?: ChartColor | ChartColor[];
        pointHoverBorderWidth?: number | number[];
        pointStyle?: PointStyle | HTMLImageElement | HTMLCanvasElement | Array<PointStyle | HTMLImageElement | HTMLCanvasElement>;
        xAxisID?: string;
        yAxisID?: string;
        type?: ChartType | string;
        hidden?: boolean;
        hideInLegendAndTooltip?: boolean;
        showLine?: boolean;
        stack?: string;
        spanGaps?: boolean;
    }

    interface ChartScales {
        type?: ScaleType | string;
        display?: boolean;
        position?: PositionType | string;
        gridLines?: GridLineOptions;
        scaleLabel?: ScaleTitleOptions;
        ticks?: TickOptions;
        xAxes?: ChartXAxe[];
        yAxes?: ChartYAxe[];
    }

    interface CommonAxe {
        bounds?: string;
        type?: ScaleType | string;
        display?: boolean;
        id?: string;
        stacked?: boolean;
        position?: string;
        ticks?: TickOptions;
        gridLines?: GridLineOptions;
        barThickness?: number | "flex";
        maxBarThickness?: number;
        scaleLabel?: ScaleTitleOptions;
        time?: TimeScale;
        offset?: boolean;
        beforeUpdate?(scale?: any): void;
        beforeSetDimension?(scale?: any): void;
        beforeDataLimits?(scale?: any): void;
        beforeBuildTicks?(scale?: any): void;
        beforeTickToLabelConversion?(scale?: any): void;
        beforeCalculateTickRotation?(scale?: any): void;
        beforeFit?(scale?: any): void;
        afterUpdate?(scale?: any): void;
        afterSetDimension?(scale?: any): void;
        afterDataLimits?(scale?: any): void;
        afterBuildTicks?(scale?: any): void;
        afterTickToLabelConversion?(scale?: any): void;
        afterCalculateTickRotation?(scale?: any): void;
        afterFit?(scale?: any): void;
    }

    interface ChartXAxe extends CommonAxe {
        categoryPercentage?: number;
        barPercentage?: number;
        distribution?: 'linear' | 'series';
    }

    // tslint:disable-next-line no-empty-interface
    interface ChartYAxe extends CommonAxe {
    }

    interface LinearScale extends ChartScales {
        ticks?: LinearTickOptions;
    }

    interface LogarithmicScale extends ChartScales {
        ticks?: LogarithmicTickOptions;
    }

    interface TimeDisplayFormat {
        millisecond?: string;
        second?: string;
        minute?: string;
        hour?: string;
        day?: string;
        week?: string;
        month?: string;
        quarter?: string;
        year?: string;
    }

    interface TimeScale extends ChartScales {
        displayFormats?: TimeDisplayFormat;
        isoWeekday?: boolean;
        max?: string;
        min?: string;
        parser?: string | ((arg: any) => any);
        round?: TimeUnit;
        tooltipFormat?: string;
        unit?: TimeUnit;
        unitStepSize?: number;
        stepSize?: number;
        minUnit?: TimeUnit;
    }

    interface RadialLinearScale extends LinearScale {
        lineArc?: boolean;
        angleLines?: AngleLineOptions;
        pointLabels?: PointLabelOptions;
        ticks?: TickOptions;
    }

    interface Point {
        x: number;
        y: number;
    }

    interface PluginServiceGlobalRegistration {
        id?: string;
    }

    interface PluginServiceRegistrationOptions {
        beforeInit?(chartInstance: Chart, options?: any): void;
        afterInit?(chartInstance: Chart, options?: any): void;

        beforeUpdate?(chartInstance: Chart, options?: any): void;
        afterUpdate?(chartInstance: Chart, options?: any): void;

        beforeLayout?(chartInstance: Chart, options?: any): void;
        afterLayout?(chartInstance: Chart, options?: any): void;

        beforeDatasetsUpdate?(chartInstance: Chart, options?: any): void;
        afterDatasetsUpdate?(chartInstance: Chart, options?: any): void;

        beforeDatasetUpdate?(chartInstance: Chart, options?: any): void;
        afterDatasetUpdate?(chartInstance: Chart, options?: any): void;

        // This is called at the start of a render. It is only called once, even if the animation will run for a number of frames. Use beforeDraw or afterDraw
        // to do something on each animation frame
        beforeRender?(chartInstance: Chart, options?: any): void;
        afterRender?(chartInstance: Chart, options?: any): void;

        // Easing is for animation
        beforeDraw?(chartInstance: Chart, easing: Easing, options?: any): void;
        afterDraw?(chartInstance: Chart, easing: Easing, options?: any): void;

        // Before the datasets are drawn but after scales are drawn
        beforeDatasetsDraw?(chartInstance: Chart, easing: Easing, options?: any): void;
        afterDatasetsDraw?(chartInstance: Chart, easing: Easing, options?: any): void;

        beforeDatasetDraw?(chartInstance: Chart, easing: Easing, options?: any): void;
        afterDatasetDraw?(chartInstance: Chart, easing: Easing, options?: any): void;

        // Called before drawing the `tooltip`. If any plugin returns `false`,
        // the tooltip drawing is cancelled until another `render` is triggered.
        beforeTooltipDraw?(chartInstance: Chart, tooltipData?: any, options?: any): void;
        // Called after drawing the `tooltip`. Note that this hook will not,
        // be called if the tooltip drawing has been previously cancelled.
        afterTooltipDraw?(chartInstance: Chart, tooltipData?: any, options?: any): void;

        // Called when an event occurs on the chart
        beforeEvent?(chartInstance: Chart, event: Event, options?: any): void;
        afterEvent?(chartInstance: Chart, event: Event, options?: any): void;

        resize?(chartInstance: Chart, newChartSize: ChartSize, options?: any): void;
        destroy?(chartInstance: Chart): void;

        /** @deprecated since version 2.5.0. Use `afterLayout` instead. */
        afterScaleUpdate?(chartInstance: Chart, options?: any): void;
    }

    interface ChartUpdateProps {
        duration?: number;
        lazy?: boolean;
        easing?: Easing;
    }

    interface ChartRenderProps {
        duration?: number;
        lazy?: boolean;
        easing?: Easing;
    }
}

export = Chart;
export as namespace Chart;
