// Type definitions for dygraphs 1.1.3
// Project: http://dygraphs.com
// Definitions by: Dan Vanderkam <https://github.com/danvk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="google.visualization" />

declare namespace dygraphs {
    type DataArray = number[][];

    type Data = string | DataArray | google.visualization.DataTable;

    interface PerSeriesOptions {
        /**
         * Set to either 'y1' or 'y2' to assign a series to a y-axis (primary or secondary). Must be
         * set per-series.
         */
        axis?: 'y1' | 'y2';

        /**
         * A per-series color definition. Used in conjunction with, and overrides, the colors option.
         */
        color?: string;

        /**
         * Draw a small dot at each point, in addition to a line going through the point. This makes
         * the individual data points easier to see, but can increase visual clutter in the chart.
         * The small dot can be replaced with a custom rendering by supplying a <a
         * href='#drawPointCallback'>drawPointCallback</a>.
         */
        drawPoints?: boolean;

        /**
         * Error bars (or custom bars) for each series are drawn in the same color as the series, but
         * with partial transparency. This sets the transparency. A value of 0.0 means that the error
         * bars will not be drawn, whereas a value of 1.0 means that the error bars will be as dark
         * as the line for the series itself. This can be used to produce chart lines whose thickness
         * varies at each point.
         */
        fillAlpha?: number;

        /**
         * Should the area underneath the graph be filled? This option is not compatible with error
         * bars. This may be set on a <a href='per-axis.html'>per-series</a> basis.
         */
        fillGraph?: boolean;

        /**
         * The size in pixels of the dot drawn over highlighted points.
         */
        highlightCircleSize?: number;

        /**
         * The size of the dot to draw on each point in pixels (see drawPoints). A dot is always
         * drawn when a point is "isolated", i.e. there is a missing point on either side of it. This
         * also controls the size of those dots.
         */
        pointSize?: number;

        /**
         * Mark this series for inclusion in the range selector. The mini plot curve will be an
         * average of all such series. If this is not specified for any series, the default behavior
         * is to average all the series. Setting it for one series will result in that series being
         * charted alone in the range selector.
         */
        showInRangeSelector?: boolean;

        /**
         * When set, display the graph as a step plot instead of a line plot. This option may either
         * be set for the whole graph or for single series.
         */
        stepPlot?: boolean;

        /**
         * Draw a border around graph lines to make crossing lines more easily distinguishable.
         * Useful for graphs with many lines.
         */
        strokeBorderWidth?: number;

        /**
         * Color for the line border used if strokeBorderWidth is set.
         */
        strokeBorderColor?: string;

        /**
         * A custom pattern array where the even index is a draw and odd is a space in pixels. If
         * null then it draws a solid line. The array should have a even length as any odd lengthed
         * array could be expressed as a smaller even length array. This is used to create dashed
         * lines.
         */
        strokePattern?: number[];

        /**
         * The width of the lines connecting data points. This can be used to increase the contrast
         * or some graphs.
         */
        strokeWidth?: number;
    }

    interface PerAxisOptions {
        /**
         * Color for x- and y-axis labels. This is a CSS color string.
         */
        axisLabelColor?: string;

        /**
         * Size of the font (in pixels) to use in the axis labels, both x- and y-axis.
         */
        axisLabelFontSize?: number;

        /**
         * Function to call to format the tick values that appear along an axis. This is usually set
         * on a <a href='per-axis.html'>per-axis</a> basis.
         */
        axisLabelFormatter?: (v: number | Date, granularity: number, opts: (name: string) => any, dygraph: Dygraph) => any;

        /**
         * Width (in pixels) of the containing divs for x- and y-axis labels. For the y-axis, this
         * also controls the width of the y-axis. Note that for the x-axis, this is independent from
         * pixelsPerLabel, which controls the spacing between labels.
         */
        axisLabelWidth?: number;

        /**
         * Color of the x- and y-axis lines. Accepts any value which the HTML canvas strokeStyle
         * attribute understands, e.g. 'black' or 'rgb(0, 100, 255)'.
         */
        axisLineColor?: string;

        /**
         * Thickness (in pixels) of the x- and y-axis lines.
         */
        axisLineWidth?: number;

        /**
         * The size of the line to display next to each tick mark on x- or y-axes.
         */
        axisTickSize?: number;

        /**
         * Whether to draw the specified axis. This may be set on a per-axis basis to define the
         * visibility of each axis separately. Setting this to false also prevents axis ticks from
         * being drawn and reclaims the space for the chart grid/lines.
         */
        drawAxis?: boolean;

        /**
         * The color of the gridlines. This may be set on a per-axis basis to define each axis' grid
         * separately.
         */
        gridLineColor?: string;

        /**
         * A custom pattern array where the even index is a draw and odd is a space in pixels. If
         * null then it draws a solid line. The array should have a even length as any odd lengthed
         * array could be expressed as a smaller even length array. This is used to create dashed
         * gridlines.
         */
        gridLinePattern?: number[];

        /**
         * Thickness (in pixels) of the gridlines drawn under the chart. The vertical/horizontal
         * gridlines can be turned off entirely by using the drawXGrid and drawYGrid options. This
         * may be set on a per-axis basis to define each axis' grid separately.
         */
        gridLineWidth?: number;

