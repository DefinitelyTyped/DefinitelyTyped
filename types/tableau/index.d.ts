// Type definitions for tableau 2.2
// Project: https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api.htm
// Definitions by: Greg Zapp <https://github.com/protip>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

declare namespace tableau {
    interface VizCreateOptions {
        /** Undoes action on sheet, defaults to a single undo unless optional parameters is specified. */
        hideTabs?: boolean;
        /** Indicates whether the toolbar is hidden or shown. */
        hideToolbar?: boolean;
        /**
         * Specifies the ID of an existing instance to make a copy (clone) of.
         * This is useful if the user wants to continue analysis of an existing visualization without losing the state of the original.
         * If the ID does not refer to an existing visualization, the cloned version is derived from the original visualization.
         */
        instanceIdToClone?: string;
        /** Can be any valid CSS size specifier. If not specified, defaults to the published height of the view. */
        height?: string;
        /** Can be any valid CSS size specifier. If not specified, defaults to the published height of the view. */
        width?: string;
        /**
         * Specifies a device layout for a dashboard, if it exists.
         * Values can be desktop, tablet, or phone.
         * If not specified, defaults to loading a layout based on the smallest dimension of the hosting iframe element.
         */
        device?: string;
        /**
         * Callback function that is invoked when the Viz object first becomes interactive.
         * This is only called once, but it’s guaranteed to be called.
         * If the Viz object is already interactive, it will be called immediately, but on a separate "thread."
         */
        onFirstInteractive?: (e: TableauEvent) => void;
        /**
         * Callback function that's invoked when the size of the Viz object is known.
         * You can use this callback to perform tasks such as resizing the elements surrounding the Viz object once the object's size has been established.
         */
        onFirstVizSizeKnown?: (e: VizResizeEvent) => void;
        /**
         * Apply a filter that you specify to the view when it is first rendered.
         * For example, if you have an Academic Year filter and only want to display data for 2017,
         * you might enter "Academic Year": "2016". For more information, see Filtering.
         */
        [filter: string]: any;
    }

    class TableauEvent {
        /** Gets the Viz object associated with the event. */
        getViz(): Viz;

        /** Gets the name of the event, which is a string, but is also one of the items in the TableauEventName enum. */
        getEventName(): TableauEventName;
    }

    class CustomViewEvent extends TableauEvent {
        getCustomViewAsync(): Promise<CustomView>;
    }

    class FilterEvent extends TableauEvent {
        /** Gets the Worksheet object associated with the event. */
        getWorksheet(): Worksheet;

        /** Gets the name of the field. */
        getFieldName(): string;

        /** Gets the Filter object associated with the event. */
        getFilterAsync(): Promise<ConcreteFilter>;
    }

    class VizResizeEvent extends TableauEvent {
        /** Gets the Viz object associated with the event. */
        getViz(): Viz;
        /** Gets the name of the event, which is a string, but is also one of the items in the TableauEventName enum. */
        getEventName(): TableauEventName;
        /** Gets the sheetSize record for the current sheet. For more information, see SheetSizeOptions Record. */
        getVizSize(): Size;
    }

    enum TableauEventName {
        CUSTOM_VIEW_LOAD = 'customviewload',
        CUSTOM_VIEW_REMOVE = 'customviewremove',
        CUSTOM_VIEW_SAVE = 'customviewsave',
        CUSTOM_VIEW_SET_DEFAULT = 'customviewsetdefault',
        FILTER_CHANGE = 'filterchange',
        MARKS_SELECTION = 'marksselection',
        PARAMETER_VALUE_CHANGE = 'parametervaluechange',
        STORY_POINT_SWITCH = 'storypointswitch',
        TAB_SWITCH = 'tabswitch',
        TOOLBAR_STATE_CHANGE = 'toolbarstatechange',
        VIZ_RESIZE = 'vizresize',
    }

