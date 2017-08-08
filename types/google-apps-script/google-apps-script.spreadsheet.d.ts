// Type definitions for Google Apps Script 2017-05-12
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.charts.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />
/// <reference path="google-apps-script.drive.d.ts" />

declare namespace GoogleAppsScript {
  /**
   * This service allows scripts to create, access, and modify Google Sheets files. See also the guide to storing data in spreadsheets.
   * 
   * https://developers.google.com/apps-script/guides/sheets
   */
  export module Spreadsheet {
    /**
     * Styles that can be set on a range using
     *  Range.setBorder(top, left, bottom, right, vertical, horizontal, color, style).
     */
    export enum BorderStyle { DOTTED, DASHED, SOLID }

    /**
     * The chart's position within a sheet.  Can be updated using the EmbeddedChart.modify()
     *  function.
     *
     *      chart = chart.modify().setPosition(5, 5, 0, 0).build();
     *      sheet.updateChart(chart);
     */
    export interface ContainerInfo {
      /**
       * The chart's left side will be anchored to this column.
       * @returns {Integer}  1-indexed column (i.e. column C will be 3)
       */
      getAnchorColumn(): Integer;
      /**
       * The chart's top side will be anchored to this row.
       * @returns {Integer}  1-indexed row (i.e. row 5 will return 5)
       */
      getAnchorRow(): Integer;
      /**
       * The chart's upper left hand corner will be offset from the anchor column by this many pixels.
       * @returns {Integer} the horizontal offset in pixels for the upper left hand corner of the chart
       */
      getOffsetX(): Integer;
      /**
       * Chart's upper left hand corner will be offset from the anchor row by this many pixels.
       * @returns {Integer} the vertical offset in pixels for the upper left hand corner of the chart
       */
      getOffsetY(): Integer;
    }

    /**
     * This class allows users to access existing data-validation rules. To create a new rule, see
     *  SpreadsheetApp.newDataValidation(), DataValidationBuilder, and
     *  Range.setDataValidation(rule).
     *
     *      // Log information about the data-validation rule for cell A1.
     *      var cell = SpreadsheetApp.getActive().getRange('A1');
     *      var rule = cell.getDataValidation();
     *      if (rule != null) {
     *        var criteria = rule.getCriteriaType();
     *        var args = rule.getCriteriaValues();
     *        Logger.log('The data-validation rule is %s %s', criteria, args);
     *      } else {
     *        Logger.log('The cell does not have a data-validation rule.')
     *      }
     */
    export interface DataValidation {
      copy(): DataValidationBuilder;
      getAllowInvalid(): boolean;
      getCriteriaType(): DataValidationCriteria;
      getCriteriaValues(): Object[];
      getHelpText(): string;
    }

    /**
     * Builder for data-validation rules.
     *
     *      // Set the data validation for cell A1 to require a value from B1:B10.
     *      var cell = SpreadsheetApp.getActive().getRange('A1');
     *      var range = SpreadsheetApp.getActive().getRange('B1:B10');
     *      var rule = SpreadsheetApp.newDataValidation().requireValueInRange(range).build();
     *      cell.setDataValidation(rule);
     */
    export interface DataValidationBuilder {
      build(): DataValidation;
      copy(): DataValidationBuilder;
      getAllowInvalid(): boolean;
      getCriteriaType(): DataValidationCriteria;
      getCriteriaValues(): Object[];
      getHelpText(): string;
      requireDate(): DataValidationBuilder;
      requireDateAfter(date: Date): DataValidationBuilder;
      requireDateBefore(date: Date): DataValidationBuilder;
      requireDateBetween(start: Date, end: Date): DataValidationBuilder;
      requireDateEqualTo(date: Date): DataValidationBuilder;
      requireDateNotBetween(start: Date, end: Date): DataValidationBuilder;
      requireDateOnOrAfter(date: Date): DataValidationBuilder;
      requireDateOnOrBefore(date: Date): DataValidationBuilder;
      requireFormulaSatisfied(formula: string): DataValidationBuilder;
      requireNumberBetween(start: Number, end: Number): DataValidationBuilder;
      requireNumberEqualTo(number: Number): DataValidationBuilder;
      requireNumberGreaterThan(number: Number): DataValidationBuilder;
      requireNumberGreaterThanOrEqualTo(number: Number): DataValidationBuilder;
      requireNumberLessThan(number: Number): DataValidationBuilder;
      requireNumberLessThanOrEqualTo(number: Number): DataValidationBuilder;
      requireNumberNotBetween(start: Number, end: Number): DataValidationBuilder;
      requireNumberNotEqualTo(number: Number): DataValidationBuilder;
      requireTextContains(text: string): DataValidationBuilder;
      requireTextDoesNotContain(text: string): DataValidationBuilder;
      requireTextEqualTo(text: string): DataValidationBuilder;
      requireTextIsEmail(): DataValidationBuilder;
      requireTextIsUrl(): DataValidationBuilder;
      requireValueInList(values: String[]): DataValidationBuilder;
      requireValueInList(values: String[], showDropdown: boolean): DataValidationBuilder;
      requireValueInRange(range: Range): DataValidationBuilder;
      requireValueInRange(range: Range, showDropdown: boolean): DataValidationBuilder;
      setAllowInvalid(allowInvalidData: boolean): DataValidationBuilder;
      setHelpText(helpText: string): DataValidationBuilder;
      withCriteria(criteria: DataValidationCriteria, args: Object[]): DataValidationBuilder;
    }

