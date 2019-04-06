// Type definitions for Google Apps Script 2019-02-27
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.charts.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />
/// <reference path="google-apps-script.drive.d.ts" />

declare namespace GoogleAppsScript {
  export module Spreadsheet {
    /**
     * An enumeration of the types of series used to calculate auto-filled values. The manner in which
     * these series affect calculated values differs depending on the type and amount of source data.
     */
    export enum AutoFillSeries { DEFAULT_SERIES, ALTERNATE_SERIES }

    /**
     * Access and modify bandings, the color patterns applied to rows or columns of a range. Each
     * banding consists of a range and a set of colors for rows, columns, headers, and footers.
     */
    export interface Banding {
      copyTo(range: Range): Banding;
      getFirstColumnColor(): string;
      getFirstRowColor(): string;
      getFooterColumnColor(): string;
      getFooterRowColor(): string;
      getHeaderColumnColor(): string;
      getHeaderRowColor(): string;
      getRange(): Range;
      getSecondColumnColor(): string;
      getSecondRowColor(): string;
      remove(): void;
      setFirstColumnColor(color: string): Banding;
      setFirstRowColor(color: string): Banding;
      setFooterColumnColor(color: string): Banding;
      setFooterRowColor(color: string): Banding;
      setHeaderColumnColor(color: string): Banding;
      setHeaderRowColor(color: string): Banding;
      setRange(range: Range): Banding;
      setSecondColumnColor(color: string): Banding;
      setSecondRowColor(color: string): Banding;
    }

    /**
     * An enumeration of banding themes. Each theme consists of several complementary colors that are
     * applied to different cells based on the banding settings.
     */
    export enum BandingTheme { LIGHT_GREY, CYAN, GREEN, YELLOW, ORANGE, BLUE, TEAL, GREY, BROWN, LIGHT_GREEN, INDIGO, PINK }

    /**
     * Access the existing BigQuery data source specification. To create a new data source
     * specification, use SpreadsheetApp.newDataSourceSpec().
     */
    export interface BigQueryDataSourceSpec {
      copy(): DataSourceSpecBuilder;
      getParameters(): DataSourceParameter[];
      getProjectId(): string;
      getRawQuery(): string;
      getType(): DataSourceType;
    }

    /**
     * The builder for BigQueryDataSourceSpecBuilder.
     */
    export interface BigQueryDataSourceSpecBuilder {
      build(): DataSourceSpec;
      copy(): DataSourceSpecBuilder;
      getParameters(): DataSourceParameter[];
      getProjectId(): string;
      getRawQuery(): string;
      getType(): DataSourceType;
      removeAllParameters(): BigQueryDataSourceSpecBuilder;
      removeParameter(parameterName: string): BigQueryDataSourceSpecBuilder;
      setParameterFromCell(parameterName: string, sourceCell: string): BigQueryDataSourceSpecBuilder;
      setProjectId(projectId: string): BigQueryDataSourceSpecBuilder;
      setRawQuery(rawQuery: string): BigQueryDataSourceSpecBuilder;
    }

    /**
     * Access boolean conditions in ConditionalFormatRules. Each
     * conditional format rule may contain a single boolean condition. The boolean condition itself
     * contains a boolean criteria (with values) and formatting settings. The criteria is evaluated
     * against the content of a cell resulting in either a true or false value. If the
     * criteria evaluates to true, the condition's formatting settings are applied to the cell.
     */
    export interface BooleanCondition {
      getBackground(): string;
      getBold(): boolean;
      getCriteriaType(): BooleanCriteria;
      getCriteriaValues(): Object[];
      getFontColor(): string;
      getItalic(): boolean;
      getStrikethrough(): boolean;
      getUnderline(): boolean;
    }

    /**
     * An enumeration representing the boolean criteria that can be used in conditional format or
     * filter.
     */
    export enum BooleanCriteria { CELL_EMPTY, CELL_NOT_EMPTY, DATE_AFTER, DATE_BEFORE, DATE_EQUAL_TO, DATE_AFTER_RELATIVE, DATE_BEFORE_RELATIVE, DATE_EQUAL_TO_RELATIVE, NUMBER_BETWEEN, NUMBER_EQUAL_TO, NUMBER_GREATER_THAN, NUMBER_GREATER_THAN_OR_EQUAL_TO, NUMBER_LESS_THAN, NUMBER_LESS_THAN_OR_EQUAL_TO, NUMBER_NOT_BETWEEN, NUMBER_NOT_EQUAL_TO, TEXT_CONTAINS, TEXT_DOES_NOT_CONTAIN, TEXT_EQUAL_TO, TEXT_STARTS_WITH, TEXT_ENDS_WITH, CUSTOM_FORMULA }

    /**
     * Styles that can be set on a range using Range.setBorder(top, left, bottom, right, vertical, horizontal, color, style).
     */
    export enum BorderStyle { DOTTED, DASHED, SOLID, SOLID_MEDIUM, SOLID_THICK, DOUBLE }

    /**
     * Access conditional formatting rules. To create a new rule, use SpreadsheetApp.newConditionalFormatRule() and ConditionalFormatRuleBuilder.
     * You can use Sheet.setConditionalFormatRules(rules) to set the
     * rules for a given sheet.
     */
    export interface ConditionalFormatRule {
      copy(): ConditionalFormatRuleBuilder;
      getBooleanCondition(): BooleanCondition;
      getGradientCondition(): GradientCondition;
      getRanges(): Range[];
    }

    /**
     * Builder for conditional format rules.
     *
     *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
     *     // they contain a number between 1 and 10.
     *     var sheet = SpreadsheetApp.getActiveSheet();
     *     var range = sheet.getRange("A1:B3");
     *     var rule = SpreadsheetApp.newConditionalFormatRule()
     *         .whenNumberBetween(1, 10)
     *         .setBackground("#FF0000")
     *         .setRanges([range])
     *         .build();
     *     var rules = sheet.getConditionalFormatRules();
     *     rules.push(rule);
     *     sheet.setConditionalFormatRules(rules);
     */
    export interface ConditionalFormatRuleBuilder {
      build(): ConditionalFormatRule;
      copy(): ConditionalFormatRuleBuilder;
      getBooleanCondition(): BooleanCondition;
      getGradientCondition(): GradientCondition;
      getRanges(): Range[];
      setBackground(color: string): ConditionalFormatRuleBuilder;
      setBold(bold: boolean): ConditionalFormatRuleBuilder;
      setFontColor(color: string): ConditionalFormatRuleBuilder;
      setGradientMaxpoint(color: string): ConditionalFormatRuleBuilder;
      setGradientMaxpointWithValue(color: string, type: InterpolationType, value: string): ConditionalFormatRuleBuilder;
      setGradientMidpointWithValue(color: string, type: InterpolationType, value: string): ConditionalFormatRuleBuilder;
      setGradientMinpoint(color: string): ConditionalFormatRuleBuilder;
      setGradientMinpointWithValue(color: string, type: InterpolationType, value: string): ConditionalFormatRuleBuilder;
      setItalic(italic: boolean): ConditionalFormatRuleBuilder;
      setRanges(ranges: Range[]): ConditionalFormatRuleBuilder;
      setStrikethrough(strikethrough: boolean): ConditionalFormatRuleBuilder;
      setUnderline(underline: boolean): ConditionalFormatRuleBuilder;
      whenCellEmpty(): ConditionalFormatRuleBuilder;
      whenCellNotEmpty(): ConditionalFormatRuleBuilder;
      whenDateAfter(date: Date): ConditionalFormatRuleBuilder;
      whenDateAfter(date: RelativeDate): ConditionalFormatRuleBuilder;
      whenDateBefore(date: Date): ConditionalFormatRuleBuilder;
      whenDateBefore(date: RelativeDate): ConditionalFormatRuleBuilder;
      whenDateEqualTo(date: Date): ConditionalFormatRuleBuilder;
      whenDateEqualTo(date: RelativeDate): ConditionalFormatRuleBuilder;
      whenFormulaSatisfied(formula: string): ConditionalFormatRuleBuilder;
      whenNumberBetween(start: Number, end: Number): ConditionalFormatRuleBuilder;
      whenNumberEqualTo(number: Number): ConditionalFormatRuleBuilder;
      whenNumberGreaterThan(number: Number): ConditionalFormatRuleBuilder;
      whenNumberGreaterThanOrEqualTo(number: Number): ConditionalFormatRuleBuilder;
      whenNumberLessThan(number: Number): ConditionalFormatRuleBuilder;
      whenNumberLessThanOrEqualTo(number: Number): ConditionalFormatRuleBuilder;
      whenNumberNotBetween(start: Number, end: Number): ConditionalFormatRuleBuilder;
      whenNumberNotEqualTo(number: Number): ConditionalFormatRuleBuilder;
      whenTextContains(text: string): ConditionalFormatRuleBuilder;
      whenTextDoesNotContain(text: string): ConditionalFormatRuleBuilder;
      whenTextEndsWith(text: string): ConditionalFormatRuleBuilder;
      whenTextEqualTo(text: string): ConditionalFormatRuleBuilder;
      whenTextStartsWith(text: string): ConditionalFormatRuleBuilder;
      withCriteria(criteria: BooleanCriteria, args: Object[]): ConditionalFormatRuleBuilder;
    }

