// Type definitions for non-npm package Microsoft Office 16.0 Access Database Engine Object Library - DAO 16.0
// Project: https://msdn.microsoft.com/en-us/library/dn124645.aspx
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

/// <reference types="activex-interop" />

declare namespace DAO {
    const enum _DAOSuppHelp {
        KeepLocal = 0,
        LogMessages = 0,
        Replicable = 0,
        ReplicableBool = 0,
        V1xNullBehavior = 0,
    }

    const enum CollatingOrderEnum {
        dbSortArabic = 1025,
        dbSortChineseSimplified = 2052,
        dbSortChineseTraditional = 1028,
        dbSortCyrillic = 1049,
        dbSortCzech = 1029,
        dbSortDutch = 1043,
        dbSortGeneral = 1033,
        dbSortGreek = 1032,
        dbSortHebrew = 1037,
        dbSortHindi = 1081,
        dbSortHungarian = 1038,
        dbSortIcelandic = 1039,
        dbSortJapanese = 1041,
        dbSortJapaneseRadicalStrokeCount = 263185,
        dbSortKorean = 1042,
        dbSortNeutral = 1024,
        dbSortNorwdan = 1030,
        dbSortPDXIntl = 1033,
        dbSortPDXNor = 1030,
        dbSortPDXSwe = 1053,
        dbSortPolish = 1045,
        dbSortSlovenian = 1060,
        dbSortSpanish = 1034,
        dbSortSwedFin = 1053,
        dbSortThai = 1054,
        dbSortTurkish = 1055,
        dbSortUndefined = -1,
    }

    const enum CommitTransOptionsEnum {
        dbForceOSFlush = 1,
    }

    const enum CursorDriverEnum {
        dbUseClientBatchCursor = 3,
        dbUseDefaultCursor = -1,
        dbUseNoCursor = 4,
        dbUseODBCCursor = 1,
        dbUseServerCursor = 2,
    }

    const enum DatabaseTypeEnum {
        /** @deprecated */
        dbDecrypt = 4,
        /** @deprecated */
        dbEncrypt = 2,
        dbVersion10 = 1,
        dbVersion11 = 8,
        dbVersion120 = 128,
        dbVersion140 = 256,
        dbVersion150 = 512,
        dbVersion20 = 16,
        dbVersion30 = 32,
        dbVersion40 = 64,
    }

    const enum DataTypeEnum {
        dbAttachment = 101,
        dbBigInt = 16,
        dbBinary = 9,
        dbBoolean = 1,
        dbByte = 2,
        dbChar = 18,
        dbComplexByte = 102,
        dbComplexDecimal = 108,
        dbComplexDouble = 106,
        dbComplexGUID = 107,
        dbComplexInteger = 103,
        dbComplexLong = 104,
        dbComplexSingle = 105,
        dbComplexText = 109,
        dbCurrency = 5,
        dbDate = 8,
        dbDecimal = 20,
        dbDouble = 7,
        dbFloat = 21,
        dbGUID = 15,
        dbInteger = 3,
        dbLong = 4,
        dbLongBinary = 11,
        dbMemo = 12,
        dbNumeric = 19,
        dbSingle = 6,
        dbText = 10,
        dbTime = 22,
        dbTimeStamp = 23,
        dbVarBinary = 17,
    }

    const enum DriverPromptEnum {
        dbDriverComplete = 0,
        dbDriverCompleteRequired = 3,
        dbDriverNoPrompt = 1,
        dbDriverPrompt = 2,
    }

    const enum EditModeEnum {
        dbEditAdd = 2,
        dbEditInProgress = 1,
        dbEditNone = 0,
    }

    const enum FieldAttributeEnum {
        dbAutoIncrField = 16,
        dbDescending = 1,
        dbFixedField = 1,
        dbHyperlinkField = 32768,
        dbSystemField = 8192,
        dbUpdatableField = 32,
        dbVariableField = 2,
    }

    const enum IdleEnum {
        dbFreeLocks = 1,
        dbRefreshCache = 8,
    }

    const enum ISAMStatsEnum {
        DiskReads = 0,
        DiskWrites = 1,
        LocksPlaced = 4,
        LocksReleased = 5,
        ReadsFromCache = 2,
        ReadsFromReadAheadCache = 3,
    }