    enum DashboardObjectType {
        BLANK = 'blank',
        WORKSHEET = 'worksheet',
        QUICK_FILTER = 'quickFilter',
        PARAMETER_CONTROL = 'parameterControl',
        PAGE_FILTER = 'pageFilter',
        LEGEND = 'legend',
        TITLE = 'title',
        TEXT = 'text',
        IMAGE = 'image',
        WEB_PAGE = 'webPage',
        ADDIN = 'addIn'
    }

    enum FieldAggregationType {
        SUM,
        AVG,
        MIN,
        MAX,
        STDEV,
        STDEVP,
        VAR,
        VARP,
        COUNT,
        COUNTD,
        MEDIAN,
        ATTR,
        NONE,
        YEAR,
        QTR,
        MONTH,
        DAY,
        HOUR,
        MINUTE,
        SECOND,
        WEEK,
        WEEKDAY,
        MONTHYEAR,
        MDY,
        END,
        TRUNC_YEAR,
        TRUNC_QTR,
        TRUNC_MONTH,
        TRUNC_WEEK,
        TRUNC_DAY,
        TRUNC_HOUR,
        TRUNC_MINUTE,
        TRUNC_SECOND,
        QUART1,
        QUART3,
        SKEWNESS,
        KURTOSIS,
        INOUT,
        USER
    }

    enum FieldRoleType {
        DIMENSION, MEASURE, UKNOWN
    }

    enum FilterType {
        CATEGORICAL = 'categorical',
        QUANTITATIVE = 'quantitative',
        HIERARCHICAL = 'hierarchical',
        RELATIVE_DATE = 'relativedate',
    }

    enum SheetType {
        WORKSHEET = 'worksheet',
        DASHBOARD = 'dashboard',
        STORY = 'story',
    }

    enum DateRangeType {
        LAST = 'last', /** Refers to the last day, week, month, etc. of the date period. */
        LASTN = 'lastn', /** Refers to the last N days, weeks, months, etc. of the date period. */
        NEXT = 'next', /** Refers to the next day, week, month, etc. of the date period. */
        NEXTN = 'nextn', /** Refers to the next N days, weeks, months, etc. of the date period. */
        CURRENT = 'current', /** Refers to the current day, week, month, etc. of the date period. */
        TODATE = 'todate', /** Refers to everything up to and including the current day, week, month, etc. of the date period. */
    }

    enum ParameterAllowableValuesType {
        ALL = 'all',
        LIST = 'list',
        RANGE = 'range',
    }

    enum ParameterDataType {
        FLOAT = 'float',
        INTEGER = 'integer',
        STRING = 'string',
        BOOLEAN = 'boolean',
        DATE = 'date',
        DATETIME = 'datetime'
    }

    enum PeriodType {
        YEARS = 'years',
        QUARTERS = 'quarters',
        MONTHS = 'months',
        WEEKS = 'weeks',
        DAYS = 'days',
        HOURS = 'hours',
        MINUTES = 'minutes',
        SECONDS = 'seconds',
    }

    //#region
    class VizManager {
        getVizs(): Viz[];
    }

    type ListenerFunction = (event: TableauEvent) => void;

    class Viz {
        /**
         * Creates a new Tableau Viz inside of the given HTML container, which is typically a <div> element.
         * Each option as well as the options parameter is optional.
         * If there is already a Viz associated with the parentElement, an exception is thrown.
         * Before reusing the parentElement you must first call dispose().
         */
        constructor(node: HTMLElement, url: string, options?: VizCreateOptions);

        /** Indicates whether the tabs are displayed in the UI. It does not actually hide individual tabs. */
        getAreTabsHidden(): boolean;
        /** Indicates whether the toolbar is displayed. */
        getToolbarHidden(): boolean;
        /** Indicates whether the visualization is displayed on the hosting page. */
        getIsHidden(): boolean;
        /** Returns the node that was specified in the constructor. */
        getParentElement(): HTMLElement;
        /** The URL of the visualization, as specified in the constructor */
        getUrl(): string;
        /** One Workbook is supported per visualization. */
        getWorkbook(): Workbook;
        /** Indicates whether automatic updates are currently paused. */
        getAreAutomaticUpdatesPaused(): boolean;

