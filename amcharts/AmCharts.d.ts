// Type definitions for amCharts 3
// Project: http://www.amcharts.com/
// Definitions by: avonwyss <https://github.com/avonwyss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Generated from web help on 2016-09-14 18:00:08Z

/** Namespace of the framework which holds the general settings, gets automatically injected to document since the source has been included. ExampleAmCharts.useUTC = true; AmCharts.processDelay = 100; */
declare namespace AmCharts {
    /** Set to true if you're using AmCharts with an asynchronous loader such as RequireJS */
    var isReady: boolean;

    /** Set it to true if you have base href set in your web page header. This will fix rendering issues caused by this feature, like masks filters not working, causing graphs to protrude from plot area.
         @default false
     */
    var baseHref: boolean;

    /** Horizontal smoothing factor (used by smoothedLine graph)
         @default 3
     */
    var bezierX: number;

    /** Vertical smoothing factor (sed by smootheLine graph).
         @default 6
     */
    var bezierY: number;

    /** This array will hold references to all instances of the charts or maps created on the same page. */
    var charts: AmChart[];

    /** Array of day names, used when formatting dates (if categoryAxis.parseDates is set to true)
         @default ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
     */
    var dayNames: string[];

    /** Array of month names, used when formatting dates (if categoryAxis.parseDates is set to true)
         @default ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
     */
    var monthNames: string[];

    /** Delay in ms at which each chart on the page should be rendered. This is very handy if you have a lot of charts on the page and do not want to overload the device CPU.
         @default 0
     */
    var processDelay: number;

    /** Array of short versions of day names, used when formatting dates (if categoryAxis.parseDates is set to true)
         @default ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
     */
    var shortDayNames: string[];

    /** Array of short versions of month names, used when formatting dates (if categoryAxis.parseDates is set to true)
         @default ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
     */
    var shortMonthNames: string[];

    /** You can set theme for all the charts on your page by setting: AmCharts.theme = AmCharts.themes.light; // or some other theme. If you are creating charts using JavaScript API, not JSON, then this is quite a comfortable way, as you won't need to pass theme to each object you create. Note, you should set theme before write method is called. There is no way to change theme of already created chart, you have to create chart's instance once more if you want to change theme. */
    var theme: string;

    /** Set it to true if you want UTC time to be used instead of local time.
         @default false
     */
    var useUTC: boolean;
    
    /** Object with themes */
    var themes: any;

    /** handler is a method which will be called before initializing the chart. types is array of strings, specifying which chart types should call this method. If you don't set any type, all the charts will call this method. When handler method is called, chart instance is passed as an attribute. You can use this feature to preprocess chart data or do some other things you need before initializing the chart. */
    function addInitHandler(handler: (event: any) => void, types?: string[]): void;

    /** Format the number according to rules set in prefixesBig, prefixesSmall and numberFormatter. You can use chart instance's "prefixesOfSmallNumbers", "prefixesOfBigNumbers" as well as "precision", "decimalSeparator" and "thousandsSeparator" properties to form your request. var formatted = AmCharts.addPrefix( value, chart.prefixesOfBigNumbers, chart.prefixesOfSmallNumbers, { precision: chart.precision, decimalSeparator: chart.decimalSeparator, thousandsSeparator: chart.thousandsSeparator }); */
    function addPrefix(value: number, prefixesBig: { number: number, prefix: string }[], prefixesSmall: { number: number, prefix: string }[], numberFormatter: { precision: number, decimalSeparator: string, thousandsSeparator: string }): void;

    /** Clears all the charts on page, removes listeners and intervals. */
    function clear(): void;

    /** You can use this method to format date object into date string. */
    function formatDate(date: Date, format: string): void;

    /** Returns string formatter with the provided settings. Formatter is an object with precision, decimalSeparator and thousandsSeparator defined, like: {precision: 2, decimalSeparator: '.', thousandsSeparator: ','}; If you don't need to adjust precision set it to -1. zeroCount defines how many zeros should be added after comma (useful when formatting currencies). */
    function formatNumber(number: number, formatter: { precision: number, decimalSeparator: string, thousandsSeparator: string }, zeroCount: number): void;

    /** Creates chart. container can be either id or the reference to the element you want the chart to be placed in, chartConfig is JSON object with chart properties defined and delay is time in ms, in which the chart should be rendered (renders instantly if not set). */
    function makeChart<TChart extends AmChart>(container: HTMLElement | string, config: AmChartConfig, delay?: number): TChart;

    /** Legacy "ready" event, not included in V3 docs. Use makeChart instead - https://www.amcharts.com/kbase/your-first-chart-with-amcharts/ */
    function ready(callback: () => void): void;

    /** You can use this method to convert date string to date object. Please note, that literal name codes such as MMM or MMMM are not supported. */
    function stringToDate(string: string, format: string): void;


    /** See https://www.amcharts.com/kbase/using-data-loader-plugin/ for more information */
    interface DataLoaderConfig {
        url: string;

        /** If set to false (not recommended) everything will wait until data is fully loaded
             @default true
         */
        async?: boolean;

        /** Callback function to execute when loader is done */
        complete?: Function;

        /** [CSV only] a delimiter for columns (use t for tab delimiters)
             @default ,
         */
        delimiter?: string;

        /** Callback function to execute if file load fails */
        error?: Function;

        /** Type of data: json, csv
             @default json
         */
        format?: "json" | "csv";

        /** Callback function to execute when file is successfully loaded (might be invoked multiple times) */
        load?: Function;

        /** If set to true no styles will be applied to “Data loading” curtain
             @default false
         */
        noStyles?: boolean;

        /** If set to function reference, that function will be called to “post-process” loaded data before passing it on to chart */
        postProcess?: Function;

        /** Show loading errors in a chart curtain
             @default true
         */
        showErrors?: boolean;

        /** Show curtain over the chart area when loading data
             @default true
         */
        showCurtain?: boolean;

        /** Reload data every X seconds
             @default 0
         */
        reload?: number;

        /** [CSV only] add data points in revers order
             @default false
         */
        reverse?: boolean;

        /** [CSV only] skip X first rows in data (includes first row if useColumnNames is used)
             @default 0
         */
        skip?: number;

        /** Add current timestamp to data URLs (to avoid caching)
             @default false
         */
        timestamp?: boolean;

        /** [CSV only] Use first row in data as column names when parsing
             @default false
         */
        useColumnNames?: boolean;
    }

    interface ExportConfig {
        enabled: boolean;
        libs?: any[];
        menu?: (string | {
            format: string;
            label: string;
            title: string;
        })[];
    }

    interface ResponsiveConfig {
        enabled: boolean;
        rules: {
            minWidth?: number;
            maxWidth?: number;
            maxHeight?: number;
            minHeight?: number;
            rotate?: boolean;
            legendPosition: "top" | "bottom" | "left" | "right";
            overrides: AmChartConfig;
        }[];
    }


    /** Extension for AmChart to create gauge charts. Examplevar chart = AmCharts.makeChart("chartdiv",{ "type": "gauge", "arrows": [ { "value": 130 } ], "titles": [ { "text": "Speedometer", "size": 15 } ], "axes": [ { "bottomText": "0 km/h", "endValue": 220, "valueInterval": 10, "bands": [ { "color": "#00CC00", "endValue": 90, "startValue": 0 }, { "color": "#ffac29", "endValue": 130, "startValue": 90 }, { "color": "#ea3838", "endValue": 220, "startValue": 130, "innerRadius": "95%" } ] } ] }); */
    interface AmAngularGaugeConfig extends AmChartConfig {

        /** Uses the whole space of the canvas to draw the gauge.
             @default true
         */
        adjustSize?: boolean;

        /** Array of arrows. */
        arrows?: GaugeArrowConfig[];

        /** Array of axes. */
        axes?: GaugeAxisConfig[];

        /** In case you use gauge to create a clock, set this to true.
             @default false
         */
        clockWiseOnly?: boolean;

        /** Gauge face opacity.
             @default 0
         */
        faceAlpha?: number;

        /** Gauge face border opacity.
             @default 0
         */
        faceBorderAlpha?: number;

        /** Gauge face border color.
             @default #555555
         */
        faceBorderColor?: string;

        /** Gauge face border width.
             @default 1
         */
        faceBorderWidth?: number;

        /** Gauge face color, requires faceAlpha &gt; 0
             @default #FAFAFA
         */
        faceColor?: string;

        /** Gauge face image-pattern. Example: {"url":"../amcharts/patterns/black/pattern1.png", "width":4, "height":4} */
        facePattern?: { url: string, width: number, height: number };

        /** Gauge's horizontal position in pixel, origin is the center. Centered by default. */
        gaugeX?: number;

        /** Gauge's vertical position in pixel, origin is the center. Centered by default. */
        gaugeY?: number;

        /** Bottom spacing between chart and container.
             @default 10
         */
        marginBottom?: number;

        /** Left-hand spacing between chart and container.
             @default 10
         */
        marginLeft?: number;

        /** Right-hand spacing between chart and container.
             @default 10
         */
        marginRight?: number;

        /** Top spacing between chart and container.
             @default 10
         */
        marginTop?: number;

        /** Minimum radius of a gauge.
             @default 10
         */
        minRadius?: number;

        /** Duration of arrow animation.
             @default 1
         */
        startDuration?: number;

        /** Transition effect of the arrows, possible effects: easeOutSine, easeInSine, elastic, bounce.
             @default easeInSine
         */
        startEffect?: "easeOutSine" | "easeInSine" | "elastic" | "bounce";
    }


    /** Extension for AmChart to create gauge charts. Examplevar chart = AmCharts.makeChart("chartdiv",{ "type": "gauge", "arrows": [ { "value": 130 } ], "titles": [ { "text": "Speedometer", "size": 15 } ], "axes": [ { "bottomText": "0 km/h", "endValue": 220, "valueInterval": 10, "bands": [ { "color": "#00CC00", "endValue": 90, "startValue": 0 }, { "color": "#ffac29", "endValue": 130, "startValue": 90 }, { "color": "#ea3838", "endValue": 220, "startValue": 130, "innerRadius": "95%" } ] } ] }); */
    class AmAngularGauge extends AmChart {

        /** Uses the whole space of the canvas to draw the gauge.
             @default true
         */
        adjustSize: boolean;

        /** Array of arrows. */
        arrows: GaugeArrow[];

        /** Array of axes. */
        axes: GaugeAxis[];

        /** In case you use gauge to create a clock, set this to true.
             @default false
         */
        clockWiseOnly: boolean;

        /** Gauge face opacity.
             @default 0
         */
        faceAlpha: number;

        /** Gauge face border opacity.
             @default 0
         */
        faceBorderAlpha: number;

        /** Gauge face border color.
             @default #555555
         */
        faceBorderColor: string;

        /** Gauge face border width.
             @default 1
         */
        faceBorderWidth: number;

        /** Gauge face color, requires faceAlpha &gt; 0
             @default #FAFAFA
         */
        faceColor: string;

        /** Gauge face image-pattern. Example: {"url":"../amcharts/patterns/black/pattern1.png", "width":4, "height":4} */
        facePattern: { url: string, width: number, height: number };

        /** Gauge's horizontal position in pixel, origin is the center. Centered by default. */
        gaugeX: number;

        /** Gauge's vertical position in pixel, origin is the center. Centered by default. */
        gaugeY: number;

        /** Bottom spacing between chart and container.
             @default 10
         */
        marginBottom: number;

        /** Left-hand spacing between chart and container.
             @default 10
         */
        marginLeft: number;

        /** Right-hand spacing between chart and container.
             @default 10
         */
        marginRight: number;

        /** Top spacing between chart and container.
             @default 10
         */
        marginTop: number;

        /** Minimum radius of a gauge.
             @default 10
         */
        minRadius: number;

        /** Duration of arrow animation.
             @default 1
         */
        startDuration: number;

        /** Transition effect of the arrows, possible effects: easeOutSine, easeInSine, elastic, bounce.
             @default easeInSine
         */
        startEffect: "easeOutSine" | "easeInSine" | "elastic" | "bounce";

        /** Adds arrow to the chart. */
        addArrow(arrow: GaugeArrow): void;

        /** Adds axis to angular gauge. */
        addAxis(axis: GaugeAxis): void;

        /** Removes arrow from the chart. */
        removeArrow(arrow: GaugeArrow): void;

        /** Removes axis from the chart. */
        removeAxis(axis: GaugeAxis): void;
    }


    /** Creates the balloons ( tooltips ) of the chart, It follows the mouse cursor when you roll-over the data items. The framework generates the instances automatically you only need to adjust the appearance to your needs. Examplevar chart = AmCharts.makeChart("chartdiv", { ... "balloon": { "adjustBorderColor": true, "color": "#000000", "cornerRadius": 5, "fillColor": "#FFFFFF" } }); */
    interface AmBalloonConfig {

        /** If this is set to true, border color instead of background color will be changed when user rolls-over the slice, graph, etc.
             @default true
         */
        adjustBorderColor?: boolean;

        /** Duration of balloon movement from previous point to current point, in seconds.
             @default 0.3
         */
        animationDuration?: number;

        /** Balloon border opacity. Value range is 0 - 1.
             @default 1
         */
        borderAlpha?: number;

        /** Balloon border color. Will only be used of adjustBorderColor is false.
             @default #FFFFFF
         */
        borderColor?: string;

        /** Balloon border thickness.
             @default 2
         */
        borderThickness?: number;

        /** Color of text in the balloon.
             @default #000000
         */
        color?: string;

        /** Balloon corner radius.
             @default 0
         */
        cornerRadius?: number;

        /** In case your balloon has links, you have to set this to true in order links to work.
             @default true
         */
        disableMouseEvents?: boolean;

        /** Allows having drop-shaped balloons. Note, these balloons will not check for overlapping with other balloons, or if they go outside plot area. It also does not change pointer orientation automatically based on its vertical position like regular balloons do. You can use pointerOrientation property if you want it to point to different direction. Not supported by IE8.
             @default false
         */
        drop?: boolean;

        /** Use this property to disable balloons for certain value axes. I.e.: "valueAxes": [{ // ... // value balloons are shown }, { // ... "balloon": { "enabled": false } // value balloons are not shown }]
             @default true
         */
        enabled?: boolean;

        /** Duration of a fade out animation, in seconds.
             @default 0.3
         */
        fadeOutDuration?: number;

        /** Balloon background opacity.
             @default 0.8
         */
        fillAlpha?: number;

        /** Balloon background color. Usually balloon background color is set by the chart. Only if "adjustBorderColor" is "true" this color will be used.
             @default #FFFFFF
         */
        fillColor?: string;

        /** Specifies if balloon should follow mouse when hovering the slice/column/bullet or stay in fixed position (this does not affect balloon behavior if ChartCursor is used).
             @default true
         */
        fixedPosition?: boolean;

        /** Size of text in the balloon. Chart's fontSize is used by default. */
        fontSize?: number;

        /** Horizontal padding of the balloon.
             @default 8
         */
        horizontalPadding?: number;

        /** Maximum width of a balloon. */
        maxWidth?: number;

        /** Defines horizontal distance from mouse pointer to balloon pointer. If you set it to a small value, the balloon might flicker, as mouse might lose focus on hovered object. NOTE: this setting is ignored unless fixedPosition is set to false.
             @default 1
         */
        offsetX?: number;

        /** Defines vertical distance from mouse pointer to balloon pointer. If you set it to a small value, the balloon might flicker, as mouse might lose focus on hovered object. NOTE: this setting is ignored unless fixedPosition is set to false.
             @default 6
         */
        offsetY?: number;

        /** Works only if balloon.drop set to true, specifies direction of a pointer.
             @default down
         */
        pointerOrientation?: string;

        /** The width of the pointer (arrow) "root". Only used if cornerRadius is 0.
             @default 6
         */
        pointerWidth?: number;

        /** Opacity of a shadow.
             @default 0.4
         */
        shadowAlpha?: number;

        /** Color of a shadow.
             @default #000000
         */
        shadowColor?: string;

        /** If cornerRadius of a balloon is &gt;0, showBullet is set to true for value balloons when ChartCursor is used. If you don't want the bullet near the balloon, set it to false: chart.balloon.showBullet = false
             @default false
         */
        showBullet?: boolean;

        /** Text alignment, possible values "left", "middle" and "right"
             @default middle
         */
        textAlign?: "left" | "middle" | "right";

        /** Vertical padding of the balloon.
             @default 4
         */
        verticalPadding?: number;
    }


    /** Creates the balloons ( tooltips ) of the chart, It follows the mouse cursor when you roll-over the data items. The framework generates the instances automatically you only need to adjust the appearance to your needs. Examplevar chart = AmCharts.makeChart("chartdiv", { ... "balloon": { "adjustBorderColor": true, "color": "#000000", "cornerRadius": 5, "fillColor": "#FFFFFF" } }); */
    class AmBalloon {

        /** If this is set to true, border color instead of background color will be changed when user rolls-over the slice, graph, etc.
             @default true
         */
        adjustBorderColor: boolean;

        /** Duration of balloon movement from previous point to current point, in seconds.
             @default 0.3
         */
        animationDuration: number;

        /** Balloon border opacity. Value range is 0 - 1.
             @default 1
         */
        borderAlpha: number;

        /** Balloon border color. Will only be used of adjustBorderColor is false.
             @default #FFFFFF
         */
        borderColor: string;

        /** Balloon border thickness.
             @default 2
         */
        borderThickness: number;

        /** Color of text in the balloon.
             @default #000000
         */
        color: string;

        /** Balloon corner radius.
             @default 0
         */
        cornerRadius: number;

        /** In case your balloon has links, you have to set this to true in order links to work.
             @default true
         */
        disableMouseEvents: boolean;

        /** Allows having drop-shaped balloons. Note, these balloons will not check for overlapping with other balloons, or if they go outside plot area. It also does not change pointer orientation automatically based on its vertical position like regular balloons do. You can use pointerOrientation property if you want it to point to different direction. Not supported by IE8.
             @default false
         */
        drop: boolean;

        /** Use this property to disable balloons for certain value axes. I.e.: "valueAxes": [{ // ... // value balloons are shown }, { // ... "balloon": { "enabled": false } // value balloons are not shown }]
             @default true
         */
        enabled: boolean;

        /** Duration of a fade out animation, in seconds.
             @default 0.3
         */
        fadeOutDuration: number;

        /** Balloon background opacity.
             @default 0.8
         */
        fillAlpha: number;

        /** Balloon background color. Usually balloon background color is set by the chart. Only if "adjustBorderColor" is "true" this color will be used.
             @default #FFFFFF
         */
        fillColor: string;

        /** Specifies if balloon should follow mouse when hovering the slice/column/bullet or stay in fixed position (this does not affect balloon behavior if ChartCursor is used).
             @default true
         */
        fixedPosition: boolean;

        /** Size of text in the balloon. Chart's fontSize is used by default. */
        fontSize: number;

        /** Horizontal padding of the balloon.
             @default 8
         */
        horizontalPadding: number;

        /** Maximum width of a balloon. */
        maxWidth: number;

        /** Defines horizontal distance from mouse pointer to balloon pointer. If you set it to a small value, the balloon might flicker, as mouse might lose focus on hovered object. NOTE: this setting is ignored unless fixedPosition is set to false.
             @default 1
         */
        offsetX: number;

        /** Defines vertical distance from mouse pointer to balloon pointer. If you set it to a small value, the balloon might flicker, as mouse might lose focus on hovered object. NOTE: this setting is ignored unless fixedPosition is set to false.
             @default 6
         */
        offsetY: number;

        /** Works only if balloon.drop set to true, specifies direction of a pointer.
             @default down
         */
        pointerOrientation: string;

        /** The width of the pointer (arrow) "root". Only used if cornerRadius is 0.
             @default 6
         */
        pointerWidth: number;

        /** Opacity of a shadow.
             @default 0.4
         */
        shadowAlpha: number;

        /** Color of a shadow.
             @default #000000
         */
        shadowColor: string;

        /** If cornerRadius of a balloon is &gt;0, showBullet is set to true for value balloons when ChartCursor is used. If you don't want the bullet near the balloon, set it to false: chart.balloon.showBullet = false
             @default false
         */
        showBullet: boolean;

        /** Text alignment, possible values "left", "middle" and "right"
             @default middle
         */
        textAlign: "left" | "middle" | "right";

        /** Vertical padding of the balloon.
             @default 4
         */
        verticalPadding: number;

        /** Hides balloon. */
        hide(): void;

        /** Defines a square within which the balloon should appear. Bounds are set by chart class, you don't need to call this method yourself. */
        setBounds(left: number | string, top: number | string, right: number | string, bottom: number | string): void;

        /** Sets coordinates the balloon should point to. */
        setPosition(x: number | string, y: number | string): void;
    }


    /** Base class of AmCharts. It can not be instantiated explicitly. Its makeChart method gives you the possibility to create charts easily with a single object. Examplevar chart = AmCharts.makeChart("chartdiv",{ "type": "serial", "categoryField": "category", "categoryAxis": { "gridPosition": "start" }, "graphs": [ { "title": "Graph title", "valueField": "column-1" } ], "valueAxes": [ { "title": "Axis title" } ], "legend": { "useGraphSettings": true }, "titles": [ { "size": 15, "text": "Chart Title" } ], "dataProvider": [ { "category": "category 1", "column-1": 8 }, { "category": "category 2", "column-1": 10 }, ] }); */
    interface AmChartConfig {

        /** When enabled, chart adds aria-label attributes to columns, bullets or map objects. You can control values of these labels using properties like accessibleLabel of AmGraph. Note, not all screen readers support these tags. We tested this mostly with NVDA Screen reader. WAI-ARIA is now official W3 standard, so in future more readers will handle this well. We will be improving accessibility on our charts, so we would be glad to hear your feedback.
             @default true
         */
        accessible?: boolean;

        /** &lt;title&gt; element will be added to &lt;svg&gt; node if you set any. It is read by most of the screen readers. */
        accessibleTitle?: string;

        /** Specifies, if class names should be added to chart elements.
             @default false
         */
        addClassNames?: boolean;

        /** Array of Labels. Example of label object, with all possible properties: {"x": 20, "y": 20, "text": "this is label", "align": "left", "size": 12, "color": "#CC0000", "alpha": 1, "rotation": 0, "bold": true, "url": "http://www.amcharts.com"}
             @default []
         */
        allLabels?: LabelConfig[];

        /** If you set it to true the chart will automatically monitor changes of display style of chart’s container (or any of it’s parents) and will render chart correctly if it is changed from none to block. We recommend setting it to true if you change this style at a run time, as it affects performance a bit.
             @default false
         */
        autoDisplay?: boolean;

        /** Set this to false if you don't want chart to resize itself whenever its parent container size changes.
             @default true
         */
        autoResize?: boolean;

        /** If you set it to true and your chart div (or any of the parent div) has css scale applied, the chart will position mouse at a correct position. Default value is false because this operation consumes some CPU and quite a few people are using css transfroms.
             @default false
         */
        autoTransform?: boolean;

        /** Opacity of background. Set it to &gt;0 value if you want backgroundColor to work. However we recommend changing div's background-color style for changing background color.
             @default 0
         */
        backgroundAlpha?: number;

        /** Background color. You should set backgroundAlpha to &gt;0 value in order background to be visible. We recommend setting background color directly on a chart's DIV instead of using this property.
             @default #FFFFFF
         */
        backgroundColor?: string;

        /** The chart creates AmBalloon class itself. If you want to customize balloon, get balloon instance using this property, and then change balloon's properties.
             @default AmBalloon
         */
        balloon?: AmBalloonConfig;

        /** Opacity of chart's border. Value range is 0 - 1.
             @default 0
         */
        borderAlpha?: number;

        /** Color of chart's border. You should set borderAlpha &gt;0 in order border to be visible. We recommend setting border color directly on a chart's DIV instead of using this property.
             @default #000000
         */
        borderColor?: string;

        /** This prefix is added to all class names which are added to all visual elements of a chart in case addClassNames is set to true.
             @default amcharts
         */
        classNamePrefix?: string;

        /** Text color.
             @default #000000
         */
        color?: string;

        /** Non-commercial version only. Specifies position of link to amCharts site. Allowed values are: top-left, top-right, bottom-left and bottom-right.
             @default top-left
         */
        creditsPosition?: string;

        /** A config object for Data Loader plugin. Please refer to the following page for more information. */
        dataLoader?: DataLoaderConfig;

        /** Array of data objects, for example: [{country:"US", value:524},{country:"UK", value:624},{country:"Lithuania", value:824}]. You can have any number of fields and use any field names. In case of AmMap, data provider should be MapData object. The data set data. Important: if you are using date/time-based category axis, the data points needs to come pre-ordered in ascending order. Data with incorrect order might result in visual and functional glitches on the chart. */
        dataProvider?: any;

        /** Decimal separator.
             @default .
         */
        decimalSeparator?: string;

        /** Using this property you can add any additional information to SVG, like SVG filters or clip paths. The structure of this object should be identical to XML structure of a object you are adding, only in JSON format. */
        defs?: any;

        /** Export config. Specifies how export to image/data export/print/annotate menu will look and behave. You can find a lot of examples in amcharts/plugins/export folder. More details can be found here. */
        export?: ExportConfig;

        /** Font family.
             @default Verdana
         */
        fontFamily?: string;

        /** Font size.
             @default 11
         */
        fontSize?: number;

        /** If you set this to true, the lines of the chart will be distorted and will produce hand-drawn effect. Try to adjust chart.handDrawScatter and chart.handDrawThickness properties for a more scattered result.
             @default false
         */
        handDrawn?: boolean;

        /** Defines by how many pixels hand-drawn line (when handDrawn is set to true) will fluctuate.
             @default 2
         */
        handDrawScatter?: number;

        /** Defines by how many pixels line thickness will fluctuate (when handDrawn is set to true).
             @default 1
         */
        handDrawThickness?: number;

        /** Time, in milliseconds after which balloon is hidden if the user rolls-out of the object. Might be useful for AmMap to avoid balloon flickering while moving mouse over the areas. Note, this is not duration of fade-out. Duration of fade-out is set in AmBalloon class.
             @default 150
         */
        hideBalloonTime?: number;

        /** Allows changing language easily. Note, you should include language js file from amcharts/lang or ammap/lang folder and then use variable name used in this file, like chart.language = "de"; Note, for maps this works differently - you use language only for country names, as there are no other strings in the maps application. */
        language?: string;

        /** Legend of a chart. */
        legend?: AmLegendConfig;

        /** Read-only. Reference to the div of the legend. */
        legendDiv?: string;

        /** You can add listeners of events using this property. Example: listeners = [{"event":"dataUpdated", "method":handleEvent}]; */
        listeners?: { event: string, method: (event: any) => void };

        /** This setting affects touch-screen devices only. If a chart is on a page, and panEventsEnabled are set to true, the page won't move if the user touches the chart first. If a chart is big enough and occupies all the screen of your touch device, the user won’t be able to move the page at all. If you think that selecting/panning the chart or moving/pinching the map is a primary purpose of your users, you should set panEventsEnabled to true, otherwise - false.
             @default true
         */
        panEventsEnabled?: boolean;

        /** Specifies absolute or relative path to amCharts files, i.e. "amcharts/". (where all .js files are located) If relative URLs are used, they will be relative to the current web page, displaying the chart. You can also set path globally, using global JavaScript variable AmCharts_path. If this variable is set, and "path" is not set in chart config, the chart will assume the path from the global variable. This allows setting amCharts path globally. I.e.: var AmCharts_path = "/libs/amcharts/"; "path" parameter will be used by the charts to locate it's files, like images, plugins or patterns.
             @default amcharts/
         */
        path?: string;

        /** Specifies path to the folder where images like resize grips, lens and similar are. IMPORTANT: Since V3.14.12, you should use "path" to point to amCharts directory instead. The "pathToImages" will be automatically set and does not need to be in the chart config, unless you keep your images separately from other amCharts files. */
        pathToImages?: string;

        /** Precision of percent values. -1 means percent values won't be rounded at all and show as they are.
             @default 2
         */
        percentPrecision?: number;

        /** Precision of values. -1 means values won't be rounded at all and show as they are.
             @default -1
         */
        precision?: number;

        /** Prefixes which are used to make big numbers shorter: 2M instead of 2000000, etc. Prefixes are used on value axes and in the legend. To enable prefixes, set usePrefixes property to true.
             @default [{"number":1e+3,"prefix":"k"},{"number":1e+6,"prefix":"M"},{"number":1e+9,"prefix":"G"},{"number":1e+12,"prefix":"T"},{"number":1e+15,"prefix":"P"},{"number":1e+18,"prefix":"E"},{"number":1e+21,"prefix":"Z"},{"number":1e+24,"prefix":"Y"}]
         */
        prefixesOfBigNumbers?: any[];

        /** Prefixes which are used to make small numbers shorter: 2μ instead of 0.000002, etc. Prefixes are used on value axes and in the legend. To enable prefixes, set usePrefixes property to true.
             @default [{"number":1e-24, "prefix":"y"},{"number":1e-21, "prefix":"z"},{"number":1e-18, "prefix":"a"},{"number":1e-15, "prefix":"f"},{"number":1e-12, "prefix":"p"},{"number":1e-9, "prefix":"n"},{"number":1e-6, "prefix":"μ"},{"number":1e-3, "prefix":"m"}]
         */
        prefixesOfSmallNumbers?: any[];

        /** If processTimeout is &gt; 0, 1000 data items will be parsed at a time, then the chart will make pause and continue parsing data until it finishes.
             @default 1000
         */
        processCount?: number;

        /** If you set it to 1 millisecond or some bigger value, chart will be built in chunks instead of all at once. This is useful if you work with a lot of data and the initial build of the chart takes a lot of time, which freezes the whole web application by not allowing other processes to do their job while the chart is busy.
             @default 0
         */
        processTimeout?: number;

        /** A config object for Responsive plugin. Please refer to the following page for more information. */
        responsive?: ResponsiveConfig;

        /** Charts will use SVG icons (some are loaded from images folder and some are drawn inline) if browser supports SVG. his makes icons look good on retina displays on all resolutions.
             @default true
         */
        svgIcons?: boolean;

        /** Charts which require gestures like swipe (charts with scrollbar/cursor) or pinch (maps) used to prevent regular page scrolling and could result page to stick to the same spot if the chart occupied whole screen. Now, in order these gestures to start working user has to touch the chart/maps once. Regular touch events like touching on the bar/slice/map area do not require the first tap and will show balloons and perform other tasks as usual. If you have a map or chart which occupies full screen and your page does not require scrolling, set tapToActivate to false – this will bring old behavior back.
             @default true
         */
        tapToActivate?: boolean;

        /** Theme of a chart. Config files of themes can be found in amcharts/themes/ folder. More info about using themes.
             @default none
         */
        theme?: string;

        /** Thousands separator.
             @default ,
         */
        thousandsSeparator?: string;

        /** Array of Title objects.
             @default []
         */
        titles?: TitleConfig[];

        /** If you set it to 200 (milliseconds) or so, the chart will fire clickGraphItem or clickSlice (AmSlicedChart) or clickMapObject only if user holds his/her finger for 0.2 seconds (200 ms) on the column/bullet/slice/map object.
             @default 0
         */
        touchClickDuration?: number;

        /** Type of a chart. Required when creating chart using JSON. Possible types are: serial, pie, xy, radar, funnel, gauge, map, stock. */
        type: "serial" | "pie" | "xy" | "radar" | "funnel" | "gauge" | "map" | "stock";

        /** If true, prefixes will be used for big and small numbers. You can set arrays of prefixes via prefixesOfSmallNumbers and prefixesOfBigNumbers properties.
             @default false
         */
        usePrefixes?: boolean;
    }


    /** Base class of AmCharts. It can not be instantiated explicitly. Its makeChart method gives you the possibility to create charts easily with a single object. Examplevar chart = AmCharts.makeChart("chartdiv",{ "type": "serial", "categoryField": "category", "categoryAxis": { "gridPosition": "start" }, "graphs": [ { "title": "Graph title", "valueField": "column-1" } ], "valueAxes": [ { "title": "Axis title" } ], "legend": { "useGraphSettings": true }, "titles": [ { "size": 15, "text": "Chart Title" } ], "dataProvider": [ { "category": "category 1", "column-1": 8 }, { "category": "category 2", "column-1": 10 }, ] }); */
    abstract class AmChart {

        /** When enabled, chart adds aria-label attributes to columns, bullets or map objects. You can control values of these labels using properties like accessibleLabel of AmGraph. Note, not all screen readers support these tags. We tested this mostly with NVDA Screen reader. WAI-ARIA is now official W3 standard, so in future more readers will handle this well. We will be improving accessibility on our charts, so we would be glad to hear your feedback.
             @default true
         */
        accessible: boolean;

        /** &lt;title&gt; element will be added to &lt;svg&gt; node if you set any. It is read by most of the screen readers. */
        accessibleTitle: string;

        /** Specifies, if class names should be added to chart elements.
             @default false
         */
        addClassNames: boolean;

        /** Array of Labels. Example of label object, with all possible properties: {"x": 20, "y": 20, "text": "this is label", "align": "left", "size": 12, "color": "#CC0000", "alpha": 1, "rotation": 0, "bold": true, "url": "http://www.amcharts.com"}
             @default []
         */
        allLabels: Label[];

        /** If you set it to true the chart will automatically monitor changes of display style of chart’s container (or any of it’s parents) and will render chart correctly if it is changed from none to block. We recommend setting it to true if you change this style at a run time, as it affects performance a bit.
             @default false
         */
        autoDisplay: boolean;

        /** Set this to false if you don't want chart to resize itself whenever its parent container size changes.
             @default true
         */
        autoResize: boolean;

        /** If you set it to true and your chart div (or any of the parent div) has css scale applied, the chart will position mouse at a correct position. Default value is false because this operation consumes some CPU and quite a few people are using css transfroms.
             @default false
         */
        autoTransform: boolean;

        /** Opacity of background. Set it to &gt;0 value if you want backgroundColor to work. However we recommend changing div's background-color style for changing background color.
             @default 0
         */
        backgroundAlpha: number;

        /** Background color. You should set backgroundAlpha to &gt;0 value in order background to be visible. We recommend setting background color directly on a chart's DIV instead of using this property.
             @default #FFFFFF
         */
        backgroundColor: string;

        /** The chart creates AmBalloon class itself. If you want to customize balloon, get balloon instance using this property, and then change balloon's properties.
             @default AmBalloon
         */
        balloon: AmBalloon;

        /** Opacity of chart's border. Value range is 0 - 1.
             @default 0
         */
        borderAlpha: number;

        /** Color of chart's border. You should set borderAlpha &gt;0 in order border to be visible. We recommend setting border color directly on a chart's DIV instead of using this property.
             @default #000000
         */
        borderColor: string;

        /** This prefix is added to all class names which are added to all visual elements of a chart in case addClassNames is set to true.
             @default amcharts
         */
        classNamePrefix: string;

        /** Text color.
             @default #000000
         */
        color: string;

        /** Non-commercial version only. Specifies position of link to amCharts site. Allowed values are: top-left, top-right, bottom-left and bottom-right.
             @default top-left
         */
        creditsPosition: string;

        /** A config object for Data Loader plugin. Please refer to the following page for more information. */
        dataLoader: DataLoaderConfig;

        /** Array of data objects, for example: [{country:"US", value:524},{country:"UK", value:624},{country:"Lithuania", value:824}]. You can have any number of fields and use any field names. In case of AmMap, data provider should be MapData object. The data set data. Important: if you are using date/time-based category axis, the data points needs to come pre-ordered in ascending order. Data with incorrect order might result in visual and functional glitches on the chart. */
        dataProvider: any;

        /** Decimal separator.
             @default .
         */
        decimalSeparator: string;

        /** Using this property you can add any additional information to SVG, like SVG filters or clip paths. The structure of this object should be identical to XML structure of a object you are adding, only in JSON format. */
        defs: any;

        /** Export config. Specifies how export to image/data export/print/annotate menu will look and behave. You can find a lot of examples in amcharts/plugins/export folder. More details can be found here. */
        export: ExportConfig;

        /** Font family.
             @default Verdana
         */
        fontFamily: string;

        /** Font size.
             @default 11
         */
        fontSize: number;

        /** If you set this to true, the lines of the chart will be distorted and will produce hand-drawn effect. Try to adjust chart.handDrawScatter and chart.handDrawThickness properties for a more scattered result.
             @default false
         */
        handDrawn: boolean;

        /** Defines by how many pixels hand-drawn line (when handDrawn is set to true) will fluctuate.
             @default 2
         */
        handDrawScatter: number;

        /** Defines by how many pixels line thickness will fluctuate (when handDrawn is set to true).
             @default 1
         */
        handDrawThickness: number;

        /** Time, in milliseconds after which balloon is hidden if the user rolls-out of the object. Might be useful for AmMap to avoid balloon flickering while moving mouse over the areas. Note, this is not duration of fade-out. Duration of fade-out is set in AmBalloon class.
             @default 150
         */
        hideBalloonTime: number;

        /** Allows changing language easily. Note, you should include language js file from amcharts/lang or ammap/lang folder and then use variable name used in this file, like chart.language = "de"; Note, for maps this works differently - you use language only for country names, as there are no other strings in the maps application. */
        language: string;

        /** Legend of a chart. */
        legend: AmLegend;

        /** Read-only. Reference to the div of the legend. */
        legendDiv: string;

        /** You can add listeners of events using this property. Example: listeners = [{"event":"dataUpdated", "method":handleEvent}]; */
        listeners: { event: string, method: (event: any) => void };

        /** This setting affects touch-screen devices only. If a chart is on a page, and panEventsEnabled are set to true, the page won't move if the user touches the chart first. If a chart is big enough and occupies all the screen of your touch device, the user won’t be able to move the page at all. If you think that selecting/panning the chart or moving/pinching the map is a primary purpose of your users, you should set panEventsEnabled to true, otherwise - false.
             @default true
         */
        panEventsEnabled: boolean;

        /** Specifies absolute or relative path to amCharts files, i.e. "amcharts/". (where all .js files are located) If relative URLs are used, they will be relative to the current web page, displaying the chart. You can also set path globally, using global JavaScript variable AmCharts_path. If this variable is set, and "path" is not set in chart config, the chart will assume the path from the global variable. This allows setting amCharts path globally. I.e.: var AmCharts_path = "/libs/amcharts/"; "path" parameter will be used by the charts to locate it's files, like images, plugins or patterns.
             @default amcharts/
         */
        path: string;

        /** Specifies path to the folder where images like resize grips, lens and similar are. IMPORTANT: Since V3.14.12, you should use "path" to point to amCharts directory instead. The "pathToImages" will be automatically set and does not need to be in the chart config, unless you keep your images separately from other amCharts files. */
        pathToImages: string;

        /** Precision of percent values. -1 means percent values won't be rounded at all and show as they are.
             @default 2
         */
        percentPrecision: number;

        /** Precision of values. -1 means values won't be rounded at all and show as they are.
             @default -1
         */
        precision: number;

        /** Prefixes which are used to make big numbers shorter: 2M instead of 2000000, etc. Prefixes are used on value axes and in the legend. To enable prefixes, set usePrefixes property to true.
             @default [{"number":1e+3,"prefix":"k"},{"number":1e+6,"prefix":"M"},{"number":1e+9,"prefix":"G"},{"number":1e+12,"prefix":"T"},{"number":1e+15,"prefix":"P"},{"number":1e+18,"prefix":"E"},{"number":1e+21,"prefix":"Z"},{"number":1e+24,"prefix":"Y"}]
         */
        prefixesOfBigNumbers: any[];

        /** Prefixes which are used to make small numbers shorter: 2μ instead of 0.000002, etc. Prefixes are used on value axes and in the legend. To enable prefixes, set usePrefixes property to true.
             @default [{"number":1e-24, "prefix":"y"},{"number":1e-21, "prefix":"z"},{"number":1e-18, "prefix":"a"},{"number":1e-15, "prefix":"f"},{"number":1e-12, "prefix":"p"},{"number":1e-9, "prefix":"n"},{"number":1e-6, "prefix":"μ"},{"number":1e-3, "prefix":"m"}]
         */
        prefixesOfSmallNumbers: any[];

        /** If processTimeout is &gt; 0, 1000 data items will be parsed at a time, then the chart will make pause and continue parsing data until it finishes.
             @default 1000
         */
        processCount: number;

        /** If you set it to 1 millisecond or some bigger value, chart will be built in chunks instead of all at once. This is useful if you work with a lot of data and the initial build of the chart takes a lot of time, which freezes the whole web application by not allowing other processes to do their job while the chart is busy.
             @default 0
         */
        processTimeout: number;

        /** A config object for Responsive plugin. Please refer to the following page for more information. */
        responsive: ResponsiveConfig;

        /** Charts will use SVG icons (some are loaded from images folder and some are drawn inline) if browser supports SVG. his makes icons look good on retina displays on all resolutions.
             @default true
         */
        svgIcons: boolean;

        /** Charts which require gestures like swipe (charts with scrollbar/cursor) or pinch (maps) used to prevent regular page scrolling and could result page to stick to the same spot if the chart occupied whole screen. Now, in order these gestures to start working user has to touch the chart/maps once. Regular touch events like touching on the bar/slice/map area do not require the first tap and will show balloons and perform other tasks as usual. If you have a map or chart which occupies full screen and your page does not require scrolling, set tapToActivate to false – this will bring old behavior back.
             @default true
         */
        tapToActivate: boolean;

        /** Theme of a chart. Config files of themes can be found in amcharts/themes/ folder. More info about using themes.
             @default none
         */
        theme: string;

        /** Thousands separator.
             @default ,
         */
        thousandsSeparator: string;

        /** Array of Title objects.
             @default []
         */
        titles: Title[];

        /** If you set it to 200 (milliseconds) or so, the chart will fire clickGraphItem or clickSlice (AmSlicedChart) or clickMapObject only if user holds his/her finger for 0.2 seconds (200 ms) on the column/bullet/slice/map object.
             @default 0
         */
        touchClickDuration: number;

        /** Type of a chart. Required when creating chart using JSON. Possible types are: serial, pie, xy, radar, funnel, gauge, map, stock. */
        type: "serial" | "pie" | "xy" | "radar" | "funnel" | "gauge" | "map" | "stock";

        /** If true, prefixes will be used for big and small numbers. You can set arrays of prefixes via prefixesOfSmallNumbers and prefixesOfBigNumbers properties.
             @default false
         */
        usePrefixes: boolean;

        /** Read-only. Indicates current version of a script. */
        version: string;

        /** Adds a label on a chart. You can use it for labeling axes, adding chart title, etc. x and y coordinates can be set in number, percent, or a number with ! in front of it - coordinate will be calculated from right or bottom instead of left or top. */
        addLabel(x: number | string, y: number | string, text: string, align: "left" | "right" | "center", size: any, color: string, rotation: number, alpha: number, bold: boolean, url: string): void;

        /** Adds a legend to the chart. By default, you don't need to create div for your legend, however if you want it to be positioned in some different way, you can create div anywhere you want and pass id or reference to your div as a second parameter. (NOTE: This method will not work on StockPanel.) */
        addLegend(legend: AmLegend, legendDivID?: HTMLElement | string): void;

        /** Dispatched when initial chart animations are finished. */
        addListener(type: "animationFinished", handler: (event: { type: any, chart: AmChart }) => void): void;

        /** Fired just before the chart starts to build itself for the first time. Note: you might need to set processTimeout to &gt; 0 value in order to register this event properly. */
        addListener(type: "buildStarted", handler: (event: { type: any, chart: AmChart }) => void): void;

        /** Dispatched when chart is build for the first time or after validateData() method was called. */
        addListener(type: "dataUpdated", handler: (event: { type: any, chart: AmChart }) => void): void;

        /** Fired every time chart is drawn or re-drawn - graph toggle, chart area resize, etc. Please note, that this event will not fire on zoom. Use "zoomed" event instead to catch those events. */
        addListener(type: "drawn", handler: (event: { type: any, chart: AmChart }) => void): void;

        /** Dispatched when chart is build for the first time. */
        addListener(type: "init", handler: (event: { type: any, chart: AmChart }) => void): void;

        /** Dispatched when the chart is build for the first time and each time after chart.validateNow() method is called and the chart is build. */
        addListener(type: "rendered", handler: (event: { type: any, chart: AmChart }) => void): void;

        /** Adds event listener to the object. */
        addListener(type: string, handler: (event: any) => void): void;

        /** Adds title to the top of the chart. Pie, Radar positions are updated so that they won't overlap. Plot area of Serial/XY chart is also updated unless autoMargins property is set to false. You can add any number of titles - each of them will be placed in a new line. To remove titles, simply clear titles array: chart.titles = []; and call chart.validateNow() method. */
        addTitle(text: string, size: any, color: string, alpha: number, bold: boolean): void;

        /** Clears the chart area, intervals, etc. */
        clear(): void;

        /** Removes all labels added to the chart. */
        clearLabels(): void;

        /** Use this method to force the chart to resize to it's current container size. */
        invalidateSize(): void;

        /** This method allows to create charts with a single config. */
        makeChart<TChart extends AmChart>(container: HTMLElement | string, config: AmChartConfig, delay?: number): TChart;

        /** Legacy "ready" event, not included in V3 docs. Use makeChart instead - https://www.amcharts.com/kbase/your-first-chart-with-amcharts/ */
        ready(callback: () => void): void;

        /** Removes chart's legend. */
        removeLegend(): void;

        /** Removes event listener from chart object. */
        removeListener(chart: AmChart, type: string, handler: (event: any) => void): void;

        /** This method should be called after data in your data provider changed or a new array was set to dataProvider. After calling this method the chart will parse data and redraw. */
        validateData(): void;

        /** This method should be called after you changed one or more properties of any class. The chart will redraw after this method is called.Both attributes, validateData and skipEvents are optional (false by default). */
        validateNow(validateData?: boolean, skipEvents?: boolean): void;

        /** Adds chart to the specified DIV. */
        write(container: HTMLElement | string): void;
    }


    /** Base class of AmRectangularChart and AmRadarChart. It can not be instantiated explicitly. */
    interface AmCoordinateChartConfig extends AmChartConfig {

        /** Read-only. Array, holding processed chart's data. */
        chartData?: any[];

        /** Specifies the colors of the graphs if the lineColor of a graph is not set. If there are more graphs then colors in this array, the chart picks a random color.
             @default ["#FF6600", "#FCD202", "#B0DE09", "#0D8ECF", "#2A0CD0", "#CD0D74", "#CC0000", "#00CC00", "#0000CC", "#DDDDDD", "#999999", "#333333", "#990000"]
         */
        colors?: string[];

        /** The array of graphs belonging to this chart. */
        graphs?: AmGraphConfig[];

        /** Specifies if grid should be drawn above the graphs or below. Will not work properly with 3D charts.
             @default false
         */
        gridAboveGraphs?: boolean;

        /** Instead of adding guides to the axes, you can push all of them to this array. In case guide has category or date defined, it will automatically will be assigned to the category axis. Otherwise to first value axis, unless you specify a different valueAxis for the guide.
             @default []
         */
        guides?: GuideConfig[];

        /** Specifies whether the animation should be sequenced or all objects should appear at once.
             @default true
         */
        sequencedAnimation?: boolean;

        /** The initial opacity of the column/line. If you set startDuration to a value higher than 0, the columns/lines will fade in from startAlpha. Value range is 0 - 1.
             @default 1
         */
        startAlpha?: number;

        /** Duration of the animation, in seconds.
             @default 0
         */
        startDuration?: number;

        /** Animation effect. Possible values are: easeOutSine, easeInSine, elastic, bounce
             @default elastic
         */
        startEffect?: "easeOutSine" | "easeInSine" | "elastic" | "bounce";

        /** Target of url.
             @default _self
         */
        urlTarget?: string;

        /** The array of value axes. Chart creates one value axis automatically, so if you need only one value axis, you don't need to create it.
             @default ValueAxis
         */
        valueAxes?: ValueAxisConfig[];
    }


    /** Base class of AmRectangularChart and AmRadarChart. It can not be instantiated explicitly. */
    class AmCoordinateChart extends AmChart {

        /** Read-only. Array, holding processed chart's data. */
        chartData: any[];

        /** Specifies the colors of the graphs if the lineColor of a graph is not set. If there are more graphs then colors in this array, the chart picks a random color.
             @default ["#FF6600", "#FCD202", "#B0DE09", "#0D8ECF", "#2A0CD0", "#CD0D74", "#CC0000", "#00CC00", "#0000CC", "#DDDDDD", "#999999", "#333333", "#990000"]
         */
        colors: string[];

        /** The array of graphs belonging to this chart. */
        graphs: AmGraph[];

        /** Specifies if grid should be drawn above the graphs or below. Will not work properly with 3D charts.
             @default false
         */
        gridAboveGraphs: boolean;

        /** Instead of adding guides to the axes, you can push all of them to this array. In case guide has category or date defined, it will automatically will be assigned to the category axis. Otherwise to first value axis, unless you specify a different valueAxis for the guide.
             @default []
         */
        guides: Guide[];

        /** Specifies whether the animation should be sequenced or all objects should appear at once.
             @default true
         */
        sequencedAnimation: boolean;

        /** The initial opacity of the column/line. If you set startDuration to a value higher than 0, the columns/lines will fade in from startAlpha. Value range is 0 - 1.
             @default 1
         */
        startAlpha: number;

        /** Duration of the animation, in seconds.
             @default 0
         */
        startDuration: number;

        /** Animation effect. Possible values are: easeOutSine, easeInSine, elastic, bounce
             @default elastic
         */
        startEffect: "easeOutSine" | "easeInSine" | "elastic" | "bounce";

        /** Target of url.
             @default _self
         */
        urlTarget: string;

        /** The array of value axes. Chart creates one value axis automatically, so if you need only one value axis, you don't need to create it.
             @default ValueAxis
         */
        valueAxes: ValueAxis[];

        /** Adds a graph to the chart. */
        addGraph(graph: AmGraph): void;

        /** Dispatched when user clicks on a graph. */
        addListener(type: "clickGraph", handler: (event: { type: any, graph: AmGraph, chart: AmChart, event: MouseEvent }) => void): void;

        /** Dispatched when user clicks on the data item (column/bullet) */
        addListener(type: "clickGraphItem", handler: (event: { type: any, graph: AmGraph, item: GraphDataItem, index: number, chart: AmChart, event: MouseEvent }) => void): void;

        /** Dispatched when user right-clicks on the data item (column/bullet) */
        addListener(type: "rightClickGraphItem", handler: (event: { type: any, graph: AmGraph, item: GraphDataItem, index: number, chart: AmChart, event: MouseEvent }) => void): void;

        /** Dispatched when user rolls-out of a graph. */
        addListener(type: "rollOutGraph", handler: (event: { type: any, graph: AmGraph, chart: AmChart, event: MouseEvent }) => void): void;

        /** Dispatched when user rolls-out of the data item (column/bullet) */
        addListener(type: "rollOutGraphItem", handler: (event: { type: any, graph: AmGraph, item: GraphDataItem, index: number, chart: AmChart, event: MouseEvent }) => void): void;

        /** Dispatched when user rolls-over a graph. */
        addListener(type: "rollOverGraph", handler: (event: { type: any, graph: AmGraph, chart: AmChart, event: MouseEvent }) => void): void;

        /** Dispatched when user rolls-over data item (column/bullet) */
        addListener(type: "rollOverGraphItem", handler: (event: { type: any, graph: AmGraph, item: GraphDataItem, index: number, chart: AmChart, event: MouseEvent }) => void): void;

        /** Adds event listener to the object. */
        addListener(type: string, handler: (event: any) => void): void;

        /** Adds value axis to the chart. One value axis is created automatically, so if you don't want to change anything or add more value axes, you don't need to add it. */
        addValueAxis(axis: ValueAxis): void;

        /** You can trigger the animation of the chart. */
        animateAgain(): void;

        /** Returns graph by id. */
        getGraphById(id: string): AmGraph;

        /** Returns value axis by id. */
        getValueAxisById(id: string): ValueAxis;

        /** Hide the graph (if it is visible). Usually this method is called from the Legend, when you click on the legend marker. */
        hideGraph(graph: AmGraph): void;

        /** Hide value balloon of a graph. Usually this method is called from the Legend, when you click on the legend text. */
        hideGraphsBalloon(graph: AmGraph): void;

        /** Highlight the graph. Usually this method is called from the Legend, when you roll-over the legend entry. */
        highlightGraph(graph: AmGraph): void;

        /** Removes graph from the chart. */
        removeGraph(graph: AmGraph): void;

        /** Removes value axis from the chart. When you remove value axis, all graphs assigned to this axis are also removed. */
        removeValueAxis(axis: ValueAxis): void;

        /** Show the graph (if it is hidden). Usually this method is called from the Legend, when you click on the legend marker. */
        showGraph(graph: AmGraph): void;

        /** Show value balloon of a graph. Usually this method is called from the Legend, when you click on the legend text. */
        showGraphsBalloon(graph: AmGraph): void;

        /** UnhighlightGraph the graph. Usually this method is called from the Legend, when you roll-out the legend entry. */
        unhighlightGraph(graph: AmGraph): void;
    }


    /** Extension for AmSlicedChart to create funnel/pyramid charts. Examplevar chart = AmCharts.makeChart("chartdiv",{ "type" : "funnel", "neckHeight" : "30%", "neckWidth" : "40%", "titleField" : "title", "valueField" : "value", "dataProvider" : [ { "title": "Website visits", "value": 300 }, { "title": "Downloads", "value": 123 } ] }); */
    interface AmFunnelChartConfig extends AmSlicedChartConfig {

        /** The angle of the 3D part of the chart. This creates a 3D effect (if the "depth3D" is &gt; 0).
             @default 0
         */
        angle?: number;

        /** Balloon text. The following tags can be used: [[value]], [[title]], [[percents]], [[description]] or any other field name from your data provider. HTML tags can also be used.
             @default [[title]]: [[value]]\n[[description]]
         */
        balloonText?: string;

        /** Width of a base (first slice) of a chart. "100%" means it will occupy all available space.
             @default 100%
         */
        baseWidth?: number | string;

        /** The depth of funnel/pyramid. Set angle to &gt;0 value in order this to work. Note, neckHeight/neckWidth will become 0 if you set these properties to bigger than 0 values.
             @default 0
         */
        depth3D?: number;

        /** Specifies where labels should be placed. Allowed values are left / center / right. If you set left or right, you should increase left or right margin in order labels to be visible.
             @default center
         */
        labelPosition?: string;

        /** Label text. The following tags can be used: [[value]], [[title]], [[percents]], [[description]] or any other field name from your data provider.
             @default [[title]]: [[value]]
         */
        labelText?: string;

        /** Height of a funnel neck. If default value, zero is used, the funnel won't have neck at all, which will make it look like pyramid.
             @default 0
         */
        neckHeight?: number | string;

        /** Width of a funnel neck. If default value, zero is used, the funnel won't have neck at all, which will make it look like pyramid.
             @default 0
         */
        neckWidth?: number | string;

        /** Specifies the distance by which slice should be pulled when user clicks on it.
             @default 30
         */
        pullDistance?: number | string;

        /** If rotate is set to true, the funnel will be rotated and will became a pyramid.
             @default false
         */
        rotate?: boolean;

        /** Initial x coordinate of slices. They will animate to the final x position from this one.
             @default 0
         */
        startX?: number;

        /** Initial y coordinate of slices. They will animate to the final y position from this one.
             @default 0
         */
        startY?: number;

        /** By default, the height of a slice represents it's value. However you might want the area of a slice to represent value - set this property to "area" then.
             @default height
         */
        valueRepresents?: string;
    }


    /** Extension for AmSlicedChart to create funnel/pyramid charts. Examplevar chart = AmCharts.makeChart("chartdiv",{ "type" : "funnel", "neckHeight" : "30%", "neckWidth" : "40%", "titleField" : "title", "valueField" : "value", "dataProvider" : [ { "title": "Website visits", "value": 300 }, { "title": "Downloads", "value": 123 } ] }); */
    class AmFunnelChart extends AmSlicedChart {

        /** The angle of the 3D part of the chart. This creates a 3D effect (if the "depth3D" is &gt; 0).
             @default 0
         */
        angle: number;

        /** Balloon text. The following tags can be used: [[value]], [[title]], [[percents]], [[description]] or any other field name from your data provider. HTML tags can also be used.
             @default [[title]]: [[value]]\n[[description]]
         */
        balloonText: string;

        /** Width of a base (first slice) of a chart. "100%" means it will occupy all available space.
             @default 100%
         */
        baseWidth: number | string;

        /** The depth of funnel/pyramid. Set angle to &gt;0 value in order this to work. Note, neckHeight/neckWidth will become 0 if you set these properties to bigger than 0 values.
             @default 0
         */
        depth3D: number;

        /** Specifies where labels should be placed. Allowed values are left / center / right. If you set left or right, you should increase left or right margin in order labels to be visible.
             @default center
         */
        labelPosition: string;

        /** Label text. The following tags can be used: [[value]], [[title]], [[percents]], [[description]] or any other field name from your data provider.
             @default [[title]]: [[value]]
         */
        labelText: string;

        /** Height of a funnel neck. If default value, zero is used, the funnel won't have neck at all, which will make it look like pyramid.
             @default 0
         */
        neckHeight: number | string;

        /** Width of a funnel neck. If default value, zero is used, the funnel won't have neck at all, which will make it look like pyramid.
             @default 0
         */
        neckWidth: number | string;

        /** Specifies the distance by which slice should be pulled when user clicks on it.
             @default 30
         */
        pullDistance: number | string;

        /** If rotate is set to true, the funnel will be rotated and will became a pyramid.
             @default false
         */
        rotate: boolean;

        /** Initial x coordinate of slices. They will animate to the final x position from this one.
             @default 0
         */
        startX: number;

        /** Initial y coordinate of slices. They will animate to the final y position from this one.
             @default 0
         */
        startY: number;

        /** By default, the height of a slice represents it's value. However you might want the area of a slice to represent value - set this property to "area" then.
             @default height
         */
        valueRepresents: string;
    }


    /** Extension for AmSerialChart to gantt charts. Gantt charts usually display multiple bars on one series where value axis displays date/time and is horizontal. */
    interface AmGanttChartConfig extends AmSerialChartConfig {

        /** Lightness increase of each subsequent bar of one series. Value range is from -255 to 255. */
        brightnessStep?: number;

        /** Field of column width of a segments in your data provider. */
        columnWidthField?: string;

        /** Instead of specifying end date or end value in your data, you can specify duration of a segment. */
        durationField?: string;

        /** Field in your data provider which holds end date of a segment. Dates in your data can be set by time stamp or Date object or string (chart.dataDateFormat should define date format in latter case). */
        endDateField?: string;

        /** Field in your data provider which holds end value of a segment. If your data is date-based, you should use endDateField instead, unless you specified chart.startDate and chart.period values. In this case you can use endField and set number of periods instead of providing exact end date. */
        endField?: string;

        /** Graph of a Gantt chart. Gant chart actually creates multiple graphs (separate for each segment). Properties of this graph are passed to each of the created graphs - this allows you to control the look of segments. */
        graph?: AmGraphConfig;

        /** Data period. Used only value axis is date-based.
             @default ss
         */
        period?: string;

        /** Segments field in your data provider. */
        segmentsField?: string;

        /** Initial date of value axis. If you set this date (you can do it using time stamp, Date object or date string), you can then set start/end/duration of segments using number of periods instead of providing exact dates. */
        startDate?: Date;

        /** Field in your data provider which holds start date of a segment. Dates in your data can be set by time stamp or Date object or string (chart.dataDateFormat should define date format in latter case). */
        startDateField?: string;

        /** Field in your data provider which holds start value of a segment. If your data is date-based, you should use startDateField instead, unless you specified chart.startDate and chart.period values. In this case you can use startField and set number of periods instead of providing exact start date. */
        startField?: string;

        /** Value axis of Gantt chart. Set it's type to "date" if your data is date or time based. */
        valueAxis?: ValueAxisConfig;
    }


    /** Extension for AmSerialChart to gantt charts. Gantt charts usually display multiple bars on one series where value axis displays date/time and is horizontal. */
    class AmGanttChart extends AmSerialChart {

        /** Lightness increase of each subsequent bar of one series. Value range is from -255 to 255. */
        brightnessStep: number;

        /** Field of column width of a segments in your data provider. */
        columnWidthField: string;

        /** Instead of specifying end date or end value in your data, you can specify duration of a segment. */
        durationField: string;

        /** Field in your data provider which holds end date of a segment. Dates in your data can be set by time stamp or Date object or string (chart.dataDateFormat should define date format in latter case). */
        endDateField: string;

        /** Field in your data provider which holds end value of a segment. If your data is date-based, you should use endDateField instead, unless you specified chart.startDate and chart.period values. In this case you can use endField and set number of periods instead of providing exact end date. */
        endField: string;

        /** Graph of a Gantt chart. Gant chart actually creates multiple graphs (separate for each segment). Properties of this graph are passed to each of the created graphs - this allows you to control the look of segments. */
        graph: AmGraph;

        /** Data period. Used only value axis is date-based.
             @default ss
         */
        period: string;

        /** Segments field in your data provider. */
        segmentsField: string;

        /** Initial date of value axis. If you set this date (you can do it using time stamp, Date object or date string), you can then set start/end/duration of segments using number of periods instead of providing exact dates. */
        startDate: Date;

        /** Field in your data provider which holds start date of a segment. Dates in your data can be set by time stamp or Date object or string (chart.dataDateFormat should define date format in latter case). */
        startDateField: string;

        /** Field in your data provider which holds start value of a segment. If your data is date-based, you should use startDateField instead, unless you specified chart.startDate and chart.period values. In this case you can use startField and set number of periods instead of providing exact start date. */
        startField: string;

        /** Value axis of Gantt chart. Set it's type to "date" if your data is date or time based. */
        valueAxis: ValueAxis;
    }


    /** Creates the visualization of the data in following types: line, column, step line, smoothed line, olhc and candlestick. Examplevar chart = AmCharts.makeChart("chartdiv",{ ... "graphs": [ { "id" : "AmGraph-1", "title" : "Column graph", "type" : "column", "valueField" : "column-1", "fillAlphas" : 1 } ] }); */
    interface AmGraphConfig {

        /** Text which screen readers will read if user rolls-over the bullet/column or sets focus using tab key (this is possible only if tabIndex property of AmGraph is set to some number). Text is added as aria-label tag. Note - not all screen readers and browsers support this.
             @default [[title]] [[category]] [[value]]
         */
        accessibleLabel?: string;

        /** Name of the alpha field in your dataProvider. */
        alphaField?: string;

        /** If you set this to true before chart is drawn, the animation of this graph won't be played.
             @default false
         */
        animationPlayed?: boolean;

        /** Allows customizing graphs balloons individually (only when ChartCursor is used). Note: the balloon object is not created automatically, you should create it before setting properties */
        balloon?: AmBalloonConfig;

        /** Value balloon color. Will use graph or data item color if not set. */
        balloonColor?: string;

        /** If you set some function, the graph will call it and pass GraphDataItem and AmGraph objects to it. This function should return a string which will be displayed in a balloon. */
        balloonFunction?: (graphDataItem: GraphDataItem, graph: AmGraph) => string;

        /** Balloon text. You can use tags like [[value]], [[description]], [[percents]], [[open]], [[category]] or any other field name from your data provider. HTML tags can also be used.
             @default [[value]]
         */
        balloonText?: string;

        /** Specifies if the line graph should be placed behind column graphs
             @default false
         */
        behindColumns?: boolean;

        /** Type of the bullets. Possible values are: "none", "round", "square", "triangleUp", "triangleDown", "triangleLeft", "triangleRight", "bubble", "diamond", "xError", "yError" and "custom".
             @default none
         */
        bullet?: "none" | "round" | "square" | "triangleUp" | "triangleDown" | "triangleLeft" | "triangleRight" | "bubble" | "diamond" | "xError" | "yError" | "custom";

        /** Opacity of bullets. Value range is 0 - 1.
             @default 1
         */
        bulletAlpha?: number;

        /** bulletAxis value is used when you are building error chart. Error chart is a regular serial or XY chart with bullet type set to "xError" or "yError". The graph should know which axis should be used to determine the size of this bullet - that's when bulletAxis should be set. Besides that, you should also set graph.errorField. You can also use other bullet types with this feature too. For example, if you set bulletAxis for XY chart, the size of a bullet will change as you zoom the chart. */
        bulletAxis?: ValueAxisConfig;

        /** Bullet border opacity.
             @default 0
         */
        bulletBorderAlpha?: number;

        /** Bullet border color. Will use lineColor if not set. */
        bulletBorderColor?: string;

        /** Bullet border thickness.
             @default 2
         */
        bulletBorderThickness?: number;

        /** Bullet color. Will use lineColor if not set. */
        bulletColor?: string;

        /** Name of the bullet field in your dataProvider. */
        bulletField?: string;

        /** Useful for touch devices - if you set it to 20 or so, the bullets of a graph will have invisible circle around the actual bullet (bullets should still be enabled), which will be easier to touch (bullets usually are smaller and hard to hit). */
        bulletHitAreaSize?: number;

        /** Bullet offset. Distance from the actual data point to the bullet. Can be used to place custom bullets above the columns.
             @default 0
         */
        bulletOffset?: number;

        /** Bullet size.
             @default 8
         */
        bulletSize?: number;

        /** Name of the bullet size field in your dataProvider. */
        bulletSizeField?: string;

        /** If this field is set and addClassNames is enabled, the chart will look for a class name string in data using this setting and apply additional class names to elements of the particular data points, such as bullets. */
        classNameField?: string;

        /** Name of the close field (used by candlesticks and ohlc) in your dataProvider. */
        closeField?: string;

        /** In case you want to place this graph's columns in front of other columns, set this to false. In case "true", the columns will be clustered next to each other.
             @default true
         */
        clustered?: boolean;

        /** Color of value labels. Will use chart's color if not set. */
        color?: string;

        /** Name of the color field in your dataProvider. */
        colorField?: string;

        /** You can use this property with non-stacked column graphs and specify order of columns of each category (starting from 0). Important: this feature does not work in stacked columns scenarios as well as with graph toggling enabled in legend. */
        columnIndexField?: string;

        /** You can specify custom column width for each graph individually. Value range is 0 - 1 (we set relative width, not pixel width here). */
        columnWidth?: number;

        /** Specifies whether to connect data points if data is missing. The default value is true. This feature does not work with XY chart.
             @default true
         */
        connect?: boolean;

        /** Corner radius of column. It can be set both in pixels or in percents. The chart's depth and angle styles must be set to 0. The default value is 0. Note, cornerRadiusTop will be applied for all corners of the column, JavaScript charts do not have a possibility to set separate corner radius for top and bottom. As we want all the property names to be the same both on JS and Flex, we didn't change this too.
             @default 0
         */
        cornerRadiusTop?: number;

        /** If bulletsEnabled of ChartCurosor is true, a bullet on each graph follows the cursor. You can set opacity of each graphs bullet. In case you want to disable these bullets for a certain graph, set opacity to 0.
             @default 1
         */
        cursorBulletAlpha?: number;

        /** Path to the image of custom bullet. */
        customBullet?: string;

        /** Name of the custom bullet field in your dataProvider. */
        customBulletField?: string;

        /** Path to the image for legend marker. */
        customMarker?: string;

        /** Dash length. If you set it to a value greater than 0, the graph line (or columns border) will be dashed.
             @default 0
         */
        dashLength?: number;

        /** Name of the dash length field in your dataProvider. This property adds a possibility to change graphs’ line from solid to dashed on any data point. You can also make columns border dashed using this setting. Note, this won't work with smoothedLineGraph. */
        dashLengthField?: string;

        /** Used to format balloons if value axis is date-based.
             @default MMM DD, YYYY
         */
        dateFormat?: string;

        /** Name of the description field in your dataProvider. */
        descriptionField?: string;

        /** Name of error value field in your data provider. */
        errorField?: string;

        /** Opacity of fill. Plural form is used to keep the same property names as our Flex charts'. Flex charts can accept array of numbers to generate gradients. Although you can set array here, only first value of this array will be used.
             @default 0
         */
        fillAlphas?: number;

        /** Fill color. Will use lineColor if not set. You can also set array of colors here. */
        fillColors?: string;

        /** Name of the fill colors field in your dataProvider. This property adds a possibility to change line graphs’ fill color on any data point to create highlighted sections of the graph. Works only with AmSerialChart. */
        fillColorsField?: string;

        /** XY chart only. If you set this property to id or reference of your X or Y axis, and the fillAlphas is &gt; 0, the area between graph and axis will be filled with color, like in this demo. */
        fillToAxis?: ValueAxisConfig;

        /** You can set another graph here and if fillAlpha is &gt;0, the area from this graph to fillToGraph will be filled (instead of filling the area to the X axis). This feature is not supported by smoothedLine graphs and Radar chart. */
        fillToGraph?: AmGraph;

        /** Column width in pixels. If you set this property, columns will be of a fixed width and won't adjust to the available space. */
        fixedColumnWidth?: number;

        /** Size of value labels text. Will use chart's fontSize if not set. */
        fontSize?: number;

        /** Name of the gap field in your dataProvider. You can force graph to show gap at a desired data point using this feature. This feature does not work with XY chart. */
        gapField?: string;

        /** Using this property you can specify when graph should display gap - if the time difference between data points is bigger than duration of minPeriod * gapPeriod, and connect property of a graph is set to false, graph will display gap.
             @default 1.1
         */
        gapPeriod?: number;

        /** Orientation of the gradient fills (only for "column" graph type). Possible values are "vertical" and "horizontal".
             @default vertical
         */
        gradientOrientation?: "vertical" | "horizontal";

        /** Specifies whether the graph is hidden. Do not use this to show/hide the graph, use hideGraph(graph) and showGraph(graph) methods instead.
             @default false
         */
        hidden?: boolean;

        /** If there are more data points than hideBulletsCount, the bullets will not be shown. 0 means the bullets will always be visible.
             @default 0
         */
        hideBulletsCount?: number;

        /** Name of the high field (used by candlesticks and ohlc) in your dataProvider. */
        highField?: string;

        /** Unique id of a graph. It is not required to set one, unless you want to use this graph for as your scrollbar's graph and need to indicate which graph should be used. */
        id?: string;

        /** Whether to include this graph when calculating min and max value of the axis.
             @default true
         */
        includeInMinMax?: boolean;

        /** Data label text anchor.
             @default auto
         */
        labelAnchor?: string;

        /** Name of label color field in data provider. */
        labelColorField?: string;

        /** You can use it to format labels of data items in any way you want. Graph will call this function and pass reference to GraphDataItem and formatted text as attributes. This function should return string which will be displayed as label. */
        labelFunction?: (graphDataItem: GraphDataItem, formattedText: string) => string;

        /** Offset of data label.
             @default 0
         */
        labelOffset?: number;

        /** Position of value label. Possible values are: "bottom", "top", "right", "left", "inside", "middle". Sometimes position is changed by the chart, depending on a graph type, rotation, etc.
             @default top
         */
        labelPosition?: "bottom" | "top" | "right" | "left" | "inside" | "middle";

        /** Rotation of a data label.
             @default 0
         */
        labelRotation?: number;

        /** Value label text. You can use tags like [[value]], [[description]], [[percents]], [[open]], [[category]]. */
        labelText?: string;

        /** Legend marker opacity. Will use lineAlpha if not set. Value range is 0 - 1. */
        legendAlpha?: number;

        /** Legend marker color. Will use lineColor if not set. */
        legendColor?: string;

        /** It is called and the following attributes are passed: dataItem, formattedText, periodValues, periodPercentValues. It should return hex color code which will be used for legend marker. */
        legendColorFunction?: (dataItem: any, formattedText: string, periodValues: number[], periodPercentValues: number[]) => string;

        /** The text which will be displayed in the value portion of the legend when user is not hovering above any data point. The tags should be made out of two parts - the name of a field (value / open / close / high / low) and the value of the period you want to be show - open / close / high / low / sum / average / count. For example: [[value.sum]] means that sum of all data points of value field in the selected period will be displayed. */
        legendPeriodValueText?: string;

        /** Legend value text. You can use tags like [[value]], [[description]], [[percents]], [[open]], [[category]] You can also use custom fields from your dataProvider. If not set, uses Legend's valueText. */
        legendValueText?: string;

        /** Opacity of the line (or column border). Value range is 0 - 1.
             @default 1
         */
        lineAlpha?: number;

        /** Color of the line (or column border). If you do not set any, the color from AmCoordinateChart.colors array will be used for each subsequent graph. */
        lineColor?: string;

        /** Name of the line color field in your dataProvider. This property adds a possibility to change graphs’ line color on any data point to create highlighted sections of the graph. Works only with AmSerialChart. */
        lineColorField?: string;

        /** Specifies thickness of the graph line (or column border).
             @default 1
         */
        lineThickness?: number;

        /** Name of the low field (used by candlesticks and ohlc) in your dataProvider. */
        lowField?: string;

        /** Legend marker type. You can set legend marker (key) type for individual graphs. Possible values are: square, circle, diamond, triangleUp, triangleDown, triangleLeft, triangleDown, bubble, line, none. */
        markerType?: "square" | "circle" | "diamond" | "triangleUp" | "triangleDown" | "triangleLeft" | "triangleDown" | "bubble" | "line" | "none";

        /** Specifies size of the bullet which value is the biggest (XY chart).
             @default 50
         */
        maxBulletSize?: number;

        /** Specifies minimum size of the bullet (XY chart).
             @default 4
         */
        minBulletSize?: number;

        /** It is useful if you have really lots of data points. Based on this property the graph will omit some of the lines (if the distance between points is less that minDistance, in pixels). This will not affect the bullets or indicator in anyway, so the user will not see any difference (unless you set minValue to a bigger value, let say 5), but will increase performance as less lines will be drawn. By setting value to a bigger number you can also make your lines look less jagged.
             @default 1
         */
        minDistance?: number;

        /** If you use different colors for your negative values, a graph below zero line is filled with negativeColor. With this property you can define a different base value at which colors should be changed to negative colors.
             @default 0
         */
        negativeBase?: number;

        /** Fill opacity of negative part of the graph. Will use fillAlphas if not set. */
        negativeFillAlphas?: number;

        /** Fill color of negative part of the graph. Will use fillColors if not set. */
        negativeFillColors?: string;

        /** Opacity of the negative portion of the line (or column border). Value range is 0 - 1.
             @default 1
         */
        negativeLineAlpha?: number;

        /** Color of the line (or column) when the values are negative. In case the graph type is candlestick or ohlc, negativeLineColor is used when close value is less then open value. */
        negativeLineColor?: string;

        /** If you set it to true, column chart will begin new stack. This allows having Clustered and Stacked column/bar chart.
             @default false
         */
        newStack?: boolean;

        /** In case you want to have a step line graph without risers, you should set this to true.
             @default false
         */
        noStepRisers?: boolean;

        /** Name of the open field (used by floating columns, candlesticks and ohlc) in your dataProvider. */
        openField?: string;

        /** Value of pattern should be object with url, width, height of an image, optionally it might have x, y, randomX and randomY values. For example: {"url":"../amcharts/patterns/black/pattern1.png", "width":4, "height":4}. If you want to have individual patterns for each column, define patterns in data provider and set graph.patternField property. Check amcharts/patterns folder for some patterns. You can create your own patterns and use them. Note, x, y, randomX and randomY properties won't work with IE8 and older. 3D bar/Pie charts won't work properly with patterns. */
        pattern?: { url: string, width: number, height: number, x?: number, y?: number, randomX?: number, randomY?: number };

        /** Field name in your data provider which holds pattern information. Value of pattern should be object with url, width, height of an image, optionally it might have x, y, randomX and randomY values. For example: {"url":"../amcharts/patterns/black/pattern1.png", "width":4, "height":4}. Check amcharts/patterns folder for some patterns. You can create your own patterns and use them. Note, x, y, randomX and randomY properties won't work with IE8 and older. 3D bar/Pie charts won't work properly with patterns. */
        patternField?: string;

        /** This property can be used by step graphs - you can set how many periods one horizontal line should span.
             @default 1
         */
        periodSpan?: number;

        /** Specifies where data points should be placed - on the beginning of the period (day, hour, etc) or in the middle (only when parseDates property of categoryAxis is set to true). This setting affects Serial chart only. Possible values are "start", "middle" and "end"
             @default middle
         */
        pointPosition?: "start" | "middle" | "end";

        /** Precision of values. Will use chart's precision if not set any. */
        precision?: number;

        /** If this is set to true, candlesticks will be colored in a different manner - if current close is less than current open, the candlestick will be empty, otherwise - filled with color. If previous close is less than current close, the candlestick will use positive color, otherwise - negative color.
             @default false
         */
        proCandlesticks?: boolean;

        /** Gantt chart only. Contains unmodified segment object from data provider. */
        segmentData?: any;

        /** If graph's type is column and labelText is set, graph hides labels which do not fit into the column's space or go outside plot area. If you don't want these labels to be hidden, set this to true.
             @default false
         */
        showAllValueLabels?: boolean;

        /** Specifies whether the value balloon of this graph is shown when mouse is over data item or chart's indicator is over some series.
             @default true
         */
        showBalloon?: boolean;

        /** Specifies graphs value at which cursor is showed. This is only important for candlestick and ohlc charts, also if column chart has "open" value. Possible values are: "open", "close", "high", "low". "top" and "bottom" values will glue the balloon to top/bottom of the plot area.
             @default close
         */
        showBalloonAt?: "open" | "close" | "high" | "low" | "top" | "bottom";

        /** Works with candlestick graph type, you can set it to open, close, high, low. If you set it to high, the events will be shown at the tip of the high line.
             @default close
         */
        showBulletsAt?: "open" | "close" | "high" | "low";

        /** If you want mouse pointer to change to hand when hovering the graph, set this property to true.
             @default false
         */
        showHandOnHover?: boolean;

        /** It can only be used together with topRadius (when columns look like cylinders). If you set it to true, the cylinder will be lowered down so that the center of it's bottom circle would be right on category axis.
             @default false
         */
        showOnAxis?: boolean;

        /** If the value axis of this graph has stack types like "regular" or "100%" You can exclude this graph from stacking.
             @default true
         */
        stackable?: boolean;

        /** Step graph only. Specifies to which direction step should be drawn.
             @default right
         */
        stepDirection?: string;

        /** If you set it to false, the graph will not be hidden when user clicks on legend entry.
             @default true
         */
        switchable?: boolean;

        /** In case you set it to some number, the chart will set focus on bullet/column (starting from first) when user clicks tab key. When a focus is set, screen readers like NVDA Screen reader will read label which is set using accessibleLabel property of AmGraph. Note, not all browsers and readers support this. */
        tabIndex?: number;

        /** Graph title. */
        title?: string;

        /** If you set this to 1, columns will become cylinders (must set depth3D and angle properties of a chart to &gt;0 values in order this to be visible). you can make columns look like cones (set topRadius to 0) or even like some glasses (set to bigger than 1). We strongly recommend setting grid opacity to 0 in order this to look good. */
        topRadius?: number;

        /** Type of the graph. Possible values are: "line", "column", "step", "smoothedLine", "candlestick", "ohlc". XY and Radar charts can only display "line" type graphs.
             @default line
         */
        type?: "line" | "column" | "step" | "smoothedLine" | "candlestick" | "ohlc";

        /** Name of the url field in your dataProvider. */
        urlField?: string;

        /** Target to open URLs in, i.e. _blank, _top, etc. */
        urlTarget?: string;

        /** If set to true, the bullet border will take the same color as graph line.
             @default false
         */
        useLineColorForBulletBorder?: boolean;

        /** If negativeLineColor and/or negativeFillColors are set and useNegativeColorIfDown is set to true (default is false), the line, step and column graphs will use these colors for lines, bullets or columns if previous value is bigger than current value. In case you set openField for the graph, the graph will compare current value with openField value instead of comparing to previous value. Here is a demo.
             @default false
         */
        useNegativeColorIfDown?: boolean;

        /** Specifies which value axis the graph will use. Will use the first value axis if not set. You can use reference to the real ValueAxis object or set value axis id.
             @default ValueAxis
         */
        valueAxis?: ValueAxisConfig;

        /** Name of the value field in your dataProvider. */
        valueField?: string;

        /** Specifies whether this graph should be shown in the Legend.
             @default true
         */
        visibleInLegend?: boolean;

        /** XY chart only. A horizontal value axis object to attach graph to.
             @default ValueAxis
         */
        xAxis?: ValueAxisConfig;

        /** XY chart only. Name of the x field in your dataProvider. */
        xField?: string;

        /** XY chart only. A vertical value axis object to attach graph to.
             @default ValueAxis
         */
        yAxis?: ValueAxisConfig;

        /** XY chart only. Name of the y field in your dataProvider. */
        yField?: string;
    }


    /** Creates the visualization of the data in following types: line, column, step line, smoothed line, olhc and candlestick. Examplevar chart = AmCharts.makeChart("chartdiv",{ ... "graphs": [ { "id" : "AmGraph-1", "title" : "Column graph", "type" : "column", "valueField" : "column-1", "fillAlphas" : 1 } ] }); */
    class AmGraph {

        /** Text which screen readers will read if user rolls-over the bullet/column or sets focus using tab key (this is possible only if tabIndex property of AmGraph is set to some number). Text is added as aria-label tag. Note - not all screen readers and browsers support this.
             @default [[title]] [[category]] [[value]]
         */
        accessibleLabel: string;

        /** Name of the alpha field in your dataProvider. */
        alphaField: string;

        /** If you set this to true before chart is drawn, the animation of this graph won't be played.
             @default false
         */
        animationPlayed: boolean;

        /** Allows customizing graphs balloons individually (only when ChartCursor is used). Note: the balloon object is not created automatically, you should create it before setting properties */
        balloon: AmBalloon;

        /** Value balloon color. Will use graph or data item color if not set. */
        balloonColor: string;

        /** If you set some function, the graph will call it and pass GraphDataItem and AmGraph objects to it. This function should return a string which will be displayed in a balloon. */
        balloonFunction: (graphDataItem: GraphDataItem, graph: AmGraph) => string;

        /** Balloon text. You can use tags like [[value]], [[description]], [[percents]], [[open]], [[category]] or any other field name from your data provider. HTML tags can also be used.
             @default [[value]]
         */
        balloonText: string;

        /** Specifies if the line graph should be placed behind column graphs
             @default false
         */
        behindColumns: boolean;

        /** Type of the bullets. Possible values are: "none", "round", "square", "triangleUp", "triangleDown", "triangleLeft", "triangleRight", "bubble", "diamond", "xError", "yError" and "custom".
             @default none
         */
        bullet: "none" | "round" | "square" | "triangleUp" | "triangleDown" | "triangleLeft" | "triangleRight" | "bubble" | "diamond" | "xError" | "yError" | "custom";

        /** Opacity of bullets. Value range is 0 - 1.
             @default 1
         */
        bulletAlpha: number;

        /** bulletAxis value is used when you are building error chart. Error chart is a regular serial or XY chart with bullet type set to "xError" or "yError". The graph should know which axis should be used to determine the size of this bullet - that's when bulletAxis should be set. Besides that, you should also set graph.errorField. You can also use other bullet types with this feature too. For example, if you set bulletAxis for XY chart, the size of a bullet will change as you zoom the chart. */
        bulletAxis: ValueAxis;

        /** Bullet border opacity.
             @default 0
         */
        bulletBorderAlpha: number;

        /** Bullet border color. Will use lineColor if not set. */
        bulletBorderColor: string;

        /** Bullet border thickness.
             @default 2
         */
        bulletBorderThickness: number;

        /** Bullet color. Will use lineColor if not set. */
        bulletColor: string;

        /** Name of the bullet field in your dataProvider. */
        bulletField: string;

        /** Useful for touch devices - if you set it to 20 or so, the bullets of a graph will have invisible circle around the actual bullet (bullets should still be enabled), which will be easier to touch (bullets usually are smaller and hard to hit). */
        bulletHitAreaSize: number;

        /** Bullet offset. Distance from the actual data point to the bullet. Can be used to place custom bullets above the columns.
             @default 0
         */
        bulletOffset: number;

        /** Bullet size.
             @default 8
         */
        bulletSize: number;

        /** Name of the bullet size field in your dataProvider. */
        bulletSizeField: string;

        /** If this field is set and addClassNames is enabled, the chart will look for a class name string in data using this setting and apply additional class names to elements of the particular data points, such as bullets. */
        classNameField: string;

        /** Name of the close field (used by candlesticks and ohlc) in your dataProvider. */
        closeField: string;

        /** In case you want to place this graph's columns in front of other columns, set this to false. In case "true", the columns will be clustered next to each other.
             @default true
         */
        clustered: boolean;

        /** Color of value labels. Will use chart's color if not set. */
        color: string;

        /** Name of the color field in your dataProvider. */
        colorField: string;

        /** You can use this property with non-stacked column graphs and specify order of columns of each category (starting from 0). Important: this feature does not work in stacked columns scenarios as well as with graph toggling enabled in legend. */
        columnIndexField: string;

        /** You can specify custom column width for each graph individually. Value range is 0 - 1 (we set relative width, not pixel width here). */
        columnWidth: number;

        /** Specifies whether to connect data points if data is missing. The default value is true. This feature does not work with XY chart.
             @default true
         */
        connect: boolean;

        /** Corner radius of column. It can be set both in pixels or in percents. The chart's depth and angle styles must be set to 0. The default value is 0. Note, cornerRadiusTop will be applied for all corners of the column, JavaScript charts do not have a possibility to set separate corner radius for top and bottom. As we want all the property names to be the same both on JS and Flex, we didn't change this too.
             @default 0
         */
        cornerRadiusTop: number;

        /** If bulletsEnabled of ChartCurosor is true, a bullet on each graph follows the cursor. You can set opacity of each graphs bullet. In case you want to disable these bullets for a certain graph, set opacity to 0.
             @default 1
         */
        cursorBulletAlpha: number;

        /** Path to the image of custom bullet. */
        customBullet: string;

        /** Name of the custom bullet field in your dataProvider. */
        customBulletField: string;

        /** Path to the image for legend marker. */
        customMarker: string;

        /** Dash length. If you set it to a value greater than 0, the graph line (or columns border) will be dashed.
             @default 0
         */
        dashLength: number;

        /** Name of the dash length field in your dataProvider. This property adds a possibility to change graphs’ line from solid to dashed on any data point. You can also make columns border dashed using this setting. Note, this won't work with smoothedLineGraph. */
        dashLengthField: string;

        /** Used to format balloons if value axis is date-based.
             @default MMM DD, YYYY
         */
        dateFormat: string;

        /** Name of the description field in your dataProvider. */
        descriptionField: string;

        /** Name of error value field in your data provider. */
        errorField: string;

        /** Opacity of fill. Plural form is used to keep the same property names as our Flex charts'. Flex charts can accept array of numbers to generate gradients. Although you can set array here, only first value of this array will be used.
             @default 0
         */
        fillAlphas: number;

        /** Fill color. Will use lineColor if not set. You can also set array of colors here. */
        fillColors: string;

        /** Name of the fill colors field in your dataProvider. This property adds a possibility to change line graphs’ fill color on any data point to create highlighted sections of the graph. Works only with AmSerialChart. */
        fillColorsField: string;

        /** XY chart only. If you set this property to id or reference of your X or Y axis, and the fillAlphas is &gt; 0, the area between graph and axis will be filled with color, like in this demo. */
        fillToAxis: ValueAxis;

        /** You can set another graph here and if fillAlpha is &gt;0, the area from this graph to fillToGraph will be filled (instead of filling the area to the X axis). This feature is not supported by smoothedLine graphs and Radar chart. */
        fillToGraph: AmGraph;

        /** Column width in pixels. If you set this property, columns will be of a fixed width and won't adjust to the available space. */
        fixedColumnWidth: number;

        /** Size of value labels text. Will use chart's fontSize if not set. */
        fontSize: number;

        /** Name of the gap field in your dataProvider. You can force graph to show gap at a desired data point using this feature. This feature does not work with XY chart. */
        gapField: string;

        /** Using this property you can specify when graph should display gap - if the time difference between data points is bigger than duration of minPeriod * gapPeriod, and connect property of a graph is set to false, graph will display gap.
             @default 1.1
         */
        gapPeriod: number;

        /** Orientation of the gradient fills (only for "column" graph type). Possible values are "vertical" and "horizontal".
             @default vertical
         */
        gradientOrientation: "vertical" | "horizontal";

        /** Specifies whether the graph is hidden. Do not use this to show/hide the graph, use hideGraph(graph) and showGraph(graph) methods instead.
             @default false
         */
        hidden: boolean;

        /** If there are more data points than hideBulletsCount, the bullets will not be shown. 0 means the bullets will always be visible.
             @default 0
         */
        hideBulletsCount: number;

        /** Name of the high field (used by candlesticks and ohlc) in your dataProvider. */
        highField: string;

        /** Unique id of a graph. It is not required to set one, unless you want to use this graph for as your scrollbar's graph and need to indicate which graph should be used. */
        id: string;

        /** Whether to include this graph when calculating min and max value of the axis.
             @default true
         */
        includeInMinMax: boolean;

        /** Data label text anchor.
             @default auto
         */
        labelAnchor: string;

        /** Name of label color field in data provider. */
        labelColorField: string;

        /** You can use it to format labels of data items in any way you want. Graph will call this function and pass reference to GraphDataItem and formatted text as attributes. This function should return string which will be displayed as label. */
        labelFunction: (graphDataItem: GraphDataItem, formattedText: string) => string;

        /** Offset of data label.
             @default 0
         */
        labelOffset: number;

        /** Position of value label. Possible values are: "bottom", "top", "right", "left", "inside", "middle". Sometimes position is changed by the chart, depending on a graph type, rotation, etc.
             @default top
         */
        labelPosition: "bottom" | "top" | "right" | "left" | "inside" | "middle";

        /** Rotation of a data label.
             @default 0
         */
        labelRotation: number;

        /** Value label text. You can use tags like [[value]], [[description]], [[percents]], [[open]], [[category]]. */
        labelText: string;

        /** Legend marker opacity. Will use lineAlpha if not set. Value range is 0 - 1. */
        legendAlpha: number;

        /** Legend marker color. Will use lineColor if not set. */
        legendColor: string;

        /** It is called and the following attributes are passed: dataItem, formattedText, periodValues, periodPercentValues. It should return hex color code which will be used for legend marker. */
        legendColorFunction: (dataItem: any, formattedText: string, periodValues: number[], periodPercentValues: number[]) => string;

        /** The text which will be displayed in the value portion of the legend when user is not hovering above any data point. The tags should be made out of two parts - the name of a field (value / open / close / high / low) and the value of the period you want to be show - open / close / high / low / sum / average / count. For example: [[value.sum]] means that sum of all data points of value field in the selected period will be displayed. */
        legendPeriodValueText: string;

        /** Legend value text. You can use tags like [[value]], [[description]], [[percents]], [[open]], [[category]] You can also use custom fields from your dataProvider. If not set, uses Legend's valueText. */
        legendValueText: string;

        /** Opacity of the line (or column border). Value range is 0 - 1.
             @default 1
         */
        lineAlpha: number;

        /** Color of the line (or column border). If you do not set any, the color from AmCoordinateChart.colors array will be used for each subsequent graph. */
        lineColor: string;

        /** Name of the line color field in your dataProvider. This property adds a possibility to change graphs’ line color on any data point to create highlighted sections of the graph. Works only with AmSerialChart. */
        lineColorField: string;

        /** Specifies thickness of the graph line (or column border).
             @default 1
         */
        lineThickness: number;

        /** Name of the low field (used by candlesticks and ohlc) in your dataProvider. */
        lowField: string;

        /** Legend marker type. You can set legend marker (key) type for individual graphs. Possible values are: square, circle, diamond, triangleUp, triangleDown, triangleLeft, triangleDown, bubble, line, none. */
        markerType: "square" | "circle" | "diamond" | "triangleUp" | "triangleDown" | "triangleLeft" | "triangleDown" | "bubble" | "line" | "none";

        /** Specifies size of the bullet which value is the biggest (XY chart).
             @default 50
         */
        maxBulletSize: number;

        /** Specifies minimum size of the bullet (XY chart).
             @default 4
         */
        minBulletSize: number;

        /** It is useful if you have really lots of data points. Based on this property the graph will omit some of the lines (if the distance between points is less that minDistance, in pixels). This will not affect the bullets or indicator in anyway, so the user will not see any difference (unless you set minValue to a bigger value, let say 5), but will increase performance as less lines will be drawn. By setting value to a bigger number you can also make your lines look less jagged.
             @default 1
         */
        minDistance: number;

        /** If you use different colors for your negative values, a graph below zero line is filled with negativeColor. With this property you can define a different base value at which colors should be changed to negative colors.
             @default 0
         */
        negativeBase: number;

        /** Fill opacity of negative part of the graph. Will use fillAlphas if not set. */
        negativeFillAlphas: number;

        /** Fill color of negative part of the graph. Will use fillColors if not set. */
        negativeFillColors: string;

        /** Opacity of the negative portion of the line (or column border). Value range is 0 - 1.
             @default 1
         */
        negativeLineAlpha: number;

        /** Color of the line (or column) when the values are negative. In case the graph type is candlestick or ohlc, negativeLineColor is used when close value is less then open value. */
        negativeLineColor: string;

        /** If you set it to true, column chart will begin new stack. This allows having Clustered and Stacked column/bar chart.
             @default false
         */
        newStack: boolean;

        /** In case you want to have a step line graph without risers, you should set this to true.
             @default false
         */
        noStepRisers: boolean;

        /** Name of the open field (used by floating columns, candlesticks and ohlc) in your dataProvider. */
        openField: string;

        /** Value of pattern should be object with url, width, height of an image, optionally it might have x, y, randomX and randomY values. For example: {"url":"../amcharts/patterns/black/pattern1.png", "width":4, "height":4}. If you want to have individual patterns for each column, define patterns in data provider and set graph.patternField property. Check amcharts/patterns folder for some patterns. You can create your own patterns and use them. Note, x, y, randomX and randomY properties won't work with IE8 and older. 3D bar/Pie charts won't work properly with patterns. */
        pattern: { url: string, width: number, height: number, x?: number, y?: number, randomX?: number, randomY?: number };

        /** Field name in your data provider which holds pattern information. Value of pattern should be object with url, width, height of an image, optionally it might have x, y, randomX and randomY values. For example: {"url":"../amcharts/patterns/black/pattern1.png", "width":4, "height":4}. Check amcharts/patterns folder for some patterns. You can create your own patterns and use them. Note, x, y, randomX and randomY properties won't work with IE8 and older. 3D bar/Pie charts won't work properly with patterns. */
        patternField: string;

        /** This property can be used by step graphs - you can set how many periods one horizontal line should span.
             @default 1
         */
        periodSpan: number;

        /** Specifies where data points should be placed - on the beginning of the period (day, hour, etc) or in the middle (only when parseDates property of categoryAxis is set to true). This setting affects Serial chart only. Possible values are "start", "middle" and "end"
             @default middle
         */
        pointPosition: "start" | "middle" | "end";

        /** Precision of values. Will use chart's precision if not set any. */
        precision: number;

        /** If this is set to true, candlesticks will be colored in a different manner - if current close is less than current open, the candlestick will be empty, otherwise - filled with color. If previous close is less than current close, the candlestick will use positive color, otherwise - negative color.
             @default false
         */
        proCandlesticks: boolean;

        /** Gantt chart only. Contains unmodified segment object from data provider. */
        segmentData: any;

        /** If graph's type is column and labelText is set, graph hides labels which do not fit into the column's space or go outside plot area. If you don't want these labels to be hidden, set this to true.
             @default false
         */
        showAllValueLabels: boolean;

        /** Specifies whether the value balloon of this graph is shown when mouse is over data item or chart's indicator is over some series.
             @default true
         */
        showBalloon: boolean;

        /** Specifies graphs value at which cursor is showed. This is only important for candlestick and ohlc charts, also if column chart has "open" value. Possible values are: "open", "close", "high", "low". "top" and "bottom" values will glue the balloon to top/bottom of the plot area.
             @default close
         */
        showBalloonAt: "open" | "close" | "high" | "low" | "top" | "bottom";

        /** Works with candlestick graph type, you can set it to open, close, high, low. If you set it to high, the events will be shown at the tip of the high line.
             @default close
         */
        showBulletsAt: "open" | "close" | "high" | "low";

        /** If you want mouse pointer to change to hand when hovering the graph, set this property to true.
             @default false
         */
        showHandOnHover: boolean;

        /** It can only be used together with topRadius (when columns look like cylinders). If you set it to true, the cylinder will be lowered down so that the center of it's bottom circle would be right on category axis.
             @default false
         */
        showOnAxis: boolean;

        /** If the value axis of this graph has stack types like "regular" or "100%" You can exclude this graph from stacking.
             @default true
         */
        stackable: boolean;

        /** Step graph only. Specifies to which direction step should be drawn.
             @default right
         */
        stepDirection: string;

        /** If you set it to false, the graph will not be hidden when user clicks on legend entry.
             @default true
         */
        switchable: boolean;

        /** In case you set it to some number, the chart will set focus on bullet/column (starting from first) when user clicks tab key. When a focus is set, screen readers like NVDA Screen reader will read label which is set using accessibleLabel property of AmGraph. Note, not all browsers and readers support this. */
        tabIndex: number;

        /** Graph title. */
        title: string;

        /** If you set this to 1, columns will become cylinders (must set depth3D and angle properties of a chart to &gt;0 values in order this to be visible). you can make columns look like cones (set topRadius to 0) or even like some glasses (set to bigger than 1). We strongly recommend setting grid opacity to 0 in order this to look good. */
        topRadius: number;

        /** Type of the graph. Possible values are: "line", "column", "step", "smoothedLine", "candlestick", "ohlc". XY and Radar charts can only display "line" type graphs.
             @default line
         */
        type: "line" | "column" | "step" | "smoothedLine" | "candlestick" | "ohlc";

        /** Name of the url field in your dataProvider. */
        urlField: string;

        /** Target to open URLs in, i.e. _blank, _top, etc. */
        urlTarget: string;

        /** If set to true, the bullet border will take the same color as graph line.
             @default false
         */
        useLineColorForBulletBorder: boolean;

        /** If negativeLineColor and/or negativeFillColors are set and useNegativeColorIfDown is set to true (default is false), the line, step and column graphs will use these colors for lines, bullets or columns if previous value is bigger than current value. In case you set openField for the graph, the graph will compare current value with openField value instead of comparing to previous value. Here is a demo.
             @default false
         */
        useNegativeColorIfDown: boolean;

        /** Specifies which value axis the graph will use. Will use the first value axis if not set. You can use reference to the real ValueAxis object or set value axis id.
             @default ValueAxis
         */
        valueAxis: ValueAxis;

        /** Name of the value field in your dataProvider. */
        valueField: string;

        /** Specifies whether this graph should be shown in the Legend.
             @default true
         */
        visibleInLegend: boolean;

        /** XY chart only. A horizontal value axis object to attach graph to.
             @default ValueAxis
         */
        xAxis: ValueAxis;

        /** XY chart only. Name of the x field in your dataProvider. */
        xField: string;

        /** XY chart only. A vertical value axis object to attach graph to.
             @default ValueAxis
         */
        yAxis: ValueAxis;

        /** XY chart only. Name of the y field in your dataProvider. */
        yField: string;

        /** Hides graph's bullets. */
        hideBullets(): void;

        /** Shows graph's bullets */
        showBullets(): void;
    }


    /** Creates the legend for the chart, automatically adapts the color settings of the graphs. Examplevar chart = AmCharts.makeChart("chartdiv",{ ... "legend": { "useGraphSettings": true }, }); */
    interface AmLegendConfig {

        /** Text which screen readers will read if user rolls-over the element or sets focus on it using tab key (this is possible only if tabIndex property of AmLegend is set to some number). Text is added as aria-label tag. Note - not all screen readers and browsers support this.
             @default [[title]]
         */
        accessibleLabel?: string;

        /** Alignment of legend entries. Possible values are: "left", "center", "right".
             @default left
         */
        align?: "left" | "center" | "right";

        /** Used if chart is Serial or XY. In case true, margins of the legend are adjusted and made equal to chart's margins.
             @default true
         */
        autoMargins?: boolean;

        /** Opacity of legend's background. Value range is 0 - 1
             @default 0
         */
        backgroundAlpha?: number;

        /** Background color. You should set backgroundAlpha to &gt;0 vallue in order background to be visible.
             @default #FFFFFF
         */
        backgroundColor?: string;

        /** Opacity of chart's border. Value range is 0 - 1.
             @default 0
         */
        borderAlpha?: number;

        /** Color of legend's border. You should set borderAlpha &gt;0 in order border to be visible.
             @default #000000
         */
        borderColor?: string;

        /** In case legend position is set to "absolute", you can set distance from bottom of the chart, in pixels. */
        bottom?: number;

        /** Text color.
             @default #000000
         */
        color?: string;

        /** If you set it to true, and you have some legend items set using legend.data property, both graph’s entries and those added using data property will be displayed.
             @default false
         */
        combineLegend?: boolean;

        /** You can pass array of objects with title, color, markerType values, for example: [{title: "One", color: "#3366CC"},{title: "Two", color: "#FFCC33"}] */
        data?: { title: string, color?: string, markerType?: string };

        /** You can set id of a div or a reference to div object in case you want the legend to be placed in a separate container. */
        divId?: string;

        /** Specifies if legend is enabled or not.
             @default true
         */
        enabled?: boolean;

        /** Specifies if each of legend entry should be equal to the most wide entry. Won't look good if legend has more than one line.
             @default true
         */
        equalWidths?: boolean;

        /** Font size.
             @default 11
         */
        fontSize?: number;

        /** If you set this property to true, width of legend item labels won't be adjusted. Useful when you have more than one chart and want to align all the legends.
             @default false
         */
        forceWidth?: boolean;

        /** Can be used if legend uses custom data. Set it to 0, 90, 180 or 270. */
        gradientRotation?: number;

        /** Horizontal space between legend item and left/right border.
             @default 0
         */
        horizontalGap?: number;

        /** The text which will be displayed in the legend. Tag [[title]] will be replaced with the title of the graph.
             @default [[title]]
         */
        labelText?: string;

        /** If width of the label is bigger than labelWidth, it will be wrapped. */
        labelWidth?: number;

        /** In case legend position is set to "absolute", you can set distance from left side of the chart, in pixels. */
        left?: number;

        /** You can add listeners of events using this property. Example: listeners = [{"event":"clickLabel", "method":handleEvent}]; */
        listeners?: { event: string, method: (event: any) => void };

        /** Bottom margin.
             @default 0
         */
        marginBottom?: number;

        /** Left margin. This property will be ignored if chart is Serial or XY and autoMargins property of the legend is true (default).
             @default 20
         */
        marginLeft?: number;

        /** Right margin. This property will be ignored if chart is Serial or XY and autoMargins property of the legend is true (default).
             @default 20
         */
        marginRight?: number;

        /** Top margin.
             @default 0
         */
        marginTop?: number;

        /** Marker border opacity.
             @default 1
         */
        markerBorderAlpha?: number;

        /** Marker border color. If not set, will use the same color as marker. */
        markerBorderColor?: string;

        /** Thickness of the legend border. The default value (0) means the line will be a "hairline" (1 px). In case marker type is line, this style will be used for line thickness.
             @default 1
         */
        markerBorderThickness?: number;

        /** The color of the disabled marker (when the graph is hidden).
             @default #AAB3B3
         */
        markerDisabledColor?: string;

        /** Space between legend marker and legend text, in pixels.
             @default 5
         */
        markerLabelGap?: number;

        /** Size of the legend marker (key).
             @default 16
         */
        markerSize?: number;

        /** Shape of the legend marker (key). Possible values are: square, circle, diamond, triangleUp, triangleDown, triangleLeft, triangleDown, bubble, line, none.
             @default square
         */
        markerType?: "square" | "circle" | "diamond" | "triangleUp" | "triangleDown" | "triangleLeft" | "triangleDown" | "bubble" | "line" | "none";

        /** Maximum number of columns in the legend. If Legend's position is set to "right" or "left", maxColumns is automatically set to 1. */
        maxColumns?: number;

        /** The text which will be displayed in the value portion of the legend when user is not hovering above any data point. The tags should be made out of two parts - the name of a field (value / open / close / high / low) and the value of the period you want to be show - open / close / high / low / sum / average / count. For example: [[value.sum]] means that sum of all data points of value field in the selected period will be displayed. */
        periodValueText?: string;

        /** Position of a legend. Possible values are: "bottom", "top", "left", "right" and "absolute". In case "absolute", you should set left and top properties too. (this setting is ignored in Stock charts). In case legend is used with AmMap, position is set to "absolute" automatically.
             @default bottom
         */
        position?: "bottom" | "top" | "left" | "right" | "absolute";

        /** Specifies whether legend entries should be placed in reversed order.
             @default false
         */
        reversedOrder?: boolean;

        /** In case legend position is set to "absolute", you can set distance from right side of the chart, in pixels. */
        right?: number;

        /** Legend item text color on roll-over.
             @default #CC0000
         */
        rollOverColor?: string;

        /** When you roll-over the legend entry, all other graphs can reduce their opacity, so that the graph you rolled-over would be distinguished. This style specifies the opacity of the non-hovered graphs.
             @default 1
         */
        rollOverGraphAlpha?: number;

        /** You can use this property to turn all the legend entries off.
             @default true
         */
        showEntries?: boolean;

        /** Horizontal space between legend items, in pixels.
             @default 10
         */
        spacing?: number;

        /** Whether showing/hiding of graphs by clicking on the legend marker is enabled or not. In case legend is used with AmMap, this is set to false automatically.
             @default true
         */
        switchable?: boolean;

        /** Legend switch color.
             @default #FFFFFF
         */
        switchColor?: string;

        /** Legend switch type (in case the legend is switchable). Possible values are "x" and "v".
             @default x
         */
        switchType?: "x" | "v";

        /** In case you set it to some number, the chart will set focus on legend entry when user clicks tab key. When a focus is set, screen readers like NVDA Screen reader will read label which is set using accessibleLabel property of AmLegend. If legend has switchable set to true, pressing Enter (Return) key will show/hide the graph. Note, not all browsers and readers support this. */
        tabIndex?: number;

        /** If true, clicking on the text will show/hide balloon of the graph. Otherwise it will show/hide graph/slice, if switchable is set to true.
             @default false
         */
        textClickEnabled?: boolean;

        /** In case legend position is set to "absolute", you can set distance from top of the chart, in pixels. */
        top?: number;

        /** Legend markers can mirror graph’s settings, displaying a line and a real bullet as in the graph itself. Set this property to true if you want to enable this feature. Note, if you set graph colors in dataProvider, they will not be reflected in the marker.
             @default false
         */
        useGraphSettings?: boolean;

        /** Labels will use marker color if you set this to true.
             @default false
         */
        useMarkerColorForLabels?: boolean;

        /** Specifies if legend values should be use same color as corresponding markers.
             @default false
         */
        useMarkerColorForValues?: boolean;

        /** Alignment of the value text. Possible values are "left" and "right".
             @default right
         */
        valueAlign?: "left" | "right";

        /** You can use it to format value labels in any way you want. Legend will call this method and will pass GraphDataItem and formatted text of currently hovered item (works only with ChartCursor added to the chart). This method should return string which will be displayed as value in the legend. */
        valueFunction?: (graphDataItem: GraphDataItem, formattedText: string) => string;

        /** The text which will be displayed in the value portion of the legend. You can use tags like [[value]], [[open]], [[high]], [[low]], [[close]], [[percents]], [[description]].
             @default [[value]]
         */
        valueText?: string;

        /** Width of the value text.
             @default 50
         */
        valueWidth?: number;

        /** Vertical space between legend items also between legend border and first and last legend row.
             @default 10
         */
        verticalGap?: number;

        /** Width of a legend, when position is set to absolute. */
        width?: number;
    }


    /** Creates the legend for the chart, automatically adapts the color settings of the graphs. Examplevar chart = AmCharts.makeChart("chartdiv",{ ... "legend": { "useGraphSettings": true }, }); */
    class AmLegend {

        /** Text which screen readers will read if user rolls-over the element or sets focus on it using tab key (this is possible only if tabIndex property of AmLegend is set to some number). Text is added as aria-label tag. Note - not all screen readers and browsers support this.
             @default [[title]]
         */
        accessibleLabel: string;

        /** Alignment of legend entries. Possible values are: "left", "center", "right".
             @default left
         */
        align: "left" | "center" | "right";

        /** Used if chart is Serial or XY. In case true, margins of the legend are adjusted and made equal to chart's margins.
             @default true
         */
        autoMargins: boolean;

        /** Opacity of legend's background. Value range is 0 - 1
             @default 0
         */
        backgroundAlpha: number;

        /** Background color. You should set backgroundAlpha to &gt;0 vallue in order background to be visible.
             @default #FFFFFF
         */
        backgroundColor: string;

        /** Opacity of chart's border. Value range is 0 - 1.
             @default 0
         */
        borderAlpha: number;

        /** Color of legend's border. You should set borderAlpha &gt;0 in order border to be visible.
             @default #000000
         */
        borderColor: string;

        /** In case legend position is set to "absolute", you can set distance from bottom of the chart, in pixels. */
        bottom: number;

        /** Text color.
             @default #000000
         */
        color: string;

        /** If you set it to true, and you have some legend items set using legend.data property, both graph’s entries and those added using data property will be displayed.
             @default false
         */
        combineLegend: boolean;

        /** You can pass array of objects with title, color, markerType values, for example: [{title: "One", color: "#3366CC"},{title: "Two", color: "#FFCC33"}] */
        data: { title: string, color?: string, markerType?: string };

        /** You can set id of a div or a reference to div object in case you want the legend to be placed in a separate container. */
        divId: string;

        /** Specifies if legend is enabled or not.
             @default true
         */
        enabled: boolean;

        /** Specifies if each of legend entry should be equal to the most wide entry. Won't look good if legend has more than one line.
             @default true
         */
        equalWidths: boolean;

        /** Font size.
             @default 11
         */
        fontSize: number;

        /** If you set this property to true, width of legend item labels won't be adjusted. Useful when you have more than one chart and want to align all the legends.
             @default false
         */
        forceWidth: boolean;

        /** Can be used if legend uses custom data. Set it to 0, 90, 180 or 270. */
        gradientRotation: number;

        /** Horizontal space between legend item and left/right border.
             @default 0
         */
        horizontalGap: number;

        /** The text which will be displayed in the legend. Tag [[title]] will be replaced with the title of the graph.
             @default [[title]]
         */
        labelText: string;

        /** If width of the label is bigger than labelWidth, it will be wrapped. */
        labelWidth: number;

        /** In case legend position is set to "absolute", you can set distance from left side of the chart, in pixels. */
        left: number;

        /** You can add listeners of events using this property. Example: listeners = [{"event":"clickLabel", "method":handleEvent}]; */
        listeners: { event: string, method: (event: any) => void };

        /** Bottom margin.
             @default 0
         */
        marginBottom: number;

        /** Left margin. This property will be ignored if chart is Serial or XY and autoMargins property of the legend is true (default).
             @default 20
         */
        marginLeft: number;

        /** Right margin. This property will be ignored if chart is Serial or XY and autoMargins property of the legend is true (default).
             @default 20
         */
        marginRight: number;

        /** Top margin.
             @default 0
         */
        marginTop: number;

        /** Marker border opacity.
             @default 1
         */
        markerBorderAlpha: number;

        /** Marker border color. If not set, will use the same color as marker. */
        markerBorderColor: string;

        /** Thickness of the legend border. The default value (0) means the line will be a "hairline" (1 px). In case marker type is line, this style will be used for line thickness.
             @default 1
         */
        markerBorderThickness: number;

        /** The color of the disabled marker (when the graph is hidden).
             @default #AAB3B3
         */
        markerDisabledColor: string;

        /** Space between legend marker and legend text, in pixels.
             @default 5
         */
        markerLabelGap: number;

        /** Size of the legend marker (key).
             @default 16
         */
        markerSize: number;

        /** Shape of the legend marker (key). Possible values are: square, circle, diamond, triangleUp, triangleDown, triangleLeft, triangleDown, bubble, line, none.
             @default square
         */
        markerType: "square" | "circle" | "diamond" | "triangleUp" | "triangleDown" | "triangleLeft" | "triangleDown" | "bubble" | "line" | "none";

        /** Maximum number of columns in the legend. If Legend's position is set to "right" or "left", maxColumns is automatically set to 1. */
        maxColumns: number;

        /** The text which will be displayed in the value portion of the legend when user is not hovering above any data point. The tags should be made out of two parts - the name of a field (value / open / close / high / low) and the value of the period you want to be show - open / close / high / low / sum / average / count. For example: [[value.sum]] means that sum of all data points of value field in the selected period will be displayed. */
        periodValueText: string;

        /** Position of a legend. Possible values are: "bottom", "top", "left", "right" and "absolute". In case "absolute", you should set left and top properties too. (this setting is ignored in Stock charts). In case legend is used with AmMap, position is set to "absolute" automatically.
             @default bottom
         */
        position: "bottom" | "top" | "left" | "right" | "absolute";

        /** Specifies whether legend entries should be placed in reversed order.
             @default false
         */
        reversedOrder: boolean;

        /** In case legend position is set to "absolute", you can set distance from right side of the chart, in pixels. */
        right: number;

        /** Legend item text color on roll-over.
             @default #CC0000
         */
        rollOverColor: string;

        /** When you roll-over the legend entry, all other graphs can reduce their opacity, so that the graph you rolled-over would be distinguished. This style specifies the opacity of the non-hovered graphs.
             @default 1
         */
        rollOverGraphAlpha: number;

        /** You can use this property to turn all the legend entries off.
             @default true
         */
        showEntries: boolean;

        /** Horizontal space between legend items, in pixels.
             @default 10
         */
        spacing: number;

        /** Whether showing/hiding of graphs by clicking on the legend marker is enabled or not. In case legend is used with AmMap, this is set to false automatically.
             @default true
         */
        switchable: boolean;

        /** Legend switch color.
             @default #FFFFFF
         */
        switchColor: string;

        /** Legend switch type (in case the legend is switchable). Possible values are "x" and "v".
             @default x
         */
        switchType: "x" | "v";

        /** In case you set it to some number, the chart will set focus on legend entry when user clicks tab key. When a focus is set, screen readers like NVDA Screen reader will read label which is set using accessibleLabel property of AmLegend. If legend has switchable set to true, pressing Enter (Return) key will show/hide the graph. Note, not all browsers and readers support this. */
        tabIndex: number;

        /** If true, clicking on the text will show/hide balloon of the graph. Otherwise it will show/hide graph/slice, if switchable is set to true.
             @default false
         */
        textClickEnabled: boolean;

        /** In case legend position is set to "absolute", you can set distance from top of the chart, in pixels. */
        top: number;

        /** Legend markers can mirror graph’s settings, displaying a line and a real bullet as in the graph itself. Set this property to true if you want to enable this feature. Note, if you set graph colors in dataProvider, they will not be reflected in the marker.
             @default false
         */
        useGraphSettings: boolean;

        /** Labels will use marker color if you set this to true.
             @default false
         */
        useMarkerColorForLabels: boolean;

        /** Specifies if legend values should be use same color as corresponding markers.
             @default false
         */
        useMarkerColorForValues: boolean;

        /** Alignment of the value text. Possible values are "left" and "right".
             @default right
         */
        valueAlign: "left" | "right";

        /** You can use it to format value labels in any way you want. Legend will call this method and will pass GraphDataItem and formatted text of currently hovered item (works only with ChartCursor added to the chart). This method should return string which will be displayed as value in the legend. */
        valueFunction: (graphDataItem: GraphDataItem, formattedText: string) => string;

        /** The text which will be displayed in the value portion of the legend. You can use tags like [[value]], [[open]], [[high]], [[low]], [[close]], [[percents]], [[description]].
             @default [[value]]
         */
        valueText: string;

        /** Width of the value text.
             @default 50
         */
        valueWidth: number;

        /** Vertical space between legend items also between legend border and first and last legend row.
             @default 10
         */
        verticalGap: number;

        /** Width of a legend, when position is set to absolute. */
        width: number;

        /** Dispatched when legend label is clicked. */
        addListener(type: "clickLabel", handler: (event: { type: any, dataItem: any, chart: AmChart }) => void): void;

        /** Dispatched when legend marker is clicked. */
        addListener(type: "clickMarker", handler: (event: { type: any, dataItem: any, chart: AmChart }) => void): void;

        /** Dispatched when user clicks on a legend item marker and hides corresponding object. */
        addListener(type: "hideItem", handler: (event: { type: any, dataItem: any, chart: AmChart }) => void): void;

        /** Dispatched when user rolls-out of the legend item label (or whole item, if switchable is set to false). */
        addListener(type: "rollOutItem", handler: (event: { type: any, dataItem: any, chart: AmChart }) => void): void;

        /** Dispatched when user rolls-over the legend item label (or whole item, if switchable is set to false). */
        addListener(type: "rollOverItem", handler: (event: { type: any, dataItem: any, chart: AmChart }) => void): void;

        /** Dispatched when user rolls-over the legend item marker. */
        addListener(type: "rollOverMarker", handler: (event: { type: any, dataItem: any, chart: AmChart }) => void): void;

        /** Dispatched when user clicks on a legend item marker and shows corresponding object. */
        addListener(type: "showItem", handler: (event: { type: any, dataItem: any, chart: AmChart }) => void): void;

        /** Adds event listener to the object. */
        addListener(type: string, handler: (event: any) => void): void;

        /** Removes event listener from the legend object. */
        removeListener(legend: AmLegend, type: string, handler: (event: any) => void): void;
    }


    /** Extension for AmSlicedChart to create pie/donut charts. Examplevar chart = AmCharts.makeChart("chartdiv",{ "type" : "pie", "titleField" : "category", "valueField" : "column-1", "dataProvider" : [ { "category": "category 1", "column-1": 8 }, { "category": "category 2", "column-1": 6 }, { "category": "category 3", "column-1": 2 } ] }); */
    interface AmPieChartConfig extends AmSlicedChartConfig {

        /** Sometimes, because of a rounding, percent of a sum of all slices is not equal to 100%. If you set this to true, when this case happens, number of decimals will be increased so that sum would become 100%.
             @default false
         */
        adjustPrecision?: boolean;

        /** Pie lean angle (for 3D effect). Valid range is 0 - 90.
             @default 0
         */
        angle?: number;

        /** If you set some function, the graph will call it and pass GraphDataItem object to it. This function should return a string which will be displayed in a balloon. */
        balloonFunction?: (graphDataItem: GraphDataItem, graph: AmGraph) => string;

        /** Balloon text. The following tags can be used: [[value]], [[title]], [[percents]], [[description]] or any other field name from your data provider. HTML tags can also be used.
             @default [[title]]: [[percents]]% ([[value]])\n[[description]]
         */
        balloonText?: string;

        /** Depth of the pie (for 3D effect).
             @default 0
         */
        depth3D?: number;

        /** Type of gradient. Use gradientRatio to create gradients.
             @default radial
         */
        gradientType?: string;

        /** Inner radius of the pie, in pixels or percents.
             @default 0
         */
        innerRadius?: number | string;

        /** The distance between the label and the slice, in pixels. You can use negative values to put the label on the slice.
             @default 20
         */
        labelRadius?: number;

        /** Name of the field in dataProvider which specifies the length of a tick. Note, the chart will not try to arrange labels automatically if this property is set. */
        labelRadiusField?: string;

        /** Label text. The following tags can be used: [[value]], [[title]], [[percents]], [[description]] or any other field name from your data provider.
             @default [[title]]: [[percents]]%
         */
        labelText?: string;

        /** Minimum radius of the pie, in pixels.
             @default 10
         */
        minRadius?: number;

        /** You can set fixed position of a pie center, in pixels or in percents. */
        pieX?: number | string;

        /** You can set fixed position of a pie center, in pixels or in percents. */
        pieY?: number | string;

        /** Pull out radius, in pixels or percents
             @default 20%
         */
        pullOutRadius?: number | string;

        /** Radius of a pie, in pixels or percents. By default, radius is calculated automatically. */
        radius?: number | string;

        /** Angle of the first slice, in degrees. This will work properly only if "depth3D" is set to 0. If "depth3D" is greater than 0, then there can be two angles only: 90 and 270. Value range is 0-360.
             @default 90
         */
        startAngle?: number;

        /** Radius of the positions from which the slices will fly in.
             @default 500%
         */
        startRadius?: number | string;
    }


    /** Extension for AmSlicedChart to create pie/donut charts. Examplevar chart = AmCharts.makeChart("chartdiv",{ "type" : "pie", "titleField" : "category", "valueField" : "column-1", "dataProvider" : [ { "category": "category 1", "column-1": 8 }, { "category": "category 2", "column-1": 6 }, { "category": "category 3", "column-1": 2 } ] }); */
    class AmPieChart extends AmSlicedChart {

        /** Sometimes, because of a rounding, percent of a sum of all slices is not equal to 100%. If you set this to true, when this case happens, number of decimals will be increased so that sum would become 100%.
             @default false
         */
        adjustPrecision: boolean;

        /** Pie lean angle (for 3D effect). Valid range is 0 - 90.
             @default 0
         */
        angle: number;

        /** If you set some function, the graph will call it and pass GraphDataItem object to it. This function should return a string which will be displayed in a balloon. */
        balloonFunction: (graphDataItem: GraphDataItem, graph: AmGraph) => string;

        /** Balloon text. The following tags can be used: [[value]], [[title]], [[percents]], [[description]] or any other field name from your data provider. HTML tags can also be used.
             @default [[title]]: [[percents]]% ([[value]])\n[[description]]
         */
        balloonText: string;

        /** Depth of the pie (for 3D effect).
             @default 0
         */
        depth3D: number;

        /** Type of gradient. Use gradientRatio to create gradients.
             @default radial
         */
        gradientType: string;

        /** Inner radius of the pie, in pixels or percents.
             @default 0
         */
        innerRadius: number | string;

        /** The distance between the label and the slice, in pixels. You can use negative values to put the label on the slice.
             @default 20
         */
        labelRadius: number;

        /** Name of the field in dataProvider which specifies the length of a tick. Note, the chart will not try to arrange labels automatically if this property is set. */
        labelRadiusField: string;

        /** Label text. The following tags can be used: [[value]], [[title]], [[percents]], [[description]] or any other field name from your data provider.
             @default [[title]]: [[percents]]%
         */
        labelText: string;

        /** Minimum radius of the pie, in pixels.
             @default 10
         */
        minRadius: number;

        /** You can set fixed position of a pie center, in pixels or in percents. */
        pieX: number | string;

        /** You can set fixed position of a pie center, in pixels or in percents. */
        pieY: number | string;

        /** Pull out radius, in pixels or percents
             @default 20%
         */
        pullOutRadius: number | string;

        /** Radius of a pie, in pixels or percents. By default, radius is calculated automatically. */
        radius: number | string;

        /** Angle of the first slice, in degrees. This will work properly only if "depth3D" is set to 0. If "depth3D" is greater than 0, then there can be two angles only: 90 and 270. Value range is 0-360.
             @default 90
         */
        startAngle: number;

        /** Radius of the positions from which the slices will fly in.
             @default 500%
         */
        startRadius: number | string;

        /** Dispatched when user clicks on a slice. Event is an instance of original mouse event. */
        addListener(type: "clickSlice", handler: (event: { type: any, dataItem: Slice, event: MouseEvent }) => void): void;

        /** Dispatched when user clicks on a slice and the slice is pulled-in. Event is an instance of original mouse event. */
        addListener(type: "pullInSlice", handler: (event: { type: any, dataItem: Slice, event: MouseEvent }) => void): void;

        /** Dispatched when user clicks on a slice and the slice is pulled-out. Event is an instance of original mouse event. */
        addListener(type: "pullOutSlice", handler: (event: { type: any, dataItem: Slice, event: MouseEvent }) => void): void;

        /** Dispatched when user right-clicks the slice. Event is an instance of original mouse event. */
        addListener(type: "rightClickSlice", handler: (event: { type: any, dataItem: Slice, event: MouseEvent }) => void): void;

        /** Dispatched when user rolls-out of the slice. Event is an instance of original mouse event. */
        addListener(type: "rollOutSlice", handler: (event: { type: any, dataItem: Slice, event: MouseEvent }) => void): void;

        /** Dispatched when user rolls-over the slice. Event is an instance of original mouse event. */
        addListener(type: "rollOverSlice", handler: (event: { type: any, dataItem: Slice, event: MouseEvent }) => void): void;

        /** Adds event listener to the object. */
        addListener(type: string, handler: (event: any) => void): void;

        /** You can trigger the animation of the pie chart. */
        animateAgain(): void;

        /** You can trigger the click on a slice from outside. */
        clickSlice(index: number): void;

        /** Hides slice. */
        hideSlice(index: number): void;

        /** You can simulate roll-out of a slice from outside. */
        rollOutSlice(index: number): void;

        /** You can simulate roll-over a slice from outside. */
        rollOverSlice(index: number): void;

        /** Shows slice. */
        showSlice(index: number): void;
    }


    /** Extension for AmCoordinateChart to create radar/polar charts. Examplevar chart = AmCharts.makeChart("chartdiv",{ "type": "radar", "categoryField": "category", "graphs": [ { "valueField": "value" } ], "valueAxes": [ { "axisTitleOffset": 20, "minimum": 0, "axisAlpha": 0.15, "dashLength": 3 } ], "dataProvider": [ { "category": "Category 1", "value": 156.9 }, { "category": "Category 2", "value": 131.1 }, { "category": "Category 3", "value": 115.8 }, { "category": "Category 4", "value": 109.9 }, { "category": "Category 5", "value": 108.3 }, { "category": "Category 6", "value": 99 } ] }); */
    interface AmRadarChartConfig extends AmCoordinateChartConfig {

        /** Field in your data provider containing categories. */
        categoryField?: string;

        /** Bottom margin of the chart.
             @default 0
         */
        marginBottom?: number;

        /** Left margin of the chart.
             @default 0
         */
        marginLeft?: number;

        /** Right margin of the chart.
             @default 0
         */
        marginRight?: number;

        /** Top margin of the chart.
             @default 0
         */
        marginTop?: number;

        /** Radius of a radar.
             @default 35%
         */
        radius?: number | string;
    }


    /** Extension for AmCoordinateChart to create radar/polar charts. Examplevar chart = AmCharts.makeChart("chartdiv",{ "type": "radar", "categoryField": "category", "graphs": [ { "valueField": "value" } ], "valueAxes": [ { "axisTitleOffset": 20, "minimum": 0, "axisAlpha": 0.15, "dashLength": 3 } ], "dataProvider": [ { "category": "Category 1", "value": 156.9 }, { "category": "Category 2", "value": 131.1 }, { "category": "Category 3", "value": 115.8 }, { "category": "Category 4", "value": 109.9 }, { "category": "Category 5", "value": 108.3 }, { "category": "Category 6", "value": 99 } ] }); */
    class AmRadarChart extends AmCoordinateChart {

        /** Field in your data provider containing categories. */
        categoryField: string;

        /** Bottom margin of the chart.
             @default 0
         */
        marginBottom: number;

        /** Left margin of the chart.
             @default 0
         */
        marginLeft: number;

        /** Right margin of the chart.
             @default 0
         */
        marginRight: number;

        /** Top margin of the chart.
             @default 0
         */
        marginTop: number;

        /** Radius of a radar.
             @default 35%
         */
        radius: number | string;
    }


    /** Extension for AmCoordinateChart and base class of AmSerialChart and AmXYChart. It can not be instantiated explicitly. */
    interface AmRectangularChartConfig extends AmCoordinateChartConfig {

        /** The angle of the 3D part of plot area. This creates a 3D effect (if the "depth3D" is &gt; 0).
             @default 0
         */
        angle?: number;

        /** Space left from axis labels/title to the chart's outside border, if autoMargins set to true.
             @default 10
         */
        autoMarginOffset?: number;

        /** Specifies if margins of a chart should be calculated automatically so that labels of axes would fit. The chart will adjust only margins with axes. Other margins will use values set with marginRight, marginTop, marginLeft and marginBottom properties.
             @default true
         */
        autoMargins?: boolean;

        /** Cursor of a chart. */
        chartCursor?: ChartCursorConfig;

        /** Chart's scrollbar. */
        chartScrollbar?: ChartScrollbarConfig;

        /** The depth of the 3D part of plot area. This creates a 3D effect (if the "angle" is &gt; 0).
             @default 0
         */
        depth3D?: number;

        /** Number of pixels between the container's bottom border and plot area. This space can be used for bottom axis' values. If autoMargin is true and bottom side has axis, this property is ignored.
             @default 20
         */
        marginBottom?: number;

        /** Number of pixels between the container's left border and plot area. This space can be used for left axis' values. If autoMargin is true and left side has axis, this property is ignored.
             @default 20
         */
        marginLeft?: number;

        /** Number of pixels between the container's right border and plot area. This space can be used for Right axis' values. If autoMargin is true and right side has axis, this property is ignored.
             @default 20
         */
        marginRight?: number;

        /** Flag which should be set to false if you need margins to be recalculated on next chart.validateNow() call.
             @default false
         */
        marginsUpdated?: boolean;

        /** Number of pixels between the container's top border and plot area. This space can be used for top axis' values. If autoMargin is true and top side has axis, this property is ignored.
             @default 20
         */
        marginTop?: number;

        /** Maximum zoom factor value axes.
             @default 20
         */
        maxZoomFactor?: number;

        /** If bottom side has a value axis and autoMargins is set to true (default), the margin of this side will be not less than set on minMarginBottom property. */
        minMarginBottom?: number;

        /** If left side has a value axis and autoMargins is set to true (default), the margin of this side will be not less than set on minMarginLeft property. */
        minMarginLeft?: number;

        /** If right side has a value axis and autoMargins is set to true (default), the margin of this side will be not less than set on minMarginRight property. */
        minMarginRight?: number;

        /** If top side has a value axis and autoMargins is set to true (default), the margin of this side will be not less than set on minMarginTop property. */
        minMarginTop?: number;

        /** The opacity of plot area's border. Value range is 0 - 1.
             @default 0
         */
        plotAreaBorderAlpha?: number;

        /** The color of the plot area's border. Note, the it is invisible by default, as plotAreaBorderAlpha default value is 0. Set it to a value higher than 0 to make it visible.
             @default #000000
         */
        plotAreaBorderColor?: string;

        /** Opacity of plot area. Plural form is used to keep the same property names as our Flex charts'. Flex charts can accept array of numbers to generate gradients. Although you can set array here, only first value of this array will be used.
             @default 0
         */
        plotAreaFillAlphas?: number;

        /** You can set both one color if you need a solid color or array of colors to generate gradients, for example: ["#000000", "#0000CC"]
             @default #FFFFFF
         */
        plotAreaFillColors?: string;

        /** If you are using gradients to fill the plot area, you can use this property to set gradient angle. The only allowed values are horizontal and vertical: 0, 90, 180, 270.
             @default 0
         */
        plotAreaGradientAngle?: number;

        /** Array of trend lines added to a chart. You can add trend lines to a chart using this array or access already existing trend lines */
        trendLines?: TrendLineConfig[];

        /** Opacity of zoom-out button background.
             @default 0
         */
        zoomOutButtonAlpha?: number;

        /** Zoom-out button background color.
             @default #e5e5e5
         */
        zoomOutButtonColor?: string;

        /** Name of zoom-out button image. In the images folder there is another lens image, called lensWhite.png. You might want to have white lens when background is dark. Or you can simply use your own image. Note, you don't have to set image extension. If svgIcons is set to true (default) .svg will be added to the file name if SVG is supported by the browser, otherwise – .png.
             @default lens
         */
        zoomOutButtonImage?: string;

        /** Size of zoom-out button image
             @default 17
         */
        zoomOutButtonImageSize?: number;

        /** Padding around the text and image.
             @default 8
         */
        zoomOutButtonPadding?: number;

        /** Opacity of zoom-out button background when mouse is over it.
             @default 1
         */
        zoomOutButtonRollOverAlpha?: number;

        /** In case you set it to some number, the chart will set focus on zoom-out button when user clicks tab key. When a focus is set, screen readers like NVDA Screen reader will read zoomOutText. If user clicks Enter when a focus is set, the chart will zoom-out. Note, not all browsers and readers support this. */
        zoomOutButtonTabIndex?: number;

        /** Text in the zoom-out button.
             @default Show all
         */
        zoomOutText?: string;
    }


    /** Extension for AmCoordinateChart and base class of AmSerialChart and AmXYChart. It can not be instantiated explicitly. */
    class AmRectangularChart extends AmCoordinateChart {

        /** The angle of the 3D part of plot area. This creates a 3D effect (if the "depth3D" is &gt; 0).
             @default 0
         */
        angle: number;

        /** Space left from axis labels/title to the chart's outside border, if autoMargins set to true.
             @default 10
         */
        autoMarginOffset: number;

        /** Specifies if margins of a chart should be calculated automatically so that labels of axes would fit. The chart will adjust only margins with axes. Other margins will use values set with marginRight, marginTop, marginLeft and marginBottom properties.
             @default true
         */
        autoMargins: boolean;

        /** Cursor of a chart. */
        chartCursor: ChartCursor;

        /** Chart's scrollbar. */
        chartScrollbar: ChartScrollbar;

        /** The depth of the 3D part of plot area. This creates a 3D effect (if the "angle" is &gt; 0).
             @default 0
         */
        depth3D: number;

        /** Number of pixels between the container's bottom border and plot area. This space can be used for bottom axis' values. If autoMargin is true and bottom side has axis, this property is ignored.
             @default 20
         */
        marginBottom: number;

        /** Number of pixels between the container's left border and plot area. This space can be used for left axis' values. If autoMargin is true and left side has axis, this property is ignored.
             @default 20
         */
        marginLeft: number;

        /** Number of pixels between the container's right border and plot area. This space can be used for Right axis' values. If autoMargin is true and right side has axis, this property is ignored.
             @default 20
         */
        marginRight: number;

        /** Flag which should be set to false if you need margins to be recalculated on next chart.validateNow() call.
             @default false
         */
        marginsUpdated: boolean;

        /** Number of pixels between the container's top border and plot area. This space can be used for top axis' values. If autoMargin is true and top side has axis, this property is ignored.
             @default 20
         */
        marginTop: number;

        /** Maximum zoom factor value axes.
             @default 20
         */
        maxZoomFactor: number;

        /** If bottom side has a value axis and autoMargins is set to true (default), the margin of this side will be not less than set on minMarginBottom property. */
        minMarginBottom: number;

        /** If left side has a value axis and autoMargins is set to true (default), the margin of this side will be not less than set on minMarginLeft property. */
        minMarginLeft: number;

        /** If right side has a value axis and autoMargins is set to true (default), the margin of this side will be not less than set on minMarginRight property. */
        minMarginRight: number;

        /** If top side has a value axis and autoMargins is set to true (default), the margin of this side will be not less than set on minMarginTop property. */
        minMarginTop: number;

        /** The opacity of plot area's border. Value range is 0 - 1.
             @default 0
         */
        plotAreaBorderAlpha: number;

        /** The color of the plot area's border. Note, the it is invisible by default, as plotAreaBorderAlpha default value is 0. Set it to a value higher than 0 to make it visible.
             @default #000000
         */
        plotAreaBorderColor: string;

        /** Opacity of plot area. Plural form is used to keep the same property names as our Flex charts'. Flex charts can accept array of numbers to generate gradients. Although you can set array here, only first value of this array will be used.
             @default 0
         */
        plotAreaFillAlphas: number;

        /** You can set both one color if you need a solid color or array of colors to generate gradients, for example: ["#000000", "#0000CC"]
             @default #FFFFFF
         */
        plotAreaFillColors: string;

        /** If you are using gradients to fill the plot area, you can use this property to set gradient angle. The only allowed values are horizontal and vertical: 0, 90, 180, 270.
             @default 0
         */
        plotAreaGradientAngle: number;

        /** Array of trend lines added to a chart. You can add trend lines to a chart using this array or access already existing trend lines */
        trendLines: TrendLine[];

        /** Opacity of zoom-out button background.
             @default 0
         */
        zoomOutButtonAlpha: number;

        /** Zoom-out button background color.
             @default #e5e5e5
         */
        zoomOutButtonColor: string;

        /** Name of zoom-out button image. In the images folder there is another lens image, called lensWhite.png. You might want to have white lens when background is dark. Or you can simply use your own image. Note, you don't have to set image extension. If svgIcons is set to true (default) .svg will be added to the file name if SVG is supported by the browser, otherwise – .png.
             @default lens
         */
        zoomOutButtonImage: string;

        /** Size of zoom-out button image
             @default 17
         */
        zoomOutButtonImageSize: number;

        /** Padding around the text and image.
             @default 8
         */
        zoomOutButtonPadding: number;

        /** Opacity of zoom-out button background when mouse is over it.
             @default 1
         */
        zoomOutButtonRollOverAlpha: number;

        /** In case you set it to some number, the chart will set focus on zoom-out button when user clicks tab key. When a focus is set, screen readers like NVDA Screen reader will read zoomOutText. If user clicks Enter when a focus is set, the chart will zoom-out. Note, not all browsers and readers support this. */
        zoomOutButtonTabIndex: number;

        /** Text in the zoom-out button.
             @default Show all
         */
        zoomOutText: string;

        /** Adds a ChartCursor object to a chart */
        addChartCursor(cursor: ChartCursor): void;

        /** Adds a ChartScrollbar to a chart */
        addChartScrollbar(scrollbar: ChartScrollbar): void;

        /** Adds a TrendLine to a chart. You should call chart.validateNow() after this method is called in order the trend line to be visible. */
        addTrendLine(trendLine: TrendLine): void;

        /** Removes cursor from the chart */
        removeChartCursor(): void;

        /** Removes scrollbar from the chart */
        removeChartScrollbar(): void;

        /** Removes a trend line from a chart. You should call chart.validateNow() in order the changes to be visible. */
        removeTrendLine(trendLine: TrendLine): void;

        /** Zooms-out value axes. */
        zoomOutValueAxes(): void;
    }


    /** Extension for AmRectangularChart to create line, area, column, bar, step line, smoothed line, candlestick and OHLC charts. The charts support multiple axes with simple or logarithmic scales, the data points can be displayed at equal / irregular intervals or on timeline basis. Examplevar chart = AmCharts.makeChart("chartdiv",{ "type": "serial", "categoryField": "category", "graphs": [ { "valueField": "value" } ], "dataProvider": [ { "category": "category 1", "value": 8, }, { "category": "category 2", "value": 4, } ] }); */
    interface AmSerialChartConfig extends AmRectangularChartConfig {

        /** Date format of the graph balloon (if chart parses dates and you don't use chartCursor).
             @default MMM DD, YYYY
         */
        balloonDateFormat?: string;

        /** Read-only. Chart creates category axis itself. If you want to change some properties, you should get this axis from the chart and set properties to this object.
             @default CategoryAxis
         */
        categoryAxis?: CategoryAxisConfig;

        /** Category field name tells the chart the name of the field in your dataProvider object which will be used for category axis values. */
        categoryField?: string;

        /** The gap in pixels between two columns of the same category.
             @default 5
         */
        columnSpacing?: number;

        /** Space between 3D stacked columns.
             @default 0
         */
        columnSpacing3D?: number;

        /** Relative width of columns. Value range is 0 - 1.
             @default 0.8
         */
        columnWidth?: number;

        /** Even if your chart parses dates, you can pass them as strings in your data – all you need to do is to set data date format and the chart will parse dates to date objects. Check this page for available formats.Please note that two-digit years (YY) as well as literal month names (MMM) are NOT supported in this setting. */
        dataDateFormat?: string;

        /** Read-only. If category axis parses dates endDate indicates date to which the chart is currently displayed. */
        endDate?: Date;

        /** Read-only. Category index to which the chart is currently displayed. */
        endIndex?: number;

        /** Maximum number of series allowed to select. */
        maxSelectedSeries?: number;

        /** The longest time span allowed to select (in milliseconds) for example, 259200000 will limit selection to 3 days. Works if equalSpacing is set to false (default). */
        maxSelectedTime?: number;

        /** The shortest time span allowed to select (in milliseconds) for example, 1000 will limit selection to 1 second. Works if equalSpacing is set to false (default).
             @default 0
         */
        minSelectedTime?: number;

        /** Specifies if scrolling of a chart with mouse wheel is enabled. If you press shift while rotating mouse wheel, the chart will zoom-in/out.
             @default false
         */
        mouseWheelScrollEnabled?: boolean;

        /** Specifies if zooming of a chart with mouse wheel is enabled. If you press shift while rotating mouse wheel, the chart will scroll.
             @default false
         */
        mouseWheelZoomEnabled?: boolean;

        /** If you set this to true, the chart will be rotated by 90 degrees (the columns will become bars).
             @default false
         */
        rotate?: boolean;

        /** Read-only. If category axis parses dates startDate indicates date from which the chart is currently displayed. */
        startDate?: Date;

        /** Read-only. Category index from which the chart is currently displayed. */
        startIndex?: number;

        /** Value scrollbar, enables scrolling value axes. */
        valueScrollbar?: ChartScrollbarConfig;

        /** Specifies if chart should zoom-out when data is updated.
             @default true
         */
        zoomOutOnDataUpdate?: boolean;
    }


    /** Extension for AmRectangularChart to create line, area, column, bar, step line, smoothed line, candlestick and OHLC charts. The charts support multiple axes with simple or logarithmic scales, the data points can be displayed at equal / irregular intervals or on timeline basis. Examplevar chart = AmCharts.makeChart("chartdiv",{ "type": "serial", "categoryField": "category", "graphs": [ { "valueField": "value" } ], "dataProvider": [ { "category": "category 1", "value": 8, }, { "category": "category 2", "value": 4, } ] }); */
    class AmSerialChart extends AmRectangularChart {

        /** Date format of the graph balloon (if chart parses dates and you don't use chartCursor).
             @default MMM DD, YYYY
         */
        balloonDateFormat: string;

        /** Read-only. Chart creates category axis itself. If you want to change some properties, you should get this axis from the chart and set properties to this object.
             @default CategoryAxis
         */
        categoryAxis: CategoryAxis;

        /** Category field name tells the chart the name of the field in your dataProvider object which will be used for category axis values. */
        categoryField: string;

        /** The gap in pixels between two columns of the same category.
             @default 5
         */
        columnSpacing: number;

        /** Space between 3D stacked columns.
             @default 0
         */
        columnSpacing3D: number;

        /** Relative width of columns. Value range is 0 - 1.
             @default 0.8
         */
        columnWidth: number;

        /** Even if your chart parses dates, you can pass them as strings in your data – all you need to do is to set data date format and the chart will parse dates to date objects. Check this page for available formats.Please note that two-digit years (YY) as well as literal month names (MMM) are NOT supported in this setting. */
        dataDateFormat: string;

        /** Read-only. If category axis parses dates endDate indicates date to which the chart is currently displayed. */
        endDate: Date;

        /** Read-only. Category index to which the chart is currently displayed. */
        endIndex: number;

        /** Maximum number of series allowed to select. */
        maxSelectedSeries: number;

        /** The longest time span allowed to select (in milliseconds) for example, 259200000 will limit selection to 3 days. Works if equalSpacing is set to false (default). */
        maxSelectedTime: number;

        /** The shortest time span allowed to select (in milliseconds) for example, 1000 will limit selection to 1 second. Works if equalSpacing is set to false (default).
             @default 0
         */
        minSelectedTime: number;

        /** Specifies if scrolling of a chart with mouse wheel is enabled. If you press shift while rotating mouse wheel, the chart will zoom-in/out.
             @default false
         */
        mouseWheelScrollEnabled: boolean;

        /** Specifies if zooming of a chart with mouse wheel is enabled. If you press shift while rotating mouse wheel, the chart will scroll.
             @default false
         */
        mouseWheelZoomEnabled: boolean;

        /** If you set this to true, the chart will be rotated by 90 degrees (the columns will become bars).
             @default false
         */
        rotate: boolean;

        /** Read-only. If category axis parses dates startDate indicates date from which the chart is currently displayed. */
        startDate: Date;

        /** Read-only. Category index from which the chart is currently displayed. */
        startIndex: number;

        /** Value scrollbar, enables scrolling value axes. */
        valueScrollbar: ChartScrollbar;

        /** Specifies if chart should zoom-out when data is updated.
             @default true
         */
        zoomOutOnDataUpdate: boolean;

        /** Dispatched when cursor position is changed. "index" is a series index over which chart cursors currently is. "zooming" specifies if user is currently zooming (is selecting) the chart. */
        addListener(type: "changed", handler: (event: { type: any, index: number, zooming: boolean, chart: AmChart }) => void): void;

        /** Dispatched when the chart is zoomed (even for the first time, when chart is initialized) */
        addListener(type: "zoomed", handler: (event: { endDate: Date, endIndex: number, endValue: string, startDate: Date, startIndex: number, startValue: string, chart: AmChart }) => void): void;

        /** Adds event listener to the object. */
        addListener(type: string, handler: (event: any) => void): void;

        /** Returns index of the specified category value. */
        getCategoryIndexByValue(value: number): number;

        /** Zooms out, charts shows all available data. */
        zoomOut(): void;

        /** Zooms the chart by the value of the category axis. */
        zoomToCategoryValues(start: string, end: string): void;

        /** Zooms the chart from one date to another. */
        zoomToDates(start: Date, end: Date): void;

        /** Zooms the chart by the index of the category. */
        zoomToIndexes(start: number, end: number): void;
    }


    /** Extension for AmChart and base class of AmPieChart and AmFunnelChart. It can not be instantiated explicitly. */
    interface AmSlicedChartConfig extends AmChartConfig {

        /** Text which screen readers will read if user rolls-over the slice or sets focus using tab key (this is possible only if tabIndex property of AmSlicedChart is set to some number). Text is added as aria-label tag. Note - not all screen readers and browsers support this.
             @default [[title]]: [[percents]]% [[value]] [[description]]
         */
        accessibleLabel?: string;

        /** Opacity of all slices.
             @default 1
         */
        alpha?: number;

        /** Name of the field in chart's dataProvider which holds slice's alpha. */
        alphaField?: string;

        /** Color of the first slice. All the other will be colored with darker or brighter colors. */
        baseColor?: string;

        /** Read-only. Array of Slice objects. */
        chartData?: any[];

        /** If this field is set and addClassNames is enabled, the slice element will have this class name set. */
        classNameField?: string;

        /** Name of the field in chart's dataProvider which holds slice's color. */
        colorField?: string;

        /** Specifies the colors of the slices, if the slice color is not set. If there are more slices than colors in this array, the chart picks random color.
             @default ["#FF0F00", "#FF6600", "#FF9E01", "#FCD202", "#F8FF01", "#B0DE09", "#04D215", "#0D8ECF", "#0D52D1", "#2A0CD0", "#8A0CCF", "#CD0D74", "#754DEB", "#DDDDDD", "#999999", "#333333", "#000000", "#57032A", "#CA9726", "#990000", "#4B0C25"]
         */
        colors?: string[];

        /** Name of the field in chart's dataProvider which holds a string with description. */
        descriptionField?: string;

        /** Example: [-0.2, 0, -0.2]. Will make slices to be filled with color gradients. Negative value means the color will be darker than the original, and positive number means the color will be lighter.
             @default []
         */
        gradientRatio?: number[];

        /** Opacity of the group slice. Value range is 0 - 1.
             @default 1
         */
        groupedAlpha?: number;

        /** Color of the group slice. The default value is not set - this means the next available color from "colors" array will be used. */
        groupedColor?: string;

        /** Description of the group slice. */
        groupedDescription?: string;

        /** If this is set to true, the group slice will be pulled out when the chart loads.
             @default false
         */
        groupedPulled?: boolean;

        /** Title of the group slice.
             @default Other
         */
        groupedTitle?: string;

        /** If there is more than one slice whose percentage of the pie is less than this number, those slices will be grouped together into one slice. This is the "other" slice. It will always be the last slice in a pie.
             @default 0
         */
        groupPercent?: number;

        /** Slices with percent less then hideLabelsPercent won't display labels This is useful to avoid cluttering up the chart, if you have a lot of small slices. 0 means all labels will be shown.
             @default 0
         */
        hideLabelsPercent?: number;

        /** Opacity of a hovered slice. Value range is 0 - 1.
             @default 1
         */
        hoverAlpha?: number;

        /** A field in data which holds color value for the tick. Use it to set color of the label for each slice individually.
             @default #000000
         */
        labelColorField?: string;

        /** You can use it to format data labels in any way you want. Chart will call this method and will pass Slice object and formatted text as attributes. This function should return string which will be displayed as label. */
        labelFunction?: (slice: any, formattedText: string) => string;

        /** Specifies whether data labels are visible.
             @default true
         */
        labelsEnabled?: boolean;

        /** Label tick opacity. Value range is 0 - 1.
             @default 0.2
         */
        labelTickAlpha?: number;

        /** Label tick color.
             @default #000000
         */
        labelTickColor?: string;

        /** Bottom margin of the chart.
             @default 10
         */
        marginBottom?: number;

        /** Left margin of the chart.
             @default 0
         */
        marginLeft?: number;

        /** Right margin of the chart.
             @default 0
         */
        marginRight?: number;

        /** Top margin of the chart.
             @default 10
         */
        marginTop?: number;

        /** If width of the label is bigger than maxLabelWidth, it will be wrapped.
             @default 200
         */
        maxLabelWidth?: number;

        /** Outline opacity. Value range is 0 - 1.
             @default 0
         */
        outlineAlpha?: number;

        /** Outline color.
             @default #FFFFFF
         */
        outlineColor?: string;

        /** Pie outline thickness.
             @default 1
         */
        outlineThickness?: number;

        /** Field name in your data provider which holds pattern information. Value of pattern should be object with url, width, height of an image, optionally it might have x, y, randomX and randomY values. For example: {"url":"../amcharts/patterns/black/pattern1.png", "width":4, "height":4}. Check amcharts/patterns folder for some patterns. You can create your own patterns and use them. Note, x, y, randomX and randomY properties won't work with IE8 and older. 3D bar/Pie charts won't work properly with patterns. */
        patternField?: string;

        /** Name of the field in chart's dataProvider which holds a boolean value telling the chart whether this slice must be pulled or not. */
        pulledField?: string;

        /** Pull out duration, in seconds.
             @default 1
         */
        pullOutDuration?: number;

        /** Pull out effect. Possible values are: easeOutSine, easeInSine, elastic, bounce
             @default bounce
         */
        pullOutEffect?: "easeOutSine" | "easeInSine" | "elastic" | "bounce";

        /** If this is set to true, only one slice can be pulled out at a time. If the viewer clicks on a slice, any other pulled-out slice will be pulled in.
             @default false
         */
        pullOutOnlyOne?: boolean;

        /** Specifies whether the animation should be sequenced or all slices should appear at once.
             @default true
         */
        sequencedAnimation?: boolean;

        /** If you set this to true, the chart will display outlines (if visible) and labels for slices even if their value is 0.
             @default false
         */
        showZeroSlices?: boolean;

        /** Initial opacity of all slices. Slices will fade in from startAlpha.
             @default 0
         */
        startAlpha?: number;

        /** Duration of the animation, in seconds.
             @default 1
         */
        startDuration?: number;

        /** Animation effect. Possible values are: easeOutSine, easeInSine, elastic, bounce
             @default bounce
         */
        startEffect?: "easeOutSine" | "easeInSine" | "elastic" | "bounce";

        /** In case you set it to some number, the chart will set focus on a slice (starting from first) when user clicks tab key. When a focus is set, screen readers like NVDA Screen reader will read label which is set using accessibleLabel property of AmSlicedChart. Note, not all browsers and readers support this. */
        tabIndex?: number;

        /** Name of the field in chart's dataProvider which holds slice's title. */
        titleField?: string;

        /** Name of the field in chart's dataProvider which holds url which would be accessed if the user clicks on a slice. */
        urlField?: string;

        /** If url is specified for a slice, it will be opened when user clicks on it. urlTarget specifies target of this url. Use _blank if you want url to be opened in a new window.
             @default _self
         */
        urlTarget?: string;

        /** Name of the field in chart's dataProvider which holds slice's value. */
        valueField?: string;

        /** Use this field to selectively specify which slice is shown in legend. It should be set to a boolean field in data (that holds either true or false). For example if you set visibleInLegendField to "showInLegend", all slices that have showInLegend: false in their data will not be shown in the legend. */
        visibleInLegendField?: string;
    }


    /** Extension for AmChart and base class of AmPieChart and AmFunnelChart. It can not be instantiated explicitly. */
    class AmSlicedChart extends AmChart {

        /** Text which screen readers will read if user rolls-over the slice or sets focus using tab key (this is possible only if tabIndex property of AmSlicedChart is set to some number). Text is added as aria-label tag. Note - not all screen readers and browsers support this.
             @default [[title]]: [[percents]]% [[value]] [[description]]
         */
        accessibleLabel: string;

        /** Opacity of all slices.
             @default 1
         */
        alpha: number;

        /** Name of the field in chart's dataProvider which holds slice's alpha. */
        alphaField: string;

        /** Color of the first slice. All the other will be colored with darker or brighter colors. */
        baseColor: string;

        /** Read-only. Array of Slice objects. */
        chartData: any[];

        /** If this field is set and addClassNames is enabled, the slice element will have this class name set. */
        classNameField: string;

        /** Name of the field in chart's dataProvider which holds slice's color. */
        colorField: string;

        /** Specifies the colors of the slices, if the slice color is not set. If there are more slices than colors in this array, the chart picks random color.
             @default ["#FF0F00", "#FF6600", "#FF9E01", "#FCD202", "#F8FF01", "#B0DE09", "#04D215", "#0D8ECF", "#0D52D1", "#2A0CD0", "#8A0CCF", "#CD0D74", "#754DEB", "#DDDDDD", "#999999", "#333333", "#000000", "#57032A", "#CA9726", "#990000", "#4B0C25"]
         */
        colors: string[];

        /** Name of the field in chart's dataProvider which holds a string with description. */
        descriptionField: string;

        /** Example: [-0.2, 0, -0.2]. Will make slices to be filled with color gradients. Negative value means the color will be darker than the original, and positive number means the color will be lighter.
             @default []
         */
        gradientRatio: number[];

        /** Opacity of the group slice. Value range is 0 - 1.
             @default 1
         */
        groupedAlpha: number;

        /** Color of the group slice. The default value is not set - this means the next available color from "colors" array will be used. */
        groupedColor: string;

        /** Description of the group slice. */
        groupedDescription: string;

        /** If this is set to true, the group slice will be pulled out when the chart loads.
             @default false
         */
        groupedPulled: boolean;

        /** Title of the group slice.
             @default Other
         */
        groupedTitle: string;

        /** If there is more than one slice whose percentage of the pie is less than this number, those slices will be grouped together into one slice. This is the "other" slice. It will always be the last slice in a pie.
             @default 0
         */
        groupPercent: number;

        /** Slices with percent less then hideLabelsPercent won't display labels This is useful to avoid cluttering up the chart, if you have a lot of small slices. 0 means all labels will be shown.
             @default 0
         */
        hideLabelsPercent: number;

        /** Opacity of a hovered slice. Value range is 0 - 1.
             @default 1
         */
        hoverAlpha: number;

        /** A field in data which holds color value for the tick. Use it to set color of the label for each slice individually.
             @default #000000
         */
        labelColorField: string;

        /** You can use it to format data labels in any way you want. Chart will call this method and will pass Slice object and formatted text as attributes. This function should return string which will be displayed as label. */
        labelFunction: (slice: any, formattedText: string) => string;

        /** Specifies whether data labels are visible.
             @default true
         */
        labelsEnabled: boolean;

        /** Label tick opacity. Value range is 0 - 1.
             @default 0.2
         */
        labelTickAlpha: number;

        /** Label tick color.
             @default #000000
         */
        labelTickColor: string;

        /** Bottom margin of the chart.
             @default 10
         */
        marginBottom: number;

        /** Left margin of the chart.
             @default 0
         */
        marginLeft: number;

        /** Right margin of the chart.
             @default 0
         */
        marginRight: number;

        /** Top margin of the chart.
             @default 10
         */
        marginTop: number;

        /** If width of the label is bigger than maxLabelWidth, it will be wrapped.
             @default 200
         */
        maxLabelWidth: number;

        /** Outline opacity. Value range is 0 - 1.
             @default 0
         */
        outlineAlpha: number;

        /** Outline color.
             @default #FFFFFF
         */
        outlineColor: string;

        /** Pie outline thickness.
             @default 1
         */
        outlineThickness: number;

        /** Field name in your data provider which holds pattern information. Value of pattern should be object with url, width, height of an image, optionally it might have x, y, randomX and randomY values. For example: {"url":"../amcharts/patterns/black/pattern1.png", "width":4, "height":4}. Check amcharts/patterns folder for some patterns. You can create your own patterns and use them. Note, x, y, randomX and randomY properties won't work with IE8 and older. 3D bar/Pie charts won't work properly with patterns. */
        patternField: string;

        /** Name of the field in chart's dataProvider which holds a boolean value telling the chart whether this slice must be pulled or not. */
        pulledField: string;

        /** Pull out duration, in seconds.
             @default 1
         */
        pullOutDuration: number;

        /** Pull out effect. Possible values are: easeOutSine, easeInSine, elastic, bounce
             @default bounce
         */
        pullOutEffect: "easeOutSine" | "easeInSine" | "elastic" | "bounce";

        /** If this is set to true, only one slice can be pulled out at a time. If the viewer clicks on a slice, any other pulled-out slice will be pulled in.
             @default false
         */
        pullOutOnlyOne: boolean;

        /** Specifies whether the animation should be sequenced or all slices should appear at once.
             @default true
         */
        sequencedAnimation: boolean;

        /** If you set this to true, the chart will display outlines (if visible) and labels for slices even if their value is 0.
             @default false
         */
        showZeroSlices: boolean;

        /** Initial opacity of all slices. Slices will fade in from startAlpha.
             @default 0
         */
        startAlpha: number;

        /** Duration of the animation, in seconds.
             @default 1
         */
        startDuration: number;

        /** Animation effect. Possible values are: easeOutSine, easeInSine, elastic, bounce
             @default bounce
         */
        startEffect: "easeOutSine" | "easeInSine" | "elastic" | "bounce";

        /** In case you set it to some number, the chart will set focus on a slice (starting from first) when user clicks tab key. When a focus is set, screen readers like NVDA Screen reader will read label which is set using accessibleLabel property of AmSlicedChart. Note, not all browsers and readers support this. */
        tabIndex: number;

        /** Name of the field in chart's dataProvider which holds slice's title. */
        titleField: string;

        /** Name of the field in chart's dataProvider which holds url which would be accessed if the user clicks on a slice. */
        urlField: string;

        /** If url is specified for a slice, it will be opened when user clicks on it. urlTarget specifies target of this url. Use _blank if you want url to be opened in a new window.
             @default _self
         */
        urlTarget: string;

        /** Name of the field in chart's dataProvider which holds slice's value. */
        valueField: string;

        /** Use this field to selectively specify which slice is shown in legend. It should be set to a boolean field in data (that holds either true or false). For example if you set visibleInLegendField to "showInLegend", all slices that have showInLegend: false in their data will not be shown in the legend. */
        visibleInLegendField: string;

        /** Dispatched when user clicks on a slice. */
        addListener(type: "clickSlice", handler: (event: { type: any, dataItem: Slice, event: MouseEvent, chart: AmSlicedChart }) => void): void;

        /** Dispatched when user clicks on a slice and the slice is pulled-in. */
        addListener(type: "pullInSlice", handler: (event: { type: any, dataItem: Slice, event: MouseEvent, chart: AmSlicedChart }) => void): void;

        /** Dispatched when user clicks on a slice and the slice is pulled-out. */
        addListener(type: "pullOutSlice", handler: (event: { type: any, dataItem: Slice, event: MouseEvent, chart: AmSlicedChart }) => void): void;

        /** Dispatched when user right-clicks the slice. */
        addListener(type: "rightClickSlice", handler: (event: { type: any, dataItem: Slice, event: MouseEvent, chart: AmSlicedChart }) => void): void;

        /** Dispatched when user rolls-out of the slice. */
        addListener(type: "rollOutSlice", handler: (event: { type: any, dataItem: Slice, event: MouseEvent, chart: AmSlicedChart }) => void): void;

        /** Dispatched when user rolls-over the slice. */
        addListener(type: "rollOverSlice", handler: (event: { type: any, dataItem: Slice, event: MouseEvent, chart: AmSlicedChart }) => void): void;

        /** Adds event listener to the object. */
        addListener(type: string, handler: (event: any) => void): void;

        /** You can trigger the animation of the chart. */
        animateAgain(): void;

        /** You can trigger the click on a slice from outside. */
        clickSlice(index: number): void;

        /** Hides slice. */
        hideSlice(index: number): void;

        /** You can simulate roll-out of a slice from outside. */
        rollOutSlice(index: number): void;

        /** You can simulate roll-over a slice from outside. */
        rollOverSlice(index: number): void;

        /** Shows slice. */
        showSlice(index: number): void;
    }


    /** Extension for AmRectangularChart to create XY/bubble/scatter charts. The charts support multiple axes with simple or logarithmic scales. Examplevar chart = AmCharts.makeChart("chartdiv",{ "type": "xy", "graphs": [ { "bullet": "diamond", "lineAlpha": 0, "valueField": "value", "xField": "x", "yField": "y" } ], "dataProvider": [ { "y": 10, "x": 14, "value": 59 }, { "y": 5, "x": 3, "value": 50 }, { "y": 8, "x": 19, "value": 55 } ] }); */
    interface AmXYChartConfig extends AmRectangularChartConfig {

        /** In case you have date-based value axis in your XY chart, you can specify your corresponding values as strings. In that case you will need to set this setting to whatever format your are using for date/time. Check this page for available formats.Please note that two-digit years (YY) as well as literal month names (MMM) are NOT supported in this setting. */
        dataDateFormat?: string;

        /** Specifies if Scrollbar of X axis (horizontal) should be hidden.
             @default false
         */
        hideXScrollbar?: boolean;

        /** Specifies if Scrollbar of Y axis (vertical) should be hidden.
             @default false
         */
        hideYScrollbar?: boolean;

        /** These can be used to adjust size/scale of bubbles. If these properties are not set, the bubble with smallest value will be of minBulletSize and bubble with biggest value will be of maxBulletSize. However, you might want bubble size to change relative to 0 or some other value. In this case you can use minValue and maxValue properties. Note, if you use these two settings, you might also want to set minBulletSize to 0. */
        maxValue?: number;

        /** Maximum zoom factor of the chart.
             @default 20
         */
        maxZoomFactor?: number;

        /** These can be used to adjust size/scale of bubbles. If these properties are not set, the bubble with smallest value will be of minBulletSize and bubble with biggest value will be of maxBulletSize. However, you might want bubble size to change relative to 0 or some other value. In this case you can use minValue and maxValue properties. Note, if you use these two settings, you might also want to set minBulletSize to 0. */
        minValue?: number;
    }


    /** Extension for AmRectangularChart to create XY/bubble/scatter charts. The charts support multiple axes with simple or logarithmic scales. Examplevar chart = AmCharts.makeChart("chartdiv",{ "type": "xy", "graphs": [ { "bullet": "diamond", "lineAlpha": 0, "valueField": "value", "xField": "x", "yField": "y" } ], "dataProvider": [ { "y": 10, "x": 14, "value": 59 }, { "y": 5, "x": 3, "value": 50 }, { "y": 8, "x": 19, "value": 55 } ] }); */
    class AmXYChart extends AmRectangularChart {

        /** In case you have date-based value axis in your XY chart, you can specify your corresponding values as strings. In that case you will need to set this setting to whatever format your are using for date/time. Check this page for available formats.Please note that two-digit years (YY) as well as literal month names (MMM) are NOT supported in this setting. */
        dataDateFormat: string;

        /** Specifies if Scrollbar of X axis (horizontal) should be hidden.
             @default false
         */
        hideXScrollbar: boolean;

        /** Specifies if Scrollbar of Y axis (vertical) should be hidden.
             @default false
         */
        hideYScrollbar: boolean;

        /** These can be used to adjust size/scale of bubbles. If these properties are not set, the bubble with smallest value will be of minBulletSize and bubble with biggest value will be of maxBulletSize. However, you might want bubble size to change relative to 0 or some other value. In this case you can use minValue and maxValue properties. Note, if you use these two settings, you might also want to set minBulletSize to 0. */
        maxValue: number;

        /** Maximum zoom factor of the chart.
             @default 20
         */
        maxZoomFactor: number;

        /** These can be used to adjust size/scale of bubbles. If these properties are not set, the bubble with smallest value will be of minBulletSize and bubble with biggest value will be of maxBulletSize. However, you might want bubble size to change relative to 0 or some other value. In this case you can use minValue and maxValue properties. Note, if you use these two settings, you might also want to set minBulletSize to 0. */
        minValue: number;

        /** Zooms out, charts shows all available data. */
        zoomOut(): void;
    }


    /** Base class for ValueAxis and CategoryAxis. It can not be instantiated explicitly. */
    interface AxisBaseConfig {

        /** Specifies whether number of gridCount is specified automatically, acoarding to the axis size.
             @default true
         */
        autoGridCount?: boolean;

        /** Angle of label rotation, if the number of series exceeds autoRotateCount. Works on horizontal axis only. It is not recommended to use it with charts with zoom/scroll features, as chart adjusts margin only based on initial render. */
        autoRotateAngle?: number;

        /** If the number of category axis items will exceed the autoRotateCount, the labels will be rotated by autoRotateAngle degree. Works on horizontal axis only. Not recommended with scrollable/zoomable charts. */
        autoRotateCount?: number;

        /** Axis opacity. Value range is 0 - 1.
             @default 1
         */
        axisAlpha?: number;

        /** Axis color.
             @default #000000
         */
        axisColor?: string;

        /** Thickness of the axis.
             @default 1
         */
        axisThickness?: number;

        /** Read-only. Returns x coordinate of the axis. */
        axisX?: number;

        /** Read-only. Returns y coordinate of the axis. */
        axisY?: number;

        /** Allows customizing axes balloons individually.
             @default AmBalloon
         */
        balloon?: AmBalloonConfig;

        /** Specifies if axis labels should be bold or not.
             @default false
         */
        boldLabels?: boolean;

        /** When parse dates is on for the category axis, the chart will try to highlight the beginning of the periods, like month, in bold. Set this to false to disable the functionality.
             @default true
         */
        boldPeriodBeginning?: boolean;

        /** This setting works only when parseDates is set to true and equalSpacing is set to false. In case you set it to false, labels will never be centered between grid lines.
             @default true
         */
        centerLabelOnFullPeriod?: boolean;

        /** Force-centers labels of date-based axis (in case it's category axis, equalSpacing must be false)
             @default false
         */
        centerLabels?: boolean;

        /** In case you have rotated labels on horizontal axis, you can force-center them using this property.
             @default false
         */
        centerRotatedLabels?: boolean;

        /** Color of axis value labels. Will use chart's color if not set. */
        color?: string;

        /** Length of a dash. 0 means line is not dashed.
             @default 0
         */
        dashLength?: number;

        /** Date formats of different periods. Possible period values: fff - milliseconds, ss - seconds, mm - minutes, hh - hours, DD - days, MM - months, WW - weeks, YYYY - years. Check this page for date formatting strings.
             @default [{"period":"fff","format":"JJ:NN:SS"},{"period":"ss","format":"JJ:NN:SS"},{"period":"mm","format":"JJ:NN"},{"period":"hh","format":"JJ:NN"},{"period":"DD","format":"MMM DD"},{"period":"WW","format":"MMM DD"},{"period":"MM","format":"MMM"},{"period":"YYYY","format":"YYYY"}]
         */
        dateFormats?: { period: string, format: string };

        /** Fill opacity. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills.
             @default 0
         */
        fillAlpha?: number;

        /** Fill color. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills.
             @default #FFFFFF
         */
        fillColor?: string;

        /** Sets first day of the week. 0 is Sunday, 1 is Monday, etc.
             @default 1
         */
        firstDayOfWeek?: number;

        /** Size of value labels text. Will use chart's fontSize if not set. */
        fontSize?: number;

        /** Opacity of grid lines.
             @default 0.15
         */
        gridAlpha?: number;

        /** Color of grid lines.
             @default #000000
         */
        gridColor?: string;

        /** Number of grid lines. In case this is value axis, or your categoryAxis parses dates, the number is approximate. The default value is 5. If you set autoGridCount to true, this property is ignored.
             @default 5
         */
        gridCount?: number;

        /** Thickness of grid lines.
             @default 1
         */
        gridThickness?: number;

        /** The array of guides belonging to this axis.
             @default []
         */
        guides?: GuideConfig[];

        /** If autoMargins of a chart is set to true, but you want this axis not to be measured when calculating margin, set ignoreAxisWidth to true.
             @default false
         */
        ignoreAxisWidth?: boolean;

        /** Specifies whether values should be placed inside or outside plot area.
             @default false
         */
        inside?: boolean;

        /** Frequency at which labels should be placed. Doesn't work for CategoryAxis if parseDates is set to true.
             @default 1
         */
        labelFrequency?: number;

        /** You can use it to adjust position of axes labels. Works both with CategoryAxis and ValueAxis.
             @default 0
         */
        labelOffset?: number;

        /** Rotation angle of a label. Only horizontal axis' values can be rotated. If you set this for vertical axis, the setting will be ignored. Possible values from -90 to 90.
             @default 0
         */
        labelRotation?: number;

        /** Specifies whether axis displays category axis' labels and value axis' values.
             @default true
         */
        labelsEnabled?: boolean;

        /** You can add listeners of events using this property. Example: listeners = [{"event":"clickItem", "method":handleEvent}]; */
        listeners?: { event: string, method: (event: any) => void };

        /** If you set it to false, the start of longer periods won't use a different date format and won't be bold.
             @default true
         */
        markPeriodChange?: boolean;

        /** This property is used when calculating grid count (when autoGridCount is true). It specifies minimum cell width required for one span between grid lines.
             @default 75
         */
        minHorizontalGap?: number;

        /** Opacity of minor grid. In order minor to be visible, you should set minorGridEnabled to true.
             @default 0.07
         */
        minorGridAlpha?: number;

        /** Specifies if minor grid should be displayed. NOTE: If equalSpacing is set to true, this setting will be ignored.
             @default false
         */
        minorGridEnabled?: boolean;

        /** Length of minor grid tick.
             @default 0
         */
        minorTickLength?: number;

        /** This property is used when calculating grid count (when autoGridCount is true). It specifies minimum cell height required for one span between grid lines.
             @default 35
         */
        minVerticalGap?: number;

        /** The distance of the axis to the plot area, in pixels. Negative values can also be used.
             @default 0
         */
        offset?: number;

        /** Possible values are: "top", "bottom", "left", "right". If axis is vertical, default position is "left". If axis is horizontal, default position is "bottom".
             @default bottom
         */
        position?: "top" | "bottom" | "left" | "right";

        /** Whether to show first axis label or not. This works properly only on ValueAxis. With CategoryAxis it wont work 100%, it depends on the period, zooming, etc. There is no guaranteed way to force category axis to show or hide first label.
             @default true
         */
        showFirstLabel?: boolean;

        /** Whether to show last axis label or not. This works properly only on ValueAxis. With CategoryAxis it wont work 100%, it depends on the period, zooming, etc. There is no guaranteed way to force category axis to show or hide last label.
             @default true
         */
        showLastLabel?: boolean;

        /** Length of the tick marks.
             @default 5
         */
        tickLength?: number;

        /** Title of the axis. */
        title?: string;

        /** Specifies if title should be bold or not.
             @default true
         */
        titleBold?: boolean;

        /** Color of axis title. Will use text color of chart if not set any. */
        titleColor?: string;

        /** Font size of axis title. Will use font size of chart plus two pixels if not set any. */
        titleFontSize?: number;

        /** Rotation of axis title. Useful if you want to make vertical axis title to be shown from top to down. */
        titleRotation?: number;
    }


    /** Base class for ValueAxis and CategoryAxis. It can not be instantiated explicitly. */
    class AxisBase {

        /** Specifies whether number of gridCount is specified automatically, acoarding to the axis size.
             @default true
         */
        autoGridCount: boolean;

        /** Angle of label rotation, if the number of series exceeds autoRotateCount. Works on horizontal axis only. It is not recommended to use it with charts with zoom/scroll features, as chart adjusts margin only based on initial render. */
        autoRotateAngle: number;

        /** If the number of category axis items will exceed the autoRotateCount, the labels will be rotated by autoRotateAngle degree. Works on horizontal axis only. Not recommended with scrollable/zoomable charts. */
        autoRotateCount: number;

        /** Axis opacity. Value range is 0 - 1.
             @default 1
         */
        axisAlpha: number;

        /** Axis color.
             @default #000000
         */
        axisColor: string;

        /** Thickness of the axis.
             @default 1
         */
        axisThickness: number;

        /** Read-only. Returns x coordinate of the axis. */
        axisX: number;

        /** Read-only. Returns y coordinate of the axis. */
        axisY: number;

        /** Allows customizing axes balloons individually.
             @default AmBalloon
         */
        balloon: AmBalloon;

        /** Specifies if axis labels should be bold or not.
             @default false
         */
        boldLabels: boolean;

        /** When parse dates is on for the category axis, the chart will try to highlight the beginning of the periods, like month, in bold. Set this to false to disable the functionality.
             @default true
         */
        boldPeriodBeginning: boolean;

        /** This setting works only when parseDates is set to true and equalSpacing is set to false. In case you set it to false, labels will never be centered between grid lines.
             @default true
         */
        centerLabelOnFullPeriod: boolean;

        /** Force-centers labels of date-based axis (in case it's category axis, equalSpacing must be false)
             @default false
         */
        centerLabels: boolean;

        /** In case you have rotated labels on horizontal axis, you can force-center them using this property.
             @default false
         */
        centerRotatedLabels: boolean;

        /** Color of axis value labels. Will use chart's color if not set. */
        color: string;

        /** Length of a dash. 0 means line is not dashed.
             @default 0
         */
        dashLength: number;

        /** Date formats of different periods. Possible period values: fff - milliseconds, ss - seconds, mm - minutes, hh - hours, DD - days, MM - months, WW - weeks, YYYY - years. Check this page for date formatting strings.
             @default [{"period":"fff","format":"JJ:NN:SS"},{"period":"ss","format":"JJ:NN:SS"},{"period":"mm","format":"JJ:NN"},{"period":"hh","format":"JJ:NN"},{"period":"DD","format":"MMM DD"},{"period":"WW","format":"MMM DD"},{"period":"MM","format":"MMM"},{"period":"YYYY","format":"YYYY"}]
         */
        dateFormats: { period: string, format: string };

        /** Fill opacity. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills.
             @default 0
         */
        fillAlpha: number;

        /** Fill color. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills.
             @default #FFFFFF
         */
        fillColor: string;

        /** Sets first day of the week. 0 is Sunday, 1 is Monday, etc.
             @default 1
         */
        firstDayOfWeek: number;

        /** Size of value labels text. Will use chart's fontSize if not set. */
        fontSize: number;

        /** Opacity of grid lines.
             @default 0.15
         */
        gridAlpha: number;

        /** Color of grid lines.
             @default #000000
         */
        gridColor: string;

        /** Number of grid lines. In case this is value axis, or your categoryAxis parses dates, the number is approximate. The default value is 5. If you set autoGridCount to true, this property is ignored.
             @default 5
         */
        gridCount: number;

        /** Thickness of grid lines.
             @default 1
         */
        gridThickness: number;

        /** The array of guides belonging to this axis.
             @default []
         */
        guides: Guide[];

        /** If autoMargins of a chart is set to true, but you want this axis not to be measured when calculating margin, set ignoreAxisWidth to true.
             @default false
         */
        ignoreAxisWidth: boolean;

        /** Specifies whether values should be placed inside or outside plot area.
             @default false
         */
        inside: boolean;

        /** Frequency at which labels should be placed. Doesn't work for CategoryAxis if parseDates is set to true.
             @default 1
         */
        labelFrequency: number;

        /** You can use it to adjust position of axes labels. Works both with CategoryAxis and ValueAxis.
             @default 0
         */
        labelOffset: number;

        /** Rotation angle of a label. Only horizontal axis' values can be rotated. If you set this for vertical axis, the setting will be ignored. Possible values from -90 to 90.
             @default 0
         */
        labelRotation: number;

        /** Specifies whether axis displays category axis' labels and value axis' values.
             @default true
         */
        labelsEnabled: boolean;

        /** You can add listeners of events using this property. Example: listeners = [{"event":"clickItem", "method":handleEvent}]; */
        listeners: { event: string, method: (event: any) => void };

        /** If you set it to false, the start of longer periods won't use a different date format and won't be bold.
             @default true
         */
        markPeriodChange: boolean;

        /** This property is used when calculating grid count (when autoGridCount is true). It specifies minimum cell width required for one span between grid lines.
             @default 75
         */
        minHorizontalGap: number;

        /** Opacity of minor grid. In order minor to be visible, you should set minorGridEnabled to true.
             @default 0.07
         */
        minorGridAlpha: number;

        /** Specifies if minor grid should be displayed. NOTE: If equalSpacing is set to true, this setting will be ignored.
             @default false
         */
        minorGridEnabled: boolean;

        /** Length of minor grid tick.
             @default 0
         */
        minorTickLength: number;

        /** This property is used when calculating grid count (when autoGridCount is true). It specifies minimum cell height required for one span between grid lines.
             @default 35
         */
        minVerticalGap: number;

        /** The distance of the axis to the plot area, in pixels. Negative values can also be used.
             @default 0
         */
        offset: number;

        /** Possible values are: "top", "bottom", "left", "right". If axis is vertical, default position is "left". If axis is horizontal, default position is "bottom".
             @default bottom
         */
        position: "top" | "bottom" | "left" | "right";

        /** Whether to show first axis label or not. This works properly only on ValueAxis. With CategoryAxis it wont work 100%, it depends on the period, zooming, etc. There is no guaranteed way to force category axis to show or hide first label.
             @default true
         */
        showFirstLabel: boolean;

        /** Whether to show last axis label or not. This works properly only on ValueAxis. With CategoryAxis it wont work 100%, it depends on the period, zooming, etc. There is no guaranteed way to force category axis to show or hide last label.
             @default true
         */
        showLastLabel: boolean;

        /** Length of the tick marks.
             @default 5
         */
        tickLength: number;

        /** Title of the axis. */
        title: string;

        /** Specifies if title should be bold or not.
             @default true
         */
        titleBold: boolean;

        /** Color of axis title. Will use text color of chart if not set any. */
        titleColor: string;

        /** Font size of axis title. Will use font size of chart plus two pixels if not set any. */
        titleFontSize: number;

        /** Rotation of axis title. Useful if you want to make vertical axis title to be shown from top to down. */
        titleRotation: number;

        /** Adds guide to the axis. */
        addGuide(guide: Guide): void;

        /** Removes guide from the axis. */
        removeGuide(guide: Guide): void;
    }


    /** Extension for AxisBase, gets automatically populated if none has been specified. Examplevar chart = AmCharts.makeChart("chartdiv",{ ... "categoryAxis": { "gridPosition": "start" } }); */
    interface CategoryAxisConfig extends AxisBaseConfig {

        /** Angle of label rotation, if the number of series exceeds autoRotateCount and parseDates is set to false. */
        autoRotateAngle?: number;

        /** If the number of category axis items will exceed the autoRotateCount, the labels will be rotated by autoRotateAngle degree. Works only if parseDates is false. */
        autoRotateCount?: number;

        /** Specifies if axis labels (only when it is horizontal) should be wrapped if they don't fit in the allocated space. If axis is vertical, you should set axis.ignoreAxisWidth to true in order this feature to work.
             @default false
         */
        autoWrap?: boolean;

        /** specifies a method that returns the value that should be used as categoryValue for current item. If this property is set, the return value of the custom data function takes precedence over categoryField. When a chart calls this method, it passes category value, data item from chart's data provider and reference to categoryAxis: categoryFunction(category, dataItem, categoryAxis); This method can be used both when category axis parses dates and when it doesn't. If axis parses dates, your categoryFunction should return Date object. For example, if you have date strings in your data, you can use this method to convert these strings into Date objects. */
        categoryFunction?: (category: string | Date, dataItem: any, categoryAxis: CategoryAxis) => string | Date;

        /** If this field is set and addClassNames is enabled, the category axis labels, ticks and grid will have this class name set. NOTE: this will not work if the axis is date-based. */
        classNameField?: string;

        /** Date formats of different periods. Possible period values: fff - milliseconds, ss - seconds, mm - minutes, hh - hours, DD - days, MM - months, WW - weeks, YYYY - years. Check this page for date formatting strings.
             @default [{"period":"fff","format":"JJ:NN:SS"},{"period":"ss","format":"JJ:NN:SS"},{"period":"mm","format":"JJ:NN"},{"period":"hh","format":"JJ:NN"},{"period":"DD","format":"MMM DD"},{"period":"WW","format":"MMM DD"},{"period":"MM","format":"MMM"},{"period":"YYYY","format":"YYYY"}]
         */
        dateFormats?: { period: string, format: string };

        /** In case your category axis values are Date objects and parseDates is set to true, the chart will parse dates and will place your data points at irregular intervals. However if you want dates to be parsed (displayed on the axis, baloons, etc), but data points to be placed at equal intervals (omiting dates with no data), set equalSpacing to true.
             @default false
         */
        equalSpacing?: boolean;

        /** Field in data provider which specifies if the category value should always be shown. For example: categoryAxis.forceShowField = "forceShow"; And in data: {category:"one", forceShow:true, value:100} Note, this works only when parseDates is set to false. */
        forceShowField?: string;

        /** Specifies if a grid line is placed on the center of a cell or on the beginning of a cell. Possible values are: "start" and "middle" This setting doesn't work if parseDates is set to true.
             @default middle
         */
        gridPosition?: "start" | "middle";

        /** You can use it to set color of a axis label. Works only with non-date-based data. */
        labelColorField?: string;

        /** You can use this function to format Category axis labels. If this function is set, then it is called with the following parameters passed: if dates are not parsed: labelFunction(valueText, serialDataItem, categoryAxis) if dates are parsed: labelFunction(valueText, date, categoryAxis) Your function should return string which will be displayed on the axis. */
        labelFunction?: (valueText: string, serialDataItem: any, categoryAxis: CategoryAxis) => string;

        /** Specifies the shortest period of your data. This should be set only if parseDates is set to "true". Possible period values: fff - milliseconds, ss - seconds, mm - minutes, hh - hours, DD - days, MM - months, YYYY - years. It's also possible to supply a number for increments, i.e. "15mm" which will instruct the chart that your data is supplied in 15 minute increments.
             @default DD
         */
        minPeriod?: string;

        /** In case your category axis values are Date objects, set this to true. In this case the chart will parse dates and will place your data points at irregular intervals. If you want dates to be parsed, but data points to be placed at equal intervals, set both parseDates and equalSpacing to true. Note: we recommend using JavaScript timestamps to specify date/time. If you are specifying dates as strings in your data, i.e. "2015-01-05", we strongly recommend setting dataDateFormat as well.
             @default false
         */
        parseDates?: boolean;

        /** Possible values are: "top", "bottom", "left", "right". If axis is vertical, default position is "left". If axis is horizontal, default position is "bottom".
             @default bottom
         */
        position?: "top" | "bottom" | "left" | "right";

        /** Specifies whether the graph should start on axis or not. In case you display columns, it is recommended to set this to false. If parseDates is set to true, startOnAxis will allways be false, unless equalSpacing is set to true.
             @default false
         */
        startOnAxis?: boolean;

        /** Position of a axis tick. Available settings: middle, start. Works only with non-date-based data.
             @default middle
         */
        tickPosition?: string;

        /** Works only when parseDates is set to true and equalSpacing is false. If you set it to true, at the position where bigger period changes, category axis will display date strings of bot small and big period, in two rows.
             @default false
         */
        twoLineMode?: boolean;

        /** You can specify relative width for your columns using this field and produce Mekko chart using this new feature. */
        widthField?: string;
    }


    /** Extension for AxisBase, gets automatically populated if none has been specified. Examplevar chart = AmCharts.makeChart("chartdiv",{ ... "categoryAxis": { "gridPosition": "start" } }); */
    class CategoryAxis extends AxisBase {

        /** Angle of label rotation, if the number of series exceeds autoRotateCount and parseDates is set to false. */
        autoRotateAngle: number;

        /** If the number of category axis items will exceed the autoRotateCount, the labels will be rotated by autoRotateAngle degree. Works only if parseDates is false. */
        autoRotateCount: number;

        /** Specifies if axis labels (only when it is horizontal) should be wrapped if they don't fit in the allocated space. If axis is vertical, you should set axis.ignoreAxisWidth to true in order this feature to work.
             @default false
         */
        autoWrap: boolean;

        /** specifies a method that returns the value that should be used as categoryValue for current item. If this property is set, the return value of the custom data function takes precedence over categoryField. When a chart calls this method, it passes category value, data item from chart's data provider and reference to categoryAxis: categoryFunction(category, dataItem, categoryAxis); This method can be used both when category axis parses dates and when it doesn't. If axis parses dates, your categoryFunction should return Date object. For example, if you have date strings in your data, you can use this method to convert these strings into Date objects. */
        categoryFunction: (category: string | Date, dataItem: any, categoryAxis: CategoryAxis) => string | Date;

        /** If this field is set and addClassNames is enabled, the category axis labels, ticks and grid will have this class name set. NOTE: this will not work if the axis is date-based. */
        classNameField: string;

        /** Date formats of different periods. Possible period values: fff - milliseconds, ss - seconds, mm - minutes, hh - hours, DD - days, MM - months, WW - weeks, YYYY - years. Check this page for date formatting strings.
             @default [{"period":"fff","format":"JJ:NN:SS"},{"period":"ss","format":"JJ:NN:SS"},{"period":"mm","format":"JJ:NN"},{"period":"hh","format":"JJ:NN"},{"period":"DD","format":"MMM DD"},{"period":"WW","format":"MMM DD"},{"period":"MM","format":"MMM"},{"period":"YYYY","format":"YYYY"}]
         */
        dateFormats: { period: string, format: string };

        /** In case your category axis values are Date objects and parseDates is set to true, the chart will parse dates and will place your data points at irregular intervals. However if you want dates to be parsed (displayed on the axis, baloons, etc), but data points to be placed at equal intervals (omiting dates with no data), set equalSpacing to true.
             @default false
         */
        equalSpacing: boolean;

        /** Field in data provider which specifies if the category value should always be shown. For example: categoryAxis.forceShowField = "forceShow"; And in data: {category:"one", forceShow:true, value:100} Note, this works only when parseDates is set to false. */
        forceShowField: string;

        /** Specifies if a grid line is placed on the center of a cell or on the beginning of a cell. Possible values are: "start" and "middle" This setting doesn't work if parseDates is set to true.
             @default middle
         */
        gridPosition: "start" | "middle";

        /** You can use it to set color of a axis label. Works only with non-date-based data. */
        labelColorField: string;

        /** You can use this function to format Category axis labels. If this function is set, then it is called with the following parameters passed: if dates are not parsed: labelFunction(valueText, serialDataItem, categoryAxis) if dates are parsed: labelFunction(valueText, date, categoryAxis) Your function should return string which will be displayed on the axis. */
        labelFunction: (valueText: string, serialDataItem: any, categoryAxis: CategoryAxis) => string;

        /** Specifies the shortest period of your data. This should be set only if parseDates is set to "true". Possible period values: fff - milliseconds, ss - seconds, mm - minutes, hh - hours, DD - days, MM - months, YYYY - years. It's also possible to supply a number for increments, i.e. "15mm" which will instruct the chart that your data is supplied in 15 minute increments.
             @default DD
         */
        minPeriod: string;

        /** In case your category axis values are Date objects, set this to true. In this case the chart will parse dates and will place your data points at irregular intervals. If you want dates to be parsed, but data points to be placed at equal intervals, set both parseDates and equalSpacing to true. Note: we recommend using JavaScript timestamps to specify date/time. If you are specifying dates as strings in your data, i.e. "2015-01-05", we strongly recommend setting dataDateFormat as well.
             @default false
         */
        parseDates: boolean;

        /** Possible values are: "top", "bottom", "left", "right". If axis is vertical, default position is "left". If axis is horizontal, default position is "bottom".
             @default bottom
         */
        position: "top" | "bottom" | "left" | "right";

        /** Specifies whether the graph should start on axis or not. In case you display columns, it is recommended to set this to false. If parseDates is set to true, startOnAxis will allways be false, unless equalSpacing is set to true.
             @default false
         */
        startOnAxis: boolean;

        /** Position of a axis tick. Available settings: middle, start. Works only with non-date-based data.
             @default middle
         */
        tickPosition: string;

        /** Works only when parseDates is set to true and equalSpacing is false. If you set it to true, at the position where bigger period changes, category axis will display date strings of bot small and big period, in two rows.
             @default false
         */
        twoLineMode: boolean;

        /** You can specify relative width for your columns using this field and produce Mekko chart using this new feature. */
        widthField: string;

        /** returns coordinate of a category. Works only if parseDates is false. If parseDates is true, use dateToCoordinate method. */
        categoryToCoordinate(category: string): number;

        /** Returns Date of the coordinate, in case parseDates is set to true and equalSpacing is set to false. */
        coordinateToDate(coordinate: number): Date;

        /** Returns coordinate of the date, in case parseDates is set to true. if parseDates is false, use categoryToCoordinate method. */
        dateToCoordinate(date: Date): number;

        /** Returns index of the category which is most close to specified coordinate. */
        xToIndex(x: number): number;
    }


    /** Creates a cursor for the chart which follows the mouse movements. In case of AmSerialChart charts it shows the balloons of hovered data points. Examplevar chart = AmCharts.makeChart("chartdiv",{ ... "chartCursor": { "oneBalloonOnly": true } }); */
    interface ChartCursorConfig {

        /** If you set adjustment to -1, the balloon will be shown near previous, if you set it to 1 - near next data point.
             @default 0
         */
        adjustment?: number;

        /** Duration of animation of a line, in seconds.
             @default 0.3
         */
        animationDuration?: number;

        /** Specifies if cursor should arrange balloons so they won't overlap. If chart is rotated, it might be good idea to turn this off.
             @default true
         */
        avoidBalloonOverlapping?: boolean;

        /** defines if the balloon should be shown above the datapoint or sideways
             @default horizontal
         */
        balloonPointerOrientation?: string;

        /** Specifies if bullet for each graph will follow the cursor.
             @default false
         */
        bulletsEnabled?: boolean;

        /** Size of bullets, following the cursor.
             @default 8
         */
        bulletSize?: number;

        /** Opacity of the category balloon.
             @default 1
         */
        categoryBalloonAlpha?: number;

        /** Color of the category balloon. cursorColor is used if not set. */
        categoryBalloonColor?: string;

        /** Category balloon date format (used only if category axis parses dates). Check this page for instructions on how to format dates.
             @default MMM DD, YYYY
         */
        categoryBalloonDateFormat?: string;

        /** Specifies whether category balloon is enabled.
             @default true
         */
        categoryBalloonEnabled?: boolean;

        /** Allows formatting any category balloon text you want. categoryBalloonFunction should return a string which will be displayed in a balloon. When categoryBalloonFunction is called, category value (or date) is passed as an argument. */
        categoryBalloonFunction?: Function;

        /** You can have [[category]] - [[toCategory]] tags in there and show category ranges this way.
             @default [[category]]
         */
        categoryBalloonText?: string;

        /** Text color.
             @default #FFFFFF
         */
        color?: string;

        /** Opacity of the cursor line.
             @default 1
         */
        cursorAlpha?: number;

        /** Color of the cursor line.
             @default #CC0000
         */
        cursorColor?: string;

        /** Specifies where the cursor line should be placed - on the beginning of the period (day, hour, etc) or in the middle (only when parseDates property of categoryAxis is set to true). If you want the cursor to follow mouse and not to glue to the nearest data point, set "mouse" here. Possible values are: start, middle, mouse.
             @default middle
         */
        cursorPosition?: "start" | "middle" | "mouse";

        /** Specifies whether cursor is enabled.
             @default true
         */
        enabled?: boolean;

        /** If set to true, instead of a cursor line user will see a fill which width will always be equal to the width of one data item. We'd recommend setting cursorAlpha to 0.1 or some other small number if using this feature.
             @default false
         */
        fullWidth?: boolean;

        /** If you make graph's bullets invisible by setting their opacity to 0 and will set graphBulletAlpha to 1, the bullets will only appear at the cursor's position. */
        graphBulletAlpha?: number;

        /** Size of a graph's bullet (if available) at the cursor position. If you don't want the bullet to change it's size, set this property to 1.
             @default 1.7
         */
        graphBulletSize?: number;

        /** This makes cursor and balloons to remain after user touches the chart.
             @default true
         */
        leaveAfterTouch?: boolean;

        /** Specifies if cursor should be left at it's last position. Useful for touch devices - user might want to see the balloons after he moves finger away.
             @default false
         */
        leaveCursor?: boolean;

        /** If set to an id or a reference to AmGraph object, CategoryAxis cursor line will be limited to this graph instead of being drawn through full height of plot area. Note, this works with serial chart only. Also, cursorPosition of ChartCursor must be set to middle. */
        limitToGraph?: AmGraphConfig;

        /** You can add listeners of events using this property. Example: listeners = [{"event":"changed", "method":handleEvent}]; */
        listeners?: { event: string, method: (event: any) => void };

        /** If this is set to true, only one balloon at a time will be displayed. Note, this is quite CPU consuming.
             @default false
         */
        oneBalloonOnly?: boolean;

        /** If this is set to true, the user will be able to pan the chart instead of zooming.
             @default false
         */
        pan?: boolean;

        /** Opacity of the selection.
             @default 0.2
         */
        selectionAlpha?: number;

        /** Specifies if cursor should only mark selected area but not zoom-in after user releases mouse button.
             @default false
         */
        selectWithoutZooming?: boolean;

        /** If true, the graph will display balloon on next available data point if currently hovered item doesn't have value for this graph.
             @default false
         */
        showNextAvailable?: boolean;

        /** In case you set it to some number, the chart will set focus on chart cursor (works only with serial chart) when user clicks tab key. When a focus is set user can move cursor using cursor keys. Note, not all browsers and readers support this. */
        tabIndex?: number;

        /** Specifies whether value balloons are enabled. In case they are not, the balloons might be displayed anyway, when the user rolls-over the column or bullet.
             @default true
         */
        valueBalloonsEnabled?: boolean;

        /** Opacity of value line. Will use cursorAlpha value if not set. */
        valueLineAlpha?: number;

        /** Specifies if value balloon next to value axes labels should be displayed.
             @default false
         */
        valueLineBalloonEnabled?: boolean;

        /** Specifies if cursor of Serial chart should display horizontal (or vertical if chart is rotated) line. This line might help users to compare distant values of a chart. You can also enable value balloons on this line by setting valueLineBalloonEnabled to true.
             @default false
         */
        valueLineEnabled?: boolean;

        /** Specifies if the user can zoom-in value axess of a serial chart.
             @default false
         */
        valueZoomable?: boolean;

        /** Specifies if the user can zoom-in the chart. If pan is set to true, zoomable is switched to false automatically.
             @default true
         */
        zoomable?: boolean;

        /** Read-only. Indicates if currently user is selecting some chart area to zoom-in. */
        zooming?: boolean;
    }


    /** Creates a cursor for the chart which follows the mouse movements. In case of AmSerialChart charts it shows the balloons of hovered data points. Examplevar chart = AmCharts.makeChart("chartdiv",{ ... "chartCursor": { "oneBalloonOnly": true } }); */
    class ChartCursor {

        /** If you set adjustment to -1, the balloon will be shown near previous, if you set it to 1 - near next data point.
             @default 0
         */
        adjustment: number;

        /** Duration of animation of a line, in seconds.
             @default 0.3
         */
        animationDuration: number;

        /** Specifies if cursor should arrange balloons so they won't overlap. If chart is rotated, it might be good idea to turn this off.
             @default true
         */
        avoidBalloonOverlapping: boolean;

        /** defines if the balloon should be shown above the datapoint or sideways
             @default horizontal
         */
        balloonPointerOrientation: string;

        /** Specifies if bullet for each graph will follow the cursor.
             @default false
         */
        bulletsEnabled: boolean;

        /** Size of bullets, following the cursor.
             @default 8
         */
        bulletSize: number;

        /** Opacity of the category balloon.
             @default 1
         */
        categoryBalloonAlpha: number;

        /** Color of the category balloon. cursorColor is used if not set. */
        categoryBalloonColor: string;

        /** Category balloon date format (used only if category axis parses dates). Check this page for instructions on how to format dates.
             @default MMM DD, YYYY
         */
        categoryBalloonDateFormat: string;

        /** Specifies whether category balloon is enabled.
             @default true
         */
        categoryBalloonEnabled: boolean;

        /** Allows formatting any category balloon text you want. categoryBalloonFunction should return a string which will be displayed in a balloon. When categoryBalloonFunction is called, category value (or date) is passed as an argument. */
        categoryBalloonFunction: Function;

        /** You can have [[category]] - [[toCategory]] tags in there and show category ranges this way.
             @default [[category]]
         */
        categoryBalloonText: string;

        /** Text color.
             @default #FFFFFF
         */
        color: string;

        /** Opacity of the cursor line.
             @default 1
         */
        cursorAlpha: number;

        /** Color of the cursor line.
             @default #CC0000
         */
        cursorColor: string;

        /** Specifies where the cursor line should be placed - on the beginning of the period (day, hour, etc) or in the middle (only when parseDates property of categoryAxis is set to true). If you want the cursor to follow mouse and not to glue to the nearest data point, set "mouse" here. Possible values are: start, middle, mouse.
             @default middle
         */
        cursorPosition: "start" | "middle" | "mouse";

        /** Specifies whether cursor is enabled.
             @default true
         */
        enabled: boolean;

        /** If set to true, instead of a cursor line user will see a fill which width will always be equal to the width of one data item. We'd recommend setting cursorAlpha to 0.1 or some other small number if using this feature.
             @default false
         */
        fullWidth: boolean;

        /** If you make graph's bullets invisible by setting their opacity to 0 and will set graphBulletAlpha to 1, the bullets will only appear at the cursor's position. */
        graphBulletAlpha: number;

        /** Size of a graph's bullet (if available) at the cursor position. If you don't want the bullet to change it's size, set this property to 1.
             @default 1.7
         */
        graphBulletSize: number;

        /** This makes cursor and balloons to remain after user touches the chart.
             @default true
         */
        leaveAfterTouch: boolean;

        /** Specifies if cursor should be left at it's last position. Useful for touch devices - user might want to see the balloons after he moves finger away.
             @default false
         */
        leaveCursor: boolean;

        /** If set to an id or a reference to AmGraph object, CategoryAxis cursor line will be limited to this graph instead of being drawn through full height of plot area. Note, this works with serial chart only. Also, cursorPosition of ChartCursor must be set to middle. */
        limitToGraph: AmGraph;

        /** You can add listeners of events using this property. Example: listeners = [{"event":"changed", "method":handleEvent}]; */
        listeners: { event: string, method: (event: any) => void };

        /** If this is set to true, only one balloon at a time will be displayed. Note, this is quite CPU consuming.
             @default false
         */
        oneBalloonOnly: boolean;

        /** If this is set to true, the user will be able to pan the chart instead of zooming.
             @default false
         */
        pan: boolean;

        /** Opacity of the selection.
             @default 0.2
         */
        selectionAlpha: number;

        /** Specifies if cursor should only mark selected area but not zoom-in after user releases mouse button.
             @default false
         */
        selectWithoutZooming: boolean;

        /** If true, the graph will display balloon on next available data point if currently hovered item doesn't have value for this graph.
             @default false
         */
        showNextAvailable: boolean;

        /** In case you set it to some number, the chart will set focus on chart cursor (works only with serial chart) when user clicks tab key. When a focus is set user can move cursor using cursor keys. Note, not all browsers and readers support this. */
        tabIndex: number;

        /** Specifies whether value balloons are enabled. In case they are not, the balloons might be displayed anyway, when the user rolls-over the column or bullet.
             @default true
         */
        valueBalloonsEnabled: boolean;

        /** Opacity of value line. Will use cursorAlpha value if not set. */
        valueLineAlpha: number;

        /** Specifies if value balloon next to value axes labels should be displayed.
             @default false
         */
        valueLineBalloonEnabled: boolean;

        /** Specifies if cursor of Serial chart should display horizontal (or vertical if chart is rotated) line. This line might help users to compare distant values of a chart. You can also enable value balloons on this line by setting valueLineBalloonEnabled to true.
             @default false
         */
        valueLineEnabled: boolean;

        /** Specifies if the user can zoom-in value axess of a serial chart.
             @default false
         */
        valueZoomable: boolean;

        /** Specifies if the user can zoom-in the chart. If pan is set to true, zoomable is switched to false automatically.
             @default true
         */
        zoomable: boolean;

        /** Read-only. Indicates if currently user is selecting some chart area to zoom-in. */
        zooming: boolean;

        /** Dispatched when cursor position is changed. "index" is a series index over which chart cursors currently is. "zooming" specifies if user is currently zooming (is selecting) the chart. mostCloseGraph property is set only when oneBalloonOnly is set to true. */
        addListener(type: "changed", handler: (event: { type: any, index: number, zooming: boolean, mostCloseGraph: AmGraph, chart: AmChart, target: ChartCursor }) => void): void;

        /** Dispatched when user draws a trend line with mouse. */
        addListener(type: "draw", handler: (event: { type: any, chart: AmChart, initialX: number, initialY: number, finalX: number, finalY: number, target: ChartCursor }) => void): void;

        /** Dispatched when mouse is moved over the chart. X and Y are coordinates of the mouse, relative to the plot area of the chart. */
        addListener(type: "moved", handler: (event: { type: any, x: number, y: number, zooming: boolean, chart: AmChart, target: ChartCursor }) => void): void;

        /** Dispatched when cursor is hidden. */
        addListener(type: "onHideCursor", handler: (event: { type: any, chart: AmChart, target: ChartCursor }) => void): void;

        /** Dispatched when cursor is shown. */
        addListener(type: "onShowCursor", handler: (event: { type: any, chart: AmChart, target: ChartCursor }) => void): void;

        /** Dispatched when user pans the chart (also when user pinch-zooms the chart). deltaX, deltaY, delta2X, delta2Y are relative values. delta2X and delta2Y has values when pinching with two fingers. */
        addListener(type: "panning", handler: (event: { type: any, x: number, y: number, chart: AmChart, target: ChartCursor, index: number, deltaX: number, deltaY: number, delta2X: number, delta2Y: number }) => void): void;

        /** Dispatched if selectWithoutZooming is set to true and when user selects some period. start and end are indices or time stamp (when categoryAxis.parseDates is true) of selection start/end. */
        addListener(type: "selected", handler: (event: { type: any, start: number, end: number, chart: AmChart, target: ChartCursor }) => void): void;

        /** Dispatched when user zooms to some period. start and end are indices or time stamp (when categoryAxis.parseDates is true) of selection start/end. */
        addListener(type: "zoomed", handler: (event: { type: any, start: number, end: number, chart: AmChart, target: ChartCursor }) => void): void;

        /** Dispatched when user starts selecting chart area to zoom-in. x and y are relative values (0-1). Index is current category index (of Serial chart) */
        addListener(type: "zoomStarted", handler: (event: { type: any, x: number, y: number, index: number, chart: AmChart, target: ChartCursor }) => void): void;

        /** Adds event listener to the object. */
        addListener(type: string, handler: (event: any) => void): void;

        /** This method can be used when selectWithoutZooming is set to true and you need to clear the selection made by user. */
        clearSelection(): void;

        /** Hides cursor. */
        hideCursor(): void;

        /** Removes event listener from the object. */
        removeListener(obj: any, type: string, handler: (event: any) => void): void;

        /** You can force cursor to appear at specified cateogry or date. */
        showCursorAt(category: string): void;

        /** Allows to sync one serial chart’s cursor with another chart’s cursor. */
        syncWithCursor(cursor: ChartCursor): void;
    }


    /** Create a scrollbar for AmSerialChart and AmXYChart charts. Examplevar chart = AmCharts.makeChart("chartdiv",{ ... "pathToImages": "http://cdn.amcharts.com/lib/3/images/", // required for grips "chartScrollbar": { "updateOnReleaseOnly": true } }); */
    interface ChartScrollbarConfig {

        /** Text which screen readers will read if user rolls-over or sets focus using tab key (this is possible only if tabIndex property of AmGraph is set to some number) on the grips or draggable part of a scrollbar. Text is added as aria-label tag. Note - not all screen readers and browsers support this. Note, you should set tabIndex to some number in order it would be possible to zoom chart using cursor keys.
             @default Zoom chart using cursor arrows
         */
        accessibleLabel?: string;

        /** Specifies whether number of gridCount is specified automatically, according to the axis size.
             @default false
         */
        autoGridCount?: boolean;

        /** Background opacity.
             @default 1
         */
        backgroundAlpha?: number;

        /** Background color of the scrollbar.
             @default #D4D4D4
         */
        backgroundColor?: string;

        /** Read-only. Category axis of the scrollbar. */
        categoryAxis?: CategoryAxisConfig;

        /** Text color.
             @default #FFFFFF
         */
        color?: string;

        /** Mouse cursor displayed when clicked on selected part of a scrollbar.
             @default cursor: move; cursor: grab; cursor: -moz-grabbing; cursor: -webkit-grabbing;
         */
        dragCursorDown?: string;

        /** Mouse cursor displayed when hovering over selected part of a scrollbar.
             @default cursor: move; cursor: grab; cursor: -moz-grab; cursor: -webkit-grab;
         */
        dragCursorHover?: string;

        /** File name of scrollbar drag (resize grip) icon. You can find a set of icons in amcharts/images folder - you can choose from these: dragIconRectBig, dragIconRectBigBlack, dragIconRectSmall, dragIconRectSmallBlack, dragIconRoundBig, dragIconRoundBigBlack, dragIconRoundSmall, dragIconRoundSmallBlack. You can also use your own custom icons. Don't forget to change dragIconWidth and dragIconHeight if you change icons.
             @default dragIconRoundBig
         */
        dragIcon?: string;

        /** Height of resize grip image. Note, you should also update the image in amcharts/images folder if you don't want it to be distorted because of resizing.
             @default 35
         */
        dragIconHeight?: number;

        /** Width of resize grip image. Note, you should also update the image in amcharts/images folder if you don't want it to be distorted because of resizing.
             @default 35
         */
        dragIconWidth?: number;

        /** Specifies if scrollbar is enabled. You can hide/show scrollbar using this property without actually removing it.
             @default true
         */
        enabled?: boolean;

        /** Specifies which graph will be displayed in the scrollbar. Only Serial chart's category scrollbar can display a graph. */
        graph?: AmGraphConfig;

        /** Graph fill opacity. Value range is 0 - 1.
             @default 1
         */
        graphFillAlpha?: number;

        /** Graph fill color.
             @default #BBBBBB
         */
        graphFillColor?: string;

        /** Graph line opacity. Value range is 0 - 1.
             @default 0
         */
        graphLineAlpha?: number;

        /** Graph line color.
             @default #BBBBBB
         */
        graphLineColor?: string;

        /** by default the graph type is the same as the original graph's type, however in case of candlestick or ohlc you might want to show line graph in the scrollbar. Possible values are: line, column, step, smoothedLine, candlestick, ohlc */
        graphType?: "line" | "column" | "step" | "smoothedLine" | "candlestick" | "ohlc";

        /** Grid opacity. Value range is 0 - 1.
             @default 0.7
         */
        gridAlpha?: number;

        /** Grid color.
             @default #FFFFFF
         */
        gridColor?: string;

        /** The number of grid lines.
             @default 0
         */
        gridCount?: number;

        /** Specifies whether resize grips are hidden when mouse is away from the scrollbar.
             @default false
         */
        hideResizeGrips?: boolean;

        /** Mouse cursor type shown when user hovers horizontal cursor's resize grips.
             @default ew-resize
         */
        hResizeCursor?: string;

        /** CSS value of cursor displayed when mouse is pressed down over horizontal cursor's resize grip. */
        hResizeCursorDown?: string;

        /** CSS value of cursor displayed when hovering over horizontal cursor's resize grip. */
        hResizeCursorHover?: string;

        /** If you have column type graph in your scrollbar, and this graph has custom colors for one or more columns in data provider, those columns will be colored with this custom color. However you might not want this in some cases. Set this property to true to use scrollbar's graph colors.
             @default false
         */
        ignoreCustomColors?: boolean;

        /** Maximum value of ValueAxis of ChartScrollbar. Calculated automatically, if not set. */
        maximum?: number;

        /** Minimum value of ValueAxis of ChartScrollbar. Calculated automatically, if not set. */
        minimum?: number;

        /** Distance from plot area to scrollbar, in pixels.
             @default 0
         */
        offset?: number;

        /** By default, scrollbar is in the opsite side of plot area from the axis. If you set this property to false, scrollbar will be placed next to category/value axis. However it won't adjust it's position regarding axis labels, so you might need to use offset property to move scrollbar away from labels.
             @default true
         */
        oppositeAxis?: boolean;

        /** If set to false it will prevent the chart scroll bar to change selection scope. The grip images will not be shown as well. The user would still be able to pan / move selection.
             @default true
         */
        resizeEnabled?: boolean;

        /** Height (width, if chart is rotated) of a scrollbar.
             @default 20
         */
        scrollbarHeight?: number;

        /** Duration of scrolling, when the user clicks on scrollbar's background, in seconds. Note, updateOnReleaseOnly should be set to false in order animation to happen.
             @default 1
         */
        scrollDuration?: number;

        /** Selected backround opacity.
             @default 1
         */
        selectedBackgroundAlpha?: number;

        /** Selected background color.
             @default #EFEFEF
         */
        selectedBackgroundColor?: string;

        /** Selected graph's fill opacity. Value range is 0 - 1.
             @default 1
         */
        selectedGraphFillAlpha?: number;

        /** Selected graph's fill color.
             @default #888888
         */
        selectedGraphFillColor?: string;

        /** Selected graph's line opacity. Value range is 0 - 1.
             @default 0
         */
        selectedGraphLineAlpha?: number;

        /** Selected graph's line color.
             @default #888888
         */
        selectedGraphLineColor?: string;

        /** In case you set it to some number, the chart will set focus on grips and draggable area of the scrollbar when user clicks tab key. When a focus is set, screen readers like NVDA Screen reader will read label which is set using accessibleLabel property of ChartScrollbar. When a focus is set user can zoom-in, zoom-out or pan the scrollbar using cursor keys. Note, not all browsers and readers support this. */
        tabIndex?: number;

        /** Specifies if the chart should be updated while dragging/resizing the scrollbar or only at the moment when user releases mouse button.
             @default false
         */
        updateOnReleaseOnly?: boolean;

        /** Mouse cursor type shown when user hovers vertical cursor's resize grips.
             @default ns-resize
         */
        vResizeCursor?: string;

        /** CSS value of cursor displayed when mouse is pressed down over vertical cursor's resize grip. */
        vResizeCursorDown?: string;

        /** CSS value of cursor displayed when hovering over vertical cursor's resize grip. */
        vResizeCursorHover?: string;
    }


    /** Create a scrollbar for AmSerialChart and AmXYChart charts. Examplevar chart = AmCharts.makeChart("chartdiv",{ ... "pathToImages": "http://cdn.amcharts.com/lib/3/images/", // required for grips "chartScrollbar": { "updateOnReleaseOnly": true } }); */
    class ChartScrollbar {

        /** Text which screen readers will read if user rolls-over or sets focus using tab key (this is possible only if tabIndex property of AmGraph is set to some number) on the grips or draggable part of a scrollbar. Text is added as aria-label tag. Note - not all screen readers and browsers support this. Note, you should set tabIndex to some number in order it would be possible to zoom chart using cursor keys.
             @default Zoom chart using cursor arrows
         */
        accessibleLabel: string;

        /** Specifies whether number of gridCount is specified automatically, according to the axis size.
             @default false
         */
        autoGridCount: boolean;

        /** Background opacity.
             @default 1
         */
        backgroundAlpha: number;

        /** Background color of the scrollbar.
             @default #D4D4D4
         */
        backgroundColor: string;

        /** Read-only. Category axis of the scrollbar. */
        categoryAxis: CategoryAxis;

        /** Text color.
             @default #FFFFFF
         */
        color: string;

        /** Mouse cursor displayed when clicked on selected part of a scrollbar.
             @default cursor: move; cursor: grab; cursor: -moz-grabbing; cursor: -webkit-grabbing;
         */
        dragCursorDown: string;

        /** Mouse cursor displayed when hovering over selected part of a scrollbar.
             @default cursor: move; cursor: grab; cursor: -moz-grab; cursor: -webkit-grab;
         */
        dragCursorHover: string;

        /** File name of scrollbar drag (resize grip) icon. You can find a set of icons in amcharts/images folder - you can choose from these: dragIconRectBig, dragIconRectBigBlack, dragIconRectSmall, dragIconRectSmallBlack, dragIconRoundBig, dragIconRoundBigBlack, dragIconRoundSmall, dragIconRoundSmallBlack. You can also use your own custom icons. Don't forget to change dragIconWidth and dragIconHeight if you change icons.
             @default dragIconRoundBig
         */
        dragIcon: string;

        /** Height of resize grip image. Note, you should also update the image in amcharts/images folder if you don't want it to be distorted because of resizing.
             @default 35
         */
        dragIconHeight: number;

        /** Width of resize grip image. Note, you should also update the image in amcharts/images folder if you don't want it to be distorted because of resizing.
             @default 35
         */
        dragIconWidth: number;

        /** Specifies if scrollbar is enabled. You can hide/show scrollbar using this property without actually removing it.
             @default true
         */
        enabled: boolean;

        /** Specifies which graph will be displayed in the scrollbar. Only Serial chart's category scrollbar can display a graph. */
        graph: AmGraph;

        /** Graph fill opacity. Value range is 0 - 1.
             @default 1
         */
        graphFillAlpha: number;

        /** Graph fill color.
             @default #BBBBBB
         */
        graphFillColor: string;

        /** Graph line opacity. Value range is 0 - 1.
             @default 0
         */
        graphLineAlpha: number;

        /** Graph line color.
             @default #BBBBBB
         */
        graphLineColor: string;

        /** by default the graph type is the same as the original graph's type, however in case of candlestick or ohlc you might want to show line graph in the scrollbar. Possible values are: line, column, step, smoothedLine, candlestick, ohlc */
        graphType: "line" | "column" | "step" | "smoothedLine" | "candlestick" | "ohlc";

        /** Grid opacity. Value range is 0 - 1.
             @default 0.7
         */
        gridAlpha: number;

        /** Grid color.
             @default #FFFFFF
         */
        gridColor: string;

        /** The number of grid lines.
             @default 0
         */
        gridCount: number;

        /** Specifies whether resize grips are hidden when mouse is away from the scrollbar.
             @default false
         */
        hideResizeGrips: boolean;

        /** Mouse cursor type shown when user hovers horizontal cursor's resize grips.
             @default ew-resize
         */
        hResizeCursor: string;

        /** CSS value of cursor displayed when mouse is pressed down over horizontal cursor's resize grip. */
        hResizeCursorDown: string;

        /** CSS value of cursor displayed when hovering over horizontal cursor's resize grip. */
        hResizeCursorHover: string;

        /** If you have column type graph in your scrollbar, and this graph has custom colors for one or more columns in data provider, those columns will be colored with this custom color. However you might not want this in some cases. Set this property to true to use scrollbar's graph colors.
             @default false
         */
        ignoreCustomColors: boolean;

        /** Maximum value of ValueAxis of ChartScrollbar. Calculated automatically, if not set. */
        maximum: number;

        /** Minimum value of ValueAxis of ChartScrollbar. Calculated automatically, if not set. */
        minimum: number;

        /** Distance from plot area to scrollbar, in pixels.
             @default 0
         */
        offset: number;

        /** By default, scrollbar is in the opsite side of plot area from the axis. If you set this property to false, scrollbar will be placed next to category/value axis. However it won't adjust it's position regarding axis labels, so you might need to use offset property to move scrollbar away from labels.
             @default true
         */
        oppositeAxis: boolean;

        /** If set to false it will prevent the chart scroll bar to change selection scope. The grip images will not be shown as well. The user would still be able to pan / move selection.
             @default true
         */
        resizeEnabled: boolean;

        /** Height (width, if chart is rotated) of a scrollbar.
             @default 20
         */
        scrollbarHeight: number;

        /** Duration of scrolling, when the user clicks on scrollbar's background, in seconds. Note, updateOnReleaseOnly should be set to false in order animation to happen.
             @default 1
         */
        scrollDuration: number;

        /** Selected backround opacity.
             @default 1
         */
        selectedBackgroundAlpha: number;

        /** Selected background color.
             @default #EFEFEF
         */
        selectedBackgroundColor: string;

        /** Selected graph's fill opacity. Value range is 0 - 1.
             @default 1
         */
        selectedGraphFillAlpha: number;

        /** Selected graph's fill color.
             @default #888888
         */
        selectedGraphFillColor: string;

        /** Selected graph's line opacity. Value range is 0 - 1.
             @default 0
         */
        selectedGraphLineAlpha: number;

        /** Selected graph's line color.
             @default #888888
         */
        selectedGraphLineColor: string;

        /** In case you set it to some number, the chart will set focus on grips and draggable area of the scrollbar when user clicks tab key. When a focus is set, screen readers like NVDA Screen reader will read label which is set using accessibleLabel property of ChartScrollbar. When a focus is set user can zoom-in, zoom-out or pan the scrollbar using cursor keys. Note, not all browsers and readers support this. */
        tabIndex: number;

        /** Specifies if the chart should be updated while dragging/resizing the scrollbar or only at the moment when user releases mouse button.
             @default false
         */
        updateOnReleaseOnly: boolean;

        /** Mouse cursor type shown when user hovers vertical cursor's resize grips.
             @default ns-resize
         */
        vResizeCursor: string;

        /** CSS value of cursor displayed when mouse is pressed down over vertical cursor's resize grip. */
        vResizeCursorDown: string;

        /** CSS value of cursor displayed when hovering over vertical cursor's resize grip. */
        vResizeCursorHover: string;
    }


    /** Creates an arrow for AmAngularGauge charts, multiple can be assigned. Examplevar chart = AmCharts.makeChart("chartdiv",{ ... "arrows": [ { "value": 10 } ] }); */
    interface GaugeArrowConfig {

        /** Opacity of an arrow.
             @default 1
         */
        alpha?: number;

        /** Axis of the arrow. You can use reference to the axis or id of the axis. If you don't set any axis, the first axis of a chart will be used.
             @default GaugeAxis
         */
        axis?: GaugeAxisConfig;

        /** Opacity of arrow border.
             @default 1
         */
        borderAlpha?: number;

        /** In case you need the arrow to rotate only clock-wise, set this property to true.
             @default false
         */
        clockWiseOnly?: boolean;

        /** Color of an arrow.
             @default #000000
         */
        color?: string;

        /** Unique id of an arrow. */
        id?: string;

        /** Inner radius of an arrow.
             @default 0
         */
        innerRadius?: number | string;

        /** Opacity of a nail, holding the arrow.
             @default 1
         */
        nailAlpha?: number;

        /** Opacity of nail border.
             @default 0
         */
        nailBorderAlpha?: number;

        /** Thickness of nail border.
             @default 1
         */
        nailBorderThickness?: number;

        /** Radius of a nail, holding the arrow.
             @default 8
         */
        nailRadius?: number;

        /** Radius of an arrow.
             @default 90%
         */
        radius?: number | string;

        /** Width of arrow root.
             @default 8
         */
        startWidth?: number;

        /** Value to which the arrow should point at. */
        value?: number;
    }


    /** Creates an arrow for AmAngularGauge charts, multiple can be assigned. Examplevar chart = AmCharts.makeChart("chartdiv",{ ... "arrows": [ { "value": 10 } ] }); */
    class GaugeArrow {

        /** Opacity of an arrow.
             @default 1
         */
        alpha: number;

        /** Axis of the arrow. You can use reference to the axis or id of the axis. If you don't set any axis, the first axis of a chart will be used.
             @default GaugeAxis
         */
        axis: GaugeAxis;

        /** Opacity of arrow border.
             @default 1
         */
        borderAlpha: number;

        /** In case you need the arrow to rotate only clock-wise, set this property to true.
             @default false
         */
        clockWiseOnly: boolean;

        /** Color of an arrow.
             @default #000000
         */
        color: string;

        /** Unique id of an arrow. */
        id: string;

        /** Inner radius of an arrow.
             @default 0
         */
        innerRadius: number | string;

        /** Opacity of a nail, holding the arrow.
             @default 1
         */
        nailAlpha: number;

        /** Opacity of nail border.
             @default 0
         */
        nailBorderAlpha: number;

        /** Thickness of nail border.
             @default 1
         */
        nailBorderThickness: number;

        /** Radius of a nail, holding the arrow.
             @default 8
         */
        nailRadius: number;

        /** Radius of an arrow.
             @default 90%
         */
        radius: number | string;

        /** Width of arrow root.
             @default 8
         */
        startWidth: number;

        /** Value to which the arrow should point at. */
        value: number;

        /** Sets value for the arrow. Arrow will animate to this value if you do it after chart is written to it's container. */
        setValue(value: number): void;
    }


    /** Creates an axis for AmAngularGauge charts, multiple can be assigned. Examplevar chart = AmCharts.makeChart("chartdiv",{ ... "axes": [ { "startValue": 0, "endValue": 100, "valueInterval": 10, "bands": [ { "startValue": 0, "endValue": 100 } ] } ] }); */
    interface GaugeAxisConfig {

        /** Axis opacity.
             @default 1
         */
        axisAlpha?: number;

        /** Axis color.
             @default #000000
         */
        axisColor?: string;

        /** Thickness of the axis outline.
             @default 1
         */
        axisThickness?: number;

        /** Opacity of band fills.
             @default 1
         */
        bandAlpha?: number;

        /** Example: [-0.2, 0, -0.2]. Will make bands to be filled with color gradients. Negative value means the color will be darker than the original, and positive number means the color will be lighter.
             @default []
         */
        bandGradientRatio?: number[];

        /** Opacity of band outlines.
             @default 0
         */
        bandOutlineAlpha?: number;

        /** Color of band outlines.
             @default #000000
         */
        bandOutlineColor?: string;

        /** Thickness of band outlines.
             @default 0
         */
        bandOutlineThickness?: number;

        /** Array of bands - GaugeBand objects. Bands are used to draw color fills between specified values. */
        bands?: GaugeBandConfig[];

        /** Text displayed below the axis center. */
        bottomText?: string;

        /** Specifies if text should be bold.
             @default true
         */
        bottomTextBold?: boolean;

        /** Bottom text color. */
        bottomTextColor?: string;

        /** Font size of bottom text. */
        bottomTextFontSize?: number;

        /** Y offset of bottom text.
             @default 0
         */
        bottomTextYOffset?: number;

        /** X position of the axis, relative to the center of the gauge.
             @default 0%
         */
        centerX?: number | string;

        /** Y position of the axis, relative to the center of the gauge.
             @default 0%
         */
        centerY?: number | string;

        /** Specifies labels color of the axis. */
        color?: string;

        /** Axis end angle. Valid values are from - 180 to 180.
             @default 120
         */
        endAngle?: number;

        /** Axis end (max) value */
        endValue?: number;

        /** Font size for axis labels. */
        fontSize?: number;

        /** Number of grid lines. Note, GaugeAxis doesn't adjust gridCount, so you should check your values and choose a proper gridCount which would result grids at round numbers.
             @default 5
         */
        gridCount?: number;

        /** Specifies if grid should be drawn inside or outside the axis.
             @default true
         */
        gridInside?: boolean;

        /** Unique id of an axis. */
        id?: number | string;

        /** Specifies if labels should be placed inside or outside the axis.
             @default true
         */
        inside?: boolean;

        /** Frequency of labels.
             @default 1
         */
        labelFrequency?: number;

        /** You can use this function to format axis labels. This function is called and value is passed as a attribute: labelFunction(value); */
        labelFunction?: (value: number) => string;

        /** Distance from axis to the labels.
             @default 15
         */
        labelOffset?: number;

        /** Specifies if labels on the axis should be shown.
             @default true
         */
        labelsEnabled?: boolean;

        /** You can add listeners of events using this property. Example: listeners = [{"event":"clickBand", "method":handleClick}]; */
        listeners?: { event: string, method: (event: any) => void };

        /** Interval, at which minor ticks should be placed. */
        minorTickInterval?: number;

        /** Length of a minor tick.
             @default 5
         */
        minorTickLength?: number;

        /** Axis radius.
             @default 95%
         */
        radius?: number | string;

        /** Specifies if the first label should be shown.
             @default true
         */
        showFirstLabel?: boolean;

        /** Specifies if the last label should be shown.
             @default true
         */
        showLastLabel?: boolean;

        /** Axis start angle. Valid values are from - 180 to 180.
             @default -120
         */
        startAngle?: number;

        /** Axis start (min) value.
             @default 0
         */
        startValue?: number;

        /** Opacity of axis ticks.
             @default 1
         */
        tickAlpha?: number;

        /** Color of axis ticks.
             @default #555555
         */
        tickColor?: string;

        /** Length of a major tick.
             @default 10
         */
        tickLength?: number;

        /** Tick thickness.
             @default 1
         */
        tickThickness?: number;

        /** Text displayed above the axis center. */
        topText?: string;

        /** Specifies if text should be bold.
             @default true
         */
        topTextBold?: boolean;

        /** Color of top text. */
        topTextColor?: string;

        /** Font size of top text. */
        topTextFontSize?: number;

        /** Y offset of top text.
             @default 0
         */
        topTextYOffset?: number;

        /** A string which can be placed next to axis labels. */
        unit?: string;

        /** Position of the unit.
             @default right
         */
        unitPosition?: "left" | "right";

        /** Specifies if small and big numbers should use prefixes to make them more readable.
             @default false
         */
        usePrefixes?: boolean;

        /** Interval, at which ticks with values should be placed. */
        valueInterval?: number;
    }


    /** Creates an axis for AmAngularGauge charts, multiple can be assigned. Examplevar chart = AmCharts.makeChart("chartdiv",{ ... "axes": [ { "startValue": 0, "endValue": 100, "valueInterval": 10, "bands": [ { "startValue": 0, "endValue": 100 } ] } ] }); */
    class GaugeAxis {

        /** Axis opacity.
             @default 1
         */
        axisAlpha: number;

        /** Axis color.
             @default #000000
         */
        axisColor: string;

        /** Thickness of the axis outline.
             @default 1
         */
        axisThickness: number;

        /** Opacity of band fills.
             @default 1
         */
        bandAlpha: number;

        /** Example: [-0.2, 0, -0.2]. Will make bands to be filled with color gradients. Negative value means the color will be darker than the original, and positive number means the color will be lighter.
             @default []
         */
        bandGradientRatio: number[];

        /** Opacity of band outlines.
             @default 0
         */
        bandOutlineAlpha: number;

        /** Color of band outlines.
             @default #000000
         */
        bandOutlineColor: string;

        /** Thickness of band outlines.
             @default 0
         */
        bandOutlineThickness: number;

        /** Array of bands - GaugeBand objects. Bands are used to draw color fills between specified values. */
        bands: GaugeBand[];

        /** Text displayed below the axis center. */
        bottomText: string;

        /** Specifies if text should be bold.
             @default true
         */
        bottomTextBold: boolean;

        /** Bottom text color. */
        bottomTextColor: string;

        /** Font size of bottom text. */
        bottomTextFontSize: number;

        /** Y offset of bottom text.
             @default 0
         */
        bottomTextYOffset: number;

        /** X position of the axis, relative to the center of the gauge.
             @default 0%
         */
        centerX: number | string;

        /** Y position of the axis, relative to the center of the gauge.
             @default 0%
         */
        centerY: number | string;

        /** Specifies labels color of the axis. */
        color: string;

        /** Axis end angle. Valid values are from - 180 to 180.
             @default 120
         */
        endAngle: number;

        /** Axis end (max) value */
        endValue: number;

        /** Font size for axis labels. */
        fontSize: number;

        /** Number of grid lines. Note, GaugeAxis doesn't adjust gridCount, so you should check your values and choose a proper gridCount which would result grids at round numbers.
             @default 5
         */
        gridCount: number;

        /** Specifies if grid should be drawn inside or outside the axis.
             @default true
         */
        gridInside: boolean;

        /** Unique id of an axis. */
        id: number | string;

        /** Specifies if labels should be placed inside or outside the axis.
             @default true
         */
        inside: boolean;

        /** Frequency of labels.
             @default 1
         */
        labelFrequency: number;

        /** You can use this function to format axis labels. This function is called and value is passed as a attribute: labelFunction(value); */
        labelFunction: (value: number) => string;

        /** Distance from axis to the labels.
             @default 15
         */
        labelOffset: number;

        /** Specifies if labels on the axis should be shown.
             @default true
         */
        labelsEnabled: boolean;

        /** You can add listeners of events using this property. Example: listeners = [{"event":"clickBand", "method":handleClick}]; */
        listeners: { event: string, method: (event: any) => void };

        /** Interval, at which minor ticks should be placed. */
        minorTickInterval: number;

        /** Length of a minor tick.
             @default 5
         */
        minorTickLength: number;

        /** Axis radius.
             @default 95%
         */
        radius: number | string;

        /** Specifies if the first label should be shown.
             @default true
         */
        showFirstLabel: boolean;

        /** Specifies if the last label should be shown.
             @default true
         */
        showLastLabel: boolean;

        /** Axis start angle. Valid values are from - 180 to 180.
             @default -120
         */
        startAngle: number;

        /** Axis start (min) value.
             @default 0
         */
        startValue: number;

        /** Opacity of axis ticks.
             @default 1
         */
        tickAlpha: number;

        /** Color of axis ticks.
             @default #555555
         */
        tickColor: string;

        /** Length of a major tick.
             @default 10
         */
        tickLength: number;

        /** Tick thickness.
             @default 1
         */
        tickThickness: number;

        /** Text displayed above the axis center. */
        topText: string;

        /** Specifies if text should be bold.
             @default true
         */
        topTextBold: boolean;

        /** Color of top text. */
        topTextColor: string;

        /** Font size of top text. */
        topTextFontSize: number;

        /** Y offset of top text.
             @default 0
         */
        topTextYOffset: number;

        /** A string which can be placed next to axis labels. */
        unit: string;

        /** Position of the unit.
             @default right
         */
        unitPosition: "left" | "right";

        /** Specifies if small and big numbers should use prefixes to make them more readable.
             @default false
         */
        usePrefixes: boolean;

        /** Interval, at which ticks with values should be placed. */
        valueInterval: number;

        /** Event which is fired when user clicks on gauge band. */
        addListener(type: "clickBand", handler: (event: { type: any, dataItem: GaugeBand, chart: AmAngularGauge, event: MouseEvent }) => void): void;

        /** Event which is fired when user rolls-out gauge band. */
        addListener(type: "rollOutBand", handler: (event: { type: any, dataItem: GaugeBand, chart: AmAngularGauge, event: MouseEvent }) => void): void;

        /** Event which is fired when user rolls-over gauge band. */
        addListener(type: "rollOverBand", handler: (event: { type: any, dataItem: GaugeBand, chart: AmAngularGauge, event: MouseEvent }) => void): void;

        /** Adds event listener to the object. */
        addListener(type: string, handler: (event: any) => void): void;

        /** Removes event listener from chart object. */
        removeListener(chart: AmChart, type: string, handler: (event: any) => void): void;

        /** Sets bottom text. */
        setBottomText(text: string): void;

        /** Sets top text. */
        setTopText(text: string): void;

        /** Returns angle of the value. */
        value2angle(value: number): void;
    }


    /** Creates a band for a specified value range on the GaugeAxis. Multiple bands can be assigned to a single GaugeAxis. Examplevar chart = AmCharts.makeChart("chartdiv",{ ... "axes": [ { ... "bands": [ { "startValue": 0, "endValue": 100 } ] } ] }); */
    interface GaugeBandConfig {

        /** Opacity of band fill. Will use axis.bandAlpha if not set any. */
        alpha?: number;

        /** When rolled-over, band will display balloon if you set some text for this property. */
        balloonText?: string;

        /** Color of a band. */
        color?: string;

        /** End value of a fill. */
        endValue?: number;

        /** Example: [-0.2, 0, -0.2]. Will make bands to be filled with color gradients. Negative value means the color will be darker than the original, and positive number means the color will be lighter.
             @default []
         */
        gradientRatio?: number[];

        /** Unique id of a band. */
        id?: string;

        /** Inner radius of a band. If not set any, the band will end with the end of minor ticks. Set 0 if you want the band to be drawn to the axis center. */
        innerRadius?: number | string;

        /** Band radius. If not set any, the band will start with the axis outline. */
        radius?: number | string;

        /** Start value of a fill. */
        startValue?: number;

        /** Gauge band can be clickable and can lead to some page. */
        url?: string;
    }


    /** Creates a band for a specified value range on the GaugeAxis. Multiple bands can be assigned to a single GaugeAxis. Examplevar chart = AmCharts.makeChart("chartdiv",{ ... "axes": [ { ... "bands": [ { "startValue": 0, "endValue": 100 } ] } ] }); */
    class GaugeBand {

        /** Opacity of band fill. Will use axis.bandAlpha if not set any. */
        alpha: number;

        /** When rolled-over, band will display balloon if you set some text for this property. */
        balloonText: string;

        /** Color of a band. */
        color: string;

        /** End value of a fill. */
        endValue: number;

        /** Example: [-0.2, 0, -0.2]. Will make bands to be filled with color gradients. Negative value means the color will be darker than the original, and positive number means the color will be lighter.
             @default []
         */
        gradientRatio: number[];

        /** Unique id of a band. */
        id: string;

        /** Inner radius of a band. If not set any, the band will end with the end of minor ticks. Set 0 if you want the band to be drawn to the axis center. */
        innerRadius: number | string;

        /** Band radius. If not set any, the band will start with the axis outline. */
        radius: number | string;

        /** Start value of a fill. */
        startValue: number;

        /** Gauge band can be clickable and can lead to some page. */
        url: string;

        /** Sets end value for the band. */
        setEndValue(value: number): void;

        /** Sets start value for the band. */
        setStartValue(value: number): void;
    }


    /** GraphDataItem holds all the information about the graph's data item. When working with a chart, you do not create GraphDataItem objects or change it's properties directly. GraphDataItem is passed to you by events when user interacts with data item on the chart. The list of properties below will help you to extract data item's value/coordinate/etc. */
    interface GraphDataItemConfig {

        /** Opacity of the data item. */
        alpha?: number;

        /** Bullet type. */
        bullet?: string;

        /** Bullet size. */
        bulletSize?: number;

        /** Category value. */
        category?: string;

        /** Color of the data item. */
        color?: string;

        /** Custom bullet (path to file name). */
        customBullet?: string;

        /** Original object from data provider. */
        dataContext?: any;

        /** Description. */
        description?: string;

        /** Array of colors of the data item, used by column and candlestick chart only. */
        fillColors?: string[];

        /** Object which holds percents when recalculateToPercents is set to true. */
        percents?: any;

        /** SerialDataItem of this graphDataItem */
        serialDataItem?: SerialDataItemConfig;

        /** url */
        url?: string;

        /** Object which holds values of the data item (value, open, close, low, high). */
        values?: any;

        /** x coordinate of the data item. */
        x?: number;

        /** y coordinate of the data item. */
        y?: number;
    }


    /** GraphDataItem holds all the information about the graph's data item. When working with a chart, you do not create GraphDataItem objects or change it's properties directly. GraphDataItem is passed to you by events when user interacts with data item on the chart. The list of properties below will help you to extract data item's value/coordinate/etc. */
    class GraphDataItem {

        /** Opacity of the data item. */
        alpha: number;

        /** Bullet type. */
        bullet: string;

        /** Bullet size. */
        bulletSize: number;

        /** Category value. */
        category: string;

        /** Color of the data item. */
        color: string;

        /** Custom bullet (path to file name). */
        customBullet: string;

        /** Original object from data provider. */
        dataContext: any;

        /** Description. */
        description: string;

        /** Array of colors of the data item, used by column and candlestick chart only. */
        fillColors: string[];

        /** Object which holds percents when recalculateToPercents is set to true. */
        percents: any;

        /** SerialDataItem of this graphDataItem */
        serialDataItem: SerialDataItem;

        /** url */
        url: string;

        /** Object which holds values of the data item (value, open, close, low, high). */
        values: any;

        /** x coordinate of the data item. */
        x: number;

        /** y coordinate of the data item. */
        y: number;
    }


    /** Creates a horizontal/vertical guideline-/area for AmSerialChart, AmXYChart and AmRadarChart charts, automatically adapts it's settings from the axes if none has been specified. Examplevar chart = AmCharts.makeChart("chartdiv",{ ... "guides": [ { "fillAlpha": 0.10, "value": 0, "toValue": 10 } ] }); */
    interface GuideConfig {

        /** If you set it to true, the guide will be displayed above the graphs.
             @default false
         */
        above?: boolean;

        /** Radar chart only. Specifies angle at which guide should start. Affects only fills, not lines. */
        angle?: number;

        /** Baloon fill color. */
        balloonColor?: string;

        /** The text which will be displayed if the user rolls-over the guide. */
        balloonText?: string;

        /** Specifies if label should be bold or not.
             @default false
         */
        boldLabel?: boolean;

        /** Category of the guide (in case the guide is for category axis). */
        category?: string;

        /** Color of a guide label. */
        color?: string;

        /** Dash length. */
        dashLength?: number;

        /** Date of the guide (in case the guide is for category axis and parseDates is set to true). */
        date?: Date;

        /** Works if a guide is added to CategoryAxis and this axis is non-date-based. If you set it to true, the guide will start (or be placed, if it's not a fill) on the beginning of the category cell and will end at the end of toCategory cell.
             @default false
         */
        expand?: boolean;

        /** Fill opacity. Value range is 0 - 1. */
        fillAlpha?: number;

        /** Fill color. */
        fillColor?: string;

        /** Font size of guide label. */
        fontSize?: number;

        /** Unique id of a Guide. You don't need to set it, unless you want to. */
        id?: string;

        /** Specifies whether label should be placed inside or outside plot area. */
        inside?: boolean;

        /** The label which will be displayed near the guide. */
        label?: string;

        /** Rotation angle of a guide label. */
        labelRotation?: number;

        /** Line opacity. */
        lineAlpha?: number;

        /** Line color. */
        lineColor?: string;

        /** Line thickness. */
        lineThickness?: number;

        /** Position of guide label. Possible values are "left" or "right" for horizontal axis and "top" or "bottom" for vertical axis. */
        position?: "left" | "right" | "top" | "bottom";

        /** Tick length. */
        tickLength?: number;

        /** Radar chart only. Specifies angle at which guide should end. Affects only fills, not lines. */
        toAngle?: number;

        /** "To" category of the guide (in case the guide is for category axis). */
        toCategory?: string;

        /** "To" date of the guide (in case the guide is for category axis and parseDates is set to true) If you have both date and toDate, the space between these two dates can be filled with color. */
        toDate?: Date;

        /** "To" value of the guide (in case the guide is for value axis). */
        toValue?: number;

        /** Value of the guide (in case the guide is for value axis). */
        value?: number;

        /** Value axis of a guide. As you can add guides directly to the chart, you might need to specify which which value axis should be used. */
        valueAxis?: ValueAxisConfig;
    }


    /** Creates a horizontal/vertical guideline-/area for AmSerialChart, AmXYChart and AmRadarChart charts, automatically adapts it's settings from the axes if none has been specified. Examplevar chart = AmCharts.makeChart("chartdiv",{ ... "guides": [ { "fillAlpha": 0.10, "value": 0, "toValue": 10 } ] }); */
    class Guide {

        /** If you set it to true, the guide will be displayed above the graphs.
             @default false
         */
        above: boolean;

        /** Radar chart only. Specifies angle at which guide should start. Affects only fills, not lines. */
        angle: number;

        /** Baloon fill color. */
        balloonColor: string;

        /** The text which will be displayed if the user rolls-over the guide. */
        balloonText: string;

        /** Specifies if label should be bold or not.
             @default false
         */
        boldLabel: boolean;

        /** Category of the guide (in case the guide is for category axis). */
        category: string;

        /** Color of a guide label. */
        color: string;

        /** Dash length. */
        dashLength: number;

        /** Date of the guide (in case the guide is for category axis and parseDates is set to true). */
        date: Date;

        /** Works if a guide is added to CategoryAxis and this axis is non-date-based. If you set it to true, the guide will start (or be placed, if it's not a fill) on the beginning of the category cell and will end at the end of toCategory cell.
             @default false
         */
        expand: boolean;

        /** Fill opacity. Value range is 0 - 1. */
        fillAlpha: number;

        /** Fill color. */
        fillColor: string;

        /** Font size of guide label. */
        fontSize: number;

        /** Unique id of a Guide. You don't need to set it, unless you want to. */
        id: string;

        /** Specifies whether label should be placed inside or outside plot area. */
        inside: boolean;

        /** The label which will be displayed near the guide. */
        label: string;

        /** Rotation angle of a guide label. */
        labelRotation: number;

        /** Line opacity. */
        lineAlpha: number;

        /** Line color. */
        lineColor: string;

        /** Line thickness. */
        lineThickness: number;

        /** Position of guide label. Possible values are "left" or "right" for horizontal axis and "top" or "bottom" for vertical axis. */
        position: "left" | "right" | "top" | "bottom";

        /** Tick length. */
        tickLength: number;

        /** Radar chart only. Specifies angle at which guide should end. Affects only fills, not lines. */
        toAngle: number;

        /** "To" category of the guide (in case the guide is for category axis). */
        toCategory: string;

        /** "To" date of the guide (in case the guide is for category axis and parseDates is set to true) If you have both date and toDate, the space between these two dates can be filled with color. */
        toDate: Date;

        /** "To" value of the guide (in case the guide is for value axis). */
        toValue: number;

        /** Value of the guide (in case the guide is for value axis). */
        value: number;

        /** Value axis of a guide. As you can add guides directly to the chart, you might need to specify which which value axis should be used. */
        valueAxis: ValueAxis;
    }


    /** Image is used to add images to the end/start of trend lines. Allows you to display image anywhere on chart's plot area. */
    interface ImageConfig {

        /** Roll-over balloon color.
             @default #000000
         */
        balloonColor?: string;

        /** Roll-over text. */
        balloonText?: string;

        /** Color of an image. Works only if an image is generated using SVG path (using svgPath property on an Image)
             @default #000000
         */
        color?: string;

        /** Height of an image.
             @default 20
         */
        height?: number;

        /** Horizontal offset.
             @default 0
         */
        offsetX?: number;

        /** Vertical offset.
             @default 0
         */
        offsetY?: number;

        /** Color of image outline. Works only if an image is generated using SVG path (using svgPath property on an Image) */
        outlineColor?: string;

        /** Rotation of an image.
             @default 0
         */
        rotation?: number;

        /** Svg path of an image. Will not work with IE8. */
        svgPath?: string;

        /** Url of an image. */
        url?: string;

        /** Width on an image.
             @default 20
         */
        width?: number;
    }


    /** Image is used to add images to the end/start of trend lines. Allows you to display image anywhere on chart's plot area. */
    class Image {

        /** Roll-over balloon color.
             @default #000000
         */
        balloonColor: string;

        /** Roll-over text. */
        balloonText: string;

        /** Color of an image. Works only if an image is generated using SVG path (using svgPath property on an Image)
             @default #000000
         */
        color: string;

        /** Height of an image.
             @default 20
         */
        height: number;

        /** Horizontal offset.
             @default 0
         */
        offsetX: number;

        /** Vertical offset.
             @default 0
         */
        offsetY: number;

        /** Color of image outline. Works only if an image is generated using SVG path (using svgPath property on an Image) */
        outlineColor: string;

        /** Rotation of an image.
             @default 0
         */
        rotation: number;

        /** Svg path of an image. Will not work with IE8. */
        svgPath: string;

        /** Url of an image. */
        url: string;

        /** Width on an image.
             @default 20
         */
        width: number;
    }


    /** Creates a label on the chart which can be placed anywhere, multiple can be assigned. Examplevar chart = AmCharts.makeChart("chartdiv",{ ... "allLabels": [ { "text": "Free label", "bold": true, "x": 20, "y": 20 } ] }); */
    interface LabelConfig {

        /** 
             @default left
         */
        align?: string;

        /** 
             @default 1
         */
        alpha?: number;

        /** Specifies if label is bold or not.
             @default false
         */
        bold?: boolean;

        /** Color of a label. */
        color?: string;

        /** Unique id of a Label. You don't need to set it, unless you want to. */
        id?: string;

        /** Rotation angle.
             @default 0
         */
        rotation?: number;

        /** Text size. */
        size?: number;

        /** In case you set it to some number, the chart will set focus on the label when user clicks tab key. When a focus is set, screen readers like NVDA Screen reader will read the title. Note, not all browsers and readers support this. */
        tabIndex?: number;

        /** Text of a label. */
        text?: string;

        /** URL which will be access if user clicks on a label. */
        url?: string;

        /** X position of a label. */
        x?: number | string;

        /** y position of a label. */
        y?: number | string;
    }


    /** Creates a label on the chart which can be placed anywhere, multiple can be assigned. Examplevar chart = AmCharts.makeChart("chartdiv",{ ... "allLabels": [ { "text": "Free label", "bold": true, "x": 20, "y": 20 } ] }); */
    class Label {

        /** 
             @default left
         */
        align: string;

        /** 
             @default 1
         */
        alpha: number;

        /** Specifies if label is bold or not.
             @default false
         */
        bold: boolean;

        /** Color of a label. */
        color: string;

        /** Unique id of a Label. You don't need to set it, unless you want to. */
        id: string;

        /** Rotation angle.
             @default 0
         */
        rotation: number;

        /** Text size. */
        size: number;

        /** In case you set it to some number, the chart will set focus on the label when user clicks tab key. When a focus is set, screen readers like NVDA Screen reader will read the title. Note, not all browsers and readers support this. */
        tabIndex: number;

        /** Text of a label. */
        text: string;

        /** URL which will be access if user clicks on a label. */
        url: string;

        /** X position of a label. */
        x: number | string;

        /** y position of a label. */
        y: number | string;
    }


    /** SerialDataItem holds all the information about each series. When working with a chart, you do not create SerialDataItem objects or change it's properties directly. Consider properties of a SerialDataItem read-only - change values in chart's data provider if you need to. When serial chart parses dataProvider, it generates &quot;chartData&quot; array. Objects of this array are SerialDataItem objects. */
    interface SerialDataItemConfig {

        /** You can access each GraphDataItem using this object. The data structure is: graphDataItem = serialDataItem.axes[axisId].graphs[graphId]. */
        axes?: any;

        /** category value. String if parseDates is false, Date if true. */
        category?: string;

        /** Reference to original data object, from dataProvider. */
        dataContext?: any;

        /** Time stamp of a series date. Avalable only if parseDates property of CategoryAxis is set to true. */
        time?: number;

        /** Coordinate (horizontal or vertical, depends on chart's rotate property) of the series. */
        x?: number;
    }


    /** SerialDataItem holds all the information about each series. When working with a chart, you do not create SerialDataItem objects or change it's properties directly. Consider properties of a SerialDataItem read-only - change values in chart's data provider if you need to. When serial chart parses dataProvider, it generates &quot;chartData&quot; array. Objects of this array are SerialDataItem objects. */
    class SerialDataItem {

        /** You can access each GraphDataItem using this object. The data structure is: graphDataItem = serialDataItem.axes[axisId].graphs[graphId]. */
        axes: any;

        /** category value. String if parseDates is false, Date if true. */
        category: string;

        /** Reference to original data object, from dataProvider. */
        dataContext: any;

        /** Time stamp of a series date. Avalable only if parseDates property of CategoryAxis is set to true. */
        time: number;

        /** Coordinate (horizontal or vertical, depends on chart's rotate property) of the series. */
        x: number;
    }


    /** Slice is an item of AmPieChart's chartData Array and holds all the information about the slice. When working with a pie chart, you do not create slices or change it's properties directly, instead you set array of data using dataProvider property. Consider properties of a Slice read-only - change values in chart's data provider if you need to. */
    interface SliceConfig {

        /** Opacity of a slice. */
        alpha?: number;

        /** Color of a slice. */
        color?: string;

        /** Original object from data provider. */
        dataContext?: any;

        /** Slice description. */
        description?: string;

        /** Specifies whether the slice is hidden */
        hidden?: boolean;

        /** Percent value of a slice. */
        percents?: number;

        /** Specifies whether the slice is pulled or not. */
        pulled?: boolean;

        /** Slice title */
        title?: string;

        /** Url of a slice */
        url?: string;

        /** Value of a slice */
        value?: number;

        /** specifies whether this slice has a legend entry */
        visibleInLegend?: boolean;
    }


    /** Slice is an item of AmPieChart's chartData Array and holds all the information about the slice. When working with a pie chart, you do not create slices or change it's properties directly, instead you set array of data using dataProvider property. Consider properties of a Slice read-only - change values in chart's data provider if you need to. */
    class Slice {

        /** Opacity of a slice. */
        alpha: number;

        /** Color of a slice. */
        color: string;

        /** Original object from data provider. */
        dataContext: any;

        /** Slice description. */
        description: string;

        /** Specifies whether the slice is hidden */
        hidden: boolean;

        /** Percent value of a slice. */
        percents: number;

        /** Specifies whether the slice is pulled or not. */
        pulled: boolean;

        /** Slice title */
        title: string;

        /** Url of a slice */
        url: string;

        /** Value of a slice */
        value: number;

        /** specifies whether this slice has a legend entry */
        visibleInLegend: boolean;
    }


    /** Creates a title on above the chart, multiple can be assigned. Examplevar chart = AmCharts.makeChart("chartdiv",{ ... "titles": [ { "text": "Chart Title", "size": 15 } ] }); */
    interface TitleConfig {

        /** Opacity of a title.
             @default 1
         */
        alpha?: number;

        /** Specifies if title should be bold or not.
             @default true
         */
        bold?: boolean;

        /** Text color of a title. */
        color?: string;

        /** Unique id of a Title. You don't need to set it, unless you want to. */
        id?: string;

        /** Text size of a title. */
        size?: number;

        /** In case you set it to some number, the chart will set focus on the title when user clicks tab key. When a focus is set, screen readers like NVDA Screen reader will read the title. Note, not all browsers and readers support this. */
        tabIndex?: number;

        /** Text of a title. */
        text?: string;
    }


    /** Creates a title on above the chart, multiple can be assigned. Examplevar chart = AmCharts.makeChart("chartdiv",{ ... "titles": [ { "text": "Chart Title", "size": 15 } ] }); */
    class Title {

        /** Opacity of a title.
             @default 1
         */
        alpha: number;

        /** Specifies if title should be bold or not.
             @default true
         */
        bold: boolean;

        /** Text color of a title. */
        color: string;

        /** Unique id of a Title. You don't need to set it, unless you want to. */
        id: string;

        /** Text size of a title. */
        size: number;

        /** In case you set it to some number, the chart will set focus on the title when user clicks tab key. When a focus is set, screen readers like NVDA Screen reader will read the title. Note, not all browsers and readers support this. */
        tabIndex: number;

        /** Text of a title. */
        text: string;
    }


    /** Creates a trendline for AmSerialChart and AmXYChart charts which indicates the trend of your data or covers some different purposes. Multiple can be assigned. Examplevar chart = AmCharts.makeChart("chartdiv",{ ... "trendLines": [ { "initialValue": 1, "initialXValue": 1, "finalValue": 11, "finalXValue": 12 } ] }); */
    interface TrendLineConfig {

        /** When set, enables displaying a roll-over balloon. */
        balloonText?: string;

        /** Dash length.
             @default 0
         */
        dashLength?: number;

        /** String, equal to category value to which trend line should be drawn. It should be used if chart doesn't parse dates. */
        finalCategory?: string;

        /** Date to which trend line should be drawn. It can be date string (using the same date format as chart.dataDateFormat) or date object. */
        finalDate?: Date;

        /** Allows to add an image to the end of a trend line. */
        finalImage?: ImageConfig;

        /** Value at which trend line should end. */
        finalValue?: number;

        /** Used by XY chart only. X value at which trend line should end. */
        finalXValue?: number;

        /** Unique id of a Trend line. You don't need to set it, unless you want to. */
        id?: string;

        /** String, equal to category value from which trend line should start. It should be used if chart doesn't parse dates. */
        initialCategory?: string;

        /** Date from which trend line should start. It can be date string (using the same date format as chart.dataDateFormat) or date object. */
        initialDate?: Date;

        /** Allows to add an image to the beginning of a trend line. */
        initialImage?: ImageConfig;

        /** Value from which trend line should start. */
        initialValue?: number;

        /** Used by XY chart only. X value from which trend line should start. */
        initialXValue?: number;

        /** Used by Stock chart. If this property is set to true, this trend line won't be removed when clicked on eraser tool.
             @default false
         */
        isProtected?: boolean;

        /** Line opacity.
             @default 1
         */
        lineAlpha?: number;

        /** Line color.
             @default #00CC00
         */
        lineColor?: string;

        /** Line thickness.
             @default 1
         */
        lineThickness?: number;

        /** Value axis of the trend line. Will use first value axis of the chart if not set any. You can use a reference to the value axis object or id of value axis.
             @default ValueAxis
         */
        valueAxis?: ValueAxisConfig;

        /** Used by XY chart only. X axis of trend line. Will use first X axis of the chart if not set any. You can use a reference to the value axis object or id of value axis.
             @default ValueAxis
         */
        valueAxisX?: ValueAxisConfig;
    }


    /** Creates a trendline for AmSerialChart and AmXYChart charts which indicates the trend of your data or covers some different purposes. Multiple can be assigned. Examplevar chart = AmCharts.makeChart("chartdiv",{ ... "trendLines": [ { "initialValue": 1, "initialXValue": 1, "finalValue": 11, "finalXValue": 12 } ] }); */
    class TrendLine {

        /** When set, enables displaying a roll-over balloon. */
        balloonText: string;

        /** Dash length.
             @default 0
         */
        dashLength: number;

        /** String, equal to category value to which trend line should be drawn. It should be used if chart doesn't parse dates. */
        finalCategory: string;

        /** Date to which trend line should be drawn. It can be date string (using the same date format as chart.dataDateFormat) or date object. */
        finalDate: Date;

        /** Allows to add an image to the end of a trend line. */
        finalImage: Image;

        /** Value at which trend line should end. */
        finalValue: number;

        /** Used by XY chart only. X value at which trend line should end. */
        finalXValue: number;

        /** Unique id of a Trend line. You don't need to set it, unless you want to. */
        id: string;

        /** String, equal to category value from which trend line should start. It should be used if chart doesn't parse dates. */
        initialCategory: string;

        /** Date from which trend line should start. It can be date string (using the same date format as chart.dataDateFormat) or date object. */
        initialDate: Date;

        /** Allows to add an image to the beginning of a trend line. */
        initialImage: Image;

        /** Value from which trend line should start. */
        initialValue: number;

        /** Used by XY chart only. X value from which trend line should start. */
        initialXValue: number;

        /** Used by Stock chart. If this property is set to true, this trend line won't be removed when clicked on eraser tool.
             @default false
         */
        isProtected: boolean;

        /** Line opacity.
             @default 1
         */
        lineAlpha: number;

        /** Line color.
             @default #00CC00
         */
        lineColor: string;

        /** Line thickness.
             @default 1
         */
        lineThickness: number;

        /** Value axis of the trend line. Will use first value axis of the chart if not set any. You can use a reference to the value axis object or id of value axis.
             @default ValueAxis
         */
        valueAxis: ValueAxis;

        /** Used by XY chart only. X axis of trend line. Will use first X axis of the chart if not set any. You can use a reference to the value axis object or id of value axis.
             @default ValueAxis
         */
        valueAxisX: ValueAxis;
    }


    /** Extension for ValueAxis to create an axis for AmSerialChart, AmRadarChart, AmXYChart charts, multiple can be assigned. Gets automatically populated, one for AmSerialChart and two for AmXYChart charts, if none has been specified. Examplevar chart = AmCharts.makeChart("chartdiv",{ ... "valueAxes": [ { "title": "Axis title" } ] }); */
    interface ValueAxisConfig extends AxisBaseConfig {

        /** If this is set to true and the label does not fit, it will be wrapped. Works only on horizontal value axes.
             @default false
         */
        autoWrap?: boolean;

        /** Works with Radar chart only. If you have a big number of axes, this property will help you to show every x axis only.
             @default 1
         */
        axisFrequency?: number;

        /** Radar chart only. Specifies distance from axis to the axis title (category)
             @default 10
         */
        axisTitleOffset?: number;

        /** You can use this function to format balloon text of the axis. This function is called and balloon text or date (if axis is date-based) is passed as an argument. It should return string which will be displayed in the balloon. */
        balloonTextFunction?: (graphDataItem: GraphDataItem, graph: AmGraph) => string;

        /** Read-only. Coordinate of the base value. */
        baseCoord?: number;

        /** Specifies base value of the axis.
             @default 0
         */
        baseValue?: number;

        /** If your values represents time units, and you want value axis labels to be formatted as duration, you have to set the duration unit. Possible values are: "ss", "mm", "hh" and "DD". */
        duration?: string;

        /** If duration property is set, you can specify what string should be displayed next to day, hour, minute and second.
             @default {DD:'d. ', hh:':', mm:':',ss:''}
         */
        durationUnits?: any;

        /** Radar chart only. Possible values are: "polygons" and "circles". Set "circles" for polar charts.
             @default polygons
         */
        gridType?: "polygons" | "circles";

        /** Unique id of value axis. It is not required to set it, unless you need to tell the graph which exact value axis it should use. */
        id?: string;

        /** If you set it to true, minimum and maximum of value axis will not change while zooming/scrolling.
             @default false
         */
        includeAllValues?: boolean;

        /** Specifies whether guide values should be included when calculating min and max of the axis.
             @default false
         */
        includeGuidesInMinMax?: boolean;

        /** If true, the axis will include hidden graphs when calculating min and max values.
             @default false
         */
        includeHidden?: boolean;

        /** Specifies whether values on axis can only be integers or both integers and doubles.
             @default false
         */
        integersOnly?: boolean;

        /** You can use this function to format Value axis labels. This function is called and these parameters are passed: labelFunction(value, valueText, valueAxis); Where value is numeric value, valueText is formatted string and valueAxis is a reference to valueAxis object. If axis type is "date", labelFucntion will pass different arguments: labelFunction(valueText, date, valueAxis) Your function should return string. */
        labelFunction?: ((value: number, valueText: string, valueAxis: ValueAxis) => string) | ((valueText: string, data: Date, valueAxis: ValueAxis) => string);

        /** Specifies if this value axis' scale should be logarithmic.
             @default false
         */
        logarithmic?: boolean;

        /** Read-only. Maximum value of the axis. */
        max?: number;

        /** If you don't want max value to be calculated by the chart, set it using this property. This value might still be adjusted so that it would be possible to draw grid at rounded intervals. */
        maximum?: number;

        /** If your value axis is date-based, you can specify maximum date of the axis. Can be set as date object, timestamp number or string if dataDateFormat is set. */
        maximumDate?: Date;

        /** Read-only. Minimum value of the axis. */
        min?: number;

        /** If you don't want min value to be calculated by the chart, set it using this property. This value might still be adjusted so that it would be possible to draw grid at rounded intervals. */
        minimum?: number;

        /** If your value axis is date-based, you can specify minimum date of the axis. Can be set as date object, timestamp number or string if dataDateFormat is set. */
        minimumDate?: Date;

        /** If set value axis scale (min and max numbers) will be multiplied by it. I.e. if set to 1.2 the scope of values will increase by 20%.
             @default 1
         */
        minMaxMultiplier?: number;

        /** Works with radar charts only. If you set it to “middle”, labels and data points will be placed in the middle between axes.
             @default axis
         */
        pointPosition?: "start" | "middle" | "end";

        /** Possible values are: "top", "bottom", "left", "right". If axis is vertical, default position is "left". If axis is horizontal, default position is "bottom".
             @default left
         */
        position?: "top" | "bottom" | "left" | "right";

        /** Precision (number of decimals) of values. */
        precision?: number;

        /** Radar chart only. Specifies if categories (axes' titles) should be displayed near axes)
             @default true
         */
        radarCategoriesEnabled?: boolean;

        /** Specifies if graphs's values should be recalculated to percents.
             @default false
         */
        recalculateToPercents?: boolean;

        /** Specifies if value axis should be reversed (smaller values on top).
             @default false
         */
        reversed?: boolean;

        /** Stacking mode of the axis. Possible values are: "none", "regular", "100%", "3d". Note, only graphs of one type will be stacked.
             @default none
         */
        stackType?: "none" | "regular" | "100%" | "3d";

        /** Read-only. Value difference between two grid lines. */
        step?: number;

        /** If you set minimum and maximum for your axis, chart adjusts them so that grid would start and end on the beginning and end of plot area and grid would be at equal intervals. If you set strictMinMax to true, the chart will not adjust minimum and maximum of value axis.
             @default false
         */
        strictMinMax?: boolean;

        /** In case you synchronize one value axis with another, you need to set the synchronization multiplier. Use synchronizeWithAxis method to set with which axis it should be synced. */
        synchronizationMultiplier?: number;

        /** One value axis can be synchronized with another value axis. You can use both reference to your axis or id of the axis here. You should set synchronizationMultiplyer in order for this to work. */
        synchronizeWith?: ValueAxis;

        /** If this value axis is stacked and has columns, setting valueAxis.totalText = "[[total]]" will make it to display total value above the most-top column. */
        totalText?: string;

        /** Color of total text. */
        totalTextColor?: string;

        /** Distance from data point to total text.
             @default 0
         */
        totalTextOffset?: number;

        /** This allows you to have logarithmic value axis and have zero values in the data. You must set it to &gt;0 value in order to work.
             @default 0
         */
        treatZeroAs?: number;

        /** Type of value axis. If your values in data provider are dates and you want this axis to show dates instead of numbers, set it to "date".
             @default numeric
         */
        type?: string;

        /** Unit which will be added to the value label. */
        unit?: string;

        /** Position of the unit. Possible values are "left" and "right".
             @default right
         */
        unitPosition?: "left" | "right";

        /** If true, prefixes will be used for big and small numbers. You can set arrays of prefixes directly to the chart object via prefixesOfSmallNumbers and prefixesOfBigNumbers.
             @default false
         */
        usePrefixes?: boolean;

        /** If true, values will always be formatted using scientific notation (5e+8, 5e-8...) Otherwise only values bigger then 1e+21 and smaller then 1e-7 will be displayed in scientific notation.
             @default false
         */
        useScientificNotation?: boolean;

        /** Opacity of a zero grid line. By default it is equal to 2 x gridAlpha. */
        zeroGridAlpha?: number;
    }


    /** Extension for ValueAxis to create an axis for AmSerialChart, AmRadarChart, AmXYChart charts, multiple can be assigned. Gets automatically populated, one for AmSerialChart and two for AmXYChart charts, if none has been specified. Examplevar chart = AmCharts.makeChart("chartdiv",{ ... "valueAxes": [ { "title": "Axis title" } ] }); */
    class ValueAxis extends AxisBase {

        /** If this is set to true and the label does not fit, it will be wrapped. Works only on horizontal value axes.
             @default false
         */
        autoWrap: boolean;

        /** Works with Radar chart only. If you have a big number of axes, this property will help you to show every x axis only.
             @default 1
         */
        axisFrequency: number;

        /** Radar chart only. Specifies distance from axis to the axis title (category)
             @default 10
         */
        axisTitleOffset: number;

        /** You can use this function to format balloon text of the axis. This function is called and balloon text or date (if axis is date-based) is passed as an argument. It should return string which will be displayed in the balloon. */
        balloonTextFunction: (graphDataItem: GraphDataItem, graph: AmGraph) => string;

        /** Read-only. Coordinate of the base value. */
        baseCoord: number;

        /** Specifies base value of the axis.
             @default 0
         */
        baseValue: number;

        /** If your values represents time units, and you want value axis labels to be formatted as duration, you have to set the duration unit. Possible values are: "ss", "mm", "hh" and "DD". */
        duration: string;

        /** If duration property is set, you can specify what string should be displayed next to day, hour, minute and second.
             @default {DD:'d. ', hh:':', mm:':',ss:''}
         */
        durationUnits: any;

        /** Radar chart only. Possible values are: "polygons" and "circles". Set "circles" for polar charts.
             @default polygons
         */
        gridType: "polygons" | "circles";

        /** Unique id of value axis. It is not required to set it, unless you need to tell the graph which exact value axis it should use. */
        id: string;

        /** If you set it to true, minimum and maximum of value axis will not change while zooming/scrolling.
             @default false
         */
        includeAllValues: boolean;

        /** Specifies whether guide values should be included when calculating min and max of the axis.
             @default false
         */
        includeGuidesInMinMax: boolean;

        /** If true, the axis will include hidden graphs when calculating min and max values.
             @default false
         */
        includeHidden: boolean;

        /** Specifies whether values on axis can only be integers or both integers and doubles.
             @default false
         */
        integersOnly: boolean;

        /** You can use this function to format Value axis labels. This function is called and these parameters are passed: labelFunction(value, valueText, valueAxis); Where value is numeric value, valueText is formatted string and valueAxis is a reference to valueAxis object. If axis type is "date", labelFucntion will pass different arguments: labelFunction(valueText, date, valueAxis) Your function should return string. */
        labelFunction: ((value: number, valueText: string, valueAxis: ValueAxis) => string) | ((valueText: string, data: Date, valueAxis: ValueAxis) => string);

        /** Specifies if this value axis' scale should be logarithmic.
             @default false
         */
        logarithmic: boolean;

        /** Read-only. Maximum value of the axis. */
        max: number;

        /** If you don't want max value to be calculated by the chart, set it using this property. This value might still be adjusted so that it would be possible to draw grid at rounded intervals. */
        maximum: number;

        /** If your value axis is date-based, you can specify maximum date of the axis. Can be set as date object, timestamp number or string if dataDateFormat is set. */
        maximumDate: Date;

        /** Read-only. Minimum value of the axis. */
        min: number;

        /** If you don't want min value to be calculated by the chart, set it using this property. This value might still be adjusted so that it would be possible to draw grid at rounded intervals. */
        minimum: number;

        /** If your value axis is date-based, you can specify minimum date of the axis. Can be set as date object, timestamp number or string if dataDateFormat is set. */
        minimumDate: Date;

        /** If set value axis scale (min and max numbers) will be multiplied by it. I.e. if set to 1.2 the scope of values will increase by 20%.
             @default 1
         */
        minMaxMultiplier: number;

        /** Works with radar charts only. If you set it to “middle”, labels and data points will be placed in the middle between axes.
             @default axis
         */
        pointPosition: "start" | "middle" | "end";

        /** Possible values are: "top", "bottom", "left", "right". If axis is vertical, default position is "left". If axis is horizontal, default position is "bottom".
             @default left
         */
        position: "top" | "bottom" | "left" | "right";

        /** Precision (number of decimals) of values. */
        precision: number;

        /** Radar chart only. Specifies if categories (axes' titles) should be displayed near axes)
             @default true
         */
        radarCategoriesEnabled: boolean;

        /** Specifies if graphs's values should be recalculated to percents.
             @default false
         */
        recalculateToPercents: boolean;

        /** Specifies if value axis should be reversed (smaller values on top).
             @default false
         */
        reversed: boolean;

        /** Stacking mode of the axis. Possible values are: "none", "regular", "100%", "3d". Note, only graphs of one type will be stacked.
             @default none
         */
        stackType: "none" | "regular" | "100%" | "3d";

        /** Read-only. Value difference between two grid lines. */
        step: number;

        /** If you set minimum and maximum for your axis, chart adjusts them so that grid would start and end on the beginning and end of plot area and grid would be at equal intervals. If you set strictMinMax to true, the chart will not adjust minimum and maximum of value axis.
             @default false
         */
        strictMinMax: boolean;

        /** In case you synchronize one value axis with another, you need to set the synchronization multiplier. Use synchronizeWithAxis method to set with which axis it should be synced. */
        synchronizationMultiplier: number;

        /** One value axis can be synchronized with another value axis. You can use both reference to your axis or id of the axis here. You should set synchronizationMultiplyer in order for this to work. */
        synchronizeWith: ValueAxis;

        /** If this value axis is stacked and has columns, setting valueAxis.totalText = "[[total]]" will make it to display total value above the most-top column. */
        totalText: string;

        /** Color of total text. */
        totalTextColor: string;

        /** Distance from data point to total text.
             @default 0
         */
        totalTextOffset: number;

        /** This allows you to have logarithmic value axis and have zero values in the data. You must set it to &gt;0 value in order to work.
             @default 0
         */
        treatZeroAs: number;

        /** Type of value axis. If your values in data provider are dates and you want this axis to show dates instead of numbers, set it to "date".
             @default numeric
         */
        type: string;

        /** Unit which will be added to the value label. */
        unit: string;

        /** Position of the unit. Possible values are "left" and "right".
             @default right
         */
        unitPosition: "left" | "right";

        /** If true, prefixes will be used for big and small numbers. You can set arrays of prefixes directly to the chart object via prefixesOfSmallNumbers and prefixesOfBigNumbers.
             @default false
         */
        usePrefixes: boolean;

        /** If true, values will always be formatted using scientific notation (5e+8, 5e-8...) Otherwise only values bigger then 1e+21 and smaller then 1e-7 will be displayed in scientific notation.
             @default false
         */
        useScientificNotation: boolean;

        /** Opacity of a zero grid line. By default it is equal to 2 x gridAlpha. */
        zeroGridAlpha: number;

        /** Dispatched when value axis min/max values are changed. */
        addListener(type: "axisChanged", handler: (event: { type: any, chart: AmChart }) => void): void;

        /** Dispatched when axis is zoomed. */
        addListener(type: "axisZoomed", handler: (event: { type: any, startValue: number, endValue: number, chart: AmChart }) => void): void;

        /** Dispatched when valueAxis is logarithmic and values equal or less then zero were found in data. */
        addListener(type: "logarithmicAxisFailed", handler: (event: { type: any, chart: AmChart }) => void): void;

        /** Adds event listener to the object. */
        addListener(type: string, handler: (event: any) => void): void;

        /** Returns value of the coordinate. */
        coordinateToValue(coordinate: number): number;

        /** Returns coordinate of the value in pixels. */
        getCoordinate(value: number): number;

        /** Removes event listener from the object */
        removeListener(obj: any, type: string, handler: (event: any) => void): void;

        /** One value axis can be synchronized with another value axis. You should set synchronizationMultiplyer in order for this to work. */
        synchronizeWithAxis(axis: ValueAxis): void;

        /** Zooms out the value axis to full scale. */
        zoomOut(): void;

        /** Zooms-in the axis to the provided values. */
        zoomToValues(startValue: number, endValue: number): void;
    }


    /** AmStockChart is a main class Stock chart. */
    interface AmStockChartConfig {

        /** Specifies, if class names should be added to chart elements.
             @default false
         */
        addClassNames?: boolean;

        /** AmExport object. */
        amExport?: any /* undocumented type */;

        /** Specifies if animation was already played. Animation is only played once, when chart is rendered for the first time. If you want the animation to be repeated, set this property to false. */
        animationPlayed?: boolean;

        /** Set this to false if you don't want chart to resize itself whenever its parent container size changes.
             @default true
         */
        autoResize?: boolean;

        /** Balloon object.
             @default AmBalloon
         */
        balloon?: AmBalloonConfig;

        /** Settings for category axes.
             @default CategoryAxesSettings
         */
        categoryAxesSettings?: CategoryAxesSettingsConfig;

        /** Read-only. Indicates if the chart is created. */
        chartCreated?: boolean;

        /** Chart cursor settings.
             @default ChartCursorSettings
         */
        chartCursorSettings?: ChartCursorSettingsConfig;

        /** Chart scrollbar settings.
             @default ChartScrollbarSettings
         */
        chartScrollbarSettings?: ChartScrollbarSettingsConfig;

        /** This prefix is added to all class names which are added to all visual elements of a chart in case addClassNames is set to true.
             @default amcharts
         */
        classNamePrefix?: string;

        /** Array of colors used by data sets if no color was set explicitly on data set itself.
             @default ["#FF6600", "#FCD202", "#B0DE09", "#0D8ECF", "#2A0CD0", "#CD0D74", "#CC0000", "#00CC00", "#0000CC", "#DDDDDD", "#999999", "#333333", "#990000"]
         */
        colors?: string[];

        /** Array of data sets selected for comparing. */
        comparedDataSets?: DataSetConfig[];

        /** Data provider of data set can have dates as Date Objects or as Strings. In case you use strings, you need to set data date format and the chart will parse dates to date objects. Check this page for date formatting strings. Please note that two-digit years (YY) is NOT supported in this setting. */
        dataDateFormat?: string;

        /** Array of DataSets. */
        dataSets?: DataSetConfig[];

        /** DataSetSelector object. You can add it if you have more than one data set and want users to be able to select/compare them. */
        dataSetSelector?: DataSetSelectorConfig;

        /** Read-only. Current end date of the selected period, get only. To set start/end dates, use stockChart.zoom(startDate, endDate) method. */
        endDate?: void;

        /** Export config. Specifies how export to image/data export/print/annotate menu will look and behave. You can find a lot of examples in amcharts/plugins/export folder. More details can be found here. */
        export?: ExportConfig;

        /** Specifies if the chart should always display full first and last data item when data is grouped to a longer period if the chart is zoomed from the beginning or end of the data.
             @default true
         */
        extendToFullPeriod?: boolean;

        /** Defines on which day week starts. 0 - Sunday, 1 - Monday...
             @default 1
         */
        firstDayOfWeek?: number;

        /** If set to true the scope of the data view will be set to the end after data update.
             @default false
         */
        glueToTheEnd?: boolean;

        /** Allows changing language easily. Note: you should include language js file from amcharts/lang or ammap/lang folder and then use variable name used in this file, like chart.language = "de". */
        language?: string;

        /** Legend settings.
             @default LegendSettings
         */
        legendSettings?: LegendSettingsConfig;

        /** You can add listeners of events using this property. Example: listeners = [{"event":"dataUpdated", "method":handleEvent}]; */
        listeners?: { event: string, method: (event: any) => void };

        /** Data set selected as main. */
        mainDataSet?: DataSetConfig;

        /** Specifies if scrolling of a chart with mouse wheel is enabled.
             @default false
         */
        mouseWheelScrollEnabled?: boolean;

        /** Array of StockPanels (charts). */
        panels?: StockPanelConfig[];

        /** Settings for stock panels.
             @default PanelsSettings
         */
        panelsSettings?: PanelsSettingsConfig;

        /** Specifies absolute or relative path to amCharts files, i.e. "amcharts/". (where all .js files are located) If relative URLs are used, they will be relative to the current web page, displaying the chart. You can also set path globally, using global JavaScript variable AmCharts_path. If this variable is set, and "path" is not set in chart config, the chart will assume the path from the global variable. This allows setting amCharts path globally. I.e.: var AmCharts_path = "/libs/amcharts/"; "path" parameter will be used by the charts to locate it's files, like images, plugins or patterns.
             @default amcharts/
         */
        path?: string;

        /** Specifies path to the folder where images like resize grips, lens and similar are. IMPORTANT: Since V3.4.12, you should use "path" to point to amCharts directory instead. The "pathToImages" will be automatically set and does not need to be in the chart config, unless you keep your images separately from other amCharts files. */
        pathToImages?: string;

        /** Period selector object. You can add it if you want user's to be able to enter date ranges or zoom chart with predefined period buttons. */
        periodSelector?: PeriodSelectorConfig;

        /** If you set it to 1 millisecond or some bigger value, chart will be built in chunks instead of all at once. This is useful if you work with a lot of data and the initial build of the chart takes a lot of time, which freezes the whole web application by not allowing other processes to do their job while the chart is busy.
             @default 0
         */
        processTimeout?: number;

        /** Read-only. Scrollbar's chart object. */
        scrollbarChart?: AmSerialChartConfig;

        /** Read-only. Current start date of the selected period. To set start/end dates, use stockChart.zoom(startDate, endDate) method. */
        startDate?: void;

        /** Settings for stock events.
             @default StockEventsSettings
         */
        stockEventsSettings?: StockEventsSettingsConfig;

        /** Read-only. Type of the chart. */
        type?: string;

        /** Settings for value axes.
             @default ValueAxesSettings
         */
        valueAxesSettings?: ValueAxesSettingsConfig;

        /** Specifies whether the chart should zoom-out when main data set is changed.
             @default false
         */
        zoomOutOnDataSetChange?: boolean;
    }


    /** AmStockChart is a main class Stock chart. */
    class AmStockChart {

        /** Specifies, if class names should be added to chart elements.
             @default false
         */
        addClassNames: boolean;

        /** AmExport object. */
        amExport: any /* undocumented type */;

        /** Specifies if animation was already played. Animation is only played once, when chart is rendered for the first time. If you want the animation to be repeated, set this property to false. */
        animationPlayed: boolean;

        /** Set this to false if you don't want chart to resize itself whenever its parent container size changes.
             @default true
         */
        autoResize: boolean;

        /** Balloon object.
             @default AmBalloon
         */
        balloon: AmBalloon;

        /** Settings for category axes.
             @default CategoryAxesSettings
         */
        categoryAxesSettings: CategoryAxesSettings;

        /** Read-only. Indicates if the chart is created. */
        chartCreated: boolean;

        /** Chart cursor settings.
             @default ChartCursorSettings
         */
        chartCursorSettings: ChartCursorSettings;

        /** Chart scrollbar settings.
             @default ChartScrollbarSettings
         */
        chartScrollbarSettings: ChartScrollbarSettings;

        /** This prefix is added to all class names which are added to all visual elements of a chart in case addClassNames is set to true.
             @default amcharts
         */
        classNamePrefix: string;

        /** Array of colors used by data sets if no color was set explicitly on data set itself.
             @default ["#FF6600", "#FCD202", "#B0DE09", "#0D8ECF", "#2A0CD0", "#CD0D74", "#CC0000", "#00CC00", "#0000CC", "#DDDDDD", "#999999", "#333333", "#990000"]
         */
        colors: string[];

        /** Array of data sets selected for comparing. */
        comparedDataSets: DataSet[];

        /** Data provider of data set can have dates as Date Objects or as Strings. In case you use strings, you need to set data date format and the chart will parse dates to date objects. Check this page for date formatting strings. Please note that two-digit years (YY) is NOT supported in this setting. */
        dataDateFormat: string;

        /** Array of DataSets. */
        dataSets: DataSet[];

        /** DataSetSelector object. You can add it if you have more than one data set and want users to be able to select/compare them. */
        dataSetSelector: DataSetSelector;

        /** Read-only. Current end date of the selected period, get only. To set start/end dates, use stockChart.zoom(startDate, endDate) method. */
        endDate: void;

        /** Export config. Specifies how export to image/data export/print/annotate menu will look and behave. You can find a lot of examples in amcharts/plugins/export folder. More details can be found here. */
        export: ExportConfig;

        /** Specifies if the chart should always display full first and last data item when data is grouped to a longer period if the chart is zoomed from the beginning or end of the data.
             @default true
         */
        extendToFullPeriod: boolean;

        /** Defines on which day week starts. 0 - Sunday, 1 - Monday...
             @default 1
         */
        firstDayOfWeek: number;

        /** If set to true the scope of the data view will be set to the end after data update.
             @default false
         */
        glueToTheEnd: boolean;

        /** Allows changing language easily. Note: you should include language js file from amcharts/lang or ammap/lang folder and then use variable name used in this file, like chart.language = "de". */
        language: string;

        /** Legend settings.
             @default LegendSettings
         */
        legendSettings: LegendSettings;

        /** You can add listeners of events using this property. Example: listeners = [{"event":"dataUpdated", "method":handleEvent}]; */
        listeners: { event: string, method: (event: any) => void };

        /** Data set selected as main. */
        mainDataSet: DataSet;

        /** Specifies if scrolling of a chart with mouse wheel is enabled.
             @default false
         */
        mouseWheelScrollEnabled: boolean;

        /** Array of StockPanels (charts). */
        panels: StockPanel[];

        /** Settings for stock panels.
             @default PanelsSettings
         */
        panelsSettings: PanelsSettings;

        /** Specifies absolute or relative path to amCharts files, i.e. "amcharts/". (where all .js files are located) If relative URLs are used, they will be relative to the current web page, displaying the chart. You can also set path globally, using global JavaScript variable AmCharts_path. If this variable is set, and "path" is not set in chart config, the chart will assume the path from the global variable. This allows setting amCharts path globally. I.e.: var AmCharts_path = "/libs/amcharts/"; "path" parameter will be used by the charts to locate it's files, like images, plugins or patterns.
             @default amcharts/
         */
        path: string;

        /** Specifies path to the folder where images like resize grips, lens and similar are. IMPORTANT: Since V3.4.12, you should use "path" to point to amCharts directory instead. The "pathToImages" will be automatically set and does not need to be in the chart config, unless you keep your images separately from other amCharts files. */
        pathToImages: string;

        /** Period selector object. You can add it if you want user's to be able to enter date ranges or zoom chart with predefined period buttons. */
        periodSelector: PeriodSelector;

        /** If you set it to 1 millisecond or some bigger value, chart will be built in chunks instead of all at once. This is useful if you work with a lot of data and the initial build of the chart takes a lot of time, which freezes the whole web application by not allowing other processes to do their job while the chart is busy.
             @default 0
         */
        processTimeout: number;

        /** Read-only. Scrollbar's chart object. */
        scrollbarChart: AmSerialChart;

        /** Read-only. Current start date of the selected period. To set start/end dates, use stockChart.zoom(startDate, endDate) method. */
        startDate: void;

        /** Settings for stock events.
             @default StockEventsSettings
         */
        stockEventsSettings: StockEventsSettings;

        /** Read-only. Type of the chart. */
        type: string;

        /** Settings for value axes.
             @default ValueAxesSettings
         */
        valueAxesSettings: ValueAxesSettings;

        /** Read-only. Indicates current version of a script. */
        version: string;

        /** Specifies whether the chart should zoom-out when main data set is changed.
             @default false
         */
        zoomOutOnDataSetChange: boolean;

        /** Fired just before the chart starts to build itself for the first time. Note: you might need to set processTimeout to &gt; 0 value in order to register this event properly. */
        addListener(type: "buildStarted", handler: (event: { type: any, chart: AmStockChart }) => void): void;

        /** Dispatched when the user clicks on the Stock event (bullet). */
        addListener(type: "clickStockEvent", handler: (event: { type: any, eventObject: StockEvent, graph: AmGraph, date: Date, chart: AmStockChart }) => void): void;

        /** Dispatched when the chart was updated with new data. */
        addListener(type: "dataUpdated", handler: (event: { type: any, chart: AmStockChart }) => void): void;

        /** Dispatched when the chart is initialized for the first time. In case you want it to fire again after validateNow() method is called, set chart.chartCreated = false. */
        addListener(type: "init", handler: (event: { type: any, chart: AmStockChart }) => void): void;

        /** Dispatched when the StockPanel is removed. */
        addListener(type: "panelRemoved", handler: (event: { type: any, panel: StockPanel, chart: AmStockChart }) => void): void;

        /** Dispatched each when chart is rendered. */
        addListener(type: "rendered", handler: (event: { type: any, chart: AmStockChart }) => void): void;

        /** Dispatched when the user rolls-out of the Stock event (bullet). */
        addListener(type: "rollOutStockEvent", handler: (event: { type: any, eventObject: StockEvent, graph: AmGraph, date: Date, chart: AmStockChart }) => void): void;

        /** Dispatched when the user rolls-over the Stock event (bullet). */
        addListener(type: "rollOverStockEvent", handler: (event: { type: any, eventObject: StockEvent, graph: AmGraph, date: Date, chart: AmStockChart }) => void): void;

        /** Dispatched when the chart is zoomed (even for the first time, when chart is initialized). */
        addListener(type: "zoomed", handler: (event: { type: any, startDate: Date, endDate: Date, period: string, chart: AmStockChart }) => void): void;

        /** Adds event listener to the object. */
        addListener(type: string, handler: (event: any) => void): void;

        /** Adds panel to the stock chart. Requires stockChart.validateNow() method to be called after this action. */
        addPanel(panel: any): void;

        /** Adds panel to the stock chart at a specified index. Requires stockChart.validateNow() method to be called after this action. */
        addPanelAt(panel: any, index: number): void;

        /** Destroys chart, all timeouts and listeners. */
        clear(): void;

        /** Hides event bullets. */
        hideStockEvents(): void;

        /** Removes event listener from the object. */
        removeListener(obj: any, type: string, handler: (event: any) => void): void;

        /** Removes panel from the stock chart. Requires stockChart.validateNow() method to be called after this action. */
        removePanel(panel: any): void;

        /** Shows event bullets. */
        showStockEvents(): void;

        /** Method which should be called after data was changed. */
        validateData(): void;

        /** Method which forces the stock chart to rebuild. Should be called after properties are changed.This method should be called after you changed one or more properties of any class. The chart will redraw after this method is called.Both attributes, validateData and skipEvents are optional (false by default). */
        validateNow(validateData?: boolean, skipEvents?: boolean): void;

        /** Zooms chart to specified dates. */
        zoom(startDate: any, endDate: any): void;

        /** Zooms out the chart. */
        zoomOut(): void;
    }


    /** CategoryAxesSettings settings set's settings common for all CategoryAxes of StockPanels. If you change a property after the chart is initialized, you should call stockChart.validateNow() method in order for it to work. If there is no default value specified, default value of CategoryAxis class will be used. */
    interface CategoryAxesSettingsConfig {

        /** If this is set to true and groupToPeriods doesn't have CategoryAxesSettings.minPeriod value included, chart will always group values to the first period available.
             @default false
         */
        alwaysGroup?: boolean;

        /** Specifies whether number of gridCount is specified automatically, according to the axis size.
             @default true
         */
        autoGridCount?: boolean;

        /** Axis opacity.
             @default 0
         */
        axisAlpha?: number;

        /** Axis color. */
        axisColor?: string;

        /** Height of category axes. Set it to 0 if you set inside property to true.
             @default 28
         */
        axisHeight?: number;

        /** Thickness of the axis. */
        axisThickness?: number;

        /** Specifies if axis labels should be bold or not. */
        boldLabels?: boolean;

        /** When parse dates is on for the category axis, the chart will try to highlight the beginning of the periods, like month, in bold. Set this to false to disable the functionality.
             @default true
         */
        boldPeriodBeginning?: boolean;

        /** Text color. */
        color?: string;

        /** Length of a dash. */
        dashLength?: number;

        /** Date formats of different periods. Possible period values: fff - milliseconds, ss - seconds, mm - minutes, hh - hours, DD - days, MM - months, WW - weeks, YYYY - years. Check this page for date formatting strings. */
        dateFormats?: { period: string, format: string };

        /** If you want data points to be placed at equal intervals (omiting dates with no data), set equalSpacing to true.
             @default false
         */
        equalSpacing?: boolean;

        /** Fill opacity. Every second space between grid lines can be filled with fillColor. */
        fillAlpha?: number;

        /** Fill color. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills. */
        fillColor?: string;

        /** Text size. */
        fontSize?: number;

        /** Opacity of grid lines. */
        gridAlpha?: number;

        /** Color of grid lines. */
        gridColor?: string;

        /** Approximate number of grid lines. You should set autoGridCount to false in order this property not to be ignored.
             @default 10
         */
        gridCount?: number;

        /** Thickness of grid lines. */
        gridThickness?: number;

        /** Periods to which data will be gruoped in case there are more data items in the selected period than specified in maxSeries property.
             @default ["ss", "10ss", "30ss", "mm", "10mm", "30mm", "hh", "DD", "WW", "MM", "YYYY"]
         */
        groupToPeriods?: string[];

        /** Specifies whether values should be placed inside or outside of plot area.
             @default false
         */
        inside?: boolean;

        /** You can use it to adjust position of axis labels.
             @default 0
         */
        labelOffset?: number;

        /** Rotation angle of a label. */
        labelRotation?: number;

        /** Specifies whether axis displays category axis' labels and value axis' values.
             @default true
         */
        labelsEnabled?: boolean;

        /** Specifies if period period should be marked with a different date format.
             @default true
         */
        markPeriodChange?: boolean;

        /** Maximum series shown at a time. In case there are more data points in the selection than maxSeries, the chart will group data to longer periods, for example - you have 250 days in the selection, and maxSeries is 150 - the chart will group data to weeks.
             @default 150
         */
        maxSeries?: number;

        /** This property is used when calculating grid count. It specifies minimum cell width required for one span between grid lines.
             @default 75
         */
        minHorizontalGap?: number;

        /** Opacity of minor grid. In order minor to be visible, you should set minorGridEnabled to true. */
        minorGridAlpha?: number;

        /** Specifies if minor grid should be displayed. NOTE: If equalSpacing is set to true, this setting will be ignored. */
        minorGridEnabled?: boolean;

        /** Specifies the shortest period of your data. fff - millisecond, ss - second, mm - minute, hh - hour, DD - day, MM - month, YYYY - year. It's also possible to supply a number for increments, i.e. "15mm" which will instruct the chart that your data is supplied in 15 minute increments.
             @default DD
         */
        minPeriod?: string;

        /** "top" or "bottom". */
        position?: string;

        /** Specifies whether the graph should start on axis or not. In case you display columns, it is recommended to set this to false. startOnAxis can be set to true only if equalSpacing is set to true.
             @default false
         */
        startOnAxis?: boolean;

        /** Tick length.
             @default 0
         */
        tickLength?: number;

        /** Works only when parseDates is set to true and equalSpacing is false. If you set it to true, at the position where bigger period changes, category axis will display date strings of bot small and big period, in two rows.
             @default false
         */
        twoLineMode?: boolean;
    }


    /** CategoryAxesSettings settings set's settings common for all CategoryAxes of StockPanels. If you change a property after the chart is initialized, you should call stockChart.validateNow() method in order for it to work. If there is no default value specified, default value of CategoryAxis class will be used. */
    class CategoryAxesSettings {

        /** If this is set to true and groupToPeriods doesn't have CategoryAxesSettings.minPeriod value included, chart will always group values to the first period available.
             @default false
         */
        alwaysGroup: boolean;

        /** Specifies whether number of gridCount is specified automatically, according to the axis size.
             @default true
         */
        autoGridCount: boolean;

        /** Axis opacity.
             @default 0
         */
        axisAlpha: number;

        /** Axis color. */
        axisColor: string;

        /** Height of category axes. Set it to 0 if you set inside property to true.
             @default 28
         */
        axisHeight: number;

        /** Thickness of the axis. */
        axisThickness: number;

        /** Specifies if axis labels should be bold or not. */
        boldLabels: boolean;

        /** When parse dates is on for the category axis, the chart will try to highlight the beginning of the periods, like month, in bold. Set this to false to disable the functionality.
             @default true
         */
        boldPeriodBeginning: boolean;

        /** Text color. */
        color: string;

        /** Length of a dash. */
        dashLength: number;

        /** Date formats of different periods. Possible period values: fff - milliseconds, ss - seconds, mm - minutes, hh - hours, DD - days, MM - months, WW - weeks, YYYY - years. Check this page for date formatting strings. */
        dateFormats: { period: string, format: string };

        /** If you want data points to be placed at equal intervals (omiting dates with no data), set equalSpacing to true.
             @default false
         */
        equalSpacing: boolean;

        /** Fill opacity. Every second space between grid lines can be filled with fillColor. */
        fillAlpha: number;

        /** Fill color. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills. */
        fillColor: string;

        /** Text size. */
        fontSize: number;

        /** Opacity of grid lines. */
        gridAlpha: number;

        /** Color of grid lines. */
        gridColor: string;

        /** Approximate number of grid lines. You should set autoGridCount to false in order this property not to be ignored.
             @default 10
         */
        gridCount: number;

        /** Thickness of grid lines. */
        gridThickness: number;

        /** Periods to which data will be gruoped in case there are more data items in the selected period than specified in maxSeries property.
             @default ["ss", "10ss", "30ss", "mm", "10mm", "30mm", "hh", "DD", "WW", "MM", "YYYY"]
         */
        groupToPeriods: string[];

        /** Specifies whether values should be placed inside or outside of plot area.
             @default false
         */
        inside: boolean;

        /** You can use it to adjust position of axis labels.
             @default 0
         */
        labelOffset: number;

        /** Rotation angle of a label. */
        labelRotation: number;

        /** Specifies whether axis displays category axis' labels and value axis' values.
             @default true
         */
        labelsEnabled: boolean;

        /** Specifies if period period should be marked with a different date format.
             @default true
         */
        markPeriodChange: boolean;

        /** Maximum series shown at a time. In case there are more data points in the selection than maxSeries, the chart will group data to longer periods, for example - you have 250 days in the selection, and maxSeries is 150 - the chart will group data to weeks.
             @default 150
         */
        maxSeries: number;

        /** This property is used when calculating grid count. It specifies minimum cell width required for one span between grid lines.
             @default 75
         */
        minHorizontalGap: number;

        /** Opacity of minor grid. In order minor to be visible, you should set minorGridEnabled to true. */
        minorGridAlpha: number;

        /** Specifies if minor grid should be displayed. NOTE: If equalSpacing is set to true, this setting will be ignored. */
        minorGridEnabled: boolean;

        /** Specifies the shortest period of your data. fff - millisecond, ss - second, mm - minute, hh - hour, DD - day, MM - month, YYYY - year. It's also possible to supply a number for increments, i.e. "15mm" which will instruct the chart that your data is supplied in 15 minute increments.
             @default DD
         */
        minPeriod: string;

        /** "top" or "bottom". */
        position: string;

        /** Specifies whether the graph should start on axis or not. In case you display columns, it is recommended to set this to false. startOnAxis can be set to true only if equalSpacing is set to true.
             @default false
         */
        startOnAxis: boolean;

        /** Tick length.
             @default 0
         */
        tickLength: number;

        /** Works only when parseDates is set to true and equalSpacing is false. If you set it to true, at the position where bigger period changes, category axis will display date strings of bot small and big period, in two rows.
             @default false
         */
        twoLineMode: boolean;
    }


    /** ChartCursorSettings settings set's settings for chart cursor. If you change a property after the chart is initialized, you should call stockChart.validateNow() method in order for it to work. If there is no default value specified, default value of ChartCursor class will be used. */
    interface ChartCursorSettingsConfig {

        /** Specifies orientation of value balloon pointer.
             @default horizontal
         */
        balloonPointerOrientation?: string;

        /** Specifies if bullet for each graph will follow the cursor. */
        bulletsEnabled?: boolean;

        /** Size of bullets, following the cursor. */
        bulletSize?: number;

        /** Opacity of the category balloon. */
        categoryBalloonAlpha?: number;

        /** Color of the category balloon. */
        categoryBalloonColor?: string;

        /** Array of date format objects. Date format object must have "period" and "format" items. Available periods are: fff - millisecond, ss - second, mm - minute, hh - hour, DD - date, WW - week, MM - month, YYYY - year.
             @default [{period:"YYYY", format:"YYYY"}, {period:"MM", format:"MMM, YYYY"}, {period:"WW", format:"MMM DD, YYYY"}, {period:"DD", format:"MMM DD, YYYY"}, {period:"hh", format:"JJ:NN"}, {period:"mm", format:"JJ:NN"}, {period:"ss", format:"JJ:NN:SS"}, {period:"fff", format:"JJ:NN:SS"}]
         */
        categoryBalloonDateFormats?: any[];

        /** Specifies whether category balloon is enabled. */
        categoryBalloonEnabled?: boolean;

        /** Allows formatting any category balloon text you want. categoryBalloonFunction should return a string which will be displayed in a balloon. When categoryBalloonFunction is called, category value (or date) is passed as an argument. */
        categoryBalloonFunction?: Function;

        /** You can have [[category]] - [[toCategory]] tags in there and show category ranges this way.
             @default [[category]]
         */
        categoryBalloonText?: string;

        /** Text color.
             @default #FFFFFF
         */
        color?: string;

        /** Opacity of the cursor line. */
        cursorAlpha?: number;

        /** Color of the cursor line. */
        cursorColor?: string;

        /** Possible values: start, middle, mouse. */
        cursorPosition?: "start" | "middle" | "mouse";

        /** Set this to "false" if you don't want chart cursor to appear in your charts.
             @default true
         */
        enabled?: boolean;

        /** If set to true, instead of a cursor line user will see a fill which width will always be equal to the width of one data item. We'd recommend setting cursorAlpha to 0.1 or some other small number if using this feature.
             @default false
         */
        fullWidth?: boolean;

        /** Size of a graph's bullet (if available) at the cursor position. If you don't want the bullet to change it's size, set this property to 1.
             @default 1.7
         */
        graphBulletSize?: number;

        /** his makes cursor and balloons to remain after user touches the chart.
             @default true
         */
        leaveAfterTouch?: boolean;

        /** Specifies if cursor should be left at it's last position. Useful for touch devices - user might want to see the balloons after he moves finger away.
             @default false
         */
        leaveCursor?: boolean;

        /** If you set this to true, Stock Chart will display value balloons on currently hovered panel only.
             @default false
         */
        onePanelOnly?: boolean;

        /** If this is set to true, the user will be able to pan the chart instead of zooming. */
        pan?: boolean;

        /** Specifies if cursor should only mark selected area but not zoom-in after user releases mouse button.
             @default false
         */
        selectWithoutZooming?: boolean;

        /** If true, the graph will display balloon on next available data point if currently hovered item doesn't have value for this graph.
             @default false
         */
        showNextAvailable?: boolean;

        /** Specifies whether value balloons are enabled. In case they are not, the balloons might be displayed anyway, when the user rolls-over the column or bullet.
             @default false
         */
        valueBalloonsEnabled?: boolean;

        /** Opacity of value line. Will use cursorAlpha value if not set. */
        valueLineAlpha?: number;

        /** Specifies if value balloon next to value axis labels should be displayed. If you have more than one axis, set valueLineAxis property of ChartCursor to indicate which axis should display the balloon.
             @default false
         */
        valueLineBalloonEnabled?: boolean;

        /** Specifies if cursor of Serial chart should display horizontal (or vertical if chart is rotated) line. This line might help users to compare distant values of a chart. You can also enable value balloon on this line by setting valueLineAxis property of ChartCursor.
             @default false
         */
        valueLineEnabled?: boolean;

        /** Specifies if the user can zoom-in the chart. If pan is set to true, zoomable is switched to false automatically. */
        zoomable?: boolean;
    }


    /** ChartCursorSettings settings set's settings for chart cursor. If you change a property after the chart is initialized, you should call stockChart.validateNow() method in order for it to work. If there is no default value specified, default value of ChartCursor class will be used. */
    class ChartCursorSettings {

        /** Specifies orientation of value balloon pointer.
             @default horizontal
         */
        balloonPointerOrientation: string;

        /** Specifies if bullet for each graph will follow the cursor. */
        bulletsEnabled: boolean;

        /** Size of bullets, following the cursor. */
        bulletSize: number;

        /** Opacity of the category balloon. */
        categoryBalloonAlpha: number;

        /** Color of the category balloon. */
        categoryBalloonColor: string;

        /** Array of date format objects. Date format object must have "period" and "format" items. Available periods are: fff - millisecond, ss - second, mm - minute, hh - hour, DD - date, WW - week, MM - month, YYYY - year.
             @default [{period:"YYYY", format:"YYYY"}, {period:"MM", format:"MMM, YYYY"}, {period:"WW", format:"MMM DD, YYYY"}, {period:"DD", format:"MMM DD, YYYY"}, {period:"hh", format:"JJ:NN"}, {period:"mm", format:"JJ:NN"}, {period:"ss", format:"JJ:NN:SS"}, {period:"fff", format:"JJ:NN:SS"}]
         */
        categoryBalloonDateFormats: any[];

        /** Specifies whether category balloon is enabled. */
        categoryBalloonEnabled: boolean;

        /** Allows formatting any category balloon text you want. categoryBalloonFunction should return a string which will be displayed in a balloon. When categoryBalloonFunction is called, category value (or date) is passed as an argument. */
        categoryBalloonFunction: Function;

        /** You can have [[category]] - [[toCategory]] tags in there and show category ranges this way.
             @default [[category]]
         */
        categoryBalloonText: string;

        /** Text color.
             @default #FFFFFF
         */
        color: string;

        /** Opacity of the cursor line. */
        cursorAlpha: number;

        /** Color of the cursor line. */
        cursorColor: string;

        /** Possible values: start, middle, mouse. */
        cursorPosition: "start" | "middle" | "mouse";

        /** Set this to "false" if you don't want chart cursor to appear in your charts.
             @default true
         */
        enabled: boolean;

        /** If set to true, instead of a cursor line user will see a fill which width will always be equal to the width of one data item. We'd recommend setting cursorAlpha to 0.1 or some other small number if using this feature.
             @default false
         */
        fullWidth: boolean;

        /** Size of a graph's bullet (if available) at the cursor position. If you don't want the bullet to change it's size, set this property to 1.
             @default 1.7
         */
        graphBulletSize: number;

        /** his makes cursor and balloons to remain after user touches the chart.
             @default true
         */
        leaveAfterTouch: boolean;

        /** Specifies if cursor should be left at it's last position. Useful for touch devices - user might want to see the balloons after he moves finger away.
             @default false
         */
        leaveCursor: boolean;

        /** If you set this to true, Stock Chart will display value balloons on currently hovered panel only.
             @default false
         */
        onePanelOnly: boolean;

        /** If this is set to true, the user will be able to pan the chart instead of zooming. */
        pan: boolean;

        /** Specifies if cursor should only mark selected area but not zoom-in after user releases mouse button.
             @default false
         */
        selectWithoutZooming: boolean;

        /** If true, the graph will display balloon on next available data point if currently hovered item doesn't have value for this graph.
             @default false
         */
        showNextAvailable: boolean;

        /** Specifies whether value balloons are enabled. In case they are not, the balloons might be displayed anyway, when the user rolls-over the column or bullet.
             @default false
         */
        valueBalloonsEnabled: boolean;

        /** Opacity of value line. Will use cursorAlpha value if not set. */
        valueLineAlpha: number;

        /** Specifies if value balloon next to value axis labels should be displayed. If you have more than one axis, set valueLineAxis property of ChartCursor to indicate which axis should display the balloon.
             @default false
         */
        valueLineBalloonEnabled: boolean;

        /** Specifies if cursor of Serial chart should display horizontal (or vertical if chart is rotated) line. This line might help users to compare distant values of a chart. You can also enable value balloon on this line by setting valueLineAxis property of ChartCursor.
             @default false
         */
        valueLineEnabled: boolean;

        /** Specifies if the user can zoom-in the chart. If pan is set to true, zoomable is switched to false automatically. */
        zoomable: boolean;
    }


    /** ChartScrollbarSettings settings set's settings for chart scrollbar. If you change a property after the chart is initialized, you should call stockChart.validateNow() method in order for it to work. If there is no default value specified, default value of ChartScrollbar class will be used. */
    interface ChartScrollbarSettingsConfig {

        /** Specifies whether number of gridCount is specified automatically, according to the axis size.
             @default true
         */
        autoGridCount?: boolean;

        /** Background opacity. */
        backgroundAlpha?: number;

        /** Background color of the scrollbar. */
        backgroundColor?: string;

        /** Text color. */
        color?: string;

        /** Height of resize grip image. Note, you should also update the image in amcharts/images folder if you don't want it to be distorted because of resizing.
             @default 18
         */
        dragIconHeight?: number;

        /** Width of resize grip image. Note, you should also update the image in amcharts/images folder if you don't want it to be distorted because of resizing.
             @default 11
         */
        dragIconWidth?: number;

        /** Set false if you don't need scrollbar.
             @default true
         */
        enabled?: boolean;

        /** Font size. */
        fontSize?: number;

        /** Specifies which graph will be displayed in the scrollbar. */
        graph?: AmGraphConfig;

        /** Graph fill opacity. */
        graphFillAlpha?: number;

        /** Graph fill color. */
        graphFillColor?: string;

        /** Graph line opacity. */
        graphLineAlpha?: number;

        /** Graph line color. */
        graphLineColor?: string;

        /** Type of chart scrollbar's graph. By default the graph type is the same as the original graph's type, however in case of candlestick or ohlc you might want to show line graph in the scrollbar. Possible values are: line, column, step, smoothedLine, candlestick, ohlc. */
        graphType?: "line" | "column" | "step" | "smoothedLine" | "candlestick" | "ohlc";

        /** Grid opacity. */
        gridAlpha?: number;

        /** Grid color. */
        gridColor?: string;

        /** Grid count. You should set autoGridCount to false in order this property to work. */
        gridCount?: number;

        /** Height of scrollbar, in pixels.
             @default 40
         */
        height?: number;

        /** Specifies whether resize grips are hidden when mouse is away from the scrollbar.
             @default false
         */
        hideResizeGrips?: boolean;

        /** Specifies if category axis of scrollbar should mark period change with a different date format. */
        markPeriodChange?: boolean;

        /** Position of a scrollbar. Possible values are "top" and "bottom".
             @default bottom
         */
        position?: string;

        /** Specifies whether scrollbar has a resize feature.
             @default true
         */
        resizeEnabled?: boolean;

        /** Duration of scrolling, when the user clicks on scrollbar's background, in seconds. Note, updateOnReleaseOnly should be set to false in order animation to happen. */
        scrollDuration?: number;

        /** Selected background opacity. */
        selectedBackgroundAlpha?: number;

        /** Selected background color. */
        selectedBackgroundColor?: string;

        /** Selected graph'sfill opacity. */
        selectedGraphFillAlpha?: number;

        /** Selected graph'sfill color. */
        selectedGraphFillColor?: string;

        /** Selected graph'sline opacity. */
        selectedGraphLineAlpha?: number;

        /** Selected graph's line color. */
        selectedGraphLineColor?: string;

        /** Specifies if the chart should be updated while dragging/resizing the scrollbar or only at the moment when user releases mouse button. Usefull when working with large data sets.
             @default true
         */
        updateOnReleaseOnly?: boolean;

        /** This is very important feature for those, who work with large data sets. You can tell ChartScrollbar what period it should use for it's graph and save a lot of time for rendering of this graph. For example, if your minPeriod is "DD" (days), set usePeriod = "WW" (weeks) and you will have 7 times less data points in scrollbar's graph. Note, the period you specify here should be set in CategoryAxesSettings.groupToPeriods. */
        usePeriod?: string;
    }


    /** ChartScrollbarSettings settings set's settings for chart scrollbar. If you change a property after the chart is initialized, you should call stockChart.validateNow() method in order for it to work. If there is no default value specified, default value of ChartScrollbar class will be used. */
    class ChartScrollbarSettings {

        /** Specifies whether number of gridCount is specified automatically, according to the axis size.
             @default true
         */
        autoGridCount: boolean;

        /** Background opacity. */
        backgroundAlpha: number;

        /** Background color of the scrollbar. */
        backgroundColor: string;

        /** Text color. */
        color: string;

        /** Height of resize grip image. Note, you should also update the image in amcharts/images folder if you don't want it to be distorted because of resizing.
             @default 18
         */
        dragIconHeight: number;

        /** Width of resize grip image. Note, you should also update the image in amcharts/images folder if you don't want it to be distorted because of resizing.
             @default 11
         */
        dragIconWidth: number;

        /** Set false if you don't need scrollbar.
             @default true
         */
        enabled: boolean;

        /** Font size. */
        fontSize: number;

        /** Specifies which graph will be displayed in the scrollbar. */
        graph: AmGraph;

        /** Graph fill opacity. */
        graphFillAlpha: number;

        /** Graph fill color. */
        graphFillColor: string;

        /** Graph line opacity. */
        graphLineAlpha: number;

        /** Graph line color. */
        graphLineColor: string;

        /** Type of chart scrollbar's graph. By default the graph type is the same as the original graph's type, however in case of candlestick or ohlc you might want to show line graph in the scrollbar. Possible values are: line, column, step, smoothedLine, candlestick, ohlc. */
        graphType: "line" | "column" | "step" | "smoothedLine" | "candlestick" | "ohlc";

        /** Grid opacity. */
        gridAlpha: number;

        /** Grid color. */
        gridColor: string;

        /** Grid count. You should set autoGridCount to false in order this property to work. */
        gridCount: number;

        /** Height of scrollbar, in pixels.
             @default 40
         */
        height: number;

        /** Specifies whether resize grips are hidden when mouse is away from the scrollbar.
             @default false
         */
        hideResizeGrips: boolean;

        /** Specifies if category axis of scrollbar should mark period change with a different date format. */
        markPeriodChange: boolean;

        /** Position of a scrollbar. Possible values are "top" and "bottom".
             @default bottom
         */
        position: string;

        /** Specifies whether scrollbar has a resize feature.
             @default true
         */
        resizeEnabled: boolean;

        /** Duration of scrolling, when the user clicks on scrollbar's background, in seconds. Note, updateOnReleaseOnly should be set to false in order animation to happen. */
        scrollDuration: number;

        /** Selected background opacity. */
        selectedBackgroundAlpha: number;

        /** Selected background color. */
        selectedBackgroundColor: string;

        /** Selected graph'sfill opacity. */
        selectedGraphFillAlpha: number;

        /** Selected graph'sfill color. */
        selectedGraphFillColor: string;

        /** Selected graph'sline opacity. */
        selectedGraphLineAlpha: number;

        /** Selected graph's line color. */
        selectedGraphLineColor: string;

        /** Specifies if the chart should be updated while dragging/resizing the scrollbar or only at the moment when user releases mouse button. Usefull when working with large data sets.
             @default true
         */
        updateOnReleaseOnly: boolean;

        /** This is very important feature for those, who work with large data sets. You can tell ChartScrollbar what period it should use for it's graph and save a lot of time for rendering of this graph. For example, if your minPeriod is "DD" (days), set usePeriod = "WW" (weeks) and you will have 7 times less data points in scrollbar's graph. Note, the period you specify here should be set in CategoryAxesSettings.groupToPeriods. */
        usePeriod: string;
    }


    /** DataSet is objects which holds all information about data. */
    interface DataSetConfig {

        /** Category field name in your dataProvider. It needs to contains a date/time value. Note: we recommend using JavaScript timestamps to specify date/time. If you are specifying dates as strings in your data, i.e. "2015-01-05", we strongly recommend setting dataDateFormat as well. */
        categoryField?: string;

        /** Color of the data set. One of colors from AmStockChart.colors array will be used if not set. */
        color?: string;

        /** Whether this data set is selected for comparing. If you change this property, you should call stockChart.validateData() method in order the changes to be applied.
             @default false
         */
        compared?: boolean;

        /** The data set data. Important: the data sets need to come pre-ordered in ascending order. Data with incorrect order might result in visual and functional glitches on the chart. */
        dataProvider?: any[];

        /** Array of field mappings. Field mapping is an object with fromField and toField properties. fromField is a name of your value field in dataProvider. toField might be chosen freely, it will be used to set value/open/close/high/low fields for the StockGraph. Example: {fromField:"val1", toField:"value"}. */
        fieldMappings?: any[];

        /** Specifies whether this data set should be visible in "compare to" list.
             @default true
         */
        showInCompare?: boolean;

        /** Specifies whether this data set should be visible in "select" dropdown.
             @default true
         */
        showInSelect?: boolean;

        /** Array of StockEvent objects. */
        stockEvents?: StockEventConfig[];

        /** DataSet title. */
        title?: string;
    }


    /** DataSet is objects which holds all information about data. */
    class DataSet {

        /** Category field name in your dataProvider. It needs to contains a date/time value. Note: we recommend using JavaScript timestamps to specify date/time. If you are specifying dates as strings in your data, i.e. "2015-01-05", we strongly recommend setting dataDateFormat as well. */
        categoryField: string;

        /** Color of the data set. One of colors from AmStockChart.colors array will be used if not set. */
        color: string;

        /** Whether this data set is selected for comparing. If you change this property, you should call stockChart.validateData() method in order the changes to be applied.
             @default false
         */
        compared: boolean;

        /** The data set data. Important: the data sets need to come pre-ordered in ascending order. Data with incorrect order might result in visual and functional glitches on the chart. */
        dataProvider: any[];

        /** Array of field mappings. Field mapping is an object with fromField and toField properties. fromField is a name of your value field in dataProvider. toField might be chosen freely, it will be used to set value/open/close/high/low fields for the StockGraph. Example: {fromField:"val1", toField:"value"}. */
        fieldMappings: any[];

        /** Specifies whether this data set should be visible in "compare to" list.
             @default true
         */
        showInCompare: boolean;

        /** Specifies whether this data set should be visible in "select" dropdown.
             @default true
         */
        showInSelect: boolean;

        /** Array of StockEvent objects. */
        stockEvents: StockEvent[];

        /** DataSet title. */
        title: string;
    }


    /** DataSetSelector is a tool for selecting data set's as main and for comparing with main data set. */
    interface DataSetSelectorConfig {

        /** Text displayed in the "compare to" combobox (when position is "top" or "bottom").
             @default Select...
         */
        comboBoxSelectText?: string;

        /** Text displayed near "compare to" list.
             @default Compare to:
         */
        compareText?: string;

        /** You can add listeners of events using this property. Example: listeners = [{"event":"dataSetCompared", "method":handleEvent}]; */
        listeners?: { event: string, method: (event: any) => void };

        /** The maximum height of the Compare to field in pixels.
             @default 150
         */
        listHeight?: number;

        /** Possible values: "right", "left", "top", "bottom". "top" and "bottom" positions has a limitation - only one data set can be selected for comparing.
             @default right, left, top, bottom
         */
        position?: "right" | "left" | "top" | "bottom";

        /** Text displayed near "Select" dropDown.
             @default Select:
         */
        selectText?: string;

        /** Width of a Data set selector, when position is "left" or "right".
             @default 180
         */
        width?: number;
    }


    /** DataSetSelector is a tool for selecting data set's as main and for comparing with main data set. */
    class DataSetSelector {

        /** Text displayed in the "compare to" combobox (when position is "top" or "bottom").
             @default Select...
         */
        comboBoxSelectText: string;

        /** Text displayed near "compare to" list.
             @default Compare to:
         */
        compareText: string;

        /** You can add listeners of events using this property. Example: listeners = [{"event":"dataSetCompared", "method":handleEvent}]; */
        listeners: { event: string, method: (event: any) => void };

        /** The maximum height of the Compare to field in pixels.
             @default 150
         */
        listHeight: number;

        /** Possible values: "right", "left", "top", "bottom". "top" and "bottom" positions has a limitation - only one data set can be selected for comparing.
             @default right, left, top, bottom
         */
        position: "right" | "left" | "top" | "bottom";

        /** Text displayed near "Select" dropDown.
             @default Select:
         */
        selectText: string;

        /** Width of a Data set selector, when position is "left" or "right".
             @default 180
         */
        width: number;

        /** Dispatched when the data set is selected for comparing. */
        addListener(type: "dataSetCompared", handler: (event: { type: any, dataSet: DataSet }) => void): void;

        /** Dispatched when the main data set is changed. */
        addListener(type: "dataSetSelected", handler: (event: { type: any, dataSet: DataSet }) => void): void;

        /** Dispatched when the data set which was selected for comparing is unselected. */
        addListener(type: "dataSetUncompared", handler: (event: { type: any, dataSet: DataSet }) => void): void;

        /** Adds event listener to the object. */
        addListener(type: string, handler: (event: any) => void): void;

        /** Removes event listener from the object. */
        removeListener(obj: any, type: string, handler: (event: any) => void): void;
    }


    /** Common settings of legends. If you change a property after the chart is initialized, you should call stockChart.validateNow() method in order for it to work. If there is no default value specified, default value of StockLegend class will be used. */
    interface LegendSettingsConfig {

        /** Alignment of legend entries. Possible values are: "left", "right" and "center". */
        align?: "left" | "right" | "center";

        /** Specifies if each legend entry should take the same space as the longest legend entry.
             @default false
         */
        equalWidths?: boolean;

        /** Horizontal space between legend item and left/right border. */
        horizontalGap?: number;

        /** The text which will be displayed in the legend. Tag [[title]] will be replaced with the title of the graph. */
        labelText?: string;

        /** Space below the last row of the legend, in pixels.
             @default 0
         */
        marginBottom?: number;

        /** Space above the first row of the legend, in pixels.
             @default 0
         */
        marginTop?: number;

        /** Opacity of marker border. */
        markerBorderAlpha?: number;

        /** Marker border color. */
        markerBorderColor?: string;

        /** Thickness of the legend border. */
        markerBorderThickness?: number;

        /** The color of the disabled marker (when the graph is hidden). */
        markerDisabledColor?: string;

        /** Space between legend marker and legend text, in pixels. */
        markerLabelGap?: number;

        /** Size of the legend marker (key). */
        markerSize?: number;

        /** Shape of the legend marker (key). Possible values are: square, circle, diamond, triangleUp, triangleDown, triangleLeft, triangleDown, bubble, none */
        markerType?: "square" | "circle" | "diamond" | "triangleUp" | "triangleDown" | "triangleLeft" | "triangleDown" | "bubble" | "none";

        /** Position of legend in panels. Possible values are: "bottom" and "top". */
        position?: "bottom" | "top";

        /** Specifies whether legend entries should be placed in reversed order. */
        reversedOrder?: boolean;

        /** Legend item text color on roll-over. */
        rollOverColor?: string;

        /** When you roll-over the legend entry, all other graphs can reduce their opacity, so that the graph you rolled-over would be distinguished. This property specifies the opacity of the graphs. */
        rollOverGraphAlpha?: number;

        /** Whether showing/hiding of graphs by clicking on the legend marker is enabled or not. */
        switchable?: boolean;

        /** Legend switch color. */
        switchColor?: string;

        /** Legend switch type (in case the legend is switchable). Possible values are: "x" and "v". */
        switchType?: "x" | "v";

        /** Specifies whether the legend text is clickable or not. Clicking on legend text can show/hide value balloons if they are enabled.
             @default false
         */
        textClickEnabled?: boolean;

        /** Specifies if legend labels should be use same color as corresponding markers. */
        useMarkerColorForLabels?: boolean;

        /** The text which will be displayed in the value portion of the legend when graph is comparable and at least one dataSet is selected for comparing. You can use tags like [[value]], [[open]], [[high]], [[low]], [[close]], [[percents]], [[description]]. */
        valueTextComparing?: string;

        /** The text which will be displayed in the value portion of the legend. You can use tags like [[value]], [[open]], [[high]], [[low]], [[close]], [[percents]], [[description]]. */
        valueTextRegular?: string;

        /** Width of the value text. Increase this value if your values do not fit in the allocated space. */
        valueWidth?: number;

        /** Vertical space between legend items, in pixels. */
        verticalGap?: number;
    }


    /** Common settings of legends. If you change a property after the chart is initialized, you should call stockChart.validateNow() method in order for it to work. If there is no default value specified, default value of StockLegend class will be used. */
    class LegendSettings {

        /** Alignment of legend entries. Possible values are: "left", "right" and "center". */
        align: "left" | "right" | "center";

        /** Specifies if each legend entry should take the same space as the longest legend entry.
             @default false
         */
        equalWidths: boolean;

        /** Horizontal space between legend item and left/right border. */
        horizontalGap: number;

        /** The text which will be displayed in the legend. Tag [[title]] will be replaced with the title of the graph. */
        labelText: string;

        /** Space below the last row of the legend, in pixels.
             @default 0
         */
        marginBottom: number;

        /** Space above the first row of the legend, in pixels.
             @default 0
         */
        marginTop: number;

        /** Opacity of marker border. */
        markerBorderAlpha: number;

        /** Marker border color. */
        markerBorderColor: string;

        /** Thickness of the legend border. */
        markerBorderThickness: number;

        /** The color of the disabled marker (when the graph is hidden). */
        markerDisabledColor: string;

        /** Space between legend marker and legend text, in pixels. */
        markerLabelGap: number;

        /** Size of the legend marker (key). */
        markerSize: number;

        /** Shape of the legend marker (key). Possible values are: square, circle, diamond, triangleUp, triangleDown, triangleLeft, triangleDown, bubble, none */
        markerType: "square" | "circle" | "diamond" | "triangleUp" | "triangleDown" | "triangleLeft" | "triangleDown" | "bubble" | "none";

        /** Position of legend in panels. Possible values are: "bottom" and "top". */
        position: "bottom" | "top";

        /** Specifies whether legend entries should be placed in reversed order. */
        reversedOrder: boolean;

        /** Legend item text color on roll-over. */
        rollOverColor: string;

        /** When you roll-over the legend entry, all other graphs can reduce their opacity, so that the graph you rolled-over would be distinguished. This property specifies the opacity of the graphs. */
        rollOverGraphAlpha: number;

        /** Whether showing/hiding of graphs by clicking on the legend marker is enabled or not. */
        switchable: boolean;

        /** Legend switch color. */
        switchColor: string;

        /** Legend switch type (in case the legend is switchable). Possible values are: "x" and "v". */
        switchType: "x" | "v";

        /** Specifies whether the legend text is clickable or not. Clicking on legend text can show/hide value balloons if they are enabled.
             @default false
         */
        textClickEnabled: boolean;

        /** Specifies if legend labels should be use same color as corresponding markers. */
        useMarkerColorForLabels: boolean;

        /** The text which will be displayed in the value portion of the legend when graph is comparable and at least one dataSet is selected for comparing. You can use tags like [[value]], [[open]], [[high]], [[low]], [[close]], [[percents]], [[description]]. */
        valueTextComparing: string;

        /** The text which will be displayed in the value portion of the legend. You can use tags like [[value]], [[open]], [[high]], [[low]], [[close]], [[percents]], [[description]]. */
        valueTextRegular: string;

        /** Width of the value text. Increase this value if your values do not fit in the allocated space. */
        valueWidth: number;

        /** Vertical space between legend items, in pixels. */
        verticalGap: number;
    }


    /** PanelsSettings settings set's settings for all StockPanels. If you change a property after the chart is initialized, you should call stockChart.validateNow() method in order for it to work. If there is no default value specified, default value of StockPanel class will be used. */
    interface PanelsSettingsConfig {

        /** The angle of the 3D part of plot area. This creates a 3D effect (if the "depth3D" is &gt; 0). */
        angle?: number;

        /** Opacity of panel background. Possible values are 1 and 0. Values like 0.5 will not make it half-transparent.
             @default 0
         */
        backgroundAlpha?: number;

        /** Background color of panels. Set backgroundAlpha to &gt; 0 value in order to make background visible.
             @default #FFFFFF
         */
        backgroundColor?: string;

        /** The gap in pixels between two columns of the same category. */
        columnSpacing?: number;

        /** Relative width of columns. Valid values 0 - 1. */
        columnWidth?: number;

        /** Position of amCharts link (free version only). Possible values are: top-left. top-right, bottom-left, bottom-right You can adjust the position of amcharts link so that it would not overlap with contents of your chart.
             @default top-right
         */
        creditsPosition?: string;

        /** Separator of decimal values. */
        decimalSeparator?: number | string;

        /** The depth of the 3D part of plot area. This creates a 3D effect (if the "angle" is &gt; 0). */
        depth3D?: number;

        /** Font family. */
        fontFamily?: string;

        /** Font size. */
        fontSize?: string;

        /** Number of pixels between the container's bottom border and plot area.
             @default 0
         */
        marginBottom?: number;

        /** Number of pixels between the container's left border and plot area. If your left valueAxis values ar not placed inside the plot area, you should set marginLeft to 80 or some close value.
             @default 0
         */
        marginLeft?: number;

        /** Number of pixels between the container's left border and plot area. If your right valueAxis values ar not placed inside the plot area, you should set marginRight to 80 or some close value.
             @default 0
         */
        marginRight?: number;

        /** Number of pixels between the container's top border and plot area.
             @default 0
         */
        marginTop?: number;

        /** The longest time span allowed to select (in milliseconds) for example, 259200000 will limit selection to 3 days. Works if equalSpacing is set to false (default). */
        maxSelectedTime?: number;

        /** The shortest time span allowed to select (in milliseconds) for example, 1000 will limit selection to 1 second. Works if equalSpacing is set to false (default).
             @default 0
         */
        minSelectedTime?: number;

        /** Gap between panels.
             @default 8
         */
        panelSpacing?: number;

        /** This setting affects touch-screen devices only. If a chart is on a page, and panEventsEnabled are set to true, the page won't move if the user touches the chart first. If a chart is big enough and occupies all the screen of your touch device, the user won’t be able to move the page at all. That's why the default value is "false". If you think that selecting or or panning the chart is a primary purpose of your chart users, you should set panEventsEnabled to true.
             @default false
         */
        panEventsEnabled?: boolean;

        /** Precision of percent values. */
        percentPrecision?: number;

        /** The opacity of plot area's border. */
        plotAreaBorderAlpha?: number;

        /** The color of the plot area's border. */
        plotAreaBorderColor?: string;

        /** Opacity of plot area fill. */
        plotAreaFillAlphas?: number;

        /** Specifies the colors used to tint the background gradient fill of the plot area. */
        plotAreaFillColors?: string[];

        /** Precision of values. -1 means values will not be rounded and shown as they are. */
        precision?: number;

        /** Prefixes which are used to make big numbers shorter: 2M instead of 2000000, etc. Prefixes are used on value axes and in the legend. To enable prefixes, set usePrefixes property to true.
             @default [{number:1e+3,prefix:"k"},{number:1e+6,prefix:"M"},{number:1e+9,prefix:"G"},{number:1e+12,prefix:"T"},{number:1e+15,prefix:"P"},{number:1e+18,prefix:"E"},{number:1e+21,prefix:"Z"},{number:1e+24,prefix:"Y"}]
         */
        prefixesOfBigNumbers?: any[];

        /** Prefixes which are used to make small numbers shorter: 2μ instead of 0.000002, etc. Prefixes are used on value axes and in the legend. To enable prefixes, set usePrefixes property to true.
             @default [{number:1e-24, prefix:"y"},{number:1e-21, prefix:"z"},{number:1e-18, prefix:"a"},{number:1e-15, prefix:"f"},{number:1e-12, prefix:"p"},{number:1e-9, prefix:"n"},{number:1e-6, prefix:"μ"},{number:1e-3, prefix:"m"}]
         */
        prefixesOfSmallNumbers?: any[];

        /** Specifies when values should be recalculated to percents. Possible values are: "never", "always", "whenComparing".
             @default whenComparing
         */
        recalculateToPercents?: string;

        /** Specifies whether the animation should be sequenced or all objects should appear at once. */
        sequencedAnimation?: boolean;

        /** The initial opacity of the column/line. If you set startDuration to a value higher than 0, the columns/lines will fade in from startAlpha. */
        startAlpha?: number;

        /** Duration of the animation, in seconds. */
        startDuration?: number;

        /** Possible values are: easeOutSine, easeInSine, elastic, bounce */
        startEffect?: "easeOutSine" | "easeInSine" | "elastic" | "bounce";

        /** Specifies if panels and scrollbar should use svg icons instead of png.
             @default true
         */
        svgIcons?: boolean;

        /** Separator of thousand values. */
        thousandsSeparator?: number | string;

        /** If true, prefixes will be used for big and small numbers. */
        usePrefixes?: boolean;

        /** Specifies if zoomed-in value axes should be zoomed-out when user changes selected period with PeriodSelector.
             @default true
         */
        zoomOutAxes?: boolean;
    }


    /** PanelsSettings settings set's settings for all StockPanels. If you change a property after the chart is initialized, you should call stockChart.validateNow() method in order for it to work. If there is no default value specified, default value of StockPanel class will be used. */
    class PanelsSettings {

        /** The angle of the 3D part of plot area. This creates a 3D effect (if the "depth3D" is &gt; 0). */
        angle: number;

        /** Opacity of panel background. Possible values are 1 and 0. Values like 0.5 will not make it half-transparent.
             @default 0
         */
        backgroundAlpha: number;

        /** Background color of panels. Set backgroundAlpha to &gt; 0 value in order to make background visible.
             @default #FFFFFF
         */
        backgroundColor: string;

        /** The gap in pixels between two columns of the same category. */
        columnSpacing: number;

        /** Relative width of columns. Valid values 0 - 1. */
        columnWidth: number;

        /** Position of amCharts link (free version only). Possible values are: top-left. top-right, bottom-left, bottom-right You can adjust the position of amcharts link so that it would not overlap with contents of your chart.
             @default top-right
         */
        creditsPosition: string;

        /** Separator of decimal values. */
        decimalSeparator: number | string;

        /** The depth of the 3D part of plot area. This creates a 3D effect (if the "angle" is &gt; 0). */
        depth3D: number;

        /** Font family. */
        fontFamily: string;

        /** Font size. */
        fontSize: string;

        /** Number of pixels between the container's bottom border and plot area.
             @default 0
         */
        marginBottom: number;

        /** Number of pixels between the container's left border and plot area. If your left valueAxis values ar not placed inside the plot area, you should set marginLeft to 80 or some close value.
             @default 0
         */
        marginLeft: number;

        /** Number of pixels between the container's left border and plot area. If your right valueAxis values ar not placed inside the plot area, you should set marginRight to 80 or some close value.
             @default 0
         */
        marginRight: number;

        /** Number of pixels between the container's top border and plot area.
             @default 0
         */
        marginTop: number;

        /** The longest time span allowed to select (in milliseconds) for example, 259200000 will limit selection to 3 days. Works if equalSpacing is set to false (default). */
        maxSelectedTime: number;

        /** The shortest time span allowed to select (in milliseconds) for example, 1000 will limit selection to 1 second. Works if equalSpacing is set to false (default).
             @default 0
         */
        minSelectedTime: number;

        /** Gap between panels.
             @default 8
         */
        panelSpacing: number;

        /** This setting affects touch-screen devices only. If a chart is on a page, and panEventsEnabled are set to true, the page won't move if the user touches the chart first. If a chart is big enough and occupies all the screen of your touch device, the user won’t be able to move the page at all. That's why the default value is "false". If you think that selecting or or panning the chart is a primary purpose of your chart users, you should set panEventsEnabled to true.
             @default false
         */
        panEventsEnabled: boolean;

        /** Precision of percent values. */
        percentPrecision: number;

        /** The opacity of plot area's border. */
        plotAreaBorderAlpha: number;

        /** The color of the plot area's border. */
        plotAreaBorderColor: string;

        /** Opacity of plot area fill. */
        plotAreaFillAlphas: number;

        /** Specifies the colors used to tint the background gradient fill of the plot area. */
        plotAreaFillColors: string[];

        /** Precision of values. -1 means values will not be rounded and shown as they are. */
        precision: number;

        /** Prefixes which are used to make big numbers shorter: 2M instead of 2000000, etc. Prefixes are used on value axes and in the legend. To enable prefixes, set usePrefixes property to true.
             @default [{number:1e+3,prefix:"k"},{number:1e+6,prefix:"M"},{number:1e+9,prefix:"G"},{number:1e+12,prefix:"T"},{number:1e+15,prefix:"P"},{number:1e+18,prefix:"E"},{number:1e+21,prefix:"Z"},{number:1e+24,prefix:"Y"}]
         */
        prefixesOfBigNumbers: any[];

        /** Prefixes which are used to make small numbers shorter: 2μ instead of 0.000002, etc. Prefixes are used on value axes and in the legend. To enable prefixes, set usePrefixes property to true.
             @default [{number:1e-24, prefix:"y"},{number:1e-21, prefix:"z"},{number:1e-18, prefix:"a"},{number:1e-15, prefix:"f"},{number:1e-12, prefix:"p"},{number:1e-9, prefix:"n"},{number:1e-6, prefix:"μ"},{number:1e-3, prefix:"m"}]
         */
        prefixesOfSmallNumbers: any[];

        /** Specifies when values should be recalculated to percents. Possible values are: "never", "always", "whenComparing".
             @default whenComparing
         */
        recalculateToPercents: string;

        /** Specifies whether the animation should be sequenced or all objects should appear at once. */
        sequencedAnimation: boolean;

        /** The initial opacity of the column/line. If you set startDuration to a value higher than 0, the columns/lines will fade in from startAlpha. */
        startAlpha: number;

        /** Duration of the animation, in seconds. */
        startDuration: number;

        /** Possible values are: easeOutSine, easeInSine, elastic, bounce */
        startEffect: "easeOutSine" | "easeInSine" | "elastic" | "bounce";

        /** Specifies if panels and scrollbar should use svg icons instead of png.
             @default true
         */
        svgIcons: boolean;

        /** Separator of thousand values. */
        thousandsSeparator: number | string;

        /** If true, prefixes will be used for big and small numbers. */
        usePrefixes: boolean;

        /** Specifies if zoomed-in value axes should be zoomed-out when user changes selected period with PeriodSelector.
             @default true
         */
        zoomOutAxes: boolean;
    }


    /** PeriodSelector displays date input fields and predefined period buttons. */
    interface PeriodSelectorConfig {

        /** Date format of date input fields. Check this page for possible codes. Note, only numeric date formats are allowed, so don't use MMM or MMMM month format. Please note that two-digit years (YY) is NOT supported in this setting.
             @default DD-MM-YYYY
         */
        dateFormat?: string;

        /** Text displayed next to "from" date input field.
             @default From:
         */
        fromText?: string;

        /** Specifies if period buttons with date range bigger than available data should be hidden.
             @default true
         */
        hideOutOfScopePeriods?: boolean;

        /** Specifies whether period selector displays "from" and "to" date input fields.
             @default true
         */
        inputFieldsEnabled?: boolean;

        /** Width of date input fields, in pixels. Works only if period selector is horizontal.
             @default 100
         */
        inputFieldWidth?: number;

        /** You can add listeners of events using this property. Example: listeners = [{"event":"changed", "method":handleEvent}]; */
        listeners?: { event: string, method: (event: any) => void };

        /** Array of predefined period objects. Period object has 4 properties - period, count, label and selected. Possible period values are: "ss" - seconds, "mm" - minutes, "hh" - hours, "DD" - days, "MM" - months and "YYYY" - years. property "count" specifies how many periods this button will select. "label" will be displayed on a button and "selected" is a boolean which specifies if this button is selected when chart is initialized or not. Example: {period:"DD", count:10, label:"10 days", selected:false}. */
        periods?: any[];

        /** Text displayed next to predefined period buttons.
             @default Zoom:
         */
        periodsText?: string;

        /** Possible values: "right", "left", "top", "bottom".
             @default bottom
         */
        position?: "right" | "left" | "top" | "bottom";

        /** Specifies whether predefined period buttons should select a period from the beginning or the end of the data.
             @default false
         */
        selectFromStart?: boolean;

        /** Text displayed next to "to" date input field.
             @default To:
         */
        toText?: string;

        /** Width of a period selector, when position is "left" or "right".
             @default 180
         */
        width?: number;
    }


    /** PeriodSelector displays date input fields and predefined period buttons. */
    class PeriodSelector {

        /** Date format of date input fields. Check this page for possible codes. Note, only numeric date formats are allowed, so don't use MMM or MMMM month format. Please note that two-digit years (YY) is NOT supported in this setting.
             @default DD-MM-YYYY
         */
        dateFormat: string;

        /** Text displayed next to "from" date input field.
             @default From:
         */
        fromText: string;

        /** Specifies if period buttons with date range bigger than available data should be hidden.
             @default true
         */
        hideOutOfScopePeriods: boolean;

        /** Specifies whether period selector displays "from" and "to" date input fields.
             @default true
         */
        inputFieldsEnabled: boolean;

        /** Width of date input fields, in pixels. Works only if period selector is horizontal.
             @default 100
         */
        inputFieldWidth: number;

        /** You can add listeners of events using this property. Example: listeners = [{"event":"changed", "method":handleEvent}]; */
        listeners: { event: string, method: (event: any) => void };

        /** Array of predefined period objects. Period object has 4 properties - period, count, label and selected. Possible period values are: "ss" - seconds, "mm" - minutes, "hh" - hours, "DD" - days, "MM" - months and "YYYY" - years. property "count" specifies how many periods this button will select. "label" will be displayed on a button and "selected" is a boolean which specifies if this button is selected when chart is initialized or not. Example: {period:"DD", count:10, label:"10 days", selected:false}. */
        periods: any[];

        /** Text displayed next to predefined period buttons.
             @default Zoom:
         */
        periodsText: string;

        /** Possible values: "right", "left", "top", "bottom".
             @default bottom
         */
        position: "right" | "left" | "top" | "bottom";

        /** Specifies whether predefined period buttons should select a period from the beginning or the end of the data.
             @default false
         */
        selectFromStart: boolean;

        /** Text displayed next to "to" date input field.
             @default To:
         */
        toText: string;

        /** Width of a period selector, when position is "left" or "right".
             @default 180
         */
        width: number;

        /** Dispatched when dates in period selector input fields are changed or user clicks on one of the predefined period buttons. */
        addListener(type: "changed", handler: (event: { type: any, startDate: Date, endDate: Date, predefinedPeriod: string, count: number, event: MouseEvent }) => void): void;
        addListener(type: string, handler: (event: any) => void): void;
        removeListener(obj: any, type: string, handler: (event: any) => void): void;

        /** Resets the chart zoom to whatever default PeriodSelector button is. Can be used to simulate a click on period buttons buy changing "selected" property of PeriodSelector.periods items. */
        setDefaultPeriod(): void;
    }


    /** StockEvent is object which holds information about event (bullet). Values from StockEventsSettings will be used if not set. Stock event bullet's size depends on it's graphs fontSize. When user rolls-over, clicks or rolls-out of the event bullet, AmStockChart dispatches events. */
    interface StockEventConfig {

        /** Opacity of bullet background.
             @default 1
         */
        backgroundAlpha?: number;

        /** Color of bullet background.
             @default #DADADA
         */
        backgroundColor?: string;

        /** Opacity of bullet border.
             @default 1
         */
        borderAlpha?: number;

        /** Bullet border color.
             @default #888888
         */
        borderColor?: string;

        /** The color of the event text.
             @default #000000
         */
        color?: string;

        /** Date of an event. Can be a string of date (using chart.dataDateFormat format) or Date object. */
        date?: Date;

        /** A description that will be shown in a balloon when user rolls over mouse cursor over event icon. */
        description?: string;

        /** Specifies font size of a event bullet. Will use graph's or chart font size if not set. */
        fontSize?: number;

        /** graph on which event will be displayed. You can use a reference to the stock graph object or id of the graph. */
        graph?: StockGraphConfig;

        /** Roll-over background color.
             @default #CC0000
         */
        rollOverColor?: string;

        /** Allows placing event bullets at open/close/low/high values. */
        showAt?: "open" | "close" | "high" | "low";

        /** If you set it to true, the data point will display both event and regular (if set) bullet.
             @default false
         */
        showBullet?: boolean;

        /** Specifies if the event should be displayed on category axis
             @default false
         */
        showOnAxis?: boolean;

        /** Letter which will be displayed on the event. Not all types can display letters. "text" type can display longer texts. */
        text?: string;

        /** Type of bullet. Possible values are: "flag", "sign", "pin", "triangleUp", "triangleDown", "triangleLeft", "triangleRight", "text", "arrowUp", "arrowDown".
             @default sign
         */
        type?: "flag" | "sign" | "pin" | "triangleUp" | "triangleDown" | "triangleLeft" | "triangleRight" | "text" | "arrowUp" | "arrowDown";

        /** A URL to go to when user clicks the event. */
        url?: string;

        /** target of url, "_blank" for example. */
        urlTarget?: string;

        /** Allows placing event bullets at specified value. */
        value?: number;
    }


    /** StockEvent is object which holds information about event (bullet). Values from StockEventsSettings will be used if not set. Stock event bullet's size depends on it's graphs fontSize. When user rolls-over, clicks or rolls-out of the event bullet, AmStockChart dispatches events. */
    class StockEvent {

        /** Opacity of bullet background.
             @default 1
         */
        backgroundAlpha: number;

        /** Color of bullet background.
             @default #DADADA
         */
        backgroundColor: string;

        /** Opacity of bullet border.
             @default 1
         */
        borderAlpha: number;

        /** Bullet border color.
             @default #888888
         */
        borderColor: string;

        /** The color of the event text.
             @default #000000
         */
        color: string;

        /** Date of an event. Can be a string of date (using chart.dataDateFormat format) or Date object. */
        date: Date;

        /** A description that will be shown in a balloon when user rolls over mouse cursor over event icon. */
        description: string;

        /** Specifies font size of a event bullet. Will use graph's or chart font size if not set. */
        fontSize: number;

        /** graph on which event will be displayed. You can use a reference to the stock graph object or id of the graph. */
        graph: StockGraph;

        /** Roll-over background color.
             @default #CC0000
         */
        rollOverColor: string;

        /** Allows placing event bullets at open/close/low/high values. */
        showAt: "open" | "close" | "high" | "low";

        /** If you set it to true, the data point will display both event and regular (if set) bullet.
             @default false
         */
        showBullet: boolean;

        /** Specifies if the event should be displayed on category axis
             @default false
         */
        showOnAxis: boolean;

        /** Letter which will be displayed on the event. Not all types can display letters. "text" type can display longer texts. */
        text: string;

        /** Type of bullet. Possible values are: "flag", "sign", "pin", "triangleUp", "triangleDown", "triangleLeft", "triangleRight", "text", "arrowUp", "arrowDown".
             @default sign
         */
        type: "flag" | "sign" | "pin" | "triangleUp" | "triangleDown" | "triangleLeft" | "triangleRight" | "text" | "arrowUp" | "arrowDown";

        /** A URL to go to when user clicks the event. */
        url: string;

        /** target of url, "_blank" for example. */
        urlTarget: string;

        /** Allows placing event bullets at specified value. */
        value: number;
    }


    /** StockEventsSettings set's settings for all StockEvents. */
    interface StockEventsSettingsConfig {

        /** Opacity of bullet background.
             @default 1
         */
        backgroundAlpha?: number;

        /** Color of bullet background.
             @default #DADADA
         */
        backgroundColor?: string;

        /** Color for a roll-over balloon.
             @default #CC0000
         */
        balloonColor?: string;

        /** Opacity of bullet border.
             @default 1
         */
        borderAlpha?: number;

        /** Bullet border color.
             @default #888888
         */
        borderColor?: string;

        /** Roll-over background color.
             @default #CC0000
         */
        rollOverColor?: string;

        /** Allows placing event bullets at open/close/low/high values.
             @default close
         */
        showAt?: "open" | "close" | "high" | "low";

        /** Type of bullet. Possible values are: "flag", "sign", "pin", "triangleUp", "triangleDown", "triangleLeft", "triangleRight", "text", "arrowUp", "arrowDown".
             @default sign
         */
        type?: "flag" | "sign" | "pin" | "triangleUp" | "triangleDown" | "triangleLeft" | "triangleRight" | "text" | "arrowUp" | "arrowDown";
    }


    /** StockEventsSettings set's settings for all StockEvents. */
    class StockEventsSettings {

        /** Opacity of bullet background.
             @default 1
         */
        backgroundAlpha: number;

        /** Color of bullet background.
             @default #DADADA
         */
        backgroundColor: string;

        /** Color for a roll-over balloon.
             @default #CC0000
         */
        balloonColor: string;

        /** Opacity of bullet border.
             @default 1
         */
        borderAlpha: number;

        /** Bullet border color.
             @default #888888
         */
        borderColor: string;

        /** Roll-over background color.
             @default #CC0000
         */
        rollOverColor: string;

        /** Allows placing event bullets at open/close/low/high values.
             @default close
         */
        showAt: "open" | "close" | "high" | "low";

        /** Type of bullet. Possible values are: "flag", "sign", "pin", "triangleUp", "triangleDown", "triangleLeft", "triangleRight", "text", "arrowUp", "arrowDown".
             @default sign
         */
        type: "flag" | "sign" | "pin" | "triangleUp" | "triangleDown" | "triangleLeft" | "triangleRight" | "text" | "arrowUp" | "arrowDown";
    }


    /** StockGraph displays graphs on StockPanel. */
    interface StockGraphConfig extends AmGraphConfig {

        /** Specifies whether this graph will be compared if some data set is selected for comparing.
             @default false
         */
        comparable?: boolean;

        /** Specifies a field to be used to generate comparing graph. Note, this field is not the one used in your dataProvider, but toField from FieldMapping object. */
        compareField?: string;

        /** If you set it to true, when data sets are compared, the graphs will use first value as a base value instead of using the first value of selected period.
             @default false
         */
        compareFromStart?: boolean;

        /** You can use this property to set config of compared graphs. This allows you to set any of AmGraph properties on compared graphs instead of using old-style properties like compareGraphBulletBorderThickness. For example: stockGraph.compareGraph = {“bulletBorderThickness”:2, “lineAlpha”:0.4}. */
        compareGraph?: AmGraphConfig;

        /** Balloon color of comparing graph. */
        compareGraphBalloonColor?: string;

        /** If you set some function, the graph will call it and pass GraphDataItem and AmGraph object to it. This function should return a string which will be displayed in a balloon. This will be used for graphs from compared data sets only. Use balloonFunction for main data set's graphs. */
        compareGraphBalloonFunction?: Function;

        /** Balloon text of comparing graph. */
        compareGraphBalloonText?: string;

        /** Bullet of comparing graph. Possible values are: round, square, diamond, triangleUp, triangleDown, triangleLeft, triangleRight, bubble */
        compareGraphBullet?: string;

        /** Opacity of bullet border of comparing graph. */
        compareGraphBulletBorderAlpha?: number;

        /** Color of bullet border of comparing graph. */
        compareGraphBulletBorderColor?: string;

        /** Thickness of bullet border of comparing graph. */
        compareGraphBulletBorderThickness?: number;

        /** Color of compared graphs' bullets. */
        compareGraphBulletColor?: string;

        /** Bullet size of comparing graph. */
        compareGraphBulletSize?: number;

        /** Corner radius of comparing graph (if type is "column"). */
        compareGraphCornerRadiusTop?: number;

        /** Dash length of compare graph. */
        compareGraphDashLength?: number;

        /** Fill alpha of comparing graph. */
        compareGraphFillAlphas?: number;

        /** Fill color of comparing graph. */
        compareGraphFillColors?: string;

        /** Opacity of comparing graph line. */
        compareGraphLineAlpha?: number;

        /** Color of compare graph (by default data set color is used) */
        compareGraphLineColor?: string;

        /** Thickness of compare graph. */
        compareGraphLineThickness?: number;

        /** Type of comparing graph. Possible values are: "line", "column", "step", "smoothedLine."
             @default line
         */
        compareGraphType?: string;

        /** Specifies if compare graph is visible in legend.
             @default true
         */
        compareGraphVisibleInLegend?: boolean;

        /** When data is grouped to periods, the graph must know which period value should be used. Possible values are: "Open", "Low", "High", "Close", "Average" and "Sum".
             @default Close
         */
        periodValue?: string;

        /** Possible values are Open, Close, High, Low, Average and Sum. There is no default value set – graph uses it’s periodValue when calculating changes. For example, the graph’s periodValue is Close. This means that when data is grouped to longer periods (months for example) when recalculating, the graph will use Close value of the first period of the selection as base value and will compare each months Close value to it. If you set recalculateValue to Open, the first value of a month will be used as base value. */
        recalculateValue?: number | string;

        /** Specifies if events of compared graphs should be shown.
             @default false
         */
        showEventsOnComparedGraphs?: boolean;

        /** Specifies whether data set color should be used as this graph's lineColor. By default all graphs from the same data set will have a color from its relative DataSet (either auto-assigned by chart or set by color parameter). The graph's color properties will be ignored. To disable this behavior, set "useDataSetColors" to false. This way the chart will use graph's own color settings, such as "lineColor" or auto-assign the color if those are not set.
             @default true
         */
        useDataSetColors?: boolean;
    }


    /** StockGraph displays graphs on StockPanel. */
    class StockGraph extends AmGraph {

        /** Specifies whether this graph will be compared if some data set is selected for comparing.
             @default false
         */
        comparable: boolean;

        /** Specifies a field to be used to generate comparing graph. Note, this field is not the one used in your dataProvider, but toField from FieldMapping object. */
        compareField: string;

        /** If you set it to true, when data sets are compared, the graphs will use first value as a base value instead of using the first value of selected period.
             @default false
         */
        compareFromStart: boolean;

        /** You can use this property to set config of compared graphs. This allows you to set any of AmGraph properties on compared graphs instead of using old-style properties like compareGraphBulletBorderThickness. For example: stockGraph.compareGraph = {“bulletBorderThickness”:2, “lineAlpha”:0.4}. */
        compareGraph: AmGraph;

        /** Balloon color of comparing graph. */
        compareGraphBalloonColor: string;

        /** If you set some function, the graph will call it and pass GraphDataItem and AmGraph object to it. This function should return a string which will be displayed in a balloon. This will be used for graphs from compared data sets only. Use balloonFunction for main data set's graphs. */
        compareGraphBalloonFunction: Function;

        /** Balloon text of comparing graph. */
        compareGraphBalloonText: string;

        /** Bullet of comparing graph. Possible values are: round, square, diamond, triangleUp, triangleDown, triangleLeft, triangleRight, bubble */
        compareGraphBullet: string;

        /** Opacity of bullet border of comparing graph. */
        compareGraphBulletBorderAlpha: number;

        /** Color of bullet border of comparing graph. */
        compareGraphBulletBorderColor: string;

        /** Thickness of bullet border of comparing graph. */
        compareGraphBulletBorderThickness: number;

        /** Color of compared graphs' bullets. */
        compareGraphBulletColor: string;

        /** Bullet size of comparing graph. */
        compareGraphBulletSize: number;

        /** Corner radius of comparing graph (if type is "column"). */
        compareGraphCornerRadiusTop: number;

        /** Dash length of compare graph. */
        compareGraphDashLength: number;

        /** Fill alpha of comparing graph. */
        compareGraphFillAlphas: number;

        /** Fill color of comparing graph. */
        compareGraphFillColors: string;

        /** Opacity of comparing graph line. */
        compareGraphLineAlpha: number;

        /** Color of compare graph (by default data set color is used) */
        compareGraphLineColor: string;

        /** Thickness of compare graph. */
        compareGraphLineThickness: number;

        /** Type of comparing graph. Possible values are: "line", "column", "step", "smoothedLine."
             @default line
         */
        compareGraphType: string;

        /** Specifies if compare graph is visible in legend.
             @default true
         */
        compareGraphVisibleInLegend: boolean;

        /** When data is grouped to periods, the graph must know which period value should be used. Possible values are: "Open", "Low", "High", "Close", "Average" and "Sum".
             @default Close
         */
        periodValue: string;

        /** Possible values are Open, Close, High, Low, Average and Sum. There is no default value set – graph uses it’s periodValue when calculating changes. For example, the graph’s periodValue is Close. This means that when data is grouped to longer periods (months for example) when recalculating, the graph will use Close value of the first period of the selection as base value and will compare each months Close value to it. If you set recalculateValue to Open, the first value of a month will be used as base value. */
        recalculateValue: number | string;

        /** Specifies if events of compared graphs should be shown.
             @default false
         */
        showEventsOnComparedGraphs: boolean;

        /** Specifies whether data set color should be used as this graph's lineColor. By default all graphs from the same data set will have a color from its relative DataSet (either auto-assigned by chart or set by color parameter). The graph's color properties will be ignored. To disable this behavior, set "useDataSetColors" to false. This way the chart will use graph's own color settings, such as "lineColor" or auto-assign the color if those are not set.
             @default true
         */
        useDataSetColors: boolean;
    }


    /** StockLegend is a legend of StockPanel. */
    interface StockLegendConfig extends AmLegendConfig {

        /** The text which will be displayed in the value portion of the legend when user is not hovering above any data point and the data sets are compared. The tags should be made out of two parts - the name of a field (value / open / close / high / low) and the value of the period you want to be show - open / close / high / low / sum / average / count. For example: [[value.sum]] means that sum of all data points of value field in the selected period will be displayed. In case you want to display percent values, you should add "percent" string in front of a tag, for example: [[percents.value.close]] means that last percent value of a period will be displayed. */
        periodValueTextComparing?: string;

        /** The text which will be displayed in the value portion of the legend when user is not hovering above any data point. The tags should be made out of two parts - the name of a field (value / open / close / high / low) and the value of the period you want to be show - open / close / high / low / sum / average / count. For example: [[value.sum]] means that sum of all data points of value field in the selected period will be displayed. */
        periodValueTextRegular?: string;

        /** The text which will be displayed in the value portion of the legend when graph is comparable and at least one dataSet is selected for comparing. You can use tags like [[value]], [[open]], [[high]], [[low]], [[close]], [[percents.value/open/close/low/high]], [[description]].
             @default [[percents.value]]%
         */
        valueTextComparing?: string;

        /** The text which will be displayed in the value portion of the legend. You can use tags like [[value]], [[open]], [[high]], [[low]], [[close]], [[percents]], [[description]].
             @default [[value]]
         */
        valueTextRegular?: string;
    }


    /** StockLegend is a legend of StockPanel. */
    class StockLegend extends AmLegend {

        /** The text which will be displayed in the value portion of the legend when user is not hovering above any data point and the data sets are compared. The tags should be made out of two parts - the name of a field (value / open / close / high / low) and the value of the period you want to be show - open / close / high / low / sum / average / count. For example: [[value.sum]] means that sum of all data points of value field in the selected period will be displayed. In case you want to display percent values, you should add "percent" string in front of a tag, for example: [[percents.value.close]] means that last percent value of a period will be displayed. */
        periodValueTextComparing: string;

        /** The text which will be displayed in the value portion of the legend when user is not hovering above any data point. The tags should be made out of two parts - the name of a field (value / open / close / high / low) and the value of the period you want to be show - open / close / high / low / sum / average / count. For example: [[value.sum]] means that sum of all data points of value field in the selected period will be displayed. */
        periodValueTextRegular: string;

        /** The text which will be displayed in the value portion of the legend when graph is comparable and at least one dataSet is selected for comparing. You can use tags like [[value]], [[open]], [[high]], [[low]], [[close]], [[percents.value/open/close/low/high]], [[description]].
             @default [[percents.value]]%
         */
        valueTextComparing: string;

        /** The text which will be displayed in the value portion of the legend. You can use tags like [[value]], [[open]], [[high]], [[low]], [[close]], [[percents]], [[description]].
             @default [[value]]
         */
        valueTextRegular: string;
    }


    /** StockPanel class creates stock panels (charts). AmStockChart can have multiple Stock panels. */
    interface StockPanelConfig extends AmSerialChartConfig {

        /** Specifies whether x button will be displayed near the panel. This button allows turning panel off.
             @default false
         */
        allowTurningOff?: boolean;

        /** If true, drawing icons will be displayed in top-right corner.
             @default false
         */
        drawingIconsEnabled?: boolean;

        /** Specifies on which value axis user can draw trend lines. Set drawingIconsEnabled to true if you want drawing icons to be visible. First value axis will be used if not set here. You can use a reference to the value axis object or id of value axis. */
        drawOnAxis?: ValueAxisConfig;

        /** Specifies if all trend lines should be erased when erase button is clicked. If false, trend lines can be erased one by one.
             @default false
         */
        eraseAll?: boolean;

        /** Size of trend line drawing icons. If you change this size, you should update icon images if you want them to look properly.
             @default 18
         */
        iconSize?: number;

        /** Relative height of panel. Possible values 0 - 100. */
        percentHeight?: number;

        /** Specifies from which date's value should be used as base when recalculating values to percent. */
        recalculateFromDate?: Date;

        /** Specifies when values should be recalculated to percents. Possible values are: "never", "always", "whenComparing".
             @default whenComparing
         */
        recalculateToPercents?: string;

        /** Specifies whether this panel will show category axis.
             @default true
         */
        showCategoryAxis?: boolean;

        /** Specifies if compared graphs should be shown above or behind the main graph.
             @default true
         */
        showComparedOnTop?: boolean;

        /** Array of stock graphs. */
        stockGraphs?: StockGraphConfig[];

        /** Stock chart legend. */
        stockLegend?: StockLegendConfig;

        /** A title of a panel. Note, StockLegend should be added in order title to be displayed. */
        title?: string;

        /** Trend line opacity.
             @default 1
         */
        trendLineAlpha?: number;

        /** Trend line color.
             @default #00CC00
         */
        trendLineColor?: string;

        /** Trend line dash length.
             @default 0
         */
        trendLineDashLength?: number;

        /** Trend line thickness.
             @default 2
         */
        trendLineThickness?: number;
    }


    /** StockPanel class creates stock panels (charts). AmStockChart can have multiple Stock panels. */
    class StockPanel extends AmSerialChart {

        /** Specifies whether x button will be displayed near the panel. This button allows turning panel off.
             @default false
         */
        allowTurningOff: boolean;

        /** If true, drawing icons will be displayed in top-right corner.
             @default false
         */
        drawingIconsEnabled: boolean;

        /** Specifies on which value axis user can draw trend lines. Set drawingIconsEnabled to true if you want drawing icons to be visible. First value axis will be used if not set here. You can use a reference to the value axis object or id of value axis. */
        drawOnAxis: ValueAxis;

        /** Specifies if all trend lines should be erased when erase button is clicked. If false, trend lines can be erased one by one.
             @default false
         */
        eraseAll: boolean;

        /** Size of trend line drawing icons. If you change this size, you should update icon images if you want them to look properly.
             @default 18
         */
        iconSize: number;

        /** Relative height of panel. Possible values 0 - 100. */
        percentHeight: number;

        /** Specifies from which date's value should be used as base when recalculating values to percent. */
        recalculateFromDate: Date;

        /** Specifies when values should be recalculated to percents. Possible values are: "never", "always", "whenComparing".
             @default whenComparing
         */
        recalculateToPercents: string;

        /** Specifies whether this panel will show category axis.
             @default true
         */
        showCategoryAxis: boolean;

        /** Specifies if compared graphs should be shown above or behind the main graph.
             @default true
         */
        showComparedOnTop: boolean;

        /** Array of stock graphs. */
        stockGraphs: StockGraph[];

        /** Stock chart legend. */
        stockLegend: StockLegend;

        /** A title of a panel. Note, StockLegend should be added in order title to be displayed. */
        title: string;

        /** Trend line opacity.
             @default 1
         */
        trendLineAlpha: number;

        /** Trend line color.
             @default #00CC00
         */
        trendLineColor: string;

        /** Trend line dash length.
             @default 0
         */
        trendLineDashLength: number;

        /** Trend line thickness.
             @default 2
         */
        trendLineThickness: number;

        /** Adds a graph to the panel. */
        addStockGraph(graph: AmGraph): void;

        /** Toggles trend line eraser mode. Same as clicking on an eraser icon. */
        handleEraserClick(): void;

        /** Toggles between regular and drawing of trend lines mode. */
        handlePencilClick(): void;

        /** Removes graph from the panel. */
        removeStockGraph(graph: AmGraph): void;
    }


    /** ValueAxesSettings settings set's settings for all ValueAxes. If you change a property after the chart is initialized, you should call stockChart.validateNow() method in order for it to work. If there is no default value specified, default value of ValueAxis class will be used. */
    interface ValueAxesSettingsConfig {

        /** Specifies whether number for gridCount is specified automatically, according to the axis size.
             @default true
         */
        autoGridCount?: boolean;

        /** Axis opacity.
             @default 0
         */
        axisAlpha?: number;

        /** Axis color. */
        axisColor?: string;

        /** Thickness of the axis. */
        axisThickness?: number;

        /** Label color. */
        color?: string;

        /** Length of a dash. By default, the grid line is not dashed. */
        dashLength?: number;

        /** Fill opacity. Every second space between grid lines can be filled with color. */
        fillAlpha?: number;

        /** Fill color. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills. */
        fillColor?: string;

        /** Opacity of grid lines. */
        gridAlpha?: number;

        /** Color of grid lines. */
        gridColor?: string;

        /** Approximate number of grid lines. autoGridCount should be set to false, otherwise this property will be ignored. */
        gridCount?: number;

        /** Thickness of grid lines. */
        gridThickness?: number;

        /** Specifies whether guide values should be included when calculating min and max of the axis. */
        includeGuidesInMinMax?: boolean;

        /** If true, the axis will include hidden graphs when calculating min and max values. */
        includeHidden?: boolean;

        /** Specifies whether values should be placed inside or outside plot area. In case you set this to false, you'll have to adjust marginLeft or marginRight in [[PanelsSettings]] in order labels to be visible. Note, if you set this property to false, you might also consider setting showLastLabel to true.
             @default true
         */
        inside?: boolean;

        /** Specifies whether values on axis can only be integers or both integers and doubles. */
        integersOnly?: boolean;

        /** Frequency at which labels should be placed. */
        labelFrequency?: number;

        /** You can use it to adjust position of axis labels.
             @default 0
         */
        labelOffset?: number;

        /** Specifies whether value labels are displayed. */
        labelsEnabled?: boolean;

        /** Set to true if value axis is logarithmic, false otherwise. */
        logarithmic?: boolean;

        /** If you don't want max value to be calculated by the chart, set it using this property. This value might still be adjusted so that it would be possible to draw grid at rounded intervals. */
        maximum?: number;

        /** If you don't want min value to be calculated by the chart, set it using this property. This value might still be adjusted so that it would be possible to draw grid at rounded intervals. */
        minimum?: number;

        /** If set value axis scale (min and max numbers) will be multiplied by it. I.e. if set to 1.2 the scope of values will increase by 20%. */
        minMaxMultiplier?: number;

        /** Opacity of minor grid. In order minor to be visible, you should set minorGridEnabled to true. */
        minorGridAlpha?: number;

        /** Specifies if minor grid should be displayed. NOTE: If equalSpacing is set to true, this setting will be ignored. */
        minorGridEnabled?: boolean;

        /** This property is used when calculating grid count (when autoGridCount is true). It specifies minimum cell height required for one span between grid lines. */
        minVerticalGap?: number;

        /** The distance of the axis to the plot area, in pixels. Useful if you have more then one axis on the same side. */
        offset?: number;

        /** Position of the value axis. Possible values are "left" and "right". */
        position?: string;

        /** Precision (number of decimals) of values. */
        precision?: number;

        /** Set to true if value axis is reversed (smaller values on top), false otherwise. */
        reversed?: boolean;

        /** Specifies if first label of value axis should be displayed.
             @default true
         */
        showFirstLabel?: boolean;

        /** Specifies if last label of value axis should be displayed.
             @default false
         */
        showLastLabel?: boolean;

        /** Stacking mode of the axis. Possible values are: "none", "regular", "100%", "3d". */
        stackType?: "none" | "regular" | "100%" | "3d";

        /** If you set minimum and maximum for your axis, chart adjusts them so that grid would start and end on the beginning and end of plot area and grid would be at equal intervals. If you set strictMinMax to true, the chart will not adjust minimum and maximum of value axis. */
        strictMinMax?: boolean;

        /** Tick length.
             @default 0
         */
        tickLength?: number;

        /** Unit which will be added to the value label. */
        unit?: string;

        /** Position of the unit. Possible values are "left" or "right". */
        unitPosition?: "left" | "right";
    }


    /** ValueAxesSettings settings set's settings for all ValueAxes. If you change a property after the chart is initialized, you should call stockChart.validateNow() method in order for it to work. If there is no default value specified, default value of ValueAxis class will be used. */
    class ValueAxesSettings {

        /** Specifies whether number for gridCount is specified automatically, according to the axis size.
             @default true
         */
        autoGridCount: boolean;

        /** Axis opacity.
             @default 0
         */
        axisAlpha: number;

        /** Axis color. */
        axisColor: string;

        /** Thickness of the axis. */
        axisThickness: number;

        /** Label color. */
        color: string;

        /** Length of a dash. By default, the grid line is not dashed. */
        dashLength: number;

        /** Fill opacity. Every second space between grid lines can be filled with color. */
        fillAlpha: number;

        /** Fill color. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills. */
        fillColor: string;

        /** Opacity of grid lines. */
        gridAlpha: number;

        /** Color of grid lines. */
        gridColor: string;

        /** Approximate number of grid lines. autoGridCount should be set to false, otherwise this property will be ignored. */
        gridCount: number;

        /** Thickness of grid lines. */
        gridThickness: number;

        /** Specifies whether guide values should be included when calculating min and max of the axis. */
        includeGuidesInMinMax: boolean;

        /** If true, the axis will include hidden graphs when calculating min and max values. */
        includeHidden: boolean;

        /** Specifies whether values should be placed inside or outside plot area. In case you set this to false, you'll have to adjust marginLeft or marginRight in [[PanelsSettings]] in order labels to be visible. Note, if you set this property to false, you might also consider setting showLastLabel to true.
             @default true
         */
        inside: boolean;

        /** Specifies whether values on axis can only be integers or both integers and doubles. */
        integersOnly: boolean;

        /** Frequency at which labels should be placed. */
        labelFrequency: number;

        /** You can use it to adjust position of axis labels.
             @default 0
         */
        labelOffset: number;

        /** Specifies whether value labels are displayed. */
        labelsEnabled: boolean;

        /** Set to true if value axis is logarithmic, false otherwise. */
        logarithmic: boolean;

        /** If you don't want max value to be calculated by the chart, set it using this property. This value might still be adjusted so that it would be possible to draw grid at rounded intervals. */
        maximum: number;

        /** If you don't want min value to be calculated by the chart, set it using this property. This value might still be adjusted so that it would be possible to draw grid at rounded intervals. */
        minimum: number;

        /** If set value axis scale (min and max numbers) will be multiplied by it. I.e. if set to 1.2 the scope of values will increase by 20%. */
        minMaxMultiplier: number;

        /** Opacity of minor grid. In order minor to be visible, you should set minorGridEnabled to true. */
        minorGridAlpha: number;

        /** Specifies if minor grid should be displayed. NOTE: If equalSpacing is set to true, this setting will be ignored. */
        minorGridEnabled: boolean;

        /** This property is used when calculating grid count (when autoGridCount is true). It specifies minimum cell height required for one span between grid lines. */
        minVerticalGap: number;

        /** The distance of the axis to the plot area, in pixels. Useful if you have more then one axis on the same side. */
        offset: number;

        /** Position of the value axis. Possible values are "left" and "right". */
        position: string;

        /** Precision (number of decimals) of values. */
        precision: number;

        /** Set to true if value axis is reversed (smaller values on top), false otherwise. */
        reversed: boolean;

        /** Specifies if first label of value axis should be displayed.
             @default true
         */
        showFirstLabel: boolean;

        /** Specifies if last label of value axis should be displayed.
             @default false
         */
        showLastLabel: boolean;

        /** Stacking mode of the axis. Possible values are: "none", "regular", "100%", "3d". */
        stackType: "none" | "regular" | "100%" | "3d";

        /** If you set minimum and maximum for your axis, chart adjusts them so that grid would start and end on the beginning and end of plot area and grid would be at equal intervals. If you set strictMinMax to true, the chart will not adjust minimum and maximum of value axis. */
        strictMinMax: boolean;

        /** Tick length.
             @default 0
         */
        tickLength: number;

        /** Unit which will be added to the value label. */
        unit: string;

        /** Position of the unit. Possible values are "left" or "right". */
        unitPosition: "left" | "right";
    }

}
