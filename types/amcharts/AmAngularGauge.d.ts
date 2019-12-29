import AmBalloon from "./AmBalloon";
import AmChart from "./AmChart";
import AmLegend from "./AmLegend";
import ExportSettings from "./ExportSettings";
import GaugeArrow from "./GaugeArrow";
import GaugeAxis from "./GaugeAxis";
import Label from "./Label";
import Title from "./Title";

/**
 * AmAngularGauge Extension for AmChart to create gauge charts.
 */
export default class AmAngularGauge extends AmChart {
    /**
     * When enabled, chart adds aria-label attributes to columns, bullets or map objects.
     * You can control values of these labels using properties like accessibleLabel of AmGraph.
     * Note, not all screen readers support these tags.
     * We tested this mostly with NVDA Screen reader.
     * WAI-ARIA is now official W3 standard, so in future more readers will handle this well.
     * We will be improving accessibility on our charts, so we would be glad to hear your feedback.
     * @default true
     */
    accessible: boolean;

    /**
     * Description which will be added to node of SVG element.
     * Most of the screen readers will read this description.
     */
    accessibleDescription: string;

    /**
     * Description which is added to of a SVG element. Some of the screen readers will read this description.
     */
    accessibleTitle: string;

    /**
     * Specifies, if class names should be added to chart elements.
     * @default false
     */
    addClassNames: boolean;

    /**
     * Uses the whole space of the canvas to draw the gauge.
     * @default true
     */
    adjustSize: boolean;

    /**
     * Array of Labels. Example of label object, with all possible properties:
     * {
     *     "x": 20,
     *     "y": 20,
     *     "text": "this is label",
     *     "align": "left",
     *     "size": 12,
     *     "color": "#CC0000",
     *     "alpha": 1,
     *     "rotation": 0,
     *     "bold": true,
     *     "url": "http://www.amcharts.com"
     * }
     * @default []
     */
    allLabels: [Label];

    /**
     * Array of arrows.
     */
    arrows: [GaugeArrow];

    /**
     * If you set it to true the chart will automatically monitor changes of display style of chart’s container
     * (or any of it’s parents) and will render chart correctly if it is changed from none to block.
     * We recommend setting it to true if you change this style at a run time, as it affects performance a bit.
     * @default false
     */
    autoDisplay: boolean;

    /**
     * Set this to false if you don't want chart to resize itself whenever its parent container size changes.
     * @default true
     */
    autoResize: boolean;

    /**
     * If you set it to true and your chart div (or any of the parent div) has css scale applied,
     * the chart will position mouse at a correct position.
     * Default value is false because this operation consumes some CPU and quite a
     * few people are using css transfroms.
     * @default false
     */
    autoTransform: boolean;

    /**
     * Array of axes.
     * @default [GaugeAxis]
     */
    axes: [GaugeAxis];

    /**
     * Opacity of background. Set it to >0 value if you want backgroundColor to work.
     * However we recommend changing div's background-color style for changing background color.
     * @default 0
     */
    backgroundAlpha: number;

    /**
     * Background color. You should set backgroundAlpha to >0 value in order background to be visible.
     * We recommend setting background color directly on a chart's DIV instead of using this property.
     * @default #FFFFFF
     */
    backgroundColor: string;

    /**
     * The chart creates AmBalloon class itself.
     * If you want to customize balloon, get balloon instance using this property,
     * and then change balloon's properties.
     * @default AmBalloon
     */
    balloon: AmBalloon;

    /**
     * Opacity of chart's border. Value range is 0 - 1.
     * @default 0
     */
    borderAlpha: number;

    /**
     * Color of chart's border. You should set borderAlpha >0 in order border to be visible.
     * We recommend setting border color directly on a chart's DIV instead of using this property.
     * @default #000000
     */
    borderColor: string;

    /**
     * This prefix is added to all class names which are added to all visual elements of a chart
     * in case addClassNames is set to true.
     * @default amcharts
     */
    classNamePrefix: string;

    /**
     * In case you use gauge to create a clock, set this to true.
     * @default false
     */
    clockWiseOnly: boolean;

    /**
     * Text color.
     * @default #000000
     */
    color: string;

    /**
     * Non-commercial version only. Specifies position of link to amCharts site.
     * Allowed values are: top-left, top-right, bottom-left and bottom-right.
     * @default 'top - left'
     */
    creditsPosition: string;

    /**
     * A config object for Data Loader plugin. Please refer to the following page for more information.
     */
    dataLoader: object;