        /**
         * Only valid for y and y2, has no effect on x: This option defines whether the y axes should
         * align their ticks or if they should be independent. Possible combinations: 1.) y=true,
         * y2=false (default): y is the primary axis and the y2 ticks are aligned to the the ones of
         * y. (only 1 grid) 2.) y=false, y2=true: y2 is the primary axis and the y ticks are aligned
         * to the the ones of y2. (only 1 grid) 3.) y=true, y2=true: Both axis are independent and
         * have their own ticks. (2 grids) 4.) y=false, y2=false: Invalid configuration causes an
         * error.
         */
        independentTicks?: boolean;

        /**
         * When set for the y-axis or x-axis, the graph shows that axis in log scale. Any values less
         * than or equal to zero are not displayed. Showing log scale with ranges that go below zero
         * will result in an unviewable graph.
         *
         * Not compatible with showZero. connectSeparatedPoints is ignored. This is ignored for
         * date-based x-axes.
         */
        logscale?: boolean;

        /**
         * When displaying numbers in normal (not scientific) mode, large numbers will be displayed
         * with many trailing zeros (e.g. 100000000 instead of 1e9). This can lead to unwieldy y-axis
         * labels. If there are more than <code>maxNumberWidth</code> digits to the left of the
         * decimal in a number, dygraphs will switch to scientific notation, even when not operating
         * in scientific mode. If you'd like to see all those digits, set this to something large,
         * like 20 or 30.
         */
        maxNumberWidth?: number;

        /**
         * Number of pixels to require between each x- and y-label. Larger values will yield a
         * sparser axis with fewer ticks. This is set on a <a href='per-axis.html'>per-axis</a>
         * basis.
         */
        pixelsPerLabel?: number;

        /**
         * By default, dygraphs displays numbers with a fixed number of digits after the decimal
         * point. If you'd prefer to have a fixed number of significant figures, set this option to
         * that number of sig figs. A value of 2, for instance, would cause 1 to be display as 1.0
         * and 1234 to be displayed as 1.23e+3.
         */
        sigFigs?: number;

        /**
         * This lets you specify an arbitrary function to generate tick marks on an axis. The tick
         * marks are an array of (value, label) pairs. The built-in functions go to great lengths to
         * choose good tick marks so, if you set this option, you'll most likely want to call one of
         * them and modify the result. See dygraph-tickers.js for an extensive discussion. This is
         * set on a <a href='per-axis.html'>per-axis</a> basis.
         */
        ticker?: (
            min: number,
            max: number,
            pixels: number,
            opts: (name: string) => any,
            dygraph: Dygraph,
            vals: number[]) => Array<{ v: number, label: string }>;


        /**
         * Function to provide a custom display format for the values displayed on mouseover. This
         * does not affect the values that appear on tick marks next to the axes. To format those,
         * see axisLabelFormatter. This is usually set on a <a href='per-axis.html'>per-axis</a>
         * basis.
         */
        valueFormatter?: (
            v: number,
            opts: (name: string) => any,
            seriesName: string,
            dygraph: Dygraph,
            row: number,
            col: number) => any;

        /**
         * Explicitly set the vertical range of the graph to [low, high]. This may be set on a
         * per-axis basis to define each y-axis separately. If either limit is unspecified, it will
         * be calculated automatically (e.g. [null, 30] to automatically calculate just the lower
         * bound)
         */
        valueRange?: number[];

        /**
         * Whether to display gridlines in the chart. This may be set on a per-axis basis to define
         * the visibility of each axis' grid separately.
         */
        drawGrid?: boolean;

        /**
         * Show K/M/B for thousands/millions/billions on y-axis.
         */
        labelsKMB?: boolean;

        /**
         * Show k/M/G for kilo/Mega/Giga on y-axis. This is different than <code>labelsKMB</code> in
         * that it uses base 2, not 10.
         */
        labelsKMG2?: boolean;
    }

    interface SeriesLegendData {
        /**
         * Assigned or generated series color
         */
        color: string;
        /**
         * Series line dash
         */
        dashHTML: string;
        /**
         * Whether currently focused or not
         */
        isHighlighted: boolean;
        /**
         * Whether the series line is inside the selected/zoomed region
         */
        isVisible: boolean;
        /**
         * Assigned label to this series
         */
        label: string;
        /**
         * Generated label html for this series
         */
        labelHTML: string;
        /**
         * y value of this series
         */
        y: number;
        /**
         * Generated html for y value
         */
        yHTML: string;
    }
    interface LegendData {
        /**
         * x value of highlighted points
         */
        x: number;
        /**
         * Generated HTML for x value
         */
        xHTML: string;
        /**
         * Series data for the highlighted points
         */
        series: SeriesLegendData[];
        /**
         * Dygraph object for this graph
         */
        dygraph: Dygraph;
    }
    interface Options extends PerSeriesOptions, PerAxisOptions {
        /**
         * Set this option to animate the transition between zoom windows. Applies to programmatic
         * and interactive zooms. Note that if you also set a drawCallback, it will be called several
         * times on each zoom. If you set a zoomCallback, it will only be called after the animation
         * is complete.
         */
        animatedZooms?: boolean

        /**
         * If provided, this function is called whenever the user clicks on an annotation.
         */
        annotationClickHandler?: (annotation: dygraphs.Annotation, point: Point, dygraph: Dygraph, event: MouseEvent) => any;

        /**
         * If provided, this function is called whenever the user double-clicks on an annotation.
         */
        annotationDblClickHandler?: (annotation: dygraphs.Annotation, point: Point, dygraph: Dygraph, event: MouseEvent) => any;

