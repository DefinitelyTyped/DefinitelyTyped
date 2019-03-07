// Type definitions for CanvasJS 1.9
// Project: http://canvasjs.com/, https://github.com/tsur/canvasjs
// Definitions by: ShuYin Zhang  <https://github.com/brutalimp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type DashType = "solid" | "shortDash" | "shortDot" | "shortDashDot" | "shortDashDotDot" | "dot" | "dash" | "dashDot" | "longDash" | "longDashDot" | "longDashDotDot";

declare namespace CanvasJS {
    class Chart {
        /**
         * The current options of the chart.
         */
        options: ChartOptions;
        /**
         * All Title options become available as properties after Chart Render. You can access them either via get method or dot notation. But you can change / set those values only via set method.
         */
        readonly title: ChartTitle;
        /**
         * The subtitles of the chart.
         * You can access them either via get method or dot notation. But you can change / set those values only via set method.
         */
        readonly subtitles: ChartTitle[];
        /**
         * The toolTip of the chart.
         */
        readonly toolTip: ChartToolTip;
        readonly axisX: ChartAxisX[];
        readonly axisX2: ChartAxisX[];
        readonly axisY: ChartAxisY[];
        readonly axisY2: ChartAxisY[];
        readonly stripLines: ChartStrip[];
        readonly data: ChartDataSeries[];
        /**
         * Initializes a new instance of CanvasJS Chart.
         * @param containerId the DOM ID of the location where the chart is to be rendered
         * @param options the options used to render the chart
         */
        constructor(containerId: string, options?: ChartOptions);

        /**
         * Renders the chart.
         */
        render(): void;
        /**
         * Returns the specified property of Chart.
         * @param propertyName Name of the property.
         */
        get(propertyName: string): any;
        /**
         * Sets the specified property of Chart.
         * Notes:
         * 1. Chart should be rendered before you can use this method.
         * 2. Because the chart updates each time set is called by default,
         * it is recommended to disable auto update (set updateChart to false) till the last step if you have to set multiple properties.
         *  Otherwise it can affect performance because of repeated chart rendering. You can see an example below.
         * @param propertyName Name of the property.
         * @param value value to be set on property.
         * @param updateChart When true, Updates the chart automatically after setting the value. Defaults to true.
         */
        set(propertyName: string, value: ChartOptions, updateChart?: boolean): void;
        /**
         * Adds a new element of given type to the specified array. For example, it can be used to add new Axis to axisY array.
         * Notes:
         * 1. Chart should be rendered before you can use this method.
         * 2. Chart renders automatically after addTo() operation.
         * @param propertyName Name of the property
         * @param options Option for the new element
         * @param index Index of the array where the new element is to be added. Defaults to the length (end) of array.
         * @param updateChart When true, Updates the chart automatically after setting the value. Defaults to true.
         */
        addTo(propertyName: string, options: ChartAxisXOptions | ChartAxisYOptions | ChartDataSeriesOptions, index?: number, updateChart?: boolean): void;
        /**
         * Export the chart as image (jpg / png).
         * @param options Setting when export
         */
        exportChart(options: { format: "jpg" | "png", toDataURL?: boolean, fileName?: string }): void;
        /**
         * Prints the Chart.
         * Chart should be rendered before you can use this method.
         */
        print(): void;
        /**
         * Removes the chart references internally, thus making the chart eligible for garbage collection, in turn clearing up the memory.
         * Notes:
         * 1. On calling chart.destroy(), chart won’t be responsive unless new chart is created.
         * 2. chart.destroy() should be called before using the same variable to hold a newly allocated object/chart to prevent memory leaks.
         */
        destroy(): void;
    }

    /**
     * Adds a new chart color set
     * @param colorSetName name of the color set
     * @param colorSetArray array of colors.
     */
    function addColorSet(colorSetName: string, colorSetArray: string[]): void;

    /**
     * Adds a new culture info for your chart
     * @param culture the name of the culture
     * @param info information used by this culture
     */
    function addCultureInfo(culture: string, info: CultureInfo): void;
    /**
     * Formats number according to the given formatString(optional) & culture(optional).
     * @param number Number to format.
     * @param formatString Default formatString is “#,##0.##” .
     * @param culture Default culture is “en”
     */
    function formatNumber(number: number, formatString?: string, culture?: string): string;
    /**
     * Formats date/timestamp according to the given formatString(optional) & culture(optional).
     * @param date Date type or timestamp number.
     * @param formatString Default formatString is “DD MMM YYYY”.
     * @param culture Default culture is “en”.
     */
    function formatDate(date: Date | number, formatString?: string, culture?: string): void;

    interface CultureInfo {
        /**
         * Character used to separate fractional part from the whole number.
         * Default: "."
         * Example: “.“ ”,”
         */
        decimalSeparator?: string;
        /**
         * Also referred to as Thousand Separator.
         * Default: “,”
         * Example: “,”, “.”
         */
        digitGroupSeparator?: string;
        /**
         * Text is shown inside the Button till v1.4
         * v1.5 onwards Text is shown as tooltip.
         * Default: "Zoom"
         * Example: “zoom”, etc
         */
        zoomText?: string;
        /**
         * Text is shown inside the Button till v1.4
         * v1.5 onwards Text is shown as tooltip.
         * Default: “Pan”
         * Example: “pan”, etc
         */
        panText?: string;
        /**
         * Text is shown inside the Button till v1.4
         * v1.5 onwards Text is shown as tooltip.
         * Default: “Reset”
         * Example: “reset”, etc
         */
        resetText?: string;
        /**
         * Set text is shown instead of Save as PNG.
         * Default: “Save as PNG”
         * Example: “save as png”, etc
         */
        savePNGText?: string;
        /**
         * Set text is shown instead of Save as JPG.
         * Default: “Save as JPG”
         * Example: “save as jpg”, etc
         */
        saveJPGText?: string;
        /**
         * Tool Tip for Menu Button.
         * Default: “More Options”
         * Example: “More Options”, etc
         */
        menuText?: string;
        /**
         * Day names starting from Sunday. Should be exactly 7 in total.
         * Default: [“Sunday”, “Monday”, “Tuesday”, “Wednesday”, “Thursday”, “Friday”, “Saturday”]
         * Example: [“domingo”, “lunes”, “martes”, “miércoles”, “jueves”, “viernes”, “sábado”]
         */
        days?: string[];
        /**
         * Short Day names starting from Sunday. Should be exactly 7 in total.
         * Default: [“Sun”, “Mon”, “Tue”, “Wed”, “Thu”, “Fri”, “Sat”]
         * Example: [“Sun”, “Mon”, “Tue”, “Wed”, “Thu”, “Fri”, “Sat”]
         */
        shortDays?: string[];
        /**
         * Month Names starting from January.
         * Default: [“January”, “February”, “March”, “April”, “May”, “June”, “July”, “August”, “September”, “October”, “November”, “December”]
         * Example: [“January”, “February”, “March”, “April”, “May”, “June”, “July”, “August”, “September”, “October”, “November”, “December”]
         */
        months?: string[];
        /**
         * Short Month Names starting from January.
         * Default: [“Jan”, “Feb”, “Mar”, “Apr”, “May”, “Jun”, “Jul”, “Aug”, “Sep”, “Oct”, “Nov”, “Dec”]
         * Example: [“Jan”, “Feb”, “Mar”, “Apr”, “May”, “Jun”, “Jul”, “Aug”, “Sep”, “Oct”, “Nov”, “Dec”]
         */
        shortMonths?: string[];
    }

