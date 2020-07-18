// Type definitions for non-npm package qlik-engineapi 12.67
// Project: http://help.qlik.com/en-US/sense-developer/November2017/Subsystems/EngineAPI/Content/introducing-engine-API.htm
// Definitions by: Konrad Mattheis <https://github.com/konne>
//                 Richard Ison <https://github.com/richardison>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace EngineAPI {
    type CommandType = "JsonRequest" | "GetCustomCaption" | "IsConnected" | "DisableQlikViewSelectButton" | "HaveStarField";
    type LogonType = "LOG_ON_SERVICE_USER" | "LOG_ON_CURRENT_USER";
    type NxGrpType = "N" | "H" | "C" | string;
    type FieldAttributesType = "U" | "A" | "I" | "R" | "F" | "M" | "D" | "T" | "TS" | "IV";
    type FileDataFormatType = "CSV" | "FIX" | "DIF" | "EXCEL_BIFF" | "EXCEL_OOXML" | "HTML" | "XML" | "QVX" | "JSON" | "KML";
    type TableRecordKeyType = "NOT_KEY" | "ANY_KEY" | "PRIMARY_KEY" | "PERFECT_KEY";

    /**
     * One of:
     * - Cleared: In this mode, the first step is to clear any current selections in the app.
     *            The second step is to search for one or more terms in the values of the app.
     * - LockedFieldsOnly: In this mode, the search applies only to the values associated with
     *                     the selections made in locked fields, ignoring selections in any unlocked field.
     *                     If no locked fields, the behavior is identical to the Cleared context.
     *                     You cannot make any new selections in a locked field. You can get search hits for
     *                     the associated values of a locked field but you cannot get the search hits for the non associative values.
     * - CurrentSelections: In this mode, the current selections are kept (if any). Search for one or more terms in the values of the app.
     *                      New selections are made on top of the current selections. If no selections were made before the search,
     *                      this mode is identical to the Cleared context.
     */
    type ContextType = "Cleared" | "LockedFieldsOnly" | "CurrentSelections";
    type SearchObjectsGroupType = "DatasetType" | "GenericObjectsType";
    type SearchObjectsItemType = "0" | "1";
    type NxPatchOpType = "Add" | "Remove" | "Replace";
    type FileType = "CSV_C" | "CSV_T" | "OOXML";
    type ExportStateType = "P" | "A";
    type ReductionModeType = "N" | "D1" | "S" | "C" | "ST";
    type FieldDefExType = "0" | "1" | "2";
    type FolderItemType = "FOLDER" | "FILE" | "OTHER";
    type NxCellStateType = "L" | "S" | "O" | "D" | "A" | "X" | "XS" | "XL";
    type NxCellType = "V" | "E" | "N" | "T" | "P" | "R" | "U";
    type NxSelectionCellType = "D" | "T" | "L";
    type SortIndicatorType = "N" | "A" | "D";
    type OtherModeType = "OTHER_OFF" | "OTHER_COUNTED" | "OTHER_ABS_LIMITED" | "OTHER_ABS_ACC_TARGET" | "OTHER_REL_LIMITED" | "OTHER_REL_ACC_TARGET";
    type OtherLimitModeType = "OTHER_GE_LIMIT" | "OTHER_LE_LIMIT" | "OTHER_GT_LIMIT" | "OTHER_LT_LIMIT";
    type OtherSortModeType = "OTHER_SORT_DEFAULT" | "OTHER_SORT_DESCENDING" | "OTHER_SORT_ASCENDING";
    type TotalModeType = "TOTAL_OFF" | "TOTAL_EXPR";

    type BnfType = "S" | "E";
    /**
     * One of:
     * - N for NOT_META
     * - D for META_DOC_NAME
     * - R for META_RET_TYPE
     */
    type MTType = "N" | "D" | "R";

    /**
     * One of:
     * - CONNECT_DEFAULT: used internally
     * - CONNECT_64
     * - CONNECT_32
     */
    type MachineModeType = "CONNECT_DEFAULT" | "CONNECT_64" | "CONNECT_32";

    /**
     * One of:
     * - IT_SCRIPTLINE; the engine returns the statement that will be executed next.
     * - IT_MSGBOX; the engine returns a script execution error message. This type can only be returned if the parameter qInteractOnError was set to true when calling the ConfigureReload method.
     * - IT_BREAK; the engine breaks and waits for a response on what to do next.
     * - IT_END; the engine has finished to execute all statements in the script.
     */
    type InteractionType = "IT_SCRIPTLINE" | "IT_MSGBOX" | "IT_BREAK" | "IT_END";

    type ErrorDataCodeType = "0" | "1" | "2";

    /**
     * One of:
     * - ALL for FUNC_GROUP_ALL,
     * - U for FUNC_GROUP_UNKNOWN,
     * - NONE for FUNC_GROUP_NONE,
     * - AGGR for FUNC_GROUP_AGGR,
     * - NUM for FUNC_GROUP_NUMERIC,
     * - RNG for FUNC_GROUP_RANGE,
     * - EXP for FUNC_GROUP_EXPONENTIAL_AND_LOGARITHMIC,
     * - TRIG for FUNC_GROUP_TRIGONOMETRIC_AND_HYPERBOLIC,
     * - FIN for FUNC_GROUP_FINANCIAL,
     * - MATH for FUNC_GROUP_MATH_CONSTANT_AND_PARAM_FREE,
     * - COUNT for FUNC_GROUP_COUNTER,
     * - STR for FUNC_GROUP_STRING,
     * - MAPP for FUNC_GROUP_MAPPING,
     * - RCRD for FUNC_GROUP_INTER_RECORD,
     * - CND for FUNC_GROUP_CONDITIONAL,
     * - LOG for FUNC_GROUP_LOGICAL,
     * - NULL for FUNC_GROUP_NULL,
     * - SYS for FUNC_GROUP_SYSTEM,
     * - FILE for FUNC_GROUP_FILE,
     * - TBL for FUNC_GROUP_TABLE,
     * - DATE for FUNC_GROUP_DATE_AND_TIME,
     * - NUMI for FUNC_GROUP_NUMBER_INTERPRET,
     * - FRMT for FUNC_GROUP_FORMATTING,
     * - CLR for FUNC_GROUP_COLOR,
     * - RNK for FUNC_GROUP_RANKING
     * - GEO for FUNC_GROUP_GEO
     * - EXT for FUNC_GROUP_EXTERNAL
     */
    type FunctionGroupType = "ALL" | "U" | "NONE" | "AGGR" | "NUM" | "RNG" | "EXP" | "TRIG" | "FIN" | "MATH" | "COUNT" | "STR" | "MAPP" |
        "RCRD" | "CND" | "LOG" | "NULL" | "SYS" | "FILE" | "TBL" | "DATE" | "NUMI" | "FRMT" | "CLR" | "RNK" | "GEO" | "EXT";

    type DimensionType = "D" | "N" | "T";

    /**
     * One of:
     * - S for DATA_MODE_STRAIGHT; straight table representation
     * - P for DATA_MODE_PIVOT; pivot table representation
     * - K for DATA_MODE_PIVOT_STACK; stacked table representation
     * - T for DATA_MODE_TREE; tree representation
     */
    type NxHypercubeMode = "S" | "P" | "K" | "T";

    /**
     * One of:
     * - NX_FREQUENCY_NONE
     * - NX_FREQUENCY_VALUE
     * - NX_FREQUENCY_PERCENT. The percentage is between 0 and 100.
     * - NX_FREQUENCY_RELATIVE. Same as percent except that the relative value is between 0 and 1.
     */
    type FrequencyModeType = "NX_FREQUENCY_NONE" | "NX_FREQUENCY_VALUE" | "NX_FREQUENCY_PERCENT" | "NX_FREQUENCY_RELATIVE";

    type TypeSortDirection = "1" | "-1" | "0";

    /**
     * Type of the drive. Can be:
     * - REMOVABLE
     * - FIXED
     * - NETWORK
     * - CD_ROM
     * - RAM
     * - UNKNOWN_TYPE
     */
    type DriveType = "REMOVABLE" | "FIXED" | "NETWORK" | "CD_ROM" | "RAM" | "UNKNOWN_TYPE";

    /**
     * One of:
     * - V for NX_DIM_CELL_VALUE. Applies to values in the data matrix.
     * - E for NX_DIM_CELL_EMPTY. Applies to empty cells in the top and left dimensions.
     * - G for NX_DIM_CELL_GENERATED. Applies to generated nodes that are inserted into the returned tree when there is no actual value (qAllValues in NxPageTreeNode set to true).
     * - N for NX_DIM_CELL_NORMAL. Applies to left and top dimensions cells.
     * - T for NX_DIM_CELL_TOTAL. Applies to cells marked with Total.
     * - P for NX_DIM_CELL_PSEUDO. Applies to pseudo dimensions.
     * - R for NX_DIM_CELL_ROOT. Applies to root node.
     * - U for NX_DIM_CELL_NULL. Applies to Null values in the data matrix.
     */
    type NxTreeNodeType = "V" | "E" | "G" | "N" | "T" | "P" | "R" | "U";

    /**
     * NxRange...
     */
    interface INxRange {
        /**
         * Position in the expression of the first character of the field name.
         */
        qCount: number;

        /**
         * Number of characters in the field name.
         */
        qFrom: number;
    }

    /**
     * ExpressionResult...
     */
    interface IExpressionResult {
        qBadFieldNames: INxRange[];
    }

    /**
     * CheckExpressionResult width extend ExpressionResult
     */
    interface ICheckExpressionResult extends IExpressionResult {
        qDangerousFieldNames: INxRange[];
        qErrorMsg: string;
    }

    /**
     * CheckNumberOrExpressionResult width extend ExpressionResult
     */
    interface ICheckNumberOrExpressionResult extends IExpressionResult {
        qErrorMsg: string;
    }

    /**
     * ScriptSyntaxError...
     */
    interface IScriptSyntaxError {
        /**
         * Length of the word where the error is located
         */
        qErrLen: number;

        /**
         * Number of the faulty section
         */
        qTabIx: number;

        /**
         * Line number in the section where the error is located
         */
        qLineInTab: number;

        /**
         * Position of the erroneous text from the beginning of the line
         */
        qColInLine: number;

        /**
         * Position of the erroneous text from the beginning of the script
         */
        qTextPos: number;

        /**
         * The default value is false.
         */
        qSecondaryFailure: boolean;
    }

    /*
     * NxMeta...
     */
    interface INxMeta {
        /**
         * Name.
         * >> This property is optional.
         */
        qName?: string;
    }

    /**
     * NxGetBookmarkOptions.
     */
    interface INxGetBookmarkOptions {
        /**
         * List of object types..
         */
        qTypes: string[];

        /**
         * Set of data.
         */
        qData: any;
    }

    /**
     * NxGetObjectOptions.
     */
    interface INxGetObjectOptions {
        /**
         * List of object types..
         */
        qTypes: string[];

        /**
         * Set to true to include session objects.
         *
         * Default: false
         */
        qIncludeSessionObjects: boolean;

        /**
         * Set of data.
         */
        qData: any;
    }

    /**
     * NxMetaTitleDescription width extend NxMeta
     */
    interface INxMetaTitleDescription extends INxMeta {
        /**
         * Set a title.
         */
        title: string;

        /**
         * Set a description.
         */
        description: string;
    }

    /**
     * NxMetaTitleDescriptionTag width extend NxMetaTitleDescription
     */
    interface INxMetaTitleDescriptionTag extends INxMetaTitleDescription {
        /**
         * Array of String
         */
        tags: string[];
    }

    /**
     * Connection...
     */
    interface IConnection {
        /**
         * Identifier of the connection.
         * Is generated by the engine and is unique.
         */
        qId: string;

        /**
         * Name of the connection.
         * This parameter is mandatory and must be set when creating or modifying a connection.
         */
        qName: string;

        /**
         * One of:
         *
         *   - ODBC CONNECT TO [<provider name>]
         *   - OLEDB CONNECT TO [<provider name>]
         *   - CUSTOM CONNECT TO [<provider name>]
         *   - "<local absolute or relative path,UNC path >"
         *   - "<URL>"
         *
         * Connection string.
         * This parameter is mandatory and must be set when creating or modifying a connection.
         */
        qConnectionString: string;

        /**
         * One of:
         *          - ODBC
         *          - OLEDB
         *          - <Name of the custom connection file>
         *          - folder
         *          - internet
         *
         * Type of the connection.
         * This parameter is mandatory and must be set when creating or modifying a connection.
         * For ODBC, OLEDB and custom connections, the engine checks that the connection type matches the connection string.
         * >> The type is not case sensitive.
         */
        qType: string;

        /**
         * Name of the user who creates the connection.
         * This parameter is optional; it is only used for OLEDB, ODBC and CUSTOM connections.
         * A call to GetConnection method does not return the user name.
         */
        qUserName?: string;

        /**
         * Password of the user who creates the connection.
         * This parameter is optional; it is only used for OLEDB, ODBC and CUSTOM connections.
         * A call to GetConnection method does not return the password.
         */
        qPassword?: string;

        /**
         * Is generated by the engine.
         * Creation date of the connection or last modification date of the connection.
         */
        qModifiedDate: string;

        /**
         * Information about the connection.
         */
        qMeta: INxMeta;

        /**
         * Select which user credentials to use to connect to the source.
         *
         * - LOG_ON_SERVICE_USER: Disables
         * - LOG_ON_CURRENT_USER: Enables
         */
        qLogOn: LogonType;
    }

    /**
     * NxLibraryDimensionDef
     */
    interface INxLibraryDimensionDef {
        /**
         * Information about the grouping.
         */
        qGrouping: NxGrpType;

        /**
         * Array of dimension names.
         */
        qFieldDefs: string[];

        /**
         * Array of dimension labels.
         */
        qFieldLabels: string[];

        /**
         * no docu
         */
        qLabelExpression: string;
    }

    /**
     * GenericProperties
     */
    interface IGenericProperties {
        /**
         * Identifier and type of the object.
         * >> This parameter is mandatory.
         */
        qInfo: INxInfo;

        // ?Dynamic properties?
        [qMetaDef: string]: any;
    }

    /**
     * GenericBookmarkProperties width extend GenericProperties
     */
    interface IGenericBookmarkProperties extends IGenericProperties {
    }

    /**
     * GenericDimensionProperties width extend GenericProperties
     */
    interface IGenericDimensionProperties extends IGenericProperties {
        qDim: INxLibraryDimensionDef;
    }

    /**
     * GenericMeasureProperties width extend GenericProperties
     */
    interface IGenericMeasureProperties extends IGenericProperties {
        qMeasure: INxLibraryMeasureDef;
    }

    /**
     * GenericObjectProperties width extend GenericProperties
     */
    interface IGenericObjectProperties extends IGenericProperties {
        qExtendsId?: string;
    }

    /**
     * GenericVariableProperties width extend GenericProperties
     */
    interface IGenericVariableProperties extends IGenericProperties {
        /**
         * Name of the variable.
         * The name must be unique.
         * >> This parameter is mandatory.
         */
        qName: string;

        /**
         * Comment related to the variable.
         * >> This parameter is optional.
         */
        qComment?: string;

        /**
         * Defines the format of the value.
         * >> This parameter is optional.
         */
        qNumberPresentation?: IFieldAttributes;

        /**
         * Set this property to true to update the variable when applying a bookmark.
         * The variable value will be persisted in the bookmark.
         * The value of a variable can affect the state of the selections.
         * Script variables cannot be persisted in the bookmark.
         * >> The default value is false.
         */
        qIncludeInBookmark: boolean;

        /**
         * Definition of the variable.
         */
        qDefinition: string;
    }

    /**
     * Sets the formatting of a field.
     * The properties of qFieldAttributes and the formatting mechanism are described below.
     */
    interface IFieldAttributes {
        /**
         * Type of the field.
         * One of:
         *
         *    - U for UNKNOWN type (default)
         *    - A for ASCII; Numeric fields values contain only standard ASCII characters.
         *    - I for INTEGER; Numeric fields values are shown as integer numbers.
         *    - R for REAL; Numeric fields values are shown as real numbers.
         *    - F for FIX; Numeric fields values are shown as numbers with a fix number of decimals.
         *    - M for MONEY; Numeric fields values are shown as in the money format.
         *    - D for DATE; Numeric fields values are shown as dates.
         *    - T for TIME; Numeric fields values are shown as times.
         *    - TS TIMESTAMP; Numeric fields values are shown as time stamps.
         *    - IV for INTERVAL; Numeric fields values are shown as intervals.
         *
         */
        qType: FieldAttributesType;

        /**
         * Number of decimals.
         * (Integer between 0 and 15.)
         * default is 10.
         */
        qnDec: number;

        /**
         * Defines whether or not a thousands separator must be used.
         * default is 0 (false) or  1 (true).
         */
        qUseThou: boolean;

        /**
         * Defines the format pattern that applies to qText.
         * Is used in connection to the type of the field (parameter qType).
         * For more information, see Formatting mechanism.
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
         * no / empty docu
         */
        qSAFEARRAY: any[];
    }

    /**
     * NxInfo...
     */
    interface INxInfo {
        /**
         * Identifier of the object.
         * If the chosen identifier is already in use, the engine automatically sets another one.
         * This parameter is optional. If an identifier is not set, the engine automatically sets one.
         */
        qId?: string;

        /**
         * Type of the object.
         * >> This parameter is mandatory.
         */
        qType: string;
    }

    /**
     * DoReloadExParams...
     */
    interface IDoReloadExParams {
        /**
         * Error handling mode
         * One of:
         *    0: for default mode
         *    1: for ABEND; the reload of the script ends if an error occurs.
         *    2: for ignore; the reload of the script continues even if an error is detected in the script.
         * >> This parameter is optional.
         */
        qMode?: number;

        /**
         * Set to true for partial reload
         * >> This parameter is optional.
         * >> The default value is false.
         */
        qPartial?: boolean;

        /**
         * Set to true if debug breakpoints are to be honored.
         * The execution of the script will be in debug mode.
         * >> This parameter is optional.
         * >> The default value is false.
         */
        qDebug?: boolean;
    }

    /**
     * DoReloadExResult...
     */
    interface IDoReloadExResult {
        /**
         * The operation is successful if qSuccess is set to True.
         */
        qSuccess: boolean;

        /**
         * Path to the script log file.
         */
        qScriptLogFile: string;
    }

    /**
     * FieldValue...
     */
    interface IFieldValue {
        /**
         * Text related to the field value
         * This parameter is optional.
         */
        qText?: string;

        /**
         * Is set to true if the value is a numeric.
         * This parameter is optional. Default is false.
         */
        qIsNumeric?: boolean;

        /**
         * Numeric value of the field.
         * This parameter is displayed if qIsNumeric is set to true.
         * This parameter is optional.
         */
        qNumber?: number;
    }

    /**
     * NxMatchingFieldInfo...
     */
    interface INxMatchingFieldInfo {
        /**
         * Name of the field
         */
        qName: string;

        /**
         * List of tags
         */
        qTags: string[];
    }

    /**
     * NxAppLayout ...
     */
    interface INxAppLayout {
        /**
         * Title of the app.
         */
        qTitle: string;

        /**
         * In Qlik Sense Enterprise, this property corresponds to the app identifier (GUID).
         * In Qlik Sense Desktop, this property corresponds to the full path of the app.
         */
        qFileName: string;

        /**
         * Date and time of the last reload of the app in ISO format.
         */
        qLastReloadTime: string;

        /**
         * Is set to true if the app has been updated since the last save.
         */
        qModified: boolean;

        /**
         * Is set to true if a script is defined in the app.
         */
        qHasScript: boolean;

        /**
         * Array of alternate states.
         */
        qStateNames: string[];

        /**
         * Information on publishing and permissions.
         */
        qMeta: INxMeta;

        /**
         * Information about the locale.
         */
        qLocaleInfo: ILocaleInfo;

        /**
         * Is set to true if the app contains data following a script reload.
         */
        qHasData: boolean;

        /**
         * If set to true, it means that the app is read-only.
         */
        qReadOnly: boolean;

        /**
         * If set to true, it means that the app was opened without loading its data.
         */
        qIsOpenedWithoutData: boolean;

        /**
         * App thumbnail.
         */
        qThumbnail: IStaticContentUrl;
    }

    /**
     * NxAppProperties
     */
    interface INxAppProperties {
        /**
         * App title.
         */
        qTitle: string;

        /**
         * Last reload time of the app.
         */
        qLastReloadTime: string;

        /**
         * App thumbnail.
         */
        qThumbnail: IStaticContentUrlDef;

        /**
         * Internal property reserved for app migration.
         * Patch version of the app.
         * Do not update.
         */
        qMigrationHash: string;

        /**
         * Internal property reserved for app migration.
         * The app is saved in this version of the product.
         * Do not update.
         */
        qSavedInProductVersion: string;
    }

    /**
     * AssociationScore...
     */
    interface IAssociationScore {
        /**
         * Pair of fields.
         * <FieldName1> / <FieldName2>
         * Where:
         * <FieldName1> is a field in the table 1 (defined in qTable1)
         * <FieldName2> is a field in the table 2 (defined in qTable2)
         * If the field is a synthetic key, the name of the field is preceded by [Synthetic key]:.
         */
        qFieldPairName: string;

        /**
         * Flag used to interpret calculated scores.
         * One of the following values or sum of values that apply:
         *
         *  0: The cardinal ratio cannot be zero but the symbol score and the row score can be zero.
         * -1: The fields do not have the same type.
         * -2: The number of rows of the field FieldName1 is zero.
         * -4: The number of distinct values of the field FieldName1 is zero.
         * -8: The number of rows of the field FieldName2 is zero.
         * -16: The number of distinct values of the field FieldName2 is zero.
         *
         * Example:
         * The number of rows of the field FieldName1 is zero, and the number of distinct values
         * of the field FieldName2 is zero, then qScoreSummary is -18.
         */
        qScoreSummary: number;

        /**
         * Association information about the field FieldName1 defined in qFieldPairName.
         */
        qField1Scores: IFieldScores;

        /**
         * Association information about the field FieldName2 defined in qFieldPairName.
         */
        qField2Scores: IFieldScores;
    }

    /**
     * FieldScores...
     */
    interface IFieldScores {
        /**
         * Field name.
         * One of the field names defined in qFieldPairName.
         */
        qFieldName: string;

        /**
         * Cardinality of a column/field divided by the number of rows in the table.
         * If the cardinal ratio is 1, it means that the column is a candidate/primary key.
         */
        qCardinalRatio: number;

        /**
         * Number of distinct matches between the two fields defined in qFieldPairName divided
         * by the number of distinct values in the field qFieldName.
         * If 0, it means that there are no common values between the two fields defined in qFieldPairName.
         */
        qSymbolScore: number;

        /**
         * Number of matches between the two fields defined in qFieldPairName divided by the number
         * of values in the field qFieldName.
         * If 0, it means that there are no common values between the two fields defined in qFieldPairName.
         */
        qRowScore: number;
    }

    /**
     * ContentLibraryListItem...
     */
    interface IContentLibraryListItem {
        /**
         * Name of the library.
         */
        qName: string;

        /**
         * Is set to true if the library is specific to the app (not a global content library).
         */
        qAppSpecific: boolean;

        /**
         * Information about publishing and permissions.
         */
        qMeta: INxMeta;
    }

    /**
     * ContentLibraryList...
     */
    interface IContentLibraryList {
        /**
         * Information about the content library.
         */
        qItems: IContentLibraryListItem;
    }

    /**
     * DatabaseInfo...
     */
    interface IDatabaseInfo {
        /**
         * Name of the product accessed by the provider
         */
        qDBMSName: string;

        /**
         * If set to true, it means that the data source contains some databases.
         */
        qDBUsage: boolean;

        /**
         * If set to true, it means that the data source contains some owners.
         */
        qOwnerUsage: boolean;

        /**
         * Character string used after the database name
         * Example with separator ".":
         * FROM LinkedTablesData.dbo.Months
         * Where:
         *       - LinkedTablesData is the database name
         *       - dbo is the owner name
         *       - Months is the table name
         */
        qDBSeparator: string;

        /**
         * Character string used after the owner name
         * Example with separator ".":
         * FROM LinkedTablesData.dbo.Months
         * Where:
         *       - LinkedTablesData is the database name
         *       - dbo is the owner name
         *       - Months is the table name
         */
        qOwnerSeparator: string;

        /**
         *  If set to true, it means that the database is displayed first, before the owners and tables.
         */
        qDBFirst: boolean;

        /**
         * Prefix used with field, database or owner names that contain special characters or keywords.
         */
        qQuotePreffix: string;

        /**
         * Suffix used with field, database or owner names that contain special characters or keywords.
         */
        qQuoteSuffix: string;

        /**
         * List of the special characters
         */
        qSpecialChars: string;

        /**
         * Name of the default database
         */
        qDefaultDatabase: string;

        /**
         * List of the script keywords
         */
        qKeywords: string[];
    }

    /**
     * DatabaseOwner...
     */
    interface IDatabaseOwner {
        /**
         * Name of the owner
         */
        qName: string;
    }

    /**
     * Database...
     */
    interface IDatabase {
        /**
         * Name of the database.
         */
        qName: string;

        /**
         * Is set to true if the database is set by default.
         */
        qIsDefault: boolean;
    }

    /**
     * DataField...
     */
    interface IDataField {
        /**
         * Name of the field.
         *
         */
        qName: string;

        /**
         * Is set to true if the field is a primary key.
         */
        qIsKey: boolean;

        /**
         * Is shown for fixed records.
         * qOriginalFieldName and qName are identical if no field names are used in the file.
         * qOriginalFieldName differs from qName if embedded file names are used in the file.
         */
        qOriginalFieldName: string;
    }

    /**
     * DataRecord...
     */
    interface IDataRecord {
        /**
         * List of values inside the table.
         * The first values (in result/qPreview/0/qValues) correspond to the field names in the table.
         * The following values (from result/qPreview/1/qValues) are the values of the fields in the table.
         */
        qValues: string[];
    }

    /**
     * DataTable...
     */
    interface IDataTable {
        /**
         * Name of the table.
         */
        qName: string;

        /**
         * Type of the table.
         * For examples: Table, View
         */
        qType: string;
    }

    /**
     * FieldDescription...
     */
    interface IFieldDescription {
        /**
         * Internal number of the field.
         */
        qInternalNumber: number;

        /**
         * Name of the field.
         */
        qName: string;

        /**
         * List of table names.
         */
        qSrcTables: string[];

        /**
         * If set to true, it means that the field is a system field.
         * >> The default value is false.
         */
        qIsSystem?: boolean;

        /**
         * If set to true, it means that the field is hidden.
         * >> The default value is false.
         */
        qIsHidden?: boolean;

        /**
         * If set to true, it means that the field is a semantic.
         * >> The default value is false.
         */
        qIsSemantic?: boolean;

        /**
         * If set to true, only distinct field values are shown.
         * >> The default value is false.
         */
        qDistinctOnly?: boolean;

        /**
         * Number of distinct field values.
         */
        qCardinal: number;

        /**
         * Total number of field values.
         */
        qTotalCount: number;

        /**
         * If set to true, it means that the field is locked.
         * >> The default value is false.
         */
        qIsLocked?: boolean;

        /**
         * If set to true, it means that the field has one and only one selection (not 0 and not more than 1).
         * If this property is set to true, the field cannot be cleared anymore and no more selections can be
         * performed in that field.
         * >> The default value is false.
         */
        qAlwaysOneSelected?: boolean;

        /**
         * If set to true a logical AND (instead of a logical OR) is used when making selections in a field.
         * >> The default value is false.
         */
        qAndMode?: boolean;

        /**
         * Is set to true if the value is a numeric.
         * >> The default value is false.
         */
        qIsNumeric?: boolean;

        /**
         * Field comment.
         */
        qComment: string;

        /**
         * Gives information on a field. For example, it can return the type of the field.
         * Examples: key, text, ASCII
         */
        qTags: string[];

        /**
         * If set to true, it means that the field is a field on the fly.
         * >> The default value is false.
         */
        qIsDefinitionOnly?: boolean;
    }

    /**
     * DelimiterInfo...
     */
    interface IDelimiterInfo {
        /**
         * Name of the delimiter.
         * Example:
         * "Tab_DELIMITER"
         */
        qName: string;

        /**
         * Representation of the delimiter value that is used in the script.
         * Example:
         * "'\t'"
         */
        qScriptCode: string;

        /**
         * Delimiter character number used by the engine to determine how to separate the values.
         */
        qNumber: number;

        /**
         * Is set to true if multiple spaces are used to separate the values.
         */
        qIsMultiple: boolean;
    }

    /**
     * FileDataFormat...
     */
    interface IFileDataFormat {
        /**
         * Type of the file.
         */
        qType: FileDataFormatType;

        /**
         * One of:
         *
         * - embedded labels (field names are present in the file)
         * - no labels
         * - explicit labels (for DIFfiles)
         */
        qLabel: string;

        /**
         * One of:
         *
         * - None (no quotes)
         * - MSQ (Modern Style Quoting)
         * - Standard (quotes " " or ' ' can be used, but only if they
         * are the first and last non blank characters of a field value.)
         * This property is used for delimited files.
         */
        qQuote: string;

        /**
         * String that marks the beginning of the comment line.
         * Example: # or //
         * The engine ignores the commented lines during the data load.
         * This property is only used for delimited files.
         */
        qComment: string;

        /**
         * Information about the delimiter.
         * This property is used for delimited files.
         */
        qDelimiter: IDelimiterInfo;

        /**
         * Character set used in the file.
         */
        qCodePage: number;

        /**
         * Size of the header.
         * Example: If the header size is 2, the first two rows in the file are considered as header and not as data.
         * The header can contain the field names.
         */
        qHeaderSize: number;

        /**
         * Record length.
         * Each record (row of data) contains a number of columns with a fixed field size.
         * This property is used for fixed record data files.
         */
        qRecordSize: number;

        /**
         * Number of spaces that one tab character represents in the table file.
         * This property is used for fixed record data files.
         */
        qTabSize: number;

        /**
         * Is set to true, the end-of-file character is not taken into account during reload.
         * This property is used for delimited files and fixed record data files.
         */
        qIgnoreEOF: boolean;

        /**
         * Positions of the field breaks in the table.
         * This property is used for fixed record data files.
         */
        qFixedWidthDelimiters: string;
    }

    /**
     * DataTableEx...
     */
    interface IDataTableEx {
        /**
         * Name of the table.
         */
        qName: string;

        /**
         * List of the fields in the table.
         */
        qFields: IDataField[];

        /**
         * List of format specification items, within brackets.
         * Examples of specification items:
         *
         *    - file type
         *    - embedded labels, no labels
         *    - table is <table name>
         */
        qFormatSpec: string;
    }

    /**
     * FolderItem...
     */
    interface IFolderItem {
        /**
         * Name of the folder item.
         */
        qName: string;

        /**
         * Type of the folder item.
         */
        qType: FolderItemType;
    }

    /**
     * List of of content files (Information about the list of content files)
     */
    interface IStaticContentList {
        qItems: IStaticContentListItem;
    }

    /**
     * StaticContentListItem...
     */
    interface IStaticContentListItem {
        /**
         * Relative path to the content file. The URL is static.
         * In Qlik Sense Enterprise, content files located:
         *
         * - in the /content/<content library name>/ folder are part of a global content library.
         * - in the /appcontent/ folder are part of the app specific library.
         *
         * The content files are never embedded in the qvf file.
         * In Qlik Sense Desktop, content files located:
         *
         * - in the /content/default/ folder are outside the qvf file.
         * - in the /media/ folder are embedded in the qvf file.
         */
        qUrlDef: string;

        /**
         * Relative path to the content file. The URL is static.
         * In Qlik Sense Enterprise, content files located:
         *
         * - in the /content/<content library name>/ folder are part of a global content library.
         * - in the /appcontent/ folder are part of the app specific library.
         *
         * The content files are never embedded in the qvf file.
         * In Qlik Sense Desktop, content files located:
         *
         * - in the /content/default/ folder are outside the qvf file.
         * - in the /media/ folder are embedded in the qvf file.
         */
        qUrl: string;
    }

    /**
     * StaticContentUrl...
     *
     * Note: In addition, this structure can return dynamic properties.
     */
    interface IStaticContentUrl {
        /**
         * Relative path of the thumbnail.
         */
        qUrl: string;
    }

    /**
     * StaticContentUrlDef...
     *
     * Note: In addition, this structure can contain dynamic properties.
     */
    interface IStaticContentUrlDef {
        /**
         * Relative path of the thumbnail.
         */
        qUrl: string;
    }

    /**
     * CalenderStrings...
     */
    interface ICalenderStrings {
        /**
         * List of short day names.
         */
        qDayNames: string[];

        /**
         * List of short month names.
         */
        qMonthNames: string[];

        /**
         * List of long day names.
         */
        qLongDayNames: string[];

        /**
         * List of long month names.
         */
        qLongMonthNames: string[];
    }

    /**
     * LocaleInfo...
     */
    interface ILocaleInfo {
        /**
         * Decimal separator.
         */
        qDecimalSep: string;

        /**
         * Thousand separator.
         */
        qThousandSep: string;

        /**
         * List separator.
         */
        qListSep: string;

        /**
         * Money decimal separator.
         */
        qMoneyDecimalSep: string;

        /**
         * Money thousand separator.
         */
        qMoneyThousandSep: string;

        /**
         * Current year.
         */
        qCurrentYear: number;

        /**
         * Money format.
         * Example: #.##0,00 kr;-#.##0,00 kr
         */
        qMoneyFmt: string;

        /**
         * Time format.
         * Example: hh:mm:ss
         */
        qTimeFmt: string;

        /**
         * Date format.
         * Example: YYYY-MM-DD
         */
        qDateFmt: string;

        /**
         * Time stamp format.
         * Example: YYYY-MM-DD hh:mm:ss[.fff]
         */
        qTimestampFmt: string;

        /**
         * Information about the calendar.
         */
        qCalendarStrings: ICalenderStrings;

        /**
         * First day of the week, starting from 0.
         * According to ISO 8601, Monday is the first day of the week.
         *
         *           0 = Monday
         *           1 = Tuesday
         *           ..
         *           6 = Sunday
         *
         * If this property has not been set in a script, the returned value comes from the Windows operating system.
         */
        qFirstWeekDay: boolean;

        /**
         * Is set to true if broken weeks are allowed in a year.
         * According to ISO 8601, no broken weeks should be allowed.
         * This property is not shown if set to false.
         * If qBrokenWeeks is set to true, qReferenceDay is irrelevant.
         * If this property has not been set in a script, the returned value comes from the Windows operating system.
         */
        qBrokenWeeks: number;

        /**
         * Day in the year that is always in week 1.
         * According to ISO 8601, January 4th should always be part of the first week of the year (qReferenceDay=4).
         * Recommended values are in the range 1 and 7.
         * If this property has not been set in a script, the returned value comes from the Windows operating system.
         * This property is not relevant if there are broken weeks in the year.
         */
        qReferenceDay: number;

        /**
         * First month of the year, starting from 1.
         * According to ISO 8601, Januaryis the first month of the year.
         *
         *       1  = January
         *       2  = February
         *       12 = January
         *
         * If this property has not been set in a script, the returned value comes from the Windows operating system.
         */
        qFirstMonthOfYear: number;

        /**
         * Locale name (following language tagging convention RFC 4646):
         *
         * <language>-<REGION>
         * Where
         * language is a lowercase ISO 639 language code
         * REGION specifies an uppercase ISO 3166 country code.
         * If this property has not been set in a script, the returned value comes from the Windows operating system.
         */
        qCollation: string;
    }

    /**
     * MediaListItem...
     */
    interface IMediaListItem {
        /**
         * Relative path to the media file.
         * The URL is static.
         * Media files located:
         *
         * - in the /content/default/ folder are outside the qvf file.
         * - in the /media/ folder are embedded in the qvf file.
         */
        qUrlDef: string;

        /**
         * Relative path to the media file.
         * Media files located:
         *
         * - in the /content/default/ folder are outside the qvf file.
         * - in the /media/ folder are embedded in the qvf file.
         */
        qUrl: string;
    }

    /**
     * Lists the media files. Is the layout for MediaListDef.
     *
     * Note: This struct is deprecated.
     */
    interface IMediaList {
        /**
         * Information about the list of media files.
         * In Qlik Sense Desktop, the media files are retrieved from:
         *
         * %userprofile%\Documents\Qlik\Sense\Content\Default
         * In Qlik Sense Enterprise, the media files are retrieved from:
         *
         * <installation_directory>\Qlik\Sense\Repository\Content\Default
         * The default installation directory is ProgramData.
         */
        qItems: IMediaListItem[];
    }

    /**
     * EditorBreakpoint...
     */
    interface IEditorBreakpoint {
        /**
         * Name of the breakpoint.
         */
        qbufferName: string;

        /**
         * Line number in the script where the breakpoint is set.
         */
        qlineIx: number;

        /**
         * If set to true then the breakpoint is enabled (in use).
         */
        qEnabled: boolean;
    }

    /**
     * TableRow...
     */
    interface ITableRow {
        /**
         * Array of field values [{qText, qIsNumeric, qNumber},..]
         */
        vqValue: IFieldValue[];
    }

    /**
     * Size...
     */
    interface ISize {
        /**
         * Number of pixels on the x axis.
         */
        qcx: number;

        /**
         * Number of pixels on the y axis.
         */
        qcy: number;
    }

    /**
     * DerivedFieldsInTableData...
     */
    interface IDerivedFieldsInTableData {
        /**
         * Name of the derived definition.
         */
        qDefinitionName: string;

        /**
         * List of tags.
         */
        qTags: string[];

        /**
         * Is set to true is the derived field is in use.
         */
        qActive: boolean;
    }

    /**
     * FieldInTableData...
     */
    interface IFieldInTableData {
        /**
         * Name of the field.
         */
        qName: string;

        /**
         * Is shown for fixed records.
         * qOriginalFieldName and qName are identical if no field names are used in the file.
         * qOriginalFieldName differs from qName if embedded file names are used in the file.
         */
        qOriginalFields: string[];

        /**
         * ...
         */
        qPresent: boolean;

        /**
         * This property is set to true if the field contains some Null values.
         */
        qHasNull: boolean;

        /**
         * ...
         */
        qHasWild: boolean;

        /**
         * This property is set to true if the field contains some duplicate values.
         */
        qHasDuplicates: boolean;

        /**
         * This property is set to true if the field contains a synthetic key.
         */
        qIsSynthetic: boolean;

        /**
         * Number of records that have values (i.e. not NULL) in the field as compared to the total number of records in the table.
         */
        qInformationDensity: number;

        /**
         * Number of values that are non Null.
         */
        qnNonNulls: number;

        /**
         * Number of rows in the field
         */
        qnRows: number;

        /**
         * Number of distinct values in the field (in the current table) as
         * compared to the total number of distinct values of this field (in all tables).
         */
        qSubsetRatio: number;

        /**
         * Number of distinct values in the field.
         */
        qnTotalDistinctValues: number;

        /**
         * ...
         */
        qnPresentDistinctValues: number;

        /**
         * Tells if the field is a key field.
         */
        qKeyType: TableRecordKeyType;

        /**
         * Comment related to the field.
         */
        qComment: string;

        /**
         * List of tags related to the field.
         */
        qTags: string[];

        /**
         * List of the derived fields.
         */
        qDerivedFields: IDerivedFieldsInTableData;
    }

    /**
     * Point...
     */
    interface IPoint {
        /**
         * x-coordinate in pixels.
         * The origin is the top left of the screen.
         */
        qx: number;

        /**
         * y-coordinate in pixels.
         * The origin is the top left of the screen.
         */
        qy: number;
    }

    /**
     * TableRecord...
     */
    interface ITableRecord {
        /**
         * Name of the table.
         */
        qName: string;

        /**
         * This property is set to true if the table is loose.
         */
        qLoose: boolean;

        /**
         * Number of rows in the table.
         */
        qNoOfRows: number;

        /**
         * Information about the fields in the table.
         */
        qFields: IFieldInTableData[];

        /**
         * Information about the position of the table.
         */
        qPos: IPoint;

        /**
         * Comment related to the table.
         */
        qComment: string;

        /**
         * If set to true, Direct Discovery is used.
         * Direct Discovery fields are not loaded into memory and remain in the external database.
         */
        qIsDirectDiscovery: boolean;

        /**
         * This property is set to true if the table contains a synthetic key.
         */
        qIsSynthetic: boolean;
    }

    /**
     * SourceKeyRecord...
     */
    interface ISourceKeyRecord {
        /**
         * Name of the key field.
         */
        qKeyFields: string[];

        /**
         * Table the key belongs to.
         */
        qTables: string[];
    }

    /**
     * TextMacro...
     */
    interface ITextMacro {
        /**
         * Name of the variable.
         */
        qTag: string;

        /**
         * Order in which the variable was referenced during the script execution.
         * The same number sequence is used for both qRefSeqNo and qSetSeqNo.
         */
        qRefSeqNo: number;

        /**
         * Order in which the variable was updated during the script execution.
         * The same number sequence is used for both qRefSeqNo and qSetSeqNo.
         */
        qSetSeqNo: number;

        /**
         * Variable value.
         */
        qDisplayString: string;

        /**
         * Is set to true if the variable is a system variable.
         */
        qIsSystem: boolean;

        /**
         * Is set to true if the variable is a reserved variable.
         */
        qIsReserved: boolean;
    }

    /**
     * Rect...
     */
    interface IRect {
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
         * Number of columns in the page. The indexing of the columns may vary depending on whether the cells are
         * expanded or not (parameter qAlwaysFullyExpanded in HyperCubeDef).
         */
        qWidth: number;

        /**
         * Number of rows or elements in the page. The indexing of the rows may vary depending on whether the cells are
         * expanded or not (parameter qAlwaysFullyExpanded in HyperCubeDef).
         */
        qHeight: number;
    }

    /**
     * TableViewTableWinSaveInfo...
     */
    interface ITableViewTableWinSaveInfo {
        /**
         * Information about the position of the table.
         */
        qPos: IRect;

        /**
         * Table name.
         */
        qCaption: string;
    }

    /**
     * TableViewBroomPointSaveInfo...
     */
    interface ITableViewBroomPointSaveInfo {
        /**
         * Information about the position of the broom point.
         */
        qPos: IPoint;

        /**
         * Name of the table.
         */
        qTable: string;

        /**
         * List of fields in the table.
         */
        qFields: string[];
    }

    /**
     * TableViewConnectionPointSaveInfo...
     */
    interface ITableViewConnectionPointSaveInfo {
        /**
         * Information about the position of the connection point.
         */
        qPos: IPoint;

        /**
         * List of the fields in the table.
         */
        qFields: string[];
    }

    /**
     * TableViewSaveInfo...
     */
    interface ITableViewSaveInfo {
        /**
         * List of the tables in the database model viewer.
         */
        qTables: ITableViewTableWinSaveInfo[];

        /**
         * List of the broom points in the database model viewer.
         * Not used in Qlik Sense.
         */
        qBroomPoints: ITableViewBroomPointSaveInfo[];

        /**
         * List of connection points in the database model viewer.
         * Not used in Qlik Sense.
         */
        qConnectionPoints: ITableViewConnectionPointSaveInfo[];

        /**
         * Zoom factor in the database model viewer.
         * The default value is 1.0.
         */
        qZoomFactor: number;
    }

    /**
     * TableViewCtlSaveInfo...
     */
    interface ITableViewCtlSaveInfo {
        /**
         * Internal view mode.
         */
        qInternalView: ITableViewSaveInfo;

        /**
         * Source view mode.
         */
        qSourceView: ITableViewSaveInfo;
    }

    /**
     * TableViewDlgSaveInfo...
     */
    interface ITableViewDlgSaveInfo {
        /**
         * Information about the position of the dialog window.
         * Not used in Qlik Sense.
         */
        qPos: IRect;

        /**
         * Set of data for internal and source view modes.
         */
        qCtlInfo: ITableViewCtlSaveInfo;

        /**
         * View mode to display when opening Qlik Sense data model viewer.
         * One of:
         *   0 for internal view mode
         *   1 for source view mode
         */
        qMode: number;
    }

    /**
     * SearchCombinationOptions...
     */
    interface ISearchCombinationOptions {
        /**
         * List of the search fields.
         * If empty, the search is performed in all fields of the app.
         */
        qSearchFields: string[];

        /**
         * Search context.
         * The default value is LockedFieldsOnly.
         * One of:
         *
         * - Cleared: In this mode, the first step is to clear any current selections in the app.
         *   The second step is to search for one or more terms in the values of the app.
         *
         * - LockedFieldsOnly: In this mode, the search applies only to the values associated with
         *   the selections made in locked fields, ignoring selections in any unlocked field. If no locked fields,
         *   the behavior is identical to the Cleared context. You cannot make any new selections in a locked field.
         *   You can get search hits for the associated values of a locked field but you cannot get the search hits
         *   for the non associative values.
         *
         * - CurrentSelections: In this mode, the current selections are kept (if any). Search for one or more terms
         *   in the values of the app. New selections are made on top of the current selections. If no selections were
         *   made before the search, this mode is identical to the Cleared context.
         */
        qContext: ContextType;

        /**
         * Encoding used to compute qRanges of type SearchCharRange.
         * Possible values: Utf8 (default), Utf16
         */
        qCharEncoding: "Utf8" | "Utf16";

        /**
         * For SearchSuggest method, this array is empty.
         * For SearchResults method, this array is empty,
         * or contains qNum and/or qElemNum.
         * It allows the user to request details in the outputted SearchGroupItemMatch.
         * For more information, see SearchGroupItemMatch
         */
        qAttributes?: string[];
    }

    /**
     * SearchGroupOptions...
     */
    interface ISearchGroupOptions {
        /**
         * Type of the group. Can be:
         * - GenericObjectType: the type of the search group item is a generic object.
         *   Groups have this type when you are calling SearchObjects.
         * - DatasetType: type of the search group item is a dataset association.
         *   Groups have this type when you are calling SearchResults.
         */
        qGroupType: any;

        /**
         * Position starting from 0.
         * >> The default value is 0.
         */
        qOffset: number;

        /**
         * Maximum number of items per group (in qItems[ ]).
         * The default value is -1;
         * all values are returned.
         */
        qCount: number;
    }

    /**
     * SearchGroupItemOptions...
     */
    interface ISearchGroupItemOptions {
        /**
         * Type of the group item. Can be
         *
         * - GenericObject: the type of the search group item is a generic object.
         *   Group items have this type when you are calling SearchObjects.
         *
         * - Field: the type of the search group item is a field.
         *   Group items have this type when you are calling SearchResults.
         */
        qGroupItemType: IGenericObject;

        /**
         * Position starting from 0.
         * The default value is 0.
         */
        qOffset: number;

        /**
         * Maximum number of matches per item (in qItemMatches[ ]).
         * The default value is -1: all values are returned.
         */
        qCount: number;
    }

    /**
     * SearchPage...
     */
    interface ISearchPage {
        /**
         * Position from the top, starting from 0.
         * If the offset is set to 0, the first search result to be returned is at position 0.
         */
        qOffset: number;

        /**
         * Number of search groups to return (in qSearchGroupArray).
         */
        qCount: number;

        /**
         * Maximum number of matching values to return per search result.
         * The default value is -1; all values are returned.
         * This property is to be used with the SearchAssociations method.
         */
        qMaxNbrFieldMatches: number;

        /**
         * Options of the search groups.
         * If this property is not set, all values are returned.
         * This property is to be used with the SearchResults method or the SearchObjects method.
         */
        qGroupOptions: ISearchGroupOptions[];

        /**
         * Options of the search group items.
         * If this property is not set, all values are returned.
         * This property is to be used with the SearchResults method or the SearchObjects method.
         */
        qGroupItemOptions: ISearchGroupItemOptions[];
    }

    /**
     * SearchFieldDictionary...
     */
    interface ISearchFieldDictionary {
        /**
         * Position of the field in the list of fields, starting from 0.
         * The list of fields is defined in qResults/qFieldNames and contains the search associations.
         */
        qField: number;

        /**
         * List of the matching values.
         * The maximum number of values in this list is set by qMaxNbrFieldMatches.
         */
        qResult: ISearchTermResult[];
    }

    /**
     * SearchCharRange...
     */
    interface ISearchCharRange {
        /**
         * Starting position of the match in the search result, starting from 0.
         */
        qCharPos: number;

        /**
         * Length of the match in the search result.
         */
        qCharCount: number;

        /**
         * Position of the term in the list of search terms, starting from 0.
         */
        qTerm: number;
    }

    /**
     * SearchTermResult...
     */
    interface ISearchTermResult {
        /**
         * Text of the associated value.
         */
        qText: string;

        /**
         * Element number of the associated value.
         */
        qElemNumber: number;

        /**
         * List of ranges.
         * For example, if the user searches the term read and the associative value is Reading,
         * then the corresponding range would be Read in Reading.
         */
        qRanges: ISearchCharRange[];
    }

    /**
     * SearchMatchCombinations...
     */
    interface ISearchMatchCombinations {
        /**
         * Array of search combinations.
         */
        qSearchMatchCombinations: ISerachMatchCombination[];
    }

    /**
     * SerachMatchCombination...
     */
    interface ISerachMatchCombination {
        /**
         * Index of the search result, starting from 0.
         */
        qId: number;

        /**
         * Information about the search matches.
         */
        qFieldMatches: ISerachFieldMatch[];
    }

    /**
     * SerachFieldMatch...
     */
    interface ISerachFieldMatch {
        /**
         * Position of the field in the list of fields, starting from 0.
         * The list of fields is defined in qResults/qFieldNames and contains the search associations.
         */
        qField: number;

        /**
         * Positions of the matching values in the search results.
         * The maximum number of values in this list is defined by qMaxNbrFieldMatches.
         */
        qValues: number[];

        /**
         * Positions of the search terms, starting from 0.
         */
        qTerms: number[];

        /**
         * Number of search hits in the field.
         * The number of values in qValues and the value of qNoOfMatches are equal if qMaxNbrFieldMatches is -1.
         */
        qNoOfMatches: number;
    }

    /**
     * SearchAssociationResult...
     */
    interface ISearchAssociationResult {
        /**
         * List of the fields that contains search associations.
         */
        qFieldNames: string[];

        /**
         * List of the search terms.
         */
        qSearchTerms: string[];

        /**
         * Information about the fields containing search hits.
         */
        qFieldDictionaries: ISearchFieldDictionary[];

        /**
         * List of search results.
         * The maximum number of search results in this list is set by qPage/qCount.
         */
        qSearchTermsMatched: ISearchMatchCombinations[];

        /**
         * Total number of search results.
         * This number is not limited by qPage/qCount.
         */
        qTotalSearchResults: number;
    }

    /**
     * SearchObjectOptions...
     */
    interface ISearchObjectOptions {
        /**
         * This array is either empty or contains qProperty.
         */
        qAttributes: string[];

        /* add new member  */
        /**
         * Encoding used to compute qRanges of type SearchCharRange.
         * Possible values:
         * - Utf8 (default)
         * - Utf16
         *
         * Note: Only affects the computation of the ranges. It does not impact the encoding of the text.
         */
        qCharEncoding: string;
    }

    /**
     * SearchAttribute...
     */
    interface ISearchAttribute {
        /**
         * String corresponding to
         * SearchObjectOptions.qAttributes
         * It will be qProperty for SearchObjectOptions.
         */
        qKey: string;

        /**
         * String corresponding to qKey for the current SearchGroupItemMatch.
         * For example, if the match is Make by Price found in the title of a generic object, qValue will be qMetaDef/title.
         */
        qValue: string;
    }

    /**
     * SearchGroupItemMatch...
     */
    interface ISearchGroupItemMatch {
        /**
         * Search match value.
         * Value of the search group item.
         * If the match is found in a field, it corresponds to the value of the field.
         * If the match is found in a generic object property, it corresponds to the property value.
         */
        qText: string;

        /**
         * Property of the search group item.
         * For example, if the user requests SearchObjects with SearchObjectOptions.qAttributes = [],
         * then the outputted qAttributes will be empty.
         *
         * Otherwise, if SearchObjectOptions.qAttributes = [qProperty],
         * SearchGroupItemMatch.qAttributes = [qProperty, qMetaDef/title]
         * if the match has been found in the title of the item.
         *
         * For dimension values, the returned qProperty will be *.
         */
        qAttributes: ISearchAttribute[];

        /**
         * List of ranges.
         * For example, if the search terms are Price and Make, and the search group item value is Make by Price vs Mileage,
         * then there are two ranges: one for Price and one for Make.
         */
        qRanges: ISearchCharRange[];
    }

    /**
     * SearchGroupItem...
     */
    interface ISearchGroupItem {
        /**
         * Type of the group item.
         */
        qItemType: SearchObjectsItemType;

        /**
         * Total number of distinct matches in the search group item.
         */
        qTotalNumberOfMatches: number;

        /**
         * Identifier of the item.
         * It corresponds to:
         *
         * - The name of the field, if the type of the search group is data set.
         * - The id of the generic object if the type of the search group is generic object.
         */
        qIdentifier: string;

        /**
         * List of matches in the search group item.
         * The group item matches are numbered
         * from
         * the value of SearchGroupItemOptions.qOffset
         * to
         * the value of SearchGroupItemOptions.qOffset + SearchGroupItemOptions.qCount.
         */
        qItemMatches: ISearchGroupItemMatch[];

        /**
         * Indexes of the search terms that are included in the group item.
         * These search terms are related to the list of terms defined in SearchResult.qSearchTerms.
         */
        qSearchTermsMatched: number[];
    }

    /**
     * SearchGroup...
     */
    interface ISearchGroup {
        /**
         * Identifier of the search group.
         */
        qId: number;

        /**
         * Type of the search group.
         * One of:
         *
         * -  1 for DatasetType: the type of the group is a data set.
         *      This group contains search matches that are related to fields in the app.
         * -  2 for GenericObjectsType: the type of the group is a generic object.
         *      This group contains search matches that are related to generic objects in the app.
         */
        qGroupType: SearchObjectsGroupType;

        /**
         * Indexes of the search terms that are included in the group.
         * These search terms are related to the list of terms defined in SearchResult.qSearchTerms.
         */
        qSearchTermsMatched: number[];

        /**
         * Total number of distinct items in the search group.
         */
        qTotalNumberOfItems: number;

        /**
         * List of items in the search group.
         * The group items are numbered
         * from
         * the value of SearchGroupOptions.qOffset
         * to
         * the value of SearchGroupOptions.qOffset + SearchGroupOptions.qCount
         */
        qItems: ISearchGroupItem[];
    }

    /**
     * SearchResult...
     */
    interface ISearchResult {
        /**
         * List of the search terms.
         */
        qSearchTerms: string[];

        /**
         * Total number of groups.
         */
        qTotalNumberOfGroups: number;

        /**
         * List of search groups.
         * The groups are numbered
         * from
         * the value of SearchPage.qOffset
         * to
         * the value of SearchPage.qOffset + SearchPage.qCount.
         */
        qSearchGroupArray: ISearchGroup;
    }

    /**
     * SearchSuggestItem...
     */
    interface ISearchSuggestItem {
        /**
         * Value of the suggestion.
         */
        qValue: string;

        /**
         * Index of the suggestion value.
         * The indexing starts from 0 and from the left.
         */
        qTerm: number;
    }

    /**
     * SearchSuggestionResult...
     */
    interface ISearchSuggestionResult {
        /**
         * List of suggestions.
         */
        qSuggestions: ISearchSuggestItem[];

        /**
         * List of field names that contain search hits.
         */
        qFieldNames: string[];
    }

    /**
     * This class describes all the methods that apply at app level.
     * The handle member in the JSON request for all methods listed in this section is the handle of the app.
     */
    interface IApp extends enigmaJS.IGeneratedAPI {
        global: IGlobal;

        /**
         * Aborts any selection mode in an app. For more information about selection mode!
         * @param qAccept - Set this parameter to true to accept the selections before exiting the selection mode.
         * @returns - A promise of a Qlik engine reply.
         */
        abortModal(qAccept: boolean): Promise<void>;

        /**
         * You can create multiple states within a Qlik Sense app and apply these states to specific objects within the app.
         * Objects in a given state are not affected by user selections in the other states.
         * @param qStateName - Name of the alternate state. >> This parameter is mandatory.
         * @returns - A promise of a Qlik engine reply.
         */
        addAlternateState(qStateName: string): Promise<void>;

        /**
         * Adds a field on the fly. The expression of a field on the fly is persisted but not its values.
         * @param qName - Name of the field.
         * @param qExpr - Expression value. It is not possible to use all aggregation functions.
         * For example, you cannot add a field on the fly with an expression that uses the Sum or Count aggregation functions.
         * @returns - true or false
         */
        addFieldFromExpression(qName: string, qExpr: string): Promise<boolean>;

        /**
         * Applies a bookmark.
         * @param qId - Identifier of the bookmark.
         * @returns - true or false
         */
        applyBookmark(qId: string): Promise<boolean>;

        /**
         * Returns the number of entries on the Back stack..
         * @returns - "qReturn": <Number of entries in the back stack>
         */
        backCount(): Promise<number>;

        /**
         * Loads the last logical operation (if any).
         * @returns"
         */
        back(): Promise<void>;

        /**
         * Checks if a given expression is valid.
         *
         * Note: The expression is correct if the parameters qErrorMsg, qBadFieldNames and qDangerousFieldNames are empty.
         * @param qExpr - Expression to check..
         * @param qLabels - (Array of String) List of labels. This parameter is optional.
         * @returns - A promise of a Qlik engine reply.
         */
        checkExpression(qExpr: string, qLabels?: string[]): Promise<ICheckExpressionResult>;

        /**
         * Checks if:
         *
         * - a given expression is valid
         * - a number is correct according to the locale.
         *
         * Note: The expression is correct if the parameters qErrorMsg and qBadFieldNames are empty.
         * @param qExpr - Expression to check.
         * @returns - A promise of a Qlik engine reply.
         */
        checkNumberOrExpression(qExpr: string): Promise<ICheckNumberOrExpressionResult>;

        /**
         * Checks the syntax of a script.
         * If there are errors, the engine returns the following properties in the response:
         *
         * - qErrLen: (Integer) Length of the word where the error is located
         * - qTabIx: (Integer) Number of the faulty section
         * - qLineInTab: (Integer) Line number in the section where the error is located
         * - qColInLine: (Integer) Position of the erroneous text from the beginning of the line
         * - qTextPos: (Integer) Position of the erroneous text from the beginning of the script.
         * - qSecondaryFailure: (Boolean) The default value is false.
         *
         * Note: The first area is the primary error area, the second area is the secondary error area.
         * The second area is optional and is shown only if qSecondaryFailure is set to true.
         * The second area ends when the next statement in the script begins.
         */
        checkScriptSyntax(): Promise<IScriptSyntaxError[]>;

        /**
         * Clears all selections in all fields of the current app.
         * @param qLockedAlso - This parameter is optional. Default is false. Selections on locked fields are not cleared.
         *                                Set this parameter to true to clear all selections, including the locked fields.
         * @param qStateName - Name of the alternate state. If an alternate state is defined in qStateName, only the selections
         *                              related to this alternate state are cleared. This parameter is optional.
         *                              Default state is current selections.
         * @returns - A promise of a Qlik engine reply.
         */
        clearAll(qLockedAlso: boolean, qStateName?: string): Promise<void>;

        /**
         * Clears entirely the undo and redo buffer.
         * @returns - A promise of a Qlik engine reply.
         */
        clearUndoBuffer(): Promise<void>;

        /**
         * Clones a bookmark.
         *
         * @param qId - Identifier of the object to clone
         * @returns - A promise of a Qlik engine reply.
         */
        cloneBookmark(qId: string): Promise<string>;

        /**
         * Clones a dimension.
         *
         * Note: The identifier is set by the engine.
         * @param qId - Identifier of the object to clone
         * @returns - A promise of a Qlik engine reply.
         */
        cloneDimension(qId: string): Promise<string>;

        /**
         * Clones a measure.
         *
         * Note: The identifier is set by the engine.
         * @param qId - Identifier of the object to clone
         * @returns - A promise of a Qlik engine reply.
         */
        cloneMeasure(qId: string): Promise<string>;

        /**
         * Clones any visualizations, sheets and stories. The clone method works for both app objects and child objects.
         * When you clone an object that contains children, the children are cloned as well.
         *
         * Note: The identifier is set by the engine.
         * @param qId - Identifier of the object to clone
         * @returns - A promise of a Qlik engine reply.
         */
        cloneObject(qId: string): Promise<string>;

        /**
         * Commits the draft of an object that was previously created by invoking the CreateDraft method.
         * Committing a draft replaces the corresponding published object.
         *
         * Note: The identifier is set by the engine.
         * @param qId - Identifier of the draft to commit.
         * @returns - A promise of a Qlik engine reply.
         */
        commitDraft(qId: string): Promise<void>;

        /**
         * Creates a bookmark.
         * @param qProp - Information about the object. >> This parameter is mandatory.
         * @returns - A promise of a Qlik engine reply.
         */
        createBookmark(qProp: IGenericBookmarkProperties): Promise<IGenericBookmark>;

        /**
         * Creates a connection. A connection indicates from which data source, the data should be taken.
         * @param qConnection - Information about the connection. >> This parameter is mandatory.
         * @returns - returns a ConnectionId
         */
        createConnection(qConnection: IConnection): Promise<string>;

        /**
         * Creates a master dimension.
         * A master dimension is stored in the library of an app and can be used in many objects.
         * Several generic objects can contain the same dimension.
         * @param qProp - Information about the properties. >> This parameter is mandatory.
         * @returns - returns a GenericDimension object
         */
        createDimension(qProp: IGenericDimensionProperties): Promise<IGenericDimension>;

        /**
         * Creates a draft of an object.
         * This method can be used to create a draft of a sheet or a story that is published.
         * This is a way to continue working on a sheet or a story that is published.
         * Replace the published object by the content of the draft by invoking the CommitDraft method.
         *
         * Note: The identifier is set by the engine.
         * @param qId - Identifier of the object to create a draft from.
         * @returns - returns a DraftId
         */
        createDraft(qId: string): Promise<string>;

        /**
         * Creates a master measure.
         * A master measure is stored in the library of an app and can be used in many objects.
         * Several generic objects can contain the same measure.
         * @param gProp - Information about the properties >> This parameter is mandatory.
         * @returns - returns a GenericMeasure
         */
        createMeasure(qProp: IGenericMeasureProperties): Promise<IGenericMeasure>;

        /**
         * Creates a generic object at app level.
         * It is possible to create a generic object that is linked to another object.
         * A linked object is an object that points to a linking object.
         * The linking object is defined in the properties of the linked object (in qExtendsId).
         * The linked object has the same properties as the linking object.
         * Notre: The linking object cannot be a transient object.
         * @param gProp - Information about the properties >> This parameter is mandatory.
         * @returns - returns a GenericObject
         */
        createObject(qProp: IGenericObjectProperties): Promise<IGenericObject>;

        /**
         * Creates a transient object. For example, you can use a transient object to create an app overview or a story overview.
         * It is possible to create a transient object that is linked to another object.
         * A linked object is an object that points to a linking object.
         * The linking object is defined in the properties of the linked object (in qExtendsId).
         * The linked object has the same properties as the linking object.
         * @param gProp - Information about the properties >> This parameter is mandatory.
         * @returns - returns a GenericObject
         */
        createSessionObject(qProp: IGenericObjectProperties): Promise<IGenericObject>;

        /**
         * Creates a transient variable.
         * @param gProp - Name of the variable. Variable names are case sensitive.
         * >> This parameter is mandatory.
         * @returns - returns a GenericVariable
         */
        createSessionVariable(qProp: IGenericVariableProperties): Promise<IGenericVariable>;
        /**
         * Creates a variable.
         *
         * Note: This method is deprecated (not recommended to use). Use CreateVariableEx method instead.
         * @param qName - Name of the variable. Variable names are case sensitive. >> This parameter is mandatory.
         * @returns - returns a Boolean
         */
        createVariable(qName: string): Promise<boolean>;

        /**
         * Creates a variable.
         *
         * Note: This method is deprecated (not recommended to use). Use CreateVariableEx method instead.
         * @param qProp - Name of the variable. Variable names are case sensitive and must be unique.
         *                                             >> This parameter is mandatory.
         * @returns - returns a NxInfo. Identifier and type of the object. >> This parameter is mandatory.
         */
        createVariableEx(qProp: IGenericVariableProperties): Promise<INxInfo>;

        /**
         * Deletes a connection.
         * The AttachedFiles connection can only be removed by the administrator of the system.
         *
         * Note: In Qlik Sense Enterprise, there is an additional file connection named AttachedFiles.
         * @param qConnectionId - Identifier of the connection to remove. >> This parameter is mandatory.
         * @returns - A promise of a Qlik engine reply.
         */
        deleteConnection(qConnectionId: string): Promise<void>;

        /**
         * Removes a bookmark.
         *
         * Note: The operation is successful if qSuccess is set to true.
         * @param qId - Identifier of the bookmark
         * @returns - A promise of  Boolean
         */
        destroyBookmark(qId: string): Promise<boolean>;

        /**
         * Removes a dimension.
         *
         * Note: The operation is successful if qSuccess is set to true.
         * @param qId - Identifier of the dimension to remove. >> This parameter is mandatory.
         * @returns - A promise of  Boolean
         */
        destroyDimension(qId: string): Promise<boolean>;

        /**
         * Removes a dimension.
         *
         * Note: The operation is successful if qSuccess is set to true.
         * @param qId - Identifier of the draft object to remove. >> This parameter is mandatory.
         * @param qSourceId - Identifier of the source object (the object from which a draft was created).
         * @returns - A promise of  Boolean
         */
        destroyDraft(qId: string, qSourceId: string): Promise<boolean>;

        /**
         * Removes a generic measure.
         *
         * Note: The operation is successful if qSuccess is set to true.
         * @param qId - Identifier of the measure to remove. >> This parameter is mandatory.
         * @returns - A promise of  Boolean
         */
        destroyMeasure(qId: string): Promise<boolean>;

        /**
         * Removes an app object.
         *
         * Note: The operation is successful if qSuccess is set to true.
         * @param qId - Identifier of the object to remove. >> This parameter is mandatory.
         * @returns - A promise of  Boolean
         */
        destroyObject(qId: string): Promise<boolean>;

        /**
         * Removes a transient object.
         *
         * Note: The operation is successful if qSuccess is set to true.
         * @param qId - Identifier of the object to remove. >> This parameter is mandatory.
         * @returns - A promise of Boolean
         */
        destroySessionObject(qId: string): Promise<boolean>;

        /**
         * Removes a transient variable.
         *
         * Note: The operation is successful if qSuccess is set to true.
         * @param qId - Identifier of the object to remove. >> This parameter is mandatory.
         * @returns - A promise of Boolean
         */
        destroySessionVariable(qId: string): Promise<boolean>;

        /**
         * Removes a variable.
         *
         * Note: The operation is successful if qSuccess is set to true.
         * Script-defined variables cannot be removed using the DestroyVariableById method or the DestroyVariableByName method.
         * @param qId - Identifier of the variable.
         * @returns - A promise of Boolean
         */
        destroyVariableById(qId: string): Promise<boolean>;

        /**
         * Removes a variable.
         *
         * Note: The operation is successful if qSuccess is set to true.
         * Script-defined variables cannot be removed using the DestroyVariableById method or the DestroyVariableByName method.
         * @param qName - Name of the variable..
         * @returns - A promise of Boolean
         */
        destroyVariableByName(qName: string): Promise<boolean>;

        /**
         * Reloads the script that is set in an app.
         *
         * Note: The operation is successful if qSuccess is set to true.
         * @param qMode - Error handling mode.
         *
         * 0: for default mode
         * 1: for ABEND; the reload of the script ends if an error occurs
         * 2: for ignore; the reload of the script continues even if an error is detected in the script.
         *
         * This parameter is optional.
         * @param qPartial - Set to true for partial reload. This parameter is optional.
         * The default value is false.
         * @param qDebug - Set to true if debug breakpoints are to be honored.
         * The execution of the script will be in debug mode.
         * This parameter is optional. The default value is false.
         * @returns - A promise of Boolean
         */
        doReload(qMode?: number, qPartial?: boolean, qDebug?: boolean): Promise<boolean>;

        /**
         * Reloads the script that is set in an app and returns the path to the script log file.
         *
         * Note: A log file is created per reload.
         * @param qParams - This parameter is optional.
         * @returns - If the data load has successfully finished, no matter how the indexing behaves, true is returned.
         * This happens even if there is a timeout, a memory limit is reached or any other error occurs during the indexing.
         */
        doReloadEx(qParams?: IDoReloadExParams): Promise<IDoReloadExResult>;

        /**
         * Saves an app. All objects and data in the data model are saved.
         * Script-defined variables cannot be removed using the DestroyVariableById method or the DestroyVariableByName method.
         * @param qFileName - Name of the file to save. This parameter is optional.
         * @returns - A promise of a Qlik engine reply.
         */
        doSave(qFileName?: string): Promise<void>;

        /**
         * Evaluates an expression as a string.
         * Script-defined variables cannot be removed using the DestroyVariableById method or the DestroyVariableByName method.
         * @param qExpression - Expression to evaluate.
         * @returns - return a expression evaluated as a string
         */
        evaluate(qExpression: string): Promise<string>;

        /**
         * Evaluates an expression as a dual.
         * Script-defined variables cannot be removed using the DestroyVariableById method or the DestroyVariableByName method.
         * @param qExpression - Expression to evaluate.
         * @returns - return a Promise with a FieldValue
         */
        evaluateEx(qExpression: string): Promise<IFieldValue>;

        /**
         * Export an Qlik QVF with a reduced datamodel
         * @param qOptions - qBookmarkId - bookmark to export
         *                   qExpires - download expires in [s]
         * @returns - return a Promise with the qDownloadInfo
         */
        exportReducedData(qOptions?: { qBookmarkId?: string, qExpires?: number}): Promise<{ qDownloadInfo: any }>;

        /**
         * Retrieves any fields that belong to the same archipelago as the specified field and
         * that match at least one of the specified tags.
         * Tags set by Qlik Sense are prefixed by the $ sign.
         * @param qFieldName - Name of the field. This method looks for fields that
         * belong to the same archipelago as this specified field.
         * @param qTags - List of tags. This method looks for fields that match at least one of the tags in this list.
         * @returns - A promise of FieldValue.
         */
        findMatchingFields(qFieldName: string, qTags: string[]): Promise<INxMatchingFieldInfo[]>;

        /**
         * Loads the next logical operation (if any).
         * @returns - A promise of a Qlik engine reply.
         */
        forward(): Promise<void>;

        /**
         * Returns the number of entries on the Forward stack.
         * @returns - A promise and Number of entries in the forward stack
         */
        forwardCount(): Promise<number>;

        /**
         * Returns the identifier and the type of any generic object in the app.
         * Script-defined variables cannot be removed using the DestroyVariableById method or the DestroyVariableByName method.
         * @param qInfos - (Array of NxInfo) Information about all generic objects in the app.
         * @returns - return a Promise Array of INxInfo
         */
        getAllInfos(): Promise<INxInfo[]>;

        /**
         * Returns dynamic properties (if any) in addition to the engine (fixed) properties.
         * Script-defined variables cannot be removed using the DestroyVariableById method or the DestroyVariableByName method.
         * @returns - return a Promise  of a data set NxAppLayout
         */
        getAppLayout(): Promise<INxAppLayout>;

        /**
         * Gets the properties of an app.
         * @returns - return a Promise of NxAppProperties qProp. Information about the properties of the app.
         */
        getAppProperties(): Promise<INxAppProperties>;

        /**
         * Computes a set of association scores for each pair of fields between two given tables that have been loaded in an app.
         * @param qTable1 - Name of the first table.
         * @param qTable2 - Name of the second table.
         * @returns - return a Promise of IAssociationScore qScore.
         */
        getAssociationScores(qTable1: string, qTable2: string): Promise<IAssociationScore>;

        /**
         * Returns the handle of a bookmark.
         * @param qId - Identifier of the bookmark.
         * @returns - return a Promise of IGenericBookmark.
         */
        getBookmark(qId: string): Promise<IGenericBookmark>;

        /**
         * Returns a list of bookmarks in the app.
         * @param qOptions - Information about the list of bookmarks.
         * @returns - return a Promise of INxContainerEntry.
         */
        getBookmarks(qOptions: INxGetBookmarkOptions): Promise<INxContainerEntry<any>>;

        /**
         * Retrieves a connection and returns:
         * - The creation time of the connection
         * - The identifier of the connection
         * - The type of the connection
         * - The name of the connection
         * - The connection string
         * @param qConnectionId - Identifier of the connection. >> This parameter is mandatory.
         * @returns - return a Connection.
         */
        getConnection(qConnectionId: string): Promise<IConnection>;

        /**
         * Lists the connections in an app.
         *
         * Note: In Qlik Sense Enterprise, there is an additional file connection named AttachedFiles.
         * This connection is stored in the Qlik Sense repository.
         * @returns - return a Promise of Array of Connection.
         */
        getConnections(): Promise<IConnection[]>;

        /**
         * Lists the content libraries.
         * To differentiate a global content library from an app specific content library,
         * you can check the property qAppSpecific.
         * If this property is set to true, it means that the content library is app specific.
         *
         * Note: There is always one specific content library per app.
         * @returns - return a Promise of ContentLibraryList.
         */
        getContentLibraries(): Promise<IContentLibraryList>;

        /**
         * Gives information about an ODBC, OLEDB or CUSTOM connection.
         * @param qConnectionId - Identifier of the connection. >> This parameter is mandatory.
         * @returns - return a Promise of DatabaseInfo.
         */
        getDatabaseInfo(qConnectionId: string): Promise<IDatabaseInfo>;

        /**
         * Lists the owners of a database for a ODBC, OLEDB or CUSTOM connection.
         * @param qConnectionId - Identifier of the connection. >> This parameter is mandatory.
         * @param qDatabase - Name of the database. >> This parameter is mandatory.
         * @returns - return a Promise Array of DatabaseOwner.
         */
        getDatabaseOwners(qConnectionId: string, qDatabase?: string): Promise<IDatabaseOwner[]>;

        /**
         * Lists the databases inside a ODBC, OLEDB or CUSTOM data source.
         * @param qConnectionId - Identifier of the connection. >> This parameter is mandatory.
         * @returns - return a Promise Array of Database.
         */
        getDatabases(qConnectionId: string): Promise<IDatabase[]>;

        /**
         * Lists the fields inside a table of a database for a ODBC, OLEDB or CUSTOM connection.
         * @param qConnectionId - Identifier of the connection. >> This parameter is mandatory.
         * @param qDatabase - Name of the database. >> This parameter is mandatory.
         * (If qDatabase is not set then qOwner must be set.)
         * @param qOwner - Owner of the database. >> This parameter is mandatory.
         * (If qOwner is not set then qDatabase must be set.)
         * @param qTable - Name of the table. >> This parameter is mandatory.
         * @returns - return a Promise Array of DataField.
         */
        getDatabaseTableFields(qConnectionId: string, qTable: string, qDatabase?: string, qOwner?: string): Promise<IDataField[]>;

        /**
         * Retrieves the values of the specified table of a database for a ODBC, OLEDB or CUSTOM connection.
         * @param qConnectionId - Identifier of the connection. >> This parameter is mandatory.
         * @param qDatabase - Name of the database. >> This parameter is mandatory.
         * (If qDatabase is not set then qOwner must be set.)
         * @param qOwner - Owner of the database. >> This parameter is mandatory.
         * (If qOwner is not set then qDatabase must be set.)
         * @param qTable - Name of the table. >> This parameter is mandatory.
         * @returns - return a Promise Array of DataRecord.
         */
        getDatabaseTablePreview(qConnectionId: string, qTable: string, qDatabase?: string, qOwner?: string): Promise<IDataRecord[]>;

        /**
         * Lists the tables inside a database for a ODBC, OLEDB or CUSTOM connection.
         * @param qConnectionId - Identifier of the connection. >> This parameter is mandatory.
         * @param qDatabase - Name of the database. >> This parameter is mandatory.
         * (If qDatabase is not set then qOwner must be set.)
         * @param qOwner - Owner of the database. >> This parameter is mandatory.
         * (If qOwner is not set then qDatabase must be set.)
         * @returns - return a Promise Array of DataTable.
         */
        getDatabaseTables(qConnectionId: string, qDatabase?: string, qOwner?: string): Promise<IDataTable[]>;

        /**
         * Returns the handle of a dimension.
         * @param qId - Identifier of the dimension. >> This parameter is mandatory.
         * @returns - return a Promise GenericDimension.
         */
        getDimension(qId: string): Promise<IGenericDimension>;

        /**
         * Creates a script that contains one section.
         * This section contains Set statements that give localized information from the regional settings of the computer.
         *
         * Note: The computer regional settings are retrieved when the engine starts.
         * @param qLocalizedMainSection - Name of the script section. The default value is Main. This parameter is optional.
         * @returns - return a Promise <List of script variables>.
         */
        getEmptyScript(qLocalizedMainSection?: string): Promise<string>;

        /**
         * Retrieves the variables that are tagged as favorite.
         * @returns - return a Promise     Array of String
         */
        getFavoriteVariables(): Promise<string[]>;

        /**
         * Retrieves the description of a field.
         * @param qFieldName - Name of the field. >> This parameter is mandatory
         * @returns - return a Promise of FieldDescription.
         */
        getFieldDescription(qFieldName: string): Promise<IFieldDescription>;

        /**
         * Fetches the Expression behind a Field that is declared with DECLARE FIELD DEFINITIO
         * @param qReadableName: name of a Field that is declared with DECLARE FIELD DEFINITION
         * @returns qname wich contains the expression
         */
        getFieldOnTheFlyByName(qReadableName: string): Promise<{qName: string}>;

        /**
         * Retrieves the description of a field.
         * @param qFieldName - Name of the field. >> This parameter is mandatory.
         * @param qStateName - Name of the alternate state. This parameter is optional. Default state is current selections.
         * @returns - return a Promise of FieldDescription.
         */
        getField(qFieldName: string, qStateName?: string): Promise<IField>;

        /**
         * Lists the fields of a table for a folder connection.
         * @param qConnectionId - Identifier of the connection. >> This parameter is mandatory.
         * @param qRelativePath - Path of the connection file. This parameter is optional.
         * @param qDataFormat - Type of the file.
         * @param qTable - Name of the table. This parameter must be set for XLS, XLSX, HTML and XML files.
         * @returns - return a Promise Array of DataField or String.
         */
        getFileTableFields(qConnectionId: string, qDataFormat: IFileDataFormat, qTable: string, qRelativePath?: string): Promise<{qFields: IDataField[], qFormatSpec: string}>;

        /**
         * Lists the values in a table for a folder connection.
         * @param qConnectionId - Identifier of the connection. >> This parameter is mandatory.
         * @param qRelativePath - Path of the connection file. This parameter is optional.
         * @param qDataFormat - Type of the file.
         * @param qTable - Name of the table. This parameter must be set for XLS, XLSX, HTML and XML files.
         * @returns - return a Promise <Array of DataField> or <String>.
         */
        getFileTablePreview(qConnectionId: string, qRelativePath: string, qDataFormat: IFileDataFormat, qTable: string): Promise<{qPreview: IDataRecord[], qFormatSpec: string}>;

        /**
         * Lists the tables and fields of a JSON or XML file for a folder connection.
         * @param qConnectionId - Identifier of the connection. >> This parameter is mandatory.
         * @param qRelativePath - Path of the connection file. This parameter is optional.
         * @param qDataFormat - Type of the file.
         * @returns - return a Promise Array of DataTableEx.
         */
        getFileTablesEx(qConnectionId: string, qRelativePath: string, qDataFormat: IFileDataFormat): Promise<IDataTableEx[]>;

        /**
         * Lists the tables for a folder connection.
         * @param qConnectionId - Identifier of the connection. >> This parameter is mandatory.
         * @param qRelativePath - Path of the connection file. This parameter is optional.
         * @param qDataFormat - Type of the file.
         * @returns - return a Promise Array of DataTable.
         */
        getFileTables(qConnectionId: string, qRelativePath: string, qDataFormat: IFileDataFormat): Promise<IDataTable[]>;

        /**
         * There are two ways to specify the directory to retrieve the files from:
         * - Enter the connection identifier; the directory associated to the connection is used.
         * - Enter the connection identifier and a relative path
         * @param qConnectionId - Identifier of the connection. >> This parameter is mandatory.
         * @param qRelativePath - Path of the connection file. This parameter is optional.
         * @returns - return a Promise Array of FolderItem.
         */
        getFolderItemsForConnection(qConnectionId: string, qRelativePath: string): Promise<IFolderItem[]>;

        /**
         * Gets the content of a file.
         * @param qLibPath - ["lib://CONNECTION_NAME\\<the name of the file you want to use>.txt"] or
         * - ["lib://Connection_Name\\<Folder under your connection>\\<the name of the file you want to use>.txt"]
         * - [ ] should be used when having a lib reference in the first variable.
         * @returns - return a Promise of String.
         */
        getIncludeFileContent(qLibPath: string): Promise<string>;

        /**
         * Returns the content of a library.
         * @param qName - Name of the content library. It corresponds to the property
         * qContentLibraryListItem/qName returned by the GetContentLibraries method.
         * @returns - return a Promise of StaticContentList.
         */
        getLibraryContent(qName: string): Promise<IStaticContentList>;

        /**
         * Returns the lineage of the datamodel.
         * @returns - return a Promise of qLineage.
         */
        getLineage(): Promise<{ qLineage: Array<{ qDiscriminator: string }> }>;

        /**
         * Retrieves locale information.
         * @returns - return a Promise of LocaleInfo.
         */
        getLocaleInfo(): Promise<ILocaleInfo>;

        /**
         * Returns a vector of loosely coupled state flags, one element for each table in the app.
         * so that the circular references do not create a loop.
         * Where <array of bytes> is an array of state flags, one for each table in the app.
         *
         * 0 means that the table is not loose
         * 1 means that the table is loose
         * 2 means that the table is always loose and cannot be unloose using the Qlik Engine API.
         *
         * Note: The last three values in the vector are extra values. These values are for internal use.
         * Note: In case of circular references, the engine automatically create loosely coupled tables
         * @returns - return a Promise <Array of bytes>.
         */
        getLooselyCoupledVector(): Promise<number[]>;

        /**
         * Retrieves any fields that match all or one of the specified tags in the data model of an app.
         *
         * Note: Tags set by Qlik Sense are prefixed by the $ sign.
         * @param qTags - List of tags. Array of String
         * The GetMatchingFields method looks for fields that match one or all of the tags in this list,
         * depending on the value of qMatchingFieldMode.
         * @param qMatchingFieldMode - Matching field mode.
         * This parameter is optional.
         * The default value is 0.
         * @returns - return a Promise Array of NxMatchingFieldInfo.
         */
        getMatchingFields(qTags: string[], qMatchingFieldMode?: boolean): Promise<INxMatchingFieldInfo[]>;

        /**
         * Lists the media files.
         *
         * Note: This method is deprecated (not recommended to use). Use GetLibraryContent method instead.
         * @returns - return a Promise Boolean or MediaList
         */
        getMediaList(): Promise<MediaList[]>;

        /**
         * Returns the handle of a measure.
         *
         * @param qId - Identifier of the measure. >> This parameter is mandatory.
         * @returns - return a Promise String GenericMeasure
         */
        getMeasure(qId: string): Promise<IGenericMeasure>;

        /**
         * Returns the type of the app object and the corresponding handle.
         *
         * @param qId - Identifier of the measure. >> This parameter is mandatory.
         * @returns - return a Promise String GenericObject
         */
        getObject(qId: string): Promise<IGenericObject>;

        /**
         * Returns a list of objects in the app.
         *
         * @param qOptions - Information about the list of objects.
         * @returns - return a Promise array of NxContainerEntry.
         */
        getObjects(qOptions: INxGetObjectOptions): Promise<INxContainerEntry<any>>;

        /**
         * Shows the properties of an object.
         *
         * Returns the identifier and the definition of the measure.
         *
         * Note: If the member delta is set to true in the request object, only the delta is retrieved.
         * @returns - return a Promise GenericObject
         */
        getProperties(): Promise<INxAppProperties>;

        /**
         * Lists the breakpoints in the script of an app.
         *
         * Returns information about the breakpoints. <Array of EditorBreakpoint>
         * @returns - return a Promise Array of EditorBreakpoint
         */
        getScriptBreakpoints(): Promise<IEditorBreakpoint[]>;

        /**
         * Gets values in script.
         * @returns - return a Promise String <script values>
         */
        getScript(): Promise<string>;

        /**
         * Retrieves the data of a specific table.
         * @param qOffset - Position from the top
         * starting from 0.
         * If the offset is set to 0,
         * the rows starting from the position/index 0 are shown.
         * @param qRows - Number of rows to show.
         * @param qSyntheticMode - If this parameter is set to true, the internal data/table representation is shown.
         * Synthetic fields are present (if any).
         * @param qTableName - Name of the table.
         * @returns - return a Promise Array of TableRow.
         */
        getTableData(qOffset: number, qRows: number, qSyntheticMode: boolean, qTableName: string): Promise<ITableRow[]>;

        /**
         * Returns:
         *
         * - the list of tables in an app and the fields inside each table
         * - the list of derived fields
         * - the list of key fields
         *
         * @param qWindowSize - Defines the size of the window that is used to display the results.
         * @param qNullSize - (no infos in help)
         * @param qCellHeight - Height of a cell in a table in pixels.
         * @param qSyntheticMode  One of:
         *   - true for internal table viewer
         *   - false for source table viewer
         *
         * >> This parameter is mandatory.
         * @param qIncludeSysVars - If set to true, the system variables are included.
         * @returns - return a Promise <Array of TableRecord> or <Array of SourceKeyRecord>
         */
        getTablesAndKeys(qWindowSize: ISize, qNullSize: ISize, qCellHeight: number, qSyntheticMode: boolean, qIncludeSysVars: boolean): Promise<{qtr: ITableRecord[], qk: ISourceKeyRecord[]}>;

        /**
         * Fetches updated variables after a statement execution.
         *
         * Returns: List of variables. <Array of TextMacro>
         * @returns - return a Promise Array of TextMacro
         */
        getTextMacros(): Promise<ITextMacro[]>;

        /**
         * Gets the handle of a variable.
         *
         * Note: This method is deprecated (not recommended to use).
         * Use GetVariableById method or GetVariableByName method instead.
         * @param qName - Name of the variable. >> This parameter is mandatory.
         * @returns - return a Promise Variable
         */
        getVariable(qName: string): Promise<IVariable>;

        /**
         * Gets the handle of a variable.
         * @param qId - Identifier of the variable. >> This parameter is mandatory.
         * @returns - return a Promise GenericVariable
         */
        getVariableById(qId: string): Promise<IGenericVariable>;

        /**
         * Gets the handle of a variable.
         * @param qName - Name of the variable. >> This parameter is mandatory.
         * @returns - return a Promise GenericVariable
         */
        getVariableByName(qName: string): Promise<IGenericVariable>;

        /**
         * Retrieves information about the position of the tables in the data model viewer.
         *
         * Note: The position of the broom points and the position of the connection points cannot be retrieved in Qlik Sense.
         * @returns - return a Promise of TableViewDlgSaveInfo
         */
        getViewDlgSaveInfo(): Promise<ITableViewDlgSaveInfo>;

        /**
         * Guesses the data format for a given file.
         * Recognized file formats are:
         *
         * - CSV for Delimited
         * - FIX for Fixed Record
         * - DIF for Data Interchange Format
         * - EXCEL_BIFF for Microsoft Excel (XLS)
         * - EXCEL_OOXML for Microsoft Excel (XLSX)
         * - HTMLfor HTML
         * - QVD for QVD file
         * - XML for XML
         * - QVX for QVX file
         * - JSON for JSON format
         * - KML for KML file
         *
         * @param qConnectionId - Identifier of the connection file. >> This parameter is mandatory.
         * @param qRelativePath - Path of the connection file. This parameter is optional.
         * @returns - return a Promise of FileDataFormat
         */
        guessFileType(qConnectionId: string, qRelativePath?: string): Promise<IFileDataFormat>;

        /**
         * Locks all selections in all fields of the current app.
         *
         * @param qStateName - Alternate state name.
         * If this parameter is set, the method locks all selections that are in the specified state name.
         * This parameter is optional.
         * The default value is an empty string.
         * @returns - A promise of a Qlik engine reply.
         */
        lockAll(qStateName?: string): Promise<void>;

        /**
         * migrateDerivedFields.
         *
         * Note: from shema file
         * @returns - A promise of a Qlik engine reply.
         */
        migrateDerivedFields(): Promise<void>;

        /**
         * migrateDerivedFields.
         *
         * Note: from shema file
         * @returns - A promise of a Qlik engine reply.
         */
        migrateVariables(): Promise<void>;

        /**
         * Updates a connection.
         *
         * Note: The identifier of a connection cannot be updated. qType cannot be modified with the ModifyConnection method.
         * @param qConnectionId - Identifier of the connection. >> This parameter is mandatory.
         * @param qConnection - Information about the connection.
         * Properties that can be updated.
         * >> This parameter is mandatory.
         * @param qOverrideCredentials - Set this parameter to true to override the user name and password.
         * This parameter is optional.
         * @returns - A promise of a Qlik engine reply.
         */
        modifyConnection(qConnectionId: string, qConnection: IConnection, qOverrideCredentials: boolean): Promise<void>;

        /**
         * Publishes an app. The published app can have a different name than the original app.
         * All app objects are published. Generic objects, bookmarks, dimensions and measures inside the app are published.
         *
         * Note: This operation is possible only in Qlik Sense Enterprise.
         * Note: An app can only be published once and cannot be published to more than one stream.
         * @param qStreamId - Identifier of the stream.
         * @param qName - ame of the published app.
         * This parameter is optional. If this parameter is not set, the engine automatically gives a new name to the published app.
         * @returns - A promise of a Qlik engine reply.
         */
        publish(qStreamId: string, qName: string): Promise<void>;

        /**
         * Redoes the previous operation.
         *
         * Note: The operation is successful if qSuccess is set to true.
         * @returns - A promise true or false
         */
        redo(): Promise<boolean>;

        /**
         * Removes an alternate state in the app.
         * @param qStateName - Name of the alternate state. >> This parameter is mandatory.
         * @returns - A promise of a Qlik engine reply.
         */
        removeAlternateState(qStateName: string): Promise<void>;

        /**
         * Removes a variable.
         *
         * Note: This method is deprecated (not recommended to use).
         * Use DestroyVariableById method or DestroyVariableByName method instead.
         * @param qName - Name of the variable. Variable names are case sensitive.
         * >> This parameter is mandatory.
         * @returns - A promise true or false
         */
        removeVariable(qName: string): Promise<boolean>;

        /**
         * Resumes the app as the user left it.
         * @returns - A promise of a Qlik engine reply.
         */
        resume(): Promise<void>;

        /**
         * Saves all objects that were modified in the app.
         *
         * Note: Data from the data model are not saved.
         * Note: This operation is possible only in Qlik Sense Enterprise.
         * @returns - A promise of a Qlik engine reply.
         */
        saveObjects(): Promise<void>;

        /**
         * Scramble a field in the qlik datamodel.
         *
         * @param qFieldName - Fieldname
         * @returns - A promise of a Qlik engine reply.
         */
        scramble(qFieldName: string): Promise<void>;

        /**
         * Returns the search matches for one or more search terms.
         * The search results depend on the search context.
         *
         * See: SearchCombinationOptions
         *
         * Note: This method is deprecated (not recommended to use). Use SearchResults method instead.
         * @param qOptions - Information about the search fields and the search context.
         * @param qTerms - List of terms to search for.
         * @param qPage - Array of pages to retrieve.
         * >> This parameter is mandatory.
         * @returns - A promise true or false
         */
        searchAssociations(qOptions: ISearchCombinationOptions, qTerms: string[], qPage: ISearchPage): Promise<void>;

        /**
         * Returns the generic objects corresponding to one or more search terms. The search is performed within the title,
         * subtitle, footnote and type. In addition, associated dimension values are also searched in. For example,
         * if the country Japan is selected and the object contains the dimension City, the object will appear in the
         * results for Osaka but not for Johannesburg. The generic objects with the following types will never appear
         * in the results: slideitem, sheet, story, slide, masterobject, snapshot, LoadModel, appprops and searchhistory.
         * @param qOptions - Information about the search fields and the search context.
         * @param qTerms - List of terms to search for.
         * @param qPage - Array of pages to retrieve.
         * >> This parameter is mandatory.
         * @returns - A Promise of SearchResult
         */
        searchObjects(qOptions: ISearchObjectOptions, qTerms: string[], qPage: ISearchPage): Promise<ISearchResult>;

        /**
         * Returns the search matches for one or more search terms.
         * Search results are organized in search groups. The type of search group indicates
         * where the search matches come from (from data for example).
         * Each search group contains search results that correspond to a combination of search terms.
         * For example, if the search terms are organic, pasta , and America, the possible combination of search groups are:
         *
         * - organic
         * - pasta
         * - America
         * - organic, pasta, America
         * - organic, pasta
         * - organic, America
         * - pasta, America
         *
         * For every search group, there are one or more search group items.
         * Each subgroup item contains results that correspond to an item type (for example a field).
         * For every search group item, there are one or several search matches. The position of the match in each search result is given.
         * @param qOptions - Information about the search fields and the search context.
         * @param qTerms - List of terms to search for.
         * @param qPage - Array of pages to retrieve.
         * >> This parameter is mandatory.
         * @returns - A Promise List of SearchResults
         */
        searchResults(qOptions: ISearchCombinationOptions, qTerms: string[], qPage: ISearchPage): Promise<ISearchResult>;

        /**
         * For every search group item, there are one or several search matches. The position of the match in each search result is given.
         * @param qOptions - Information about the search combinations.
         * @param qTerms - List of terms to search for. <Array of String>
         * @returns - A Promise List of SearchSuggestionResults
         */
        searchSuggest(qOptions: ISearchCombinationOptions, qTerms: string[]): Promise<ISearchSuggestionResult>;

        /**
         * Selects all search hits for a specified group.
         * The results depend on the search context.
         * See: SearchCombinationOptions
         * @param qOptions - Information about the search fields and the search context.
         * @param qTerms - List of terms to search for.
         * @param qMatchIx - Index (value of qId) of the search result to select.
         * @param qSoftLock - This parameter is deprecated and should not be set.
         * @returns - A promise of a Qlik engine reply.
         */
        selectAssociations(qOptions: ISearchCombinationOptions, qTerms: string[], qMatchIx: number, qSoftLock: boolean): Promise<void>;

        /**
         * Sends a generic command to a custom connector.
         * For more information on the commands that can be sent to a custom connector, see the QVX SDK help.
         * @param qProvider - Connector file name. Command to be executed by the connector.
         * @param qCommand  One of:
         *                               - JsonRequest
         *                               - GetCustomCaption
         *                               - IsConnected
         *                               - DisableQlikViewSelectButton
         *                               - HaveStarField
         * @param qMethod - Method name to be used within the command. The available methods depend on the chosen connector.
         * @param qParameters - Parameters of the command. No parameters are required. This parameter is optional.
         * @param qAppendConnection - Name of the connection. This parameter is optional.
         * @returns - A promise of a Qlik engine reply.
         */
        sendGenericCommandToCustomConnector(qProvider: string, qCommand: CommandType, qMethod: string, qParameters: string[], qAppendConnection: string[]): Promise<string>;

        /**
         * Sets properties to an app.
         * @param qProp - Information about the properties of an app. / NxAppProperties
         * @returns - A promise of a Qlik engine reply.
         */
        setAppProperties(qProp: INxAppProperties): Promise<void>;

        /**
         * Set some variables as favorite.
         * @param qNames - Variables to set as favorite.
         * @returns - A promise of a Qlik engine reply.
         */
        setFavoriteVariables(qNames: string[]): Promise<void>;

        /**
         * Limits the number of rows of data to load from a data source.
         * This method works when reloading in debug mode.
         * @param qLimit - Fetch limit. Number of rows to load.
         * @returns - A promise of a Qlik engine reply.
         */
        setFetchLimit(qLimit: number): Promise<void>;

        /**
         * Sets a vector of loosely coupled state flags, one element for each table in the app.
         *
         * Note: The last three values in the vector are extra values. These values are for internal use.
         *
         * Note: The engine returns true if the vector has been updated.
         * @param qv - <Array of Byte> Vector of loosely coupled state flags, one element for each table in the app.
         * Set the flag to 1 to loose a table.
         * Set the flag to 0 to not loose a table.
         *
         * @returns - A promise true or false
         */
        setLooselyCoupledVector(qv: number[]): Promise<boolean>;

        /**
         * Set some breakpoints in the script of an app.
         *
         * @param qBreakpoints - Information about the breakpoints. <Array of EditorBreakpoint>
         * @returns - A promise of a Qlik engine reply.
         */
        setScriptBreakpoints(qBreakpoints: IEditorBreakpoint[]): Promise<void>;

        /**
         * Sets values in script.
         *
         * @param qScript - Script content
         * @returns - A promise of a Qlik engine reply.
         */
        setScript(qScript: string): Promise<void>;

        /**
         * Sets the positions of the tables in the data model viewer.
         *
         * Note: The position of the broom points and the position of the connection points cannot be set in Qlik Sense.
         * @param qInfo - Information about the table.
         * @returns - A promise of a Qlik engine reply.
         */
        setViewDlgSaveInfo(qInfo: ITableViewDlgSaveInfo): Promise<void>;

        /**
         * Undoes the previous operation.
         *
         * Note: The operation is successful if qSuccess is set to true.
         * @returns - A promise true or false
         */
        undo(): Promise<boolean>;

        /**
         * Unlocks all selections in all fields of the current app.
         *
         * @param qStateName - Alternate state name.
         * If this parameter is set, the method unlocks all selections that are in the specified state name.
         * This parameter is optional.
         * The default value is an empty string.
         * @returns - A promise true or false
         */
        unlockAll(qStateName?: string): Promise<void>;
    }

    interface INxFieldProperties {
        qOneAndOnlyOne: boolean;
    }

    /**
     * This class describes all the methods that apply at field level.
     * The handle member in the JSON request for all methods listed in this section is the handle of the field.
     */
    interface IField {
        /**
         * Maintains the selections in the current field while clearing the selections in the other fields.
         * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected.
         * The default value is false.
         * This parameter is optional.
         * @returns - A promise of a Qlik engine reply.
         */
        clearAllButThis(qSoftLock?: boolean): Promise<boolean>;

        /**
         * Clears the selections in a specific field.
         *
         * Note: The operation is successful if qReturn is set to true.
         * @returns - A promise true or false
         */
        clear(): Promise<boolean>;

        /**
         * Returns the AND mode status of a field.
         *
         * Note: The field is in AND mode if qReturn is set to true.
         * @returns - A promise true or false
         */
        getAndMode(): Promise<boolean>;

        /**
         * Retrieves the number of distinct values in a field.
         *
         * Note: The field is in AND mode if qReturn is set to true.
         * @returns - A promise a number <cardinal value>
         */
        getCardinal(): Promise<number>;

        /**
         * Gets the properties of a field.
         * @returns - A promise of NxFieldProperties
         */
        getNxProperties(): Promise<INxFieldProperties>;

        /**
         * Locks all selected values of a specific field.
         *
         * Note: The operation is successful if Return is set to true.
         * @returns - A promise true or false
         */
        lock(): Promise<boolean>;

        /**
         * Selects some values in a field, by entering the element numbers related to the values to select.
         *
         * Note: The operation is successful if qReturn is set to true.
         * @param qValues - Indexes (or element numbers) of the values to select.
         * @param qToggleMode - Set to true to keep any selections present in the list object.
         * If this parameter is set to false, selections made before accepting the list object search become alternative.
         * >> This parameter is mandatory.
         * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected.
         * The default value is false.
         * This parameter is optional.
         * @returns - A promise of a Qlik engine reply.
         */
        lowLevelSelect(qValues: number[], qToggleMode: boolean, qSoftLock?: boolean): Promise<boolean>;

        /**
         * Selects all values of a field. Excluded values are also selected.
         *
         * Note: The operation is successful if qReturn is set to true.
         * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected.
         * The default value is false.
         * This parameter is optional.
         * @returns - A promise true or false
         */
        selectAll(qSoftLock?: boolean): Promise<boolean>;

        /**
         * Selects all alternatives values in a specific field.
         *
         * Note: In a field that contains at least one selected value, the values that are neither selected nor excluded are alternatives values.
         * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected.
         * The default value is false.
         * This parameter is optional.
         * @returns - A promise true or false
         */
        selectAlternative(qSoftLock?: boolean): Promise<boolean>;

        /**
         * Inverts the current selections.
         *
         * Note: In a field that contains at least one selected value, the values that are neither selected nor excluded are alternatives values.
         * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected.
         * The default value is false.
         * This parameter is optional.
         * @returns - A promise true or false
         */
        selectExcluded(qSoftLock?: boolean): Promise<boolean>;

        /**
         * Selects field values matching a search string.
         *
         * Note: In a field that contains at least one selected value,
         * the values that are neither selected nor excluded are alternatives values.
         * @param qMatch - String to search for. Can contain wild cards or numeric search criteria.
         * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected.
         * The default value is false.
         * This parameter is optional.
         * @param qExcludedValuesMode - Include excluded values in search. This parameter is optional.
         * @returns - A promise true or false
         */
        select(qMatch: string, qSoftLock?: boolean, qExcludedValuesMode?: number): Promise<boolean>;

        /**
         * Selects all possible values in a specific field.
         *
         * Note: The operation is successful if qReturn is set to true.
         * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected.
         * The default value is false.
         * This parameter is optional.
         * @returns - A promise true or false
         */
        selectPossible(qSoftLock?: boolean): Promise<boolean>;

        /**
         * Selects some values in a field, by entering the values to select.
         *
         * Note: The operation is successful if qReturn is set to true.
         * @param qFieldValues - List of the values to select.
         * @param qToggleMode - The default value is false. This parameter is optional.
         * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected.
         * The default value is false.
         * This parameter is optional.
         * @returns - A promise true or false
         */
        selectValues(qFieldValues: IFieldValue[], qToggleMode?: boolean, qSoftLock?: boolean): Promise<boolean>;

        /**
         * Sets a field in the AND mode.
         *
         * Note: The operation is successful if Return is set to true.
         * @param qAndMode - Specifies if the AND mode applies to the field.
         * Set this parameter to true to enter the AND mode.
         * >> This parameter is mandatory.
         * @returns - A promise of a Qlik engine reply.
         */
        setAndMode(qAndMode: boolean): Promise<void>;

        /**
         * Sets some properties to a field.
         *
         * In addition to the properties described below, dynamic properties can be added.
         * @param qProperties - Information about the properties of the field
         * @returns - A promise of a Qlik engine reply.
         */
        setNxProperties(qProperties: INxFieldProperties): Promise<void>;

        /**
         * Toggle selects field values matching a search string.
         *
         * In addition to the properties described below, dynamic properties can be added.
         * @param qMatch - String to search for. Can contain wild cards or numeric search criteria.
         * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected.
         * The default value is false.
         * This parameter is optional.
         * @param qExcludedValuesMode - Include excluded values in search.
         * This parameter is optional.
         * @returns - A promise true or false
         */
        toggleSelect(qMatch: string, qSoftLock?: boolean, qExcludedValuesMode?: number): Promise<boolean>;

        /**
         * Unlocks all selected values of a specific field if the target (or handle ) is a field.
         * @returns - A promise true or false
         */
        unlock(): Promise<boolean>;
    }

    /**
     * NxPatch...
     */
    interface INxPatch {
        /**
         * Operation to perform.
         */
        qOp: NxPatchOpType;

        /**
         * Path to the property to add, remove or replace.
         */
        qPath: string;

        /**
         * This parameter is not used in a remove operation.
         * Corresponds to the value of the property to add or to the new value of the property to update.
         *
         * Examples: "false", "2", "\"New title\""
         */
        qValue: string;
    }

    /**
     * AlternateStateData...
     */
    interface IAlternateStateData {
        /**
         * Name of the alternate state.
         * Default is current selections: $
         */
        qStateName: string;

        /**
         * List of the selections <Array of BookmarkFieldItem>
         */
        qFieldItems: IBookmarkFieldItem[];
    }

    /**
     * BookmarkVariableItem...
     */
    interface IBookmarkVariableItem {
        /**
         * Name of the variable.
         */
        qName: string;

        /**
         * Value of the variable.
         */
        qValue: IFieldValue;
    }

    /**
     * BookmarkFieldItem...
     */
    interface IBookmarkFieldItem {
        /**
         * Name and type of the field
         */
        qDef: IFieldDefEx;

        /**
         * Indicates if the field is locked.
         * Default is false.
         */
        qLocked: boolean;

        /**
         * Information on the selections criteria
         */
        qSelectInfo: ISelectInfo;

        /**
         * List of the selected values
         * Either the list of selected values or the list of excluded values is displayed.
         */
        qValues: IFieldValue[];

        /**
         * List of excluded values.
         * Either the list of selected values or the list of excluded values is displayed.
         */
        qExcludedValues: IFieldValue[];

        /**
         * If set to true, selections within a list object are made in AND mode;
         * If you have a list object that lists all customers, by selecting Customer 1 and
         * Customer 2 while in and-mode, all records that are associated with Customer 1 and Customer 2 are selected.
         *
         * The default value is false; selections within a list object are made in OR mode. If you have a list object
         * that lists all customers, by selecting Customer 1 and Customer 2 while in or-mode, all records that are
         * associated with either Customer 1 or Customer 2 are selected.
         * This parameter is not returned if set to false.
         */
        qAndMode: boolean;

        /**
         * If set to true, the field has always one selection (not 0 and not more than 1).
         * If another value is selected, the previous one is unselected.
         * The default value is false. This parameter is not returned if set to false.
         */
        qOneAndOnlyOne: boolean;
    }

    /**
     * FieldDefEx...
     */
    interface IFieldDefEx {
        /**
         * Name of the field
         */
        qName: string;

        /**
         * Type of data entity
         *
         * One of:
         * - 0 for NOT_PRESENT: the field does not exist
         * - 1 for PRESENT: plain field
         * - 2 for IS_EXPR: calculated dimension
         */
        qType: FieldDefExType;
    }

    /**
     * SelectInfo...
     */
    interface ISelectInfo {
        /**
         * Text search string.
         * Everything that matches the text is selected.
         * >> This parameter is optional.
         */
        qTextSearch?: string;

        /**
         * Lower value of the search range.
         * This parameter is used when performing range selections or text searches in dimensions.
         * Default is Null.
         */
        qRangeLo: number;

        /**
         * Highest value of the search range.
         * This parameter is used when performing range selections or text searches in dimensions.
         * Default is Null.
         */
        qRangeHi: number;

        /**
         * Gives information about the formatting of the range.
         * This parameter is used when performing range selections or text searches in dimensions.
         */
        qNumberFormat: IFieldAttributes;

        /**
         * This parameter is used when performing range selections or text searches in measures.
         * Gives information about the range of selections.
         * bool SoftLock = false;
         */
        qRangeInfo: INxRangeSelectInfo[];

        /**
         * List of information about ranges for selections.
         */
        qContinuousRangeInfo: IRange[];
    }

    /**
     * NxBookmark...
     */
    interface INxBookmark {
        /**
         * List of selections for each state.
         */
        qStateData: IAlternateStateData[];

        /**
         * Time when the bookmark was created.
         */
        qUtcModifyTime: number;

        /**
         * List of the variables in the app at the time the bookmark was created.
         */
        qVariableItems: IBookmarkVariableItem[];
    }

    /**
     * GenericBaseLayout...
     */
    interface IGenericBaseLayout {
        qInfo: INxInfo;
        qMeta: INxMeta;
    }

    /**
     * GenericBookmarkLayout with extend GenericBaseLayout
     */
    interface IGenericBookmarkLayout extends IGenericBaseLayout {
        qMeta: INxMetaTitleDescription;
        qBookmark: INxBookmark;
    }

    /**
     * This class describes all the methods that apply at bookmark level.
     * The handle member in the JSON request for all methods listed in this section is the handle of the bookmark.
     */
    interface IGenericBookmark {
        /**
         * Applies a bookmark.
         * @returns - A promise true or false
         */
        apply(): Promise<boolean>;

        /**
         * Applies a patch to the properties of an object. Allows an update to some of the properties.
         *
         * Note: Applying a patch takes less time than resetting all the properties.
         * @param qPatches - Array of patches.
         * @returns - A promise of a Qlik engine reply.
         */
        applyPatches(qPatches: INxPatch[]): Promise<void>;

        /**
         * Get the selected values in the bookmark for a specific field.
         *
         * Note: from shema file
         * @param qField - Name of the field
         * @param qGetExcludedValues - Get Excluded Values
         * @param qDataPage - Start and End of DataPage
         * @returns - A promise of Array of FieldValues.
         */
        getFieldValues(qField: string, qGetExcludedValues: boolean, qDataPage: {"qStartIndex": number, "qEndIndex": number}): Promise<{qFieldValues: IFieldValue[]}>;

        /**
         * Returns:
         *
         * - the type of the object
         * - the identifier of the object
         *
         * Note: Applying a patch takes less time than resetting all the properties.
         * @returns - A promise InfoObject
         */
        getInfo(): Promise<INxInfo>;

        /**
         * Evaluates an object and displays its properties including the dynamic properties.
         * If the member delta is set to true in the request object, only the delta is evaluated..
         * @returns - A promise of GenericBookmarkLayout
         */
        getLayout(): Promise<IGenericBookmarkLayout>;

        /**
         * Shows the properties of an object.
         * If the member delta is set to true in the request object, only the delta is retrieved.
         * @returns - A promise of GenericBookmarkProperties
         */
        getProperties(): Promise<IGenericBookmarkProperties>;

        /**
         * Publishes a bookmark.
         * @returns - A promise of a Qlik engine reply.
         */
        publish(): Promise<void>;

        /**
         * Sets some properties for a bookmark.
         *
         * Note: Applying a patch takes less time than resetting all the properties.
         * @param qProp - Information about the bookmark
         * >> This parameter is mandatory.
         * @returns - A promise of a Qlik engine reply.
         */
        setProperties(qProp: IGenericBookmarkProperties): Promise<void>;

        /**
         * Unpublishes a bookmark.
         * @returns - A promise of a Qlik engine reply.
         */
        unPublish(): Promise<void>;
    }

    /**
     * GenericBookmarkEntry...
     */
    interface IGenericBookmarkEntry {
        /**
         * Information about the properties of the bookmark.
         */
        qProperties: IGenericBookmarkProperties;

        /**
         * Information about the bookmark.
         */
        qBookmark: INxBookmark;
    }

    /**
     * GenericDimensionInfo...
     */
    interface IGenericDimensionInfo {
        /**
         * Length of the longest value in the field.
         */
        qApprMaxGlyphCount: number;

        /**
         * Number of distinct field values
         */
        qCardinal: number;

        /**
         * Gives information on a field. For example, it can return the type of the field.
         * Examples: key, text, ASCII
         */
        qTags: string[];

        /**
         * If set to true, it means that the field is a semantic.
         */
        qIsSemantic: boolean;

        /**
         * If set to true a logical AND (instead of a logical OR) is used when making selections in a field.
         * The default value is false.
         */
        qAndMode: boolean;
    }

    /**
     * Is the layout for GenericDimensionProperties.
     */
    interface IGenericDimensionLayout extends IGenericBaseLayout {
        /*add new member */
        /**
         * Identifier and type of the dimension.
         */
        qInfo: INxInfo;

        /*add new member */
        /**
         * Information about publishing and permissions.
         */
        qMeta: INxMetaTitleDescriptionTag;

        /**
         * Identifier and type of the dimension.
         */
        qDim: INxLibraryDimensionDef;

        /**
         * Cardinal and tags related to the dimension.
         * Length of the longest value in the field.
         */
        qDimInfos: IGenericDimensionInfo[];
    }

    /**
     * NxLinkedObjectInfo...
     */
    interface INxLinkedObjectInfo {
        /**
         * Identifier of the root object.
         * If the linked object is a child, the root identifier is the identifier of the parent.
         * If the linked object is an app object, the root identifier is the same than the
         * identifier of the linked object since the linked object is a root object.
         */
        qRootId: string;

        /**
         * Information about the linked object.
         */
        qInfo: INxInfo;
    }

    /**
     * This class describes all the methods that apply at dimension level.
     * The handle member in the JSON request for all methods listed in this section is the handle of the dimension.
     */
    interface IGenericDimension {
        /**
         * Applies a patch to the properties of an object. Allows an update to some of the properties.
         *
         * Note: Applying a patch takes less time than resetting all the properties.
         * @param qPatches - Array of patches.
         * @returns - A promise of a Qlik engine reply.
         */
        applyPatches(qPatches: INxPatch[]): Promise<void>;

        /**
         * Returns the definition of a dimension.
         *
         * @returns - A promise GenericDimension.
         */
        getDimension(): Promise<IGenericDimensionProperties>;

        /**
         * Returns the type and identifier of the object.
         */
        getInfo(): Promise<INxInfo>;

        /**
         * Evaluates a dimension and displays its properties, including the dynamic properties.
         *
         * @returns - A promise GenericDimensionLayout.
         */
        getLayout(): Promise<IGenericDimensionLayout>;

        /**
         * Return a lists the linked objects to a generic object, a dimension or a measure.
         * @returns - A promise Array of NxLinkedObjectInfo
         */
        getLinkedObjects(): Promise<INxLinkedObjectInfo[]>;

        /**
         * Shows the properties of an object.
         * Returns the identifier and the definition of the dimension.
         *
         * Note: If the member delta is set to true in the request object, only the delta is retrieved.
         */
        getProperties(): Promise<IGenericDimensionProperties>;

        /**
         * Publishes a dimension.
         */
        publish(): Promise<void>;

        /**
         * Sets some properties for a dimension.
         */
        setProperties(): Promise<IGenericDimensionProperties>;

        /**
         * Unpublishes a dimension.
         */
        unPublish(): Promise<void>;
    }

    /**
     * GenericObjectEntry...
     */
    interface IGenericObjectEntry {
        /**
         * Information about the generic object properties.
         */
        qProperty: IGenericObjectProperties;

        /**
         * Information about the children of the generic object.
         */
        qChildren: IGenericObjectEntry[];

        /**
         * Reference to a bookmark/snapshot that is embedded in the generic object.
         */
        qEmbeddedSnapshotRef: IGenericBookmarkEntry;
    }

    /**
     * NxPage...
     */
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
         * Number of columns in the page.
         * The indexing of the columns may vary depending on whether the cells are expanded or not
         * (parameter qAlwaysFullyExpanded in HyperCubeDef).
         */
        qWidth: number;

        /**
         * Number of rows or elements in the page.
         * The indexing of the rows may vary depending on whether the cells are expanded or not
         * (parameter qAlwaysFullyExpanded in HyperCubeDef).
         */
        qHeight: number;
    }

    /**
     * NxViewPort...
     */
    interface INxViewPort {
        /**
         * Width of the canvas in pixels.
         */
        qWidth: number;

        /**
         * Height of the canvas in pixels.
         */
        qHeight: number;

        /*
         * Zoom level.
         */
        qZoomLevel: number;
    }

    /**
     * NxDataAreaPage...
     */
    interface INxDataAreaPage {
        /**
         * Position from the left.
         * Corresponds to the lowest possible value of the first measure
         * (the measure on the x-axis).
         */
        qLeft: number;

        /**
         * Position from the top.
         * Corresponds to the highest possible value of the second measure
         * (the measure on the y-axis).
         */
        qTop: number;

        /**
         * Width of the page.
         * Corresponds to the highest possible value of the first measure
         * (the measure on the x-axis).
         */
        qWidth: number;

        /**
         * Height of the page.
         * The difference between qTop and qHeight gives the lowest possible value of the second measure
         * (the measure on the y-axis).
         */
        qHeight: number;
    }

    /**
     * NxHighlightRanges...
     */
    interface INxHighlightRanges {
        /**
         * Ranges of highlighted values
         */
        qRanges: ICharRange[];
    }

    /**
     * CharRange...
     */
    interface ICharRange {
        /**
         * Position of the first search occurrence
         */
        qCharPos: number;

        /*
         * Number of occurrences found
         */
        qCharCount: number;
    }

    /**
     * NxAttributeExpressionValues...
     */
    interface INxAttributeExpressionValues {
        /**
         * List of attribute expressions values.
         */
        qValues: INxSimpleValue[];
    }

    /**
     * NxSimpleValue
     */
    interface INxSimpleValue {
        /**
         * Text related to the attribute expression value.
         * This property is optional. No text is returned if the attribute expression value is a numeric.
         */
        qText?: string;

        /**
         * Numeric value of the attribute expression.
         * This property is set to NaN (Not a Number) if the attribute expression value is not a numeric.
         * Numerical values are not returned as text.
         */
        qNum: number;
    }

    /**
     * NxCell...
     */
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
         *
         * You can get the following negative values:
         *
         * - 1: the cell is a Total cell. It shows a total.
         * - 2: the cell is collapsed. Applies to pivot tables.
         * - 3: the cell belongs to the group Others.
         * - 4: the cell is empty. Applies to pivot tables.
         */
        qElemNumber: number;

        /**
         * State of the value.
         * default state for a measure is "L".
         *
         * One of:
         *               L for Locked
         *               S for Selected
         *               O for Optional
         *               D for Deselected
         *               A for Alternative
         *               X for eXcluded
         *               XS for eXcluded Selected
         *               XL for eXcluded Locked
         */
        qState: NxCellStateType;

        /**
         * Is set to true, if qText and qNum are empty.
         * This parameter is optional. The default value is false.
         */
        qIsEmpty?: boolean;

        /**
         * Is set to true if a total is displayed in the cell.
         * This parameter is optional. The default value is false.
         * Not applicable to list objects.
         */
        qIsTotalCell?: boolean;

        /**
         * Is set to true if the cell belongs to the group Others.
         * Dimension values can be set as Others depending on what has been defined in OtherTotalSpecProp.
         * This parameter is optional. The default value is false.
         * Not applicable to list objects.
         */
        qIsOtherCell?: boolean;

        /**
         * Frequency of the value.
         * This parameter is optional.
         */
        qFrequency?: string;

        /**
         * Search hits.
         * The search hits are highlighted.
         * This parameter is optional.
         */
        qHighlightRanges?: INxHighlightRanges;

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
        qAttrDims: INxAttributeExpressionValues;
    }

    /**
     * NxCellRows...
     */
    type INxCellRows = INxCell[];

    /**
     * INxDataPage...
     */
    interface INxDataPage {
        /**
         * Array of data.
         */
        qMatrix: INxCellRows[];

        /**
         * Array of tails.
         * Is used for hypercube objects with multiple dimensions. It might happen that due to the window size some elements
         * in a group cannot be displayed in the same page as the other elements of the group. Elements of a group of
         * dimensions can be part of the previous or the next tail.
         * If there is no tail, the array is empty [ ].
         */
        qTails: INxGroupTail[];

        /**
         * Size and offset of the data in the matrix.
         */
        qArea: IRect;

        /**
         * Is set to true, if the data have been reduced.
         * The default value is false.
         */
        qIsReduced: boolean;
    }

    /**
     * NxGroupTail
     */
    interface INxGroupTail {
        /**
         * Number of elements that are part of the previous tail.
         * This number depends on the paging, more particularly it depends on the values defined in qTop and qHeight
         * This parameter is optional. Is not shown if the value is 0.
         */
        qUp?: number;

        /**
         * Number of elements that are part of the next tail.
         * This number depends on the paging, more particularly it depends on the values defined in qTop and qHeight
         * This parameter is optional. Is not shown if the value is 0.
         */
        qDown?: number;
    }

    /**
     * Container for the dynamic properties of an attribute expression.
     */
    interface IContinuousDataOptions {
        /**
         * Start value.
         */
        qStart: number;

        /**
         * End value.
         */
        qEnd: number;
        /**
         * Number of bins for binning.
         */
        qNbrPoints: number;

        /**
         * Maximum number of ticks.
         */
        qMaxNbrTicks: number;
    }

    /**
     * Container for the dynamic properties of an attribute expression.
     */
    interface INxAxisTicks {
        /**
         * Name of the derived definition.
         */
        qName: string;

        /**
         * List of ticks.
         */
        qTicks: INxTickCell[];

        /**
         * List of tags.
         */
        qTags: string[];
    }

    /**
     * Container for the dynamic properties of an attribute expression.
     */
    interface INxTickCell {
        /**
         * Tick's label.
         */
        qText: string;

        /**
         * Start value.
         */
        qStart: number;

        /*
         * End value.
         */
        qEnd: number;
    }

    /**
     * NxAxisData...
     */
    interface INxAxisData {
        /**
         * List of Axis data.
         */
        qAxis: INxAxisTicks[];
    }

    /**
     * NxAttributeDimValues...
     */
    interface INxAttributeDimValues {
        /**
         * List of values.
         */
        qValues: INxSimpleDimValue[];
    }

    /**
     * NxSimpleDimValue..
     */
    interface INxSimpleDimValue {
        /**
         * Text related to the attribute expression value.
         * This property is optional. No text is returned if the attribute expression value is a numeric.
         */
        qText?: string;

        /**
         * Element number.
         */
        qElemNo: number;
    }

    /**
     * NxPivotDimensionCell...
     */
    interface INxPivotDimensionCell {
        /**
         * Some text
         */
        qText: string;

        /**
         * Rank number of the value
         * If set to -1, it means that the value is not an element number.
         */
        qElemNo: number;

        /**
         * Value of the cell
         * Is set to NaN, if the value is not a number.
         */
        qValue: number;

        /**
         * If set to true, it means that the cell can be expanded.
         * This parameter is not returned if it is set to false.
         */
        qCanExpand: boolean;

        /**
         * If set to true, it means that the cell can be collapsed.
         * This parameter is not returned if it is set to false.
         */
        qCanCollapse: boolean;

        /**
         * Type of the cell
         *
         * One of:
         *   V for NX_DIM_CELL_VALUE. Applies to values in the data matrix.
         *   E for NX_DIM_CELL_EMPTY. Applies to empty cells in the top and left dimensions.
         *   N for NX_DIM_CELL_NORMAL. Applies to left and top dimensions cells.
         *   T for NX_DIM_CELL_TOTAL. Applies to cells marked with Total
         *   P for NX_DIM_CELL_PSEUDO. Applies to pseudo dimensions.
         *   R for NX_DIM_CELL_ROOT. Applies to root node.
         *   U for NX_DIM_CELL_NULL. Applies to Null values in the data matrix.
         */
        qType: NxCellType;

        /**
         * Number of elements that are part of the previous tail.
         * This number depends on the paging, more particularly it depends on the values defined in qTop and qHeight.
         */
        qUp: number;

        /**
         * Number of elements that are part of the next tail.
         * This number depends on the paging, more particularly it depends on the values defined in qTop and qHeight.
         */
        qDown: number;

        /**
         * Information about sub nodes (or sub cells)
         * The array is empty [ ] when there is no sub nodes.
         */
        qSubNodes: INxPivotDimensionCell[];

        /**
         * Information about attribute expressions.
         * The array is empty [ ] when there is no attribute expressions.
         * AttrDims: INxAttributeDimValues[];
         */
        qAttrExps: INxAttributeExpressionValues[];

        /**
         * Information about attribute dimensions.
         */
        qAttrDims: INxAttributeDimValues[];
    }

    /**
     * NxPivotPage...
     */
    interface INxPivotPage {
        /**
         * Information about the left dimension values of a pivot table.
         */
        qLeft: INxPivotDimensionCell[];

        /**
         * Information about the top dimension values of a pivot table.
         * If there is no top dimension in the pivot table, information about the measures are given.
         */
        qTop: INxPivotDimensionCell[];

        /**
         * Array of data.
         */
        qData: INxPivotValuePoint[];

        /**
         * Size and offset of the data in the matrix.
         */
        qArea: IRect;
    }

    /**
     * NxStackedPivotCell...
     */
    interface INxStackedPivotCell {
        /**
         * Some text.
         */
        qText: string;

        /**
         * Rank number of the value.
         * If set to -1, it means that the value is not an element number.
         */
        qElemNo: number;

        /**
         * Value of the cell.
         * Is set to NaN, if the value is not a number.
         */
        qValue: number;

        /**
         * If set to true, it means that the cell can be expanded.
         * This parameter is not returned if it is set to false.
         */
        qCanExpand: boolean;

        /**
         * If set to true, it means that the cell can be collapsed.
         * This parameter is not returned if it is set to false.
         */
        qCanCollapse: boolean;

        /**
         * Type of the cell.
         * One of:
         *      V for NX_DIM_CELL_VALUE. Applies to values in the data matrix.
         *      E for NX_DIM_CELL_EMPTY. Applies to empty cells in the top and left dimensions.
         *      N for NX_DIM_CELL_NORMAL. Applies to left and top dimensions cells.
         *      T for NX_DIM_CELL_TOTAL. Applies to cells marked with Total
         *      P for NX_DIM_CELL_PSEUDO. Applies to pseudo dimensions.
         *      R for NX_DIM_CELL_ROOT. Applies to root node.
         *      U for NX_DIM_CELL_NULL. Applies to Null values in the data matrix.
         */
        qType: NxCellType;

        /**
         * Total of the positive values in the current group of cells.
         */
        qMaxPos: number;

        /**
         * Total of the negative values in the current group of cells.
         */
        qMinNeg: number;

        /**
         * Number of elements that are part of the previous tail.
         */
        qUp: number;

        /**
         * Number of elements that are part of the next tail.
         */
        qDown: number;

        /**
         * Row index in the data matrix.
         * The indexing starts from 0.
         */
        qRow: number;

        /**
         * Information about sub nodes (or sub cells).
         * The array is empty [ ] when there are no sub nodes.
         */
        qSubNodes: INxStackedPivotCell[];

        /**
         * Attribute expressions values.
         */
        qAttrExps: INxAttributeExpressionValues;

        /**
         * Attribute dimensions values.
         */
        qAttrDims: INxAttributeDimValues;
    }

    /**
     * NxStackPage...
     */
    interface INxStackPage {
        /**
         * Array of data.
         */
        qData: INxStackedPivotCell[];

        /**
         * Size and offset of the data in the matrix.
         */
        qArea: IRect;
    }

    /**
     * GenericObjectLayout...
     */
    interface IGenericObjectLayout extends IGenericBaseLayout {
        /*add new member */
        /**
         * Identifier and type of the generic object.
         */
        qInfo: INxInfo;

        /*add new member */
        /**
         * Information about publishing and permissions.
         * This parameter is optional.
         */
        qMeta: INxMeta;

        /**
         * Should be set to create an object that is linked to another object.
         * Enter the identifier of the object you want to link to.
         * If you do not want to link your object, set this parameter to an empty string.
         */
        qExtendsId: string;

        /**
         * Is set to true if the generic object contains some properties that are not persistent
         * (a soft patch was applied).
         */
        qHasSoftPatches: boolean;

        /**
         * This parameter is optional.
         * Gives information on the error.
         */
        qError?: INxLayoutErrors;

        /**
         * Information about the selections.
         */
        qSelectionInfo: INxSelectionInfo;

        /**
         *     Name of the alternate state. Default is current selections $ .
         */
        qStateName: string;
    }

    /**
     * NxLayoutErrors...
     */
    interface INxLayoutErrors {
        /**
         * Error code  <Integer>
         */
        ErrorCode: number;
    }

    /**
     * NxSelectionInfo...
     */
    interface INxSelectionInfo {
        /**
         * Is set to true if the visualization is in selection mode.
         * For more information about the selection mode
         */
        qInSelections: boolean;

        /**
         * Is set to true if the visualization is in selection mode
         * and if some selections have been made while in selection mode.
         */
        qMadeSelections: boolean;
    }

    /**
     * RangeSelectInfo...
     */
    interface IRangeSelectInfo {
        /* ToCheck!
           qRangeLo    Lowest value in the range.    Double
           qRangeHi    Highest value in the range.    Double
           qMeasure    Label of the measure.    String
         */

        /**
         * Range of values.
         */
        qRange: IRange;
    }

    /**
     * NxMultiRangeSelectInfo with extends of RangeSelectInfo
     */
    interface INxMultiRangeSelectInfo extends IRangeSelectInfo {
        /**
         * Number of the columns to select.
         * Numbering starts from 0.
         */
        qColumnsToSelect: number;
    }

    /**
     * NxRangeSelectInfo with extends of RangeSelectInfo
     */
    interface INxRangeSelectInfo extends IRangeSelectInfo {
        /**
         * Number of the measure to select.
         * Numbering starts from 0.
         */
        qMeasureIx: number;
    }

    /**
     * NxContinuousRangeSelectInfo with extends of RangeSelectInfo
     */
    interface INxContinuousRangeSelectInfo extends IRangeSelectInfo {
        /**
         * Dimension index.
         */
        qDimIx: number;
    }

    /**
     * Range...
     */
    interface IRange {
        /**
         * Lowest value in the range
         */
        qMin: number;

        /**
         * Highest value in the range
         */
        qMax: number;

        /**
         * If set to true, the range includes the lowest value in the range of selections (Equals to ). [bn(50500)]
         * Example:
         *           The range is [1,10]. If qMinInclEq is set to true it means that 1 is included in the range of selections.
         */
        qMinInclEq: boolean;

        /**
         * If set to true, the range includes the highest value in the range of selections (Equals to ). [bn(50500)]
         * Example:
         *            The range is [1,10]. If qMinInclEq is set to true it means that 10 is included in the range of selections.
         */
        qMaxInclEq: boolean;
    }

    /**
     * NxSelectionCell...
     */
    interface INxSelectionCell {
        /**
         * Type of cells to select
         * One of:
         *                 D for data
         *                 T for top dimension cells
         *                 L for left dimension cells
         */
        qType: NxSelectionCellType;

        /**
         * Column index to select
         * Indexing starts from 0.
         * If the cell's type is:
         *   D, the index is based on the data matrix.
         *   T, the index is based on the data matrix
         *   L, the index is based on the left dimensions indexes
         */
        qCol: number;

        /**
         * Row index to select
         * Indexing starts from 0.
         * If the cell's type is:
         * - D, the index is based on the data matrix.
         * - T, the index is based on the top dimensions indexes
         * - L, the index is based on the data matrix
         */
        qRow: number;
    }

    interface INxTreeDataOption {
        /**
         * Maximum number of nodes in the tree. If this limit is exceeded, no nodes are returned. All nodes are counted.
         */
        MaxNbrOfNodes: number;

        /**
         * Defines areas of the tree to be fetched. Areas must be defined left to right.
         */
        TreeNodes: INxPageTreeNode[];

        /**
         * Filters out complete dimensions from the fetched tree.
         */
        TreeLevels: INxPageTreeLevel;
    }

    interface INxPageTreeNode {
        /**
         * The area of the tree to be fetched. If no area is defined on a dimension, all existing nodes are included.
         */
        qArea: IRect;

        /**
         * When set to true, generated nodes (based on current selection) will be inserted into the returned tree even when
         * there is no actual value. For example, suppose you are looking for hybrid car sales at all car dealerships.
         * Normally, only dealerships where hybrid cars are sold would be part of the returned tree but with qAllValues set to true,
         * all available dealerships will be included regardless if they sold any hybrid cars or not.
         */
        qAllValues: boolean;
    }

    interface INxPageTreeLevel {
        /**
         * The first dimension that is to be part of the tree, counted from the left.
         * For example, if qLeft is equal to 1, omit nodes from the first dimension in the current sort order.
         */
        qLeft: number;

        /**
         * Number of dimensions to include in the tree.
         */
        qDepth: number;
    }

    interface INxTreeNode {
        /**
         * The text version of the value, if available.
         */
        qText: string;

        /**
         * Element number
         */
        qElemNo: number;

        /**
         * Row index in the data matrix.
         * The indexing starts from 0.
         */
        qRow: number;

        /**
         * A generated number applicable to this page only. Used so that children can easily identify who their parents are.
         */
        qNodeNr: number;

        /**
         * The qNodeNr of this node's parent for the current page.
         */
        qParentNode: number;

        /**
         * Type of the cell.
         */
        qType: NxTreeNodeType;

        /**
         * The measures for this node.
         */
        qValues: INxTreeValue;

        /**
         * The children of this node in the tree structure.
         */
        qNodes: INxTreeNode;

        /**
         * Attribute expression values.
         */
        qAttrExps?: INxAttributeExpressionValues;

        /**
         * Attribute dimension values.
         */
        qAttrDims?: INxAttributeDimValues;
    }

    interface INxTreeValue {
        /**
         * The text version of the value, if available.
         */
        qText: string;

        /**
         * Value of the cell.
         * Is set to NaN, if the value is not a number.
         */
        qValue: number;

        /**
         * Attribute expression values.
         */
        qAttrExps?: INxAttributeExpressionValues;

        /**
         * Attribute dimension values.
         */
        qAttrDims?: INxAttributeDimValues;
    }

    /**
     * This class describes all the methods that apply at generic object level.
     * The handle member in the JSON request for all methods listed in this section is the handle of the generic object.
     */
    interface IGenericObject extends enigmaJS.IGeneratedAPI {
        /**
         * app describes all the methods that apply at app level.
         */
        app: IApp;

        /**
         * Aborts the results of a search in a list object.
         * Note: This method applies to list objects (objects with one dimension).
         * Note: After an abort on a list object search, the GetLayout method does not
         *       return any more search results but it does return the values in the field.
         * @param qPath - Path to the definition of the list object.
         * For example, /qListObjectDef.
         * @returns -
         */
        abortListObjectSearch(qPath: string): Promise<void>;

        /**
         * Accept the results of a search in a list object. The search results become selected in the field.
         *
         * Note: This method applies to list objects (objects with one dimension).
         * Note: The search results are displayed using the GetLayout method.
         * @param qPath - Path to the definition of the list object.
         * For example, /qListObjectDef.
         * @param qToggleMode - Set to true to keep any selections present in the list object.
         * If this parameter is set to false, selections made before accepting the list object search become alternative.
         * >> This parameter is mandatory.
         * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected.
         * The default value is false.
         * This parameter is optional.
         * @returns -
         */
        acceptListObjectSearch(qPath: string, qToggleMode: boolean, qSoftLock?: boolean): Promise<void>;

        /**
         * Applies a patch to the properties of an object. Allows an update to some of the properties.
         * It is possible to apply a patch to the properties of a generic object, that is not persistent.
         * Such a patch is called a soft patch.
         * In that case, the result of the operation on the properties (add, remove or delete) is not shown
         * when doing GetProperties and only a GetLayout call shows the result of the operation.
         * Properties that are not persistent are called soft properties. Once the engine session is over,
         * soft properties are cleared.
         *
         * Note: Soft properties apply only to generic objects.
         * Check: Applying a patch takes less time than resetting all the properties.
         * @param qPatches - Array of patches.
         * @param qSoftPatch - If set to true, it means that the properties to be applied are not persistent.
         * The patch is a soft patch.
         * This parameter is optional.
         * Default is false.
         * @returns -
         */
        applyPatches(qPatches: INxPatch[], qSoftPatch?: boolean): Promise<void>;

        /**
         * Begins the selection mode. The app enters the modal state. The specified object enters the selection mode and
         * a modal window is opened. The selection mode can apply to only one object in an app at a time.
         * When a visualization is in selection mode, selections can be made in this visualization. The visualization is not
         * sorted until the selection mode is ended. Once the selection mode is ended and if the selections are accepted,
         * the visualization is sorted according to the sort criteria.
         *
         * For more information about:
         *
         *     - Ending the selection mode, see EndSelections method.
         *     - The sort criteria, see ListObjectDef or HyperCubeDef.
         *
         * Example:
         *
         * A sheet contains a list object and a chart. If the list object is in selection mode then the chart cannot be in selection mode.
         * No selection on the chart can be made until the list object exits the selection mode.
         * @param qPaths - List of the paths to the definition of the objects to enter selection mode.
         * For example, /qListObjectDef.
         * @returns -
         */
        beginSelections(qPaths: string[]): Promise<void>;

        /**
         * Clears the selections in a dimension of a visualization.
         * @param qPath - Path to the definition of the visualization.
         * For example, /qListObjectDef.
         * @param qColIndices - Array of dimension numbers or indexes. The selections are cleared in the specified dimensions.
         * Dimension numbers/indexes start from 0.
         * This parameter is optional. If this parameter is not set, all dimensions are cleared.
         * @returns -
         */
        clearSelections(qPath: string, qColIndices?: number[]): Promise<void>;

        /**
         * Clears the soft properties of a generic object.
         * For more information on how to add soft properties to a generic object,
         * @returns -
         */
        clearSoftPatches(): Promise<void>;

        /**
         * Collapses the left dimensions of a pivot table. This method applies only to pivot tables that are not always fully expanded.
         * In the definition of the hypercube (in HyperCubeDef), the parameter qAlwaysFullyExpanded must be set to false.
         * @param qPath - Path to the definition of the object to be collapsed
         * For example, /qHyperCubeDef.
         * >> This parameter is mandatory.
         * @param qRow - Row index in the data matrix.
         * Indexing starts from 0.
         * @param qCol - Column index. The index is based on the left dimension indexes.
         * Indexing starts from 0.
         * @param qAll - If set to true, it collapses all cells.
         * Parameters qRow and qCol are not used if qAll is set to true, but they need to be set (for example to 0).
         * @returns -
         */
        collapseLeft(qPath: string, qRow: number, qCol: number, qAll: boolean): Promise<void>;

        /**
         * Collapses the top dimensions of a pivot table. This method applies only to pivot tables that are not always fully expanded.
         * In the definition of the hypercube (in HyperCubeDef), the parameter qAlwaysFullyExpanded must be set to false.
         * @param qPath - Path to the definition of the object to be collapsed
         * For example, /qHyperCubeDef.
         * >> This parameter is mandatory.
         * @param qRow - Row index in the data matrix.
         * Indexing starts from 0.
         * @param qCol - Column index. The index is based on the left dimension indexes.
         * Indexing starts from 0.
         * @param qAll - If set to true, it collapses all cells.
         * Parameters qRow and qCol are not used if qAll is set to true, but they need to be set (for example to 0).
         * @returns -
         */
        collapseTop(qPath: string, qRow: number, qCol: number, qAll: boolean): Promise<void>;

        /**
         * Copies the properties of a generic object and its children.
         * The source object is specified by the parameter qFromId and the destination object is referenced by its handle.
         *
         * Note: The identifier of the destination object is the same as before the copy takes place.
         * @param qFromId - Identifier of the object to copy.
         * @returns -
         */
        copyFrom(qFromId: IGenericObjectProperties): Promise<void>;

        /**
         * Creates a generic object that is a child of another generic object.
         *
         * Note: It is possible to update the properties of the child's parent at the same time that the child is created.
         * Both operations are performed by the same call.
         * Note: It is possible to create a child that is linked to another generic object. The two objects have the same properties.
         *
         * Note: In addition to the parameters specified above, the parameter qProp
         * can get any properties defined in the Generic objects section.
         * @param qProp - Information about the child
         * >> This parameter is mandatory.
         * It is possible to create a child that is linked to another object.
         * @param qPropForThis - This parameter is optional.
         * Identifier of the parent's object.
         * Should be set to update the properties of the parent's object at the same time the child is created.
         * @returns - A Promise of GenericObject
         */
        createChild(qProp: IGenericObjectProperties, qPropForThis?: IGenericObjectProperties): Promise<IGenericObject>;

        /**
         * Removes all children and all children to the children on an object.
         * @param qPropForThis - This parameter is optional.
         * Identifier of the parent's object and property to update.
         * Should be set to update the properties of the parent's object at the same time the child is created.
         * @returns -
         */
        destroyAllChildren(qPropForThis?: IGenericObjectProperties): Promise<void>;

        /**
         * Removes a child object.
         * Note: It is possible to update the properties of the child's parent at the same time that the child is removed.
         * Both operations are performed by the same call.
         *
         * Note: Removing a linked object, invalidate the linking object.
         *
         * @param qid - Identifier of the child to remove.
         * >> This parameter is mandatory.
         * @param qPropForThis - This parameter is optional.
         * Identifier of the parent's object and property to update.
         * Should be set to update the properties of the parent's object at the same time the child is created.
         * @returns - true or false
         */
        destroyChild(qid: string, qPropForThis?: IGenericObjectProperties): Promise<boolean>;

        /**
         * You can use the drillUp method with any object that contains a drill-down group as a dimension.
         * This method allows you to move between different levels of information
         * (from a detailed level to a less detailed level of information).
         * You can go back to previous visualizations up to the highest level of the hierarchy.
         * If you try to drill up more steps than there are available levels, the first level of the hierarchy is displayed.
         * @param qPath - Path to the definition of the object to be selected.
         * For example, /qHyperCubeDef.
         * >> This parameter is mandatory.
         * @param qDimNo - Dimension number or index starting from 0
         * The default value is 0.
         * @param qNbrSteps - Number of steps you want to drill up.
         * The default value is 0.
         * @returns -
         */
        drillUp(qPath: string, qDimNo: number, qNbrSteps: number): Promise<void>;

        /**
         * Adds a snapshot to a generic object.
         *
         * Note: Only one snapshot can be embedded in a generic object.
         * Note: If you embed a snapshot in an object that already contains a snapshot,
         * the new snapshot overwrites the previous one.
         * @param qId Identifier of the bookmark. >> This parameter is mandatory.
         * @returns -
         */
        embedSnapshotObject(qId: string): Promise<void>;

        /**
         * Ends the selection mode on a visualization. The selections are accepted or aborted when exiting the selection mode,
         * depending on the qAccept parameter value.
         * @param qAccept - Set this parameter to true to accept the selections before exiting the selection mode.
         * @returns -
         */
        endSelections(qAccept: boolean): Promise<void>;

        /**
         * Expands the left dimensions of a pivot table.
         * This method applies only to pivot tables that are not always fully expanded.
         * In the definition of the hypercube (in HyperCubeDef), the parameter qAlwaysFullyExpanded must be set to false.
         * @param qPath - Path to the definition of the object to be collapsed
         * For example, /qHyperCubeDef.
         * >> This parameter is mandatory.
         * @param qRow - Row index in the data matrix.
         * Indexing starts from 0.
         * @param qCol - Column index. The index is based on the left dimension indexes.
         * Indexing starts from 0.
         * @param qAll - If set to true, it collapses all cells.
         * Parameters qRow and qCol are not used if qAll is set to true, but they need to be set (for example to 0).
         * @returns -
         */
        expandLeft(qPath: string, qRow: number, qCol: number, qAll: boolean): Promise<void>;

        /**
         * Expands the top dimensions of a pivot table.
         * This method applies only to pivot tables that are not always fully expanded.
         * In the definition of the hypercube (in HyperCubeDef), the parameter qAlwaysFullyExpanded must be set to false.
         * @param qPath - Path to the definition of the object to be collapsed
         * For example, /qHyperCubeDef.
         * >> This parameter is mandatory.
         * @param qRow - Row index in the data matrix.
         * Indexing starts from 0.
         * @param qCol - Column index. The index is based on the left dimension indexes.
         * Indexing starts from 0.
         * @param qAll - If set to true, it collapses all cells.
         * Parameters qRow and qCol are not used if qAll is set to true, but they need to be set (for example to 0).
         * @returns -
         */
        expandTop(qPath: string, qRow: number, qCol: number, qAll: boolean): Promise<void>;

        /**
         * Exports the data of any generic object to an Excel file or a open XML file.
         * If the object contains excluded values, those excluded values are not exported.
         * This API has limited functionality and will not support CSV export from all types of objects.
         * Consider using Excel export instead. Treemap and bar chart are not supported.
         *
         * -- Default limitations in number of rows and columns --
         * The default maximum number of rows and columns in the Excel export file is:
         *
         * 1048566 rows per sheet. For pivot tables: 1048566 column dimensions. 10 rows can be added after the export.
         * 16384 columns per sheet. If the number of columns exceeds the limit,
         * the exported file is truncated and a warning message is sent.
         *
         * Note: There is an option to export only the possible values (qExportState is P).
         *
         * -- Default limitation in size --
         * The default size limit of an export file is:
         * 1024*1024*800 for an export to an Excel file.
         * If the exported file is larger than the maximum value, then an out of memory error with code 13000 is returned.
         *
         * Note: Exported files are temporary and are available only for a certain time span and only to the user who created them.
         * @param qFileType - Type of the file to export. >> This parameter is mandatory.
         * @param qPath - Path to the definition of the object to be exported. For example, /qHyperCubeDef.
         * >> This parameter is mandatory if the file type is CSV_C or CSV_T.
         * @param qFileName - Name of the exported file after download from browser.
         * This parameter is optional and only used in Qlik Sense Desktop.
         * @param qExportState - Defines the values to be exported.
         * This parameter is optional.
         * One of:
         *           P to export only the possible values
         *           A to export all values (default)
         *
         * @returns - A Promise of String qUrl: <url of the exported file> and qWarnings: [1000] only if exported data is truncated
         */
        exportData(qFileType: FileType, qPath: string, qFileName?: string, qExportState?: ExportStateType): Promise<string>;

        /**
         * Returns the identifier and the type for each child in an app object.
         * If the child contains extra properties in qInfos,these properties are returned.
         *
         * Note: Full dynamic properties are optional and are returned if they exist in the definition of the object.
         * @returns - A Promise Array of NxInfo
         */
        getChildInfos(): Promise<INxInfo[]>;

        /**
         * Returns the type of the object and the corresponding handle.
         * @param qId - Identifier of the object.
         * >> This parameter is mandatory.
         * @returns - A Promise of GenericObject
         */
        getChild(qId: string): Promise<IGenericObject>;

        /**
         * Returns the identifier, the type and the properties of the object.
         * If the object contains some soft properties, the soft properties are returned.
         * If the object is linked to another object, the properties of the linking object are returned.
         * @returns - A Promise of GenericObjectProperties
         */
        getEffectiveProperties(): Promise<IGenericObjectProperties>;

        /**
         * Gets the properties of:
         *       - a generic object
         *       - the children of the generic object
         *       - the bookmarks/embedded snapshots of the generic object
         * @returns - A Promise  GenericObjectEntry
         */
        getFullPropertyTree(): Promise<IGenericObjectEntry>;

        /**
         * This method supports data binning.
         * When a generic object with two or three measures and one dimension contains a lot of data,
         * groups of points (i.e cells) can be rendered instead of points.
         * A zone of interest can be refined (for zooming in) up to a maximum refinement level
         * (set in the qQueryLevel parameter) or coarsened (for zoom out).
         * The grid of cells is adaptive (not static), meaning that it adapts to different length scales.
         * The GetHyperCubeBinnedData method gives information about the adaptive grid and the values of the generic object.
         * The number of points in a cell and the coordinates (expressed in the measure range) of each cell are returned.
         * Dimension values and measure values are rendered at point level (highest detailed level).
         *
         * Note: The generic object should contain two or three measures and one dimension.
         * When the refinement is high, the first two measures are represented on the x-axis and on the y-axis,
         * while the third measure is visualized as color or point size.
         * @param qPath - Path to the definition of the object.
         * For example, /qHyperCubeDef.
         * >> This parameter is mandatory.
         * @param qPages - Array of pages to retrieve.
         * Since the generic object contains two measures and one dimension, qWidth should be set to 3.
         * If the value of a measure is Null, the value cannot be rendered. Therefore, the number of
         * elements rendered in a page can be less than the number defined in the property qHeight.
         * >> This parameter is mandatory.
         * @param qViewport - Defines the canvas and the zoom level.
         * This parameter is not yet used and is optional.
         * @param qDataRanges - Range of the data to render.
         * This range applies to the measure values.
         * The lowest and highest values of a measure can be retrieved
         * by using the GetLayout method ( in /qHyperCube/qMeasureInfo).
         * >> This parameter is mandatory.
         * @param qMaxNbrCells - Maximum number of cells in the grid.
         * >> This parameter is mandatory.
         * @param qQueryLevel - Level of details. The higher the level, the more detailed information you get (zoom-in).
         * When the number of points to render falls below a certain threshold,
         * the values are no longer rendered as cells but as points.
         * The query level should be no greater than 20.
         * This parameter is optional.
         * @param qBinningMethod - Selects the algorithm.
         * The default value is 0.
         * One of:
         *           0: Adaptive grid
         * @returns - A Promise Array of NxDataPage
         */
        getHyperCubeBinnedData(qPath: string, qPages: INxPage[], qViewport: INxViewPort, qDataRanges: INxDataAreaPage,
                               qMaxNbrCells: number, qQueryLevel: number, qBinningMethod: number): Promise<INxDataPage[]>;

        /**
         * Retrieves and packs compressed hypercube and axis data. It is possible to retrieve specific pages of data.
         *
         * Note: Binning is done on the time stamp data as well as the date.
         * This means that you can zoom in to a level of granularity as low as seconds.
         * @param qPath - Path to the definition of the object.
         * For example, /qHyperCubeDef. >> This parameter is mandatory.
         * @param qOptions - Array of (NxContinuousDataOptions)
         * Options.NbrPoints is number of bins for binning.
         * Options.MaxNbrTicks - maximum number of ticks.
         * @returns - A Promise <Boolean> or <Array of NxDataPage> or <Array of NxAxisData>
         */
        getHyperCubeContinuousData(qPath: string, qOptions: IContinuousDataOptions[]): Promise<{qDataPages: INxDataPage[], qAxisData: INxAxisData[]}>;

        /**
         * Retrieves the values of a chart, a table, or a scatter plot. It is possible to retrieve specific pages of data.
         * Note: This method does not apply to stacked tables.
         * @param qPath - Path to the definition of the object to be selected.
         * For example, /qHyperCubeDef.
         * >> This parameter is mandatory.
         * @param qPages - <Array of NxPage> to retrieve.
         * >> This parameter is mandatory.
         * @returns - A data set Array of NxDataPage
         */
        getHyperCubeData(qPath: string, qPages: INxPage[]): Promise<INxDataPage[]>;

        /**
         * Retrieves the values of a pivot table. It is possible to retrieve specific pages of data.
         * @param qPath - Path to the definition of the object to be selected.
         * For example, /qHyperCubeDef.
         * >> This parameter is mandatory.
         * @param qPages - Array of pages to retrieve
         * >> This parameter is mandatory.
         * @returns - A data set Array of NxPivotPage
         */
        getHyperCubePivotData(qPath: string, qPages: INxPage[]): Promise<INxPivotPage[]>;

        /**
         * Reduces the data of a bar chart, a line chart or a scatter plot chart and retrieves them.
         * The reduction is dependent on the zoom factor (parameter qZoomFactor) and on the reduction mode.
         *
         * Note: This method can be used to create mini charts.
         *
         * -- Bar chart or line chart data reduction --
         * For the data reduction to happen, the following conditions must be fulfilled:
         * The values cannot fit in the defined page (parameter qPages).
         * The zoom factor is not 0 (parameter qZoomFactor).
         * The reduction mode must be set to D1. The reduction algorithm keeps the shape of the visualizations and works whatever
         * the number of dimensions in the chart. The global profile of the chart is reduced, and not only a specific dimension.
         * A visualization that has been reduced contains fewer values but its shape is the same. Data of all types can be reduced. Therefore it is hard to relate the
         * values before and after a reduction especially when reducing string values.
         *
         * Example:
         * If you have a chart with 1 million data, and you have set the zoom factor to 5, the GetHyperCubeReducedData
         * method reduces the chart and retrieves 200 000 data.
         *
         * -- Scatter plot chart data reduction--
         * The reduction mode must be set
         * to C. This reduction mechanism follows the 2D K-Means algorithm. Data are reduced into a number of clusters. Each data
         * is assigned to a specific centroid. The number of centroids can be defined in the parameter qZoomFactor.
         *
         * -- Scatter plot chart resolution reduction --
         * The reduction mode must be set to S. The resolution is reduced according
         * to the zoom factor (parameter qZoomFactor).
         *
         * Example:
         * If you have a scatter plot chart and the zoom factor is set to 2, the scatter plot chart resolution is reduced by 4.
         * @param qPath - Path to the definition of the object to be selected.
         * For example, /qHyperCubeDef.
         * @param Pages - Array of NxPage.
         * @param qZoomFactor - Defines the zoom factor.
         * If set to -1, the engine decides of the zoom factor.
         * If the reduction mode is D1 or S, the zoom factor is 2n.
         * If the zoom factor is 5, the data are reduced by a factor 32.
         * If the reduction mode is C, the zoom factor defines the number of centroids.
         * @param qReductionMode - Defines the reduction mode.
         * One of:
         *       - N for no data reduction.
         *       - D1 to reduce a bar chart or line chart. The profile of the chart is reduced whatever the number of dimensions in the chart.
         *       - S to reduce the resolution of a scatter plot.
         *       - C to reduce the data of a scatter plot chart.
         *       - ST to reduce the data of a stacked pivot table.
         * @returns - A data set Array of NxDataPage.
         */
        getHyperCubeReducedData(qPath: string, qPages: INxPage[], qZoomFactor: number, qReductionMode: ReductionModeType): Promise<INxDataPage[]>;

        /**
         * Retrieves the values of a stacked pivot table. It is possible to retrieve specific pages of data.
         * @param qPath - Path to the definition of the object to be selected.
         * For example, /qHyperCubeDef.
         * @param Pages - Array of pages to retrieve.
         * >> This parameter is mandatory.
         * @param qMaxNbrCells - Maximum number of cells at outer level.
         * >> This parameter is optional. The default value is 10 000.
         * @returns - A data set Array of NxStackPage.
         */
        getHyperCubeStackData(qPath: string, qPages: INxPage[], qMaxNbrCells?: number): Promise<INxStackPage[]>;

        /**
         * Retrieves the values of a stacked pivot table. It is possible to retrieve specific pages of data.
         * @param qPath - Path to the definition of the object to be selected.
         * For example, /qHyperCubeDef.
         * @param qNodeOptions - Specifies all the paging filters needed to define the tree to be fetched.
         * @returns - A data set Array of NxTreeNode.
         */
        getHyperCubeTreeData(qPath: string, qNodeOptions: INxTreeDataOption[]): Promise<INxTreeNode>;

        /**
         * Returns the type and identifier of the object.
         * @returns - A Promise of NxInfo.
         */
        getInfo(): Promise<INxInfo>;

        /* ToCheck!  return value is GenericObjectLayout  */
        /**
         * Evaluates an object and displays its properties including the dynamic properties.
         * If the member delta is set to true in the request object, only the delta is evaluated.
         *
         * Note: In addition to the parameters displayed above, the GetLayout method can return other properties according
         * to what is defined in the generic object. For example, if qHyperCubeDef is defined in the generic object,
         * the GetLayout method returns the properties described in HyperCube.
         * @returns - A Promise of GenericBaseLayout.
         */
        getLayout(): Promise<IGenericBaseLayout>;

        /**
         * Lists the linked objects to a generic object, a dimension or a measure.
         * @returns - Array of NxLinkedObjectInfo
         */
        getLinkedObjects(): Promise<INxLinkedObjectInfo[]>;

        /**
         * GetListObjectContinuousData method
         * @param qPath - Path to the definition of the object.
         * For example, /qHyperCubeDef.
         * This parameter is mandatory.
         * @param qOptions - Options.NbrPoints is number of bins for binning.
         * - Options.MaxNbrTicks - maximum number of ticks.
         * @returns - A data set Array of (NxDataPage) or (NxAxisData)
         */
        getListObjectContinuousData(qPath: string, qOptions: IContinuousDataOptions): Promise<{qDataPages: INxDataPage, qAxisData: INxAxisData[]}>;

        /**
         * Retrieves the values of a list object.
         * @param qPath - Path to the definition of the object to be selected.
         * For example, /qListObjectDef.
         * @param qPages -Array of pages you are interested in.
         * @returns - Array of NxDataPage
         */
        getListObjectData(qPath: string, qPages: INxPage[]): Promise<INxDataPage[]>;

        /**
         * Returns the identifier, the type and the properties of the object.
         * Because it is not mandatory to set all properties when you define an object,
         * the GetProperties method may show properties that were not set. In that case, default values are given.
         * If the object contains some soft properties, the soft properties are not returned by the GetProperties method.
         * Use the GetEffectiveProperties method instead.
         * If the object is linked to another object, the properties of the linking object are not returned
         * by the GetProperties method. Use the GetEffectiveProperties method instead.
         *
         * Note: If the member delta is set to true in the request object, only the delta is retrieved.
         * @returns - A Promise of GenericObjectProperties
         */
        getProperties(): Promise<IGenericObjectProperties>;

        /**
         * Returns the type of the object and the corresponding handle.
         * @returns - A Promise of GenericBookmark
         */
        getSnapshotObject(): Promise<IGenericBookmark>;

        /**
         * Locks the selected values of a generic object.
         * @param qPath - Path to the definition of the object.
         * For example, /qListObjectDef.
         * @param qColIndices - Dimension numbers or dimension indexes where the lock should apply.
         * Dimension numbers/indexes start from 0.
         * This parameter is optional. If this parameter is not set, the selected values in all dimensions are locked.
         */
        lock(qPath: string, qColIndices?: number[]): Promise<void>;

        /**
         * Publishes a generic object.
         *
         * Note: This operation is possible only in Qlik Sense Enterprise.
         */
        publish(): Promise<void>;

        /**
         * Make range selections in measures.
         *
         * Note: This method applies to hypercubes. For example, bar charts, tables and scatter plots.
         * @param qPath - Path to the definition of the object.
         * For example, /qListObjectDef.
         * >> This parameter is mandatory.
         * @param qRanges - Ranges of selection.
         * >>This parameter is mandatory.
         * @param qColumnsToSelect - Indicates which dimensions to select.
         * The dimensions numbering starts at 0 (first dimension is 0).
         * If the array is empty, all dimensions are selected.
         * >> This parameter is optional.
         * @param qOrMode - Applies to hypercubes with multiple measures.
         * If set to true, it means that at least one of the measures must be in the range of
         * selections for the group of measures to be selected.
         * If set to false, it means that all measures must be in the range of
         * selections for the group of measures to be selected.
         * This parameter is optional. The default value is false.
         * @param qDeselectOnlyOneSelected - Set this parameter to true to unselect the last
         * single selected value. There must be only one selected value in the field.
         * >> The default value is false.
         * @returns - true or false
         */
        multiRangeSelectHyperCubeValues(qPath: string, qRanges: INxMultiRangeSelectInfo, qDeselectOnlyOneSelected: boolean, qColumnsToSelect?: number[], qOrMode?: boolean): Promise<boolean>;

        /**
         * Make range selections in measures.
         * Note: This method applies to hypercubes. For example, bar charts, tables and scatter plots.
         * @param qPath - Path to the definition of the object to be selected.
         * For example, /qHyperCubeDef.
         * >> This parameter is mandatory.
         * @param qRanges - Ranges of selection.
         * >>This parameter is mandatory.
         * @param qDeselectOnlyOneSelected - Set this parameter to true to unselect the last
         * single selected value. There must be only one selected value in the field.
         * >> The default value is false.
         * @param qColumnsToSelect - Indicates which dimensions to select.
         * The dimensions numbering starts at 0 (first dimension is 0).
         * If the array is empty, all dimensions are selected.
         * >> This parameter is optional.
         * @param qOrMode - Applies to hypercubes with multiple measures.
         * If set to true, it means that at least one of the measures must be in the range of
         * selections for the group of measures to be selected.
         * If set to false, it means that all measures must be in the range of
         * selections for the group of measures to be selected.
         * This parameter is optional. The default value is false.
         * @returns - true or false
         */
        rangeSelectHyperCubeValues(qPath: string, qRanges: INxRangeSelectInfo[], qDeselectOnlyOneSelected: boolean, qColumnsToSelect?: number[], qOrMode?: boolean): Promise<boolean>;

        /**
         * Resets all selections made in selection mode.
         */
        resetMadeSelections(): Promise<void>;

        /**
         * Searches for a string in a list object.
         *
         * Note: This method applies to list objects (objects with one dimension).
         * Note: The search results can be displayed using the GetLayout method.
         * @param qPath - Path to the definition of the list object.
         * For example, /qListObjectDef.
         * @param qMatch - Search string.
         * Wild card characters are allowed. The search is not case sensitive.
         * Examples:
         *        P*U*: retrieves only values that start with P and contain U
         *        P U S: retrieves values that start with P, U or S
         * @returns - The operation is successful if qSuccess is set to true.
         */
        searchListObjectFor(qPath: string, qMatch: string): Promise<boolean>;

        /**
         * Makes selections in multiple dimensions and measures.
         *
         * Note: This method applies to hypercubes, such as bar charts, tables and scatter plots.
         * @param qPath - Path to the definition of the object to be selected.
         * For example, /qHyperCubeDef.
         * This parameter is mandatory.
         * @param qRowIndices - Array of row indexes to select, starting from 0.
         * If the array is empty [ ], all rows are selected.
         * >> This parameter is mandatory.
         * @param qColIndices - Indexes of the columns to select, starting from 0.
         * A column corresponds to a dimension or a measure depending on the definition of the hypercube.
         * Example:
         *   If the hypercube has two dimensions and one measure:
         *        [0] selects the first column (i.e the first dimension)
         *        [1] selects the second column (i.e the second dimension)
         *        [2] selects the third column (i.e the measure)
         *    If the array is empty [ ], all columns are selected.
         * >>This parameter is mandatory.
         * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected.
         * >> This parameter is mandatory.
         * @param qDeselectOnlyOneSelected - Set this parameter to true to unselect the last single selected value.
         * There must be only one selected value in the field.
         * The default value is false.
         * @returns - true or false.
         */
        selectHyperCubeCells(qPath: string, qRowIndices: number[], qColIndices: number[], qSoftLock: boolean, qDeselectOnlyOneSelected: boolean): Promise<boolean>;

        /**
         * SelectHyperCubeContinuousRange method
         * @param qPath - Path to the definition of the object.
         * For example, /qHyperCubeDef.
         * >>This parameter is mandatory.
         * @param qRanges - Selects ranges in a hypercube in (Ranges[N].Min,Ranges[N].Max) intervals.
         * If either Ranges[N].MinInclEq or Ranges[N].MaxInclEq, or both flags are set to true
         * then Min and Max values will be selected.
         * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected.
         * >> This parameter is mandatory.
         * @returns - true or false.
         */
        selectHyperCubeContinuousRange(qPath: string, qRanges: INxContinuousRangeSelectInfo[], qSoftLock: boolean): Promise<boolean>;

        /**
         * Selects some values in one dimension.
         * The values are identified by their element numbers.
         *
         * Note: This method applies to charts, tables and scatter plots.
         * @param qPath - Path to the definition of the object.
         * For example, /qHyperCubeDef.
         * >>This parameter is mandatory.
         * @param qDimNo - Dimension number or index to select.
         * Dimension numbers/index start from 0.
         * >> This parameter is mandatory.
         * @param qValues - Element numbers of the field to select.
         * You can select multiple elements; the separator is the comma.
         * >> This parameter is mandatory.
         * @param qToggleMode - Set to true to toggle.
         * >> This parameter is mandatory.
         * @returns - true or false.
         */
        selectHyperCubeValues(qPath: string, qDimNo: number, qValues: number[], qToggleMode: boolean): Promise<boolean>;

        /**
         * Selects all values of a field.
         *
         * Note: This method applies to list objects (objects with one dimension).
         * @param qPath - Path to the definition of the object to be selected.
         * For example, /qListObjectDef.
         * >> This parameter is mandatory.
         * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected.
         * The default value is false.
         * >> This parameter is optional.
         * @returns - true or false.
         */
        selectListObjectAll(qPath: string, qSoftLock?: boolean): Promise<boolean>;

        /**
         * Selects all values of a field.
         *
         * Note: This method applies to list objects (objects with one dimension).
         * @param qPath - Path to the definition of the object to be selected.
         * For example, /qListObjectDef.
         * >> This parameter is mandatory.
         * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected.
         * The default value is false.
         * >> This parameter is optional.
         * @returns - true or false.
         */
        selectListObjectAlternative(qPath: string, qSoftLock?: boolean): Promise<boolean>;

        /**
         * @param qPath - Path to the definition of the object to be selected.
         * For example, /qListObjectDef.
         * >> This parameter is mandatory.
         * @param qRanges -Selects ranges in a hypercube in (Ranges[N].Min,Ranges[N].Max) intervals.
         * If either Ranges[N].MinInclEq or Ranges[N].MaxInclEq, or both flags are set to true
         * then Min and Max values will be selected.
         * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected.
         * The default value is false.
         * >> This parameter is optional.
         * @returns - true or false.
         */
        selectListObjectContinuousRange(qPath: string, qRanges: Range[], qSoftLock?: boolean): Promise<boolean>;

        /**
         * Inverts the current selections in a specific field.
         *
         * Note: This method applies to list objects (objects with one dimension).
         * @param qPath - Path to the definition of the object to be selected.
         * For example, /qListObjectDef.
         * >> This parameter is mandatory.
         * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected.
         * The default value is false.
         * >> This parameter is optional.
         * @returns - true or false.
         */
        selectListObjectExcluded(qPath: string, qSoftLock?: boolean): Promise<boolean>;

        /**
         * Selects all possible values of a list object.
         *
         * Note: This method applies to list objects (objects with one dimension).
         * @param qPath - Path to the definition of the object to be selected.
         * For example, /qListObjectDef.
         * >> This parameter is mandatory.
         * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected.
         * The default value is false.
         * >> This parameter is optional.
         * @returns - true or false.
         */
        selectListObjectPossible(qPath: string, qSoftLock?: boolean): Promise<boolean>;

        /**
         * Makes single selections in dimensions.
         *
         * Note: This method applies to list objects only.
         * @param qPath - Path to the definition of the object to be selected.
         * For example, /qListObjectDef.
         * >> This parameter is mandatory.
         * @param qValues - Element numbers to select.
         * You can select multiple values; the separator is the comma.
         * >> This parameter is mandatory.
         * @param qToggleMode - Set to true to toggle.
         * >> This parameter is mandatory.
         * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected.
         * The default value is false.
         * >> This parameter is optional.
         * @returns - true or false.
         */
        selectListObjectValues(qPath: string, qValues: number[], qToggleMode: boolean, qSoftLock?: boolean): Promise<boolean>;

        /**
         * Note: This method only applies to hypercubes that are not represented as straight tables.
         * The parameter qMode in HyperCubeDef must be set either to P or K.
         *
         * -- Pivot table --
         * Makes selections in the top or left dimension cells of a pivot table or in the data matrix.
         * Only expanded dimensions can be selected.
         *
         * -- Stacked table --
         * Makes selections in the left dimension cells of a stacked table or in the data matrix.
         *
         * Note: There is no top dimensions in a stacked table. A stacked table can only contain one measure.
         * @param qPath - Path to the definition of the object to be selected.
         * For example, /qHyperCubeDef.
         * >> This parameter is mandatory.
         * @param qSelections - Information about the selections to perform
         * @param qSoftLock - Set to true to ignore locks; in that case, locked fields can be selected.
         * The default value is false.
         * >> This parameter is optional.
         * @param qDeselectOnlyOneSelected - Set this parameter to true to unselect the last single selected value.
         * There must be only one selected value in the field.
         * The default value is false.
         * @returns - true or false.
         */
        selectPivotCells(qPath: string, qSelections: INxSelectionCell[], qDeselectOnlyOneSelected: boolean, qSoftLock?: boolean): Promise<boolean>;

        /**
         * Sets the order of the children in a generic object.
         *
         * Note: To change the order of the children in a generic object, the identifiers of all the children
         * must be included in the list of the identifiers (in qIds).
         * @returns -
         */
        setChildArrayOrder(qIds: string[]): Promise<void>;

        /**
         * Sets the properties of:
         *
         * - a generic object
         * - the children of the generic object
         * - the bookmarks/embedded snapshots of the generic object
         *
         * Note: If the SetFullPropertyTree method is asked to set some properties to a child that does not exist,
         *           it creates the child.
         * Note: The type of an object cannot be updated.
         */
        setFullPropertyTree(qPropEntry: IGenericObjectEntry): Promise<void>;

        /**
         * Sets some properties for a generic object.
         *
         * Note: In addition to the parameters specified above, the object can get any properties
         * defined in the Generic objects section.
         */
        setProperties(qProp: IGenericObjectProperties): Promise<void>;

        /**
         * Unlocks the selected values of a generic object if the target (or handle ) is a generic object
         * @param qPath - Path to the definition of the object.
         * For example, /qListObjectDef.
         * @param qColIndices - Dimension numbers/indexes where the unlock should apply.
         * Dimension numbers/indexes start from 0.
         * This parameter is optional. If this parameter is not set, the locked values in all dimensions are unlocked.
         */
        unlock(qPath: string, qColIndices?: number[]): Promise<void>;

        /**
         * Unpublishes a generic object.
         *
         * Note: This operation is possible only in Qlik Sense Enterprise.
         */
        unPublish(): Promise<void>;
    }

    /**
     * Is the layout for GenericMeasureProperties extend of GenericBaseLayout
     */
    interface IGenericMeasureLayout extends IGenericBaseLayout {
        /**
         * Information about the measure.
         */
        qMeasure: INxLibraryMeasureDef;
    }

    /**
     * Is the layout for GenericVariableProperties.
     */
    interface IGenericVariableLayout extends IGenericBaseLayout {
        /**
         * Some text.
         */
        qText: string;

        /**
         * A value.
         */
        qNum: number;

        /**
         * If set to true, it means that the variable was defined via script.
         */
        qIsScriptCreated: boolean;
    }

    /**
     * NxLibraryMeasureDef...
     */
    interface INxLibraryMeasureDef {
        /**
         * Label of the measure.
         */
        qLabel: string;

        /**
         * Definition of the measure.
         */
        qDef: string;

        /**
         * Used to define a cyclic group or drill-down group.
         * This parameter is optional.
         * Default value is no grouping.
         */
        qGrouping?: NxGrpType;

        /**
         * Array of expressions.
         */
        qExpressions: string[];

        /**
         * Index to the active expression in a measure.
         */
        qActiveExpression: number;
    }

    interface IGenericDerivedFieldProperties extends IGenericProperties {
    }

    interface IGenericDerivedFields extends enigmaJS.IGeneratedAPI {
        /**
         * Shows the properties of an object.
         * Returns the identifier and the definition of the derived field.
         *
         * @returns - A Promise IGenericDerivedFieldProperties
         */
        getProperties(): Promise<IGenericDerivedFieldProperties>;

        /**
         * @returns qInfo
         */
        getInfo(): Promise<any>;

        /**
         * @returns qData
         */
        getDerivedFieldData(): Promise<any>;

        /**
         * @returns qField
         */
        getDerivedField(qId: string): Promise<any>;

        /**
         * @returns qListData
         */
        getListData(): Promise<any>;

        /**
         * @returns qFields
         */
        getDerivedFields(): Promise<any>;

        /**
         * @returns qGroups
         */
        getDerivedGroups(): Promise<any>;
    }

    /**
     * This class describes all the methods that apply at measure level.
     * The handle member in the JSON request for all methods listed in this section is the handle of the measure.
     */
    interface IGenericMeasure extends enigmaJS.IGeneratedAPI {
        /**
         * Applies a patch to the properties of an object. Allows an update to some of the properties.
         *
         * Note: Applying a patch takes less time than resetting all the properties.
         * @param qPatches - Array of patches.
         * @returns -
         */
        applyPatches(qPatches: INxPatch[]): Promise<void>;

        /**
         * Returns the type and identifier of the object.
         * @returns - A Promise of NxInfo
         */
        getInfo(): Promise<INxInfo>;

        /**
         * Evaluates a measure and displays its properties, including the dynamic properties.
         * @returns - A Promise of GenericMeasureLayout
         */
        getLayout(): Promise<IGenericMeasureLayout>;

        /**
         * Lists the linked objects to a generic object, a dimension or a measure.
         * @returns - Array of NxLinkedObjectInfo
         */
        getLinkedObjects(): Promise<INxLinkedObjectInfo>;

        /**
         * Returns the definition of a measure
         * @returns - Information about the measure.
         * >> This parameter is mandatory.
         */
        getMeasure(): Promise<IGenericMeasureProperties>;

        /**
         * Shows the properties of an object.
         * Returns the identifier and the definition of the measure.
         *
         * Note: If the member delta is set to true in the request object, only the delta is retrieved.
         * @returns - A Promise GenericMeasureProperties
         * >> This parameter is mandatory.
         */
        getProperties(): Promise<IGenericMeasureProperties>;

        /**
         * Publishes a measure.
         */
        publish(): Promise<void>;

        /**
         * Sets some properties for a measure.
         * @param qProp - Information about the measure.
         * This parameter is mandatory.
         * @returns - A Promise of GenericMeasureProperties
         */
        setProperties(qProp: IGenericMeasureProperties): Promise<void>;

        /**
         * Unpublishes a measure.
         */
        unPublish(): Promise<void>;
    }

    /**
     * This class describes all the methods that apply at generic variable level.
     * The handle member in the JSON request for all methods listed in this section is the handle of the generic variable.
     */
    interface IGenericVariable extends enigmaJS.IGeneratedAPI {
        /**
         * Applies a patch to the properties of a variable. Allows an update to some of the properties.
         *
         * Note: Applying a patch takes less time than resetting all the properties.
         * @param qPatches - Array of NxPatch
         */
        applyPatches(qPatches: INxPatch[]): Promise<void>;

        /**
         * Returns the type and identifier of the object.
         */
        getInfo(): Promise<INxInfo>;

        /**
         * Evaluates an object and displays its properties including the dynamic properties.
         * If the member delta is set to true in the request object, only the delta is evaluated.
         * @returns GenericVariableLayout Information on the object
         */
        getLayout(): Promise<IGenericVariableLayout>;

        /**
         * Shows the properties of an object.
         *
         * Note: If the member delta is set to true in the request, only the delta is retrieved.
         * @returns GenericVariableProperties Information about the generic object
         */
        getProperties(): Promise<IGenericVariableProperties>;

        /**
         * Sets the value of a dual variable.
         *
         * Note: These changes are not persistent. They only last the duration of the engine session.
         * @param qText - String representation of a dual value. Set this parameter to "",
         * if the string representation is to be Null.
         * >> This parameter is mandatory.
         * @param qNum - Numeric representation of a dual value.
         * >> This parameter is mandatory.
         */
        setDualValue(qText: string, qNum: number): Promise<void>;

        /**
         * Sets a numerical value to a variable.
         *
         * Note: These changes are not persistent. They only last the duration of the engine session.
         * @param qVal - Value of the variable.
         */
        setNumValue(qVal: number): Promise<void>;

        /**
         * Sets some properties for a variable.
         *
         * Note: The identifier of a variable cannot be modified.
         * You cannot update the properties of a script-defined variable using the SetProperties method.
         * @param - Information about the variable.
         * >> This parameter is mandatory.
         */
        setProperties(qProp: IGenericVariableProperties): Promise<void>;

        /**
         * Sets a string value to a variable.
         * Note: These changes are not persistent. They only last the duration of the engine session.
         * @param qVal - Value of the variable. The string can contain an expression.
         */
        setStringValue(qVal: string): Promise<void>;
    }

    /**
     * AlfaNumString...
     */
    interface IAlfaNumString {
        /**
         * Calculated value.
         */
        qString: string;

        /**
         * Is set to true if the value is a numeric.
         */
        qIsNum: boolean;
    }

    /**
     * NxVariableProperties...
     */
    interface INxVariableProperties {
        /**
         * Name of the variable.
         */
        qName: string;

        /**
         * Defines the format of the value of a variable.
         */
        qNumberPresentation: IFieldAttributes;

        /**
         * Set this property to true to update the variable when applying a bookmark.
         * The value of a variable can affect the state of the selections.
         * >> The default value is false.
         */
        qIncludeInBookmark: boolean;

        /**
         * The value of a variable can be an enumeration.
         * Set this property to true to reflect the predefined values in an enumeration.
         */
        qUsePredefListedValues: boolean;

        /**
         * List of enumerations.
         * This property is used if qUsePredefListedValues is set to true.
         */
        qPreDefinedList: string[];
    }

    /**
     * This class describes all the methods that apply at variable level.
     *
     * Note: Methods in this class are deprecated. Use methods in the GenericVariable class instead.
     *
     * The handle member in the JSON request for all methods listed in this section is the handle of the variable.
     */
    interface IVariable extends enigmaJS.IGeneratedAPI {
        /**
         * Sets the value of a dual variable overriding any input constraints.
         *
         * Note: This method is deprecated (not recommended to use). Use SetProperties method instead.
         * Note: The ForceContent method does not evaluate any expression.
         * @param qs - String representation of a dual value.
         * Set this parameter to "", if the string representation is to be Null.
         * >> This parameter is mandatory.
         * @param qd - Numeric representation of a dual value.
         * >> This parameter is mandatory.
         */
        forceContent(qs: string, qd: number): Promise<void>;

        /**
         * Returns the calculated value of a variable.
         *
         * Note: This method is deprecated (not recommended to use). Use GetProperties method instead.
         */
        getContent(): Promise<IAlfaNumString>;

        /**
         * Gets the properties of a variable.
         *
         * Note: This method is deprecated (not recommended to use). Use GetProperties method instead.
         */
        getNxProperties(): Promise<INxVariableProperties>;

        /**
         * Returns the raw value of a variable.
         *
         * Note: This method is deprecated (not recommended to use). Use GetProperties method instead.
         */
        getRawContent(): Promise<string>;

        /**
         * Sets a value to a variable.
         *
         * Note: This method is deprecated (not recommended to use). Use SetProperties method instead.
         * @param qContent - Value of the variable.
         * >> This parameter is mandatory.
         * @param qUpdateMRU - If set to true, the value is added to the Most Recently Used (MRU) list.
         * >> This parameter is mandatory.
         */
        setContent(qContent: string, qUpdateMRU: boolean): Promise<boolean>;

        /**
         * Sets some properties to a variable.
         *
         * Note: This method is deprecated (not recommended to use). Use SetProperties method instead.
         *
         * In addition to the properties described below, dynamic properties can be added.
         * @param qProperties - Information about the properties of the variable
         */
        setNxProperties(qProperties: INxVariableProperties): Promise<void>;
    }

    /**
     * AppEntry...
     */
    interface IAppEntry {
        /**
         * Identifier of the app.
         */
        qID: string;

        /**
         * Title of the app.
         */
        qTitle: string;

        /**
         * Path of the app.
         */
        qPath: string;

        /**
         * Last reload time of the app.
         */
        qLastReloadTime: string;

        /**
         * Is set to true if the app is read-only.
         */
        qReadOnly: boolean;

        /**
         * Meta data.
         */
        qMeta: INxMeta;

        /**
         * App thumbnail.
         */
        qThumbnail: IStaticContentUrl;
    }

    /**
     * IBNFDefResult
     */
    interface IBNFDefResult {
        /**
         * Description of the scripting language grammar.
         */
        qBnfDefs: IBNFDef[];

        /**
         * A string hash of the BNF definition.
         */
        qBnfHash: string;
    }

    /**
     * BNFDef...
     */
    interface IBNFDef {
        /**
         * Array of token references that all together build up the definition of the current token.
         * If the array is not empty, it means that the definition is a BNF rule (qIsBnfRule is set to true).
         * There are a few exceptions where some BNF rules have an empty array (qBnf is empty).
         */
        qBnf: number[];

        /**
         * Number of the current token definition.
         */
        qNbr: number;

        /**
         * Number of the parent rule definition.    Integer
         */
        qPNbr: number;

        /**
         * Reference identifier to a function described in the documentation.
         * The identifier is stored in the definition of the token containing the function name.
         * Is not used in Qlik Sense.
         */
        qHelpId: number;

        /**
         * Token name.
         * One of:
         *               a rule name
         *               an identifier
         *               a literal value
         */
        qName: string;

        /**
         * Literal string of the token.
         * Examples: 'Round' and '('.
         */
        qStr: string;

        /**
         * If set to true, it means that a list of related rule tokens is assigned to qBnf.
         * >> This parameter is optional.
         * >> The default value is false.
         */
        qIsBnfRule?: boolean;

        /**
         * If set to true, it means that the definition specifies a script statement.
         * >> This parameter is optional.
         * >> The default value is false.
         */
        qScriptStatement?: boolean;

        /**
         * If set to true, it means that the definition specifies a control statement.
         * >> This parameter is optional.
         * >> The default value is false.
         */
        qControlStatement?: boolean;

        /**
         * If set to true, it means that the definition specifies a literal token.
         * >> This parameter is optional.
         * >> The default value is false.
         */
        qBnfLiteral?: boolean;

        /**
         * If set to true, it means that the definition is related to a Qlik Sense function.
         * It cannot be an aggregation function.
         * >> This parameter is optional.
         * >> The default value is false.
         */
        qQvFunc?: boolean;

        /**
         * If set to true, it means that the definition is related to an aggregation function.
         * >> This parameter is optional.
         * >> The default value is false.
         */
        qAggrFunc?: boolean;

        /**
         * Group of the function.
         */
        qFG: FunctionGroupType;

        /**
         * If set to true, it means that the definition is related to a field.
         * >> This parameter is optional.
         * >> The default value is false.
         */
        qFieldFlag?: boolean;

        /**
         * Type of the data.
         */
        qMT: MTType;

        /**
         * Indicates if a script statement, a chart or a script function is deprecated (not recommended to use).
         * If set to true, it means that the script statement or the function is not recommended for use in Qlik Sense.
         * >> This parameter is optional.
         * >> The default value is false.
         */
        qDepr?: boolean;
    }

    /**
     * CustomConnector...
     */
    interface ICustomConnector {
        /**
         * Name of the custom connector file.
         */
        qProvider: string;

        /**
         * Name of the parent folder that contains the custom connector file.
         */
        qParent: string;

        /**
         * Name of the custom connector as displayed in the Qlik interface.
         */
        qDisplayName: string;

        /**
         * Mode of the machine (64 or 32 bits).
         */
        qMachineMode: MachineModeType;
    }

    /**
     * DocListEntry...
     */
    interface IDocListEntry {
        /**
         * Name of the app.
         */
        qDocName: string;

        /**
         * Not used.
         */
        qConnectedUsers: number;

        /**
         * Last modified time stamp of the app.
         * This property is used only with Qlik Sense Desktop.
         * It is set to 0 for Qlik Sense Enterprise.
         */
        qFileTime: number;

        /**
         * Size of remote app.
         * This property is used only with Qlik Sense Desktop.
         * It is set to 0 for Qlik Sense Enterprise.
         */
        qFileSize: number;

        /**
         * Identifier of the app.
         *
         * - In Qlik Sense Desktop, the identifier is the path and name of the app
         * - In Qlik Sense Enterprise, the identifier is the app's GUID.
         */
        qDocId: string;

        /**
         * Meta data related to the app.
         */
        qMeta: INxMeta;

        /**
         * Last reload time of the app.
         */
        qLastReloadTime: string;

        /**
         * If set to true, the app is read-only.
         */
        qReadOnly: boolean;

        /**
         * Title of the app.
         */
        qTitle: string;

        /**
         * Thumbnail of the app.
         */
        qThumbnail: IStaticContentUrl;
    }

    /**
     * InteractDef
     */
    interface IInteractDef {
        /**
         * Interaction type.
         */
        qType?: InteractionType;

        /**
         * Title used in the message box dialog.
         * This property is relevant if qType is IT_MSGBOX.
         */
        qTitle?: string;

        /**
         * Message used in the message box dialog.
         * This property is relevant if qType is IT_MSGBOX.
         */
        qMsg?: string;

        /**
         * Buttons displayed in the message box dialog.
         * This property is relevant if qType is IT_MSGBOX.
         * One of:
         *
         * - 0 means that the qButtons property is not relevant.
         * - 17 means that the message box contains the OK and Cancel buttons or the stop-sign icon.
         */
        qButtons?: number;

        /**
         * Next script statement to be executed.
         * This property is used if the type of interaction is IT_SCRIPTLINE.
         */
        qLine?: string;

        /**
         * First line number of the previously executed statement.
         * This property is used if the type of interaction is IT_SCRIPTLINE.
         */
        qOldLineNr?: number;

        /**
         * First line number of the next statement to be executed.
         * This property is used if the type of interaction is IT_SCRIPTLINE.
         */
        qNewLineNr?: number;

        /**
         * Path specified by the Include script variable.
         * This property is used if the type of interaction is IT_SCRIPTLINE.
         * Example of an Include variable:
         *
         * $(Include=lib:\\MyDataFiles\abc.txt);
         */
        qPath?: string;

        /**
         * This property is set to true if the returned statement is an hidden script statement.
         */
        qHidden?: boolean;

        /**
         * Not relevant for describing the requested user interaction.
         */
        qResult: number;

        /**
         * Is not used in Qlik Sense.
         */
        qInput?: string;
    }

    /**
     * DriveInfo...
     */
    interface IDriveInfo {
        /**
         * Value of the drive
         *
         * Examples:
         * C:\\, E:\\
         */
        qDrive: string;

        /**
         * Type of the drive.
         * Fixed means physical drive.
         */
        qType: string;

        /**
         * Information about the drive type.
         */
        qTypeIdentifier: DriveType;

        /**
         * Name of the drive.
         */
        qName: string;
    }

    /**
     * OdbcDsn...
     */
    interface IOdbcDsn {
        /**
         * Name of the ODBC connection.
         */
        qName: string;

        /**
         * Description of the ODBC connection.
         */
        qDescription: string;

        /**
         * This parameter is optional. Default is false.
         * Is set to true if the version of ODBC is 32-bit.
         */
        qBit32?: boolean;

        /**
         * This parameter is optional. Default is false.
         * Is set to true if the connection is User DSN.
         * The connection works only for a specific user.
         */
        qUserOnly?: boolean;
    }

    /**
     * OleDbProvider...
     */
    interface IOleDbProvider {
        /**
         * Name of the OLEDB provider.
         */
        qName: string;

        /**
         * Description of the OLEDB provider.
         */
        qDescription: string;

        /**
         * This parameter is optional. Default is false.
         * Is set to true if the version of the OLEDB provider is 32-bit.
         */
        qBit32?: boolean;
    }

    /**
     * ErrorData...
     */
    interface IErrorData {
        /**
         * Detailed information about the error message.
         */
        qErrorString: string;

        /**
         * Line termination characters.
         */
        qLineEnd: string;

        /**
         * Script statement where the error occurs.
         */
        qLine: string;

        /**
         * Type of the error messages.
         */
        qErrorDataCode: ErrorDataCodeType;
    }

    /**
     * ProgressMessage...
     */
    interface IProgressMessage {
        /**
         * Code number to the corresponding localized message string.
         */
        qMessageCode: number;

        /**
         * Parameters to be inserted in the localized message string.
         */
        qMessageParameters: string[];
    }

    /**
     * ProgressData...
     */
    interface IProgressData {
        /**
         * This property is set to true if the request is started.
         */
        qStarted: boolean;

        /**
         * This property is set to true if the request is finished.
         */
        qFinished: boolean;

        /**
         * This property is not used.
         */
        qCompleted: number;

        /**
         * This property is not used.
         */
        qTotal: number;

        /**
         * This property is not used.
         */
        qKB: number;

        /**
         * Request duration in milliseconds.
         */
        qMillisecs: number;

        /**
         * This property is set to true when the engine pauses the script execution and waits for a user interaction.
         */
        qUserInteractionWanted: boolean;

        /**
         * A progress message is persistent when it informs about the start or end of a statement.
         * For example, it can inform about the total number of lines fetched from a data source, tells that the app was saved.
         *
         * All persistent progress messages between two GetProgress calls are summarized in this string.
         * Contrarily to qPersistentProgressMessages, the content of the localized message string is displayed
         * (not its message code).
         */
        qPersistentProgress: string;

        /**
         * A progress message is transient when it informs about the progress of an ongoing statement.
         * For example, it can tell how many lines are currently fetched from a data source.
         *
         * All transient progress messages between two GetProgress calls are summarized in this string.
         * Contrarily to qTransientProgressMessage, the content of the localized message string is displayed
         * (not its message code).
         */
        qTransientProgress: string;

        /**
         * Information about the error messages that occur during the script execution.
         */
        qErrorData: IErrorData[];

        /**
         * List of persistent progress messages.
         */
        qPersistentProgressMessages: IProgressMessage[];

        /**
         * Transient progress message.
         */
        qTransientProgressMessage: IProgressMessage;
    }

    /**
     * Note: This struct is deprecated (not recommended to use).
     */
    interface INxStreamListEntry {
        /**
         * Name of the stream
         */
        qName: string;

        /**
         * Identifier of the stream
         */
        qId: string;
    }

    /**
     * CodePage...
     */
    interface ICodePage {
        /**
         * Number of the code page
         */
        qNumber: number;

        /**
         * Name of the code page
         */
        qName: string;

        /**
         * Description of the code page
         */
        qDescription: string;
    }

    /**
     * Function...
     */
    interface IFunction {
        /**
         * Name of the script function.
         */
        qName: string;

        /**
         * Group of the script function.
         */
        qGroup: FunctionGroupType;

        /**
         * Signature of the script function.
         * Gives general information about the function.
         */
        qSignature: string;
    }

    interface IQDownloadInfo {
        /**
         * URL of the generated QVF
         */
        qUrl: string;

        /**
         * FileSize of the generated QVF
         */
        qFileSize: number;
    }

    interface IQVersion {
        qComponentVersion: string;
    }

    interface IQConfig {
        qFeatures: {
            qIsDesktop: boolean;
            qSSOEnabled: boolean;
        };

        qServices: Array<{
            /**
             * Name of the Service
             */
            qName: string;
            /**
             * URL of the Service
             */
            qUrl: string;
        }>;

        qSystemProperties: {
            /**
             * Path Separator for the OS
             */
            qPathSeparator: string;
        };
    }

    /**
     * This class describes all the methods that apply at global level.
     * The handle member in the JSON request for all methods listed in this section is -1.
     */
    interface IGlobal extends enigmaJS.IGeneratedAPI {
        /**
         * Sets an abort flag on all pending and ongoing requests in the current engine session.
         * If an abort flag is set on a pending request, the request is aborted.
         * If an abort flag is set on an ongoing request, the engine checks to see if it is possible to abort the request.
         */
        abortAll(): Promise<void>;

        /**
         * Aborts a specific request
         * @param qRequestId - Identifier of the request to stop.
         */
        abortRequest(qRequestId: number): Promise<void>;

        /**
         * no / empty docu
         */
        allowCreateApp(): Promise<boolean>;

        /**
         * Indicates whether or not a user is able to create an app.
         */
        cancelReload(): Promise<void>;

        /**
         * Cancels an ongoing reload. The reload of the app is stopped.
         * The indexation can be canceled and true is still the return value of the reload task.
         * @param qRequestId - Identifier of the request to stop.
         */
        cancelRequest(qRequestId: number): Promise<void>;

        /**
         * Configures the engine's behavior during a reload.
         *
         * Note: The ConfigureReload method should be run before the DoReload method.
         * @param qCancelOnScriptError - If set to true, the script execution is halted on error.
         * Otherwise, the engine continues the script execution.
         * This parameter is relevant only if the variable ErrorMode is set to 1.
         * @param qUseErrorData - If set to true, any script execution error
         * is returned in qErrorData by the GetProgress method.
         * @param qInteractOnError - If set to true, the script execution is halted on error and
         * the engine is waiting for an interaction to be performed. If the result from the interaction
         * is 1 (qDef.qResult is 1), the engine continues the script execution otherwise the execution is halted.
         *
         * This parameter is relevant only if the variable ErrorMode is set to 1 and the script is run in
         * debug mode (qDebug is set to true when calling the DoReload method).
         */
        configureReload(qCancelOnScriptError: boolean, qUseErrorData: boolean, qInteractOnError: boolean): Promise<void>;

        /**
         * Copies an app that is in the Qlik Sense repository.
         * The engine copies the app into an app entity that was previously created by the repository. See the QRS API (REST API) help for more information.
         *
         * Note: This operation is possible only in Qlik Sense Enterprise.
         * @param qTargetAppId - Identifier (GUID) of the app entity in the Qlik Sense repository.
         * The app entity must have been previously created by the repository (via the REST API).
         * >> This parameter is mandatory.
         * @param qSrcAppId - Identifier (GUID) of the source app in the Qlik Sense repository.
         * >> This parameter is mandatory.
         * @param qIds - Array of QRS identifiers.
         * The list of all the objects in the app to be copied must be given. This list must contain the GUIDs of all these objects.
         * If the list of the QRS identifiers is empty, the CopyApp method copies all objects to the target app.
         * Script-defined variables are automatically copied when copying an app. To be able to copy variables not created via script,
         * the GUID of each variable must be provided in the list of QRS identifiers.
         * To get the QRS identifiers of the objects in an app, you can use the QRS API.
         * The GET method (from the QRS API) returns the identifiers of the objects in the app.
         * The following example returns the QRS identifiers of all the objects in a specified app:
         * GET /qrs/app/9c3f8634-6191-4a34-a114-a39102058d13
         * Where 9c3f8634-6191-4a34-a114-a39102058d13 is the identifier of the app.
         * @returns - true or false
         * Note: The operation is successful if qSuccess is set to true.
         */
        copyApp(qTargetAppId: string, qSrcAppId: string, qIds: string[]): Promise<boolean>;

        /**
         * Creates an app.
         * @param qAppName - Name of the app.
         * >> This parameter is mandatory.
         * @param qLocalizedScriptMainSection - Name of the first section in the script editor.
         * >> This parameter is optional.
         * >> The default value is Main.
         */
        createApp(qAppName: string, qLocalizedScriptMainSection?: string): Promise<any>; // ?Result

        /**
         * Creates an app and opens an engine session.
         * This operation is possible only in Qlik Sense Desktop.
         * @param qDocName - Name of the app.
         * >> This parameter is mandatory.
         * @param qUserName - Name of the user.
         * >> This parameter is optional.
         * @param qPassword - Password of the user.
         * >> This parameter is optional.
         * @param qSerial - Current Qlik Sense serial number
         * >> This parameter is optional.
         * @param qLocalizedScriptMainSection - Name of the first section in the script editor.
         * >> This parameter is optional.
         * >> The default value is Main.
         * @returns - A Promise of App
         */
        createDocEx(qDocName: string, qUserName?: string, qPassword?: string, qSerial?: string, qLocalizedScriptMainSection?: string): Promise<IApp>;

        /**
         * Creates an empty session app.
         * The following applies:
         *
         * The name of a session app cannot be chosen. The engine automatically assigns a unique identifier to the session app.
         * A session app is not persisted and cannot be saved. Everything created during a session app is non-persisted;
         * for example: objects, data connections.
         * @returns - A Promise of App
         */
        createSessionApp(): Promise<IApp>;

        /**
         * Creates a session app from a source app.
         * The following applies:
         *
         * - The objects in the source app are copied into the session app but contain no data.
         * - The script of the session app can be edited and reloaded.
         * - The name of a session app cannot be chosen. The engine automatically assigns a unique identifier to the session app.
         * - A session app is not persisted and cannot be saved. Everything created during a session app is non-persisted;
         *   for example: objects, data connections.
         * @param qSrcAppId - App identifier of the source app.
         * It corresponds to qAppId returned by the CreateApp method when creating the source app.
         * This parameter is mandatory.
         * @returns - A Promise of App
         */
        createSessionAppFromApp(qSrcAppId: string): Promise<IApp>;

        /**
         * Deletes an app from the Qlik Sense repository or from the file system.
         *
         * -- Qlik Sense Enterprise --
         * In addition to being removed from the repository, the app is removed from the directory as well:
         * <installation_directory>\Qlik\Sense\Apps
         * The default installation directory is ProgramData.
         *
         * -- Qlik Sense Desktop --
         * The app is deleted from the directory %userprofile%\Documents\Qlik\Sense\Apps.
         * @param qAppId - Identifier of the app to delete.
         * In Qlik Sense Enterprise, the identifier of the app is a GUID in the Qlik Sense repository.
         * In Qlik Sense Desktop, the identifier of the app is the name of the app,
         * as defined in the apps folder %userprofile%\Documents\Qlik\Sense\Apps.
         * >> This parameter is mandatory.
         * @returns - true or false
         *
         * Note: The operation is successful if qSuccess is set to true.
         */
        deleteApp(qAppId: string): Promise<boolean>;

        /**
         * Get the current EngineVersion
         * @returns - qVersion
         */
        engineVersion(): Promise<IQVersion>;

        /**
         * Exports an app from the Qlik Sense repository to the file system.
         *
         * Note: This operation is possible only in Qlik Sense Enterprise.
         * @param qTargetPath - Path and name of the target app.
         * >> This parameter is mandatory.
         * @param qSrcAppId - Identifier of the source app.
         * The identifier is a GUID from the Qlik Sense repository.
         * >> This parameter is mandatory.
         * @param qIds - Array of identifiers.
         * The list of all the objects in the app to be exported must be given.
         * This list must contain the GUIDs of all these objects.
         * @returns The operation is successful if qSuccess is set to true.
         */
        exportApp(qTargetPath: string, qSrcAppId: string, qIds: string[]): Promise<boolean>;

        /**
         * Returns the handle of the current app.
         *
         * Note: If no app is opened, an error message is returned:
         * For example code: 1007 and No active document and App invalid
         */
        getActiveDoc(): Promise<IApp>; // ?Result

        /**
         * Retrieves the meta data of an app.
         * @param qAppID - Identifier of the app, as returned by the CreateApp method.
         * One of:
         *           - Path and name of the app (Qlik Sense Desktop)
         *           - GUID (Qlik Sense Enterprise)
         *
         * >> This parameter is mandatory.
         * @returns A Promise of AppEntry
         */
        getAppEntry(qAppID: string): Promise<IAppEntry>;

        /**
         * Retrieves information about the authenticated user.
         * @returns Returns UserDirectory=<directory>; UserId=<identifier>
         */
        getAuthenticatedUser(): Promise<string>;

        /**
         * @deprecated since version 12.20.0
         * Returns a set of rules defining the Qlik Sense scripting language grammar.
         * These rules define the syntax for the script statements and the script or chart functions.
         *
         * Note: A way to retrieve the list of script statements, script functions or chart functions is to call the GetBNF method.
         *
         * -- Terminology --
         * BNF stands for Backus-Naur Form.
         * A token is a string of one or more characters that is significant as a group.
         * For example, a token can be a function name, a parenthesis '('.
         * @param qBnfType - Returns a set of rules defining the syntax for:
         * - the script statements and the script functions if qBnfType is set to S.
         * - the chart functions if qBnfType is set to E.
         * @returns A Promise of  Array of BNFDef
         */
        getBNF(qBnfType: BnfType): Promise<IBNFDef>;

        /**
         * Returns a set of rules defining the Qlik Sense scripting language grammar.
         * These rules define the syntax for the script statements and the script or chart functions.
         *
         * Note: A way to retrieve the list of script statements, script functions or chart functions is to call the GetBNF method.
         *
         * --Terminology --
         * BNF stands for Backus- Naur Form.
         * A token is a string of one or more characters that is significant as a group.
         * For example, a token can be a function name, a parenthesis '('.
         * @param qBnfType - Returns a set of rules defining the syntax for:
         * - the script statements and the script functions if qBnfType is set to S.
         * - the chart functions if qBnfType is set to E.
         * @returns A Promise of IBNFDefResult
         */
        getBaseBNF(qBnfType: BnfType): Promise<IBNFDefResult>;

        /**
         * Gets a string hash calculated from the current Backus-Naur Form (BNF) grammar
         * of the Qlik engine scripting language. If the hash changes between subsequent
         * calls to this method, this indicates that the BNF grammar has changed.
         *
         * @param qBnfType - Returns a set of rules defining the syntax for:
         * - the script statements and the script functions if qBnfType is set to S.
         * - the chart functions if qBnfType is set to E.
         * @returns A Promise qBnfHash
         */
        getBaseBNFHash(qBnfType: BnfType): Promise<{ qBnfHash: string }>;

        /**
         * Gets the current Backus-Naur Form (BNF) grammar of the Qlik engine scripting language,
         * as well as a string hash calculated from that grammar. The BNF rules define the syntax
         * for the script statements and the script or chart functions. If the hash changes between
         * subsequent calls to this method, this indicates that the BNF has changed.
         *
         * In the Qlik engine grammars, a token is a string of one or more characters that is significant as a group.
         * For example, a token could be a function name, a number, a letter, a parenthesis, and so on.
         * @param qBnfType The type of grammar to return:
         *                   S: returns the script statements and the script functions.
         *                   E: returns the chart functions.
         * @returns qBnfDefs and qBnfHash
         */
        getBaseBNFString(qBnfType: BnfType): Promise<{qBnfDefs: IBNFDef, qBnfHash: string}>;

        /**
         * Get a Config Object
         * @returns A Promise qConfig
         */
        getConfiguration(): Promise<IQConfig>;

        /**
         * List the custom connectors available in the system.
         * @param qReloadList Sets if the list of custom connectors should be reloaded or not.
         * This parameter is optional and the default value is false.
         * If set to false, only the connectors that were returned the previous time are returned.
         * If new connectors have been added since the last call to the GetCustomConnectors method was made,
         * the new connectors are not returned.
         * If set to true, the GetCustomConnectors method looks for new connectors in the file system.
         * @returns A Promise Array of CustomConnector
         */
        getCustomConnectors(qReloadList?: boolean): Promise<ICustomConnector[]>;

        /**
         * Lists the databases in a ODBC, OLEDB or CUSTOM data source.
         * @param qConnection Information about the connection.
         * @returns A Promise Array of Database
         */
        getDatabasesFromConnectionString(qConnection: IConnection): Promise<IDatabase[]>;

        /**
         * Returns the folder where the apps are stored.
         *
         * Note: This method applies only if running Qlik Sense Desktop.
         * @returns Returns a path of the folder where the apps are stored.
         */
        getDefaultAppFolder(): Promise<string>;

        /**
         * Returns the list of apps.
         * -- In Qlik Sense Enterprise:
         * The list is generated by the QRS. The GetDocList method only returns documents the current user is allowed to access.
         * -- In Qlik Sense Desktop:
         * The apps are located in C:\Users\<user name>\Documents\Qlik\Sense\Apps.
         * @returns A Promise Array of DocListEntry
         */
        getDocList(): Promise<IDocListEntry>;

        /**
         * Returns the files and folders located at a specified path.
         * @param qPath Absolute or relative path.
         * Relative paths are relative to the default Apps folder.
         *
         * In Qlik Sense Enterprise:
         * The list is generated by the QRS. The GetDocList method only returns documents the current user is allowed to access.
         *
         * In Qlik Sense Desktop:
         * The apps are located in C:\Users\<user name>\Documents\Qlik\Sense\Apps.
         * @returns Path of the folder where the apps are stored.
         */
        getFolderItemsForPath(qPath: string): Promise<IFolderItem[]>;

        /**
         * Gets the list of all the script functions.
         * @param qGroup Name of the group
         * >> This parameter is optional.
         * >> Default is all groups.
         * @returns A Promise <Function> or undefined
         */
        getFunctions(qGroup?: FunctionGroupType): Promise<IFunction[]>;

        /**
         * Retrieves information on the user interaction that is requested by the engine.
         * Engine can request user interactions only during script reload and when the reload is performed in debug mode
         * (qDebug is set to true when using the DoReload method).
         * When running reload in debug mode, the engine pauses the script execution to receive data about user interaction.
         *
         * The engine can pause:
         * - before executing a new script statement
         * - when an error occurs while executing the script
         * - when the script execution is finished.
         *
         * To know if the engine is paused and waits for a response to an interaction request,
         * the GetProgress method should be used. The engine waits for a response if the property qUserInteractionWanted
         * is set to true in the response of the GetProgress request.
         * @param qRequestId Identifier of the request.
         * Corresponds to the identifier of the DoReload request.
         * @returns A Promise of InteractDef
         */
        getInteract(qRequestId: number): Promise<IInteractDef>;

        /**
         * Lists the logical drives in the system.
         *
         * Note: This method applies only if running Qlik Sense Desktop.
         * @returns A Promise Array of DriveInfo
         */
        getLogicalDriveStrings(): Promise<IDriveInfo[]>;

        /**
         * Gets the MyDocumenstFolder Path in the system.
         * @returns A Promise of the MyDocumenstFolder Path
         */
        getMyDocumentsFolder(): Promise<{ qFolder: string; }>;

        /**
         * Returns the list of the ODBC connectors that are installed in the system.
         * @returns A Promise Array of OdbcDsn
         */
        getOdbcDsns(): Promise<IOdbcDsn[]>;

        /**
         * Returns the list of the OLEDB providers installed on the system.
         * @returns A Promise Array of OleDbProvider
         */
        getOleDbProviders(): Promise<IOleDbProvider[]>;

        /**
         * Gives information about the progress of the DoReload and DoSave calls.
         *
         * Note: For more information on DoReload and DoSave, see the DoReload method and DoSave method.
         * @param qRequestId Identifier of the DoReload or DoSave request or 0.
         * Complete information is returned if the identifier of the request is given.
         * If the identifier is 0, less information is given. Progress messages and
         * error messages are returned but information like when the request started and finished is not returned.
         * @returns Information about the progress of the request.
         */
        getProgress(qRequestId: number): Promise<IProgressData>;

        /**
         * Lists the streams.
         *
         * Note: This method is deprecated (not recommended to use).
         * Use general purpose endpoint in QRS API: GET qrs/stream/ instead.
         * @returns Array of NxStreamListEntry
         */
        getStreamList(): Promise<INxStreamListEntry[]>;

        /**
         * Lists the supported code pages.
         */
        getSupportedCodePages(): Promise<ICodePage[]>;

        /**
         * Returns the unique identifier of the endpoint for the current user in the current app.
         *
         * Note: This unique identifier can be used for logging purposes.
         * @returns Identifier of the endpoint.
         * This identifier is unique.
         */
        getUniqueID(): Promise<string>;

        /**
         * Import an App
         * @param qAppId - new AppId
         * @param qSrcPath - source path
         * @param qIds - ???
         * Note: from shema file
         * Note: This operation is possible only in Qlik Sense Enterprise.
         */
        importApp(qAppId: string, qSrcPath: string, qIds: string[]): Promise<void>;

        /**
         * Import an App Extended
         * @param qAppId - new AppId
         * @param qSrcPath - source path
         * @param qIds - ???
         * @param qExcludeConnections - true to exclude the embedded connection from import
         * Note: from shema file
         * Note: This operation is possible only in Qlik Sense Enterprise.
         */
        importAppEx(qAppId: string, qSrcPath: string, qIds: string[], qExcludeConnections: boolean): Promise<void>;

        /**
         * Informs the engine that a user interaction (which was earlier requested by the engine)
         * was performed and indicates the engine what to do next.
         * @param qRequestId Identifier of the request.
         * Corresponds to the identifier of the DoReload request.
         * @param qDef User response to the current interaction.
         */
        interactDone(qRequestId: number, qDef: IInteractDef): Promise<void>;

        /**
         * Indicates whether the user is working in Qlik Sense Desktop.
         */
        isDesktopMode(): Promise<boolean>;

        /**
         * Indicates whether or not the user is working in personal mode (Qlik Sense Desktop).
         *
         * Note: This method is deprecated.
         * @returns The engine returns true if the user is working with Qlik Sense Desktop.
         */
        isPersonalMode(): Promise<boolean>;

        /**
         * Checks if a connection string is valid.
         * @param qConnection Information about the connection.
         * @returns True means that the connection string is correct.
         */
        isValidConnectionString(qConnection: IConnection): Promise<boolean>;

        /**
         * Opens an app and checks if the app needs to be migrated (if the app is deprecated).
         * The OpenDoc method compares the version of the app with the version of Qlik Sense and
         * migrates the app to the current version of Qlik Sense if necessary. Once the migration is done, the app is opened.
         * If no migration is needed, the app is opened immediately.
         * The following applies:
         *
         * - The app version is lower than 0.95: no migration is done. Apps older than the version 0.95 are not supported.
         * - The app version is at least 0.95 and less than the Qlik Sense version: the app is migrated and then opened.
         * - Qlik Sense and the app have the same version: the app is opened, no migration is needed.
         *
         * Note: If the app is read-only, the app migration cannot occur. An error message is sent.
         *
         * -- Backups --
         * In Qlik Sense Desktop, apps are automatically backed up before a migration.
         * The backup files are located in %userprofile%\Documents\Qlik\Sense\AppsBackup\<Qlik Sense Desktop version>.
         * In Qlik Sense Enterprise, no automatic back up is run. The back up should be done manually.
         * @param qDocName The GUID (in Qlik Sense Enterprise) or Name (in Qlik Sense Desktop) of the app to retrieve.
         * @param qUserName Name of the user that opens the app.
         * >> This parameter is optional.
         * @param qPassword Password of the user.
         * >> This parameter is optional.
         * @param qSerial Current Qlik Sense serial number.
         * >> This parameter is optional.
         * @param qNoData Set this parameter to true to be able to open an app without loading its data.
         * When this parameter is set to true, the objects in the app are present but contain no data.
         * The script can be edited and reloaded.
         * >> This parameter is optional
         * >> The default value is false.
         * @returns A Promise of App
         */
        openDoc(qDocName: string, qUserName?: string, qPassword?: string, qSerial?: string, qNoData?: boolean): Promise<IApp>;

        /**
         * Returns the name of the operating system.
         */
        oSName(): Promise<string>;

        /**
         * Returns the version number of the operating system.
         */
        oSVersion(): Promise<string>;

        /**
         * @deprecated since version 12.20.0
         * Returns the Qlik Sense version number.
         */
        productVersion(): Promise<string>;

        /**
         * Publish an App to a Stream
         * @param qStreamId - Id of the stream there it should published
         * @param qName - new name
         * Note: from shema file
         * Note: This operation is possible only in Qlik Sense Enterprise.
         */
        publishApp(qStreamId: string, qName: string): Promise<void>;

        /**
         * Returns the Qlik product name.
         */
        qTProduct(): Promise<string>;

        /**
         * Returns the Qlik Sense version number.
         *
         * Note: This method is deprecated (not recommended to use). Use ProductVersion method instead.
         */
        qvVersion(): Promise<string>;

        /**
         * Reloads the list of extensions.
         */
        reloadExtensionList(): Promise<void>;

        /**
         * Replaces an app with the objects from a source app.
         * The list of objects in the app to be replaced must be defined in qIds.
         * Note: The data model of the app cannot be updated.
         * Note: This operation is possible only in Qlik Sense Enterprise.
         * @param qTargetAppId Identifier (GUID) of the target app.
         * The target app is the app to be replaced.
         * >> This parameter is mandatory.
         * @param qSrcAppID Identifier (GUID) of the source app.
         * The objects in the source app will replace the objects in the target app.
         * >> This parameter is mandatory.
         * @param qIds QRS identifiers (GUID) of the objects in the target app to be replaced.
         * Only QRS-approved GUIDs are applicable.
         * An object that is QRS-approved, is for example an object that has been published (i.e not private anymore).
         * If an object is private, it should not be included in this list.
         * If qIds is empty, the engine automatically creates a list that contains all QRS-approved objects.
         * If the array of identifiers contains objects that are not present in the source app,
         * the objects related to these identifiers are removed from the target app.
         * @returns The operation is successful if qSuccess is set to true.
         */
        replaceAppFromID(qTargetAppId: string, qSrcAppID: string, qIds: string[]): Promise<boolean>;

        /**
         * Shuts down the Qlik engine.
         *
         * Note: This operation is possible only in Qlik Sense Desktop.
         */
        shutdownProcess(): Promise<void>;
    }

    /**
     * NxAttrExprInfo...
     */
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

    /**
     * NxStateCounts...
     */
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
        qOption?: number;

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

    /**
     * NxDimensionInfo...
     */
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
        qSortIndicator?: SortIndicatorType;

        /**
         * Array of dimension labels.
         * Contains the labels of all dimensions in a hierarchy group (for example the labels of all dimensions in a drill down group).
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
        qError?: INxValidationError;

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
        qGrouping: NxGrpType;

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
        qNumFormat?: FieldAttributesType;

        /**
         * This parameter is set to true if qNumFormat is set to U (unknown). The engine guesses the type of the field based on the field's definition.
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

    /**
     * NxAttrDimInfo...
     */
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

    /**
     * NxValidationError...
     */
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
        qContext?: string;

        /**
         * Internal information from the server.
         * This parameter is optional.
         * String
         */
        qExtendedMessage?: string;
    }

    /**
     * NxMeasureInfo...
     */
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
        qSortIndicator?: SortIndicatorType;

        /**
         * Format of the field. This parameter is optional.
         * One of: N for no sorting, A for sorting ascending, D for sorting descending
         */
        qNumFormat?: IFieldAttributes;

        /**
         * This parameter is set to true if qNumFormat is set to U (unknown). The engine guesses the type of the field based on the field's expression.
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
        qError?: INxValidationError;

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

    /**
     * NxInlineDimensionDef...
     */
    interface INxInlineDimensionDef {
        /**
         * Used to define a cyclic group or drill-down group.
         * This parameter is optional.
         * Default value is no grouping.
         */
        qGrouping?: NxGrpType;

        /**
         * Array of field names.
         * When creating a grouped dimension, more than one field name is defined.
         * >> This parameter is optional.
         */
        qFieldDefs?: string[];

        /**
         * Array of field labels.
         * >> This parameter is optional.
         */
        qFieldLabels?: string[];

        /**
         * Defines the sorting criteria in the field.
         * >>This parameter is optional.
         * Default is to sort by alphabetical order, ascending.
         */
        qSortCriterias?: ISortCriteria;

        /**
         * Defines the format of the value.
         * >> This parameter is optional.
         */
        qNumberPresentations?: IFieldAttributes[];

        /**
         * If set to true, it inverts the sort criteria in the field.
         */
        qReverseSort?: boolean;

        /**
         * Index of the active field in a cyclic dimension.
         * This parameter is optional. The default value is 0.
         * This parameter is used in case of cyclic dimensions (qGrouping is C).
         */
        qActiveField?: number;
    }

    /**
     * HyperCubeDimensionqDef width extend NxInlineDimensionDef
     */
    interface IHyperCubeDimensionqDef extends INxInlineDimensionDef {
        autoSort?: boolean;
        cId?: string;
        othersLabel?: IStringExpressionContainer;
    }

    /**
     * OtherTotalSpecProp...
     */
    interface IOtherTotalSpecProp {
        /**
         * Determines how many dimension values are displayed.
         * >> default value is OTHER_OFF
         *
         * One of:
         * - OTHER_OFF; do not limit the number of dimension values
         * - OTHER_COUNTED; limit the dimension values to a specified number defined in OtherTotalSpecProp.
         * - OTHER_ABS_LIMITED; limit the dimension values to an absolute value defined in OtherTotalSpecProp.
         * - OTHER_ABS_ACC_TARGET; return the dimension values that accumulate to an absolute value.
         *   All rows up to the current row are accumulated and the result is compared to the specified absolute value.
         *   The absolute value is defined in OtherTotalSpecProp.
         * - OTHER_REL_LIMITED; limit the dimension values based on a percentage of the total.
         *   The total is the sum of all the dimension values. The percentage is defined in OtherTotalSpecProp.
         * - OTHER_REL_ACC_TARGET; return the dimension values that accumulate to a percentage of the total.
         *   All rows up to the current row are accumulated and the result is compared to the total of the dimension values.
         *   A percentage is calculated. This percentage is compared to the specified percentage, defined in OtherTotalSpecProp.
         */
        qOtherMode: OtherModeType;

        /**
         * Number of values to display.
         * The number of values can be entered as a calculated formula.
         * This parameter is used when qOtherMode is set to OTHER_COUNTED.
         */
        qOtherCounted: string;

        /**
         * Value used to limit the dimension values.
         * The limit can be entered as a calculated formula.
         * This parameter is used when qOtherMode is set to:
         *
         * - OTHER_ABS_LIMITED
         * - OTHER_REL_LIMITED
         * - OTHER_ABS_ACC_TARGET
         * - OTHER_REL_ACC_TARGET
         */
        qOtherLimit: string;

        /**
         * Sets the limit for the Others mode.
         * This parameter is used when qOtherMode is set to:
         *
         * - OTHER_ABS_LIMITED
         * - OTHER_REL_LIMITED
         * - OTHER_ABS_ACC_TARGET
         * - OTHER_REL_ACC_TARGET
         */
        qOtherLimitMode: OtherLimitModeType;

        /**
         * If set to true, the group Others is not displayed as a dimension value.
         * >> The default value is false.
         */
        qSuppressOther: boolean;

        /**
         * This parameter is used when qOtherMode is set to:
         *
         * - OTHER_ABS_LIMITED
         * - OTHER_REL_LIMITED
         * - OTHER_ABS_ACC_TARGET
         * - OTHER_REL_ACC_TARGET
         *
         * and when the dimension values include not numeric values.
         * Set this parameter to true to include text values in the returned values.
         * >> The default value is true.
         */
        qForceBadValueKeeping: boolean;

        /**
         * Set this parameter to true to allow the calculation of Others even if the engine detects some potential mistakes.
         * For example the country Russia is part of the continent Europe and Asia.
         * If you have an hypercube with two dimensions Country and Continent and one measure Population,
         * the engine can detect that the population of Russia is included in both the continent Asia and Europe.
         * >> The default value is true.
         */
        qApplyEvenWhenPossiblyWrongResult: boolean;

        /**
         * This parameter applies to inner dimensions.
         * If this parameter is set to true, the restrictions are calculated on the selected dimension only.
         * All previous dimensions are ignored.
         * >> The default value is false.
         */
        qGlobalOtherGrouping: boolean;

        /**
         * If set to true, it collapses the inner dimensions (if any) in the group Others.
         * >> The default value is false.
         */
        qOtherCollapseInnerDimensions: boolean;

        /**
         * Defines the sort order of the dimension values.
         * >> The default value is OTHER_SORT_DESCENDING.
         */
        qOtherSortMode: OtherSortModeType;

        /**
         * If set to TOTAL_EXPR, the total of the dimension values is returned.
         * >> The default value is TOTAL_OFF.
         */
        qTotalMode: TotalModeType;

        /**
         * This parameter applies when there are several measures.
         * Name of the measure to use for the calculation of Others for a specific dimension.
         */
        qReferencedExpression: string;
    }

    /**
     * NxAttrExprDef...
     */
    interface INxAttrExprDef {
        /**
         * Definition of the attribute expression.
         * Example: "Max(OrderID)"
         */
        qExpression: string;

        /**
         * Definition of the attribute expression stored in the library..
         * Example: "MyGenericMeasure"
         */
        qLibraryId_: string;
    }

    /**
     * NxAttrDimDef...
     */
    interface INxAttrDimDef {
        /**
         * Expression or field name.
         */
        qDef: string;

        /**
         * LibraryId for dimension.
         */
        qLibraryId: string;

        /**
         * Sorting
         */
        qSortBy: ISortCriteria;
    }

    /**
     * NxDimension
     *
     * Note: Either qDef or qLibraryId must be set, but not both.
     * Note: If the dimension is set in the hypercube and not in the library, this dimension cannot be shared with other objects.
     * Note: A dimension that is set in the library can be used by many objects.
     */
    interface INxDimension {
        /**
         * Refers to a dimension stored in the library.
         */
        qLibraryId?: string;

        /**
         * Refers to a dimension stored in the hypercube.
         */
        qDef: INxInlineDimensionDef;

        /**
         * If set to true, no null values are returned.
         */
        qNullSuppression?: boolean;

        /**
         * Sets the dimension limits. Each dimension of a hypercube is configured separately.
         * Defines if some values (grouped as Others) should be grouped together in the visualization.
         * For example in a pie chart all values lower than 200 could be grouped together.
         */
        qOtherTotalSpec?: IOtherTotalSpecProp;

        /**
         * If set to true, all dimension values are shown.
         */
        qShowAll?: boolean;

        /**
         * This property is used when some dimension limits are set.
         * Label of the Others group. The default label is Others.
         * Example:
         * "qOtherLabel":"=<label>"
         *               or
         * "qOtherLabel":{"qExpr":"=<label>"}
         *               Where
         * <label> is the label of the Others group.
         */
        qOtherLabel?: IStringExpressionContainer;

        /**
         * If this property is set, the total of the calculated values is returned.
         * The default label is Total.
         * Example:
         * "qTotalLabel":"=<label>"
         *               or
         * "qTotalLabel":{"qExpr":"=<label>"}
         *               Where
         * <label> is the label of the Totalgroup.
         */
        qTotalLabel?: IStringExpressionContainer;

        /**
         * Specifies a calculation condition, which must be fulfilled for the dimension to be calculated.
         * If the calculation condition is not met, the dimension is excluded from the calculation.
         * This property is optional. By default, there is no calculation condition.
         */
        qCalcCond?: IValueExpr;

        /**
         * List of attribute expressions.
         */
        qAttributeExpressions?: INxAttrExprDef[];

        /**
         * List of attribute dimensions.
         */
        qAttributeDimensions?: INxAttrDimDef[];

        /**
         * no / empty docu
         */
        qIncludeElemValue?: boolean; // ?Nicht in Doku

        /**
         * no / empty docu
         */
        qShowTotal?: boolean; // ?Nicht in Doku
    }

    /**
     * Get the cell postion of x- and y-axis.
     */
    interface INxCellPosition {
        /**
         * Position of the cell on the x-axis.
         */
        qx: number;

        /**
         * Position of the cell on the y-axis.
         */
        qy: number;
    }

    /**
     * ValueExpression... Where <expression> is a string.
     */
    interface IValueExpr {
        qv: string;
    }

    /**
     * SortCriteria...
     */
    interface ISortCriteria {
        /**
         * Sorts the field values according to their logical state
         * (selected, optional, alternative or excluded).
         */
        qSortByState?: TypeSortDirection;

        /**
         * Sorts the field values by frequency
         * (number of occurrences in the field).
         */
        qSortByFrequency?: TypeSortDirection;

        /**
         * Sorts the field values by numeric value.
         */
        qSortByNumeric?: TypeSortDirection;

        /**
         * Sorts the field by alphabetical order.
         */
        qSortByAscii?: TypeSortDirection;

        /**
         * Sorts the field values by the initial load order.
         */
        qSortByLoadOrder?: TypeSortDirection;

        /**
         * Sorts the field by expression.
         */
        qSortByExpression?: TypeSortDirection;

        /**
         * Sort by expression.
         */
        qExpression?: IValueExpr;

        /**
         * no / empty docu
         */
        qSortByGreyness?: TypeSortDirection; // ?Nicht in Doku
    }

    /**
     * Some properties are also expression containers (ExpressionContainers).
     * Expression containers can handle both normal strings and expressions.
     *
     * - StringExpressionContainer
     */
    interface IStringExpressionContainer {
        /**
         * Expression for Example (Non-calculated string expression container):
         *
         * myTable.Properties.Title = "My Table Title";
         *
         * Result is:  stringValue = myTable.Title;
         */
        qStringExpression: string;
    }

    /**
     * CustomErrorMessage...
     */
    interface ICustomErrorMessage {
        calcCond: string;
    }

    /**
     * NxMeasure
     *
     * Note: Either qDef or qLibraryId must be set, but not both.
     * Note: If the measure is set in the hypercube and not in the library, this measure cannot be shared with other objects.
     * Note: A measure that is set in the library can be used by many objects.
     * Note: expressions are complementary expressions associated to a measure.
     *
     * For example, you can decide to change the background color of a visualization depending on the values of the measure.
     * Attribute expressions do not affect the layout of an object. The sorting order is unchanged.
     */
    interface INxMeasure {
        /**
         * Refers to a measure stored in the library.
         */
        qLibraryId?: string;

        /**
         * Refers to a measure stored in the hypercube.
         */
        qDef: INxInlineMeasureDef;

        /**
         * Defines the sort criteria.
         * This property is optional. The default value is sort by ascending alphabetic order.
         */
        qSortBy?: ISortCriteria;

        /**
         * List of attribute expressions.
         */
        qAttributeExpressions?: INxAttrExprDef[];

        /**
         * Specifies a calculation condition, which must be fulfilled for the measure to be calculated.
         * If the calculation condition is not met, the measure is excluded from the calculation.
         * This property is optional. By default, there is no calculation condition.
         */
        qCalcCond?: IValueExpr;

        /**
         * List of attribute dimensions.
         */
        qAttributeDimensions?: INxAttrDimDef[];
    }

    /**
     * NxInlineMeasureDef...
     */
    interface INxInlineMeasureDef {
        /**
         * Name of the measure.
         * >> This parameter is optional.
         * An empty string is returned as a default value.
         */
        qLabel?: string;

        /**
         * Label expression.
         * >> This parameter is optional.
         * An empty string is returned as a default value.
         */
        qLabelExpression?: string;

        /**
         * Description of the measure.
         * >> This parameter is optional.
         * An empty string is returned as a default value.
         */
        qDescription?: string;

        /**
         * Name connected to the measure that is used for search purposes.
         * >> This parameter is optional.
         * A measure can have several tags.
         */
        qTags?: string[];

        /**
         * Default value is no grouping.
         * >> This parameter is optional.
         */
        qGrouping?: NxGrpType;

        /**
         * Definition of the expression in the measure.
         * Example: Sum (OrderTotal)
         * >> This parameter is mandatory.
         */
        qDef: string;

        /**
         * Format of the field.
         * >> This parameter is optional.
         */
        qNumFormat?: IFieldAttributes;

        /**
         * If set to true, percentage values are returned instead of absolute numbers.
         * >> This parameter is optional.
         * >> Default is false.
         */
        qRelative?: boolean;

        /**
         * If set to true, the sum of rows total should be used rather than real expression total.
         * This parameter is optional and applies to straight tables.
         * If using the Qlik Sense interface, it means that the total mode is set to Expression Total.
         * >> Default is false.
         */
        qBrutalSum?: boolean;

        /**
         * Aggregate function.
         * For more information on the aggregate function syntax, see the section Working with Qlik Sense
         * on the online help portal.
         * The default value is 0 (Sum of rows)
         * >> This parameter is optional.
         */
        qAggrFunc?: string;

        /**
         * - 0 means no accumulation
         * - 1 means full accumulation (each y-value accumulates all previous y-values of the expression)
         * - = 2 means accumulate as many steps as the qAccumulate value
         * >> This parameter is optional.
         * >> Default is 0.
         */
        qAccumulate?: number;

        /**
         * If set to true, it inverts the sort criteria in the field.
         */
        qReverseSort?: boolean;

        /**
         * Index of the active expression in a cyclic measure. The indexing starts from 0.
         * This parameter is optional.
         * >> The default value is 0.
         */
        qActiveExpression?: number;

        /**
         * Array of expressions. This parameter is used in case of cyclic measures (qGrouping is C).
         * List of the expressions in the cyclic group.
         */
        qExpressions?: string[];
    }

    /**
     * HyperCubeMeasureqDef with extend of NxInlineMeasureDef
     */
    interface IHyperCubeMeasureqDef extends INxInlineMeasureDef {
        autoSort?: boolean;
        cId?: string;
        numFormatFromTemplate?: boolean;
    }

    /**
     * HyperCubeMeasureDef width extend NxMeasure
     */
    interface IHyperCubeMeasureDef extends INxMeasure {
        qDef: IHyperCubeMeasureqDef;
    }

    /**
     * NxPivotValuePoint...
     */
    interface INxPivotValuePoint {
        /**
         * Label of the cell.
         * >> This parameter is optional.
         */
        qLabel?: string;

        /**
         * Some text related to the cell.
         */
        qText: string;

        /**
         * Value of the cell.
         */
        qNum: number;

        /**
         * Type of the cell.
         *
         * One of:
         *
         *    V for NX_DIM_CELL_VALUE. Applies to values in the data matrix.
         *    E for NX_DIM_CELL_EMPTY. Applies to empty cells in the top and left dimensions.
         *    N for NX_DIM_CELL_NORMAL. Applies to left and top dimensions cells.
         *    T for NX_DIM_CELL_TOTAL. Applies to cells marked with Total
         *    P for NX_DIM_CELL_PSEUDO. Applies to pseudo dimensions.
         *    R for NX_DIM_CELL_ROOT. Applies to root node.
         *    U for NX_DIM_CELL_NULL. Applies to Null values in the data matrix.
         */
        qType: NxCellType;

        /**
         * NxAttribute expressions values.
         */
        qAttrExps: INxAttributeExpressionValues;
    }

    /**
     * NxContainerEntry...
     */
    interface INxContainerEntry<T> {
        /**
         * Information about the object
         */
        qInfo: INxInfo;

        /**
         * Information on publishing and permissions
         */
        qMeta: INxMeta;

        /**
         * Set of data
         */
        qData: T;
    }

    // public enum NxHypercubeMode {
    //    [QixName("P:
    //        DATA_MODE_PIVOT = 1,
    //    [QixName("K:
    //        DATA_MODE_PIVOT_STACK = 2,
    //    [QixName("S:
    //        DATA_MODE_STRAIGHT = 0
    // }

    // public enum SortDirection {
    //    Ascending = 1,
    //    Descending = -1,
    //    None = 0
    // }
}