    /**
     * Array of data objects, for example:
     * [
     *     {country:"US", value:524},
     *     {country:"UK", value:624},
     *     {country:"Lithuania", value:824}
     * ]
     * You can have any number of fields and use any field names.
     * In case of AmMap, data provider should be MapData object.
     * The data set data.
     * Important: if you are using date/time-based category axis, the data points needs to come pre-ordered
     * in ascending order. Data with incorrect order might result in visual and functional glitches on the chart.
     */
    dataProvider: [object];

    /**
     * Decimal separator.
     * @default "."
     */
    decimalSeparator: string;

    /**
     * Using this property you can add any additional information to SVG, like SVG filters or clip paths.
     * The structure of this object should be identical to XML structure of a object you are adding,
     * only in JSON format.
     */
    defs: object;

    /**
     * Export config. Specifies how export to image/data export/print/annotate menu will look and behave.
     * You can find a lot of examples in amcharts/plugins/export folder. More details can be found here.
     */
    export: ExportSettings;

    /**
     * Gauge face opacity.
     * @default 0
     */
    faceAlpha: number;

    /**
     * Gauge face border opacity.
     * @default 0
     */
    faceBorderAlpha: number;

    /**
     * Gauge face border color.
     * @default #555555
     */
    faceBorderColor: string;

    /**
     * Gauge face border width.
     * @default 1
     */
    faceBorderWidth: number;

    /**
     * Gauge face color, requires faceAlpha > 0
     * @default #FAFAFA
     */
    faceColor: string;

    /**
     * Gauge face image-pattern.
     * Example: {"url":"../amcharts/patterns/black/pattern1.png", "width":4, "height":4}
     * fontFamily	String	Verdana	Font family.
     * fontSize	Number	11	Font size.
     */
    facePattern: object;

    /**
     * Gauge's horizontal position in pixel, origin is the center. Centered by default.
     */
    gaugeX: number;

    /**
     * Gauge's vertical position in pixel, origin is the center. Centered by default.
     */
    gaugeY: number;

    /**
     * If you set this to true, the lines of the chart will be distorted and will produce hand-drawn effect.
     * Try to adjust chart.handDrawScatter and chart.handDrawThickness properties for a more scattered result.
     * @default false
     */
    handDrawn: boolean;

    /**
     * Defines by how many pixels hand-drawn line (when handDrawn is set to true) will fluctuate.
     * @default 2
     */
    handDrawScatter: number;

    /**
     * Defines by how many pixels line thickness will fluctuate (when handDrawn is set to true).
     * @default 1
     */
    handDrawThickness: number;

    /**
     * Time, in milliseconds after which balloon is hidden if the user rolls-out of the object.
     * Might be useful for AmMap to avoid balloon flickering while moving mouse over the areas.
     * Note, this is not duration of fade-out. Duration of fade-out is set in AmBalloon class.
     * @default 150
     */
    hideBalloonTime: number;

    /**
     * Allows changing language easily.
     * Note, you should include language js file from amcharts/lang or ammap/lang folder and then use
     * variable name used in this file, like chart.language = "de"; Note, for maps this works differently -
     * you use language only for country names, as there are no other strings in the maps application.
     */
    language: string;

    /**
     * Legend of a chart.
     */
    legend: AmLegend;

    /**
     * Read-only. Reference to the div of the legend.
     */
    legendDiv: HTMLElement;

    /**
     * You can add listeners of events using this property.
     * Example: listeners = [{"event":"dataUpdated", "method":handleEvent}];
     * @default [Object]
     */
    listeners: [object];

    /**
     * Bottom spacing between chart and container.
     * @default 10
     */
    marginBottom: number;

    /**
     * Left-hand spacing between chart and container.
     * @default 10
     */
    marginLeft: number;

    /**
     * Right-hand spacing between chart and container.
     * @default 10
     */
    marginRight: number;

    /**
     * Top spacing between chart and container.
     * @default 10
     */
    marginTop: number;

    /**
     * Minimum radius of a gauge.
     * @default 10
     */
    minRadius: number;

    /**
     * This setting affects touch-screen devices only.
     * If a chart is on a page, and panEventsEnabled are set to true, the page won't move if
     * the user touches the chart first. If a chart is big enough and occupies all the screen of your touch device,
     * the user won’t be able to move the page at all.
     * If you think that selecting/panning the chart or moving/pinching the map is a primary purpose of your users,
     * you should set panEventsEnabled to true, otherwise - false.
     * @default true
     */
    panEventsEnabled: boolean;