        /**
         * If provided, this function is called whenever the user mouses out of an annotation.
         */
        annotationMouseOutHandler?: (annotation: dygraphs.Annotation, point: Point, dygraph: Dygraph, event: MouseEvent) => any;

        /**
         * If provided, this function is called whenever the user mouses over an annotation.
         */
        annotationMouseOverHandler?: (annotation: dygraphs.Annotation, point: Point, dygraph: Dygraph, event: MouseEvent) => any;

        /**
         * Defines per-axis options. Valid keys are 'x', 'y' and 'y2'. Only some options may be set
         * on a per-axis basis. If an option may be set in this way, it will be noted on this page.
         * See also documentation on <a href='http://dygraphs.com/per-axis.html'>per-series and
         * per-axis options</a>.
         */
        axes?: {
            x?: PerAxisOptions;
            y?: PerAxisOptions;
            y2?: PerAxisOptions;
        };

        /**
         * A function to call when the canvas is clicked.
         */
        clickCallback?: (e: MouseEvent, xval: number, points: Point[]) => any;

        /**
         * If <strong>colors</strong> is not specified, saturation of the automatically-generated
         * data series colors. (0.0-1.0).
         */
        colorSaturation?: number;

        /**
         * If colors is not specified, value of the data series colors, as in hue/saturation/value.
         * (0.0-1.0, default 0.5)
         */
        colorValue?: number;

        /**
         * List of colors for the data series. These can be of the form "#AABBCC" or
         * "rgb(255,100,200)" or "yellow", etc. If not specified, equally-spaced points around a
         * color wheel are used. Overridden by the 'color' option.
         */
        colors?: string[];

        /**
         * Usually, when Dygraphs encounters a missing value in a data series, it interprets this as
         * a gap and draws it as such. If, instead, the missing values represents an x-value for
         * which only a different series has data, then you'll want to connect the dots by setting
         * this to true. To explicitly include a gap with this option set, use a value of NaN.
         */
        connectSeparatedPoints?: boolean;

        /**
         * When set, parse each CSV cell as "low;middle;high". Error bars will be drawn for each
         * point between low and high, with the series itself going through middle.
         */
        customBars?: boolean

        /**
         * Custom DataHandler. This is an advanced customization. See http://bit.ly/151E7Aq.
         */
        dataHandler?: any;

        /**
         * Initially zoom in on a section of the graph. Is of the form [earliest, latest], where
         * earliest/latest are milliseconds since epoch. If the data for the x-axis is numeric, the
         * values in dateWindow must also be numbers.
         */
        dateWindow?: number[];

        /**
         * The delimiter to look for when separating fields of a CSV file. Setting this to a tab is
         * not usually necessary, since tab-delimited data is auto-detected.
         */
        delimiter?: string;

        /**
         * Unless it's run in scientific mode (see the <code>sigFigs</code> option), dygraphs
         * displays numbers with <code>digitsAfterDecimal</code> digits after the decimal point.
         * Trailing zeros are not displayed, so with a value of 2 you'll get '0', '0.1', '0.12',
         * '123.45' but not '123.456' (it will be rounded to '123.46'). Numbers with absolute value
         * less than 0.1^digitsAfterDecimal (i.e. those which would show up as '0.00') will be
         * displayed in scientific notation.
         */
        digitsAfterDecimal?: number;

        /**
         * Only applies when Dygraphs is used as a GViz chart. Causes string columns following a data
         * series to be interpreted as annotations on points in that series. This is the same format
         * used by Google's AnnotatedTimeLine chart.
         */
        displayAnnotations?: boolean;

        /**
         * When set, draw the X axis at the Y=0 position and the Y axis at the X=0 position if those
         * positions are inside the graph's visible area. Otherwise, draw the axes at the bottom or
         * left graph edge as usual.
         */
        drawAxesAtZero?: boolean;

        /**
         * When set, this callback gets called every time the dygraph is drawn. This includes the
         * initial draw, after zooming and repeatedly while panning.
         */
        drawCallback?: (dygraph: Dygraph, is_initial: boolean) => any;

        /**
         * Draw points at the edges of gaps in the data. This improves visibility of small data
         * segments or other data irregularities.
         */
        drawGapEdgePoints?: boolean;

        /**
         * Draw a custom item when a point is highlighted.    Default is a small dot matching the
         * series color. This method should constrain drawing to within pointSize pixels from (cx,
         * cy) Also see <a href='#drawPointCallback'>drawPointCallback</a>
         */
        drawHighlightPointCallback?: (
            g: Dygraph,
            seriesName: string,
            canvasContext: CanvasRenderingContext2D,
            cx: number,
            cy: number,
            color: string,
            pointSize: number) => any;

        /**
         * Draw a custom item when drawPoints is enabled. Default is a small dot matching the series
         * color. This method should constrain drawing to within pointSize pixels from (cx, cy).
         * Also see <a href='#drawHighlightPointCallback'>drawHighlightPointCallback</a>
         */
        drawPointCallback?: (
            g: Dygraph,
            seriesName: string,
            canvasContext: CanvasRenderingContext2D,
            cx: number,
            cy: number,
            color: string,
            pointSize: number) => any;

        /**
         * Does the data contain standard deviations? Setting this to true alters the input format.
         */
        errorBars?: boolean;