    interface ChartOptions {
        /**
         * Enables / Disables Chart interactivity like toolTip, mouse and touch events.
         * Default: true
         * Example: false, true
         */
        interactivityEnabled?: boolean;
        /**
         * Sets the duration of animation in milliseconds.
         * Default: 1200
         * Example: 1000, 500 etc.
         */
        animationDuration?: number;
        /**
         * Enables Animation while rendering the Chart.
         * Default: true
         * Example: false, true
         */
        animationEnabled?: boolean;
        /**
         * While exporting any chart, "Chart" is used as the default fine name with corresponding extension "jpg" or "png". You can override this name using exportFileName property.
         * Default: Chart
         */
        exportFileName?: string;
        /**
         * Setting exportEnabled to true enables the export feature. As of now JPG & PNG formats are supported. Export feature is available in all Chart Types.
         * Default: false
         * Options: true, false
         */
        exportEnabled?: boolean;
        /**
         * Setting zoomEnabled to true enables zooming and panning feature of Chart.
         * This way you can zoom into an area of interest when there is a large amount of data.
         * This will also allow you to pan through the chart.
         * If not set, the property is automatically enabled for large number of dataPoints. You can switch between zooming & panning using the toolbar that appears on the chart.
         * After Zooming in, you can reset the chart by clicking the reset button.
         * Default: false
         * Options: true, false
         */
        zoomEnabled?: boolean;
        /**
         * Sets the theme of the Chart. Various predefined themes are bundled along with the library. User can easily switch these themes by changing theme property to the below mentioned options.
         * Default: "theme1"
         * Options: "theme1","theme2", "theme3"
         */
        theme?: string;
        /**
         * Sets the background color of entire Chart Area. Values can be "HTML Color Name", "hex code" or "rgba values"
         * Default: "white"
         * Example: "yellow", "#F5DEB3"..
         */
        backgroundColor?: string;
        /**
         * Sets the colorSet of the Chart. Color Set is an array of colors that are used to render data. Various predefined Color Sets are bundled along with the library.
         * You can either choose from the pre-defined Color Sets or define your own Color Set.
         * Default: "colorset1" or as defined in the selected theme
         * Example: "colorSet1", "colorSet2", "colorSet3"
         */
        colorSet?: string;
        /**
         * CanvasJS allows you to localize various culture / language / country specific elements in the Chart like number formatting style – where you can choose
         * which character to use as a decimal separator and as a digit group separator (also referred to as a thousand separator).
         * By default CanvasJS is set to Neutral English Culture – "en".
         * Default: "en"
         */
        culture?: string;
        /**
         * Sets the width of the Chart.
         * Default: Takes chart container’s width by default. If the width is not set for the chart container, defaults to 500.
         * Example: 380, 500, 720
         */
        width?: number;
        /**
         * Sets the width of the Chart
         * Default: Takes chart container’s height by default. If the height is not set for the chart container, defaults to 400.
         * Example: 260, 300, 400
         */
        height?: number;
        /**
         * dataPointMaxWidth sets the maximum width of dataPoints in column / bar, ohlc and candlestick, charts.
         * This allows you to limit the width of dataPoints when there are very few of them in the chart.
         * At the same time, when the number of dataPoints increase, chart reduces their width so that they don’t overlap.
         * Default : Automatically calculated based on the chart size.
         * Example : 10, 20, 30, etc.
         */
        dataPointMaxWidth?: number;
        /**
         * Title allows you to set content, appearance and position of Chart’s Title.
         */
        title: ChartTitleOptions;
        /**
         * Whenever the chart contains multiple dataSeries, it is recommended to represent each dataSeries in a legend.
         * This way it becomes easier for the user to know what exactly is represented by each of the dataSeries.
         * In case of Pie and Doughnut charts, an entry is created for each dataPoint and in rest of the chart types entries are created for each dataSeries.
         * You can selectively show or hide a dataSeries in the Legend using showInLegend property of dataSeries.
         */
        legend?: ChartLegendOptions;
        /**
         * axisX object lets you set various parameters of X Axis like interval, grid lines, etc. It is mostly horizontal, except when we are working with Bar Charts, where axisX is vertical.
         */
        axisX?: ChartAxisXOptions | ChartAxisXOptions[];
        /**
         * axisX2 is the secondary axis which renders on the opposite of primary axis (axisX).
         * It is mostly horizontal on top, except when we are working with Bar Charts, where axisX2 is vertical on right.
         */
        axisX2?: ChartAxisXOptions | ChartAxisXOptions[];
        /**
         * axisY object lets you set various parameters of Y Axis like interval, grid lines, etc. It is mostly vertical, except when we are working with Bar Charts, where axisY is horizontal.
         */
        axisY?: ChartAxisYOptions | ChartAxisYOptions[];
        /**
         * axisY2 is the secondary axis which renders on the opposite of primary axis (axisY). It is mostly vertical, except when we are working with Bar Charts, where axisY2 is horizontal.
         */
        axisY2?: ChartAxisYOptions | ChartAxisYOptions[];
        /**
         * toolTip object lets user set behaviour of toolTip at global level like enabling/disabling animation, setting Border Color, sharing toolTip between multiple dataSeries, etc.
         * You can also disable the toolTip by setting enabled property to false.
         */
        toolTip?: ChartToolTipOptions;
        /**
         * data is an array of dataSeries Objects.
         */
        data: ChartDataSeriesOptions[];
        /**
         * subtitles is a collection of subtitle elements. This allows you to have as many subtitles as you want in a chart.
         * subtitle allows you to set content, appearance and position of Chart’s subtitle. subtitle is very much like title except that its font size is lesser than title by default.
         */
        subtitles?: ChartTitleOptions[];
    }

    interface ChartTitleOptions {
        /**
         * Sets the Title’s text.
         * Default: null
         * Example: "Chart title"
         */
        text?: string;
        /**
         * This property lets you align the Chart Title vertically.
         * Default: "top"
         * Options: "top", "center", "bottom"
         */
        verticalAlign?: string;
        /**
         * This property lets you align the Chart Title horizontally.
         * Default: "center"
         * Options: "left", "right", "center"
         */
        horizontalAlign?: string;
        /**
         * Sets the font Size of Chart Title in pixels.
         * Default: 20
         * Example: 16,18,22 ..
         */
        fontSize?: number;
        /**
         * Sets the Font Family of Chart Title.
         * Default: "calibri, Optima, Candara, verdana, Geneva, sans-serif"
         * Example: "arial" , "tahoma", "verdana" ..
         */
        fontFamily?: string;
        /**
         * Sets the Font Weight used in the Chart Title.
         * Default: "normal"
         * Options: "lighter", "normal", "bold" , "bolder"
         */
        fontWeight?: string;
        /**
         * Sets the font color of Chart Title. The value of fontColor can be a "HTML Color Name" or "hex" code .
         * Default: "black"
         * Example: "red", "#FAC003" ..
         */
        fontColor?: string;
        /**
         * Sets the fontStyle of Chart Title. fontStyle can be set to one of the below options.
         * Default: "normal"
         * Options: "normal", "italic" , "oblique"
         */
        fontStyle?: string;
        /**
         * Sets the thickness of border around the Title in pixels. To display border around title, set the borderThickness to a number greater than zero.
         * Default: 0
         * Example: 2,4 ..
         */
        borderThickness?: number;
        /**
         * To display rounded borders around the title, set the cornerRadius of title. Higher the value, more rounded are the corners.
         * Default: 0
         * Options: 5,8 ..
         */
        cornerRadius?: number;
        /**
         * Sets the color of border around Chart Title. Values of borderColor can be "HTML Color Name" or "hex" code .
         * Default: "black"
         * Example: "red", "#FF0000" ..
         */
        borderColor?: string;
        /**
         * Sets the background color of Chart Title. Values can be "HTML Color Name" or "hex" code.
         * Default: null
         * Example: "red", "#FF0000" ..
         */
        backgroundColor?: string;
        /**
         * This property lets you set margin around the Chart Title in pixels.
         * Default: 5
         * Example: 4,12 ..
         */
        margin?: number;
        /**
         * This property allows you to set the padding for Chart Title
         * Default: 0
         * Example: 5, 8 ..
         */
        padding?: number;
        /**
         * Wrap specifies whether to wrap the title once its width crosses maxWidth or not. If it is set to false, title gets clipped after reaching maxWidth.
         * Default: true;
         * Example : true, false
         */
        wrap?: boolean;
        /**
         * Sets the maximum width of title after which it gets wrapped or clipped depending on whether wrap is set to true (default) or false.
         * Default: Automatically calculated based on the chart size.
         * Example: 200, 400 ..
         */
        maxWidth?: number;
        /**
         * When dockInsidePlotArea is set to true, title renders inside the plot area there by giving more space to plot area.
         * Default: false
         * Example: false, true.
         */
        dockInsidePlotArea?: boolean;
    }

