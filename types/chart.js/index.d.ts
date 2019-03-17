// Type definitions for Chart.js 2.8
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
//                 Aviad Pineles <https://github.com/paviad>
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
    toBase64Image: () => string;
    generateLegend: () => {};
    getElementAtEvent: (e: any) => [{}];
    getElementsAtEvent: (e: any) => Array<{}>;
    getDatasetAtEvent: (e: any) => Array<{}>;
    getDatasetMeta: (index: number) => Meta;
    ctx: CanvasRenderingContext2D | null;
    canvas: HTMLCanvasElement | null;
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

    /**
     * Tooltip Static Options
     */
    static Tooltip: Chart.ChartTooltipsStaticConfiguration;
}
declare class PluginServiceStatic {
    register(plugin: Chart.PluginServiceGlobalRegistration & Chart.PluginServiceRegistrationOptions): void;
    unregister(plugin: Chart.PluginServiceGlobalRegistration & Chart.PluginServiceRegistrationOptions): void;
}

interface Meta {
    type: Chart.ChartType;
    data: MetaData[];
    dataset?: Chart.ChartDataSetsUnion;
    controller: { [key: string]: any; };
    hidden?: boolean;
    total?: string;
    xAxisID?: string;
    yAxisID?: string;
    '$filler'?: { [key: string]: any; };
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
    interface ChartConfiguration {
        type?: ChartType | string;
        data?: ChartData;
        options?: ChartOptions;
        plugins?: PluginServiceRegistrationOptions[];
    }

    type ChartType = 'line' | 'bar' | 'horizontalBar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'pie' | 'scatter';

    interface ChartData {
        labels?: Array<string | string[]>;
        xLabels?: string[];
        yLabels?: string[];
        datasets?: ChartDataSetsUnion[];
    }

    interface ChartOptions {
        // [General/Responsive](https://www.chartjs.org/docs/latest/general/responsive.html#configuration-options)
        responsive?: boolean;
        responsiveAnimationDuration?: number;
        maintainAspectRatio?: boolean;
        aspectRatio?: number;
        onResize?: (this: Chart, newSize: ChartSize) => void;

        // [General/Pixel Ratio](https://www.chartjs.org/docs/latest/general/device-pixel-ratio.html#configuration-options)
        devicePixelRatio?: number;

        // [General/Interactions/Events](https://www.chartjs.org/docs/latest/general/interactions/events.html#events)
        events?: string[];
        onHover?: (this: Chart, event: MouseEvent, activeElements: Array<{}>) => any; // todo: fix signature
        onClick?: (event?: MouseEvent, activeElements?: Array<{}>) => any; // todo: fix signature

        // [Configuration/Animations](https://www.chartjs.org/docs/latest/configuration/animations.html)
        animation?: ChartAnimationOptions;

        // [Configuration/Layout](https://www.chartjs.org/docs/latest/configuration/layout.html)
        layout?: ChartLayoutOptions;

        // [Configuration/Legend](https://www.chartjs.org/docs/latest/configuration/legend.html)
        legend?: ChartLegendOptions;

        // [Configuration/Legend/HTML Legends](https://www.chartjs.org/docs/latest/configuration/legend.html#html-legends)
        legendCallback?: (chart: Chart) => string;

        // [Configuration/Title](https://www.chartjs.org/docs/latest/configuration/title.html)
        title?: ChartTitleOptions;

        // [Configuration/Tooltip](https://www.chartjs.org/docs/latest/configuration/tooltip.html)
        tooltips?: ChartTooltipOptions;

        hover?: ChartHoverOptions;
        elements?: ChartElementsOptions;
        scales?: ChartScales;
        showLines?: boolean;
        spanGaps?: boolean;
        cutoutPercentage?: number;
        circumference?: number;
        rotation?: number;
        plugins?: ChartPluginsOptions;
    }

    interface ChartSize {
        height: number;
        width: number;
    }

    // NOTE: declare plugin options as interface instead of inline '{ [plugin: string]: any }'
    // to allow module augmentation in case some plugins want to strictly type their options.
    interface ChartPluginsOptions {
        [pluginId: string]: any;
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

    // [General/Interactions](https://www.chartjs.org/docs/latest/general/interactions/)
    interface ChartHoverOptions {
        mode?: InteractionMode;
        intersect?: boolean;
        axis?: 'x' | 'y' | 'xy';
        animationDuration?: number;
    }

    // [General/Options](https://www.chartjs.org/docs/latest/general/options.html)
    type Scriptable<T> = T | ((context: OptionContext) => T);

    type Indexable<T> = T | T[];

    type ScriptableIndexable<T> = Indexable<T> | Scriptable<T>;

    interface OptionContext {
        chart?: Chart;
        dataIndex?: number;
        dataset?: ChartDataSetsUnion;
        datasetIndex?: number;
    }

    // [General/Fonts](https://www.chartjs.org/docs/latest/general/fonts.html)
    interface ChartFontOptions {
        defaultFontColor?: ChartColor;
        defaultFontFamily?: string;
        defaultFontSize?: number;
        defaultFontStyle?: string;
    }

    // [Configuration/Animations](https://www.chartjs.org/docs/latest/configuration/animations.html)
    interface ChartAnimationOptions {
        duration?: number;
        easing?: EasingFunction;
        onProgress?: (animation: ChartAnimationObject) => void;
        onComplete?: (animation: ChartAnimationObject) => void;

        /**
         * Undocumented (used in doughnut, pie and polar area chart types)
         */
        animateRotate?: boolean;
        animateScale?: boolean;
    }