    /**
     * Specifies absolute or relative path to amCharts files, i.e."amcharts/". (where all.js files are located)
     * If relative URLs are used, they will be relative to the current web page, displaying the chart.
     * You can also set path globally, using global JavaScript variable AmCharts_path.If this variable is set,
     * and "path" is not set in chart config, the chart will assume the path from the global variable.
     * This allows setting amCharts path globally.
     * I.e.:
     * let AmCharts_path = "/libs/amcharts/";
     * "path" parameter will be used by the charts to locate it's files, like images, plugins or patterns.
     * @default 'amcharts/'
     */
    path: string;

    /**
     * Specifies path to the folder where images like resize grips, lens and similar are.
     * IMPORTANT: Since V3.14.12, you should use "path" to point to amCharts directory instead.
     * The "pathToImages" will be automatically set and does not need to be in the chart config,
     * unless you keep your images separately from other amCharts files.
     */
    pathToImages: string;

    /**
     * Precision of percent values. -1 means percent values won't be rounded at all and show as they are.
     * @default 2
     */
    percentPrecision: number;

    /**
     * Precision of values. -1 means values won't be rounded at all and show as they are.
     * @default -1
     */
    precision: number;

    /**
     * Prefixes which are used to make big numbers shorter: 2M instead of 2000000, etc.
     * Prefixes are used on value axes and in the legend.
     * To enable prefixes, set usePrefixes property to true.
     * @default [
     *     {"number": 1e+3, "prefix": "k"},
     *     {"number": 1e+6, "prefix": "M"},
     *     {"number": 1e+9, "prefix": "G"},
     *     {"number": 1e+12, "prefix": "T"},
     *     {"number": 1e+15, "prefix": "P"},
     *     {"number": 1e+18, "prefix": "E"},
     *     {"number": 1e+21, "prefix": "Z"},
     *     {"number": 1e+24, "prefix": "Y"}
     * ]
     */
    prefixesOfBigNumbers: [{ number: number; prefix: string }];

    /**
     * Prefixes which are used to make small numbers shorter: 2μ instead of 0.000002, etc.
     * Prefixes are used on value axes and in the legend.
     * To enable prefixes, set usePrefixes property to true.
     * @default [
     *     {"number": 1e-24, "prefix": "y"},
     *     {"number": 1e-21, "prefix": "z"},
     *     {"number": 1e-18, "prefix": "a"},
     *     {"number": 1e-15, "prefix": "f"},
     *     {"number": 1e-12, "prefix": "p"},
     *     {"number": 1e-9, "prefix": "n"},
     *     {"number": 1e-6, "prefix": "μ"},
     *     {"number": 1e-3, "prefix": "m"}
     * ]
     */
    prefixesOfSmallNumbers: [{ number: number; prefix: string }];

    /**
     * If processTimeout is > 0, 1000 data items will be parsed at a time,
     * then the chart will make pause and continue parsing data until it finishes.
     * @default 1000
     */
    processCount: number;

    /**
     * If you set it to 1 millisecond or some bigger value, chart will be built in chunks instead of all at once.
     * This is useful if you work with a lot of data and the initial build of the chart takes a lot of time,
     * which freezes the whole web application by not allowing other processes to do their
     * job while the chart is busy.
     * @default 0
     */
    processTimeout: number;

    /**
     * A config object for Responsive plugin. Please refer to the following page for more information.
     */
    responsive: object;

    /**
     * Duration of arrow animation.
     * @default 1
     */
    startDuration: number;

    /**
     * Transition effect of the arrows, possible effects: easeOutSine, easeInSine, elastic, bounce.
     * @default easeInSine
     */
    startEffect: string;

    /**
     * Charts will use SVG icons (some are loaded from images folder and some are drawn inline)
     * if browser supports SVG. This makes icons look good on retina displays on all resolutions.
     * @default true
     */
    svgIcons: boolean;

    /**
     * Charts which require gestures like swipe (charts with scrollbar/cursor) or pinch (maps) used to prevent
     * regular page scrolling and could result page to stick to the same spot if the chart occupied whole screen.
     * Now, in order these gestures to start working user has to touch the chart/maps once.
     * Regular touch events like touching on the bar/slice/map area do not require the first tap and will
     * show balloons and perform other tasks as usual.
     * If you have a map or chart which occupies full screen and your page does not require scrolling,
     * set tapToActivate to false – this will bring old behavior back.
     * @default true
     */
    tapToActivate: boolean;