    /**
     * Access the chart's position within a sheet. Can be updated using the EmbeddedChart.modify() function.
     *
     *     chart = chart.modify().setPosition(5, 5, 0, 0).build();
     *     sheet.updateChart(chart);
     */
    export interface ContainerInfo {
      getAnchorColumn(): Integer;
      getAnchorRow(): Integer;
      getOffsetX(): Integer;
      getOffsetY(): Integer;
    }

    /**
     * An enumeration of possible special paste types.
     */
    export enum CopyPasteType { PASTE_NORMAL, PASTE_NO_BORDERS, PASTE_FORMAT, PASTE_FORMULA, PASTE_DATA_VALIDATION, PASTE_VALUES, PASTE_CONDITIONAL_FORMATTING, PASTE_COLUMN_WIDTHS }

    /**
     * An enumeration of data execution error codes.
     */
    export enum DataExecutionErrorCode { DATA_EXECUTION_ERROR_CODE_UNSUPPORTED, NONE, TIME_OUT, TOO_MANY_ROWS, TOO_MANY_CELLS, ENGINE, PARAMETER_INVALID, UNSUPPORTED_DATA_TYPE, DUPLICATE_COLUMN_NAMES, INTERRUPTED, OTHER, TOO_MANY_CHARS_PER_CELL }

    /**
     * An enumeration of data execution states.
     */
    export enum DataExecutionState { DATA_EXECUTION_STATE_UNSUPPORTED, RUNNING, SUCCESS, ERROR, NOT_STARTED }

    /**
     * The data execution status.
     */
    export interface DataExecutionStatus {
      getErrorCode(): DataExecutionErrorCode;
      getErrorMessage(): string;
      getExecutionState(): DataExecutionState;
      getLastRefreshedTime(): Date;
      isTruncated(): boolean;
    }

    /**
     * Access and modify existing data source. To create a data source table with new data source, see
     * DataSourceTable.
     */
    export interface DataSource {
      getSpec(): DataSourceSpec;
      updateSpec(spec: DataSourceSpec): DataSource;
    }

    /**
     * Access existing data source parameters.
     */
    export interface DataSourceParameter {
      getName(): string;
      getSourceCell(): string;
      getType(): DataSourceParameterType;
    }

    /**
     * An enumeration of data source parameter types.
     */
    export enum DataSourceParameterType { DATA_SOURCE_PARAMETER_TYPE_UNSUPPORTED, CELL }

    /**
     * Access the general settings of an existing data source spec. To access data source spec for
     * certain type, use as...() method. To create a new data source spec, use SpreadsheetApp.newDataSourceSpec().
     *
     * This example shows how to get information from a BigQuery data source spec.
     *
     *     var dataSourceTable =
     *         SpreadsheetApp.getActive().getSheetByName("Data Sheet 1").getDataSourceTables()[0];
     *     var spec = dataSourceTable.getDataSource().getSpec();
     *     if (spec.getType() == SpreadsheetApp.DataSourceType.BIGQUERY) {
     *       var bqSpec = spec.asBigQuery();
     *       Logger.log("Project ID: %s\n", bqSpec.getProjectId());
     *       Logger.log("Raw query string: %s\n", bqSpec.getRawQuery());
     *     }
     */
    export interface DataSourceSpec {
      asBigQuery(): BigQueryDataSourceSpec;
      copy(): DataSourceSpecBuilder;
      getParameters(): DataSourceParameter[];
      getType(): DataSourceType;
    }

    /**
     * The builder for DataSourceSpec. To create a specification for certain type, use as...() method. To create a new builder, use SpreadsheetApp.newDataSourceSpec(). To use the specification, see DataSourceTable.
     *
     * This examples show how to build a BigQuery data source specification.
     *
     *     var spec = SpreadsheetApp.newDataSourceSpec()
     *                .asBigQuery()
     *                .setProjectId('big_query_project')
     *                .setRawQuery('select @FIELD from table limit @LIMIT')
     *                .setParameterFromCell('FIELD', 'Sheet1!A1')
     *                .setParameterFromCell('LIMIT', 'namedRangeCell')
     *                .build();
     */
    export interface DataSourceSpecBuilder {
      asBigQuery(): BigQueryDataSourceSpecBuilder;
      build(): DataSourceSpec;
      copy(): DataSourceSpecBuilder;
      getParameters(): DataSourceParameter[];
      getType(): DataSourceType;
      removeAllParameters(): DataSourceSpecBuilder;
      removeParameter(parameterName: string): DataSourceSpecBuilder;
      setParameterFromCell(parameterName: string, sourceCell: string): DataSourceSpecBuilder;
    }

    /**
     * Access and modify existing data source table. To create a new data source table on a new sheet,
     * use Spreadsheet.insertSheetWithDataSourceTable(spec).
     *
     * This example shows how to create a new data source table.
     *
     *     SpreadsheetApp.enableBigQueryExecution();
     *     var spreadsheet = SpreadsheetApp.getActive();
     *     var spec = SpreadsheetApp.newDataSourceSpec()
     *                .asBigQuery()
     *                .setProjectId('big_query_project')
     *                .setRawQuery('select @FIELD from table limit @LIMIT')
     *                .setParameterFromCell('FIELD', 'Sheet1!A1')
     *                .setParameterFromCell('LIMIT', 'namedRangeCell')
     *                .build();
     *     // Starts data execution asynchronously.
     *     var dataSheet = spreadsheet.insertSheetWithDataSourceTable(spec);
     *     var dataSourceTable = dataSheet.getDataSourceTables()[0];
     *     // waitForCompletion() blocks script execution until data execution completes.
     *     dataSourceTable.waitForCompletion(60);
     *     // Check status after execution.
     *     Logger.log("Data execution state: %s.", dataSourceTable.getStatus().getExecutionState());
     *
     * This example shows how to edit a data source.
     *
     *     SpreadsheetApp.enableBigQueryExecution();
     *     var dataSheet = SpreadsheetApp.getActive().getSheetByName("Data Sheet 1");
     *     var dataSourceTable = dataSheet.getDataSourceTables()[0];
     *     var dataSource = dataSourceTable.getDataSource();
     *     var newSpec = dataSource.getSpec()
     *                   .copy()
     *                   .asBigQuery()
     *                   .setRawQuery('select name from table limit 2')
     *                   .removeAllParameters()
     *                   .build();
     *     // Updates data source specification and starts data execution asynchronously.
     *     dataSource.updateSpec(newSpec);
     *     // Check status during execution.
     *     Logger.log("Data execution state: %s.", dataSourceTable.getStatus().getExecutionState());
     *     // waitForCompletion() blocks script execution until data execution completes.
     *     dataSourceTable.waitForCompletion(60);
     *     // Check status after execution.
     *     Logger.log("Data execution state: %s.", dataSourceTable.getStatus().getExecutionState());
     */
    export interface DataSourceTable {
      forceRefreshData(): DataSourceTable;
      getDataSource(): DataSource;
      getRange(): Range;
      getStatus(): DataExecutionStatus;
      refreshData(): DataSourceTable;
      waitForCompletion(timeoutInSeconds: Integer): DataExecutionStatus;
    }

    /**
     * An enumeration of data source types.
     */
    export enum DataSourceType { DATA_SOURCE_TYPE_UNSUPPORTED, BIGQUERY }

    /**
     * Access data validation rules. To create a new rule, use SpreadsheetApp.newDataValidation() and DataValidationBuilder. You can use
     * Range.setDataValidation(rule) to set the validation rule for a range.
     *
     *     // Log information about the data validation rule for cell A1.
     *     var cell = SpreadsheetApp.getActive().getRange('A1');
     *     var rule = cell.getDataValidation();
     *     if (rule != null) {
     *       var criteria = rule.getCriteriaType();
     *       var args = rule.getCriteriaValues();
     *       Logger.log('The data validation rule is %s %s', criteria, args);
     *     } else {
     *       Logger.log('The cell does not have a data validation rule.')
     *     }
     */
    export interface DataValidation {
      copy(): DataValidationBuilder;
      getAllowInvalid(): boolean;
      getCriteriaType(): DataValidationCriteria;
      getCriteriaValues(): Object[];
      getHelpText(): string;
    }

