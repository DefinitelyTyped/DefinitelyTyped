// Type definitions for amCharts 3.21
// Project: http://www.amcharts.com/
// Definitions by: aleksey-bykov <https://github.com/aleksey-bykov>
//                 ldrick <https://github.com/ldrick>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// AmCharts object (it's not a class) is create automatically when amcharts.js or amstock.js file is included in a web page.
export namespace AmCharts {
    /** Set it to true if you have base href set for your page. This will fix rendering problems in Firefox caused by base href. */
    let baseHref: boolean;

    /** Array of day names, used when formatting dates (if categoryAxis.parseDates is set to true) ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] */
    let dayNames: string[];

    /** Array of month names, used when formatting dates (if categoryAxis.parseDates is set to true) ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] */
    let monthNames: string[];

    /** Array of short versions of day names, used when formatting dates (if categoryAxis.parseDates is set to true) ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] */
    let shortDayNames: string[];

    /** Array of short versions of month names, used when formatting dates (if categoryAxis.parseDates is set to true) ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] */
    let shortMonthNames: string[];

    /** Set it to true if you want UTC time to be used instead of local time. */
    let useUTC: boolean;

    /** Object with themes */
    let themes: any;

    /** Clears all the charts on page, removes listeners and intervals. */
    function clear(): void;

    /** Handle ready event */
    function ready(f: Function): void;

    /** Create chart by params. */
    function makeChart(selector: string, params: any, delay?: number): AmChart;

    /** Set a method to be called before initializing the chart.
     * When the method is called, the chart instance is passed as an attribute.
     * You can use this feature to preprocess chart data or do some other things you need
     * before initializing the chart.
     * @param handler - The method to be called.
     * @param types - Which chart types should call this method. Defaults to all
     * if none is passed.
     */
    function addInitHandler(handler: Function, types: string[]): any;

    /** AmPieChart class creates pie/donut chart. In order to display pie chart you need to set at least three properties - dataProvider, titleField and valueField.
        @example
            let chartData = [{title:"Pie I have eaten",value:70},{title:"Pie I haven\'t eaten",value:30}];
            let chart = new AmCharts.AmPieChart();
            chart.valueField = "value";
            chart.titleField = "title";
            chart.dataProvider = chartData;
            chart.write("chartdiv");
    */
    class AmPieChart extends AmChart {
        /** Name of the field in chart's dataProvider which holds slice's alpha. */
        alphaField: string;
        /** Pie lean angle (for 3D effect). Valid range is 0 - 90. */
        angle: number;
        /** Balloon text. The following tags can be used: [[value]], [[title]], [[percents]], [[description]]. [[title]]: [[percents]]% ([[value]])\n[[description]] */
        balloonText: string;
        /** Read-only. Array of Slice objects. */
        chartData: any[];
        /** Name of the field in chart's dataProvider which holds slice's color. */
        colorField: string;
        /** Specifies the colors of the slices, if the slice color is not set. If there are more slices than colors in this array, the chart picks random color. ["#FF0F00", "#FF6600", "#FF9E01", "#FCD202", "#F8FF01", "#B0DE09", "#04D215", "#0D8ECF", "#0D52D1", "#2A0CD0", "#8A0CCF", "#CD0D74", "#754DEB", "#DDDDDD", "#999999", "#333333", "#000000", "#57032A", "#CA9726", "#990000", "#4B0C25"] */
        colors: any[];
        /** Depth of the pie (for 3D effect). */
        depth3D: number;
        /** Name of the field in chart's dataProvider which holds a string with description. */
        descriptionField: string;
        /** Example: [-0.2,0.2]. Will make slices to be filled with color gradients. */
        gradientRatio: number[];
        /** Opacity of the group slice. Value range is 0 - 1.
            @default 1
        */
        groupedAlpha: number;
        /** Color of the group slice. The default value is not set - this means the next available color from "colors" array will be used. */
        groupedColor: string;
        /** Description of the group slice. */
        groupedDescription: string;
        /** If this is set to true, the group slice will be pulled out when the chart loads. */
        groupedPulled: boolean;
        /** Title of the group slice. Other */
        groupedTitle: string;
        /** If there is more than one slice whose percentage of the pie is less than this number, those slices will be grouped together into one slice. This is the "other" slice. It will always be the last slice in a pie. */
        groupPercent: number;
        /** Slices with percent less then hideLabelsPercent won't display labels This is useful to avoid cluttering up the chart, if you have a lot of small slices. 0 means all labels will be shown. */
        hideLabelsPercent: number;
        /** Opacity of a hovered slice. Value range is 0 - 1.
            @default 1
        */
        hoverAlpha: number;
        /** Inner radius of the pie, in pixels or percents. */
        innerRadius: any;
        /** The distance between the label and the slice, in pixels. You can use negative values to put the label on the slice.
            @default 30
        */
        labelRadius: number;
        /** Name of the field in dataProvider which specifies the length of a tick. Note, the chart will not try to arrange labels automatically if this property is set. */
        labelRadiusField: string;
        /** Specifies whether data labels are visible.
            @default true
        */
        labelsEnabled: boolean;
        /** Label text. The following tags can be used: [[value]], [[title]], [[percents]], [[description]]. [[title]]: [[percents]]% */
        labelText: string;
        /** Label tick opacity. Value range is 0 - 1. 0.2 */
        labelTickAlpha: number;
        /** Label tick color. #000000 */
        labelTickColor: string;
        /** Bottom margin of the chart.
            @default 5
        */
        marginBottom: number;
        /** Left margin of the chart. */
        marginLeft: number;
        /** Right margin of the chart. */
        marginRight: number;
        /** Top margin of the chart.
            @default 5
        */
        marginTop: number;
        /** Minimum radius of the pie, in pixels.
            @default 10
        */
        minRadius: number;
        /** Pie outline opacity. Value range is 0 - 1. */
        outlineAlpha: number;
        /** Pie outline color. #FFFFFF */
        outlineColor: string;
        /** Pie outline thickness.
            @default 1
        */
        outlineThickness: number;
        /** Opacity of the slices. You can set the opacity of individual slice too.
            @default 1
        */
        pieAlpha: number;
        /** Color of the first slice. All the other will be colored with darker or brighter colors. */
        pieBaseColor: string;
        /** Lightness increase of each subsequent slice. This is only useful if pieBaseColor is set. Use negative values for darker colors. Value range is from -255 to 255.
            @default 30*/
        pieBrightnessStep: number;
        /** You can set fixed position of a pie center, in pixels or in percents. */
        pieX: any;
        /** You can set fixed position of a pie center, in pixels or in percents. */
        pieY: any;
        /** Name of the field in chart's dataProvider which holds a boolean value telling the chart whether this slice must be pulled or not. */
        pulledField: string;
        /** Pull out duration, in seconds.
            @default 1
        */
        pullOutDuration: number;
        /** Pull out effect. Possible values are ">", "<", elastic" and "bounce". bounce */
        pullOutEffect: string;
        /** If this is set to true, only one slice can be pulled out at a time. If the viewer clicks on a slice, any other pulled-out slice will be pulled in. */
        pullOutOnlyOne: boolean;
        /** Pull out radius, in pixels or percents 0.2 */
        pullOutRadius: any;
        /** Radius of a pie, in pixels or percents. By default, radius is calculated automatically. */
        radius: any;
        /** Specifies whether the animation should be sequenced or all slices should appear at once. */
        sequencedAnimation: boolean;
        /** Initial opacity of all slices. If you set startDuration higher than 0, slices will fade in from startAlpha.
            @default 1
        */
        startAlpha: number;
        /** Angle of the first slice, in degrees. This will work properly only if "depth3D" is set to 0. If "depth3D" is greater than 0, then there can be two angles only: 90 and 270. Value range is 0-360.
            @default 90
        */
        startAngle: number;
        /** Duration of the animation, in seconds.
            @default 1
        */
        startDuration: number;
        /** Animation effect. Possible values are ">", "<", "elastic" and "bounce". bounce */
        startEffect: string;
        /** Radius of the positions from which the slices will fly in.
            default 5
        */
        startRadius: any;
        /** Name of the field in chart's dataProvider which holds slice's title. */
        titleField: string;
        /** Name of the field in chart's dataProvider which holds url which would be accessed if the user clicks on a slice. */
        urlField: string;
        /** If url is specified for a slice, it will be opened when user clicks on it. urlTarget specifies target of this url. Use _blank if you want url to be opened in a new window. _self */
        urlTarget: string;
        /** Name of the field in chart's dataProvider which holds slice's value. */
        valueField: string;
        /** Name of the field in chart's dataProvider which holds boolean variable defining whether this data item should have an entry in the legend. */
        visibleInLegendField: string;

        /** You can trigger the animation of the pie chart. */
        animateAgain(): void;
        /** You can trigger the click on a slice from outside. index - the number of a slice or Slice object. */
        clickSlice(index: number): void;
        /** Hides slice. index - the number of a slice or Slice object. */
        hideSlice(index: number): void;
        /** You can simulate roll-out of a slice from outside. index - the number of a slice or Slice object. */
        rollOutSlice(index: number): void;
        /** You can simulate roll-over a slice from outside. index - the number of a slice or Slice object. */
        rollOverSlice(index: number): void;
        /** Shows slice. index - the number of a slice or Slice object. */
        showSlice(index: number): void;

        /** Adds event listener of the type "clickSlice" or "pullInSlice" or "pullOutSlice" to the object.
            @param type Always "clickSlice" or "pullInSlice" or "pullOutSlice".
            @param handler
                If the type is "clickSlice", dispatched when user clicks on a slice.
                If the type is "pullInSlice", dispatched when user clicks on a slice and the slice is pulled-in.
                If the type is "pullOutSlice", dispatched when user clicks on a slice and the slice is pulled-out.
                If the type is "rollOutSlice", dispatched when user rolls-out of the slice.
                If the type is "rollOverSlice", dispatched when user rolls-over the slice.
        */
        addListener(type: string, handler: (e: {/** Always "rollOverSlice". */
            type: string; dataItem: Slice; chart: AmChart;
        }) => void): void;
    }

    /** AmRadarChart is the class you have to use for radar and polar chart types.
        @example
    let chart;
    let chartData = [
        {country:"Czech Republic",litres:156.90},
        {country:"Ireland",litres:131.10},
        {country:"Germany",litres:115.80},
        {country:"Australia",litres:109.90},
        {country:"Austria",litres:108.30},
        {country:"UK",litres:99.00}
    ];

    window.onload = function() {
      chart = new AmCharts.AmRadarChart();
      chart.dataProvider = chartData;
      chart.categoryField = "country";
      chart.startDuration = 2;

      let valueAxis = new AmCharts.ValueAxis();
      valueAxis.axisAlpha = 0.15;
      valueAxis.minimum = 0;
      valueAxis.dashLength = 3;
      valueAxis.axisTitleOffset = 20;
      valueAxis.gridCount = 5;
      chart.addValueAxis(valueAxis);

      let graph = new AmCharts.AmGraph();
      graph.valueField = "litres";
      graph.bullet = "round";
      graph.balloonText = "[[value]] litres of beer per year"
      chart.addGraph(graph);

      chart.write("chartdiv");
    }
    */
    class AmRadarChart extends AmCoordinateChart {
        /** Bottom margin of the chart. */
        marginBottom: number;
        /** Left margin of the chart. */
        marginLeft: number;
        /** Right margin of the chart. */
        marginRight: number;
        /** Top margin of the chart. */
        marginTop: number;
        /** Radius of a radar. 0.35 */
        radius: any;
    }

    /** AmXYChart is the class you have to use for XY/Bubble/Scatter chart types. The chart supports simple and logarithmic scales, it can have multiple value axes.
        @example
            let chartData = [
                {x:10, y:14, value:59},
                {x:5, y:3, value:50},
                {x:-10, y:-3, value:19},
                {x:-6, y:5, value:65},
                {x:15, y:-4, value:92},
                {x:13, y:1, value:8},
                {x:1, y:6, value:35}
            ];

            let chart = new AmCharts.AmXYChart();
            chart.pathToImages = "../../amcharts/javascript/images/";
            chart.dataProvider = chartData;
            chart.marginLeft = 35;
            chart.startDuration = 1.5;

            let xAxis = new AmCharts.ValueAxis();
            xAxis.position = "left";
            xAxis.autoGridCount = true;
            chart.addValueAxis(xAxis);

            let yAxis = new AmCharts.ValueAxis();
            yAxis.position = "bottom";
            yAxis.autoGridCount = true;
            chart.addValueAxis(yAxis);

            let graph = new AmCharts.AmGraph();
            graph.valueField = "value";
            graph.xField = "x";
            graph.yField = "y";
            graph.lineAlpha = 0;
            graph.bullet = "round";
            chart.addGraph(graph);

            let chartCursor = new AmCharts.ChartCursor();
            chart.addChartCursor(chartCursor);

            let chartScrollbar = new AmCharts.ChartScrollbar();
            chartScrollbar.hideResizeGrips = false;
            chart.addChartScrollbar(chartScrollbar);

            chart.write("chartdiv);
    */
    class AmXYChart extends AmRectangularChart {
        /** Specifies if Scrollbar of X axis (horizontal) should be hidden. */
        hideXScrollbar: boolean;
        /** Specifies if Scrollbar of Y axis (vertical) should be hidden. */
        hideYScrollbar: boolean;
        /** Maximum zoom factor of the chart.
            @default 20
        */
        maxZoomFactor: number;
        /** Zooms out, charts shows all available data.*/
        zoomOut(): void;
    }
    /** Guides are straight vertical or horizontal lines or areas supported by AmSerialChart, AmXYChart and AmRadarChart. You can have guides both on value and category axes. To add/remove a guide to an axis, use axis.addGuide(guide)/axis.removeGuide(guide) methods.

If you do not set properties such as dashLength, lineAlpha, lineColor, etc - values of the axis are used.*/
    class Guide {
        /** If you set it to true, the guide will be displayed above the graphs. */
        above: boolean;
        /** Radar chart only. Specifies angle at which guide should start. Affects only fills, not lines. */
        angle: number;
        /** Baloon fill color. */
        balloonColor: string;
        /** The text which will be displayed if the user rolls-over the guide. */
        balloonText: string;
        /** Specifies if label should be bold or not. */
        boldLabel: boolean;
        /** Category of the guide (in case the guide is for category axis). */
        category: string;
        /** Dash length. */
        dashLength: number;
        /** Date of the guide (in case the guide is for category axis and parseDates is set to true). */
        date: Date;
        /** Works if a guide is added to CategoryAxis and this axis is non-date-based. If you set it to true, the guide will start (or be placed, if it's not a fill) on the beginning of the category cell and will end at the end of toCategory cell. */
        expand: boolean;
        /** Fill opacity. Value range is 0 - 1. */
        fillAlpha: number;
        /** Fill color. */
        fillColor: string;
        /** Font size of guide label. */
        fontSize: string;
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
        /** Position of guide label. Possible values are "left" or "right" for horizontal axis and "top" or "bottom" for vertical axis.  */
        position: string;
        /** Tick length. */
        tickLength: number;
        /** Radar chart only. Specifies angle at which guide should end. Affects only fills, not lines. */
        toAngle: number;
        /** To category of the guide (in case the guide is for category axis). */
        toCategory: string;
        /** To date of the guide (in case the guide is for category axis and parseDates is set to true) If you have both date and toDate, the space between these two dates can be filled with color. */
        toDate: Date;
        /** To value of the guide (in case the guide is for value axis). */
        toValue: number;
        /** Value of the guide (in case the guide is for value axis). */
        value: number;
        /** Value axis of a guide. As you can add guides directly to the chart, you might need to specify which which value axis should be used. */
        valueAxis: ValueAxis;
    }
    /** ImagesSettings is a class which holds common settings of all MapImage objects. */
    class ImagesSettings {
        /** Opacity of the image.
            @default 1
        */
        alpha: number;
        /** Text which is displayed in a roll-over balloon. You can use the following tags: [[title]], [[description]], [[value]] and [[percent]]. [[title]] */
        balloonText: string;
        /** Specifies if the image's center should be placed in the provided coordinates. If false, top-left corner will be at provided coordinates.
            @default true
        */
        centered: boolean;
        /** Color of image. This will affect only predefined images (with "type" property set) and images with svgPath set. This property won't affect bitmap images and loaded SVG images. #000000 */
        color: string;
        /** Height of a description window. */
        descriptionWindowHeight: number;
        /** Width of a description window.
            @default 250
        */
        descriptionWindowWidth: number;
        /** X position of a description window. */
        descriptionWindowX: number;
        /** Y position of a description window. */
        descriptionWindowY: number;
        /** Label color. #000000 */
        labelColor: string;
        /** Font size of a label.
            @default 11
        */
        labelfontSize: string;
        /** Position of the label. Allowed values are: left, right, top, bottom and middle. right */
        labelPosition: string;
        /** Label roll-over color. #00CC00 */
        labelRollOverColor: string;
        /** Opacity of image outline. This will affect only predefined images (with "type" property set) and images with svgPath set. This property won't affect bitmap images and loaded SVG images. */
        outlineAlpha: number;
        /** Color of image outline. This will affect only predefined images (with "type" property set) and images with svgPath set. This property won't affect bitmap images and loaded SVG images. */
        outlineColor: string;
        /** Thickness of image outline. This will affect only predefined images (with "type" property set) and images with svgPath set. This property won't affect bitmap images and loaded SVG images.
            @default 1
        */
        outlineThickness: number;
        /** Color of image when hovered. This will affect only predefined images (with "type" property set) and images with svgPath set. This property won't affect bitmap images and loaded SVG images. */
        rollOverColor: string;
        /** Scale of the image when hovered. Use value like 1.5 - 2 to enlarge image when user rolls-over it.
            @default 1
        */
        rollOverScale: number;
        /** Scale of the image if it is selected. Use value like 1.5 - 2 to enlarge selected image.
            @default 1
        */
        selectedScale: number;
    }

