// Type definitions for Chart.js 2.9
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
//                 Elian Cordoba <https://github.com/ElianCordoba>
//                 Takuya Uehara <https://github.com/indigolain>
//                 Ricardo Mello <https://github.com/ricardo-mello>
//                 Ray Nicholus <https://github.com/rnicholus>
//                 Oscar Cabrera <https://github.com/mrjack88>
//                 Carlos Anoceto <https://github.com/canoceto>
//                 Nobuhiko Futagami <https://github.com/nobu222>
//                 Marco Ru <https://github.com/Marcoru97>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Moment } from 'moment';

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
    stop: () => Chart;
    resize: () => Chart;
    clear: () => Chart;
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
        global: Chart.ChartOptions & Chart.ChartFontOptions & {
            tooltips: Chart.ChartTooltipOptions
        };
        [key: string]: any;
    };

    static controllers: {
        [key: string]: any;
    };

    static helpers: {
        [key: string]: any;
    };

    static platform: {
        disableCSSInjection: boolean
    };

    // Tooltip Static Options
    static Tooltip: Chart.ChartTooltipsStaticConfiguration;

    static readonly instances: {
        [key: string]: Chart;
    };
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

// NOTE: This model is generic with a bunch of optional properties to represent all types of chart models.
// Each chart type defines their own unique model structure so some of these optional properties
// might always have values depending on the chart type.
interface Model {
    backgroundColor: string;
    borderAlign?: Chart.BorderAlignment;
    borderColor: string;
    borderWidth?: number;
    circumference?: number;
    controlPointNextX: number;
    controlPointNextY: number;
    controlPointPreviousX: number;
    controlPointPreviousY: number;
    endAngle?: number;
    hitRadius: number;
    innerRadius?: number;
    outerRadius?: number;
    pointStyle: string;
    radius: string;
    skip?: boolean;
    startAngle?: number;
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

    type PositionType = 'left' | 'right' | 'top' | 'bottom' | 'chartArea';

    type InteractionMode = 'point' | 'nearest' | 'single' | 'label' | 'index' | 'x-axis' | 'dataset' | 'x' | 'y';

    type Easing = 'linear' | 'easeInQuad' | 'easeOutQuad' | 'easeInOutQuad' | 'easeInCubic' | 'easeOutCubic' | 'easeInOutCubic' |
        'easeInQuart' | 'easeOutQuart' | 'easeInOutQuart' | 'easeInQuint' | 'easeOutQuint' | 'easeInOutQuint' | 'easeInSine' | 'easeOutSine' |
        'easeInOutSine' | 'easeInExpo' | 'easeOutExpo' | 'easeInOutExpo' | 'easeInCirc' | 'easeOutCirc' | 'easeInOutCirc' | 'easeInElastic' |
        'easeOutElastic' | 'easeInOutElastic' | 'easeInBack' | 'easeOutBack' | 'easeInOutBack' | 'easeInBounce' | 'easeOutBounce' | 'easeInOutBounce';

    type TextAlignment = 'left' | 'center' | 'right';

    type BorderAlignment = 'center' | 'inner';

