export enum ErrorCode {
    BROWSER_NOT_CAPABLE = "browserNotCapable",
    DOWNLOAD_WORKBOOK_NOT_ALLOWED = "downloadWorkbookNotAllowed",
    FILTER_CANNOT_BE_PERFORMED = "filterCannotBePerformed",
    INDEX_OUT_OF_RANGE = "indexOutOfRange",
    INTERNAL_ERROR = "internalError",
    INVALID_AGGREGATION_FIELD_NAME = "invalidAggregationFieldName",
    INVALID_CUSTOM_VIEW_NAME = "invalidCustomViewName",
    INVALID_DATE_PARAMETER = "invalidDateParameter",
    INVALID_FILTER_FIELDNAME = "invalidFilterFieldName",
    INVALID_FILTER_FIELDNAME_OR_VALUE = "invalidFilterFieldNameOrValue",
    INVALID_FILTER_FIELDVALUE = "invalidFilterFieldValue",
    INVALID_PARAMETER = "invalidParameter",
    INVALID_SELECTION_DATE = "invalidSelectionDate",
    INVALID_SELECTION_FIELDNAME = "invalidSelectionFieldname",
    INVALID_SELECTION_VALUE = "invalidSelectionValue",
    INVALID_SIZE = "invalidSize",
    INVALID_SIZE_BEHAVIOR_ON_WORKSHEET = "invalidSizeBehaviorOnWorksheet",
    INVALID_URL = "invalidUrl",
    MISSING_MAX_SIZE = "missingMaxSize",
    MISSING_MIN_SIZE = "missingMinSize",
    MISSING_MINMAX_SIZE = "missingMinMaxSize",
    MISSING_RANGEN_FOR_RELATIVE_DATE_FILTERS = "missingRangeNForRelativeDateFilters",
    NO_URL_FOR_HIDDEN_WORKSHEET = "noUrlForHiddenWorksheet",
    NO_URL_OR_PARENT_ELEMENT_NOT_FOUND = "noUrlOrParentElementNotFound",
    NOT_ACTIVE_SHEET = "notActiveSheet",
    NULL_OR_EMPTY_PARAMETER = "nullOrEmptyParameter",
    SERVER_ERROR = "serverError",
    SHEET_NOT_IN_WORKBOOK = "sheetNotInWorkbook",
    STALE_DATA_REFERENCE = "staleDataReference",
    UNSUPPORTED_EVENT_NAME = "unsupportedEventName",
    VIZ_ALREADY_IN_MANAGER = "vizAlreadyInManager",
}

export enum ToolbarPosition {
    TOP = "top",
    BOTTOM = "bottom",
}

export enum ToolbarButtonName {
    UNDO = "undo",
    REDO = "redo",
}

export enum TableauEventName {
    CUSTOM_VIEW_LOAD = "customviewload",
    CUSTOM_VIEW_REMOVE = "customviewremove",
    CUSTOM_VIEW_SAVE = "customviewsave",
    CUSTOM_VIEW_SET_DEFAULT = "customviewsetdefault",
    FILTER_CHANGE = "filterchange",
    FIRST_INTERACTIVE = "firstinteractive",
    FIRST_VIZ_SIZE_KNOWN = "firstvizsizeknown",
    MARKS_HIGHLIGHT = "markshighlight",
    MARKS_SELECTION = "marksselection",
    PARAMETER_VALUE_CHANGE = "parametervaluechange",
    STORY_POINT_SWITCH = "storypointswitch",
    TAB_SWITCH = "tabswitch",
    TOOLBAR_STATE_CHANGE = "toolbarstatechange",
    URL_ACTION = "urlaction",
    VIZ_RESIZE = "vizresize",
}

export enum SelectionUpdateType {
    REPLACE = "replace",
    ADD = "add",
    REMOVE = "remove",
}

export enum SheetType {
    WORKSHEET = "worksheet",
    DASHBOARD = "dashboard",
    STORY = "story",
}

export enum SheetSizeBehavior {
    ATLEAST = "atleast",
    ATMOST = "atmost",
    AUTOMATIC = "automatic",
    EXACTLY = "exactly",
    RANGE = "range",
}

export enum DashboardObjectType {
    ADDIN = "addIn",
    BLANK = "blank",
    IMAGE = "image",
    LEGEND = "legend",
    PAGE_FILTER = "pageFilter",
    PARAMETER_CONTROL = "parameterControl",
    QUICK_FILTER = "quickFilter",
    TEXT = "text",
    TITLE = "title",
    WEB_PAGE = "webPage",
    WORKSHEET = "worksheet",
}

