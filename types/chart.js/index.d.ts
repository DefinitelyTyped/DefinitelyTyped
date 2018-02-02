// Type definitions for Chart.js 2.7.1
// Project: https://github.com/nnnick/Chart.js
// Definitions by: Alberto Nuti <https://github.com/anuti>
//                 Fabien Lavocat <https://github.com/FabienLavocat>
//                 KentarouTakeda <https://github.com/KentarouTakeda>
//                 Larry Bahr <https://github.com/larrybahr>
//                 Daniel Luz <https://github.com/mernen>
//                 Joseph Page <https://github.com/josefpaij>
//                 Dan Manastireanu <https://github.com/danmana>
//                 Guillaume Rodriguez <https://github.com/guillaume-ro-fr>
//                 Sergey Rubanov <https://github.com/chicoxyzzy>
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
    update: (duration?: any, lazy?: any) => {};
    render: (duration?: any, lazy?: any) => {};
    stop: () => {};
    resize: () => {};
    clear: () => {};
    toBase64: () => string;
    generateLegend: () => {};
    getElementAtEvent: (e: any) => {};
    getElementsAtEvent: (e: any) => Array<{}>;
    getDatasetAtEvent: (e: any) => Array<{}>;
    ctx: CanvasRenderingContext2D|null;
    canvas: HTMLCanvasElement|null;
    chartArea: Chart.ChartArea;
    static pluginService: PluginServiceStatic;

    static defaults: {
        global: Chart.ChartOptions & Chart.ChartFontOptions;
        [key: string]: any;
    };

    static controllers: {
        [key: string]: any;
    };

    // Tooltip Static Options
    static Tooltip: Chart.ChartTooltipsStaticConfiguartion;
}
declare class PluginServiceStatic {
    register(plugin: PluginServiceRegistrationOptions): void;
    unregister(plugin: PluginServiceRegistrationOptions): void;
}

interface PluginServiceRegistrationOptions {
    beforeInit?(chartInstance: Chart): void;
    afterInit?(chartInstance: Chart): void;

    resize?(chartInstance: Chart, newChartSize: Size): void;

    beforeUpdate?(chartInstance: Chart): void;
    afterScaleUpdate?(chartInstance: Chart): void;
    beforeDatasetsUpdate?(chartInstance: Chart): void;
    afterDatasetsUpdate?(chartInstance: Chart): void;
    afterUpdate?(chartInstance: Chart): void;

    // This is called at the start of a render. It is only called once, even if the animation will run for a number of frames. Use beforeDraw or afterDraw
    // to do something on each animation frame
    beforeRender?(chartInstance: Chart): void;

    // Easing is for animation
    beforeDraw?(chartInstance: Chart, easing: string): void;
    afterDraw?(chartInstance: Chart, easing: string): void;
    // Before the datasets are drawn but after scales are drawn
    beforeDatasetsDraw?(chartInstance: Chart, easing: string): void;
    afterDatasetsDraw?(chartInstance: Chart, easing: string): void;

    // Called before drawing the `tooltip`. If any plugin returns `false`,
    // the tooltip drawing is cancelled until another `render` is triggered.
    beforeTooltipDraw?(chartInstance: Chart): void;
    // Called after drawing the `tooltip`. Note that this hook will not,
    // be called if the tooltip drawing has been previously cancelled.
    afterTooltipDraw?(chartInstance: Chart): void;

    destroy?(chartInstance: Chart): void;

    // Called when an event occurs on the chart
    beforeEvent?(chartInstance: Chart, event: Event): void;
    afterEvent?(chartInstance: Chart, event: Event): void;
}

interface Size {
    height: number;
    width: number;
}

declare namespace Chart {
    type ChartType = 'line' | 'bar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'pie';

    type TimeUnit = 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';

    type ScaleType = 'category' | 'linear' | 'logarithmic' | 'time' | 'radialLinear';

    type PointStyle = 'circle' | 'cross' | 'crossRot' | 'dash' | 'line' | 'rect' | 'rectRounded' | 'rectRot' | 'star' | 'triangle';