    /** AreasSettings is a class which holds common settings of all MapArea objects. */
    class AreasSettings {
        /** Opacity of areas.
            @default 1
        */
        alpha: number;
        /** Specifies if the areas should be zoomed-in when user clicks on them, event if zoom properties are not set. */
        autoZoom: boolean;
        /** Text which is displayed in a roll-over balloon. You can use the following tags: [[title]], [[description]], [[value]] and [[percent]] [[title]] */
        balloonText: string;
        /** Color of the areas. #FFCC00 */
        color: string;
        /** Color of area with highest value. Colors for areas with values less then highest will be colored with intermediate colors between color and colorSolid. Use colorSteps property of AmMap to change the number of intermediate colors. #990000 */
        colorSolid: string;
        /** Height of a description window. */
        descriptionWindowHeight: number;
        /** Width of a description window.
            @default 250
        */
        descriptionWindowWidth: number;
        /** X position of a description window. */
        descriptionWindowX: number;
        /** Y position of a description window. */
        descriptionWindowY: number;
        /** Opacity of area's outline.
            @default 1
        */
        outlineAlpha: number;
        /** Color of area's outline. #FFFFFF */
        outlineColor: string;
        /** Thickness of area's outline. 0.5 */
        outlineThickness: number;
        /** Color of area when user rolls-over it. undefined */
        rollOverColor: string;
        /** Color of area's outline when user rolls-over it. #CC0000 */
        rollOverOutlineColor: string;
        /** Color of area which is currently selected. #CC0000 */
        selectedColor: string;
        /** Opacity of all areas which are in the map svg file, but not listed as areas in DataSet.
            @default 1
        */
        unlistedAreasAlpha: number;
        /** Color of all areas which are in the map svg file, but not listed as areas in DataSet. #DDDDDD */
        unlistedAreasColor: string;
        /** Opacity of all areas' outline which are in the map svg file, but not listed as areas in DataSet.
            @default 1
        */
        unlistedAreasOutlineAlpha: number;
        /** Color of all areas' outline which are in the map svg file, but not listed as areas in DataSet. #FFFFFF */
        unlistedAreasOutlineColor: string;
    }

    /** Slice is an item of AmPieChart's chartData Array and holds all the information about the slice. When working with a pie chart, you do not create slices or change it's properties directly, instead you set array of data using dataProvider property. Consider properties of a Slice read-only - change values in chart's data provider if you need to. */
    class Slice {
        /** Opacity of a slice. */
        alpha: number;
        /** Color of a slice. */
        color: string;
        /** Original object from data provider. */
        dataContext: Object;
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

    /** AmStockChart is a main class Stock chart. */
    class AmStockChart {
        /** Specifies if animation was already played. Animation is only played once, when chart is rendered for the first time. If you want the animation to be repeated, set this property to false. */
        animationPlayed: boolean;
        /** Balloon object. */
        balloon: AmBalloon;
        /** Settings for category axes. */
        categoryAxesSettings: CategoryAxesSettings;
        /** Indicates if the chart is created. */
        chartCreated: boolean;
        /** Chart cursor settings. */
        chartCursorSettings: ChartCursorSettings;
        /** Chart scrollbar settings. */
        chartScrollbarSettings: ChartScrollbarSettings;
        /** Array of colors used by data sets if no color was set explicitly on data set itself. #FF6600, "#FCD202", "#B0DE09", "#0D8ECF", "#2A0CD0", "#CD0D74", "#CC0000", "#00CC00", "#0000CC", "#DDDDDD", "#999999", "#333333", "#990000" */
        colors: any[];
        /** Array of data sets selected for comparing. */
        comparedDataSets: any[];
        /** Array of DataSets. */
        dataSets: any[];
        /** DataSetSelector object. You can add it if you have more than one data set and want users to be able to select/compare them. */
        dataSetSelector: DataSetSelector;
        /** Current end date of the selected period, get only. To set start/end dates, use stockChart.zoom(startDate, endDate) method. */
        endDate: Date;
        /** Defines on which day week starts. 0 - Sunday, 1 - Monday..
            @default 1 */
        firstDayOfWeek: number;
        /** If set to true the scope of the data view will be set to the end after data update. */
        glueToTheEnd: boolean;
        /** Legend settings. */
        legendSettings: LegendSettings;
        /** Data set selected as main. */
        mainDataSet: DataSet;
        /** Array of StockPanels (charts). */
        panels: any[];
        /** Settings for stock panels. */
        panelsSettings: PanelsSettings;
        /** Period selector object. You can add it if you want user's to be able to enter date ranges or zoom chart with predefined period buttons. */
        periodSelector: PeriodSelector;
        /** Scrollbar's chart object, get only. */
        scrollbarChart: AmSerialChart;
        /** Current start date of the selected period, get only. To set start/end dates, use stockChart.zoom(startDate, endDate) method. */
        startDate: Date;
        /** Settings for stock events. */
        stockEventsSettings: any;
        /** Settings for value axes. */
        valueAxesSettings: ValueAxesSettings;
        /** read-only. Indicates current version of a script. */
        version: string;
        /** Specifies whether the chart should zoom-out when main data set is changed. */
        zoomOutOnDataSetChange: boolean;

        /** Adds panel to the stock chart. Requires stockChart.validateNow() method to be called after this action. */
        addPanel(panel: StockPanel): void;
        /** Adds panel to the stock chart at a specified index. Requires stockChart.validateNow() method to be called after this action. */
        addPanelAt(panel: StockPanel, index: number): void;
        /** Destroys chart, all timeouts and listeners. */
        clear(): void;
        /** Hides event bullets. */
        hideStockEvents(): void;
        /** Removes panel from the stock chart. Requires stockChart.validateNow() method to be called after this action. */
        removePanel(panel: StockPanel): void;
        /** Shows event bullets. */
        showStockEvents(): void;
        /** Method which should be called after data was changed. */
        validateData(): void;
        /** Method which forces the stock chart to rebuild. Should be called after properties are changed. */
        validateNow(): void;
        /** Zooms chart to specified dates. startDate, endDate - Date objects. */
        zoom(startDate: Date, endDate: Date): void;
        /** Zooms out the chart. */
        zoomOut(): void;

        /** Adds event listener of the type "dataUpdated" or "init" or "rendered" to the object.
            @param type Always "dataUpdated" or "init" or "rendered".
            @param handler
                If the type is "dataUpdated", dispatched when the chart was updated with new data.
                If the type is "init", dispatched when the chart is initialized for the first time. In case you want it to fire again after validateNow() method is called, set chart.chartCreated = false.
                If the type is "rendered", dispatched each when chart is rendered.
        */
        addListener(type: string, handler: (e: {
            /** Either "dataUpdated" or "init". */
            type: string;
            chart: AmStockChart;
        }) => void): void;

        /** Adds event listener of the type "rollOutStockEvent" or "rollOverStockEvent" or "clickStockEvent" to the object.
            @param type     // Either "rollOutStockEvent" or "rollOverStockEvent" or "clickStockEvent".
            @param handler
                If the type is "rollOutStockEvent", dispatched when the user rolls-out of the Stock event (bullet).
                If the type is "rollOverStockEvent", dispatched when the user rolls-over of the Stock event (bullet).
                If the type is "clickStockEvent", dispatched when the user clicks on the Stock event (bullet).
        */

        addListener(type: string, handler: (e: {
            /** Always "rollOverStockEvent". */
            type: string;
            eventObject: any;
            graph: AmGraph;
            date: Date;
            chart: AmStockChart;
        }) => void): void;

        /** Adds event listener of the type "zoomed" to the object.
            @param type Always "zoomed".
            @param handler Dispatched when the chart is zoomed (even for the first time, when chart is initialized).*/
        addListener(type: string, handler: (e: {
            /** Always "zoomed". */
            type: string;
            startDate: Date;
            endDate: Date;
            period: string;
            chart: AmStockChart;
        }) => void): void;

        /** Adds event listener of the type "panelRemoved" to the object.
            @param type Always "panelRemoved".
            @param handler Dispatched when the StockPanel is removed.*/
        addListener(type: string, handler: (e: {
            /** Always "panelRemoved". */

            type: string;
            panel: StockPanel;
            chart: AmStockChart;
        }) => void): void;

        /** Removes event listener from chart object. */
        removeListener(chart: AmChart, type: string, handler: any): void;
    }

    /** ValueAxesSettings settings set 's settings for all ValueAxes. If you change a property after the chart is initialized, you should call stockChart.validateNow() method in order for it to work. If there is no default value specified, default value of ValueAxis class will be used. */
    class ValueAxesSettings {
        /** Specifies whether number for gridCount is specified automatically, according to the axis size.
            @default true
        */
        autoGridCount: boolean;
        /** Axis opacity. */
        axisAlpha: number;
        /** Axis color.  */
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
        /** Specifies whether values should be placed inside or outside plot area. In case you set this to false, you'll have to adjust marginLeft or marginRight in [[PanelsSettings]] in order labels to be visible.
            @default true
        */
        inside: boolean;
        /** Specifies whether values on axis can only be integers or both integers and doubles. */
        integersOnly: boolean;
        /** Frequency at which labels should be placed.  */
        labelFrequency: number;
        /** Specifies whether value labels are displayed. */
        labelsEnabled: boolean;
        /** Set to true if value axis is logarithmic, false otherwise. */
        logarithmic: boolean;
        /** The distance of the axis to the plot area, in pixels. Useful if you have more then one axis on the same side.  */
        offset: number;
        /** Position of the value axis. Possible values are "left" and "right". */
        position: string;
        /** Set to true if value axis is reversed (smaller values on top), false otherwise. */
        reversed: boolean;
        /** Specifies if first label of value axis should be displayed. */
        showFirstLabel: boolean;
        /** Specifies if last label of value axis should be displayed. */
        showLastLabel: boolean;
        /** Stacking mode of the axis. Possible values are: "none", "regular", "100%", "3d". */
        stackType: string;
        /** Tick length. */
        tickLength: number;
        /** Unit which will be added to the value label.  */
        unit: string;
        /** Position of the unit. Possible values are "left" or "right". */
        unitPosition: string;
    }