    /**
     * An enumeration representing the data-validation criteria that can be set on a range.
     *
     *      // Change existing data-validation rules that require a date in 2013 to require a date in 2014.
     *      var oldDates = [new Date('1/1/2013'), new Date('12/31/2013')];
     *      var newDates = [new Date('1/1/2014'), new Date('12/31/2014')];
     *      var sheet = SpreadsheetApp.getActiveSheet();
     *      var range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
     *      var rules = range.getDataValidations();
     *
     *      for (var i = 0; i < rules.length; i++) {
     *        for (var j = 0; j < rules[i].length; j++) {
     *          var rule = rules[i][j];
     *
     *          if (rule != null) {
     *            var criteria = rule.getCriteriaType();
     *            var args = rule.getCriteriaValues();
     *
     *            if (criteria == SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN
     *                && args[0].getTime() == oldDates[0].getTime()
     *                && args[1].getTime() == oldDates[1].getTime()) {
     *              // Create a builder from the existing rule, then change the dates.
     *              rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
     *            }
     *          }
     *        }
     *      }
     *      range.setDataValidations(rules);
     */
    export enum DataValidationCriteria { DATE_AFTER, DATE_BEFORE, DATE_BETWEEN, DATE_EQUAL_TO, DATE_IS_VALID_DATE, DATE_NOT_BETWEEN, DATE_ON_OR_AFTER, DATE_ON_OR_BEFORE, NUMBER_BETWEEN, NUMBER_EQUAL_TO, NUMBER_GREATER_THAN, NUMBER_GREATER_THAN_OR_EQUAL_TO, NUMBER_LESS_THAN, NUMBER_LESS_THAN_OR_EQUAL_TO, NUMBER_NOT_BETWEEN, NUMBER_NOT_EQUAL_TO, TEXT_CONTAINS, TEXT_DOES_NOT_CONTAIN, TEXT_EQUAL_TO, TEXT_IS_VALID_EMAIL, TEXT_IS_VALID_URL, VALUE_IN_LIST, VALUE_IN_RANGE, CUSTOM_FORMULA }

    /**
     * Builder for area charts. For more details, see the Gviz
     *  documentation.
     */
    export interface EmbeddedAreaChartBuilder {
      addRange(range: Range): EmbeddedChartBuilder;
      asAreaChart(): EmbeddedAreaChartBuilder;
      asBarChart(): EmbeddedBarChartBuilder;
      asColumnChart(): EmbeddedColumnChartBuilder;
      asComboChart(): EmbeddedComboChartBuilder;
      asHistogramChart(): EmbeddedHistogramChartBuilder;
      asLineChart(): EmbeddedLineChartBuilder;
      asPieChart(): EmbeddedPieChartBuilder;
      asScatterChart(): EmbeddedScatterChartBuilder;
      asTableChart(): EmbeddedTableChartBuilder;
      build(): EmbeddedChart;
      getChartType(): Charts.ChartType;
      getContainer(): ContainerInfo;
      getRanges(): Range[];
      removeRange(range: Range): EmbeddedChartBuilder;
      reverseCategories(): EmbeddedAreaChartBuilder;
      setBackgroundColor(cssValue: string): EmbeddedAreaChartBuilder;
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
      setColors(cssValues: String[]): EmbeddedAreaChartBuilder;
      setLegendPosition(position: Charts.Position): EmbeddedAreaChartBuilder;
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedAreaChartBuilder;
      setOption(option: string, value: Object): EmbeddedChartBuilder;
      setPointStyle(style: Charts.PointStyle): EmbeddedAreaChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setRange(start: Number, end: Number): EmbeddedAreaChartBuilder;
      setStacked(): EmbeddedAreaChartBuilder;
      setTitle(chartTitle: string): EmbeddedAreaChartBuilder;
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedAreaChartBuilder;
      setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedAreaChartBuilder;
      setXAxisTitle(title: string): EmbeddedAreaChartBuilder;
      setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedAreaChartBuilder;
      setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedAreaChartBuilder;
      setYAxisTitle(title: string): EmbeddedAreaChartBuilder;
      setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedAreaChartBuilder;
      useLogScale(): EmbeddedAreaChartBuilder;
    }

    /**
     * Builder for bar charts. For more details, see the Gviz
     *  documentation.
     */
    export interface EmbeddedBarChartBuilder {
      addRange(range: Range): EmbeddedChartBuilder;
      asAreaChart(): EmbeddedAreaChartBuilder;
      asBarChart(): EmbeddedBarChartBuilder;
      asColumnChart(): EmbeddedColumnChartBuilder;
      asComboChart(): EmbeddedComboChartBuilder;
      asHistogramChart(): EmbeddedHistogramChartBuilder;
      asLineChart(): EmbeddedLineChartBuilder;
      asPieChart(): EmbeddedPieChartBuilder;
      asScatterChart(): EmbeddedScatterChartBuilder;
      asTableChart(): EmbeddedTableChartBuilder;
      build(): EmbeddedChart;
      getChartType(): Charts.ChartType;
      getContainer(): ContainerInfo;
      getRanges(): Range[];
      removeRange(range: Range): EmbeddedChartBuilder;
      reverseCategories(): EmbeddedBarChartBuilder;
      reverseDirection(): EmbeddedBarChartBuilder;
      setBackgroundColor(cssValue: string): EmbeddedBarChartBuilder;
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
      setColors(cssValues: String[]): EmbeddedBarChartBuilder;
      setLegendPosition(position: Charts.Position): EmbeddedBarChartBuilder;
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;
      setOption(option: string, value: Object): EmbeddedChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setRange(start: Number, end: Number): EmbeddedBarChartBuilder;
      setStacked(): EmbeddedBarChartBuilder;
      setTitle(chartTitle: string): EmbeddedBarChartBuilder;
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;
      setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;
      setXAxisTitle(title: string): EmbeddedBarChartBuilder;
      setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;
      setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;
      setYAxisTitle(title: string): EmbeddedBarChartBuilder;
      setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;
      useLogScale(): EmbeddedBarChartBuilder;
    }

    /**
     * Represents a chart that has been embedded into a Spreadsheet.
     *
     * This example shows how to modify an existing chart:
     *
     *      var sheet = SpreadsheetApp.getActiveSheet();
     *      var range = sheet.getRange("A2:B8")
     *      var chart = sheet.getCharts()[0];
     *      chart = chart.modify()
     *          .addRange(range)
     *          .setOption('title', 'Updated!')
     *          .setOption('animation.duration', 500)
     *          .setPosition(2,2,0,0)
     *          .build();
     *      sheet.updateChart(chart);
     *
     * This example shows how to create a new chart:
     *
     *      function newChart(range, sheet) {
     *        var sheet = SpreadsheetApp.getActiveSheet();
     *        var chartBuilder = sheet.newChart();
     *        chartBuilder.addRange(range)
     *            .setChartType(Charts.ChartType.LINE)
     *            .setOption('title', 'My Line Chart!');
     *        sheet.insertChart(chartBuilder.build());
     *      }
     */
    export interface EmbeddedChart {
      getAs(contentType: string): Base.Blob;
      getBlob(): Base.Blob;
      getContainerInfo(): ContainerInfo;
      getId(): string;
      getOptions(): Charts.ChartOptions;
      getRanges(): Range[];
      getType(): string;
      modify(): EmbeddedChartBuilder;
      setId(id: string): Charts.Chart;
    }