        addEventListener(event: TableauEventName.FILTER_CHANGE, f: (event: FilterEvent) => void): void;
        addEventListener(event: TableauEventName.CUSTOM_VIEW_LOAD, f: (event: CustomViewEvent) => void): void;

        /** Removes an event listener from the specified event. */
        removeEventListener(type: TableauEventName, f: ListenerFunction): void;
        /** Shows or hides the iframe element hosting the visualization. */
        show(): void;
        /** Shows or hides the iframe element hosting the visualization. */
        hide(): void;
        /**
         * Cleans up any resources associated with the visualization,
         * removes the visualization from the VizManager instance,
         * and removes any DOM elements from the parentElement object.
         * In effect, this method restores the page to what it was before a Viz object was instantiated.
         */
        dispose(): void;
        /** Pauses or resumes layout updates. This is useful if you are resizing the visualization or performing multiple calls that could affect the layout. */
        pauseAutomaticUpdatesAsync(): void;
        resumeAutomaticUpdatesAsync(): void;
        toggleAutomaticUpdatesAsync(): void;
        /** Equivalent to clicking on the Revert All toolbar button, which restores the workbook to its starting state. */
        revertAllAsync(): Promise<void>;
        /** Equivalent to clicking on the Refresh Data toolbar button. */
        refreshDataAsync(): Promise<void>;
        /** Equivalent to clicking on the Download toolbar button, which downloads a copy of the original workbook. */
        showDownloadWorkbookDialog(): void;
        /** Equivalent to clicking on the Export Image toolbar button, which creates a PNG file of the current visualization. */
        showExportImageDialog(): void;
        /** Equivalent to clicking on the Export PDF toolbar button, which shows a dialog allowing the user to select options for the export. */
        showExportPDFDialog(): void;
        /**
         * Shows the Export Data dialog, which is currently a popup window. The worksheetInDashboard parameter is optional.
         * If not specified, the currently active Worksheet is used.
         */
        showExportDataDialog(worksheetInDashboard: Sheet | SheetInfo | string): void;
        /** Shows the Export CrossTab dialog. The worksheetInDashboard parameter is optional. If not specified, the currently active Worksheet is used. */
        showExportCrossTabDialog(worksheetInDashboard: Sheet | SheetInfo | string): void;
        /**
         * Equivalent to clicking on the Share toolbar button,
         * which displays a dialog allowing the user to share the visualization by email or by embedding its HTML in a web page.
         */
        showShareDialog(): void;
        /**
         * Sets the size of the iframe element, which causes the visualization to expand or
         * collapse to fit the iframe element if the visualization size (current sheet's size) is set to AUTOMATIC.
         */
        setFrameSize(width: number, height: number): void;
        /** Gets the URL of the visualization asynchronously. */
        getCurrentUrlAsync(): Promise<string>;
        /** Redoes last action on a sheet, defaults to a single redo unless optional parameters is specified. */
        redoAsync(): Promise<void>;
        /** Undoes action on sheet, defaults to a single undo unless optional parameters is specified. */
        undoAsync(): Promise<void>;
    }
    //#endregion

    //#region Sheet Classes
    class SheetInfo {
        /** Gets the name of the sheet. */
        getName(): string;
        /** Gets the index of the sheet within the published tabs. Note that hidden tabs are still counted in the ordering, as long as they are published. */
        getIndex(): number;
        /**
         * Gets a value indicating whether the sheet is the currently active sheet.Due to a technical limitation,
         * this will always return false if the object is a Worksheet instance that is part of a Dashboard.
         */
        getIsActive(): boolean;
        /**
         * Gets a value indicating whether the sheet is hidden in the UI. Note that if the entire tab control is hidden,
         * it does not affect the state of this flag. This sheet may still report that it is visible even when the tabs control is hidden.
         */
        getIsHidden(): boolean;
        /** Gets the type of the sheet. SheetType is an enum with the following values: WORKSHEET, DASHBOARD and STORY. */
        getSheetType(): SheetType;
        /** Gets the size information that the author specified when publishing the workbook. */
        getSize(): SheetSizeOptions;
        /** Gets the URL for this sheet. */
        getUrl(): string;
        /** Gets the Workbook to which this Sheet belongs. */
        getWorkbook(): Workbook;
    }