        /**
         * Sets the data being displayed in the chart. This can only be set when calling
         * updateOptions; it cannot be set from the constructor. For a full description of valid data
         * formats, see the <a href='http://dygraphs.com/data.html'>Data Formats</a> page.
         */
        file?: Data;

        /**
         * When set, attempt to parse each cell in the CSV file as "a/b", where a and b are integers.
         * The ratio will be plotted. This allows computation of Wilson confidence intervals (see
         * below).
         */
        fractions?: boolean;

        /**
         * Height, in pixels, of the chart. If the container div has been explicitly sized, this will
         * be ignored.
         */
        height?: number;

        /**
         * Whether to hide the legend when the mouse leaves the chart area.
         */
        hideOverlayOnMouseOut?: boolean;

        /**
         * When set, this callback gets called every time a new point is highlighted.
         */
        highlightCallback?: (
            event: MouseEvent,
            xval: number,
            points: Point[],
            row: number,
            seriesName: string) => any;

        /**
         * Fade the background while highlighting series. 1=fully visible background (disable
         * fading), 0=hiddden background (show highlighted series only).
         */
        highlightSeriesBackgroundAlpha?: number;

        /**
         * Sets the background color used to fade out the series in conjunction with 'highlightSeriesBackgroundAlpha'.
         * Default: rgb(255, 255, 255)
         */
        highlightSeriesBackgroundColor?: string;

        /**
         * When set, the options from this object are applied to the timeseries closest to the mouse
         * pointer for interactive highlighting. See also 'highlightCallback'. Example:
         * highlightSeriesOpts: { strokeWidth: 3 }.
         */
        highlightSeriesOpts?: PerSeriesOptions;

        /**
         * Usually, dygraphs will use the range of the data plus some padding to set the range of the
         * y-axis. If this option is set, the y-axis will always include zero, typically as the
         * lowest value. This can be used to avoid exaggerating the variance in the data
         */
        includeZero?: boolean;

        interactionModel?: any;

        /**
         * When this option is passed to updateOptions() along with either the
         * <code>dateWindow</code> or <code>valueRange</code> options, the zoom flags are not changed
         * to reflect a zoomed state. This is primarily useful for when the display area of a chart
         * is changed programmatically and also where manual zooming is allowed and use is made of
         * the <code>isZoomed</code> method to determine this.
         */
        isZoomedIgnoreProgrammaticZoom?: boolean;

        /**
         * A name for each data series, including the independent (X) series. For CSV files and
         * DataTable objections, this is determined by context. For raw data, this must be specified.
         * If it is not, default values are supplied and a warning is logged.
         */
        labels?: string[];

        /**
         * Show data labels in an external div, rather than on the graph.    This value can either be a
         * div element or a div id.
         */
        labelsDiv?: string | HTMLElement;

        /**
         * Additional styles to apply to the currently-highlighted points div. For example, {
         * 'fontWeight': 'bold' } will make the labels bold. In general, it is better to use CSS to
         * style the .dygraph-legend class than to use this property.
         */
        labelsDivStyles?: { [cssProperty: string]: string };

        /**
         * Width (in pixels) of the div which shows information on the currently-highlighted points.
         */
        labelsDivWidth?: number;

        /**
         * Put <code>&lt;br/&gt;</code> between lines in the label string. Often used in conjunction
         * with <strong>labelsDiv</strong>.
         */
        labelsSeparateLines?: boolean;

        /**
         * Show zero value labels in the labelsDiv.
         */
        labelsShowZeroValues?: boolean;

        /**
         * Show date/time labels according to UTC (instead of local time).
         */
        labelsUTC?: boolean;

        /**
         * When to display the legend. By default, it only appears when a user mouses over the chart.
         * Set it to "always" to always display a legend of some sort. When set to "follow", legend
         * follows highlighted points. If set to 'never' then it will not appear at all.
         */
        legend?: 'always' | 'follow' | 'onmouseover' | 'never';

        /**
         * for details see https://github.com/danvk/dygraphs/pull/683
         */
        legendFormatter?: (legendData: LegendData) => string;

        /**
         * A value representing the farthest a graph may be panned, in percent of the display. For
         * example, a value of 0.1 means that the graph can only be panned 10% pased the edges of the
         * displayed values. null means no bounds.
         */
        panEdgeFraction?: number;

        /**
         * A function (or array of functions) which plot each data series on the chart.
         * TODO(danvk): more details! May be set per-series.
         */
        plotter?: any;

        /**
         * Defines per-graph plugins. Useful for per-graph customization
         */
        plugins?: any[];

        /**
         * A function to call when a data point is clicked. and the point that was clicked.
         */
        pointClickCallback?: (e: MouseEvent, point: Point) => any;

        /**
         * Height, in pixels, of the range selector widget. This option can only be specified at
         * Dygraph creation time.
         */
        rangeSelectorHeight?: number;

        /**
         * The range selector mini plot fill color. This can be of the form "#AABBCC" or
         * "rgb(255,100,200)" or "yellow". You can also specify null or "" to turn off fill.
         */
        rangeSelectorPlotFillColor?: string;

        /**
         * The range selector mini plot stroke color. This can be of the form "#AABBCC" or
         * "rgb(255,100,200)" or "yellow". You can also specify null or "" to turn off stroke.
         */
        rangeSelectorPlotStrokeColor?: string;

        /**
         * Number of pixels to leave blank at the right edge of the Dygraph. This makes it easier to
         * highlight the right-most data point.
         */
        rightGap?: number;

