// Type definitions for qlik-visualizationextensions 3.2
// Project: http://help.qlik.com/en-US/sense-developer/3.2/Subsystems/Extensions/Content/extensions-introduction.htm
// Definitions by: Konrad Mattheis <https://github.com/konne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

declare namespace BackendAPI {
    type StateType = "L" | "S" | "O" | "D" | "A" | "X" | "XS" | "XL";
    type SortIndicatorType = "N" | "A" | "D";
    type DimensionType = "D" | "N" | "T";
    type GroupingType = "N" | "H" | "C";
    type FieldAttributesType = "U" | "A" | "I" | "R" | "F" | "M" | "D" | "T" | "TS" | "IV";
    type PatchType = "Add" | "Remove" | "Replace";

    interface ICharRange {
        /**
         * Position of the first search occurrence
         * Integer
         */
        qCharPos: number;

        /**
         * Number of occurrences found
         * Integer
         */
        qCharCount: number;
    }

    interface INxHighlightRanges {
        /**
         * Ranges of highlighted values
         * Array of CharRange
         */
        qRanges: ICharRange[];
    }

    interface INxSimpleValue {
        /**
         * Text related to the attribute expression value.
         * This property is optional. No text is returned if the attribute expression value is a numeric.
         * String
         */
        qText: string;

        /**
         * Numeric value of the attribute expression.
         * This property is set to NaN (Not a Number) if the attribute expression value is not a numeric.
         * Numerical values are not returned as text.
         * Double precision floating point
         */
        qNum: number;
    }

    interface INxAttributeExpressionValues {
        /**
         * List of attribute expressions values.
         * Array of NxSimpleValue
         */
        qValues: INxSimpleValue[];
    }

    interface INxSimpleDimValue {
        /**
         * Text related to the attribute expression value.
         * This property is optional. No text is returned if the attribute expression value is a numeric.
         * String
         */
        qText: string;

        /**
         * Element number.
         * Integer
         */
        qElemNo: number;
    }

    interface INxAttributeDimValues {
        /**
         * List of values.
         * Array of NxSimpleDimValue
         */
        qValues: INxSimpleDimValue[];
    }

    interface INxCell {
        /**
         * Some text.
         * This parameter is optional.
         */
        qText?: string;

        /**
         * A value.
         * This parameter is optional.
         */
        qNum?: number;

        /**
         * Rank number of the value, starting from 0.
         * If the element number is a negative number, it means that the returned value is not an element number.
         * You can get the following negative values:
         *       # -1: the cell is a Total cell. It shows a total.
         *       # -2: the cell is collapsed. Applies to pivot tables.
         *       # -3: the cell belongs to the group Others.
         *       # -4: the cell is empty. Applies to pivot tables.
         */
        qElemNumber: number;

        /**
         * State of the value.
         * The default state for a measure is L.
         * L for Locked
         * S for Selected
         * O for Optional
         * D for Deselected
         * A for Alternative
         * X for eXcluded
         * XS for eXcluded Selected
         * XL for eXcluded Locked
         */
        qState: StateType;

        /**
         * Is set to true, if qText and qNum are empty.
         * This parameter is optional. The default value is false.
         */
        qIsEmpty: boolean;

        /**
         * Is set to true if a total is displayed in the cell.
         * This parameter is optional. The default value is false.
         * Not applicable to list objects.
         */
        qIsTotalCell: boolean;

        /**
         * Is set to true if the cell belongs to the group Others.
         * Dimension values can be set as Others depending on what has been defined in OtherTotalSpecProp.
         * This parameter is optional. The default value is false.
         * Not applicable to list objects.
         */
        qIsOtherCell: boolean;

        /**
         * Frequency of the value.
         * This parameter is optional.
         */
        qFrequency: string;

        /**
         * Search hits.
         * The search hits are highlighted.
         * This parameter is optional.
         */
        qHighlightRanges: INxHighlightRanges;

        /**
         * Attribute expression values.
         */
        qAttrExps: INxAttributeExpressionValues;

        /**
         * Is set to true if the value is Null.
         */
        qIsNull: boolean;

        /**
         * Attribute dimensions values.
         */
        qAttrDims: INxAttributeDimValues;
    }

    interface INxPage {
        /**
         * Position from the left.
         * Corresponds to the first column.
         */
        qLeft: number;

        /**
         * Position from the top.
         * Corresponds to the first row.
         */
        qTop: number;

        /**
         * Number of columns in the page. The indexing of the columns may vary depending on whether
         * the cells are expanded or not (parameter qAlwaysFullyExpanded in HyperCubeDef).
         */
        qWidth: number;

        /**
         * Number of rows or elements in the page. The indexing of the rows may vary depending on
         * whether the cells are expanded or not (parameter qAlwaysFullyExpanded in HyperCubeDef).
         */
        qHeight: number;
    }

    interface INxAttrDimInfo {
        /**
         * Cardinality of the attribute expression.
         *     Integer
         */
        qCardinal: number;

        /**
         * Number of rows.
         *     Size
         */
        qSize: number;

        /**
         * The title for the attribute dimension.
         * String
         */
        qFallbackTitle: string;

        /**
         * The Locked value of the dimension.
         * Boolean
         */
        qLocked: boolean;

        /**
         * Validation error.
         * REF(NxValidationError)
         */
        // ?Type = REF(NxValidationError)?
        qError: INxValidationError;
    }

    interface INxDimensionInfo {
        /**
         * Corresponds to the label of the dimension that is selected.
         * If the label is not defined then the field name is used.
         * String
         */
        qFallbackTitle: string;

        /**
         * Length of the longest value in the field.
         * Integer
         */
        qApprMaxGlyphCount: number;

        /**
         * Number of distinct field values.
         * Integer
         */
        qCardinal: number;

        /**
         * Is set to true if the field is locked.
         * Boolean
         */
        qLocked: boolean;

        /**
         * Sort indicator.
         * This parameter is optional.
         * The default value is no sorting.
         * One of:
         *       # N for no sorting
         *       # A for sorting ascending
         *       # D for sorting descending
         */
        qSortIndicator: SortIndicatorType;

        /**
         * Array of dimension labels.
         * Contains the labels of all dimensions in a hierarchy group
         * (for example the labels of all dimensions in a drill down group).
         * Array of String
         */
        qGroupFallbackTitles: string[];

        /**
         * Index of the dimension that is currently in use.
         * qGroupPos is set to 0 if there are no hierarchical groups (drill-down groups) or cycle groups.
         * Integer
         */
        qGroupPos: number;

        /**
         * Number of values in a particular state.
         * NxStateCounts
         */
        qStateCounts: INxStateCounts;

        /**
         * Gives information on a field. For example, it can return the type of the field.
         * Examples: key, text, ASCII
         * Array of String
         */
        qTags: string[];

        /**
         * This parameter is optional.
         * Gives information on the error.
         * Null or NxValidationError
         */
        qError: INxValidationError;

        /**
         * Binary format of the field.
         * One of:
         *       # D for discrete (String)
         *       # N for numeric (Double)
         *       # T for Time (Timestamp)
         */
        qDimensionType: DimensionType;

        /**
         * If set to true, it inverts the sort criteria in the field.
         * Boolean
         */
        qReverseSort: boolean;

        /**
         * Defines the grouping.
         * One of:
         *       # N for no grouping
         *       # H for drill-down
         *       # C for cyclic
         */
        qGrouping: GroupingType;

        /**
         * If set to true, it means that the field is a semantic.
         * Boolean
         */
        qIsSemantic: boolean;

        /**
         * Format of the field.
         * This parameter is optional.
         * FieldAttributes
         */
        qNumFormat: FieldAttributesType;

        /**
         * This parameter is set to true if qNumFormat is set to U (unknown).
         * The engine guesses the type of the field based on the field's definition.
         * Boolean
         */
        qIsAutoFormat: boolean;

        /**
         * Array of field names.
         * Array of String
         */
        qGroupFieldDefs: string[];

        /**
         * Array of attribute expressions.
         * Array of NxAttrExprInfo
         */
        qAttrExprInfo: INxAttrExprInfo;

        /**
         * Minimum value.
         * Double
         */
        qMin: number;

        /**
         * Maximum value.
         * Double
         */
        qMax: number;

        /**
         * Is continuous axis used.
         * Boolean
         */
        qContinuousAxes: boolean;

        /**
         * Is a cyclic dimension used.
         * Boolean
         */
        qIsCyclic: boolean;

        /**
         * Is derived field is used as a dimension.
         * Boolean
         */
        qDerivedField: boolean;

        /**
         * Array of attribute dimensions.
         * Array of NxAttrDimInfo
         */
        qAttrDimInfo: INxAttrDimInfo;
    }

    interface INxAttrExprInfo {
        /**
         * Minimum value.
         */
        qMin: number;