    const enum LanguageConstants {
        dbLangArabic = ';LANGID=0x0401;CP=1256;COUNTRY=0',
        dbLangChineseSimplified = ';LANGID=0x0804;CP=936;COUNTRY=0',
        dbLangChineseTraditional = ';LANGID=0x0404;CP=950;COUNTRY=0',
        dbLangCyrillic = ';LANGID=0x0419;CP=1251;COUNTRY=0',
        dbLangCzech = ';LANGID=0x0405;CP=1250;COUNTRY=0',
        dbLangDutch = ';LANGID=0x0413;CP=1252;COUNTRY=0',
        dbLangGeneral = ';LANGID=0x0409;CP=1252;COUNTRY=0',
        dbLangGreek = ';LANGID=0x0408;CP=1253;COUNTRY=0',
        dbLangHebrew = ';LANGID=0x040D;CP=1255;COUNTRY=0',
        dbLangHindi = ';LANGID=0x00000439;CP=65001;COUNTRY=0',
        dbLangHungarian = ';LANGID=0x040E;CP=1250;COUNTRY=0',
        dbLangIcelandic = ';LANGID=0x040F;CP=1252;COUNTRY=0',
        dbLangJapanese = ';LANGID=0x0411;CP=932;COUNTRY=0',
        dbLangJapaneseRadicalStrokeCount = ';LANGID=0x00040411;CP=65001;COUNTRY=0',
        dbLangKorean = ';LANGID=0x0412;CP=949;COUNTRY=0',
        dbLangNordic = ';LANGID=0x041D;CP=1252;COUNTRY=0',
        dbLangNorwDan = ';LANGID=0x0406;CP=1252;COUNTRY=0',
        dbLangPolish = ';LANGID=0x0415;CP=1250;COUNTRY=0',
        dbLangSlovenian = ';LANGID=0x0424;CP=1250;COUNTRY=0',
        dbLangSpanish = ';LANGID=0x040A;CP=1252;COUNTRY=0',
        dbLangSwedFin = ';LANGID=0x041D;CP=1252;COUNTRY=0',
        dbLangThai = ';LANGID=0x041E;CP=874;COUNTRY=0',
        dbLangTurkish = ';LANGID=0x041F;CP=1254;COUNTRY=0',
    }

    const enum LockTypeEnum {
        dbOptimistic = 3,
        dbOptimisticBatch = 5,
        dbOptimisticValue = 1,
        dbPessimistic = 2,
    }

    const enum ParameterDirectionEnum {
        dbParamInput = 1,
        dbParamInputOutput = 3,
        dbParamOutput = 2,
        dbParamReturnValue = 4,
    }

    const enum PermissionEnum {
        dbSecCreate = 1,
        dbSecDBAdmin = 8,
        dbSecDBCreate = 1,
        dbSecDBExclusive = 4,
        dbSecDBOpen = 2,
        dbSecDelete = 65536,
        dbSecDeleteData = 128,
        dbSecFullAccess = 1048575,
        dbSecInsertData = 32,
        dbSecNoAccess = 0,
        dbSecReadDef = 4,
        dbSecReadSec = 131072,
        dbSecReplaceData = 64,
        dbSecRetrieveData = 20,
        dbSecWriteDef = 65548,
        dbSecWriteOwner = 524288,
        dbSecWriteSec = 262144,
    }

    const enum QueryDefStateEnum {
        dbQPrepare = 1,
        dbQUnprepare = 2,
    }

    const enum QueryDefTypeEnum {
        dbQAction = 240,
        dbQAppend = 64,
        dbQCompound = 160,
        dbQCrosstab = 16,
        dbQDDL = 96,
        dbQDelete = 32,
        dbQMakeTable = 80,
        dbQProcedure = 224,
        dbQSelect = 0,
        dbQSetOperation = 128,
        dbQSPTBulk = 144,
        dbQSQLPassThrough = 112,
        dbQUpdate = 48,
    }

    const enum RecordsetOptionEnum {
        dbAppendOnly = 8,
        dbConsistent = 32,
        dbDenyRead = 2,
        dbDenyWrite = 1,
        dbExecDirect = 2048,
        dbFailOnError = 128,
        dbForwardOnly = 256,
        dbInconsistent = 16,
        dbReadOnly = 4,
        dbRunAsync = 1024,
        dbSeeChanges = 512,
        dbSQLPassThrough = 64,
    }

    const enum RecordsetTypeEnum {
        dbOpenDynamic = 16,
        dbOpenDynaset = 2,
        dbOpenForwardOnly = 8,
        dbOpenSnapshot = 4,
        dbOpenTable = 1,
    }