    /**
     * This builder allows you to edit an EmbeddedChart. Make sure to call
     *  sheet.updateChart(builder.build()) to save your changes.
     *
     *      var sheet = SpreadsheetApp.getActiveSheet();
     *      var range = sheet.getRange("A1:B8");
     *      var chart = sheet.getCharts()[0];
     *      chart = chart.modify()
     *          .addRange(range)
     *          .setOption('title', 'Updated!')
     *          .setOption('animation.duration', 500)
     *          .setPosition(2,2,0,0)
     *          .build();
     *      sheet.updateChart(chart);
     */
    export interface EmbeddedChartBuilder {
      addRange(range: Range): EmbeddedChartBuilder;
      asAreaChart(): EmbeddedAreaChartBuilder;
      asBarChart(): EmbeddedBarChartBuilder;
      asColumnChart(): EmbeddedColumnChartBuilder;
      asComboChart(): EmbeddedComboChartBuilder;
      asHistogramChart(): EmbeddedHistogramChartBuilder;
      asLineChart(): EmbeddedLineChartBuilder;
      asPieChart(): EmbeddedPieChartBuilder;
      asScatterChart(): EmbeddedScatterChartBuilder;
      asTableChart(): EmbeddedTableChartBuilder;
      build(): EmbeddedChart;
      getChartType(): Charts.ChartType;
      getContainer(): ContainerInfo;
      getRanges(): Range[];
      removeRange(range: Range): EmbeddedChartBuilder;
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
      setOption(option: string, value: Object): EmbeddedChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
    }

    /**
     * Builder for column charts. For more details, see the Gviz
     *  documentation.
     */
    export interface EmbeddedColumnChartBuilder {
      addRange(range: Range): EmbeddedChartBuilder;
      asAreaChart(): EmbeddedAreaChartBuilder;
      asBarChart(): EmbeddedBarChartBuilder;
      asColumnChart(): EmbeddedColumnChartBuilder;
      asComboChart(): EmbeddedComboChartBuilder;
      asHistogramChart(): EmbeddedHistogramChartBuilder;
      asLineChart(): EmbeddedLineChartBuilder;
      asPieChart(): EmbeddedPieChartBuilder;
      asScatterChart(): EmbeddedScatterChartBuilder;
      asTableChart(): EmbeddedTableChartBuilder;
      build(): EmbeddedChart;
      getChartType(): Charts.ChartType;
      getContainer(): ContainerInfo;
      getRanges(): Range[];
      removeRange(range: Range): EmbeddedChartBuilder;
      reverseCategories(): EmbeddedColumnChartBuilder;
      setBackgroundColor(cssValue: string): EmbeddedColumnChartBuilder;
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
      setColors(cssValues: String[]): EmbeddedColumnChartBuilder;
      setLegendPosition(position: Charts.Position): EmbeddedColumnChartBuilder;
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;
      setOption(option: string, value: Object): EmbeddedChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setRange(start: Number, end: Number): EmbeddedColumnChartBuilder;
      setStacked(): EmbeddedColumnChartBuilder;
      setTitle(chartTitle: string): EmbeddedColumnChartBuilder;
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;
      setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;
      setXAxisTitle(title: string): EmbeddedColumnChartBuilder;
      setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;
      setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;
      setYAxisTitle(title: string): EmbeddedColumnChartBuilder;
      setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;
      useLogScale(): EmbeddedColumnChartBuilder;
    }

    /**
     * Builder for combo charts. For more details, see the Gviz
     *  documentation.
     */
    export interface EmbeddedComboChartBuilder {
      addRange(range: Range): EmbeddedChartBuilder;
      asAreaChart(): EmbeddedAreaChartBuilder;
      asBarChart(): EmbeddedBarChartBuilder;
      asColumnChart(): EmbeddedColumnChartBuilder;
      asComboChart(): EmbeddedComboChartBuilder;
      asHistogramChart(): EmbeddedHistogramChartBuilder;
      asLineChart(): EmbeddedLineChartBuilder;
      asPieChart(): EmbeddedPieChartBuilder;
      asScatterChart(): EmbeddedScatterChartBuilder;
      asTableChart(): EmbeddedTableChartBuilder;
      build(): EmbeddedChart;
      getChartType(): Charts.ChartType;
      getContainer(): ContainerInfo;
      getRanges(): Range[];
      removeRange(range: Range): EmbeddedChartBuilder;
      reverseCategories(): EmbeddedComboChartBuilder;
      setBackgroundColor(cssValue: string): EmbeddedComboChartBuilder;
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
      setColors(cssValues: String[]): EmbeddedComboChartBuilder;
      setLegendPosition(position: Charts.Position): EmbeddedComboChartBuilder;
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedComboChartBuilder;
      setOption(option: string, value: Object): EmbeddedChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setRange(start: Number, end: Number): EmbeddedComboChartBuilder;
      setStacked(): EmbeddedComboChartBuilder;
      setTitle(chartTitle: string): EmbeddedComboChartBuilder;
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedComboChartBuilder;
      setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedComboChartBuilder;
      setXAxisTitle(title: string): EmbeddedComboChartBuilder;
      setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedComboChartBuilder;
      setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedComboChartBuilder;
      setYAxisTitle(title: string): EmbeddedComboChartBuilder;
      setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedComboChartBuilder;
      useLogScale(): EmbeddedComboChartBuilder;
    }

    /**
     * Builder for histogram charts. For more details, see the Gviz
     *  documentation.
     */
    export interface EmbeddedHistogramChartBuilder {
      addRange(range: Range): EmbeddedChartBuilder;
      asAreaChart(): EmbeddedAreaChartBuilder;
      asBarChart(): EmbeddedBarChartBuilder;
      asColumnChart(): EmbeddedColumnChartBuilder;
      asComboChart(): EmbeddedComboChartBuilder;
      asHistogramChart(): EmbeddedHistogramChartBuilder;
      asLineChart(): EmbeddedLineChartBuilder;
      asPieChart(): EmbeddedPieChartBuilder;
      asScatterChart(): EmbeddedScatterChartBuilder;
      asTableChart(): EmbeddedTableChartBuilder;
      build(): EmbeddedChart;
      getChartType(): Charts.ChartType;
      getContainer(): ContainerInfo;
      getRanges(): Range[];
      removeRange(range: Range): EmbeddedChartBuilder;
      reverseCategories(): EmbeddedHistogramChartBuilder;
      setBackgroundColor(cssValue: string): EmbeddedHistogramChartBuilder;
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
      setColors(cssValues: String[]): EmbeddedHistogramChartBuilder;
      setLegendPosition(position: Charts.Position): EmbeddedHistogramChartBuilder;
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedHistogramChartBuilder;
      setOption(option: string, value: Object): EmbeddedChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setRange(start: Number, end: Number): EmbeddedHistogramChartBuilder;
      setStacked(): EmbeddedHistogramChartBuilder;
      setTitle(chartTitle: string): EmbeddedHistogramChartBuilder;
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedHistogramChartBuilder;
      setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedHistogramChartBuilder;
      setXAxisTitle(title: string): EmbeddedHistogramChartBuilder;
      setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedHistogramChartBuilder;
      setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedHistogramChartBuilder;
      setYAxisTitle(title: string): EmbeddedHistogramChartBuilder;
      setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedHistogramChartBuilder;
      useLogScale(): EmbeddedHistogramChartBuilder;
    }