    class Sheet {
        /** Gets the name of the sheet. */
        getName(): string;
        /** Gets the index of the sheet within the published tabs. Note that hidden tabs are still counted in the ordering, as long as they are published. */
        getIndex(): number;
        /** Gets a value indicating whether the sheet is the currently active sheet. */
        getIsActive(): boolean;
        /**
         * Gets a value indicating whether the sheet is hidden in the UI.
         * Note that if the entire tab control is hidden, it does not affect the state of this flag.
         * This sheet may still report that it is visible even when the tabs control is hidden.
         */
        getIsHidden(): boolean;
        /** Gets the type of the sheet. SheetType is an enum with the following values: WORKSHEET , DASHBOARD and STORY. */
        getSheetType(): SheetType;
        /** Gets the size information that the author specified when publishing the workbook. */
        getSize(): SheetSizeOptions;
        /** Gets the URL for this sheet. */
        getUrl(): string;
        /** Gets the Workbook to which this Sheet belongs. */
        getWorkbook(): Workbook;
        /**
         * Sets the size information on a sheet. Note that if the sheet is a Worksheet,
         * only SheetSizeBehavior.AUTOMATIC is allowed since you can’t actually set a Worksheet to a fixed size.
         */
        changeSizeAsync(options: SheetSizeOptions): Promise<SheetSizeOptions>;
    }

    enum SheetSizeBehaviour {
        AUTOMATIC = 'automatic',
        EXACTLY = 'exactly',
        RANGE = 'range',
        ATLEAST = 'atleast',
        ATMOST = 'atmost',
    }

    interface SheetSizeOptions {
        /** Contains an enumeration value of one of the following: AUTOMATIC, EXACTLY, RANGE, ATLEAST, and ATMOST. */
        behavior: SheetSizeBehaviour;
        /** This is only defined when behavior is EXACTLY, RANGE or ATMOST. */
        maxSize: number;
        /** This is only defined when behavior is EXACTLY, RANGE, or ATLEAST. */
        minSize: number;
    }

    class DataTable {
        /** Either "Underlying Data Table" or "Summary Data Table". */
        getName(): string;
        /**
         * A two-dimensional array of data without the sheet or column metadata.
         * The first array index is the row index and the second array index is the column index.
         */
        getData(): any[];
        /** The column information, including the name, data type, and index. */
        getColumns(): Column[];
        /** The number of rows in the returned data. */
        getTotalRowCount(): number;
        /** Whether the data is summary data or underlying data. Returns true for summary data. */
        getIsSummaryData(): boolean;
    }

    class Column {
        /** The name of the column. */
        getFieldName(): string;
        /** The data type of the column. Possible values are float, integer, string, boolean, date, and datetime. */
        getDataType(): string;
        /** Whether the column data is referenced in the visualization. */
        getIsReferenced(): boolean;
        /** The number of rows in the returned data. */
        getIndex(): number;
    }

    class Worksheet {
        /** Returns the Dashboard object to which this Worksheet belongs (if it’s on a dashboard). Otherwise, it returns null. */
        getParentDashboard(): Dashboard;
        /**
         * Returns the StoryPoint object to which this Worksheet belongs (if it’s on a story sheet).
         * Otherwise, it returns null. If the Worksheet instance does not come from a call to StoryPoint.getContainedSheet(), it also returns null.
         */
        getParentStoryPoint(): StoryPoint;
        /**
         * Gets the primary and all of the secondary data sources for this worksheet.
         * Note that by convention the primary data source should always be the first element.
         */
        getDataSourcesAsync(): Promise<DataSource[]>;
        /**
         * Gets aggregated data for the fields used in the currently active sheet and returns it as an object.
         * You can specify options with an optional parameter. This can only be called on sheets of the WORKSHEET type.
         */
        getSummaryDataAsync(options: getSummaryDataOptions): Promise<DataTable>;
        /**
         * Gets data for all fields in the data source used by the currently active sheet and returns it as an object.
         * You can specify options with an optional parameter. This can only be called on sheets of the WORKSHEET type.
         */
        getUnderlyingDataAsync(options: getUnderlyingDataOptions): Promise<DataTable>;
    }