    interface ChartTitle extends ChartTitleOptions {
        /**
         * Can be accessed via get method or dot notation.
         */
        readonly bounds: {
            x1: number,
            x2: number,
            y1: number,
            y2: number,
        };
        /**
         * Returns the specified property of title.
         * @param propertyName Name of the property.
         */
        get(propertyName: string): string | number | boolean;
        /**
         * Sets the specified property of Title.
         * @param propertyName Name of the property.
         * @param value value to be set on property.
         * @param updateChart When true, Updates the chart automatically after setting the value. Defaults to true.
         */
        set(propertyName: string, value: string | number | boolean, updateChart: boolean): void;
        /**
         * Removes title of the chart.
         */
        remove(): void;
    }

    interface ChartLegendOptions {
        /**
         * Sets the cursor type for legend items.
         * Default: "default"
         * Examples: "pointer", "crosshair" ..
         */
        cursor?: string;
        /**
         * Sets the font Size of Legend Text in pixels.
         * Default: 20
         * Example: 16,18,22 ..
         */
        fontSize?: number;
        /**
         * Sets the Font Family of Legend Text.
         * Default: "calibri"
         * Example: "arial" , "tahoma", "verdana" ..
         */
        fontFamily?: string;
        /**
         * Sets the font color of Legend Text . The value of fontColor can be a "HTML Color Name" or "hex" code .
         * Default: "black"
         * Example: "red", "#FAC003" ..
         */
        fontColor?: string;
        /**
         * Sets the Font Weight of Legend Text.
         * Default: "normal"
         * Example: "lighter", "normal", "bold" , "bolder"
         */
        fontWeight?: string;
        /**
         * Sets the fontStyle of Legend Text. fontStyle can be set to one of the below options.
         * Default: "normal"
         * Example: "normal", "italic" , "oblique"
         */
        fontStyle?: string;
        /**
         * This property lets you align the Legend Position vertically.
         * Default: "bottom"
         * Example: "top", "center", "bottom"
         */
        verticalAlign?: string;
        /**
         * This property lets you align the Legend Position horizontally.
         * Default: "right"
         * Example: "left", "right", "center"
         */
        horizontalAlign?: string;
        /**
         * Sets the margin between marker and text of each item inside legend.
         * Default: Automatically calculated based on the chart size.
         * Example: 4,12 ..
         */
        markerMargin?: number;
        /**
         * Sets the mouseover event handler for the legend, which is triggered when the user moves the mouse(input device) over a legend item.
         * After the event is triggered, the event related data is passed as a parameter to the assigned event handler. Parameters passed to the function are shown in the Event Object section below.
         * @param event a chart event
         */
        itemmouseover?(event: ChartEvent): void;
        /**
         * Sets the mousemove event handler for the legend, which is triggered when the user moves the mouse(input device) within a legend item.
         * When the event is triggered, the event related data is passed as a parameter to the assigned event handler.
         * Parameters passed to the function are shown in the Event Object section below.
         * @param event a chart event
         */
        itemmousemove?(event: ChartEvent): void;
        /**
         * Sets the mouseout event handler for the legend, which is triggered when the user moves the mouse pointer outside a legend item.
         * After the event is triggered, the event related data is passed as a parameter to the assigned event handler.
         * Parameters passed to the function are shown in the Event Object section below.
         * @param event a chart event
         */
        itemmouseout?(event: ChartEvent): void;
        /**
         * Sets the click event handler for the legend, which is triggered when the user clicks on a legend item.
         * After the event is triggered, the event related data is passed as a parameter to the assigned event handler.
         * Parameters passed to the function are shown in the Event Object section below.
         * @param event a chart event
         */
        itemclick?(event: ChartEvent): void;
        /**
         * Setting reversed property to true shows legend items in reverse order.
         * Default: false;
         * Example: true, false
         */
        reversed?: boolean;
        /**
         * Sets the maximum width of legend. If any item is longer than the maxWidth, it gets wrapped or clipped depending on the itemWrap property. itemWrap is true by default.
         * Whenever items are stacked horizontally, new items are moved to the next row once maxWidth is reached.
         * Default: Automatically calculated based on the chart size.
         * Example: 100, 200, 500 etc.
         */
        maxWidth?: number;
        /**
         * Sets the maximum height of legend. Once the maximum height is reached, remaining legend items are not shown when horizontally stacked (while on top or bottom or plotArea)
         * and a new column is created when items are vertically stacked (when displayed to the left or right of plotArea).
         * Default: Automatically calculated based on chart size.
         * Example: 100,200, 300 etc.
         */
        maxHeight?: number;
        /**
         * Sets the maximum width of individual legend items after which they get wrapped or clipped depending on whether itemWrap is set to true (default) or false.
         * itemMaxWidth can’t be greater than maxWidth of legend.
         * Default: Automatically calculated based on the chart size.
         * Example: 100, 150, 200 etc.
         */
        itemMaxWidth?: number;
        /**
         * Sets the width of individual legend items after which the it gets wrapped or clipped depending on whether itemWrap is set to true (default) or false.
         * itemWidth can’t be greater than itemMaxWidth and maxWidth of legend.
         * Default: Automatically calculated based on chart size.
         * Example: 100, 200, 300 etc.
         */
        itemWidth?: number;
        /**
         * itemWrap specifies whether to wrap or clip legendText once its width crosses itemMaxWidth / maxWidth.
         * Default: true
         * Example: true, false
         */
        itemWrap?: boolean;
        /**
         * A custom formatter function that returns text to be displayed inside individual legend items.
         */
        itemTextFormatter?(e?: { chart: Chart, legend: ChartLegendOptions, dataSeries: ChartDataSeriesOptions, dataPoint: ChartDataPoint }): string;
        /**
         * When dockInsidePlotArea is set to true, legend renders inside the plot area there by giving more space to plot area.
         * Default: false
         * Example: true, false
         */
        dockInsidePlotArea?: boolean;
    }

    interface ChartLegend extends ChartLegendOptions {
        /**
         * Returns the specified property of legend.
         * @param propertyName Name of the property.
         */
        get(propertyName: string): number | string | boolean;
        /**
         * Sets the specified property of legend.
         * @param propertyName Name of the property.
         * @param value Name of the property.
         * @param updateChart When true, Updates the chart automatically after setting the value. Defaults to true.
         */
        set(propertyName: string, value: number | string | boolean, updateChart?: boolean): void;
    }