        /**
         * Number of days over which to average data. Discussed extensively above.
         */
        rollPeriod?: number;

        /**
         * Defines per-series options. Its keys match the y-axis label names, and the values are
         * dictionaries themselves that contain options specific to that series. When this option is
         * missing, it falls back on the old-style of per-series options comingled with global
         * options.
         */
        series?: {
            [seriesName: string]: PerSeriesOptions
        };

        /**
         * Whether to show the legend upon mouseover.
         */
        showLabelsOnHighlight?: boolean;

        /**
         * Show or hide the range selector widget.
         */
        showRangeSelector?: boolean;

        /**
         * If the rolling average period text box should be shown.
         */
        showRoller?: boolean;

        /**
         * When errorBars is set, shade this many standard deviations above/below each point.
         */
        sigma?: number;

        /**
         * If set, stack series on top of one another rather than drawing them independently. The
         * first series specified in the input data will wind up on top of the chart and the last
         * will be on bottom. NaN values are drawn as white areas without a line on top, see
         * stackedGraphNaNFill for details.
         */
        stackedGraph?: boolean;

        /**
         * Controls handling of NaN values inside a stacked graph. NaN values are
         * interpolated/extended for stacking purposes, but the actual point value remains NaN in the
         * legend display. Valid option values are "all" (interpolate internally, repeat leftmost and
         * rightmost value as needed), "inside" (interpolate internally only, use zero outside
         * leftmost and rightmost value), and "none" (treat NaN as zero everywhere).
         */
        stackedGraphNaNFill?: string;

        /**
         * Text to display above the chart. You can supply any HTML for this value, not just text. If
         * you wish to style it using CSS, use the 'dygraph-label' or 'dygraph-title' classes.
         */
        title?: string;

        /**
         * Height of the chart title, in pixels. This also controls the default font size of the
         * title. If you style the title on your own, this controls how much space is set aside above
         * the chart for the title's div.
         */
        titleHeight?: number;

        /**
         * When set, this callback gets called before the chart is drawn. It details on how to use
         * this.
         */
        underlayCallback?: (context: CanvasRenderingContext2D, area: dygraphs.Area, dygraph: Dygraph) => any;

        /**
         * When set, this callback gets called every time the user stops highlighting any point by
         * mousing out of the graph.
         */
        unhighlightCallback?: (event: MouseEvent) => any;

        /**
         * Which series should initially be visible? Once the Dygraph has been constructed, you can
         * access and modify the visibility of each series using the <code>visibility</code> and
         * <code>setVisibility</code> methods.
         */
        visibility?: boolean[];

        /**
         * Width, in pixels, of the chart. If the container div has been explicitly sized, this will
         * be ignored.
         */
        width?: number;

        /**
         * Use in conjunction with the "fractions" option. Instead of plotting +/- N standard
         * deviations, dygraphs will compute a Wilson confidence interval and plot that. This has
         * more reasonable behavior for ratios close to 0 or 1.
         */
        wilsonInterval?: boolean;

        /**
         * Height, in pixels, of the x-axis. If not set explicitly, this is computed based on
         * axisLabelFontSize and axisTickSize.
         */
        xAxisHeight?: number;

        /**
         * Height of the x-axis label, in pixels. This also controls the default font size of the
         * x-axis label. If you style the label on your own, this controls how much space is set
         * aside below the chart for the x-axis label's div.
         */
        xLabelHeight?: number;

        /**
         * Add the specified amount of extra space (in pixels) around the X-axis value range to
         * ensure points at the edges remain visible.
         */
        xRangePad?: number;

        /**
         * A function which parses x-values (i.e. the dependent series). Must return a number, even
         * when the values are dates. In this case, millis since epoch are used. This is used
         * primarily for parsing CSV data. *=Dygraphs is slightly more accepting in the dates which
         * it will parse. See code for details.
         */
        xValueParser?: (val: string) => number;

        /**
         * Text to display below the chart's x-axis. You can supply any HTML for this value, not just
         * text. If you wish to style it using CSS, use the 'dygraph-label' or 'dygraph-xlabel'
         * classes.
         */
        xlabel?: string;

        /**
         * Text to display to the right of the chart's secondary y-axis. This label is only displayed
         * if a secondary y-axis is present. See <a
         * href='http://dygraphs.com/tests/two-axes.html'>this test</a> for an example of how to do
         * this. The comments for the 'ylabel' option generally apply here as well. This label gets a
         * 'dygraph-y2label' instead of a 'dygraph-ylabel' class.
         */
        y2label?: string;

        /**
         * Width of the div which contains the y-axis label. Since the y-axis label appears rotated
         * 90 degrees, this actually affects the height of its div.
         */
        yLabelWidth?: number;

        /**
         * If set, add the specified amount of extra space (in pixels) around the Y-axis value range
         * to ensure points at the edges remain visible. If unset, use the traditional Y padding
         * algorithm.
         */
        yRangePad?: number;

        /**
         * Text to display to the left of the chart's y-axis. You can supply any HTML for this value,
         * not just text. If you wish to style it using CSS, use the 'dygraph-label' or
         * 'dygraph-ylabel' classes. The text will be rotated 90 degrees by default, so CSS rules may
         * behave in unintuitive ways. No additional space is set aside for a y-axis label. If you
         * need more space, increase the width of the y-axis tick labels using the yAxisLabelWidth
         * option. If you need a wider div for the y-axis label, either style it that way with CSS
         * (but remember that it's rotated, so width is controlled by the 'height' property) or set
         * the yLabelWidth option.
         */
        ylabel?: string;