        /**
         * Maximum value.
         */
        qMax: number;

        /**
         * Is continuous axis used.
         */
        qContinuousAxes: boolean;

        /**
         * Is a cyclic dimension used.
         */
        qIsCyclic: boolean;

        /**
         * Corresponds to the label of the dimension that is selected.
         */
        qFallbackTitle: string;
    }

    interface INxStateCounts {
        /**
         * Number of values in locked state.
         * Integer
         */
        qLocked: number;

        /**
         * Number of values in selected state.
         * Integer
         */
        qSelected: number;

        /**
         * Number of values in optional state.
         * Integer
         */
        qOption: number;

        /**
         * Number of values in deselected state.
         * Integer
         */
        qDeselected: number;

        /**
         * Number of values in alternative state.
         * Integer
         */
        qAlternative: number;

        /**
         * Number of values in excluded state
         * Integer
         */
        qExcluded: number;

        /**
         * Number of values in selected excluded state.
         * Integer
         */
        qSelectedExcluded: number;

        /**
         * Number of values in locked excluded state.
         * Integer
         */
        qLockedExcluded: number;
    }

    interface INxValidationError {
        /**
         * Error code.
         * This parameter is always displayed in case of error.
         * Integer
         */
        qErrorCode: number;

        /**
         * Context related to the error, from the user app domain.
         * It can be the identifier of an object, a field name, a table name.
         * This parameter is optional.
         * String
         */
        qContext: string;

        /**
         * Internal information from the server.
         * This parameter is optional.
         * String
         */
        qExtendedMessage: string;
    }

    interface IFieldAttributes {
        /**
         * Type of the field.
         * Default is U.
         * One of:
         *       # U for UNKNOWN type.
         *       # A for ASCII; Numeric fields values contain only standard ASCII characters.
         *       # I for INTEGER; Numeric fields values are shown as integer numbers.
         *       # R for REAL; Numeric fields values are shown as real numbers.
         *       # F for FIX; Numeric fields values are shown as numbers with a fix number of decimals.
         *       # M for MONEY; Numeric fields values are shown as in the money format.
         *       # D for DATE; Numeric fields values are shown as dates.
         *       # T for TIME; Numeric fields values are shown as times.
         *       # TS TIMESTAMP; Numeric fields values are shown as time stamps.
         *       # IV for INTERVAL; Numeric fields values are shown as intervals.
         */
        qType: FieldAttributesType;

        /**
         * Number of decimals.
         * Default is 10.
         * Integer between 0 and 15.
         */
        qnDec: number;

        /**
         * Defines whether or not a thousands separator must be used.
         * Default is 0.
         * One of: 0 for false | 1 for true
         */
        qUseThou: boolean;

        /**
         * Defines the format pattern that applies to qText.
         * Is used in connection to the type of the field (parameter qType).
         * For more information, see Struct FieldAttributes.
         * Example: YYYY-MM-DD for a date
         */
        qFmt: string;

        /**
         * Defines the decimal separator.
         * Example: .
         */
        qDec: string;

        /**
         * Defines the thousand separator (if any).
         * Is used if qUseThou is set to 1.
         * Example: ,
         */
        qThou: string;

        /**
         * Array
         */
        qSAFEARRAY: any[];
    }

    interface INxMeasureInfo {
        /**
         * Corresponds to the label of the measure. If the label is not defined then the measure name is used.
         * String
         */
        qFallbackTitle: string;

        /**
         * Length of the longest value in the field.
         * Integer
         */
        qApprMaxGlyphCount: number;

        /**
         * Number of distinct field values.
         * Integer
         */
        qCardinal: number;

        /**
         * Sort indicator. This parameter is optional. The default value is no sorting.
         */
        qSortIndicator: SortIndicatorType;

        /**
         * Format of the field. This parameter is optional.
         * One of: N for no sorting, A for sorting ascending, D for sorting descending
         */
        qNumFormat: IFieldAttributes;

        /**
         * This parameter is set to true if qNumFormat is set to U (unknown).
         * The engine guesses the type of the field based on the field's expression.
         */
        qIsAutoFormat: boolean;

        /**
         * Lowest value in the range.
         */
        qMin: number;

        /**
         * Highest value in the range.
         */
        qMax: number;

        /**
         * This parameter is optional. Gives information on the error.
         */
        qError: INxValidationError;

        /**
         * If set to true, it inverts the sort criteria in the field.
         */
        qReverseSort: boolean;

        /**
         * List of attribute expressions.
         */
        qAttrExprInfo: INxAttrExprInfo[];

        /**
         * List of attribute dimensions.
         */
        qAttrDimInfo: INxMeasureInfo[];
    }

    interface IRange {
        /**
         * Lowest value in the range
         * Double
         */
        qMin: number;

        /**
         * Highest value in the range
         * Double
         */
        qMax: number;

        /**
         * If set to true, the range includes the lowest value in the range of
         * selections (Equals to ). [bn(50500)]
         * Example: The range is [1,10]. If qMinInclEq is set to true it means
         * that 1 is included in the range of selections.
         */
        qMinInclEq: boolean;

        /**
         * If set to true, the range includes the highest value in the range of
         * selections (Equals to ). [bn(50500)]
         * Example: The range is [1,10]. If qMinInclEq is set to true it means
         * that 10 is included in the range of selections.
         */
        qMaxInclEq: boolean;
    }

    interface INxPatch {
        /**
         * Operation to perform.
         * One of:
         *       # Add
         *       # Remove
         *       # Replace
         */
        qOp: PatchType;

        /**
         * Path to the property to add, remove or replace.
         * String
         */
        qPath: string;

        /**
         * This parameter is not used in a remove operation. Corresponds to the value of the
         * property to add or to the new value of the property to update.
         * Examples: "false", "2", "\"New title\""
         * String
         */
        qValue: string;
    }

    interface IBackend {
        /**
         * Aborts the result of a search in a list object. Clears the existing search and returns the
         * object to the state it was in prior to the search started.
         */
        abortSearch(): void;

        /**
         * Accepts the result of a search in a list object and the search result is selected in the field.
         * @param {boolean} toggleMode - If true, toggle state for selected values
         */
        acceptSearch(toggleMode: boolean): void;

        /**
         * Updates the properties for this object.
         * @param {array} qPatches - Array of patches. Each path contains:
         *        #qOp: Add/Remove/Replace
         *        #qPath: Path to property
         *        #qValue: The new value in string format. Strings need to be surrounded by \".
         * @param {boolean} qSoftPatch - Set to True if properties should be soft, that is not persisted.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        applyPatches(qPatches: any[], qSoftPatch: boolean): ng.IPromise<any>;

        /**
         * Clears unconfirmed selections for this object.
         */
        clearSelections(): void;

        /**
         * Clears all soft patches that has previously been applied for this object using the
         * applyPatches method.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        clearSoftPatches(): ng.IPromise<any>;

        /**
         * Collapse the left dimensions of a pivot table. Only works for hypercubes with
         * qMode = P which are not always fully expanded.
         * @param {number} qRow - Row index.
         * @param {number} qCol - Column index.
         * @param {boolean} [qAll] - Optional. If set to true, qRow and qCol are ignored and all cells are collapsed.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        collapseLeft(qRow: number, qCol: number, qAll?: boolean): ng.IPromise<any>;

        /**
         * Collapse the top dimensions of a pivot table. Only works for hypercubes with
         * qMode = P which are not always fully expanded.
         * @param {number} qRow - Row index.
         * @param {number} qCol - Column index.
         * @param {boolean} [qAll] - Optional. If set to true, qRow and qCol are ignored and all cells are collapsed.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        collapseTop(qRow: number, qCol: number, qAll?: boolean): ng.IPromise<any>;

        /**
         * Loops through data rows for this object. Only rows that are available client side will be used.
         * @param {function} callback - Function to call for each row.
         * Parameters are row number and row data as an array of NxCell objects.
         * The loop is terminated if the function returns false.
         * @return {NxCell[]} - An array of NxCell.
         */
        eachDataRow(callback: any): INxCell[];

        /**
         * Expands the left dimensions of a pivot table. Only works for hypercubes with
         * qMode = P which are not always fully expanded.
         * @param {number} qRow - Row index.
         * @param {number} qCol - Column index.
         * @param {boolean} [qAll] - Optional. If set to true, qRow and qCol are ignored and all cells are collapsed.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        expandLeft(qRow: number, qCol: number, qAll?: boolean): ng.IPromise<any>;

        /**
         * Expands the top dimensions of a pivot table. Only works for hypercubes with
         * qMode = P which are not always fully expanded.
         * @param {number} qRow - Row index.
         * @param {number} qCol - Column index.
         * @param {boolean} [qAll] - Optional. If set to true, qRow and qCol are ignored and all cells are collapsed.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        expandTop(qRow: number, qCol: number, qAll?: boolean): ng.IPromise<any>;

        /**
         * Geta data from Qlik engine for this object.
         * @param {array} qPages - An array of NxPage objects.
         * @return {Promise} - A promise of qDataPages.
         */
        getData(qPages: INxPage[]): ng.IPromise<any>;