    const enum RecordStatusEnum {
        dbRecordDBDeleted = 4,
        dbRecordDeleted = 3,
        dbRecordModified = 1,
        dbRecordNew = 2,
        dbRecordUnmodified = 0,
    }

    const enum RelationAttributeEnum {
        dbRelationDeleteCascade = 4096,
        dbRelationDontEnforce = 2,
        dbRelationInherited = 4,
        dbRelationLeft = 16777216,
        dbRelationRight = 33554432,
        dbRelationUnique = 1,
        dbRelationUpdateCascade = 256,
    }

    const enum ReplicaTypeEnum {
        dbRepMakePartial = 1,
        dbRepMakeReadOnly = 2,
    }

    const enum SetOptionEnum {
        dbExclusiveAsyncDelay = 60,
        dbFlushTransactionTimeout = 66,
        dbImplicitCommitSync = 59,
        dbLockDelay = 63,
        dbLockRetry = 57,
        dbMaxBufferSize = 8,
        dbMaxLocksPerFile = 62,
        dbPageTimeout = 6,
        dbPasswordEncryptionAlgorithm = 81,
        dbPasswordEncryptionKeyLength = 82,
        dbPasswordEncryptionProvider = 80,
        dbRecycleLVs = 65,
        dbSharedAsyncDelay = 61,
        dbUserCommitSync = 58,
    }

    const enum SynchronizeTypeEnum {
        dbRepExportChanges = 1,
        dbRepImpExpChanges = 4,
        dbRepImportChanges = 2,
        dbRepSyncInternet = 16,
    }

    const enum TableDefAttributeEnum {
        dbAttachedODBC = 536870912,
        dbAttachedTable = 1073741824,
        dbAttachExclusive = 65536,
        dbAttachSavePWD = 131072,
        dbHiddenObject = 1,
        dbSystemObject = -2147483646,
    }

    const enum UpdateCriteriaEnum {
        dbCriteriaAllCols = 4,
        dbCriteriaDeleteInsert = 16,
        dbCriteriaKey = 1,
        dbCriteriaModValues = 2,
        dbCriteriaTimestamp = 8,
        dbCriteriaUpdate = 32,
    }

    const enum UpdateTypeEnum {
        dbUpdateBatch = 4,
        dbUpdateCurrentRecord = 2,
        dbUpdateRegular = 1,
    }

    const enum WorkspaceTypeEnum {
        dbUseJet = 2,
        dbUseODBC = 1,
    }

    type Bookmark = SafeArray<number>;

    class ComplexType {
        private 'DAO.ComplexType_typekey': ComplexType;
        private constructor();
        readonly Fields: Fields;
    }

    class Connection {
        private 'DAO.Connection_typekey': Connection;
        private constructor();
        Cancel(): void;
        Close(): void;
        readonly Connect: string;
        CreateQueryDef(Name?: string, SQLText?: string): QueryDef;
        readonly Database: Database;
        Execute(Query: string, Options?: RecordsetOptionEnum): void;
        readonly hDbc: number;
        readonly Name: string;
        OpenRecordset(Name: string, Type?: RecordsetTypeEnum, Options?: RecordsetOptionEnum, LockEdit?: LockTypeEnum): Recordset;
        readonly QueryDefs: QueryDefs;
        QueryTimeout: number;
        readonly RecordsAffected: number;
        readonly Recordsets: Recordsets;
        readonly StillExecuting: boolean;
        readonly Transactions: boolean;
        readonly Updatable: boolean;
    }

    interface Connections {
        readonly Count: number;
        Item(Item: number | string): Connection;
        Refresh(): void;
        (Item: number | string): Connection;
    }

    class Container {
        private 'DAO.Container_typekey': Container;
        private constructor();
        readonly AllPermissions: number;
        readonly Documents: Documents;
        Inherit: boolean;
        readonly Name: string;
        Owner: string;
        Permissions: number;
        readonly Properties: Properties;
        UserName: string;
    }

    interface Containers {
        readonly Count: number;
        Item(Item: number | string): Container;
        Refresh(): void;
        (Item: number | string): Container;
    }

