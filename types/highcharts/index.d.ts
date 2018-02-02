// Type definitions for Highcharts 5.0.13
// Project: http://www.highcharts.com/
// Definitions by: Damiano Gambarotto <https://github.com/damianog>
//                 Dan Lewi Harkestad <https://github.com/baltie>
//                 Albert Ozimek <https://github.com/AlbertOzimek>
//                 Juliën Hanssens <https://github.com/hanssens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace Highcharts {
    interface Position {
        align?: string;
        verticalAlign?: string;
        x?: number;
        y?: number;
    }

    interface DateTimeFormats {
        /**
         * @default '%H:%M:%S.%L'
         */
        millisecond?: string;
        /**
         * @default '%H:%M:%S'
         */
        second?: string;
        /**
         * @default '%H:%M'
         */
        minute?: string;
        /**
         * @default '%H:%M'
         */
        hour?: string;
        /**
         * @default '%e. %b'
         */
        day?: string;
        /**
         * @default '%e. %b'
         */
        week?: string;
        /**
         * @default '%b \ '%y'
         */
        month?: string;
        /**
         * @default '%Y'
         */
        year?: string;
    }

    interface AxisEvent extends Event {
        min: number;
        max: number;
    }

    interface AxisLabelFormatterOptions {
        value: any;
        isFirst: number;
        isLast: number;
    }

    interface AxisLabels {
        /**
         * What part of the string the given position is anchored to. Can be one of 'left', 'center' or 'right'. Defaults to
         * an intelligent guess based on which side of the chart the axis is on and the rotation of the label.
         * @default 'center' on xAxis, 'right' on yAxis
         */
        align?: string;
        /**
         * For horizontal axes, the allowed degrees of label rotation to prevent overlapping labels. If there is enough
         * space, labels are not rotated. As the chart gets narrower, it will start rotating the labels -45 degrees, then
         * remove every second label and try again with rotations 0 and -45 etc. Set it to false to disable rotation, which
         * will cause the labels to word-wrap if possible.
         * @default [-45]
         * @since 4.1.0
         */
        autoRotation?: number[];
        /**
         * When each category width is more than this many pixels, we don't apply auto rotation. Instead, we lay out the
         * axis label with word wrap. A lower limit makes sense when the label contains multiple short words that don't
         * extend the available horizontal space for each label.
         * @default 80
         * @since 4.1.5
         */
        autoRotationLimit?: number;
        /**
         * Polar charts only. The label's pixel distance from the perimeter of the plot area.
         * @default 15
         */
        distance?: number;
        /**
         * Enable or disable the axis labels.
         * @default true
         */
        enabled?: boolean;
        /**
         * A {@link http://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting|format string} for the axis label.
         * @default '{value}'
         * @since 3.0
         */
        format?: string;
        /**
         * Callback JavaScript function to format the label. The value is given by this.value. Additional properties for
         * this are axis, chart, isFirst and isLast.
         * @default function() {return this.value;}
         */
        formatter?(this: AxisLabelFormatterOptions): string;
        /**
         * Horizontal axis only. When staggerLines is not set, maxStaggerLines defines how many lines the axis is allowed to
         * add to automatically avoid overlapping X labels. Set to 1 to disable overlap detection.
         * @default 5
         * @since 3.0.3
         * @deprecated
         */
        maxStaggerLines?: number;
        /**
         * How to handle overflowing labels on horizontal axis. Can be undefined, false or 'justify'. By default it aligns
         * inside the chart area. If 'justify', labels will not render outside the plot area. If false, it will not be
         * aligned at all. If there is room to move it, it will be aligned to the edge, else it will be removed.
         * @since 2.2.5
         * @deprecated
         */
        overflow?: string | boolean;
        /**
         * The pixel padding for axis labels, to ensure white space between them.
         * @default 5
         */
        padding?: number;
        /**
         * Whether to reserve space for the labels. This can be turned off when for example the labels are rendered inside
         * the plot area instead of outside.
         * @default true
         * @since 4.1.10
         */
        reserveSpace?: boolean;
        /**
         * Rotation of the labels in degrees.
         * @default 0
         */
        rotation?: number;
        /**
         * Horizontal axes only. The number of lines to spread the labels over to make room or tighter labels.
         * @since 2.1
         */
        staggerLines?: number;
        /**
         * To show only every n'th label on the axis, set the step to n. Setting the step to 2 shows every other label. By
         * default, the step is calculated automatically to avoid overlap. To prevent this, set it to 1. This usually only
         * happens on a category axis, and is often a sign that you have chosen the wrong axis type.
         * Read more at {@link http://www.highcharts.com/docs/chart-concepts/axes|Axis docs} => What axis should I use?
         * @since 2.1
         */
        step?: number;
        /**
         * CSS styles for the label. Use whiteSpace: 'nowrap' to prevent wrapping of category labels. Use textOverflow:
         * 'none' to prevent ellipsis (dots).
         * @default {'color':'#6D869F','fontWeight':'bold'}.
         */
        style?: CSSObject;
        /**
         * Whether to use HTML to render the labels.
         * @default false
         */
        useHTML?: boolean;
        /**
         * The x position offset of the label relative to the tick position on the axis.
         * @default 0
         */
        x?: number;
        /**
         * The y position offset of the label relative to the tick position on the axis. The default makes it adapt to the
         * font size on bottom axis.
         * @default null
         */
        y?: number | null;
        /**
         * The Z index for the axis labels.
         * @default 7
         */
        zIndex?: number;
    }

    interface MousePlotEvents {
        click?(event: Event): void;
        mouseover?(event: Event): void;
        mouseout?(event: Event): void;
        mousemove?(event: Event): void;
    }

    /**
     * Text labels for the plot bands
     */
    interface PlotLabel {
        /**
         * Horizontal alignment of the label. Can be one of 'left', 'center' or 'right'.
         * @default 'center'
         * @since 2.1
         */
        align?: string;
        /**
         * Rotation of the text label in degrees.
         * @default 0
         * @since 2.1
         */
        rotation?: number;
        /**
         * CSS styles for the text label.
         * @since 2.1
         */
        style?: CSSObject;
        /**
         * The string text itself. A subset of HTML is supported.
         * @since 2.1
         */
        text?: string;
        /**
         * The text alignment for the label. While align determines where the texts anchor point is placed within the plot
         * band, textAlign determines how the text is aligned against its anchor point. Possible values are 'left', 'center'
         * and 'right'. Defaults to the same as the align option.
         * @since 2.1
         */
        textAlign?: string;
        /**
         * Whether to {@link http://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#html|use HTML} to render the labels.
         * @default false
         * @since 3.0.3
         */
        useHTML?: boolean;
        /**
         * Vertical alignment of the label relative to the plot band. Can be one of 'top', 'middle' or 'bottom'.
         * @default 'top'
         * @since 2.1
         */
        verticalAlign?: string;
        /**
         * Horizontal position relative the alignment. Default varies by orientation.
         * @since 2.1
         */
        x?: number;
        /**
         * Vertical position of the text baseline relative to the alignment. Default varies by orientation.
         * @since 2.1
         */
        y?: number;
    }

    interface PlotBands {
        /**
         * A custom class name, in addition to the default highcharts-plot-band, to apply to each individual band.
         * @since 5.0.0
         */
        className?: string;
        /**
         * Border color for the plot band. Also requires borderWidth to be set.
         * @default null
         */
        borderColor?: Color | null;
        /**
         * Border width for the plot band. Also requires borderColor to be set.
         * @default 0
         */
        borderWidth?: number;
        /**
         * The color of the plot band.
         */
        color?: Color;
        /**
         * An object defining mouse events for the plot band. Supported properties are click, mouseover, mouseout,
         * mousemove.
         * The this keyword refers to the PlotLineOrBand object.
         * @since 1.2
         */
        events?: MousePlotEvents;
        /**
         * The start position of the plot band in axis units.
         */
        from?: number;
        /**
         * An id used for identifying the plot band in Axis.removePlotBand.
         */
        id?: string;
        /**
         * In a gauge chart, this option determines the inner radius of the plot band that stretches along the perimeter. It
         * can be given as a percentage string, like '100%', or as a pixel number, like 100. By default, the inner radius is
         * controlled by the thickness option.
         * Only defined for yAxis.plotBands
         * @default null
         * @since 2.3
         */
        innerRadius?: number | string  | null;
        /**
         * Text labels for the plot bands
         */
        label?: PlotLabel;
        /**
         * In a gauge chart, this option determines the outer radius of the plot band that stretches along the perimeter. It
         * can be given as a percentage string, like '100%', or as a pixel number, like 100.
         * Only defined for yAxis.plotBands
         * @default '100%'
         * @since 2.3
         */
        outerRadius?: number | string;
        /**
         * In a gauge chart, this option sets the width of the plot band stretching along the perimeter. It can be given as
         * a percentage string, like '10%', or as a pixel number, like 10. The default value 10 is the same as the default
         * tickLength, thus making the plot band act as a background for the tick markers.
         * Only defined for yAxis.plotBands
         * @default 10
         * @since 2.3
         */
        thickness?: number | string;
        /**
         * The end position of the plot band in axis units.
         */
        to?: number;
        /**
         * The z index of the plot band within the chart, relative to other elements. Using the same z index as another
         * element may give unpredictable results, as the last rendered element will be on top. Values from 0 to 20 make
         * sense.
         * @since 1.2
         */
        zIndex?: number;
    }

    /**
     * An array of lines stretching across the plot area, marking a specific value
     * on one of the axes.
     */
    interface PlotLines {
        /**
         * A custom class name, in addition to the default highcharts-plot-line, to apply to each individual line.
         * @since 5.0.0
         */
        className?: string;
        /**
         * The color of the line.
         */
        color?: string | Gradient;
        /**
         * The dashing or dot style for the plot line. For possible values see
         * {@link http://jsfiddle.net/gh/get/jquery/1.7.1/highslide-software/highcharts.com/tree/master/samples/highcharts/plotoptions/series-dashstyle-all/|this overview}.
         * (Solid ShortDash ShortDot ShortDashDot ShortDashDotDot Dot Dash LongDash DashDot LongDashDot LongDashDotDot)
         * @default 'Solid'
         * @since 1.2
         */
        dashStyle?: string;
        /**
         * An object defining mouse events for the plot line. Supported properties are click, mouseover, mouseout,
         * mousemove.
         * The this keyword refers to the PlotLineOrBand object.
         * @since 1.2
         */
        events?: MousePlotEvents;
        /**
         * An id used for identifying the plot line in Axis.removePlotLine.
         */
        id?: string;
        /**
         * Text labels for the plot lines
         */
        label?: PlotLabel;
        /**
         * The position of the line in axis units.
         */
        value?: number;
        /**
         * The width or thickness of the plot line.
         */
        width?: number;
        /**
         * The z index of the plot line within the chart.
         * @since 1.2
         */
        zIndex?: number;
    }

    /**
     * Options for configuring accessibility for the chart. Requires the accessibility module to be loaded.
     * For a description of the module and information on its features, see Highcharts Accessibility.
     */
    interface AccessibilityOptions {
        /**
         * Whether or not to add series descriptions to charts with a single series. Defaults to false.
         * @since 5.0.0
         */
        describeSingleSeries?: boolean;

        /**
         * Enable accessibility features for the chart.
         * @since 5.0.0
         * @default true
         */
        enabled?: boolean;

        /**
         * Options for keyboard navigation.
         * @since 5.0.0
         */
        keyboardNavigation?: KeyboardNavigationOptions;

        /**
         * Function to run upon clicking the "View as Data Table" link in the screen reader region.
         * By default Highcharts will insert and set focus to a data table representation of the chart.
         * @since 5.0.0
         */
        onTableAnchorClick?: Function;

        /**
         * Date format to use for points on datetime axes when describing them to screen reader users.
         * Defaults to the same format as in tooltip.
         * For an overview of the replacement codes, see dateFormat.
         * @since 5.0.0
         */
        pointDateFormat?: string;

        /**
         * Formatter function to determine the date/time format used with points on datetime axes when describing them
         * to screen reader users. Receives one argument, point, referring to the point to describe.
         * Should return a date format string compatible with dateFormat.
         * @since 5.0.0
         */
        pointDateFormatter?: Function;

        /**
         * Formatter function to use instead of the default for point descriptions. Receives one argument, point, referring to the point to describe.
         * Should return a String with the description of the point for a screen reader user.
         * @since 5.0.0
         */
        pointDescriptionFormatter?: Function;

        /**
         * When a series contains more points than this, we no longer expose information about individual points to screen readers.
         * Set to false to disable.
         * @since 5.0.0
         * @default 30
         */
        pointDescriptionThreshold?: number | boolean;

        /**
         * A formatter function to create the HTML contents of the hidden screen reader information region. Receives one argument, chart, referring to the chart object.
         * Should return a String with the HTML content of the region.
         * @since 5.0.0
         * @default undefined
         */
        screenReaderSectionFormatter?: Function;

        /**
         * Formatter function to use instead of the default for series descriptions. Receives one argument, series, referring to the series to describe.
         * Should return a String with the description of the series for a screen reader user.
         * @since 5.0.0
         */
        seriesDescriptionFormatter?: Function;
    }

    /**
     * Options for keyboard navigation (accessibility.keyboardNavigation).
     * @since 5.0.0
     */
    interface KeyboardNavigationOptions {
        /**
         * Enable keyboard navigation for the chart.
         * @since 5.0.0
         * @default true
         */
        enabled?: boolean;

        /**
         * Skip null points when navigating through points with the keyboard.
         * @since 5.0.0
         * @default false
         */
        skipNullPoints?: boolean;
    }

    interface AxisTitle {
        /**
         * Alignment of the title relative to the axis values. Possible values are 'low', 'middle' or 'high'.
         * @default 'middle'
         */
        align?: string;
        /**
         * Set the text to null to disable the title.
         * @default 'middle'
         * @deprecated
         */
        enabled?: string | null;
        /**
         * The pixel distance between the axis labels or line and the title.
         * @default xAxis: 0 for horizontal axes, 10 for vertical axes, yAxis: 40
         */
        margin?: number;
        /**
         * The distance of the axis title from the axis line. By default, this distance is computed from the offset width of
         * the labels, the labels' distance from the axis and the title's margin. However when the offset option is set, it
         * overrides all this.
         * @since 2.2.0
         */
        offset?: number;
        /**
         * The rotation of the text in degrees. 0 is horizontal, 270 is vertical reading from bottom to top.
         * @default xAxis: 0, yAxis: 270
         */
        rotation?: number;
        /**
         * CSS styles for the title. When titles are rotated they are rendered using vector graphic techniques and not all
         * styles are applicable.
         * @default { 'color': '#707070', 'fontWeight': 'bold' }.
         */
        style?: CSSObject;
        /**
         * The actual text of the axis title. It can contain basic HTML text markup like <b>, <i> and spans with style.
         * @default xAxis: null, yAxis: 'Values'
         */
        text?: string | null;
        /**
         * Horizontal pixel offset of the title position.
         * @default 0
         * @since 4.1.6
         */
        x?: number;
        /**
         * Vertical pixel offset of the title position.
         */
        y?: number;
    }

    interface AxisBreak {
        /**
         * A number indicating how much space should be left between the start and the end of the break. The break size is
         * given in axis units, so for instance on a datetime axis, a break size of 3600000 would indicate the equivalent of
         * an hour.
         * @default 0
         * @since 4.1.0
         */
        breakSize?: number;
        /**
         * The point where the break starts.
         * @since 4.1.0
         */
        from?: number;
        /**
         * Defines an interval after which the break appears again. By default the breaks do not repeat.
         * @default 0
         * @since 4.1.0
         */
        repeat?: number;
        /**
         * The point where the break ends.
         * @since 4.1.0
         */
        to?: number;
    }

    interface AxisOptions {
        /**
         * Whether to allow decimals in this axis' ticks. When counting integers,
         * like persons or hits on a web page, decimals must be avoided in the axis
         * tick labels.
         * @default true
         * @since 2.0
         */
        allowDecimals?: boolean;
        /**
         * When using an alternate grid color, a band is painted across the plot
         * area between every other grid line.
         */
        alternateGridColor?: string;
        /**
         * An array defining breaks in the axis, the sections defined will be left out and all the points shifted closer to
         * each other. Requires that the broken-axis.js module is loaded.
         * @since 4.1.0
         */
        breaks?: AxisBreak[];
        /**
         * If categories are present for the xAxis, names are used instead of numbers for that axis. Since Highcharts 3.0,
         * categories can also be extracted by giving each point a name and setting axis type to category. However, if you
         * have multiple series, best practice remains defining the categories array.
         * Example:
         * categories: ['Apples', 'Bananas', 'Oranges']
         * @default null
         */
        categories?: any[] | null;
        /**
         * The highest allowed value for automatically computed axis extremes.
         * @since 4.0
         */
        ceiling?: number;
        /**
         * A class name that opens for styling the axis by CSS, especially in Highcharts styled mode. The class name is applied to group elements for the grid, axis elements and labels.
         * @since 5.0.0
         */
        className?: string;
        /**
         * Configure a crosshair that follows either the mouse pointer or the hovered point.
         */
        crosshair?: CrosshairObject | boolean;
        /**
         * For a datetime axis, the scale will automatically adjust to the appropriate unit. This member gives the default
         * string representations used for each unit. For an overview of the replacement codes, see dateFormat.
         */
        dateTimeLabelFormats?: DateTimeFormats;
        /**
         * Description of the axis to screen reader users.
         * @since 5.0.0
         * @default undefined
         */
        description?: string;
        /**
         * Whether to force the axis to end on a tick. Use this option with the maxPadding option to control the axis end.
         * @default false
         */
        endOnTick?: boolean;
        /**
         * Event handlers for the axis
         */
        events?: {
            /**
             * An event fired after the breaks have rendered.
             * @since 4.1.0
             */
            afterBreaks?(event: Event): void;
            /**
             * As opposed to the setExtremes event, this event fires after the final min and max values are computed and
             * corrected for minRange.
             * The this keyword refers to the {@link AxisObject|Axis} object.
             * @since 2.3
             */
            afterSetExtremes?(event: AxisEvent): void;
            /**
             * An event fired when a break from this axis occurs on a point.
             * The this keyword refers to the {@link AxisObject|Axis} object.
             */
            pointBreak?(event: Event): void;
            /**
             * Fires when the minimum and maximum is set for the axis, either by calling the .setExtremes() method or by
             * selecting an area in the chart. One parameter, event, is passed to the function. This contains common event
             * information based on jQuery or MooTools depending on which library is used as the base for Highcharts.
             *
             * The new user set minimum and maximum values can be found by event.min and event.max. When an axis is zoomed
             * all the way out from the 'Reset zoom' button, event.min and event.max are null, and the new extremes are set
             * based on this.dataMin and this.dataMax.
             *
             * The this keyword refers to the {@link AxisObject|Axis} object.
             * @since 1.2.0
             */
            setExtremes?(event: AxisEvent): void;
        };
        /**
         * The lowest allowed value for automatically computed axis extremes.
         * @default null
         * @since 4.0
         */
        floor?: number | null;
        /**
         * Color of the grid lines extending the ticks across the plot area.
         * @defaults to '#D8D8D8'.
         */
        gridLineColor?: string;
        /**
         * The dash or dot style of the grid lines. For possible values,
         * see {@http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/plotoptions/series-dashstyle-all/|this demonstration}.
         * Defaults to Solid.
         * @since 1.2
         */
        gridLineDashStyle?: string;
        /**
         * The width of the grid lines extending the ticks across the plot area.
         * @default 0
         */
        gridLineWidth?: number;
        /**
         * The Z index of the grid lines.
         * @default 1
         */
        gridZIndex?: number;
        /**
         * An id for the axis. This can be used after render time to get a pointer to the axis object through chart.get().
         * @since 1.2.0
         */
        id?: string;
        /**
         * The axis labels show the number or category for each tick.
         */
        labels?: AxisLabels;
        /**
         * The color of the line marking the axis itself.
         * @default '#C0D0E0'.
         */
        lineColor?: string | Gradient;
        /**
         * The width of the line marking the axis itself.
         * @default 1
         */
        lineWidth?: number;
        /**
         * Index of another axis that this axis is linked to. When an axis is linked to a master axis, it will take the same
         * extremes as the master, but as assigned by min or max or by setExtremes. It can be used to show additional info,
         * or to ease reading the chart by duplicating the scales.
         * @since 2.0.2
         */
        linkedTo?: number;
        /**
         * The maximum value of the axis. If null, the max value is automatically calculated. If the endOnTick option is
         * true, the max value might be rounded up. The actual maximum value is also influenced by chart.alignTicks.
         */
        max?: number | null;
        /**
         * Padding of the max value relative to the length of the axis. A padding of 0.05 will make a 100px axis 5px longer.
         * This is useful when you don't want the highest data value to appear on the edge of the plot area. When the axis'
         * max option is set or a max extreme is set using axis.setExtremes(), the maxPadding will be ignored.
         * @default 0.01
         * @since 1.2.0
         */
        maxPadding?: number;
        /**
         * Renamed to minRange as of Highcharts 2.2.
         * @deprecated
         */
        maxZoom?: number;
        /**
         * The minimum value of the axis. If null the min value is automatically calculated. If the startOnTick option is
         * true, the min value might be rounded down.
         */
        min?: number | null;
        /**
         * Padding of the min value relative to the length of the axis. A padding of 0.05 will make a 100px axis 5px longer.
         * This is useful when you don't want the lowest data value to appear on the edge of the plot area. When the axis'
         * min option is set or a min extreme is set using axis.setExtremes(), the minPadding will be ignored.
         * @default 0.01
         * @since 1.2.0
         */
        minPadding?: number;
        /**
         * The minimum range to display on this axis. The entire axis will not be allowed to span over a smaller interval
         * than this. For example, for a datetime axis the main unit is milliseconds. If minRange is set to 3600000, you
         * can't zoom in more than to one hour.
         *
         * The default minRange for the x axis is five times the smallest interval between any of the data points.
         *
         * On a logarithmic axis, the unit for the minimum range is the power. So a minRange of 1 means that the axis can be
         * zoomed to 10-100, 100-1000, 1000-10000 etc.
         *
         * Note that the minPadding, maxPadding, startOnTick and endOnTick settings also affect how the extremes of the axis
         * are computed.
         */
        minRange?: number;
        /**
         * The minimum tick interval allowed in axis values. For example on zooming in on an axis with daily data, this can
         * be used to prevent the axis from showing hours. Defaults to the closest distance between two points on the axis.
         * @since 2.3.0
         */
        minTickInterval?: number;
        /**
         * Color of the minor, secondary grid lines.
         * @default '#E0E0E0'
         */
        minorGridLineColor?: string;
        /**
         * The dash or dot style of the minor grid lines. For possible values,
         * see {@link http://jsfiddle.net/gh/get/jquery/1.7.1/highslide-software/highcharts.com/tree/master/samples/highcharts/plotoptions/series-dashstyle-all/|this demonstration}.
         * @default 'Solid'
         */
        minorGridLineDashStyle?: string;
        /**
         * Width of the minor, secondary grid lines.
         * @default 1
         */
        minorGridLineWidth?: number;
        /**
         * Color for the minor tick marks.
         * @default to '#A0A0A0'
         */
        minorTickColor?: string;
        /**
         * Tick interval in scale units for the minor ticks. On a linear axis, if 'auto', the minor tick interval is
         * calculated as a fifth of the tickInterval. If null, minor ticks are not shown.
         *
         * On logarithmic axes, the unit is the power of the value. For example, setting the minorTickInterval to 1 puts one
         * tick on each of 0.1, 1, 10, 100 etc. Setting the minorTickInterval to 0.1 produces 9 ticks between 1 and 10, 10
         * and 100 etc. A minorTickInterval of 'auto' on a log axis results in a best guess, attempting to enter
         * approximately 5 minor ticks between each major tick.
         *
         * If user settings dictate minor ticks to become too dense, they don't make sense, and will be ignored to prevent
         * performance problems.
         *
         * On axes using categories, minor ticks are not supported.
         */
        minorTickInterval?: number | string | null;
        /**
         * The pixel length of the minor tick marks.
         * @default 2
         */
        minorTickLength?: number;
        /**
         * The position of the minor tick marks relative to the axis line. Can be one of 'inside' and 'outside'.
         * @default 'outside'
         */
        minorTickPosition?: string;
        /**
         * The pixel width of the minor tick mark.
         * @default 0
         */
        minorTickWidth?: number;
        /**
         * The distance in pixels from the plot area to the axis line. A positive offset moves the axis with it's line,
         * labels and ticks away from the plot area. This is typically used when two or more axes are displayed on the same
         * side of the plot.
         * @default 0
         */
        offset?: number;
        /**
         * Whether to display the axis on the opposite side of the normal. The normal is on the left side for vertical axes
         * and bottom for horizontal, so the opposite sides will be right and top respectively. This is typically used with
         * dual or multiple axes.
         * @default false
         */
        opposite?: boolean;
        /**
         * An array of colored bands stretching across the plot area marking an interval on the axis.
         *
         * In a gauge, a plot band on the Y axis (value axis) will stretch along the perimeter of the gauge.
         */
        plotBands?: PlotBands[];
        /**
         * An array of lines stretching across the plot area, marking a specific value on one of the axes.
         */
        plotLines?: PlotLines[];
        /**
         * Whether to reverse the axis so that the highest number is closest to the origin. If the chart is inverted, the x
         * axis is reversed by default.
         * @default false
         */
        reversed?: boolean;
        /**
         * If true, the first series in a stack will be drawn on top in a positive, non-reversed Y axis. If false, the first series is in the base of the stack.
         * Only used for yAxis
         * @default true
         * @since 3.0.10
         */
        reversedStacks?: boolean;
        /**
         * Whether to show the axis line and title when the axis has no data.
         * @default true
         * @since 1.1
         */
        showEmpty?: boolean;
        /**
         * Whether to show the first tick label.
         * @default true
         */
        showFirstLabel?: boolean;
        /**
         * Whether to show the last tick label.
         * @default true
         */
        showLastLabel?: boolean;
        /**
         * A soft maximum for the axis. If the series data maximum is less than this, the axis will stay at this maximum,
         * but if the series data maximum is higher, the axis will flex to show all data.
         * @since 5.0.1
         */
        softMax?: number;
        /**
         * A soft minimum for the axis. If the series data minimum is greater than this, the axis will stay at this minimum,
         * but if the series data minimum is lower, the axis will flex to show all data.
         * @since 5.0.1
         */
        softMin?: number;
        /**
         * Show the total value for each bar in a stacked column or bar chart.
         * The label will be placed on top of positive columns and below negative columns.
         * In case of an inverted column chart or a bar chart the label is placed to the right of positive bars and to the left of negative bars.
         * Only used for yAxis
         */
        stackLabels?: {
            /**
             * Defines the horizontal alignment of the stack total label. Can be one of "left", "center" or "right".
             * @default calculated at runtime and depends on orientation and whether the stack is positive or negative.
             * @since 2.1.5
             */
            align?: string;
            /**
             * Enable or disable the stack total labels.
             * @default false
             * @since 2.1.5
             */
            enabled?: boolean;
            /**
             * A format string for the data label. Available variables are the same as for formatter.
             * @default {total}
             * @since 3.0.2
             */
            format?: string;
            /**
             * Callback JavaScript function to format the label. The value is given by this.total.
             * @default function() { return this.total; }
             * @since 2.1.5
             */
            formatter?: Function;
            /**
             * Rotation of the labels in degrees.
             * @default 0
             * @since 2.1.5
             */
            rotation?: number;
            /**
             * CSS styles for the label.
             * @default { "color": "#000000", "fontSize": "11px", "fontWeight": "bold", "textShadow": "0 0 6px contrast, 00 3px contrast" }
             * @since 2.1.5
             */
            style?: CSSObject;
            /**
             * The text alignment for the label.
             * While align determines where the texts anchor point is placed with regards to the stack, textAlign determines how the text is aligned against its anchor point.
             * Possible values are "left", "center" and "right".
             * @default calculated at runtime and depends on orientation and whether the stack is positive or negative.
             * @since 2.1.5
             */
            textAlign?: string;
            /**
             * Whether to use HTML to render the labels.
             * @default false
             * @since 3.0
             */
            useHTML?: boolean;
            /**
             * Defines the vertical alignment of the stack total label. Can be one of "top", "middle" or "bottom".
             * @default calculated at runtime and depends on orientation and whether the stack is positive or negative.
             * @since 2.1.5
             */
            verticalAlign?: string;
            /**
             * The x position offset of the label relative to the left of the stacked bar.
             * @default calculated at runtime and depends on orientation and whether the stack is positive or negative.
             * @since 2.1.5
             */
            x?: number;
            /**
             * The y position offset of the label relative to the tick position on the axis.
             * @default calculated at runtime and depends on orientation and whether the stack is positive or negative.
             * @since 2.1.5
             */
            y?: number;
        };
        /**
         * For datetime axes, this decides where to put the tick between weeks. 0 = Sunday, 1 = Monday.
         * @default 1
         */
        startOfWeek?: number;
        /**
         * Whether to force the axis to start on a tick. Use this option with the minPadding option to control the axis
         * start.
         * @default false
         * @since 1.2.0
         */
        startOnTick?: boolean;
        /**
         * Solid gauge series only. Color stops for the solid gauge.
         * Use this in cases where a linear gradient between a minColor and maxColor is not sufficient.
         * The stops is an array of tuples, where the first item is a float between 0 and 1 assigning the relative position in the gradient, and the second item is the color.
         */
        stops?: Array<[number, string]>;
        /**
         * The amount of ticks to draw on the axis. This opens up for aligning the ticks of multiple charts or panes within
         * a chart. This option overrides the tickPixelInterval option.
         *
         * This option only has an effect on linear axes. Datetime, logarithmic or category axes are not affected.
         */
        tickAmount?: number;
        /**
         * Color for the main tick marks.
         * @default '#C0D0E0'
         */
        tickColor?: string;
        /**
         * The interval of the tick marks in axis units. When null, the tick interval is computed to approximately follow
         * the tickPixelInterval on linear and datetime axes. On categorized axes, a null tickInterval will default to 1,
         * one category. Note that datetime axes are based on milliseconds, so for example an interval of one day is
         * expressed as 24 * 3600 * 1000.
         *
         * On logarithmic axes, the tickInterval is based on powers, so a tickInterval of 1 means one tick on each of 0.1,
         * 1, 10, 100 etc. A tickInterval of 2 means a tick of 0.1, 10, 1000 etc. A tickInterval of 0.2 puts a tick on 0.1,
         * 0.2, 0.4, 0.6, 0.8, 1, 2, 4, 6, 8, 10, 20, 40 etc.
         *
         * If the tickInterval is too dense for labels to be drawn, Highcharts may remove ticks.
         */
        tickInterval?: number | null;
        /**
         * The pixel length of the main tick marks.
         * @default 10
         */
        tickLength?: number;
        /**
         * If tickInterval is null this option sets the approximate pixel interval of the tick marks. Not applicable to
         * categorized axis.
         *
         * @default 72 for the Y axis, 100 for the X axis.
         */
        tickPixelInterval?: number | null;
        /**
         * The position of the major tick marks relative to the axis line. Can be one of 'inside' and 'outside'.
         * @default 'outside'
         */
        tickPosition?: string;
        /**
         * A callback function returning array defining where the ticks are laid out on the axis. This overrides the default
         * behaviour of tickPixelInterval and tickInterval. The automatic tick positions are accessible through
         * this.tickPositions and can be modified by the callback.
         */
        tickPositioner?(min: number, max: number): void;
        /**
         * An array defining where the ticks are laid out on the axis. This overrides the default behaviour of
         * tickPixelInterval and tickInterval.
         */
        tickPositions?: number[];
        /**
         * The pixel width of the major tick marks.
         * @default 1
         */
        tickWidth?: number;
        /**
         * For categorized axes only. If 'on' the tick mark is placed in the center of the category, if 'between' the tick
         * mark is placed between categories. The default is 'between' if the tickInterval is 1, else 'on'.
         * @default null
         */
        tickmarkPlacement?: string | null;
        /**
         * The axis title, showing next to the axis line. To disable the title, set the text to null.
         */
        title?: AxisTitle | null;
        /**
         * The type of axis. Can be one of 'linear', 'logarithmic', 'datetime' or 'category'. In a datetime axis, the
         * numbers are given in milliseconds, and tick marks are placed on appropriate values like full hours or days. In a
         * category axis, the point names of the chart's series are used for categories, if not a categories array is
         * defined.
         * @default 'linear'
         */
        type?: string;
        /**
         * Datetime axis only. An array determining what time intervals the ticks are allowed to fall on. Each array item is
         * an array where the first value is the time unit and the second value another array of allowed multiples.
         */
        units?: Array<[string, number[]]>;
        /**
         * Whether axis, including axis title, line, ticks and labels, should be visible.
         * @default true
         * @since 4.1.9
         */
        visible?: boolean;
    }

    interface ColorAxisDataClass {
        from?: number;
        to?: number;
        color?: string | Gradient;
        name?: string;
    }

    /**
     * A color axis for choropleth mapping. Visually, the color axis will appear as a gradient or as separate items inside
     * the legend, depending on whether the axis is scalar or based on data classes.
     *
     * For supported color formats, see the docs article about colors.
     *
     * A scalar color axis is represented by a gradient. The colors either range between the minColor and the maxColor, or
     * for more fine grained control the colors can be defined in stops. Often times, the color axis needs to be adjusted to
     * get the right color spread for the data. In addition to stops, consider using a logarithmic axis type, or setting min
     * and max to avoid the colors being determined by outliers.
     *
     * When dataClasses are used, the ranges are subdivided into separate classes like categories based on their values.
     * This can be used for ranges between two values, but also for a true category. However, when your data is categorized,
     * it may be as convenient to add each category to a separate series.
     *
     * See the Axis object for programmatic access to the axis.
     */
    interface ColorAxisOptions {
        /**
         * Determines how to set each data class' color if no individual color is set. The default value, tween, computes
         * intermediate colors between minColor and maxColor. The other possible value, category, pulls colors from the
         * global or chart specific colors array.
         * @default 'tween'
         */
        dataClassColor?: string;
        /**
         * An array of data classes or ranges for the choropleth map. If none given, the color axis is scalar and values are
         * distributed as a gradient between the minimum and maximum colors.
         */
        dataClasses?: ColorAxisDataClass[];
        /**
         * Whether to force the axis to end on a tick. Use this option with the maxPadding option to control the axis end.
         * @default true
         */
        endOnTick?: boolean;
        events?: {
            /**
             * As opposed to the setExtremes event, this event fires after the final min and max values are computed and
             * corrected for minRange.
             * The this keyword refers to the {@link AxisObject|Axis} object.
             */
            afterSetExtremes?(event: AxisEvent): void;
            /**
             * Fires when the minimum and maximum is set for the axis, either by calling the .setExtremes() method or by
             * selecting an area in the chart. One parameter, event, is passed to the function. This contains common event
             * information based on jQuery or MooTools depending on which library is used as the base for Highcharts.
             *
             * The new user set minimum and maximum values can be found by event.min and event.max. When an axis is zoomed
             * all the way out from the 'Reset zoom' button, event.min and event.max are null, and the new extremes are set
             * based on this.dataMin and this.dataMax.
             *
             * The this keyword refers to the {@link AxisObject|Axis} object.
             */
            setExtremes?(event: AxisEvent): void;
        };
        /**
         * Color of the grid lines extending from the axis across the gradient.
         * @default '#C0C0C0'
         */
        gridLineColor?: string;
        /**
         * The dash or dot style of the grid lines.
         * @default 'Solid'
         */
        gridLineDashStyle?: string;
        /**
         * The width of the grid lines extending from the axis across the gradient of a scalar color axis.
         * @default 1
         */
        gridLineWidth?: number;
        /**
         * An id for the axis. This can be used after render time to get a pointer to the axis object through chart.get().
         */
        id?: string;
        /**
         * The axis labels show the number for each tick.
         */
        labels?: AxisLabels;
        /**
         * The color of the line marking the axis itself.
         * @default '#C0D0E0'
         */
        lineColor?: string | Gradient;
        /**
         * The width of the line marking the axis itself.
         * @default 0
         */
        lineWidth?: number;
        /**
         * The triangular marker on a scalar color axis that points to the value of the hovered area. To disable the marker,
         * set marker: null.
         */
        marker?: {
            /**
             * Animation for the marker as it moves between values. Set to false to disable animation.
             * @default {duration: 50}
             */
            animation?: boolean | Animation;
            /**
             * The color of the marker.
             * @default 'gray'
             */
            color?: string | Gradient;
        } | null;
        /**
         * The maximum value of the axis in terms of map point values. If null, the max value is automatically calculated.
         * If the endOnTick option is true, the max value might be rounded up.
         */
        max?: number | null;
        /**
         * The color to represent the maximum of the color axis. Unless dataClasses or stops are set, the gradient ends at
         * this value.
         *
         * If dataClasses are set, the color is based on minColor and maxColor unless a color is set for each data class, or
         * the dataClassColor is set.
         * @default '#102D4C'
         */
        maxColor?: string;
        /**
         * Padding of the max value relative to the length of the axis. A padding of 0.05 will make a 100px axis 5px longer.
         * @default 0.05
         */
        maxPadding?: number;
        /**
         * The minimum value of the axis in terms of map point values. If null, the min value is automatically calculated.
         * If the startOnTick option is true, the min value might be rounded down.
         */
        min?: number | null;
        /**
         * The color to represent the minimum of the color axis. Unless dataClasses or stops are set, the gradient starts at
         * this value.
         *
         * If dataClasses are set, the color is based on minColor and maxColor unless a color is set for each data class, or
         * the dataClassColor is set.
         * @default '#EFEFFF'
         */
        minColor?: string;
        /**
         * Padding of the min value relative to the length of the axis. A padding of 0.05 will make a 100px axis 5px longer.
         * @default 0.05
         */
        minPadding?: number;
        /**
         * Color of the minor, secondary grid lines.
         * @default '#E0E0E0'
         */
        minorGridLineColor?: string;
        /**
         * The dash or dot style of the minor grid lines.
         * @default 'Solid'
         */
        minorGridLineDashStyle?: string;
        /**
         * Width of the minor, secondary grid lines.
         * @default 1
         */
        minorGridLineWidth?: number;
        /**
         * Color for the minor tick marks.
         * @default '#A0A0A0'
         */
        minorTickColor?: string;
        /**
         * Tick interval in scale units for the minor ticks. On a linear axis, if 'auto', the minor tick interval is
         * calculated as a fifth of the tickInterval. If null, minor ticks are not shown.
         *
         * On logarithmic axes, the unit is the power of the value. For example, setting the minorTickInterval to 1 puts one
         * tick on each of 0.1, 1, 10, 100 etc. Setting the minorTickInterval to 0.1 produces 9 ticks between 1 and 10, 10
         * and 100 etc. A minorTickInterval of 'auto' on a log axis results in a best guess, attempting to enter
         * approximately 5 minor ticks between each major tick.
         *
         * If user settings dictate minor ticks to become too dense, they don't make sense, and will be ignored to prevent
         * performance problems.
         */
        minorTickInterval?: string | number | null;
        /**
         * The pixel length of the minor tick marks.
         * @default 2
         */
        minorTickLength?: number;
        /**
         * The position of the minor tick marks relative to the axis line. Can be one of inside and outside.
         * @default 'outside'
         */
        minorTickPosition?: string;
        /**
         * The pixel width of the minor tick mark
         * @default 0
         */
        minorTickWidth?: number;
        /**
         * Whether to reverse the axis so that the highest number is closest to the origin. Defaults to false in a
         * horizontal legend and true in a vertical legend, where the smallest value starts on top.
         */
        reversed?: boolean;
        /**
         * If labels are enabled, whether to show the first tick label.
         * @default true
         */
        showFirstLabel?: boolean;
        /**
         * If labels are enabled, whether to show the last tick label.
         * @default true
         */
        showLastLabel?: boolean;
        /**
         * Whether to force the axis to start on a tick. Use this option with the maxPadding option to control the axis
         * start.
         * @default true
         */
        startOnTick?: boolean;
        /**
         * Color stops for the gradient of a scalar color axis. Use this in cases where a linear gradient between a minColor
         * and maxColor is not sufficient. The stops is an array of tuples, where the first item is a float between 0 and 1
         * assigning the relative position in the gradient, and the second item is the color.
         */
        stops?: Array<[number, string]>;
        /**
         * Color for the main tick marks.
         * @default '#C0D0E0'
         */
        tickColor?: string;
        /**
         * The interval of the tick marks in axis units. When null, the tick interval is computed to approximately follow
         * the tickPixelInterval.
         */
        tickInterval?: number | null;
        /**
         * The pixel length of the main tick marks.
         * @default 10
         */
        tickLength?: number;
        /**
         * If tickInterval is null this option sets the approximate pixel interval of the tick marks.
         * @default 72
         */
        tickPixelInterval?: number | null;
        /**
         * The position of the major tick marks relative to the axis line. Can be one of 'inside' and 'outside'.
         * @default 'outside'
         */
        tickPosition?: string;
        /**
         * A callback function returning array defining where the ticks are laid out on the axis. This overrides the default
         * behaviour of tickPixelInterval and tickInterval.
         */
        tickPositioner?(min: number, max: number): void;
        /**
         * An array defining where the ticks are laid out on the axis. This overrides the default behaviour of
         * tickPixelInterval and tickInterval.
         */
        tickPositions?: number[];
        /**
         * The pixel width of the major tick marks.
         * @default 0
         */
        tickWidth?: number;
        /**
         * The type of interpolation to use for the color axis. Can be 'linear' or 'logarithmic'.
         * @default 'linear'
         */
        type?: string;
    }

    interface Extremes {
        /**
         * The maximum value of the axis' associated series.
         */
        dataMax: number;
        /**
         * The minimum value of the axis' associated series.
         */
        dataMin: number;
        /**
         * The maximum axis value, either automatic or set manually. If the max option is not set and maxPadding is 0, this
         * value will be the same as dataMax.
         */
        max: number;
        /**
         * The minimum axis value, either automatic or set manually. If the min option is not set and minPadding is 0, this
         * value will be the same as dataMin.
         */
        min: number;
    }

    interface Animation {
        /**
         * The duration of the animation in milliseconds.
         */
        duration?: number;
        /**
         * When using jQuery as the general framework, the easing can be set to linear or swing. More easing functions are
         * available with the use of jQuery plug-ins, most notably the jQuery UI suite. See the
         * {@link http://api.jquery.com/animate/|jQuery docs}. When using MooTools as the general framework, use the
         * property name transition instead of easing.
         */
        easing?: string;
    }

    interface AddSeriesEvent extends Event {
        /**
         * The series options that was passed to the addSeries method.
         */
        options: ChartOptions;
    }

    interface AxisValueOptions extends AxisOptions {
        /**
         * The axis value at the clicked spot
         */
        value: number;
    }

    interface ChartClickEvent extends Event {
        /**
         * Array containing the axes of each dimension and each axis' value at the clicked spot
         */
        xAxis: AxisValueOptions[];
        /**
         * Array containing the axes of each dimension and each axis' value at the clicked spot
         */
        yAxis: AxisValueOptions[];
    }

    interface ChartDrilldownEvent extends Event {
        /**
         * If a category label was clicked, which index.
         */
        category?: number;
        /**
         * The originating point.
         */
        point?: PointObject;
        /**
         * If a category label was clicked, this array holds all points corresponing to the category.
         */
        points?: PointObject[];
        /**
         * Options for the new series.
         */
        seriesOptions?: IndividualSeriesOptions;
    }

    interface ChartSelectionEvent extends Event {
        /**
         * Array containing the axes of each dimension and each axis' min and max values
         */
        xAxis: AxisOptions[];
        /**
         * Array containing the axes of each dimension and each axis' min and max values
         */
        yAxis: AxisOptions[];
    }

    interface ChartEvents {
        /**
         * Fires when a series is added to the chart after load time, using the addSeries method. One parameter, event, is
         * passed to the function. This contains common event information based on jQuery or MooTools depending on which
         * library is used as the base for Highcharts. Through event.options you can access the series options that was
         * passed to the addSeries method. Returning false prevents the series from being added.
         *
         * The this keyword refers to the Chart object.
         * @since 1.2.0
         */
        addSeries?(event: AddSeriesEvent): boolean | void;
        /**
         * Fires after a chart is printed through the context menu item or the Chart.print method. Requires the exporting
         * module.
         * @since 4.1.0
         */
        afterPrint?(event: Event): void;
        /**
         * Fires before a chart is printed through the context menu item or the Chart.print method. Requires the exporting
         * module.
         * @since 4.1.0
         */
        beforePrint?(event: Event): void;
        /**
         * Fires when clicking on the plot background. One parameter, event, is passed to the function. This contains common
         * event information based on jQuery or MooTools depending on which library is used as the base for Highcharts.
         *
         * Information on the clicked spot can be found through event.xAxis and event.yAxis, which are arrays containing the
         * axes of each dimension and each axis' value at the clicked spot. The primary axes are event.xAxis[0] and
         * event.yAxis[0]. Remember the unit of a datetime axis is milliseconds since 1970-01-01 00:00:00.
         *
         * click: function(e) {
         *      console.log(Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', e.xAxis[0].value), e.yAxis[0].value);
         * }
         *
         * The this keyword refers to the Chart object.
         * @since 1.2.0
         */
        click?(event: ChartClickEvent): void;
        /**
         * Fires when a drilldown point is clicked, before the new series is added.
         * @since 3.0.8
         */
        drilldown?(event: ChartDrilldownEvent): void;
        /**
         * Fires when drilling up from a drilldown series.
         * @since 3.0.8
         */
        drillup?(event: Event): void;
        /**
         * Fires after drilling up from all drilldown series.
         * @since 4.2.4
         */
        drillupall?(event: Event): void;
        /**
         * Fires when the chart is finished loading. One parameter, event, is passed to the function. This contains common
         * event information based on jQuery or MooTools depending on which library is used as the base for Highcharts.
         *
         * From version 2.0.4, there is also a second parameter to Highcharts.Chart where a callback function can be passed
         * to be executed on chart.load.
         *
         * The this keyword refers to the Chart object.
         */
        load?(event: Event): void;
        /**
         * Fires when the chart is redrawn, either after a call to chart.redraw() or after an axis, series or point is
         * modified with the redraw option set to true. One parameter, event, is passed to the function. This contains
         * common event information based on jQuery or MooTools depending on which library is used as the base for
         * Highcharts.
         *
         * The this keyword refers to the Chart object.
         * @since 1.2.0
         */
        redraw?(event: Event): void;
        /**
         * Fires when an area of the chart has been selected. Selection is enabled by setting the chart's zoomType. One
         * parameter, event, is passed to the function. This contains common event information based on jQuery or MooTools
         * depending on which library is used as the base for Highcharts. The default action for the selection event is to
         * zoom the chart to the selected area. It can be prevented by calling event.preventDefault().
         *
         * Information on the selected area can be found through event.xAxis and event.yAxis, which are arrays containing
         * the axes of each dimension and each axis' min and max values. The primary axes are event.xAxis[0] and
         * event.yAxis[0]. Remember the unit of a datetime axis is milliseconds since 1970-01-01 00:00:00.
         *
         * selection: function(event) {
         *      // log the min and max of the primary, datetime x-axis
         *      console.log(
         *          Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', event.xAxis[0].min),
         *          Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', event.xAxis[0].max)
         *      );
         *      // log the min and max of the y axis
         *      console.log(event.yAxis[0].min, event.yAxis[0].max);
         * }
         */
        selection?(event: ChartSelectionEvent): void;
    }

    interface LinearGradient {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    }

    interface Gradient {
        linearGradient?: LinearGradient | number[];
        radialGradient?: {
            cx: number; cy: number; r: number;
        };
        stops?: any[][];
        /**
         * Brighten the color
         */
        brighten?(alpha: number): Gradient;
        /**
         * Return the color a specified format
         */
        get?(format: string): string;
        /**
         * The raw input
         */
        raw?: string;
        /**
         * rgba array
         */
        rgba?: number[];
        /**
         * Set the color's opacity to a given alpha value
         */
        setOpacity?(alpha: number): Gradient;
    }

    /**
     * Type equivalent to the 'Color' type mentioned throughout the documentation.
     */
    type Color = string | Gradient;

    interface ChartOptions3dFrame {
        /**
         * The color of the panel.
         * @default 'transparent'
         * @since 4.0
         */
        color?: string | Gradient;
        /**
         * Thickness of the panel.
         * @default 1
         * @since 4.0
         */
        size?: number;
    }

    interface ChartOptions3d {
        /**
         * One of the two rotation angles for the chart.
         * @default 0
         * @since 4.0
         */
        alpha?: number;
        /**
         * One of the two rotation angles for the chart.
         * @default 0
         * @since 4.0
         */
        beta?: number;
        /**
         * The total depth of the chart.
         * @default 100
         * @since 4.0
         */
        depth?: number;
        /**
         * Wether to render the chart using the 3D functionality.
         * @default false
         * @since 4.0
         */
        enabled?: boolean;
        /**
         * Provides the option to draw a frame around the charts by defining a bottom, front and back panel.
         */
        frame?: {
            /**
             * Defines the back panel of the frame around 3D charts.
             * @since 4.0
             */
            back?: ChartOptions3dFrame;
            /**
             * The bottom of the frame around a 3D chart.
             * @since 4.0
             */
            bottom?: ChartOptions3dFrame;
            /**
             * The side for the frame around a 3D chart.
             * @since 4.0
             */
            side?: ChartOptions3dFrame;
        };
        /**
         * Defines the distance the viewer is standing in front of the chart, this setting is important to calculate the
         * perspective effect in column and scatter charts. It is not used for 3D pie charts.
         * @default 100
         * @since 4.0
         */
        viewDistance?: number;
    }

    interface Shadow {
        /**
         * @default 'black'
         */
        color?: string | Gradient;
        /**
         * @default 1
         */
        offsetX?: number;
        /**
         * @default 1
         */
        offsetY?: number;
        /**
         * @default 0.15 / width
         */
        opacity?: number;
        /**
         * @default 3
         */
        width?: number;
    }

    interface ChartResetZoomButton {
        /**
         * The position of the button. This is an object that can hold the properties align, verticalAlign, x and y.
         * @since 2.2
         */
        position?: Position;
        /**
         * What frame the button should be placed related to. Can be either 'plot' or 'chart'.
         * @default 'plot'
         * @since 2.2
         */
        relativeTo?: string;
        /**
         * A collection of attributes for the button. The object takes SVG attributes like fill, stroke, stroke-width or r,
         * the border radius. The theme also supports style, a collection of CSS properties for the text. Equivalent
         * attributes for the hover state are given in theme.states.hover.
         * @since 2.2
         */
        theme?: ButtonStatesTheme;
    }

    interface ButtonTheme {
        display?: string; // css attr eg: 'none'
        /**
         * The button fill color, SVG color definition
         */
        fill?: string | Gradient;
        /**
         * The button stroke color, SVG color definition
         */
        stroke?: string;
        /**
         * The button stroke width
         */
        'stroke-width'?: number;
        /**
         * The border radius
         */
        r?: number;
        /**
         * CSS style
         */
        style?: Object;
    }

    interface ButtonStatesTheme extends ButtonTheme {
        /**
         * Themed button states. Only hover is supported for reset zoom button.
         */
        states?: {
            /**
             * Attributes and styles applied when hovering.
             */
            hover?: ButtonTheme;
            /**
             * Attributes and styles applied when button is selected (tri-state).
             */
            select?: ButtonTheme;
        };
    }

    interface ChartOptions {
        /**
         * When using multiple axis, the ticks of two or more opposite axes will automatically be aligned by adding ticks to
         * the axis or axes with the least ticks. This can be prevented by setting alignTicks to false. If the grid lines
         * look messy, it's a good idea to hide them for the secondary axis by setting gridLineWidth to 0.
         * @default true
         */
        alignTicks?: boolean;
        /**
         * Set the overall animation for all chart updating. Animation can be disabled throughout the chart by setting it to
         * false here. It can be overridden for each individual API method as a function parameter. The only animation not
         * affected by this option is the initial series animation, see plotOptions.series.animation.
         *
         * The animation can either be set as a boolean or a configuration object. If true, it will use the 'swing' jQuery
         * easing and a duration of 500 ms.
         *
         * @default true
         */
        animation?: boolean | Animation;
        /**
         * The background color or gradient for the outer chart area.
         * @default '#FFFFFF'
         */
        backgroundColor?: string | Gradient;
        /**
         * The color of the outer chart border.
         * @default '#4572A7'
         */
        borderColor?: string | Gradient;
        /**
         * The corner radius of the outer chart border.
         * @default 0
         */
        borderRadius?: number;
        /**
         * The pixel width of the outer chart border.
         * @default 0
         */
        borderWidth?: number;
        /**
         * A CSS class name to apply to the charts container div, allowing unique CSS styling for each chart.
         */
        className?: string;
        /**
         * In styled mode, this sets how many colors the class names should rotate between. With ten colors,
         * series (or points) are given class names like highcharts-color-0, highcharts-color-0 [...] highcharts-color-9.
         * The equivalent in non-styled mode is to set colors using the colors setting.
         * @since 5.0.0
         * @default 10
         */
        colorCount?: number;
        /**
         * Alias of type. Defaults to line.
         * @default 'line'
         * @deprecated
         */
        defaultSeriesType?: string;
        description?: string;
        /**
         * Event listeners for the chart.
         */
        events?: ChartEvents;
        /**
         * An explicit height for the chart. If a number, the height is given in pixels. If given a percentage string (for example '56%'),
         * the height is given as the percentage of the actual chart width. This allows for preserving the aspect ratio across responsive sizes.
         * By default (when null) the height is calculated from the offset height of the containing element, or 400 pixels if the containing element's height is 0.
         * @default null
         * @since 5.0.8
         */
        height?: number | string | null;
        /**
         * If true, the axes will scale to the remaining visible series once one series is hidden. If false, hiding and
         * showing a series will not affect the axes or the other series. For stacks, once one series within the stack is
         * hidden, the rest of the stack will close in around it even if the axis is not affected.
         * @default true
         * @since 1.2.0
         */
        ignoreHiddenSeries?: boolean;
        /**
         * Whether to invert the axes so that the x axis is vertical and y axis is horizontal. When true, the x axis is
         * reversed by default. If a bar series is present in the chart, it will be inverted automatically.
         * @default false
         */
        inverted?: boolean;
        /**
         * The margin between the outer edge of the chart and the plot area. The numbers in the array designate top, right,
         * bottom and left respectively. Use the options marginTop, marginRight, marginBottom and marginLeft for shorthand
         * setting of one option.
         *
         * Since version 2.1, the margin is 0 by default. The actual space is dynamically calculated from the offset of axis
         * labels, axis title, title, subtitle and legend in addition to the spacingTop, spacingRight, spacingBottom and
         * spacingLeft options.
         */
        margin?: number | number[];
        /**
         * The margin between the bottom outer edge of the chart and the plot area. Use this to set a fixed pixel value for
         * the margin as opposed to the default dynamic margin. See also spacingBottom.
         * @since 2.0
         */
        marginBottom?: number;
        /**
         * The margin between the left outer edge of the chart and the plot area. Use this to set a fixed pixel value for
         * the margin as opposed to the default dynamic margin. See also spacingLeft.
         * @since 2.0
         */
        marginLeft?: number;
        /**
         * The margin between the right outer edge of the chart and the plot area. Use this to set a fixed pixel value for
         * the margin as opposed to the default dynamic margin. See also spacingRight.
         * @since 2.0
         */
        marginRight?: number;
        /**
         * The margin between the top outer edge of the chart and the plot area. Use this to set a fixed pixel value for the
         * margin as opposed to the default dynamic margin. See also spacingTop.
         * @since 2.0
         */
        marginTop?: number;
        /**
         * Options to render charts in 3 dimensions. This feature requires highcharts-3d.js, found in the download package
         * or online at {@link code.highcharts.com/highcharts-3d.js}.
         */
        options3d?: ChartOptions3d;
        /**
         * Allows setting a key to switch between zooming and panning.
         * @since 4.0.3
         */
        panKey?: string;
        /**
         * Allow panning in a chart. Best used with panKey to combine zooming and panning.
         * @default false
         * @since 4.0.3
         */
        panning?: boolean;
        /**
         * Equivalent to zoomType, but for multitouch gestures only. By default, the pinchType is the same as the zoomType
         * setting. However, pinching can be enabled separately in some cases, for example in stock charts where a mouse
         * drag pans the chart, while pinching is enabled.
         * @default null
         * @since 3.0
         */
        pinchType?: string | null;
        /**
         * The background color or gradient for the plot area.
         */
        plotBackgroundColor?: string | Gradient;
        /**
         * The URL for an image to use as the plot background. To set an image as the background for the entire chart, set a
         * CSS background image to the container element. Note that for the image to be applied to exported charts, its URL
         * needs to be accessible by the export server.
         */
        plotBackgroundImage?: string;
        /**
         * The color of the inner chart or plot area border.
         * @default 0
         */
        plotBorderColor?: string;
        /**
         * The pixel width of the plot area border.
         * @default 0
         */
        plotBorderWidth?: number;
        /**
         * Whether to apply a drop shadow to the plot area. Requires that plotBackgroundColor be set. Since 2.3 the shadow
         * can be an object configuration containing color, offsetX, offsetY, opacity and width.
         * @default false
         */
        plotShadow?: boolean | Shadow;
        /**
         * When true, cartesian charts like line, spline, area and column are transformed into the polar coordinate system.
         * Requires highcharts-more.js.
         * @default false
         * @since 2.3.0
         */
        polar?: boolean;
        /**
         * Whether to reflow the chart to fit the width of the container div on resizing the window.
         * @default true
         * @since 2.1
         */
        reflow?: boolean;
        /**
         * The HTML element where the chart will be rendered. If it is a string, the element by that id is used. The HTML
         * element can also be passed by direct reference.
         */
        renderTo?: string | HTMLElement;
        /**
         * The button that appears after a selection zoom, allowing the user to reset zoom.
         */
        resetZoomButton?: ChartResetZoomButton;
        /**
         * The background color of the marker square when selecting (zooming in on) an area of the chart.
         * @default 'rgba(69,114,167,0.25)'
         * @since 2.1.7
         */
        selectionMarkerFill?: string;
        /**
         * Whether to apply a drop shadow to the outer chart area. Requires that backgroundColor be set. Since 2.3 the
         * shadow can be an object configuration containing color, offsetX, offsetY, opacity and width.
         * @default false
         */
        shadow?: boolean | Shadow;
        /**
         * Whether to show the axes initially. This only applies to empty charts where series are added dynamically, as axes
         * are automatically added to cartesian series.
         * @default false
         * @since 1.2.5
         */
        showAxes?: boolean;
        /**
         * The distance between the outer edge of the chart and the content, like title, legend, axis title or labels. The
         * numbers in the array designate top, right, bottom and left respectively. Use the options spacingTop,
         * spacingRight, spacingBottom and spacingLeft options for shorthand setting of one option.
         * @default [10, 10, 15, 10]
         * @since 3.0.6
         */
        spacing?: number[];
        /**
         * The space between the bottom edge of the chart and the content (plot area, axis title and labels, title, subtitle
         * or legend in top position).
         * @default 15
         * @since 2.1
         */
        spacingBottom?: number;
        /**
         * The space between the left edge of the chart and the content (plot area, axis title and labels, title, subtitle
         * or legend in top position).
         * @default 10
         * @since 2.1
         */
        spacingLeft?: number;
        /**
         * The space between the right edge of the chart and the content (plot area, axis title and labels, title, subtitle
         * or legend in top position).
         * @default 10
         * @since 2.1
         */
        spacingRight?: number;
        /**
         * The space between the top edge of the chart and the content (plot area, axis title and labels, title, subtitle or
         * legend in top position).
         * @default 10
         * @since 2.1
         */
        spacingTop?: number;
        /**
         * Additional CSS styles to apply inline to the container div. Note that since the default font styles are applied
         * in the renderer, it is ignorant of the individual chart options and must be set globally.
         */
        style?: CSSObject;
        /**
         * The default series type for the chart. Can be any of the chart types listed under plotOptions.
         * @default 'line'
         * @since 2.1.0
         */
        type?: string;
        /**
         * A text description of the chart type.
         * If the Accessibility module is loaded, this will be included in the description of the chart in the screen reader information region.
         * Highcharts will by default attempt to guess the chart type, but for more complex charts it is recommended to specify this property for clarity.
         * @since 5.0.0
         * @default undefined
         */
        typeDescription?: string;
        /**
         * An explicit width for the chart. By default the width is calculated from the offset width of the containing
         * element.
         */
        width?: number;
        /**
         * Decides in what dimensions the user can zoom by dragging the mouse. Can be one of x, y or xy.
         */
        zoomType?: string;
    }

    interface CSSObject {
        background?: string;
        border?: string;
        color?: string | Gradient;
        cursor?: string;
        font?: string;
        fontFamily?: string;
        fontSize?: string;
        fontWeight?: string;
        left?: string;
        opacity?: number;
        padding?: string | number;
        position?: string;
        top?: string;
        textOutline?: string;
        textOverflow?: string;
        whiteSpace?: string;
    }

    interface CreditsOptions {
        /**
         * Whether to show the credits text.
         * @default true
         */
        enabled?: boolean;
        /**
         * The URL for the credits label.
         * @default 'http://www.highcharts.com'
         */
        href?: string;
        /**
         * Position configuration for the credits label. Supported properties are align, verticalAlign, x and y.
         */
        position?: Position;
        /**
         * CSS styles for the credits label.
         */
        style?: Object;
        /**
         * The text for the credits label.
         * @default 'Highcharts.com'
         */
        text?: string;
    }

    interface CreditsObject extends CreditsOptions {
        update(options: CreditsOptions): void;
    }

    interface DataSeriesMapping {
        [pointPropertyName: string]: number;
    }

    /**
     * The Data module provides a simplified interface for adding data to a chart from sources like CVS, HTML tables or grid
     * views. See also the tutorial article on the Data module.
     *
     * It requires the modules/data.js file to be loaded.
     *
     * Please note that the default way of adding data in Highcharts, without the need of a module, is through the
     * series.data option.
     */
    interface DataOptions {
        /**
         * A two-dimensional array representing the input data on tabular form. This input can be used when the data is
         * already parsed, for example from a grid view component. Each cell can be a string or number. If not
         * switchRowsAndColumns is set, the columns are interpreted as series.
         * @since 4.0
         */
        columns?: Array<Array<string | number>>;
        /**
         * The callback that is evaluated when the data is finished loading, optionally from an external source, and parsed.
         * The first argument passed is a finished chart options object, containing the series. These options can be
         * extended with additional options and passed directly to the chart constructor.
         * @since 4.0
         */
        complete?(options: Options): void;
        /**
         * A comma delimited string to be parsed. Related options are startRow, endRow, startColumn and endColumn to delimit
         * what part of the table is used. The lineDelimiter and itemDelimiter options define the CSV delimiter formats.
         * @since 4.0
         */
        csv?: string;
        /**
         * Which of the predefined date formats in Date.prototype.dateFormats to use to parse date values. Defaults to a
         * best guess based on what format gives valid and ordered dates.
         *
         * Valid options include:
         * 'YYYY-mm-dd'
         * 'dd/mm/YYYY'
         * 'mm/dd/YYYY'
         * 'dd/mm/YY'
         * 'mm/dd/YY'
         * @since 4.0
         */
        dateFormat?: string;
        /**
         * The decimal point used for parsing numbers in the CSV.
         * @default '.'
         */
        decimalPoint?: string;
        /**
         * In tabular input data, the last column (indexed by 0) to use. Defaults to the last column containing data.
         * @since 4.0
         */
        endColumn?: number;
        /**
         * In tabular input data, the last row (indexed by 0) to use. Defaults to the last row containing data.
         * @since 4.0.4
         */
        endRow?: number;
        /**
         * Whether to use the first row in the data set as series names.
         * @default true
         * @since 4.1.0
         */
        firstRowAsNames?: boolean;
        /**
         * The key for a Google Spreadsheet to load. See {@link https://developers.google.com/gdata/samples/spreadsheet_sample|general information on GS}.
         * @since 4.0
         */
        googleSpreadsheetKey?: string;
        /**
         * The Google Spreadsheet worksheet to use in combination with googleSpreadsheetKey. The available id's from your
         * sheet can be read from https://spreadsheets.google.com/feeds/worksheets/{key}/public/basic
         * @since 4.0
         */
        googleSpreadsheetWorksheet?: string;
        /**
         * Item or cell delimiter for parsing CSV. Defaults to the tab character \t if a tab character is found in the CSV
         * string, if not it defaults to ,.
         * @since 4.0
         */
        itemDelimiter?: string;
        /**
         * Line delimiter for parsing CSV.
         * @default '\n'
         * @since 4.0
         */
        lineDelimiter?: string;
        /**
         * A callback function to parse string representations of dates into JavaScript timestamps. Should return an integer
         * timestamp on success.
         * @since 4.0
         */
        parseDate?(val: any): number;
        /**
         * A callback function to access the parsed columns, the two-dimentional input data array directly, before they are
         * interpreted into series data and categories. Return false to stop completion, or call this.complete() to continue
         * async.
         * @since 4.0
         */
        parsed?(columns: Array<[string | number]>): boolean | void;
        /**
         * The same as the columns input option, but defining rows intead of columns.
         * @since 4.0
         */
        rows?: Array<[string | number]>;
        /**
         * An array containing object with Point property names along with what column id the property should be taken from.
         * @since 4.0.4
         */
        seriesMapping?: DataSeriesMapping[];
        /**
         * In tabular input data, the first column (indexed by 0) to use.
         * @default 0
         * @since 4.0
         */
        startColumn?: number;
        /**
         * In tabular input data, the first row (indexed by 0) to use.
         * @default 0
         * @since 4.0
         */
        startRow?: number;
        /**
         * Switch rows and columns of the input data, so that this.columns effectively becomes the rows of the data set, and
         * the rows are interpreted as series.
         * @default false
         * @since 4.0
         */
        switchRowsAndColumns?: boolean;
        /**
         * A HTML table or the id of such to be parsed as input data. Related options are startRow, endRow, startColumn and
         * endColumn to delimit what part of the table is used.
         */
        table?: string | HTMLElement;
    }

    /**
     * Options for drill down, the concept of inspecting increasingly high resolution data through clicking on chart items
     * like columns or pie slices.
     *
     * The drilldown feature requires the drilldown.js file to be loaded, found in the modules directory of the download
     * package, or online at code.highcharts.com/modules/drilldown.js.
     */
    interface DrilldownOptions {
        /**
         * Additional styles to apply to the X axis label for a point that has drilldown data. By default it is underlined
         * and blue to invite to interaction.
         * @default { cursor: 'pointer', color: '#0d233a', fontWeight: 'bold', textDecoration: 'underline' }
         * @since 3.0.8
         */
        activeAxisLabelStyle?: Object;
        /**
         * Additional styles to apply to the data label of a point that has drilldown data. By default it is underlined and
         * blue to invite to interaction.
         * @default { cursor: 'pointer', color: '#0d233a', fontWeight: 'bold', textDecoration: 'underline' }
         * @since 3.0.8
         */
        activeDataLabelStyle?: Object;
        /**
         * When this option is false, clicking a single point will drill down all points in the same category, equivalent to
         * clicking the X axis label.
         * @default true
         * @since 4.1.7
         */
        allowPointDrilldown?: boolean;
        /**
         * Set the animation for all drilldown animations. Animation of a drilldown occurs when drilling between a column
         * point and a column series, or a pie slice and a full pie series. Drilldown can still be used between series and
         * points of different types, but animation will not occur.
         *
         * The animation can either be set as a boolean or a configuration object. If true, it will use the 'swing' jQuery
         * easing and a duration of 500 ms.
         * @since 3.0.8
         */
        animation?: boolean | Animation;
        /**
         * Options for the drill up button that appears when drilling down on a series. The text for the button is defined
         * in lang.drillUpText.
         */
        drillUpButton?: {
            /**
             * Positioning options for the button within the relativeTo box. Available properties are x, y, align and
             * verticalAlign.
             * @since 3.0.8
             */
            position?: Position;
            /**
             * What box to align the button to. Can be either 'plotBox' or 'spacingBox'.
             * @default 'plotBox'
             * @since 3.0.8
             */
            relativeTo?: string;
            /**
             * A collection of attributes for the button. The object takes SVG attributes like fill, stroke, stroke-width or
             * r, the border radius. The theme also supports style, a collection of CSS properties for the text. Equivalent
             * attributes for the hover state are given in theme.states.hover.
             * @since 3.0.8
             */
            theme?: ButtonStatesTheme;
        };
        /**
         * An array of series configurations for the drill down. Each series configuration uses the same syntax as the
         * series option set. These drilldown series are hidden by default. The drilldown series is linked to the parent
         * series' point by its id.
         * @since 3.0.8
         */
        series?: IndividualSeriesOptions[];
    }

    interface MenuItem {
        /**
         * String to show in the menu item.
         */
        text: string;
        /**
         * Callback function to run on click.
         */
        onclick(): void;
    }

    interface Button {
        /**
         * Alignment for the buttons.
         * @default 'right'
         * @since 2.0
         */
        align?: string;
        /**
         * Whether to enable buttons.
         * @default true
         * @since 2.0
         */
        enabled?: boolean;
        /**
         * Pixel height of the buttons.
         * @default 20
         * @since 2.0
         */
        height?: number;
        /**
         * Fill color for the symbol within the button.
         * @default '#E0E0E0'
         * @since 2.0
         */
        symbolFill?: string;
        /**
         * The pixel size of the symbol on the button.
         * @default 14
         * @since 2.0
         */
        symbolSize?: number;
        /**
         * The color of the symbol's stroke or line.
         * @default '#666'
         * @since 2.0
         */
        symbolStroke?: string;
        /**
         * The pixel stroke width of the symbol on the button.
         * @default 1
         * @since 2.0
         */
        symbolStrokeWidth?: number;
        /**
         * The x position of the center of the symbol inside the button.
         * @default 12.5
         * @since 2.0
         */
        symbolX?: number;
        /**
         * The y position of the center of the symbol inside the button.
         * @default 10.5
         * @since 2.0
         */
        symbolY?: number;
        /**
         * A text string to add to the individual button.
         * @default null
         * @since 3.0
         */
        text?: string | null;
        /**
         * A configuration object for the button theme. The object accepts SVG properties like stroke-width, stroke and
         * fill. Tri-state button styles are supported by the states.hover and states.select objects.
         * @since 3.0
         */
        theme?: ButtonStatesTheme;
        /**
         * The vertical alignment of the buttons. Can be one of 'top', 'middle' or 'bottom'.
         * @default 'top'
         * @since 2.0
         */
        verticalAlign?: string;
        /**
         * The pixel width of the button.
         * @default 24
         * @since 2.0
         */
        width?: number;
        /**
         * The vertical offset of the button's position relative to its verticalAlign.
         * @default 0
         * @since 2.0
         */
        y?: number;
    }

    interface ExportingContextButton extends Button {
        /**
         * A collection of config options for the menu items. Each options object consists of a text option which is a
         * string to show in the menu item, as well as an onclick parameter which is a callback function to run on click.
         *
         * By default, there is the 'Print' menu item plus one menu item for each of the available export types. Menu items
         * can be customized by defining a new array of items and assigning null to unwanted positions.
         * @since 2.0
         */
        menuItems?: MenuItem[];
        /**
         * A click handler callback to use on the button directly instead of the popup menu.
         * @since 2.0
         */
        onclick?(): void;
        /**
         * The symbol for the button. Points to a definition function in the Highcharts.Renderer.symbols collection. The
         * default exportIcon function is part of the exporting module.
         * @default 'menu'
         */
        symbol?: string;
        /**
         * The horizontal position of the button relative to the align option.
         * @default -10
         */
        x?: number;
    }

    interface ExportingOptions {
        /**
         * Experimental setting to allow HTML inside the chart (added through the useHTML options), directly in the exported
         * image. This allows you to preserve complicated HTML structures like tables or bi-directional text in exported
         * charts.
         *
         * Disclaimer: The HTML is rendered in a foreignObject tag in the generated SVG. The official export server is based
         * on PhantomJS, which supports this, but other SVG clients, like Batik, does not support it. This also applies to
         * downloaded SVG that you want to open in a desktop client.
         * @default false
         * @since 4.1.8
         */
        allowHTML?: boolean;
        /**
         * Options for the export related buttons, print and export. In addition to the default buttons listed here, custom
         * buttons can be added. See navigation.buttonOptions for general options.
         */
        buttons?: {
            contextButton?: ExportingContextButton;
        };
        /**
         * Additional chart options to be merged into an exported chart. For example, the exported chart can be given a
         * specific width and height, or a printer-friendly color scheme.
         * @default null
         */
        chartOptions?: Options | null;
        /**
         * Whether to enable the exporting module. Disabling the module will hide the context button, but API methods will
         * still be available.
         * @default true
         * @since 2.0
         */
        enabled?: boolean;
        /**
         * Function to call if the offline-exporting module fails to export a chart on the client side, and
         * fallbackToExportServer is disabled. If left undefined, an exception is thrown instead.
         * @default undefined
         * @since 5.0.0
         */
        error?: Function;
        /**
         * Whether or not to fall back to the export server if the offline-exporting module is unable to export the chart on
         * the client side.
         * @default true
         * @since 4.1.8
         */
        fallbackToExportServer?: boolean;
        /**
         * The filename, without extension, to use for the exported chart.
         * @default 'chart'
         * @since 2.0
         */
        filename?: string;
        /**
         * An object containing additional attributes for the POST form that sends the SVG to the export server. For
         * example, a target can be set to make sure the generated image is received in another frame, or a custom enctype
         * or encoding can be set.
         * @since 3.0.8
         */
        formAttributes?: any;
        /**
         * Path where Highcharts will look for export module dependencies to load on demand if they don't already exist on
         * window. Should currently point to location of CanVG library (https://github.com/canvg/canvg) and RGBColor.js,
         * required for client side export in certain browsers.
         * @default 'http://code.highcharts.com/{version}/lib'
         * @since 5.0.0
         */
        libUrl?: string;
        /**
         * When printing the chart from the menu item in the burger menu, if the on-screen chart exceeds this width, it is
         * resized. After printing or cancelled, it is restored. The default width makes the chart fit into typical paper
         * format. Note that this does not affect the chart when printing the web page as a whole.
         * @default 780
         * @since 4.2.5
         */
        printMaxWidth?: number;
        /**
         * Defines the scale or zoom factor for the exported image compared to the on-screen display. While for instance a
         * 600px wide chart may look good on a website, it will look bad in print. The default scale of 2 makes this chart
         * export to a 1200px PNG or JPG.
         * @default 2
         * @since 3.0
         */
        scale?: number;
        /**
         * The height of the original chart when exported, unless an explicit chart.height is set. The height exported
         * raster image is then multiplied by scale.
         * @since 3.0
         */
        sourceHeight?: number;
        /**
         * The width of the original chart when exported, unless an explicit chart.width is set. The width exported
         * raster image is then multiplied by scale.
         * @since 3.0
         */
        sourceWidth?: number;
        /**
         * Default MIME type for exporting if chart.exportChart() is called without specifying a type option. Possible
         * values are image/png, image/jpeg, application/pdf and image/svg+xml.
         * @default 'image/png'
         * @since 2.0
         */
        type?: string;
        /**
         * The URL for the server module converting the SVG string to an image format. By default this points to Highslide
         * Software's free web service.
         * @default 'http://export.highcharts.com'
         * @since 2.0
         */
        url?: string;
        /**
         * The pixel width of charts exported to PNG or JPG. As of Highcharts 3.0, the default pixel width is a function of
         * the chart.width or exporting.sourceWidth and the exporting.scale.
         * @since 2.0
         */
        width?: number;
    }

    /**
     * Global options that don't apply to each chart. These options, like the lang options, must be set using the
     * Highcharts.setOptions method.
     */
    interface GlobalObject {
        /**
         * A custom Date class for advanced date handling. For example, JDate can be hooked in to handle Jalali dates.
         * @since 4.0.4
         */
        Date?: any;
        /**
         * Path to the pattern image required by VML browsers in order to draw radial gradients.
         * @default 'http://code.highcharts.com/{version}/gfx/vml-radial-gradient.png'
         * @since 2.3.0
         */
        VMLRadialGradientURL?: string;
        /**
         * The URL to the additional file to lazy load for Android 2.x devices. These devices don't support SVG, so we
         * download a helper file that contains canvg, its dependency rbcolor, and our own CanVG Renderer class. To avoid
         * hotlinking to our site, you can install canvas-tools.js on your own server and change this option accordingly.
         * @default 'http://code.highcharts.com/{version}/modules/canvas-tools.js'
         */
        canvasToolsURL?: string;
        /**
         * A callback to return the time zone offset for a given datetime. It takes the timestamp in terms of milliseconds
         * since January 1 1970, and returns the timezone offset in minutes. This provides a hook for drawing time based
         * charts in specific time zones using their local DST crossover dates, with the help of external libraries.
         * @since 4.1.0
         */
        getTimezoneOffset?(timestamp: number): number;
        /**
         * Requires moment.js. If the timezone option is specified, it creates a default getTimezoneOffset function that
         * looks up the specified timezone in moment.js. If moment.js is not included, this throws a Highcharts error in
         * the console, but does not crash the chart.
         * @default undefined
         * @since 5.0.7
         */
        timezone?: string;
        /**
         * The timezone offset in minutes. Positive values are west, negative values are east of UTC, as in the ECMAScript
         * getTimezoneOffset method. Use this to display UTC based data in a predefined time zone.
         * @default 0
         * @since 3.0.8
         */
        timezoneOffset?: number;
        /**
         * Whether to use UTC time for axis scaling, tickmark placement and time display in Highcharts.dateFormat.
         * Advantages of using UTC is that the time displays equally regardless of the user agent's time zone settings.
         * Local time can be used when the data is loaded in real time or when correct Daylight Saving Time transitions are
         * required.
         * @default true
         */
        useUTC?: boolean;
    }

    interface LabelItem {
        html: string;
        style: CSSObject;
    }

    interface LabelsOptions {
        items?: LabelItem[];
        style?: CSSObject;
    }

    interface LangObject {
        /**
         * Exporting module menu. The tooltip title for the context menu holding print and export menu items.
         * @default 'Chart context menu'
         * @since 3.0
         */
        contextButtonTitle?: string;
        /**
         * The default decimal point used in the Highcharts.numberFormat method unless otherwise specified in the function
         * arguments.
         * @default '.'
         * @since 1.2.2
         */
        decimalPoint?: string;
        /**
         * Exporting module only. The text for the JPEG download menu item.
         * @default 'Download JPEG image'
         * @since 2.0
         */
        downloadJPEG?: string;
        /**
         * Exporting module only. The text for the PDF download menu item.
         * @default 'Download PDF document'
         * @since 2.0
         */
        downloadPDF?: string;
        /**
         * Exporting module only. The text for the PNG download menu item.
         * @default 'Download PNG image'
         * @since 2.0
         */
        downloadPNG?: string;
        /**
         * Exporting module only. The text for the SVG download menu item.
         * @default 'Download SVG vector image'
         * @since 2.0
         */
        downloadSVG?: string;
        /**
         * The text for the button that appears when drilling down, linking back to the parent series. The parent series'
         * name is inserted for {series.name}
         * @default 'Back to {series.name}'
         * @since 3.0.8
         */
        drillUpText?: string;
        /**
         * What to show in a date field for invalid dates.
         * @default ''
         * @since 4.1.8
         */
        invalidDate?: string;
        /**
         * The loading text that appears when the chart is set into the loading state following a call to chart.showLoading.
         * @default 'Loading...'
         */
        loading?: string;
        /**
         * An array containing the months names. Corresponds to the %B format in Highcharts.dateFormat().
         * @default ['January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December']
         */
        months?: string[];
        /**
         * The text to display when the chart contains no data. Requires the no-data module, see noData.
         * @default 'No data to display'
         * @since 3.0.8
         */
        noData?: string;
        /**
         * The magnitude of numericSymbols replacements.
         * Use 10000 for Japanese, Korean and various Chinese locales, which use symbols for 10^4, 10^8 and 10^12.
         * @since 5.0.3
         * @default 1000
         */
        numericSymbolMagnitude?: number;
        /**
         * Metric prefixes used to shorten high numbers in axis labels. Replacing any of the positions with null causes the
         * full number to be written. Setting numericSymbols to null disables shortening altogether.
         * @default ['k', 'M', 'G', 'T', 'P', 'E']
         * @since 2.3.0
         */
        numericSymbols?: string[] | null;
        /**
         * Exporting module only. The text for the menu item to print the chart.
         * @default 'Print chart'
         * @since 3.0.1
         */
        printChart?: string;
        /**
         * The text for the label appearing when a chart is zoomed.
         * @default 'Reset zoom'
         * @since 1.2.4
         */
        resetZoom?: string;
        /**
         * The tooltip title for the label appearing when a chart is zoomed.
         * @default 'Reset zoom level 1:1'
         * @since 1.2.4
         */
        resetZoomTitle?: string;
        /**
         * An array containing the months names in abbreviated form. Corresponds to the %b format in
         * Highcharts.dateFormat().
         * @default ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
         */
        shortMonths?: string[];
        /**
         * The default thousands separator used in the Highcharts.numberFormat method unless otherwise specified in the
         * function arguments. Since Highcharts 4.1 it defaults to a single space character, which is compatible with ISO
         * and works across Anglo-American and continental European languages.
         * @default ' '
         * @since 1.2.2
         */
        thousandsSep?: string;
        /**
         * An array containing the weekday names.
         * @default ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
         */
        weekdays?: string[];
    }

    interface LegendNavigationOptions {
        /**
         * The color for the active up or down arrow in the legend page navigation.
         * @default '#3E576F'
         * @since 2.2.4
         */
        activeColor?: string;
        /**
         * How to animate the pages when navigating up or down. A value of true applies the default navigation given in the
         * chart.animation option. Additional options can be given as an object containing values for easing and duration.
         * @default true
         * @since 2.2.4
         */
        animation?: boolean | Animation;
        /**
         * The pixel size of the up and down arrows in the legend paging navigation.
         * @default 12
         * @since 2.2.4
         */
        arrowSize?: number;
        /**
         * The color of the inactive up or down arrow in the legend page navigation.
         * @default '#CCC'
         */
        inactiveColor?: string;
        /**
         * Text styles for the legend page navigation.
         * @since 2.2.4
         */
        style?: CSSObject;
    }

    interface LegendTitleOptions {
        /**
         * Generic CSS styles for the legend title.
         * @default {'fontWeight':'bold'}
         * @since 3.0
         */
        style?: CSSObject;
        /**
         * A text or HTML string for the title.
         * @default null
         * @since 3.0
         */
        text?: string | null;
    }

    interface LegendOptions {
        /**
         * The horizontal alignment of the legend box within the chart area. Valid values are 'left', 'center' and 'right'.
         * In the case that the legend is aligned in a corner position, the layout option will determine whether to place it
         * above/below or on the side of the plot area.
         * @default 'center'
         * @since 2.0
         */
        align?: string;
        /**
         * The background color of the legend.
         */
        backgroundColor?: string | Gradient;
        /**
         * The color of the drawn border around the legend.
         * @default '#909090'
         */
        borderColor?: string | Gradient;
        /**
         * The border corner radius of the legend.
         * @default 0
         */
        borderRadius?: number;
        /**
         * The width of the drawn border around the legend.
         * @default 0
         */
        borderWidth?: number;
        /**
         * Enable or disable the legend.
         * @default true
         */
        enabled?: boolean;
        /**
         * When the legend is floating, the plot area ignores it and is allowed to be placed below it.
         * @default false
         * @since 2.1
         */
        floating?: boolean;
        /**
         * In a legend with horizontal layout, the itemDistance defines the pixel distance between each item.
         * @default 20
         * @since 3.0.3
         */
        itemDistance?: number;
        /**
         * CSS styles for each legend item when the corresponding series or point is hidden. Only a subset of CSS is
         * supported, notably those options related to text. Properties are inherited from style unless overridden here.
         * @default {color: '#CCC'}
         */
        itemHiddenStyle?: CSSObject;
        /**
         * CSS styles for each legend item in hover mode. Only a subset of CSS is supported, notably those options related
         * to text. Properties are inherited from style unless overridden here.
         * @default {color: '#000'}
         */
        itemHoverStyle?: CSSObject;
        /**
         * The pixel bottom margin for each legend item.
         * @default 0
         * @since 2.2.0
         */
        itemMarginBottom?: number;
        /**
         * The pixel top margin for each legend item.
         * @default 0
         * @since 2.2.0
         */
        itemMarginTop?: number;
        /**
         * CSS styles for each legend item. Only a subset of CSS is supported, notably those options related to text.
         * @default { 'color': '#333333', 'cursor': 'pointer', 'fontSize': '12px', 'fontWeight': 'bold' }
         */
        itemStyle?: CSSObject;
        /**
         * The width for each legend item. This is useful in a horizontal layout with many items when you want the items to
         * align vertically.
         * @since 2.0
         */
        itemWidth?: number;
        /**
         * A format string for each legend label. Available variables relates to properties on the series, or the point in
         * case of pies.
         * @default '{name}'
         * @since 1.3
         */
        labelFormat?: string;
        /**
         * Callback function to format each of the series' labels. The this keyword refers to the series object, or the
         * point object in case of pie charts. By default the series or point name is printed.
         */
        labelFormatter?(): string;
        /**
         * The layout of the legend items. Can be one of 'horizontal' or 'vertical'.
         * @default 'horizontal'
         */
        layout?: string;
        /**
         * Line height for the legend items. Deprecated as of 2.1. Instead, the line height for each item can be set using
         * itemStyle.lineHeight, and the padding between items using itemMarginTop and itemMarginBottom.
         * @default 16
         * @since 2.0
         * @deprecated
         */
        lineHeight?: number;
        /**
         * If the plot area sized is calculated automatically and the legend is not floating, the legend margin is the space
         * between the legend and the axis labels or plot area.
         * @default 12
         * @since 2.1
         */
        margin?: number;
        /**
         * Maximum pixel height for the legend. When the maximum height is extended, navigation will show.
         * @since 2.3.0
         */
        maxHeight?: number;
        /**
         * Options for the paging or navigation appearing when the legend is overflown.
         */
        navigation?: LegendNavigationOptions;
        /**
         * The inner padding of the legend box.
         * @default 8
         * @since 2.2.0
         */
        padding?: number;
        /**
         * Whether to reverse the order of the legend items compared to the order of the series or points as defined in the
         * configuration object.
         * @default false
         * @since 1.2.5
         */
        reversed?: boolean;
        /**
         * Whether to show the symbol on the right side of the text rather than the left side. This is common in Arabic and
         * Hebraic.
         * @default false
         * @since 2.2
         */
        rtl?: boolean;
        /**
         * Whether to apply a drop shadow to the legend. A backgroundColor also needs to be applied for this to take effect.
         * Since 2.3 the shadow can be an object configuration containing color, offsetX, offsetY, opacity and width.
         * @default false
         */
        shadow?: boolean | Shadow;
        /**
         * CSS styles for the legend area. In the 1.x versions the position of the legend area was determined by CSS. In
         * 2.x, the position is determined by properties like align, verticalAlign, x and y, but the styles are still parsed
         * for backwards compatibility.
         * @deprecated
         */
        style?: CSSObject;
        /**
         * The pixel height of the symbol for series types that use a rectangle in the legend. Defaults to the font size of
         * legend items.
         * @since 3.0.8
         */
        symbolHeight?: number;
        /**
         * The pixel padding between the legend item symbol and the legend item text.
         * @default 5
         */
        symbolPadding?: number;
        /**
         * The border radius of the symbol for series types that use a rectangle in the legend.
         * @default 0
         * @since 3.0.8
         */
        symbolRadius?: number;
        /**
         * The pixel width of the legend item symbol.
         * @default 16
         */
        symbolWidth?: number;
        /**
         * A title to be added on top of the legend.
         * @since 3.0
         */
        title?: LegendTitleOptions;
        /**
         * Whether to use HTML to render the legend item texts. Prior to 4.1.7, when using HTML, legend.navigation was
         * disabled.
         * @default false
         */
        useHTML?: boolean;
        /**
         * The vertical alignment of the legend box. Can be one of 'top', 'middle' or 'bottom'. Vertical position can be
         * further determined by the y option.
         *
         * In the case that the legend is aligned in a corner position, the layout option will determine whether to place it
         * above/below or on the side of the plot area.
         *
         * @default 'bottom'
         * @since 2.0
         */
        verticalAlign?: string;
        /**
         * The width of the legend box.
         * @since 2.0
         */
        width?: number;
        /**
         * The x offset of the legend relative to its horizontal alignment align within chart.spacingLeft and
         * chart.spacingRight. Negative x moves it to the left, positive x moves it to the right.
         * @default 0
         * @since 2.0
         */
        x?: number;
        /**
         * The vertical offset of the legend relative to it's vertical alignment verticalAlign within chart.spacingTop and
         * chart.spacingBottom. Negative y moves it up, positive y moves it down.
         * @default 0
         * @since 2.0
         */
        y?: number;
    }

    /**
     * The loading options control the appearance of the loading screen that covers the plot area on chart operations. This
     * screen only appears after an explicit call to chart.showLoading(). It is a utility for developers to communicate to
     * the end user that something is going on, for example while retrieving new data via an XHR connection. The
     * 'Loading...' text itself is not part of this configuration object, but part of the lang object.
     */
    interface LoadingOptions {
        /**
         * The duration in milliseconds of the fade out effect.
         * @default 100
         * @since 1.2.0
         */
        hideDuration?: number;
        /**
         * CSS styles for the loading label span.
         * @default { 'fontWeight': 'bold', 'position': 'relative', 'top': '45%' }
         */
        labelStyle?: CSSObject;
        /**
         * The duration in milliseconds of the fade in effect.
         * @default 100
         * @since 1.2.0
         */
        showDuration?: number;
        /**
         * CSS styles for the loading screen that covers the plot area.
         * @default { position: 'absolute', backgroundColor: 'white', opacity: 0.5, textAlign: 'center' }
         */
        style?: Object;
    }

    /**
     * A collection of options for buttons and menus appearing in the exporting module.
     */
    interface NavigationOptions {
        /**
         * A collection of options for buttons appearing in the exporting module.
         */
        buttonOptions?: Button;
        /**
         * CSS styles for the hover state of the individual items within the popup menu appearing by default when the export
         * icon is clicked. The menu items are rendered in HTML.
         * @default {background: '#4572A5', color: '#FFFFFF'}
         * @since 2.0
         */
        menuItemHoverStyle?: Object;
        /**
         * CSS styles for the individual items within the popup menu appearing by default when the export icon is clicked.
         * The menu items are rendered in HTML.
         * @default { padding: '0 5px', background: NONE, color: '#303030'}
         * @since 2.0
         */
        menuItemStyle?: Object;
        /**
         * CSS styles for the popup menu appearing by default when the export icon is clicked. This menu is rendered in
         * HTML.
         * @default { border: '1px solid #A0A0A0', background: '#FFFFFF' }
         * @since 2.0
         */
        menuStyle?: Object;
    }

    /**
     * Options for displaying a message like 'No data to display'. This feature requires the file no-data-to-display.js to
     * be loaded in the page. The actual text to display is set in the lang.noData option.
     */
    interface NoDataOptions {
        /**
         * An object of additional SVG attributes for the no-data label.
         * @since 3.0.8
         */
        attr?: {};
        /**
         * The position of the no-data label, relative to the plot area.
         * @default { 'x': 0, 'y': 0, 'align': 'center', 'verticalAlign': 'middle' }
         * @since 3.0.8
         */
        position?: Position;
        /**
         * CSS styles for the no-data label.
         * @default { 'fontSize': '12px', 'fontWeight': 'bold', 'color': '#60606a' }
         */
        style?: CSSObject;
    }

    interface PaneBackground {
        /**
         * @default {linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }, stops: [[0, '#FFF'],[1, '#DDD']]}
         */
        backgroundColor: string | Gradient;
        /**
         * @default 'silver'
         */
        borderColor?: string | Gradient;
        /**
         * @default 1
         */
        borderWidth?: number;
        /**
         * The class name for this background.
         * @since 5.0.0
         * @default 'highcharts-pane'
         */
        className?: string;
        /**
         * @default 0
         */
        innerRadius?: number | string;
        /**
         * @default '105%'
         */
        outerRadius?: number | string;
        /**
         * @default 'circle'
         */
        shape?: string;
    }

    /**
     * Applies only to polar charts and angular gauges. This configuration object holds general options for the combined X
     * and Y axes set. Each xAxis or yAxis can reference the pane by index.
     */
    interface PaneOptions {
        /**
         * An object, or array of objects, for backgrounds. Sub options include backgroundColor (can be solid or gradient),
         * shape ('solid', 'arc' or 'circle'), innerWidth, outerWidth, borderWidth, borderColor.
         * @since 2.3.0
         */
        background?: PaneBackground | PaneBackground[];
        /**
         * The center of a polar chart or angular gauge, given as an array of [x, y] positions. Positions can be given as
         * integers that transform to pixels, or as percentages of the plot area size.
         * @default ['50%', '50%']
         * @since 2.3.0
         */
        center?: [number | string, number | string];
        /**
         * The end angle of the polar X axis or gauge value axis, given in degrees where 0 is north.
         * @default startAngle + 360
         * @since 2.3.0
         */
        endAngle?: number;
        /**
         * The size of the pane, either as a number defining pixels, or a percentage defining a percentage of the plot are.
         * @default '85%'
         */
        size?: number | string;
        /**
         * The size of the pane, either as a number defining pixels, or a percentage defining a percentage of the plot are
         * @since 2.3.0
         */
        startAngle?: number;
    }

    /**
     * Allows setting a set of rules to apply for different screen or chart sizes.
     * Each rule specifies additional chart options.
     * @since 5.0.0
     */
    interface ResponsiveOptions {
        /**
         * A set of rules for responsive settings. The rules are executed from the top down.
         * @since 5.0.0
         */
        rules?: RulesOptions[];
    }

    /**
     * A set of rules for responsive settings. The rules are executed from the top down.
     */
    interface RulesOptions {
        /**
         * A full set of chart options to apply as overrides to the general chart options.
         * The chart options are applied when the given rule is active.
         *
         * A special case is configuration objects that take arrays, for example xAxis, yAxis or series.
         * For these collections, an id option is used to map the new option set to an existing object.
         * If an existing object of the same id is not found, the item of the same indexupdated.
         * So for example, setting chartOptions with two series items without an id, will cause the existing
         * chart's two series to be updated with respective options.
         * @since 5.0.0
         */
        chartOptions?: ChartOptions;

        /**
         * Under which conditions the rule applies.
         * @since 5.0.0
         */
        condition?: ConditionOptions;
    }

    interface TitleObject extends TitleOptions {
        /**
         * Update method that points back to Chart.setTitle.
         * @since 5.0.0
         */
        update(options: TitleOptions): void;
    }

    /**
     * Under which conditions the rule applies.
     */
    interface ConditionOptions {
        /**
         * A callback function to gain complete control on when the responsive rule applies. Return true if it applies.
         * This opens for checking against other metrics than the chart size, or example the document size or other elements.
         * The this keyword refers to the Chart object.
         * @since 5.0.0
         */
        callback?: Function;

        /**
         * The responsive rule applies if the chart height is less than this.
         * @since 5.0.0
         */
        maxHeight?: number;

        /**
         * The responsive rule applies if the chart height is less than this.
         * @since 5.0.0
         */
        maxWidth?: number;

        /**
         * The responsive rule applies if the chart height is greater than this.
         * @since 5.0.0
         * @default 0
         */
        minHeight?: number;

        /**
         * The responsive rule applies if the chart width is greater than this.
         * @since 5.0.0
         * @default 0
         */
        minWidth?: number;
    }

    interface DataLabels {
        /**
         * The alignment of the data label compared to the point. If right, the right side of the label should be touching
         * the point. For points with an extent, like columns, the alignments also dictates how to align it inside the box,
         * as given with the inside option. Can be one of 'left', 'center' or 'right'.
         * @default 'center'
         */
        align?: string;
        /**
         * Whether to allow data labels to overlap. To make the labels less sensitive for overlapping, the
         * dataLabels.padding can be set to 0.
         * @default false
         * @since 4.1.0
         */
        allowOverlap?: boolean;
        /**
         * The background color or gradient for the data label.
         * @since 2.2.1
         */
        backgroundColor?: string | Gradient;
        /**
         * The border color for the data label.
         * @since 2.2.1
         */
        borderColor?: string | Gradient;
        /**
         * The border radius in pixels for the data label.
         * @default 0
         * @since 2.2.1
         */
        borderRadius?: number;
        /**
         * The border width in pixels for the data label.
         * @default 0
         * @since 2.2.1
         */
        borderWidth?: number;
        /**
         * A class name for the data label. Particularly in styled mode, this can be used to give each series' or point's
         * data label unique styling. In addition to this option, a default color class name is added so that we can give
         * the labels a contrast text shadow.
         * @since 5.0.0
         */
        className?: string;
        /**
         * The text color for the data labels.
         * @default null
         */
        color?: string | Gradient | null;
        /**
         * Whether to hide data labels that are outside the plot area. By default, the data label is moved inside the plot
         * area according to the overflow option.
         * @default 2.3.3
         */
        crop?: boolean;
        /**
         * Whether to defer displaying the data labels until the initial series animation has finished.
         * @default true
         * @since 4.0
         */
        defer?: boolean;
        /**
         * Enable or disable the data labels.
         * @default false
         */
        enabled?: boolean;
        /**
         * A format string for the data label. Available variables are the same as for formatter.
         * @default {y}
         * @since 3.0
         */
        format?: string;
        /**
         * Callback JavaScript function to format the data label. Note that if a format is defined, the format takes
         * precedence and the formatter is ignored.
         * Available data are:
         * - this.percentage Stacked series and pies only. The point's percentage of the total.
         * - this.point      The point object. The point name, if defined, is available through this.point.name.
         * - this.series     The series object. The series name is available through this.series.name.
         * - this.total      Stacked series only. The total value at this point's x value.
         * - this.x:         The x value.
         * - this.y:         The y value.
         */
        formatter?(): string;
        /**
         * For points with an extent, like columns, whether to align the data label inside the box or to the actual value
         * point. Defaults to false in most cases, true in stacked columns.
         * @since 3.0
         */
        inside?: boolean;
        /**
         * How to handle data labels that flow outside the plot area. The default is 'justify', which aligns them inside the
         * plot area. For columns and bars, this means it will be moved inside the bar. To display data labels outside the
         * plot area, set crop to false and overflow to 'none'.
         * @default 'justify'
         * @since 3.0.6
         */
        overflow?: string;
        /**
         * When either the borderWidth or the backgroundColor is set, this  is the padding within the box.
         * @default 5
         * @since 2.2.1
         */
        padding?: number;
        /**
         * Whether to reserve space for the labels. This can be turned off when for example the labels are rendered inside
         * the plot area instead of outside.
         * @default true
         * @since 4.1.10
         */
        reserveSpace?: boolean;
        /**
         * Text rotation in degrees. Note that due to a more complex structure, backgrounds, borders and padding will be
         * lost on a rotated data label.
         * @default 0
         */
        rotation?: number;
        /**
         * The shadow of the box. Works best with borderWidth or backgroundColor. Since 2.3 the shadow can be an object
         * configuration containing color, offsetX, offsetY, opacity and width.
         * @default false
         */
        shadow?: boolean | Shadow;
        /**
         * The name of a symbol to use for the border around the label. Symbols are predefined functions on the Renderer
         * object.
         * @default 'square'
         * @since 4.1.2
         */
        shape?: string;
        /**
         * Styles for the label.
         * @default {'color': 'contrast', 'fontSize': '11px', 'fontWeight': 'bold', 'textShadow': '0 0 6px contrast, 0 0 3px contrast' }
         * @since 4.1.0
         */
        style?: CSSObject;
        /**
         * Whether to {@link http://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#html|use HTML} to render the labels.
         * @default false
         */
        useHTML?: boolean;
        /**
         * The vertical alignment of a data label. Can be one of top, middle or bottom. The default value depends on the
         * data, for instance in a column chart, the label is above positive values and below negative values.
         * @since 2.3.3
         */
        verticalAlign?: string;
        /**
         * The x position offset of the label relative to the point.
         * @default 0
         */
        x?: number;
        /**
         * The y position offset of the label relative to the point.
         * @default -6
         */
        y?: number;
        /**
         * The Z index of the data labels. The default Z index puts it above the series. Use a Z index of 2 to display it
         * behind the series.
         * @default 6
         * @since 2.3.5
         */
        zIndex?: number;
    }

    interface PieDataLabels extends DataLabels {
        /**
         * The color of the line connecting the data label to the pie slice. The default color is the same as the point's
         * color. Defaults to {point.color}.
         * @since 2.1
         */
        connectorColor?: string;
        /**
         * The distance from the data label to the connector.
         * @default 5
         * @since 2.1
         */
        connectorPadding?: number;
        /**
         * The width of the line connecting the data label to the pie slice.
         * @default 1
         * @since 2.1
         */
        connectorWidth?: number;
        /**
         * The distance of the data label from the pie's edge. Negative numbers put the data label on top of the pie slices.
         * Connectors are only shown for data labels outside the pie.
         * @default 30
         * @since 2.1
         */
        distance?: number;
        /**
         * Whether to render the connector as a soft arc or a line with sharp break.
         * @default true
         * @since 2.1.7
         */
        softConnector?: boolean;
    }

    interface AreaCheckboxEvent extends Event {
        /**
         * The state of the checkbox
         */
        checked: boolean;
        /**
         * The checked item
         */
        item: SeriesObject | PointObject;
    }

    interface AreaClickEvent extends Event {
        /**
         * A pointer to the nearest point on the graph
         */
        point: PointObject;
    }

    interface PlotEvents {
        /**
         * Fires after the series has finished its initial animation, or in case animation is disabled, immediately as the
         * series is displayed.
         *
         * The this keyword refers to the Series object.
         * @since 4.0
         */
        afterAnimate?(event: Event): void;
        /**
         * Fires when the checkbox next to the series' name in the legend is clicked. One parameter, event, is passed to the
         * function. The state of the checkbox is found by event.checked. The checked item is found by event.item. Return
         * false to prevent the default action which is to toggle the select state of the series.
         *
         * The this keyword refers to the Series object.
         * @since 1.2.0
         */
        checkboxClick?(event: AreaCheckboxEvent): boolean | void;
        /**
         * Fires when the series is clicked. One parameter, event, is passed to the function. This contains common event
         * information based on jQuery or MooTools depending on which library is used as the base for Highcharts.
         * Additionally, event.point holds a pointer to the nearest point on the graph.
         *
         * The this keyword refers to the Series object.
         */
        click?(event: AreaClickEvent): void;
        /**
         * Fires when the series is hidden after chart generation time, either by clicking the legend item or by calling
         * .hide().
         *
         * The this keyword refers to the Series object.
         */
        hide?(): void;
        /**
         * Fires when the legend item belonging to the series is clicked. One parameter, event, is passed to the function.
         * This contains common event information based on jQuery or MooTools depending on which library is used as the base
         * for Highcharts. The default action is to toggle the visibility of the series. This can be prevented by returning
         * false or calling event.preventDefault().
         *
         * The this keyword refers to the Series object.
         */
        legendItemClick?(event: Event): boolean | void;
        /**
         * Fires when the mouse leaves the graph. One parameter, event, is passed to the function. This contains common
         * event information based on jQuery or MooTools depending on which library is used as the base for Highcharts. If
         * the stickyTracking option is true, mouseOut doesn't happen before the mouse enters another graph or leaves the
         * plot area.
         *
         * The this keyword refers to the Series object.
         */
        mouseOut?(event: Event): void;
        /**
         * Fires when the mouse enters the graph. One parameter, event, is passed to the function. This contains common
         * event information based on jQuery or MooTools depending on which library is used as the base for Highcharts.
         *
         * The this keyword refers to the Series object.
         */
        mouseOver?(event: Event): void;
        /**
         * Fires when the series is shown after chart generation time, either by clicking the legend item or by calling
         * .show().
         *
         * The this keyword refers to the Series object.
         * @since 1.2.0
         */
        show?(): void;
    }

    interface MarkerState {
        /**
         * Enable or disable the point marker. If null, the markers are hidden when the data is dense, and shown for more
         * widespread data points.
         * @default null, true for hover and select
         */
        enabled?: boolean | null;
        /**
         * The fill color of the point marker. When null, the series' or point's color is used.
         */
        fillColor?: string | null;
        /**
         * The color of the point marker's outline. When null, the series' or point's color is used.
         * @default '#FFFFFF', '#000000' for select state
         */
        lineColor?: string | Gradient | null;
        /**
         * The width of the point marker's outline.
         * @default 0
         */
        lineWidth?: number;
        /**
         * The radius of the point marker.
         * @default 4, undefined for hover and select
         */
        radius?: number;
    }

    interface MarkerHoverState extends MarkerState {
        /**
         * The additional line width for a hovered point.
         * @default 1
         * @since 4.0.3
         */
        lineWidthPlus?: number;
        /**
         * The number of pixels to increase the radius of the hovered point.
         * @default 2
         * @since 4.0.3
         */
        radiusPlus?: number;
    }

    interface Marker extends MarkerState {
        /**
         * Image markers only. Set the image width explicitly. When using this option, a width must also be set.
         * @default null
         * @since 4.0.4
         */
        height?: number | null;
        states?: {
            hover?: MarkerHoverState;
            /**
             * The appearance of the point marker when selected. In order to allow a point to be selected, set the
             * series.allowPointSelect option to true.
             */
            select?: MarkerState;
        };
        /**
         * A predefined shape or symbol for the marker. When null, the symbol is pulled from options.symbols. Other possible
         * values are 'circle', 'square', 'diamond', 'triangle' and 'triangle-down'.
         *
         * Additionally, the URL to a graphic can be given on this form: 'url(graphic.png)'. Note that for the image to be
         * applied to exported charts, its URL needs to be accessible by the export server.
         *
         * Custom callbacks for symbol path generation can also be added to Highcharts.SVGRenderer.prototype.symbols. The
         * callback is then used by its method name.
         */
        symbol?: string | null; // null, 'circle', 'square', 'diamond', 'triangle' 'triangle-down' or 'url(graphic.png)'
        /**
         * Image markers only. Set the image width explicitly. When using this option, a height must also be set.
         * @default null.
         * @since 4.0.4
         */
        width?: number | null;
    }

    interface PointEvents {
        /**
         * Fires when a point is clicked. One parameter, event, is passed to the function. This contains common event
         * information based on jQuery or MooTools depending on which library is used as the base for Highcharts.
         *
         * If the series.allowPointSelect option is true, the default action for the point's click event is to toggle the
         * point's select state. Returning false cancels this action.
         *
         * The this keyword refers to the Point object.
         */
        click?(event: Event): boolean;
        /**
         * Fires when the mouse leaves the area close to the point. One parameter, event, is passed to the function. This
         * contains common event information based on jQuery or MooTools depending on which library is used as the base for
         * Highcharts.
         *
         * The this keyword refers to the Point object.
         */
        mouseOut?(event: Event): void;
        /**
         * Fires when the mouse enters the area close to the point. One parameter, event, is passed to the function. This
         * contains common event information based on jQuery or MooTools depending on which library is used as the base for
         * Highcharts.
         *
         * The this keyword refers to the Point object.
         */
        mouseOver?(event: Event): void;
        /**
         * Fires when the point is removed using the .remove() method. One parameter, event, is passed to the function.
         * Returning false cancels the operation.
         *
         * The this keyword refers to the Point object.
         * @since 1.2.0
         */
        remove?(event: Event): boolean | void;
        /**
         * Fires when the point is selected either programmatically or following a click on the point. One parameter, event,
         * is passed to the function. Returning false cancels the operation.
         *
         * The this keyword refers to the Point object.
         * @since 1.2.0
         */
        select?(event: Event): boolean | void;
        /**
         * Fires when the point is unselected either programmatically or following a click on the point. One parameter,
         * event, is passed to the function. Returning false cancels the operation.
         *
         * The this keyword refers to the Point object.
         * @since 1.2.0
         */
        unselect?(event: Event): boolean | void;
        /**
         * Fires when the point is updated programmatically through the .update() method. One parameter, event, is passed to
         * the function. The new point options can be accessed through event.options. Returning false cancels the operation.
         *
         * The this keyword refers to the Point object.
         * @since 1.2.0
         */
        update?(event: Event): boolean | void;
        /**
         * Fires when the legend item belonging to the pie point (slice) is clicked.
         * The this keyword refers to the point itself. One parameter, event, is passed to the function.
         * This contains common event information based on jQuery or MooTools depending on which library is used as the base for Highcharts.
         * The default action is to toggle the visibility of the point. This can be prevented by calling event.preventDefault().
         */
        legendItemClick?(event: Event): boolean | void;
    }

    interface Halo {
        /**
         * A collection of SVG attributes to override the appearance of the halo, for example fill, stroke and stroke-width.
         * @since 4.0
         */
        attributes?: {};
        /**
         * Opacity for the halo unless a specific fill is overridden using the attributes setting. Note that Highcharts is
         * only able to apply opacity to colors of hex or rgb(a) formats.
         * @default 0.25
         * @since 4.0
         */
        opacity?: number;
        /**
         * The pixel size of the halo. For point markers this is the radius of the halo. For pie slices it is the width of
         * the halo outside the slice. For bubbles it defaults to 5 and is the width of the halo outside the bubble.
         * Defaults to 10.
         */
        size?: number;
    }

    interface LineStates {
        /**
         * Animation setting for hovering the graph in line-type series.
         * @default { "duration": 50 }
         * @since 5.0.8
         */
        animation?: boolean | Animation;
        /**
         * Enable separate styles for the hovered series to visualize that the user hovers either the series itself or the
         * legend.
         * @default true
         * @since 1.2
         */
        enabled?: boolean;
        /**
         * Options for the halo appearing around the hovered point in line-type series as well as outside the hovered slice
         * in pie charts. By default the halo is filled by the current point or series color with an opacity of 0.25. The
         * halo can be disabled by setting the halo option to false.
         * @since 4.0
         */
        halo?: boolean | Halo;
        /**
         * Pixel with of the graph line.
         * @default 2
         */
        lineWidth?: number;
        /**
         * The additional line width for the graph of a hovered series.
         * @default 1
         * @since 4.0.3
         */
        lineWidthPlus?: number;
        marker?: Marker;
    }

    interface BarStates {
        /**
         * A specific border color for the hovered point. Defaults to inherit the normal state border color.
         */
        borderColor?: string | Gradient;
        /**
         * How much to brighten the point on interaction. Requires the main color to be defined in hex or rgb(a) format.
         * @default 0.1
         */
        brightness?: number;
        color?: string | Gradient;
        /**
         * Enable separate styles for the hovered series to visualize that the user hovers either the series itself or the
         * legend.
         * @default true
         * @since 1.2
         */
        enabled?: boolean;
        /**
         * Options for the halo appearing around the hovered point in line-type series as well as outside the hovered slice
         * in pie charts. By default the halo is filled by the current point or series color with an opacity of 0.25. The
         * halo can be disabled by setting the halo option to false.
         * @since 4.0
         */
        halo?: boolean | Halo;
    }

    interface PieStates extends BarStates, LineStates { }

    interface AreaZone {
        /**
         * Styled mode only. A custom class name for the zone.
         * @since 5.0.0
         */
        className?: string;
        /**
         * Defines the color of the series.
         * @since 4.1.0
         */
        color?: string | Gradient;
        /**
         * A name for the dash style to use for the graph.
         * @since 4.1.0
         */
        dashStyle?: string;
        /**
         * Defines the fill color for the series (in area type series)
         * @since 4.1.0
         */
        fillColor?: string;
        /**
         * The value up to where the zone extends, if undefined the zones stretches to the last value in the series.
         * @default undefined
         * @since 4.1.0
         */
        value?: number;
    }

    interface RangeDataLabels {
        /**
         * The alignment of the data label compared to the point. If right, the right side of the label should be touching
         * the point. For points with an extent, like columns, the alignments also dictates how to align it inside the box,
         * as given with the inside option. Can be one of 'left', 'center' or 'right'.
         * @default 'center'
         */
        align?: string;
        /**
         * Whether to allow data labels to overlap. To make the labels less sensitive for overlapping, the
         * dataLabels.padding can be set to 0.
         * @default false
         * @since 4.1.0
         */
        allowOverlap?: boolean;
        /**
         * The background color or gradient for the data label.
         * @default undefined
         * @since 2.2.1
         */
        backgroundColor?: string | Gradient;
        /**
         * The border color for the data label.
         * @default undefined
         * @since 2.2.1
         */
        borderColor?: string | Gradient;
        /**
         * The border radius in pixels for the data label.
         * @default 0
         * @since 2.2.1
         */
        borderRadius?: number;
        /**
         * The border width in pixels for the data label.
         * @default 0
         * @since 2.2.1
         */
        borderWidth?: number;
        /**
         * The text color for the data labels.
         * @default null
         */
        color?: string | Gradient | null;
        /**
         * Whether to hide data labels that are outside the plot area. By default, the data label is moved inside the plot
         * area according to the overflow option.
         * @default true
         * @since 2.3.3
         */
        crop?: boolean;
        /**
         * Whether to defer displaying the data labels until the initial series animation has finished.
         * @default true
         * @since 4.0
         */
        defer?: boolean;
        /**
         * Enable or disable the data labels.
         * @default false
         */
        enabled?: boolean;
        /**
         * A format string for the data label. Available variables are the same as for formatter.
         * @default '{y}'
         * @since 3.0
         */
        format?: string;
        /**
         * Callback JavaScript function to format the data label. Note that if a format is defined, the format takes
         * precedence and the formatter is ignored.
         * Available data are:
         * - this.percentage Stacked series and pies only. The point's percentage of the total.
         * - this.point      The point object. The point name, if defined, is available through this.point.name.
         * - this.series     The series object. The series name is available through this.series.name.
         * - this.total      Stacked series only. The total value at this point's x value.
         * - this.x:         The x value.
         * - this.y:         The y value.
         */
        formatter?(): string;
        /**
         * For points with an extent, like columns, whether to align the data label inside the box or to the actual value
         * point. Defaults to false in most cases, true in stacked columns.
         * @since 3.0
         */
        inside?: boolean;
        /**
         * How to handle data labels that flow outside the plot area. The default is justify, which aligns them inside the
         * plot area. For columns and bars, this means it will be moved inside the bar. To display data labels outside the
         * plot area, set crop to false and overflow to 'none'.
         * @default 'justify'
         * @since 3.0.6
         */
        overflow?: string;
        /**
         * When either the borderWidth or the backgroundColor is set, this  is the padding within the box.
         * @default 5
         * @since 2.2.1
         */
        padding?: number;
        /**
         * Text rotation in degrees. Note that due to a more complex structure, backgrounds, borders and padding will be
         * lost on a rotated data label.
         * @default 0
         */
        rotation?: number;
        /**
         * The shadow of the box. Works best with borderWidth or backgroundColor. Since 2.3 the shadow can be an object
         * configuration containing color, offsetX, offsetY, opacity and width.
         * @default false
         * @since 2.2.1
         */
        shadow?: boolean | Shadow;
        /**
         * The name of a symbol to use for the border around the label. Symbols are predefined functions on the Renderer
         * object.
         * @default 'square'
         * @since 4.1.2
         */
        shape?: string;
        /**
         * Styles for the label.
         * @default {'color': 'contrast', 'fontSize': '11px', 'fontWeight': 'bold', 'textShadow': '0 0 6px contrast, 0 0 3px contrast' }
         * @since 4.1.0
         */
        style?: CSSObject;
        /**
         * Whether to {@link http://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#html|use HTML} to render the labels.
         * @default false
         */
        useHTML?: boolean;
        /**
         * The vertical alignment of a data label. Can be one of 'top', 'middle' or 'bottom'. The default value depends on the
         * data, for instance in a column chart, the label is above positive values and below negative values.
         * @since 2.3.3
         */
        verticalAlign?: string;
        /**
         * X offset of the higher data labels relative to the point value.
         * @default 0
         * @since 2.3.0
         */
        xHigh?: number;
        /**
         * X offset of the lower data labels relative to the point value.
         * @default 0
         * @since 2.3.0
         */
        xLow?: number;
        /**
         * Y offset of the higher data labels relative to the point value.
         * @default -6
         * @since 2.3.0
         */
        yHigh?: number;
        /**
         * Y offset of the lower data labels relative to the point value.
         * @default 16
         * @since 2.3.0
         */
        yLow?: number;
        /**
         * The Z index of the data labels. The default Z index puts it above the series. Use a Z index of 2 to display it
         * behind the series.
         * @default 6
         * @since 2.3.5
         */
        zIndex?: number;
    }

    interface Dial {
        /**
         * The background or fill color of the gauge's dial.
         * @default 'black'
         * @since 2.3.0
         */
        backgroundColor?: string | Gradient;
        /**
         * The length of the dial's base part, relative to the total radius or length of the dial.
         * @default '70%'.
         * @since 2.3.0
         */
        baseLength?: string;
        /**
         * The pixel width of the base of the gauge dial. The base is the part closest to the pivot, defined by baseLength.
         * @default 3
         * @since 2.3.0
         */
        baseWidth?: number;
        /**
         * The border color or stroke of the gauge's dial. By default, the borderWidth is 0, so this must be set in addition
         * to a custom border color.
         * @default 'silver'
         * @since 2.3.0
         */
        borderColor?: string | Gradient;
        /**
         * The width of the gauge dial border in pixels.
         * @default 0
         * @since 2.3.0
         */
        borderWidth?: number;
        /**
         * The radius or length of the dial, in percentages relative to the radius of the gauge itself.
         * @default '80%'
         * @since 2.3.0
         */
        radius?: string;
        /**
         * The length of the dial's rear end, the part that extends out on the other side of the pivot. Relative to the
         * dial's length.
         * @default '10%'
         * @since 2.3.0
         */
        rearLength?: string;
        /**
         * The width of the top of the dial, closest to the perimeter. The pivot narrows in from the base to the top.
         * @default 1
         * @since 2.3.0
         */
        topWidth?: number;
    }

    interface Pivot {
        /**
         * The background color or fill of the pivot.
         * @default 'black'
         * @since 2.3.0
         */
        backgroundColor?: string | Gradient;
        /**
         * The border or stroke color of the pivot. In able to change this, the borderWidth must also be set to something
         * other than the default 0.
         * @default 'silver'
         * @since 2.3.0
         */
        borderColor?: string | Gradient;
        /**
         * The border or stroke width of the pivot.
         * @default 0
         * @since 2.3.0
         */
        borderWidth?: number;
        /**
         * The pixel radius of the pivot.
         * @default 5
         * @since 2.3.0
         */
        radius?: number;
    }

    /**
     * Set options on specific levels. Takes precedence over series options, but not point options.
     */
    interface TreeMapLevel {
        /**
         * Can set borderColor on all points which lies on the same level.
         * @since 4.1.0
         */
        borderColor?: string | Gradient;
        /**
         * et the dash style of the border of all the point which lies on the level.
         * @since 4.1.0
         */
        borderDashStyle?: string;
        /**
         * Can set the borderWidth on all points which lies on the same level.
         * @since 4.1.0
         */
        borderWidth?: number;
        /**
         * Can set a color on all points which lies on the same level.
         * @since 4.1.0
         */
        color?: string | Gradient;
        /**
         * Can set the options of dataLabels on each point which lies on the level.
         * @default undefined
         * @since 4.1.0
         */
        dataLabels?: DataLabels;
        /**
         * Can set the layoutAlgorithm option on a specific level.
         * @since 4.1.0
         */
        layoutAlgorithm?: string;
        /**
         * Can set the layoutStartingDirection option on a specific level.
         * @since 4.1.0
         */
        layoutStartingDirection?: string;
        /**
         * Decides which level takes effect from the options set in the levels object.
         * @since 4.1.0
         */
        level?: number;
    }

    /**
     * General options for all series types.
     */
    interface SeriesChart {
        /**
         * Allow this series' points to be selected by clicking on the markers, bars or pie slices.
         * @default false
         * @since 1.2.0
         */
        allowPointSelect?: boolean;
        /**
         * Enable or disable the initial animation when a series is displayed. The animation can also be set as a
         * configuration object. Please note that this option only applies to the initial animation of the series itself.
         * For other animations, see chart.animation and the animation parameter under the API methods.
         * @default true
         */
        animation?: boolean | Animation;
        /**
         * A class name to apply to the series' graphical elements.
         * @since 5.0.0
         */
        className?: string;
        /**
         * The main color or the series. In line type series it applies to the line and the point markers unless otherwise
         * specified. In bar type series it applies to the bars unless a color is specified per point. The default value is
         * pulled from the options.colors array.
         */
        color?: string | Gradient;
        /**
         * Polar charts only. Whether to connect the ends of a line series plot across the extremes.
         * @default true
         * @since 2.3.0
         */
        connectEnds?: boolean;
        /**
         * Whether to connect a graph line across null points.
         * @default false
         */
        connectNulls?: boolean;
        /**
         * When the series contains less points than the crop threshold, all points are drawn, event if the points fall
         * outside the visible plot area at the current zoom. The advantage of drawing all points (including markers and
         * columns), is that animation is performed on updates. On the other hand, when the series contains more points than
         * the crop threshold, the series data is cropped to only contain points that fall within the plot area. The
         * advantage of cropping away invisible points is to increase performance on large series.
         * @default 300
         * @since 2.2
         */
        cropThreshold?: number;
        /**
         * You can set the cursor to 'pointer' if you have click events attached to the series, to signal to the user that
         * the points and lines can be clicked.
         */
        cursor?: string;
        /**
         * A name for the dash style to use for the graph. Applies only to series type having a graph, like line, spline,
         * area and scatter in case it has a lineWidth. The value for the dashStyle include:
         * - Solid
         * - ShortDash
         * - ShortDot
         * - ShortDashDot
         * - ShortDashDotDot
         * - Dot
         * - Dash
         * - LongDash
         * - DashDot
         * - LongDashDot
         * - LongDashDotDot
         * @default 'Solid'
         */
        dashStyle?: string;
        dataLabels?: DataLabels;
        /**
         * Enable or disable the mouse tracking for a specific series. This includes point tooltips and click events on
         * graphs and points. For large datasets it improves performance.
         * @default true
         */
        enableMouseTracking?: boolean;
        events?: PlotEvents;
        /**
         * Determines whether the series should look for the nearest point in both dimensions or just the x-dimension when
         * hovering the series. Defaults to 'xy' for scatter series and 'x' for most other series. If the data has duplicate
         * x-values, it is recommended to set this to 'xy' to allow hovering over all points.
         *
         * Applies only to series types using nearest neighbor search (not direct hover) for tooltip.
         * @since 5.0.10
         */
        findNearestPointBy?: string;
        /**
         * Whether to use the Y extremes of the total chart width or only the zoomed area when zooming in on parts of the X
         * axis. By default, the Y axis adjusts to the min and max of the visible data. Cartesian series only.
         * @default false
         * @since 4.1.6
         */
        getExtremesFromAll?: boolean;
        /**
         * An array specifying which option maps to which key in the data point array. This makes it convenient to work with
         * unstructured data arrays from different sources.
         * @since 4.1.6
         */
        keys?: string[];
        /**
         * Pixel with of the graph line.
         * @default 2
         */
        lineWidth?: number;
        /**
         * The line cap used for line ends and line joins on the graph.
         * @default 'round'
         */
        linecap?: string;
        /**
         * The id of another series to link to. Additionally, the value can be ':previous' to link to the previous series.
         * When two series are linked, only the first one appears in the legend. Toggling the visibility of this also
         * toggles the linked series.
         * @since 3.0
         */
        linkedTo?: string;
        marker?: Marker;
        /**
         * The color for the parts of the graph or points that are below the threshold.
         * @default null.
         * @since 3.0
         */
        negativeColor?: string | null;
        point?: {
            events: PointEvents;
        };
        /**
         * If no x values are given for the points in a series, pointInterval defines the interval of the x values. For
         * example, if a series contains one value every decade starting from year 0, set pointInterval to 10.
         *
         * Since Highcharts 4.1, it can be combined with pointIntervalUnit to draw irregular intervals.
         * @default 1
         */
        pointInterval?: number;
        /**
         * On datetime series, this allows for setting the pointInterval to the two irregular time units, month and year.
         * Combine it with pointInterval to draw quarters, 6 months, 10 years etc.
         * @since 4.1.0
         */
        pointIntervalUnit?: string;
        /**
         * Possible values: null, 'on', 'between'.
         *
         * In a column chart, when pointPlacement is 'on', the point will not create any padding of the X axis. In a polar
         * column chart this means that the first column points directly north. If the pointPlacement is 'between', the
         * columns will be laid out between ticks. This is useful for example for visualising an amount between two points
         * in time or in a certain sector of a polar chart.
         *
         * Since Highcharts 3.0.2, the point placement can also be numeric, where 0 is on the axis value, -0.5 is between
         * this value and the previous, and 0.5 is between this value and the next. Unlike the textual options, numeric
         * point placement options won't affect axis padding.
         *
         * Note that pointPlacement needs a pointRange to work. For column series this is computed, but for line-type series
         * it needs to be set.
         *
         * Defaults to null in cartesian charts, 'between' in polar charts.
         * @since 2.3.0
         */
        pointPlacement?: string | number | null;
        /**
         * If no x values are given for the points in a series, pointStart defines on what value to start. For example, if a
         * series contains one yearly value starting from 1945, set pointStart to 1945.
         * @default 0
         */
        pointStart?: number;
        /**
         * Whether to select the series initially. If showCheckbox is true, the checkbox next to the series name will be
         * checked for a selected series.
         * @default false
         * @since 1.2.0
         */
        selected?: boolean;
        /**
         * Whether to apply a drop shadow to the graph line. Since 2.3 the shadow can be an object configuration containing
         * color, offsetX, offsetY, opacity and width.
         * @default false
         */
        shadow?: boolean | Shadow;
        /**
         * If true, a checkbox is displayed next to the legend item to allow selecting the series. The state of the checkbox
         * is determined by the selected option.
         * @default false
         * @since 1.2.0
         */
        showCheckbox?: boolean;
        /**
         * Whether to display this particular series or series type in the legend. The default value is true for standalone
         * series, false for linked series. Defaults to true.
         */
        showInLegend?: boolean;
        /**
         * When this is true, the series will not cause the Y axis to cross the zero plane (or threshold option) unless the
         * data actually crosses the plane.
         *
         * For example, if softThreshold is false, a series of 0, 1, 2, 3 will make the Y axis show negative values
         * according to the minPadding option. If softThreshold is true, the Y axis starts at 0.
         * @default true
         * @since 4.1.9
         */
        softThreshold?: boolean;
        /**
         * Whether to stack the values of each series on top of each other. Possible values are null to disable, 'normal' to
         * stack by value or 'percent'.
         */
        stacking?: string | null;
        /**
         * A wrapper object for all the series options in specific states.
         */
        states?: {
            /**
             * Options for the hovered series
             */
            hover?: LineStates;
        };
        /**
         * Sticky tracking of mouse events. When true, the mouseOut event on a series isn't triggered until the mouse moves
         * over another series, or out of the plot area. When false, the mouseOut event on a series is triggered when the
         * mouse leaves the area around the series' graph or markers. This also implies the tooltip. When stickyTracking is
         * false and tooltip.shared is false, the tooltip will be hidden when moving the mouse between series. Defaults to
         * true for line and area type series, but to false for columns, pies etc.
         * @default true
         * @since 2.0
         */
        stickyTracking?: boolean;
        /**
         * The Y axis value to serve as the base for the area, for distinguishing between values above and below a
         * threshold. If null, the area behaves like a line series with fill between the graph and the Y axis minimum.
         * @default 0
         * @since 2.0
         */
        threshold?: number | null;
        /**
         * A configuration object for the tooltip rendering of each single series. Properties are inherited from tooltip,
         * but only the following properties can be defined on a series level.
         * @since 2.3
         */
        tooltip?: SeriesTooltipOptions;
        /**
         * When a series contains a data array that is longer than this, only one dimensional arrays of numbers, or two
         * dimensional arrays with x and y values are allowed. Also, only the first point is tested, and the rest are
         * assumed to be the same format. This saves expensive data checking and indexing in long series. Set it to 0
         * disable.
         * @default 1000
         * @since 2.2
         */
        turboThreshold?: number;
        /**
         * Set the initial visibility of the series.
         * @default true
         */
        visible?: boolean;
        /**
         * Defines the Axis on which the zones are applied.
         * @default 'y'
         * @since 4.1.0
         */
        zoneAxis?: string;
        /**
         * An array defining zones within a series. Zones can be applied to the X axis, Y axis or Z axis for bubbles,
         * according to the zoneAxis option.
         */
        zones?: AreaZone[];
    }

    interface AreaChart extends SeriesChart {
        /**
         * Fill color or gradient for the area. When null, the series' color is used with the series' fillOpacity.
         */
        fillColor?: string | Gradient | null;
        /**
         * Fill opacity for the area. Note that when you set an explicit fillColor, the fillOpacity is not applied. Instead,
         * you should define the opacity in the fillColor with an rgba color definition.
         * @default 0.75
         */
        fillOpacity?: number;
        /**
         * A separate color for the graph line. By default the line takes the color of the series, but the lineColor setting
         * allows setting a separate color for the line without altering the fillColor.
         */
        lineColor?: string | Gradient;
        /**
         * A separate color for the negative part of the area.
         * @since 3.0
         */
        negativeFillColor?: string;
        /**
         * Whether to apply steps to the line. Possible values are left, center and right. Prior to 2.3.5, only left was
         * supported.
         *
         * @default 'false'
         * @since 1.2.5
         */
        step?: string;
        /**
         * Whether the whole area or just the line should respond to mouseover tooltips and other mouse or touch events.
         * @default false
         * @since 1.1.6
         */
        trackByArea?: boolean;
    }

    interface AreaRangeChart extends AreaChart {
        /**
         * Extended data labels for range series types. Range series data labels have no x and y options. Instead, they have
         * xLow, xHigh, yLow and yHigh options to allow the higher and lower data label sets individually.
         * @since 2.3.0
         */
        dataLabels?: RangeDataLabels;
    }

    interface AreaSplineChart extends AreaChart {
    }

    interface AreaSplineRangeChart extends AreaRangeChart {
    }

    interface BarChart extends SeriesChart {
        /**
         * The color of the border surrounding each column or bar.
         * @default '#FFFFFF'
         */
        borderColor?: string | Gradient;
        /**
         * The corner radius of the border surrounding each column or bar.
         * @default 0
         */
        borderRadius?: number;
        /**
         * The width of the border surrounding each column or bar.
         * @default 1
         */
        borderWidth?: number;
        /**
         * When using automatic point colors pulled from the options.colors collection, this option determines whether the
         * chart should receive one color per series or one color per point. Defaults to false.
         * @default false
         * @since 2.0
         */
        colorByPoint?: boolean;
        /**
         * A series specific or series type specific color set to apply instead of the global colors when colorByPoint is true.
         * @since 3.0
         */
        colors?: Color[];
        /**
         * Depth of the columns in a 3D column chart. Requires highcharts-3d.js.
         * @default 25
         * @since 4.0
         */
        depth?: number;
        /**
         * 3D columns only. The color of the edges. Similar to borderColor, except it defaults to the same color as the
         * column.
         */
        edgeColor?: string;
        /**
         * 3D columns only. The width of the colored edges.
         * @default 1
         */
        edgeWidth?: number;
        /**
         * Padding between each value groups, in x axis units.
         * @default 0.2
         */
        groupPadding?: number;
        /**
         * The spacing between columns on the Z Axis in a 3D chart. Requires highcharts-3d.js.
         * @default 1
         * @since 4.0
         */
        groupZPadding?: number;
        /**
         * Whether to group non-stacked columns or to let them render independent of each other. Non-grouped columns will be
         * laid out individually and overlap each other.
         * @default true
         * @since 2.3.0
         */
        grouping?: boolean;
        /**
         * The maximum allowed pixel width for a column, translated to the height of a bar in a bar chart. This prevents the
         * columns from becoming too wide when there is a small number of points in the chart.
         * @default null
         * @since 4.1.8
         */
        maxPointWidth?: number | null;
        /**
         * The minimal height for a column or width for a bar. By default, 0 values are not shown. To visualize a 0 (or
         * close to zero) point, set the minimal point length to a pixel value like 3. In stacked column charts,
         * minPointLength might not be respected for tightly packed values.
         * @default 0
         */
        minPointLength?: number;
        /**
         * Padding between each column or bar, in x axis units.
         * @default 0.1
         */
        pointPadding?: string | number;
        /**
         * The X axis range that each point is valid for. This determines the width of the column. On a categorized axis,
         * the range will be 1 by default (one category unit). On linear and datetime axes, the range will be computed as
         * the distance between the two closest data points.
         * @since 2.3
         */
        pointRange?: number;
        /**
         * A pixel value specifying a fixed width for each column or bar. When null, the width is calculated from the
         * pointPadding and groupPadding.
         * @since 1.2.5
         */
        pointWidth?: number | null;
        /**
         * A wrapper object for all the series options in specific states.
         */
        states?: {
            /**
             * Options for the hovered series
             */
            hover?: BarStates;
        };
    }

    /**
     * A box plot is a convenient way of depicting groups of data through their five-number summaries: the smallest
     * observation (sample minimum), lower quartile (Q1), median (Q2), upper quartile (Q3), and largest observation (sample
     * maximum).
     */
    interface BoxPlotChart extends ErrorBarChart {
        /**
         * The fill color of the box.
         * @default '#FFFFFF'
         * @since 3.0
         */
        fillColor?: string;
        /**
         * Padding between each value groups, in x axis units.
         * @default 0.2
         */
        groupPadding?: number;
        /**
         * Whether to group non-stacked columns or to let them render independent of each other. Non-grouped columns will be
         * laid out individually and overlap each other.
         * @default true
         * @since 2.3.0
         */
        grouping?: boolean;
        /**
         * The id of another series to link to. Additionally, the value can be ':previous' to link to the previous series.
         * When two series are linked, only the first one appears in the legend. Toggling the visibility of this also
         * toggles the linked series.
         * @since 3.0
         */
        linkedTo?: string;
        /**
         * The color of the median line. If null, the general series color applies.
         * @default null
         * @since 3.0
         */
        medianColor?: string | null;
        /**
         * The pixel width of the median line. If null, the lineWidth is used.
         * @default 2
         * @since 3.0
         */
        medianWidth?: number | null;
    }

    /**
     * A bubble series is a three dimensional series type where each point renders an X, Y and Z value. Each points is drawn
     * as a bubble where the position along the X and Y axes mark the X and Y values, and the size of the bubble relates to
     * the Z value.
     */
    interface BubbleChart extends SeriesChart {
        /**
         * Whether to display negative sized bubbles. The threshold is given by the zThreshold option, and negative bubbles
         * can be visualized by setting negativeColor.
         * @default true
         * @since 3.0
         */
        displayNegative?: boolean;
        /**
         * Maximum bubble size. Bubbles will automatically size between the minSize and maxSize to reflect the z value of
         * each bubble. Can be either pixels (when no unit is given), or a percentage of the smallest one of the plot width
         * and height.
         * @default '20%'
         * @since 3.0
         */
        maxSize?: string | number;
        /**
         * Minimum bubble size. Bubbles will automatically size between the minSize and maxSize to reflect the z value of
         * each bubble. Can be either pixels (when no unit is given), or a percentage of the smallest one of the plot width
         * and height.
         * @default 8
         * @since 3.0
         */
        minSize?: string | number;
        /**
         * When a point's Z value is below the zThreshold setting, this color is used.
         * @default null
         * @since 3.0
         */
        negativeColor?: string | null;
        /**
         * Whether the bubble's value should be represented by the area or the width of the bubble. The default, area,
         * corresponds best to the human perception of the size of each bubble.
         * @default 'area'
         * @since 3.0.7
         */
        sizeBy?: string;
        /**
         * When this is true, the absolute value of z determines the size of the bubble. This means that with the default
         * zThreshold of 0, a bubble of value -1 will have the same size as a bubble of value 1, while a bubble of value 0
         * will have a smaller size according to minSize.
         * @default false
         * @since 4.1.9
         */
        sizeByAbsoluteValues?: boolean;
        /**
         * The maximum for the Z value range. Defaults to the highest Z value in the data.
         * @default null
         * @since 4.0.3
         */
        zMax?: number | null;
        /**
         * The minimum for the Z value range. Defaults to the lowest Z value in the data.
         * @default null
         * @since 4.0.3
         */
        zMin?: number | null;
        /**
         * When displayNegative is false, bubbles with lower Z values are skipped. When displayNegative is true and a
         * negativeColor is given, points with lower Z is colored.
         * @default 0
         * @since 3.0
         */
        zThreshold?: number;
    }

    interface ColumnChart extends BarChart {
    }

    /**
     * The column range is a cartesian series type with higher and lower Y values along an X axis. Requires
     * highcharts-more.js. To display horizontal bars, set chart.inverted to true.
     */
    interface ColumnRangeChart extends ColumnChart {
        dataLabels?: RangeDataLabels;
    }

    /**
     * Error bars are a graphical representation of the variability of data and are used on graphs to indicate the error, or
     * uncertainty in a reported measurement.
     */
    interface ErrorBarChart extends SeriesChart {
        /**
         * When using automatic point colors pulled from the options.colors collection, this option determines whether the
         * chart should receive one color per series or one color per point.
         * @default false
         * @since 2.0
         */
        colorByPoint?: boolean;
        /**
         * A series specific or series type specific color set to apply instead of the global colors when colorByPoint is true.
         * @since 3.0
         */
        colors?: Color[];
        /**
         * Depth of the columns in a 3D column chart. Requires highcharts-3d.js.
         * @default 25
         * @since 4.0
         */
        depth?: number;
        /**
         * 3D columns only. The color of the edges. Similar to borderColor, except it defaults to the same color as the
         * column.
         */
        edgeColor?: string;
        /**
         * 3D columns only. The width of the colored edges.
         * @default 1
         */
        edgeWidth?: number;
        /**
         * The spacing between columns on the Z Axis in a 3D chart. Requires highcharts-3d.js.
         * @default 1
         * @since 4.0
         */
        groupZPadding?: number;
        /**
         * The parent series of the error bar. The default value links it to the previous series. Otherwise, use the id of
         * the parent series.
         * @default ':previous'
         * @since 3.0
         */
        linkedTo?: string;
        /**
         * The maximum allowed pixel width for a column, translated to the height of a bar in a bar chart. This prevents the
         * columns from becoming too wide when there is a small number of points in the chart.
         * @default null
         * @since 4.1.8
         */
        maxPointWidth?: number | null;
        /**
         * Padding between each column or bar, in x axis units.
         * @default 0.1
         */
        pointPadding?: number;
        /**
         * The X axis range that each point is valid for. This determines the width of the column. On a categorized axis,
         * the range will be 1 by default (one category unit). On linear and datetime axes, the range will be computed as
         * the distance between the two closest data points.
         * @since 2.3
         */
        pointRange?: number;
        /**
         * A pixel value specifying a fixed width for each column or bar. When null, the width is calculated from the
         * pointPadding and groupPadding.
         * @since 1.2.5
         */
        pointWidth?: number | null;
        /**
         * A wrapper object for all the series options in specific states.
         */
        states?: {
            /**
             * Options for the hovered series
             */
            hover?: BarStates;
        };
        /**
         * The color of the stem, the vertical line extending from the box to the whiskers. If null, the series color is
         * used.
         * @default null
         * @since 3.0
         */
        stemColor?: string | null;
        /**
         * The dash style of the stem, the vertical line extending from the box to the whiskers.
         * @default 'Solid'
         * @since 3.0
         */
        stemDashStyle?: string;
        /**
         * The width of the stem, the vertical line extending from the box to the whiskers. If null, the width is inherited
         * from the lineWidth option.
         * @default null
         * @since 3.0
         */
        stemWidth?: number | null;
        /**
         * The color of the whiskers, the horizontal lines marking low and high values. When null, the general series color
         * is used.
         * @default null
         * @since 3.0
         */
        whiskerColor?: string | null;
        /**
         * The length of the whiskers, the horizontal lines marking low and high values. It can be a numerical pixel value,
         * or a percentage value of the box width. Set 0 to disable whiskers.
         * @default '50%'
         * @since 3.0
         */
        whiskerLength?: number | string;
        /**
         * The line width of the whiskers, the horizontal lines marking low and high values. When null, the general
         * lineWidth applies.
         * @default 2
         * @since 3.0
         */
        whiskerWidth?: number | null;
    }

    /**
     * Funnel charts are a type of chart often used to visualize stages in a sales project, where the top are the initial
     * stages with the most clients. It requires that the modules/funnel.js file is loaded
     */
    interface FunnelChart extends SeriesChart {
        /**
         * The color of the border surrounding each column or bar.
         * @default '#FFFFFF'
         */
        borderColor?: string | Gradient;
        /**
         * The width of the border surrounding each column or bar.
         * @default 1
         */
        borderWidth?: number;
        /**
         * The center of the series. By default, it is centered in the middle of the plot area, so it fills the plot area
         * height.
         * @default ['50%', '50%']
         * @since 3.0
         */
        center?: [string | number, string | number];
        /**
         * A series specific or series type specific color set to use instead of the global colors.
         * @since 3.0
         */
        colors?: Color[];
        dataLabels?: PieDataLabels;
        /**
         * The thickness of a 3D pie. Requires highcharts-3d.js
         * @default 0
         * @since 4.0
         */
        depth?: number;
        /**
         * The height of the funnel or pyramid. If it is a number it defines the pixel height, if it is a percentage string
         * it is the percentage of the plot area height.
         * @since 3.0
         */
        height?: number | string;
        /**
         * The minimum size for a pie in response to auto margins. The pie will try to shrink to make room for data labels
         * in side the plot area, but only to this size.
         * @default 80
         * @since 3.0
         */
        minSize?: number;
        /**
         * The height of the neck, the lower part of the funnel. A number defines pixel width, a percentage string defines a
         * percentage of the plot area height.
         * @default '25%'
         */
        neckHeight?: number | string;
        /**
         * The width of the neck, the lower part of the funnel. A number defines pixel width, a percentage string defines a
         * percentage of the plot area width.
         * @default '30%'
         * @since 3.0
         */
        neckWidth?: number | string;
        /**
         * A reversed funnel has the widest area down. A reversed funnel with no neck width and neck height is a pyramid.
         * @default false
         * @since 3.0.10
         */
        reversed?: boolean;
        /**
         * If a point is sliced, moved out from the center, how many pixels should it be moved?
         * @default 10
         */
        slicedOffset?: number;
        /**
         * A wrapper object for all the series options in specific states.
         */
        states?: {
            /**
             * Options for the hovered series
             */
            hover?: PieStates;
        };
        /**
         * The width of the funnel compared to the width of the plot area, or the pixel width if it is a number.
         * @default '90%'
         * @since 3.0
         */
        width?: number | string;
    }

    /**
     * General plotting options for the gauge series type. Requires highcharts-more.js
     */
    interface GaugeChart extends SeriesChart {
        /**
         * Data labels for the gauge. For gauges, the data labels are enabled by default and shown in a bordered box below
         * the point.
         */
        datalabels?: DataLabels;
        /**
         * Options for the dial or arrow pointer of the gauge.
         */
        dial?: Dial;
        /**
         * Allow the dial to overshoot the end of the perimeter axis by this many degrees. Say if the gauge axis goes from 0
         * to 60, a value of 100, or 1000, will show 5 degrees beyond the end of the axis. Defaults to 0.
         * @default 0
         * @since 3.0.10
         */
        overshoot?: number;
        /**
         * Options for the pivot or the center point of the gauge.
         * @since 2.3.0
         */
        pivot?: Pivot;
        /**
         * When this option is true, the dial will wrap around the axes. For instance, in a full-range gauge going from 0 to
         * 360, a value of 400 will point to 40. When wrap is false, the dial stops at 360.
         * @default true
         * @since 3.0
         */
        wrap?: boolean;
    }

    /**
     * The heatmap series type. This series type is available both in Highcharts and Highmaps.
     * The colors of each heat map point is usually determined by its value and controlled by settings on the colorAxis.
     */
    interface HeatMapChart extends SeriesChart {
        /**
         * The color of the border surrounding each column or bar.
         * @default '#FFFFFF'
         */
        borderColor?: string | Gradient;
        /**
         * The corner radius of the border surrounding each column or bar.
         * @default 0
         */
        borderRadius?: number;
        /**
         * The width of the border surrounding each column or bar.
         * @default 1
         */
        borderWidth?: number;
        /**
         * When using automatic point colors pulled from the options.colors collection, this option determines whether the
         * chart should receive one color per series or one color per point. Defaults to false.
         * @default false
         * @since 2.0
         */
        colorByPoint?: boolean;
        /**
         * A series specific or series type specific color set to apply instead of the global colors when colorByPoint is true.
         * @since 3.0
         */
        colors?: Color[];
        /**
         * The columns size - how many X axis units each column in the heatmap should span.
         * @default 1
         * @since 4.0
         */
        colsize?: number;
        /**
         * When the series contains less points than the crop threshold, all points are drawn, event if the points fall
         * outside the visible plot area at the current zoom. The advantage of drawing all points (including markers and
         * columns), is that animation is performed on updates. On the other hand, when the series contains more points than
         * the crop threshold, the series data is cropped to only contain points that fall within the plot area. The
         * advantage of cropping away invisible points is to increase performance on large series.
         * @default 50
         */
        cropTreshold?: number;
        /**
         * The maximum allowed pixel width for a column, translated to the height of a bar in a bar chart. This prevents the
         * columns from becoming too wide when there is a small number of points in the chart.
         * @default null
         * @since 4.1.8
         */
        maxPointWidth?: number | null;
        /**
         * The row size - how many Y axis units each heatmap row should span.
         * @default 1
         * @since 4.0
         */
        rowsize?: number;
        /**
         * A wrapper object for all the series options in specific states.
         */
        states?: {
            /**
             * Options for the hovered series
             */
            hover?: BarStates;
        };
    }

    interface LineChart extends SeriesChart {
        /**
         * Whether to apply steps to the line. Possible values are left, center and right. Prior to 2.3.5, only left was
         * supported.
         * @default false
         * @since 1.2.5
         */
        step?: boolean | string;
    }

    /**
     * A pie chart is a circular chart divided into sectors, illustrating numerical proportion.
     */
    interface PieChart extends SeriesChart {
        /**
         * The color of the border surrounding each slice. When null, the border takes the same color as the slice fill.
         * This can be used together with a borderWidth to fill drawing gaps created by antialiazing artefacts in
         * borderless pies.
         * @default '#FFFFFF'
         */
        borderColor?: string | Gradient | null;
        /**
         * The width of the border surrounding each column or bar.
         * @default 1
         */
        borderWidth?: number;
        /**
         * The center of the pie chart relative to the plot area. Can be percentages or pixel values. The default behaviour
         * (as of 3.0) is to center the pie so that all slices and data labels are within the plot area. As a consequence,
         * the pie may actually jump around in a chart with dynamic values, as the data labels move. In that case, the
         * center should be explicitly set, for example to ['50%', '50%'].
         * @default [null, null]
         */
        center?: [string | number | null, string | number | null];
        /**
         * A series specific or series type specific color set to apply instead of the global colors when colorByPoint is true.
         * @since 3.0
         */
        colors?: Color[];
        dataLabels?: PieDataLabels;
        /**
         * The thickness of a 3D pie. Requires highcharts-3d.js
         * @default 0
         * @since 4.0
         */
        depth?: number;
        /**
         * The end angle of the pie in degrees where 0 is top and 90 is right. Defaults to startAngle plus 360.
         * @default null
         * @since 1.3.6
         */
        endAngle?: number | null;
        /**
         * Equivalent to chart.ignoreHiddenSeries, this option tells whether the series shall be redrawn as if the hidden
         * point were null.
         *
         * The default value changed from false to true with Highcharts 3.0.
         *
         * @default true
         * @since 2.3.0
         */
        ignoreHiddenPoint?: boolean;
        /**
         * The size of the inner diameter for the pie. A size greater than 0 renders a donut chart. Can be a percentage or
         * pixel value. Percentages are relative to the pie size. Pixel values are given as integers.
         *
         * Note: in Highcharts < 4.1.2, the percentage was relative to the plot area, not the pie size.
         * @default 0
         * @since 2.0
         */
        innerSize?: number | string;
        /**
         * The minimum size for a pie in response to auto margins. The pie will try to shrink to make room for data labels
         * in side the plot area, but only to this size.
         * @default 80
         * @since 3.0
         */
        minSize?: number;
        /**
         * The diameter of the pie relative to the plot area. Can be a percentage or pixel value. Pixel values are given as
         * integers. The default behaviour (as of 3.0) is to scale to the plot area and give room for data labels within the
         * plot area. As a consequence, the size of the pie may vary when points are updated and data labels more around. In
         * that case it is best to set a fixed value, for example '75%'.
         */
        size?: number | string;
        /**
         * If a point is sliced, moved out from the center, how many pixels should it be moved?
         * @default 10
         */
        slicedOffset?: number;
        /**
         * The start angle of the pie slices in degrees where 0 is top and 90 right.
         * @default 0
         * @since 2.3.4
         */
        startAngle?: number;
        /**
         * A wrapper object for all the series options in specific states.
         */
        states?: {
            /**
             * Options for the hovered series
             */
            hover?: PieStates;
        };
    }

    /**
     * A polygon series can be used to draw any freeform shape in the cartesian coordinate system. A fill is applied with
     * the color option, and stroke is applied through lineWidth and lineColor options. Requires the highcharts-more.js
     * file.
     */
    interface PolygonChart extends SeriesChart {
        /**
         * The width of the line connecting the data points.
         * @default 0
         */
        lineWidth?: number;
    }

    interface PyramidChart extends SeriesChart {
        /**
         * The color of the border surrounding each slice
         * @default '#FFFFFF'
         */
        borderColor?: string | Gradient;
        /**
         * The width of the border surrounding each slice
         * @default 1
         */
        borderWidth?: number;
        /**
         * The center of the series. By default, it is centered in the middle of the plot area, so it fills the plot area
         * height.
         * @default ['50%', '50%']
         * @since 3.0
         */
        center?: [string | number, string | number];
        /**
         * A series specific or series type specific color set to apply instead of the global colors when colorByPoint is true.
         * @since 3.0
         */
        colors?: Color[];
        dataLabels?: PieDataLabels;
        /**
         * The thickness of a 3D pie. Requires highcharts-3d.js
         * @default 0
         * @since 4.0
         */
        depth?: number;
        /**
         * The height of the funnel or pyramid. If it is a number it defines the pixel height, if it is a percentage string
         * it is the percentage of the plot area height.
         * @since 3.0
         */
        height?: number | string;
        /**
         * The minimum size for a pie in response to auto margins. The pie will try to shrink to make room for data labels
         * in side the plot area, but only to this size.
         * @default 80
         * @since 3.0
         */
        minSize?: number;
        /**
         * The pyramid is reversed by default, as opposed to the funnel, which shares the layout engine, and is not
         * reversed.
         * @default true
         * @since 3.0.10
         */
        reversed?: boolean;
        /**
         * If a point is sliced, moved out from the center, how many pixels should it be moved?
         * @default 10
         */
        slicedOffset?: number;
        /**
         * A wrapper object for all the series options in specific states.
         */
        states?: {
            /**
             * Options for the hovered series
             */
            hover?: PieStates;
        };
        /**
         * The width of the pyramid compared to the width of the plot area, or the pixel width if it is a number.
         * @default '90%'
         * @since 3.0
         */
        width?: number | string;
    }

    interface ScatterChart extends SeriesChart { }

    /**
     * A gauge showing values using a filled arc with colors indicating the value. The solid gauge plots values against the
     * yAxis, which is extended with some color options, minColor, maxColor and stops, to control the color of the gauge
     * itself.
     */
    interface SolidGaugeChart extends SeriesChart {
        /**
         * Allow the dial to overshoot the end of the perimeter axis by this many degrees. Say if the gauge axis goes from 0
         * to 60, a value of 100, or 1000, will show 5 degrees beyond the end of the axis.
         * @default 0
         * @since 3.0.10
         */
        overshoot?: number;
        /**
         * Wether to draw rounded edges on the gauge.
         * @default false
         * @since 5.0.8
         */
        rounded?: boolean;
        /**
         * The threshold or base level for the gauge.
         * @default null
         * @since 5.0.3
         */
        threshold?: number | null;
        /**
         * When this option is true, the dial will wrap around the axes. For instance, in a full-range gauge going from 0 to
         * 360, a value of 400 will point to 40. When wrap is false, the dial stops at 360.
         * @default true
         * @since 3.0
         */
        wrap?: boolean;
    }

    interface SplineChart extends SeriesChart { }

    /**
     * The size of the point shape is determined by its value relative to its siblings values. Requires the module
     * heatmap.js as well, if functionality such as the colorAxis is to be used.
     */
    interface TreeMapChart extends SeriesChart {
        /**
         * When enabled the user can click on a point which is a parent and zoom in on its children.
         * @default false
         * @since 4.1.0
         */
        allowDrillToNode?: boolean;
        /**
         * Enabling this option will make the treemap alternate the drawing direction between vertical and horizontal. The
         * next levels starting direction will always be the opposite of the previous.
         * @default false
         * @since 4.1.0
         */
        alternateStartingDirection?: boolean;
        /**
         * The color of the border surrounding each tree map item.
         * @default '#E0E0E0'
         */
        borderColor?: string | Gradient;
        /**
         * The width of the border surrounding each column or bar.
         * @default 1
         */
        borderWidth?: number;
        /**
         * When using automatic point colors pulled from the options.colors collection, this option determines whether the
         * chart should receive one color per series or one color per point.
         * @default false
         * @since 2.0
         */
        colorByPoint?: boolean;
        /**
         * A series specific or series type specific color set to apply instead of the global colors when colorByPoint is true.
         * @since 3.0
         */
        colors?: Color[];
        /**
         * This option decides if the user can interact with the parent nodes or just the leaf nodes. When this option is
         * undefined, it will be true by default. However when allowDrillToNode is true, then it will be false by default.
         * @since 4.1.2
         */
        interactByLeaf?: boolean;
        /**
         * This option decides which algorithm is used for setting position and dimensions of the points. Can be one of
         * 'sliceAndDice', 'stripes', 'squarified' or 'strip'.
         * @default 'sliceAndDice'
         * @since 4.1.0
         */
        layoutAlgorithm?: string;
        /**
         * Defines which direction the layout algorithm will start drawing. Possible values are 'vertical' and 'horizontal'.
         * @default 'vertical'
         * @since 4.1.0
         */
        layoutStartingDirection?: string;
        /**
         * Used together with the levels and allowDrillToNode options. When set to false the first level visible when
         * drilling is considered to be level one. Otherwise the level will be the same as the tree structure.
         * @default true
         * @since 4.1.0
         */
        levelIsConstant?: boolean;
        /**
         * Set options on specific levels. Takes precedence over series options, but not point options.
         */
        levels?: TreeMapLevel[];
        /**
         * The maximum allowed pixel width for a column, translated to the height of a bar in a bar chart. This prevents the
         * columns from becoming too wide when there is a small number of points in the chart.
         * @default null
         * @since 4.1.8
         */
        maxPointWidth?: number | null;
        /**
         * The sort index of the point inside the treemap level.
         * @since 4.1.10
         */
        sortIndex?: number;
        /**
         * A wrapper object for all the series options in specific states.
         */
        states?: {
            /**
             * Options for the hovered series
             */
            hover?: BarStates;
        };
    }

    interface WaterFallChart extends BarChart {
        /**
         * A name for the dash style to use for the graph. Applies only to series type having a graph, like line, spline,
         * area and scatter in case it has a lineWidth. The value for the dashStyle include:
         * - Solid
         * - ShortDash
         * - ShortDot
         * - ShortDashDot
         * - ShortDashDotDot
         * - Dot
         * - Dash
         * - LongDash
         * - DashDot
         * - LongDashDot
         * - LongDashDotDot
         * @default 'Dot'
         */
        dashStyle?: string;
        /**
         * The color of the line that connects columns in a waterfall series.
         * @default '#333333'
         * @since 3.0
         */
        lineColor?: Color;
        /**
         * The color used specifically for positive point columns. When not specified, the general series color is used.
         */
        upColor?: Color;
    }

    /**
     * The plotOptions is a wrapper object for config objects for each series type. The config objects for each series can
     * also be overridden for each series item as given in the series array.
     *
     * Configuration options for the series are given in three levels. Options for all series in a chart are given in the
     * plotOptions.series object. Then options for all series of a specific type are given in the plotOptions of that type,
     * for example plotOptions.line. Next, options for one single series are given in the series array.
     */
    interface PlotOptions {
        area?: AreaChart;
        arearange?: AreaRangeChart;
        areaspline?: AreaSplineChart;
        areasplinerange?: AreaSplineRangeChart;
        bar?: BarChart;
        boxplot?: BoxPlotChart;
        bubble?: BubbleChart;
        column?: ColumnChart;
        columnrange?: ColumnRangeChart;
        errorbar?: ErrorBarChart;
        funnel?: FunnelChart;
        gauge?: GaugeChart;
        heatmap?: HeatMapChart;
        line?: LineChart;
        pie?: PieChart;
        polygon?: PolygonChart;
        pyramid?: PyramidChart;
        scatter?: ScatterChart;
        series?: SeriesChart;
        solidgauge?: SolidGaugeChart;
        spline?: SplineChart;
        treemap?: TreeMapChart;
        waterfall?: WaterFallChart;
    }

    /* You will rarely, if ever, want to use this interface directly. Instead it is much more useful to use one of the derived
        * interfaces (AreaChartSeriesOptions, LineChartSeriesOptions, etc.)
        */
    interface IndividualSeriesOptions {
        size?: number | string;
        innerSize?: number | string;

        type?: string;
        /**
         * The main color or the series. In line type series it applies to the line and the point markers unless otherwise
         *     specified. In bar type series it applies to the bars unless a color is specified per point. The default
         *     value is pulled from the options.colors array.
         */
        color?: string | Gradient;
        /**
         * Styled mode only. A specific color index to use for the point, so its graphic representations are given the class name highcharts-color-{n}.
         * @since 5.0.0
         */
        colorIndex?: number;
        /**
         * When true, each column edge is rounded to its nearest pixel in order to render sharp on screen.
         * In some cases, when there are a lot of densely packed columns, this leads to visible difference
         * in column widths or distance between columns. In these cases, setting crisp to false may look
         * better, even though each column is rendered blurry.
         * @default true
         * @since 5.0.10
         */
        crisp?: boolean;
        /**
         * You can set the cursor to "pointer" if you have click events attached to the series, to signal to the user
         *     that the points and lines can be clicked.
         */
        cursor?: string;
        /**
         * An array of data points for the series. For the area series type, points can be given in the following ways:
         *
         * 1. An array of numerical values. In this case, the numerical values will be interpreted as y options. The x
         *    values will be automatically calculated, either starting at 0 and incremented by 1, or from pointStart and
         *    pointInterval given in the series options. If the axis has categories, these will be used. Example:
         *        data: [0, 5, 3, 5]
         *
         * 2. An array of arrays with 2 values. In this case, the values correspond to x,y. If the first value is a string,
         *    it is applied as the name of the point, and the x value is inferred.
         *        data: [
         *            [0, 9],
         *            [1, 7],
         *            [2, 6]
         *        ]
         *
         * 3. An array of objects with named values. The objects are point configuration objects as seen below. If the total
         *    number of data points exceeds the series' turboThreshold, this option is not available.
         *        data: [{
         *            x: 1,
         *            y: 9,
         *            name: 'Point2',
         *            color: '#00FF00'
         *        }, {
         *            x: 1,
         *            y: 6,
         *            name: 'Point1',
         *            color: '#FF00FF'
         *        }]
         */
        data?: Array<number | [number, number] | [string, number] | DataPoint>;
        /**
         * A description of the series to add to the screen reader information about the series.
         * @since 5.0.0
         * @default undefined
         */
        description?: string;

        /**
         * An id for the series. This can be used after render time to get a pointer to the series object through
         * chart.get().
         */
        id?: string;
        /**
         * The index of the series in the chart, affecting the internal index in the chart.series array, the visible Z index
         * as well as the order in the legend.
         * @since 2.3.0
         */
        index?: number;
        /**
         * The sequential index of the series in the legend.
         */
        legendIndex?: number;
        /**
         * The name of the series as shown in the legend, tooltip etc.
         */
        name?: string;
        /**
         * A pixel value specifying a fixed width for each column or bar. When null, the width is calculated from
         * the pointPadding and groupPadding.
         */
        pointWidth?: number | null;
        /**
         * This option allows grouping series in a stacked chart. The stack option can be a string or a number or anything
         * else, as long as the grouped series' stack options match each other.
         * @since 2.1
         */
        stack?: any;
        /**
         * The series' visibility state as set by series.show(), series.hide(), or the initial configuration.
         */
        visible?: boolean;
        /**
         * When using dual or multiple x axes, this number defines which xAxis the particular series is connected to. It
         * refers to either the axis id or the index of the axis in the xAxis array, with 0 being the first.
         * @default 0
         */
        xAxis?: string | number;
        /**
         * When using dual or multiple x axes, this number defines which xAxis the particular series is connected to. It
         * refers to either the axis id or the index of the axis in the xAxis array, with 0 being the first.
         * @default 0
         */
        yAxis?: string | number;
        /**
         * Define the visual z index of the series.
         */
        zIndex?: number;
    }

    interface SeriesOptions extends IndividualSeriesOptions, SeriesChart { }

    interface AreaChartSeriesOptions extends IndividualSeriesOptions, AreaChart { }
    interface AreaRangeChartSeriesOptions extends IndividualSeriesOptions, AreaRangeChart { }
    interface AreaSplineChartSeriesOptions extends IndividualSeriesOptions, AreaSplineChart { }
    interface AreaSplineRangeChartSeriesOptions extends IndividualSeriesOptions, AreaSplineRangeChart { }
    interface BarChartSeriesOptions extends IndividualSeriesOptions, BarChart { }
    interface BoxPlotChartSeriesOptions extends IndividualSeriesOptions, BoxPlotChart { }
    interface BubbleChartSeriesOptions extends IndividualSeriesOptions, BubbleChart { }
    interface ColumnChartSeriesOptions extends IndividualSeriesOptions, ColumnChart { }
    interface ColumnRangeChartSeriesOptions extends IndividualSeriesOptions, ColumnRangeChart { }
    interface ErrorBarChartSeriesOptions extends IndividualSeriesOptions, ErrorBarChart { }
    interface FunnelChartSeriesOptions extends IndividualSeriesOptions, FunnelChart { }
    interface GaugeChartSeriesOptions extends IndividualSeriesOptions, GaugeChart { }
    interface HeatMapSeriesOptions extends IndividualSeriesOptions, HeatMapChart { }
    interface LineChartSeriesOptions extends IndividualSeriesOptions, LineChart { }
    interface PieChartSeriesOptions extends IndividualSeriesOptions, PieChart { }
    interface PolygonChartSeriesOptions extends IndividualSeriesOptions, PolygonChart { }
    interface PyramidChartSeriesOptions extends IndividualSeriesOptions, PyramidChart { }
    interface ScatterChartSeriesOptions extends IndividualSeriesOptions, ScatterChart { }
    interface SolidGaugeChartSeriesOptions extends IndividualSeriesOptions, SolidGaugeChart { }
    interface SplineChartSeriesOptions extends IndividualSeriesOptions, SplineChart { }
    interface TreeMapChartSeriesOptions extends IndividualSeriesOptions, TreeMapChart { }
    interface WaterFallChartSeriesOptions extends IndividualSeriesOptions, WaterFallChart { }

    interface DataPoint {
        /**
         * Individual color for the point. By default the color is pulled from the global colors array.
         * @default undefined
         */
        color?: string | Gradient;
        /**
         * Serves a purpose only if a colorAxis object is defined in the chart options. This value will decide which color
         * the point gets from the scale of the colorAxis.
         * @default undefined
         */
        colorValue?: number;
        /**
         * Individual data label for each point. The options are the same as the ones for plotOptions.series.dataLabels
         */
        dataLabels?: DataLabels;
        /**
         * The id of a series in the drilldown.series array to use for a drilldown for this point.
         * @since 3.0.8
         */
        drilldown?: string;
        /**
         * Individual point events
         */
        events?: PointEvents;
        /**
         * The high or maximum value for each data point.
         */
        high?: number;
        /**
         * An id for the point. This can be used after render time to get a pointer to the point object through chart.get().
         * @since 1.2.0
         */
        id?: string;
        /**
         * The inner radius of an individual point in a solid gauge. Can be given as a number (pixels) or percentage string.
         * @since 4.1.6
         */
        innerRadius?: number | string;
        /**
         * When this property is true, the points acts as a summary column for the values added or substracted since the
         * last intermediate sum, or since the start of the series. The y value is ignored.
         * @default false
         */
        isIntermediateSum?: boolean;
        /**
         * When this property is true, the point display the total sum across the entire series. The y value is ignored.
         * @default false
         */
        isSum?: boolean;
        /**
         * The sequential index of the data point in the legend.
         */
        legendIndex?: number;
        /**
         * The low or minimum value for each data point.
         */
        low?: number;
        marker?: Marker;
        /**
         * The median for each data point. This is drawn as a line through the middle area of the box.
         */
        median?: number;
        /**
         * The name of the point as shown in the legend, tooltip, dataLabel etc.
         *
         * If the xAxis.type is set to category, and no categories option exists, the category will be pulled from the
         * point.name of the last series defined. For multiple series, best practice however is to define xAxis.categories.
         */
        name?: string;
        /**
         * Only for treemap. Use this option to build a tree structure. The value should be the id of the point which is the
         * parent. If no points has a matching id, or this option is undefined, then the parent will be set to the root.
         * @default undefined
         * @since 4.1.0
         */
        parent?: string;
        /**
         * The lower quartile for each data point. This is the bottom of the box.
         */
        q1?: number;
        /**
         * The higher quartile for each data point. This is the top of the box.
         */
        q3?: number;
        /**
         * The outer radius of an individual point in a solid gauge. Can be given as a number (pixels) or percentage string.
         * @since 4.1.6
         */
        radius?: number | string;
        /**
         * Whether the data point is selected initially.
         * @default false
         */
        selected?: boolean;
        /**
         * Whether to display a slice offset from the center.
         * @default false
         */
        sliced?: boolean;
        /**
         * The value of the point, resulting in a relative area of the point in the treemap.
         */
        value?: number;
        /**
         * The x value of the point. For datetime axes, the X value is the timestamp in milliseconds since 1970.
         */
        x?: number | Date;
        /**
         * The y value of the point.
         */
        y?: number;
        /**
         * The size value for each bubble. The bubbles' diameters are computed based on the z, and controlled by series
         * options like minSize, maxSize, sizeBy, zMin and zMax.
         */
        z?: number;
    }

    /**
     * The chart's subtitle
     */
    interface SubtitleOptions {
        /**
         * The horizontal alignment of the subtitle. Can be one of 'left', 'center' and 'right'.
         * @default 'center'
         * @since 2.0
         */
        align?: string;
        /**
         * When the subtitle is floating, the plot area will not move to make space for it.
         * @default false
         * @since 2.1
         */
        floating?: boolean;
        /**
         * CSS styles for the title. Exact positioning of the title can be achieved by changing the margin property, or by
         * adding position: 'absolute' and left and top properties.
         * @default { 'color': '#555555' }
         */
        style?: Object;
        /**
         * The subtitle of the chart.
         */
        text?: string;
        /**
         * Whether to {@link http://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#html|use HTML} to render the text.
         * @default false
         */
        useHTML?: boolean;
        /**
         * The vertical alignment of the title. Can be one of 'top', 'middle' and 'bottom'. When a value is given, the title
         * behaves as floating.
         * @since 2.1
         */
        verticalAlign?: string;
        /**
         * The x position of the subtitle relative to the alignment within chart.spacingLeft and chart.spacingRight.
         * @default 0
         * @since 2.0
         */
        x?: number;
        /**
         * The y position of the subtitle relative to the alignment within chart.spacingTop and chart.spacingBottom. By
         * default the subtitle is laid out below the title unless the title is floating.
         * @default null
         * @since 2.0
         */
        y?: number | null;
    }

    interface TitleOptions {
        /**
         * The horizontal alignment of the title. Can be one of 'left', 'center' and 'right'.
         * @default 'center'
         * @since 2.0
         */
        align?: string;
        /**
         * When the title is floating, the plot area will not move to make space for it.
         * @default false
         * @since 2.1
         */
        floating?: boolean;
        /**
         * The margin between the title and the plot area, or if a subtitle is present, the margin between the subtitle and
         * the plot area.
         * @default 15
         * @since 2.1
         */
        margin?: number;
        /**
         * CSS styles for the title. Exact positioning of the title can be achieved by changing the margin property, or by
         * adding position: 'absolute' and left and top properties.
         * @default { 'color': '#333333', 'fontSize': '18px' }
         */
        style?: Object;
        /**
         * The title of the chart. To disable the title, set the text to null.
         * @default 'Chart title'
         */
        text?: string | null;
        /**
         * Whether to {@link http://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#html|use HTML} to render the text.
         * @default false
         */
        useHTML?: boolean;
        /**
         * The vertical alignment of the title. Can be one of 'top', 'middle' and 'bottom'. When a value is given, the title
         * behaves as floating.
         * @since 2.1
         */
        verticalAlign?: string;
        /**
         * The x position of the title relative to the alignment within chart.spacingLeft and chart.spacingRight.
         * @default 0
         * @since 2.0
         */
        x?: number;
        /**
         * The y position of the title relative to the alignment within chart.spacingTop and chart.spacingBottom. By default
         * it depends on the font size.
         * @default null
         * @since 2.0
         */
        y?: number | null;
    }

    interface CrosshairObject {
        /**
         * A class name for the crosshair, especially as a hook for styling.
         * @since 5.0.0
         */
        className?: string;
        /**
         * The color of the crosshair. Defaults to #cccccc for numeric and datetime axes, and rgba(204,214,235,0.25) for category axes,
         * where the crosshair by default highlights the whole category.
         * @since 4.1
         */
        color?: string | Gradient;
        /**
         * The dash style for the crosshair. See series.dashStyle for possible values. Defaults to Solid.
         * @since 4.1
         */
        dashStyle?: string; // Solid ShortDash ShortDot ShortDashDot ShortDashDotDot Dot Dash LongDash DashDot LongDashDot LongDashDotDot
        /**
         * The Z index of the crosshair. Higher Z indices allow drawing the crosshair on top of the series or behind the grid lines.
         * @since 4.1
         * @default 2
         */
        zIndex?: number;
        /**
         * The pixel width of the crosshair. Defaults to 1 for numeric or datetime axes, and for one category width for category axes.
         * @since 4.1
         */
        width?: number;
    }

    interface PlotPoint {
        plotX: number;
        plotY: number;
    }

    interface TooltipOptions extends SeriesTooltipOptions {
        /**
         * Enable or disable animation of the tooltip. In slow legacy IE browsers the animation is disabled by default.
         * @default true
         * @since 2.3.0
         */
        animation?: boolean;
        /**
         * The background color or gradient for the tooltip.
         * @default 'rgba(255, 255, 255, 0.85)'
         */
        backgroundColor?: string | Gradient;
        /**
         * The color of the tooltip border. When null, the border takes the color of the corresponding series or point.
         * @default null
         */
        borderColor?: string | Gradient | null;
        /**
         * The radius of the rounded border corners.
         * @default 3
         */
        borderRadius?: number;
        /**
         * The pixel width of the tooltip border.
         * @default 1
         */
        borderWidth?: number;
        /**
         * Display crosshairs to connect the points with their corresponding axis values. The crosshairs can be defined as a
         * boolean, an array of booleans or an object.
         *
         * Boolean
         *   If the crosshairs option is true, a single crosshair relating to the x axis will be shown.
         *
         * Array of booleans
         *   In an array of booleans, the first value turns on the x axis crosshair and the second value to the y axis
         *   crosshair. Use [true, true] to show complete crosshairs.
         *
         * Array of objects
         *   In an array of objects, the first value applies to the x axis crosshair and the second value to the y axis
         *   crosshair. For each dimension, a width, color, dashStyle and zIndex can be given.
         *
         * @default null
         */
        crosshairs?: boolean | [boolean, boolean] | CrosshairObject | [CrosshairObject, CrosshairObject] | null;
        /**
         * Enable or disable the tooltip.
         * @default true
         */
        enabled?: boolean;
        /**
         * Callback function to format the text of the tooltip. Return false to disable tooltip for a specific point on
         * series.
         *
         * A subset of HTML is supported. The HTML of the tooltip is parsed and converted to SVG, therefore this isn't a
         * complete HTML renderer. The following tabs are supported: <b>, <strong>, <i>, <em>, <br/>, <span>. Spans can be
         * styled with a style attribute, but only text-related CSS that is shared with SVG is handled.
         *
         * Since version 2.1 the tooltip can be shared between multiple series through the shared option. The available data
         * in the formatter differ a bit depending on whether the tooltip is shared or not. In a shared tooltip, all
         * properties except x, which is common for all points, are kept in an array, this.points.
         *
         * Available data are:
         * this.percentage (not shared) / this.points[i].percentage (shared)
         *   Stacked series and pies only. The point's percentage of the total.
         * this.point (not shared) / this.points[i].point (shared)
         *   The point object. The point name, if defined, is available through this.point.name.
         * this.points
         *   In a shared tooltip, this is an array containing all other properties for each point.
         * this.series (not shared) / this.points[i].series (shared)
         *   The series object. The series name is available through this.series.name.
         * this.total (not shared) / this.points[i].total (shared)
         *   Stacked series only. The total value at this point's x value.
         * this.x
         *   The x value. This property is the same regardless of the tooltip being shared or not.
         * this.y (not shared) / this.points[i].y (shared)
         *   The y value.
         */
        formatter?(): boolean | string;
        /**
         * Padding inside the tooltip, in pixels.
         * @since 5.0.0
         * @default 8
         */
        padding?: number;
        /**
         * A callback function to place the tooltip in a default position. The callback receives three parameters:
         * labelWidth, labelHeight and point, where point contains values for plotX and plotY telling where the reference
         * point is in the plot area. Add chart.plotLeft and chart.plotTop to get the full coordinates.
         *
         * The return should be an object containing x and y values, for example { x: 100, y: 100 }.
         * @since 2.2.4
         */
        positioner?(labelWidth: number, labelHeight: number, point: PlotPoint): { x: number; y: number; };
        /**
         * Whether to apply a drop shadow to the tooltip.
         * @default true
         */
        shadow?: boolean;
        /**
         * The name of a symbol to use for the border around the tooltip. In Highcharts 3.x and less, the shape was square.
         * @default 'callout'
         * @since 4.0
         */
        shape?: string;
        /**
         * When the tooltip is shared, the entire plot area will capture mouse movement or touch events. Tooltip texts for
         * series types with ordered data (not pie, scatter, flags etc) will be shown in a single bubble. This is
         * recommended for single series charts and for tablet/mobile optimized charts.
         * @default false
         * @since 2.1
         */
        shared?: boolean;
        /**
         * Proximity snap for graphs or single points. Does not apply to bars, columns and pie slices. It defaults to 10 for
         * mouse-powered devices and 25 for touch devices. Note that since Highcharts 4.1 the whole plot area by default
         * captures pointer events in order to show the tooltip, so for tooltip.snap to make sense, stickyTracking must be
         * false.
         * @since 1.2.0
         */
        snap?: number;
        /**
         * Split the tooltip into one label per series, with the header close to the axis.
         * This is recommended over shared tooltips for charts with multiple line series,
         * generally making them easier to read.
         * @since 5.0.0
         * @default false
         */
        split?: boolean;
        /**
         * CSS styles for the tooltip. The tooltip can also be styled through the CSS class .highcharts-tooltip
         * @default { color: '#333333', fontSize: '12px', padding: '8px' }
         */
        style?: Object;
        /**
         * Use HTML to render the contents of the tooltip instead of SVG. Using HTML allows advanced formatting like tables
         * and images in the tooltip. It is also recommended for rtl languages as it works around rtl bugs in early Firefox.
         * @default false
         * @since 2.2
         */
        useHTML?: boolean;
    }

    interface SeriesTooltipOptions {
        /**
         * For series on a datetime axes, the date format in the tooltip's header will by default be guessed based on the
         * closest data points. This member gives the default string representations used for each unit.
         */
        dateTimeLabelFormats?: DateTimeFormats;
        /**
         * Whether the tooltip should follow the mouse as it moves across columns, pie slices and other point types with an
         * extent. By default it behaves this way for scatter, bubble and pie series by override in the plotOptions for
         * those series types.
         *
         * For touch moves to behave the same way, followTouchMove must be true also.
         * @default false
         * @since 3.0
         */
        followPointer?: boolean;
        /**
         * Whether the tooltip should follow the finger as it moves on a touch device. If chart.zoomType is set, it will
         * override followTouchMove.
         * @default true
         * @since 3.0.1
         */
        followTouchMove?: boolean;
        /**
         * A string to append to the tooltip format.
         * @default 'false'
         * @since 2.2
         */
        footerFormat?: string;
        /**
         * The HTML of the tooltip header line. Variables are enclosed by curly brackets. Available variables are point.key,
         * series.name, series.color and other members from the point and series objects. The point.key variable contains
         * the category name, x value or datetime string depending on the type of axis. For datetime axes, the point.key
         * date format can be set using tooltip.xDateFormat.
         *
         * @default '<span style='font-size: 10px'>{point.key}</span><br/>'
         */
        headerFormat?: string;
        /**
         * The number of milliseconds to wait until the tooltip is hidden when mouse out from a point or chart.
         * @default 500
         * @since 3.0
         */
        hideDelay?: number;
        /**
         * The HTML of the point's line in the tooltip. Variables are enclosed by curly brackets. Available variables are
         * point.x, point.y, series.name and series.color and other properties on the same form. Furthermore, point.y can be
         * extended by the tooltip.valuePrefix and tooltip.valueSuffix variables. This can also be overridden for each
         * series, which makes it a good hook for displaying units.
         *
         * @default '<span style='color:{point.color}'>\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
         * @since 2.2
         */
        pointFormat?: string;
        /**
         * A callback function for formatting the HTML output for a single point in the tooltip. Like the pointFormat
         * string, but with more flexibility.
         *
         * The this keyword refers to the Point object.
         * @since 4.1.0
         */
        pointFormatter?(): string;
        /**
         * How many decimals to show in each series' y value. This is overridable in each series' tooltip options object.
         * The default is to preserve all decimals.
         * @since 2.2
         */
        valueDecimals?: number;
        /**
         * A string to prepend to each series' y value. Overridable in each series' tooltip options object.
         * @since 2.2
         */
        valuePrefix?: string;
        /**
         * A string to append to each series' y value. Overridable in each series' tooltip options object.
         * @since 2.2
         */
        valueSuffix?: string;
        /**
         * The format for the date in the tooltip header if the X axis is a datetime axis. The default is a best guess based
         * on the smallest distance between points in the chart.
         */
        xDateFormat?: string;
    }

    interface Options {
        /**
         * Options for configuring accessibility for the chart. Requires the accessibility module to be loaded.
         * For a description of the module and information on its features, see Highcharts Accessibility.
         * @since 5.0.0
         */
        accessibility?: AccessibilityOptions;
        /**
         * Options regarding the chart area and plot area as well as general chart options.
         */
        chart?: ChartOptions;
        colorAxis?: ColorAxisOptions | ColorAxisOptions[];
        /**
         * An array containing the default colors for the chart's series. When all colors are used, new colors are pulled
         * from the start again.
         *
         * Default colors can also be set on a series or series.type basis, see column.colors, pie.colors.
         *
         * @default ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1']
         */
        colors?: Color[];
        /**
         * Highchart by default puts a credits label in the lower right corner of the chart. This can be changed using these options.
         */
        credits?: CreditsOptions;
        /**
         * The Data module provides a simplified interface for adding data to a chart from sources like CVS, HTML tables or
         * grid views. See also the tutorial article on the Data module.
         *
         * It requires the modules/data.js file to be loaded.
         *
         * Please note that the default way of adding data in Highcharts, without the need of a module, is through the
         * series.data option.
         */
        data?: DataOptions;
        /**
         * Styled mode only. Configuration object for adding SVG definitions for reusable elements.
         * See gradients, shadows and patterns for more information and code examples.
         */
        defs?: any; // TODO: Unknown API interface, see also http://api.highcharts.com/highcharts/defs
        /**
         * Options for drill down, the concept of inspecting increasingly high resolution data through clicking on chart
         * items like columns or pie slices.
         *
         * The drilldown feature requires the drilldown.js file to be loaded, found in the modules directory of the download
         * package, or online at code.highcharts.com/modules/drilldown.js.
         */
        drilldown?: DrilldownOptions;
        /**
         * Options for the exporting module.
         */
        exporting?: ExportingOptions;
        /**
         * HTML labels that can be positioned anywhere in the chart area.
         */
        labels?: LabelsOptions;
        lang?: LangObject;
        /**
         * The legend is a box containing a symbol and name for each series item or point item in the chart.
         */
        legend?: LegendOptions;
        /**
         * The loading options control the appearance of the loading screen that covers the plot area on chart operations.
         * This screen only appears after an explicit call to chart.showLoading(). It is a utility for developers to
         * communicate to the end user that something is going on, for example while retrieving new data via an XHR
         * connection. The 'Loading...' text itself is not part of this configuration object, but part of the lang object.
         */
        loading?: LoadingOptions;
        /**
         * A collection of options for buttons and menus appearing in the exporting module.
         */
        navigation?: NavigationOptions;
        /**
         * Options for displaying a message like 'No data to display'. This feature requires the file no-data-to-display.js
         * to be loaded in the page. The actual text to display is set in the lang.noData option.
         */
        noData?: NoDataOptions;
        /**
         * Applies only to polar charts and angular gauges. This configuration object holds general options for the combined
         * X and Y axes set. Each xAxis or yAxis can reference the pane by index.
         */
        pane?: PaneOptions;
        /**
         * The plotOptions is a wrapper object for config objects for each series type. The config objects for each series
         * can also be overridden for each series item as given in the series array.
         *
         * Configuration options for the series are given in three levels. Options for all series in a chart are given in
         * the plotOptions.series object. Then options for all series of a specific type are given in the plotOptions of
         * that type, for example plotOptions.line. Next, options for one single series are given in the series array.
         */
        plotOptions?: PlotOptions;
        /**
         * Allows setting a set of rules to apply for different screen or chart sizes. Each rule specifies additional chart options.
         * @since 5.0.0
         */
        responsive?: ResponsiveOptions[];
        /**
         * The actual series to append to the chart. In addition to the members listed below, any member of the plotOptions
         * for that specific type of plot can be added to a series individually. For example, even though a general
         * lineWidth is specified in plotOptions.series, an individual lineWidth can be specified for each series.
         */
        series?: IndividualSeriesOptions[];
        /**
         * The chart's subtitle
         */
        subtitle?: SubtitleOptions;
        /**
         * The chart's main title.
         */
        title?: TitleOptions;
        /**
         * Options for the tooltip that appears when the user hovers over a series or point.
         */
        tooltip?: TooltipOptions;
        /**
         * The X axis or category axis. Normally this is the horizontal axis, though if the chart is inverted this is the
         * vertical axis. In case of multiple axes, the xAxis node is an array of configuration objects.
         */
        xAxis?: AxisOptions[] | AxisOptions;
        /**
         * The Y axis or value axis. Normally this is the vertical axis, though if the chart is inverted this is the
         * horizontal axis. In case of multiple axes, the yAxis node is an array of configuration objects.
         */
        yAxis?: AxisOptions[] | AxisOptions;
    }

    interface GlobalOptions extends Options {
        /**
         * Global options that don't apply to each chart. These options, like the lang options, must be set using the
         * Highcharts.setOptions method.
         */
        global?: GlobalObject;
        /**
         * Language object. The language object is global and it can't be set on each chart initiation. Instead, use
         * Highcharts.setOptions to set it before any chart is initiated.
         */
        lang?: LangObject;
    }

    interface DateFormatSpecifiers {
        [index: string]: (timestamp: number) => string;
    }

    /**
     * A chart can have from 0 axes (pie chart) to multiples. In a normal, single series cartesian chart, there is one X
     * axis and one Y axis.
     *
     * The X axis or axes are referenced by chart.xAxis, which is an array of Axis objects. If there is only one axis, it
     * can be referenced through chart.xAxis[0], and multiple axes have increasing indices. The same pattern goes for Y
     * axes.
     *
     * If you need to get the axes from a series object, use the series.xAxis andseries.yAxis properties. These are not
     * arrays, as one series can only be associated to one X and one Y axis.
     *
     * A third way to reference the axis programmatically is by id. Add an id in the axis configuration options, and get the
     * axis by chart.get(id).
     *
     * Configuration options for the axes are given in options.xAxis and options.yAxis.
     */
    interface AxisObject {
        /**
         * Add a plot band after render time.
         * @param options A configuration object consisting of the same members as options.xAxis.plotBands
         * @since 1.2.0
         */
        addPlotBand(options: PlotBands): void;
        /**
         * Add a plot line after render time.
         * @param options A configuration object consisting of the same members as options.xAxis.plotLines
         * @since 1.2.0
         */
        addPlotLine(options: PlotLines): void;
        /**
         * Get the current extremes for the axis.
         * @since 1.2.0
         */
        getExtremes(): Extremes;
        /**
         * Remove an axis from the chart.
         * @param [boolean] redraw Defaults to true. Whether to redraw the chart following the remove.
         * @since 3.0
         */
        remove(redraw?: boolean): void;
        /**
         * Remove a plot band by its id.
         * @param id The plot band's id as given in the original configuration object or in the addPlotBand method.
         * @since 1.2.0
         */
        removePlotBand(id: string): void;
        /**
         * Remove a plot line by its id.
         * @param id The plot line's id as given in the original configuration object or in the addPlotLine method.
         * @since 1.2.0
         */
        removePlotLine(id: string): void;
        /**
         * Set new categories for the axis. Redraws.
         * @param categories The new category names.
         * @since 1.2.0
         */
        setCategories(categories: string[]): void;
        /**
         * Set new categories for the axis.
         * @param categories The new category names.
         * @param  redraw     Whether to redraw the axis or wait for an explicit call to chart.redraw().
         * @since 1.2.0
         */
        setCategories(categories: string[], redraw: boolean): void;
        /**
         * Set the minimum and maximum of the axes after render time. If the startOnTick and endOnTick options are true, the
         * minimum and maximum values are rounded off to the nearest tick. To prevent this, these options can be set to
         * false before calling setExtremes. Also, setExtremes will not allow a range lower than the minRange option, which
         * by default is the range of five points.
         * @param min The new minimum value
         * @param max The new maximum value
         * @param redraw Whether to redraw the chart or wait for an explicit call to chart.redraw().
         * @param animation When true, the resize will be animated with default animation options.
         * The animation can also be a configuration object with properties duration and easing.
         * @since 1.2.0
         */
        setExtremes(min?: number, max?: number, redraw?: boolean, animation?: boolean | Animation, eventArguments?: any): void;
        /**
         * Update the title of the axis after render time.
         * @param title  The new title options on the same format as given in xAxis.title.
         * @param             redraw Whether to redraw the chart now or hold until the next chart.redraw()
         * @since 2.2
         */
        setTitle(title: AxisTitle, redraw?: boolean): void;
        /**
         * Translates a value in terms of axis units in to pixels within the chart.
         * @param   value           A value in terms of axis units.
         * @param  paneCoordinates Whether to return the pixel coordinate relative to the chart or just the axis/pane itself.
         * @since 3.0
         */
        toPixels(value: number, paneCoordinates?: boolean): number;
        /**
         * Translate a pixel position along the axis to a value in terms of axis units.
         * @param   pixel           A pixel position along the axis.
         * @param  paneCoordinates Whether the input pixel position is relative to the chart or just the axis/pane itself.
         * @since 3.0
         */
        toValue(pixel: number, paneCoordinates?: boolean): number;
        /**
         * Update an axis object with a new set of options. The options are merged with the existing options, so only new or
         * altered options need to be specified.
         * @param options The new options that will be merged in with existing options on the axis.
         * @param               redraw  Defaults to true. Whether to redraw the chart after the new options are set.
         * @since 3.0
         */
        update(options: AxisOptions, redraw?: boolean): void;
    }

    /**
     * The chart object is the JavaScript object representing a single chart in the web page.The pointer to your chart
     * object is returned when a chart is created using the Highcharts.Chart() constructor:
     * var chart1 = new Highcharts.Chart(options);
     */
    interface ChartObject {
        /**
         * Add an axis to the chart after render time. Note that this method should never be used when adding data
         * synchronously at chart render time, as it adds expense to the calculations and rendering. When adding data at the
         * same time as the chart is initiated, add the axis as a configuration option instead.
         * @param  options The Axis options, as documented under xAxis and yAxis.
         * @param  [boolean] isX Whether it is an X axis or Y axis
         * @param  [boolean] redraw Defaults to true. Whether to redraw the chart after the series is added. See the redraw() method.
         * @param  [boolean | Animation] animation Defaults to true. When true, the series' updating will be animated with default animation options.
         * The animation can also be a configuration object with properties duration and easing.
         * @since 3.0
         */
        addAxis(options: AxisOptions, isX?: boolean, redraw?: boolean, animation?: boolean | Animation): AxisObject;
        /**
         * Set a new credits label for the chart.
         * @param A configuration object for the credits as defined at credits.
         * @since 5.0.0
         */
        addCredits(options: CreditsOptions): void;
        /**
         * Add a series to the chart after render time. Note that this method should never be used when adding data
         * synchronously at chart render time, as it adds expense to the calculations and rendering. When adding data at the
         * same time as the chart is initiated, add the series as a configuration option instead.
         * @param options The series options, as documented under plotOptions.series and under the plotOptions for each series type.
         * @param [boolean] redraw
         * @since 1.2.0
         */
        addSeries<T extends IndividualSeriesOptions>(options: T, redraw?: boolean, animation?: boolean | Animation): SeriesObject;
        /**
         * Add a series to the chart as drilldown from a specific point in the parent series. This method is used for async
         * drilldown, when clicking a point in a series should result in loading and displaying a more high-resolution
         * series. When not async, the setup is simpler using the drilldown.series options structure.
         * @param point The existing Point object from which the drilldown will start.
         * @param seriesOptions The series options, as documented under plotOptions.series and under the plotOptions for each series type.
         * @since 3.0.8
         */
        addSeriesAsDrilldown(point: PointObject, seriesOptions: IndividualSeriesOptions): void;
        /**
         * A reference to the containing HTML element, dynamically inserted into the element given in chart.renderTo.
         * @since 1.2.5
         */
        container: HTMLElement;
        /**
         * The chart's credits label. The label has an update method that allows setting new options as per the credits option set.
         *
         */
        credits: CreditsObject;
        /**
         * Removes the chart and purges memory. This method should be called before writing a new chart into the same
         * container. It is called internally on window unload to prevent leaks.
         * @since 1.2.2
         */
        destroy(): void;
        /**
         * When the chart is drilled down to a child series, calling chart.drillUp() will drill up to the parent series.
         * @since 3.0.8
         */
        drillUp(): void;
        /**
         * Exporting module required. Submit an SVG version of the chart to a server along with some parameters for
         * conversion.
         * @since 2.0
         */
        exportChart(): void;
        /**
         * Exporting module required. Submit an SVG version of the chart to a server along with some parameters for
         * conversion.
         * @param options Exporting options. Out of the exporting options, the following options can be given as parameters to the exportChart method.
         * All options default to the values given in the exporting config options. filename: the filename for the export without extension,
         * url: the URL for the server module to do the conversion, width: the width of the PNG or JPEG image generated on the server,
         * type: the MIME type of the converted image, sourceWidth: the width of the source (in-page) chart, sourceHeight: the height of the source chart.
         * @since 2.0
         */
        exportChart(options: ExportingOptions): void;
        /**
         * Exporting module required. Submit an SVG version of the chart to a server along with some parameters for
         * conversion.
         * @param options Exporting options. Out of the exporting options, the following options can be given as parameters to the exportChart method.
         * All options default to the values given in the exporting config options. filename: the filename for the export without extension,
         * url: the URL for the server module to do the conversion, width: the width of the PNG or JPEG image generated on the server,
         * type: the MIME type of the converted image, sourceWidth: the width of the source (in-page) chart, sourceHeight: the height of the source chart.
         * @param chartOptions Additional chart options for the exported chart. For example a different background color can be added here.
         * @since 2.0
         */
        exportChart(options: ExportingOptions, chartOptions: Options): void;
        /**
         * Export the chart to a PNG or SVG without sending it to a server. Requires
         * modules/exporting.js and modules/offline-exporting.js.
         * @since 2.0
         */
        exportChartLocal(): void;
        /**
         * Export the chart to a PNG or SVG without sending it to a server. Requires
         * modules/exporting.js and modules/offline-exporting.js.
         * @param options Exporting options. Same as
         * the exportChart params.
         * @since 2.0
         */
        exportChartLocal(options: ExportingOptions): void;
        /**
         * Export the chart to a PNG or SVG without sending it to a server.
         * Requires modules/exporting.js and modules/offline-exporting.js.
         * @param options Exporting options. Same as
         * the exportChart params.
         * @param chartOptions Additional chart options for the
         * exported chart. Same as the exportChart params.
         * @since 2.0
         */
        exportChartLocal(options: ExportingOptions, chartOptions: Options): void;
        /**
         * Get an axis, series or point by its id as given in the configuration options.
         * @param  id The id of the axis, series or point to get.
         * @since 1.2.0
         */
        get(id: string): AxisObject | SeriesObject | PointObject;
        /**
         * Exporting module required. Get an SVG string representing the chart.
         * @param  additionalOptions Chart options to add to the exported chart in addition to the options given for the original chart.
         * For example if series.lineWidth should be greater in the exported chart than in the original, or the chart should have a different background color, this is added here.
         * @since 2.0
         */
        getSVG(additionalOptions?: Options): string;
        /**
         * Returns an array of all currently selected points in the chart. Points can be selected either programmatically by
         * the point.select() method or by clicking.
         * @return An array of the selected points.
         * @since 1.2.0
         */
        getSelectedPoints(): PointObject[];
        /**
         * Returns an array of all currently selected series in the chart. Series can be selected either programmatically by
         * the series.select() method or by checking the checkbox next to the legend item if series.showCheckBox is true.
         * @return An array of the selected Series items.
         * @since 1.2.0
         */
        getSelectedSeries(): SeriesObject[];
        /**
         * Hide the loading screen. Options for the loading screen are defined at options.loading.
         * @since 1.2.0
         */
        hideLoading(): void;
        /**
         * The options structure for the chart.
         * @since 1.2.0
         */
        options: Options;
        /**
         * Exporting module required. Clears away other elements in the page and prints the chart as it is displayed. By
         * default, when the exporting module is enabled, a button at the upper left calls this method.
         * @since 2.0
         */
        print(): void;
        /**
         * Redraw the chart after changes have been done to the data or axis extremes. All methods for updating axes, series
         * or points have a parameter for redrawing the chart. This is true by default. But in many cases you want to do
         * more than one operation on the chart before redrawing, for example add a number of points. In those cases it is a
         * waste of resources to redraw the chart for each new point added. So you add the points and call chart.redraw()
         * after.
         * @param [boolean | Animation] animation Defaults to true. When true, the update will be animated with default animation options.
         * The animation can also be a configuration object with properties duration and easing.
         * @since 1.2.0
         */
        redraw(animation?: boolean | Animation): void;
        /**
         * Reflows the chart to its container. By default, the chart reflows automatically to its container following a
         * window.resize event, as per the chart.reflow option. However, there are no reliable events for div resize, so if
         * the container is resized without a window resize event, this must be called explicitly.
         */
        reflow(): void;
        /**
         * An array of all the chart's series.
         * @since 1.2.0
         */
        series: SeriesObject[];
        /**
         * Resize the chart to a given width and height.
         * @param width The new pixel width of the chart.
         * @param height The new pixel height of the chart.
         * @param animation Defaults to true. When true, the resize will be animated with default animation options.
         *  The animation can also be a configuration object with properties duration and easing.
         */
        setSize(width: number, height: number, animation?: boolean | Animation): void;
        /**
         * Set a new title or subtitle for the chart
         * @param title A configuration object for the new title as defined at #title.
         * @param [SubtitleOptions] subtitle A configuration object for the new subtitle as defined at #subtitle.
         * @param [boolean] redraw Whether to redraw the chart. Defaults to true.
         * @since 2.1.0
         */
        setTitle(title: TitleOptions, subtitle?: SubtitleOptions, redraw?: boolean): void;
        /**
         * Dim the chart's plot area and show a loading label text. Options for the loading screen are defined at
         * options.loading. A custom text can be given as a parameter for loading.
         * @since 2.0.5
         */
        showLoading(str?: string): void;
        /**
         * The chart subtitle. The subtitle has an update method that allows modifying the options.
         * @since 5.0.0
         */
        subtitle: TitleObject;
        /**
         * The chart title. The title has an update method that points back to Chart.setTitle.
         * @since 5.0.0
         */
        title: TitleObject;
        /**
         * A generic function to update any element of the chart. Elements can be enabled and disabled, moved, re-styled,
         * re-formatted etc.
         * A special case is configuration objects that take arrays, for example xAxis, yAxis or series. For these collections,
         * an id option is used to map the new option set to an existing object. If an existing object of the same id is not
         * found, the first item is updated. So for example, running chart.update with a series item without an id, will cause
         * the existing chart's first series to be updated.
         * See also the responsive option set. Switching between responsive.rules basically runs chart.update under the hood.
         * @param option A configuration object for the new chart options as defined in the options section of the API.
         * @param [boolean] redraw Whether to redraw the chart. Defaults to true.
         * @param [boolean] oneToOne When true, the series, xAxis and yAxis collections will be updated one to one, and
         * items will be either added or removed to match the new updated options. Defaults to false.
         * @since 5.0.0
         */
        update(options: Options, redraw?: boolean, oneToOne?: boolean): void;
        /**
         * This method is deprecated as of 2.0.1. Updating the chart position after a move operation is no longer necessary.
         * @since 1.2.5
         * @deprecated
         */
        updatePosition(): void;
        /**
         * An array of the chart's x axes. If only one x axis, it is referenced by chart.xAxis[0].
         * @since 1.2.0
         */
        xAxis: AxisObject[];
        /**
         * An array of the chart's y axes. If only one y axis, it is referenced by chart.yAxis[0].
         * @since 1.2.0
         */
        yAxis: AxisObject[];

        renderer: RendererObject;

        legend: LegendObject;
    }

    interface Chart {
        /**
         * This is the constructor for creating a new chart object.
         * @param  options The chart options
         */
        new (options: Options): ChartObject;
        /**
         * This is the constructor for creating a new chart object.
         * @param options The chart options
         * @param callback A function to execute when the chart object is finished loading and rendering. In most cases the chart is built in one thread,
         * but in Internet Explorer version 8 or less the chart is sometimes initiated before the document is ready,
         * and in these cases the chart object will not be finished directly after callingnew Highcharts.Chart().
         * s a consequence, code that relies on the newly built Chart object should always run in the callback. Defining a chart.event.load handler is equivalent.
         */
        new (options: Options, callback: (chart: ChartObject) => void): ChartObject;
        /**
         * This is the constructor for creating a new chart object.
         * @param renderTo The id or a reference to a DOM element where the chart should be rendered (since v4.2.0).
         * @param options The chart options
         */
        new (renderTo: string | HTMLElement, options: Options): ChartObject;
        /**
         * This is the constructor for creating a new chart object.
         * @param renderTo The id or a reference to a DOM element where the chart should be rendered (since v4.2.0).
         * @param options The chart options
         * @param callback A function to execute when the chart object is finished loading and rendering. In most cases the chart is built in one thread,
         * but in Internet Explorer version 8 or less the chart is sometimes initiated before the document is ready,
         * and in these cases the chart object will not be finished directly after callingnew Highcharts.Chart().
         * As a consequence, code that relies on the newly built Chart object should always run in the callback. Defining a chart.event.load handler is equivalent.
         */
        new (renderTo: string | HTMLElement, options: Options, callback: (chart: ChartObject) => void): ChartObject;
    }

    /**
     * The Element class is a JavaScript wrapper for SVG elements used in the rendering layer of Highchart. Combined with
     * the Renderer object, these elements allows freeform annotation in the charts or even in your HTML pages without
     * creating a chart at all.
     */
    interface ElementObject {
        /**
         * Add the element to the renderer canvas.
         * @param  parent The element can be added to a g (group) element.
         * @since 2.0
         */
        add(parent?: ElementObject): ElementObject;
        /**
         * Apply numeric attributes to the SVG/VML element by animation. See Element.attr() for more information on setting
         * attributes.
         * @param  attributes A set of attributes to apply.
         * @param  animation Optional animation parameters that are passed over to jQuery or other framework.
         * Valid properties depend on the library, but options like duration, easing and complete are supported by jQuery.
         * @since 2.0
         */
        animate(attributes: any, animation?: any): ElementObject;
        /**
         * Apply attributes to the SVG/VML elements. These attributes for the most parts correspond to SVG, but some are
         * specific to Highcharts, like zIndex and rotation.
         *
         * In order to set the rotation center for rotation, set x and y to 0 and use translateX and translateY attributes
         * to position the element instead.
         *
         * Attributes frequently used in Highcharts are fill, stroke, stroke-width.
         * @param  hash A set of attributes to apply.
         * @since 2.0
         */
        attr(hash: any): ElementObject;
        /**
         * Apply some CSS properties to the element
         * @param hash The object literal of CSS properties to apply. Properties should be hyphenated, not camelCased.
         * @since 2.0
         */
        css(hash: Object): ElementObject;
        /**
         * Destroy the element and free up memory
         * @since 2.0
         */
        destroy(): void;
        fadeOut(duration?: number): void;
        /**
         * Get the bounding box of the element
         * @return An object containing x, y, width and height values for the element.
         * @since 2.0
         */
        getBBox(): { x: number; y: number; height: number; width: number; };
        /**
         * Apply an event handler to the element
         * @param eventType The event type to attach, for example 'click', 'mouseover', 'touch'.
         * @param handler The event handler function.
         * @since 2.0
         */
        on(eventType: string, handler: () => void): ElementObject;
        /**
         * Bring the element to the front. Alternatively, a zIndex attribute can be given.
         * @return The element object
         * @since 2.0
         */
        toFront(): ElementObject;
    }

    /**
     * Allows direct access to the Highcharts rendering layer in order to draw primitive shapes like circles,
     * rectangles,paths or text directly on a chart, or independent from any chart. The Renderer represents a wrapper object
     * for SVGin modern browsers and VML in IE < 8.
     *
     * An existing chart's renderer can be accessed through chart.renderer. To create a renderer independent from a chart,
     * use var renderer = new Highcharts.Renderer(parentNode, width, height); where parentNode is the HTML element where you
     * want to add it.
     *
     * The Renderer's methods are chained wherever possible, so you can initiate an element then call for example attr and
     * css and add on that element in one statement.
     */
    interface RendererObject {
        /**
         * Draw an arc on the renderer canvas.
         * @param  centerX The x position of the arc's center in the SVG element.
         * @param  centerY The y position of the arc's center in the SVG element.
         * @param  outerRadius The outer radius of the arc.
         * @param  innerRadius The inner radius of the arc.
         * @param  start The starting angle of the arc in radians, where 0 is to the right and -Math.PI/2 is up.
         * @param  end The ending angle of the arc in radians, where 0 is to the right and -Math.PI/2 is up.
         * @since 2.0
         */
        arc(centerX: number, centerY: number, outerRadius: number, innerRadius: number, start: number, end: number): ElementObject;
        /**
         * Draw circle on the renderer canvas.
         * @param  centerX The x position of the circle's center in the SVG element.
         * @param  centerY The y position of the circle's center in the SVG element.
         * @param  radius  [description]
         * @since 2.0
         */
        circle(centerX: number, centerY: number, radius: number): ElementObject;
        /**
         * Styled mode only. A hook for adding general definitions to the SVG's defs tag. Definitions can be referenced from
         * the CSS by its id. Read more in Gradients, shadows and patterns.
         * The definitions can also be added as configuration options, see defs.
         * @param A serialized form of an SVG definition, including children.
         * @since 5.0.0
         */
        definition(def: object): ElementObject;
        /**
         * Add an SVG/VML group.
         * @param [string] name The name of the group. This will be used in the class name, which will be 'highcharts-'+ name.
         * Other Element objects are added to the group by using the group as the first parameter in .add() for the wrappers
         * @since 2.0
         */
        g(name?: string): ElementObject;
        /**
         * Add an image from an external resource.
         * @param  source The URL of the image.
         * @param  x      The x position of the image's upper left corner.
         * @param  y      The y position of the image's upper left corner.
         * @param  width  The width of the image.
         * @param  height The height of the image.
         * @since 2.0
         */
        image(source: string, x: number, y: number, width: number, height: number): ElementObject;
        /**
         * Draw a label, which is an extended text element with support for border and background. Highcharts creates a g
         * element with a text and a path or rect inside, to make it behave somewhat like a HTML div. Border and background
         * are set through stroke, stroke-width and fill attributes using the attr method. This must be done before calling
         * add.
         * @param  str The text or HTML to draw
         * @param  x The x position of the label's left side.
         * @param  y The y position of the label's top side or baseline, depending on the baseline parameter.
         * @param  [string] shape The shape of the label's border/background, if any. Defaults to rect.
         * @param  [number] anchorX If the shape has a pointer, like the chevron on a callout shape, anchorX is the x position to point to.
         * @param  [number] anchorY If the shape has a pointer, like the chevron on a callout shape, anchorY is the y position to point to.
         * @param  [boolean] useHTML Use HTML to render the text of the label.
         * @param  [boolean] baseline Whether the label should be vertically aligned by the text baseline, which makes it behave like the text element,
         * or by the top left side, which makes it behave like a HTML div.
         * @param  [string] className A class name for the g element surrounding the label.
         * @since 2.0
         */
        label(str: string, x: number, y: number, shape?: string, anchorX?: number, anchorY?: number, useHTML?: boolean, baseline?: boolean, className?: string): ElementObject;
        /**
         * Add a path based on SVG's path commands. In SVG capable browsers all path commands are supported, but in VML only
         * a subset is supported: absolute moveTo (M), absolute lineTo (L), absolute curveTo (C) and close (Z).
         * @param  path An SVG path split up in array form.
         */
        path(path: Array<string | number>): ElementObject;
        /**
         * Add a rectangle.
         * @param  x The x position of the rectangle's upper left corner.
         * @param  y The y position of the rectangle's upper left corner.
         * @param  width The width of the rectangle.
         * @param  height The height of the rectangle.
         * @param  cornerRadius The corner radius of all the rectangle's corners.
         * @since 2.0
         */
        rect(x: number, y: number, width: number, height: number, cornerRadius: number): ElementObject;
        /**
         * Draw text. The text can contain a subset of HTML, like spans and anchors and some basic text styling of these.
         * For more advanced features like border and background, use label instead.
         * @param  str The text or HTML to draw
         * @param  x The x position of the text's lower left corner.
         * @param  y The y position of the text's lower left corner.
         * @since 2.0
         */
        text(str: string, x: number, y: number): ElementObject;
    }

    interface Renderer {
        new (parentNode: HTMLElement, width: number, height: number): RendererObject;
    }

    interface Static {
        Chart: Chart;
        Renderer: Renderer;
        Color(color: string | Gradient): string | Gradient;

        /**
         * As Highcharts.Chart, but without need for the new keyword.
         * @since 4.2.0
         */
        chart(options: Options, callback?: (chart: ChartObject) => void): ChartObject;
        /**
         * As Highcharts.Chart, but without need for the new keyword.
         * @since 4.2.0
         */
        chart(renderTo: string | HTMLElement, options: Options, callback?: (chart: ChartObject) => void): ChartObject;
        /**
         * An array containing the current chart objects in the page. A chart's position in the array is preserved
         * throughout the page's lifetime. When a chart is destroyed, the array item becomes undefined.
         * @since 2.3.4
         */
        charts: ChartObject[];
        /**
         * Formats a JavaScript date timestamp (milliseconds since Jan 1st 1970) into a human readable date string. The
         * format is a subset of the formats for PHP's strftime function. Additional formats can be given in the
         * Highcharts.dateFormats hook, see below.
         * @param  format A string containing some of the formats.
         * @param  [number] time The JavaScript time to format.
         * @param  [boolean] capitalize Whether to capitalize words in the return string.
         */
        dateFormat(format: string, time?: number, capitalize?: boolean): string;
        /**
         * A hook for defining additional date format specifiers. New specifiers are defined as key-value pairs by using the
         * specifier as key, and a function which takes the timestamp as value. This function returns the formatted portion
         * of the date.
         */
        dateFormats: DateFormatSpecifiers;
        /**
         * The error handler function. By default is provides error messages for debugging, with links to the descriptions on Highcharts website.
         * This function can be redefined to catch errors in client applications.
         * @param Number|String The error code. If this is a number, the default error function prints a link to a human readable error code
         * description according to error definition file. If it's a string, the description is printed in the console.
         * @param Whether the error should stop execution.
         * @since 5.0.6
         */
        error(code: number | string, fatal: boolean): Function;
        /**
         * Formats a JavaScript number with grouped thousands, a fixed amount of decimals and an optional decimal point. It
         * is a port of PHP's function with the same name. See PHP number_format for a full explanation of the parameters.
         * @param  value        The raw number to format.
         * @param  decimals     The desired number of decimals.
         * @param  decimalPoint The decimal point. Defaults to '.' or to the string specified globally in options.lang.decimalPoint.
         * @param  thousandsSep The thousands separator. Defaults to ' ' or to the string specified globally in options.lang.thousandsSep.
         */
        numberFormat(value: number, decimals?: number, decimalPoint?: string, thousandsSep?: string): string;
        /**
         * Sets the options globally for all charts created after this has been called. Takes an options JavaScript object
         * structure as the argument. These options are merged with the default options and the result is returned.
         * @param options The chart configuration object.
         */
        setOptions(options: GlobalOptions): Options;
        /**
         * Get the updated default options. Until 3.0.7, merely exposing defaultOptions for outside modules
         * wasn't enough because the setOptions method created a new object.
         */
        getOptions(): Options;

        map(array: any[], fn: Function): any[];

        wrap(prototype: any, type: string, cb: (proceed: Function, ...args: any[]) => void): void;
    }

    /**
     * The Point object is the JavaScript representation of each data point
     *
     * The object can be accessed in a number of ways. In all point event handlers the point object is this. In the series
     * object all the points are accessed by the series.data array.
     *
     * Another way to reference the point programmatically is by id. Add an id in the point configuration options, and get
     * the point object by chart.get(id).
     */
    interface PointObject {
        /**
         * For categorized axes this property holds the category name for the point. For other axis it holds the x value.
         * @since 1.2.0
         */
        category: string | number;
        name: string;
        index: number;
        /**
         * The percentage for points in a stacked series or pies.
         * @since 1.2.0
         */
        percentage: number;
        /**
         * Remove the point from the series.
         * @param [boolean] redraw Defaults to true. Whether to redraw the chart after the point is removed.If doing more operations on the chart,
         * it is a good idea to set redraw to false and call chart.redraw() after.
         * @param [boolean|Animation] animation Defaults to true. When true, the graph's updating will be animated with default animation options.
         * The animation can also be a configuration object with properties duration and easing.
         * @since 1.2.0
         */
        remove(redraw?: boolean, animation?: boolean | Animation): void;
        /**
         * Select or unselect the point.
         * @param [boolean] select When true, the point is selected. When false, the point is unselected. When null or undefined, the selection state is toggled.
         * @param [boolean] accumulate When true, the selection is added to other selected points. When false, other selected points are deselected.
         * Internally in Highcharts,selected points are accumulated on Control, Shift or Cmd clicking the point.
         * @since 1.2.0
         */
        select(select?: boolean, accumulate?: boolean): void;
        /**
         * Whether the point is selected or not.
         * @since 1.2.0
         */
        selected: boolean;
        /**
         * The series object associated with the point.
         * @since 1.2.0
         */
        series: SeriesObject;
        /**
         * Slice out or set back in a pie chart slice. This is the default way of Highcharts to visualize that a pie point
         * is selected.
         * @param [boolean] sliced When true, the point is sliced out. When false, the point is set in. When null or undefined, the sliced state is toggled.
         * @param [boolean] redraw Defaults to true. Whether to redraw the chart after the point is altered.
         * @param [boolean|Animation] animation Defaults to true. When true, the move will be animated with default animation options.
         * The animation can also be a configuration object with properties duration and easing.
         * @since 1.2.0
         */
        slice(sliced?: boolean, redraw?: boolean, animation?: boolean | Animation): void;
        /**
         * The total of a stack for stacked series, or pie in pie charts.
         */
        total: number;
        /**
         * Update the point with new values.
         * @param options The point options. Point options are handled as described under the series<type>.data item for each series type.
         * For example for a line series, if options is a single number, the point will be given that number as the main y value. If it is an array,
         * it will be interpreted as x and y values respectively. If it is an object, advanced options are applied.
         * @param [boolean] redraw Defaults to true. Whether to redraw the chart after the point is updated.If doing more operations on the chart,
         * it is a good idea to set redraw to false and call chart.redraw() after.
         * @param animation Defaults to true. When true, the update will be animated with default animation options.
         * The animation can also be a configuration object with properties duration and easing.
         * @since 1.2.0
         */
        update(options: number | [number, number] | DataPoint, redraw?: boolean, animation?: boolean | Animation): void;
        /**
         * The x value for the point.
         * @since 1.2.0
         */
        x: number;
        /**
         * The y value for the point.
         * @since 1.2.0
         */
        y: number;
    }

    /**
     * The Series object is the JavaScript representation of each line, area series, pie etc.
     *
     * The object can be accessed in a number of ways. All series and point event handlers give a reference to the series
     * object. The chart object has a series property that is a collection of all the chart's series. The point objects also
     * have the same reference.
     *
     * Another way to reference the series programmatically is by id. Add an id in the series configuration options, and get
     * the series object by chart.get(id).
     *
     * Configuration options for the series are given in three levels. Options for all series in a chart are given in the
     * plotOptions.series object. Then options for all series of a specific type are given in the plotOptions of that type,
     * for example plotOptions.line. Next, options for one single series are given in the series array.
     */
    interface SeriesObject {
        /**
         * Add a point to the series after render time. The point can be added at the end, or by giving it an X value, to
         * the start or in the middle of the series.
         * @param The point options. If options is a single number, a point with that y value is appended to the series.
         * If it is an array, it will be interpreted as x and y values respectively. If it is an object, advanced options as outlined under series.data are applied.
         * @param [boolean=true] redraw - Whether to redraw the chart after the point is added. When adding more than one point,
         * it is highly recommended that the redraw option be set to false, and instead chart.redraw() is explicitly called after the adding of points is finished.
         * @param [boolean=false] shift - When shift is true, one point is shifted off the start of the series as one is appended to the end.
         * Use this option for live charts monitoring a value over time.
         * @param [(boolean|Animation)=false] animation - When shift is true, one point is shifted off the start of the series as one is appended to the end.
         * Use this option for live charts monitoring a value over time.
         * @since 1.2.0
         */
        addPoint(options: number | [number, number] | DataPoint, redraw?: boolean, shift?: boolean, animation?: boolean | Animation): void;
        /**
         * Read only. The chart that the series belongs to.
         * @since 1.2.0
         */
        chart: ChartObject;
        /**
         * Read only. An array with the series' data point objects.
         * @since 1.2.0
         */
        data: PointObject[];
        /**
         * Hides the series if visible. If the chart.ignoreHiddenSeries option is true,the chart is redrawn without this
         * series.
         * @since 1.2.0
         */
        hide(): void;
        /**
         * The series' name as given in the options.
         * @since 1.2.0
         */
        name: string;
        /**
         * Read only. The series' options.
         * @since 1.2.0
         */
        options: IndividualSeriesOptions;
        /**
         * Remove the series from the chart.
         * @param [boolean=true] redraw - Whether to redraw the chart after the series is removed.If doing more operations on the chart,
         * it is a good idea to set redraw to false and call chart.redraw() after.
         * @since 1.2.0
         */
        remove(redraw?: boolean): void;
        /**
         * Remove a point from the series. Unlike the Point.remove method, this can also be done on a point that is not
         * instanciated because it is outside the view or subject to data grouping.
         * @param index - The index of the point in the data array.
         * @param [boolean=true] redraw - Whether to redraw the chart after the point is added. When adding more than one point,
         * it is highly recommended that the redraw option be set to false, and instead chart.redraw() is explicitly called after the adding of points is finished.
         * @param [boolean|Animation=true] animation - When true, the graph will be animated with default animation options.
         * The animation can also be a configuration object with properties duration and easing.
         * @since 4.1.0
         */
        removePoint(index: number, redraw?: boolean, animation?: boolean | Animation): void;
        /**
         * Select or unselect the series. This means its selected property is set,the checkbox in the legend is toggled and
         * when selected, the series is returned in the chart.getSelectedSeries() method.
         * @param [boolean] selected - When true, the series is selected. When false it is unselected. When null or undefined, the series' selection state is toggled.
         * @since 1.2.0
         */
        select(selected?: boolean): void;
        /**
         * Read only. The series' selected state as set by series.select().
         * @since 1.2.0
         */
        selected: boolean;
        /**
         * Apply a new set of data to the series and optionally redraw it. Note that this method throws away all points and
         * creates new ones. For updating the values of existing points, use Point.update() instead.
         * @param data - Takes an array of data in the same format as described under series<type>data for the given series type.
         * @param [boolean=true] redraw - Whether to redraw the chart after the series is altered.If doing more operations on the chart,
         * it is a good idea to set redraw to false and call chart.redraw() after.
         * @param [boolean|Animation] animation - When the updated data is the same length as the existing data, points will be updated by default,
         * and animation visualizes how the points are changed. Set false to disable animation, or a configuration object to set duration or easing.
         * @param [boolean] updatePoints - When the updated data is the same length as the existing data, points will be updated instead of replace.
         * This option prevents this, and makes setData behave like it did prior to Highcharts 3.0.10.
         * @since 1.2.0
         */
        setData(data: number[] | number[][] | DataPoint[], redraw?: boolean, animation?: boolean | Animation, updatePoints?: boolean): void;
        /**
         * A utility function to show or hide the series with an optional redraw.
         * @param [boolean] visible - Whether to show or hide the series. If undefined, the visibility is toggled.
         * @param [boolean=true] redraw - Whether to redraw the chart after the series is altered.If doing more operations on the chart,
         * it is a good idea to set redraw to false and call chart.redraw() after.
         * @since 1.2.0
         */
        setVisible(visible?: boolean, redraw?: boolean): void;
        /**
         * Shows the series if hidden.
         * @since 1.2.0
         */
        show(): void;
        /**
         * Read only. The series' type, like 'line', 'area' etc.
         * @since 1.2.0
         */
        type: string;
        /**
         * Update the series with a new set of options. For a clean and precise handling of new options, all methods and
         * elements from the series is removed, and it is initiated from scratch. Therefore, this method is more performance
         * expensive than some other utility methods like setData or setVisible.
         * @param options New options that will be merged into the series' existing options.
         * @param [boolean] redraw - Whether to redraw the chart after the series is altered. If doing more operations on the chart,
         * it is a good idea to set redraw to false and call chart.redraw() after.
         * @since 1.2.0
         */
        update(options: IndividualSeriesOptions, redraw?: boolean): void;
        /**
         * Read only. The series' visibility state as set by series.show(), series.hide(), or the initial configuration.
         * @since 1.2.0
         */
        visible: boolean;
        /**
         * Read only. The unique xAxis object associated with the series.
         * @since 1.2.0
         */
        xAxis: AxisObject;
        /**
         * Read only. The unique yAxis object associated with the series.
         * @since 1.2.0
         */
        yAxis: AxisObject;
    }

    interface LegendObject {
        /**
         * Update the legend with new options.
         * @param options New options that will be merged into the legend's existing options.
         * @param [boolean] redraw - Whether to redraw the chart. Defaults to true.
         * @since 5.0.0
         */
        update(options: LegendOptions, redraw?: boolean): void;
    }
}

declare global {
    interface JQuery {
        highcharts(): Highcharts.ChartObject;
        /**
         * Creates a new Highcharts.Chart for the current JQuery selector; usually
         * a div selected by $('#container')
         * @param options Options for this chart
         * @return current {JQuery} selector the current JQuery selector
         */
        highcharts(options: Highcharts.Options): JQuery;
        /**
         * Creates a new Highcharts.Chart for the current JQuery selector; usually
         * a div selected by $('#container')
         * @param options Options for this chart
         * @param callback Callback function used to manipulate the constructed chart instance
         * @return current {JQuery} selector the current JQuery selector
         */
        highcharts(options: Highcharts.Options, callback: (chart: Highcharts.ChartObject) => void): JQuery;
    }
}

declare const Highcharts: Highcharts.Static;
export = Highcharts;
export as namespace Highcharts;