    /**
     * Builder for data validation rules.
     *
     *     // Set the data validation for cell A1 to require a value from B1:B10.
     *     var cell = SpreadsheetApp.getActive().getRange('A1');
     *     var range = SpreadsheetApp.getActive().getRange('B1:B10');
     *     var rule = SpreadsheetApp.newDataValidation().requireValueInRange(range).build();
     *     cell.setDataValidation(rule);
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
      requireValueInList(values: string[]): DataValidationBuilder;
      requireValueInList(values: string[], showDropdown: boolean): DataValidationBuilder;
      requireValueInRange(range: Range): DataValidationBuilder;
      requireValueInRange(range: Range, showDropdown: boolean): DataValidationBuilder;
      setAllowInvalid(allowInvalidData: boolean): DataValidationBuilder;
      setHelpText(helpText: string): DataValidationBuilder;
      withCriteria(criteria: DataValidationCriteria, args: Object[]): DataValidationBuilder;
    }

    /**
     * An enumeration representing the data validation criteria that can be set on a range.
     *
     *     // Change existing data-validation rules that require a date in 2013 to require a date in 2014.
     *     var oldDates = [new Date('1/1/2013'), new Date('12/31/2013')];
     *     var newDates = [new Date('1/1/2014'), new Date('12/31/2014')];
     *     var sheet = SpreadsheetApp.getActiveSheet();
     *     var range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
     *     var rules = range.getDataValidations();
     *
     *     for (var i = 0; i < rules.length; i++) {
     *       for (var j = 0; j < rules[i].length; j++) {
     *         var rule = rules[i][j];
     *
     *         if (rule != null) {
     *           var criteria = rule.getCriteriaType();
     *           var args = rule.getCriteriaValues();
     *
     *           if (criteria == SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN
     *               && args[0].getTime() == oldDates[0].getTime()
     *               && args[1].getTime() == oldDates[1].getTime()) {
     *             // Create a builder from the existing rule, then change the dates.
     *             rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
     *           }
     *         }
     *       }
     *     }
     *     range.setDataValidations(rules);
     */
    export enum DataValidationCriteria { DATE_AFTER, DATE_BEFORE, DATE_BETWEEN, DATE_EQUAL_TO, DATE_IS_VALID_DATE, DATE_NOT_BETWEEN, DATE_ON_OR_AFTER, DATE_ON_OR_BEFORE, NUMBER_BETWEEN, NUMBER_EQUAL_TO, NUMBER_GREATER_THAN, NUMBER_GREATER_THAN_OR_EQUAL_TO, NUMBER_LESS_THAN, NUMBER_LESS_THAN_OR_EQUAL_TO, NUMBER_NOT_BETWEEN, NUMBER_NOT_EQUAL_TO, TEXT_CONTAINS, TEXT_DOES_NOT_CONTAIN, TEXT_EQUAL_TO, TEXT_IS_VALID_EMAIL, TEXT_IS_VALID_URL, VALUE_IN_LIST, VALUE_IN_RANGE, CUSTOM_FORMULA, CHECKBOX }

    /**
     * Access and modify developer metadata. To create new developer metadata use Range.addDeveloperMetadata(key), Sheet.addDeveloperMetadata(key), or Spreadsheet.addDeveloperMetadata(key).
     */
    export interface DeveloperMetadata {
      getId(): Integer;
      getKey(): string;
      getLocation(): DeveloperMetadataLocation;
      getValue(): string;
      getVisibility(): DeveloperMetadataVisibility;
      moveToColumn(column: Range): DeveloperMetadata;
      moveToRow(row: Range): DeveloperMetadata;
      moveToSheet(sheet: Sheet): DeveloperMetadata;
      moveToSpreadsheet(): DeveloperMetadata;
      remove(): void;
      setKey(key: string): DeveloperMetadata;
      setValue(value: string): DeveloperMetadata;
      setVisibility(visibility: DeveloperMetadataVisibility): DeveloperMetadata;
    }

    /**
     * Search for developer metadata in a spreadsheet. To create new developer metadata finder use
     * Range.createDeveloperMetadataFinder(), Sheet.createDeveloperMetadataFinder(),
     * or Spreadsheet.createDeveloperMetadataFinder().
     */
    export interface DeveloperMetadataFinder {
      find(): DeveloperMetadata[];
      onIntersectingLocations(): DeveloperMetadataFinder;
      withId(id: Integer): DeveloperMetadataFinder;
      withKey(key: string): DeveloperMetadataFinder;
      withLocationType(locationType: DeveloperMetadataLocationType): DeveloperMetadataFinder;
      withValue(value: string): DeveloperMetadataFinder;
      withVisibility(visibility: DeveloperMetadataVisibility): DeveloperMetadataFinder;
    }

    /**
     * Access developer metadata location information.
     */
    export interface DeveloperMetadataLocation {
      getColumn(): Range;
      getLocationType(): DeveloperMetadataLocationType;
      getRow(): Range;
      getSheet(): Sheet;
      getSpreadsheet(): Spreadsheet;
    }

    /**
     * An enumeration of the types of developer metadata location types.
     */
    export enum DeveloperMetadataLocationType { SPREADSHEET, SHEET, ROW, COLUMN }

    /**
     * An enumeration of the types of developer metadata visibility.
     */
    export enum DeveloperMetadataVisibility { DOCUMENT, PROJECT }

    /**
     * An enumeration of possible directions along which data can be stored in a spreadsheet.
     */
    export enum Dimension { COLUMNS, ROWS }

    /**
     * An enumeration representing the possible directions that one can move within a spreadsheet using
     * the arrow keys.
     */
    export enum Direction { UP, DOWN, PREVIOUS, NEXT }

    /**
     * Builder for area charts. For more details, see the Gviz
     * documentation.
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
      setColors(cssValues: string[]): EmbeddedAreaChartBuilder;
      setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;
      setLegendPosition(position: Charts.Position): EmbeddedAreaChartBuilder;
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedAreaChartBuilder;
      setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;
      setNumHeaders(headers: Integer): EmbeddedChartBuilder;
      setOption(option: string, value: Object): EmbeddedChartBuilder;
      setPointStyle(style: Charts.PointStyle): EmbeddedAreaChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setRange(start: Number, end: Number): EmbeddedAreaChartBuilder;
      setStacked(): EmbeddedAreaChartBuilder;
      setTitle(chartTitle: string): EmbeddedAreaChartBuilder;
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedAreaChartBuilder;
      setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;
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
     * documentation.
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
      setColors(cssValues: string[]): EmbeddedBarChartBuilder;
      setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;
      setLegendPosition(position: Charts.Position): EmbeddedBarChartBuilder;
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;
      setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;
      setNumHeaders(headers: Integer): EmbeddedChartBuilder;
      setOption(option: string, value: Object): EmbeddedChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setRange(start: Number, end: Number): EmbeddedBarChartBuilder;
      setStacked(): EmbeddedBarChartBuilder;
      setTitle(chartTitle: string): EmbeddedBarChartBuilder;
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;
      setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;
      setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;
      setXAxisTitle(title: string): EmbeddedBarChartBuilder;
      setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;
      setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;
      setYAxisTitle(title: string): EmbeddedBarChartBuilder;
      setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;
      useLogScale(): EmbeddedBarChartBuilder;
    }

    /**
     * Represents a chart that has been embedded into a spreadsheet.
     *
     * This example shows how to modify an existing chart:
     *
     *     var sheet = SpreadsheetApp.getActiveSheet();
     *     var range = sheet.getRange("A2:B8")
     *     var chart = sheet.getCharts()[0];
     *     chart = chart.modify()
     *         .addRange(range)
     *         .setOption('title', 'Updated!')
     *         .setOption('animation.duration', 500)
     *         .setPosition(2,2,0,0)
     *         .build();
     *     sheet.updateChart(chart);
     *
     * This example shows how to create a new chart:
     *
     *     function newChart(range, sheet) {
     *       var sheet = SpreadsheetApp.getActiveSheet();
     *       var chartBuilder = sheet.newChart();
     *       chartBuilder.addRange(range)
     *           .setChartType(Charts.ChartType.LINE)
     *           .setOption('title', 'My Line Chart!');
     *       sheet.insertChart(chartBuilder.build());
     *     }
     */
    export interface EmbeddedChart {
      getAs(contentType: string): Base.Blob;
      getBlob(): Base.Blob;
      getContainerInfo(): ContainerInfo;
      getHiddenDimensionStrategy(): Charts.ChartHiddenDimensionStrategy;
      getId(): string;
      getMergeStrategy(): Charts.ChartMergeStrategy;
      getNumHeaders(): Integer;
      getOptions(): Charts.ChartOptions;
      getRanges(): Range[];
      getTransposeRowsAndColumns(): boolean;
      getType(): string;
      modify(): EmbeddedChartBuilder;
      setId(id: string): Charts.Chart;
    }