//#region Prototype Interfaces for Class definitions
declare namespace EngineAPI {
    interface IGenericObjectPrototype<P extends IGenericObjectProperties, L extends IGenericBaseLayout> extends IGenericObject {
        getLayout(): Promise<L>;
        getProperties(): Promise<P>;
        setProperties(properties: P): Promise<void>;
    }

    interface IAppObjectPrototype<P extends IGenericObjectProperties, O extends IGenericObject> {
        createObject(qProp: P): Promise<O>;
        createSessionObject(qProp: P): Promise<O>;
    }
}
//#endregion

//#region ListObject
declare namespace EngineAPI {
    /**
     * Renders the properties of a list object. Is the layout for ListObjectDef.
     * For more information about the definition of a list object, see Generic objects.
     *
     * Note: ListObject is used by the GetLayout method to display the properties of a list object.
     */
    interface IListObject {
        /**
         * Name of the alternate state.
         * Default is current selections $.
         */
        qStateName: string;

        /**
         * Defines the size of a list object.
         */
        qSize: ISize;

        /**
         * This parameter is optional and is displayed in case of error.
         */
        qError?: INxValidationError;

        /**
         * Information about the dimension.
         */
        qDimensionInfo: INxDimensionInfo;

        /**
         * Lists the expressions in the list object.
         */
        qExpressions: INxListObjectExpression[];

