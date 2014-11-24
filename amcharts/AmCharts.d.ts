// Type definitions for amCharts
// Project: http://www.amcharts.com/
// Definitions by: aleksey-bykov <https://github.com/aleksey-bykov>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// AmCharts object (it's not a class) is create automatically when amcharts.js or amstock.js file is included in a web page.
declare module AmCharts {

    /** Set it to true if you have base href set for your page. This will fix rendering problems in Firefox caused by base href. */
    var baseHref: boolean;

    /** Array of day names, used when formatting dates (if categoryAxis.parseDates is set to true) ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] */
    var dayNames: string[];

    /** Array of month names, used when formatting dates (if categoryAxis.parseDates is set to true) ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] */
    var monthNames: string[];

    /** Array of short versions of day names, used when formatting dates (if categoryAxis.parseDates is set to true) ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] */
    var shortDayNames: string[];

    /** Array of short versions of month names, used when formatting dates (if categoryAxis.parseDates is set to true) ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] */
    var shortMonthNames: string[];

    /** Set it to true if you want UTC time to be used instead of local time. */
    var useUTC: boolean;

    /** Clears all the charts on page, removes listeners and intervals. */
    function clear();

    /** AmPieChart class creates pie/donut chart. In order to display pie chart you need to set at least three properties - dataProvider, titleField and valueField.
        @example
            var chartData = [{title:"Pie I have eaten",value:70},{title:"Pie I haven\'t eaten",value:30}];			
            var chart = new AmCharts.AmPieChart();
            chart.valueField = "value";
            chart.titleField = "title";
            chart.dataProvider = chartData;
            chart.write("chartdiv");
    */
    class AmPieChart {
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
        animateAgain();
        /** You can trigger the click on a slice from outside. index - the number of a slice or Slice object. */
        clickSlice(index);
        /** Hides slice. index - the number of a slice or Slice object. */
        hideSlice(index);
        /** You can simulate roll-out of a slice from outside. index - the number of a slice or Slice object. */
        rollOutSlice(index);
        /** You can simulate roll-over a slice from outside. index - the number of a slice or Slice object. */
        rollOverSlice(index);
        /** Shows slice. index - the number of a slice or Slice object. */
        showSlice(index);

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
            type: string; dataItem: Slice;
        }) => void );
    }

    /** AmRadarChart is the class you have to use for radar and polar chart types.
        @example
    var chart;
    var chartData = [
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
  
      var valueAxis = new AmCharts.ValueAxis();
      valueAxis.axisAlpha = 0.15;
      valueAxis.minimum = 0;
      valueAxis.dashLength = 3;
      valueAxis.axisTitleOffset = 20;
      valueAxis.gridCount = 5;
      chart.addValueAxis(valueAxis);
  
      var graph = new AmCharts.AmGraph();
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
            var chartData = [
                {x:10, y:14, value:59},
                {x:5, y:3, value:50},
                {x:-10, y:-3, value:19},
                {x:-6, y:5, value:65},
                {x:15, y:-4, value:92},
                {x:13, y:1, value:8},
                {x:1, y:6, value:35}
            ];

            var chart = new AmCharts.AmXYChart();        
            chart.pathToImages = "../../amcharts/javascript/images/";
            chart.dataProvider = chartData;
            chart.marginLeft = 35;
            chart.startDuration = 1.5;

            var xAxis = new AmCharts.ValueAxis();
            xAxis.position = "left";
            xAxis.autoGridCount = true;
            chart.addValueAxis(xAxis);

            var yAxis = new AmCharts.ValueAxis();
            yAxis.position = "bottom";
            yAxis.autoGridCount = true;
            chart.addValueAxis(yAxis);                

            var graph = new AmCharts.AmGraph();
            graph.valueField = "value";
            graph.xField = "x";
            graph.yField = "y";
            graph.lineAlpha = 0;
            graph.bullet = "round";
            chart.addGraph(graph);

            var chartCursor = new AmCharts.ChartCursor();
            chart.addChartCursor(chartCursor);

            var chartScrollbar = new AmCharts.ChartScrollbar();
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
        zoomOut();
    }
    /** Guides are straight vertical or horizontal lines or areas supported by AmSerialChart, AmXYChart and AmRadarChart. You can have guides both on value and category axes. To add/remove a guide to an axis, use axis.addGuide(guide)/axis.removeGuide(guide) methods.

If you do not set properties such as dashLength, lineAlpha, lineColor, etc - values of the axis are used.*/
    class Guide {
        /** Radar chart only. Specifies angle at which guide should start. Affects only fills, not lines. */
        angle: number;
        /** Baloon fill color. */
        balloonColor: string;
        /** The text which will be displayed if the user rolls-over the guide. */
        balloonText: string;
        /** Category of the guide (in case the guide is for category axis). */
        category: string;
        /** Dash length. */
        dashLength: number;
        /** Date of the guide (in case the guide is for category axis and parseDates is set to true). */
        date: Date;
        /** Fill opacity. Value range is 0 - 1. */
        fillAlpha: number;
        /** Fill color. */
        fillColor: string;
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
        labelFontSize: number;
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
        addPanel(panel: StockPanel);
        /** Adds panel to the stock chart at a specified index. Requires stockChart.validateNow() method to be called after this action. */
        addPanelAt(panel: StockPanel, index: number);
        /** Destroys chart, all timeouts and listeners. */
        clear();
        /** Hides event bullets. */
        hideStockEvents();
        /** Removes event listener from the object. */
        removeListener(obj, type, handler);
        /** Removes panel from the stock chart. Requires stockChart.validateNow() method to be called after this action. */
        removePanel(panel: StockPanel);
        /** Shows event bullets. */
        showStockEvents();
        /** Method which should be called after data was changed. */
        validateData();
        /** Method which forces the stock chart to rebuild. Should be called after properties are changed. */
        validateNow();
        /** Zooms chart to specified dates. startDate, endDate - Date objects. */
        zoom(startDate, endDate);
        /** Zooms out the chart. */
        zoomOut();

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
        }) => void );

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
        }) => void );

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
        }) => void );

        /** Adds event listener of the type "panelRemoved" to the object.
            @param type Always "panelRemoved".
            @param handler Dispatched when the StockPanel is removed.*/
        addListener(type: string, handler: (e: {
            /** Always "panelRemoved". */

            type: string;
            panel: StockPanel;
            chart: AmStockChart;
        }) => void );

        /** Removes event listener from chart object. */
        removeListener(chart: AmChart, type: string, handler: any);
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
            var chart = new AmCharts.AmSerialChart();
            var legend = new AmCharts.AmLegend();
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
        fontSize: number;
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

        /** Adds event listener of the type "showItem" to the object.
            @param type Always "showItem".
            @param handler
        */
        addListener(type: string, handler: (e: {/** Always "showItem". */
            type: string; dataItem: Object; chart: AmChart;
        }) => void );

        /** Removes event listener from chart object. */
        removeListener(chart: AmChart, type: string, handler: any);
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
        /**  */
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
        addStockGraph(graph: StockGraph);
        /** Removes graph from the panel. */
        removeStockGraph(graph: StockGraph);
    }

    /** AmChart is a base class of all charts. It can not be instantiated explicitly. AmCoordinateChart, AmPieChart and AmMap extend AmChart class. */
    class AmChart {
    	/** used when constructing a chart with a theme */
    	constructor(theme: any);
    	/** Background color. You should set backgroundAlpha to >0 value in order background to be visible. We recommend setting background color directly on a chart's DIV instead of using this property. #FFFFFF */
        backgroundColor: string;
        /** The chart creates AmBalloon class itself. If you want to customize balloon, get balloon instance using this property, and then change balloon's properties.  AmBalloon */
        balloon: AmBalloon;
        /** Opacity of chart's border. Value range is 0 - 1. */
        borderAlpha: number;
        /** Color of chart's border. You should set borderAlpha >0 in order border to be visible. We recommend setting border color directly on a chart's DIV instead of using this property. #000000 */
        borderColor: string;
        /** Text color. #000000 */
        color: string;
        /** Array of data objects, for example: [{country:"US", value:524},{country:"UK", value:624},{country:"Lithuania", value:824}]. You can have any number of fields and use any field names. In case of AmMap, data provider should be MapData object. */
        dataProvider: any[];
        /** Font family. Verdana */
        fontFamily: string;
        /** Font size.
            @default 11
        */
        fontSize: number;
        /** Height of a chart. "100%" means the chart's height will be equal to it's container's (DIV) height and will resize if height of the container changes. Set a number instead of percents if your chart's size needs to be fixed.
            @default 1
        */
        height: any;
        /** Reference to the div of the legend. */
        legendDiv: HTMLElement;
        /** Object with precision, decimalSeparator and thousandsSeparator set which will be used for number formatting. Precision set to -1 means that values won't be rounded.  {precision:-1, decimalSeparator:'.', thousandsSeparator:','} */
        numberFormatter: Object;
        /** This setting affects touch-screen devices only. If a chart is on a page, and panEventsEnabled are set to true, the page won't move if the user touches the chart first. If a chart is big enough and occupies all the screen of your touch device, the user won’t be able to move the page at all. That's why the default value is "false". If you think that selecting/panning the chart or moving/pinching the map is a primary purpose of your users, you should set panEventsEnabled to true. */
        panEventsEnabled: boolean;
        /** Object with precision, decimalSeparator and thousandsSeparator set which will be used for formatting percent values. {precision:2, decimalSeparator:'.', thousandsSeparator:','} */
        percentFormatter: Object;
        /** Prefixes which are used to make big numbers shorter: 2M instead of 2000000, etc. Prefixes are used on value axes and in the legend. To enable prefixes, set usePrefixes property to true. [{number:1e+3,prefix:"k"},{number:1e+6,prefix:"M"},{number:1e+9,prefix:"G"},{number:1e+12,prefix:"T"},{number:1e+15,prefix:"P"},{number:1e+18,prefix:"E"},{number:1e+21,prefix:"Z"},{number:1e+24,prefix:"Y"}] */
        prefixesOfBigNumbers: any[];
        /** Prefixes which are used to make small numbers shorter: 2μ instead of 0.000002, etc. Prefixes are used on value axes and in the legend. To enable prefixes, set usePrefixes property to true. [{number:1e-24, prefix:"y"},{number:1e-21, prefix:"z"},{number:1e-18, prefix:"a"},{number:1e-15, prefix:"f"},{number:1e-12, prefix:"p"},{number:1e-9, prefix:"n"},{number:1e-6, prefix:"μ"},{number:1e-3, prefix:"m"}] */
        prefixesOfSmallNumbers: any[];
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
        addLabel(x: number, y: number, text: string, align: string, size, color: string, rotation, alpha: number, bold: boolean, url: string);
        /** Adds a legend to the chart.
            By default, you don't need to create div for your legend, however if you want it to be positioned in some different way, you can create div anywhere you want and pass id or reference to your div as a second parameter.
            (NOTE: This method will not work on StockPanel.)
            @param legend
            @param legendDivId - Id of the legend div (optional).
        */
        addLegend(legend: AmLegend, legendDivId?: string);
        /** Adds a legend to the chart.
            By default, you don't need to create div for your legend, however if you want it to be positioned in some different way, you can create div anywhere you want and pass id or reference to your div as a second parameter.
            (NOTE: This method will not work on StockPanel.)
            @param legend
            @param legendDiv - Legend div (optional).
        */
        addLegend(legend: AmLegend, legendDiv: HTMLElement);

        /**   Adds title to the top of the chart. Pie, Radar positions are updated so that they won't overlap. Plot area of Serial/XY chart is also updated unless autoMargins property is set to false. You can add any number of titles - each of them will be placed in a new line. To remove titles, simply clear titles array: chart.titles = []; and call chart.validateNow() method. text - text of a title size - font size color - title color alpha - title opacity bold - boolean value indicating if title should be bold. */
        addTitle(text, size, color, alpha, bold);
        /** Clears the chart area, intervals, etc. */
        clear();
        /** Removes all labels added to the chart. */
        clearLabels();
        /** Use this method to force the chart to resize to it's current container size. */
        invalidateSize();
        /** Removes chart's legend. */
        removeLegend();
        /** This method should be called after data in your data provider changed or a new array was set to dataProvider. After calling this method the chart will parse data and redraw. */
        validateData();
        /** This method should be called after you changed one or more properties of any class. The chart will redraw after this method is called. */
        validateNow();

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
        }) => void );
        /** Removes event listener from chart object. */
        removeListener(chart: AmChart, type: string, handler: any);
    }

    /** AmCoordinateChart is a base class of AmRectangularChart. It can not be instantiated explicitly. */

    class AmCoordinateChart extends AmChart {
        /** Specifies the colors of the graphs if the lineColor of a graph is not set.
            It there are more graphs then colors in this array, the chart picks random color.
            @default ['#FF6600', '#FCD202', '#B0DE09', '#0D8ECF', '#2A0CD0', '#CD0D74', '#CC0000', '#00CC00', '#0000CC', '#DDDDDD', '#999999', '#333333', '#990000'] */
        colors: any[];
        /** The array of graphs belonging to this chart.
            To add/remove graph use addGraph/removeGraph methods instead of adding/removing graphs directly to array.
        */
        graphs: any[];
        /** The opacity of plot area's border.
            Value range is 0 - 1.
        */
        plotAreaBorderAlpha: number;
        /** The color of the plot area's border.
            Note, the it is invisible by default, as plotAreaBorderAlpha default value is 0.
            Set it to a value higher than 0 to make it visible.
            @default #000000
        */
        plotAreaBorderColor: string;
        /** Opacity of plot area.
            Plural form is used to keep the same property names as our Flex charts'.
            Flex charts can accept array of numbers to generate gradients.
            Although you can set array here, only first value of this array will be used.
        */
        plotAreaFillAlphas: number;
        /** You can set both one color if you need a solid color or array of colors to generate gradients, for example: ["#000000", "#0000CC"]
            @default #FFFFFF
        */
        plotAreaFillColors: any;
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
        addGraph(graph: AmGraph);
        /** Adds value axis to the chart.
            One value axis is created automatically, so if you don't want to change anything or add more value axes, you don't need to add it.
        */
        addValueAxis(axis: ValueAxis);
        /** You can trigger the animation of the chart. */
        animateAgain();

        /** AmGraph Returns graph by id. */
        getGraphById(graphId: string): AmGraph;

        /**  Returns value axis by id.*/
        getValueAxisById(axisId: string): ValueAxis;

        /** Hide the graph (if it is visible). Usually this method is called from the Legend, when you click on the legend marker.
        */
        hideGraph(graph: AmGraph);

        /** Hide value balloon of a graph. Usually this method is called from the Legend, when you click on the legend text.*/
        hideGraphsBalloon(graph: AmGraph);

        /** Highlight the graph. Usually this method is called from the Legend, when you roll-over the legend entry.*/
        highlightGraph(graph: AmGraph);

        /** Removes graph from the chart.*/
        removeGraph(graph: AmGraph);

        /** Removes value axis from the chart. When you remove value axis, all graphs assigned to this axis are also removed. */
        removeValueAxis(axis: ValueAxis);

        /** Show the graph (if it is hidden). Usually this method is called from the Legend, when you click on the legend marker.*/
        showGraph(graph: AmGraph);

        /** Show value balloon of a graph. Usually this method is called from the Legend, when you click on the legend text.*/
        showGraphsBalloon(graph: AmGraph);

        /** UnhighlightGraph the graph. Usually this method is called from the Legend, when you roll-out the legend entry.*/
        unhighlightGraph(graph: AmGraph);
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
        }) => void );
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

        /** Specifies the shortest period of your data. This should be set only if parseDates is set to "true". Possible period values: fff - milliseconds, ss - seconds, mm - minutes, hh - hours, DD - days, MM - months, YYYY - years. DD */
        minPeriod: string;

        /** In case your category axis values are Date objects, set this to true. In this case the chart will parse dates and will place your data points at irregular intervals. If you want dates to be parsed, but data points to be placed at equal intervals, set both parseDates and equalSpacing to true. */
        parseDates: boolean;

        /** Specifies whether the graph should start on axis or not. In case you display columns, it is recommended to set this to false. If parseDates is set to true, startOnAxis will allways be false, unless equalSpacing is set to true. */
        startOnAxis: boolean;

        /** Number returns coordinate of a category. Works only if parseDates is false. If parseDates is true, use dateToCoordinate method. category - String */
        categoryToCoordinate(category);

        /** date - Date object Returns Date of the coordinate, in case parseDates is set to true and equalSpacing is set to false.  coordinate - Number */
        coordinateToDate(coordinate);

        /** Number Returns coordinate of the date, in case parseDates is set to true. if parseDates is false, use categoryToCoordinate method. date - Date object */
        dateToCoordinate(date);
        
        /** Number Returns index of the category which is most close to specified coordinate. x - coordinate */
        xToIndex(x);
    }

    /** ChartScrollbar class displays chart scrollbar. Supported by AmSerialChart and AmXYChart.
        @example
            var chart = new AmCharts.AmSerialChart();
            var chartScrollbar = new AmCharts.ChartScrollbar();
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
        /** The angle of the 3D part of plot area. This creates a 3D effect (if the "depth3D" is > 0). */
        angle: number;
        /** Space left from axis labels/title to the chart's outside border, if autoMargins set to true.
            @default 10
        */
        autoMarginOffset: number;
        /** Specifies if margins of a chart should be calculated automatically so that labels of axes would fit. The chart will adjust only margins with axes. Other margins will use values set with marginRight, marginTop, marginLeft and marginBottom properties.
            @default true
        */
        autoMargins: boolean;
        /** Chart cursor. */
        chartCursor: ChartCursor;
        /** Chart scrollbar. */
        chartScrollbar: ChartScrollbar;
        /** The depth of the 3D part of plot area. This creates a 3D effect (if the "angle" is > 0). */
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
        /** Flag which should be set to false if you need margins to be recalculated on next chart.validateNow() call. */
        marginsUpdated: boolean;
        /** Number of pixels between the container's top border and plot area. This space can be used for top axis' values. If autoMargin is true and top side has axis, this property is ignored.
            @default 20
        */
        marginTop: number;
        /** Array of trend lines added to a chart. You can add trend lines to a chart using this array or access already existing trend lines */
        trendLines: any[];
        /** It's a simple object containing information about zoom-out button. Other available properties of this object are fontSize and color. color specifies text color of a button. {backgroundColor:'#b2e1ff',backgroundAlpha:1} */
        zoomOutButton: Object;
        /** Text in the zoom-out button. Show all */
        zoomOutText: string;
        /** Adds a TrendLine to a chart.
            You should call chart.validateNow() after this method is called in order the trend line to be visible. */
        addTrendLine(trendLine: TrendLine);
        /** Removes cursor from the chart */
        removeChartCursor();
        /** Removes scrollbar from the chart */
        removeChartScrollbar();
        /** Removes a trend line from a chart. 
            You should call chart.validateNow() in order the changes to be visible. */
        removeTrendLine;
    }

    /* Trend lines are straight lines indicating trends, might also be used for some different purposes. Can be used by Serial and XY charts. To add/remove trend line, use chart.addTrendLine(trendLine)/chart.removeTrendLine(trendLine) methods or simply pass array of trend lines: chart.trendLines = [trendLine1, trendLine2].
        @example
            var trendLine = new AmCharts.TrendLine();
            trendLine.initialDate = new Date(2012, 0, 2, 12); // 12 is hour - to start trend line in the middle of the day
            trendLine.finalDate = new Date(2012, 0, 11, 12);
            trendLine.initialValue = 10;
            trendLine.finalValue = 19;
            trendLine.lineColor = "#CC0000";
            chart.addTrendLine(trendLine);
    */
    class TrendLine {

    }

    /** ChartCursor is a class which displays a cursor which follows the mouse. In case of Serial chart it also shows value and category balloons.
        @example
            var chart = new AmCharts.AmSerialChart();
            var chartCursor = new AmCharts.ChartCursor();
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
        hideCursor();
        /** You can force cursor to appear at specified cateogry or date. */
        showCursorAt(category);
        /** Adds event listener of the type "changed" to the object.
            @param type Always "changed".
            @param handler Dispatched when cursor position is changed. "index" is a series index over which chart cursors currently is. "zooming" specifies if user is currently zooming (is selecting) the chart. mostCloseGraph property is set only when oneBalloonOnly is set to true.*/
        addListener(type: string, handler: (e: {/** Always "changed". */
            type: string; index: number; zooming: boolean; mostCloseGraph: AmGraph; chart: AmChart;
        }) => void );
        /** Adds event listener of the type "onHideCursor" to the object.
            @param type Always "onHideCursor".
            @param handler Dispatched when cursor is hidden.*/
        addListener(type: string, handler: (e: {/** Always "onHideCursor". */
            type: string; chart: AmChart;
        }) => void );
        /** Adds event listener of the type "selected" or "zoomed" to the object.
            @param type "selected" or "zoomed".
            @param handler
                If the type is "selected". Dispatched if selectWithoutZooming is set to true and when user selects some period. start and end are indices or timestamp (when categoryAxis.parseDates is true) of selection start/end.
                If the type is "zoomed". Dispatched when user zooms to some period. start and end are indices or timestamp (when categoryAxis.parseDates is true) of selection start/end.
        */
        addListener(type: string, handler: (e: {/** Always "zoomed". */
            type: string; index: number; zooming: boolean; chart: AmChart;
        }) => void );

        /** Removes event listener from chart object. */
        removeListener(chart: AmChart, type: string, handler: any);
    }

    /** AmSerialChart is the class you have to use for majority of chart types. The supported chart types are: line, area, column, bar, step line, smoothed line, candlestick and OHLC. The chart can be rotated by 90 degrees so the column chart becomes bar chart. The chart supports simple and logarithmic scales, it can have multiple value axes. The chart can place data points at equal intervals or can parse dates and place data points at irregular intervals.
        @example
            var chartData = [{title:"sample 1",value:130},{title:"sample 2",value:26}];
			
            var chart = new AmCharts.AmSerialChart();
            chart.categoryField = "title";
            chart.dataProvider = chartData;
			
            var graph = new AmCharts.AmGraph();
            graph.valueField = "value";
            graph.type = "column";
            graph.fillAlphas = 1;
            chart.addGraph(graph);
			
            chart.write("chartdiv");
    */
    class AmSerialChart extends AmRectangularChart {
    	/** Read-only. Chart creates category axis itself. If you want to change some properties, you should get this axis from the chart and set properties to this object. */
        categoryAxis: CategoryAxis;
        /** Category field name tells the chart the name of the field in your dataProvider object which will be used for category axis values. */
        categoryField: string;
        /** Read-only. Array of SerialDataItem objects generated from dataProvider. */
        chartData: any[];
        /** The gap in pixels between two columns of the same category.
            @default 5
        */
        columnSpacing: number;
        /** Relative width of columns. Value range is 0 - 1. 0.8 */
        columnWidth: number;
        /** Array holding chart's data. */
        dataProvider: any[];
        /** Read-only. If category axis parses dates endDate indicates date to which the chart is currently displayed. */
        endDate: Date;
        /** Read-only. Category index to which the chart is currently displayed. */
        endIndex: number;
        /** Maximum number of series allowed to select. */
        maxSelectedSeries: number;
        /** The longest time span allowed to select (in milliseconds) for example, 259200000 will limit selection to 3 days. */
        maxSelectedTime: number;
        /** The shortest time span allowed to select (in milliseconds) for example, 1000 will limit selection to 1 second. */
        minSelectedTime: number;
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
        getCategoryIndexByValue(value);
        /** Zooms out, charts shows all available data. */
        zoomOut();
        /** Zooms the chart by the value of the category axis. start - category value, String \\ end - category value, String */
        zoomToCategoryValues(start, end);
        /** Zooms the chart from one date to another. start - start date, Date object \\ end - end date, Date object */
        zoomToDates(start, end);
        /** Zooms the chart by the index of the category. start - start index, Number \\ end - end index, Number */
        zoomToIndexes(start, end);
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

        addListener(type, handler: (e: {
            /** Always: "changed" */

            type: string;
            startDate: Date;
            endDate: Date;
            predefinedPeriod: string;
            count: number;
        }) => void );

        /** Removes event listener from chart object. */
        removeListener(chart: AmChart, type: string, handler: any);
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
            var chart = new AmCharts.AmSerialChart();
            // get balloon intance
            var balloon = chart.balloon;
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
        fontSize: number;
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
        hide();
        /** Defines a square within which the balloon should appear. Bounds are set by chart class, you don't need to call this method yourself. */
        setBounds(left: number, top: number, right: number, bottom: number);
        /** Sets coordinates the balloon should point to. */
        setPosition(x: number, y: number);
        /** Specifies the text which should be displayed. */
        show(value: string);
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
            var chart = new AmCharts.AmSerialChart();
            var graph = new AmCharts.AmGraph();
            graph.valueField = 'value';
            graph.type = 'column';
            graph.fillAlphas = 1;
            chart.addGraph(graph);
    */
    class AmGraph {
        /** Name of the alpha field in your dataProvider. */
        alphaField: string;
        /** Value balloon color. Will use graph or data item color if not set. */
        balloonColor: string;
        /** Balloon text. You can use tags like [[value]], [[description]], [[percents]], [[open]], [[category]] [[value]] */
        balloonText: string;
        /** Specifies if the line graph should be placed behind column graphs */
        behindColumns: boolean;
        /** Type of the bullets. Possible values are: "none", "round", "square", "triangleUp", "triangleDown", "bubble", "custom". none */
        bullet: string;
        /** Opacity of bullets. Value range is 0 - 1.
            @default 1
        */
        bulletAlpha: number;
        /** Bullet border opacity.
            @default 1
        */
        bulletBorderAlpha: number;
        /** Bullet border color. Will use lineColor if not set.   */
        bulletBorderColor: string;
        /** Bullet border thickness.
            @default 2
        */
        bulletBorderThickness: number;
        /** Bullet color. Will use lineColor if not set. */
        bulletColor: string;
        /** Name of the bullet field in your dataProvider. */
        bulletField: string;
        /** Bullet offset. Distance from the actual data point to the bullet. Can be used to place custom bullets above the columns. */
        bulletOffset: number;
        /** Bullet size.
            @default 8
        */
        bulletSize: number;
        /** Name of the bullet size field in your dataProvider. */
        bulletSizeField: string;
        /** Name of the close field (used by candlesticks and ohlc) in your dataProvider. */
        closeField: string;
        /** Color of value labels. Will use chart's color if not set. */
        color: string;
        /** Name of the color field in your dataProvider. */
        colorField: string;
        /** Specifies whether to connect data points if data is missing. The default value is true.
            @default true
        */
        connect: boolean;
        /** Corner radius of column. It can be set both in pixels or in percents. The chart's depth and angle styles must be set to 0. The default value is 0. Note, cornerRadiusTop will be applied for all corners of the column, JavaScript charts do not have a possibility to set separate corner radius for top and bottom. As we want all the property names to be the same both on JS and Flex, we didn't change this too. */
        cornerRadiusTop: number;
        /** If bulletsEnabled of ChartCurosor is true, a bullet on each graph follows the cursor. You can set opacity of each graphs bullet. In case you want to disable these bullets for a certain graph, set opacity to 0.
            @default 1
        */
        cursorBulletAlpha: number;
        /** Path to the image of custom bullet. */
        customBullet: string;
        /** Name of the custom bullet field in your dataProvider. */
        customBulletField: string;
        /** Dash length. If you set it to a value greater than 0, the graph line will be dashed. */
        dashLength: number;
        /** Name of the description field in your dataProvider. */
        descriptionField: string;
        /** Opacity of fill. Plural form is used to keep the same property names as our Flex charts'. Flex charts can accept array of numbers to generate gradients. Although you can set array here, only first value of this array will be used. */
        fillAlphas: number;
        /** Fill color. Will use lineColor if not set. */
        fillColors: any;
        /** Name of the fill colors field in your dataProvider. */
        fillColorsField: string;
        /** You can set another graph here and if fillAlpha is >0, the area from this graph to fillToGraph will be filled (instead of filling the area to the X axis). */
        fillToGraph: AmGraph;
        /** Size of value labels text. Will use chart's fontSize if not set. */
        fontSize: number;
        /** Orientation of the gradient fills (only for "column" graph type). Possible values are "vertical" and "horizontal". vertical */
        gradientOrientation: string;
        /** Specifies whether the graph is hidden. Do not use this to show/hide the graph, use hideGraph(graph) and showGraph(graph) methods instead. */
        hidden: boolean;
        /** If there are more data points than hideBulletsCount, the bullets will not be shown. 0 means the bullets will always be visible. */
        hideBulletsCount: number;
        /** Name of the high field (used by candlesticks and ohlc) in your dataProvider. */
        highField: string;
        /** Whether to include this graph when calculating min and max value of the axis.
            @default true
        */
        includeInMinMax: boolean;
        /** Name of label color field in data provider. */
        labelColorField: string;
        /** Position of value label. Possible values are: "bottom", "top", "right", "left", "inside", "middle". Sometimes position is changed by the chart, depending on a graph type, rotation, etc. top */
        labelPosition: string;
        /** Value label text. You can use tags like [[value]], [[description]], [[percents]], [[open]], [[category]]. */
        labelText: string;
        /** Legend marker opacity. Will use lineAlpha if not set. Value range is 0 - 1. */
        legendAlpha: number;
        /** Legend marker color. Will use lineColor if not set. */
        legendColor: string;
        /** Legend value text. You can use tags like [[value]], [[description]], [[percents]], [[open]], [[category]] You can also use custom fields from your dataProvider. If not set, uses Legend's valueText. */
        legendValueText: string;
        /** Opacity of the line (or column border). Value range is 0 - 1.
            @default 1
        */
        lineAlpha: number;
        /** Color of the line (or column border). If you do not set any, the color from [[AmCoordinateChart */
        lineColor: string;
        /** Name of the line color field (used by columns and candlesticks only) in your dataProvider. */
        lineColorField: string;
        /** Specifies thickness of the graph line (or column border).
            @default 1
        */
        lineThickness: number;
        /** Name of the low field (used by candlesticks and ohlc) in your dataProvider. */
        lowField: string;
        /** Legend marker type. You can set legend marker (key) type for individual graphs. Possible values are: "square", "circle", "line", "dashedLine", "triangleUp", "triangleDown", "bubble". */
        markerType: string;
        /** Specifies size of the bullet which value is the biggest (XY chart).
            @default 50
        */
        maxBulletSize: number;
        /** Specifies minimum size of the bullet (XY chart). */
        minBulletSize: number;
        /** If you use different colors for your negative values, a graph below zero line is filled with negativeColor. With this property you can define a different base value at which colors should be changed to negative colors. */
        negativeBase: number;
        /** Fill opacity of negative part of the graph. Will use fillAlphas if not set. */
        negativeFillAlphas: number;
        /** Fill color of negative part of the graph. Will use fillColors if not set. */
        negativeFillColors: any; //String /Array;
        /** Color of the line (or column) when the values are negative. In case the graph type is candlestick or ohlc, negativeLineColor is used when close value is less then open value. */
        negativeLineColor: string;
        /** Example: {precision:-1, decimalSeparator:'.', thousandsSeparator:','}. The graph uses this object's values to format the numbers. Uses chart's numberFormatter if not defined. */
        numberFormatter: Object;
        /** Name of the open field (used by floating columns, candlesticks and ohlc) in your dataProvider. */
        openField: string;
        /** Specifies where data points should be placed - on the beginning of the period (day, hour, etc) or in the middle (only when parseDates property of categoryAxis is set to true). This setting affects Serial chart only. Possible values are "start" and "middle". middle */
        pointPosition: string;
        /** If graph's type is column and labelText is set, graph hides labels which do not fit into the column's space. If you don't want these labels to be hidden, set this to true. */
        showAllValueLabels: boolean;
        /** Specifies whether the value balloon of this graph is shown when mouse is over data item or chart's indicator is over some series.
            @default true
        */
        showBalloon: boolean;
        /** Specifies graphs value at which cursor is showed. This is only important for candlestick and ohlc charts, also if column chart has "open" value. Possible values are: "open", "close", "high", "low". close */
        showBalloonAt: string;
        /** If the value axis of this graph has stack types like "regular" or "100%" You can exclude this graph from stacking.
            @default true
        */
        stackable: boolean;
        /** Graph title. */
        title: string;
        /** Type of the graph. Possible values are: "line", "column", "step", "smoothedLine", "candlestick", "ohlc". XY and Radar charts can only display "line" type graphs. line */
        type: string;
        /** Name of the url field in your dataProvider. */
        urlField: string;
        /** Target to open URLs in, i.e. _blank, _top, etc. */
        urlTarget: string;
        /** Specifies which value axis the graph will use. Will use the first value axis if not set. */
        valueAxis: ValueAxis;
        /** Name of the value field in your dataProvider. */
        valueField: string;
        /** Specifies whether this graph should be shown in the Legend.
            @default true
        */
        visibleInLegend: boolean;
        /** XY chart only. A horizontal value axis object to attach graph to. */
        xAxis: ValueAxis;
        /** XY chart only. Name of the x field in your dataProvider. */
        xField: string;
        /** XY chart only. A vertical value axis object to attach graph to. */
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
        fontSize: number;
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
        titleFontSize: number;

        /** Adds guide to the axis. */
        addGuide(guide:Guide);
        /** Removes guide from the axis. */
        removeGuide(guide:Guide);
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
        /** Specifies whether guide values should be included when calculating min and max of the axis. */
        includeGuidesInMinMax: boolean;
        /** If true, the axis will include hidden graphs when calculating min and max values. */
        includeHidden: boolean;
        /** Specifies whether values on axis can only be integers or both integers and doubles. */
        integersOnly: boolean;
        /** Specifies if this value axis' scale should be logarithmic. */
        logarithmic: boolean;
        /** Read-only. Maximum value of the axis. */
        max: number;
        /** If you don't want max value to be calculated by the chart, set it using this property. This value might still be adjusted so that it would be possible to draw grid at rounded intervals. */
        maximum: number;
        /** Read-only. Minimum value of the axis. */
        min: number;
        /** If you don't want min value to be calculated by the chart, set it using this property. This value might still be adjusted so that it would be possible to draw grid at rounded intervals. */
        minimum: number;
        /** If set value axis scale (min and max numbers) will be multiplied by it. I.e. if set to 1.2 the scope of values will increase by 20%. */
        minMaxMultiplier: number;
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
        /** In case you synchronize one value axis with another, you need to set the synchronization multiplier. Use synchronizeWithAxis method to set with which axis it should be synced. */
        synchronizationMultiplier: number;
        /** If this value axis is stacked and has columns, setting valueAxis.totalText = "[[total]]" will make it to display total value above the most-top column. */
        totalText: string;
        /** Unit which will be added to the value label. */
        unit: string;
        /** Position of the unit. Possible values are "left" and "right". right */
        unitPosition: string;
        /** If true, prefixes will be used for big and small numbers. You can set arrays of prefixes directly to the chart object via prefixesOfSmallNumbers and prefixesOfBigNumbers. */
        usePrefixes: boolean;
        /** If true, values will always be formatted using scientific notation (5e+8, 5e-8...) Otherwise only values bigger then 1e+21 and smaller then 1e-7 will be displayed in scientific notation. */
        useScientificNotation: boolean;

        /** Adds event listener to the object.  type - string like 'axisChanged' (should be listed in 'events' section of this class or classes which extend this class). handler - function which is called when event happens */
        addListener(type, handler);
        /** Number, - value of coordinate. Returns value of the coordinate.  coordinate - y or x coordinate, in pixels. */
        coordinateToValue(coordinate);
        /** Number - coordinate Returns coordinate of the value in pixels. value - Number */
        getCoordinate(value);
        
        /** Removes event listener from the object. */
        removeListener(obj, type, handler);
        
        /** One value axis can be synchronized with another value axis. You should set synchronizationMultiplyer in order for this to work. */
        synchronizeWithAxis(axis:ValueAxis);
        /** XY Chart only. Zooms-in the axis to the provided values. */
        zoomToValues(startValue, endValue);

        /** Adds event listener of the type "axisZoomed" to the object.
            @param type Always "axisZoomed".
            @param handler XY chart only. Dispatched when axis is zoomed.*/
        addListener(type: string, handler: (e: {
            /** Always "axisZoomed". */
            type: string; startValue: Date; endValue: Date; chart: AmChart;
        }) => void );
        /** Adds event listener of the type "logarithmicAxisFailed" to the object.
            @param type Always "logarithmicAxisFailed".
            @param handler Dispatched when valueAxis is logarithmic and values equal or less then zero were found in data.*/
        addListener(type: string, handler: (e: {
            /** Always "logarithmicAxisFailed". */
            type: string; chart: AmChart;
        }) => void );

        /** Removes event listener from chart object. */
        removeListener(chart: AmChart, type: string, handler: any);
    }
}