    /**
     * Builder for line charts. For more details, see the Gviz
     *  documentation.
     */
    export interface EmbeddedLineChartBuilder {
      addRange(range: Range): EmbeddedChartBuilder;
      asAreaChart(): EmbeddedAreaChartBuilder;
      asBarChart(): EmbeddedBarChartBuilder;
      asColumnChart(): EmbeddedColumnChartBuilder;
      asComboChart(): EmbeddedComboChartBuilder;
      asHistogramChart(): EmbeddedHistogramChartBuilder;
      asLineChart(): EmbeddedLineChartBuilder;
      asPieChart(): EmbeddedPieChartBuilder;
      asScatterChart(): EmbeddedScatterChartBuilder;
      asTableChart(): EmbeddedTableChartBuilder;
      build(): EmbeddedChart;
      getChartType(): Charts.ChartType;
      getContainer(): ContainerInfo;
      getRanges(): Range[];
      removeRange(range: Range): EmbeddedChartBuilder;
      reverseCategories(): EmbeddedLineChartBuilder;
      setBackgroundColor(cssValue: string): EmbeddedLineChartBuilder;
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
      setColors(cssValues: String[]): EmbeddedLineChartBuilder;
      setCurveStyle(style: Charts.CurveStyle): EmbeddedLineChartBuilder;
      setLegendPosition(position: Charts.Position): EmbeddedLineChartBuilder;
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedLineChartBuilder;
      setOption(option: string, value: Object): EmbeddedChartBuilder;
      setPointStyle(style: Charts.PointStyle): EmbeddedLineChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setRange(start: Number, end: Number): EmbeddedLineChartBuilder;
      setTitle(chartTitle: string): EmbeddedLineChartBuilder;
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedLineChartBuilder;
      setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedLineChartBuilder;
      setXAxisTitle(title: string): EmbeddedLineChartBuilder;
      setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedLineChartBuilder;
      setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedLineChartBuilder;
      setYAxisTitle(title: string): EmbeddedLineChartBuilder;
      setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedLineChartBuilder;
      useLogScale(): EmbeddedLineChartBuilder;
    }

    /**
     * Builder for pie charts. For more details, see the Gviz
     *  documentation.
     */
    export interface EmbeddedPieChartBuilder {
      addRange(range: Range): EmbeddedChartBuilder;
      asAreaChart(): EmbeddedAreaChartBuilder;
      asBarChart(): EmbeddedBarChartBuilder;
      asColumnChart(): EmbeddedColumnChartBuilder;
      asComboChart(): EmbeddedComboChartBuilder;
      asHistogramChart(): EmbeddedHistogramChartBuilder;
      asLineChart(): EmbeddedLineChartBuilder;
      asPieChart(): EmbeddedPieChartBuilder;
      asScatterChart(): EmbeddedScatterChartBuilder;
      asTableChart(): EmbeddedTableChartBuilder;
      build(): EmbeddedChart;
      getChartType(): Charts.ChartType;
      getContainer(): ContainerInfo;
      getRanges(): Range[];
      removeRange(range: Range): EmbeddedChartBuilder;
      reverseCategories(): EmbeddedPieChartBuilder;
      set3D(): EmbeddedPieChartBuilder;
      setBackgroundColor(cssValue: string): EmbeddedPieChartBuilder;
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
      setColors(cssValues: String[]): EmbeddedPieChartBuilder;
      setLegendPosition(position: Charts.Position): EmbeddedPieChartBuilder;
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedPieChartBuilder;
      setOption(option: string, value: Object): EmbeddedChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setTitle(chartTitle: string): EmbeddedPieChartBuilder;
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedPieChartBuilder;
    }

    /**
     * Builder for scatter charts. For more details, see the Gviz
     *  documentation.
     */
    export interface EmbeddedScatterChartBuilder {
      addRange(range: Range): EmbeddedChartBuilder;
      asAreaChart(): EmbeddedAreaChartBuilder;
      asBarChart(): EmbeddedBarChartBuilder;
      asColumnChart(): EmbeddedColumnChartBuilder;
      asComboChart(): EmbeddedComboChartBuilder;
      asHistogramChart(): EmbeddedHistogramChartBuilder;
      asLineChart(): EmbeddedLineChartBuilder;
      asPieChart(): EmbeddedPieChartBuilder;
      asScatterChart(): EmbeddedScatterChartBuilder;
      asTableChart(): EmbeddedTableChartBuilder;
      build(): EmbeddedChart;
      getChartType(): Charts.ChartType;
      getContainer(): ContainerInfo;
      getRanges(): Range[];
      removeRange(range: Range): EmbeddedChartBuilder;
      setBackgroundColor(cssValue: string): EmbeddedScatterChartBuilder;
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
      setColors(cssValues: String[]): EmbeddedScatterChartBuilder;
      setLegendPosition(position: Charts.Position): EmbeddedScatterChartBuilder;
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;
      setOption(option: string, value: Object): EmbeddedChartBuilder;
      setPointStyle(style: Charts.PointStyle): EmbeddedScatterChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setTitle(chartTitle: string): EmbeddedScatterChartBuilder;
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;
      setXAxisLogScale(): EmbeddedScatterChartBuilder;
      setXAxisRange(start: Number, end: Number): EmbeddedScatterChartBuilder;
      setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;
      setXAxisTitle(title: string): EmbeddedScatterChartBuilder;
      setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;
      setYAxisLogScale(): EmbeddedScatterChartBuilder;
      setYAxisRange(start: Number, end: Number): EmbeddedScatterChartBuilder;
      setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;
      setYAxisTitle(title: string): EmbeddedScatterChartBuilder;
      setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;
    }