        /**
         * Set of data.
         * Is empty if nothing has been defined in qInitialDataFetch in ListObjectDef.
         */
        qDataPages: INxDataPage[];
    }

    /**
     * NxListObjectExpression...
     */
    interface INxListObjectExpression {
        /**
         * Value of the expression.
         */
        qExpr: string;

        /**
         * Gives information on the error.
         * >> This parameter is optional.
         */
        qError?: INxLayoutErrors;
    }

    /**
     * GenericListLayout...
     */
    interface IGenericListLayout extends IGenericBaseLayout {
        qListObject: IListObject;
    }

    /**
     * NxAutoSortByStateDef...
     */
    interface INxAutoSortByStateDef {
        /**
         * This parameter applies to list objects.
         *
         * If the number of selected values in the list object is greater than the value set in qDisplayNumberOfRows,
         * the selected lines are promoted at the top of the list object.
         *
         * If qDisplayNumberOfRows is set to a negative value or to 0, the sort by state is disabled.
         */
        qDisplayNumberOfRows: number;
    }

    /**
     * NxListObjectExpressionDef...
     */
    interface INxListObjectExpressionDef {
        /**
         * Value of the expression
         */
        qExpr: string;

        /**
         * Refers to an expression stored in the library.
         */
        qLibraryId: string;
    }