    type EasingFunction =
        | 'linear'
        | 'easeInQuad'
        | 'easeOutQuad'
        | 'easeInOutQuad'
        | 'easeInCubic'
        | 'easeOutCubic'
        | 'easeInOutCubic'
        | 'easeInQuart'
        | 'easeOutQuart'
        | 'easeInOutQuart'
        | 'easeInQuint'
        | 'easeOutQuint'
        | 'easeInOutQuint'
        | 'easeInSine'
        | 'easeOutSine'
        | 'easeInOutSine'
        | 'easeInExpo'
        | 'easeOutExpo'
        | 'easeInOutExpo'
        | 'easeInCirc'
        | 'easeOutCirc'
        | 'easeInOutCirc'
        | 'easeInElastic'
        | 'easeOutElastic'
        | 'easeInOutElastic'
        | 'easeInBack'
        | 'easeOutBack'
        | 'easeInOutBack'
        | 'easeInBounce'
        | 'easeOutBounce'
        | 'easeInOutBounce';

    // [Configuration/Animations/Animation Callbacks](https://www.chartjs.org/docs/latest/configuration/animations.html#animation-callbacks)
    interface ChartAnimationObject {
        chart?: Chart;
        currentStep?: number;
        numSteps?: number;
        easing?: EasingFunction;
        render?: (arg: any) => void;
        onAnimationProgress?: (animation: ChartAnimationObject) => void;
        onAnimationComplete?: (animation: ChartAnimationObject) => void;
    }

    // [Configuration/Legend](https://www.chartjs.org/docs/latest/configuration/legend.html)
    interface ChartLegendOptions {
        display?: boolean;
        position?: PositionType;
        fullWidth?: boolean;
        onClick?: (event: MouseEvent, legendItem: ChartLegendLabelItem) => void;
        onHover?: (event: MouseEvent, legendItem: ChartLegendLabelItem) => void;
        onLeave?: (event: MouseEvent, legendItem: ChartLegendLabelItem) => void;
        reverse?: boolean;
        labels?: ChartLegendLabelOptions;
    }

    type PositionType = 'left' | 'right' | 'top' | 'bottom';

    // [Configuration/Legend/Legend Label Configuration](https://www.chartjs.org/docs/latest/configuration/legend.html#legend-label-configuration)
    interface ChartLegendLabelOptions {
        boxWidth?: number;
        fontSize?: number;
        fontStyle?: string;
        fontColor?: ChartColor;
        fontFamily?: string;
        padding?: number;
        generateLabels?(chart: Chart): ChartLegendLabelItem[];
        filter?: (legendItem: ChartLegendLabelItem, data: ChartData) => boolean;
        usePointStyle?: boolean;
    }

    type ChartColor = string | CanvasGradient | CanvasPattern | string[];

    interface ChartLegendLabelItem extends ChartLegendItem {
        datasetIndex: number;
    }

    // tslint:disable-next-line no-empty-interface
    interface ChartDataSetsExtension extends ChartDataSetsBase {
    }

    type ChartDataSetsUnion =
        | ChartDataSetsLine
        | ChartDataSetsBar
        | ChartDataSetsRadar
        | ChartDataSetsDoughnut
        | ChartDataSetsPolarArea
        | ChartDataSetsBubble
        | ChartDataSetsScatter
        | ChartDataSetsExtension
        ;

    // [Configuration/Legend/Legend Item Interface](https://www.chartjs.org/docs/latest/configuration/legend.html#legend-item-interface)
    interface ChartLegendItem {
        text?: string;
        fillStyle?: string;
        hidden?: boolean;
        lineCap?: CapStyleType;
        lineDash?: number[];
        lineDashOffset?: number;
        lineJoin?: JoinStyleType;
        lineWidth?: number;
        strokeStyle?: string;
        pointStyle?: PointStyle;
    }

    type JoinStyleType = 'bevel' | 'round' | 'miter';

    type PointStyle = 'circle' | 'cross' | 'crossRot' | 'dash' | 'line' | 'rect' | 'rectRounded' | 'rectRot' | 'star' | 'triangle';

    // [Configuration/Title](https://www.chartjs.org/docs/latest/configuration/title.html)
    interface ChartTitleOptions {
        display?: boolean;
        position?: PositionType;
        fontSize?: number;
        fontFamily?: string;
        fontColor?: ChartColor;
        fontStyle?: string;
        padding?: number;
        lineHeight?: number | string;
        text?: string | string[];

        /**
         * Undocumented
         */
        fullWidth?: boolean;
        weight?: number;
    }

    // [Configuration/Tooltip](https://www.chartjs.org/docs/latest/configuration/tooltip.html)
    interface ChartTooltipOptions {
        enabled?: boolean;
        custom?: (tooltipModel: ChartTooltipModel) => void;
        mode?: InteractionMode;
        intersect?: boolean;
        position?: PositionMode;
        callbacks?: ChartTooltipCallback;
        itemSort?: (itemA: ChartTooltipItem, itemB: ChartTooltipItem) => number;
        filter?: (item: ChartTooltipItem, data: ChartData) => boolean;
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
        caretPadding?: number;
        caretSize?: number;
        cornerRadius?: number;
        multiKeyBackground?: string;
        displayColors?: boolean;
        borderColor?: ChartColor;
        borderWidth?: number;
    }

    type InteractionMode = 'point' | 'nearest' | 'single' | 'label' | 'index' | 'x-axis' | 'dataset' | 'x' | 'y';

    type PositionMode = 'average' | 'nearest';

    // [Configuration/Tooltip/Position Modes](https://www.chartjs.org/docs/latest/configuration/tooltip.html#position-modes)
    interface ChartTooltipsStaticConfiguration {
        positioners: { [mode: string]: ChartTooltipPositioner };
    }

    type ChartTooltipPositioner = (elements: any[], eventPosition: Point) => Point;

    interface Point {
        x: number;
        y: number;
    }

