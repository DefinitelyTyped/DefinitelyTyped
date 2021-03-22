// Type definitions for Google Apps Script 2020-01-02
// Project: https://developers.google.com/apps-script/
// Definitions by: PopGoesTheWza <https://github.com/PopGoesTheWza>
//                 motemen <https://github.com/motemen/>
//                 Alexander Kuzmenko <https://github.com/eightalex>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />
/// <reference path="google-apps-script.charts.d.ts" />
/// <reference path="google-apps-script.drive.d.ts" />

declare namespace GoogleAppsScript {
  namespace Spreadsheet {
    /**
     * An enumeration of the types of series used to calculate auto-filled values. The manner in which
     * these series affect calculated values differs depending on the type and amount of source data.
     */
    enum AutoFillSeries { DEFAULT_SERIES, ALTERNATE_SERIES }
    /**
     * Access and modify bandings, the color patterns applied to rows or columns of a range. Each
     * banding consists of a range and a set of colors for rows, columns, headers, and footers.
     */
    interface Banding {
      copyTo(range: Range): Banding;
      getFirstColumnColor(): string | null;
      getFirstRowColor(): string | null;
      getFooterColumnColor(): string | null;
      getFooterRowColor(): string | null;
      getHeaderColumnColor(): string | null;
      getHeaderRowColor(): string | null;
      getRange(): Range;
      getSecondColumnColor(): string | null;
      getSecondRowColor(): string | null;
      remove(): void;
      setFirstColumnColor(color: string | null): Banding;
      setFirstRowColor(color: string | null): Banding;
      setFooterColumnColor(color: string | null): Banding;
      setFooterRowColor(color: string | null): Banding;
      setHeaderColumnColor(color: string | null): Banding;
      setHeaderRowColor(color: string | null): Banding;
      setRange(range: Range): Banding;
      setSecondColumnColor(color: string | null): Banding;
      setSecondRowColor(color: string | null): Banding;
    }
    /**
     * An enumeration of banding themes. Each theme consists of several complementary colors that are
     * applied to different cells based on the banding settings.
     */
    enum BandingTheme { LIGHT_GREY, CYAN, GREEN, YELLOW, ORANGE, BLUE, TEAL, GREY, BROWN, LIGHT_GREEN, INDIGO, PINK }
    /**
     * Access the existing BigQuery data source specification. To create a new data source
     * specification, use SpreadsheetApp.newDataSourceSpec().
     */
    interface BigQueryDataSourceSpec {
      copy(): DataSourceSpecBuilder;
      getParameters(): DataSourceParameter[];
      getProjectId(): string;
      getRawQuery(): string;
      getType(): DataSourceType;
    }
    /**
     * The builder for BigQueryDataSourceSpecBuilder.
     */
    interface BigQueryDataSourceSpecBuilder {
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
    interface BooleanCondition {
      getBackground(): string | null;
      getBold(): boolean | null;
      getCriteriaType(): BooleanCriteria;
      getCriteriaValues(): any[];
      getFontColor(): string | null;
      getItalic(): boolean | null;
      getStrikethrough(): boolean | null;
      getUnderline(): boolean | null;
    }
    /**
     * An enumeration representing the boolean criteria that can be used in conditional format or
     * filter.
     */
    enum BooleanCriteria { CELL_EMPTY, CELL_NOT_EMPTY, DATE_AFTER, DATE_BEFORE, DATE_EQUAL_TO, DATE_AFTER_RELATIVE, DATE_BEFORE_RELATIVE, DATE_EQUAL_TO_RELATIVE, NUMBER_BETWEEN, NUMBER_EQUAL_TO, NUMBER_GREATER_THAN, NUMBER_GREATER_THAN_OR_EQUAL_TO, NUMBER_LESS_THAN, NUMBER_LESS_THAN_OR_EQUAL_TO, NUMBER_NOT_BETWEEN, NUMBER_NOT_EQUAL_TO, TEXT_CONTAINS, TEXT_DOES_NOT_CONTAIN, TEXT_EQUAL_TO, TEXT_STARTS_WITH, TEXT_ENDS_WITH, CUSTOM_FORMULA }
    /**
     * Styles that can be set on a range using Range.setBorder(top, left, bottom, right, vertical, horizontal, color, style).
     */
    enum BorderStyle { DOTTED, DASHED, SOLID, SOLID_MEDIUM, SOLID_THICK, DOUBLE }
    /**
     * A representation for a color.
     */
    interface Color {
      asRgbColor(): Base.RgbColor;
      asThemeColor(): ThemeColor;
      getColorType(): Base.ColorType;
    }
    /**
     * The builder for ColorBuilder. To create a new builder, use SpreadsheetApp.newColor().
     */
    interface ColorBuilder {
      asRgbColor(): Base.RgbColor;
      asThemeColor(): ThemeColor;
      build(): Color;
      getColorType(): Base.ColorType;
      setRgbColor(cssString: string): ColorBuilder;
      setThemeColor(themeColorType: ThemeColorType): ColorBuilder;
    }
    /**
     * Access conditional formatting rules. To create a new rule, use SpreadsheetApp.newConditionalFormatRule() and ConditionalFormatRuleBuilder.
     * You can use Sheet.setConditionalFormatRules(rules) to set the
     * rules for a given sheet.
     */
    interface ConditionalFormatRule {
      copy(): ConditionalFormatRuleBuilder;
      getBooleanCondition(): BooleanCondition | null;
      getGradientCondition(): GradientCondition | null;
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
    interface ConditionalFormatRuleBuilder {
      build(): ConditionalFormatRule;
      copy(): ConditionalFormatRuleBuilder;
      getBooleanCondition(): BooleanCondition | null;
      getGradientCondition(): GradientCondition | null;
      getRanges(): Range[];
      setBackground(color: string | null): ConditionalFormatRuleBuilder;
      setBold(bold: boolean | null): ConditionalFormatRuleBuilder;
      setFontColor(color: string | null): ConditionalFormatRuleBuilder;
      setGradientMaxpoint(color: string): ConditionalFormatRuleBuilder;
      setGradientMaxpointWithValue(color: string, type: InterpolationType, value: string): ConditionalFormatRuleBuilder;
      setGradientMidpointWithValue(color: string, type: InterpolationType, value: string): ConditionalFormatRuleBuilder;
      setGradientMinpoint(color: string): ConditionalFormatRuleBuilder;
      setGradientMinpointWithValue(color: string, type: InterpolationType, value: string): ConditionalFormatRuleBuilder;
      setItalic(italic: boolean | null): ConditionalFormatRuleBuilder;
      setRanges(ranges: Range[]): ConditionalFormatRuleBuilder;
      setStrikethrough(strikethrough: boolean | null): ConditionalFormatRuleBuilder;
      setUnderline(underline: boolean | null): ConditionalFormatRuleBuilder;
      whenCellEmpty(): ConditionalFormatRuleBuilder;
      whenCellNotEmpty(): ConditionalFormatRuleBuilder;
      whenDateAfter(date: Base.Date): ConditionalFormatRuleBuilder;
      whenDateAfter(date: RelativeDate): ConditionalFormatRuleBuilder;
      whenDateBefore(date: Base.Date): ConditionalFormatRuleBuilder;
      whenDateBefore(date: RelativeDate): ConditionalFormatRuleBuilder;
      whenDateEqualTo(date: Base.Date): ConditionalFormatRuleBuilder;
      whenDateEqualTo(date: RelativeDate): ConditionalFormatRuleBuilder;
      whenFormulaSatisfied(formula: string): ConditionalFormatRuleBuilder;
      whenNumberBetween(start: number, end: number): ConditionalFormatRuleBuilder;
      whenNumberEqualTo(number: number): ConditionalFormatRuleBuilder;
      whenNumberGreaterThan(number: number): ConditionalFormatRuleBuilder;
      whenNumberGreaterThanOrEqualTo(number: number): ConditionalFormatRuleBuilder;
      whenNumberLessThan(number: number): ConditionalFormatRuleBuilder;
      whenNumberLessThanOrEqualTo(number: number): ConditionalFormatRuleBuilder;
      whenNumberNotBetween(start: number, end: number): ConditionalFormatRuleBuilder;
      whenNumberNotEqualTo(number: number): ConditionalFormatRuleBuilder;
      whenTextContains(text: string): ConditionalFormatRuleBuilder;
      whenTextDoesNotContain(text: string): ConditionalFormatRuleBuilder;
      whenTextEndsWith(text: string): ConditionalFormatRuleBuilder;
      whenTextEqualTo(text: string): ConditionalFormatRuleBuilder;
      whenTextStartsWith(text: string): ConditionalFormatRuleBuilder;
      withCriteria(criteria: BooleanCriteria, args: any[]): ConditionalFormatRuleBuilder;
    }
    /**
     * Access the chart's position within a sheet. Can be updated using the EmbeddedChart.modify() function.
     *
     *     chart = chart.modify().setPosition(5, 5, 0, 0).build();
     *     sheet.updateChart(chart);
     */
    interface ContainerInfo {
      getAnchorColumn(): Integer;
      getAnchorRow(): Integer;
      getOffsetX(): Integer;
      getOffsetY(): Integer;
    }
    /**
     * An enumeration of possible special paste types.
     */
    enum CopyPasteType { PASTE_NORMAL, PASTE_NO_BORDERS, PASTE_FORMAT, PASTE_FORMULA, PASTE_DATA_VALIDATION, PASTE_VALUES, PASTE_CONDITIONAL_FORMATTING, PASTE_COLUMN_WIDTHS }
    /**
     * An enumeration of data execution error codes.
     */
    enum DataExecutionErrorCode { DATA_EXECUTION_ERROR_CODE_UNSUPPORTED, NONE, TIME_OUT, TOO_MANY_ROWS, TOO_MANY_CELLS, ENGINE, PARAMETER_INVALID, UNSUPPORTED_DATA_TYPE, DUPLICATE_COLUMN_NAMES, INTERRUPTED, OTHER, TOO_MANY_CHARS_PER_CELL }
    /**
     * An enumeration of data execution states.
     */
    enum DataExecutionState { DATA_EXECUTION_STATE_UNSUPPORTED, RUNNING, SUCCESS, ERROR, NOT_STARTED }
    /**
     * The data execution status.
     */
    interface DataExecutionStatus {
      getErrorCode(): DataExecutionErrorCode;
      getErrorMessage(): string;
      getExecutionState(): DataExecutionState;
      getLastRefreshedTime(): Base.Date | null;
      isTruncated(): boolean;
    }
    /**
     * Access and modify existing data source. To create a data source table with new data source, see
     * DataSourceTable.
     */
    interface DataSource {
      getSpec(): DataSourceSpec;
      updateSpec(spec: DataSourceSpec): DataSource;
    }
    /**
     * Access existing data source parameters.
     */
    interface DataSourceParameter {
      getName(): string;
      getSourceCell(): string | null;
      getType(): DataSourceParameterType;
    }
    /**
     * An enumeration of data source parameter types.
     */
    enum DataSourceParameterType { DATA_SOURCE_PARAMETER_TYPE_UNSUPPORTED, CELL }
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
    interface DataSourceSpec {
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
    interface DataSourceSpecBuilder {
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
    interface DataSourceTable {
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
    enum DataSourceType { DATA_SOURCE_TYPE_UNSUPPORTED, BIGQUERY }
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
    interface DataValidation {
      copy(): DataValidationBuilder;
      getAllowInvalid(): boolean;
      getCriteriaType(): DataValidationCriteria;
      getCriteriaValues(): any[];
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
    interface DataValidationBuilder {
      build(): DataValidation;
      copy(): DataValidationBuilder;
      getAllowInvalid(): boolean;
      getCriteriaType(): DataValidationCriteria;
      getCriteriaValues(): any[];
      getHelpText(): string | null;
      requireCheckbox(): DataValidationBuilder;
      requireCheckbox(checkedValue: any): DataValidationBuilder;
      requireCheckbox(checkedValue: any, uncheckedValue: any): DataValidationBuilder;
      requireDate(): DataValidationBuilder;
      requireDateAfter(date: Base.Date): DataValidationBuilder;
      requireDateBefore(date: Base.Date): DataValidationBuilder;
      requireDateBetween(start: Base.Date, end: Base.Date): DataValidationBuilder;
      requireDateEqualTo(date: Base.Date): DataValidationBuilder;
      requireDateNotBetween(start: Base.Date, end: Base.Date): DataValidationBuilder;
      requireDateOnOrAfter(date: Base.Date): DataValidationBuilder;
      requireDateOnOrBefore(date: Base.Date): DataValidationBuilder;
      requireFormulaSatisfied(formula: string): DataValidationBuilder;
      requireNumberBetween(start: number, end: number): DataValidationBuilder;
      requireNumberEqualTo(number: number): DataValidationBuilder;
      requireNumberGreaterThan(number: number): DataValidationBuilder;
      requireNumberGreaterThanOrEqualTo(number: number): DataValidationBuilder;
      requireNumberLessThan(number: number): DataValidationBuilder;
      requireNumberLessThanOrEqualTo(number: number): DataValidationBuilder;
      requireNumberNotBetween(start: number, end: number): DataValidationBuilder;
      requireNumberNotEqualTo(number: number): DataValidationBuilder;
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
      withCriteria(criteria: DataValidationCriteria, args: any[]): DataValidationBuilder;
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
    enum DataValidationCriteria { DATE_AFTER, DATE_BEFORE, DATE_BETWEEN, DATE_EQUAL_TO, DATE_IS_VALID_DATE, DATE_NOT_BETWEEN, DATE_ON_OR_AFTER, DATE_ON_OR_BEFORE, NUMBER_BETWEEN, NUMBER_EQUAL_TO, NUMBER_GREATER_THAN, NUMBER_GREATER_THAN_OR_EQUAL_TO, NUMBER_LESS_THAN, NUMBER_LESS_THAN_OR_EQUAL_TO, NUMBER_NOT_BETWEEN, NUMBER_NOT_EQUAL_TO, TEXT_CONTAINS, TEXT_DOES_NOT_CONTAIN, TEXT_EQUAL_TO, TEXT_IS_VALID_EMAIL, TEXT_IS_VALID_URL, VALUE_IN_LIST, VALUE_IN_RANGE, CUSTOM_FORMULA, CHECKBOX }
    /**
     * Access and modify developer metadata. To create new developer metadata use Range.addDeveloperMetadata(key), Sheet.addDeveloperMetadata(key), or Spreadsheet.addDeveloperMetadata(key).
     */
    interface DeveloperMetadata {
      getId(): Integer;
      getKey(): string;
      getLocation(): DeveloperMetadataLocation;
      getValue(): string | null;
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
    interface DeveloperMetadataFinder {
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
    interface DeveloperMetadataLocation {
      getColumn(): Range | null;
      getLocationType(): DeveloperMetadataLocationType;
      getRow(): Range | null;
      getSheet(): Sheet | null;
      getSpreadsheet(): Spreadsheet | null;
    }
    /**
     * An enumeration of the types of developer metadata location types.
     */
    enum DeveloperMetadataLocationType { SPREADSHEET, SHEET, ROW, COLUMN }
    /**
     * An enumeration of the types of developer metadata visibility.
     */
    enum DeveloperMetadataVisibility { DOCUMENT, PROJECT }
    /**
     * An enumeration of possible directions along which data can be stored in a spreadsheet.
     */
    enum Dimension { COLUMNS, ROWS }
    /**
     * An enumeration representing the possible directions that one can move within a spreadsheet using
     * the arrow keys.
     */
    enum Direction { UP, DOWN, PREVIOUS, NEXT }
    /**
     * Builder for area charts. For more details, see the Gviz
     * documentation.
     */
    interface EmbeddedAreaChartBuilder {
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
      clearRanges(): EmbeddedChartBuilder;
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
      setOption(option: string, value: any): EmbeddedChartBuilder;
      setPointStyle(style: Charts.PointStyle): EmbeddedAreaChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setRange(start: number, end: number): EmbeddedAreaChartBuilder;
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
    interface EmbeddedBarChartBuilder {
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
      clearRanges(): EmbeddedChartBuilder;
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
      setOption(option: string, value: any): EmbeddedChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setRange(start: number, end: number): EmbeddedBarChartBuilder;
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
    interface EmbeddedChart {
      getAs(contentType: string): Base.Blob;
      getBlob(): Base.Blob;
      getChartId(): Integer | null;
      getContainerInfo(): ContainerInfo;
      getHiddenDimensionStrategy(): Charts.ChartHiddenDimensionStrategy;
      getMergeStrategy(): Charts.ChartMergeStrategy;
      getNumHeaders(): Integer;
      getOptions(): Charts.ChartOptions;
      getRanges(): Range[];
      getTransposeRowsAndColumns(): boolean;
      modify(): EmbeddedChartBuilder;
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
    interface EmbeddedChartBuilder {
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
      clearRanges(): EmbeddedChartBuilder;
      getChartType(): Charts.ChartType;
      getContainer(): ContainerInfo;
      getRanges(): Range[];
      removeRange(range: Range): EmbeddedChartBuilder;
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
      setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;
      setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;
      setNumHeaders(headers: Integer): EmbeddedChartBuilder;
      setOption(option: string, value: any): EmbeddedChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;
    }
    /**
     * Builder for column charts. For more details, see the Gviz
     * documentation.
     */
    interface EmbeddedColumnChartBuilder {
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
      clearRanges(): EmbeddedChartBuilder;
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
      setOption(option: string, value: any): EmbeddedChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setRange(start: number, end: number): EmbeddedColumnChartBuilder;
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
    interface EmbeddedComboChartBuilder {
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
      clearRanges(): EmbeddedChartBuilder;
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
      setOption(option: string, value: any): EmbeddedChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setRange(start: number, end: number): EmbeddedComboChartBuilder;
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
    interface EmbeddedHistogramChartBuilder {
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
      clearRanges(): EmbeddedChartBuilder;
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
      setOption(option: string, value: any): EmbeddedChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setRange(start: number, end: number): EmbeddedHistogramChartBuilder;
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
    interface EmbeddedLineChartBuilder {
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
      clearRanges(): EmbeddedChartBuilder;
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
      setOption(option: string, value: any): EmbeddedChartBuilder;
      setPointStyle(style: Charts.PointStyle): EmbeddedLineChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setRange(start: number, end: number): EmbeddedLineChartBuilder;
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
    interface EmbeddedPieChartBuilder {
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
      clearRanges(): EmbeddedChartBuilder;
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
      setOption(option: string, value: any): EmbeddedChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setTitle(chartTitle: string): EmbeddedPieChartBuilder;
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedPieChartBuilder;
      setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;
    }
    /**
     * Builder for scatter charts. For more details, see the Gviz
     * documentation.
     */
    interface EmbeddedScatterChartBuilder {
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
      clearRanges(): EmbeddedChartBuilder;
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
      setOption(option: string, value: any): EmbeddedChartBuilder;
      setPointStyle(style: Charts.PointStyle): EmbeddedScatterChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setTitle(chartTitle: string): EmbeddedScatterChartBuilder;
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;
      setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;
      setXAxisLogScale(): EmbeddedScatterChartBuilder;
      setXAxisRange(start: number, end: number): EmbeddedScatterChartBuilder;
      setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;
      setXAxisTitle(title: string): EmbeddedScatterChartBuilder;
      setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;
      setYAxisLogScale(): EmbeddedScatterChartBuilder;
      setYAxisRange(start: number, end: number): EmbeddedScatterChartBuilder;
      setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;
      setYAxisTitle(title: string): EmbeddedScatterChartBuilder;
      setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;
    }
    /**
     * Builder for table charts. For more details, see the Gviz documentation.
     */
    interface EmbeddedTableChartBuilder {
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
      clearRanges(): EmbeddedChartBuilder;
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
      setOption(option: string, value: any): EmbeddedChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;
      showRowNumberColumn(showRowNumber: boolean): EmbeddedTableChartBuilder;
      useAlternatingRowStyle(alternate: boolean): EmbeddedTableChartBuilder;
    }
    /**
     * Access and modify existing filters. To create a new filter, use Range.createFilter().
     */
    interface Filter {
      getColumnFilterCriteria(columnPosition: Integer): FilterCriteria | null;
      getRange(): Range;
      remove(): void;
      removeColumnFilterCriteria(columnPosition: Integer): Filter;
      setColumnFilterCriteria(columnPosition: Integer, filterCriteria: FilterCriteria | null): Filter;
      sort(columnPosition: Integer, ascending: boolean): Filter;
    }
    /**
     * Access filter criteria. To create a new criteria, use SpreadsheetApp.newFilterCriteria() and FilterCriteriaBuilder.
     */
    interface FilterCriteria {
      copy(): FilterCriteriaBuilder;
      getCriteriaType(): BooleanCriteria;
      getCriteriaValues(): any[];
      getHiddenValues(): string[];
      getVisibleValues(): string[];
    }
    /**
     * Builder for FilterCriteria.
     */
    interface FilterCriteriaBuilder {
      build(): FilterCriteria;
      copy(): FilterCriteriaBuilder;
      getCriteriaType(): BooleanCriteria;
      getCriteriaValues(): any[];
      getHiddenValues(): string[];
      getVisibleValues(): string[];
      setHiddenValues(values: string[]): FilterCriteriaBuilder;
      setVisibleValues(values: string[]): FilterCriteriaBuilder;
      whenCellEmpty(): FilterCriteriaBuilder;
      whenCellNotEmpty(): FilterCriteriaBuilder;
      whenDateAfter(date: Base.Date): FilterCriteriaBuilder;
      whenDateAfter(date: RelativeDate): FilterCriteriaBuilder;
      whenDateBefore(date: Base.Date): FilterCriteriaBuilder;
      whenDateBefore(date: RelativeDate): FilterCriteriaBuilder;
      whenDateEqualTo(date: Base.Date): FilterCriteriaBuilder;
      whenDateEqualTo(date: RelativeDate): FilterCriteriaBuilder;
      whenFormulaSatisfied(formula: string): FilterCriteriaBuilder;
      whenNumberBetween(start: number, end: number): FilterCriteriaBuilder;
      whenNumberEqualTo(number: number): FilterCriteriaBuilder;
      whenNumberGreaterThan(number: number): FilterCriteriaBuilder;
      whenNumberGreaterThanOrEqualTo(number: number): FilterCriteriaBuilder;
      whenNumberLessThan(number: number): FilterCriteriaBuilder;
      whenNumberLessThanOrEqualTo(number: number): FilterCriteriaBuilder;
      whenNumberNotBetween(start: number, end: number): FilterCriteriaBuilder;
      whenNumberNotEqualTo(number: number): FilterCriteriaBuilder;
      whenTextContains(text: string): FilterCriteriaBuilder;
      whenTextDoesNotContain(text: string): FilterCriteriaBuilder;
      whenTextEndsWith(text: string): FilterCriteriaBuilder;
      whenTextEqualTo(text: string): FilterCriteriaBuilder;
      whenTextStartsWith(text: string): FilterCriteriaBuilder;
      withCriteria(criteria: BooleanCriteria, args: any[]): FilterCriteriaBuilder;
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
    interface GradientCondition {
      getMaxColor(): string;
      getMaxType(): InterpolationType | null;
      getMaxValue(): string;
      getMidColor(): string;
      getMidType(): InterpolationType | null;
      getMidValue(): string;
      getMinColor(): string;
      getMinType(): InterpolationType | null;
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
    interface Group {
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
    enum GroupControlTogglePosition { BEFORE, AFTER }
    /**
     * An enumeration representing the interpolation options for calculating a value to be used in a
     * GradientCondition in a ConditionalFormatRule.
     */
    enum InterpolationType { NUMBER, PERCENT, PERCENTILE, MIN, MAX }
    /**
     * Create, access and modify named ranges in a spreadsheet. Named ranges are ranges that have
     * associated string aliases. They can be viewed and edited via the Sheets UI under the Data >
     * Named ranges... menu.
     */
    interface NamedRange {
      getName(): string;
      getRange(): Range;
      remove(): void;
      setName(name: string): NamedRange;
      setRange(range: Range): NamedRange;
    }
    /**
     * Represents an image over the grid in a spreadsheet.
     */
    interface OverGridImage {
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
      getUrl(): string | null;
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
    interface PageProtection {
      /** @deprecated DO NOT USE */ addUser(email: string): void;
      /** @deprecated DO NOT USE */ getUsers(): string[];
      /** @deprecated DO NOT USE */ isProtected(): boolean;
      /** @deprecated DO NOT USE */ removeUser(user: string): void;
      /** @deprecated DO NOT USE */ setProtected(protection: boolean): void;
    }
    /**
     * Access and modify pivot table filters.
     */
    interface PivotFilter {
      getFilterCriteria(): FilterCriteria;
      getPivotTable(): PivotTable;
      getSourceDataColumn(): Integer;
      remove(): void;
      setFilterCriteria(filterCriteria: FilterCriteria): PivotFilter;
    }
    /**
     * Access and modify pivot table breakout groups.
     */
    interface PivotGroup {
      addManualGroupingRule(groupName: string, groupMembers: any[]): PivotGroup;
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
      sortBy(value: PivotValue, oppositeGroupValues: any[]): PivotGroup;
      sortDescending(): PivotGroup;
      totalsAreShown(): boolean;
    }
    /**
     * Access and modify pivot tables.
     */
    interface PivotTable {
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
    enum PivotTableSummarizeFunction { CUSTOM, SUM, COUNTA, COUNT, COUNTUNIQUE, AVERAGE, MAX, MIN, MEDIAN, PRODUCT, STDEV, STDEVP, VAR, VARP }
    /**
     * Access and modify value groups in pivot tables.
     */
    interface PivotValue {
      getDisplayType(): PivotValueDisplayType;
      getFormula(): string | null;
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
    enum PivotValueDisplayType { DEFAULT, PERCENT_OF_ROW_TOTAL, PERCENT_OF_COLUMN_TOTAL, PERCENT_OF_GRAND_TOTAL }
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
    interface Protection {
      addEditor(emailAddress: string): Protection;
      addEditor(user: Base.User): Protection;
      addEditors(emailAddresses: string[]): Protection;
      canDomainEdit(): boolean;
      canEdit(): boolean;
      getDescription(): string;
      getEditors(): Base.User[];
      getProtectionType(): ProtectionType;
      getRange(): Range;
      getRangeName(): string | null;
      getUnprotectedRanges(): Range[];
      isWarningOnly(): boolean;
      remove(): void;
      removeEditor(emailAddress: string): Protection;
      removeEditor(user: Base.User): Protection;
      removeEditors(emailAddresses: string[]): Protection;
      removeEditors(users: Base.User[]): Protection;
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
    enum ProtectionType { RANGE, SHEET }