    /**
     * Defines the properties of a list object.
     * For more information about the definition of a list object, see Generic objects.
     *
     * Note: Either qDef or qLibraryId should be set, but not both. If both parameters are set the engine uses qDef definition.
     * Note: If the dimension is set in the object itself and not in the library, this dimension cannot be shared with other objects.
     * Note: A dimension that is set in the library can be used by many objects.
     */
    interface IListObjectDef {
        /*
         * Name of the alternate state.
         * Default is current selections $.
         */
        qStateName: string;

        /*
         * Refers to a dimension stored in the library.
         */
        qLibraryId: string;

        /*
         * Refers to a dimension stored in the list object.
         */
        qDef: INxInlineDimensionDef;

        /*
         * Defines the sorting by state.
         */
        qAutoSortByState: INxAutoSortByStateDef;

        /*
         * Defines the frequency mode. The frequency mode is used to calculate the frequency of a value in a list object.
         * >> This parameter is optional.
         * >> Default is NX_FREQUENCY_NONE.
         */
        qFrequencyMode?: FrequencyModeType;

        /*
         * If set to true, alternative values are allowed in qData.
         * This parameter is optional. The default value is false.
         * If set to false, no alternative values are displayed in qData. Values are excluded instead.
         * Note that on the contrary, the qStateCounts parameter counts the excluded values as alternative values.
         */
        qShowAlternatives?: boolean;