    /** AmLegend is the class that displays legend of the chart. Legend to the chart should be added using chart.addLegend(legend) method.
        @example
            let chart = new AmCharts.AmSerialChart();
            let legend = new AmCharts.AmLegend();
            chart.addLegend(legend);
    */
    class AmLegend {
        /** Alignment of legend entries. Possible values are: "left", "center", "right". left */
        align: string;
        /** Used if chart is Serial or XY. In case true, margins of the legend are adjusted and made equal to chart's margins.
            @default true
        */
        autoMargins: boolean;
        /** Opacity of legend's background. Value range is 0 - 1 */
        backgroundAlpha: number;
        /** Background color. You should set backgroundAlpha to >0 vallue in order background to be visible. #FFFFFF */
        backgroundColor: string;
        /** Opacity of chart's border. Value range is 0 - 1. */
        borderAlpha: number;
        /** Color of legend's border. You should set borderAlpha >0 in order border to be visible. #000000 */
        borderColor: string;
        /** In case legend position is set to "absolute", you can set distance from bottom of the chart, in pixels.  */
        bottom: number;
        /** Text color. Will use chart's color if not set. */
        color: string;
        /** This can be used by AmMap only. You can pass array of objects with title, color, markerType values, for example: [{title: "One", color: "#3366CC"},{title: "Two", color: "#FFCC33"}] */
        data: any[];
        /** Specifies if each of legend entry should be equal to the most wide entry. Won't look good if legend has more than one line.
            @default true
        */
        equalWidths: boolean;
        /** Font size. Will use chart's font size if not set. */
        fontSize: string;
        /** Horizontal space between legend item and left/right border. */
        horizontalGap: number;
        /** The text which will be displayed in the legend. Tag [[title]] will be replaced with the title of the graph. [[title]] */
        labelText: string;
        /** In case legend position is set to "absolute", you can set distance from left side of the chart, in pixels. */
        left: number;
        /** Bottom margin.  */
        marginBottom: number;
        /** Left margin. This property will be ignored if chart is Serial or XY and autoMargins property of the legend is true (default).
            @default 20
        */
        marginLeft: number;
        /** Right margin. This property will be ignored if chart is Serial or XY and autoMargins property of the legend is true (default).
            @default 20
        */
        marginRight: number;
        /** Top margin. */
        marginTop: number;
        /** Marker border opacity 1. */
        markerBorderAlpha: number;
        /** Marker border color. If not set, will use the same color as marker. */
        markerBorderColor: string;
        /** Thickness of the legend border. The default value (0) means the line will be a "hairline" (1 px). In case marker type is line, this style will be used for line thickness.
            @default 1
        */
        markerBorderThickness: number;
        /** The color of the disabled marker (when the graph is hidden). #AAB3B3 */
        markerDisabledColor: string;
        /** Space between legend marker and legend text, in pixels.
            @default 5
        */
        markerLabelGap: number;
        /** Size of the legend marker (key).
            @default 16
        */
        markerSize: number;
        /** Shape of the legend marker (key). Possible values are: "square", "circle", "line", "dashedLine", "triangleUp", "triangleDown", "bubble", "none". square */
        markerType: string;
        /** Maximum number of columns in the legend. If Legend's position is set to "right" or "left", maxColumns is automatically set to 1. */
        maxColumns: number;
        /** Position of a legend. Possible values are: "bottom", "top", "left", "right" and "absolute". In case "absolute", you should set left and top properties too. (this setting is ignored in Stock charts). In case legend is used with AmMap, position is set to "absolute" automatically.  bottom */
        position: string;
        /** Specifies whether legend entries should be placed in reversed order. */
        reversedOrder: boolean;
        /** In case legend position is set to "absolute", you can set distance from right side of the chart, in pixels. */
        right: number;
        /** Legend item text color on roll-over.  #CC0000 */
        rollOverColor: string;
        /** When you roll-over the legend entry, all other graphs can reduce their opacity, so that the graph you rolled-over would be distinguished. This style specifies the opacity of the graphs.
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
        /** Legend switch color. #FFFFFF */
        switchColor: string;
        /** Legend switch type (in case the legend is switchable). Possible values are "x" and "v". x */
        switchType: string;
        /** If true, clicking on the text will show/hide balloon of the graph. Otherwise it will show/hide graph/slice, if switchable is set to true.  */
        textClickEnabled: boolean;
        /** In case legend position is set to "absolute", you can set distance from top of the chart, in pixels. */
        top: number;
        /** Legend markers can mirror graph’s settings, displaying a line and a real bullet as in the graph itself.
        Set this property to true if you want to enable this feature. Note, if you set graph colors in dataProvider, they will not be reflected in the marker.
        @default false*/
        useGraphSettings: boolean;
        /** Specifies if legend labels should be use same color as corresponding markers. */
        useMarkerColorForLabels: boolean;
        /** Alignment of the value text. Possible values are "left" and "right". right */
        valueAlign: string;
        /** The text which will be displayed in the value portion of the legend. You can use tags like [[value]], [[open]], [[high]], [[low]], [[close]], [[percents]], [[description]]. [[value]] */
        valueText: string;
        /** Width of the value text.
            @default 80
        */
        valueWidth: number;
        /** Vertical space between legend items also between legend border and first and last legend row.  10 */
        verticalGap: number;
        /** Adds event listener of the type "clickLabel" or "clickMarker" or "hideItem" to the object.
            @param type Either "clickLabel" or "clickMarker" or "hideItem".
            @param handler
                If the type is "clickLabel", dispatched when legend label is clicked.
                If the type is "clickMarker", dispatched when legend marker is clicked.
                If the type is "hideItem", dispatched when user clicks on a legend item marker and hides corresponding object.
                If the type is "rollOutItem", dispatched when user rolls-out of the legend item label (or whole item, if switchable is set to false).
                If the type if "rollOverItem", dispatched when user rolls-over the legend item label (or whole item, if switchable is set to false).
                If the type is "rollOutMarker", dispatched when user clicks out of a legend item marker and shows corresponding object.
                If the type if "rollOverMarker", dispatched when user clicks on a legend item marker and shows corresponding object.
        */

        /**
         * Adds event listener of the type "showItem" to the object.
         * @param type Always "showItem".
         * @param handler The event handler.
         */
        addListener(type: string, handler: (e: {/** Always "showItem". */
            type: string; dataItem: Object; chart: AmChart;
        }) => void): void;

        /** Removes event listener from chart object. */
        removeListener(chart: AmChart, type: string, handler: any): void;
    }

    /** StockLegend is a legend of StockPanel. */
    class StockLegend extends AmLegend {
        /** The text which will be displayed in the value portion of the legend when graph is comparable and at least one dataSet is selected for comparing. You can use tags like [[value]], [[open]], [[high]], [[low]], [[close]], [[percents.value/open/close/low/high]], [[description]]. [[percents.value]]% */
        valueTextComparing: string;
        /** The text which will be displayed in the value portion of the legend. You can use tags like [[value]], [[open]], [[high]], [[low]], [[close]], [[percents]], [[description]].  [[value]] */
        valueTextRegular: string;
    }

    /** StockPanel class creates stock panels (charts). AmStockChart can have multiple Stock panels. */
    class StockPanel extends AmSerialChart {
        /** Specifies whether x button will be displayed near the panel. This button allows turning panel off. */
        allowTurningOff: boolean;
        /** If true, drawing icons will be displayed in top-right corner. */
        drawingIconsEnabled: boolean;
        /** Specifies on which value axis user can draw trend lines. Set drawingIconsEnabled to true if you want drawing icons to be visible. First value axis will be used if not set here. */
        drawOnAxis: ValueAxis;
        /** Specifies if all trend lines should be erased when erase button is clicked. If false, trend lines can be erased one by one. */
        eraseAll: boolean;
        /** Size of trend line drawing icons. If you change this size, you should update icon images if you want them to look properly.
            @default 18
        */
        iconSize: number;
        /** Relative height of panel. Possible values 0 - 100. */
        percentHeight: number;
        /** Specifies when values should be recalculated to percents. Possible values are: "never", "always", "whenComparing".  whenComparing */
        recalculateToPercents: string;
        /** Specifies whether this panel will show category axis.
            @default true
        */
        showCategoryAxis: boolean;
        stockGraphs: StockGraph[];
        /** Stock chart legend. */
        stockLegend: StockLegend;
        /** Title of a panel. Note, StockLegend should be added in order title to be displayed. */
        title: string;
        /** Trend line opacity.
            @default 1
        */
        trendLineAlpha: number;
        /** Trend line color. #00CC00 */
        trendLineColor: string;
        /** Trend line dash length. */
        trendLineDashLength: number;
        /** Trend line thickness.
            @default 2
        */
        trendLineThickness: number;
        /** Adds a graph to the panel. */
        addStockGraph(graph: StockGraph): void;
        /** Removes graph from the panel. */
        removeStockGraph(graph: StockGraph): void;
    }

    /** AmChart is a base class of all charts. It can not be instantiated explicitly. AmCoordinateChart, AmPieChart and AmMap extend AmChart class. */
    class AmChart {
        /** used when constructing a chart with a theme */
        constructor(theme?: any);
        /** Specifies, if class names should be added to chart elements. */
        addClassNames: boolean;
        /** Array of Labels. Example of label object, with all possible properties:
{"x": 20, "y": 20, "text": "this is label", "align": "left", "size": 12, "color": "#CC0000", "alpha": 1, "rotation": 0, "bold": true, "url": "http://www.amcharts.com"} */
        allLabels: Label[];
        /**  Set this to false if you don't want chart to resize itself whenever its parent container size changes. */
        autoResize: boolean;
        /** Opacity of background. Set it to >0 value if you want backgroundColor to work. However we recommend changing div's background-color style for changing background color. */
        backgroundAlpha: number;
        /** Background color. You should set backgroundAlpha to >0 value in order background to be visible. We recommend setting background color directly on a chart's DIV instead of using this property. #FFFFFF */
        backgroundColor: string;
        /** The chart creates AmBalloon class itself. If you want to customize balloon, get balloon instance using this property, and then change balloon's properties.  AmBalloon */
        balloon: AmBalloon;
        /** Opacity of chart's border. Value range is 0 - 1. */
        borderAlpha: number;
        /** Color of chart's border. You should set borderAlpha >0 in order border to be visible. We recommend setting border color directly on a chart's DIV instead of using this property. #000000 */
        borderColor: string;
        /** This prefix is added to all class names which are added to all visual elements of a chart in case addClassNames is set to true. */
        classNamePrefix: string;
        /** Text color. #000000 */
        color: string;
        /** Non-commercial version only. Specifies position of link to amCharts site. Allowed values are: top-left, top-right, bottom-left and bottom-right.
            @default 'top-left'
        */
        creditsPosition: string;
        /** Array of data objects, for example: [{country:"US", value:524},{country:"UK", value:624},{country:"Lithuania", value:824}]. You can have any number of fields and use any field names. In case of AmMap, data provider should be MapData object. */
        dataProvider: any[];
        /** Decimal separator.
            @Default . */
        decimalSeparator: string;
        /** Using this property you can add any additional information to SVG, like SVG filters or clip paths. The structure of this object should be identical to XML structure of a object you are adding, only in JSON format. */
        defs: any;
        /** Export config. Specifies how export to image/data export/print/annotate menu will look and behave. You can find a lot of examples in amcharts/plugins/export folder. */
        export: ExportSettings;
        /** Font family. Verdana */
        fontFamily: string;
        /** Font size.
            @default 11
        */
        fontSize: string;
        /** If you set this to true, the lines of the chart will be distorted and will produce hand-drawn effect. Try to adjust chart.handDrawScatter and chart.handDrawThickness properties for a more scattered result.
            @Default false
        */
        handDrawn: boolean;
        /** Defines by how many pixels hand-drawn line (when handDrawn is set to true) will fluctuate.
            @Default 2
        */
        handDrawScatter: number;
        /** Defines by how many pixels line thickness will fluctuate (when handDrawn is set to true).
            @Default 1
        */
        handDrawThickness: number;
        /** Time, in milliseconds after which balloon is hidden if the user rolls-out of the object. Might be useful for AmMap to avoid balloon flickering while moving mouse over the areas. Note, this is not duration of fade-out. Duration of fade-out is set in AmBalloon class.
            @Default 150
        */
        hideBalloonTime: number;
        /** Legend of a chart. */
        legend: AmLegend;
        /** Reference to the div of the legend. */
        legendDiv: HTMLElement;
        /** You can add listeners of events using this property. Example: listeners = [{"event":"dataUpdated", "method":handleEvent}]; */
        listerns: Object[];
        /** This setting affects touch-screen devices only. If a chart is on a page, and panEventsEnabled are set to true, the page won't move if the user touches the chart first. If a chart is big enough and occupies all the screen of your touch device, the user won’t be able to move the page at all. That's why the default value is "false". If you think that selecting/panning the chart or moving/pinching the map is a primary purpose of your users, you should set panEventsEnabled to true. */
        panEventsEnabled: boolean;
        /**  Specifies absolute or relative path to amCharts files, i.e. "amcharts/". (where all .js files are located)
            If relative URLs are used, they will be relative to the current web page, displaying the chart.
            You can also set path globally, using global JavaScript variable AmCharts_path. If this variable is set, and "path" is not set in chart config, the chart will assume the path from the global variable. This allows setting amCharts path globally. I.e.:
            let AmCharts_path = "/libs/amcharts/";
            "path" parameter will be used by the charts to locate it's files, like images, plugins or patterns.*/
        path: string;
        /** Specifies path to the folder where images like resize grips, lens and similar are.
            IMPORTANT: Since V3.14.12, you should use "path" to point to amCharts directory instead. The "pathToImages" will be automatically set and does not need to be in the chart config, unless you keep your images separately from other amCharts files. */
        pathToImages: string;
        /** Precision of percent values. -1 means percent values won't be rounded at all and show as they are.
            @default 2
        */
        percentPrecision: number;
        /** Precision of values. -1 means values won't be rounded at all and show as they are.
            @Default 1*/
        precision: number;
        /** Prefixes which are used to make big numbers shorter: 2M instead of 2000000, etc. Prefixes are used on value axes and in the legend. To enable prefixes, set usePrefixes property to true. [{number:1e+3,prefix:"k"},{number:1e+6,prefix:"M"},{number:1e+9,prefix:"G"},{number:1e+12,prefix:"T"},{number:1e+15,prefix:"P"},{number:1e+18,prefix:"E"},{number:1e+21,prefix:"Z"},{number:1e+24,prefix:"Y"}] */
        prefixesOfBigNumbers: any[];
        /** Prefixes which are used to make small numbers shorter: 2μ instead of 0.000002, etc. Prefixes are used on value axes and in the legend. To enable prefixes, set usePrefixes property to true. [{number:1e-24, prefix:"y"},{number:1e-21, prefix:"z"},{number:1e-18, prefix:"a"},{number:1e-15, prefix:"f"},{number:1e-12, prefix:"p"},{number:1e-9, prefix:"n"},{number:1e-6, prefix:"μ"},{number:1e-3, prefix:"m"}] */
        prefixesOfSmallNumbers: any[];
        /** Theme of a chart. Config files of themes can be found in amcharts/themes/ folder. More info about using themes. */
        theme: string;
        /** Thousands separator.
            @default .
        */
        thousandsSeparator: string;
        /** Array of Title objects. */
        titles: Title[];
        /** Type of a chart. Required when creating chart using JSON. Possible types are: serial, pie, xy, radar, funnel, gauge, map, stock. */
        type: string;
        /** If true, prefixes will be used for big and small numbers. You can set arrays of prefixes via prefixesOfSmallNumbers and prefixesOfBigNumbers properties. */
        usePrefixes: boolean;
        /** Read-only. Indicates current version of a script. */
        version: string;
        /** Adds a label on a chart.
            You can use it for labeling axes, adding chart title, etc. x and y coordinates can be set in number, percent, or a number with ! in front of it - coordinate will be calculated from right or bottom instead of left or top.
            x - horizontal coordinate
            y - vertical coordinate
            text - label's text
            align - alignment (left/right/center)
            size - text size
            color - text color
            rotation - angle of rotation
            alpha - label alpha
            bold - specifies if text is bold (true/false),
            url - url
        */
        addLabel(x: number | string, y: number | string, text: string, align: string, size?: number, color?: string, rotation?: number, alpha?: number, bold?: boolean, url?: string): any;
        /**
         * Adds a legend to the chart.
         * By default, you don't need to create div for your legend, however if you want it to be positioned in some different way, you can create div anywhere you want and pass id or reference to your div as a second parameter.
         * (NOTE: This method will not work on StockPanel.)
         * @param legend - The legend.
         * @param legendDivId - Id of the legend div (optional).
         */
        addLegend(legend: AmLegend, legendDivId?: string): void;
        /**
         * Adds a legend to the chart.
         * By default, you don't need to create div for your legend, however if you want it to be positioned in some different way, you can create div anywhere you want and pass id or reference to your div as a second parameter.
         * (NOTE: This method will not work on StockPanel.)
         * @param legend - The legend.
         * @param legendDiv - Legend div (optional).
        */
        addLegend(legend: AmLegend, legendDiv: HTMLElement): void;