        /**
         * A function to call when the zoom window is changed (either by zooming in or out).
         */
        zoomCallback?: (minDate: number, maxDate: number, yRanges: [number, number][]) => any;
    }

    interface SeriesProperties {
        name: string;
        column: number;
        visible: boolean;
        color: string;
        axis: number;
    }

    interface Area {
        x: number;
        y: number;
        w: number;
        h: number;
    }

    /**
     * Point structure.
     *
     * xval_* and yval_* are the original unscaled data values,
     * while x_* and y_* are scaled to the range (0.0-1.0) for plotting.
     * yval_stacked is the cumulative Y value used for stacking graphs,
     * and bottom/top/minus/plus are used for error bar graphs.
     */
    interface Point {
        idx: number;
        name: string;
        x?: number;
        xval?: number;
        y_bottom?: number;
        y?: number;
        y_stacked?: number;
        y_top?: number;
        yval_minus?: number;
        yval?: number;
        yval_plus?: number;
        yval_stacked?: number;
        annotation?: dygraphs.Annotation;
    }

    interface Annotation {
        /** The name of the series to which the annotated point belongs. */
        series: string;

        /**
         * The x value of the point. This should be the same as the value
         * you specified in your CSV file, e.g. "2010-09-13".
         * You must set either x or xval.
         */
        x?: number | string;

        /**
         * numeric value of the point, or millis since epoch.
         */
        xval?: number;

        /**	Text that will appear on the annotation's flag. */
        shortText?: string;

        /** A longer description of the annotation which will appear when the user hovers over it. */
        text?: string;

        /**
         * Specify in place of shortText to mark the annotation with an image rather than text.
         * If you specify this, you must specify width and height.
         */
        icon?: string;

        /**	Width (in pixels) of the annotation flag or icon. */
        width?: number;
        /** Height (in pixels) of the annotation flag or icon. */
        height?: number;

        /**	CSS class to use for styling the annotation. */
        cssClass?: string;

        /**	Height of the tick mark (in pixels) connecting the point to its flag or icon. */
        tickHeight?: number;

        /**	If true, attach annotations to the x-axis, rather than to actual points. */
        attachAtBottom?: boolean;

        div?: HTMLDivElement;

        /** This function is called whenever the user clicks on this annotation. */
        clickHandler?: (annotation: dygraphs.Annotation, point: Point, dygraph: Dygraph, event: MouseEvent) => any;

        /** This function is called whenever the user mouses over this annotation. */
        mouseOverHandler?: (annotation: dygraphs.Annotation, point: Point, dygraph: Dygraph, event: MouseEvent) => any;

        /** This function is called whenever the user mouses out of this annotation. */
        mouseOutHandler?: (annotation: dygraphs.Annotation, point: Point, dygraph: Dygraph, event: MouseEvent) => any;

        /** this function is called whenever the user double-clicks on this annotation. */
        dblClickHandler?: (annotation: dygraphs.Annotation, point: Point, dygraph: Dygraph, event: MouseEvent) => any;
    }

    type Axis = 'x' | 'y' | 'y2';
}

declare class Dygraph {
    constructor(
        container: HTMLElement | string,
        data: dygraphs.Data | (() => dygraphs.Data),
        options?: dygraphs.Options);

    /**
     * Returns the zoomed status of the chart for one or both axes.
     *
     * Axis is an optional parameter. Can be set to 'x' or 'y'.
     *
     * The zoomed status for an axis is set whenever a user zooms using the mouse
     * or when the dateWindow or valueRange are updated (unless the
     * isZoomedIgnoreProgrammaticZoom option is also specified).
     */
    isZoomed(axis?: 'x' | 'y'): boolean;

    /**
     * Returns information about the Dygraph object, including its containing ID.
     */
    toString(): string;

    /**
     * Returns the current value for an option, as set in the constructor or via
     * updateOptions. You may pass in an (optional) series name to get per-series
     * values for the option.
     *
     * All values returned by this method should be considered immutable. If you
     * modify them, there is no guarantee that the changes will be honored or that
     * dygraphs will remain in a consistent state. If you want to modify an option,
     * use updateOptions() instead.
     *
     * @param {string} name The name of the option (e.g. 'strokeWidth')
     * @param {string=} opt_seriesName Series name to get per-series values.
     * @return {*} The value of the option.
     */
    getOption(name: string, seriesName?: string): any;

    /**
     * Get the value of an option on a per-axis basis.
     */
    getOptionForAxis(name: string, axis: dygraphs.Axis): any;

    /**
     * Returns the current rolling period, as set by the user or an option.
     */
    rollPeriod(): number;

    /**
     * Returns the currently-visible x-range. This can be affected by zooming,
     * panning or a call to updateOptions.
     * Returns a two-element array: [left, right].
     * If the Dygraph has dates on the x-axis, these will be millis since epoch.
     */
    xAxisRange(): [number, number];

    /**
     * Returns the lower- and upper-bound x-axis values of the data set.
     */
    xAxisExtremes(): [number, number];