    class Database {
        private 'DAO.Database_typekey': Database;
        private constructor();
        Close(): void;
        readonly CollatingOrder: number;
        Connect: string;
        readonly Connection: Connection;
        readonly Containers: Containers;
        CreateProperty(Name?: string, Type?: DataTypeEnum, Value?: any, DDL?: boolean): Property;
        CreateQueryDef(Name?: string, SQLText?: string): QueryDef;
        CreateRelation(Name?: string, Table?: string, ForeignTable?: string, Attributes?: RelationAttributeEnum): Relation;
        CreateTableDef(Name?: string, Attributes?: TableDefAttributeEnum, SourceTableName?: string, Connect?: string): TableDef;
        DesignMasterID: string;
        Execute(Query: string, Options?: RecordsetOptionEnum): void;
        MakeReplica(PathName: string, Description: string, Options?: ReplicaTypeEnum): void;
        readonly Name: string;
        NewPassword(bstrOld: string, bstrNew: string): void;
        OpenRecordset(Name: string, Type?: RecordsetTypeEnum, Options?: RecordsetOptionEnum, LockEdit?: LockTypeEnum): Recordset;
        PopulatePartial(DbPathName: string): void;
        readonly Properties: Properties;
        readonly QueryDefs: QueryDefs;
        QueryTimeout: number;
        readonly RecordsAffected: number;
        readonly Recordsets: Recordsets;
        readonly Relations: Relations;
        readonly ReplicaID: string;
        Synchronize(DbPathName: string, ExchangeType?: SynchronizeTypeEnum): void;
        readonly TableDefs: TableDefs;
        readonly Transactions: boolean;
        readonly Updatable: boolean;
        readonly Version: string;
    }

    interface Databases {
        readonly Count: number;
        Item(Item: number | string): Database;
        Refresh(): void;
        (Item: number | string): Database;
    }

    class DBEngine {
        private 'DAO.DBEngine_typekey': DBEngine;
        private constructor();
        BeginTrans(): void;

        /** @param Option [Option=0] */
        CommitTrans(Option?: number): void;

        /**
         * Compact a closed database
         *
         * @param DstLocale Specify one of the following:
         * *  the locale, using one of the language constants
         * * the password, in the form `;pwd=MyNewPassword'`
         * * both the constant and a password, e.g. `dbLangGreek + ';pwd=MyNewPassword'`
         *
         * @param Options `dbEncrypt` and `dbDecrypt` are deprecated, and unsupported for ACCDB
         * @param password Deprecated, and unsupported for ACCDB
         */
        CompactDatabase(SrcName: string, DstName: string, DstLocale?: LanguageConstants | string, Options?: DatabaseTypeEnum, password?: string): void;

        /**
         * @param Locale  Specify one of the following:
         * *  the locale, using one of the language constants
         * * the password, in the form `;pwd=MyNewPassword'`
         * * both the constant and a password, e.g. `dbLangGreek + ';pwd=MyNewPassword'`
         */
        CreateDatabase(Name: string, Locale: LanguageConstants | string, Option?: DatabaseTypeEnum): Database;
        CreateWorkspace(Name: string, UserName: string, Password: string, UseType?: WorkspaceTypeEnum): Workspace;
        readonly DefaultPassword: string;
        DefaultType: number;
        readonly DefaultUser: string;
        readonly Errors: Errors;
        Idle(Action?: IdleEnum): void;
        IniPath: string;

        /** Returns various statistics from the Jet engine */
        ISAMStats(StatNum: ISAMStatsEnum, Reset?: boolean): number;
        LoginTimeout: number;

        /**
         * @param Connect ODBC connection string; prepend with `ODBC;`
         */
        OpenConnection(Name: string, Options?: DriverPromptEnum | RecordsetOptionEnum.dbRunAsync, ReadOnly?: boolean, Connect?: string): Connection;
        OpenDatabase(Name: string, Exclusive?: boolean, ReadOnly?: boolean, Connect?: string): Database;
        readonly Properties: Properties;
        RegisterDatabase(Dsn: string, Driver: string, Silent: boolean, Attributes: string): void;
        RepairDatabase(Name: string): void;
        Rollback(): void;
        SetOption(Option: SetOptionEnum, Value: any): void;
        SystemDB: string;
        readonly Version: string;
        readonly Workspaces: Workspaces;
    }

    class Document {
        private 'DAO.Document_typekey': Document;
        private constructor();
        readonly AllPermissions: number;
        readonly Container: string;
        CreateProperty(Name?: string, Type?: DataTypeEnum, Value?: any, DDL?: boolean): Property;
        readonly DateCreated: VarDate;
        readonly LastUpdated: VarDate;
        readonly Name: string;
        Owner: string;
        Permissions: number;
        readonly Properties: Properties;
        UserName: string;
    }

