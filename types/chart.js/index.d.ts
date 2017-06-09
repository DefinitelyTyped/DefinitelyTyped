// Type definitions for Chart.js 2.4.0
// Project: https://github.com/nnnick/Chart.js
// Definitions by: Alberto Nuti <https://github.com/anuti>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery" />

declare class Chart {
    static readonly Chart: typeof Chart;
    constructor(
        context: string | JQuery | CanvasRenderingContext2D | HTMLCanvasElement | string[] | CanvasRenderingContext2D[] | HTMLCanvasElement[],
        options: Chart.ChartConfiguration
    );
    config: Chart.ChartConfiguration;
    data: Chart.ChartData;
    destroy: () => {};
    update: (duration?: any, lazy?: any) => {};
    render: (duration?: any, lazy?: any) => {};
    stop: () => {};
    resize: () => {};
    clear: () => {};
    toBase64: () => string;
    generateLegend: () => {};
    getElementAtEvent: (e: any) => {};
    getElementsAtEvent: (e: any) => {}[];
    getDatasetAtEvent: (e: any) => {}[];
    static pluginService: PluginServiceStatic;

    static defaults: {
        global: Chart.ChartOptions;
    }
}
declare class PluginServiceStatic {
    register(plugin?: PluginServiceRegistrationOptions): void;
}

declare interface PluginServiceRegistrationOptions {
    beforeInit?: (chartInstance: Chart) => void,
    afterInit?: (chartInstance: Chart) => void,

    resize?: (chartInstance: Chart, newChartSize: Size) => void,

    beforeUpdate?: (chartInstance: Chart) => void,
    afterScaleUpdate?: (chartInstance: Chart) => void,
    beforeDatasetsUpdate?: (chartInstance: Chart) => void,
    afterDatasetsUpdate?: (chartInstance: Chart) => void,
    afterUpdate?: (chartInstance: Chart) => void,

    // This is called at the start of a render. It is only called once, even if the animation will run for a number of frames. Use beforeDraw or afterDraw
    // to do something on each animation frame
    beforeRender?: (chartInstance: Chart) => void,

    // Easing is for animation
    beforeDraw?: (chartInstance: Chart, easing: string) => void,
    afterDraw?: (chartInstance: Chart, easing: string) => void,
    // Before the datasets are drawn but after scales are drawn
    beforeDatasetsDraw?: (chartInstance: Chart, easing: string) => void,
    afterDatasetsDraw?: (chartInstance: Chart, easing: string) => void,

    destroy?: (chartInstance: Chart) => void,

    // Called when an event occurs on the chart
    beforeEvent?: (chartInstance: Chart, event: Event) => void,
    afterEvent?: (chartInstance: Chart, event: Event) => void
}

declare interface Size {
    height: number;
    width: number;
}

declare namespace Chart {
    export type ChartType = 'line' | 'bar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble';

    export type TimeUnit = 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';

    export type ScaleType = 'category' | 'linear' | 'logarithmic' | 'time' | 'radialLinear';

    export type PositionType = 'left' | 'right' | 'top' | 'bottom';

    export interface ChartLegendItem {
        text?: string;
        fillStyle?: string;
        hidden?: boolean;
        lineCap?: string;
        lineDash?: number[];
        lineDashOffset?: number;
        lineJoin?: string;
        lineWidth?: number;
        strokeStyle?: string;
    }

    export interface ChartTooltipItem {
        xLabel?: string;
        yLabel?: string;
        datasetIndex?: number;
        index?: number;
    }

    export interface ChartTooltipCallback {
        beforeTitle?: (item?: ChartTooltipItem[], data?: any) => void;
        title?: (item?: ChartTooltipItem[], data?: any) => void;
        afterTitle?: (item?: ChartTooltipItem[], data?: any) => void;
        beforeBody?: (item?: ChartTooltipItem[], data?: any) => void;
        beforeLabel?: (tooltipItem?: ChartTooltipItem, data?: any) => void;
        label?: (tooltipItem?: ChartTooltipItem, data?: any) => void;
        afterLabel?: (tooltipItem?: ChartTooltipItem, data?: any) => void;
        afterBody?: (item?: ChartTooltipItem[], data?: any) => void;
        beforeFooter?: (item?: ChartTooltipItem[], data?: any) => void;
        footer?: (item?: ChartTooltipItem[], data?: any) => void;
        afterFooter?: (item?: ChartTooltipItem[], data?: any) => void;
    }

    export interface ChartAnimationParameter {
        chartInstance?: any;
        animationObject?: any;
    }