        /*
         * Fetches an initial data set.
         */
        qInitialDataFetch: INxPage[];

        /*
         * Lists the expressions in the list object.
         * >> This parameter is optional.
         */
        qExpressions?: INxListObjectExpressionDef[];
    }

    /**
     * GenericListProperties...
     */
    interface IGenericListProperties extends IGenericProperties {
        qListObjectDef: IListObjectDef;
    }

    /**
     * GenericList...
     */
    interface IGenericList extends IGenericObjectPrototype<IGenericListProperties, IGenericListLayout> {
    }

    interface IApp extends IAppObjectPrototype<IGenericListProperties, IGenericList> {
        createObject(qProp: IGenericListProperties): Promise<IGenericList>;
        createSessionObject(qProp: IGenericListProperties): Promise<IGenericList>;
        clearSelections(qPath: "/qListObjectDef", qColIndices?: number[]): Promise<void>;
    }
}
//#endregion

//#region HyperCubeObject
declare namespace EngineAPI {
    interface IHyperCubeDimensionDef extends INxDimension {
        qDef: IHyperCubeDimensionqDef;
    }

    /**
     * Renders the properties of a hypercube. Is the layout for HyperCubeDef.
     * For more information about the definition of a hypercube, see Generic objects.
     *
     * Note: What is returned in HyperCube depends on the type of the hypercube
     *          (straight, pivot or stacked table) and on the method called
     *          (GetLayout, GetHyperCubeData, GetHyperCubePivotData, GetHyperCubeStackData).
     */
    interface IHyperCube {
        /**
         * Name of the alternate state.
         * Default is current selections $.
         */
        qStateName: string;