    type FontLine = "none" | "underline" | "line-through";
    type FontStyle = "normal" | "italic";
    type FontWeight = "normal" | "bold";
    /**
     * Access and modify spreadsheet ranges. A range can be a single cell in a sheet or a group of
     * adjacent cells in a sheet.
     */
    interface Range {
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
      check(): Range;
      clear(): Range;
      clear(options: { commentsOnly?: boolean; contentsOnly?: boolean; formatOnly?: boolean; validationsOnly?: boolean; skipFilteredRows?: boolean }): Range;
      clearContent(): Range;
      clearDataValidations(): Range;
      clearFormat(): Range;
      clearNote(): Range;
      collapseGroups(): Range;
      copyFormatToRange(gridId: Integer, column: Integer, columnEnd: Integer, row: Integer, rowEnd: Integer): void;
      copyFormatToRange(sheet: Sheet, column: Integer, columnEnd: Integer, row: Integer, rowEnd: Integer): void;
      copyTo(destination: Range): void;
      copyTo(destination: Range, copyPasteType: CopyPasteType, transposed: boolean): void;
      copyTo(destination: Range, options: { formatOnly?: boolean; contentsOnly?: boolean }): void;
      copyValuesToRange(gridId: Integer, column: Integer, columnEnd: Integer, row: Integer, rowEnd: Integer): void;
      copyValuesToRange(sheet: Sheet, column: Integer, columnEnd: Integer, row: Integer, rowEnd: Integer): void;
      createDeveloperMetadataFinder(): DeveloperMetadataFinder;
      createFilter(): Filter;
      createPivotTable(sourceData: Range): PivotTable;
      createTextFinder(findText: string): TextFinder;
      deleteCells(shiftDimension: Dimension): void;
      expandGroups(): Range;
      getA1Notation(): string;
      getBackground(): string;
      getBackgrounds(): string[][];
      getBandings(): Banding[];
      getCell(row: Integer, column: Integer): Range;
      getColumn(): Integer;
      getDataRegion(): Range;
      getDataRegion(dimension: Dimension): Range;
      getDataSourceTables(): DataSourceTable[];
      getDataSourceUrl(): string;
      getDataTable(): Charts.DataTable;
      getDataTable(firstRowIsHeader: boolean): Charts.DataTable;
      getDataValidation(): DataValidation | null;
      getDataValidations(): (DataValidation | null)[][];
      getDeveloperMetadata(): DeveloperMetadata[];
      getDisplayValue(): string;
      getDisplayValues(): string[][];
      getFilter(): Filter | null;
      getFontColor(): string;
      getFontColors(): string[][];
      getFontFamilies(): string[][];
      getFontFamily(): string;
      getFontLine(): FontLine;
      getFontLines(): FontLine[][];
      getFontSize(): Integer;
      getFontSizes(): Integer[][];
      getFontStyle(): FontStyle;
      getFontStyles(): FontStyle[][];
      getFontWeight(): FontWeight;
      getFontWeights(): FontWeight[][];
      getFormula(): string;
      getFormulaR1C1(): string | null;
      getFormulas(): string[][];
      getFormulasR1C1(): (string | null)[][];
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
      getRichTextValue(): RichTextValue | null;
      getRichTextValues(): (RichTextValue | null)[][];
      getRow(): Integer;
      getRowIndex(): Integer;
      getSheet(): Sheet;
      getTextDirection(): TextDirection | null;
      getTextDirections(): (TextDirection | null)[][];
      getTextRotation(): TextRotation;
      getTextRotations(): TextRotation[][];
      getTextStyle(): TextStyle;
      getTextStyles(): TextStyle[][];
      getValue(): any;
      getValues(): any[][];
      getVerticalAlignment(): string;
      getVerticalAlignments(): string[][];
      getWidth(): Integer;
      getWrap(): boolean;
      getWrapStrategies(): WrapStrategy[][];
      getWrapStrategy(): WrapStrategy;
      getWraps(): boolean[][];
      insertCells(shiftDimension: Dimension): Range;
      insertCheckboxes(): Range;
      insertCheckboxes(checkedValue: any): Range;
      insertCheckboxes(checkedValue: any, uncheckedValue: any): Range;
      isBlank(): boolean;
      isChecked(): boolean | null;
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
      removeCheckboxes(): Range;
      removeDuplicates(): Range;
      removeDuplicates(columnsToCompare: Integer[]): Range;
      setBackground(color: string | null): Range;
      setBackgroundRGB(red: Integer, green: Integer, blue: Integer): Range;
      setBackgrounds(color: (string | null)[][]): Range;
      setBorder(top: boolean | null, left: boolean | null, bottom: boolean | null, right: boolean | null, vertical: boolean | null, horizontal: boolean | null): Range;
      setBorder(top: boolean | null, left: boolean | null, bottom: boolean | null, right: boolean | null, vertical: boolean | null, horizontal: boolean | null, color: string | null, style: BorderStyle | null): Range;
      setDataValidation(rule: DataValidation | null): Range;
      setDataValidations(rules: (DataValidation | null)[][]): Range;
      setFontColor(color: string | null): Range;
      setFontColors(colors: any[][]): Range;
      setFontFamilies(fontFamilies: (string | null)[][]): Range;
      setFontFamily(fontFamily: string | null): Range;
      setFontLine(fontLine: FontLine | null): Range;
      setFontLines(fontLines: (FontLine | null)[][]): Range;
      setFontSize(size: Integer): Range;
      setFontSizes(sizes: Integer[][]): Range;
      setFontStyle(fontStyle: FontStyle | null): Range;
      setFontStyles(fontStyles: (FontStyle | null)[][]): Range;
      setFontWeight(fontWeight: FontWeight | null): Range;
      setFontWeights(fontWeights: (FontWeight | null)[][]): Range;
      setFormula(formula: string): Range;
      setFormulaR1C1(formula: string): Range;
      setFormulas(formulas: string[][]): Range;
      setFormulasR1C1(formulas: string[][]): Range;
      setHorizontalAlignment(alignment: "left" | "center" | "normal" | "right" | null): Range;
      setHorizontalAlignments(alignments: ("left" | "center" | "normal" | "right" | null)[][]): Range;
      setNote(note: string | null): Range;
      setNotes(notes: (string | null)[][]): Range;
      setNumberFormat(numberFormat: string): Range;
      setNumberFormats(numberFormats: string[][]): Range;
      setRichTextValue(value: RichTextValue): Range;
      setRichTextValues(values: RichTextValue[][]): Range;
      setShowHyperlink(showHyperlink: boolean): Range;
      setTextDirection(direction: TextDirection | null): Range;
      setTextDirections(directions: (TextDirection | null)[][]): Range;
      setTextRotation(degrees: Integer): Range;
      setTextRotation(rotation: TextRotation): Range;
      setTextRotations(rotations: TextRotation[][]): Range;
      setTextStyle(style: TextStyle): Range;
      setTextStyles(styles: TextStyle[][]): Range;
      setValue(value: any): Range;
      setValues(values: any[][]): Range;
      setVerticalAlignment(alignment: "top" | "middle" | "bottom" | null): Range;
      setVerticalAlignments(alignments: ("top" | "middle" | "bottom" | null)[][]): Range;
      setVerticalText(isVertical: boolean): Range;
      setWrap(isWrapEnabled: boolean): Range;
      setWrapStrategies(strategies: WrapStrategy[][]): Range;
      setWrapStrategy(strategy: WrapStrategy): Range;
      setWraps(isWrapEnabled: boolean[][]): Range;
      shiftColumnGroupDepth(delta: Integer): Range;
      shiftRowGroupDepth(delta: Integer): Range;
      sort(sortSpecObj: any): Range;
      splitTextToColumns(): void;
      splitTextToColumns(delimiter: string): void;
      splitTextToColumns(delimiter: TextToColumnsDelimiter): void;
      trimWhitespace(): Range;
      uncheck(): Range;
    }
    /**
     * A collection of one or more Range instances in the same sheet. You can use this class
     * to apply operations on collections of non-adjacent ranges or cells.
     */
    interface RangeList {
      activate(): RangeList;
      breakApart(): RangeList;
      check(): RangeList;
      clear(): RangeList;
      clear(options: { commentsOnly?: boolean; contentsOnly?: boolean; formatOnly?: boolean; validationsOnly?: boolean; skipFilteredRows?: boolean }): RangeList;
      clearContent(): RangeList;
      clearDataValidations(): RangeList;
      clearFormat(): RangeList;
      clearNote(): RangeList;
      getRanges(): Range[];
      insertCheckboxes(): RangeList;
      insertCheckboxes(checkedValue: any): RangeList;
      insertCheckboxes(checkedValue: any, uncheckedValue: any): RangeList;
      removeCheckboxes(): RangeList;
      setBackground(color: string | null): RangeList;
      setBackgroundRGB(red: Integer, green: Integer, blue: Integer): RangeList;
      setBorder(top: boolean | null, left: boolean | null, bottom: boolean | null, right: boolean | null, vertical: boolean | null, horizontal: boolean | null): RangeList;
      setBorder(top: boolean | null, left: boolean | null, bottom: boolean | null, right: boolean | null, vertical: boolean | null, horizontal: boolean | null, color: string | null, style: BorderStyle | null): RangeList;
      setFontColor(color: string | null): RangeList;
      setFontFamily(fontFamily: string | null): RangeList;
      setFontLine(fontLine: FontLine | null): RangeList;
      setFontSize(size: Integer): RangeList;
      setFontStyle(fontStyle: FontStyle | null): RangeList;
      setFontWeight(fontWeight: FontWeight | null): RangeList;
      setFormula(formula: string): RangeList;
      setFormulaR1C1(formula: string): RangeList;
      setHorizontalAlignment(alignment: "left" | "center" | "normal" | "right" | null): RangeList;
      setNote(note: string | null): RangeList;
      setNumberFormat(numberFormat: string): RangeList;
      setShowHyperlink(showHyperlink: boolean): RangeList;
      setTextDirection(direction: TextDirection | null): RangeList;
      setTextRotation(degrees: Integer): RangeList;
      setValue(value: any): RangeList;
      setVerticalAlignment(alignment: "top" | "middle" | "bottom" | null): RangeList;
      setVerticalText(isVertical: boolean): RangeList;
      setWrap(isWrapEnabled: boolean): RangeList;
      setWrapStrategy(strategy: WrapStrategy): RangeList;
      trimWhitespace(): RangeList;
      uncheck(): RangeList;
    }
    /**
     * An enumeration representing the possible intervals used in spreadsheet recalculation.
     */
    enum RecalculationInterval { ON_CHANGE, MINUTE, HOUR }
    /**
     * An enumeration representing the relative date options for calculating a value to be used in
     * date-based BooleanCriteria.
     */
    enum RelativeDate { TODAY, TOMORROW, YESTERDAY, PAST_WEEK, PAST_MONTH, PAST_YEAR }
    /**
     * A stylized text string used to represent cell text. Substrings of the text can have different
     * text styles.
     *
     * A run is the longest unbroken substring having the same text style. For example, the
     * sentence "This kid has two apples." has four runs: ["This ", "kid ", "has two ",
     * "apples."].
     */
    interface RichTextValue {
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
    interface RichTextValueBuilder {
      build(): RichTextValue;
      setText(text: string): RichTextValueBuilder;
      setTextStyle(startOffset: Integer, endOffset: Integer, textStyle: TextStyle | null): RichTextValueBuilder;
      setTextStyle(textStyle: TextStyle | null): RichTextValueBuilder;
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
    interface Selection {
      getActiveRange(): Range | null;
      getActiveRangeList(): RangeList | null;
      getActiveSheet(): Sheet;
      getCurrentCell(): Range | null;
      getNextDataRange(direction: Direction): Range | null;
    }
    /**
     * Access and modify spreadsheet sheets. Common operations are renaming a sheet and accessing range
     * objects from the sheet.
     */
    interface Sheet {
      activate(): Sheet;
      addDeveloperMetadata(key: string): Sheet;
      addDeveloperMetadata(key: string, visibility: DeveloperMetadataVisibility): Sheet;
      addDeveloperMetadata(key: string, value: string): Sheet;
      addDeveloperMetadata(key: string, value: string, visibility: DeveloperMetadataVisibility): Sheet;
      appendRow(rowContents: any[]): Sheet;
      autoResizeColumn(columnPosition: Integer): Sheet;
      autoResizeColumns(startColumn: Integer, numColumns: Integer): Sheet;
      autoResizeRows(startRow: Integer, numRows: Integer): Sheet;
      clear(): Sheet;
      clear(options: { formatOnly?: boolean; contentsOnly?: boolean }): Sheet;
      clearConditionalFormatRules(): void;
      clearContents(): Sheet;
      clearFormats(): Sheet;
      clearNotes(): Sheet;
      collapseAllColumnGroups(): Sheet;
      collapseAllRowGroups(): Sheet;
      copyTo(spreadsheet: Spreadsheet): Sheet;
      createDeveloperMetadataFinder(): DeveloperMetadataFinder;
      createTextFinder(findText: string): TextFinder;
      deleteColumn(columnPosition: Integer): Sheet;
      deleteColumns(columnPosition: Integer, howMany: Integer): void;
      deleteRow(rowPosition: Integer): Sheet;
      deleteRows(rowPosition: Integer, howMany: Integer): void;
      expandAllColumnGroups(): Sheet;
      expandAllRowGroups(): Sheet;
      expandColumnGroupsUpToDepth(groupDepth: Integer): Sheet;
      expandRowGroupsUpToDepth(groupDepth: Integer): Sheet;
      getActiveCell(): Range;
      getActiveRange(): Range | null;
      getActiveRangeList(): RangeList | null;
      getBandings(): Banding[];
      getCharts(): EmbeddedChart[];
      getColumnGroup(columnIndex: Integer, groupDepth: Integer): Group | null;
      getColumnGroupControlPosition(): GroupControlTogglePosition;
      getColumnGroupDepth(columnIndex: Integer): Integer;
      getColumnWidth(columnPosition: Integer): Integer;
      getConditionalFormatRules(): ConditionalFormatRule[];
      getCurrentCell(): Range | null;
      getDataRange(): Range;
      getDataSourceTables(): DataSourceTable[];
      getDeveloperMetadata(): DeveloperMetadata[];
      getFilter(): Filter | null;
      getFormUrl(): string | null;
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
      getRowGroup(rowIndex: Integer, groupDepth: Integer): Group | null;
      getRowGroupControlPosition(): GroupControlTogglePosition;
      getRowGroupDepth(rowIndex: Integer): Integer;
      getRowHeight(rowPosition: Integer): Integer;
      getSelection(): Selection;
      getSheetId(): Integer;
      getSheetName(): string;
      getSheetValues(startRow: Integer, startColumn: Integer, numRows: Integer, numColumns: Integer): any[][];
      getSlicers(): Slicer[];
      getTabColor(): string | null;
      getType(): SheetType;
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
      insertSlicer(range: Range, anchorRowPos: Integer, anchorColPos: Integer): Slicer;
      insertSlicer(range: Range, anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): Slicer;
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
      setTabColor(color: string | null): Sheet;
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
      /** @deprecated DO NOT USE */ getSheetProtection(): PageProtection;
      /** @deprecated DO NOT USE */ setSheetProtection(permissions: PageProtection): void;
    }
    /**
     * The different types of sheets that can exist in a spreadsheet.
     */
    enum SheetType { GRID, OBJECT }
    /**
     * Represents a slicer, which is used
     * to filter ranges, charts and pivot tables in a non-collaborative manner. This class contains
     * methods to access and modify existing slicers. To create a new slicer, use Sheet.insertSlicer(range, anchorRowPos, anchorColPos).
     */
    interface Slicer {
      getBackgroundColor(): string | null;
      getColumnPosition(): Integer | null;
      getContainerInfo(): ContainerInfo;
      getFilterCriteria(): FilterCriteria | null;
      getRange(): Range;
      getTitle(): string;
      getTitleHorizontalAlignment(): string;
      getTitleTextStyle(): TextStyle;
      isAppliedToPivotTables(): boolean;
      remove(): void;
      setApplyToPivotTables(applyToPivotTables: boolean): Slicer;
      setBackgroundColor(color: string | null): Slicer;
      setColumnFilterCriteria(columnPosition: Integer, filterCriteria: FilterCriteria | null): Slicer;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): Slicer;
      setRange(rangeApi: Range): Slicer;
      setTitle(title: string): Slicer;
      setTitleHorizontalAlignment(horizontalAlignment: string | null): Slicer;
      setTitleTextStyle(textStyle: TextStyle): Slicer;
    }
    /**
     * Access and modify Google Sheets files. Common operations are adding new sheets and adding
     * collaborators.
     */
    interface Spreadsheet {
      addDeveloperMetadata(key: string): Spreadsheet;
      addDeveloperMetadata(key: string, visibility: DeveloperMetadataVisibility): Spreadsheet;
      addDeveloperMetadata(key: string, value: string): Spreadsheet;
      addDeveloperMetadata(key: string, value: string, visibility: DeveloperMetadataVisibility): Spreadsheet;
      addEditor(emailAddress: string): Spreadsheet;
      addEditor(user: Base.User): Spreadsheet;
      addEditors(emailAddresses: string[]): Spreadsheet;
      addMenu(name: string, subMenus: ({ name: string, functionName: string } | null)[]): void;
      addViewer(emailAddress: string): Spreadsheet;
      addViewer(user: Base.User): Spreadsheet;
      addViewers(emailAddresses: string[]): Spreadsheet;
      appendRow(rowContents: any[]): Sheet;
      autoResizeColumn(columnPosition: Integer): Sheet;
      copy(name: string): Spreadsheet;
      createDeveloperMetadataFinder(): DeveloperMetadataFinder;
      createTextFinder(findText: string): TextFinder;
      deleteActiveSheet(): Sheet;
      deleteColumn(columnPosition: Integer): Sheet;
      deleteColumns(columnPosition: Integer, howMany: Integer): void;
      deleteRow(rowPosition: Integer): Sheet;
      deleteRows(rowPosition: Integer, howMany: Integer): void;
      deleteSheet(sheet: Sheet): void;
      duplicateActiveSheet(): Sheet;
      getActiveCell(): Range;
      getActiveRange(): Range | null;
      getActiveRangeList(): RangeList | null;
      getActiveSheet(): Sheet;
      getAs(contentType: string): Base.Blob;
      getBandings(): Banding[];
      getBlob(): Base.Blob;
      getColumnWidth(columnPosition: Integer): Integer;
      getCurrentCell(): Range | null;
      getDataRange(): Range;
      getDataSourceTables(): DataSourceTable[];
      getDeveloperMetadata(): DeveloperMetadata[];
      getEditors(): Base.User[];
      getFormUrl(): string | null;
      getFrozenColumns(): Integer;
      getFrozenRows(): Integer;
      getId(): string;
      getImages(): OverGridImage[];
      getIterativeCalculationConvergenceThreshold(): number;
      getLastColumn(): Integer;
      getLastRow(): Integer;
      getMaxIterativeCalculationCycles(): Integer;
      getName(): string;
      getNamedRanges(): NamedRange[];
      getNumSheets(): Integer;
      getOwner(): Base.User | null;
      getPredefinedSpreadsheetThemes(): SpreadsheetTheme[];
      getProtections(type: ProtectionType): Protection[];
      getRange(a1Notation: string): Range;
      getRangeByName(name: string): Range | null;
      getRangeList(a1Notations: string[]): RangeList;
      getRecalculationInterval(): RecalculationInterval;
      getRowHeight(rowPosition: Integer): Integer;
      getSelection(): Selection;
      getSheetByName(name: string): Sheet | null;
      getSheetId(): Integer;
      getSheetName(): string;
      getSheetValues(startRow: Integer, startColumn: Integer, numRows: Integer, numColumns: Integer): any[][];
      getSheets(): Sheet[];
      getSpreadsheetLocale(): string;
      getSpreadsheetTheme(): SpreadsheetTheme | null;
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
      insertSheet(sheetIndex: Integer, options: { template?: Sheet }): Sheet;
      insertSheet(options: { template?: Sheet }): Sheet;
      insertSheet(sheetName: string): Sheet;
      insertSheet(sheetName: string, sheetIndex: Integer): Sheet;
      insertSheet(sheetName: string, sheetIndex: Integer, options: { template?: Sheet }): Sheet;
      insertSheet(sheetName: string, options: { template?: Sheet }): Sheet;
      insertSheetWithDataSourceTable(spec: DataSourceSpec): Sheet;
      isColumnHiddenByUser(columnPosition: Integer): boolean;
      isIterativeCalculationEnabled(): boolean;
      isRowHiddenByFilter(rowPosition: Integer): boolean;
      isRowHiddenByUser(rowPosition: Integer): boolean;
      moveActiveSheet(pos: Integer): void;
      moveChartToObjectSheet(chart: EmbeddedChart): Sheet;
      removeEditor(emailAddress: string): Spreadsheet;
      removeEditor(user: Base.User): Spreadsheet;
      removeMenu(name: string): void;
      removeNamedRange(name: string): void;
      removeViewer(emailAddress: string): Spreadsheet;
      removeViewer(user: Base.User): Spreadsheet;
      rename(newName: string): void;
      renameActiveSheet(newName: string): void;
      resetSpreadsheetTheme(): SpreadsheetTheme;
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
      setIterativeCalculationConvergenceThreshold(minThreshold: number): Spreadsheet;
      setIterativeCalculationEnabled(isEnabled: boolean): Spreadsheet;
      setMaxIterativeCalculationCycles(maxIterations: Integer): Spreadsheet;
      setNamedRange(name: string, range: Range): void;
      setRecalculationInterval(recalculationInterval: RecalculationInterval): Spreadsheet;
      setRowHeight(rowPosition: Integer, height: Integer): Sheet;
      setSpreadsheetLocale(locale: string): void;
      setSpreadsheetTheme(theme: SpreadsheetTheme): SpreadsheetTheme;
      setSpreadsheetTimeZone(timezone: string): void;
      show(userInterface: HTML.HtmlOutput): void;
      sort(columnPosition: Integer): Sheet;
      sort(columnPosition: Integer, ascending: boolean): Sheet;
      toast(msg: string): void;
      toast(msg: string, title: string): void;
      toast(msg: string, title: string, timeoutSeconds: number | null): void;
      unhideColumn(column: Range): void;
      unhideRow(row: Range): void;
      updateMenu(name: string, subMenus: { name: string, functionName: string }[]): void;
      /** @deprecated DO NOT USE */ getSheetProtection(): PageProtection;
      /** @deprecated DO NOT USE */ isAnonymousView(): boolean;
      /** @deprecated DO NOT USE */ isAnonymousWrite(): boolean;
      /** @deprecated DO NOT USE */ setAnonymousAccess(anonymousReadAllowed: boolean, anonymousWriteAllowed: boolean): void;
      /** @deprecated DO NOT USE */ setSheetProtection(permissions: PageProtection): void;
    }
    /**
     * Access and create Google Sheets files. This class is the parent class for the Spreadsheet service.
     */
    interface SpreadsheetApp {
      AutoFillSeries: typeof AutoFillSeries;
      BandingTheme: typeof BandingTheme;
      BooleanCriteria: typeof BooleanCriteria;
      BorderStyle: typeof BorderStyle;
      ColorType: typeof Base.ColorType;
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
      RecalculationInterval: typeof RecalculationInterval;
      RelativeDate: typeof RelativeDate;
      SheetType: typeof SheetType;
      TextDirection: typeof TextDirection;
      TextToColumnsDelimiter: typeof TextToColumnsDelimiter;
      ThemeColorType: typeof ThemeColorType;
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
      newColor(): ColorBuilder;
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
     * Access and modify existing themes. To set a theme on a spreadsheet, use Spreadsheet.setSpreadsheetTheme(theme).
     */
    interface SpreadsheetTheme {
      getConcreteColor(themeColorType: ThemeColorType): Color;
      getFontFamily(): string | null;
      getThemeColors(): ThemeColorType[];
      setConcreteColor(themeColorType: ThemeColorType, color: Color): SpreadsheetTheme;
      setConcreteColor(themeColorType: ThemeColorType, red: Integer, green: Integer, blue: Integer): SpreadsheetTheme;
      setFontFamily(fontFamily: string): SpreadsheetTheme;
    }
    /**
     * An enumerations of text directions.
     */
    enum TextDirection { LEFT_TO_RIGHT, RIGHT_TO_LEFT }
    /**
     * Find or replace text within a range, sheet or spreadsheet. Can also specify search options.
     */
    interface TextFinder {
      findAll(): Range[];
      findNext(): Range | null;
      findPrevious(): Range | null;
      getCurrentMatch(): Range | null;
      ignoreDiacritics(ignoreDiacritics: boolean): TextFinder;
      matchCase(matchCase: boolean): TextFinder;
      matchEntireCell(matchEntireCell: boolean): TextFinder;
      matchFormulaText(matchFormulaText: boolean): TextFinder;
      replaceAllWith(replaceText: string): Integer;
      replaceWith(replaceText: string): Integer;
      startFrom(startRange: Range): TextFinder;
      useRegularExpression(useRegEx: boolean): TextFinder;
    }
    /**
     * Access the text rotation settings for a cell.
     */
    interface TextRotation {
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
    interface TextStyle {
      copy(): TextStyleBuilder;
      getFontFamily(): string | null;
      getFontSize(): Integer | null;
      getForegroundColor(): string | null;
      isBold(): boolean | null;
      isItalic(): boolean | null;
      isStrikethrough(): boolean | null;
      isUnderline(): boolean | null;
    }
    /**
     * A builder for text styles.
     */
    interface TextStyleBuilder {
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
    enum TextToColumnsDelimiter { COMMA, SEMICOLON, PERIOD, SPACE }
    /**
     * A representation for a theme color.
     */
    interface ThemeColor {
      getColorType(): Base.ColorType;
      getThemeColorType(): ThemeColorType;
    }
    /**
     * An enum which describes various color entries supported in themes.
     */
    enum ThemeColorType { UNSUPPORTED, TEXT, BACKGROUND, ACCENT1, ACCENT2, ACCENT3, ACCENT4, ACCENT5, ACCENT6, HYPERLINK }
    /**
     * An enumeration of the strategies used to handle cell text wrapping.
     */
    enum WrapStrategy { WRAP, OVERFLOW, CLIP }
  }
}

declare var SpreadsheetApp: GoogleAppsScript.Spreadsheet.SpreadsheetApp;