    interface ChartEvent {
        /**
         * The x value of the item
         */
        x: any;
        /**
         * The y value of the item
         */
        y: number;
        /**
         * The chart object
         */
        chart: Chart;
        /**
         * The datapoint options
         */
        dataPoint: ChartDataPoint;
        /**
         * The data series options
         */
        dataSeries: ChartDataSeriesOptions;
        /**
         * The index of the data point
         */
        dataPointIndex: number;
        /**
         * The index of the data series
         */
        dataSeriesIndex: number;
    }

    interface ChartAxisOptions {
        /**
         * Sets the Axis Title.
         * Default: null
         * Example: "Axis X Title"
         */
        title?: string;
        /**
         * Sets the Font Color of Axis Title. The value of titleFontColor can be a "HTML Color Name" or "hex" code .
         * Default: "#666666"
         * Example: "red", "#006400" .
         */
        titleFontColor?: string;
        /**
         * Sets the Font Size of Axis Title in pixels.
         * Default: 20
         * Example: 16, 25 ..
         */
        titleFontSize?: number;
        /**
         * Sets the Font Family of Axis Title.
         * Default: "arial"
         * Example: "calibri", "tahoma, "verdana" ..
         */
        titleFontFamily?: string;
        /**
         * Sets the Font Weight used in the Axis Title. It can be set to one of the options below.
         * Default: "normal"
         * Options: "lighter", "normal", "bold" , "bolder"
         */
        titleFontWeight?: string;
        /**
         * Sets the Font Style of Axis Title. It can be set to one of the below options.
         * Default: "normal"
         * Options: "normal", "italic" , "oblique"
         */
        titleFontStyle?: string;
        /**
         * This property lets you set margin between chart’s boundary and Axis.
         * Default: 2
         * Example: 8, 10..
         */
        margin?: number;
        /**
         * Sets the color of Axis line. Axis line color can be a "HTML Color Name" or "hex" code .
         * Default: "#BBBBBB"
         * Example: "blue","#21AB13"..
         */
        lineColor?: string;
        /**
         * Sets the Thickness of Axis line in pixels.
         * Default: 2
         * Example: 2, 4..
         */
        lineThickness?: number;
        /**
         * Sets the dash type for axisY.
         * Default: "solid"
         */
        lineDashType?: DashType;
        /**
         * Sets the minimum value of Axis. Values smaller than minimum are clipped. minimum also sets the lower limit while panning chart.
         * Default: Automatically Calculated based on the data.
         * Example: 100, 350..
         */
        minimum?: number;
        /**
         * Sets the maximum value permitted on Axis. Values greater than maximum are clipped. maximum also set the upper limit while panning chart.
         * Default: Automatically Calculated based on the data.
         * Example: 100, 350..
         */
        maximum?: number;
        /**
         * Viewport is the visible range of the axis and viewportMinimum allows you to set its minimum value.
         * This can be used in combination with viewportMaximum in order to zoom into a certain region programmatically.
         * Default: Automatically Calculated based on the data.
         * Example: -100, 350..
         */
        viewportMinimum?: number;
        /**
         * Viewport is the visible range of the axis and viewportMinimum allows you to set its minimum value.
         * This can be used in combination with viewportMaximum in order to zoom into a certain region programmatically.
         * Default: Automatically Calculated based on the data.
         * Example: -100, 350..
         */
        viewportMaximum?: number;
    }

    interface ChartStripLinesOptions {
        /**
         * Sets the point where the stripLine has to be plotted or drawn along the axis X.
         * Default: null
         * Example: 20,30,100,50
         */
        value?: number;
        /**
         * Sets the point where the stripLine’s shaded region begins on the x-axis.
         * Default: null
         * Example: 20,30,100,50
         */
        startValue?: number;
        /**
         * Sets the point where the stripLine’s shaded region ends on the x-axis.
         * Default: null
         * Example: 50,60,200,300
         */
        endValue?: number;
        /**
         * Sets the thickness of the stripLine in pixels.
         * Default: 2
         * Example: 2,4,5,6
         */
        thickness?: number;
        /**
         * Sets the color of the stripLine.
         * Default: "orange"
         * Example: "green", "#23EA23"
         */
        color?: string;
        /**
         * Sets the label of the stripLine. These are shown on top of axis labels.
         * Default: "" (empty string)
         * Example: "Threshold", "Deaths in 1920"
         */
        label?: string;
        /**
         * labelPlacement allows you to place stripline’s Label either inside or outside of plotArea.
         * Default: “inside”
         * Options: “inside”, “outside”
         */
        labelPlacement?: string;
        /**
         * labelAlign allows you to place the stripline’s Label far, center or near the axis.
         * Default: “far”
         * Options: “far”, “center”, “near”
         */
        labelAlign?: string;
        /**
         * Setting labelWrap to true wraps the labels at labelMaxWidth. Clips the same when set to false. It overrides the labelWrap set at axis level.
         * Default: true
         * Example: true, false.
         */
        labelWrap: boolean;
        /**
         * labelMaxWidth defines the maximum width of labels after which they get wrapped or clipped depending on labelWrap’s value.
         * It overrides the labelMaxWidth value set at axis level.
         * Default: Automatically calculated based on the length of label.
         * Example: 4, 20, 100 etc.
         */
        labelMaxWidth: number;
        /**
         * Sets the background color of stripLine’s label.
         * Default: "#eeeeee"
         * Example: "red","#fabd76"
         */
        labelBackgroundColor?: string;
        /**
         * Sets the font-family of stripLine’s label. If the first font is not found in the system from the specified font-family list, it tries to use the next font in the list.
         * Default: "arial"
         * Example: "Arial, Trebuchet MS, Tahoma, sans-serif"
         */
        labelFontFamily?: string;
        /**
         * Sets the font color of label.
         * Default: "orange"
         * Example: "blue","#4135e9"
         */
        labelFontColor?: string;
        /**
         * Sets the font size of the label in pixels.
         * Default: 12
         * Example: 18,19,20,22
         */
        labelFontSize?: number;
        /**
         * Sets the font weight of stripLine’s label.
         * Default: "normal"
         * Example: "lighter","normal","bold","bolder"
         */
        labelFontWeight?: string;
        /**
         * Sets the font style of stripLine’s label.
         * Default: "normal"
         * Example: "normal","italic","oblique"
         */
        labelFontStyle?: string;
        /**
         * stripLine is displayed on top of dataPoints when showOnTop is set to true.
         * Default: false
         * Example: true, false
         */
        showOnTop?: boolean;
        /**
         * Sets the Dash Type for stripLine.
         * Default: solid
         */
        lineDashType?: DashType;
        /**
         * Sets opacity of stripLine.
         * Default: null
         * Example: .1, .5, 1 etc.
         */
        opacity?: number;
        /**
         * A custom formatter function that returns stripLine’s label.
         */
        labelFormatter?(e?: { chart: Chart, axis: ChartAxisYOptions, stripline: ChartStripLinesOptions }): string;
    }

    interface ChartStrip extends ChartStripLinesOptions {
        /**
         * Returns the specified property of stripLines.
         * @param propertyName Name of the property
         */
        get(propertyName: string): number | string | boolean;
        /**
         * Sets the specified property of stripLines.
         * @param propertyName Name of the property.
         * @param value value to be set on property.
         * @param updateChart When true, Updates the chart automatically after setting the value. Defaults to true.
         */
        set(propertyName: string, value: number | string | boolean, updateChart: boolean): void;
        /**
         * Removes specified stripLine from stripLines Array.
         */
        remove(): void;
    }

