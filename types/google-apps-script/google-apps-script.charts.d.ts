// Type definitions for Google Apps Script 2019-09-11
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  export module Charts {
    /**
     * Builder for area charts. For more details, see the Google Charts documentation.
     *
     * Here is an example that shows how to build an area chart.
     *
     *       // Create a data table with some sample data.
     *       var sampleData = Charts.newDataTable()
     *           .addColumn(Charts.ColumnType.STRING, "Month")
     *           .addColumn(Charts.ColumnType.NUMBER, "Dining")
     *           .addColumn(Charts.ColumnType.NUMBER, "Total")
     *           .addRow(["Jan", 60, 520])
     *           .addRow(["Feb", 50, 430])
     *           .addRow(["Mar", 53, 440])
     *           .addRow(["Apr", 70, 410])
     *           .addRow(["May", 80, 390])
     *           .addRow(["Jun", 60, 500])
     *           .addRow(["Jul", 100, 450])
     *           .addRow(["Aug", 140, 431])
     *           .addRow(["Sep", 75, 488])
     *           .addRow(["Oct", 70, 521])
     *           .addRow(["Nov", 58, 388])
     *           .addRow(["Dec", 63, 400])
     *           .build();
     *
     *       var chart = Charts.newAreaChart()
     *           .setTitle('Yearly Spending')
     *           .setXAxisTitle('Month')
     *           .setYAxisTitle('Spending (USD)')
     *           .setDimensions(600, 500)
     *           .setStacked()
     *           .setColors(['red', 'green'])
     *           .setDataTable(sampleData)
     *           .build();
     */
    export interface AreaChartBuilder {
      build(): Chart;
      reverseCategories(): AreaChartBuilder;
      setBackgroundColor(cssValue: string): AreaChartBuilder;
      setColors(cssValues: string[]): AreaChartBuilder;
      setDataSourceUrl(url: string): AreaChartBuilder;
      setDataTable(tableBuilder: DataTableBuilder): AreaChartBuilder;
      setDataTable(table: DataTableSource): AreaChartBuilder;
      setDataViewDefinition(dataViewDefinition: DataViewDefinition): AreaChartBuilder;
      setDimensions(width: Integer, height: Integer): AreaChartBuilder;
      setLegendPosition(position: Position): AreaChartBuilder;
      setLegendTextStyle(textStyle: TextStyle): AreaChartBuilder;
      setOption(option: string, value: any): AreaChartBuilder;
      setPointStyle(style: PointStyle): AreaChartBuilder;
      setRange(start: number, end: number): AreaChartBuilder;
      setStacked(): AreaChartBuilder;
      setTitle(chartTitle: string): AreaChartBuilder;
      setTitleTextStyle(textStyle: TextStyle): AreaChartBuilder;
      setXAxisTextStyle(textStyle: TextStyle): AreaChartBuilder;
      setXAxisTitle(title: string): AreaChartBuilder;
      setXAxisTitleTextStyle(textStyle: TextStyle): AreaChartBuilder;
      setYAxisTextStyle(textStyle: TextStyle): AreaChartBuilder;
      setYAxisTitle(title: string): AreaChartBuilder;
      setYAxisTitleTextStyle(textStyle: TextStyle): AreaChartBuilder;
      useLogScale(): AreaChartBuilder;
    }

    /**
     * Builder for bar charts. For more details, see the Google Charts documentation.
     *
     * Here is an example that shows how to build a bar chart. The data is imported from a
     * Google spreadsheet.
     *
     *      // Get sample data from a spreadsheet.
     *      var dataSourceUrl = 'https://docs.google.com/spreadsheet/tq?range=B1%3AC11' +
     *          '&key=0Aq4s9w_HxMs7dHpfX05JdmVSb1FpT21sbXd4NVE3UEE&gid=0&headers=-1';
     *
     *      var chartBuilder = Charts.newBarChart()
     *          .setTitle('Top Grossing Films in US and Canada')
     *          .setXAxisTitle('USD')
     *          .setYAxisTitle('Film')
     *          .setDimensions(600, 500)
     *          .setLegendPosition(Charts.Position.BOTTOM)
     *          .setDataSourceUrl(dataSourceUrl);
     *
     *      var chart = chartBuilder.build();
     */
    export interface BarChartBuilder {
      build(): Chart;
      reverseCategories(): BarChartBuilder;
      reverseDirection(): BarChartBuilder;
      setBackgroundColor(cssValue: string): BarChartBuilder;
      setColors(cssValues: string[]): BarChartBuilder;
      setDataSourceUrl(url: string): BarChartBuilder;
      setDataTable(tableBuilder: DataTableBuilder): BarChartBuilder;
      setDataTable(table: DataTableSource): BarChartBuilder;
      setDataViewDefinition(dataViewDefinition: DataViewDefinition): BarChartBuilder;
      setDimensions(width: Integer, height: Integer): BarChartBuilder;
      setLegendPosition(position: Position): BarChartBuilder;
      setLegendTextStyle(textStyle: TextStyle): BarChartBuilder;
      setOption(option: string, value: any): BarChartBuilder;
      setRange(start: number, end: number): BarChartBuilder;
      setStacked(): BarChartBuilder;
      setTitle(chartTitle: string): BarChartBuilder;
      setTitleTextStyle(textStyle: TextStyle): BarChartBuilder;
      setXAxisTextStyle(textStyle: TextStyle): BarChartBuilder;
      setXAxisTitle(title: string): BarChartBuilder;
      setXAxisTitleTextStyle(textStyle: TextStyle): BarChartBuilder;
      setYAxisTextStyle(textStyle: TextStyle): BarChartBuilder;
      setYAxisTitle(title: string): BarChartBuilder;
      setYAxisTitleTextStyle(textStyle: TextStyle): BarChartBuilder;
      useLogScale(): BarChartBuilder;
    }

    /**
     * A builder for category filter controls.
     *
     * A category filter is a picker to choose one or more between a set of defined values. Given a
     * column of type string, this control filters out the rows that don't match any of the picked
     * values.
     *
     * For more details, see the Gviz
     * documentation.
     */
    export interface CategoryFilterBuilder {
      build(): Control;
      setAllowMultiple(allowMultiple: boolean): CategoryFilterBuilder;
      setAllowNone(allowNone: boolean): CategoryFilterBuilder;
      setAllowTyping(allowTyping: boolean): CategoryFilterBuilder;
      setCaption(caption: string): CategoryFilterBuilder;
      setDataTable(tableBuilder: DataTableBuilder): CategoryFilterBuilder;
      setDataTable(table: DataTableSource): CategoryFilterBuilder;
      setFilterColumnIndex(columnIndex: Integer): CategoryFilterBuilder;
      setFilterColumnLabel(columnLabel: string): CategoryFilterBuilder;
      setLabel(label: string): CategoryFilterBuilder;
      setLabelSeparator(labelSeparator: string): CategoryFilterBuilder;
      setLabelStacking(orientation: Orientation): CategoryFilterBuilder;
      setSelectedValuesLayout(layout: PickerValuesLayout): CategoryFilterBuilder;
      setSortValues(sortValues: boolean): CategoryFilterBuilder;
      setValues(values: string[]): CategoryFilterBuilder;
    }

    /**
     * A Chart object, which can be embedded into documents, UI elements, or used as a static image. For
     * charts embedded in spreadsheets, see EmbeddedChart.
     */
    export interface Chart {
      getAs(contentType: string): Base.Blob;
      getBlob(): Base.Blob;
      getId(): string;
      getOptions(): ChartOptions;
      getType(): string;
      setId(id: string): Chart;
    }

    /**
     * An enumeration of how hidden dimensions in a source are expressed in a chart.
     */
    export enum ChartHiddenDimensionStrategy { IGNORE_BOTH, IGNORE_ROWS, IGNORE_COLUMNS, SHOW_BOTH }

    /**
     * An enumeration of how multiple ranges in the source are expressed in a chart.
     */
    export enum ChartMergeStrategy { MERGE_COLUMNS, MERGE_ROWS }

    /**
     * Exposes options currently configured for a Chart, such as height, color, etc.
     *
     * Please see the visualization
     * reference documentation for information on what options are available. Specific options for
     * each chart can be found by clicking on the specific chart in the chart gallery.
     *
     * These options are immutable.
     */
    export interface ChartOptions {
      get(option: string): any;
    }

    /**
     * Chart types supported by the Charts service.
     */
    export enum ChartType { TIMELINE, AREA, BAR, BUBBLE, CANDLESTICK, COLUMN, COMBO, GAUGE, GEO, HISTOGRAM, RADAR, LINE, ORG, PIE, SCATTER, SPARKLINE, STEPPED_AREA, TABLE, TREEMAP, WATERFALL }

    /**
     * Entry point for creating Charts in scripts.
     *
     * This example creates a basic data table, populates an area chart with the data, and adds it
     * into a web page as an image:
     *
     *     function doGet() {
     *       var data = Charts.newDataTable()
     *           .addColumn(Charts.ColumnType.STRING, "Month")
     *           .addColumn(Charts.ColumnType.NUMBER, "In Store")
     *           .addColumn(Charts.ColumnType.NUMBER, "Online")
     *           .addRow(["January", 10, 1])
     *           .addRow(["February", 12, 1])
     *           .addRow(["March", 20, 2])
     *           .addRow(["April", 25, 3])
     *           .addRow(["May", 30, 4])
     *           .build();
     *
     *       var chart = Charts.newAreaChart()
     *           .setDataTable(data)
     *           .setStacked()
     *           .setRange(0, 40)
     *           .setTitle("Sales per Month")
     *           .build();
     *
     *        var htmlOutput = HtmlService.createHtmlOutput().setTitle('My Chart');
     *        var imageData = Utilities.base64Encode(chart.getAs('image/png').getBytes());
     *        var imageUrl = "data:image/png;base64," + encodeURI(imageData);
     *        htmlOutput.append("Render chart server side: <br/>");
     *        htmlOutput.append("<img border=\"1\" src=\"" + imageUrl + "\">");
     *        return htmlOutput;
     *     }
     */
    export interface Charts {
      ChartHiddenDimensionStrategy: typeof ChartHiddenDimensionStrategy;
      ChartMergeStrategy: typeof ChartMergeStrategy;
      ChartType: typeof ChartType;
      ColumnType: typeof ColumnType;
      CurveStyle: typeof CurveStyle;
      MatchType: typeof MatchType;
      Orientation: typeof Orientation;
      PickerValuesLayout: typeof PickerValuesLayout;
      PointStyle: typeof PointStyle;
      Position: typeof Position;
      newAreaChart(): AreaChartBuilder;
      newBarChart(): BarChartBuilder;
      newCategoryFilter(): CategoryFilterBuilder;
      newColumnChart(): ColumnChartBuilder;
      newDashboardPanel(): DashboardPanelBuilder;
      newDataTable(): DataTableBuilder;
      newDataViewDefinition(): DataViewDefinitionBuilder;
      newLineChart(): LineChartBuilder;
      newNumberRangeFilter(): NumberRangeFilterBuilder;
      newPieChart(): PieChartBuilder;
      newScatterChart(): ScatterChartBuilder;
      newStringFilter(): StringFilterBuilder;
      newTableChart(): TableChartBuilder;
      newTextStyle(): TextStyleBuilder;
    }

    /**
     * Builder for column charts. For more details, see the Google Charts documentation.
     *
     * This example shows how to create a column chart with data from a data table.
     *
     *     var sampleData = Charts.newDataTable()
     *         .addColumn(Charts.ColumnType.STRING, "Year")
     *         .addColumn(Charts.ColumnType.NUMBER, "Sales")
     *         .addColumn(Charts.ColumnType.NUMBER, "Expenses")
     *         .addRow(["2004", 1000, 400])
     *         .addRow(["2005", 1170, 460])
     *         .addRow(["2006", 660, 1120])
     *         .addRow(["2007", 1030, 540])
     *         .addRow(["2008", 800, 600])
     *         .addRow(["2009", 943, 678])
     *         .addRow(["2010", 1020, 550])
     *         .addRow(["2011", 910, 700])
     *         .addRow(["2012", 1230, 840])
     *         .build();
     *
     *     var chart = Charts.newColumnChart()
     *         .setTitle('Sales & Expenses')
     *         .setXAxisTitle('Year')
     *         .setYAxisTitle('Amount (USD)')
     *         .setDimensions(600, 500)
     *         .setDataTable(sampleData)
     *         .build();
     */
    export interface ColumnChartBuilder {
      build(): Chart;
      reverseCategories(): ColumnChartBuilder;
      setBackgroundColor(cssValue: string): ColumnChartBuilder;
      setColors(cssValues: string[]): ColumnChartBuilder;
      setDataSourceUrl(url: string): ColumnChartBuilder;
      setDataTable(tableBuilder: DataTableBuilder): ColumnChartBuilder;
      setDataTable(table: DataTableSource): ColumnChartBuilder;
      setDataViewDefinition(dataViewDefinition: DataViewDefinition): ColumnChartBuilder;
      setDimensions(width: Integer, height: Integer): ColumnChartBuilder;
      setLegendPosition(position: Position): ColumnChartBuilder;
      setLegendTextStyle(textStyle: TextStyle): ColumnChartBuilder;
      setOption(option: string, value: any): ColumnChartBuilder;
      setRange(start: number, end: number): ColumnChartBuilder;
      setStacked(): ColumnChartBuilder;
      setTitle(chartTitle: string): ColumnChartBuilder;
      setTitleTextStyle(textStyle: TextStyle): ColumnChartBuilder;
      setXAxisTextStyle(textStyle: TextStyle): ColumnChartBuilder;
      setXAxisTitle(title: string): ColumnChartBuilder;
      setXAxisTitleTextStyle(textStyle: TextStyle): ColumnChartBuilder;
      setYAxisTextStyle(textStyle: TextStyle): ColumnChartBuilder;
      setYAxisTitle(title: string): ColumnChartBuilder;
      setYAxisTitleTextStyle(textStyle: TextStyle): ColumnChartBuilder;
      useLogScale(): ColumnChartBuilder;
    }

    /**
     * An enumeration of the valid data types for columns in a DataTable.
     */
    export enum ColumnType { DATE, NUMBER, STRING }

    /**
     * A user interface control object, that drives the data displayed by a DashboardPanel.
     *
     * A control can be embedded in a UI application. Controls are user interface widgets (category
     * pickers, range sliders, autocompleters, etc.) users interact with in order to drive the data
     * managed by a dashboard and the charts that are part of it. Controls collect user input and use
     * the information to decide which of the data the dashboard is managing should be made available to
     * the charts that are part of it. Given a data table, a control filters out the data that doesn't
     * comply with the conditions implied by its current state, and exposes the filtered data table as
     * an output.
     *
     * For more details, see the Gviz documentation.
     */
    export interface Control {
      getId(): string;
      getType(): string;
      setId(id: string): Control;
    }

    /**
     * An enumeration of the styles for curves in a chart.
     */
    export enum CurveStyle { NORMAL, SMOOTH }

    /**
     * A dashboard is a visual structure that enables the organization and management of multiple charts
     * that share the same underlying data.
     *
     * Controls are user interface widgets (category pickers, range sliders, autocompleters, etc.)
     * users interact with in order to drive the data managed by a dashboard and the charts that are
     * part of it. For example, a string filter control is a simple text input field that lets the user
     * filter data via string matching. Given a column and matching options, the control filters out the
     * rows that don't match the term that's in the input field.
     *
     * The Gviz API defines a dashboard as a set of charts and controls bound together. The bindings
     * between the different components define the data flow, the state of the controls filters views of
     * the data which propagate in the dashboard and are eventually visualized with charts. For more
     * details, see the Gviz documentation.
     *
     * The dashboard panel has two purposes, one is being a container for the charts and controls
     * objects that compose the dashboard, and the other is holding the data and use as an interface for
     * binding controls to charts.
     */
    export interface DashboardPanel {
      getId(): string;
      getType(): string;
      setId(id: string): DashboardPanel;
    }

    /**
     * A builder for a dashboard panel object. For an example of how to use DashboardPanelBuilder, refer to DashboardPanel.
     *
     * For more details, see the Gviz
     * documentation.
     */
    export interface DashboardPanelBuilder {
      bind(control: Control, chart: Chart, controls: Control[], charts: Chart[]): DashboardPanelBuilder;
      bind(control: Control, chart: Chart, controls: Control[], charts: Chart[]): DashboardPanelBuilder;
      build(): DashboardPanel;
      setDataTable(tableBuilder: DataTableBuilder): DashboardPanelBuilder;
      setDataTable(source: DataTableSource): DashboardPanelBuilder;
    }

    /**
     * A Data Table to be used in charts. A DataTable can come from sources such as Google
     * Sheets or specified data-table URLs, or can be filled in by hand. This class intentionally has no
     * methods: a DataTable can be passed around, but not manipulated directly.
     */
    export interface DataTable {
    }

    /**
     * Builder of DataTable objects. Building a data table consists of first specifying its columns, and
     * then adding its rows, one at a time. Example:
     *
     *     var data = Charts.newDataTable()
     *         .addColumn(Charts.ColumnType.STRING, "Month")
     *         .addColumn(Charts.ColumnType.NUMBER, "In Store")
     *         .addColumn(Charts.ColumnType.NUMBER, "Online")
     *         .addRow(["January", 10, 1])
     *         .addRow(["February", 12, 1])
     *         .addRow(["March", 20, 2])
     *         .addRow(["April", 25, 3])
     *         .addRow(["May", 30, 4])
     *         .build();
     */
    export interface DataTableBuilder {
      addColumn(type: ColumnType, label: string): DataTableBuilder;
      addRow(values: any[]): DataTableBuilder;
      build(): DataTable;
      setValue(row: Integer, column: Integer, value: any): DataTableBuilder;
    }

    /**
     * Interface for objects that can represent their data as a DataTable.
     * Implementing classes
     *
     * NameBrief description
     *
     * DataTableA Data Table to be used in charts.
     *
     * RangeAccess and modify spreadsheet ranges.
     */
    export interface DataTableSource {
      getDataTable(): DataTable;
    }

    /**
     * A data view definition for visualizing chart data.
     *
     * Data view definition can be set for charts to visualize a view derived from the given data
     * table and not the data table itself. For example if the view definition of a chart states that
     * the view columns are [0, 3], only the first and the third columns of the data table is taken into
     * consideration when drawing the chart. See DataViewDefinitionBuilder for an example on how
     * to define and use a DataViewDefinition.
     */
    export interface DataViewDefinition {
    }

    /**
     * Builder for DataViewDefinition objects.
     *
     * Here's an example of using the builder. The data is imported
     * from a Google spreadsheet.
     *
     *     function doGet() {
     *       // This example creates two table charts side by side. One uses a data view definition to
     *       // restrict the number of displayed columns.
     *
     *       // Get sample data from a spreadsheet.
     *       var dataSourceUrl = 'https://docs.google.com/spreadsheet/tq?range=A1%3AF' +
     *           '&key=0Aq4s9w_HxMs7dHpfX05JdmVSb1FpT21sbXd4NVE3UEE&gid=4&headers=-1';
     *
     *       // Create a chart to display all of the data.
     *       var originalChart = Charts.newTableChart()
     *           .setDimensions(600, 500)
     *           .setDataSourceUrl(dataSourceUrl)
     *           .build();
     *
     *       // Create another chart to display a subset of the data (only columns 1 and 4).
     *       var dataViewDefinition = Charts.newDataViewDefinition().setColumns([0, 3]);
     *       var limitedChart = Charts.newTableChart()
     *           .setDimensions(200, 500)
     *           .setDataSourceUrl(dataSourceUrl)
     *           .setDataViewDefinition(dataViewDefinition)
     *           .build();
     *
     *       var htmlOutput = HtmlService.createHtmlOutput();
     *       var originalChartData = Utilities.base64Encode(originalChart.getAs('image/png').getBytes());
     *       var originalChartUrl = "data:image/png;base64," + encodeURI(originalChartData);
     *       var limitedChartData = Utilities.base64Encode(limitedChart.getAs('image/png').getBytes());
     *       var limitedChartUrl = "data:image/png;base64," + encodeURI(limitedChartData);
     *       htmlOutput.append("<table><tr><td>");
     *       htmlOutput.append("<img border=\"1\" src=\"" + originalChartUrl + "\">");
     *       htmlOutput.append("</td><td>");
     *       htmlOutput.append("<img border=\"1\" src=\"" + limitedChartUrl + "\">");
     *       htmlOutput.append("</td></tr></table>");
     *       return htmlOutput;
     *     }
     */
    export interface DataViewDefinitionBuilder {
      build(): DataViewDefinition;
      setColumns(columns: any[]): DataViewDefinitionBuilder;
    }

    /**
     * Builder for line charts. For more details, see the Google Charts documentation.
     *
     * Here is an example that shows how to build a line chart. The data is imported from a Google spreadsheet.
     *
     *       // Get sample data from a spreadsheet.
     *       var dataSourceUrl = 'https://docs.google.com/spreadsheet/tq?range=A1%3AG5' +
     *           '&key=0Aq4s9w_HxMs7dHpfX05JdmVSb1FpT21sbXd4NVE3UEE&gid=2&headers=-1';
     *
     *       var chartBuilder = Charts.newLineChart()
     *           .setTitle('Yearly Rainfall')
     *           .setXAxisTitle('Month')
     *           .setYAxisTitle('Rainfall (in)')
     *           .setDimensions(600, 500)
     *           .setCurveStyle(Charts.CurveStyle.SMOOTH)
     *           .setPointStyle(Charts.PointStyle.MEDIUM)
     *           .setDataSourceUrl(dataSourceUrl);
     *
     *       var chart = chartBuilder.build();
     */
    export interface LineChartBuilder {
      build(): Chart;
      reverseCategories(): LineChartBuilder;
      setBackgroundColor(cssValue: string): LineChartBuilder;
      setColors(cssValues: string[]): LineChartBuilder;
      setCurveStyle(style: CurveStyle): LineChartBuilder;
      setDataSourceUrl(url: string): LineChartBuilder;
      setDataTable(tableBuilder: DataTableBuilder): LineChartBuilder;
      setDataTable(table: DataTableSource): LineChartBuilder;
      setDataViewDefinition(dataViewDefinition: DataViewDefinition): LineChartBuilder;
      setDimensions(width: Integer, height: Integer): LineChartBuilder;
      setLegendPosition(position: Position): LineChartBuilder;
      setLegendTextStyle(textStyle: TextStyle): LineChartBuilder;
      setOption(option: string, value: any): LineChartBuilder;
      setPointStyle(style: PointStyle): LineChartBuilder;
      setRange(start: number, end: number): LineChartBuilder;
      setTitle(chartTitle: string): LineChartBuilder;
      setTitleTextStyle(textStyle: TextStyle): LineChartBuilder;
      setXAxisTextStyle(textStyle: TextStyle): LineChartBuilder;
      setXAxisTitle(title: string): LineChartBuilder;
      setXAxisTitleTextStyle(textStyle: TextStyle): LineChartBuilder;
      setYAxisTextStyle(textStyle: TextStyle): LineChartBuilder;
      setYAxisTitle(title: string): LineChartBuilder;
      setYAxisTitleTextStyle(textStyle: TextStyle): LineChartBuilder;
      useLogScale(): LineChartBuilder;
    }

    /**
     * An enumeration of how a string value should be matched. Matching a string is a boolean operation.
     * Given a string, a match term (string), and a match type, the operation outputs true in
     * the following cases:
     *
     * If the match type equals EXACT and the match term equals the string.
     *
     * If the match type equals PREFIX and the match term is a prefix of the string.
     *
     * If the match type equals ANY and the match term is a substring of the string.
     *
     * This enumeration can be used in by a string filter control to decide which rows to filter out
     * of the data table. Given a column to filter on, leave only the rows that match the value entered
     * in the filter input box, using one of the above matching types.
     */
    export enum MatchType { EXACT, PREFIX, ANY }

    /**
     * A builder for number range filter controls.
     *
     * A number range filter is a slider with two thumbs that lets the user select ranges of numeric
     * values. Given a column of type number and matching options, this control filters out the rows
     * that don't match the range that was selected.
     *
     * For more details, see the Gviz
     * documentation.
     */
    export interface NumberRangeFilterBuilder {
      build(): Control;
      setDataTable(tableBuilder: DataTableBuilder): NumberRangeFilterBuilder;
      setDataTable(table: DataTableSource): NumberRangeFilterBuilder;
      setFilterColumnIndex(columnIndex: Integer): NumberRangeFilterBuilder;
      setFilterColumnLabel(columnLabel: string): NumberRangeFilterBuilder;
      setLabel(label: string): NumberRangeFilterBuilder;
      setLabelSeparator(labelSeparator: string): NumberRangeFilterBuilder;
      setLabelStacking(orientation: Orientation): NumberRangeFilterBuilder;
      setMaxValue(maxValue: Integer): NumberRangeFilterBuilder;
      setMinValue(minValue: Integer): NumberRangeFilterBuilder;
      setOrientation(orientation: Orientation): NumberRangeFilterBuilder;
      setShowRangeValues(showRangeValues: boolean): NumberRangeFilterBuilder;
      setTicks(ticks: Integer): NumberRangeFilterBuilder;
    }

    /**
     * An enumeration of the orientation of an object.
     */
    export enum Orientation { HORIZONTAL, VERTICAL }

    /**
     * An enumeration of how to display selected values in picker widget.
     */
    export enum PickerValuesLayout { ASIDE, BELOW, BELOW_WRAPPING, BELOW_STACKED }

    /**
     * A builder for pie charts. For more details, see the Google Charts documentation.
     *
     * Here is an example that shows how to build a pie chart. The data is imported from a Google spreadsheet.
     *
     *       // Get sample data from a spreadsheet.
     *       var dataSourceUrl = 'https://docs.google.com/spreadsheet/tq?range=A1%3AB8' +
     *           '&key=0Aq4s9w_HxMs7dHpfX05JdmVSb1FpT21sbXd4NVE3UEE&gid=3&headers=-1';
     *
     *       var chartBuilder = Charts.newPieChart()
     *           .setTitle('World Population by Continent')
     *           .setDimensions(600, 500)
     *           .set3D()
     *           .setDataSourceUrl(dataSourceUrl);
     *
     *       var chart = chartBuilder.build();
     */
    export interface PieChartBuilder {
      build(): Chart;
      reverseCategories(): PieChartBuilder;
      set3D(): PieChartBuilder;
      setBackgroundColor(cssValue: string): PieChartBuilder;
      setColors(cssValues: string[]): PieChartBuilder;
      setDataSourceUrl(url: string): PieChartBuilder;
      setDataTable(tableBuilder: DataTableBuilder): PieChartBuilder;
      setDataTable(table: DataTableSource): PieChartBuilder;
      setDataViewDefinition(dataViewDefinition: DataViewDefinition): PieChartBuilder;
      setDimensions(width: Integer, height: Integer): PieChartBuilder;
      setLegendPosition(position: Position): PieChartBuilder;
      setLegendTextStyle(textStyle: TextStyle): PieChartBuilder;
      setOption(option: string, value: any): PieChartBuilder;
      setTitle(chartTitle: string): PieChartBuilder;
      setTitleTextStyle(textStyle: TextStyle): PieChartBuilder;
    }

    /**
     * An enumeration of the styles of points in a line.
     */
    export enum PointStyle { NONE, TINY, MEDIUM, LARGE, HUGE }

    /**
     * An enumeration of legend positions within a chart.
     */
    export enum Position { TOP, RIGHT, BOTTOM, NONE }

    /**
     * Builder for scatter charts. For more details, see the Google Charts documentation.
     *
     * Here is an example that shows how to build a scatter chart. The data is imported from a Google spreadsheet.
     *
     *     // Get sample data from a spreadsheet.
     *     var dataSourceUrl = 'https://docs.google.com/spreadsheet/tq?range=C1%3AD' +
     *         '&key=0Aq4s9w_HxMs7dHpfX05JdmVSb1FpT21sbXd4NVE3UEE&gid=4&headers=-1';
     *
     *     var chartBuilder = Charts.newScatterChart()
     *         .setTitle('Adjusted GDP & U.S. Population')
     *         .setXAxisTitle('U.S. Population (millions)')
     *         .setYAxisTitle('Adjusted GDP ($ billions)')
     *         .setDimensions(600, 500)
     *         .setLegendPosition(Charts.Position.NONE)
     *         .setDataSourceUrl(dataSourceUrl);
     *
     *     var chart = chartBuilder.build();
     */
    export interface ScatterChartBuilder {
      build(): Chart;
      setBackgroundColor(cssValue: string): ScatterChartBuilder;
      setColors(cssValues: string[]): ScatterChartBuilder;
      setDataSourceUrl(url: string): ScatterChartBuilder;
      setDataTable(tableBuilder: DataTableBuilder): ScatterChartBuilder;
      setDataTable(table: DataTableSource): ScatterChartBuilder;
      setDataViewDefinition(dataViewDefinition: DataViewDefinition): ScatterChartBuilder;
      setDimensions(width: Integer, height: Integer): ScatterChartBuilder;
      setLegendPosition(position: Position): ScatterChartBuilder;
      setLegendTextStyle(textStyle: TextStyle): ScatterChartBuilder;
      setOption(option: string, value: any): ScatterChartBuilder;
      setPointStyle(style: PointStyle): ScatterChartBuilder;
      setTitle(chartTitle: string): ScatterChartBuilder;
      setTitleTextStyle(textStyle: TextStyle): ScatterChartBuilder;
      setXAxisLogScale(): ScatterChartBuilder;
      setXAxisRange(start: number, end: number): ScatterChartBuilder;
      setXAxisTextStyle(textStyle: TextStyle): ScatterChartBuilder;
      setXAxisTitle(title: string): ScatterChartBuilder;
      setXAxisTitleTextStyle(textStyle: TextStyle): ScatterChartBuilder;
      setYAxisLogScale(): ScatterChartBuilder;
      setYAxisRange(start: number, end: number): ScatterChartBuilder;
      setYAxisTextStyle(textStyle: TextStyle): ScatterChartBuilder;
      setYAxisTitle(title: string): ScatterChartBuilder;
      setYAxisTitleTextStyle(textStyle: TextStyle): ScatterChartBuilder;
    }

    /**
     * A builder for string filter controls.
     *
     * A string filter is a simple text input field that lets the user filter data via string
     * matching. Given a column of type string and matching options, this control filters out the rows
     * that don't match the term that's in the input field.
     *
     * For more details, see the Gviz
     * documentation.
     */
    export interface StringFilterBuilder {
      build(): Control;
      setCaseSensitive(caseSensitive: boolean): StringFilterBuilder;
      setDataTable(tableBuilder: DataTableBuilder): StringFilterBuilder;
      setDataTable(table: DataTableSource): StringFilterBuilder;
      setFilterColumnIndex(columnIndex: Integer): StringFilterBuilder;
      setFilterColumnLabel(columnLabel: string): StringFilterBuilder;
      setLabel(label: string): StringFilterBuilder;
      setLabelSeparator(labelSeparator: string): StringFilterBuilder;
      setLabelStacking(orientation: Orientation): StringFilterBuilder;
      setMatchType(matchType: MatchType): StringFilterBuilder;
      setRealtimeTrigger(realtimeTrigger: boolean): StringFilterBuilder;
    }

    /**
     * A builder for table charts. For more details, see the Google Charts documentation.
     *
     * Here is an example that shows how to build a table chart. The data is imported from a Google spreadsheet.
     *
     *     // Get sample data from a spreadsheet.
     *     var dataSourceUrl = 'https://docs.google.com/spreadsheet/tq?range=A1%3AF' +
     *         '&key=0Aq4s9w_HxMs7dHpfX05JdmVSb1FpT21sbXd4NVE3UEE&gid=4&headers=-1';
     *
     *     var chartBuilder = Charts.newTableChart()
     *         .setDimensions(600, 500)
     *         .enablePaging(20)
     *         .setDataSourceUrl(dataSourceUrl);
     *
     *     var chart = chartBuilder.build();
     */
    export interface TableChartBuilder {
      build(): Chart;
      enablePaging(enablePaging: boolean): TableChartBuilder;
      enablePaging(pageSize: Integer): TableChartBuilder;
      enablePaging(pageSize: Integer, startPage: Integer): TableChartBuilder;
      enableRtlTable(rtlEnabled: boolean): TableChartBuilder;
      enableSorting(enableSorting: boolean): TableChartBuilder;
      setDataSourceUrl(url: string): TableChartBuilder;
      setDataTable(tableBuilder: DataTableBuilder): TableChartBuilder;
      setDataTable(table: DataTableSource): TableChartBuilder;
      setDataViewDefinition(dataViewDefinition: DataViewDefinition): TableChartBuilder;
      setDimensions(width: Integer, height: Integer): TableChartBuilder;
      setFirstRowNumber(number: Integer): TableChartBuilder;
      setInitialSortingAscending(column: Integer): TableChartBuilder;
      setInitialSortingDescending(column: Integer): TableChartBuilder;
      setOption(option: string, value: any): TableChartBuilder;
      showRowNumberColumn(showRowNumber: boolean): TableChartBuilder;
      useAlternatingRowStyle(alternate: boolean): TableChartBuilder;
    }

    /**
     * A text style configuration object. Used in charts options to configure text style for elements
     * that accepts it, such as title, horizontal axis, vertical axis, legend and tooltip.
     *
     *     // This example creates a chart specifying different text styles for the title and axes.
     *       var sampleData = Charts.newDataTable()
     *           .addColumn(Charts.ColumnType.STRING, "Seasons")
     *           .addColumn(Charts.ColumnType.NUMBER, "Rainy Days")
     *           .addRow(["Winter", 5])
     *           .addRow(["Spring", 12])
     *           .addRow(["Summer", 8])
     *           .addRow(["Fall", 8])
     *           .build();
     *
     *       var titleTextStyleBuilder = Charts.newTextStyle()
     *           .setColor('#0000FF').setFontSize(26).setFontName('Ariel');
     *       var axisTextStyleBuilder = Charts.newTextStyle()
     *           .setColor('#3A3A3A').setFontSize(20).setFontName('Ariel');
     *       var titleTextStyle = titleTextStyleBuilder.build();
     *       var axisTextStyle = axisTextStyleBuilder.build();
     *
     *       var chart = Charts.newLineChart()
     *           .setTitleTextStyle(titleTextStyle)
     *           .setXAxisTitleTextStyle(axisTextStyle)
     *           .setYAxisTitleTextStyle(axisTextStyle)
     *           .setTitle('Rainy Days Per Season')
     *           .setXAxisTitle('Season')
     *           .setYAxisTitle('Number of Rainy Days')
     *           .setDataTable(sampleData)
     *           .build();
     */
    export interface TextStyle {
      getColor(): string;
      getFontName(): string;
      getFontSize(): number;
    }

    /**
     * A builder used to create TextStyle objects. It allows configuration of the text's
     * properties such as name, color, and size.
     *
     * The following example shows how to create a text style using the builder. For a more complete
     * example, refer to the documentation for TextStyle.
     *
     *     // Creates a new text style that uses 26-point, blue, Ariel font.
     *     var textStyleBuilder = Charts.newTextStyle()
     *         .setColor('#0000FF').setFontName('Ariel').setFontSize(26);
     *     var style = textStyleBuilder.build();
     */
    export interface TextStyleBuilder {
      build(): TextStyle;
      setColor(cssValue: string): TextStyleBuilder;
      setFontName(fontName: string): TextStyleBuilder;
      setFontSize(fontSize: number): TextStyleBuilder;
    }

  }
}

declare var Charts: GoogleAppsScript.Charts.Charts;
