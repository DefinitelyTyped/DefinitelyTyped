declare namespace tableau {
    enum DashboardObjectType {
        BLANK = "blank",
        WORKSHEET = "worksheet",
        QUICK_FILTER = "quickFilter",
        PARAMETER_CONTROL = "parameterControl",
        PAGE_FILTER = "pageFilter",
        LEGEND = "legend",
        TITLE = "title",
        TEXT = "text",
        IMAGE = "image",
        WEB_PAGE = "webPage",
        ADDIN = "addIn",
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
        USER,
    }

    enum FieldRoleType {
        DIMENSION,
        MEASURE,
        UNKNOWN,
    }

    enum SheetType {
        WORKSHEET = "worksheet",
        DASHBOARD = "dashboard",
        STORY = "story",
    }

    enum ParameterAllowableValuesType {
        ALL = "all",
        LIST = "list",
        RANGE = "range",
    }

    enum ParameterDataType {
        FLOAT = "float",
        INTEGER = "integer",
        STRING = "string",
        BOOLEAN = "boolean",
        DATE = "date",
        DATETIME = "datetime",
    }

    // #region Error Classes
    class TableauException extends Error {
        tableauSoftwareErrorCode: ErrorCode;
    }

    enum ErrorCode {
        /** The browser is not capable of supporting the Tableau JavaScript API. */
        BROWSER_NOT_CAPABLE = "browserNotCapable",
        /** The permissions on a workbook or a view do not allow downloading the workbook. */
        DOWNLOAD_WORKBOOK_NOT_ALLOWED = "downloadWorkbookNotAllowed",
        /** An error occurred while attempting to perform a filter operation. */
        FILTER_CANNOT_BE_PERFORMED = "filterCannotBePerformed",
        /** Attempted to switch to a sheet by index that does not exist in the workbook. */
        INDEX_OUT_OF_RANGE = "indexOutOfRange",
        /** An error occurred within the Tableau JavaScript API. Contact Tableau Support. */
        INTERNAL_ERROR = "internalError",
        /** An invalid aggregation was specified for the filter, such as setting a range filter to "SUM(Sales)" instead of "Sales". */
        INVALID_AGGREGATION_FIELD_NAME = "invalidAggregationFieldName",
        /** An operation was attempted on a custom view that does not exist. */
        INVALID_CUSTOM_VIEW_NAME = "invalidCustomViewName",
        /** An invalid date was specified in a method that required a date parameter. */
        INVALID_DATE_PARAMETER = "invalidDateParameter",
        /** A filter operation was attempted on a field that does not exist in the data source. */
        INVALID_FILTER_FIELDNAME = "invalidFilterFieldName",
        /**
         * Either a filter operation was attempted on a field that does not exist in the data source,
         * or the value supplied in the filter operation is the wrong data type or format.
         */
        INVALID_FILTER_FIELDNAME_OR_VALUE = "invalidFilterFieldNameOrValue",
        /** A filter operation was attempted using a value that is the wrong data type or format. */
        INVALID_FILTER_FIELDVALUE = "invalidFilterFieldValue",
        /** A parameter is not the correct data type or format. The name of the parameter is specified in the Error.message field. */
        INVALID_PARAMETER = "invalidParameter",
        /** An invalid date value was specified in a Sheet.selectMarksAsync() call for a date field. */
        INVALID_SELECTION_DATE = "invalidSelectionDate",
        /** A field was specified in a Sheet.selectMarksAsync() call that does not exist in the data source. */
        INVALID_SELECTION_FIELDNAME = "invalidSelectionFieldName",
        /** An invalid value was specified in a Sheet.selectMarksAsync() call. */
        INVALID_SELECTION_VALUE = "invalidSelectionValue",
        /** A negative size was specified or the maxSize value is less than minSize in Sheet.changeSizeAsync(). */
        INVALID_SIZE = "invalidSize",
        /**
         * A behavior other than SheetSizeBehavior.AUTOMATIC was specified in
         * Sheet.changeSizeAsync() when the sheet is a Worksheet instance.
         */
        INVALID_SIZE_BEHAVIOR_ON_WORKSHEET = "invalidSizeBehaviorOnWorksheet",
        /** The URL specified in the Viz class constructor is not valid. */
        INVALID_URL = "invalidUrl",
        /** The maxSize field is missing in Sheet.changeSizeAsync() when specifying SheetSizeBehavior.ATMOST. */
        MISSING_MAX_SIZE = "missingMaxSize",
        /** The minSize field is missing in Sheet.changeSizeAsync() when specifying SheetSizeBehavior.ATLEAST. */
        MISSING_MIN_SIZE = "missingMinSize",
        /**
         * Either or both of the minSize or maxSize fields is missing in
         * Sheet.changeSizeAsync() when specifying SheetSizeBehavior.RANGE.
         */
        MISSING_MINMAX_SIZE = "missingMinMaxSize",
        /** The rangeN field is missing for a relative date filter of type LASTN or NEXTN. */
        MISSING_RANGEN_FOR_RELATIVE_DATE_FILTERS = "missingRangeNForRelativeDateFilters",
        /** An attempt was made to access Sheet.getUrl() on a hidden sheet. Hidden sheets do not have URLs. */
        NO_URL_FOR_HIDDEN_WORKSHEET = "noUrlForHiddenWorksheet",
        /** One or both of the parentElement or the URL parameters is not specified in the Viz constructor. */
        NO_URL_OR_PARENT_ELEMENT_NOT_FOUND = "noUrlOrParentElementNotFound",
        /** An operation was attempted on a sheet that is not active or embedded within the active dashboard. */
        NOT_ACTIVE_SHEET = "notActiveSheet",
        /** A required parameter was not specified, null, or an empty string/array. */
        NULL_OR_EMPTY_PARAMETER = "nullOrEmptyParameter",
        /** A general-purpose server error occurred. Details are contained in the Error object. */
        SERVER_ERROR = "serverError",
        /** An operation was attempted on a sheet that does not exist in the workbook. */
        SHEET_NOT_IN_WORKBOOK = "sheetNotInWorkbook",
        /** An operation is performed on a CustomView object that is no longer valid (it has been removed). */
        STALE_DATA_REFERENCE = "staleDataReference",
        /** An unknown event name was specified in the call to Viz.addEventListener or Viz.removeEventListener. */
        UNSUPPORTED_EVENT_NAME = "unsupportedEventName",
        /** A Viz object has already been created as a child of the parentElement specified in the Viz constructor. */
        VIZ_ALREADY_IN_MANAGER = "vizAlreadyInManager",
        INVALID_TOOLBAR_BUTTON_NAME = "invalidToolbarButtonName",
        MAX_VIZ_RESIZE_ATTEMPTS = "maxVizResizeAttempts",
    }
    // #endregion

    // #region Viz Classes
    class VizManager {
        getVizs(): Viz[];
    }

    type ListenerFunction<T extends TableauEvent> = (event: T) => void;

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

        addEventListener(event: TableauEventName.FILTER_CHANGE, f: ListenerFunction<FilterEvent>): void;
        addEventListener(
            event:
                | TableauEventName.CUSTOM_VIEW_LOAD
                | TableauEventName.CUSTOM_VIEW_REMOVE
                | TableauEventName.CUSTOM_VIEW_SAVE
                | TableauEventName.CUSTOM_VIEW_SET_DEFAULT,
            f: ListenerFunction<CustomViewEvent>,
        ): void;
        addEventListener(event: TableauEventName.MARKS_SELECTION, f: ListenerFunction<MarksEvent>): void;
        addEventListener(event: TableauEventName.PARAMETER_VALUE_CHANGE, f: ListenerFunction<ParameterEvent>): void;
        addEventListener(event: TableauEventName.STORY_POINT_SWITCH, f: ListenerFunction<StoryPointSwitchEvent>): void;
        addEventListener(event: TableauEventName.TAB_SWITCH, f: ListenerFunction<TabSwitchEvent>): void;
        addEventListener(event: TableauEventName.TOOLBAR_STATE_CHANGE, f: ListenerFunction<ToolbarStateEvent>): void;
        addEventListener(event: TableauEventName.VIZ_RESIZE, f: ListenerFunction<VizResizeEvent>): void;

        /** Removes an event listener from the specified event. */
        removeEventListener(type: TableauEventName, f: ListenerFunction<TableauEvent>): void;
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

    interface VizCreateOptions {
        /** Undoes action on sheet, defaults to a single undo unless optional parameters is specified. */
        hideTabs?: boolean | undefined;
        /** Indicates whether the toolbar is hidden or shown. */
        hideToolbar?: boolean | undefined;
        /**
         * Specifies the ID of an existing instance to make a copy (clone) of.
         * This is useful if the user wants to continue analysis of an existing visualization without losing the state of the original.
         * If the ID does not refer to an existing visualization, the cloned version is derived from the original visualization.
         */
        instanceIdToClone?: string | undefined;
        /** Can be any valid CSS size specifier. If not specified, defaults to the published height of the view. */
        height?: string | undefined;
        /** Can be any valid CSS size specifier. If not specified, defaults to the published height of the view. */
        width?: string | undefined;
        /**
         * Specifies a device layout for a dashboard, if it exists.
         * Values can be desktop, tablet, or phone.
         * If not specified, defaults to loading a layout based on the smallest dimension of the hosting iframe element.
         */
        device?: string | undefined;
        /**
         * Callback function that is invoked when the Viz object first becomes interactive.
         * This is only called once, but it’s guaranteed to be called.
         * If the Viz object is already interactive, it will be called immediately, but on a separate "thread."
         */
        onFirstInteractive?: ((e: TableauEvent) => void) | undefined;
        /**
         * Callback function that's invoked when the size of the Viz object is known.
         * You can use this callback to perform tasks such as resizing the elements surrounding the Viz object once the object's size has been established.
         */
        onFirstVizSizeKnown?: ((e: VizResizeEvent) => void) | undefined;
        /**
         * Apply a filter that you specify to the view when it is first rendered.
         * For example, if you have an Academic Year filter and only want to display data for 2017,
         * you might enter "Academic Year": "2016". For more information, see Filtering.
         */
        [filter: string]: any;
    }

    enum ToolbarPosition {
        /** Positions the toolbar along the top of the visualization. */
        TOP = "top",
        /** Positions the toolbar along the bottom of the visualization. */
        BOTTOM = "bottom",
    }

    class ToolbarState {
        /** Gets the Viz object associated with the toolbar. */
        getViz(): Viz;
        /**
         * Gets a value indicating whether the specified toolbar button is enabled.
         * The supported buttons are defined in the ToobarButtonName enum.
         * Currently, only Undo and Redo are supported.
         * Checking this property with a toolbar button that is not supported causes an InvalidToolbarButtonName error.
         */
        isButtonEnabled(toolbarButtonName: ToolbarButtonName): boolean;
    }

    enum ToolbarButtonName {
        /** Specifies the Undo button in the toolbar. */
        UNDO = "undo",
        /** Specifies the Redo button in the toolbar. */
        REDO = "redo",
    }
    // #endregion

    // #region Viz Event Classes
    /**
     * Defines strings passed to the Viz.addEventListener and Viz.removeEventListener methods.
     * The values of the enums are all lowercase strings with no underscores.
     * For example, CUSTOM_VIEW_LOAD is customviewload.
     * Either the fully-qualified enum (tableau.TableauEventName.FILTER_CHANGE) or the raw string (filterchange) is acceptable.
     */
    enum TableauEventName {
        /**
         * Raised when a custom view has finished loading.
         * This event is raised after the callback function for onFirstInteractive (if any) has been called.
         */
        CUSTOM_VIEW_LOAD = "customviewload",
        /** Raised when the user removes a custom view. */
        CUSTOM_VIEW_REMOVE = "customviewremove",
        /** Raised when the user saves a new or existing custom view. */
        CUSTOM_VIEW_SAVE = "customviewsave",
        /** Raised when a custom view has been made the default view for this visualization. */
        CUSTOM_VIEW_SET_DEFAULT = "customviewsetdefault",
        /** Raised when any filter has changed state. The Viz object may not be interactive yet. */
        FILTER_CHANGE = "filterchange",
        /** Raised when marks are selected or deselected. */
        MARKS_SELECTION = "marksselection",
        /** Raised when any parameter has changed state. */
        PARAMETER_VALUE_CHANGE = "parametervaluechange",
        /** Raised after a story point becomes active. */
        STORY_POINT_SWITCH = "storypointswitch",
        /** Raised after the tab switched, but the Viz object may not yet be interactive. */
        TAB_SWITCH = "tabswitch",
        /** Raised when the state of the specified toolbar button changes. See API Reference. */
        TOOLBAR_STATE_CHANGE = "toolbarstatechange",
        /** Raised every time the frame size is calculated from the available size and the Viz object's published size. */
        VIZ_RESIZE = "vizresize",
    }

    class TableauEvent {
        /** Gets the Viz object associated with the event. */
        getViz(): Viz;

        /** Gets the name of the event, which is a string, but is also one of the items in the TableauEventName enum. */
        getEventName(): TableauEventName;
    }

    class CustomViewEvent extends TableauEvent {
        /** Gets the CustomView object associated with the event. */
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

    class MarksEvent extends TableauEvent {
        /** Gets the Worksheet object associated with the event. */
        getWorksheet(): Worksheet;

        /** Gets the selected marks on the Worksheet that triggered the event. */
        getMarksAsync(): Promise<Mark[]>;
    }

    class ParameterEvent extends TableauEvent {
        /** Gets the name of the parameter that changed. */
        getParameterName(): string;
        /** Gets the Parameter object that triggered the event. */
        getParameterAsync(): Promise<Parameter>;
    }

    class StoryPointSwitchEvent extends TableauEvent {
        /**
         * Gets the StoryPointInfo that was active before the story point switch event occurred.
         * The returned object reflects the state of the story point before the switch occurred.
         * The returned object reflects the state of the story point after the switch occured.
         */
        getOldStoryPointInfo(): StoryPointInfo;
        /** Gets the StoryPoint that is currently active. */
        getNewStoryPoint(): StoryPoint;
    }

    class TabSwitchEvent extends TableauEvent {
        /** Gets the name of the sheet that was active before the tab switch event occurred. */
        getOldSheetName(): string;
        /** Gets the name of the sheet that is currently active. */
        getNewSheetName(): string;
    }

    class ToolbarStateEvent extends TableauEvent {
        /** Returns the new ToolbarState. */
        getToolbarState(): ToolbarState;
    }

    class VizResizeEvent extends TableauEvent {
        /** Gets the Viz object associated with the event. */
        getViz(): Viz;
        /** Gets the name of the event, which is a string, but is also one of the items in the TableauEventName enum. */
        getEventName(): TableauEventName;
        /** Gets the sheetSize record for the current sheet. For more information, see SheetSizeOptions Record. */
        getVizSize(): Size;
    }
    // #endregion

    // #region Sheet Classes
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
        AUTOMATIC = "automatic",
        EXACTLY = "exactly",
        RANGE = "range",
        ATLEAST = "atleast",
        ATMOST = "atmost",
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

    class Worksheet extends Sheet {
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
        /** Fetches the collection of filters used on the sheet. */
        getFiltersAsync(): Promise<Filter[]>;
        /**
         * Applies a simple categorical filter (non-date).
         * See the filtering examples for more details on these functions.
         * Returns the fieldName that was filtered.
         */
        applyFilterAsync(
            fieldName: string,
            values: object[] | object,
            updateType: FilterUpdateType,
            options?: FilterOptions,
        ): Promise<string>;
        /**
         * Applies a quantitative filter to a field or to a date.
         * If a range is specified that is outside of the domain min/max values, no error is raised and the command is allowed.
         * Subsequent calls to getFiltersAsync[] will return these values even if they are outside of the bounds of the domain.
         * This is equivalent to the behavior in Tableau Desktop.
         */
        applyRangeFilterAsync(fieldName: string, range: RangeFilterOptions): Promise<string>;
        /** Applies a relative date filter. */
        applyRelativeDateFilterAsync(fieldName: string, options: RelativeDateFilterOptions): Promise<string>;
        /**
         * Applies a hierarchical filter.
         * The values parameter is either a single value, an array of values, or an object { levels: ["1", "2"] }.
         */
        applyHierarchicalFilterAsync(fieldName: string, values: object, options: any): Promise<string>;
        /**
         * Clears the filter, no matter what kind of filter it is.
         * Note that the filter is removed as long as no associated quick filter is showing for the field.
         * If there is a quick filter showing, then the filter is kept, but it’s reset to the “All” state (effectually canceling the filter).
         * For relative date filters, however, an error is returned since there is no “All” state for a relative date filter.
         * To clear a relative date filter with a quick filter showing, you can call applyRelativeDateFilter()
         * instead using a range that makes sense for the specific field.
         */
        clearFilterAsync(fieldName: string): Promise<string>;
        /** Clears the selection for this worksheet. */
        clearSelectedMarksAsync(): Promise<void>;
        /** Gets the collection of marks that are currently selected. */
        getSelectedMarksAsync(): Promise<Mark[]>;
        /** Selects the marks and returns them. */
        selectMarksAsync(fieldName: string, value: object | object[], updateType: SelectionUpdateType): Promise<void>;
        /**
         * Allows selection based on this syntax for the first parameter:
         * {
         *   "Field1": value,
         *   "Field2": [1, 2, 3]
         * }
         */
        selectMarksAsync(fieldValuesMap: object | Mark[], updateType: SelectionUpdateType): Promise<void>;
    }

    interface getSummaryDataOptions {
        /** Do not use aliases specified in the data source in Tableau. Default is false. */
        ignoreAliases?: boolean | undefined;
        /** Only return data for the currently selected marks. Default is false. */
        ignoreSelection?: boolean | undefined;
        /** The number of rows of data that you want to return. Enter 0 to return all rows. */
        maxRows: number;
    }

    interface getUnderlyingDataOptions {
        /** Do not use aliases specified in the data source in Tableau. Default is false. */
        ignoreAliases?: boolean | undefined;
        /** Only return data for the currently selected marks. Default is false. */
        ignoreSelection?: boolean | undefined;
        /** Return all the columns for the data source. Default is false. */
        ignoreAllColumns?: boolean | undefined;
        /** The number of rows of data that you want to return. Enter 0 to return all rows. */
        maxRows: number;
    }

    class Dashboard extends Sheet {
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
    // #endregion

    // #region Workbook Classes
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
        /** One of the following values: DIMENSION, MEASURE, UNKNOWN */
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
    // #endregion

    // #region Parameter Classes
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
    // #endregion

    // #region Filtering
    interface FilterOptions {
        /**
         * Determines whether the filter will apply in exclude mode or include mode.
         * The default is include, which means that you use the fields as part of a filter.
         * Exclude mode means that you include everything else except the specified fields.
         */
        isExcludeMode: boolean;
    }

    interface RangeFilterOptions {
        /** Minimum value for the range (inclusive). Optional. Leave blank if you want a <= filter. */
        min: number | Date;
        /** Maximum value for the range (inclusive). Optional. Leave blank if you want a >= filter. */
        max: number | Date;
        /** The null values to include */
        nullOption: NullOption;
    }

    interface RelativeDateFilterOptions {
        /** The UTC date from which to filter. */
        anchorDate: Date;
        /** Year, quarter, month, etc. */
        periodType: PeriodType;
        /** LAST, LASTN, NEXT, etc. */
        rangeType: DateRangeType;
        /** The number used when the rangeType is LASTN or NEXTN. */
        rangeN: number;
    }

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

    /** An enumeration that indicates what to do with null values for a given filter or mark selection call. */
    enum NullOption {
        /** Only include null values in the filter. */
        NULL_VALUES = "nullValues",
        /** Only include non-null values in the filter. */
        NON_NULL_VALUES = "nonNullValues",
        /** Include null and non-null values in the filter. */
        ALL_VALUES = "allValues",
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

    enum FilterType {
        /** Categorical filters are used to filter to a set of values within the domain. */
        CATEGORICAL = "categorical",
        /** Quantitative filters are used to filter to a range of values from a continuous domain. */
        QUANTITATIVE = "quantitative",
        /** Hierarchical filters are used to filter to a set of values organized into a hierarchy within the domain. */
        HIERARCHICAL = "hierarchical",
        /** Relative date filters are used to filter a date/time domain to a range of values relative to a fixed point in time. */
        RELATIVE_DATE = "relativedate",
    }

    enum FilterUpdateType {
        /** Adds all values to the filter. Equivalent to checking the (All) value in a quick filter. */
        ALL = "all",
        /** Replaces the current filter values with new ones specified in the call */
        REPLACE = "replace",
        /** Adds the filter values as specified in the call to the current filter values. Equivalent to checking a value in a quick filter. */
        ADD = "add",
        /** Removes the filter values as specified in the call from the current filter values. Equivalent to unchecking a value in a quick filter. */
        REMOVE = "remove",
    }

    enum PeriodType {
        YEARS = "years",
        QUARTERS = "quarters",
        MONTHS = "months",
        WEEKS = "weeks",
        DAYS = "days",
        HOURS = "hours",
        MINUTES = "minutes",
        SECONDS = "seconds",
    }

    enum DateRangeType {
        LAST = "last", /** Refers to the last day, week, month, etc. of the date period. */
        LASTN = "lastn", /** Refers to the last N days, weeks, months, etc. of the date period. */
        NEXT = "next", /** Refers to the next day, week, month, etc. of the date period. */
        NEXTN = "nextn", /** Refers to the next N days, weeks, months, etc. of the date period. */
        CURRENT = "current", /** Refers to the current day, week, month, etc. of the date period. */
        TODATE =
            "todate", /** Refers to everything up to and including the current day, week, month, etc. of the date period. */
    }
    // #endregion

    // #region Marks Selection
    /**
     * A mark represents a single data point on the visualization.
     * It is independent of the type of visualization (bar, line, pie, etc.).
     */
    class Mark {
        /** Creates a new Mark with the specified pairs. */
        constructor(pairs: Pair[]);
        /** Gets a collection of field name/value pairs associated with the mark. */
        getPairs(): Pair[];
    }

    class Pair {
        /** The value formatted according to the locale and the formatting applied to the field. */
        formattedValue: string;
        /** The field name to which the value is applied. */
        fieldName: string;
        /** Contains the raw native value for the field as a JavaScript type, which is one of String, Number, Boolean, or Date. */
        value: string | number | boolean | Date;
        /** Creates a new Pair with the specified field name/value pairing */
        constructor(fieldName: string, value: string | number | boolean | Date);
    }

    enum SelectionUpdateType {
        /** Replaces the current marks values with new ones specified in the call. */
        REPLACE = "replace",
        /** Adds the values as specified in the call to the current selection. Equivalent to control-clicking in desktop. */
        ADD = "add",
        /** Removes the values as specified in the call from the current selection. Equivalent to control-clicking an already selected mark in desktop. */
        REMOVE = "remove",
    }
    // #endregion

    // #region Other
    interface Size {
        width: number;
        height: number;
    }

    interface Point {
        x: number;
        y: number;
    }
    // #endregion
}