    interface ChartAxisXOptions extends ChartAxisOptions {
        /**
         * TitleWrap specifies whether to wrap or clip axis title once its width crosses titleMaxWidth.
         * Default: true
         * Options: true, false
         */
        titleWrap?: boolean;
        /**
         * Sets the maximum width of title after which it gets wrapped or clipped depending on whether titleWrap is set to true (default) or false.
         * Default: Automatically calculated based on the length of axis.
         * Example: 100, 200...
         */
        titleMaxWidth?: number;
        /**
         * Sets the Axis Label background color. The value of labelBackgroundColor can be a “HTML Color Name” or “hex” code.
         * Default: “transparent”
         * Example: “red”,”#fabd76″
         */
        labelBackgroundColor?: string;
        /**
         * Sets the maximum width of label after which it gets wrapped or clipped depending on whether labelWrap is set to true (default) or false.
         * Default: Automatically calculated based on the length of label.
         * Example: 4, 20, 100 etc.
         */
        labelMaxWidth?: number;
        /**
         * labelWrap specifies whether to wrap or clip label once its width crosses labelMaxWidth.
         * Default: true
         * Example: true, false
         */
        labelWrap?: boolean;
        /**
         * Setting labelAutoFit to true automatically wraps and/or rotates and/or reduces font size of label when they are too long and overlaps,
         * finds the best-fit and automatically manages label overlapping.
         * Default: true
         * Options: true, false
         */
        labelAutoFit?: boolean;
        /**
         * Sets the angle for Axis Labels.
         * Notes:
         * 1.Units in degrees.
         * 2.Values can be positive or negative.
         * Default: null;
         * Example: 20, 45, -30..
         */
        labelAngle?: number;
        /**
         * Sets the Font Family of Axis labels.
         * Default: “calibri, optima, Candara, Verdana, Geneva, sans-serif”
         * Example: “calibri”, “tahoma”, “verdana” ..
         */
        labelFontFamily?: string;
        /**
         * Sets the Axis Label color. The value of labelFontColor can be a "HTML Color Name" or "hex" code .
         * Default: "grey"
         * Example: "red", "#FAC003" ..
         */
        labelFontColor?: string;
        /**
         * Sets the Axis Label Font Size in pixels.
         * Default: Automatically Calculated based on Chart Size
         * Example: 16, 18, 22..
         */
        labelFontSize?: number;
        /**
         * Set the font Weight used in Axis Labels. It can be set to one of the options below.
         * Default: "normal"
         * Options: "lighter", "normal", "bold" , "bolder"
         */
        labelFontWeight?: string;
        /**
         * Sets the Font Style of Axis Labels. It can be set to one of the below options.
         * Default: "normal"
         * Options: "italic", "oblique", "normal"
         */
        labelFontStyle?: string;
        /**
         * A string that prepends all the labels on axisX.
         * Default: null
         * Example: "$","cat"..
         */
        prefix?: string;
        /**
         * A string that appends all the labels on axisX.
         * Default: null
         * Example: "$","cat"..
         */
        suffix?: string;
        /**
         * Defines how values must be formatted before they appear on Axis X.
         * You can format numbers and date time values using this property.
         * More Detail: https://canvasjs.com/docs/charts/chart-options/axisx/valueformatstring/
         */
        valueFormatString?: string;
        /**
         * Sets the distance between Tick Marks, Grid Lines and Interlaced Colors.
         * Default: Automatically Calculated
         * Example: 50, 75..
         */
        interval?: number;
        /**
         * intervalType is the unit of interval property.
         *  intervalType is by default set to "number" and hence you need to specify the interval type (eg "week", "month", etc) depending on the type of interval you intend to set.
         * If required interval is 3 months, you need to provide interval as 3 and intervalType as "month"
         * Default: Automatically handled when interval property is not set. Defaults to "number" when you set the interval.
         * Option: "number","millisecond" ,"second"," minute", "hour", "day", "month" ,"year"
         * Example: for interval as 15 minutes, set interval as 15, and set intervalType as "minute",
         */
        intervalType?: string;
        /**
         * Setting reversed property to true shows axis in reverse order.
         * Default: false
         * Options: true, false
         */
        reversed?: boolean;
        /**
         * Setting logarithmic property to true changes axis scale to logarithmic scale. Default Logarithm Base is 10 – which you can customize using logarithmBase property.
         * Default: false
         * Options: true, false
         */
        logarithmic?: boolean;
        /**
         * Sets the logarithm base for Axis X. Works only when logarithm property is set to true.
         * Default: 10
         * Options: 2, 16, Math.E, ..
         */
        logarithmBase?: number;
        /**
         * Sets the length of Tick Marks that are drawn on the Axis.
         * Default: 5
         * Example: 10, 14..
         */
        tickLength?: number;
        /**
         * Sets the color of Tick Marks drawn on the axis. The value of tickColor can be a "HTML Color Name" or "hex" code .
         * Default: "#BBBBBB"
         * Example: "red", "#006400".
         */
        tickColor?: string;
        /**
         * Sets the thickness of the Tick Marks in pixels.
         * Default: 2
         * Example: 3, 4..
         */
        tickThickness?: number;
        /**
         * Sets the Interlacing Color that alternates between the set interval.
         * If the interval is not set explicitly, then the auto calculated interval is considered. The value of interlacedColor can be a “HTML Color Name” or “hex” code.
         * Default: null
         * Example: "#F8F1E4", "#FEFDDF"...
         */
        interlacedColor?: string;
        /**
         * Sets the Thickness of Grid Lines. To display grid on Axis X, set the Grid Thickness to a number greater than zero.
         * Default: 0
         * Example: 2,4 ..
         */
        gridThickness?: number;
        /**
         * Sets the Color of Grid Lines. Value of gridColor can be a "HTML Color Name" or "hex" code .
         * Default: "#BBBBBB"
         * Example: "red", "#FEFDDF" ..
         */
        gridColor?: string;
        /**
         * Sets the Dash Type for grid lines on axisX.
         * Default: solid
         */
        gridDashType?: DashType;
        /**
         * A custom formatter function that returns label to be displayed on axisX.
         * Notes:
         * 1.labelFormatter function should return a string.
         * 2.You can use formatNumber and formatDate functions to format number/date values inside the formatter function.
         */
        labelFormatter?(e: { chart: Chart, axis: ChartAxisYOptions, value: number, label: string }): string;
        /**
         * Strip Lines / Trend Lines are vertical or horizontal lines used to highlight/mark a certain region on the plot area.
         * You can choose whether to draw a line at a specific position or shade a region on the plot area. Strip Lines are also referred to as Trend Lines.
         */
        stripLines?: ChartStripLinesOptions | ChartStripLinesOptions[];
    }

    interface ChartAxisX extends ChartAxisXOptions {
        /**
         * Returns the specified property of Axis.
         * @param propertyName Name of the property.
         */
        get(propertyName: string): string | number | boolean;
        /**
         * Sets the specified property of Axis.
         * @param propertyName Name of the property.
         * @param value value to be set on property.
         * @param updateChart When true, Updates the chart automatically after setting the value. Defaults to true.
         */
        set(propertyName: string, value: string | number | boolean, updateChart: boolean): void;
        /**
         * Removes specified axis from axis Array.
         */
        remove(): void;
        /**
         * Adds a new element of given type to the specified array. For example, it can be used to add new stripLine to stripLines array.
         * @param propertyName  Name of the property.
         * @param options  Option for the new element.
         * @param index Index of the array where the new element is to be added. Defaults to the length (end) of array.
         * @param updateChart When true, Updates the chart automatically after setting the value. Defaults to true.
         */
        addTo(propertyName: string, options: ChartStripLinesOptions, index?: number, updateChart?: boolean): void;
        /**
         * Return the pixel coordinate of the given value over axis.
         * @param value Numeric value over Axis
         */
        convertValueToPixel(value: number): number;
        /**
         * Return the value along Axis for given pixel coordinate.
         * @param pixel pixel value over Axis
         */
        convertPixelToValue(pixel: number): number;
    }
    interface ChartAxisYOptions extends ChartAxisXOptions {
        /**
         * When includeZero is set to true, axisY sets the range in such a way that Zero is a part of it. It is set to true by default.
         * But, whenever y values are very big and difference among dataPoints are hard to judge,
         * setting includeZero to false makes axisY to set a range that makes the differences prominently visible.
         * Default: true
         * Example: true, false
         */
        includeZero?: boolean;
    }

