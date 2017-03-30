// Type definitions for Microsoft ActiveX Data Objects
// Project: https://msdn.microsoft.com/en-us/library/windows/desktop/ms675532(v=vs.85).aspx
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ADODB {

    //Enums
    const enum ADCPROP_ASYNCTHREADPRIORITY_ENUM {
        adPriorityAboveNormal = 4,
        adPriorityBelowNormal = 2,
        adPriorityHighest = 5,
        adPriorityLowest = 1,
        adPriorityNormal = 3
    }

    const enum ADCPROP_AUTORECALC_ENUM {
        adRecalcAlways = 1,
        adRecalcUpFront = 0
    }

    const enum ADCPROP_UPDATECRITERIA_ENUM {
        adCriteriaAllCols = 1,
        adCriteriaKey = 0,
        adCriteriaTimeStamp = 3,
        adCriteriaUpdCols = 2
    }

    const enum ADCPROP_UPDATERESYNC_ENUM {
        adResyncAll = 15,
        adResyncAutoIncrement = 1,
        adResyncConflicts = 2,
        adResyncInserts = 8,
        adResyncNone = 0,
        adResyncUpdates = 4
    }

    const enum AffectEnum {
        adAffectAll = 3,
        adAffectAllChapters = 4,
        adAffectCurrent = 1,
        adAffectGroup = 2
    }

    const enum BookmarkEnum {
        adBookmarkCurrent = 0,
        adBookmarkFirst = 1,
        adBookmarkLast = 2
    }

    const enum CommandTypeEnum {
        adCmdFile = 256,
        adCmdStoredProc = 4,
        adCmdTable = 2,
        adCmdTableDirect = 512,
        adCmdText = 1,
        adCmdUnknown = 8,
        adCmdUnspecified = -1
    }

    const enum CompareEnum {
        adCompareEqual = 1,
        adCompareGreaterThan = 2,
        adCompareLessThan = 0,
        adCompareNotComparable = 4,
        adCompareNotEqual = 3
    }

    const enum ConnectModeEnum {
        adModeRead = 1,
        adModeReadWrite = 3,
        adModeRecursive = 4194304,
        adModeShareDenyNone = 16,
        adModeShareDenyRead = 4,
        adModeShareDenyWrite = 8,
        adModeShareExclusive = 12,
        adModeUnknown = 0,
        adModeWrite = 2
    }

    const enum ConnectOptionEnum {
        adAsyncConnect = 16,
        adConnectUnspecified = -1
    }

    const enum ConnectPromptEnum {
        adPromptAlways = 1,
        adPromptComplete = 2,
        adPromptCompleteRequired = 3,
        adPromptNever = 4
    }

    const enum CopyRecordOptionsEnum {
        adCopyAllowEmulation = 4,
        adCopyNonRecursive = 2,
        adCopyOverWrite = 1,
        adCopyUnspecified = -1
    }

    const enum CursorLocationEnum {
        adUseClient = 3,
        adUseClientBatch = 3,
        adUseNone = 1,
        adUseServer = 2
    }

    const enum CursorOptionEnum {
        adAddNew = 16778240,
        adApproxPosition = 16384,
        adBookmark = 8192,
        adDelete = 16779264,
        adFind = 524288,
        adHoldRecords = 256,
        adIndex = 8388608,
        adMovePrevious = 512,
        adNotify = 262144,
        adResync = 131072,
        adSeek = 4194304,
        adUpdate = 16809984,
        adUpdateBatch = 65536
    }

    const enum CursorTypeEnum {
        adOpenDynamic = 2,
        adOpenForwardOnly = 0,
        adOpenKeyset = 1,
        adOpenStatic = 3,
        adOpenUnspecified = -1
    }

    const enum DataTypeEnum {
        adArray = 8192,
        adBigInt = 20,
        adBinary = 128,
        adBoolean = 11,
        adBSTR = 8,
        adChapter = 136,
        adChar = 129,
        adCurrency = 6,
        adDate = 7,
        adDBDate = 133,
        adDBTime = 134,
        adDBTimeStamp = 135,
        adDecimal = 14,
        adDouble = 5,
        adEmpty = 0,
        adError = 10,
        adFileTime = 64,
        adGUID = 72,
        adIDispatch = 9,
        adInteger = 3,
        adIUnknown = 13,
        adLongVarBinary = 205,
        adLongVarChar = 201,
        adLongVarWChar = 203,
        adNumeric = 131,
        adPropVariant = 138,
        adSingle = 4,
        adSmallInt = 2,
        adTinyInt = 16,
        adUnsignedBigInt = 21,
        adUnsignedInt = 19,
        adUnsignedSmallInt = 18,
        adUnsignedTinyInt = 17,
        adUserDefined = 132,
        adVarBinary = 204,
        adVarChar = 200,
        adVariant = 12,
        adVarNumeric = 139,
        adVarWChar = 202,
        adWChar = 130
    }

    const enum EditModeEnum {
        adEditAdd = 2,
        adEditDelete = 4,
        adEditInProgress = 1,
        adEditNone = 0
    }

    const enum ErrorValueEnum {
        adErrBoundToCommand = 3707,
        adErrCannotComplete = 3732,
        adErrCantChangeConnection = 3748,
        adErrCantChangeProvider = 3220,
        adErrCantConvertvalue = 3724,
        adErrCantCreate = 3725,
        adErrCatalogNotSet = 3747,
        adErrColumnNotOnThisRow = 3726,
        adErrConnectionStringTooLong = 3754,
        adErrDataConversion = 3421,
        adErrDataOverflow = 3721,
        adErrDelResOutOfScope = 3738,
        adErrDenyNotSupported = 3750,
        adErrDenyTypeNotSupported = 3751,
        adErrFeatureNotAvailable = 3251,
        adErrFieldsUpdateFailed = 3749,
        adErrIllegalOperation = 3219,
        adErrIntegrityViolation = 3719,
        adErrInTransaction = 3246,
        adErrInvalidArgument = 3001,
        adErrInvalidConnection = 3709,
        adErrInvalidParamInfo = 3708,
        adErrInvalidTransaction = 3714,
        adErrInvalidURL = 3729,
        adErrItemNotFound = 3265,
        adErrNoCurrentRecord = 3021,
        adErrNotExecuting = 3715,
        adErrNotReentrant = 3710,
        adErrObjectClosed = 3704,
        adErrObjectInCollection = 3367,
        adErrObjectNotSet = 3420,
        adErrObjectOpen = 3705,
        adErrOpeningFile = 3002,
        adErrOperationCancelled = 3712,
        adErrOutOfSpace = 3734,
        adErrPermissionDenied = 3720,
        adErrPropConflicting = 3742,
        adErrPropInvalidColumn = 3739,
        adErrPropInvalidOption = 3740,
        adErrPropInvalidValue = 3741,
        adErrPropNotAllSettable = 3743,
        adErrPropNotSet = 3744,
        adErrPropNotSettable = 3745,
        adErrPropNotSupported = 3746,
        adErrProviderFailed = 3000,
        adErrProviderNotFound = 3706,
        adErrProviderNotSpecified = 3753,
        adErrReadFile = 3003,
        adErrResourceExists = 3731,
        adErrResourceLocked = 3730,
        adErrResourceOutOfScope = 3735,
        adErrSchemaViolation = 3722,
        adErrSignMismatch = 3723,
        adErrStillConnecting = 3713,
        adErrStillExecuting = 3711,
        adErrTreePermissionDenied = 3728,
        adErrUnavailable = 3736,
        adErrUnsafeOperation = 3716,
        adErrURLDoesNotExist = 3727,
        adErrURLNamedRowDoesNotExist = 3737,
        adErrVolumeNotFound = 3733,
        adErrWriteFile = 3004,
        adwrnSecurityDialog = 3717,
        adwrnSecurityDialogHeader = 3718
    }

    const enum EventReasonEnum {
        adRsnAddNew = 1,
        adRsnClose = 9,
        adRsnDelete = 2,
        adRsnFirstChange = 11,
        adRsnMove = 10,
        adRsnMoveFirst = 12,
        adRsnMoveLast = 15,
        adRsnMoveNext = 13,
        adRsnMovePrevious = 14,
        adRsnRequery = 7,
        adRsnResynch = 8,
        adRsnUndoAddNew = 5,
        adRsnUndoDelete = 6,
        adRsnUndoUpdate = 4,
        adRsnUpdate = 3
    }

    const enum EventStatusEnum {
        adStatusCancel = 4,
        adStatusCantDeny = 3,
        adStatusErrorsOccurred = 2,
        adStatusOK = 1,
        adStatusUnwantedEvent = 5
    }

    const enum ExecuteOptionEnum {
        adAsyncExecute = 16,
        adAsyncFetch = 32,
        adAsyncFetchNonBlocking = 64,
        adExecuteNoRecords = 128,
        adExecuteRecord = 2048,
        adExecuteStream = 1024,
        adOptionUnspecified = -1
    }

    const enum FieldAttributeEnum {
        adFldCacheDeferred = 4096,
        adFldFixed = 16,
        adFldIsChapter = 8192,
        adFldIsCollection = 262144,
        adFldIsDefaultStream = 131072,
        adFldIsNullable = 32,
        adFldIsRowURL = 65536,
        adFldKeyColumn = 32768,
        adFldLong = 128,
        adFldMayBeNull = 64,
        adFldMayDefer = 2,
        adFldNegativeScale = 16384,
        adFldRowID = 256,
        adFldRowVersion = 512,
        adFldUnknownUpdatable = 8,
        adFldUnspecified = -1,
        adFldUpdatable = 4
    }

    const enum FieldEnum {
        adDefaultStream = -1,
        adRecordURL = -2
    }

    const enum FieldStatusEnum {
        adFieldAlreadyExists = 26,
        adFieldBadStatus = 12,
        adFieldCannotComplete = 20,
        adFieldCannotDeleteSource = 23,
        adFieldCantConvertValue = 2,
        adFieldCantCreate = 7,
        adFieldDataOverflow = 6,
        adFieldDefault = 13,
        adFieldDoesNotExist = 16,
        adFieldIgnore = 15,
        adFieldIntegrityViolation = 10,
        adFieldInvalidURL = 17,
        adFieldIsNull = 3,
        adFieldOK = 0,
        adFieldOutOfSpace = 22,
        adFieldPendingChange = 262144,
        adFieldPendingDelete = 131072,
        adFieldPendingInsert = 65536,
        adFieldPendingUnknown = 524288,
        adFieldPendingUnknownDelete = 1048576,
        adFieldPermissionDenied = 9,
        adFieldReadOnly = 24,
        adFieldResourceExists = 19,
        adFieldResourceLocked = 18,
        adFieldResourceOutOfScope = 25,
        adFieldSchemaViolation = 11,
        adFieldSignMismatch = 5,
        adFieldTruncated = 4,
        adFieldUnavailable = 8,
        adFieldVolumeNotFound = 21
    }

    const enum FilterGroupEnum {
        adFilterAffectedRecords = 2,
        adFilterConflictingRecords = 5,
        adFilterFetchedRecords = 3,
        adFilterNone = 0,
        adFilterPendingRecords = 1,
        adFilterPredicate = 4
    }

    const enum GetRowsOptionEnum {
        adGetRowsRest = -1
    }

    const enum IsolationLevelEnum {
        adXactBrowse = 256,
        adXactChaos = 16,
        adXactCursorStability = 4096,
        adXactIsolated = 1048576,
        adXactReadCommitted = 4096,
        adXactReadUncommitted = 256,
        adXactRepeatableRead = 65536,
        adXactSerializable = 1048576,
        adXactUnspecified = -1
    }

    const enum LineSeparatorEnum {
        adCR = 13,
        adCRLF = -1,
        adLF = 10
    }

    const enum LockTypeEnum {
        adLockBatchOptimistic = 4,
        adLockOptimistic = 3,
        adLockPessimistic = 2,
        adLockReadOnly = 1,
        adLockUnspecified = -1
    }

    const enum MarshalOptionsEnum {
        adMarshalAll = 0,
        adMarshalModifiedOnly = 1
    }

    const enum MoveRecordOptionsEnum {
        adMoveAllowEmulation = 4,
        adMoveDontUpdateLinks = 2,
        adMoveOverWrite = 1,
        adMoveUnspecified = -1
    }

    const enum ObjectStateEnum {
        adStateClosed = 0,
        adStateConnecting = 2,
        adStateExecuting = 4,
        adStateFetching = 8,
        adStateOpen = 1
    }

    const enum ParameterAttributesEnum {
        adParamLong = 128,
        adParamNullable = 64,
        adParamSigned = 16
    }

    const enum ParameterDirectionEnum {
        adParamInput = 1,
        adParamInputOutput = 3,
        adParamOutput = 2,
        adParamReturnValue = 4,
        adParamUnknown = 0
    }

    const enum PersistFormatEnum {
        adPersistADTG = 0,
        adPersistXML = 1
    }

    const enum PositionEnum {
        adPosBOF = -2,
        adPosEOF = -3,
        adPosUnknown = -1
    }

    const enum PositionEnum_Param {
        adPosBOF = -2,
        adPosEOF = -3,
        adPosUnknown = -1
    }

    const enum PropertyAttributesEnum {
        adPropNotSupported = 0,
        adPropOptional = 2,
        adPropRead = 512,
        adPropRequired = 1,
        adPropWrite = 1024
    }

    const enum RecordCreateOptionsEnum {
        adCreateCollection = 8192,
        adCreateNonCollection = 0,
        adCreateOverwrite = 67108864,
        adCreateStructDoc = -2147483648,
        adFailIfNotExists = -1,
        adOpenIfExists = 33554432
    }

    const enum RecordOpenOptionsEnum {
        adDelayFetchFields = 32768,
        adDelayFetchStream = 16384,
        adOpenAsync = 4096,
        adOpenExecuteCommand = 65536,
        adOpenOutput = 8388608,
        adOpenRecordUnspecified = -1,
        adOpenSource = 8388608
    }

    const enum RecordStatusEnum {
        adRecCanceled = 256,
        adRecCantRelease = 1024,
        adRecConcurrencyViolation = 2048,
        adRecDBDeleted = 262144,
        adRecDeleted = 4,
        adRecIntegrityViolation = 4096,
        adRecInvalid = 16,
        adRecMaxChangesExceeded = 8192,
        adRecModified = 2,
        adRecMultipleChanges = 64,
        adRecNew = 1,
        adRecObjectOpen = 16384,
        adRecOK = 0,
        adRecOutOfMemory = 32768,
        adRecPendingChanges = 128,
        adRecPermissionDenied = 65536,
        adRecSchemaViolation = 131072,
        adRecUnmodified = 8
    }

    const enum RecordTypeEnum {
        adCollectionRecord = 1,
        adSimpleRecord = 0,
        adStructDoc = 2
    }

    const enum ResyncEnum {
        adResyncAllValues = 2,
        adResyncUnderlyingValues = 1
    }

    const enum SaveOptionsEnum {
        adSaveCreateNotExist = 1,
        adSaveCreateOverWrite = 2
    }

    const enum SchemaEnum {
        adSchemaActions = 41,
        adSchemaAsserts = 0,
        adSchemaCatalogs = 1,
        adSchemaCharacterSets = 2,
        adSchemaCheckConstraints = 5,
        adSchemaCollations = 3,
        adSchemaColumnPrivileges = 13,
        adSchemaColumns = 4,
        adSchemaColumnsDomainUsage = 11,
        adSchemaCommands = 42,
        adSchemaConstraintColumnUsage = 6,
        adSchemaConstraintTableUsage = 7,
        adSchemaCubes = 32,
        adSchemaDBInfoKeywords = 30,
        adSchemaDBInfoLiterals = 31,
        adSchemaDimensions = 33,
        adSchemaForeignKeys = 27,
        adSchemaFunctions = 40,
        adSchemaHierarchies = 34,
        adSchemaIndexes = 12,
        adSchemaKeyColumnUsage = 8,
        adSchemaLevels = 35,
        adSchemaMeasures = 36,
        adSchemaMembers = 38,
        adSchemaPrimaryKeys = 28,
        adSchemaProcedureColumns = 29,
        adSchemaProcedureParameters = 26,
        adSchemaProcedures = 16,
        adSchemaProperties = 37,
        adSchemaProviderSpecific = -1,
        adSchemaProviderTypes = 22,
        adSchemaReferentialConstraints = 9,
        adSchemaReferentialContraints = 9,
        adSchemaSchemata = 17,
        adSchemaSets = 43,
        adSchemaSQLLanguages = 18,
        adSchemaStatistics = 19,
        adSchemaTableConstraints = 10,
        adSchemaTablePrivileges = 14,
        adSchemaTables = 20,
        adSchemaTranslations = 21,
        adSchemaTrustees = 39,
        adSchemaUsagePrivileges = 15,
        adSchemaViewColumnUsage = 24,
        adSchemaViews = 23,
        adSchemaViewTableUsage = 25
    }

    const enum SearchDirection {
        adSearchBackward = -1,
        adSearchForward = 1
    }

    const enum SearchDirectionEnum {
        adSearchBackward = -1,
        adSearchForward = 1
    }

    const enum SeekEnum {
        adSeekAfter = 8,
        adSeekAfterEQ = 4,
        adSeekBefore = 32,
        adSeekBeforeEQ = 16,
        adSeekFirstEQ = 1,
        adSeekLastEQ = 2
    }

    const enum StreamOpenOptionsEnum {
        adOpenStreamAsync = 1,
        adOpenStreamFromRecord = 4,
        adOpenStreamUnspecified = -1
    }

    const enum StreamReadEnum {
        adReadAll = -1,
        adReadLine = -2
    }

    const enum StreamTypeEnum {
        adTypeBinary = 1,
        adTypeText = 2
    }

    const enum StreamWriteEnum {
        adWriteChar = 0,
        adWriteLine = 1,
        stWriteChar = 0,
        stWriteLine = 1
    }

    const enum StringFormatEnum {
        adClipString = 2
    }

    const enum XactAttributeEnum {
        adXactAbortRetaining = 262144,
        adXactAsyncPhaseOne = 524288,
        adXactCommitRetaining = 131072,
        adXactSyncPhaseOne = 1048576
    }

    //Interfaces
    interface Command {
        ActiveConnection: Connection;
        Cancel: () => void;
        CommandStream: any /*VT_UNKNOWN*/;
        CommandText: string;
        CommandTimeout: number;
        CommandType: CommandTypeEnum;
        CreateParameter: (Name?: string, Type?: DataTypeEnum, Direction?: ParameterDirectionEnum, Size?: number, Value?: any) => Parameter;
        Dialect: string;
        Execute: (RecordsAffected?: any, Parameters?: any, Options?: number) => Recordset;
        Name: string;
        NamedParameters: boolean;
        Parameters: Parameters;
        Prepared: boolean;
        Properties: Properties;
        State: number;
    }

    interface Connection {
        Attributes: number;
        BeginTrans: () => number;
        Cancel: () => void;
        Close: () => void;
        CommandTimeout: number;
        CommitTrans: () => void;
        ConnectionString: string;
        ConnectionTimeout: number;
        CursorLocation: CursorLocationEnum;
        DefaultDatabase: string;
        Errors: Errors;
        Execute: (CommandText: string, RecordsAffected: any, Options?: number) => Recordset;
        IsolationLevel: IsolationLevelEnum;
        Mode: ConnectModeEnum;
        Open: (ConnectionString?: string, UserID?: string, Password?: string, Options?: number) => void;
        OpenSchema: (Schema: SchemaEnum, Restrictions?: any, SchemaID?: any) => Recordset;
        Properties: Properties;
        Provider: string;
        RollbackTrans: () => void;
        State: number;
        Version: string;
    }

    interface Error {
        Description: string;
        HelpContext: number;
        HelpFile: string;
        NativeError: number;
        Number: number;
        Source: string;
        SQLState: string;
    }

    interface Errors {
        Clear: () => void;
        Count: number;
        Item: (Index: any) => Error;
        Refresh: () => void;
    }

    interface Field {
        ActualSize: number;
        AppendChunk: (Data: any) => void;
        Attributes: number;
        DataFormat: any /*VT_UNKNOWN*/;
        DefinedSize: number;
        GetChunk: (Length: number) => any;
        Name: string;
        NumericScale: number;
        OriginalValue: any;
        Precision: number;
        Properties: Properties;
        Status: number;
        Type: DataTypeEnum;
        UnderlyingValue: any;
        Value: any;
    }

    interface Fields {
        _Append: (Name: string, Type: DataTypeEnum, DefinedSize?: number, Attrib?: FieldAttributeEnum) => void;
        Append: (Name: string, Type: DataTypeEnum, DefinedSize?: number, Attrib?: FieldAttributeEnum, FieldValue?: any) => void;
        CancelUpdate: () => void;
        Count: number;
        Delete: (Index: any) => void;
        Item: (Index: any) => Field;
        Refresh: () => void;
        Resync: (ResyncValues?: ResyncEnum) => void;
        Update: () => void;
    }

    interface Parameter {
        AppendChunk: (Val: any) => void;
        Attributes: number;
        Direction: ParameterDirectionEnum;
        Name: string;
        NumericScale: number;
        Precision: number;
        Properties: Properties;
        Size: number;
        Type: DataTypeEnum;
        Value: any;
    }

    interface Parameters {
        Append: (Object: any /*VT_DISPATCH*/) => void;
        Count: number;
        Delete: (Index: any) => void;
        Item: (Index: any) => Parameter;
        Refresh: () => void;
    }

    interface Properties {
        Count: number;
        Item: (Index: any) => Property;
        Refresh: () => void;
    }

    interface Property {
        Attributes: number;
        Name: string;
        Type: DataTypeEnum;
        Value: any;
    }

    interface Record {
        ActiveConnection: any;
        Cancel: () => void;
        Close: () => void;
        CopyRecord: (Source?: string, Destination?: string, UserName?: string, Password?: string, Options?: CopyRecordOptionsEnum, Async?: boolean) => string;
        DeleteRecord: (Source?: string, Async?: boolean) => void;
        Fields: Fields;
        GetChildren: () => Recordset;
        Mode: ConnectModeEnum;
        MoveRecord: (Source?: string, Destination?: string, UserName?: string, Password?: string, Options?: MoveRecordOptionsEnum, Async?: boolean) => string;
        Open: (Source: any, ActiveConnection: any, Mode?: ConnectModeEnum, CreateOptions?: RecordCreateOptionsEnum, Options?: RecordOpenOptionsEnum, UserName?: string, Password?: string) => void;
        ParentURL: string;
        Properties: Properties;
        RecordType: RecordTypeEnum;
        Source: any;
        State: ObjectStateEnum;
    }

    interface Recordset {
        _xClone: () => Recordset;
        _xResync: (AffectRecords?: AffectEnum) => void;
        _xSave: (FileName?: string, PersistFormat?: PersistFormatEnum) => void;
        AbsolutePage: PositionEnum;
        AbsolutePosition: PositionEnum;
        ActiveCommand: any /*VT_DISPATCH*/;
        ActiveConnection: any /*VT_DISPATCH*/;
        AddNew: (FieldList?: any, Values?: any) => void;
        BOF: boolean;
        Bookmark: any;
        CacheSize: number;
        Cancel: () => void;
        CancelBatch: (AffectRecords?: AffectEnum) => void;
        CancelUpdate: () => void;
        Clone: (LockType?: LockTypeEnum) => Recordset;
        Close: () => void;
        Collect: (Index: any) => any;   //Also has setter with parameters
        CompareBookmarks: (Bookmark1: any, Bookmark2: any) => CompareEnum;
        CursorLocation: CursorLocationEnum;
        CursorType: CursorTypeEnum;
        DataMember: string;
        DataSource: any /*VT_UNKNOWN*/;
        Delete: (AffectRecords?: AffectEnum) => void;
        EditMode: EditModeEnum;
        EOF: boolean;
        Fields: Fields;
        Filter: any;
        Find: (Criteria: string, SkipRecords?: number, SearchDirection?: SearchDirectionEnum, Start?: any) => void;
        GetRows: (Rows?: number, Start?: any, Fields?: any) => any;
        GetString: (StringFormat?: StringFormatEnum, NumRows?: number, ColumnDelimeter?: string, RowDelimeter?: string, NullExpr?: string) => string;
        Index: string;
        LockType: LockTypeEnum;
        MarshalOptions: MarshalOptionsEnum;
        MaxRecords: number;
        Move: (NumRecords: number, Start?: any) => void;
        MoveFirst: () => void;
        MoveLast: () => void;
        MoveNext: () => void;
        MovePrevious: () => void;
        NextRecordset: (RecordsAffected?: any) => Recordset;
        Open: (Source: any, ActiveConnection: any, CursorType?: CursorTypeEnum, LockType?: LockTypeEnum, Options?: number) => void;
        PageCount: number;
        PageSize: number;
        Properties: Properties;
        RecordCount: number;
        Requery: (Options?: number) => void;
        Resync: (AffectRecords?: AffectEnum, ResyncValues?: ResyncEnum) => void;
        Save: (Destination: any, PersistFormat?: PersistFormatEnum) => void;
        Seek: (KeyValues: any, SeekOption?: SeekEnum) => void;
        Sort: string;
        Source: any /*VT_DISPATCH*/;
        State: number;
        Status: number;
        StayInSync: boolean;
        Supports: (CursorOptions: CursorOptionEnum) => boolean;
        Update: (Fields?: any, Values?: any) => void;
        UpdateBatch: (AffectRecords?: AffectEnum) => void;
    }

    interface Stream {
        Cancel: () => void;
        Charset: string;
        Close: () => void;
        CopyTo: (DestStream: Stream, CharNumber?: number) => void;
        EOS: boolean;
        Flush: () => void;
        LineSeparator: LineSeparatorEnum;
        LoadFromFile: (FileName: string) => void;
        Mode: ConnectModeEnum;
        Open: (Source: any, Mode?: ConnectModeEnum, Options?: StreamOpenOptionsEnum, UserName?: string, Password?: string) => void;
        Position: number;
        Read: (NumBytes?: number) => any;
        ReadText: (NumChars?: number) => string;
        SaveToFile: (FileName: string, Options?: SaveOptionsEnum) => void;
        SetEOS: () => void;
        Size: number;
        SkipLine: () => void;
        State: ObjectStateEnum;
        Type: StreamTypeEnum;
        Write: (Buffer: any) => void;
        WriteText: (Data: string, Options?: StreamWriteEnum) => void;
    }

}

interface ActiveXObject {
    new (progID: 'ADODB.Connection'): ADODB.Connection;
    new (progID: 'ADODB.Record'): ADODB.Record;
    new (progID: 'ADODB.Stream'): ADODB.Stream;
    new (progID: 'ADODB.Command'): ADODB.Command;
    new (progID: 'ADODB.Recordset'): ADODB.Recordset;
    new (progID: 'ADODB.Parameter'): ADODB.Parameter;
}