        /**
         * Gets a data row for this object.
         * @param {number} rownum - The row number.
         * @return {NxCell} - A row of NxCell or null if the row is not available client side
         *                    and need to be fetched with getData method.
         */
        getDataRow(rownum: number): INxCell;

        /**
         * Gets qDimensionInfo for this object.
         * @return {NxDimensionInfo[]} - An array of qDimensionInfo objects.
         */
        getDimensionInfos(): INxDimensionInfo[];

        /**
         * Gets qMeasureInfo for this object.
         * @return {NxMeasureInfo} - An array of qMeasureInfo objects.
         */
        getMeasureInfos(): INxMeasureInfo;

        /**
         * Gets pivot data from the Qlik engine for this object. Only works for hypercubes with qMode = P.
         * @param {array} qPages - An array of request page objects.
         * @return {Promise} - A promise of pivot data pages.
         */
        getPivotData(qPages: INxPage[]): ng.IPromise<INxPage[]>;

        /**
         * Get properties for this object.
         * @return {Promise} - A promise of object properties.
         */
        getProperties(): ng.IPromise<any>;

        /**
         * Get reduced data from the Qlik engine for this object. This method is intended for preserving the
         * shape of the data, not for viewing the actual data points.
         * @param {array} qPages - An array of request page objects.
         * @param {number} qZoomFactor - Zoom factor.
         * If set to -1, the Qlik engine decides of the zoom factor.
         * If qReductionMode is D1 or S, the zoom factor is 2n.
         * If the zoom factor is 5, the data are reduced by a factor 32.
         * If qReductionMode is C, the zoom factor defines the number of centroids.
         * @param {string} qReductionMode - Reduction mode.Can be:
         *        # N for no data reduction.
         *        # D1 to reduce a bar chart or line chart.
         *          The profile of the chart is reduced whatever the number of dimensions in the chart.
         *        # S to reduce the resolution of a scatter plot.
         *        # C to reduce the data of a scatter plot chart.
         *        # ST to reduce the data of a stacked pivot table.
         * @return {Promise} - A promise of reduced data pages.
         */
        getReducedData(qPages: INxPage[], qZoomFactor: number, qReductionMode: string): ng.IPromise<any>;

        /**
         * Get total number of data rows for this object.
         * @return {Number} - A number.
         */
        getRowCount(): number;

        /**
         * Get stacked data from the Qlik engine for this object. Only works for hypercubes with qMode = S.
         * @param {array} qPages - An array of request page objects.
         * @param {number} qMaxNbrCells - Maximum number of cells at outer level.
         * @return {Promise} - A promise of stack data pages.
         */
        getStackedData(qPages: INxPage[], qMaxNbrCells: number): ng.IPromise<any>;

        /**
         * Find out if there are unconfirmed selections for this object.
         * @return {boolean} - True if there are unconfirmed selections.
         */
        hasSelections(): boolean;

        /**
         * Save this object.
         * @return {Promise} - A promise. In case of success, it returns "undefined". In case of failure it returns the error.
         */
        save(): ng.IPromise<any>;

        /**
         * Search for a term in a list object. Results in an updated layout, containing only matching records.
         * @param {string} term - Term to search for.
         */
        search(term: string): void;

        /**
         * Select values in this object using ranges.
         * @param {array} qRanges - Array of ranges to select.
         * @param {boolean} qOrMode - If true only one of the measures needs to be in range.
         */
        selectRange(qRanges: IRange[], qOrMode: boolean): void;

        /**
         * Select values in this object with a Qlik engine call which triggers a repaint of the object.
         * @param {number} qDimNo - Dimension number. 0 = first dimension.
         * @param {array} qValues - Array of values (qElemNumber in the matrix from the Qlik engine) to select or deselect.
         * @param {boolean} qToggleMode - If true, values in the field are selected in addition to any previously selected items.
         * If false, values in the field are selected while previously selected items are deselected.
         */
        selectValues(qDimNo: number, qValues: any[], qToggleMode: boolean): void;

        /**
         * Set properties for this object.
         * @param {object} props - The properties to set.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        setProperties(props: any): ng.IPromise<any>;
    }
}

declare namespace RootAPI {
    interface IAppConfig {
        /**
         * Optional Qlik host.
         */
        host?: string;

        /**
         * Port number.
         */
        port: string | number;

        /**
         * Optional. Qlik virtual proxy. "/" if no proxy.
         */
        prefix?: string;

        /**
         * Optional. Use SSL.
         */
        isSecure?: boolean;

        /**
         * Optional. Open app without loading data. Introduced in version 1.1.
         */
        openWithoutData?: boolean;

        /**
         * Optional. Unique identity for the session. If omitted, the session will be shared.
         */
        identity?: string;
    }

    interface IGlobalConfig {
        /**
         * Qlik Sense host
         */
        host: string;

        /**
         * Port number
         */
        port: string;

        /**
         * Qlik Sense virtual proxy. / if no virtual proxy
         */
        prefix: string;

        /**
         * Use SSL
         */
        isSecure: boolean;

        /**
         * Unique identity for the session. If omitted, the session will be shared.
         */
        identity: string;
    }

    interface IRoot {
        /**
         * Calls the Qlik Sense repository.
         * @param {string} path - Path to the Qlik Sense repository.
         * Refer to Qlik Sense repository documentation for the available paths.
         * @param {string} [method] - Optional. HTTP method. Default is GET.
         * @param {string} [body] - Optional. Body of the post.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        callRepository(path: string, method?: string, body?: string): ng.IPromise<any>;

        /** currApp
         * Gets a reference to the current app. Use the currApp method in an extension to get a reference to the app currently displayed.
         * @param {object} [reference] - Optional. Reference to extension object. Introduced in version 1.1.
         * @return {IApp} - An App JavaScript object with app methods.
         */
        currApp(object?: any): AppAPI.IApp;

        /**
         * Gets a list of Qlik Sense apps that you potentially can connect to and registers a callback to receive the data.
         * The getAppList method opens a WebSocket, gets the app list, and then closes the WebSocket.
         * @param {function} callback - Callback method.
         * @param {object} [config] - Optional. Additional configuration parameters:
         * Name | Type | Descr | Name
         * host | String | Optional. Qlik host. | host
         * port | String or integer | Port number. | port
         * prefix | String | Optional. Qlik virtual proxy. "/" if no proxy. | prefix
         * isSecure | Boolean | Optional. Use SSL. | isSecure
         * openWithoutData | Boolean | Optional. Open app without loading data. Introduced in version 1.1. | openWithoutData
         * identity | String | Optional. Unique identity for the session. If omitted, the session will be shared. | identity
         */
        getAppList(callback: any, config?: any): void;

        /**
         * Gets a list of extensions installed for Qlik Sense. The reply contains all extensions,
         * that is widget libraries, visualization extensions and mashups.
         * @param {function} [callback] - Optional. Callback method.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        getExtensionList(callback?: any): ng.IPromise<any>;

        /**
         * Opens a WebSocekt connection to the Qlik engine for global methods.
         * @param {object} [config] - Optional. Parameters:
         * Name | Type | Description
         * host | String | Qlik Sense host
         * port | String | Port number
         * prefix | String | Qlik Sense virtual proxy. / if no virtual proxy
         * isSecure | Boolean | Use SSL
         * identity | String | Unique identity for the session. If omitted, the session will be shared.
         * @return {ANY} - A global JavaScript object with global methods.
         */
        getGlobal(config: any): any;

        /** Opens a Qlik Sense app. You can open multiple apps.
         *      Most other methods are defined on the app. Returns:  App JavaScript object with app methods.
         * @param {string} appId The app id.
         * @param {object} [config] Optional. Additional configuration parameters:
         *     Name   |   Type   | Descr
         *     host   |   String   |   Optional. Qlik host.
         *     port   |   String or Integer   |   Port number.
         *     prefix |   String   |   Optional. Qlik virtual proxy. "/" if no proxy.
         *     isSecure   |   Boolean   |   Optional. Use SSL.
         *     openWithoutData   |   Boolean   |   Optional. Open app without loading data. Introduced in version 1.1.
         *     identity   |   String   |   Optional. Unique identity for the session. If omitted, the session will be shared.
         *     Parameter updated in version 2.2.
         * @return {any} - App JavaScript object with app methods.
         */
        openApp(appId: string, config?: any): any;