    interface ChartAxisY extends ChartAxisYOptions {
        /**
         * Returns the specified property of Axis.
         * @param propertyName Name of the property.
         */
        get(propertyName: string): string | number | boolean;
        /**
         * Sets the specified property of Axis.
         * @param propertyName Name of the property.
         * @param value value to be set on property.
         * @param updateChart When true, Updates the chart automatically after setting the value. Defaults to true.
         */
        set(propertyName: string, value: string | number | boolean, updateChart: boolean): void;
        /**
         * Removes specified axis from axis Array.
         */
        remove(): void;
        /**
         * Adds a new element of given type to the specified array. For example, it can be used to add new stripLine to stripLines array.
         * @param propertyName  Name of the property.
         * @param options  Option for the new element.
         * @param index Index of the array where the new element is to be added. Defaults to the length (end) of array.
         * @param updateChart When true, Updates the chart automatically after setting the value. Defaults to true.
         */
        addTo(propertyName: string, options: ChartStripLinesOptions, index?: number, updateChart?: boolean): void;
        /**
         * Return the pixel coordinate of the given value over axis.
         * @param value Numeric value over Axis
         */
        convertValueToPixel(value: number): number;
        /**
         * Return the value along Axis for given pixel coordinate.
         * @param pixel pixel value over Axis
         */
        convertPixelToValue(pixel: number): number;
    }

    interface ChartToolTipOptions {
        /**
         * While mouse hovers from one dataPoint to another there is a smooth transition in toolTip.
         * This effect can be controlled by animationEnabled Property. Setting it to false, will disable the animation and toolTip will directly switch from one dataPoint to the other.
         * Default: True
         * Example: True, False
         */
        animationEnabled?: boolean;
        /**
         * Enables or Disables the toolTip for the chart.
         * Default: True
         * Example: True, False
         */
        enabled?: boolean;
        /**
         * In a Multi-Series or a Combination Chart, it is often required to display all values common to x value in a single bubble.
         * Setting shared to true will show in a common bubble all the values of y from each series next to their name.
         * Default: True
         * Example: True, False
         */
        shared?: boolean;
        /**
         * Sets the border color around Tool Tip. When not set it takes the color of corresponding dataSeries or dataPoint.
         * Default: dataSeries color/ dataPoint color
         * Example: "red", "#808080"..
         */
        borderColor?: string;
        /**
         * toolTip for entire chart can be set by adding content at toolTip object.
         * content can either be a string or a custom function that returns HTML/String to be displayed inside the toolTip.
         * Default: auto
         */
        content?: string;
        /**
         * Sets the Font Color of toolTipContent. The value of fontColor can be a “HTML Color Name” or “hex” code.
         * Default: “black”
         * Example: “red”, “#FAC003″ ..
         */
        fontColor?: string;
        /**
         * Sets the Font Style of ToolTip Content. It can be set to one of the below options.
         * Default: “italic”
         * Example: “normal”, “italic” , “oblique”
         */
        fontStyle?: string;
        /**
         * Sets the font Size of ToolTip Content in pixels.
         * Default: 14
         * Example: 16,18,22 ..
         */
        fontSize?: number;
        /**
         * Sets the Font Family of ToolTip Content.
         * Default: “Calibri, Arial, Georgia, serif”
         * Example: “arial” , “tahoma”, “verdana” ..
         */
        fontFamily?: string;
        /**
         * Set the font Weight of ToolTip Content.
         * Default: “normal”
         * Example: “lighter”, “normal”, “bold” , “bolder”
         */
        fontWeight?: string;
        /**
         * Sets the thickness of border around the toolTip in pixels. To display border around toolTip, set the borderThickness to a number greater than zero. Setting it to zero removes the border.
         * Default: 2
         * Example: 2,4 ..
         */
        borderThickness?: number;
        /**
         * Setting a value higher than 0 makes the corners of toolTip rounded. Higher the value, more rounded the corners are.
         * Default: 5
         * Options: 2,3,8 ..
         */
        cornerRadius?: number;
        /**
         * Reverses the order in which items inside toolTip are shown.
         * Default: false
         * Example: true, false
         */
        reversed?: boolean;
        /**
         * A custom formatter function that returns the content (text/html) to be displayed inside the toolTip.
         */
        contentFormatter?(e: { chart: Chart, toolTip: ChartToolTipOptions, entries: Array<{ dataPoint: ChartDataPoint, dataSeries: ChartDataSeriesOptions }> }): string;
        /**
         * Sets the background color of toolTip. Values can be “HTML Color Name” or “hex” code.
         * Default: white
         * Example: “red”, “#FF0000” ..
         */
        backgroundColor?: string;
    }

    interface ChartToolTip extends ChartToolTipOptions {
        /**
         * Returns the specified property of legend.
         * @param propertyName Name of the property.
         */
        get(propertyName: string): number | string | boolean;
        /**
         * Sets the specified property of legend.
         * @param propertyName Name of the property.
         * @param value Name of the property.
         * @param updateChart When true, Updates the chart automatically after setting the value. Defaults to true.
         */
        set(propertyName: string, value: number | string | boolean, updateChart?: boolean): void;
    }