export enum NullOption {
    ALL_VALUES = "allValues",
    NON_NULL_VALUES = "nonNullValues",
    NULL_VALUES = "nullValues",
}

export enum FilterType {
    CATEGORICAL = "categorical",
    HIERARCHICAL = "hierarchical",
    QUANTITATIVE = "quantitative",
    RELATIVEDATE = "relativedate",
}

export enum FilterUpdateType {
    ADD = "add",
    ALL = "all",
    REMOVE = "remove",
    REPLACE = "replace",
}

export enum PeriodType {
    DAY = "day",
    HOUR = "hour",
    MINUTE = "minute",
    MONTH = "month",
    QUARTER = "quarter",
    SECOND = "second",
    WEEK = "week",
    YEAR = "year",
}

export enum DateRangeType {
    CURR = "curr",
    LAST = "last",
    LASTN = "lastn",
    NEXT = "next",
    NEXTN = "nextn",
    TODATE = "todate",
}

export enum FieldAggregationType {
    ATTR = "ATTR",
    AVG = "AVG",
    COLLECT = "COLLECT",
    COUNT = "COUNT",
    COUNTD = "COUNTD",
    DAY = "DAY",
    END = "END",
    HOUR = "HOUR",
    INOUT = "INOUT",
    KURTOSIS = "KURTOSIS",
    MAX = "MAX",
    MDY = "MDY",
    MEDIAN = "MEDIAN",
    MIN = "MIN",
    MINUTE = "MINUTE",
    MONTH = "MONTH",
    MONTHYEAR = "MONTHYEAR",
    NONE = "NONE",
    PERCENTILE = "PERCENTILE",
    QTR = "QTR",
    QUART1 = "QUART1",
    QUART3 = "QUART3",
    SECOND = "SECOND",
    SKEWNESS = "SKEWNESS",
    STDEV = "STDEV",
    STDEVP = "STDEVP",
    SUM = "SUM",
    SUM_XSQR = "SUM_XSQR",
    TRUNC_DAY = "TRUNC_DAY",
    TRUNC_HOUR = "TRUNC_HOUR",
    TRUNC_MINUTE = "TRUNC_MINUTE",
    TRUNC_MONTH = "TRUNC_MONTH",
    TRUNC_QTR = "TRUNC_QTR",
    TRUNC_SECOND = "TRUNC_SECOND",
    TRUNC_WEEK = "TRUNC_WEEK",
    TRUNC_YEAR = "TRUNC_YEAR",
    USER = "USER",
    VAR = "VAR",
    VARP = "VARP",
    WEEK = "WEEK",
    WEEKDAY = "WEEKDAY",
    YEAR = "YEAR",
}

export enum FieldRoleType {
    DIMENSION = "dimension",
    MEASURE = "measure",
    UNKNOWN = "unknown",
}

export enum ParameterDataType {
    BOOLEAN = "boolean",
    DATE = "date",
    DATETIME = "datetime",
    FLOAT = "float",
    INTEGER = "integer",
    STRING = "string",
}

export enum ParameterAllowableValuesType {
    ALL = "all",
    LIST = "list",
    RANGE = "range",
}

// export type ErrorCode =
//     | 'browserNotCapable'
//     | 'downloadWorkbookNotAllowed'
//     | 'filterCannotBePerformed'
//     | 'indexOutOfRange'
//     | 'internalError'
//     | 'invalidAggregationFieldName'
//     | 'invalidCustomViewName'
//     | 'invalidDateParameter'
//     | 'invalidFilterFieldName'
//     | 'invalidFilterFieldNameOrValue'
//     | 'invalidFilterFieldValue'
//     | 'invalidParameter'
//     | 'invalidSelectionDate'
//     | 'invalidSelectionFieldname'
//     | 'invalidSelectionValue'
//     | 'invalidSize'
//     | 'invalidSizeBehaviorOnWorksheet'
//     | 'invalidUrl'
//     | 'missingMaxSize'
//     | 'missingMinSize'
//     | 'missingMinMaxSize'
//     | 'missingRangeNForRelativeDateFilters'
//     | 'noUrlForHiddenWorksheet'
//     | 'noUrlOrParentElementNotFound'
//     | 'notActiveSheet'
//     | 'nullOrEmptyParameter'
//     | 'serverError'
//     | 'sheetNotInWorkbook'
//     | 'staleDataReference'
//     | 'unsupportedEventName'
//     | 'vizAlreadyInManager';