        /** Adds title to the top of the chart. Pie, Radar positions are updated so that they won't overlap. Plot area of Serial/XY chart is also updated unless autoMargins property is set to false. You can add any number of titles - each of them will be placed in a new line. To remove titles, simply clear titles array: chart.titles = []; and call chart.validateNow() method. text - text of a title size - font size color - title color alpha - title opacity bold - boolean value indicating if title should be bold. */
        addTitle(text: string, size: number, color: string, alpha: number, bold: boolean): void;
        /** Clears the chart area, intervals, etc. */
        clear(): void;
        /** Removes all labels added to the chart. */
        clearLabels(): void;
        /** Use this method to force the chart to resize to it's current container size. */
        invalidateSize(): void;
        /** Removes chart's legend. */
        removeLegend(): void;
        /** This method should be called after data in your data provider changed or a new array was set to dataProvider. After calling this method the chart will parse data and redraw. */
        validateData(): void;
        /** This method should be called after you changed one or more properties of any class. The chart will redraw after this method is called. */
        validateNow(): void;

        /** Adds chart to the specified DIV.
            @param container DIV object which will hold the chart. */
        write(container: HTMLElement): void;
        /** Adds chart to the specified DIV.
            @param container Id of a DIV which will hold the chart. */
        write(container: string): void;

        /** Adds event listener of the type "dataUpdated" or "init" to the object.
            @param type "dataUpdated" or "init".
            @param handler
                If the type is "dataUpdated".
                    Dispatched when chart is build for the first time or after validateData() method was called.
                If the type is "init".
                    Dispatched when chart is build for the first time.
        */
        addListener(type: string, handler: (e: {
            /** Either "dataUpdated" or "init". */
            type: string;
            chart: AmChart;
        }) => void): void;
        /** Removes event listener from chart object. */
        removeListener(chart: AmChart, type: string, handler: any): void;
    }

    /** AmCoordinateChart is a base class of AmRectangularChart. It can not be instantiated explicitly. */

    class AmCoordinateChart extends AmChart {
        /** Read-only. Array, holding processed chart's data. */
        chartData: Object[];
        /** Specifies the colors of the graphs if the lineColor of a graph is not set.
            It there are more graphs then colors in this array, the chart picks random color.
            @default ['#FF6600', '#FCD202', '#B0DE09', '#0D8ECF', '#2A0CD0', '#CD0D74', '#CC0000', '#00CC00', '#0000CC', '#DDDDDD', '#999999', '#333333', '#990000'] */
        colors: string[];
        /** The array of graphs belonging to this chart.
            To add/remove graph use addGraph/removeGraph methods instead of adding/removing graphs directly to array.
        */
        graphs: AmGraph[];
        /** Specifies if grid should be drawn above the graphs or below. Will not work properly with 3D charts.
            @default false
        */
        gridAboveGraphs: boolean;
        /** Instead of adding guides to the axes, you can push all of them to this array. In case guide has category or date defined, it will automatically will be assigned to the category axis. Otherwise to first value axis, unless you specify a different valueAxis for the guide. */
        guides: Guide[];
        /** Specifies whether the animation should be sequenced or all objects should appear at once.
            @default true
        */
        sequencedAnimation: boolean;
        /** The initial opacity of the column/line.
            If you set startDuration to a value higher than 0, the columns/lines will fade in from startAlpha.
            Value range is 0 - 1.
            @default 1
        */
        startAlpha: number;
        /** Duration of the animation, in seconds. */
        startDuration: number;
        /** Animation effect.
            Possible values are ">", "<", elastic" and "bounce".
            @default "elastic"
        */
        startEffect: string;
        /** Target of url.
            @default this
        */
        urlTarget: any;
        /** The array of value axes.
            To add/remove value axis use addValueAxis/removeValueAxis methods instead of adding/removing axes directly to array.
            Chart creates one value axis automatically, so if you need only one value axis, you don't need to create it.
        */
        valueAxes: any[];
        /**  Adds a graph to the chart.
         */
        addGraph(graph: AmGraph): void;
        /** Adds a legend to the chart. By default, you don't need to create div for your legend, however if you want it to be positioned in some different way, you can create div anywhere you want and pass id or reference to your div as a second parameter. (NOTE: This method will not work on StockPanel.) */
        /** Adds value axis to the chart.
            One value axis is created automatically, so if you don't want to change anything or add more value axes, you don't need to add it.
        */
        addValueAxis(axis: ValueAxis): void;
        /** You can trigger the animation of the chart. */
        animateAgain(): void;

        /** AmGraph Returns graph by id. */
        getGraphById(graphId: string): AmGraph;

        /**  Returns value axis by id.*/
        getValueAxisById(axisId: string): ValueAxis;

        /** Hide the graph (if it is visible). Usually this method is called from the Legend, when you click on the legend marker.
        */
        hideGraph(graph: AmGraph): void;

        /** Hide value balloon of a graph. Usually this method is called from the Legend, when you click on the legend text.*/
        hideGraphsBalloon(graph: AmGraph): void;

        /** Highlight the graph. Usually this method is called from the Legend, when you roll-over the legend entry.*/
        highlightGraph(graph: AmGraph): void;

        /** Removes graph from the chart.*/
        removeGraph(graph: AmGraph): void;

        /** Removes value axis from the chart. When you remove value axis, all graphs assigned to this axis are also removed. */
        removeValueAxis(axis: ValueAxis): void;

        /** Show the graph (if it is hidden). Usually this method is called from the Legend, when you click on the legend marker.*/
        showGraph(graph: AmGraph): void;

        /** Show value balloon of a graph. Usually this method is called from the Legend, when you click on the legend text.*/
        showGraphsBalloon(graph: AmGraph): void;

        /** UnhighlightGraph the graph. Usually this method is called from the Legend, when you roll-out the legend entry.*/
        unhighlightGraph(graph: AmGraph): void;
        /** Adds event listener of the type "clickGraphItem" or "doubleClickGraphItem" or "rightClickGraphItem" or "rollOutGraphItem" or "rollOverGraphItem" to the object.
            @param type Either "clickGraphItem" or "doubleClickGraphItem" or "rightClickGraphItem" or "rollOutGraphItem" or "rollOverGraphItem".
            @param handler Dispatched when user clicks on the data item (column/bullet)
        */
        addListener(type: string, handler: (e: {
            /** Either "clickGraphItem" or "doubleClickGraphItem" or "rightClickGraphItem" or "rollOutGraphItem" or "rollOverGraphItem". */
            type: string;
            graph: AmGraph;
            item: GraphDataItem;
            index: number;
            chart: AmChart;
        }) => void): void;
    }

    /** GraphDataItem holds all the information about the graph's data item. When working with a chart, you do not create GraphDataItem objects or change it's properties directly. GraphDataItem is passed to you by events when user interacts with data item on the chart. The list of properties below will help you to extract data item's value/coordinate/etc. */
    class GraphDataItem {
        /** Opacity of the data item. */
        alpha: number;
        /** Bullet type. */
        bullet: string;
        /** Bullet size.  */
        bulletSize: number;
        /** Category value. */
        category: string;
        /** Color of the data item. */
        color: string;
        /** Custom bullet (path to file name). */
        customBullet: string;
        /** Original object from data provider. */
        dataContext: Object;
        /** Description. */
        description: string;
        /** Array of colors of the data item, used by column and candlestick chart only. */
        fillColors: any[];
        /** Object which holds percents when recalculateToPercents is set to true. */
        percents: Object;
        /** SerialDataItem of this graphDataItem */
        serialDataItem: SerialDataItem;
        /** url */
        url: string;
        /** Object which holds values of the data item (value, open, close, low, high). */
        values: Object;
        /** x coordinate of the data item. */
        x: number;
        /** y coordinate of the data item. */
        y: number;
    }

    /** SerialDataItem holds all the information about each series. When working with a chart, you do not create SerialDataItem objects or change it's properties directly. Consider properties of a SerialDataItem read-only - change values in chart's data provider if you need to. When serial chart parses dataProvider, it generates "chartData" array. Objects of this array are SerialDataItem objects. */
    class SerialDataItem {
        /** You can access each GraphDataItem using this object. The data structure is: graphDataItem = serialDataItem.axes[axisId].graphs[graphId]. */
        axes: Object;
        /** category value. String if parseDates is false, Date if true. */
        category: any;
        /** Timestamp of a series date. Avalable only if parseDates property of CategoryAxis is set to true. */
        time: number;
        /** Coordinate (horizontal or vertical, depends on chart's rotate property) of the series. */
        x: number;
    }

    class CategoryAxis extends AxisBase {
        /** When parse dates is on for the category axis, the chart will try to highlight the beginning of the periods, like month, in bold. Set this to false to disable the functionality.
            @default true
        */
        boldPeriodBeginning: boolean;

        /** Date formats of different periods. Possible period values: fff - milliseconds, ss - seconds, mm - minutes, hh - hours, DD - days, MM - months, WW - weeks, YYYY - years. Check this page for date formatting strings. [{period:'fff',format:'JJ:NN:SS'},{period:'ss',format:'JJ:NN:SS'},{period:'mm',format:'JJ:NN'},{period:'hh',format:'JJ:NN'},{period:'DD',format:'MMM DD'},{period:'WW',format:'MMM DD'},{period:'MM',format:'MMM'},{period:'YYYY',format:'YYYY'}] */
        dateFormats: any[];

        /** In case your category axis values are Date objects and parseDates is set to true, the chart will parse dates and will place your data points at irregular intervals. However if you want dates to be parsed (displayed on the axis, baloons, etc), but data points to be placed at equal intervals (omiting dates with no data), set equalSpacing to true. */
        equalSpacing: boolean;

        /** Field in data provider which specifies if the category value should always be shown. For example: categoryAxis.forceShowField = "forceShow"; Field in data provider which specifies if the category value should always be shown. For example: categoryAxis.forceShowField = "forceShow";
        And in data:
        {category:"one", forceShow:true, value:100}
        Note, this works only when parseDates is set to false.*/
        forceShowField: string;

        /** Specifies if a grid line is placed on the center of a cell or on the beginning of a cell. Possible values are: "start" and "middle" This setting doesn't work if parseDates is set to true. middle */
        gridPosition: string;

        /**   Specifies if minor grid should be displayed.
        NOTE: If equalSpacing is set to true, this setting will be ignored.
        @default false*/
        minorGridEnabled: boolean;

        /** Specifies the shortest period of your data. This should be set only if parseDates is set to "true". Possible period values: fff - milliseconds, ss - seconds, mm - minutes, hh - hours, DD - days, MM - months, YYYY - years. DD */
        minPeriod: string;

        /** In case your category axis values are Date objects, set this to true. In this case the chart will parse dates and will place your data points at irregular intervals. If you want dates to be parsed, but data points to be placed at equal intervals, set both parseDates and equalSpacing to true. */
        parseDates: boolean;

        /** Specifies whether the graph should start on axis or not. In case you display columns, it is recommended to set this to false. If parseDates is set to true, startOnAxis will allways be false, unless equalSpacing is set to true. */
        startOnAxis: boolean;

        /** Works only when parseDates is set to true and equalSpacing is false. If you set it to true, at the position where bigger period changes,
        category axis will display date strings of bot small and big period, in two rows.
        @default false*/
        twoLineMode: boolean;

        /** Use line color for bullet
        @default false*/
        useLineColorForBulletBorder: boolean;
        /** Number returns coordinate of a category. Works only if parseDates is false. If parseDates is true, use dateToCoordinate method. category - String */
        categoryToCoordinate(category: string): void;

        /** date - Date object Returns Date of the coordinate, in case parseDates is set to true and equalSpacing is set to false.  coordinate - Number */
        coordinateToDate(coordinate: number): void;

        /** Number Returns coordinate of the date, in case parseDates is set to true. if parseDates is false, use categoryToCoordinate method. date - Date object */
        dateToCoordinate(date: Date): void;

        /** Number Returns index of the category which is most close to specified coordinate. x - coordinate */
        xToIndex(x: number): void;
    }

    /** ChartScrollbar class displays chart scrollbar. Supported by AmSerialChart and AmXYChart.
        @example
            let chart = new AmCharts.AmSerialChart();
            let chartScrollbar = new AmCharts.ChartScrollbar();
            chart.addChartScrollbar(chartScrollbar);
    */
    class ChartScrollbar {
        /** Specifies whether number of gridCount is specified automatically, acoarding to the axis size. */
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
        /** Text color. Will use chart's color if not set. */
        color: string;
        /** Specifies which graph will be displayed in the scrollbar. Only Serial chart's scrollbar can display a graph. */
        graph: AmGraph;
        /** Graph fill opacity. Value range is 0 - 1.  0.1 */
        graphFillAlpha: number;
        /** Graph fill color. #000000 */
        graphFillColor: string;
        /** Graph line opacity. Value range is 0 - 1. */
        graphLineAlpha: number;
        /** Graph line color. #000000 */
        graphLineColor: string;
        /** by default the graph type is the same as the original graph's type, however in case of candlestick or ohlc you might want to show line graph in the scrollbar. Possible values are: "line", "column", "step", "smoothedLine", "candlestick", "ohlc". */
        graphType: string;
        /** Grid opacity. Value range is 0 - 1. 0.7 */
        gridAlpha: number;
        /** Grid color. #FFFFFF */
        gridColor: string;
        /** The number of grid lines. */
        gridCount: number;
        /** Specifies whether resize grips are hidden when mouse is away from the scrollbar. */
        hideResizeGrips: boolean;
        /** Specifies whether scrollbar has a resize feature.
            @default true
        */
        resizeEnabled: boolean;
        /** Height (width, if chart is rotated) of a scrollbar.  20 */
        scrollbarHeight: number;
        /** Duration of scrolling, when the user clicks on scrollbar's background, in seconds.
            @default 2
        3*/
        scrollDuration: number;
        /** Selected backround opacity.
            @default 1
        */
        selectedBackgroundAlpha: number;
        /** Selected background color. #EFEFEF */
        selectedBackgroundColor: string;
        /** Selected graph's fill opacity. Value range is 0 - 1. 0.5 */
        selectedGraphFillAlpha: number;
        /** Selected graph's fill color. #000000 */
        selectedGraphFillColor: string;
        /** Selected graph's line opacity. Value range is 0 - 1. */
        selectedGraphLineAlpha: number;
        /** Selected graph's line color. #000000 */
        selectedGraphLineColor: string;
        /** Specifies if the chart should be updated while dragging/resizing the scrollbar or only at the moment when user releases mouse button. */
        updateOnReleaseOnly: boolean;
    }

    /** AmRectangularChart is a base class of AmSerialChart and AmXYChart. It can not be instantiated explicitly.*/
    class AmRectangularChart extends AmCoordinateChart {
        /** The angle of the 3D part of plot area. This creates a 3D effect (if the "depth3D" is > 0).
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
        /** Chart scrollbar. */
        chartScrollbar: ChartScrollbar;
        /** The depth of the 3D part of plot area. This creates a 3D effect (if the "angle" is > 0).
            @default 0*/
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
        /** The opacity of plot area's border. Value range is 0 - 1.
            @default 0
         */
        plotAreaBorderAlpha: number;
        /** The color of the plot area's border. Note, the it is invisible by default, as plotAreaBorderAlpha default value is 0. Set it to a value higher than 0 to make it visible.
            @default '#000000'*/
        plotAreaBorderColor: string;
        /** Opacity of plot area. Plural form is used to keep the same property names as our Flex charts'. Flex charts can accept array of numbers to generate gradients. Although you can set array here, only first value of this array will be used.
            @default 0
        */
        plotAreaFillAlphas: number;
        /** You can set both one color if you need a solid color or array of colors to generate gradients, for example: ["#000000", "#0000CC"]
            @default '#FFFFFF'
        */
        plotAreaFillColors: any;
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
            @default '#e5e5e5'
        */
        zoomOutButtonColor: string;
        /** Name of zoom-out button image. In the images folder there is another lens image, called lensWhite.png. You might want to have white lens when background is dark. Or you can simply use your own image.
            @default lens.png
        */
        zoomOutButtonImage: string;
        /** Size of zoom-out button image
            @default: 17
        */
        zoomOutButtonImageSize: number;
        /** Padding around the text and image.
            @default: 8
        */
        zoomOutButtonPadding: number;
        /** Opacity of zoom-out button background when mouse is over it.
            @default: 1
        */
        zoomOutButtonRollOverAlpha: number;
        /** Text in the zoom-out button. Show all */
        zoomOutText: string;