    export interface ChartPoint {
        x?: number | string | Date;
        y?: number;
    }

    export interface ChartConfiguration {
        type?: ChartType | string;
        data?: ChartData;
        options?: ChartOptions;
    }

    export interface ChartData {

    }

    export interface LinearChartData extends ChartData {
        labels?: string[];
        datasets?: ChartDataSets[];
    }

    export interface ChartOptions {
        responsive?: boolean;
        responsiveAnimationDuration?: number;
        maintainAspectRatio?: boolean;
        events?: string[];
        onClick?: (any?: any) => any;
        title?: ChartTitleOptions;
        legend?: ChartLegendOptions;
        tooltips?: ChartTooltipOptions;
        hover?: ChartHoverOptions;
        animation?: ChartAnimationOptions;
        elements?: ChartElementsOptions;
        scales?: ChartScales;
        cutoutPercentage?: number;
    }

    export interface ChartFontOptions {
        defaultFontColor?: ChartColor;
        defaultFontFamily?: string;
        defaultFontSize?: number;
        defaultFontStyle?: string;
    }

    export interface ChartTitleOptions {
        display?: boolean;
        position?: string;
        fullWdith?: boolean;
        fontSize?: number;
        fontFamily?: string;
        fontColor?: ChartColor;
        fontStyle?: string;
        padding?: number;
        text?: string;
    }

    export interface ChartLegendOptions {
        display?: boolean;
        position?: string;
        fullWidth?: boolean;
        onClick?: (event: any, legendItem: any) => void;
        labels?: ChartLegendLabelOptions;
    }

    export interface ChartLegendLabelOptions {
        boxWidth?: number;
        fontSize?: number;
        fontStyle?: number;
        fontColor?: ChartColor;
        fontFamily?: string;
        padding?: number;
        generateLabels?: (chart: any) => any;
    }

    export interface ChartTooltipOptions {
        enabled?: boolean;
        custom?: (a: any) => void;
        mode?: string;
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
    }

    export interface ChartHoverOptions {
        mode?: string;
        animationDuration?: number;
        onHover?: (active: any) => void;
    }

    export interface ChartAnimationObject {
        currentStep?: number;
        numSteps?: number;
        easing?: string;
        render?: (arg: any) => void;
        onAnimationProgress?: (arg: any) => void;
        onAnimationComplete?: (arg: any) => void;
    }

    export interface ChartAnimationOptions {
        duration?: number;
        easing?: string;
        onProgress?: (chart: any) => void;
        onComplete?: (chart: any) => void;
    }

    export interface ChartElementsOptions {
        point?: ChartPointOptions;
        line?: ChartLineOptions;
        arc?: ChartArcOptions;
        rectangle?: ChartRectangleOptions;
    }

    export interface ChartArcOptions {
        backgroundColor?: ChartColor;
        borderColor?: ChartColor;
        borderWidth?: number;
    }

    export interface ChartLineOptions {
        tension?: number;
        backgroundColor?: ChartColor;
        borderWidth?: number;
        borderColor?: ChartColor;
        borderCapStyle?: string;
        borderDash?: any[];
        borderDashOffset?: number;
        borderJoinStyle?: string;
    }

    export interface ChartPointOptions {
        radius?: number;
        pointStyle?: string;
        backgroundColor?: ChartColor;
        borderWidth?: number;
        borderColor?: ChartColor;
        hitRadius?: number;
        hoverRadius?: number;
        hoverBorderWidth?: number;
    }

    export interface ChartRectangleOptions {
        backgroundColor?: ChartColor;
        borderWidth?: number;
        borderColor?: ChartColor;
        borderSkipped?: string;
    }
    export interface GridLineOptions {
        display?: boolean;
        color?: ChartColor;
        lineWidth?: number;
        drawBorder?: boolean;
        drawOnChartArea?: boolean;
        drawticks?: boolean;
        tickMarkLength?: number;
        zeroLineWidth?: number;
        zeroLineColor?: ChartColor;
        offsetGridLines?: boolean;
    }

    export interface ScaleTitleOptions {
        display?: boolean;
        labelString?: string;
        fontColor?: ChartColor;
        fontFamily?: string;
        fontSize?: number;
        fontStyle?: string;
    }

    export interface TickOptions {
        autoSkip?: boolean;
        callback?: (value: any, index: any, values: any) => string;
        display?: boolean;
        fontColor?: ChartColor;
        fontFamily?: string;
        fontSize?: number;
        fontStyle?: string;
        labelOffset?: number;
        maxRotation?: number;
        minRotation?: number;
        mirror?: boolean;
        padding?: number;
        reverse?: boolean;
        min?: any;
        max?: any;
    }
    export interface AngleLineOptions {
        display?: boolean;
        color?: ChartColor;
        lineWidth?: number;
    }