        /**
         * Defines the size of the hypercube.
         */
        qSize: ISize;

        /**
         * This parameter is optional and is displayed in case of error.
         */
        qError?: INxValidationError;

        /**
         * Information on the dimension.
         */
        qDimensionInfo: INxDimensionInfo[];

        /**
         * Information on the measure.
         */
        qMeasureInfo: INxMeasureInfo[];

        /**
         * Sort order of the columns in the hypercube.
         * Column numbers are separated by a comma.
         * Example: [1,0,2] means that the first column to be sorted was the column 1,
         * followed by the column 0 and the column 2.
         */
        qEffectiveInterColumnSortOrder: number[];

        /**
         * Aggregate for measures of all values in the field.
         * The result value depends on the qAggrFunc defined in HyperCubeDef.
         */
        qGrandTotalRow: INxCell[];

        /**
         * Set of data.
         * Is empty if nothing has been defined in qInitialDataFetch in HyperCubeDef.
         */
        qDataPages: INxDataPage[];

        /**
         * Set of data for pivot tables.
         * Is empty if nothing has been defined in qInitialDataFetch in HyperCubeDef.
         */
        qPivotDataPages: INxPivotPage[];

        /**
         * Set of data for stacked tables.
         * Is empty if nothing has been defined in qInitialDataFetch in HyperCubeDef.
         */
        qStackedDataPages: INxStackPage[];