    // [Configurations/Tooltip/Tooltip Callbacks]
    interface ChartTooltipCallback {
        beforeTitle?: (item: ChartTooltipItem[], data: ChartData) => string | string[];
        title?: (item: ChartTooltipItem[], data: ChartData) => string | string[];
        afterTitle?: (item: ChartTooltipItem[], data: ChartData) => string | string[];
        beforeBody?: (item: ChartTooltipItem[], data: ChartData) => string | string[];
        beforeLabel?: (tooltipItem: ChartTooltipItem, data: ChartData) => string | string[];
        label?: (tooltipItem: ChartTooltipItem, data: ChartData) => string | string[];
        labelColor?: (tooltipItem: ChartTooltipItem, chart: Chart) => ChartTooltipLabelColor;
        labelTextColor?: (tooltipItem: ChartTooltipItem, chart: Chart) => string;
        afterLabel?: (tooltipItem: ChartTooltipItem, data: ChartData) => string | string[];
        afterBody?: (item: ChartTooltipItem[], data: ChartData) => string | string[];
        beforeFooter?: (item: ChartTooltipItem[], data: ChartData) => string | string[];
        footer?: (item: ChartTooltipItem[], data: ChartData) => string | string[];
        afterFooter?: (item: ChartTooltipItem[], data: ChartData) => string | string[];
    }

    interface ChartTooltipLabelColor {
        borderColor: ChartColor;
        backgroundColor: ChartColor;
    }

    // [Configuration/Tooltip/Tooltip Item Interface](https://www.chartjs.org/docs/latest/configuration/tooltip.html#tooltip-item-interface)
    interface ChartTooltipItem {
        label?: string;
        value?: string;
        xLabel?: string;
        yLabel?: string;
        datasetIndex?: number;
        index?: number;
        x?: number;
        y?: number;
    }

    // [Configuration/Tooltip/Tooltip Model](https://www.chartjs.org/docs/latest/configuration/tooltip.html#tooltip-model)
    interface ChartTooltipModel {
        // The items that we are rendering in the tooltip. See Tooltip Item Interface section
        dataPoints: ChartTooltipItem[];

        // Positioning
        xPadding: number;
        yPadding: number;
        xAlign: string;
        yAlign: string;

        // X and Y properties are the top left of the tooltip
        x: number;
        y: number;
        width: number;
        height: number;
        // Where the tooltip points to
        caretX: number;
        caretY: number;

        /**
         * The body lines that need to be rendered
         * Each object contains 3 parameters
         * * before: string[] -- lines of text before the line with the color square
         * * lines: string[]; -- lines of text to render as the main item with color square
         * * after: string[]; -- lines of text to render after the main lines
         */
        body: ChartTooltipModelElement[];
        // lines of text that appear after the title but before the body
        beforeBody: string[];
        // line of text that appear after the body and before the footer
        afterBody: string[];
        bodyFontColor: ChartColor;
        _bodyFontFamily: string;
        _bodyFontStyle: string;
        _bodyAlign: string;
        bodyFontSize: number;
        bodySpacing: number;

        // Title
        // lines of text that form the title
        title: string[];
        titleFontColor: ChartColor;
        _titleFontFamily: string;
        _titleFontStyle: string;
        titleFontSize: number;
        _titleAlign: string;
        titleSpacing: number;
        titleMarginBottom: number;

        // Footer
        // lines of text that form the footer
        footer: string[];
        footerFontColor: ChartColor;
        _footerFontFamily: string;
        _footerFontStyle: string;
        footerFontSize: number;
        _footerAlign: string;
        footerSpacing: number;
        footerMarginTop: number;

        // Appearance
        caretSize: number;
        caretPadding: number;
        cornerRadius: number;
        backgroundColor: ChartColor;

        // colors to render for each item in body[]. This is the color of the squares in the tooltip
        labelColors: ChartColor[];
        labelTextColors: ChartColor[];

        // 0 opacity is a hidden tooltip
        opacity: number;
        legendColorBackground: ChartColor;
        displayColors: boolean;
        borderColor: ChartColor;
        borderWidth: number;
    }

    interface ChartTooltipModelElement {
        before: string[];
        lines: string[];
        after: string[];
    }

    // [Configuration/Elements](https://www.chartjs.org/docs/latest/configuration/elements.html)
    interface ChartElementsOptions {
        point?: ChartPointOptions;
        line?: ChartLineOptions;
        arc?: ChartArcOptions;
        rectangle?: ChartRectangleOptions;
    }

    // [Configuration/Elements/Point Configuration](https://www.chartjs.org/docs/latest/configuration/elements.html#point-configuration)
    interface ChartPointOptions {
        radius?: number;
        pointStyle?: PointStyle;
        rotation?: number;
        backgroundColor?: ChartColor;
        borderWidth?: number;
        borderColor?: ChartColor;
        hitRadius?: number;
        hoverRadius?: number;
        hoverBorderWidth?: number;
    }

    // [Configuration/Elements/Line Configuration](https://www.chartjs.org/docs/latest/configuration/elements.html#line-configuration)
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
        fill?: FillType;
        stepped?: boolean;

        /**
         * Undocumented
         */
        cubicInterpolationMode?: 'default' | 'monotone';
    }

    // [Configuration/Elements/Rectangle Configuration](https://www.chartjs.org/docs/latest/configuration/elements.html#rectangle-configuration)
    interface ChartRectangleOptions {
        backgroundColor?: ChartColor;
        borderWidth?: number;
        borderColor?: ChartColor;
        borderSkipped?: string;
    }

    // [Configuration/Elements/Arc Configuration]
    interface ChartArcOptions {
        backgroundColor?: ChartColor;
        borderAlign?: AlignType;
        borderColor?: ChartColor;
        borderWidth?: number;
    }

    type AlignType = 'center' | 'inner';

    // [Charts/Line](https://www.chartjs.org/docs/latest/charts/line.html)
    // tslint:disable-next-line no-empty-interface
    interface ChartDataSetsLine extends ChartDataSetsLineScatterBase {
    }