    /**
     * Builder used to edit an EmbeddedChart. Changes made to the chart are not saved until
     * Sheet.updateChart(chart) is called on the rebuilt chart.
     *
     *     var sheet = SpreadsheetApp.getActiveSheet();
     *     var range = sheet.getRange("A1:B8");
     *     var chart = sheet.getCharts()[0];
     *     chart = chart.modify()
     *         .addRange(range)
     *         .setOption('title', 'Updated!')
     *         .setOption('animation.duration', 500)
     *         .setPosition(2,2,0,0)
     *         .build();
     *     sheet.updateChart(chart);
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
      setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;
      setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;
      setNumHeaders(headers: Integer): EmbeddedChartBuilder;
      setOption(option: string, value: Object): EmbeddedChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;
    }

    /**
     * Builder for column charts. For more details, see the Gviz
     * documentation.
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
      setColors(cssValues: string[]): EmbeddedColumnChartBuilder;
      setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;
      setLegendPosition(position: Charts.Position): EmbeddedColumnChartBuilder;
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;
      setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;
      setNumHeaders(headers: Integer): EmbeddedChartBuilder;
      setOption(option: string, value: Object): EmbeddedChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setRange(start: Number, end: Number): EmbeddedColumnChartBuilder;
      setStacked(): EmbeddedColumnChartBuilder;
      setTitle(chartTitle: string): EmbeddedColumnChartBuilder;
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;
      setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;
      setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;
      setXAxisTitle(title: string): EmbeddedColumnChartBuilder;
      setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;
      setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;
      setYAxisTitle(title: string): EmbeddedColumnChartBuilder;
      setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;
      useLogScale(): EmbeddedColumnChartBuilder;
    }

    /**
     * Builder for combo charts. For more details, see the Gviz documentation.
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
      setColors(cssValues: string[]): EmbeddedComboChartBuilder;
      setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;
      setLegendPosition(position: Charts.Position): EmbeddedComboChartBuilder;
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedComboChartBuilder;
      setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;
      setNumHeaders(headers: Integer): EmbeddedChartBuilder;
      setOption(option: string, value: Object): EmbeddedChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setRange(start: Number, end: Number): EmbeddedComboChartBuilder;
      setStacked(): EmbeddedComboChartBuilder;
      setTitle(chartTitle: string): EmbeddedComboChartBuilder;
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedComboChartBuilder;
      setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;
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
     * documentation.
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
      setColors(cssValues: string[]): EmbeddedHistogramChartBuilder;
      setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;
      setLegendPosition(position: Charts.Position): EmbeddedHistogramChartBuilder;
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedHistogramChartBuilder;
      setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;
      setNumHeaders(headers: Integer): EmbeddedChartBuilder;
      setOption(option: string, value: Object): EmbeddedChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setRange(start: Number, end: Number): EmbeddedHistogramChartBuilder;
      setStacked(): EmbeddedHistogramChartBuilder;
      setTitle(chartTitle: string): EmbeddedHistogramChartBuilder;
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedHistogramChartBuilder;
      setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;
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
     * documentation.
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
      setColors(cssValues: string[]): EmbeddedLineChartBuilder;
      setCurveStyle(style: Charts.CurveStyle): EmbeddedLineChartBuilder;
      setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;
      setLegendPosition(position: Charts.Position): EmbeddedLineChartBuilder;
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedLineChartBuilder;
      setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;
      setNumHeaders(headers: Integer): EmbeddedChartBuilder;
      setOption(option: string, value: Object): EmbeddedChartBuilder;
      setPointStyle(style: Charts.PointStyle): EmbeddedLineChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setRange(start: Number, end: Number): EmbeddedLineChartBuilder;
      setTitle(chartTitle: string): EmbeddedLineChartBuilder;
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedLineChartBuilder;
      setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;
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
     * documentation.
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
      setColors(cssValues: string[]): EmbeddedPieChartBuilder;
      setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;
      setLegendPosition(position: Charts.Position): EmbeddedPieChartBuilder;
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedPieChartBuilder;
      setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;
      setNumHeaders(headers: Integer): EmbeddedChartBuilder;
      setOption(option: string, value: Object): EmbeddedChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setTitle(chartTitle: string): EmbeddedPieChartBuilder;
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedPieChartBuilder;
      setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;
    }

    /**
     * Builder for scatter charts. For more details, see the Gviz
     * documentation.
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
      setColors(cssValues: string[]): EmbeddedScatterChartBuilder;
      setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;
      setLegendPosition(position: Charts.Position): EmbeddedScatterChartBuilder;
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;
      setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;
      setNumHeaders(headers: Integer): EmbeddedChartBuilder;
      setOption(option: string, value: Object): EmbeddedChartBuilder;
      setPointStyle(style: Charts.PointStyle): EmbeddedScatterChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setTitle(chartTitle: string): EmbeddedScatterChartBuilder;
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;
      setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;
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
     * Builder for table charts. For more details, see the Gviz documentation.
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
      setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;
      setInitialSortingAscending(column: Integer): EmbeddedTableChartBuilder;
      setInitialSortingDescending(column: Integer): EmbeddedTableChartBuilder;
      setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;
      setNumHeaders(headers: Integer): EmbeddedChartBuilder;
      setOption(option: string, value: Object): EmbeddedChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;
      showRowNumberColumn(showRowNumber: boolean): EmbeddedTableChartBuilder;
      useAlternatingRowStyle(alternate: boolean): EmbeddedTableChartBuilder;
    }

    /**
     * Access and modify existing filters. To create a new filter, use Range.createFilter().
     */
    export interface Filter {
      getColumnFilterCriteria(columnPosition: Integer): FilterCriteria;
      getRange(): Range;
      remove(): void;
      removeColumnFilterCriteria(columnPosition: Integer): Filter;
      setColumnFilterCriteria(columnPosition: Integer, filterCriteria: FilterCriteria): Filter;
      sort(columnPosition: Integer, ascending: boolean): Filter;
    }

    /**
     * Access filter criteria. To create a new criteria, use SpreadsheetApp.newFilterCriteria() and FilterCriteriaBuilder.
     */
    export interface FilterCriteria {
      copy(): FilterCriteriaBuilder;
      getCriteriaType(): BooleanCriteria;
      getCriteriaValues(): Object[];
      getHiddenValues(): string[];
      getVisibleValues(): string[];
    }

    /**
     * Builder for FilterCriteria.
     */
    export interface FilterCriteriaBuilder {
      build(): FilterCriteria;
      copy(): FilterCriteriaBuilder;
      getCriteriaType(): BooleanCriteria;
      getCriteriaValues(): Object[];
      getHiddenValues(): string[];
      getVisibleValues(): string[];
      setHiddenValues(values: string[]): FilterCriteriaBuilder;
      setVisibleValues(values: string[]): FilterCriteriaBuilder;
      whenCellEmpty(): FilterCriteriaBuilder;
      whenCellNotEmpty(): FilterCriteriaBuilder;
      whenDateAfter(date: Date): FilterCriteriaBuilder;
      whenDateAfter(date: RelativeDate): FilterCriteriaBuilder;
      whenDateBefore(date: Date): FilterCriteriaBuilder;
      whenDateBefore(date: RelativeDate): FilterCriteriaBuilder;
      whenDateEqualTo(date: Date): FilterCriteriaBuilder;
      whenDateEqualTo(date: RelativeDate): FilterCriteriaBuilder;
      whenFormulaSatisfied(formula: string): FilterCriteriaBuilder;
      whenNumberBetween(start: Number, end: Number): FilterCriteriaBuilder;
      whenNumberEqualTo(number: Number): FilterCriteriaBuilder;
      whenNumberGreaterThan(number: Number): FilterCriteriaBuilder;
      whenNumberGreaterThanOrEqualTo(number: Number): FilterCriteriaBuilder;
      whenNumberLessThan(number: Number): FilterCriteriaBuilder;
      whenNumberLessThanOrEqualTo(number: Number): FilterCriteriaBuilder;
      whenNumberNotBetween(start: Number, end: Number): FilterCriteriaBuilder;
      whenNumberNotEqualTo(number: Number): FilterCriteriaBuilder;
      whenTextContains(text: string): FilterCriteriaBuilder;
      whenTextDoesNotContain(text: string): FilterCriteriaBuilder;
      whenTextEndsWith(text: string): FilterCriteriaBuilder;
      whenTextEqualTo(text: string): FilterCriteriaBuilder;
      whenTextStartsWith(text: string): FilterCriteriaBuilder;
      withCriteria(criteria: BooleanCriteria, args: Object[]): FilterCriteriaBuilder;
    }

    /**
     * Access gradient (color) conditions in ConditionalFormatRuleApis.
     * Each conditional format rule may contain a single gradient condition. A gradient condition is
     * defined by three points along a number scale (min, mid, and max), each of which has a color, a
     * value, and a InterpolationType. The content of a cell is
     * compared to the values in the number scale and the color applied to the cell is interpolated
     * based on the cell content's proximity to the gradient condition min, mid, and max points.
     *
     *     // Logs all the information inside gradient conditional format rules on a sheet.
     *     var sheet = SpreadsheetApp.getActiveSheet();
     *     var rules = sheet.getConditionalFormatRules();
     *     for (int i = 0; i < rules.length; i++) {
     *       var gradient = rules[i].getGradientCondition();
     *       Logger.log("The conditional format gradient information for rule %d:\n
     *         MinColor %s, MinType %s, MinValue %s, \n
     *         MidColor %s, MidType %s, MidValue %s, \n
     *         MaxColor %s, MaxType %s, MaxValue %s \n", i,
     *         gradient.getMinColor(), gradient.getMinType(), gradient.getMinValue(),
     *         gradient.getMidColor(), gradient.getMidType(), gradient.getMidValue(),
     *         gradient.getMaxColor(), gradient.getMaxType(), gradient.getMaxValue());
     *     }
     */
    export interface GradientCondition {
      getMaxColor(): string;
      getMaxType(): InterpolationType;
      getMaxValue(): string;
      getMidColor(): string;
      getMidType(): InterpolationType;
      getMidValue(): string;
      getMinColor(): string;
      getMinType(): InterpolationType;
      getMinValue(): string;
    }