    /**
     * Builder for table charts. For more details, see the Gviz
     *  documentation.
     */
    export interface EmbeddedTableChartBuilder {
      addRange(range: Range): EmbeddedChartBuilder;
      asAreaChart(): EmbeddedAreaChartBuilder;
      asBarChart(): EmbeddedBarChartBuilder;
      asColumnChart(): EmbeddedColumnChartBuilder;
      asComboChart(): EmbeddedComboChartBuilder;
      asHistogramChart(): EmbeddedHistogramChartBuilder;
      asLineChart(): EmbeddedLineChartBuilder;
      asPieChart(): EmbeddedPieChartBuilder;
      asScatterChart(): EmbeddedScatterChartBuilder;
      asTableChart(): EmbeddedTableChartBuilder;
      build(): EmbeddedChart;
      enablePaging(enablePaging: boolean): EmbeddedTableChartBuilder;
      enablePaging(pageSize: Integer): EmbeddedTableChartBuilder;
      enablePaging(pageSize: Integer, startPage: Integer): EmbeddedTableChartBuilder;
      enableRtlTable(rtlEnabled: boolean): EmbeddedTableChartBuilder;
      enableSorting(enableSorting: boolean): EmbeddedTableChartBuilder;
      getChartType(): Charts.ChartType;
      getContainer(): ContainerInfo;
      getRanges(): Range[];
      removeRange(range: Range): EmbeddedChartBuilder;
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
      setFirstRowNumber(number: Integer): EmbeddedTableChartBuilder;
      setInitialSortingAscending(column: Integer): EmbeddedTableChartBuilder;
      setInitialSortingDescending(column: Integer): EmbeddedTableChartBuilder;
      setOption(option: string, value: Object): EmbeddedChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      showRowNumberColumn(showRowNumber: boolean): EmbeddedTableChartBuilder;
      useAlternatingRowStyle(alternate: boolean): EmbeddedTableChartBuilder;
    }

    /**
     * Create, access and modify named ranges in a spreadsheet.
     *  Named ranges are ranges that have associated string aliases.
     *  They can be viewed and edited via the Sheets UI under the
     *  Data > Named ranges... menu.
     */
    export interface NamedRange {
      /**
       * Gets the name of this named range.
       */
      getName(): string;
      /**
       * Gets teh range referenced by this named range.
       */
      getRange(): Range;
      /**
       * Deletes this named range.
       */
      remove(): void;
      /**
       * Sets/updates the name of this named range.
       */
      setName(name: string): NamedRange;
      /**
       * Sets/updates the range for this named range.
       */
      setRange(range: Range): NamedRange;
    }

    /**
     * @deprecated
     * For spreadsheets created in the newer version of Google Sheets, use the more powerful
     *      Protection class instead. Although this class is deprecated, it will remain
     *      available for compatibility with the older version of Sheets.
     * Access and modify protected sheets in the older version of Google Sheets.
     */
    export interface PageProtection {
      addUser(email: string): void;
      getUsers(): String[];
      isProtected(): boolean;
      removeUser(user: string): void;
      setProtected(protection: boolean): void;
    }

    /**
     * Access and modify protected ranges and sheets. A protected range can protect either a static
     *  range of cells or a named range. A protected sheet may include unprotected regions. For
     *  spreadsheets created with the older version of Google Sheets, use the PageProtection
     *  class instead.
     *
     *      // Protect range A1:B10, then remove all other users from the list of editors.
     *      var ss = SpreadsheetApp.getActive();
     *      var range = ss.getRange('A1:B10');
     *      var protection = range.protect().setDescription('Sample protected range');
     *
     *      // Ensure the current user is an editor before removing others. Otherwise, if the user's edit
     *      // permission comes from a group, the script will throw an exception upon removing the group.
     *      var me = Session.getEffectiveUser();
     *      protection.addEditor(me);
     *      protection.removeEditors(protection.getEditors());
     *      if (protection.canDomainEdit()) {
     *        protection.setDomainEdit(false);
     *      }
     *
     *      // Remove all range protections in the spreadsheet that the user has permission to edit.
     *      var ss = SpreadsheetApp.getActive();
     *      var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
     *      for (var i = 0; i < protections.length; i++) {
     *        var protection = protections[i];
     *        if (protection.canEdit()) {
     *          protection.remove();
     *        }
     *      }
     *
     *      // Protect the active sheet, then remove all other users from the list of editors.
     *      var sheet = SpreadsheetApp.getActiveSheet();
     *      var protection = sheet.protect().setDescription('Sample protected sheet');
     *
     *      // Ensure the current user is an editor before removing others. Otherwise, if the user's edit
     *      // permission comes from a group, the script will throw an exception upon removing the group.
     *      var me = Session.getEffectiveUser();
     *      protection.addEditor(me);
     *      protection.removeEditors(protection.getEditors());
     *      if (protection.canDomainEdit()) {
     *        protection.setDomainEdit(false);
     *      }
     */
    export interface Protection {
      addEditor(emailAddress: string): Protection;
      addEditor(user: Base.User): Protection;
      addEditors(emailAddresses: String[]): Protection;
      canDomainEdit(): boolean;
      canEdit(): boolean;
      getDescription(): string;
      getEditors(): Base.User[];
      getProtectionType(): ProtectionType;
      getRange(): Range;
      getRangeName(): string;
      getUnprotectedRanges(): Range[];
      isWarningOnly(): boolean;
      remove(): void;
      removeEditor(emailAddress: string): Protection;
      removeEditor(user: Base.User): Protection;
      removeEditors(emailAddresses: String[]): Protection;
      setDescription(description: string): Protection;
      setDomainEdit(editable: boolean): Protection;
      setNamedRange(namedRange: NamedRange): Protection;
      setRange(range: Range): Protection;
      setRangeName(rangeName: string): Protection;
      setUnprotectedRanges(ranges: Range[]): Protection;
      setWarningOnly(warningOnly: boolean): Protection;
    }