    export interface PointLabelOptions {
        callback?: (arg: any) => any;
        fontColor?: ChartColor;
        fontFamily?: string;
        fontSize?: number;
        fontStyle?: string;
    }

    export interface TickOptions {
        backdropColor?: ChartColor;
        backdropPaddingX?: number;
        backdropPaddingY?: number;
        maxTicksLimit?: number;
        showLabelBackdrop?: boolean;
    }
    export interface LinearTickOptions extends TickOptions {
        beginAtZero?: boolean;
        min?: number;
        max?: number;
        maxTicksLimit?: number;
        stepSize?: number;
        suggestedMin?: number;
        suggestedMax?: number;
    }

    export interface LogarithmicTickOptions extends TickOptions {
        min?: number;
        max?: number;
    }

    type ChartColor = string | CanvasGradient | CanvasPattern;

    export interface ChartDataSets {
        backgroundColor?: ChartColor;
        borderWidth?: number;
        borderColor?: ChartColor;
        borderCapStyle?: string;
        borderDash?: number[];
        borderDashOffset?: number;
        borderJoinStyle?: string;
        data?: number[] | ChartPoint[];
        fill?: boolean;
        label?: string;
        lineTension?: number;
        pointBorderColor?: ChartColor | ChartColor[];
        pointBackgroundColor?: ChartColor | ChartColor[];
        pointBorderWidth?: number | number[];
        pointRadius?: number | number[];
        pointHoverRadius?: number | number[];
        pointHitRadius?: number | number[];
        pointHoverBackgroundColor?: ChartColor | ChartColor[];
        pointHoverBorderColor?: ChartColor | ChartColor[];
        pointHoverBorderWidth?: number | number[];
        pointStyle?: string | string[] | HTMLImageElement | HTMLImageElement[];
        xAxisID?: string;
        yAxisID?: string;
    }

    export interface ChartScales {
        type?: ScaleType | string;
        display?: boolean;
        position?: PositionType | string;
        beforeUpdate?: (scale?: any) => void;
        beforeSetDimension?: (scale?: any) => void;
        beforeDataLimits?: (scale?: any) => void;
        beforeBuildTicks?: (scale?: any) => void;
        beforeTickToLabelConversion?: (scale?: any) => void;
        beforeCalculateTickRotation?: (scale?: any) => void;
        beforeFit?: (scale?: any) => void;
        afterUpdate?: (scale?: any) => void;
        afterSetDimension?: (scale?: any) => void;
        afterDataLimits?: (scale?: any) => void;
        afterBuildTicks?: (scale?: any) => void;
        afterTickToLabelConversion?: (scale?: any) => void;
        afterCalculateTickRotation?: (scale?: any) => void;
        afterFit?: (scale?: any) => void;
        gridLines?: GridLineOptions;
        scaleLabel?: ScaleTitleOptions;
        ticks?: TickOptions;
        xAxes?: ChartXAxe[];
        yAxes?: ChartYAxe[];
    }

    export interface CommonAxe {
        type?: ScaleType | string;
        display?: boolean;
        id?: string;
        stacked?: boolean;
        position?: string;
        ticks?: TickOptions;
        gridLines?: GridLineOptions;
        barThickness?: number;
        scaleLabel?: ScaleTitleOptions;
    }

    export interface ChartXAxe extends CommonAxe {
        categoryPercentage?: number;
        barPercentage?: number;
        time?: TimeScale;
    }

    export interface ChartYAxe extends CommonAxe {
    }

    export interface LinearScale extends ChartScales {
        ticks?: LinearTickOptions;
    }

    export interface LogarithmicScale extends ChartScales {
        ticks?: LogarithmicTickOptions;
    }

    export interface TimeDisplayFormat {
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

    export interface TimeScale extends ChartScales {
        displayFormats?: TimeDisplayFormat;
        isoWeekday?: boolean;
        max?: string;
        min?: string;
        parser?: string | ((arg: any) => any);
        round?: TimeUnit;
        tooltipFormat?: string;
        unit?: TimeUnit;
        unitStepSize?: number;
        minUnit?: TimeUnit;
    }

    export interface RadialLinearScale {
        lineArc?: boolean;
        angleLines?: AngleLineOptions;
        pointLabels?: PointLabelOptions;
        ticks?: TickOptions;
    }
}

export = Chart;
export as namespace Chart;