    interface ChartDataCommon {
        /**
         * Sets the dataPoint Name. dataPoint name is shown in various places like toolTip & legend unless overridden.
         * Default: Automatically Named ("dataPoint 1", "dataPoint 2" .. )
         * Example: "apple", "mango" ..
         */
        name?: string;
        /**
         * Sets the color of dataSeries. The value of tickColor can be a "HTML Color Name" or "Hex Code".
         * Default: Automatically set from Theme.
         * Example: "red", "green" ..
         */
        color?: string;
        /**
         * Enables or Disables highlighting of dataPoints on mouse hover.
         * Default: true
         * Example: true,false
         */
        highlightEnabled?: boolean;
        /**
         * Instead of setting string values for all indexLabels, you can also use keywords like x, y, etc that will automatically show corresponding properties as indexLabel.
         * This will allow you to define indexLabel at the series level once. While setting indexLabel you specify a keyword by enclosing it in flower brackets like {x}, {y}, {color}, etc.
         * Range Charts have two indexLabels – one for each y value. This requires the use of a special keyword #index to show index label on either sides of the column/bar/area.
         * eg: indexLabel: "{x}: {y[#index]}"
         * Important keywords to keep in mind are. {x}, {y}, {name}, {label}.
         * Default: null
         * Example: "{label}", "Win", "x: {x}, y: {y} "
         */
        indexLabel?: string;
        /**
         * Sets the Dash Type for indexLabel’s line. It is applicable only for pie and doughnut charts when indexLabelPlacement is set to “outside”.
         * For other chart-types, indexLabelLineThickness should be set greater than zero.
         * Default: solid
         */
        indexLabelLineDashType?: DashType;
        /**
         * A custom formatter function which returns the text to be displayed as indexLabel on dataPoints.
         * @param e event object
         */
        indexLabelFormatter?(e: { chart: Chart, dataSeries: ChartDataSeriesOptions, dataPoint: ChartDataPoint, index?: number, total?: number, pencent?: number }): string;
        /**
         * Using this property you can define whether to render indexLabel "inside" or "outside" the dataPoint.
         * Default: "outside"
         * Example: "outside", "inside"
         */
        indexLabelPlacement?: string;
        /**
         * Sets the Orientation of indexLabel to "horizontal" or "vertical".
         * Default: "horizontal"
         * Options: "horizontal", "vertical"
         */
        indexLabelOrientation?: string;
        /**
         * Sets the Background color of Index Labels. The value of indexLabelBackgroundColor can be a "HTML Color Name" or "Hex Code".
         * Default: null
         * Example: "red", "#FAC003" ..
         */
        indexLabelBackgroundColor?: string;
        /**
         * Sets the Index Label’s Font Style. It can be set to one of the below options.
         * Default: "normal"
         * Options: "italic", "oblique", "normal"
         */
        indexLabelFontStyle?: string;
        /**
         * Sets the Index Label’s Font color. The value of IndexLabelFontColor can be a "HTML Color Name" or "Hex Code".
         * Default: "grey"
         * Example: "red", "#FAC003" ..
         */
        indexLabelFontColor?: string;
        /**
         * Sets the Index Label’s Font Size in pixels.
         * Default: 18
         * Example: 12, 16, 22..
         */
        indexLabelFontSize?: number;
        /**
         * Sets the Index Label’s Font Family.
         * Default: "Calibri, Optima, Candara, Verdana, Geneva, sans-serif"
         * Example: "calibri", "tahoma", "verdana"..
         */
        indexLabelFontFamily?: string;
        /**
         * Sets the Index Label’s Font Weight. It can be set to one of the below options.
         * Default: "normal"
         * Example: "lighter", "normal" ,"bold" , "bolder"
         */
        indexLabelFontWeight?: string;
        /**
         * Sets the color of line connecting index labels with their dataPoint. It is only applicable for pie and doughnut chart when indexLabelPlacment is outside.
         * The value of indexLineColor can be a "HTML Color Name" or "Hex Code".
         * Default: "lightgrey"
         * Example: "red", "#FAC003" ..
         */
        indexLabelLineColor?: string;
        /**
         * Sets the thickness of line connecting indexLabel with its corresponding dataPoint.
         * It is only applicable for pie and doughnut chart when indexLabelPlacement is set to "outside".
         * Default: 2
         * Example: 4, 6
         */
        indexLabelLineThickness?: number;
        /**
         * Default Tooltip can be modified at dataSeries or dataPoint level. You can add content to be displayed in toolTip using toolTipContent.
         * toolTipContent set at dataPoint will override toolTipContent set at dataSeries level.
         * Default: auto set depending on chart type.
         */
        toolTipContent?: string;
        /**
         * Sets marker type to be rendered at each dataPoint. While markers are helpful in highlighting individual dataPoints, they do not help much when the dataPoints are crowded.
         * In case of large number of dataPoints it is recommended to disable markers in order to improve the appearance and performance of chart.
         * Same marker type is also used in legend unless overridden by legendMarkerType property.
         * Default: "circle"
         * Options: "none", "circle", "square", "triangle" and "cross"
         */
        markerType?: string;
        /**
         * Sets the color of marker that is displayed on the Chart. Legend Marker for the series uses the same Color as set here unless overridden using legendMarkerColor property.
         * Default: dataSeries Color
         * Example: "red", "#008000" ..
         */
        markerColor?: string;
        /**
         * Sets the Size of the marker that is drawn. To display marker in area Chart, set markerSize to a value greater than zero.
         * For line, scatter chart, size it is automatically set unless overridden.
         * Default: auto. Zero for area chart
         * Example: 5, 10..
         */
        markerSize?: number;
        /**
         * Sets the border color around marker. Value of markerBorderColor can be "HTML Color Name" or "hex code".
         * Default: dataSeries color.
         * Example: "red", "#008000" ..
         */
        markerBorderColor?: string;
        /**
         * Sets the thickness of the Marker’s Border in pixels.
         * Default: 1
         * Example: 2,4 ..
         */
        markerBorderThickness?: number;
        /**
         * Sets the text that describes the dataSeries in legend.
         * Default: "DataSeries 1", "DataSeries 2" ..etc
         * Example: "2010", "2011"..
         */
        legendText?: string;
        /**
         * Sets the Legend Marker to one of the options below. This property is used to override the default marker in legend, which is same as dataSeries Marker Type.
         * Default: same as markerType
         * Options: "circle", "square", "cross" and "triangle"
         */
        legendMarkerType?: string;
        /**
         * Sets the color of marker that is displayed on legend. This property overrides default Marker’s Color in Legend, which is same as dataSeries Marker Color.
         * Value of legendMarkerColor can be "HTML Color Name" or "hex code".
         * Default: dataSeries marker color
         * Example: "red", "#008000" ..
         */
        legendMarkerColor?: string;
        /**
         * Sets the border color around the legend marker. Value of legendMarkerBorderColor can be “color names” or “hex code”.
         * Default: dataSeries color.
         * Example: “red”, “#008000” ..
         */
        legendMarkerBorderColor?: string;
        /**
         * Sets the thickness of the legend’s Marker Border in pixels.
         * Default: 0
         * Example: 2, 4 ..
         */
        legendMarkerBorderThickness?: number;
        /**
         * Sets the click event handler for dataSeries which is triggered when user clicks on a dataSeries.
         * Upon event, a parameter that contains event related data is sent to the assigned event handler.
         * Parameter includes dataPoint and dataSeries corresponding to the event.
         * Default: null
         */
        click?(event: ChartEvent): void;
        /**
         * Sets the mouseover event handler for dataSeries which is triggered when user moves Mouse Over a dataSeries.
         * Upon event, a parameter that contains event related data is sent to the assigned event handler.
         * Parameter includes dataPoint and dataSeries corresponding to the event.
         * Default: null
         */
        mouseover?(event: ChartEvent): void;
        /**
         * Sets the mousemove event handler for dataSeries which is triggered when user Moves mouse on a dataSeries.
         * Upon event, a parameter that contains event related data is sent to the assigned event handler.
         * Parameter includes dataPoint and dataSeries corresponding to the event.
         * Default: null
         */
        mousemove?(event: ChartEvent): void;
        /**
         * Sets the mouseout event handler for dataSeries which is triggered when user moves mouse out of a dataSeries.
         * Upon event, a parameter that contains event related data is sent to the assigned event handler.
         * Parameter includes dataPoint and dataSeries corresponding to the event.
         * Default: null
         */
        mouseout?(event: ChartEvent): void;
    }