    interface Documents {
        readonly Count: number;
        Item(Item: number | string): Document;
        Refresh(): void;
        (Item: number | string): Document;
    }

    class Error {
        private 'DAO.Error_typekey': Error;
        private constructor();
        readonly Description: string;
        readonly HelpContext: number;
        readonly HelpFile: string;
        readonly Number: number;
        readonly Source: string;
    }

    interface Errors {
        readonly Count: number;
        Item(Item: any): Error;
        Refresh(): void;
        (Item: any): Error;
    }

    class Field {
        private constructor();
        private 'DAO.Field2_typekey': Field;
        AllowZeroLength: boolean;
        AppendChunk(Val: any): void;
        AppendOnly: boolean;
        Attributes: number;
        readonly CollatingOrder: number;
        readonly CollectionIndex: number;
        readonly ComplexType: ComplexType;
        CreateProperty(Name?: string, Type?: DataTypeEnum, Value?: any, DDL?: boolean): Property;
        readonly DataUpdatable: boolean;
        DefaultValue: any;
        Expression: string;
        readonly FieldSize: number;
        ForeignName: string;
        GetChunk(Offset: number, Bytes: number): any;
        readonly IsComplex: boolean;
        LoadFromFile(FileName: string): void;
        Name: string;
        OrdinalPosition: number;
        readonly OriginalValue: any;
        readonly Properties: Properties;
        Required: boolean;
        SaveToFile(FileName: string): void;
        Size: number;
        readonly SourceField: string;
        readonly SourceTable: string;
        Type: number;
        ValidateOnSet: boolean;
        ValidationRule: string;
        ValidationText: string;
        Value: any;
        readonly VisibleValue: any;
    }

    interface Fields {
        Append(Field: Field): void;
        readonly Count: number;
        Delete(Name: string): void;
        Item(Item: number | string): Field;
        Refresh(): void;
        (Item: number | string): Field;
    }

    class Group {
        private 'DAO.Group_typekey': Group;
        private constructor();
        CreateUser(Name?: string, PID?: string, Password?: string): User;
        Name: string;
        readonly PID: string;
        readonly Properties: Properties;
        readonly Users: Users;
    }

    interface Groups {
        Append(Group: Group): void;
        readonly Count: number;
        Delete(Name: string): void;
        Item(Item: number | string): Group;
        Refresh(): void;
        (Item: number | string): Group;
    }

    class Index {
        private 'DAO.Index_typekey': Index;
        private constructor();
        Clustered: boolean;
        CreateField(Name?: string): Field;
        CreateProperty(Name?: string, Type?: DataTypeEnum, Value?: any, DDL?: boolean): Property;
        readonly DistinctCount: number;
        Fields: Fields;
        readonly Foreign: boolean;
        IgnoreNulls: boolean;
        Name: string;
        Primary: boolean;
        readonly Properties: Properties;
        Required: boolean;
        Unique: boolean;
    }

    interface Indexes {
        Append(Index: Index): void;
        readonly Count: number;
        Delete(Name: string): void;
        Item(Item: number | string): Index;
        Refresh(): void;
        (Item: number | string): Index;
    }

    class Parameter {
        private 'DAO.Parameter_typekey': Parameter;
        private constructor();
        Direction: number;
        readonly Name: string;
        readonly Properties: Properties;
        Type: number;
        Value: any;
    }

    interface Parameters {
        readonly Count: number;
        Item(Item: number | string): Parameter;
        Refresh(): void;
        (Item: number | string): Parameter;
    }

    interface Properties {
        Append(Property: Property): void;
        readonly Count: number;
        Delete(Name: string): void;
        Item(Item: number | string): Property;
        Refresh(): void;
        (Item: number | string): Property;
    }

    class Property {
        private 'DAO.Property_typekey': Property;
        private constructor();
        readonly Inherited: boolean;
        Name: string;
        readonly Properties: Properties;
        Type: number;
        Value: any;
    }