    type PositionType = 'left' | 'right' | 'top' | 'bottom';

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
        lineCap?: string;
        lineDash?: number[];
        lineDashOffset?: number;
        lineJoin?: string;
        lineWidth?: number;
        strokeStyle?: string;
        pointStyle?: PointStyle;
    }

    interface ChartTooltipItem {
        xLabel?: string;
        yLabel?: string;
        datasetIndex?: number;
        index?: number;
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
        y?: number;
    }

    interface ChartConfiguration {
        type?: ChartType | string;
        data?: ChartData;
        options?: ChartOptions;
    }

    interface ChartData {
        labels?: Array<string | string[]>;
        datasets?: ChartDataSets[];
    }

    interface ChartOptions {
        responsive?: boolean;
        responsiveAnimationDuration?: number;
        aspectRatio?: number;
        maintainAspectRatio?: boolean;
        events?: string[];
        onClick?(event?: MouseEvent, activeElements?: Array<{}>): any;
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
        // Plugins can require any options
        plugins?: any;
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
        fullWdith?: boolean;
        fontSize?: number;
        fontFamily?: string;
        fontColor?: ChartColor;
        fontStyle?: string;
        padding?: number;
        text?: string;
    }

    interface ChartLegendOptions {
        display?: boolean;
        position?: PositionType;
        fullWidth?: boolean;
        onClick?(event: MouseEvent, legendItem: ChartLegendItem): void;
        onHover?(event: MouseEvent, legendItem: ChartLegendItem): void;
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
        generateLabels?(chart: any): any;
        filter?(item: ChartLegendItem, data: ChartData): any;
        usePointStyle?: boolean;
    }

    interface ChartTooltipOptions {
        enabled?: boolean;
        custom?(a: any): void;
        mode?: string;
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
        filter?(item: ChartTooltipItem): boolean;
        itemSort?(itemA: ChartTooltipItem, itemB: ChartTooltipItem): number;
        position?: "average"|"nearest";
        caretPadding?: number;
        displayColors?: boolean;
        borderColor?: ChartColor;
        borderWidth?: number;
    }

    interface ChartTooltipsStaticConfiguartion {
        positioners: any;
    }

    interface ChartHoverOptions {
        mode?: string;
        animationDuration?: number;
        intersect?: boolean;
        onHover?(active: any): void;
    }

    interface ChartAnimationObject {
        currentStep?: number;
        numSteps?: number;
        easing?: string;
        render?(arg: any): void;
        onAnimationProgress?(arg: any): void;
        onAnimationComplete?(arg: any): void;
    }

    interface ChartAnimationOptions {
        duration?: number;
        easing?: string;
        onProgress?(chart: any): void;
        onComplete?(chart: any): void;
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
        lineWidth?: number;
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
        fontColor?: ChartColor;
        fontFamily?: string;
        fontSize?: number;
        fontStyle?: string;
    }

    interface TickOptions {
        autoSkip?: boolean;
        autoSkipPadding?: number;
        callback?(value: any, index: any, values: any): string|number;
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

    interface TickOptions {
        backdropColor?: ChartColor;
        backdropPaddingX?: number;
        backdropPaddingY?: number;
        maxTicksLimit?: number;
        showLabelBackdrop?: boolean;
    }
    interface LinearTickOptions extends TickOptions {
        beginAtZero?: boolean;
        min?: number;
        max?: number;
        maxTicksLimit?: number;
        stepSize?: number;
        suggestedMin?: number;
        suggestedMax?: number;
    }

    interface LogarithmicTickOptions extends TickOptions {
        min?: number;
        max?: number;
    }

    type ChartColor = string | CanvasGradient | CanvasPattern | string[];

    interface ChartDataSets {
        cubicInterpolationMode?: 'default' | 'monotone';
        backgroundColor?: ChartColor | ChartColor[];
        borderWidth?: number | number[];
        borderColor?: ChartColor | ChartColor[];
        borderCapStyle?: string;
        borderDash?: number[];
        borderDashOffset?: number;
        borderJoinStyle?: string;
        borderSkipped?: PositionType;
        data?: number[] | ChartPoint[];
        fill?: boolean | number | string;
        hoverBackgroundColor?: string | string[];
        hoverBorderColor?: string | string[];
        hoverBorderWidth?: number | number[];
        label?: string;
        lineTension?: number;
        steppedLine?: 'before' | 'after' | boolean;
        pointBorderColor?: ChartColor | ChartColor[];
        pointBackgroundColor?: ChartColor | ChartColor[];
        pointBorderWidth?: number | number[];
        pointRadius?: number | number[];
        pointHoverRadius?: number | number[];
        pointHitRadius?: number | number[];
        pointHoverBackgroundColor?: ChartColor | ChartColor[];
        pointHoverBorderColor?: ChartColor | ChartColor[];
        pointHoverBorderWidth?: number | number[];
        pointStyle?: PointStyle | HTMLImageElement | Array<PointStyle | HTMLImageElement>;
        xAxisID?: string;
        yAxisID?: string;
        type?: string;
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
        type?: ScaleType | string;
        display?: boolean;
        id?: string;
        stacked?: boolean;
        position?: string;
        ticks?: TickOptions;
        gridLines?: GridLineOptions;
        barThickness?: number;
        scaleLabel?: ScaleTitleOptions;
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
        time?: TimeScale;
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
        lineArc?: boolean;
        angleLines?: AngleLineOptions;
        pointLabels?: PointLabelOptions;
        ticks?: TickOptions;
    }
}

export = Chart;
export as namespace Chart;