        /**
         * Registers an extension for use in this mashup. The extension is not installed on the
         * Qlik Sense server and only available in the session where it is created.
         * As long as a JavaScript module is created in the correct format, it can be sent to
         * the registerExtension function.
         * @param {string} id - Set the ID of the visualization extension.
         * @param {object} impl - Set the extension implementation.
         * @param {object} [metadata] - Optional. Extension meta-data, same format as the QEXT file. Default: {"type":"visualization"}
         */
        registerExtension(id: string, impl: any, metadata?: any): void;

        /**
         * Sends a resize event to all Qlik Sense objects.
         * @param {string} [ID] - Object id. Optional: if no ID resize event will be sent to all objects.
         */
        resize(ID?: string): void;

        /**
         * Sets a specific language for the Qlik Sense session.
         * Language should be defined before the app is opened meaning the setLanguage
         * method should be called before the openApp method is called.
         * @param {string} lang - Language code. Can be:
         *       # German: short: de long: de-DE
         *       # English: short: en long: en-US
         *       # Spanish: short: es long: es-ES
         *       # French: short: fr long: fr-FR
         *       # Italian: short: it long: it-IT
         *       # Japanese: short: ja long: ja-JP
         *       # Korean: (introduced in version 3.0) short: ko long: ko-KR
         *       # Dutch: short: nl long: nl-NL
         *       # Polish: (introduced in version 3.0) short: pl long: pl-PL
         *       # Brazilian Portuguese: short: pt long: pt-BR
         *       # Russian: short: ru long: ru-RU
         *       # Swedish: short: sv long: sv-SE
         *       # Turkish: (introduced in version 3.0) short: tr long: tr-TR
         *       # Simplified Chinese: short: Do not use! long: zh-CN
         *       # Traditional Chinese: (introduced in version 3.0) short: Do not use! long: zh-TW
         */
        setLanguage(lang: string): void;

        /**
         * Registers a callback for error handling. Standard Qlik Sense error
         * handling is used if this method is not called.
         * @param {function} onError - Error handling function
         * @param {function} [onWarning] - Optional. Warning handling function. Introduced in version 2.1.
         */
        setOnError(onError: any, onWarning?: any): void;

        /**
         * Create a QTable object that wraps data in your extension and provides an object oriented interface.
         * @param {object} ext - Extension or angular scope for the extension.
         * @param {string} [path] - Optional. Path to the hypercube. Default: qHyperCube
         * @return {QTable} - A QTable object that holds data and options for the table.
         */
        table(ext: any, path?: string): TableAPI.IQTable;

        navigation: NavigationAPI.INavigation;
    }
}

declare namespace AppAPI {
    interface IApp {
        /**
         * Adds an alternate state in the app. Multiple states within a Qlik Sense
         * app can be created and applied to specific objects within the app.
         * Objects in a given state are not affected by user selection in the other states.
         * @param {string} qStateName - Mandatory. Alternate state name.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        addAlternateState(qStateName: string): ng.IPromise<any>;

        /**
         * Steps back in the list of selections.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        back(): ng.IPromise<any>;

        /**
         * Clears all selections in all fields of the current Qlik Sense app.
         * @param {boolean} [lockedAlso] - Optional. Alternate state name. Default: false Introduced in version 2.1.
         * @param {string} [state] - Optional. Alternate state name. Default: $ Introduced in version 2.1.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        clearAll(lockedAlso?: boolean, state?: string): ng.IPromise<any>;

        /**
         * Closes a Qlik Sense app. Also closes the WebSocket and clears out client side data.
         */
        close(): void;

        /**
         * Defines a hypercube and registers a callback to receive the data.
         * @param {object} qHyperCubeDef - Cube definition.
         * @param {function} [callback] - Optional. Callback method. Parameter will contain a qHyperCube.
         * @return {Promise} - A promise of an object model.
         */
        createCube(qHyperCubeDef: any, callback?: any): ng.IPromise<any>;

        /**
         * Creates a generic object and registers a callback to receive the data. The generic object can contain the following:
         *       # qHyperCubeDef
         *       # qListObjectDef
         *       # qStringExpression
         *       # qValueExpression
         * The callback method will be called whenever the selection state changes
         * in a way that affects the generic object.
         * The parameter will be the evaluated version of the definition.
         * @param {object} [def] - Optional. Generic object definition
         * @param {function} [callback] - Optional. Callback method.
         * @return {Promise} - A promise of an object model.
         */
        createGenericObject(def?: any, callback?: any): ng.IPromise<any>;

        /**
         * Defines a list of field values and registers a callback to receive the data.
         * @param {object} qListObjectDef - List definition.
         * @param {function} [callback] - Optional. Callback method. Parameter will contain a qListObject.
         * @return {Promise} - A promise of an object model.
         */
        createList(qListObjectDef: any, callback?: any): ng.IPromise<any>;

        /**
         * Defines a hypercube for a table and is the entry point to the Table API.
         * It creates a table object that wraps the hypercube.
         * @param {Array.<String|Object>} dimensions - Dimensions to use.
         * Should, for each entry, be a field name or a NxDimension structure.
         * @param {Array.<String|Object>} measures - Measures to use.
         * Should, for each entry, be an expression or a NxMeasure structure.
         * @param {object} [options] - Optional. Options to set.
         * @return {QTable} - A table object of type QTable, which is initially
         *                    empty but that eventually will contain data.
         *                    The table object will be updated when selection state changes.
         */
        createTable(dimensions: string[] | any[], measures: string[] | any[], options?: any): TableAPI.IQTable;

        /**
         * Destroys a Qlik Sense session object created with the createGenericObject
         * method or any of createCube, createList or getList methods.
         * Calling this method removes the object from the Qlik engine,
         * no more updates are sent to the client and all methods on the object are invalid.
         * @param {string} id - Session object id.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        destroySessionObject(id: string): ng.IPromise<any>;

        /**
         * Reloads the data in a Qlik Sense app.
         * @param {string} [qMode] - Optional. Error handling mode:
         *       # 0 = default mode.
         *       # 1 = attempt recovery on all errors.
         *       # 2 = fail on all errors.
         * @param {boolean} [qPartial] - Optional. Set to true for partial reload.
         * @param {boolean} [qDebug] - Optional. Set to true if debug breakpoints are honored. Execution of the script will be in debug mode.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        doReload(qMode?: string, qPartial?: boolean, qDebug?: boolean): ng.IPromise<any>;

        /**
         * Saves a Qlik Sense app, including all objects and data in the data model.
         * @param {string} [qFileName] - Optional. File name of the file to save.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        doSave(qFileName?: string): ng.IPromise<any>;

        /**
         * Gets a field reference with methods that can be used to manipulate the field.
         * @param {string} [field] - Optional. Name of the field.
         * @param {string} [state] - Optional. Alternate state name. Default is $.
         * @return {QField} - A QField object with methods and properties that can be used to manipulate the field.
         */
        field(field?: string, state?: string): FieldAPI.IQField;

        /**
         * Step forward in list of selections.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        forward(): ng.IPromise<any>;

        /**
         * Gets a layout for this Qlik Sense app and registers a callback to receive the data.
         * Returns the dynamic properties (if any) in addition to the fixed properties.
         * @param {function} [callback] - Optional. Callback method.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        getAppLayout(callback?: any): ng.IPromise<any>;

        /**
         * Gets a list of sheets and visualizations and registers a callback to receive the data.
         * @param {string} [field] - Optional. Type of object. One of:
         *        # sheet
         *        # masterobject
         * Default is sheet.
         * @param {function} [callback] - Optional. Callback method.
         */
        getAppObjectList(type?: string, callback?: any): void;

        /**
         * Gets properties for a generic object, the children of the generic object
         * and the bookmarks and/or embedded snapshots of the generic object.
         * @param {string} id - Object id.
         * @return {Promise} - A promise of an object model.
         */
        getFullPropertyTree(id: string): ng.IPromise<any>;

        /**
         * Gets a list of internal Qlik Sense objects and registers a callback to receive the data.
         * @param {string} type - Type of object:
         *       # FieldList
         *       # MeasureList
         *       # DimensionList
         *       # BookmarkList
         *       # SelectionObject
         *       # SnapshotList (Introduced in version 1.1)
         *       # MediaList (Introduced in version 1.1)
         *       # Sheet (Introduced in version 1.1)
         *       # MasterObject (Introduced in version 1.1)
         *       # VariableList (Introduced in version 2.0)
         *       # story (Introduced in version 2.1)
         * @param {function} [callback] - Optional. Registers a callback that is executed every time data is returned.
         * @return {Promise} - A promise of an object model.
         */
        getList(type: string, callback?: any): ng.IPromise<any>;