    interface ChartDataSetsLineScatterBase extends ChartDataSetsBase {
        backgroundColor?: ChartColor;
        borderCapStyle?: CapStyleType;
        borderColor?: ChartColor;
        borderDash?: number[];
        borderDashOffset?: number;
        borderJoinStyle?: JoinStyleType;
        borderWidth?: number;
        cubicInterpolationMode?: 'default' | 'monotone';
        fill?: boolean | string;
        label?: string;
        lineTension?: number;
        pointBackgroundColor?: ScriptableIndexable<ChartColor>;
        pointBorderColor?: ScriptableIndexable<ChartColor>;
        pointBorderWidth?: ScriptableIndexable<number>;
        pointHitRadius?: ScriptableIndexable<number>;
        pointHoverBackgroundColor?: ScriptableIndexable<ChartColor>;
        pointHoverBorderColor?: ScriptableIndexable<ChartColor>;
        pointHoverBorderWidth?: ScriptableIndexable<number>;
        pointHoverRadius?: ScriptableIndexable<number>;
        pointRadius?: ScriptableIndexable<number>;
        pointRotation?: ScriptableIndexable<number>;
        pointStyle?: ScriptableIndexable<PointStyle | ChartPointImageType>;
        showLine?: boolean;
        spanGaps?: boolean;
        steppedLine?: 'before' | 'after' | 'middle' | boolean;
        xAxisID?: string;
        yAxisID?: string;
        data: number[] | ChartPointLineSparse[];
    }

    // tslint:disable-next-line no-empty-interface
    interface ChartDataSetsBase {
      type?: ChartType | string;
    }

    type ChartPointImageType = HTMLImageElement | SVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap;

    interface ChartPointLineSparse {
        x: number;
        y: number;
    }

    // [Charts/Bar](https://www.chartjs.org/docs/latest/charts/bar.html)
    interface ChartDataSetsBar extends ChartDataSetsBase {
        backgroundColor?: ScriptableIndexable<ChartColor>;
        borderColor?: ScriptableIndexable<ChartColor>;
        borderSkipped?: ScriptableIndexable<PositionType | boolean>;
        borderWidth?: ScriptableIndexable<number | ChartBorderWidth>;
        data: Array<Optional<number>> | ChartPointBarNumeric[] | ChartPointBarTimeT[] | ChartPointBarTimeX[];
        hoverBackgroundColor?: Indexable<ChartColor>;
        hoverBorderColor?: Indexable<ChartColor>;
        hoverBorderWidth?: Indexable<number>;
        label?: string;
        xAxisID?: string;
        yAxisID?: string;
        stack?: string;
    }

    type Optional<T> = T | null;

    interface ChartBorderWidth {
        left?: number;
        top?: number;
        right?: number;
        bottom?: number;
    }

    interface ChartPointBarNumeric {
        x: number;
        y: number;
    }

    interface ChartPointBarTimeT {
        t: string | Date;
        y: number;
    }

    interface ChartPointBarTimeX {
        x: string | Date;
        y: number;
    }

    // [Charts/Radar](https://www.chartjs.org/docs/latest/charts/radar.html)
    interface ChartDataSetsRadar extends ChartDataSetsBase {
        backgroundColor?: ChartColor;
        borderCapStyle?: CapStyleType;
        borderColor?: ChartColor;
        borderDash?: number[];
        borderDashOffset?: number;
        borderJoinStyle?: JoinStyleType;
        borderWidth?: number;
        fill?: FillType;
        label?: string;
        lineTension?: number;
        pointBackgroundColor?: ScriptableIndexable<ChartColor>;
        pointBorderColor?: ScriptableIndexable<ChartColor>;
        pointBorderWidth?: ScriptableIndexable<number>;
        pointHitRadius?: ScriptableIndexable<number>;
        pointHoverBackgroundColor?: ScriptableIndexable<ChartColor>;
        pointHoverBorderColor?: ScriptableIndexable<ChartColor>;
        pointHoverBorderWidth?: ScriptableIndexable<number>;
        pointHoverRadius?: ScriptableIndexable<number>;
        pointRadius?: ScriptableIndexable<number>;
        pointRotation?: ScriptableIndexable<number>;
        pointStyle?: ScriptableIndexable<PointStyle | ChartPointImageType>;
        data: number[];
    }

    type CapStyleType = 'butt' | 'round' | 'square';

    // [Charts/Radar/Scale Options](https://www.chartjs.org/docs/latest/charts/radar.html#scale-options)
    interface RadialChartOptions extends ChartOptions {
        scale?: RadialLinearScale;
    }

    // [Charts/Doughnut & Pie](https://www.chartjs.org/docs/latest/charts/doughnut.html)
    interface ChartDataSetsDoughnut extends ChartDataSetsBase {
        backgroundColor?: ScriptableIndexable<ChartColor>;
        borderAlign?: ScriptableIndexable<AlignType>;
        borderColor?: ScriptableIndexable<ChartColor>;
        borderWidth?: ScriptableIndexable<number>;
        data: number[];
        hoverBackgroundColor?: ScriptableIndexable<ChartColor>;
        hoverBorderColor?: ScriptableIndexable<ChartColor>;
        hoverBorderWidth?: ScriptableIndexable<number>;
        weight?: number;
    }

    // [Charts/Polar Area](https://www.chartjs.org/docs/latest/charts/polar.html)
    interface ChartDataSetsPolarArea extends ChartDataSetsBase {
        backgroundColor?: ScriptableIndexable<ChartColor>;
        borderAlign?: ScriptableIndexable<AlignType>;
        borderColor?: ScriptableIndexable<ChartColor>;
        borderWidth?: ScriptableIndexable<number>;
        data: number[];
        hoverBackgroundColor?: ScriptableIndexable<ChartColor>;
        hoverBorderColor?: ScriptableIndexable<ChartColor>;
        hoverBorderWidth?: ScriptableIndexable<number>;
    }

