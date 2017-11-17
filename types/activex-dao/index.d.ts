// Type definitions for Microsoft Office 14.0 Access Database Engine Object Library - DAO 14.0
// Project: https://msdn.microsoft.com/en-us/library/dn124645.aspx
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

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
        dbDecrypt = 4,
        dbEncrypt = 2,
        dbVersion10 = 1,
        dbVersion11 = 8,
        dbVersion120 = 128,
        dbVersion140 = 256,
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

    class Connection {
        private 'DAO.Connection_typekey': Connection;
        private constructor();
        Cancel(): void;
        Close(): void;
        readonly Connect: string;
        CreateQueryDef(Name?: any, SQLText?: any): QueryDef;
        readonly Database: Database;
        Execute(Query: string, Options?: any): void;
        readonly hDbc: number;
        readonly Name: string;
        OpenRecordset(Name: string, Type?: any, Options?: any, LockEdit?: any): Recordset;
        readonly QueryDefs: QueryDefs;
        QueryTimeout: number;
        readonly RecordsAffected: number;
        readonly Recordsets: Recordsets;
        readonly StillExecuting: boolean;
        readonly Transactions: boolean;
        readonly Updatable: boolean;
    }

    class Connections {
        private 'DAO.Connections_typekey': Connections;
        private constructor();
        readonly Count: number;
        Item(Item: any): Connection;
        Refresh(): void;
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

    class Containers {
        private 'DAO.Containers_typekey': Containers;
        private constructor();
        readonly Count: number;
        Item(Item: any): Container;
        Refresh(): void;
    }

    class Database {
        private 'DAO.Database_typekey': Database;
        private constructor();
        Close(): void;
        readonly CollatingOrder: number;
        Connect: string;
        readonly Connection: Connection;
        readonly Containers: Containers;
        CreateProperty(Name?: any, Type?: any, Value?: any, DDL?: any): Property;
        CreateQueryDef(Name?: any, SQLText?: any): QueryDef;
        CreateRelation(Name?: any, Table?: any, ForeignTable?: any, Attributes?: any): Relation;
        CreateTableDef(Name?: any, Attributes?: any, SourceTableName?: any, Connect?: any): TableDef;
        DesignMasterID: string;
        Execute(Query: string, Options?: any): void;
        MakeReplica(PathName: string, Description: string, Options?: any): void;
        readonly Name: string;
        NewPassword(bstrOld: string, bstrNew: string): void;
        OpenRecordset(Name: string, Type?: any, Options?: any, LockEdit?: any): Recordset;
        PopulatePartial(DbPathName: string): void;
        readonly Properties: Properties;
        readonly QueryDefs: QueryDefs;
        QueryTimeout: number;
        readonly RecordsAffected: number;
        readonly Recordsets: Recordsets;
        readonly Relations: Relations;
        readonly ReplicaID: string;
        Synchronize(DbPathName: string, ExchangeType?: any): void;
        readonly TableDefs: TableDefs;
        readonly Transactions: boolean;
        readonly Updatable: boolean;
        readonly Version: string;
    }

    class Databases {
        private 'DAO.Databases_typekey': Databases;
        private constructor();
        readonly Count: number;
        Item(Item: any): Database;
        Refresh(): void;
    }

    class DBEngine {
        private 'DAO.DBEngine_typekey': DBEngine;
        private constructor();
        BeginTrans(): void;

        /** @param number [Option=0] */
        CommitTrans(Option?: number): void;
        CompactDatabase(SrcName: string, DstName: string, DstLocale?: any, Options?: any, SrcLocale?: any): void;
        CreateDatabase(Name: string, Locale: string, Option?: any): Database;
        CreateWorkspace(Name: string, UserName: string, Password: string, UseType?: any): Workspace;
        readonly DefaultPassword: string;
        DefaultType: number;
        readonly DefaultUser: string;
        readonly Errors: Errors;
        Idle(Action?: any): void;
        IniPath: string;
        ISAMStats(StatNum: number, Reset?: any): number;
        LoginTimeout: number;
        OpenConnection(Name: string, Options?: any, ReadOnly?: any, Connect?: any): Connection;
        OpenDatabase(Name: string, Options?: any, ReadOnly?: any, Connect?: any): Database;
        readonly Properties: Properties;
        RegisterDatabase(Dsn: string, Driver: string, Silent: boolean, Attributes: string): void;
        RepairDatabase(Name: string): void;
        Rollback(): void;
        SetOption(Option: number, Value: any): void;
        SystemDB: string;
        readonly Version: string;
        readonly Workspaces: Workspaces;
    }

    class Document {
        private 'DAO.Document_typekey': Document;
        private constructor();
        readonly AllPermissions: number;
        readonly Container: string;
        CreateProperty(Name?: any, Type?: any, Value?: any, DDL?: any): Property;
        readonly DateCreated: any;
        readonly LastUpdated: any;
        readonly Name: string;
        Owner: string;
        Permissions: number;
        readonly Properties: Properties;
        UserName: string;
    }

    class Documents {
        private 'DAO.Documents_typekey': Documents;
        private constructor();
        readonly Count: number;
        Item(Item: any): Document;
        Refresh(): void;
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

    class Errors {
        private 'DAO.Errors_typekey': Errors;
        private constructor();
        readonly Count: number;
        Item(Item: any): Error;
        Refresh(): void;
    }

    class Field {
        private 'DAO.Field_typekey': Field;
        private constructor();
        AllowZeroLength: boolean;
        AppendChunk(Val: any): void;
        Attributes: number;
        readonly CollatingOrder: number;
        readonly CollectionIndex: number;
        CreateProperty(Name?: any, Type?: any, Value?: any, DDL?: any): Property;
        readonly DataUpdatable: boolean;
        DefaultValue: any;
        readonly FieldSize: number;
        ForeignName: string;
        GetChunk(Offset: number, Bytes: number): any;
        Name: string;
        OrdinalPosition: number;
        readonly OriginalValue: any;
        readonly Properties: Properties;
        Required: boolean;
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

    class Fields {
        private 'DAO.Fields_typekey': Fields;
        private constructor();
        Append(Object: any): void;
        readonly Count: number;
        Delete(Name: string): void;
        Item(Item: any): Field;
        Refresh(): void;
    }

    class Group {
        private 'DAO.Group_typekey': Group;
        private constructor();
        CreateUser(Name?: any, PID?: any, Password?: any): User;
        Name: string;
        readonly PID: string;
        readonly Properties: Properties;
        readonly Users: Users;
    }

    class Groups {
        private 'DAO.Groups_typekey': Groups;
        private constructor();
        Append(Object: any): void;
        readonly Count: number;
        Delete(Name: string): void;
        Item(Item: any): Group;
        Refresh(): void;
    }

    class Index {
        private 'DAO.Index_typekey': Index;
        private constructor();
        Clustered: boolean;
        CreateField(Name?: any, Type?: any, Size?: any): Field;
        CreateProperty(Name?: any, Type?: any, Value?: any, DDL?: any): Property;
        readonly DistinctCount: number;
        Fields: any;
        readonly Foreign: boolean;
        IgnoreNulls: boolean;
        Name: string;
        Primary: boolean;
        readonly Properties: Properties;
        Required: boolean;
        Unique: boolean;
    }

    class Indexes {
        private 'DAO.Indexes_typekey': Indexes;
        private constructor();
        Append(Object: any): void;
        readonly Count: number;
        Delete(Name: string): void;
        Item(Item: any): Index;
        Refresh(): void;
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

    class Parameters {
        private 'DAO.Parameters_typekey': Parameters;
        private constructor();
        readonly Count: number;
        Item(Item: any): Parameter;
        Refresh(): void;
    }

    /** DAO 3.0 DBEngine (private) */
    class PrivDBEngine {
        private 'DAO.PrivDBEngine_typekey': PrivDBEngine;
        private constructor();
        BeginTrans(): void;

        /** @param number [Option=0] */
        CommitTrans(Option?: number): void;
        CompactDatabase(SrcName: string, DstName: string, DstLocale?: any, Options?: any, SrcLocale?: any): void;
        CreateDatabase(Name: string, Locale: string, Option?: any): Database;
        CreateWorkspace(Name: string, UserName: string, Password: string, UseType?: any): Workspace;
        readonly DefaultPassword: string;
        DefaultType: number;
        readonly DefaultUser: string;
        readonly Errors: Errors;
        Idle(Action?: any): void;
        IniPath: string;
        ISAMStats(StatNum: number, Reset?: any): number;
        LoginTimeout: number;
        OpenConnection(Name: string, Options?: any, ReadOnly?: any, Connect?: any): Connection;
        OpenDatabase(Name: string, Options?: any, ReadOnly?: any, Connect?: any): Database;
        readonly Properties: Properties;
        RegisterDatabase(Dsn: string, Driver: string, Silent: boolean, Attributes: string): void;
        RepairDatabase(Name: string): void;
        Rollback(): void;
        SetOption(Option: number, Value: any): void;
        SystemDB: string;
        readonly Version: string;
        readonly Workspaces: Workspaces;
    }

    class Properties {
        private 'DAO.Properties_typekey': Properties;
        private constructor();
        Append(Object: any): void;
        readonly Count: number;
        Delete(Name: string): void;
        Item(Item: any): Property;
        Refresh(): void;
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
        CreateProperty(Name?: any, Type?: any, Value?: any, DDL?: any): Property;
        readonly DateCreated: any;
        Execute(Options?: any): void;
        readonly Fields: Fields;
        readonly hStmt: number;
        readonly LastUpdated: any;
        MaxRecords: number;
        Name: string;
        ODBCTimeout: number;
        OpenRecordset(Type?: any, Options?: any, LockEdit?: any): Recordset;
        readonly Parameters: Parameters;
        Prepare: any;
        readonly Properties: Properties;
        readonly RecordsAffected: number;
        ReturnsRecords: boolean;
        SQL: string;
        readonly StillExecuting: boolean;
        readonly Type: number;
        readonly Updatable: boolean;
    }

    class QueryDefs {
        private 'DAO.QueryDefs_typekey': QueryDefs;
        private constructor();
        Append(Object: any): void;
        readonly Count: number;
        Delete(Name: string): void;
        Item(Item: any): QueryDef;
        Refresh(): void;
    }

    class Recordset {
        private 'DAO.Recordset_typekey': Recordset;
        private constructor();
        AbsolutePosition: number;
        AddNew(): void;
        readonly BatchCollisionCount: number;
        readonly BatchCollisions: any;
        BatchSize: number;
        readonly BOF: boolean;
        Bookmark: SafeArray<number>;
        readonly Bookmarkable: boolean;
        CacheSize: number;
        CacheStart: SafeArray<number>;
        Cancel(): void;

        /** @param number [UpdateType=1] */
        CancelUpdate(UpdateType?: number): void;
        Clone(): Recordset;
        Close(): void;
        Collect(Item: any): any;
        Connection: Connection;
        CopyQueryDef(): QueryDef;
        readonly DateCreated: any;
        Delete(): void;
        Edit(): void;
        readonly EditMode: number;
        readonly EOF: boolean;
        readonly Fields: Fields;
        FillCache(Rows?: any, StartBookmark?: any): void;
        Filter: string;
        FindFirst(Criteria: string): void;
        FindLast(Criteria: string): void;
        FindNext(Criteria: string): void;
        FindPrevious(Criteria: string): void;
        GetRows(NumRows?: any): any;
        readonly hStmt: number;
        Index: string;
        readonly LastModified: SafeArray<number>;
        readonly LastUpdated: any;
        LockEdits: boolean;
        Move(Rows: number, StartBookmark?: any): void;
        MoveFirst(): void;

        /** @param number [Options=0] */
        MoveLast(Options?: number): void;
        MoveNext(): void;
        MovePrevious(): void;
        readonly Name: string;
        NextRecordset(): boolean;
        readonly NoMatch: boolean;
        readonly ODBCFetchCount: number;
        readonly ODBCFetchDelay: number;
        OpenRecordset(Type?: any, Options?: any): Recordset;
        readonly Parent: Database;
        PercentPosition: number;
        readonly Properties: Properties;
        readonly RecordCount: number;
        readonly RecordStatus: number;
        Requery(NewQueryDef?: any): void;
        readonly Restartable: boolean;
        Seek(
            Comparison: string, Key1: any, Key2?: any, Key3?: any, Key4?: any, Key5?: any, Key6?: any, Key7?: any, Key8?: any, Key9?: any, Key10?: any, Key11?: any, Key12?: any, Key13?: any): void;
        Sort: string;
        readonly StillExecuting: boolean;
        readonly Transactions: boolean;
        readonly Type: number;
        readonly Updatable: boolean;

        /**
         * @param number [UpdateType=1]
         * @param boolean [Force=false]
         */
        Update(UpdateType?: number, Force?: boolean): void;
        UpdateOptions: number;
        readonly ValidationRule: string;
        readonly ValidationText: string;
    }

    class Recordsets {
        private 'DAO.Recordsets_typekey': Recordsets;
        private constructor();
        readonly Count: number;
        Item(Item: any): Recordset;
        Refresh(): void;
    }

    class Relation {
        private 'DAO.Relation_typekey': Relation;
        private constructor();
        Attributes: number;
        CreateField(Name?: any, Type?: any, Size?: any): Field;
        readonly Fields: Fields;
        ForeignTable: string;
        Name: string;
        PartialReplica: boolean;
        readonly Properties: Properties;
        Table: string;
    }

    class Relations {
        private 'DAO.Relations_typekey': Relations;
        private constructor();
        Append(Object: any): void;
        readonly Count: number;
        Delete(Name: string): void;
        Item(Item: any): Relation;
        Refresh(): void;
    }

    class TableDef {
        private 'DAO.TableDef_typekey': TableDef;
        private constructor();
        Attributes: number;
        readonly ConflictTable: string;
        Connect: string;
        CreateField(Name?: any, Type?: any, Size?: any): Field;
        CreateIndex(Name?: any): Index;
        CreateProperty(Name?: any, Type?: any, Value?: any, DDL?: any): Property;
        readonly DateCreated: any;
        readonly Fields: Fields;
        readonly Indexes: Indexes;
        readonly LastUpdated: any;
        Name: string;
        OpenRecordset(Type?: any, Options?: any): Recordset;
        readonly Properties: Properties;
        readonly RecordCount: number;
        RefreshLink(): void;
        ReplicaFilter: any;
        SourceTableName: string;
        readonly Updatable: boolean;
        ValidationRule: string;
        ValidationText: string;
    }

    class TableDefs {
        private 'DAO.TableDefs_typekey': TableDefs;
        private constructor();
        Append(Object: any): void;
        readonly Count: number;
        Delete(Name: string): void;
        Item(Item: any): TableDef;
        Refresh(): void;
    }

    class User {
        private 'DAO.User_typekey': User;
        private constructor();
        CreateGroup(Name?: any, PID?: any): Group;
        readonly Groups: Groups;
        Name: string;
        NewPassword(bstrOld: string, bstrNew: string): void;
        readonly Password: string;
        readonly PID: string;
        readonly Properties: Properties;
    }

    class Users {
        private 'DAO.Users_typekey': Users;
        private constructor();
        Append(Object: any): void;
        readonly Count: number;
        Delete(Name: string): void;
        Item(Item: any): User;
        Refresh(): void;
    }

    class Workspace {
        private 'DAO.Workspace_typekey': Workspace;
        private constructor();
        BeginTrans(): void;
        Close(): void;

        /** @param number [Options=0] */
        CommitTrans(Options?: number): void;
        readonly Connections: Connections;
        CreateDatabase(Name: string, Connect: string, Option?: any): Database;
        CreateGroup(Name?: any, PID?: any): Group;
        CreateUser(Name?: any, PID?: any, Password?: any): User;
        readonly Databases: Databases;
        DefaultCursorDriver: number;
        readonly Groups: Groups;
        readonly hEnv: number;
        IsolateODBCTrans: number;
        LoginTimeout: number;
        Name: string;
        OpenConnection(Name: string, Options?: any, ReadOnly?: any, Connect?: any): Connection;
        OpenDatabase(Name: string, Options?: any, ReadOnly?: any, Connect?: any): Database;
        readonly Properties: Properties;
        Rollback(): void;
        readonly Type: number;
        readonly UserName: string;
        readonly Users: Users;
    }

    class Workspaces {
        private 'DAO.Workspaces_typekey': Workspaces;
        private constructor();
        Append(Object: any): void;
        readonly Count: number;
        Delete(Name: string): void;
        Item(Item: any): Workspace;
        Refresh(): void;
    }
}

interface ActiveXObject {
    new<K extends keyof ActiveXObjectNameMap = any>(progid: K): ActiveXObjectNameMap[K];
}

interface ActiveXObjectNameMap {
    'DAO.DBEngine': DAO.DBEngine;
    'DAO.DBEngine.120': DAO.DBEngine;
    'DAO.Field': DAO.Field;
    'DAO.Group': DAO.Group;
    'DAO.Index': DAO.Index;
    'DAO.PrivateDBEngine': DAO.PrivDBEngine;
    'DAO.QueryDef': DAO.QueryDef;
    'DAO.Relation': DAO.Relation;
    'DAO.TableDef': DAO.TableDef;
    'DAO.User': DAO.User;
}

interface EnumeratorConstructor {
    new(col: DAO.Connections): Enumerator<DAO.Connection>;
    new(col: DAO.Containers): Enumerator<DAO.Container>;
    new(col: DAO.Databases): Enumerator<DAO.Database>;
    new(col: DAO.Documents): Enumerator<DAO.Document>;
    new(col: DAO.Errors): Enumerator<DAO.Error>;
    new(col: DAO.Fields): Enumerator<DAO.Field>;
    new(col: DAO.Groups): Enumerator<DAO.Group>;
    new(col: DAO.Indexes): Enumerator<DAO.Index>;
    new(col: DAO.Parameters): Enumerator<DAO.Parameter>;
    new(col: DAO.Properties): Enumerator<DAO.Property>;
    new(col: DAO.QueryDefs): Enumerator<DAO.QueryDef>;
    new(col: DAO.Recordsets): Enumerator<DAO.Recordset>;
    new(col: DAO.Relations): Enumerator<DAO.Relation>;
    new(col: DAO.TableDefs): Enumerator<DAO.TableDef>;
    new(col: DAO.Users): Enumerator<DAO.User>;
    new(col: DAO.Workspaces): Enumerator<DAO.Workspace>;
}

interface SafeArray<T = any> {
    _brand: SafeArray<T>;
}