        /**
         * Retrieves a Qlik Sense object from the Qlik Sense application and inserts
         * it into a HTML element. The object fills the HTML object, so you can size
         * and position the element to determine how large the Qlik Sense object will be.
         * If you supply only one parameter, you get the model without displaying the object.
         * @param {string} id - Object id or 'CurrentSelections' if used for Selections bar.
         * @param {Element | string} [elem] - Optional. HTML element.
         * Since version 1.1 it is also possible to define a string of the HTML element id.
         * @param {object} [options] - Optional.
         * Name | Type | Description
         * noInteraction | Boolean | Set to true if you want to disable interaction,
         *                           including selections, in the visualization.
         *                           Introduced in version 1.1 and updated in version 3.0.
         * noSelections  | Boolean | Set to true if you want to disable selections in the visualization.
         *                           Introduced in version 3.0.
         * @return {Promise} - A promise of an object model.
         */
        getObject(id: string, elem?: any | string, options?: any): ng.IPromise<any>;

        /**
         * Gets properties for a Qlik Sense object.
         * @param {string} id - Object id.
         * @return {Promise} - A promise of an object model.
         */
        getObjectProperties(id: string): ng.IPromise<any>;

        /**
         * Inserts a Qlik Sense snapshot into a HTML element. The snapshot fills
         * the HTML object so you can size and position the element to determine
         * how large the Qlik Sense object will be. If you only supply one parameter,
         * you will just get the model without displaying the object.
         * @param {string} id - Snapshot ID.
         * @param {element | string} [elem] - Optional. HTML element or string with HTML element id.
         * @return {Promise} - A promise of an object model.
         */
        getSnapshot(id: string, elem?: any | string): ng.IPromise<any>;

        /**
         * Locks all selections.
         * @param {string} [state=$] - Optional. Alternate state name.
         * Default: $
         * Introduced in version 2.1.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        lockAll(state?: string): ng.IPromise<any>;

        /**
         * Removes an alternate state in the app.
         * @param {string} qStateName - Alternate state name.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        removeAlternateState(qStateName: string): ng.IPromise<any>;

        /**
         * Searches for one or more terms in the values of a Qlik Sense app.
         * @param {array} qTerms - Terms to search for.
         * @param {object} qPage - Properties:
         * Name | Type | Description
         * qOffset | Number | Position from the top, starting from 0.
         * qCount | Number | Number of search results to return.
         * qMaxNbrFieldMatches | Number | Maximum number of matching values to return per search result.
         * @param {object} qOptions - Properties
         * Name | Type | Description
         * qSearchFields | Array | List of search fields.
         * qContext | | Search context. Can be one of:
         *       # Cleared: In this mode, the first step is to clear any current selections in the app.
         *                  The second step is to search for one or more terms in the values of the app.
         *       # LockedFieldsOnly: In this mode, the search applies only to the values associated
         *                           with the selections made in locked fields, ignoring selections
         *                           in any unlocked field. If no locked fields, the behavior is
         *                           identical to the Cleared context. You cannot make any new selections
         *                           in a locked field. You can get search hits for the associated values
         *                           of a locked field but you cannot get the search hits for the non associative values.
         *       # CurrentSelections:In this mode, the current selections are kept (if any). Search
         *                           for one or more terms in the values of the app. New selections
         *                           are made on top of the current selections. If no selections were
         *                           made before the search, this mode is identical to the Cleared context.
         * | | Default value is LockedFieldsOnly.
         * @param {function} [callback] - Optional. Callback method.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        searchAssociations(qTerms: any[], qPage: any, qOptions: any, callback?: any): ng.IPromise<any>;

        /**
         * Searches for one or more terms in the values of a Qlik Sense app.
         * @param {array} qTerms - Terms to search for.
         * @param {object} qPage - Properties:
         * Name | Type | Description
         * qOffset | Number | Position from the top, starting from 0.
         * qCount | Number | Number of search results to return.
         * qGroupOptions | Array | This parameter is optional. Options of the search groups. If this property is not set, all values are returned.
         * qGroupItemOptions | Array | This parameter is optional. Options of the search group items. If this property is not set, all values are returned.
         * qOptions | Object | Optional. Search options. Properties:
         * Name | Type | Description
         * qSearchFields | Array | List of search fields.
         * qContext | | Search context. Can be one of:
         *       # Cleared: In this mode, the first step is to clear any current selections in the app.
         *                  The second step is to search for one or more terms in the values of the app.
         *       # LockedFieldsOnly: In this mode, the search applies only to the values associated
         *                           with the selections made in locked fields, ignoring selections
         *                           in any unlocked field. If no locked fields, the behavior is
         *                           identical to the Cleared context. You cannot make any new selections
         *                           in a locked field. You can get search hits for the associated values
         *                           of a locked field but you cannot get the search hits for the non associative values.
         *       # CurrentSelections:In this mode, the current selections are kept (if any). Search
         *                           for one or more terms in the values of the app. New selections
         *                           are made on top of the current selections. If no selections were
         *                           made before the search, this mode is identical to the Cleared context.
         * | | Default value is LockedFieldsOnly.
         * @param {function} [callback] - Optional. Callback method.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        searchResults(qTerms: any[], qPage: any, qOptions?: any, callback?: any): ng.IPromise<any>;

        /**
         * Returns suggestions of words from the values entered in the search. Acts as a helper for the searchAssociations method.
         * @param {array} qTerms - Terms to search for.
         * @param {object} [qOptions] - Optional. Search options. Properties:
         * Name | Type | Description
         * qSearchFields | Array | List of search fields.
         * @param {function} [callback] - Optional. Callback method.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        searchSuggest(qTerms: any[], qOptions?: any, callback?: any): ng.IPromise<any>;

        /**
         * Makes a selection based on searchAssociation results.
         * @param {number} qMatchIx - Index to search result.
         * @param {array} qTerms - Values to select.
         * @param {object} qOptions - Values to select.
         * @param {array} [qTerms] - Optional. Parameter sent to the Qlik engine containing information about the search fields and the search context.
         * @param {object} [qSoftLock] - Optional. This parameter was deprecated in version 2.0 and is ignored in newer versions. Use the qOtions.qContext parameter instead.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        selectAssociations(qMatchIx: number, qTerms: any[], qOptions?: any, qSoftLock?: any): ng.IPromise<any>;

        /**
         * Creates a QSelectionState object that encapsulates the selection state. Entry point to the Selection API.
         * @param {string} [state] - Optional. Sets the state. Default is $.
         */
        selectionState(state?: string): SelectionStateAPI.IQSelectionState;

        /**
         * Unlocks all selections that has previously been locked.
         * @param {string} [state] - Optional. Alternate state name. Default: $ Introduced in version 2.1.
         */
        unlockAll(state?: string): ng.IPromise<any>;
    }
}

declare namespace BookmarkAPI {
    interface IBookmark {
        /**
         * Applies a bookmark.
         * @param {string} id - Bookmark id.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        apply(id: string): ng.IPromise<any>;

        /**
         * Creates a bookmark based on the current selection.
         * @param {string} title - Bookmark title.
         * @param {string} description - Bookmark description.
         * @param {string} [sheetId] - Optional. Bookmark sheet id. Introduced in version 2.2.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        create(title: string, description: string, sheetId?: string): ng.IPromise<any>;

        /**
         * Removes a bookmark.
         * @param {string} id - Bookmark id.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        remove(id: string): ng.IPromise<any>;
    }
}

declare namespace FieldAPI {
    interface IQField {
        /**
         * Clears a field selection.
         * @return {Promise} - A promise.
         */
        clear(): ng.IPromise<any>;

        /**
         * Clears all fields except the selected one.
         * @param {boolean} [softlock] - Optional. If true, locked selections can be overridden.
         * @return {Promise} - A promise.
         */
        clearOther(softlock?: boolean): ng.IPromise<any>;

        /**
         * Gets field data. The values are available as QFieldValue in array
         * field.rows and will updated when the selection state changes.
         * Notification OnData will be triggered after each update.
         * @param {boolean} [options] - Optional. Properties:
         * Name | Type | Description
         * rows | Number | Number of rows to fetch. Default: 200.
         * frequencyMode | String | Can be one of:
         *       # V=Absolute
         *       # P=Percent
         *       # R=Relative
         *       # N=No frequency
         *      |        | Default: V.
         * @return {IQField} - The field object.
         */
        getData(options?: boolean): IQField;

        /**
         * Gets more data for your field. Notification OnData is triggered when complete.
         * @return {IQField} - The field object.
         */
        getMoreData(): IQField;

        /**
         * Locks a field selection.
         * @return {Promise} - A promise.
         */
        lock(): ng.IPromise<any>;

        /**
         * Selects field values using indexes.
         * @param {number[]} Array - Array of index values to select
         * @param {boolean} [toggle] - Optional. If true, toggle selected state.
         * @param {boolean} [softlock] - Optional. If true, locked selections can be overridden.
         * @return {Promise} - A promise.
         */
        select(Array: number[], toggle?: boolean, softlock?: boolean): ng.IPromise<any>;