        /**
         * Information about the mode of the visualization.
         */
        qMode: NxHypercubeMode;

        /**
         * Number of left dimensions
         * Default value is -1.
         * The index related to each left dimension depends on the position of the pseudo dimension (if any).
         * For example, a pivot table with:
         *
         * - 4 dimensions in the following order: Country, City, Product and Category
         * - one pseudo dimension in position 1
         * - 3 left dimensions.
         *
         * implies that:
         *
         * - The index 0 corresponds to the left dimension Country
         * - The index 1 corresponds to the pseudo dimension
         * - The index 2 corresponds to the left dimension City
         * - Product and Category are top dimensions.
         *
         * Another example:
         *
         * - 4 dimensions in the following order: Country, City, Product and Category
         * - one pseudo dimension in position -1
         * - 3 left dimensions.
         *
         * implies that:
         *
         * - The index -1 corresponds to the pseudo dimension; the pseudo dimension is the most to the right
         * - The index 0 corresponds to the left dimension Country
         * - The index 1 corresponds to the left dimension City
         * - The index 2 corresponds to the left dimension Product
         * - Category is a top dimension.
         */
        qNoOfLeftDims: number;

        /**
         * Is used for pivot tables only.
         * If set to true, the formatting of the results is slightly different.
         * >> This property is optional.
         */
        qIndentMode?: boolean;

