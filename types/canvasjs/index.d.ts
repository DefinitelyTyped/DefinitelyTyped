// Type definitions for CanvasJS v1.5.1
// Project: http://canvasjs.com/
// Definitions by: Mark Overholt <https://github.com/mover5>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace CanvasJS {
    class Chart {

        /**
        * The current options of the chart.
        */
        options: ChartOptions;

        /**
        * Initializes a new instance of CanvasJS Chart.
        * @param containerId the DOM ID of the location where the chart is to be rendered
        * @param options the options used to render the chart
        */
        constructor(containerId: string, options?: ChartOptions);

        /**
        * Renders the chart.
        * @param options an optional set of options that will override the constructed values.
        */
        render(options?: ChartOptions): void;
    }

    /**
    * Adds a new chart color set
    * @param the name of the color set
    * @param an array of colors.
    */
    function addColorSet(colorSetName: string, colorSetArray: string[]): void;


    /**
    * Adds a new culture info for your chart
    * @param culture the name of the culture
    * @param the information used by this culture
    */
    function addCultureInfo(culture: string, info: CultureInfo): void;

    interface CultureInfo {
        /**
        * Character used to separate fractional part from the whole number.
        */
        decimalSeparator?: string;
        /**
        * Also referred to as Thousand Separator
        */
        digitGroupSeparator?: string;
        /**
        * Text is shown inside the Button till v1.4
        * v1.5 onwards Text is shown as tooltip.
        */
        zoomText?: string;
        /**
        * Text is shown inside the Button till v1.4
        * v1.5 onwards Text is shown as tooltip.
        */
        panText?: string;
        /**
        * Text is shown inside the Button till v1.4
        * v1.5 onwards Text is shown as tooltip.
        */
        resetText?: string;
        /**
        * Set text is shown instead of Save as PNG.
        */
        savePNGText?: string;
        /**
        * Set text is shown instead of Save as JPG.
        */
        saveJPGText?: string;
        /**
        * Tool Tip for Menu Button.
        */
        menuText?: string;
        /**
        * Day names starting from Sunday. Should be exactly 7 in total.
        */
        days?: string[];
        /**
        * Short Day names starting from Sunday. Should be exactly 7 in total.
        */
        shortDays?: string[];
        /**
        * Month Names starting from January
        */
        months?: string[];
        /**
        * Short Month Names starting from January
        */
        shortMonths?: string[];
    }

    interface ChartOptions {
        /**
        * Enables / Disables Chart interactivity like toolTip, mouse and touch events
        * Default: true
        * Example: false, true
        */
        interactivityEnabled?: boolean;
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
        * Setting zoomEnabled to true enables zooming and panning feature of Chart. This way you can zoom into an area of interest when there is a large amount of data. This will also allow you to pan through the chart. If not set, the property is automatically enabled for large number of dataPoints. You can switch between zooming & panning using the toolbar that appears on the chart. After Zooming in, you can reset the chart by clicking the reset button.
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
        * Sets the colorSet of the Chart. Color Set is an array of colors that are used to render data. Various predefined Color Sets are bundled along with the library. You can either choose from the pre-defined Color Sets or define your own Color Set.
        * Default: "colorset1" or as defined in the selected theme
        * Example: "colorSet1", "colorSet2", "colorSet3"
        */
        colorSet?: string;
        /**
        * CanvasJS allows you to localize various culture / language / country specific elements in the Chart like number formatting style – where you can choose which character to use as a decimal separator and as a digit group separator (also referred to as a thousand separator). By default CanvasJS is set to Neutral English Culture – "en".
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
        * Title allows you to set content, appearance and position of Chart’s Title.
        */
        title: ChartTitleOptions;
        /**
        * Whenever the chart contains multiple dataSeries, it is recommended to represent each dataSeries in a legend. This way it becomes easier for the user to know what exactly is represented by each of the dataSeries. In case of Pie and Doughnut charts, an entry is created for each dataPoint and in rest of the chart types entries are created for each dataSeries.
        * You can selectively show or hide a dataSeries in the Legend using showInLegend property of dataSeries.
        */
        legend?: ChartLegendOptions;
        /**
        * axisX object lets you set various parameters of X Axis like interval, grid lines, etc. It is mostly horizontal, except when we are working with Bar Charts, where axisX is vertical.
        */
        axisX?: ChartAxisXOptions;
        /**
        * axisY object lets you set various parameters of Y Axis like interval, grid lines, etc. It is mostly vertical, except when we are working with Bar Charts, where axisY is horizontal.
        */
        axisY?: ChartAxisYOptions;
        /**
        * toolTip object lets user set behaviour of toolTip at global level like enabling/disabling animation, setting Border Color, sharing toolTip between multiple dataSeries, etc. You can also disable the toolTip by setting enabled property to false.
        */
        toolTip?: ChartToolTipOptions;
        /**
        * data is an array of dataSeries Objects.
        */
        data: ChartDataOptions[];
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
        * Default: Automatically Calculated based on Chart Size
        * Example: 16,18,22 ..
        */
        fontSize?: number;
        /**
        * Sets the Font Family of Chart Title.
        * Default: "Calibri, Optima, Candara, Verdana, Geneva, sans-serif"
        * Example: "arial" , "tahoma", "verdana" ..
        */
        fontFamily?: string;
        /**
        * Sets the Font Weight used in the Chart Title.
        * Default: "bold"
        * Options: "lighter", "normal", "bold" , "bolder"
        */
        fontWeight?: string;
        /**
        * Sets the font color of Chart Title. The value of fontColor can be a "HTML Color Name" or "hex" code .
        * Default: "#3A3A3A"
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
        * Default: 10
        * Example: 4,12 ..
        */
        margin?: number;
        /**
        * This property allows you to set the padding for Chart Title
        * Default: 0
        * Example: 5, 8 ..
        */
        padding?: number;
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
        * Default: 12
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
        * Sets the mouseover event handler for the legend, which is triggered when the user moves the mouse(input device) over a legend item. After the event is triggered, the event related data is passed as a parameter to the assigned event handler. Parameters passed to the function are shown in the Event Object section below.
        * @param event a chart event
        */
        itemmouseover?: (event: ChartEvent) => void;
        /**
        * Sets the mousemove event handler for the legend, which is triggered when the user moves the mouse(input device) within a legend item. When the event is triggered, the event related data is passed as a parameter to the assigned event handler. Parameters passed to the function are shown in the Event Object section below.
        * @param event a chart event
        */
        itemmousemove?: (event: ChartEvent) => void;
        /**
        * Sets the mouseout event handler for the legend, which is triggered when the user moves the mouse pointer outside a legend item. After the event is triggered, the event related data is passed as a parameter to the assigned event handler. Parameters passed to the function are shown in the Event Object section below.
        * @param event a chart event
        */
        itemmouseout?: (event: ChartEvent) => void;
        /**
        * Sets the click event handler for the legend, which is triggered when the user clicks on a legend item. After the event is triggered, the event related data is passed as a parameter to the assigned event handler. Parameters passed to the function are shown in the Event Object section below.
        * @param event a chart event
        */
        itemclick?: (event: ChartEvent) => void;
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
        dataSeries: ChartDataOptions;
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
        * Default: Automatically Calculated based on Chart Size
        * Example: 16, 25 ..
        */
        titleFontSize?: number;
        /**
        * Sets the Font Family of Axis Title.
        * Default: "Calibri, Optima, Candara, Verdana, Geneva, sans-serif"
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
        * Sets the angle for Axis Labels.
        * Default: null
        * Example: 20, 45, -30 ..
        */
        labelAngle?: number;
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
        * Sets the Font Family of Axis labels.
        * Default: "Calibri, Optima, Candara, Verdana, Geneva, sans-serif"
        * Example: "calibri", "tahoma", "verdana" ..
        */
        labelFontFamily?: string;
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
        * Defines how values must be formatted before they appear on Axis X. You can format numbers and date time values using this property. Below you will find descriptive table explaining various specifiers with example.
        */
        valueFormatString?: string;
        /**
        * Sets the distance between Tick Marks, Grid Lines and Interlaced Colors.
        * Default: Automatically Calculated
        * Example: 50, 75..
        */
        interval?: number;
        /**
        * intervalType is the unit of interval property. intervalType is by default set to "number" and hence you need to specify the interval type (eg "week", "month", etc) depending on the type of interval you intend to set. If required interval is 3 months, you need to provide interval as 3 and intervalType as "month"
        * Default: Automatically handled when interval property is not set. Defaults to "number" when you set the interval.
        * Option: "number","millisecond" ,"second"," minute", "hour", "day", "month" ,"year"
        * Example: for interval as 15 minutes, set interval as 15, and set intervalType as "minute",
        */
        intervalType?: string;
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
        lineThickness?: string;
        /**
        * Sets the Interlacing Color that alternates between the set interval. If the interval is not set explicitly, then the auto calculated interval is considered. The value of interlacedColor can be a "HTML Color Name" or "hex" code .
        * Default: null
        * Example: "#F8F1E4", "#FEFDDF" ….
        */
        interlaceColor?: string;
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
        * Sets the Interlacing Color that alternates between the set interval.
        * If the interval is not set explicitly, then the auto calculated interval is considered.
        * The value of interlacedColor can be an "HTML Color Name" or "hex" code.
        * Default: null
        * Example: "#F8F1E4", "#FEFDDF"
        */
        interlacedColor?: string;

        /**
        * Strip Lines are vertical or horizontal lines used to highlight/mark a certain region on the plot area. You can choose whether to draw a line at a specific position or shade a region on the plot area. Strip Lines are sometimes referred to as trend lines.
        * If you want to just mark a certain position on the axis, you can set the value attribute and it’ll draw a line at that position with the set thickness. If you want to shade a region instead, you need to set startValue and endValue attributes. This will fill the area within the specified range.
        * In the case you set startValue and endValue attributes, value and thickness attributes are ignored (as either a single thread of line can exist, or a shaded region between two given points).
        * Strip Lines can be displayed using AxisX or AxisY’s stripLines array. This allows you to have one or more strip lines on both x & y axis.
        */
        stripLines?: ChartStripLines;
    }

    interface ChartStripLines {
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
    }

	interface ChartAxisXOptions extends ChartAxisOptions {
		/**
        * Sets the minimum value of Axis. Values smaller than minimum are clipped.
        * Default: Automatically Calculated based on the data
        * Example: 100, 350..
        */
        minimum?: number | Date;
        /**
        * Sets the maximum value permitted on Axis. Values greater than maximum are clipped.
        * Default: Automatically Calculated based on the data
        * Example: 100, 350..
        */
        maximum?: number | Date;
	}
	
    interface ChartAxisYOptions extends ChartAxisOptions {
        /**
        * When includeZero is set to true, axisY sets the range in such a way that Zero is a part of it. It is set to true by default. But, whenever y values are very big and difference among dataPoints are hard to judge, setting includeZero to false makes axisY to set a range that makes the differences prominently visible.
        * Default: true
        * Example: true, false
        */
        includeZero?: boolean;
		
		/**
        * Sets the minimum value of Axis. Values smaller than minimum are clipped.
        * Default: Automatically Calculated based on the data
        * Example: 100, 350..
        */
        minimum?: number;
        /**
        * Sets the maximum value permitted on Axis. Values greater than maximum are clipped.
        * Default: Automatically Calculated based on the data
        * Example: 100, 350..
        */
        maximum?: number;
    }

    interface ChartToolTipOptions {
        /**
        * Enables or Disables the toolTip for the chart.
        * Default: True
        * Example: True, False
        */
        enabled?: boolean;
        /**
        * In a Multi-Series or a Combination Chart, it is often required to display all values common to x value in a single bubble. Setting shared to true will show in a common bubble all the values of y from each series next to their name.
        * Default: True
        * Example: True, False
        */
        shared?: boolean;
        /**
        * toolTip for entire chart can be set by adding content at toolTip object. content can either be a string or a custom function that returns HTML/String to be displayed inside the toolTip.
        * Default: auto
        */
        content?: string;
        /**
        * While mouse hovers from one dataPoint to another there is a smooth transition in toolTip. This effect can be controlled by animationEnabled Property. Setting it to false, will disable the animation and toolTip will directly switch from one dataPoint to the other.
        * Default: True
        * Example: True, False
        */
        animationEnabled?: boolean;
        /**
        * Sets the border color around Tool Tip. When not set it takes the color of corresponding dataSeries or dataPoint.
        * Default: dataSeries color/ dataPoint color
        * Example: "red", "#808080"..
        */
        borderColor?: string;
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
        * Instead of setting string values for all indexLabels, you can also use keywords like x, y, etc that will automatically show corresponding properties as indexLabel. This will allow you to define indexLabel at the series level once. While setting indexLabel you specify a keyword by enclosing it in flower brackets like {x}, {y}, {color}, etc.
        * Range Charts have two indexLabels – one for each y value. This requires the use of a special keyword #index to show index label on either sides of the column/bar/area.
        * eg: indexLabel: "{x}: {y[#index]}"
        * Important keywords to keep in mind are. {x}, {y}, {name}, {label}.
        * Default: null
        * Example: "{label}", "Win", "x: {x}, y: {y} "
        */
        indexLabel?: string;
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
        * Sets the color of line connecting index labels with their dataPoint. It is only applicable for pie and doughnut chart when indexLabelPlacment is outside. The value of indexLineColor can be a "HTML Color Name" or "Hex Code".
        * Default: "lightgrey"
        * Example: "red", "#FAC003" ..
        */
        indexLabelLineColor?: string;
        /**
        * Sets the thickness of line connecting indexLabel with its corresponding dataPoint. It is only applicable for pie and doughnut chart when indexLabelPlacement is set to "outside".
        * Default: 2
        * Example: 4, 6
        */
        indexLabelLineThickness?: string;
        /**
        * Default Tooltip can be modified at dataSeries or dataPoint level. You can add content to be displayed in toolTip using toolTipContent. toolTipContent set at dataPoint will override toolTipContent set at dataSeries level.
        * Default: auto set depending on chart type.
        */
        toolTipContent?: string;
        /**
        * Sets marker type to be rendered at each dataPoint. While markers are helpful in highlighting individual dataPoints, they do not help much when the dataPoints are crowded. In case of large number of dataPoints it is recommended to disable markers in order to improve the appearance and performance of chart.
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
        * Sets the Size of the marker that is drawn. To display marker in area Chart, set markerSize to a value greater than zero. For line, scatter chart, size it is automatically set unless overridden.
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
        * Sets the click event handler for dataSeries which is triggered when user clicks on a dataSeries. Upon event, a parameter that contains event related data is sent to the assigned event handler. Parameter includes dataPoint and dataSeries corresponding to the event.
        * Default: null
        */
        click?: (event: ChartEvent) => void;
        /**
        * Sets the color of marker that is displayed on legend. This property overrides default Marker’s Color in Legend, which is same as dataSeries Marker Color. Value of legendMarkerColor can be "HTML Color Name" or "hex code".
        * Default: dataSeries marker color
        * Example: "red", "#008000" ..
        */
        legendMarkerColor?: string;
        /**
        * Sets the mouseover event handler for dataSeries which is triggered when user moves Mouse Over a dataSeries. Upon event, a parameter that contains event related data is sent to the assigned event handler. Parameter includes dataPoint and dataSeries corresponding to the event.
        * Default: null
        */
        mouseover?: (event: ChartEvent) => void;
        /**
        * Sets the mousemove event handler for dataSeries which is triggered when user Moves mouse on a dataSeries. Upon event, a parameter that contains event related data is sent to the assigned event handler. Parameter includes dataPoint and dataSeries corresponding to the event.
        * Default: null
        */
        mousemove?: (event: ChartEvent) => void;
        /**
        * Sets the mouseout event handler for dataSeries which is triggered when user moves mouse out of a dataSeries. Upon event, a parameter that contains event related data is sent to the assigned event handler. Parameter includes dataPoint and dataSeries corresponding to the event.
        * Default: null
        */
        mouseout?: (event: ChartEvent) => void;
    }

    interface ChartDataOptions extends ChartDataCommon {
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
        * Setting axisYType lets you choose between primary and secondary Y Axis for a dataSeries to plot against. By choosing "secondary" Axis you can plot the series against axisY2.
        * In case of Multi-Series or Combinational Charts, one can assign primary axis to some series and secondary axis to other series.
        * This is helpful when dataSeries objects use different unit of measurement or range of data. By default, all series are plotted against primary Y axis.
        * Default: "primary"
        * Options: "primary", "secondary"
        */
        axisYType?: string;
        /**
        * This defines the data type of x values. Data Type is normally figured out by default based on the object type that is assigned to x. But if you are providing time stamp (which is integer) values instead of Date objects, you’ll have to explicitly set the xValueType to "dateTime".
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
        * In candle Stick chart, when Closing Price is greater than Opening price, the body is filled with white by default and it can be overridden by risingColor property.
        * Default: "white"
        * Options: "red", "#DD7E86", etc.
        */
        risingColor?: string;
        /**
        * It represents collection dataPoint inside dataSeries .
        */
        dataPoints: ChartDataPoint[];
    }

    interface ChartDataPoint extends ChartDataCommon {
        /**
        * Sets the x value. It determines the position of the dataPoint on X Axis. It can be numeric or a dateTime value. Values can be positive or Negative.
        * Default: null
        * Example: 10, 20, 30 ..
        * new Date(2011, 08, 01)
        */
        x?: any;
        /**
        * Sets the y value of dataPoint. It determines the position of dataPoint on Y Axis. Values can be positive or Negative
        * Default: null
        * Example: 5, 20, -30 ..
        */
        y?: number;
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
        /**
        * Sets the color of marker that is displayed on legend. This property works only with Pie and Doughnut charts. Value of legendMarkerColor can be "HTML Color Name" or "hex" code.
        * Default: dataSeries marker color
        * Example: "red", "#008000"..
        */
        legendMarkerColor?: string;
    }
}