    interface getSummaryDataOptions {
        /** Do not use aliases specified in the data source in Tableau. Default is false. */
        ignoreAliases?: boolean;
        /** Only return data for the currently selected marks. Default is false. */
        ignoreSelection?: boolean;
        /** The number of rows of data that you want to return. Enter 0 to return all rows. */
        maxRows: number;
    }

    interface getUnderlyingDataOptions {
        /** Do not use aliases specified in the data source in Tableau. Default is false. */
        ignoreAliases?: boolean;
        /** Only return data for the currently selected marks. Default is false. */
        ignoreSelection?: boolean;
        /** Return all the columns for the data source. Default is false. */
        ignoreAllColumns?: boolean;
        /** The number of rows of data that you want to return. Enter 0 to return all rows. */
        maxRows: number;
    }

    class Dashboard {
        /** Gets the collection of objects. */
        getObjects(): DashboardObject[];
        /**
         * Gets the collection of worksheets contained in the dashboard.
         * Note that this is a helper method and is equivalent to looping through getObjects() and collecting all of
         * the DashboardObject.Worksheet pointers when DashboardObject.getType() === tableau.DashboardObjectType.WORKSHEET.
         */
        getWorksheets(): Worksheet[];
        /**
         * Returns the StoryPoint object to which this Dashboard belongs (if it’s on a story sheet).
         * Otherwise, it returns null.
         * If the Dashboard instance does not come from a call to StoryPoint.getContainedSheet(), it also returns null.
         */
        getParentStoryPoint(): StoryPoint;
    }

    class DashboardObject {
        /**
         * Gets what the object represents, which is an enum with the following values:
         * BLANK, WORKSHEET, QUICK_FILTER, PARAMETER_CONTROL, PAGE_FILTER, LEGEND, TITLE, TEXT, IMAGE, WEB_PAGE.
         */
        getObjectType(): DashboardObjectType;
        /** Gets the Dashboard object that contains this object. */
        getDashboard(): Dashboard;
        /** If getType() returns WORKSHEET, this contains a pointer to the Worksheet object. */
        getWorksheet(): Worksheet;
        /** Gets the coordinates relative to the top-left corner of the dashboard of the object. */
        getPosition(): Point;
        /** Gets the size of the object. */
        getSize(): Size;
    }

    class Story extends Sheet {
        /**
         * Gets an array (not a collection) of StoryPointInfo objects.
         * Note that this is not a collection, since we don’t have a unique string key for a story point.
         * We only need ordinal access to the story points (by index).
         */
        getStoryPointsInfo(): StoryPointInfo[];
        /** Gets the currently active story point. */
        getActiveStoryPoint(): StoryPoint;
        /**
         * Activates the story point at the specified index and returns a promise of the activated StoryPoint.
         * Throws a tableau.ErrorCode.INDEX_OUT_OF_RANGE error if the index is less than zero or greater than or equal to the number of story points in the array.
         */
        activateStoryPointAsync(index: number): Promise<StoryPoint>;
        /** Activates the next story point if there is one. If the current story point is the last one, then is stays active. */
        activateNextStoryPointAsync(): Promise<StoryPoint>;
        /** Activates the previous story point if there is one. If the current story point is the first one, then it stays active. */
        activatePreviousStoryPointAsync(): Promise<StoryPoint>;
        /**
         * Reverts the story point at the specified index and returns a promise of the reverted StoryPoint.
         * Throws a tableau.ErrorCode.INDEX_OUT_OF_RANGE error if the index is less than zero or greater than or equal to the number of story points in the array.
         */
        revertStoryPointAsync(index: number): Promise<StoryPoint>;
    }