        /** Adds a ChartCursor object to a chart */
        addChartCursor(cursor: ChartCursor): void;
        /** Adds a ChartScrollbar to a chart */
        addChartScrollbar(scrollbar: ChartScrollbar): void;
        /** Adds a TrendLine to a chart.
            You should call chart.validateNow() after this method is called in order the trend line to be visible. */
        addTrendLine(trendLine: TrendLine): void;
        /** Removes cursor from the chart */
        removeChartCursor(): void;
        /** Removes scrollbar from the chart */
        removeChartScrollbar(): void;
        /** Removes a trend line from a chart.
            You should call chart.validateNow() in order the changes to be visible. */
        removeTrendLine(trendLine: TrendLine): void;
    }

    /* Trend lines are straight lines indicating trends, might also be used for some different purposes. Can be used by Serial and XY charts. To add/remove trend line, use chart.addTrendLine(trendLine)/chart.removeTrendLine(trendLine) methods or simply pass array of trend lines: chart.trendLines = [trendLine1, trendLine2].
        @example
            let trendLine = new AmCharts.TrendLine();
            trendLine.initialDate = new Date(2012, 0, 2, 12); // 12 is hour - to start trend line in the middle of the day
            trendLine.finalDate = new Date(2012, 0, 11, 12);
            trendLine.initialValue = 10;
            trendLine.finalValue = 19;
            trendLine.lineColor = "#CC0000";
            chart.addTrendLine(trendLine);
    */
    class TrendLine { }

    /** ChartCursor is a class which displays a cursor which follows the mouse. In case of Serial chart it also shows value and category balloons.
        @example
            let chart = new AmCharts.AmSerialChart();
            let chartCursor = new AmCharts.ChartCursor();
            chart.addChartCursor(chartCursor);
    */
    class ChartCursor {
        /** Specifies if bullet for each graph will follow the cursor. */
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
        /** Category balloon date format (used only if category axis parses dates). Check this page for instructions on how to format dates. MMM DD, YYYY */
        categoryBalloonDateFormat: string;
        /** Specifies whether category balloon is enabled.
            @default true
        */
        categoryBalloonEnabled: boolean;
        /** Text color. #FFFFFF */
        color: string;
        /** Opacity of the cursor line.  1 */
        cursorAlpha: number;
        /** Color of the cursor line. #CC0000 */
        cursorColor: string;
        /** Specifies where the cursor line should be placed - on the beginning of the period (day, hour, etc) or in the middle (only when parseDates property of categoryAxis is set to true). If you want the cursor to follow mouse and not to glue to the nearest data point, set "mouse" here. Possible values are: "start", "middle", "mouse". */
        cursorPosition: string;
        /** Specifies whether cursor is enabled.
            @default true
        */
        enabled: boolean;
        /** If set to true, instead of a cursor line user will see a fill which width will always be equal to the width of one data item.
        Recommend setting cursorAlpha to 0.1 or some other small number if using this feature.
        @default false*/
        fullWidth: boolean;
        /** If this is set to true, only one balloon at a time will be displayed. Note, this is quite CPU consuming. */
        oneBalloonOnly: boolean;
        /** If this is set to true, the user will be able to pan the chart (Serial only) instead of zooming. */
        pan: boolean;
        /** Opacity of the selection. */
        selectionAlpha: number;
        /** Specifies if cursor should only mark selected area but not zoom-in after user releases mouse button. */
        selectWithoutZooming: boolean;
        /** Specifies whether value balloons are enabled. In case they are not, the balloons might be displayed anyway, when the user rolls-over the column or bullet.
            @default true
        */
        valueBalloonsEnabled: boolean;
        /** Specifies if the user can zoom-in the chart. If pan is set to true, zoomable is switched to false automatically.
            @default true
        */
        zoomable: boolean;
        /** Indicates if currently user is selecting some chart area to zoom-in. */
        zooming: boolean;

        /** Hides cursor. */
        hideCursor(): void;
        /** You can force cursor to appear at specified cateogry or date. */
        showCursorAt(category: string | Date): void;
        /** Adds event listener of the type "changed" to the object.
            @param type Always "changed".
            @param handler Dispatched when cursor position is changed. "index" is a series index over which chart cursors currently is. "zooming" specifies if user is currently zooming (is selecting) the chart. mostCloseGraph property is set only when oneBalloonOnly is set to true.*/
        addListener(type: string, handler: (e: {/** Always "changed". */
            type: string; index: number; zooming: boolean; mostCloseGraph: AmGraph; chart: AmChart;
        }) => void): void;
        /** Adds event listener of the type "onHideCursor" to the object.
            @param type Always "onHideCursor".
            @param handler Dispatched when cursor is hidden.*/
        addListener(type: string, handler: (e: {/** Always "onHideCursor". */
            type: string; chart: AmChart;
        }) => void): void;
        /** Adds event listener of the type "selected" or "zoomed" to the object.
            @param type "selected" or "zoomed".
            @param handler
                If the type is "selected". Dispatched if selectWithoutZooming is set to true and when user selects some period. start and end are indices or timestamp (when categoryAxis.parseDates is true) of selection start/end.
                If the type is "zoomed". Dispatched when user zooms to some period. start and end are indices or timestamp (when categoryAxis.parseDates is true) of selection start/end.
        */
        addListener(type: string, handler: (e: {/** Always "zoomed". */
            type: string; index: number; zooming: boolean; chart: AmChart;
        }) => void): void;

        /** Removes event listener from chart object. */
        removeListener(chart: AmChart, type: string, handler: any): void;
    }

    /** AmSerialChart is the class you have to use for majority of chart types. The supported chart types are: line, area, column, bar, step line, smoothed line, candlestick and OHLC. The chart can be rotated by 90 degrees so the column chart becomes bar chart. The chart supports simple and logarithmic scales, it can have multiple value axes. The chart can place data points at equal intervals or can parse dates and place data points at irregular intervals.
        @example
            let chartData = [{title:"sample 1",value:130},{title:"sample 2",value:26}];

            let chart = new AmCharts.AmSerialChart();
            chart.categoryField = "title";
            chart.dataProvider = chartData;

            let graph = new AmCharts.AmGraph();
            graph.valueField = "value";
            graph.type = "column";
            graph.fillAlphas = 1;
            chart.addGraph(graph);

            chart.write("chartdiv");
    */
    class AmSerialChart extends AmRectangularChart {
        /** Date format of the graph balloon (if chart parses dates and you don't use chartCursor).
            @default 'MMM DD, YYYY'
        */
        balloonDateFormat: string;
        /** Read-only. Chart creates category axis itself. If you want to change some properties, you should get this axis from the chart and set properties to this object. */
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
        /** Read-only. If category axis parses dates endDate indicates date to which the chart is currently displayed. */
        endDate: Date;
        /** Read-only. Category index to which the chart is currently displayed. */
        endIndex: number;
        /** Maximum number of series allowed to select. */
        maxSelectedSeries: number;
        /** The longest time span allowed to select (in milliseconds) for example, 259200000 will limit selection to 3 days. */
        maxSelectedTime: number;
        /** The shortest time span allowed to select (in milliseconds) for example, 1000 will limit selection to 1 second.
            @default 0
        */
        minSelectedTime: number;
        /** Specifies if scrolling of a chart with mouse wheel is enabled. If you press shift while rotating mouse wheel, the chart will zoom-in/out. */
        mouseWheelScrollEnabled: boolean;
        /** Specifies if zooming of a chart with mouse wheel is enabled. If you press shift while rotating mouse wheel, the chart will scroll. */
        mouseWheelZoomEnabled: boolean;
        /** If you set this to true, the chart will be rotated by 90 degrees (the columns will become bars). */
        rotate: boolean;
        /** Read-only. If category axis parses dates startDate indicates date from which the chart is currently displayed. */
        startDate: Date;
        /** Read-only. Category index from which the chart is currently displayed. */
        startIndex: number;
        /** Specifies if chart should zoom-out when data is updated.
            @default true
         */
        zoomOutOnDataUpdate: boolean;

        /** Number Returns index of the specified category value. value - series (category value) which index you want to find. */
        getCategoryIndexByValue(value: number): void;
        /** Zooms out, charts shows all available data. */
        zoomOut(): void;
        /** Zooms the chart by the value of the category axis. start - category value, String \\ end - category value, String */
        zoomToCategoryValues(start: Date, end: Date): void;
        /** Zooms the chart from one date to another. start - start date, Date object \\ end - end date, Date object */
        zoomToDates(start: Date, end: Date): void;
        /** Zooms the chart by the index of the category. start - start index, Number \\ end - end index, Number */
        zoomToIndexes(start: Date, end: Date): void;
    }

    // AmAngularGauge Extension for AmChart to create gauge charts.
    class AmAngularGauge extends AmChart {
        /** When enabled, chart adds aria-label attributes to columns, bullets or map objects. You can control values of these labels using properties like accessibleLabel of AmGraph. Note, not all screen readers support these tags. We tested this mostly with NVDA Screen reader. WAI-ARIA is now official W3 standard, so in future more readers will handle this well. We will be improving accessibility on our charts, so we would be glad to hear your feedback.
            @default true
         */
        accessible: boolean;

        /** Description which will be added to node of SVG element. Most of the screen readers will read this description. */
        accessibleDescription: string;

        /** Description which is added to of a SVG element. Some of the screen readers will read this description. */
        accessibleTitle: string;

        /** Specifies, if class names should be added to chart elements.
            @default false
        */
        addClassNames: boolean;

        /** Uses the whole space of the canvas to draw the gauge.
            @default true
        */
        adjustSize: boolean;

        /** Array of Labels. Example of label object, with all possible properties:
        {"x": 20, "y": 20, "text": "this is label", "align": "left", "size": 12, "color": "#CC0000", "alpha": 1, "rotation": 0, "bold": true, "url": "http://www.amcharts.com"}
            @default []
        */
        allLabels: [Label];

        /** Array of arrows. */
        arrows: [GaugeArrow];

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

        /** Array of axes.
            @default [GaugeAxis]
        */
        axes: [GaugeAxis];

        /** Opacity of background. Set it to >0 value if you want backgroundColor to work. However we recommend changing div's background-color style for changing background color.
            @default 0
        */
        backgroundAlpha: number;

        /** Background color. You should set backgroundAlpha to >0 value in order background to be visible. We recommend setting background color directly on a chart's DIV instead of using this property.
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

        /** Color of chart's border. You should set borderAlpha >0 in order border to be visible. We recommend setting border color directly on a chart's DIV instead of using this property.
            @default #000000
        */
        borderColor: string;

        /** This prefix is added to all class names which are added to all visual elements of a chart in case addClassNames is set to true.
            @default amcharts
        */
        classNamePrefix: string;

        /** In case you use gauge to create a clock, set this to true.
            @default false
        */
        clockWiseOnly: boolean;

        /** Text color.
            @default #000000
        */
        color: string;

        /** Non-commercial version only. Specifies position of link to amCharts site. Allowed values are: top-left, top-right, bottom-left and bottom-right.
            @default 'top - left'
        */
        creditsPosition: string;

        /** A config object for Data Loader plugin. Please refer to the following page for more information. */
        dataLoader: Object;

        /** Array of data objects, for example: [{country:"US", value:524},{country:"UK", value:624},{country:"Lithuania", value:824}]. You can have any number of fields and use any field names. In case of AmMap, data provider should be MapData object.

       The data set data.

       Important: if you are using date/time-based category axis, the data points needs to come pre-ordered in ascending order. Data with incorrect order might result in visual and functional glitches on the chart. */
        dataProvider: [Object];

        /** Decimal separator.
            @default .
        */
        decimalSeparator: string;

        /** Using this property you can add any additional information to SVG, like SVG filters or clip paths. The structure of this object should be identical to XML structure of a object you are adding, only in JSON format. */
        defs: Object;

        /** Export config. Specifies how export to image/data export/print/annotate menu will look and behave. You can find a lot of examples in amcharts/plugins/export folder. More details can be found here. */
        export: ExportSettings;

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

        /** Gauge face color, requires faceAlpha > 0
            @default #FAFAFA
        */
        faceColor: string;

        /** Gauge face image-pattern.
       Example: {"url":"../amcharts/patterns/black/pattern1.png", "width":4, "height":4}
        fontFamily	String	Verdana	Font family.
        fontSize	Number	11	Font size. */
        facePattern: Object;

        /** Gauge's horizontal position in pixel, origin is the center. Centered by default. */
        gaugeX: number;

        /** Gauge's vertical position in pixel, origin is the center. Centered by default. */
        gaugeY: number;

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
        legendDiv: HTMLElement;

        /** You can add listeners of events using this property. Example: listeners = [{"event":"dataUpdated", "method":handleEvent}];
            @default [Object]
        */
        listeners: [Object];

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

        /** This setting affects touch-screen devices only. If a chart is on a page, and panEventsEnabled are set to true, the page won't move if the user touches the chart first. If a chart is big enough and occupies all the screen of your touch device, the user won’t be able to move the page at all. If you think that selecting/panning the chart or moving/pinching the map is a primary purpose of your users, you should set panEventsEnabled to true, otherwise - false.
            @default true
        */
        panEventsEnabled: boolean;

        /** Specifies absolute or relative path to amCharts files, i.e."amcharts/". (where all.js files are located)
        If relative URLs are used, they will be relative to the current web page, displaying the chart.
        You can also set path globally, using global JavaScript variable AmCharts_path.If this variable is set, and "path" is not set in chart config, the chart will assume the path from the global variable.This allows setting amCharts path globally.I.e.:
        let AmCharts_path = "/libs/amcharts/";
        "path" parameter will be used by the charts to locate it's files, like images, plugins or patterns.
            @default 'amcharts/'
        */
        path: string;

        /** Specifies path to the folder where images like resize grips, lens and similar are.

           IMPORTANT: Since V3.14.12, you should use "path" to point to amCharts directory instead. The "pathToImages" will be automatically set and does not need to be in the chart config, unless you keep your images separately from other amCharts files. */
        pathToImages: string;

        /** Precision of percent values. -1 means percent values won't be rounded at all and show as they are.
                @default 2
            */
        percentPrecision: number;

        /** Precision of values. -1 means values won't be rounded at all and show as they are.
                @default -1
            */
        precision: number;