    /**
     * Access and modify spreadsheet groups. Groups are an association between an interval of contiguous
     * rows or columns that can be expanded or collapsed as a unit to hide/show the rows or columns.
     * Each group has a control toggle on the row or column directly before or after the group
     * (depending on settings) that can expand or collapse the group as a whole.
     *
     * The depth of a group refers to the nested position of the group and how many larger
     * groups contain the group. The collapsed state of a group refers to whether the group
     * should remain collapsed or expanded after a parent group has been expanded. Additionally, at the
     * time that a group is collapsed or expanded, the rows or columns within the group are hidden or
     * set visible, though individual rows or columns can be hidden or set visible irrespective of the
     * collapsed state.
     */
    export interface Group {
      collapse(): Group;
      expand(): Group;
      getControlIndex(): Integer;
      getDepth(): Integer;
      getRange(): Range;
      isCollapsed(): boolean;
      remove(): void;
    }

    /**
     * An enumeration representing the possible positions that a group control toggle can have.
     */
    export enum GroupControlTogglePosition { BEFORE, AFTER }

    /**
     * An enumeration representing the interpolation options for calculating a value to be used in a
     * GradientCondition in a ConditionalFormatRule.
     */
    export enum InterpolationType { NUMBER, PERCENT, PERCENTILE, MIN, MAX }

    /**
     * Create, access and modify named ranges in a spreadsheet. Named ranges are ranges that have
     * associated string aliases. They can be viewed and edited via the Sheets UI under the Data >
     * Named ranges... menu.
     */
    export interface NamedRange {
      getName(): string;
      getRange(): Range;
      remove(): void;
      setName(name: string): NamedRange;
      setRange(range: Range): NamedRange;
    }

    /**
     * Represents an image over the grid in a spreadsheet.
     */
    export interface OverGridImage {
      assignScript(functionName: string): OverGridImage;
      getAltTextDescription(): string;
      getAltTextTitle(): string;
      getAnchorCell(): Range;
      getAnchorCellXOffset(): Integer;
      getAnchorCellYOffset(): Integer;
      getHeight(): Integer;
      getInherentHeight(): Integer;
      getInherentWidth(): Integer;
      getScript(): string;
      getSheet(): Sheet;
      getUrl(): string;
      getWidth(): Integer;
      remove(): void;
      replace(blob: Base.BlobSource): OverGridImage;
      replace(url: string): OverGridImage;
      resetSize(): OverGridImage;
      setAltTextDescription(description: string): OverGridImage;
      setAltTextTitle(title: string): OverGridImage;
      setAnchorCell(cell: Range): OverGridImage;
      setAnchorCellXOffset(offset: Integer): OverGridImage;
      setAnchorCellYOffset(offset: Integer): OverGridImage;
      setHeight(height: Integer): OverGridImage;
      setWidth(width: Integer): OverGridImage;
    }

    /**
     *
     * Deprecated. For spreadsheets created in the newer version of Google Sheets, use the more powerful
     *     Protection class instead. Although this class is deprecated, it remains available
     *     for compatibility with the older version of Sheets.
     * Access and modify protected sheets in the older version of Google Sheets.
     */
    export interface PageProtection {
      addUser(email: string): void;
      getUsers(): string[];
      isProtected(): boolean;
      removeUser(user: string): void;
      setProtected(protection: boolean): void;
    }

    /**
     * Access and modify pivot table filters.
     */
    export interface PivotFilter {
      getFilterCriteria(): FilterCriteria;
      getPivotTable(): PivotTable;
      getSourceDataColumn(): Integer;
      remove(): void;
      setFilterCriteria(filterCriteria: FilterCriteria): PivotFilter;
    }

    /**
     * Access and modify pivot table breakout groups.
     */
    export interface PivotGroup {
      addManualGroupingRule(groupName: string, groupMembers: Object[]): PivotGroup;
      areLabelsRepeated(): boolean;
      clearGroupingRule(): PivotGroup;
      clearSort(): PivotGroup;
      getDimension(): Dimension;
      getIndex(): Integer;
      getPivotTable(): PivotTable;
      getSourceDataColumn(): Integer;
      hideRepeatedLabels(): PivotGroup;
      isSortAscending(): boolean;
      moveToIndex(index: Integer): PivotGroup;
      remove(): void;
      removeManualGroupingRule(groupName: string): PivotGroup;
      resetDisplayName(): PivotGroup;
      setDisplayName(name: string): PivotGroup;
      setHistogramGroupingRule(minValue: Integer, maxValue: Integer, intervalSize: Integer): PivotGroup;
      showRepeatedLabels(): PivotGroup;
      showTotals(showTotals: boolean): PivotGroup;
      sortAscending(): PivotGroup;
      sortBy(value: PivotValue, oppositeGroupValues: Object[]): PivotGroup;
      sortDescending(): PivotGroup;
      totalsAreShown(): boolean;
    }

    /**
     * Access and modify pivot tables.
     */
    export interface PivotTable {
      addCalculatedPivotValue(name: string, formula: string): PivotValue;
      addColumnGroup(sourceDataColumn: Integer): PivotGroup;
      addFilter(sourceDataColumn: Integer, filterCriteria: FilterCriteria): PivotFilter;
      addPivotValue(sourceDataColumn: Integer, summarizeFunction: PivotTableSummarizeFunction): PivotValue;
      addRowGroup(sourceDataColumn: Integer): PivotGroup;
      getAnchorCell(): Range;
      getColumnGroups(): PivotGroup[];
      getFilters(): PivotFilter[];
      getPivotValues(): PivotValue[];
      getRowGroups(): PivotGroup[];
      getValuesDisplayOrientation(): Dimension;
      remove(): void;
      setValuesDisplayOrientation(dimension: Dimension): PivotTable;
    }

    /**
     * An enumeration of functions that summarize pivot table data.
     */
    export enum PivotTableSummarizeFunction { CUSTOM, SUM, COUNTA, COUNT, COUNTUNIQUE, AVERAGE, MAX, MIN, MEDIAN, PRODUCT, STDEV, STDEVP, VAR, VARP }

    /**
     * Access and modify value groups in pivot tables.
     */
    export interface PivotValue {
      getDisplayType(): PivotValueDisplayType;
      getFormula(): string;
      getPivotTable(): PivotTable;
      getSummarizedBy(): PivotTableSummarizeFunction;
      setDisplayName(name: string): PivotValue;
      setFormula(formula: string): PivotValue;
      showAs(displayType: PivotValueDisplayType): PivotValue;
      summarizeBy(summarizeFunction: PivotTableSummarizeFunction): PivotValue;
    }

    /**
     * An enumeration of ways to display a pivot value as a function of another value.
     */
    export enum PivotValueDisplayType { DEFAULT, PERCENT_OF_ROW_TOTAL, PERCENT_OF_COLUMN_TOTAL, PERCENT_OF_GRAND_TOTAL }

    /**
     * Access and modify protected ranges and sheets. A protected range can protect either a static
     * range of cells or a named range. A protected sheet may include unprotected regions. For
     * spreadsheets created with the older version of Google Sheets, use the PageProtection
     * class instead.
     *
     *     // Protect range A1:B10, then remove all other users from the list of editors.
     *     var ss = SpreadsheetApp.getActive();
     *     var range = ss.getRange('A1:B10');
     *     var protection = range.protect().setDescription('Sample protected range');
     *
     *     // Ensure the current user is an editor before removing others. Otherwise, if the user's edit
     *     // permission comes from a group, the script throws an exception upon removing the group.
     *     var me = Session.getEffectiveUser();
     *     protection.addEditor(me);
     *     protection.removeEditors(protection.getEditors());
     *     if (protection.canDomainEdit()) {
     *       protection.setDomainEdit(false);
     *     }
     *
     *     // Remove all range protections in the spreadsheet that the user has permission to edit.
     *     var ss = SpreadsheetApp.getActive();
     *     var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
     *     for (var i = 0; i < protections.length; i++) {
     *       var protection = protections[i];
     *       if (protection.canEdit()) {
     *         protection.remove();
     *       }
     *     }
     *
     *     // Protect the active sheet, then remove all other users from the list of editors.
     *     var sheet = SpreadsheetApp.getActiveSheet();
     *     var protection = sheet.protect().setDescription('Sample protected sheet');
     *
     *     // Ensure the current user is an editor before removing others. Otherwise, if the user's edit
     *     // permission comes from a group, the script throws an exception upon removing the group.
     *     var me = Session.getEffectiveUser();
     *     protection.addEditor(me);
     *     protection.removeEditors(protection.getEditors());
     *     if (protection.canDomainEdit()) {
     *       protection.setDomainEdit(false);
     *     }
     */
    export interface Protection {
      addEditor(emailAddress: string): Protection;
      addEditor(user: Base.User): Protection;
      addEditors(emailAddresses: string[]): Protection;
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
      removeEditors(emailAddresses: string[]): Protection;
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
     *     // Remove all range protections in the spreadsheet that the user has permission to edit.
     *     var ss = SpreadsheetApp.getActive();
     *     var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
     *     for (var i = 0; i < protections.length; i++) {
     *       var protection = protections[i];
     *       if (protection.canEdit()) {
     *         protection.remove();
     *       }
     *     }
     *
     *     // Removes sheet protection from the active sheet, if the user has permission to edit it.
     *     var sheet = SpreadsheetApp.getActiveSheet();
     *     var protection = sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
     *     if (protection && protection.canEdit()) {
     *       protection.remove();
     *     }
     */
    export enum ProtectionType { RANGE, SHEET }