    // [Charts/Bubble](https://www.chartjs.org/docs/latest/charts/bubble.html)
    interface ChartDataSetsBubble extends ChartDataSetsBase {
        backgroundColor?: ScriptableIndexable<ChartColor>;
        borderColor?: ScriptableIndexable<ChartColor>;
        borderWidth?: ScriptableIndexable<number>;
        data: ChartPointBubble[];
        hoverBackgroundColor?: ScriptableIndexable<ChartColor>;
        hoverBorderColor?: ScriptableIndexable<ChartColor>;
        hoverBorderWidth?: ScriptableIndexable<number>;
        hoverRadius?: ScriptableIndexable<number>;
        hitRadius?: ScriptableIndexable<number>;
        label?: string;
        pointStyle?: ScriptableIndexable<PointStyle>;
        rotation?: ScriptableIndexable<number>;
        radius?: ScriptableIndexable<number>;
    }

    interface ChartPointBubble {
        x: number;
        y: number;
        r: number;
    }

    // [Charts/Scatter](https://www.chartjs.org/docs/latest/charts/scatter.html)
    interface ChartDataSetsScatter extends ChartDataSetsLineScatterBase {
        data: ChartPointScatter[];
    }

    interface ChartPointScatter {
        x: number;
        y: number;
    }

    // [Charts/Area](https://www.chartjs.org/docs/latest/charts/area.html)
    type FillType = number | string | FillBoundaryType;

    type FillBoundaryType = 'start' | 'end' | 'origin';

    // [Axes](https://www.chartjs.org/docs/latest/axes/)
    interface ChartScales {
        gridLines?: GridLineOptions;
        scaleLabel?: ScaleTitleOptions;
        ticks?: BaseTickOptions;
        xAxes?: ScaleUnion[];
        yAxes?: ScaleUnion[];

        /**
         * Undocumented
         */
        position?: PositionType | string;
        display?: boolean;
        offset?: boolean;

        /**
         * @deprecated Not found in chart.js
         */
        type?: ScaleType | string;
    }

    type ScaleUnion =
      | CategoryScale
      | LinearScale
      | LogarithmicScale
      | TimeScale
      | RadialLinearScale
      ;

    interface CommonScale extends ChartScaleCallbacks {
        id?: string;
        display?: boolean;
        weight?: number;

        // [Charts/Line/Stacked Area Chart](https://www.chartjs.org/docs/latest/charts/line.html#stacked-area-chart)
        // [Charts/Bar/Stacked Bar Chart](https://www.chartjs.org/docs/latest/charts/bar.html#stacked-bar-chart)
        stacked?: boolean;

        // [Charts/Bar/Scale Configuration](https://www.chartjs.org/docs/latest/charts/bar.html#scale-configuration)
        barPercentage?: number;
        categoryPercentage?: number;
        barThickness?: number | 'flex';
        maxBarThickness?: number;
        minBarLength?: number;

        ticks?: BaseTickOptions;
        gridLines?: GridLineOptions;
    }

    type ScaleType = 'category' | 'linear' | 'logarithmic' | 'time' | 'radialLinear';

    // [Axes/Callbacks](https://www.chartjs.org/docs/latest/axes/#callbacks)
    interface ChartScaleCallbacks {
        beforeUpdate?: (scale?: any) => void;
        beforeSetDimension?: (scale?: any) => void;
        afterSetDimension?: (scale?: any) => void;
        beforeDataLimits?: (scale?: any) => void;
        afterDataLimits?: (scale?: any) => void;
        beforeBuildTicks?: (scale?: any) => void;
        afterBuildTicks?: (scale?: any) => void;
        beforeTickToLabelConversion?: (scale?: any) => void;
        afterTickToLabelConversion?: (scale?: any) => void;
        beforeCalculateTickRotation?: (scale?: any) => void;
        afterCalculateTickRotation?: (scale?: any) => void;
        beforeFit?: (scale?: any) => void;
        afterFit?: (scale?: any) => void;
        afterUpdate?: (scale?: any) => void;
    }

    // [Axes/Cartesian/Tick Configuration](https://www.chartjs.org/docs/latest/axes/cartesian/#tick-configuration)
    interface CartesianTickOptions extends BaseTickOptions {
        autoSkip?: boolean;
        autoSkipPadding?: number;
        labelOffset?: number;
        maxRotation?: number;
        minRotation?: number;
        mirror?: boolean;
        padding?: number;
    }

    // [Axes/Cartesian](https://www.chartjs.org/docs/latest/axes/cartesian/)
    interface CartesianScale extends CommonScale {
        type?: ScaleType | string;
        position?: string;
        offset?: boolean;
        gridLines?: GridLineOptions;
        scaleLabel?: ScaleTitleOptions;
        ticks?: CartesianTickOptions;
    }

    // [Axes/Cartesian/Category](https://www.chartjs.org/docs/latest/axes/cartesian/category.html)
    interface CategoryScale extends CartesianScale {
        type?: 'category';
        ticks?: CategoryTickOptions;
    }

    interface CategoryTickOptions extends CartesianTickOptions {
        labels?: string[];
        min?: string;
        max?: string;
    }

    // [Axes/Cartesian/Linear](https://www.chartjs.org/docs/latest/axes/cartesian/linear.html)
    interface LinearScale extends CartesianScale {
        type?: 'linear';
        ticks?: LinearTickOptions;
    }

    interface LinearTickOptions extends CartesianTickOptions {
        beginAtZero?: boolean;
        min?: number;
        max?: number;
        maxTicksLimit?: number;
        precision?: number;
        stepSize?: number;
        suggestedMin?: number;
        suggestedMax?: number;
    }

    // [Axes/Cartesian/Logarithmic](https://www.chartjs.org/docs/latest/axes/cartesian/logarithmic.html)
    interface LogarithmicScale extends CartesianScale {
        type?: 'logarithmic';
        ticks?: LogarithmicTickOptions;
    }