    class QueryDef {
        private 'DAO.QueryDef_typekey': QueryDef;
        private constructor();
        CacheSize: number;
        Cancel(): void;
        Close(): void;
        Connect: string;
        CreateProperty(Name?: string, Type?: DataTypeEnum, Value?: any, DDL?: boolean): Property;
        readonly DateCreated: VarDate;
        Execute(Options?: RecordsetOptionEnum): void;
        readonly Fields: Fields;
        readonly hStmt: number;
        readonly LastUpdated: VarDate;
        MaxRecords: number;
        Name: string;
        ODBCTimeout: number;
        OpenRecordset(Type?: RecordsetTypeEnum, Options?: RecordsetOptionEnum, LockEdit?: LockTypeEnum): Recordset;
        readonly Parameters: Parameters;
        Prepare: QueryDefStateEnum;
        readonly Properties: Properties;
        readonly RecordsAffected: number;
        ReturnsRecords: boolean;
        SQL: string;
        readonly StillExecuting: boolean;
        readonly Type: QueryDefTypeEnum;
        readonly Updatable: boolean;
    }

    interface QueryDefs {
        Append(QueryDef: QueryDef): void;
        readonly Count: number;
        Delete(Name: string): void;
        Item(Item: number | string): QueryDef;
        Refresh(): void;
        (Item: number | string): QueryDef;
    }

    interface Recordset {
        AbsolutePosition: number;
        AddNew(): void;
        readonly BatchCollisionCount: number;
        readonly BatchCollisions: SafeArray<Bookmark>;
        BatchSize: number;
        readonly BOF: boolean;
        Bookmark: Bookmark;
        readonly Bookmarkable: boolean;
        CacheSize: number;
        CacheStart: Bookmark;
        Cancel(): void;

        /** @param UpdateType [UpdateType=1] */
        CancelUpdate(UpdateType?: number): void;
        Clone(): Recordset;
        Close(): void;
        Collect(Item: any): any;
        Connection: Connection;
        CopyQueryDef(): QueryDef;
        readonly DateCreated: VarDate;
        Delete(): void;
        Edit(): void;
        readonly EditMode: EditModeEnum;
        readonly EOF: boolean;
        readonly Fields: Fields;
        FillCache(Rows?: number, StartBookmark?: string): void;
        Filter: string;
        FindFirst(Criteria: string): void;
        FindLast(Criteria: string): void;
        FindNext(Criteria: string): void;
        FindPrevious(Criteria: string): void;
        GetRows(NumRows?: number): any;
        readonly hStmt: number;
        Index: string;
        readonly LastModified: Bookmark;
        readonly LastUpdated: VarDate;
        LockEdits: boolean;
        Move(Rows: number, StartBookmark?: Bookmark): void;
        MoveFirst(): void;

        /** @param Options [Options=0] */
        MoveLast(Options?: number): void;
        MoveNext(): void;
        MovePrevious(): void;
        readonly Name: string;
        NextRecordset(): boolean;
        readonly NoMatch: boolean;
        readonly ODBCFetchCount: number;
        readonly ODBCFetchDelay: number;
        OpenRecordset(Type?: RecordsetTypeEnum, Options?: RecordsetOptionEnum): Recordset;
        readonly Parent: Database;
        PercentPosition: number;
        readonly Properties: Properties;
        readonly RecordCount: number;
        readonly RecordStatus: number;
        Requery(NewQueryDef?: QueryDef): void;
        readonly Restartable: boolean;
        Seek(Comparison: string, Key1: any, Key2?: any, Key3?: any, Key4?: any, Key5?: any, Key6?: any, Key7?: any, Key8?: any, Key9?: any, Key10?: any, Key11?: any, Key12?: any, Key13?: any): void;
        Sort: string;
        readonly StillExecuting: boolean;
        readonly Transactions: boolean;
        readonly Type: RecordsetTypeEnum;
        readonly Updatable: boolean;

        /**
         * @param UpdateType [UpdateType=1]
         * @param Force [Force=false]
         */
        Update(UpdateType?: UpdateTypeEnum, Force?: boolean): void;
        UpdateOptions: UpdateCriteriaEnum;
        readonly ValidationRule: string;
        readonly ValidationText: string;
        (FieldIndex: number | string): Field;
    }

    interface Recordsets {
        readonly Count: number;
        Item(Item: number | string): Recordset;
        Refresh(): void;
        (Item: number | string): Recordset;
    }

    class Relation {
        private 'DAO.Relation_typekey': Relation;
        private constructor();
        Attributes: RelationAttributeEnum;
        CreateField(Name?: string): Field;
        readonly Fields: Fields;
        ForeignTable: string;
        Name: string;
        PartialReplica: boolean;
        readonly Properties: Properties;
        Table: string;
    }