    /**
     * Access and modify spreadsheet ranges. A range can be a single cell in a sheet or a group of
     * adjacent cells in a sheet.
     */
    export interface Range {
      activate(): Range;
      activateAsCurrentCell(): Range;
      addDeveloperMetadata(key: string): Range;
      addDeveloperMetadata(key: string, visibility: DeveloperMetadataVisibility): Range;
      addDeveloperMetadata(key: string, value: string): Range;
      addDeveloperMetadata(key: string, value: string, visibility: DeveloperMetadataVisibility): Range;
      applyColumnBanding(): Banding;
      applyColumnBanding(bandingTheme: BandingTheme): Banding;
      applyColumnBanding(bandingTheme: BandingTheme, showHeader: boolean, showFooter: boolean): Banding;
      applyRowBanding(): Banding;
      applyRowBanding(bandingTheme: BandingTheme): Banding;
      applyRowBanding(bandingTheme: BandingTheme, showHeader: boolean, showFooter: boolean): Banding;
      autoFill(destination: Range, series: AutoFillSeries): void;
      autoFillToNeighbor(series: AutoFillSeries): void;
      breakApart(): Range;
      canEdit(): boolean;
      clear(): Range;
      clear(options: Object): Range;
      clearContent(): Range;
      clearDataValidations(): Range;
      clearFormat(): Range;
      clearNote(): Range;
      collapseGroups(): Range;
      copyFormatToRange(gridId: Integer, column: Integer, columnEnd: Integer, row: Integer, rowEnd: Integer): void;
      copyFormatToRange(sheet: Sheet, column: Integer, columnEnd: Integer, row: Integer, rowEnd: Integer): void;
      copyTo(destination: Range): void;
      copyTo(destination: Range, copyPasteType: CopyPasteType, transposed: boolean): void;
      copyTo(destination: Range, options: Object): void;
      copyValuesToRange(gridId: Integer, column: Integer, columnEnd: Integer, row: Integer, rowEnd: Integer): void;
      copyValuesToRange(sheet: Sheet, column: Integer, columnEnd: Integer, row: Integer, rowEnd: Integer): void;
      createDeveloperMetadataFinder(): DeveloperMetadataFinder;
      createFilter(): Filter;
      createPivotTable(sourceData: Range): PivotTable;
      deleteCells(shiftDimension: Dimension): void;
      expandGroups(): Range;
      getA1Notation(): string;
      getBackground(): string;
      getBackgrounds(): string[][];
      getBandings(): Banding[];
      getCell(row: Integer, column: Integer): Range;
      getColumn(): Integer;
      getDataSourceTables(): DataSourceTable[];
      getDataSourceUrl(): string;
      getDataTable(): Charts.DataTable;
      getDataTable(firstRowIsHeader: boolean): Charts.DataTable;
      getDataValidation(): DataValidation;
      getDataValidations(): DataValidation[][];
      getDeveloperMetadata(): DeveloperMetadata[];
      getDisplayValue(): string;
      getDisplayValues(): string[][];
      getFilter(): Filter;
      getFontColor(): string;
      getFontColors(): string[][];
      getFontFamilies(): string[][];
      getFontFamily(): string;
      getFontLine(): string;
      getFontLines(): string[][];
      getFontSize(): Integer;
      getFontSizes(): Integer[][];
      getFontStyle(): string;
      getFontStyles(): string[][];
      getFontWeight(): string;
      getFontWeights(): string[][];
      getFormula(): string;
      getFormulaR1C1(): string;
      getFormulas(): string[][];
      getFormulasR1C1(): string[][];
      getGridId(): Integer;
      getHeight(): Integer;
      getHorizontalAlignment(): string;
      getHorizontalAlignments(): string[][];
      getLastColumn(): Integer;
      getLastRow(): Integer;
      getMergedRanges(): Range[];
      getNextDataCell(direction: Direction): Range;
      getNote(): string;
      getNotes(): string[][];
      getNumColumns(): Integer;
      getNumRows(): Integer;
      getNumberFormat(): string;
      getNumberFormats(): string[][];
      getRichTextValue(): RichTextValue;
      getRichTextValues(): RichTextValue[][];
      getRow(): Integer;
      getRowIndex(): Integer;
      getSheet(): Sheet;
      getTextDirection(): TextDirection;
      getTextDirections(): TextDirection[][];
      getTextRotation(): TextRotation;
      getTextRotations(): TextRotation[][];
      getTextStyle(): TextStyle;
      getTextStyles(): TextStyle[][];
      getValue(): Object;
      getValues(): Object[][];
      getVerticalAlignment(): string;
      getVerticalAlignments(): string[][];
      getWidth(): Integer;
      getWrap(): boolean;
      getWrapStrategies(): WrapStrategy[][];
      getWrapStrategy(): WrapStrategy;
      getWraps(): boolean[][];
      insertCells(shiftDimension: Dimension): Range;
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
      randomize(): Range;
      setBackground(color: string): Range;
      setBackgroundRGB(red: Integer, green: Integer, blue: Integer): Range;
      setBackgrounds(color: string[][]): Range;
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
      setFormulas(formulas: string[][]): Range;
      setFormulasR1C1(formulas: string[][]): Range;
      setHorizontalAlignment(alignment: string): Range;
      setHorizontalAlignments(alignments: Object[][]): Range;
      setNote(note: string): Range;
      setNotes(notes: Object[][]): Range;
      setNumberFormat(numberFormat: string): Range;
      setNumberFormats(numberFormats: Object[][]): Range;
      setRichTextValue(value: RichTextValue): Range;
      setRichTextValues(values: RichTextValue[][]): Range;
      setShowHyperlink(showHyperlink: boolean): Range;
      setTextDirection(direction: TextDirection): Range;
      setTextDirections(directions: TextDirection[][]): Range;
      setTextRotation(degrees: Integer): Range;
      setTextRotation(rotation: TextRotation): Range;
      setTextRotations(rotations: TextRotation[][]): Range;
      setTextStyle(style: TextStyle): Range;
      setTextStyles(styles: TextStyle[][]): Range;
      setValue(value: Object): Range;
      setValues(values: Object[][]): Range;
      setVerticalAlignment(alignment: string): Range;
      setVerticalAlignments(alignments: Object[][]): Range;
      setVerticalText(isVertical: boolean): Range;
      setWrap(isWrapEnabled: boolean): Range;
      setWrapStrategies(strategies: WrapStrategy[][]): Range;
      setWrapStrategy(strategy: WrapStrategy): Range;
      setWraps(isWrapEnabled: Object[][]): Range;
      shiftColumnGroupDepth(delta: Integer): Range;
      shiftRowGroupDepth(delta: Integer): Range;
      sort(sortSpecObj: Object): Range;
      splitTextToColumns(): void;
      splitTextToColumns(delimiter: string): void;
      splitTextToColumns(delimiter: TextToColumnsDelimiter): void;
    }

    /**
     * A collection of one or more Range instances in the same sheet. You can use this class
     * to apply operations on collections of non-adjacent ranges or cells.
     */
    export interface RangeList {
      activate(): RangeList;
      breakApart(): RangeList;
      clear(): RangeList;
      clear(options: Object): RangeList;
      clearContent(): RangeList;
      clearDataValidations(): RangeList;
      clearFormat(): RangeList;
      clearNote(): RangeList;
      getRanges(): Range[];
      setBackground(color: string): RangeList;
      setBackgroundRGB(red: Integer, green: Integer, blue: Integer): RangeList;
      setBorder(top: boolean, left: boolean, bottom: boolean, right: boolean, vertical: boolean, horizontal: boolean): RangeList;
      setBorder(top: boolean, left: boolean, bottom: boolean, right: boolean, vertical: boolean, horizontal: boolean, color: string, style: BorderStyle): RangeList;
      setFontColor(color: string): RangeList;
      setFontFamily(fontFamily: string): RangeList;
      setFontLine(fontLine: string): RangeList;
      setFontSize(size: Integer): RangeList;
      setFontStyle(fontStyle: string): RangeList;
      setFontWeight(fontWeight: string): RangeList;
      setFormula(formula: string): RangeList;
      setFormulaR1C1(formula: string): RangeList;
      setHorizontalAlignment(alignment: string): RangeList;
      setNote(note: string): RangeList;
      setNumberFormat(numberFormat: string): RangeList;
      setShowHyperlink(showHyperlink: boolean): RangeList;
      setTextDirection(direction: TextDirection): RangeList;
      setTextRotation(degrees: Integer): RangeList;
      setValue(value: Object): RangeList;
      setVerticalAlignment(alignment: string): RangeList;
      setVerticalText(isVertical: boolean): RangeList;
      setWrap(isWrapEnabled: boolean): RangeList;
      setWrapStrategy(strategy: WrapStrategy): RangeList;
    }