    type BorderWidth = number | { [key in PositionType]?: number };

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
        index?: number;
        lineCap?: 'butt' | 'round' | 'square';
        lineDash?: number[];
        lineDashOffset?: number;
        lineJoin?: 'bevel' | 'round' | 'miter';
        lineWidth?: number;
        strokeStyle?: string;
        pointStyle?: PointStyle;
    }

    interface ChartLegendLabelItem extends ChartLegendItem {
        datasetIndex?: number;
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
        x?: number | string | Date | Moment;
        y?: number | string | Date | Moment;
        r?: number;
        t?: number | string | Date | Moment;
    }

    interface ChartConfiguration {
        type?: ChartType | string;
        data?: ChartData;
        options?: ChartOptions;
        plugins?: PluginServiceRegistrationOptions[];
    }

    interface ChartData {
        labels?: Array<string | string[] | number | number[] | Date | Date[] | Moment | Moment[]>;
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
        scale?: RadialLinearScale;
        scales?: ChartScales | LinearScale | LogarithmicScale | TimeScale;
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
        align?: 'center' | 'end' | 'start';
        display?: boolean;
        position?: PositionType;
        fullWidth?: boolean;
        onClick?(event: MouseEvent, legendItem: ChartLegendLabelItem): void;
        onHover?(event: MouseEvent, legendItem: ChartLegendLabelItem): void;
        onLeave?(event: MouseEvent, legendItem: ChartLegendLabelItem): void;
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
        custom?: (tooltipModel: ChartTooltipModel) => void;
        mode?: InteractionMode;
        intersect?: boolean;
        backgroundColor?: ChartColor;
        titleAlign?: TextAlignment;
        titleFontFamily?: string;
        titleFontSize?: number;
        titleFontStyle?: string;
        titleFontColor?: ChartColor;
        titleSpacing?: number;
        titleMarginBottom?: number;
        bodyAlign?: TextAlignment;
        bodyFontFamily?: string;
        bodyFontSize?: number;
        bodyFontStyle?: string;
        bodyFontColor?: ChartColor;
        bodySpacing?: number;
        footerAlign?: TextAlignment;
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
        itemSort?(itemA: ChartTooltipItem, itemB: ChartTooltipItem, data?: ChartData): number;
        position?: string;
        caretPadding?: number;
        displayColors?: boolean;
        borderColor?: ChartColor;
        borderWidth?: number;
    }

    interface ChartTooltipModel {
        afterBody: string[];
        backgroundColor: string;
        beforeBody: string[];
        body: ChartTooltipModelBody[];
        bodyFontColor: string;
        bodyFontSize: number;
        bodySpacing: number;
        borderColor: string;
        borderWidth: number;
        caretPadding: number;
        caretSize: number;
        caretX: number;
        caretY: number;
        cornerRadius: number;
        dataPoints: ChartTooltipItem[];
        displayColors: boolean;
        footer: string[];
        footerFontColor: string;
        footerFontSize: number;
        footerMarginTop: number;
        footerSpacing: number;
        height: number;
        labelColors: string[];
        labelTextColors: string[];
        legendColorBackground: string;
        opacity: number;
        title: string[];
        titleFontColor: string;
        titleFontSize: number;
        titleMarginBottom: number;
        titleSpacing: number;
        width: number;
        x: number;
        xAlign: string;
        xPadding: number;
        y: number;
        yAlign: string;
        yPadding: number;
        _bodyAlign: string;
        _bodyFontFamily: string;
        _bodyFontStyle: string;
        _footerAlign: string;
        _footerFontFamily: string;
        _footerFontStyle: string;
        _titleAlign: string;
        _titleFontFamily: string;
        _titleFontStyle: string;
    }

    interface ChartTooltipModelBody {
        before: string[];
        lines: string[];
        after: string[];
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
        circular?: boolean;
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
        z?: number;
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
        major?: MajorTickOptions | false;
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
        /**
         * The number of ticks to examine when deciding how many labels will fit.
         * Setting a smaller value will be faster, but may be less accurate
         * when there is large variability in label length.
         * Deault: `ticks.length`
         */
        sampleSize?: number;
        showLabelBackdrop?: boolean;
        source?: 'auto' | 'data' | 'labels';
        stepSize?: number;
        suggestedMax?: number;
        suggestedMin?: number;
    }

    interface MajorTickOptions extends NestedTickOptions {
        enabled?: boolean;
    }

    interface AngleLineOptions {
        display?: boolean;
        color?: ChartColor;
        lineWidth?: number;
        borderDash?: number[];
        borderDashOffset?: number;
    }

    interface PointLabelOptions {
        callback?(arg: any): any;
        fontColor?: ChartColor;
        fontFamily?: string;
        fontSize?: number;
        fontStyle?: string;
        lineHeight?: number|string;
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

    type Scriptable<T> = (ctx: {
        chart?: Chart;
        dataIndex?: number;
        dataset?: ChartDataSets
        datasetIndex?: number;
    }) => T;

    interface ChartDataSets {
        cubicInterpolationMode?: 'default' | 'monotone';
        backgroundColor?: ChartColor | ChartColor[] | Scriptable<ChartColor>;
        barPercentage?: number;
        barThickness?: number | "flex";
        borderAlign?: BorderAlignment | BorderAlignment[] | Scriptable<BorderAlignment>;
        borderWidth?: BorderWidth | BorderWidth[] | Scriptable<BorderWidth>;
        borderColor?: ChartColor | ChartColor[] | Scriptable<ChartColor>;
        borderCapStyle?: 'butt' | 'round' | 'square';
        borderDash?: number[];
        borderDashOffset?: number;
        borderJoinStyle?: 'bevel' | 'round' | 'miter';
        borderSkipped?: PositionType | PositionType[] | Scriptable<PositionType>;
        categoryPercentage?: number;
        data?: Array<number | null | undefined> | ChartPoint[];
        fill?: boolean | number | string;
        hitRadius?: number | number[] | Scriptable<number>;
        hoverBackgroundColor?: ChartColor | ChartColor[] | Scriptable<ChartColor>;
        hoverBorderColor?: ChartColor | ChartColor[] | Scriptable<ChartColor>;
        hoverBorderWidth?: number | number[] | Scriptable<number>;
        hoverRadius?: number;
        label?: string;
        lineTension?: number;
        maxBarThickness?: number;
        minBarLength?: number;
        steppedLine?: 'before' | 'after' | 'middle' | boolean;
        order?: number;
        pointBorderColor?: ChartColor | ChartColor[] | Scriptable<ChartColor>;
        pointBackgroundColor?: ChartColor | ChartColor[] | Scriptable<ChartColor>;
        pointBorderWidth?: number | number[] | Scriptable<number>;
        pointRadius?: number | number[] | Scriptable<number>;
        pointRotation?: number | number[] | Scriptable<number>;
        pointHoverRadius?: number | number[] | Scriptable<number>;
        pointHitRadius?: number | number[] | Scriptable<number>;
        pointHoverBackgroundColor?: ChartColor | ChartColor[] | Scriptable<ChartColor>;
        pointHoverBorderColor?: ChartColor | ChartColor[] | Scriptable<ChartColor>;
        pointHoverBorderWidth?: number | number[] | Scriptable<number>;
        pointStyle?: PointStyle | HTMLImageElement | HTMLCanvasElement | Array<PointStyle | HTMLImageElement | HTMLCanvasElement> | Scriptable<PointStyle | HTMLImageElement | HTMLCanvasElement>;
        radius?: number | number[] | Scriptable<number>;
        rotation?: number | number[] | Scriptable<number>;
        xAxisID?: string;
        yAxisID?: string;
        type?: ChartType | string;
        hidden?: boolean;
        hideInLegendAndTooltip?: boolean;
        showLine?: boolean;
        stack?: string;
        spanGaps?: boolean;
        weight?: number;
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
        display?: boolean | string;
        id?: string;
        stacked?: boolean;
        position?: string;
        ticks?: TickOptions;
        gridLines?: GridLineOptions;
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

    interface RadialLinearScale {
        animate?: boolean;
        position?: PositionType;
        angleLines?: AngleLineOptions;
        pointLabels?: PointLabelOptions;
        ticks?: LinearTickOptions;
        display?: boolean;
        gridLines?: GridLineOptions;
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

    // Model used with the doughnut chart
    interface DoughnutModel {
        backgroundColor: ChartColor;
        borderAlign: BorderAlignment;
        borderColor: string;
        borderWidth: number;
        circumference: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
        startAngle: number;
        x: number;
        y: number;
    }
}

export = Chart;
export as namespace Chart;