    /**
     * An enumeration representing the parts of a spreadsheet that can be protected from edits.
     *
     *      // Remove all range protections in the spreadsheet that the user has permission to edit.
     *      var ss = SpreadsheetApp.getActive();
     *      var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
     *      for (var i = 0; i < protections.length; i++) {
     *        var protection = protections[i];
     *        if (protection.canEdit()) {
     *          protection.remove();
     *        }
     *      }
     *
     *      // Removes sheet protection from the active sheet, if the user has permission to edit it.
     *      var sheet = SpreadsheetApp.getActiveSheet();
     *      var protection = sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
     *      if (protection && protection.canEdit()) {
     *        protection.remove();
     *      }
     */
    export enum ProtectionType { RANGE, SHEET }

    /**
     * Access and modify spreadsheet ranges.
     *
     *  This class allows users to access and modify ranges in Google Sheets. A range can be
     *  a single cell in a sheet or a range of cells in a sheet.
     */
    export interface Range {
      activate(): Range;
      breakApart(): Range;
      canEdit(): boolean;
      clear(): Range;
      clear(options: Object): Range;
      clearContent(): Range;
      clearDataValidations(): Range;
      clearFormat(): Range;
      clearNote(): Range;
      copyFormatToRange(gridId: Integer, column: Integer, columnEnd: Integer, row: Integer, rowEnd: Integer): void;
      copyFormatToRange(sheet: Sheet, column: Integer, columnEnd: Integer, row: Integer, rowEnd: Integer): void;
      copyTo(destination: Range): void;
      copyTo(destination: Range, options: Object): void;
      copyValuesToRange(gridId: Integer, column: Integer, columnEnd: Integer, row: Integer, rowEnd: Integer): void;
      copyValuesToRange(sheet: Sheet, column: Integer, columnEnd: Integer, row: Integer, rowEnd: Integer): void;
      getA1Notation(): string;
      getBackground(): string;
      getBackgrounds(): String[][];
      getCell(row: Integer, column: Integer): Range;
      getColumn(): Integer;
      getColumnIndex(): Integer;
      getDataSourceUrl(): string;
      getDataTable(): Charts.DataTable;
      getDataTable(firstRowIsHeader: boolean): Charts.DataTable;
      getDataValidation(): DataValidation;
      getDataValidations(): DataValidation[][];
      getDisplayValue(): string;
      getDisplayValues(): String[][];
      getFontColor(): string;
      getFontColors(): String[][];
      getFontFamilies(): String[][];
      getFontFamily(): string;
      getFontLine(): string;
      getFontLines(): String[][];
      getFontSize(): Integer;
      getFontSizes(): Integer[][];
      getFontStyle(): string;
      getFontStyles(): String[][];
      getFontWeight(): string;
      getFontWeights(): String[][];
      getFormula(): string;
      getFormulaR1C1(): string;
      getFormulas(): String[][];
      getFormulasR1C1(): String[][];
      getGridId(): Integer;
      getHeight(): Integer;
      getHorizontalAlignment(): string;
      getHorizontalAlignments(): String[][];
      getLastColumn(): Integer;
      getLastRow(): Integer;
      getMergedRanges(): Range[];
      getNote(): string;
      getNotes(): String[][];
      getNumColumns(): Integer;
      getNumRows(): Integer;
      getNumberFormat(): string;
      getNumberFormats(): String[][];
      getRow(): Integer;
      getRowIndex(): Integer;
      getSheet(): Sheet;
      getValue(): Object;
      getValues(): Object[][];
      getVerticalAlignment(): string;
      getVerticalAlignments(): String[][];
      getWidth(): Integer;
      getWrap(): boolean;
      getWraps(): Boolean[][];
      isBlank(): boolean;
      isEndColumnBounded(): boolean;
      isEndRowBounded(): boolean;
      isPartOfMerge(): boolean;
      isStartColumnBounded(): boolean;
      isStartRowBounded(): boolean;
      merge(): Range;
      mergeAcross(): Range;
      mergeVertically(): Range;
      moveTo(target: Range): void;
      offset(rowOffset: Integer, columnOffset: Integer): Range;
      offset(rowOffset: Integer, columnOffset: Integer, numRows: Integer): Range;
      offset(rowOffset: Integer, columnOffset: Integer, numRows: Integer, numColumns: Integer): Range;
      protect(): Protection;
      setBackground(color: string): Range;
      setBackgroundRGB(red: Integer, green: Integer, blue: Integer): Range;
      setBackgrounds(color: String[][]): Range;
      setBorder(top: boolean, left: boolean, bottom: boolean, right: boolean, vertical: boolean, horizontal: boolean): Range;
      setBorder(top: boolean, left: boolean, bottom: boolean, right: boolean, vertical: boolean, horizontal: boolean, color: string, style: BorderStyle): Range;
      setDataValidation(rule: DataValidation): Range;
      setDataValidations(rules: DataValidation[][]): Range;
      setFontColor(color: string): Range;
      setFontColors(colors: Object[][]): Range;
      setFontFamilies(fontFamilies: Object[][]): Range;
      setFontFamily(fontFamily: string): Range;
      setFontLine(fontLine: string): Range;
      setFontLines(fontLines: Object[][]): Range;
      setFontSize(size: Integer): Range;
      setFontSizes(sizes: Object[][]): Range;
      setFontStyle(fontStyle: string): Range;
      setFontStyles(fontStyles: Object[][]): Range;
      setFontWeight(fontWeight: string): Range;
      setFontWeights(fontWeights: Object[][]): Range;
      setFormula(formula: string): Range;
      setFormulaR1C1(formula: string): Range;
      setFormulas(formulas: String[][]): Range;
      setFormulasR1C1(formulas: String[][]): Range;
      setHorizontalAlignment(alignment: string): Range;
      setHorizontalAlignments(alignments: Object[][]): Range;
      setNote(note: string): Range;
      setNotes(notes: Object[][]): Range;
      setNumberFormat(numberFormat: string): Range;
      setNumberFormats(numberFormats: Object[][]): Range;
      setValue(value: Object): Range;
      setValues(values: Object[][]): Range;
      setVerticalAlignment(alignment: string): Range;
      setVerticalAlignments(alignments: Object[][]): Range;
      setWrap(isWrapEnabled: boolean): Range;
      setWraps(isWrapEnabled: Object[][]): Range;
      sort(sortSpecObj: Object): Range;
    }