    interface Relations {
        Append(Relation: Relation): void;
        readonly Count: number;
        Delete(Name: string): void;
        Item(Item: number | string): Relation;
        Refresh(): void;
        (Item: number | string): Relation;
    }

    class TableDef {
        private 'DAO.TableDef_typekey': TableDef;
        private constructor();
        Attributes: TableDefAttributeEnum;
        readonly ConflictTable: string;
        Connect: string;
        CreateField(Name?: string, Type?: DataTypeEnum, Size?: number): Field;
        CreateIndex(Name?: string): Index;
        CreateProperty(Name?: string, Type?: DataTypeEnum, Value?: any, DDL?: boolean): Property;
        readonly DateCreated: VarDate;
        readonly Fields: Fields;
        readonly Indexes: Indexes;
        readonly LastUpdated: VarDate;
        Name: string;
        OpenRecordset(Type?: RecordsetTypeEnum, Options?: RecordsetOptionEnum): Recordset;
        readonly Properties: Properties;
        readonly RecordCount: number;
        RefreshLink(): void;
        ReplicaFilter: string | boolean;
        SourceTableName: string;
        readonly Updatable: boolean;
        ValidationRule: string;
        ValidationText: string;
    }

    interface TableDefs {
        Append(TableDef: TableDef): void;
        readonly Count: number;
        Delete(Name: string): void;
        Item(Item: number | string): TableDef;
        Refresh(): void;
        (Item: number | string): TableDef;
    }

    class User {
        private 'DAO.User_typekey': User;
        private constructor();
        CreateGroup(Name?: string, PID?: string): Group;
        readonly Groups: Groups;
        Name: string;
        NewPassword(bstrOld: string, bstrNew: string): void;
        readonly Password: string;
        readonly PID: string;
        readonly Properties: Properties;
    }

    interface Users {
        Append(User: User): void;
        readonly Count: number;
        Delete(Name: string): void;
        Item(Item: number | string): User;
        Refresh(): void;
        (Item: number | string): User;
    }

    class Workspace {
        private 'DAO.Workspace_typekey': Workspace;
        private constructor();
        BeginTrans(): void;
        Close(): void;

        /** @param Options [Options=0] */
        CommitTrans(Options?: number): void;
        readonly Connections: Connections;

        /**
         * @param Connect  Specify one of the following:
         * *  the locale, using one of the language constants
         * * the password, in the form `;pwd=MyNewPassword'`
         * * both the constant and a password, e.g. `dbLangGreek + ';pwd=MyNewPassword'`
         */
        CreateDatabase(Name: string, Connect: string, Option?: DatabaseTypeEnum): Database;
        CreateGroup(Name?: string, PID?: string): Group;
        CreateUser(Name?: string, PID?: string, Password?: string): User;
        readonly Databases: Databases;
        DefaultCursorDriver: number;
        readonly Groups: Groups;
        readonly hEnv: number;
        IsolateODBCTrans: number;
        LoginTimeout: number;
        Name: string;

        /**
         * @param Connect ODBC connection string; prepend with `ODBC;`
         */
        OpenConnection(Name: string, Options?: DriverPromptEnum | RecordsetOptionEnum.dbRunAsync, ReadOnly?: boolean, Connect?: string): Connection;
        OpenDatabase(Name: string, Exclusive?: boolean, ReadOnly?: boolean, Connect?: string): Database;
        readonly Properties: Properties;
        Rollback(): void;
        readonly Type: number;
        readonly UserName: string;
        readonly Users: Users;
    }

    interface Workspaces {
        Append(Workspace: Workspace): void;
        readonly Count: number;
        Delete(Name: string): void;
        Item(Item: number | string): Workspace;
        Refresh(): void;
        (Item: number | string): Workspace;
    }
}

interface ActiveXObjectNameMap {
    'DAO.DBEngine': DAO.DBEngine;
    'DAO.Field': DAO.Field;
    'DAO.Group': DAO.Group;
    'DAO.Index': DAO.Index;
    'DAO.PrivateDBEngine': DAO.DBEngine;
    'DAO.QueryDef': DAO.QueryDef;
    'DAO.Relation': DAO.Relation;
    'DAO.TableDef': DAO.TableDef;
    'DAO.User': DAO.User;
}