    interface ChartDataSeriesOptions extends ChartDataCommon {
        /**
         * Sets the visibility of dataSeries. Data Series is visible by default and you can hide the same by setting visible property to false.
         * Default: true
         * Example: true, false
         */
        visible?: boolean;
        /**
         * Sets the type of chart to be rendered for corresponding dataSeries. One can choose from the following options.
         * Default: "column"
         * Options:
         *     "line"
         *     "column"
         *     "bar"
         *     "area"
         *     "spline"
         *     "splineArea"
         *     "stepLine"
         *     "scatter"
         *     "bubble"
         *     "stackedColumn"
         *     "stackedBar"
         *     "stackedArea"
         *     "stackedColumn100"
         *     "stackedBar100"
         *     "stackedArea100"
         *     "pie"
         *     "doughnut"
         */
        type?: string;
        /**
         * Setting axisXType lets you choose between primary and secondary X Axis for a dataSeries to plot against. By choosing “secondary” Axis you can plot the series against axisX2.
         * In case of Multi-Series or Combinational Charts, one can assign primary axis to some series and secondary axis to other series.
         * This is helpful when dataSeries objects use different unit of measurement or range of data. By default, all series are plotted against primary X axis.
         */
        axisXType?: string;
        /**
         * Setting axisYType lets you choose between primary and secondary Y Axis for a dataSeries to plot against. By choosing "secondary" Axis you can plot the series against axisY2.
         * In case of Multi-Series or Combinational Charts, one can assign primary axis to some series and secondary axis to other series.
         * This is helpful when dataSeries objects use different unit of measurement or range of data. By default, all series are plotted against primary Y axis.
         * Default: "primary"
         * Options: "primary", "secondary"
         */
        axisYType?: string;
        /**
         * Setting axisXIndex lets you choose to which X axis the dataSeries should be attached.
         * In case of Multi-Series or Combinational Charts, one can assign some series to first X axis and rest to another axis.
         * This is helpful when dataSeries objects use different unit of measurement or range of data. By default, all series are plotted against first axis.
         */
        axisXIndex?: number;
        /**
         * Setting axisYIndex lets you choose to which Y axis the dataSeries should be attached to.
         * In case of Multi-Series or Combinational Charts, one can assign some series to first Y axis and rest to another axis.
         * This is helpful when dataSeries objects use different unit of measurement or range of data. By default, all series are plotted against first axis.
         */
        axisYIndex?: number;
        /**
         * This defines the data type of x values. Data Type is normally figured out by default based on the object type that is assigned to x.
         * But if you are providing time stamp (which is integer) values instead of Date objects, you’ll have to explicitly set the xValueType to "dateTime".
         * Default: Automatically Calculated
         * Options: "number", "dateTime"
         */
        xValueType?: string;
        /**
         * Defines how y axis values must be formatted before they appear on the indexLabel or toolTip. You can format numbers and date time values using this property.
         */
        yValueFormatString?: string;
        /**
         * Defines how x axis values must be formatted before they appear on the indexLabel or toolTip. You can format numbers and date time values using this property.
         */
        xValueFormatString?: string;
        /**
         * Defines how z values is formatted before they appear on the indexLabel or toolTip. You can format numbers using this property.
         */
        zValueFormatString?: string;
        /**
         * Defines how percent values are formatted before they appear on the indexLabel or toolTip. You can format percent values using this property.
         */
        percentFormatString?: string;
        /**
         * Sets the bevel property, which creates a chiselled effect at the corners of a Column Charts and Bar Charts.
         * Default: "true"
         * Example: "true", "false"
         */
        bevelEnabled?: boolean;
        /**
         * Sets opacity of the filled color.
         * Default: .7 for Area Charts and 1 for all other chart types.
         */
        fillOpacity?: number;
        /**
         * Sets the starting Angle of the Pie or Doughnut Chart in degrees.
         * Default: 0
         * Example: 30, 240, -100..
         */
        startAngle?: number;
        /**
         * innerRadius property allows you to set a Doughnut chart’s inner radius.
         * Value can either be in pixels (number – ex: 100) or percent (string – ex: “80%”). Percent values are relative to the outer radius of doughnut chart.
         * Default: “70%”
         * Example: 200, 150, “90%”, “75%”
         */
        innerRadius?: number | string;
        /**
         * radius property allows you to set the Pie/Doughnut chart’s (outer) radius.
         * Value can either be in pixels (number – ex: 100) or percent (string – ex: “80%”). Percent values are relative to the plot area’s size.
         * By default, a pie/doughnut chart’s size(radius) changes in order to best fit the indexLabels. This can lead to charts of different sizes in the same page.
         * In order to override this behavior and set equal sizes to all pie/doughnut charts in a page, you can use radius property.
         * Default: Automatically calculate in order to best fit the indexLabels.
         * Example: 200, 150, “90%”, “75%”
         */
        radius?: number | string;
        /**
         * Sets the thickness of line in line charts and area charts.
         * Default: 2
         * Example: 3,4..
         */
        lineThickness?: number;
        /**
         * Setting this property to true makes the dataSeries to appear in legend. In case of pie/ doughnut chart, dataPoints of the single series chart appear in legend.
         * Default: false
         * Options: false, true
         */
        showInLegend?: boolean;
        /**
         * Enables or disables exploding of Pie/Doughnut segment on click.
         * Default: true
         * Options: false, true
         */
        explodeOnClick?: boolean;
        /**
         * In candle Stick chart, when Closing Price is greater than Opening price, the body is filled with white by default and it can be overridden by risingColor property.
         * Default: "white"
         * Options: "red", "#DD7E86", etc.
         */
        risingColor?: string;
        /**
         * It represents collection dataPoint inside dataSeries.
         */
        dataPoints: ChartDataPoint[];
        /**
         * By default, a line breaks wherever a null dataPoint (y = null) is present.
         * You can change this behaviour to draw a line between adjacent non-null dataPoints by setting connectNullData to true.
         * Default: false
         * Example: true, false
         */
        connectNullData?: boolean;
        /**
         * Sets the Line Dash Type for all Line and Area Charts.
         * Default: solid
         */
        lineDashType?: DashType;
        /**
         * Sets the Line Dash Type of line wherever null data is present.
         * Note:
         * 1.Will effect only if connectNullData is set to true.
         * 2.Supported with all Line and Area Charts.
         * 3.Not Supported on IE8.
         * Default: "dash"
         */
        nullDataLineDashType?: DashType;
    }

    interface ChartDataSeries extends ChartDataSeriesOptions {
        /**
         * Returns the specified property of dataSeries
         * @param propertyName Name of the property.
         */
        get(propertyName: string): boolean | string | number | ChartDataPoint;
        /**
         * Sets the specified property of dataSeries.
         * @param propertyName  Name of the property.
         * @param value value to be set on property.
         * @param updateChart When true, Updates the chart automatically after setting the value. Defaults to true.
         */
        set(propertyName: string, value: boolean | string | number | ChartDataPoint, updateChart: boolean): void;
        /**
         * Adds a new element of given type to the specified array. For example, it can be used to add new dataPoint to datPoints array.
         * @param propertyName Name of the property
         * @param options Option for the new element
         * @param index Index of the array where the new element is to be added. Defaults to the length (end) of array.
         * @param updateChart When true, Updates the chart automatically after setting the value. Defaults to true.
         */
        addTo(propertyName: string, options: ChartDataPoint, index?: number, updateChart?: boolean): void;
        /**
         * Removes specified dataSeries from data Array.
         */
        remove(): void;
    }

    interface ChartDataPoint extends ChartDataCommon {
        /**
         * Sets the x value. It determines the position of the dataPoint on X Axis. It can be numeric or a dateTime value. Values can be positive or Negative.
         * If no x value is provided, they are automatically set sequentially starting from zero
         * Default: null
         * Example: 10, 20, 30 ..
         * new Date(2011, 08, 01)
         */
        x?: number | Date;
        /**
         * Sets the y value of dataPoint. It determines the position of dataPoint on Y Axis. Values can be positive or Negative
         * Default: null
         * Example: 5, 20, -30 ..
         */
        y?: number | null;
        /**
         * Sets the z value of dataPoint. It is only applicable in case of Bubble chart. This value determines the size of the bubble.
         * Default: 1
         * Example: 10, 20, 35..
         */
        z?: number;
        /**
         * Sets label value of a dataPoint. The value appears next to the dataPoint on axisX Line. If not provided, it takes x value for label.
         * Default: x value
         * Example: "label1", "label2"..
         */
        label?: string;
        /**
         * Sets the exploded value of dataPoint. It is applicable only in case of Pie and Doughnut Charts. This property causes the Pie/Doughnut slice to separate out.
         * Default: true
         * Example: true, false
         */
        exploded?: boolean;
    }
}
declare function CanvasJS(): void;
export = CanvasJS;
export as namespace CanvasJS;