    /**
     * An enumeration representing the relative date options for calculating a value to be used in
     * date-based BooleanCriteria.
     */
    export enum RelativeDate { TODAY, TOMORROW, YESTERDAY, PAST_WEEK, PAST_MONTH, PAST_YEAR }

    /**
     * A stylized text string used to represent cell text. Substrings of the text can have different
     * text styles.
     *
     * A run is the longest unbroken substring having the same text style. For example, the
     * sentence "This kid has two apples." has four runs: ["This ", "kid ", "has two ",
     * "apples."].
     */
    export interface RichTextValue {
      copy(): RichTextValueBuilder;
      getEndIndex(): Integer;
      getRuns(): RichTextValue[];
      getStartIndex(): Integer;
      getText(): string;
      getTextStyle(): TextStyle;
      getTextStyle(startOffset: Integer, endOffset: Integer): TextStyle;
    }

    /**
     * A builder for Rich Text values.
     */
    export interface RichTextValueBuilder {
      build(): RichTextValue;
      setText(text: string): RichTextValueBuilder;
      setTextStyle(startOffset: Integer, endOffset: Integer, textStyle: TextStyle): RichTextValueBuilder;
      setTextStyle(textStyle: TextStyle): RichTextValueBuilder;
    }

    /**
     * Access the current active selection in the active sheet. A selection is the set of cells the user
     * has highlighted in the sheet, which can be non-adjacent ranges. One cell in the selection is the
     * current cell, where the user's current focus is. The current cell is highlighted with a
     * darker border in the Google Sheets UI.
     *
     *     var activeSheet = SpreadsheetApp.getActiveSheet();
     *     var rangeList = activeSheet.getRangeList(['A1:B4', 'D1:E4']);
     *     rangeList.activate();
     *
     *     var selection = activeSheet.getSelection();
     *     // Current Cell: D1
     *     Logger.log('Current Cell: ' + selection.getCurrentCell().getA1Notation());
     *     // Active Range: D1:E4
     *     Logger.log('Active Range: ' + selection.getActiveRange().getA1Notation());
     *     // Active Ranges: A1:B4, D1:E4
     *     var ranges =  selection.getActiveRangeList().getRanges();
     *     for (var i = 0; i < ranges.length; i++) {
     *       Logger.log('Active Ranges: ' + ranges[i].getA1Notation());
     *     }
     *     Logger.log('Active Sheet: ' + selection.getActiveSheet().getName());
     */
    export interface Selection {
      getActiveRange(): Range;
      getActiveRangeList(): RangeList;
      getActiveSheet(): Sheet;
      getCurrentCell(): Range;
      getNextDataRange(direction: Direction): Range;
    }