    interface LogarithmicTickOptions extends CartesianTickOptions {
        min?: number;
        max?: number;
    }

    // [Axes/Cartesian/Time](https://www.chartjs.org/docs/latest/axes/cartesian/time.html)
    interface CartesianTimeScale extends CartesianScale {
        adapters?: any; // todo: find a better type;
        distribution?: 'linear' | 'series';
        bounds?: 'data' | 'ticks';
        time?: TimeOptions;
        ticks?: TimeTickOptions;
    }

    // [Axes/Cartesian/Time/Configuration Options](https://www.chartjs.org/docs/latest/axes/cartesian/time.html#configuration-options)
    interface TimeOptions extends CartesianScale {
        displayFormats?: TimeDisplayFormat;
        isoWeekday?: boolean;
        max?: any; // todo: need a better type
        min?: any; // todo: need a better type
        parser?: string | ((arg: any) => any); // todo: need better types
        round?: TimeUnit;
        tooltipFormat?: string;
        unit?: TimeUnit;
        stepSize?: number;
        minUnit?: TimeUnit;

        /**
         * Undocumented
         */
        unitStepSize?: number;
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

    type TimeUnit = 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';

    // [Axes/Cartesian/Time/Ticks Source](https://www.chartjs.org/docs/latest/axes/cartesian/time.html#ticks-source)
    interface TimeTickOptions extends CartesianTickOptions {
        source?: 'auto' | 'data' | 'labels';
    }

    // [Axes/Radial](https://www.chartjs.org/docs/latest/axes/radial/)
    // tslint:disable-next-line no-empty-interface
    interface RadialScale extends CommonScale {
    }

    // [Axes/Radial/Linear](https://www.chartjs.org/docs/latest/axes/radial/linear.html)
    interface RadialLinearScale extends RadialScale {
        angleLines?: AngleLineOptions;
        gridLines?: GridLineOptions;
        pointLabels?: PointLabelOptions;
        ticks?: RadialLinearTickOptions;
    }

    // [Axes/Radial/Linear/Tick Options](https://www.chartjs.org/docs/latest/axes/radial/linear.html#tick-options)
    interface RadialLinearTickOptions extends RadialTickOptions {
        backdropColor?: ChartColor;
        backdropPaddingX?: number;
        backdropPaddingY?: number;
        beginAtZero?: boolean;
        min?: number;
        max?: number;
        maxTicksLimit?: number;
        precision?: number;
        stepSize?: number;
        suggestedMin?: number;
        suggestedMax?: number;
        showLabelBackdrop?: boolean;
    }

    // [Axes/Radial/Linear/Angle Line Options](https://www.chartjs.org/docs/latest/axes/radial/linear.html#angle-line-options)
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
    }

    // tslint:disable-next-line no-empty-interface
    interface RadialTickOptions extends BaseTickOptions {
    }

    // [Axes/Labelling](https://www.chartjs.org/docs/latest/axes/labelling.html)
    interface ScaleTitleOptions {
        display?: boolean;
        labelString?: string;
        lineHeight?: number | string;
        fontColor?: ChartColor;
        fontFamily?: string;
        fontSize?: number;
        fontStyle?: string;
        padding: number | ChartTitlePaddingObject;
    }

    interface ChartTitlePaddingObject {
        top?: number;
        bottom?: number;
    }