    /**
     * Returns the currently-visible y-range for an axis. This can be affected by
     * zooming, panning or a call to updateOptions. Axis indices are zero-based. If
     * called with no arguments, returns the range of the first axis.
     * Returns a two-element array: [bottom, top].
     */
    yAxisRange(idx?: number): [number, number];

    /**
     * Returns the currently-visible y-ranges for each axis. This can be affected by
     * zooming, panning, calls to updateOptions, etc.
     * Returns an array of [bottom, top] pairs, one for each y-axis.
     */
    yAxisRanges(): [number, number][];

    /**
     * Convert from data coordinates to canvas/div X/Y coordinates.
     * If specified, do this conversion for the coordinate system of a particular
     * axis. Uses the first axis by default.
     * Returns a two-element array: [X, Y]
     *
     * Note: use toDomXCoord instead of toDomCoords(x, null) and use toDomYCoord
     * instead of toDomCoords(null, y, axis).
     */
    toDomCoords(x: number, y: number, axis?: number): [number, number];

    /**
     * Convert from data x coordinates to canvas/div X coordinate.
     * If specified, do this conversion for the coordinate system of a particular
     * axis.
     * Returns a single value or null if x is null.
     */
    toDomXCoord(x: number): number;

    /**
     * Convert from data y coordinates to canvas/div Y coordinate and optional
     * axis. Uses the first axis by default.
     *
     * returns a single value or null if y is null.
     */
    toDomYCoord(y: number, axis?: number): number;

    /**
     * Convert from canvas/div coords to data coordinates.
     * If specified, do this conversion for the coordinate system of a particular
     * axis. Uses the first axis by default.
     * Returns a two-element array: [X, Y].
     *
     * Note: use toDataXCoord instead of toDataCoords(x, null) and use toDataYCoord
     * instead of toDataCoords(null, y, axis).
     */
    toDataCoords(x: number, y: number, axis?: number): [number, number];

    /**
     * Convert from canvas/div x coordinate to data coordinate.
     *
     * If x is null, this returns null.
     */
    toDataXCoord(x: number): number;

    /**
     * Convert from canvas/div y coord to value.
     *
     * If y is null, this returns null.
     * if axis is null, this uses the first axis.
     */
    toDataYCoord(y: number, axis?: number): number;

    /**
     * Converts a y for an axis to a percentage from the top to the
     * bottom of the drawing area.
     *
     * If the coordinate represents a value visible on the canvas, then
     * the value will be between 0 and 1, where 0 is the top of the canvas.
     * However, this method will return values outside the range, as
     * values can fall outside the canvas.
     *
     * If y is null, this returns null.
     * if axis is null, this uses the first axis.
     *
     * @param {number} y The data y-coordinate.
     * @param {number} [axis] The axis number on which the data coordinate lives.
     * @return {number} A fraction in [0, 1] where 0 = the top edge.
     */
    toPercentYCoord(y: number, axis?: number): number;

    /**
     * Converts an x value to a percentage from the left to the right of
     * the drawing area.
     *
     * If the coordinate represents a value visible on the canvas, then
     * the value will be between 0 and 1, where 0 is the left of the canvas.
     * However, this method will return values outside the range, as
     * values can fall outside the canvas.
     *
     * If x is null, this returns null.
     * @param {number} x The data x-coordinate.
     * @return {number} A fraction in [0, 1] where 0 = the left edge.
     */
    toPercentXCoord(x: number): number;

    /**
     * Returns the number of columns (including the independent variable).
     */
    numColumns(): number;

    /**
     * Returns the number of rows (excluding any header/label row).
     */
    numRows(): number;

    /**
     * Returns the value in the given row and column. If the row and column exceed
     * the bounds on the data, returns null. Also returns null if the value is
     * missing.
     * @param {number} row The row number of the data (0-based). Row 0 is the
     *         first row of data, not a header row.
     * @param {number} col The column number of the data (0-based)
     * @return {number} The value in the specified cell or null if the row/col
     *         were out of range.
     */
    getValue(row: number, col: number): number;

    /**
     * Detach DOM elements in the dygraph and null out all data references.
     * Calling this when you're done with a dygraph can dramatically reduce memory
     * usage. See, e.g., the tests/perf.html example.
     */
    destroy(): void;

    /**
     * Return the list of colors. This is either the list of colors passed in the
     * attributes or the autogenerated list of rgb(r,g,b) strings.
     * This does not return colors for invisible series.
     * @return {Array.<string>} The list of colors.
     */
    getColors(): string[];

    /**
     * Returns a few attributes of a series, i.e. its color, its visibility, which
     * axis it's assigned to, and its column in the original data.
     * Returns null if the series does not exist.
     * Otherwise, returns an object with column, visibility, color and axis properties.
     * The "axis" property will be set to 1 for y1 and 2 for y2.
     * The "column" property can be fed back into getValue(row, column) to get
     * values for this series.
     */
    getPropertiesForSeries(series_name: string): dygraphs.SeriesProperties;

    /**
     * Reset the zoom to the original view coordinates. This is the same as
     * double-clicking on the graph.
     */
    resetZoom(): void;

    /**
     * Get the current graph's area object.
     */
    getArea(): dygraphs.Area;

    /**
     * Convert a mouse event to DOM coordinates relative to the graph origin.
     *
     * Returns a two-element array: [X, Y].
     */
    eventToDomCoords(event: MouseEvent): [number, number];