        /**
         * Is used for pivot tables only.
         * Position of the last expended cell.
         * >> This property is optional.
         */
        qLastExpandedPos?: INxCellPosition;

        /**
         * ...
         */
        qHasOtherValues: boolean;
    }

    /**
     * GenericHyperCubeLayout width extend GenericObjectLayout
     */
    interface IGenericHyperCubeLayout extends IGenericObjectLayout {
        qHyperCube: IHyperCube;
    }

    /**
     * HyperCubeDef...
     */
    interface IHyperCubeDef {
        /**
         * Name of the alternate state.
         * Default is current selections $.
         */
        qStateName: string;

        /**
         * Array of dimensions.
         */
        qDimensions: INxDimension[];

        /**
         * Array of measures.
         */
        qMeasures: INxMeasure[];

        /**
         * Defines the sort order of the columns in the hypercube.
         * Column numbers are separated by a comma.
         * Example: [1,0,2] means that the first column to be sorted should be the column 1,
         * followed by the column 0 and the column 2.
         * The default sort order is the order in which the dimensions and measures have been
         * defined in the hypercube. By default, the pseudo-dimension (if any) is the most to the right in the array.
         * The index of the pseudo-dimension (if any) is -1.
         * Pseudo dimensions only apply for pivot tables with more than one measure.
         * A pseudo dimension groups together the measures defined in a pivot table.
         * You can neither collapse/expand a pseudo dimension nor make any selections in it.
         * Stacked pivot tables can only contain one measure.
         */
        qInterColumnSortOrder: number[];

        /**
         * Removes zero values.
         */
        qSuppressZero: boolean;

        /**
         * Removes missing values.
         */
        qSuppressMissing: boolean;

        /**
         * Initial data set.
         */
        qInitialDataFetch: INxPage[];

        /**
         * Defines the way the data are handled internally by the engine.
         * Default value is DATA_MODE_STRAIGHT.
         * A pivot table can contain several dimensions and measures whereas a stacked pivot
         * table can contain several dimensions but only one measure.
         */
        qMode: NxHypercubeMode;

        /**
         * Number of left dimensions.
         * Default value is -1. In that case, all dimensions are left dimensions.
         * The index related to each left dimension depends on the position of the pseudo dimension (if any).
         *
         * For example, a pivot table with:
         *
         * - 4 dimensions in the following order: Country, City, Product and Category
         * - one pseudo dimension in position 1 (the position is defined in qInterColumnSortOrder)
         *   qInterColumnSortOrder is (0,-1,1,2,3)
         * - 3 left dimensions (qNoOfLeftDims is set to 3).
         *
         * implies that:
         *
         * - The index 0 corresponds to the left dimension Country
         * - The index 1 corresponds to the pseudo dimension
         * - The index 2 corresponds to the left dimension City
         * - Product and Category are top dimensions.
         *
         * Another example:
         *
         * - 4 dimensions in the following order: Country, City, Product and Category
         * - 3 left dimensions (qNoOfLeftDims is set to 3).
         * - one pseudo dimension
         * - the property qInterColumnSortOrder is left empty.
         *
         * implies that:
         *
         * - The index 0 corresponds to the left dimension Country
         * - The index 1 corresponds to the left dimension City
         * - The index 2 corresponds to the left dimension Product
         * - Category is a top dimension.
         * - The pseudo dimension is a top dimension
         */
        qNoOfLeftDims: number;

        /**
         * If this property is set to true, the cells are always expanded.
         * It implies that it is not possible to collapse any cells.
         * >> The default value is false.
         */
        qAlwaysFullyExpanded: boolean;

        /**
         * Maximum number of cells for an initial data fetch (set in qInitialDataFetch) when in stacked mode (qMode is K).
         * >> The default value is 5000.
         */
        qMaxStackedCells: number;

        /**
         * If this property is set to true, the missing symbols (if any) are replaced by 0 if the value is a numeric
         * and by an empty string if the value is a string.
         * >> The default value is false.
         */
        qPopulateMissing: boolean;

        /**
         * If set to true, the total (if any) is shown on the first row.
         * >> The default value is false.
         */
        qShowTotalsAbove: boolean;

        /**
         * This property applies for pivot tables and allows to change the layout of the table.
         * An indentation is added to the beginning of each row.
         * >> The default value is false.
         */
        qIndentMode: boolean;

        /**
         * Specifies a calculation condition, which must be fulfilled for the hypercube to be (re)calculated.
         * As long as the condition is not met, the engine does not perform a new calculation.
         * This property is optional. By default, there is no calculation condition.
         */
        qCalcCond?: IValueExpr;

        /**
         * To enable the sorting by ascending or descending order in the values of a measure.
         * This property applies to pivot tables and stacked pivot tables.
         * In the case of a pivot table, the measure or pseudo dimension should be defined as a top dimension.
         * The sorting is restricted to the values of the first measure in a pivot table.
         */
        qSortbyYValue: string;

        qPseudoDimPos: number; // ?Dokufehler
        qReductionMode: ReductionModeType; // ?Dokufehler
    }

    /**
     * HyperCubeDef...
     */
    interface IVisualizationHyperCubeDef extends IHyperCubeDef {
        customErrorMessage: ICustomErrorMessage;
        qDimensions: IHyperCubeDimensionDef[];
        qMeasures: IHyperCubeMeasureDef[];
        qLayoutExclude: any;
    }

    /**
     * GenericHyperCubeProperties width extend GenericObjectProperties
     */
    interface IGenericHyperCubeProperties extends IGenericObjectProperties {
        qHyperCubeDef: IVisualizationHyperCubeDef;
    }

    /**
     * HyperCubeObject width extend GenericObjectPrototype<GenericHyperCubeProperties, GenericHyperCubeLayout>
     */
    interface IHyperCubeObject extends IGenericObjectPrototype<IGenericHyperCubeProperties, IGenericHyperCubeLayout> {
    }

    interface IApp {
        createObject(qProp: IGenericHyperCubeProperties): Promise<IHyperCubeObject>;
        createSessionObject(qProp: IGenericHyperCubeProperties): Promise<IHyperCubeObject>;
    }
}
//#endregion

//#region SelectionListObject
declare namespace EngineAPI {
    type FieldSelectionModeType = "NORMAL" | "AND" | "NOT";

    /**
     * NxCurrentSelectionItem...
     */
    interface INxCurrentSelectionItem {
        /**
         * Name of the field that is selected.
         */
        qField: string;

        /**
         * Optional parameter. This parameter is displayed if its value is true.
         * Is set to true if the field is a numeric.
         */
        qIsNum?: boolean;

        /**
         * Optional parameter. This parameter is displayed if its value is true.
         * Is set to true if the field is locked.
         */
        qLocked?: boolean;

        /**
         * Information about the fields that are not selected.
         */
        qNotSelectedFieldSelectionInfo: INxFieldSelectionInfo[];

        /**
         * Optional parameter. This parameter is displayed if its value is true.
         * Property that is set to a field. Is set to true if the field cannot be unselected.
         */
        qOneAndOnlyOne?: boolean;

        /**
         * Information about the range of selected values.
         * Is empty if there is no range of selected values.
         */
        qRangeInfo: IRangeSelectInfo[];

        /**
         * Label that, if defined, is displayed in current selections instead of the actual expression.
         */
        qReadableName: string;

        /**
         * Values that are selected.
         */
        qSelected: string;

        /**
         * Number of values that are selected.
         */
        qSelectedCount: number;

        /**
         * Information about the fields that are selected.
         */
        qSelectedFieldSelectionInfo: INxFieldSelectionInfo[];

        /**
         * Maximum values to show in the current selections.
         * >> The default value is 6.
         */
        qSelectionThreshold: number;

        /**
         * Sort index of the field. Indexing starts from 0.
         */
        qSortIndex: number;

        /**
         * Number of values in a particular state.
         */
        qStateCounts: INxStateCounts;

        /**
         * Optional parameter.
         * Text that was used for the search.
         * This parameter is filled when searching for a value and selecting it.
         */
        qTextSearch?: string;

        /**
         * Number of values in the field.
         */
        qTotal: number;
    }

    /**
     * NxFieldSelectionInfo...
     */
    interface INxFieldSelectionInfo {
        /**
         * Name of the field.
         */
        qName: string;

        /**
         * Selection mode.
         */
        qFieldSelectionMode: FieldSelectionModeType;
    }

    /**
     * GenericSelectionNxInfo width extend NxInfo
     */
    interface IGenericSelectionNxInfo extends INxInfo {
        qType: "CurrentSelection";
    }

    /**
     * GenericSelectionListProperties width extend GenericObjectProperties
     */
    interface IGenericSelectionListProperties extends IGenericObjectProperties {
        qInfo: IGenericSelectionNxInfo;
        qSelectionObjectDef: any;
    }

    /**
     * SelectionListObject...
     */
    interface ISelectionListObject {
        qBackCount: number;
        qForwardCount: number;
        qSelections: INxCurrentSelectionItem[];
    }

    /**
     * GenericSelectionListLayout width extend GenericObjectLayout
     */
    interface IGenericSelectionListLayout extends IGenericObjectLayout {
        qSelectionObject: ISelectionListObject;
    }

    /**
     * SelectionListObject width extend GenericObject
     */
    interface ISelectionListObject extends IGenericObjectPrototype<IGenericSelectionListProperties, IGenericSelectionListLayout> {
    }

    interface IApp {
        createObject(qProp: IGenericSelectionListProperties): Promise<ISelectionListObject>;
        createSessionObject(qProp: IGenericSelectionListProperties): Promise<ISelectionListObject>;
    }
}
//#endregion

//#region BookmarkListObject
declare namespace EngineAPI {
    /**
     * Lists the bookmarks. Is the layout for BookmarkListDef.
     */
    interface IBookmarkList {
        /**
         * Information about the list of bookmarks
         */
        qItems: IGenericBookmarkLayout[];
    }

    /**
     * GenericBookmarkListLayout width extend GenericBaseLayout
     */
    interface IGenericBookmarkListLayout extends IGenericBaseLayout {
        qBookmarkList: IBookmarkList;
    }

    /**
     * GenericBookmarkListNxInfo width extend NxInfo
     */
    interface IGenericBookmarkListNxInfo extends INxInfo {
        qType: "BookmarkList";
    }

    /**
     * GenericBookmarkListProperties width extend GenericProperties
     */
    interface IGenericBookmarkListProperties extends IGenericProperties {
        qInfo: IGenericBookmarkListNxInfo;
        qBookmarkListDef: IBookmarkListDef;
    }

    /**
     * BookmarkListDef
     */
    interface IBookmarkListDef {
        /**
         * Type of the list
         */
        qType: "bookmark";

        /**
         * Data typ JSON
         */
        qData: any;
    }

    /**
     * BookmarkListObject width extend GenericObject
     */
    interface IBookmarkListObject extends IGenericObjectPrototype<IGenericBookmarkListProperties, IGenericBookmarkListLayout> {
    }

    interface IApp {
        createObject(qProp: IGenericBookmarkListProperties): Promise<IBookmarkListObject>;
        createSessionObject(qProp: IGenericBookmarkListProperties): Promise<IBookmarkListObject>;
    }
}
//#endregion

//#region MeassureListObject
declare namespace EngineAPI {
    /**
     * GenericDimensionsListProperties width extend GenericBaseLayout
     */
    interface IMeassureListItemLayout extends IGenericBaseLayout {
        qMeta: INxMetaTitleDescriptionTag;
        qData: null;
    }

    /**
     * IMeassureList
     */
    interface IMeassureList {
        qItems: IMeassureListItemLayout[];
    }

    /**
     * IGenericMeasureListLayout
     */
    interface IGenericMeasureListLayout extends IGenericBaseLayout {
        qMeassureListObject: IMeassureList;
    }

    /**
     * IGenericMeassureListNxInfo
     */
    interface IGenericMeassureListNxInfo extends INxInfo {
        qType: "MeasureList";
    }

    /**
     * IGenericMeasureListProperties
     */
    interface IGenericMeasureListProperties extends IGenericProperties {
        qInfo: IGenericMeassureListNxInfo;
        qMeasureListDef: IMeasureListDef;
    }

    /**
     * IMeasureListDef
     */
    interface IMeasureListDef {
        qType: "measure";
        // qData: INxMeasure[]; nicht dokumentiert
        // example from websocket
        // qData : { title: "/qMetaDef/title", tags: "/qMetaDef/tags" }
    }

    /**
     * IMeassureListObject
     */
    interface IMeassureListObject extends IGenericObjectPrototype<IGenericMeasureListProperties, IGenericMeasureListLayout> {
    }

    interface IApp {
        createObject(qProp: IGenericMeasureListProperties): Promise<IMeassureListObject>;
        createSessionObject(qProp: IGenericMeasureListProperties): Promise<IMeassureListObject>;
    }
}
//#endregion

//#region DimensionsListObject
declare namespace EngineAPI {
    /**
     * DimensionItemLayout...
     */
    interface IDimensionItemLayout {
        qInfo: INxInfo;
        qMeta: INxMetaTitleDescriptionTag;
        qData: null;
    }

    /**
     * Lists the dimensions. Is the layout for DimensionListDef.
     */
    interface IDimensionList {
        /**
         * Information about the list of dimensions
         */
        qItems: IDimensionItemLayout[];
    }

    /**
     * GenericDimensionListLayout width extend GenericBaseLayout
     */
    interface IGenericDimensionListLayout extends IGenericBaseLayout {
        qDimensionList: IDimensionList;
    }

    /**
     * GenericDimensionListNxInfo width extend NxInfo
     */
    interface IGenericDimensionListNxInfo extends INxInfo {
        qType: "DimensionList";
    }

    /**
     * GenericDimensionsListProperties width extend GenericProperties
     */
    interface IGenericDimensionsListProperties extends IGenericProperties {
        qInfo: IGenericDimensionListNxInfo;
        qDimensionListDef: IDimensionListDef;
    }

    /**
     * Defines the lists of dimensions.
     */
    interface IDimensionListDef {
        /**
         * Type of the list
         */
        qType: "dimension";

        /**
         * Data type JSON
         */
        qData: any;
    }

    interface IDimensionListObject extends IGenericObjectPrototype<IGenericDimensionsListProperties, IGenericDimensionListLayout> {
    }

    interface IApp {
        createObject(qProp: IGenericDimensionsListProperties): Promise<IDimensionListObject>;
        createSessionObject(qProp: IGenericDimensionsListProperties): Promise<IDimensionListObject>;
    }
}
//#endregion

//#region VariableListObject
declare namespace EngineAPI {
    /**
     * NxVariableListItem...
     */
    interface INxVariableListItem {
        /**
         * Name of the variable.
         */
        qName: string;

        /**
         * Description of the variable.
         */
        qDescription: string;

        /**
         * Definition of the variable. It can be a value or an expression.
         */
        qDefinition: string;

        /**
         * If set to true, it means that the variable is a system variable.
         * A system variable provides information about the system and is set by the engine.
         * The content cannot be changed by the user.
         * >> This parameter is optional.
         * >> The default value is false.
         */
        qIsConfig?: boolean;

        /**
         * If set to true, it means that the variable is reserved.
         * >> This parameter is optional.
         * >> The default value is false.
         *
         * Examples:
         * - ScriptError is a reserved variable, set by the engine.
         * - DayNames is a reserved variable, set by the user.
         */
        qIsReserved?: boolean;

        /**
         * Information about publishing and permissions.
         * >> This parameter is optional.
         */
        qMeta?: INxMeta;

        /**
         * Identifier and type of the object.
         * >> This parameter is mandatory.
         */
        qInfo: INxInfo;

        /**
         * Data.
         */
        qData: any; // ? nicht dokumentiert

        /**
         * If set to true, it means that the variable was defined via script.
         */
        qIsScriptCreated: boolean;
    }

    /**
     * VariableListObject...
     */
    interface IVariableList {
        qItems: INxVariableListItem[];
    }

    /**
     * GenericVariableLayout width extend GenericObjectLayout
     */
    interface IGenericVariableListLayout extends IGenericBaseLayout {
        qVariableListObject: IVariableList;
    }

    /**
     * GenericVariableListProperties width extend GenericProperties
     */
    interface IGenericVariableListProperties extends IGenericProperties {
        qVariableListDef: IVariableListDef;
    }

    /**
     * Defines the list of variables in an app.
     */
    interface IVariableListDef {
        /**
         * Type of the list.
         */
        qType: string;

        /**
         * Shows the reserved variables if set to true.
         */
        qShowReserved: boolean;

        /**
         * Shows the system variables if set to true.
         */
        qShowConfig: boolean;

        /**
         * Data Type JSON
         */
        qData: any;
    }

    /**
     * VariableListObject width extend GenericObject
     */
    interface IVariableListObject extends IGenericObjectPrototype<IGenericVariableListProperties, IGenericVariableListLayout> {
    }

    interface IApp {
        createObject(qProp: IGenericVariableListProperties): Promise<IVariableListObject>;
        createSessionObject(qProp: IGenericVariableListProperties): Promise<IVariableListObject>;
    }
}
//#endregion

//#region FieldListObject
declare namespace EngineAPI {
    /**
     * FieldListObject...
     */
    interface IFieldList {
        /**
         * NxFieldDescription[]
         */
        qItems: INxFieldDescription[];
    }

    /**
     * GenericFieldListProperties width extend GenericProperties
     */
    interface IGenericFieldListProperties extends IGenericProperties {
        /**
         * FieldListDef...
         */
        qFieldListDef: IFieldListDef;
    }

    /**
     * NxFieldDescription...
     */
    interface INxFieldDescription {
        /**
         * If set to true, it means that the field is a semantic.
         */
        qIsSemantic: boolean;

        /**
         * If set to true, it means that the field is hidden.
         */
        qIsHidden: boolean;

        /**
         * If set to true, it means that the field is a system field.
         */
        qIsSystem: boolean;

        /**
         * If set to true a logical AND (instead of a logical OR) is used when making selections in a field.
         * >> The default value is false.
         */
        qAndMode?: boolean;

        /**
         * Name of the field
         */
        qName: string;

        /**
         * Number of distinct field values
         */
        qCardinal: number;

        /**
         * Gives information on a field. For example, it can return the type of the field.
         * Examples: key, text, ASCII
         */
        qTags: string[];

        /**
         * If set to true, it means that the field is a field on the fly.
         */
        qIsDefinitionOnly: boolean;

        /**
         * Lists the derived fields if any.
         */
        qDerivedFieldData: INxDerivedFieldDescriptionList;

        /**
         * Is used for Direct Discovery.
         * If set to true, it means that the type of the field is detail.
         */
        qIsDetail: boolean;

        /**
         * Is used for Direct Discovery.
         * If set to true, it means that the type of the field is measure.
         */
        qIsImplicit: boolean;
    }

    /**
     * NxDerivedFieldDescriptionList
     */
    interface INxDerivedFieldDescriptionList {
        /**
         * Information about the derived fields.
         */
        qDerivedFieldLists: INxDerivedFieldsData[];
    }

    /**
     * NxDerivedField...
     */
    interface INxDerivedField {
        /**
         * Identifier of the derived field.
         * >> The identifier is unique.
         */
        qId: string;

        /**
         * Combination of field name, definition and method.
         * Example:
         * OrderDate.MyDefinition.Year
         */
        qName: string;

        /**
         * Method name associated to the derived field.
         */
        qMethod: string;

        /**
         * Expression of the derived field.
         * Example:
         * If qName is OrderDate.MyDefinition.Year,
         * the expression is as follows:
         *
         * =${Mydefinition(OrderDate).Year}
         */
        qExpr: string;

        /**
         * List of tags.
         */
        qTags: string[];
    }

    /**
     * NxDerivedGroup...
     */
    interface INxDerivedGroup {
        /**
         * Identifier of the group.
         */
        qId: string;

        /**
         * Name of the derived group.
         */
        qName: string;

        /**
         * Grouping type.
         * The grouping should be either H or C (Grouping is mandatory for derived definitions).
         * >> Is mandatory.
         */
        qGrouping: NxGrpType;

        /**
         * List of the derived fields in the group.
         */
        qFieldDefs: string[];
    }

    /**
     * NxDerivedFieldsData...
     */
    interface INxDerivedFieldsData {
        /**
         * Name of the derived definition.
         */
        qDerivedDefinitionName: string;

        /**
         * List of the derived fields.
         */
        qFieldDefs: INxDerivedField[];

        /**
         * List of the derived groups.
         */
        qGroupDefs: INxDerivedGroup[];

        /**
         * List of tags on the derived fields.
         */
        qTags: string[];
    }

    /**
     * Defines the fields to show.
     */
    interface IFieldListDef {
        /**
         * Shows the system tables if set to true.
         */
        qShowSystem?: boolean;

        /**
         * Shows the hidden fields if set to true.
         */
        qShowHidden?: boolean;

        /**
         * Show the semantic fields if set to true.
         */
        qShowSemantic?: boolean;

        /**
         * Shows the tables and fields present in the data model viewer if set to true.
         */
        qShowSrcTables?: boolean;

        /**
         * Shows the fields defined on the fly if set to true.
         */
        qShowDefinitionOnly?: boolean;

        /**
         * Shows the fields and derived fields if set to true.
         */
        qShowDerivedFields?: boolean;

        /**
         * Shows the Direct Discovery measure fields if set to true.
         */
        qShowImplicit?: boolean;
    }

    /**
     * GenericFieldLayout width extend GenericObjectLayout
     */
    interface IGenericFieldLayout extends IGenericBaseLayout {
        /**
         * FieldListObject...
         */
        qFieldListObject: IFieldList;
    }

    /**
     * FieldListObject width extend GenericObject
     */
    interface IFieldListObject extends IGenericObjectPrototype<IGenericFieldListProperties, IGenericFieldLayout> {
    }

    interface IApp {
        createObject(qProp: IGenericFieldListProperties): Promise<IFieldListObject>;
        createSessionObject(qProp: IGenericFieldListProperties): Promise<IFieldListObject>;
    }
}
//#endregion

declare namespace enigmaJS {
    interface IGeneratedAPI {
    }
}