        /**Prefixes which are used to make big numbers shorter: 2M instead of 2000000, etc.Prefixes are used on value axes and in the legend.To enable prefixes, set usePrefixes property to true.
                @default [{ "number": 1e+3, "prefix": "k" }, { "number": 1e+6, "prefix": "M" }, { "number": 1e+9, "prefix": "G" }, { "number": 1e+12, "prefix": "T" }, { "number": 1e+15, "prefix": "P" }, { "number": 1e+18, "prefix": "E" }, { "number": 1e+21, "prefix": "Z" }, { "number": 1e+24, "prefix": "Y" }]
            */
        prefixesOfBigNumbers: [Object];

        /** Prefixes which are used to make small numbers shorter: 2μ instead of 0.000002, etc.Prefixes are used on value axes and in the legend.To enable prefixes, set usePrefixes property to true.
                @default [{ "number": 1e-24, "prefix": "y" }, { "number": 1e-21, "prefix": "z" }, { "number": 1e-18, "prefix": "a" }, { "number": 1e-15, "prefix": "f" }, { "number": 1e-12, "prefix": "p" }, { "number": 1e-9, "prefix": "n" }, { "number": 1e-6, "prefix": "μ" }, { "number": 1e-3, "prefix": "m" }]
            */
        prefixesOfSmallNumbers: [Object];

        /** If processTimeout is > 0, 1000 data items will be parsed at a time, then the chart will make pause and continue parsing data until it finishes.
                @default 1000
            */
        processCount: number;

        /** If you set it to 1 millisecond or some bigger value, chart will be built in chunks instead of all at once. This is useful if you work with a lot of data and the initial build of the chart takes a lot of time, which freezes the whole web application by not allowing other processes to do their job while the chart is busy.
                @default 0
            */
        processTimeout: number;

        /** A config object for Responsive plugin. Please refer to the following page for more information. */
        responsive: Object;

        /** Duration of arrow animation.
                @default 1
            */
        startDuration: number;

        /** Transition effect of the arrows, possible effects: easeOutSine, easeInSine, elastic, bounce.
                @default easeInSine
            */
        startEffect: string;

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
        titles: [Title];

        /** If you set it to 200 (milliseconds) or so, the chart will fire clickGraphItem or clickSlice (AmSlicedChart) or clickMapObject only if user holds his/her finger for 0.2 seconds (200 ms) on the column/bullet/slice/map object.
            @default 0
        */
        touchClickDuration: number;

        /** Type of a chart. Required when creating chart using JSON. Possible types are: serial, pie, xy, radar, funnel, gauge, map, gantt, stock. */
        type: string;

        /** If true, prefixes will be used for big and small numbers.You can set arrays of prefixes via prefixesOfSmallNumbers and prefixesOfBigNumbers properties.
                @default false
            */
        usePrefixes: boolean;

        /** Read-only. Indicates current version of a script. */
        version: string;

        /** Adds arrow to the chart. */
        addArrow(arrow: GaugeArrow): void;

        /** Adds axis to angular gauge. */
        addAxis(axis: GaugeAxis): void;

        /** Adds a label on a chart. You can use it for labeling axes, adding chart title, etc. x and y coordinates can be set in number, percent, or a number with ! in front of it - coordinate will be calculated from right or bottom instead of left or top. */
        addLabel(x: number, y: number, text: string, align: string, size: number, color: string, rotation: number, alpha: number, bold: boolean, url: string): void;

        /** Adds a legend to the chart. By default, you don't need to create div for your legend, however if you want it to be positioned in some different way, you can create div anywhere you want and pass id or reference to your div as a second parameter. (NOTE: This method will not work on StockPanel.) */
        addLegend(legend: AmLegend, legendDivId?: string): void;
        /**
         * Adds a legend to the chart.
         * By default, you don't need to create div for your legend, however if you want it to be positioned in some different way, you can create div anywhere you want and pass id or reference to your div as a second parameter.
         * (NOTE: This method will not work on StockPanel.)
         * @param legend - The legend.
         * @param legendDiv - Legend div (optional).
         */
        addLegend(legend: AmLegend, legendDiv: HTMLElement): void;

        /** Adds event listener to the object. */
        addListener(type: string, handler: Function): void;

        /** Adds title to the top of the chart. Pie, Radar positions are updated so that they won't overlap. Plot area of Serial/XY chart is also updated unless autoMargins property is set to false. You can add any number of titles - each of them will be placed in a new line. To remove titles, simply clear titles array: chart.titles = []; and call chart.validateNow() method. */
        addTitle(text: string, size: number, color: string, alpha: number, bold: boolean): void;

        /** Clears the chart area, intervals, etc. */
        clear(): void;

        /** Removes all labels added to the chart. */
        clearLabels(): void;

        /** Use this method to force the chart to resize to it's current container size. */
        invalidateSize(): void;

        /** This method allows to create charts with a single config. */
        makeChart(container: string, config: any, delay: number): AmChart;

        /** Removes arrow from the chart. */
        removeArrow(arrow: GaugeArrow): void;

        /** Removes axis from the chart. */
        removeAxis(axis: GaugeAxis): void;

        /** Removes chart's legend. */
        removeLegend(): void;

        /** Removes event listener from chart object. */
        removeListener(chart: AmChart, type: string, handler: any): void;

        /** This method should be called after data in your data provider changed or a new array was set to dataProvider. After calling this method the chart will parse data and redraw. */
        validateData(): void;

        /** This method should be called after you changed one or more properties of any class. The chart will redraw after this method is called.Both attributes, validateData and skipEvents are optional (false by default). */
        validateNow(): void;

        /** Adds chart to the specified DIV.
            @param container DIV object which will hold the chart. */
        write(container: HTMLElement): void;
        /** Adds chart to the specified DIV.
            @param container Id of a DIV which will hold the chart. */
        write(container: string): void;
    }

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
        innerRadius: any;

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
            @default '90%'
        */
        radius: any;

        /** Width of arrow root.
            @default 8
        */
        startWidth: number;

        /** Value to which the arrow should point at. */
        value: number;

        /** Sets value for the arrow. Arrow will animate to this value if you do it after chart is written to it's container. */
        setValue(value: number): void;
    }

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
        bandGradientRatio: [number];

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
        bands: [GaugeBand];

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
            @default '0%'
        */
        centerX: any;

        /** Y position of the axis, relative to the center of the gauge.
            @default '0%'
        */
        centerY: any;

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
        id: any;

        /** Specifies if labels should be placed inside or outside the axis.
            @default true
        */
        inside: boolean;

        /** Frequency of labels.
            @default 1
        */
        labelFrequency: number;

        /** You can use this function to format axis labels. This function is called and value is passed as a attribute: labelFunction(value); */
        labelFunction: Function;

        /** Distance from axis to the labels.
            @default 15
        */
        labelOffset: number;

        /** Specifies if labels on the axis should be shown.
            @default true
        */
        labelsEnabled: boolean;

        /** You can add listeners of events using this property. Example: listeners = [{"event":"clickBand", "method":handleClick}]; */
        listeners: Object[];

        /** Interval, at which minor ticks should be placed. */
        minorTickInterval: number;

        /** Length of a minor tick.
            @default 5
        */
        minorTickLength: number;

        /** Axis radius.
            @default '95%'
        */
        radius: any;

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
        unitPosition: string;

        /** Specifies if small and big numbers should use prefixes to make them more readable.
            @default false
        */
        usePrefixes: boolean;

        /** Interval, at which ticks with values should be placed. */
        valueInterval: number;

        /** Adds event listener to the object. */
        addListener(type: string, handler: any): void;

        /** Removes event listener from chart object. */
        removeListener(chart: AmChart, type: string, handler: any): void;

        /** Sets bottom text. */
        setBottomText(text: string): void;

        /** Sets top text. */
        setTopText(textstring: string): void;