// export type ToolbarPosition = 'top' | 'bottom';

// export type ToolbarButtonName = 'undo' | 'redo';

// export type TableauEventCustomView = 'customviewload' | 'customviewremove' | 'customviewsave' | 'customviewsetdefault';

// export type TableauEventFilterChange = 'filterchange';

// export type TableauEventMarks = 'markshighlight' | 'marksselection';

// export type TableauEventParameterChange = 'parametervaluechange';

// export type TableauEventStoryPointSwitch = 'storypointswitch';

// export type TableauEventTabSwitch = 'tabswitch';

// export type TableauEventToolbarStateChange = 'toolbarstatechange';

// export type TableauEventUrlAction = 'urlaction';

// export type TableauEventVizResize = 'vizresize';

// export type TableauEventFirstInteractive = 'firstinteractive';

// export type TableauEventFirstVizSizeKnown = 'firstvizsizeknown';

// export type TableauEventName =
//     | 'customviewload'
//     | 'customviewremove'
//     | 'customviewsave'
//     | 'customviewsetdefault'
//     | 'firstinteractive'
//     | 'firstvizsizeknown'
//     | 'markshighlight'
//     | 'marksselection'
//     | 'parametervaluechange'
//     | 'storypointswitch'
//     | 'tabswitch'
//     | 'toolbarstatechange'
//     | 'urlaction'
//     | 'vizresize';

// export type SelectionUpdateType = 'replace' | 'add' | 'remove';

// export type SheetType = 'worksheet' | 'dashboard' | 'story';

// export type SheetSizeBehavior = 'atleast' | 'atmost' | 'automatic' | 'exactly' | 'range';

// export type DashboardObjectType =
//     | 'addIn'
//     | 'blank'
//     | 'image'
//     | 'legend'
//     | 'pageFilter'
//     | 'parameterControl'
//     | 'quickFilter'
//     | 'text'
//     | 'title'
//     | 'webPage'
//     | 'worksheet';

// export type NullOption = 'allValues' | 'nonNullValues' | 'nullValues';

// export type FilterType = 'categorical' | 'hierarchical' | 'quantitative' | 'relativedate';

// export type FilterUpdateType = 'add' | 'all' | 'remove' | 'replace';

// export type PeriodType = 'day' | 'hour' | 'minute' | 'month' | 'quarter' | 'second' | 'week' | 'year';

// export type DateRangeType = 'curr' | 'last' | 'lastn' | 'next' | 'nextn' | 'todate';

// export type FieldAggregationType =
//     | 'ATTR'
//     | 'AVG'
//     | 'COLLECT'
//     | 'COUNT'
//     | 'COUNTD'
//     | 'DAY'
//     | 'END'
//     | 'HOUR'
//     | 'INOUT'
//     | 'KURTOSIS'
//     | 'MAX'
//     | 'MDY'
//     | 'MEDIAN'
//     | 'MIN'
//     | 'MINUTE'
//     | 'MONTH'
//     | 'MONTHYEAR'
//     | 'NONE'
//     | 'PERCENTILE'
//     | 'QTR'
//     | 'QUART1'
//     | 'QUART3'
//     | 'SECOND'
//     | 'SKEWNESS'
//     | 'STDEV'
//     | 'STDEVP'
//     | 'SUM'
//     | 'SUM_XSQR'
//     | 'TRUNC_DAY'
//     | 'TRUNC_HOUR'
//     | 'TRUNC_MINUTE'
//     | 'TRUNC_MONTH'
//     | 'TRUNC_QTR'
//     | 'TRUNC_SECOND'
//     | 'TRUNC_WEEK'
//     | 'TRUNC_YEAR'
//     | 'USER'
//     | 'VAR'
//     | 'VARP'
//     | 'WEEK'
//     | 'WEEKDAY'
//     | 'YEAR';

// export type FieldRoleType = 'dimension' | 'measure' | 'unknown';

// export type ParameterDataType = 'boolean' | 'date' | 'datetime' | 'float' | 'integer' | 'string';

// export type ParameterAllowableValuesType = 'all' | 'list' | 'range';