    /**
     * Access and modify spreadsheet sheets. Common operations are renaming a sheet and accessing range
     * objects from the sheet.
     */
    export interface Sheet {
      activate(): Sheet;
      addDeveloperMetadata(key: string): Sheet;
      addDeveloperMetadata(key: string, visibility: DeveloperMetadataVisibility): Sheet;
      addDeveloperMetadata(key: string, value: string): Sheet;
      addDeveloperMetadata(key: string, value: string, visibility: DeveloperMetadataVisibility): Sheet;
      appendRow(rowContents: Object[]): Sheet;
      autoResizeColumn(columnPosition: Integer): Sheet;
      autoResizeColumns(startColumn: Integer, numColumns: Integer): Sheet;
      autoResizeRows(startRow: Integer, numRows: Integer): Sheet;
      clear(): Sheet;
      clear(options: Object): Sheet;
      clearConditionalFormatRules(): void;
      clearContents(): Sheet;
      clearFormats(): Sheet;
      clearNotes(): Sheet;
      collapseAllColumnGroups(): Sheet;
      collapseAllRowGroups(): Sheet;
      copyTo(spreadsheet: Spreadsheet): Sheet;
      createDeveloperMetadataFinder(): DeveloperMetadataFinder;
      deleteColumn(columnPosition: Integer): Sheet;
      deleteColumns(columnPosition: Integer, howMany: Integer): void;
      deleteRow(rowPosition: Integer): Sheet;
      deleteRows(rowPosition: Integer, howMany: Integer): void;
      expandAllColumnGroups(): Sheet;
      expandAllRowGroups(): Sheet;
      expandColumnGroupsUpToDepth(groupDepth: Integer): Sheet;
      expandRowGroupsUpToDepth(groupDepth: Integer): Sheet;
      getActiveCell(): Range;
      getActiveRange(): Range;
      getActiveRangeList(): RangeList;
      getBandings(): Banding[];
      getCharts(): EmbeddedChart[];
      getColumnGroup(columnIndex: Integer, groupDepth: Integer): Group;
      getColumnGroupControlPosition(): GroupControlTogglePosition;
      getColumnGroupDepth(columnIndex: Integer): Integer;
      getColumnWidth(columnPosition: Integer): Integer;
      getConditionalFormatRules(): ConditionalFormatRule[];
      getCurrentCell(): Range;
      getDataRange(): Range;
      getDataSourceTables(): DataSourceTable[];
      getDeveloperMetadata(): DeveloperMetadata[];
      getFilter(): Filter;
      getFormUrl(): string;
      getFrozenColumns(): Integer;
      getFrozenRows(): Integer;
      getImages(): OverGridImage[];
      getIndex(): Integer;
      getLastColumn(): Integer;
      getLastRow(): Integer;
      getMaxColumns(): Integer;
      getMaxRows(): Integer;
      getName(): string;
      getNamedRanges(): NamedRange[];
      getParent(): Spreadsheet;
      getPivotTables(): PivotTable[];
      getProtections(type: ProtectionType): Protection[];
      getRange(row: Integer, column: Integer): Range;
      getRange(row: Integer, column: Integer, numRows: Integer): Range;
      getRange(row: Integer, column: Integer, numRows: Integer, numColumns: Integer): Range;
      getRange(a1Notation: string): Range;
      getRangeList(a1Notations: string[]): RangeList;
      getRowGroup(rowIndex: Integer, groupDepth: Integer): Group;
      getRowGroupControlPosition(): GroupControlTogglePosition;
      getRowGroupDepth(rowIndex: Integer): Integer;
      getRowHeight(rowPosition: Integer): Integer;
      getSelection(): Selection;
      getSheetId(): Integer;
      getSheetName(): string;
      getSheetValues(startRow: Integer, startColumn: Integer, numRows: Integer, numColumns: Integer): Object[][];
      getTabColor(): string;
      hasHiddenGridlines(): boolean;
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
      insertImage(blobSource: Base.BlobSource, column: Integer, row: Integer): OverGridImage;
      insertImage(blobSource: Base.BlobSource, column: Integer, row: Integer, offsetX: Integer, offsetY: Integer): OverGridImage;
      insertImage(url: string, column: Integer, row: Integer): OverGridImage;
      insertImage(url: string, column: Integer, row: Integer, offsetX: Integer, offsetY: Integer): OverGridImage;
      insertRowAfter(afterPosition: Integer): Sheet;
      insertRowBefore(beforePosition: Integer): Sheet;
      insertRows(rowIndex: Integer): void;
      insertRows(rowIndex: Integer, numRows: Integer): void;
      insertRowsAfter(afterPosition: Integer, howMany: Integer): Sheet;
      insertRowsBefore(beforePosition: Integer, howMany: Integer): Sheet;
      isColumnHiddenByUser(columnPosition: Integer): boolean;
      isRightToLeft(): boolean;
      isRowHiddenByFilter(rowPosition: Integer): boolean;
      isRowHiddenByUser(rowPosition: Integer): boolean;
      isSheetHidden(): boolean;
      moveColumns(columnSpec: Range, destinationIndex: Integer): void;
      moveRows(rowSpec: Range, destinationIndex: Integer): void;
      newChart(): EmbeddedChartBuilder;
      protect(): Protection;
      removeChart(chart: EmbeddedChart): void;
      setActiveRange(range: Range): Range;
      setActiveRangeList(rangeList: RangeList): RangeList;
      setActiveSelection(range: Range): Range;
      setActiveSelection(a1Notation: string): Range;
      setColumnGroupControlPosition(position: GroupControlTogglePosition): Sheet;
      setColumnWidth(columnPosition: Integer, width: Integer): Sheet;
      setColumnWidths(startColumn: Integer, numColumns: Integer, width: Integer): Sheet;
      setConditionalFormatRules(rules: ConditionalFormatRule[]): void;
      setCurrentCell(cell: Range): Range;
      setFrozenColumns(columns: Integer): void;
      setFrozenRows(rows: Integer): void;
      setHiddenGridlines(hideGridlines: boolean): Sheet;
      setName(name: string): Sheet;
      setRightToLeft(rightToLeft: boolean): Sheet;
      setRowGroupControlPosition(position: GroupControlTogglePosition): Sheet;
      setRowHeight(rowPosition: Integer, height: Integer): Sheet;
      setRowHeights(startRow: Integer, numRows: Integer, height: Integer): Sheet;
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
     * Access and modify Google Sheets files. Common operations are adding new sheets and adding
     * collaborators.
     */
    export interface Spreadsheet {
      addDeveloperMetadata(key: string): Spreadsheet;
      addDeveloperMetadata(key: string, visibility: DeveloperMetadataVisibility): Spreadsheet;
      addDeveloperMetadata(key: string, value: string): Spreadsheet;
      addDeveloperMetadata(key: string, value: string, visibility: DeveloperMetadataVisibility): Spreadsheet;
      addEditor(emailAddress: string): Spreadsheet;
      addEditor(user: Base.User): Spreadsheet;
      addEditors(emailAddresses: string[]): Spreadsheet;
      addMenu(name: string, subMenus: Object[]): void;
      addViewer(emailAddress: string): Spreadsheet;
      addViewer(user: Base.User): Spreadsheet;
      addViewers(emailAddresses: string[]): Spreadsheet;
      appendRow(rowContents: Object[]): Sheet;
      autoResizeColumn(columnPosition: Integer): Sheet;
      copy(name: string): Spreadsheet;
      createDeveloperMetadataFinder(): DeveloperMetadataFinder;
      deleteActiveSheet(): Sheet;
      deleteColumn(columnPosition: Integer): Sheet;
      deleteColumns(columnPosition: Integer, howMany: Integer): void;
      deleteRow(rowPosition: Integer): Sheet;
      deleteRows(rowPosition: Integer, howMany: Integer): void;
      deleteSheet(sheet: Sheet): void;
      duplicateActiveSheet(): Sheet;
      getActiveCell(): Range;
      getActiveRange(): Range;
      getActiveRangeList(): RangeList;
      getActiveSheet(): Sheet;
      getAs(contentType: string): Base.Blob;
      getBandings(): Banding[];
      getBlob(): Base.Blob;
      getColumnWidth(columnPosition: Integer): Integer;
      getCurrentCell(): Range;
      getDataRange(): Range;
      getDataSourceTables(): DataSourceTable[];
      getDeveloperMetadata(): DeveloperMetadata[];
      getEditors(): Base.User[];
      getFormUrl(): string;
      getFrozenColumns(): Integer;
      getFrozenRows(): Integer;
      getId(): string;
      getImages(): OverGridImage[];
      getLastColumn(): Integer;
      getLastRow(): Integer;
      getName(): string;
      getNamedRanges(): NamedRange[];
      getNumSheets(): Integer;
      getOwner(): Base.User;
      getProtections(type: ProtectionType): Protection[];
      getRange(a1Notation: string): Range;
      getRangeByName(name: string): Range;
      getRangeList(a1Notations: string[]): RangeList;
      getRowHeight(rowPosition: Integer): Integer;
      getSelection(): Selection;
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
      insertImage(blobSource: Base.BlobSource, column: Integer, row: Integer): OverGridImage;
      insertImage(blobSource: Base.BlobSource, column: Integer, row: Integer, offsetX: Integer, offsetY: Integer): OverGridImage;
      insertImage(url: string, column: Integer, row: Integer): OverGridImage;
      insertImage(url: string, column: Integer, row: Integer, offsetX: Integer, offsetY: Integer): OverGridImage;
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
      insertSheetWithDataSourceTable(spec: DataSourceSpec): Sheet;
      isColumnHiddenByUser(columnPosition: Integer): boolean;
      isRowHiddenByFilter(rowPosition: Integer): boolean;
      isRowHiddenByUser(rowPosition: Integer): boolean;
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
      setActiveRangeList(rangeList: RangeList): RangeList;
      setActiveSelection(range: Range): Range;
      setActiveSelection(a1Notation: string): Range;
      setActiveSheet(sheet: Sheet): Sheet;
      setActiveSheet(sheet: Sheet, restoreSelection: boolean): Sheet;
      setColumnWidth(columnPosition: Integer, width: Integer): Sheet;
      setCurrentCell(cell: Range): Range;
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
     * Access and create Google Sheets files. This class is the parent class for the Spreadsheet service.
     */
    export interface SpreadsheetApp {
      AutoFillSeries: typeof AutoFillSeries;
      BandingTheme: typeof BandingTheme;
      BooleanCriteria: typeof BooleanCriteria;
      BorderStyle: typeof BorderStyle;
      CopyPasteType: typeof CopyPasteType;
      DataExecutionErrorCode: typeof DataExecutionErrorCode;
      DataExecutionState: typeof DataExecutionState;
      DataSourceParameterType: typeof DataSourceParameterType;
      DataSourceType: typeof DataSourceType;
      DataValidationCriteria: typeof DataValidationCriteria;
      DeveloperMetadataLocationType: typeof DeveloperMetadataLocationType;
      DeveloperMetadataVisibility: typeof DeveloperMetadataVisibility;
      Dimension: typeof Dimension;
      Direction: typeof Direction;
      GroupControlTogglePosition: typeof GroupControlTogglePosition;
      InterpolationType: typeof InterpolationType;
      PivotTableSummarizeFunction: typeof PivotTableSummarizeFunction;
      PivotValueDisplayType: typeof PivotValueDisplayType;
      ProtectionType: typeof ProtectionType;
      RelativeDate: typeof RelativeDate;
      TextDirection: typeof TextDirection;
      TextToColumnsDelimiter: typeof TextToColumnsDelimiter;
      WrapStrategy: typeof WrapStrategy;
      create(name: string): Spreadsheet;
      create(name: string, rows: Integer, columns: Integer): Spreadsheet;
      enableAllDataSourcesExecution(): void;
      enableBigQueryExecution(): void;
      flush(): void;
      getActive(): Spreadsheet;
      getActiveRange(): Range;
      getActiveRangeList(): RangeList;
      getActiveSheet(): Sheet;
      getActiveSpreadsheet(): Spreadsheet;
      getCurrentCell(): Range;
      getSelection(): Selection;
      getUi(): Base.Ui;
      newConditionalFormatRule(): ConditionalFormatRuleBuilder;
      newDataSourceSpec(): DataSourceSpecBuilder;
      newDataValidation(): DataValidationBuilder;
      newFilterCriteria(): FilterCriteriaBuilder;
      newRichTextValue(): RichTextValueBuilder;
      newTextStyle(): TextStyleBuilder;
      open(file: Drive.File): Spreadsheet;
      openById(id: string): Spreadsheet;
      openByUrl(url: string): Spreadsheet;
      setActiveRange(range: Range): Range;
      setActiveRangeList(rangeList: RangeList): RangeList;
      setActiveSheet(sheet: Sheet): Sheet;
      setActiveSheet(sheet: Sheet, restoreSelection: boolean): Sheet;
      setActiveSpreadsheet(newActiveSpreadsheet: Spreadsheet): void;
      setCurrentCell(cell: Range): Range;
    }

    /**
     * An enumerations of text directions.
     */
    export enum TextDirection { LEFT_TO_RIGHT, RIGHT_TO_LEFT }

    /**
     * Access the text rotation settings for a cell.
     */
    export interface TextRotation {
      getDegrees(): Integer;
      isVertical(): boolean;
    }

    /**
     * The rendered style of text in a cell.
     *
     * Text styles can have a corresponding RichTextValue. If the RichTextValue spans multiple text runs that have different values for a given text style read
     * method, the method returns null. To avoid this, query for text styles using the Rich Text
     * values returned by the RichTextValue.getRuns() method.
     */
    export interface TextStyle {
      copy(): TextStyleBuilder;
      getFontFamily(): string;
      getFontSize(): Integer;
      getForegroundColor(): string;
      isBold(): boolean;
      isItalic(): boolean;
      isStrikethrough(): boolean;
      isUnderline(): boolean;
    }

    /**
     * A builder for text styles.
     */
    export interface TextStyleBuilder {
      build(): TextStyle;
      setBold(bold: boolean): TextStyleBuilder;
      setFontFamily(fontFamily: string): TextStyleBuilder;
      setFontSize(fontSize: Integer): TextStyleBuilder;
      setForegroundColor(cssString: string): TextStyleBuilder;
      setItalic(italic: boolean): TextStyleBuilder;
      setStrikethrough(strikethrough: boolean): TextStyleBuilder;
      setUnderline(underline: boolean): TextStyleBuilder;
    }

    /**
     * An enumeration of the types of preset delimiters that can split a column of text into multiple
     * columns.
     */
    export enum TextToColumnsDelimiter { COMMA, SEMICOLON, PERIOD, SPACE }

    /**
     * An enumeration of the strategies used to handle cell text wrapping.
     */
    export enum WrapStrategy { WRAP, OVERFLOW, CLIP }

  }
}

declare var SpreadsheetApp: GoogleAppsScript.Spreadsheet.SpreadsheetApp;