    /**
     * Manually set the selected points and display information about them in the
     * legend. The selection can be cleared using clearSelection() and queried
     * using getSelection().
     * @param {number} row Row number that should be highlighted (i.e. appear with
     * hover dots on the chart).
     * @param {seriesName} optional series name to highlight that series with the
     * the highlightSeriesOpts setting.
     * @param { locked } optional If true, keep seriesName selected when mousing
     * over the graph, disabling closest-series highlighting. Call clearSelection()
     * to unlock it.
     */
    setSelection(row: number | boolean, seriesName?: string, locked?: boolean): void;

    /**
     * Clears the current selection (i.e. points that were highlighted by moving
     * the mouse over the chart).
     */
    clearSelection(): void;

    /**
     * Returns the number of the currently selected row. To get data for this row,
     * you can use the getValue method.
     * @return {number} row number, or -1 if nothing is selected
     */
    getSelection(): number;

    /**
     * Returns the name of the currently-highlighted series.
     * Only available when the highlightSeriesOpts option is in use.
     */
    getHighlightSeries(): string;

    /**
     * Returns true if the currently-highlighted series was locked
     * via setSelection(..., seriesName, true).
     */
    isSeriesLocked(): boolean;

    /**
     * Returns the number of y-axes on the chart.
     */
    numAxes(): number;

    /**
     * Changes various properties of the graph. These can include:
     * <ul>
     * <li>file: changes the source data for the graph</li>
     * <li>errorBars: changes whether the data contains stddev</li>
     * </ul>
     *
     * There's a huge variety of options that can be passed to this method. For a
     * full list, see http://dygraphs.com/options.html.
     *
     * @param {Object} input_attrs The new properties and values
     * @param {boolean} block_redraw Usually the chart is redrawn after every
     *         call to updateOptions(). If you know better, you can pass true to
     *         explicitly block the redraw. This can be useful for chaining
     *         updateOptions() calls, avoiding the occasional infinite loop and
     *         preventing redraws when it's not necessary (e.g. when updating a
     *         callback).
     */
    updateOptions(input_attrs: dygraphs.Options, block_redraw?: boolean): void;

    /**
     * Resizes the dygraph. If no parameters are specified, resizes to fill the
     * containing div (which has presumably changed size since the dygraph was
     * instantiated. If the width/height are specified, the div will be resized.
     *
     * This is far more efficient than destroying and re-instantiating a
     * Dygraph, since it doesn't have to reparse the underlying data.
     *
     * @param {number} width Width (in pixels)
     * @param {number} height Height (in pixels)
     */
    resize(width: number, height: number): void;

    /**
     * Adjusts the number of points in the rolling average. Updates the graph to
     * reflect the new averaging period.
     * @param {number} length Number of points over which to average the data.
     */
    adjustRoll(length: number): void;

    /**
     * Returns a boolean array of visibility statuses.
     */
    visibility(): boolean[];

    /**
     * Changes the visiblity of a series.
     *
     * @param {number} num the series index
     * @param {boolean} value true or false, identifying the visibility.
     */
    setVisibility(num: number, value: boolean): void;

    /**
     * Update the list of annotations and redraw the chart.
     * See dygraphs.com/annotations.html for more info on how to use annotations.
     * @param ann {Array} An array of annotation objects.
     * @param suppressDraw {Boolean} Set to "true" to block chart redraw (optional).
     */
    setAnnotations(ann: dygraphs.Annotation[], suppressDraw?: boolean): void;

    /**
     * Return the list of annotations.
     */
    annotations(): dygraphs.Annotation[];

    /**
     * Get the list of label names for this graph. The first column is the
     * x-axis, so the data series names start at index 1.
     *
     * Returns null when labels have not yet been defined.
     */
    getLabels(): string[];

    /**
     * Get the index of a series (column) given its name. The first column is the
     * x-axis, so the data series start with index 1.
     */
    indexFromSetName(name: string): number;

    /**
     * Trigger a callback when the dygraph has drawn itself and is ready to be
     * manipulated. This is primarily useful when dygraphs has to do an XHR for the
     * data (i.e. a URL is passed as the data source) and the chart is drawn
     * asynchronously. If the chart has already drawn, the callback will fire
     * immediately.
     *
     * This is a good place to call setAnnotations().
     */
    ready(callback: (g: Dygraph) => any): void;

    // Tick granularities (passed to ticker).
    static SECONDLY: number;
    static TWO_SECONDLY: number;
    static FIVE_SECONDLY: number;
    static TEN_SECONDLY: number;
    static THIRTY_SECONDLY: number;
    static MINUTELY: number;
    static TWO_MINUTELY: number;
    static FIVE_MINUTELY: number;
    static TEN_MINUTELY: number;
    static THIRTY_MINUTELY: number;
    static HOURLY: number;
    static TWO_HOURLY: number;
    static SIX_HOURLY: number;
    static DAILY: number;
    static TWO_DAILY: number;
    static WEEKLY: number;
    static MONTHLY: number;
    static QUARTERLY: number;
    static BIANNUAL: number;
    static ANNUAL: number;
    static DECADAL: number;
    static CENTENNIAL: number;
    static NUM_GRANULARITIES: number;

    static defaultInteractionModel: any;

    static DOTTED_LINE: number[];
    static DASHED_LINE: number[];
    static DOT_DASH_LINE: number[];

    static Plotters: {
        errorPlotter: any;
        linePlotter: any;
        fillPlotter: any;
    }
}

declare module "dygraphs" {
    export default Dygraph;
}