    /**
     * Access and modify spreadsheet sheets. Common operations
     *  are renaming a sheet and accessing range objects from the sheet.
     */
    export interface Sheet {
      activate(): Sheet;
      appendRow(rowContents: Object[]): Sheet;
      autoResizeColumn(columnPosition: Integer): Sheet;
      clear(): Sheet;
      clear(options: Object): Sheet;
      clearContents(): Sheet;
      clearFormats(): Sheet;
      clearNotes(): Sheet;
      copyTo(spreadsheet: Spreadsheet): Sheet;
      deleteColumn(columnPosition: Integer): Sheet;
      deleteColumns(columnPosition: Integer, howMany: Integer): void;
      deleteRow(rowPosition: Integer): Sheet;
      deleteRows(rowPosition: Integer, howMany: Integer): void;
      getActiveCell(): Range;
      getActiveRange(): Range;
      getCharts(): EmbeddedChart[];
      getColumnWidth(columnPosition: Integer): Integer;
      getDataRange(): Range;
      getFrozenColumns(): Integer;
      getFrozenRows(): Integer;
      getIndex(): Integer;
      getLastColumn(): Integer;
      getLastRow(): Integer;
      getMaxColumns(): Integer;
      getMaxRows(): Integer;
      getName(): string;
      getNamedRanges(): NamedRange[];
      getParent(): Spreadsheet;
      getProtections(type: ProtectionType): Protection[];
      getRange(row: Integer, column: Integer): Range;
      getRange(row: Integer, column: Integer, numRows: Integer): Range;
      getRange(row: Integer, column: Integer, numRows: Integer, numColumns: Integer): Range;
      getRange(a1Notation: string): Range;
      getRowHeight(rowPosition: Integer): Integer;
      getSheetId(): Integer;
      getSheetName(): string;
      getSheetValues(startRow: Integer, startColumn: Integer, numRows: Integer, numColumns: Integer): Object[][];
      getTabColor(): string;
      hideColumn(column: Range): void;
      hideColumns(columnIndex: Integer): void;
      hideColumns(columnIndex: Integer, numColumns: Integer): void;
      hideRow(row: Range): void;
      hideRows(rowIndex: Integer): void;
      hideRows(rowIndex: Integer, numRows: Integer): void;
      hideSheet(): Sheet;
      insertChart(chart: EmbeddedChart): void;
      insertColumnAfter(afterPosition: Integer): Sheet;
      insertColumnBefore(beforePosition: Integer): Sheet;
      insertColumns(columnIndex: Integer): void;
      insertColumns(columnIndex: Integer, numColumns: Integer): void;
      insertColumnsAfter(afterPosition: Integer, howMany: Integer): Sheet;
      insertColumnsBefore(beforePosition: Integer, howMany: Integer): Sheet;
      insertImage(blob: Base.Blob, column: Integer, row: Integer): void;
      insertImage(blob: Base.Blob, column: Integer, row: Integer, offsetX: Integer, offsetY: Integer): void;
      insertImage(url: string, column: Integer, row: Integer): void;
      insertImage(url: string, column: Integer, row: Integer, offsetX: Integer, offsetY: Integer): void;
      insertRowAfter(afterPosition: Integer): Sheet;
      insertRowBefore(beforePosition: Integer): Sheet;
      insertRows(rowIndex: Integer): void;
      insertRows(rowIndex: Integer, numRows: Integer): void;
      insertRowsAfter(afterPosition: Integer, howMany: Integer): Sheet;
      insertRowsBefore(beforePosition: Integer, howMany: Integer): Sheet;
      isSheetHidden(): boolean;
      newChart(): EmbeddedChartBuilder;
      protect(): Protection;
      removeChart(chart: EmbeddedChart): void;
      setActiveRange(range: Range): Range;
      setActiveSelection(range: Range): Range;
      setActiveSelection(a1Notation: string): Range;
      setColumnWidth(columnPosition: Integer, width: Integer): Sheet;
      setFrozenColumns(columns: Integer): void;
      setFrozenRows(rows: Integer): void;
      setName(name: string): Sheet;
      setRowHeight(rowPosition: Integer, height: Integer): Sheet;
      setTabColor(color: string): Sheet;
      showColumns(columnIndex: Integer): void;
      showColumns(columnIndex: Integer, numColumns: Integer): void;
      showRows(rowIndex: Integer): void;
      showRows(rowIndex: Integer, numRows: Integer): void;
      showSheet(): Sheet;
      sort(columnPosition: Integer): Sheet;
      sort(columnPosition: Integer, ascending: boolean): Sheet;
      unhideColumn(column: Range): void;
      unhideRow(row: Range): void;
      updateChart(chart: EmbeddedChart): void;
      getSheetProtection(): PageProtection;
      setSheetProtection(permissions: PageProtection): void;
    }