    /**
     * Theme of a chart. Config files of themes can be found in amcharts/themes/ folder.
     * More info about using themes.
     * @default none
     */
    theme: string;

    /**
     * Thousands separator.
     * @default ,
     */
    thousandsSeparator: string;

    /**
     * Array of Title objects.
     * @default []
     */
    titles: [Title];

    /**
     * If you set it to 200 (milliseconds) or so, the chart will fire clickGraphItem or clickSlice (AmSlicedChart)
     * or clickMapObject only if user holds their finger for 0.2 seconds (200 ms) on the
     * column/bullet/slice/map object.
     * @default 0
     */
    touchClickDuration: number;

    /**
     * Type of a chart. Required when creating chart using JSON.
     * Possible types are: serial, pie, xy, radar, funnel, gauge, map, gantt, stock.
     */
    type: string;

    /**
     * If true, prefixes will be used for big and small numbers.
     * You can set arrays of prefixes via prefixesOfSmallNumbers and prefixesOfBigNumbers properties.
     * @default false
     */
    usePrefixes: boolean;

    /**
     * Read-only. Indicates current version of a script.
     */
    version: string;

    /**
     * Adds arrow to the chart.
     */
    addArrow(arrow: GaugeArrow): void;

    /**
     * Adds axis to angular gauge.
     */
    addAxis(axis: GaugeAxis): void;

    /**
     * Adds a label on a chart. You can use it for labeling axes, adding chart title,
     * etc. x and y coordinates can be set in number, percent, or a number with ! in front of it -
     * coordinate will be calculated from right or bottom instead of left or top.
     */
    addLabel(
        x: number,
        y: number,
        text: string,
        align: string,
        size: number,
        color: string,
        rotation: number,
        alpha: number,
        bold: boolean,
        url: string,
    ): void;

    /**
     * Adds a legend to the chart. By default, you don't need to create div for your legend,
     * however if you want it to be positioned in some different way,
     * you can create div anywhere you want and pass id or reference to your div as a second parameter.
     * NOTE: This method will not work on StockPanel.
     */
    addLegend(legend: AmLegend, legendDivId?: string): void;
    /**
     * Adds a legend to the chart.
     * By default, you don't need to create div for your legend,
     * however if you want it to be positioned in some different way,
     * you can create div anywhere you want and pass id or reference to your div as a second parameter.
     * NOTE: This method will not work on StockPanel.
     * @param legend - The legend.
     * @param legendDiv - Legend div (optional).
     */
    addLegend(legend: AmLegend, legendDiv: HTMLElement): void;

    /**
     * Adds event listener to the object.
     */
    addListener(
        type: string,
        handler: (
            e: {
                type: string;
                chart: AmChart;
            },
        ) => void,
    ): void;

    /**
     * Adds title to the top of the chart. Pie, Radar positions are updated so that they won't overlap.
     * Plot area of Serial/XY chart is also updated unless autoMargins property is set to false.
     * You can add any number of titles - each of them will be placed in a new line.
     * To remove titles, simply clear titles array: chart.titles = []; and call chart.validateNow() method.
     */
    addTitle(text: string, size: number, color: string, alpha: number, bold: boolean): void;

    /**
     * Clears the chart area, intervals, etc.
     */
    clear(): void;

    /**
     * Removes all labels added to the chart.
     */
    clearLabels(): void;

    /**
     * Use this method to force the chart to resize to it's current container size.
     */
    invalidateSize(): void;

    /**
     * This method allows to create charts with a single config.
     */
    makeChart(container: string, config: any, delay: number): AmChart;

    /**
     * Removes arrow from the chart.
     */
    removeArrow(arrow: GaugeArrow): void;

    /**
     * Removes axis from the chart.
     */
    removeAxis(axis: GaugeAxis): void;

    /**
     * Removes chart's legend.
     */
    removeLegend(): void;

    /**
     * Removes event listener from chart object.
     */
    removeListener(chart: AmChart, type: string, handler: any): void;

    /**
     * This method should be called after data in your data provider changed or a new array was set to dataProvider.
     * After calling this method the chart will parse data and redraw.
     */
    validateData(): void;

    /**
     * This method should be called after you changed one or more properties of any class.
     * The chart will redraw after this method is called.
     * Both attributes, validateData and skipEvents are optional (false by default).
     */
    validateNow(): void;

    /**
     * Adds chart to the specified DIV.
     */
    write(container: string | HTMLDivElement): void;
}