        /**
         * Selects all values in a field.
         * @param {boolean} [softlock] - Optional. If true, locked selections can be overridden.
         * @return {Promise} - A promise.
         */
        selectAll(softlock?: boolean): ng.IPromise<any>;

        /**
         * Selects alternative values in a field.
         * @param {boolean} [softlock] - Optional. If true, locked selections can be overridden.
         * @return {Promise} - A promise.
         */
        selectAlternative(softlock?: boolean): ng.IPromise<any>;

        /**
         * Selects excluded values in a field.
         * @param {boolean} [softlock] - Optional. If true, locked selections can be overridden.
         * @return {Promise} - A promise.
         */
        selectExcluded(softlock?: boolean): ng.IPromise<any>;

        /**
         * Selects matching field values.
         * @param {string} match - Match string.
         * @param {boolean} [softlock] - Optional. If true, locked selections can be overridden.
         * @return {Promise} - A promise.
         */
        selectMatch(match: string, softlock?: boolean): ng.IPromise<any>;

        /**
         * Selects possible values in a field.
         * @param {boolean} [softlock] - Optional. If true, locked selections can be overridden.
         * @return {Promise} - A promise.
         */
        selectPossible(softlock?: boolean): ng.IPromise<any>;

        /**
         * Selects specific values in a field.
         * @param {array} array - Array of qFieldValues to select. A simplified syntax with
         *                         strings or numbers also works since version 1.1.
         * For a numeric field you need to provide the numeric value.
         * @param {boolean} [toggle] - Optional. If true, toggle selected state.
         * @param {boolean} [softlock] - Optional. If true, locked selections can be overridden.
         * @return {Promise} - A promise.
         */
        selectValues(array: IQFieldValue[], toggle?: boolean, softlock?: boolean): ng.IPromise<any>;

        /**
         * Toggles a field selection.
         * @param {string} match - Match string.
         * @param {boolean} [softlock] - Optional. If true, locked selections can be overridden.
         * @return {Promise} - A promise.
         */
        toggleSelect(match: string, softlock?: boolean): ng.IPromise<any>;

        /**
         * Unlocks field selections.
         * @return {Promise} - A promise.
         */
        unlock(): ng.IPromise<any>;

        /**
         * Field values. You need to call getData() method to make this available. Introduced in 2.1.
         */
        rows: IQFieldValue[];

        /**
         * Optional. Number of different values. Only after getData() call. Introduced in 2.1.
         */
        rowCount: number;

        /**
         * Optional. Object with number of values in different states.
         * Only after getData() call. Introduced in 2.1.
         */
        qStateCounts: any;
    }

    interface IQFieldValue {
        /**
         * Cell value formatted as set up in properties.
         */
        qText: string;

        /**
         * Cell value index.
         */
        qElemNumber: number;

        /**
         * Cell state.
         */
        qState: any;

        /**
         * Optional. Cell numeric value, if cell is numeric.
         */
        qNum?: number;

        /**
         * Optional. Frequency, if calculated by the Qlik engine.
         */
        qFrequency?: string;

        /**
         * Selects a field value.
         * @param {boolean} [toggle] - Optional. If true, toggle selected state.
         * @param {boolean} [softlock] - Optional. If true, locked selections can be overridden.
         * @return {Promise} - A promise.
         */
        select(toggle?: boolean, softlock?: boolean): ng.IPromise<any>;
    }
}

declare namespace GlobalAPI {
    interface IGlobal {
        /**
         * Cancels an ongoing reload. The reload of the app is stopped.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        cancelReload(): ng.IPromise<any>;

        /**
         * Gets a list of Qlik Sense apps that you potentially can connect to and
         * registers a callback to receive the data. Calling the getAppList method
         * opens a WebSocket, gets the app list, and then keeps the WebSocket open
         * for you to make other calls as well.
         * @param {Function} callback - Callback method.
         */
        getAppList(callback: any): void;

        /**
         * Gets information (user directory and user id) about the authenticated user.
         * @param {Function} [callback] - Optional. Callback method.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        getAuthenticatedUser(callback?: any): ng.IPromise<any>;

        /**
         * Gets information about progress of doReload and doSave calls.
         * @param {Number} qRequestId - Request id from doReload call or 0.
         * Complete information is returned if the identifier of the request is specified.
         * If qRequestId = 0, less information is returned.
         * @param {Function} [callback] - Optional. Callback method.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        getProgress(qRequestId: number, callback?: any): ng.IPromise<any>;

        /**
         * Gets the product version.
         * @param {Function} [callback] - Optional. Callback method.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        getProductVersion(callback?: any): ng.IPromise<any>;

        /**
         * Gets the Qlik product name.
         * @param {Function} [callback] - Optional. Callback method.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        getQTProduct(callback?: any): ng.IPromise<any>;

        /**
         * Gets the Qlik Sense version number.
         * @param {Function} [callback] - Optional. Callback method.
         * @return {Promise} - A promise.
         */
        getQvVersion(callback?: any): ng.IPromise<any>;

        /**
         * Gets information if the user is working in personal mode
         * (returns true if Qlik Sense Desktop is used) or not
         * (returns false if Qlik Sense Desktop is not used).
         * @param {Function} [callback] - Optional. Callback method.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        isPersonalMode(callback?: any): ng.IPromise<any>;
    }
}

declare namespace NavigationAPI {
    type NavigationModeType = "ANALYSIS" | "EDIT";
    type NavigationErrorType = "NOSUCHSHEET" | "NOCURRENTSHEET" | "NOSUCHSTORY";

    /**
     * The navigation result object.
     */
    interface NavigationResult {
        /**
         * Returns true if successful.
         */
        success: boolean;

        /**
         * The new sheet ID.
         */
        sheetId: string;

        /**
         * The new story ID.
         */
        storyId: string;

        /**
         * The new mode.
         */
        mode: string;

        /**
         * Error code. Can be: NOSUCHSHEET   |   NOCURRENTSHEET   |   NOSUCHSTORY
         */
        error: NavigationErrorType;

        /**
         * Error message, for example 'No current sheet'.
         */
        errorMsg: string;
    }

    /** Navigation API for Qlik Sense. The Navigation API allows you to navigate
     * within a Qlik Sense app, and is meant to be used in visualization extensions
     * and will not work in Mashup scenarios.
     */
    interface INavigation {
        /**
         * Used for analysis mode.
         */
        edit: "edit";

        /**
         * Used for edit mode.
         */
        analysis: "analysis";

        /**
         * Gets the current sheet ID.
         * @return {NavigationResult} - A navigation result object.
         */
        getCurrentSheetId(): NavigationResult;

        /**
         * Gets the current mode.
         * @return {string} - The current mode as a string.
         */
        getMode(): string;

        /**
         * Navigate to a given sheet in the current app.
         * The method will return before the actual navigation takes place.
         * @param {string} sheetId - Set the sheet ID to navigate to.
         * @return {NavigationResult} - A navigation result object.
         */
        gotoSheet(sheetId: string): NavigationResult;

        /**
         * Navigate to a given story in the current app.
         * The method will return before the actual navigation takes place.
         * @param {string} storyId - Set the story ID to navigate to.
         * @return {NavigationResult} - A navigation result object.
         */
        gotoStory(storyId: string): NavigationResult;

        /**
         * Checks if a given mode is allowed.
         * @param {NavigationModeType} mode - Can be one of the strings: edit   |   analysis
         * or one of the constants: qlik.navigation.EDIT   |   qlik.navigation.ANALYSIS
         * @return {boolean} - A Boolean value (true or false).
         */
        isModeAllowed(mode: NavigationModeType): boolean;

        /**
         * Go to the next sheet in the current app.
         * It will do nothing if you do not have sheets in the current context.
         * The method will return before the actual navigation takes place.
         * @return {NavigationResult} - A navigation result object.
         */
        nextSheet(): NavigationResult;

        /**
         * Jumps to the previous sheet in the current app.
         * It will do nothing if you do not have sheets in the current context.
         * The method will return before the actual navigation takes place
         * @return {NavigationResult} - A navigation result object.
         */
        prevSheet(): NavigationResult;

        /**
         * Sets the current working mode of Qlik Sense.
         * @param {string | constant} mode - Can be one of the strings: edit   |   analysis
         * or one of the constants: qlik.navigation.EDIT   |   qlik.navigation.ANALYSIS
         * @return {NavigationResult} - A navigation result object.
         */
        setMode(mode: string): NavigationResult;

        /**
         * Switches the working mode of Qlik Sense.
         * @param {NavigationModeType} mode - Can be one of the strings: edit   |   analysis
         * or one of the constants: qlik.navigation.EDIT   |   qlik.navigation.ANALYSIS
         * @return {NavigationResult} - A navigation result object.
         */
        switchMode(mode: NavigationModeType): NavigationResult;
    }
}

declare namespace SelectionStateAPI {
    interface IQFieldSelections {
        /**
         * Selection state for a field.
         */
        fieldName: string;