    /**
     * This class allows users to access and modify Google Sheets files. Common operations are adding
     *  new sheets and adding collaborators.
     */
    export interface Spreadsheet {
      addEditor(emailAddress: string): Spreadsheet;
      addEditor(user: Base.User): Spreadsheet;
      addEditors(emailAddresses: String[]): Spreadsheet;
      addMenu(name: string, subMenus: Object[]): void;
      addViewer(emailAddress: string): Spreadsheet;
      addViewer(user: Base.User): Spreadsheet;
      addViewers(emailAddresses: String[]): Spreadsheet;
      appendRow(rowContents: Object[]): Sheet;
      autoResizeColumn(columnPosition: Integer): Sheet;
      copy(name: string): Spreadsheet;
      deleteActiveSheet(): Sheet;
      deleteColumn(columnPosition: Integer): Sheet;
      deleteColumns(columnPosition: Integer, howMany: Integer): void;
      deleteRow(rowPosition: Integer): Sheet;
      deleteRows(rowPosition: Integer, howMany: Integer): void;
      deleteSheet(sheet: Sheet): void;
      duplicateActiveSheet(): Sheet;
      getActiveCell(): Range;
      getActiveRange(): Range;
      getActiveSheet(): Sheet;
      getAs(contentType: string): Base.Blob;
      getBlob(): Base.Blob;
      getColumnWidth(columnPosition: Integer): Integer;
      getDataRange(): Range;
      getEditors(): Base.User[];
      getFormUrl(): string;
      getFrozenColumns(): Integer;
      getFrozenRows(): Integer;
      getId(): string;
      getLastColumn(): Integer;
      getLastRow(): Integer;
      getName(): string;
      getNamedRanges(): NamedRange[];
      getNumSheets(): Integer;
      getOwner(): Base.User;
      getProtections(type: ProtectionType): Protection[];
      getRange(a1Notation: string): Range;
      getRangeByName(name: string): Range;
      getRowHeight(rowPosition: Integer): Integer;
      getSheetByName(name: string): Sheet;
      getSheetId(): Integer;
      getSheetName(): string;
      getSheetValues(startRow: Integer, startColumn: Integer, numRows: Integer, numColumns: Integer): Object[][];
      getSheets(): Sheet[];
      getSpreadsheetLocale(): string;
      getSpreadsheetTimeZone(): string;
      getUrl(): string;
      getViewers(): Base.User[];
      hideColumn(column: Range): void;
      hideRow(row: Range): void;
      insertColumnAfter(afterPosition: Integer): Sheet;
      insertColumnBefore(beforePosition: Integer): Sheet;
      insertColumnsAfter(afterPosition: Integer, howMany: Integer): Sheet;
      insertColumnsBefore(beforePosition: Integer, howMany: Integer): Sheet;
      insertImage(blob: Base.Blob, column: Integer, row: Integer): void;
      insertImage(blob: Base.Blob, column: Integer, row: Integer, offsetX: Integer, offsetY: Integer): void;
      insertImage(url: string, column: Integer, row: Integer): void;
      insertImage(url: string, column: Integer, row: Integer, offsetX: Integer, offsetY: Integer): void;
      insertRowAfter(afterPosition: Integer): Sheet;
      insertRowBefore(beforePosition: Integer): Sheet;
      insertRowsAfter(afterPosition: Integer, howMany: Integer): Sheet;
      insertRowsBefore(beforePosition: Integer, howMany: Integer): Sheet;
      insertSheet(): Sheet;
      insertSheet(sheetIndex: Integer): Sheet;
      insertSheet(sheetIndex: Integer, options: Object): Sheet;
      insertSheet(options: Object): Sheet;
      insertSheet(sheetName: string): Sheet;
      insertSheet(sheetName: string, sheetIndex: Integer): Sheet;
      insertSheet(sheetName: string, sheetIndex: Integer, options: Object): Sheet;
      insertSheet(sheetName: string, options: Object): Sheet;
      moveActiveSheet(pos: Integer): void;
      removeEditor(emailAddress: string): Spreadsheet;
      removeEditor(user: Base.User): Spreadsheet;
      removeMenu(name: string): void;
      removeNamedRange(name: string): void;
      removeViewer(emailAddress: string): Spreadsheet;
      removeViewer(user: Base.User): Spreadsheet;
      rename(newName: string): void;
      renameActiveSheet(newName: string): void;
      setActiveRange(range: Range): Range;
      setActiveSelection(range: Range): Range;
      setActiveSelection(a1Notation: string): Range;
      setActiveSheet(sheet: Sheet): Sheet;
      setColumnWidth(columnPosition: Integer, width: Integer): Sheet;
      setFrozenColumns(columns: Integer): void;
      setFrozenRows(rows: Integer): void;
      setNamedRange(name: string, range: Range): void;
      setRowHeight(rowPosition: Integer, height: Integer): Sheet;
      setSpreadsheetLocale(locale: string): void;
      setSpreadsheetTimeZone(timezone: string): void;
      show(userInterface: Object): void;
      sort(columnPosition: Integer): Sheet;
      sort(columnPosition: Integer, ascending: boolean): Sheet;
      toast(msg: string): void;
      toast(msg: string, title: string): void;
      toast(msg: string, title: string, timeoutSeconds: Number): void;
      unhideColumn(column: Range): void;
      unhideRow(row: Range): void;
      updateMenu(name: string, subMenus: Object[]): void;
      getSheetProtection(): PageProtection;
      isAnonymousView(): boolean;
      isAnonymousWrite(): boolean;
      setAnonymousAccess(anonymousReadAllowed: boolean, anonymousWriteAllowed: boolean): void;
      setSheetProtection(permissions: PageProtection): void;
    }

    /**
     * This class allows users to open Google Sheets files and to create new ones. This class is
     *  the parent class for the Spreadsheet service.
     */
    export interface SpreadsheetApp {
      /**
       * An enumeration of the valid styles for setting borders on a Range.
       */
      BorderStyle: typeof BorderStyle;
      /**
       * An enumeration representing the data-validation criteria that can be set on a range.
       */
      DataValidationCriteria: typeof DataValidationCriteria;
      /**
       * An enumeration representing the parts of a spreadsheet that can be protected from edits.
       */
      ProtectionType: typeof ProtectionType;
      /**
       * Creates a new spreadsheet with the given name.
       */
      create(name: string): Spreadsheet;
      /**
       * Creates a new spreadsheet with the given name and the specified number of rows and columns.
       */
      create(name: string, rows: Integer, columns: Integer): Spreadsheet;
      /**
       * Applies all pending Spreadsheet changes.
       */
      flush(): void;
      /**
       * Returns the currently active spreadsheet, or null if there is none.
       */
      getActive(): Spreadsheet;
      /**
       * Returns the range of cells that is currently considered active.
       */
      getActiveRange(): Range;
      /**
       * Gets the active sheet in a spreadsheet.
       */
      getActiveSheet(): Sheet;
      /**
       * Returns the currently active spreadsheet, or null if there is none.
       */
      getActiveSpreadsheet(): Spreadsheet;
      /**
       * Returns an instance of the spreadsheet's user-interface environment that allows the script to add features like menus, dialogs, and sidebars.
       */
      getUi(): Base.Ui;
      /**
       * Creates a builder for a data-validation rule.
       */
      newDataValidation(): DataValidationBuilder;
      /**
       * Opens the spreadsheet that corresponds to the given File object.
       */
      open(file: Drive.File): Spreadsheet;
      /**
       * 	Opens the spreadsheet with the given ID.
       */
      openById(id: string): Spreadsheet;
      /**
       * 	Opens the spreadsheet with the given url.
       */
      openByUrl(url: string): Spreadsheet;
      /**
       * 	Sets the active range for the application.
       */
      setActiveRange(range: Range): Range;
      /**
       * 	Sets the active sheet in a spreadsheet.
       */
      setActiveSheet(sheet: Sheet): Sheet;
      /**
       * 	Sets the active spreadsheet.
       */
      setActiveSpreadsheet(newActiveSpreadsheet: Spreadsheet): void;
    }

  }
}

/**
 * This class allows users to open Google Sheets files and to create new ones. This class is
 *  the parent class for the Spreadsheet service.
 */
declare var SpreadsheetApp: GoogleAppsScript.Spreadsheet.SpreadsheetApp;