    class StoryPointInfo {
        /** Gets the zero-based index of this story point within the parent Story sheet. */
        getIndex(): number;
        /** Gets the content of the textual description for this story point. */
        getCaption(): string;
        /** Gets a value indicating whether the story point is the currently active point in the story. */
        getIsActive(): boolean;
        /** Gets a value indicating whether the story point is updated, meaning that there are no changes from the last time the story point was “captured”. */
        getIsUpdated(): boolean;
        /** Gets the Story object that contains the story point. */
        getParentStory(): Story;
    }

    class StoryPoint {
        /** Gets the zero-based index of this story point within the parent Story sheet. */
        getIndex(): number;
        /** Gets the content of the textual description for this story point. */
        getCaption(): string;
        /** Gets a value indicating whether the story point is the currently active point in the story. */
        getIsActive(): boolean;
        /** Gets a value indicating whether the story point is updated, meaning that there are no changes from the last time the story point was “captured”. */
        getIsUpdated(): boolean;
        /** Gets the sheet that this story point contains. This will be null if the story point does not have a contained sheet. */
        getContainedSheet(): Sheet;
        /** Gets the Story object that contains the story point. */
        getParentStory(): Story;
    }
    //#endregion

    //#region Workbook Classes
    class Workbook {
        /** Gets the Viz object that contains the workbook. */
        getViz(): Viz;
        /** Gets the currently active sheet (the active tab) */
        getActiveSheet(): Sheet;
        /** Gets the currently active custom view, or null if no custom view is active. */
        getActiveCustomView(): CustomView;
        /** Note that this is synchronous, meaning that all of the sheets are expected when loaded. */
        getPublishedSheetsInfo(): SheetInfo[];
        /** Gets the name of the workbook saved to the server. Note that this is not necessarily the file name. */
        getName(): string;
        /** Activates the sheet, either by name or index, and returns a promise of the sheet that was activated. */
        activateSheetAsync(sheetNameOrIndex: string | number): Promise<Sheet>;
        /** Reverts the workbook to its last saved state. */
        revertAllAsync(): Promise<void>;
        /** Fetches the parameters for this workbook. */
        getParametersAsync(): Promise<Parameter[]>;
        /**
         * Changes the value of the parameter with the given name and returns the new Parameter.
         * The value should be the same data type as the parameter and within the allowable range of values.
         * It also needs to be the aliased value and not the raw value.
         * For more information and examples, see changeParameterValueAsync() Additional Information
         */
        changeParameterValueAsync(name: string, value: any): Promise<Parameter>;
        /** Gets the collection of CustomView objects associated with the workbook. */
        getCustomViewsAsync(): Promise<CustomView[]>;
        /** Changes the visualization to show the named saved state. */
        showCustomViewAsync(customViewName: string): Promise<CustomView>;
        /** Removes the named custom view. */
        removeCustomViewAsync(customViewName: string): Promise<CustomView>;
        /** Remembers the current state of the workbook by assigning a custom view name. */
        rememberCustomViewAsync(customViewName: string): Promise<CustomView>;
        /** Sets the active custom view as the default. */
        setActiveCustomViewAsDefaultAsync(): void;
    }

    class DataSource {
        /** The name of the DataSource as seen in the UI. */
        getName(): string;
        /** Indicates whether this DataSource is a primary or a secondary data source. */
        getIsPrimary(): boolean;
        /** Gets an array of Fields associated with the DataSource. */
        getFields(): Field[];
    }

    class Field {
        /** Gets the field name (i.e. caption). */
        getName(): string;
        getAggregation(): FieldAggregationType;
        /** Gets the data source to which this field belongs. */
        getDataSource(): DataSource;
        /** One of the following values: DIMENSION, MEASURE, UKNOWN */
        getRole(): FieldRoleType;
    }

    class CustomView {
        /** User-friendly name for the custom view */
        getName(): string;
        /** User-friendly name for the custom view */
        setName(name: string): string;

        /** Indicates whether the custom view is public or private. */
        getAdvertised(): boolean;
        /** Indicates whether the custom view is public or private. */
        setAdvertised(bool: boolean): boolean;

        /** Gets or sets whether this is the default custom view. */
        getDefault(): boolean;

        /** Gets the user that created the custom view. */
        getOwnerName(): string;

        /** Unique URL to load this view again. */
        getUrl(): string;