        /**
         * Sort index. Starting from 0.
         */
        qSortIndex: number;

        /**
         * Reference to the field.
         */
        field: FieldAPI.IQField;

        /**
         * Defines if the field is locked.
         */
        locked: boolean;

        /**
         * Defines if the field is numeric.
         */
        isNumeric: boolean;

        /**
         * Total number of values in the field.
         */
        totalCount: number;

        /**
         * Number of selected values.
         */
        selectedCount: number;

        /**
         * Number of values that will be listed.
         */
        qSelectionThreshold: number;

        /**
         * Object with number of values in different states.
         */
        qStateCounts: any;

        /**
         * Concatenated string of selected values if number of values are less
         * than the threshold, or if the string is of format "7 of 123".
         */
        qSelected: string;

        /**
         * Array with maximum of qSelectionThreshold values that are selected.
         * For each value, the text plus the selection mode (NORMAL/AND/NOT)
         */
        selectedValues: number[];

        /**
         * Array with maximum of qSelectionThreshold values that are not selected.
         * For each value, the text plus the selection mode (NORMAL/AND/NOT)
         */
        notSelectedValues: number[];
    }

    interface IQSelectionState {
        /**
         * State name. $ for default state.
         */
        stateName: string;

        /**
         * Selections
         */
        selections: IQFieldSelections;

        /**
         * Number of back steps available.
         */
        backCount: number;

        /**
         * Number of forward steps available. OnData notification will be triggered after each update.
         */
        forwardCount: number;

        /**
         * Cleara all selections in this state.
         * @param {boolean} lockedAlso - Use to also clear locked fields.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        clearAll(lockedAlso: boolean): ng.IPromise<any>;

        /**
         * Locks all selections in this state.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        lockAll(): ng.IPromise<any>;

        /**
         * Unlocks all selections in this state.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        unlockAll(): ng.IPromise<any>;
    }
}

declare namespace TableAPI {
    interface IQTable {
        /**
         * Data rows.
         */
        rows: IQRow[];

        /**
         * Header information.
         */
        headers: IQHeader[];

        /**
         * Total information for measures.
         */
        totals: IQMeasureCell[];

        /**
         * Total number of rows for the qHyperCube, including rows not fetched from the server.
         */
        rowCount: number;

        /**
         * Total number of columns for the qHyperCube.
         */
        colCount: number;

        /**
         * Exports data of the underlying hypercube in OOXML or CSV format.
         * @param {object} [options] - Optional. Properties:
         * Name | Type | Description
         * format | String | Data format. Can be one of:
         *       # OOXML: open XML, default
         *       # CSV_C: comma separated CSV
         *       # CSV_T: tab separated CSV
         * filename | String | Name of the exported file after download from browser.
         *                     This parameter is optional and only used in desktop.
         * state | String | Can be:
         *       # A: all values
         *       # P: possible values (default)
         * download | Boolean | Automatically start download of file (with window.open).
         * @param {Function} [callback] - Optional. Callback function returning the link to the exported file.
         */
        exportData(options?: any, callback?: any): void;

        /**
         * Gets the column number for a given field name.
         * @param {string} fld - Field name.
         * @return {number} - Column number, starting with zero. Undefined if no column with that name exists.
         */
        getColByName(fld: string): number;

        /**
         * Gets more data for your qHyperCube.
         */
        getMoreData(): any;
    }

    interface IQHeader {
        /**
         * Column title.
         */
        qFallbackTitle: string;

        /**
         * Can be:
         *       # A: ascending
         *       # D: descending
         */
        qSortIndicator: string;

        /**
         * True indicates if this is the first column for sorting.
         */
        isOrderedBy: boolean;

        /**
         * True indicates if the sort order is reversed for this column.
         */
        qReverseSort: boolean;

        /**
         * Column number.
         */
        col: number;

        /**
         * Optional. Number of different values. Only used for dimensions.
         */
        qCardinal?: number;

        /**
         * Optional. Object with number of values in different states.
         * Only used for dimensions.
         */
        qStateCounts?: any;

        /**
         * Optional. Field object with methods to manipulate the underlying field.
         * Only used for dimensions.
         */
        field?: any;

        /**
         * Optional. Minimum value. Only used for measures.
         */
        qMin?: number;

        /**
         * Optional. Maximum value. Only used for measures.
         */
        qMax?: number;

        /**
         * Optional. Error code for this column.
         * Only if column has an error. Introduced in version 2.2.
         */
        errorCode?: number;

        /**
         * Error message for this column.
         * Only if column has an error. Introduced in version 2.2.
         */
        errorMessage: number;

        /**
         * Sets this column to be the first in the sort order.
         */
        orderBy(): void;

        /**
         * Reverses the sort order for this column.
         */
        reverseOrder(): void;

        /**
         * Select a range in this measure.
         * @param {number} min - Sets the minimum value of the range.
         * @param {number} max - Sets the maximum value of the range.
         * @param {boolean} [inclMin] - Optional. Set to true to include minimum value.
         * @param {boolean} [inclMax] - Optional. Set to true to include maximum value.
         * @return {Promise} - A promise.
         */
        selectRange(min: number, max: number, inclMin?: boolean, inclMax?: boolean): ng.IPromise<any>;
    }

    interface IQRow {
        /**
         * Dimension cells.
         */
        dimensions: IQDimensionCell[];

        /**
         * Measure cells.
         */
        measures: IQMeasureCell[];

        /**
         * All cells, in the order they are defined in the properties.
         */
        cells: any[];
    }

    interface IQDimensionCell extends IQMeasureCell {
        /**
         * Cell value index.
         */
        qElemNumber: number;

        /**
         * Cell state.
         */
        qState: string;

        /**
         * Selects the value in this cell.
         */
        select(): void;
    }

    interface IQMeasureCell {
        /**
         * Cell value formatted as set up in properties.
         */
        qText: string;

        /**
         * Optional. Cell numeric value, if cell is numeric.
         */
        qNum?: number;

        /**
         * Gets the value of this cell as a percentage of the total.
         * Might be more than 100% if this is an average.
         */
        getPercent(): number;

        /**
         * Gets the value of this cell as a percentage of the maximum.
         */
        getPercentOfMax(): number;
    }
}

declare namespace VariableAPI {
    interface IVariable {
        /**
         * Creates a variable.
         * @param {string | object} qProp - Variable name or properties. Properties:
         * Name | Type | Description
         * qInfo.qId | String | Optional. Variable id. If the selected ID is already in use, a new ID is automatically set by the engine.
         * qName | String | Variable name. The name must be unique.
         * qComment | String | Optional. Comment related to the variable.
         * qDefinition | String | Optional. Variable definition.
         * qNumberPresentation | Object | Optional. Defines the format of the value.
         * qIncludeInBookmark | Boolean | Optional. Set to true to update the variable when applying a bookmark. The variable value will be persisted in the bookmark.
         * @return {Promise} - Returns a promise of a variable model.
         */
        create(qProp: string | any): ng.IPromise<any>;

        /**
         * Creates a session variable, that is a temporary variable which is not
         * persisted and needs to be recreated for each new session.
         * @param {object} qProp - Variable properties:
         * Name | Type | Description
         * qInfo.qId | String | Optional. Variable id.
         * qName | String | Variable name.
         * qComment | String | Optional. Comment.
         * qDefinition | String | Optional. Variable definition.
         * qNumberPresentation | Object | Optional.
         * qIncludeInBookmark | Boolean | Optional. Include in bookmark flag.
         * @return {Promise} - A promise of a variable model.
         */
        createSessionVariable(qProp: any): ng.IPromise<any>;

        /**
         * Gets a variable by id.
         * @param {string} qId - Variable id.
         * @return {Promise} - A promise of a variable model.
         */
        get(qId: string): ng.IPromise<any>;

        /**
         * Gets a variable by name.
         * @param {string} qName - Variable name.
         * @return {Promise} - A promise of a variable model.
         */
        getByName(qName: string): ng.IPromise<any>;

        /**
         * Gets variable content.
         * @param {string} name - Variable name.
         * @param {Function} callback - Callback to receive the content.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        getContent(name: string, callback: any): ng.IPromise<any>;

        /**
         * Sets the content of a variable.
         * @param {string} name - Variable name.
         * @param {string} content - Variable content.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        setContent(name: string, content: string): ng.IPromise<any>;

        /**
         * Sets a numeric value as a variable.
         * @param {string} qName - Variable name.
         * @param {Number} qVal - Variable value.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        setNumValue(qName: string, qVal: number): ng.IPromise<any>;

        /**
         * Sets variable string value.
         * @param {string} qName - Variable name.
         * @param {string} qVal - Variable value.
         * @return {Promise} - A promise of a Qlik engine reply.
         */
        setStringValue(qName: string, qVal: string): ng.IPromise<any>;
    }
}

declare namespace VisualizationAPI {
    type VisualizationType = "barchart" | "combochart" | "gauge" | "kpi" | "linechart" | "piechart" | "pivot-table" |
        "scatterplot" | "table" | "treemap" | "extension";