        /** Returns angle of the value. */
        value2angle(value: number): void;
    }

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
        gradientRatio: [number];

        /** Unique id of a band. */
        id: string;

        /** Inner radius of a band. If not set any, the band will end with the end of minor ticks. Set 0 if you want the band to be drawn to the axis center. */
        innerRadius: any;

        /** Band radius. If not set any, the band will start with the axis outline. */
        radius: any;

        /** Start value of a fill. */
        startValue: number;

        /** Gauge band can be clickable and can lead to some page. */
        url: string;

        /** Sets end value for the band. */
        setEndValue(value: number): void;

        /** Sets start value for the band. */
        setStartValue(value: number): void;
    }

    class PeriodSelector {
        /** Date format of date input fields. Check [[http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/mx/formatters/DateFormatter.html DD-MM-YYYY */
        dateFormat: string;
        /** Text displayed next to "from" date input field. From: */
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
        /** Array of predefined period objects. Period object has 4 properties - period, count, label and selected. Possible period values are: "ss" - seconds, "mm" - minutes, "hh" - hours, "DD" - days, "MM" - months and "YYYY" - years. property "count" specifies how many periods this button will select. "label" will be displayed on a button and "selected" is a boolean which specifies if this button is selected when chart is initialized or not. Example: {period:"DD", count:10, label:"10 days", selected:false}. */
        periods: any[];
        /** Text displayed next to predefined period buttons. Zoom: */
        periodsText: string;
        /** Possible values: "right", "left", "top", "bottom". bottom */
        position: string;
        /** Specifies whether predefined period buttons should select a period from the beginning or the end of the data. */
        selectFromStart: boolean;
        /** Text displayed next to "to" date input field. To: */
        toText: string;
        /** Width of a period selector, when position is "left" or "right".
            @default 180
        */
        width: number;

        /** Adds event listener to the object.
       .
@param handler - Dispatched when dates in period selector input fields are changed or user clicks on one of the predefined period buttons. */

        addListener(type: string, handler: (e: {
            /** Always: "changed" */

            type: string;
            startDate: Date;
            endDate: Date;
            predefinedPeriod: string;
            count: number;
        }) => void): void;

        /** Removes event listener from chart object. */
        removeListener(chart: AmChart, type: string, handler: any): void;
    }

    /** PanelsSettings settings set's settings for all StockPanels. If you change a property after the chart is initialized, you should call stockChart.validateNow() method in order for it to work. If there is no default value specified, default value of StockPanel class will be used. */

    class PanelsSettings {
        /** The angle of the 3D part of plot area. This creates a 3D effect (if the "depth3D" is > 0). */
        angle: number;
        /** Opacity of panel background. Possible values are 1 and 0. Values like 0.5 will not make it half-transparent. */
        backgroundAlpha: number;
        /** Background color of panels. Set backgroundAlpha to > 0 value in order to make background visible. #FFFFFF */
        backgroundColor: string;
        /** The gap in pixels between two columns of the same category. */
        columnSpacing: number;
        /** Relative width of columns. Valid values 0 - 1. */
        columnWidth: number;
        /** The depth of the 3D part of plot area. This creates a 3D effect (if the "angle" is > 0). */
        depth3D: number;
        /** Font family. */
        fontFamily: string;
        /** Font size. */
        fontSize: string;
        /** Number of pixels between the container's bottom border and plot area.
            @default 1
        */
        marginBottom: number;
        /** Number of pixels between the container's left border and plot area. If your left valueAxis values ar not placed inside the plot area, you should set marginLeft to 80 or some close value. */
        marginLeft: number;
        /** Number of pixels between the container's left border and plot area. If your right valueAxis values ar not placed inside the plot area, you should set marginRight to 80 or some close value. */
        marginRight: number;
        /** Number of pixels between the container's top border and plot area. */
        marginTop: number;
        /** Gap between panels.
            @default 8
        */
        panelSpacing: number;
        /** This setting affects touch-screen devices only. If a chart is on a page, and panEventsEnabled are set to true, the page won't move if the user touches the chart first. If a chart is big enough and occupies all the screen of your touch device, the user won’t be able to move the page at all. That's why the default value is "false". If you think that selecting or or panning the chart is a primary purpose of your chart users, you should set panEventsEnabled to true. */
        panEventsEnabled: boolean;
        /** The opacity of plot area's border. */
        plotAreaBorderAlpha: number;
        /** The color of the plot area's border. */
        plotAreaBorderColor: string;
        /** Opacity of plot area fill. */
        plotAreaFillAlphas: number;
        /** Specifies the colors used to tint the background gradient fill of the plot area. String or Array of Strings */
        plotAreaFillColors: any;
        /** Prefixes which are used to make big numbers shorter: 2M instead of 2000000, etc. Prefixes are used on value axes and in the legend. To enable prefixes, set usePrefixes property to true. [{number:1e+3,prefix:"k"},{number:1e+6,prefix:"M"},{number:1e+9,prefix:"G"},{number:1e+12,prefix:"T"},{number:1e+15,prefix:"P"},{number:1e+18,prefix:"E"},{number:1e+21,prefix:"Z"},{number:1e+24,prefix:"Y"}] */
        prefixesOfBigNumbers: any[];
        /** Prefixes which are used to make small numbers shorter: 2μ instead of 0.000002, etc. Prefixes are used on value axes and in the legend. To enable prefixes, set usePrefixes property to true. [{number:1e-24, prefix:"y"},{number:1e-21, prefix:"z"},{number:1e-18, prefix:"a"},{number:1e-15, prefix:"f"},{number:1e-12, prefix:"p"},{number:1e-9, prefix:"n"},{number:1e-6, prefix:"μ"},{number:1e-3, prefix:"m"}] */
        prefixesOfSmallNumbers: any[];
        /** Specifies whether the animation should be sequenced or all objects should appear at once. */
        sequencedAnimation: boolean;
        /** The initial opacity of the column/line. If you set startDuration to a value higher than 0, the columns/lines will fade in from startAlpha. */
        startAlpha: number;
        /** Duration of the animation, in seconds. */
        startDuration: number;
        /** Possible values are: "linear", "<", ">" "<>", "elastic", "bounce". */
        startEffect: string;
        /** If true, prefixes will be used for big and small numbers. */
        usePrefixes: boolean;
    }

    /** DataSet is objects which holds all information about data. */

    class DataSet {
        /** Category field name in your dataProvider. */
        categoryField: string;
        /** Color of the data set. One of colors from AmStockChart.colors array will be used if not set. */
        color: string;
        /** Whether this data set is selected for comparing. If you change this property, you should call stockChart.validateData() method in order the changes to be applied. */
        compared: boolean;
        /** Data provider of the data set. */
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

    class StockGraph extends AmGraph {
        /** Specifies whether this graph will be compared if some data set is selected for comparing. */
        comparable: boolean;
        /** Specifies a field to be used to generate comparing graph. Note, this field is not the one used in your dataProvider, but toField from FieldMapping object. */
        compareField: string;
        /** Balloon color of comparing graph. */
        compareGraphBalloonColor: string;
        /** Balloon text of comparing graph. */
        compareGraphBalloonText: string;
        /** Bullet of comparing graph. Possible values are: "square", "round", "line", "triangleUp", "triangleDown", "dashedLine", "bubble". */
        compareGraphBullet: string;
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
        /** Thickness of compare graph. */
        compareGraphLineThickness: number;
        /** Type of comparing graph. Possible values are: "line", "column", "step", "smoothedLine." line */
        compareGraphType: string;
        /** Specifies if compare graph is visible in legend.
            @default true
        */
        compareGraphVisibleInLegend: boolean;
        /** When data is grouped to periods, the graph must know which period value should be used. Possible values are: "Open", "Low", "High", "Close", "Average" and "Sum". Close */
        periodValue: string;
        /** Specifies whether data set color should be used as this graph's lineColor.
            @default true
        */
        useDataSetColors: boolean;
    }

    /** StockEvent is object which holds information about event(bullet).Values from StockEventsSettings will be used if not set.Stock event bullet's size depends on it's graphs fontSize.When user rolls - over, clicks or rolls - out of the event bullet, AmStockChart dispatches events.*/
    class StockEvent {
        /** Opacity of bullet background.
            @default 1
        */
        backgroundAlpha: number;
        /** Color of bullet background. #DADADA */
        backgroundColor: string;
        /** Opacity of bullet border.
            @default 1
        */
        borderAlpha: number;
        /** Bullet border color. #888888 */
        borderColor: string;
        /** The color of the event text. #000000 */
        color: string;
        /** Date of an event. Must be Date object, not a string. */
        date: Date;
        /** graph on which event will be displayed. */
        graph: StockGraph;
        /** Roll-over background color. #CC0000 */
        rollOverColor: string;
        /** Specifies if the event should be displayed on category axis */
        showOnAxis: boolean;
        /** Letter which will be displayed on the event. Not all types can display letters. "text" type can display longer texts. */
        text: string;
        /** Type of bullet. Possible values are: "flag", "sign", "pin", "triangleUp", "triangleDown", "triangleLeft", "triangleRight", "text", "arrowUp", "arrowDown". sign */
        type: string;
        /** A URL to go to when user clicks the event. */
        url: string;
        /** target of url, "_blank" for example. */
        urlTarget: string;
    }

    /** Creates a label on the chart which can be placed anywhere, multiple can be assigned. */
    class Label {
        /** @Default 'left' */
        align: string;
        /** @Default 1 */
        alpha: number;
        /** Specifies if label is bold or not. */
        bold: boolean;
        /** Color of a label */
        color: string;
        /** Unique id of a Label. You don't need to set it, unless you want to. */
        id: string;
        /** Rotation angle. */
        rotation: number;
        /** Text size */
        size: number;
        /** Text of a label */
        text: string;
        /** URL which will be access if user clicks on a label. */
        url: string;
        /** X position of a label. */
        x: number | string;
        /** y position of a label. */
        y: number | string;
    }
    /** Common settings of legends. If you change a property after the chart is initialized, you should call stockChart.validateNow() method in order for it to work. If there is no default value specified, default value of StockLegend class will be used. */
    class LegendSettings {
        /** Alignment of legend entries. Possible values are: "left", "right" and "center". */
        align: string;
        /** Specifies if each legend entry should take the same space as the longest legend entry. */
        equalWidths: boolean;
        /** Horizontal space between legend item and left/right border. */
        horizontalGap: number;
        /** The text which will be displayed in the legend. Tag [[title]] will be replaced with the title of the graph. */
        labelText: string;
        /** Space below the last row of the legend, in pixels. */
        marginBottom: number;
        /** Space above the first row of the legend, in pixels. */
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
        /** Shape of the legend marker (key). Possible values are: "square", "circle", "line", "dashedLine", "triangleUp", "triangleDown", "bubble", "none". */
        markerType: string;
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
        switchType: string;
        /** Specifies whether the legend text is clickable or not. Clicking on legend text can show/hide value balloons if they are enabled. */
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

    /** DataSetSelector is a tool for selecting data set's as main and for comparing with main data set. */
    class DataSetSelector {
        /** Text displayed in the "compare to" combobox (when position is "top" or "bottom"). Select... */
        comboBoxSelectText: string;
        /** Text displayed near "compare to" list. Compare to: */
        compareText: string;
        /** The maximum height of the Compare to field in pixels.
            @default 150
        */
        listHeight: number;
        /** Possible values: "right", "left", "top", "bottom". "top" and "bottom" positions has a limitation - only one data set can be selected for comparing. left */
        position: string;
        /** Text displayed near "Select" dropDown. Select: */
        selectText: string;
        /** Width of a Data set selector, when position is "left" or "right".
            @default 180
        */
        width: number;
    }

    /** AmBalloon is the class which generates balloons (datatips). Balloon follows the mouse when you roll-over the pie slice/line bullet/column/etc, chart indicator of serial charts displays value balloons and category balloon. Balloon instance is created by the chart automatically and can be accessed via "balloon" property of AmChart. Chart shows/hides and sets position for every balloon automatically, so all you need to do is to change balloon appearance, if you want to.
        @example
            let chart = new AmCharts.AmSerialChart();
            // get balloon intance
            let balloon = chart.balloon;
            // set properties
            balloon.adjustBorderColor = true;
            balloon.color = "#000000";
            balloon.cornerRadius = 5;
            balloon.fillColor = "#FFFFFF";
    */
    class AmBalloon {
        /** If this is set to true, border color instead of background color will be changed when user rolls-over the slice, graph, etc. */
        adjustBorderColor: boolean;
        /** Balloon border opacity. Value range is 0 - 1.
            @default 1
        */
        borderAlpha: number;
        /** Balloon border color. #FFFFFF */
        borderColor: string;
        /** Balloon border thickness.
            @default 2
        */
        borderThickness: number;
        /** Color of text in the balloon. #FFFFFF */
        color: string;
        /** Balloon corner radius.
            @default 6
        */
        cornerRadius: number;
        /** Balloon background opacity.
            @default 1
        */
        fillAlpha: number;
        /** Balloon background color. Usually balloon background color is set by the chart. Only if "adjustBorderColor" is "true" this color will be used. #CC0000 */
        fillColor: string;
        /** Size of text in the balloon. Chart's fontSize is used by default. */
        fontSize: string;
        /** Horizontal padding of the balloon.
            @default 8
        3*/
        horizontalPadding: number;
        /** The width of the pointer (arrow) "root". Only used if cornerRadius is 0.
            @default 10
        */
        pointerWidth: number;
        /** If cornerRadius of a balloon is >0, showBullet is set to true for value balloons when ChartCursor is used. If you don't want the bullet near the balloon, set it to false: chart.balloon.showBullet = false */
        showBullet: boolean;
        /** Text alignment, possible values "left", "middle" and "right" middle */
        textAlign: string;
        /** Color of the text shadow. #000000 */
        textShadowColor: string;
        /** Vertical padding of the balloon.
            @default 5
        */
        verticalPadding: number;
        /** Hides balloon. */
        hide(): void;
        /** Defines a square within which the balloon should appear. Bounds are set by chart class, you don't need to call this method yourself. */
        setBounds(left: number, top: number, right: number, bottom: number): void;
        /** Sets coordinates the balloon should point to. */
        setPosition(x: number, y: number): void;
        /** Specifies the text which should be displayed. */
        show(value: string): void;
    }

    /** CategoryAxesSettings settings set's settings common for all CategoryAxes of StockPanels. If you change a property after the chart is initialized, you should call stockChart.validateNow() method in order for it to work. If there is no default value specified, default value of CategoryAxis class will be used. */
    class CategoryAxesSettings {
        /** Specifies whether number of gridCount is specified automatically, according to the axis size.
            @default true
        */
        autoGridCount: boolean;
        /** Axis opacity. */
        axisAlpha: number;
        /** Axis color. */
        axisColor: string;
        /** Height of category axes. Set it to 0 if you set inside property to true.
            @default 28
        */
        axisHeight: number;
        /** Thickness of the axis. */
        axisThickness: number;
        /** Text color. */
        color: string;
        /** Length of a dash. */
        dashLength: number;
        /** Date formats of different periods. Possible period values: fff - milliseconds, ss - seconds, mm - minutes, hh - hours, DD - days, MM - months, WW - weeks, YYYY - years. Check this page for date formatting strings. */
        dateFormats: any[];
        /** If you want data points to be placed at equal intervals (omiting dates with no data), set equalSpacing to true. */
        equalSpacing: boolean;
        /** Fill opacity. Every second space between grid lines can be filled with fillColor. */
        fillAlpha: number;
        /** Fill color. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills. */
        fillColor: string;
        /** Text size. */
        fontSize: string;
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
        /** Periods to which data will be gruoped in case there are more data items in the selected period than specified in maxSeries property. ["ss", "10ss", "30ss", "mm", "10mm", "30mm", "hh", "DD", "WW", "MM", "YYYY"] */
        groupToPeriods: any[];
        /** Specifies whether values should be placed inside or outside of plot area. */
        inside: boolean;
        /** Rotation angle of a label. */
        labelRotation: number;
        /** Maximum series shown at a time. In case there are more data points in the selection than maxSeries, the chart will group data to longer periods, for example - you have 250 days in the selection, and maxSeries is 150 - the chart will group data to weeks.
            @default 150
        */
        maxSeries: number;
        /** Specifies the shortest period of your data. fff - millisecond, ss - second, mm - minute, hh - hour, DD - day, MM - month, YYYY - year. DD */
        minPeriod: string;
        /** top or "bottom". */
        position: string;
        /** Specifies whether the graph should start on axis or not. In case you display columns, it is recommended to set this to false. startOnAxis can be set to true only if equalSpacing is set to true. */
        startOnAxis: boolean;
        /** Tick length. */
        tickLength: number;
    }

    /** ChartCursorSettings settings set's settings for chart cursor. If you change a property after the chart is initialized, you should call stockChart.validateNow() method in order for it to work. If there is no default value specified, default value of ChartCursor class will be used. */
    class ChartCursorSettings {
        /** Specifies if bullet for each graph will follow the cursor. */
        bulletsEnabled: boolean;
        /** Size of bullets, following the cursor. */
        bulletSize: number;
        /** Opacity of the category balloon. */
        categoryBalloonAlpha: number;
        /** Color of the category balloon. */
        categoryBalloonColor: string;
        /** Array of date format objects. Date format object must have "period" and "format" items. Available periods are: fff - millisecond, ss - second, mm - minute, hh - hour, DD - date, WW - week, MM - month, YYYY - year. [{period:"YYYY", format:"YYYY"}, {period:"MM", format:"MMM, YYYY"}, {period:"WW", format:"MMM DD, YYYY"}, {period:"DD", format:"MMM DD, YYYY"}, {period:"hh", format:"JJ:NN"}, {period:"mm", format:"JJ:NN"}, {period:"ss", format:"JJ:NN:SS"}, {period:"fff", format:"JJ:NN:SS"}] */
        categoryBalloonDateFormats: any[];
        /** Specifies whether category balloon is enabled. */
        categoryBalloonEnabled: boolean;
        /** Opacity of the cursor line. */
        cursorAlpha: number;
        /** Color of the cursor line. */
        cursorColor: string;
        /** Possible values: "start", "middle" and "mouse". */
        cursorPosition: string;
        /** Set this to "false" if you don't want chart cursor to appear in your charts.
            @default true
        */
        enabled: boolean;
        /** If this is set to true, the user will be able to pan the chart instead of zooming. */
        pan: boolean;
        /** Specifies whether value balloons are enabled. In case they are not, the balloons might be displayed anyway, when the user rolls-over the column or bullet. */
        valueBalloonsEnabled: boolean;
        /** Specifies if the user can zoom-in the chart. If pan is set to true, zoomable is switched to false automatically. */
        zoomable: boolean;
    }

    /* ChartScrollbarSettings settings set's settings for chart scrollbar. If you change a property after the chart is initialized, you should call stockChart.validateNow() method in order for it to work. If there is no default value specified, default value of ChartScrollbar class will be used.*/
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
        /** Set false if you don't need scrollbar.
            @default true
        */
        enabled: boolean;
        /** Font size. */
        fontSize: string;
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
        graphType: string;
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
        /** Specifies whether resize grips are hidden when mouse is away from the scrollbar. */
        hideResizeGrips: boolean;
        /** Duration of scrolling, when the user clicks on scrollbar's background, in seconds. */
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
    }

    /** AmGraph class displays all types of graphs - line, column, step line, smoothed line, ohlc and candlestick.
        @example
            let chart = new AmCharts.AmSerialChart();
            let graph = new AmCharts.AmGraph();
            graph.valueField = 'value';
            graph.type = 'column';
            graph.fillAlphas = 1;
            chart.addGraph(graph);
    */
    class AmGraph {
        /** Text which screen readers will read if user rolls-over the bullet/column or sets focus using tab key (this is possible only if tabIndex property of AmGraph is set to some number). Text is added as aria-label tag. Note - not all screen readers and browsers support this.
            @default "[[title]] [[category]] [[value]]"
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
        balloonFunction(graphDataItem: GraphDataItem, amGraph: AmGraph): string;
        /** Balloon text. You can use tags like [[value]], [[description]], [[percents]], [[open]], [[category]] or any other field name from your data provider. HTML tags can also be used.
            @default [[value]]
        */
        balloonText: string;
        /** Specifies if the line graph should be placed behind column graphs
            @default false
        */
        behindColumns: boolean;
        /** Type of the bullets. Possible values are: "none", "round", "square", "triangleUp", "triangleDown", "triangleLeft", "triangleRight", "bubble", "diamond", "xError", "yError" and "custom".
            @default "none"
        */
        bullet: string;
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

         NOTE: clustering works only for graphs of type "column".
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
            @default "MMM DD, YYYY"
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
        /** XY chart only. If you set this property to id or reference of your X or Y axis, and the fillAlphas is > 0, the area between graph and axis will be filled with color, like in this demo. */
        fillToAxis: ValueAxis;
        /** You can set another graph here and if fillAlpha is >0, the area from this graph to fillToGraph will be filled (instead of filling the area to the X axis). This feature is not supported by smoothedLine graphs and Radar chart. */
        fillToGraph: AmGraph;
        /** Column width in pixels. If you set this property, columns will be of a fixed width and won't adjust to the available space. */
        fixedColumnWidth: number;
        /** Size of value labels text. Will use chart's fontSize if not set. */
        fontSize: number;
        /** If this is set `true`, the graph will always break the line if the distance in time between two adjacent data points is bigger than `gapPeriod x minPeriod`, even if `connect` is set to `true`.
            @default false
        */
        forceGap: boolean;
        /** Name of the gap field in your dataProvider. You can force graph to show gap at a desired data point using this feature. This feature does not work with XY chart. */
        gapField: string;
        /** Using this property you can specify when graph should display gap - if the time difference between data points is bigger than duration of minPeriod * gapPeriod, and connect property of a graph is set to false, graph will display gap.
            @default 1.1
        */
        gapPeriod: number;
        /** Orientation of the gradient fills (only for "column" graph type). Possible values are "vertical" and "horizontal".
            @default "vertical"
        */
        gradientOrientation: string;
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
            @default "auto"
        */
        labelAnchor: string;
        /** Name of label color field in data provider. */
        labelColorField: string;
        /** You can use it to format labels of data items in any way you want. Graph will call this function and pass reference to GraphDataItem and formatted text as attributes. This function should return string which will be displayed as label. */
        labelFunction(value: number, valueText: string, valueAxis: ValueAxis): string;
        labelFunction(valueText: string, data: Date, valueAxis: ValueAxis): string;
        /** Offset of data label.
            @default 0
        */
        labelOffset: number;
        /** Position of value label. Possible values are: "bottom", "top", "right", "left", "inside", "middle". Sometimes position is changed by the chart, depending on a graph type, rotation, etc.
            @default "top"
        */
        labelPosition: string;
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
        legendColorFunction: Object;
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
        markerType: string;
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
        /** Value of pattern should be object with url, width, height of an image, optionally it might have x, y, randomX and randomY values. For example: {"url":"../amcharts/patterns/black/pattern1.png", "width":4, "height":4}. If you want to have individual patterns for each column, define patterns in data provider and set graph.patternField property. Check amcharts/patterns folder for some patterns. You can create your own patterns and use them. Note, x, y, randomX and randomY properties won't work with IE8 and older. 3D bar/Pie charts won't work properly with patterns.  */
        pattern: Object;
        /** Field name in your data provider which holds pattern information. Value of pattern should be object with url, width, height of an image, optionally it might have x, y, randomX and randomY values. For example: {"url":"../amcharts/patterns/black/pattern1.png", "width":4, "height":4}. Check amcharts/patterns folder for some patterns. You can create your own patterns and use them. Note, x, y, randomX and randomY properties won't work with IE8 and older. 3D bar/Pie charts won't work properly with patterns. */
        patternField: string;
        /** This property can be used by step graphs - you can set how many periods one horizontal line should span.
            @default 1
        */
        periodSpan: number;
        /** Specifies where data points should be placed - on the beginning of the period (day, hour, etc) or in the middle (only when parseDates property of categoryAxis is set to true). This setting affects Serial chart only. Possible values are "start", "middle" and "end"
            @default "middle"
        */
        pointPosition: string;
        /** Precision of values. Will use chart's precision if not set any. */
        precision: number;
        /**  If this is set to true, candlesticks will be colored in a different manner - if current close is less than current open, the candlestick will be empty, otherwise - filled with color. If previous close is less than current close, the candlestick will use positive color, otherwise - negative color.
            @default false
        */
        proCandlesticks: boolean;
        /** Gantt chart only. Contains unmodified segment object from data provider. */
        segmentData: Object;
        /** If graph's type is column and labelText is set, graph hides labels which do not fit into the column's space or go outside plot area. If you don't want these labels to be hidden, set this to true.
            @default false
        */
        showAllValueLabels: boolean;
        /** Specifies whether the value balloon of this graph is shown when mouse is over data item or chart's indicator is over some series.
            @default true
        */
        showBalloon: boolean;
        /** Specifies graphs value at which cursor is showed. This is only important for candlestick and ohlc charts, also if column chart has "open" value. Possible values are: "open", "close", "high", "low". "top" and "bottom" values will glue the balloon to top/bottom of the plot area.
            @default "close"
        */
        showBalloonAt: string;
        /** Works with candlestick graph type, you can set it to open, close, high, low. If you set it to high, the events will be shown at the tip of the high line.
            @default "close"
        */
        showBulletsAt: string;
        /** If you want mouse pointer to change to hand when hovering the graph, set this property to true.
            @default false
        */
        showHandOnHover: boolean;
        /**  It can only be used together with topRadius (when columns look like cylinders). If you set it to true, the cylinder will be lowered down so that the center of it's bottom circle would be right on category axis.
            @default false
        */
        showOnAxis: boolean;
        /** If the value axis of this graph has stack types like "regular" or "100%" You can exclude this graph from stacking.
            @default true
        */
        stackable: boolean;
        /** Step graph only. Specifies to which direction step should be drawn.
            @default "right"
        */
        stepDirection: string;
        /** If you set it to false, the graph will not be hidden when user clicks on legend entry.
            @default true
        */
        switchable: boolean;
        /** In case you set it to some number, the chart will set focus on bullet/column (starting from first) when user clicks tab key. When a focus is set, screen readers like NVDA Screen reader will read label which is set using accessibleLabel property of AmGraph. Note, not all browsers and readers support this.  */
        tabIndex: number;
        /** Graph title. */
        title: string;
        /** If you set this to 1, columns will become cylinders (must set depth3D and angle properties of a chart to >0 values in order this to be visible). you can make columns look like cones (set topRadius to 0) or even like some glasses (set to bigger than 1). We strongly recommend setting grid opacity to 0 in order this to look good.  */
        topRadius: number;
        /** Type of the graph. Possible values are: "line", "column", "step", "smoothedLine", "candlestick", "ohlc". XY and Radar charts can only display "line" type graphs.
            @default "line"
        */
        type: string;
        /** Name of the url field in your dataProvider. */
        urlField: string;
        /** Target to open URLs in, i.e. _blank, _top, etc. */
        urlTarget: string;
        /** If set to true, the bullet border will take the same color as graph line.
            @default false
        */
        useLineColorForBulletBorder: boolean;
        /**  If negativeLineColor and/or negativeFillColors are set and useNegativeColorIfDown is set to true (default is false), the line, step and column graphs will use these colors for lines, bullets or columns if previous value is bigger than current value. In case you set openField for the graph, the graph will compare current value with openField value instead of comparing to previous value. Here is a demo.
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
    }

    /** AxisBase is the base class for ValueAxis and CategoryAxis. It can not be instantiated explicitly. */
    class AxisBase {
        /** Specifies whether number of gridCount is specified automatically, acoarding to the axis size.
            @default true
        */
        autoGridCount: boolean;
        /** Axis opacity. Value range is 0 - 1.
            @default 1
        */
        axisAlpha: number;
        /** Axis color.  #000000 */
        axisColor: string;
        /** Thickness of the axis.
            @default 1
        */
        axisThickness: number;
        /** Color of axis value labels. Will use chart's color if not set. */
        color: string;
        /** Length of a dash. 0 means line is not dashed. */
        dashLength: number;
        /** Fill opacity. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills.  */
        fillAlpha: number;
        /** Fill color. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills. #FFFFFF */
        fillColor: string;
        /** Size of value labels text. Will use chart's fontSize if not set. */
        fontSize: string;
        /** Opacity of grid lines. 0.2 */
        gridAlpha: number;
        /** Color of grid lines. #000000 */
        gridColor: string;
        /** Number of grid lines. In case this is value axis, or your categoryAxis parses dates, the number is approximate. The default value is 5. If you set autoGridCount to true, this property is ignored.
            @default 5
        */
        gridCount: number;
        /** Thickness of grid lines.
            @default 1
        */
        gridThickness: number;
        /** The array of guides belonging to this axis. */
        guides: any[];
        /** If autoMargins of a chart is set to true, but you want this axis not to be measured when calculating margin, set ignoreAxisWidth to true.  */
        ignoreAxisWidth: boolean;
        /** Specifies whether values should be placed inside or outside plot area. */
        inside: boolean;
        /** Frequency at which labels should be placed. Doesn't work for CategoryAxis if parseDates is set to true.
            @default 1
        */
        labelFrequency: number;
        /** Rotation angle of a label. Only horizontal axis' values can be rotated. If you set this for vertical axis, the setting will be ignored. */
        labelRotation: number;
        /** Specifies whether axis displays category axis' labels and value axis' values.
            @default true
        */
        labelsEnabled: boolean;
        /** The distance of the axis to the plot area, in pixels. Negative values can also be used.  */
        offset: number;
        /** Possible values are: "top", "bottom", "left", "right". If axis is vertical, default position is "left". If axis is horizontal, default position is "bottom".  */
        position: string;
        /** Whether to show first axis label or not.
            @default true
        */
        showFirstLabel: boolean;
        /** Whether to show last axis label or not.
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
        titlefontSize: string;

        /** Adds guide to the axis. */
        addGuide(guide: Guide): void;
        /** Removes guide from the axis. */
        removeGuide(guide: Guide): void;
    }

    /** ValueAxis is the class which displays value axis for the chart. The chart can have any number of value axes. For Serial chart one value axis is created automatically. For XY Chart two value axes (horizontal and vertical) are created automatically. */
    class ValueAxis extends AxisBase {
        /** Radar chart only. Specifies distance from axis to the axis title (category)  10 */
        axisTitleOffset: number;
        /** Read-only. Coordinate of the base value. */
        baseCoord: number;
        /** Specifies base value of the axis. */
        baseValue: number;
        /** If your values represents time units, and you want value axis labels to be formatted as duration, you have to set the duration unit. Possible values are: "ss", "mm", "hh" and "DD". */
        duration: string;
        /** If duration property is set, you can specify what string should be displayed next to day, hour, minute and second. {DD:"d. ", hh:":", mm:":",ss:""} */
        durationUnits: Object;
        /** Radar chart only. Possible values are: "polygons" and "circles". Set "circles" for polar charts. polygons */
        gridType: string;
        /** Unique id of value axis. It is not required to set it, unless you need to tell the graph which exact value axis it should use. */
        id: string;
        /** Specifies whether guide values should be included when calculating min and max of the axis. */
        includeGuidesInMinMax: boolean;
        /** If true, the axis will include hidden graphs when calculating min and max values. */
        includeHidden: boolean;
        /** Specifies whether values on axis can only be integers or both integers and doubles. */
        integersOnly: boolean;
        /** You can use this function to format Value axis labels. This function is called and these parameters are passed: labelFunction(value, valueText, valueAxis);
Where value is numeric value, valueText is formatted string and valueAxis is a reference to valueAxis object.

If axis type is "date", labelFunction will pass different arguments:
labelFunction(valueText, date, valueAxis)

Your function should return string.*/
        labelFunction(value: number, valueText: string, valueAxis: ValueAxis): string;
        labelFunction(valueText: string, data: Date, valueAxis: ValueAxis): string;
        /** Specifies if this value axis' scale should be logarithmic. */
        logarithmic: boolean;
        /** Read-only. Maximum value of the axis. */
        max: number;
        /** If you don't want max value to be calculated by the chart, set it using this property. This value might still be adjusted so that it would be possible to draw grid at rounded intervals. */
        maximum: number;
        /** If your value axis is date-based, you can specify maximum date of the axis. Can be set as date object, timestamp number or string if dataDateFormat is set. */
        maximumData: Date;
        /** Read-only. Minimum value of the axis. */
        min: number;
        /** If you don't want min value to be calculated by the chart, set it using this property. This value might still be adjusted so that it would be possible to draw grid at rounded intervals. */
        minimum: number;
        /** If your value axis is date-based, you can specify minimum date of the axis. Can be set as date object, timestamp number or string if dataDateFormat is set. */
        minimumDate: Date;
        /** If set value axis scale (min and max numbers) will be multiplied by it. I.e. if set to 1.2 the scope of values will increase by 20%. */
        minMaxMultiplier: number;
        /** Works with radar charts only. If you set it to “middle”, labels and data points will be placed in the middle between axes. */
        pointPosition: string;
        /** Possible values are: "top", "bottom", "left", "right". If axis is vertical, default position is "left". If axis is horizontal, default position is "bottom". */
        position: string;
        /** Precision (number of decimals) of values. */
        precision: number;
        /** Radar chart only. Specifies if categories (axes' titles) should be displayed near axes)
            @default true
        */
        radarCategoriesEnabled: boolean;
        /** pecifies if graphs's values should be recalculated to percents. */
        recalculateToPercents: boolean;
        /** Specifies if value axis should be reversed (smaller values on top).  */
        reversed: boolean;
        /** Stacking mode of the axis. Possible values are: "none", "regular", "100%", "3d". none Note, only graphs of one type will be stacked. */
        stackType: string;
        /** Read-only. Value difference between two grid lines. */
        step: number;
        /** If you set minimum and maximum for your axis, chart adjusts them so that grid would start and end on the beginning and end of plot area and grid would be at equal intervals. If you set strictMinMax to true, the chart will not adjust minimum and maximum of value axis. */
        strictMinMax: boolean;
        /** In case you synchronize one value axis with another, you need to set the synchronization multiplier. Use synchronizeWithAxis method to set with which axis it should be synced. */
        synchronizationMultiplier: number;
        /** One value axis can be synchronized with another value axis. You can use both reference to your axis or id of the axis here. You should set synchronizationMultiplyer in order for this to work. */
        synchronizeWith: ValueAxis;
        /** If this value axis is stacked and has columns, setting valueAxis.totalText = "[[total]]" will make it to display total value above the most-top column. */
        totalText: string;
        /** Color of total text. */
        totalTextColor: string;
        /** Distance from data point to total text. */
        totalTextOffset: number;
        /** This allows you to have logarithmic value axis and have zero values in the data. You must set it to >0 value in order to work. */
        treatZeroAs: number;
        /** Type of value axis. If your values in data provider are dates and you want this axis to show dates instead of numbers, set it to "date". */
        type: string;
        /** Unit which will be added to the value label. */
        unit: string;
        /** Position of the unit. Possible values are "left" and "right". right */
        unitPosition: string;
        /** If true, prefixes will be used for big and small numbers. You can set arrays of prefixes directly to the chart object via prefixesOfSmallNumbers and prefixesOfBigNumbers. */
        usePrefixes: boolean;
        /** If true, values will always be formatted using scientific notation (5e+8, 5e-8...) Otherwise only values bigger then 1e+21 and smaller then 1e-7 will be displayed in scientific notation. */
        useScientificNotation: boolean;

        /** Adds guide to the axis. */
        addGuide(guide: Guide): void;
        /** Number, - value of coordinate. Returns value of the coordinate.  coordinate - y or x coordinate, in pixels. */
        coordinateToValue(coordinate: number): void;
        /** Number - coordinate Returns coordinate of the value in pixels. value - Number */
        getCoordinate(value: number): void;
        /** Removes guide from the axis.*/
        removeGuide(guide: Guide): void;

        /** One value axis can be synchronized with another value axis. You should set synchronizationMultiplyer in order for this to work. */
        synchronizeWithAxis(axis: ValueAxis): void;
        /** XY Chart only. Zooms-in the axis to the provided values. */
        zoomToValues(startValue: number, endValue: number): void;

        /** Adds event listener of the type "axisZoomed" to the object.
            @param type Always "axisZoomed".
            @param handler XY chart only. Dispatched when axis is zoomed.*/
        addListener(type: string, handler: (e: {
            /** Always "axisZoomed". */
            type: string; startValue: Date; endValue: Date; chart: AmChart;
        }) => void): void;
        /** Adds event listener of the type "logarithmicAxisFailed" to the object.
            @param type Always "logarithmicAxisFailed".
            @param handler Dispatched when valueAxis is logarithmic and values equal or less then zero were found in data.*/
        addListener(type: string, handler: (e: {
            /** Always "logarithmicAxisFailed". */
            type: string; chart: AmChart;
        }) => void): void;

        /** Removes event listener from chart object. */
        removeListener(chart: AmChart, type: string, handler: any): void;
    }

    class Title {
        /** @default 1 */
        alpha: number;
        /** Specifies if the tile is bold or not.
            @default false*/
        bold: boolean;
        /** Text color of a title. */
        color: string;
        /** Unique id of a Title. You don't need to set it, unless you want to. */
        id: string;
        /** Text size */
        size: number;
        /** Text of a label */
        text: string;
    }
    class ExportSettings {
        enabled: boolean;
        libs: Object;
        menu: Object;
        config: any;
        capture(config: any, callback: () => void): any;
        toJPG(config: any, callback: (config: any) => void): any;
    }
}