    // [Axes/Styling](https://www.chartjs.org/docs/latest/axes/styling.html#grid-line-configuration)
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
    }

    // [Axes/Styling/Tick Configuration](https://www.chartjs.org/docs/latest/axes/styling.html#tick-configuration)
    interface BaseTickOptions {
        callback?: (value: any, index: any, values: any) => string | number;
        display?: boolean;
        fontColor?: ChartColor;
        fontFamily?: string;
        fontSize?: number;
        fontStyle?: string;
        lineHeight?: number | string;
        reverse?: boolean;
        minor?: MinorTickOptions;
        major?: MajorTickOptions;
    }

    interface MinorTickOptions {
        callback?: (value: any, index: any, values: any) => string | number;
        fontColor?: ChartColor;
        fontFamily?: string;
        fontSize?: number;
        fontStyle?: string;
        lineHeight?: number | string;
    }

    interface MajorTickOptions {
        enabled?: boolean;
        callback?: (value: any, index: any, values: any) => string | number;
        fontColor?: ChartColor;
        fontFamily?: string;
        fontSize?: number;
        fontStyle?: string;
        lineHeight?: number | string;
    }

    // [Developers/New Axes/Scale Interfacae](https://www.chartjs.org/docs/latest/developers/axes.html#scale-interface)
    interface ChartArea {
        top: number;
        right: number;
        bottom: number;
        left: number;
    }

    interface PluginServiceGlobalRegistration {
        id?: string;
    }

    interface PluginServiceRegistrationOptions {
        beforeInit?: (chartInstance: Chart, options?: any) => void;
        afterInit?: (chartInstance: Chart, options?: any) => void;

        beforeUpdate?: (chartInstance: Chart, options?: any) => void;
        afterUpdate?: (chartInstance: Chart, options?: any) => void;

        beforeLayout?: (chartInstance: Chart, options?: any) => void;
        afterLayout?: (chartInstance: Chart, options?: any) => void;

        beforeDatasetsUpdate?: (chartInstance: Chart, options?: any) => void;
        afterDatasetsUpdate?: (chartInstance: Chart, options?: any) => void;

        beforeDatasetUpdate?: (chartInstance: Chart, options?: any) => void;
        afterDatasetUpdate?: (chartInstance: Chart, options?: any) => void;

        // This is called at the start of a render. It is only called once, even if the animation will run for a number of frames. Use beforeDraw or afterDraw
        // to do something on each animation frame
        beforeRender?: (chartInstance: Chart, options?: any) => void;
        afterRender?: (chartInstance: Chart, options?: any) => void;

        // Easing is for animation
        beforeDraw?: (chartInstance: Chart, easing: string, options?: any) => void;
        afterDraw?: (chartInstance: Chart, easing: string, options?: any) => void;

        // Before the datasets are drawn but after scales are drawn
        beforeDatasetsDraw?: (chartInstance: Chart, easing: string, options?: any) => void;
        afterDatasetsDraw?: (chartInstance: Chart, easing: string, options?: any) => void;

        beforeDatasetDraw?: (chartInstance: Chart, easing: string, options?: any) => void;
        afterDatasetDraw?: (chartInstance: Chart, easing: string, options?: any) => void;

        // Called before drawing the `tooltip`. If any plugin returns `false`,
        // the tooltip drawing is cancelled until another `render` is triggered.
        beforeTooltipDraw?: (chartInstance: Chart, tooltipData?: any, options?: any) => void;
        // Called after drawing the `tooltip`. Note that this hook will not,
        // be called if the tooltip drawing has been previously cancelled.
        afterTooltipDraw?: (chartInstance: Chart, tooltipData?: any, options?: any) => void;

        // Called when an event occurs on the chart
        beforeEvent?: (chartInstance: Chart, event: Event, options?: any) => void;
        afterEvent?: (chartInstance: Chart, event: Event, options?: any) => void;

        resize?: (chartInstance: Chart, newChartSize: ChartSize, options?: any) => void;
        destroy?: (chartInstance: Chart) => void;

        /** @deprecated since version 2.5.0. Use `afterLayout` instead. */
        afterScaleUpdate?: (chartInstance: Chart, options?: any) => void;
    }

    /**
     * A union type for options for all chart types.
     *
     * @deprecated This is a hack for supporting all chart types in one interface.
     * A better way is to use a specific chart type option, i.e. one of:
     * * ChartDataSetsLine
     * * ChartDataSetsBar
     * * ChartDataSetsRadar
     * * ChartDataSetsDoughnut
     * * ChartDataSetsPolarArea
     * * ChartDataSetsBubble
     * * ChartDataSetsScatter
     */
    interface ChartDataSets {
        type?: ChartType | string;

        // [Charts/Line](https://www.chartjs.org/docs/latest/charts/line.html)
        // backgroundColor?: ChartColor; // A more general type is required by a different chart type below
        borderCapStyle?: CapStyleType;
        // borderColor?: ChartColor; // A more general type is required by a different chart type below
        borderDash?: number[];
        borderDashOffset?: number;
        borderJoinStyle?: JoinStyleType;
        // borderWidth?: number; // A more general type is required by a different chart type below
        cubicInterpolationMode?: 'default' | 'monotone';
        fill?: boolean | string;
        label?: string;
        lineTension?: number;
        pointBackgroundColor?: ScriptableIndexable<ChartColor>;
        pointBorderColor?: ScriptableIndexable<ChartColor>;
        pointBorderWidth?: ScriptableIndexable<number>;
        pointHitRadius?: ScriptableIndexable<number>;
        pointHoverBackgroundColor?: ScriptableIndexable<ChartColor>;
        pointHoverBorderColor?: ScriptableIndexable<ChartColor>;
        pointHoverBorderWidth?: ScriptableIndexable<number>;
        pointHoverRadius?: ScriptableIndexable<number>;
        pointRadius?: ScriptableIndexable<number>;
        pointRotation?: ScriptableIndexable<number>;
        pointStyle?: ScriptableIndexable<PointStyle | ChartPointImageType>;
        showLine?: boolean;
        spanGaps?: boolean;
        steppedLine?: 'before' | 'after' | 'middle' | boolean;
        xAxisID?: string;
        yAxisID?: string;
        // data: number[] | ChartPointLineSparse[];

        // [Charts/Bar](https://www.chartjs.org/docs/latest/charts/bar.html)
        backgroundColor?: ScriptableIndexable<ChartColor>;
        borderColor?: ScriptableIndexable<ChartColor>;
        borderSkipped?: ScriptableIndexable<PositionType | boolean>;
        borderWidth?: ScriptableIndexable<number | ChartBorderWidth>;
        // data: number[] | ChartPointBarNumeric[] | ChartPointBarTimeT[] | ChartPointBarTimeX[];
        // hoverBackgroundColor?: Indexable<ChartColor>; // A more general type is required by a different chart type below
        // hoverBorderColor?: Indexable<ChartColor>; // A more general type is required by a different chart type below
        // hoverBorderWidth?: Indexable<number>; // A more general type is required by a different chart type below
        // label?: string; // Already specified in a previous chart type section
        // xAxisID?: string; // Already specified in a previous chart type section
        // yAxisID?: string; // Already specified in a previous chart type section
        stack?: string;

        // [Charts/Radar](https://www.chartjs.org/docs/latest/charts/radar.html)
        // backgroundColor?: ChartColor; // Already specified in a previous chart type section
        // borderCapStyle?: CapStyleType; // Already specified in a previous chart type section
        // borderColor?: ChartColor; // Already specified in a previous chart type section
        // borderDash?: number[]; // Already specified in a previous chart type section
        // borderDashOffset?: number; // Already specified in a previous chart type section
        // borderJoinStyle?: JoinStyleType; // Already specified in a previous chart type section
        // borderWidth?: number; // Already specified in a previous chart type section
        // fill?: FillType; // Already specified in a previous chart type section
        // label?: string; // Already specified in a previous chart type section
        // lineTension?: number; // Already specified in a previous chart type section
        // pointBackgroundColor?: ScriptableIndexable<ChartColor>; // Already specified in a previous chart type section
        // pointBorderColor?: ScriptableIndexable<ChartColor>; // Already specified in a previous chart type section
        // pointBorderWidth?: ScriptableIndexable<number>; // Already specified in a previous chart type section
        // pointHitRadius?: ScriptableIndexable<number>; // Already specified in a previous chart type section
        // pointHoverBackgroundColor?: ScriptableIndexable<ChartColor>; // Already specified in a previous chart type section
        // pointHoverBorderColor?: ScriptableIndexable<ChartColor>; // Already specified in a previous chart type section
        // pointHoverBorderWidth?: ScriptableIndexable<number>; // Already specified in a previous chart type section
        // pointHoverRadius?: ScriptableIndexable<number>; // Already specified in a previous chart type section
        // pointRadius?: ScriptableIndexable<number>; // Already specified in a previous chart type section // Already specified in a previous chart type section
        // pointRotation?: ScriptableIndexable<number>; // Already specified in a previous chart type section
        // pointStyle?: ScriptableIndexable<PointStyle | ChartPointImageType>; // Already specified in a previous chart type section

        // [Charts/Doughnut & Pie](https://www.chartjs.org/docs/latest/charts/doughnut.html)
        // backgroundColor?: ScriptableIndexable<ChartColor>; // Already specified in a previous chart type section
        borderAlign?: ScriptableIndexable<AlignType>;
        // borderColor?: ScriptableIndexable<ChartColor>; // Already specified in a previous chart type section
        // borderWidth?: ScriptableIndexable<number>; // Already specified in a previous chart type section
        // data: number[];
        hoverBackgroundColor?: ScriptableIndexable<ChartColor>;
        hoverBorderColor?: ScriptableIndexable<ChartColor>;
        hoverBorderWidth?: ScriptableIndexable<number>;
        weight?: number;

        // [Charts/Polar Area](https://www.chartjs.org/docs/latest/charts/polar.html)
        // backgroundColor?: ScriptableIndexable<ChartColor>; // Already specified in a previous chart type section
        // borderAlign?: ScriptableIndexable<AlignType>; // Already specified in a previous chart type section
        // borderColor?: ScriptableIndexable<ChartColor>; // Already specified in a previous chart type section
        // borderWidth?: ScriptableIndexable<number>; // Already specified in a previous chart type section
        // data: number[];
        // hoverBackgroundColor?: ScriptableIndexable<ChartColor>; // Already specified in a previous chart type section
        // hoverBorderColor?: ScriptableIndexable<ChartColor>; // Already specified in a previous chart type section
        // hoverBorderWidth?: ScriptableIndexable<number>; // Already specified in a previous chart type section

        // [Charts/Bubble](https://www.chartjs.org/docs/latest/charts/bubble.html)
        // backgroundColor?: ScriptableIndexable<ChartColor>; // Already specified in a previous chart type section
        // borderColor?: ScriptableIndexable<ChartColor>; // Already specified in a previous chart type section
        // borderWidth?: ScriptableIndexable<number>; // Already specified in a previous chart type section
        // data: ChartPointBubble[];
        // hoverBackgroundColor?: ScriptableIndexable<ChartColor>; // Already specified in a previous chart type section
        // hoverBorderColor?: ScriptableIndexable<ChartColor>; // Already specified in a previous chart type section // Already specified in a previous chart type section
        // hoverBorderWidth?: ScriptableIndexable<number>;
        hoverRadius?: ScriptableIndexable<number>;
        hitRadius?: ScriptableIndexable<number>;
        // label?: string; // Already specified in a previous chart type section
        // pointStyle?: ScriptableIndexable<PointStyle>; // Already specified in a previous chart type section
        rotation?: ScriptableIndexable<number>;
        radius?: ScriptableIndexable<number>;

        // [Charts/Scatter](https://www.chartjs.org/docs/latest/charts/scatter.html)
        // data: ChartPointScatter[];

        data?:
        | Array<Optional<number>>
        | ChartPointLineSparse[]
        | ChartPointBarNumeric[]
        | ChartPointBarTimeT[]
        | ChartPointBarTimeX[]
        | ChartPointBubble[]
        | ChartPointScatter[];
    }

    /**
     * @deprecated since version chart.js@2.6.0
     */
    interface ChartAnimationParameter {
        chartInstance?: any;
        animationObject?: any;
    }

    /**
     * @deprecated Use one of the specific chart point objects:
     * * ChartPointLineSparse
     * * ChartPointBarNumeric
     * * ChartPointBarTimeT
     * * ChartPointBarTimeX
     * * ChartPointBubble
     * * ChartPointScatter
     */
    interface ChartPoint {
        x?: number | string | Date;
        y?: number | string | Date;
        r?: number;
        t?: number | string | Date;
    }

    /**
     * @deprecated Use one of the specific tick option objects:
     * * CategoryTickOptions
     * * LinearTickOptions
     * * LogarithmicTickOptions
     * * TimeTickOptions
     * * RadialLinearTickOptions
     */
    interface TickOptions extends NestedTickOptions {
        minor?: NestedTickOptions | false;
        major?: NestedTickOptions | false;
    }

    /**
     * @deprecated
     */
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

    /**
     * @deprecated Use CommonScale
     */
    type CommonAxe = CommonScale;

    /**
     * @deprecated Use a more specific type, e.g.:
     * * CategoryScale
     * * LinearScale
     * * LogarithmicScale
     * * TimeScale
     * * RadialLinearScale
     */
    interface ChartXAxe extends CartesianScale {
        categoryPercentage?: number;
        barPercentage?: number;
        distribution?: 'linear' | 'series';
    }

    /**
     * @deprecated Use a more specific type, e.g.:
     * * CategoryScale
     * * LinearScale
     * * LogarithmicScale
     * * TimeScale
     */
    // tslint:disable-next-line no-empty-interface
    interface ChartYAxe extends CartesianScale {
    }

    /**
     * @deprecated Use TimeOptions (don't confuse with CartesianTimeScale)
     */
    type TimeScale = TimeOptions;
}

export = Chart;
export as namespace Chart;