    interface IVisualization {
        /**
         * Create a new visualization on the fly based on a session object
         * and will not be persisted in the app.
         * @param {VisualizationType} type - Visualization type. Can be:
         *       # barchart
         *       # combochart
         *       # gauge
         *       # kpi
         *       # linechart
         *       # piechart
         *       # pivot-table
         *       # scatterplot
         *       # table
         *       # treemap
         *       # extension
         * @param {array} [cols] - Optional. Column definitions, dimensions and measures.
         *       Each entry can be of the following structures:
         *       # String
         *       # NxDimension
         *       # NxMeasure
         *       If the NxDimension or the NxMeasure refer to a library dimension
         *       or a library measure, you also need to add qType : "measure" or "dimension".
         * @param {object} [options] - Optional. Options to set.
         * @return {Promise} - A promise of a QVisualization.
         */
        create(type: VisualizationType, cols?: any[], options?: any): ng.IPromise<any>;

        /**
         * Gets an existing visualization.
         * @param {string} id - Id for an existing visualization.
         * @return {Promise} - A promise of a QVisualization.
         */
        get(id: string): ng.IPromise<any>;
    }

    interface IQVisualization {
        /**
         * Table object for this visualization.
         * Only for visualizations built on a hypercube.
         */
        table: TableAPI.IQTable;

        /**
         * Closes a visualization and releases the session object.
         * @return {Promise} - A promise.
         */
        close(): ng.IPromise<any>;

        /**
         * Tells the visualization it has been resized and should re-paint.
         */
        resize(): void;

        /**
         * Sets options for a visualization.
         * @param {object} options - Options to set (using applyPatches).
         */
        setOptions(options?: any): void;

        /**
         * Shows the visualization in an HTML element.
         * @param {Element | string} [element] - Optional. HTML element or HTML element ID.
         * @param {object} [options] - Optional.
         * Name | Type | Description
         * noInteraction | Boolean | Set to true if you want to disable all interaction, including selections, in the visualization.
         * noSelections | Boolean | Set to true if you want to disable selections in the visualization.
         * | | Parameter introduced in version 3.0.
         */
        show(element?: any | string, options?: any): void;
    }
}

declare namespace ExtensionAPI {
    interface IExtensionModel {}

    interface IExtensionComponent {
        model: IExtensionModel;
    }

    interface IExtensionScope extends ng.IScope {
        component: IExtensionComponent;
    }

    // ExtensionAPI
    type SelectionModeType = "CONFIRM" | "QUICK";

    interface IInitialProperties {
        qHyperCubeDef?: any; // IHyperCubeDef;
        qListObjectDef?: any; // IListObjectDef;
        fixed?: boolean;
        width?: number;
        percent?: boolean;
        selectionMode?: SelectionModeType;
    }

    interface ISupport {
        snapshot?: boolean;
        export?: boolean;
        exportData?: boolean;
    }

    interface IExtension {
        definition?: IDefinition;
        paint?($element: HTMLElement, layout?: any): void;
        initialProperties?: IInitialProperties;
        template?: string;
        controller?: any;
        support?: ISupport;
    }

    interface ISupport {
        snapshot?: boolean; // | () => boolean;
        export?: boolean; // | () => boolean;
        canTakeSnapshot?: boolean;
    }

    interface IInitialProperties {
        // qHyperCubeDef: IVisualizationHyperCubeDef;
        // qListObjectDef: IVis

        // [""]:
    }

    //#region IDefinition
    type ExpressionType = "always" | "optional" | "";

    type func<T> = () => T;
    type valueOrfunc<T> = T | func<T>;

    //#region Controls
    interface ICustomControlOption {
        value: string;
        label: string;
    }

    interface ICustomControl {
        type: string;
        label: string;
        ref: string;
    }

    interface ICustomString extends ICustomControl {
        defaultValue: string;
        expression: ExpressionType;
        show: valueOrfunc<boolean>;
        maxlength: number;
    }

    interface ICustomNumber extends ICustomControl {
        defaultValue: number;
        min: number;
        max: number;
    }

    interface ICustomInteger extends ICustomNumber {
    }

    interface ICustomArray extends ICustomControl {
        itemTitleRef: string;
        addTranslation: string;
        allowAdd: boolean;
        allowMove: boolean;
        allowRemove: boolean;
    }

    interface ICustomButton extends ICustomControl {
        label: string;
        component: "button";
        action: valueOrfunc<void>;
    }

    interface ICustomButtonGroup extends ICustomControl {
        component: "buttongroup";
        defaultValue: string;
        options: valueOrfunc<ICustomControlOption>;
    }

    interface ICustomCheckBox extends ICustomControl {
        component: "checkbox";
        defaultValue: boolean;
    }

    interface ICustomColorPicker extends ICustomControl {
        component: "color-picker";
        defaultValue: number;
    }

    interface ICustomDropDownList extends ICustomControl {
        component: "dropdown";
        defaultValue: string;
        options: valueOrfunc<ICustomControlOption>;
    }

    interface ICustomLink {
        type: string;
        component: "link";
        label: string;
        url: string;
    }

    interface ICustomMedia extends ICustomControl {
        component: "media";
        layoutRef: string;
    }

    interface ICustomRadioButton extends ICustomControl {
        component: "radiobuttons";
        defaultValue: string;
        options: valueOrfunc<ICustomControlOption>;
    }

    interface ICustomSlider extends ICustomControl {
        component: "slider";
        defaultValue: number;
        min: number;
        max: number;
        step: number;
    }

    interface ICustomRangeSlider extends ICustomControl {
        component: "slider";
        defaultValue: number[];
        min: number;
        max: number;
        step: number;
    }

    interface ICustomSwitch {
        component: "switch";
        defaultValue: boolean;
        options: valueOrfunc<ICustomControlOption>;
    }

    interface ICustomText {
        type: "text";
        component: "text";
        label: string;
    }

    interface ICustomTextArea extends ICustomControl {
        component: "textarea";
        rows: number;
        maxlength: number;
        defaultValue: string;
        show: valueOrfunc<boolean>;
    }
    //#endregion

    interface IDefinition {
        type: "items";
        component: "accordion";
        items: IItems;
    }

    interface IItems {
        dimentions?: IDimensions;
        measures?: IMeasures;
        appearance?: IAppearance;
        sorting?: ISorting;
        AddOns?: IAddOns;
        [other: string]: any;
    }

    interface IAddOns {
        uses: "addons";
    }

    interface ISorting {
        uses: "sorting";
    }

    interface IDimensions {
        uses: "dimensions";
        min?: number;
        max?: number;
    }

    interface IAppearance {
        uses: "settings";
        min?: number;
        max?: number;
        items: any;
    }

    // ?Das selbe wie Appearance?
    interface ISettings {
        uses: "settings";
        min?: number;
        max?: number;
    }

    interface IMeasures {
        uses: "measures";
        min?: number;
        max?: number;
    }

    //#endregion
}

declare module "qlik" {
    const e: RootAPI.IRoot;
    export = e;
}

interface IQVAngular {
    /**
     * Register a new directive with the compiler.
     *
     * @param name Name of the directive in camel-case (i.e. ngBind which will match as ng-bind)
     * @param directiveFactory An injectable directive factory function.
     */
    directive(name: string, directiveFactory: ng.Injectable<ng.IDirectiveFactory>): void;
    directive(object: { [directiveName: string]: ng.Injectable<ng.IDirectiveFactory> }): void;

    filter(name: string, filterFactoryFunction: ng.Injectable<Function>): void;
    filter(object: { [name: string]: ng.Injectable<Function> }): void;

    /**
     * Register a service constructor, which will be invoked with new to create
     * the service instance. This is short for registering a service where its
     * provider's $get property is a factory function that returns an instance
     * instantiated by the injector from the service constructor function.
     * @param name The name of the instance.
     * @param serviceConstructor An injectable class (constructor function) that will be instantiated.
     * @return Returns the constructed singleton of the service class/function.
     */
    service<T>(name: string, serviceConstructor: ng.Injectable<Function>): T;
    service<T>(object: { [name: string]: ng.Injectable<Function> }): T;

    // provider(name: string, serviceProviderFactory: ng.IServiceProviderFactory): void;
    // provider(name: string, serviceProviderConstructor: ng.IServiceProviderClass): void;
}

declare module "qvangular" {
    const e: IQVAngular;
    export = e;
}