        /** Gets the Workbook to which this CustomView belongs. */
        getWorkbook(): Workbook;

        /** After saveAsync() is called, the result of the getUrl method is no longer blank. */
        saveAsync(): Promise<CustomView>;
    }
    //#endregion

    //#region Parameter Classes
    class Parameter {
        /** A unique identifier for the parameter, as specified by the user. */
        getName(): string;
        /** The current value of the parameter. */
        getCurrentValue(): DataValue;
        /** The data type of the parameter can be one of the following: FLOAT, INTEGER, STRING, BOOLEAN, DATE, DATETIME. */
        getDataType(): ParameterDataType;
        /** The type of allowable values that the parameter can accept. It can be one of the following enumeration items: ALL, LIST, RANGE. */
        getAllowableValuesType(): ParameterAllowableValuesType;
        /**
         * If the parameter is restricted to a list of allowable values, this property contains the array of those values.
         * Note that this is not a standard collection, but a JavaScript array.
         */
        getAllowableValues(): DataValue[];
        /** If getAllowableValuesType is RANGE, this defines the minimum allowable value, inclusive. Otherwise it’s undefined/null. */
        getMinValue(): DataValue;
        /** If getAllowableValuesType is RANGE, this defines the maximum allowable value, inclusive. Otherwise it’s undefined/null. */
        getMaxValue(): DataValue;
        /** If getAllowableValuesType is RANGE, this defines the step size used in the parameter UI control slider. Otherwise it’s undefined/null. */
        getStepSize(): number;
        /**
         * If getAllowableValuesType is RANGE and getDataType is DATE or DATETIME,
         * this defines the step date period used in the Parameter UI control slider.
         * Otherwise it’s undefined/null.
         */
        getDateStepPeriod(): PeriodType;
    }
    //#endregion

    //#region Filtering
    class Filter {
        /** Gets the parent worksheet */
        getWorksheet(): Worksheet;
        /** Gets the type of the filter. See FilterType Enum for the values in the enum. */
        getFilterType(): FilterType;
        /** Gets the name of the field being filtered. Note that this is the caption as shown in the UI and not the actual database field name. */
        getFieldName(): string;
        /** Gets the field that is currently being filtered. */
        getFieldAsync(): Promise<Field>;
    }

    class CategoricalFilter extends Filter {
        /** Gets a value indicating whether the filter is exclude or include (default). */
        getIsExcludeMode(): boolean;
        /**
         * Gets the collection of values that are currently set on the filter.
         * This is a native JavaScript array and not a keyed collection.
         * Note that only the first 200 values are returned.
         */
        getAppliedValues(): DataValue[];
    }

    class QuantitativeFilter extends Filter {
        /** Gets the minimum value as specified in the domain. */
        getDomainMin(): DataValue;
        /** Gets the maximum value as specified in the domain. */
        getDomainMax(): DataValue;
        /** Gets the minimum value, inclusive, applied to the filter. */
        getMin(): DataValue;
        /** Gets the maximum value, inclusive, applied to the filter. */
        getMax(): DataValue;
        /** Indicates whether null values are included in the filter. */
        getIncludeNullValues(): boolean;
    }

    class RelativeDateFilter extends Filter {
        /** The date period of the filter. See PeriodType Enum for the values in the enum. */
        getPeriod(): PeriodType;
        /** The range of the date filter (years, months, etc.). See DateRangeType Enum for the values in the enum. */
        getRange(): DateRangeType;
        /** When getRange returns LASTN or NEXTN, this is the N value (how many years, months, etc.). */
        getRangeN(): number;
    }

    type ConcreteFilter = CategoricalFilter | QuantitativeFilter | RelativeDateFilter;

    class DataValue {
        /** Contains the raw native value as a JavaScript type, which is one of String, Number, Boolean, or Date */
        value: any;
        /** The value formatted according to the locale and the formatting applied to the field or parameter. */
        formattedValue: string;
    }
    //#endregion

    interface Size {
        width: number;
        height: number;
    }

    interface Point {
        x: number;
        y: number;
    }
}
