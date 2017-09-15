// Type definitions for Microsoft Office 14.0 Access Database Engine Object Library - DAO 14.0
// Project: https://msdn.microsoft.com/en-us/library/dn124645.aspx
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
        public Cancel(): void;
        public Close(): void;
        public readonly Connect: string;
        public CreateQueryDef(Name?: any, SQLText?: any): QueryDef;
        public readonly Database: Database;
        public Execute(Query: string, Options?: any): void;
        public readonly hDbc: number;
        public readonly Name: string;
        public OpenRecordset(Name: string, Type?: any, Options?: any, LockEdit?: any): Recordset;
        public readonly QueryDefs: QueryDefs;
        public QueryTimeout: number;
        public readonly RecordsAffected: number;
        public readonly Recordsets: Recordsets;
        public readonly StillExecuting: boolean;
        public readonly Transactions: boolean;
        public readonly Updatable: boolean;
    }

    class Connections {
        private 'DAO.Connections_typekey': Connections;
        private constructor();
        public readonly Count: number;
        public Item(Item: any): Connection;
        public Refresh(): void;
    }

    class Container {
        private 'DAO.Container_typekey': Container;
        private constructor();
        public readonly AllPermissions: number;
        public readonly Documents: Documents;
        public Inherit: boolean;
        public readonly Name: string;
        public Owner: string;
        public Permissions: number;
        public readonly Properties: Properties;
        public UserName: string;
    }

    class Containers {
        private 'DAO.Containers_typekey': Containers;
        private constructor();
        public readonly Count: number;
        public Item(Item: any): Container;
        public Refresh(): void;
    }

    class Database {
        private 'DAO.Database_typekey': Database;
        private constructor();
        public Close(): void;
        public readonly CollatingOrder: number;
        public Connect: string;
        public readonly Connection: Connection;
        public readonly Containers: Containers;
        public CreateProperty(Name?: any, Type?: any, Value?: any, DDL?: any): Property;
        public CreateQueryDef(Name?: any, SQLText?: any): QueryDef;
        public CreateRelation(Name?: any, Table?: any, ForeignTable?: any, Attributes?: any): Relation;
        public CreateTableDef(Name?: any, Attributes?: any, SourceTableName?: any, Connect?: any): TableDef;
        public DesignMasterID: string;
        public Execute(Query: string, Options?: any): void;
        public MakeReplica(PathName: string, Description: string, Options?: any): void;
        public readonly Name: string;
        public NewPassword(bstrOld: string, bstrNew: string): void;
        public OpenRecordset(Name: string, Type?: any, Options?: any, LockEdit?: any): Recordset;
        public PopulatePartial(DbPathName: string): void;
        public readonly Properties: Properties;
        public readonly QueryDefs: QueryDefs;
        public QueryTimeout: number;
        public readonly RecordsAffected: number;
        public readonly Recordsets: Recordsets;
        public readonly Relations: Relations;
        public readonly ReplicaID: string;
        public Synchronize(DbPathName: string, ExchangeType?: any): void;
        public readonly TableDefs: TableDefs;
        public readonly Transactions: boolean;
        public readonly Updatable: boolean;
        public readonly Version: string;
    }

    class Databases {
        private 'DAO.Databases_typekey': Databases;
        private constructor();
        public readonly Count: number;
        public Item(Item: any): Database;
        public Refresh(): void;
    }

    class DBEngine {
        private 'DAO.DBEngine_typekey': DBEngine;
        private constructor();
        public BeginTrans(): void;

        /** @param number [Option=0] */
        public CommitTrans(Option?: number): void;
        public CompactDatabase(SrcName: string, DstName: string, DstLocale?: any, Options?: any, SrcLocale?: any): void;
        public CreateDatabase(Name: string, Locale: string, Option?: any): Database;
        public CreateWorkspace(Name: string, UserName: string, Password: string, UseType?: any): Workspace;
        public readonly DefaultPassword: string;
        public DefaultType: number;
        public readonly DefaultUser: string;
        public readonly Errors: Errors;
        public Idle(Action?: any): void;
        public IniPath: string;
        public ISAMStats(StatNum: number, Reset?: any): number;
        public LoginTimeout: number;
        public OpenConnection(Name: string, Options?: any, ReadOnly?: any, Connect?: any): Connection;
        public OpenDatabase(Name: string, Options?: any, ReadOnly?: any, Connect?: any): Database;
        public readonly Properties: Properties;
        public RegisterDatabase(Dsn: string, Driver: string, Silent: boolean, Attributes: string): void;
        public RepairDatabase(Name: string): void;
        public Rollback(): void;
        public SetOption(Option: number, Value: any): void;
        public SystemDB: string;
        public readonly Version: string;
        public readonly Workspaces: Workspaces;
    }

    class Document {
        private 'DAO.Document_typekey': Document;
        private constructor();
        public readonly AllPermissions: number;
        public readonly Container: string;
        public CreateProperty(Name?: any, Type?: any, Value?: any, DDL?: any): Property;
        public readonly DateCreated: any;
        public readonly LastUpdated: any;
        public readonly Name: string;
        public Owner: string;
        public Permissions: number;
        public readonly Properties: Properties;
        public UserName: string;
    }

    class Documents {
        private 'DAO.Documents_typekey': Documents;
        private constructor();
        public readonly Count: number;
        public Item(Item: any): Document;
        public Refresh(): void;
    }

    class Error {
        private 'DAO.Error_typekey': Error;
        private constructor();
        public readonly Description: string;
        public readonly HelpContext: number;
        public readonly HelpFile: string;
        public readonly Number: number;
        public readonly Source: string;
    }

    class Errors {
        private 'DAO.Errors_typekey': Errors;
        private constructor();
        public readonly Count: number;
        public Item(Item: any): Error;
        public Refresh(): void;
    }

    class Field {
        private 'DAO.Field_typekey': Field;
        private constructor();
        public AllowZeroLength: boolean;
        public AppendChunk(Val: any): void;
        public Attributes: number;
        public readonly CollatingOrder: number;
        public readonly CollectionIndex: number;
        public CreateProperty(Name?: any, Type?: any, Value?: any, DDL?: any): Property;
        public readonly DataUpdatable: boolean;
        public DefaultValue: any;
        public readonly FieldSize: number;
        public ForeignName: string;
        public GetChunk(Offset: number, Bytes: number): any;
        public Name: string;
        public OrdinalPosition: number;
        public readonly OriginalValue: any;
        public readonly Properties: Properties;
        public Required: boolean;
        public Size: number;
        public readonly SourceField: string;
        public readonly SourceTable: string;
        public Type: number;
        public ValidateOnSet: boolean;
        public ValidationRule: string;
        public ValidationText: string;
        public Value: any;
        public readonly VisibleValue: any;
    }

    class Fields {
        private 'DAO.Fields_typekey': Fields;
        private constructor();
        public Append(Object: any): void;
        public readonly Count: number;
        public Delete(Name: string): void;
        public Item(Item: any): Field;
        public Refresh(): void;
    }

    class Group {
        private 'DAO.Group_typekey': Group;
        private constructor();
        public CreateUser(Name?: any, PID?: any, Password?: any): User;
        public Name: string;
        public readonly PID: string;
        public readonly Properties: Properties;
        public readonly Users: Users;
    }

    class Groups {
        private 'DAO.Groups_typekey': Groups;
        private constructor();
        public Append(Object: any): void;
        public readonly Count: number;
        public Delete(Name: string): void;
        public Item(Item: any): Group;
        public Refresh(): void;
    }

    class Index {
        private 'DAO.Index_typekey': Index;
        private constructor();
        public Clustered: boolean;
        public CreateField(Name?: any, Type?: any, Size?: any): Field;
        public CreateProperty(Name?: any, Type?: any, Value?: any, DDL?: any): Property;
        public readonly DistinctCount: number;
        public Fields: any;
        public readonly Foreign: boolean;
        public IgnoreNulls: boolean;
        public Name: string;
        public Primary: boolean;
        public readonly Properties: Properties;
        public Required: boolean;
        public Unique: boolean;
    }

    class Indexes {
        private 'DAO.Indexes_typekey': Indexes;
        private constructor();
        public Append(Object: any): void;
        public readonly Count: number;
        public Delete(Name: string): void;
        public Item(Item: any): Index;
        public Refresh(): void;
    }

    class Parameter {
        private 'DAO.Parameter_typekey': Parameter;
        private constructor();
        public Direction: number;
        public readonly Name: string;
        public readonly Properties: Properties;
        public Type: number;
        public Value: any;
    }

    class Parameters {
        private 'DAO.Parameters_typekey': Parameters;
        private constructor();
        public readonly Count: number;
        public Item(Item: any): Parameter;
        public Refresh(): void;
    }

    /** DAO 3.0 DBEngine (private) */
    class PrivDBEngine {
        private 'DAO.PrivDBEngine_typekey': PrivDBEngine;
        private constructor();
        public BeginTrans(): void;

        /** @param number [Option=0] */
        public CommitTrans(Option?: number): void;
        public CompactDatabase(SrcName: string, DstName: string, DstLocale?: any, Options?: any, SrcLocale?: any): void;
        public CreateDatabase(Name: string, Locale: string, Option?: any): Database;
        public CreateWorkspace(Name: string, UserName: string, Password: string, UseType?: any): Workspace;
        public readonly DefaultPassword: string;
        public DefaultType: number;
        public readonly DefaultUser: string;
        public readonly Errors: Errors;
        public Idle(Action?: any): void;
        public IniPath: string;
        public ISAMStats(StatNum: number, Reset?: any): number;
        public LoginTimeout: number;
        public OpenConnection(Name: string, Options?: any, ReadOnly?: any, Connect?: any): Connection;
        public OpenDatabase(Name: string, Options?: any, ReadOnly?: any, Connect?: any): Database;
        public readonly Properties: Properties;
        public RegisterDatabase(Dsn: string, Driver: string, Silent: boolean, Attributes: string): void;
        public RepairDatabase(Name: string): void;
        public Rollback(): void;
        public SetOption(Option: number, Value: any): void;
        public SystemDB: string;
        public readonly Version: string;
        public readonly Workspaces: Workspaces;
    }

    class Properties {
        private 'DAO.Properties_typekey': Properties;
        private constructor();
        public Append(Object: any): void;
        public readonly Count: number;
        public Delete(Name: string): void;
        public Item(Item: any): Property;
        public Refresh(): void;
    }

    class Property {
        private 'DAO.Property_typekey': Property;
        private constructor();
        public readonly Inherited: boolean;
        public Name: string;
        public readonly Properties: Properties;
        public Type: number;
        public Value: any;
    }

    class QueryDef {
        private 'DAO.QueryDef_typekey': QueryDef;
        private constructor();
        public CacheSize: number;
        public Cancel(): void;
        public Close(): void;
        public Connect: string;
        public CreateProperty(Name?: any, Type?: any, Value?: any, DDL?: any): Property;
        public readonly DateCreated: any;
        public Execute(Options?: any): void;
        public readonly Fields: Fields;
        public readonly hStmt: number;
        public readonly LastUpdated: any;
        public MaxRecords: number;
        public Name: string;
        public ODBCTimeout: number;
        public OpenRecordset(Type?: any, Options?: any, LockEdit?: any): Recordset;
        public readonly Parameters: Parameters;
        public Prepare: any;
        public readonly Properties: Properties;
        public readonly RecordsAffected: number;
        public ReturnsRecords: boolean;
        public SQL: string;
        public readonly StillExecuting: boolean;
        public readonly Type: number;
        public readonly Updatable: boolean;
    }

    class QueryDefs {
        private 'DAO.QueryDefs_typekey': QueryDefs;
        private constructor();
        public Append(Object: any): void;
        public readonly Count: number;
        public Delete(Name: string): void;
        public Item(Item: any): QueryDef;
        public Refresh(): void;
    }

    class Recordset {
        private 'DAO.Recordset_typekey': Recordset;
        private constructor();
        public AbsolutePosition: number;
        public AddNew(): void;
        public readonly BatchCollisionCount: number;
        public readonly BatchCollisions: any;
        public BatchSize: number;
        public readonly BOF: boolean;
        public Bookmark: SafeArray<number>;
        public readonly Bookmarkable: boolean;
        public CacheSize: number;
        public CacheStart: SafeArray<number>;
        public Cancel(): void;

        /** @param number [UpdateType=1] */
        public CancelUpdate(UpdateType?: number): void;
        public Clone(): Recordset;
        public Close(): void;
        public Collect(Item: any): any;
        public Connection: Connection;
        public CopyQueryDef(): QueryDef;
        public readonly DateCreated: any;
        public Delete(): void;
        public Edit(): void;
        public readonly EditMode: number;
        public readonly EOF: boolean;
        public readonly Fields: Fields;
        public FillCache(Rows?: any, StartBookmark?: any): void;
        public Filter: string;
        public FindFirst(Criteria: string): void;
        public FindLast(Criteria: string): void;
        public FindNext(Criteria: string): void;
        public FindPrevious(Criteria: string): void;
        public GetRows(NumRows?: any): any;
        public readonly hStmt: number;
        public Index: string;
        public readonly LastModified: SafeArray<number>;
        public readonly LastUpdated: any;
        public LockEdits: boolean;
        public Move(Rows: number, StartBookmark?: any): void;
        public MoveFirst(): void;

        /** @param number [Options=0] */
        public MoveLast(Options?: number): void;
        public MoveNext(): void;
        public MovePrevious(): void;
        public readonly Name: string;
        public NextRecordset(): boolean;
        public readonly NoMatch: boolean;
        public readonly ODBCFetchCount: number;
        public readonly ODBCFetchDelay: number;
        public OpenRecordset(Type?: any, Options?: any): Recordset;
        public readonly Parent: Database;
        public PercentPosition: number;
        public readonly Properties: Properties;
        public readonly RecordCount: number;
        public readonly RecordStatus: number;
        public Requery(NewQueryDef?: any): void;
        public readonly Restartable: boolean;
        public Seek(
            Comparison: string, Key1: any, Key2?: any, Key3?: any, Key4?: any, Key5?: any, Key6?: any, Key7?: any, Key8?: any, Key9?: any, Key10?: any, Key11?: any, Key12?: any, Key13?: any): void;
        public Sort: string;
        public readonly StillExecuting: boolean;
        public readonly Transactions: boolean;
        public readonly Type: number;
        public readonly Updatable: boolean;

        /**
         * @param number [UpdateType=1]
         * @param boolean [Force=false]
         */
        public Update(UpdateType?: number, Force?: boolean): void;
        public UpdateOptions: number;
        public readonly ValidationRule: string;
        public readonly ValidationText: string;
    }

    class Recordsets {
        private 'DAO.Recordsets_typekey': Recordsets;
        private constructor();
        public readonly Count: number;
        public Item(Item: any): Recordset;
        public Refresh(): void;
    }

    class Relation {
        private 'DAO.Relation_typekey': Relation;
        private constructor();
        public Attributes: number;
        public CreateField(Name?: any, Type?: any, Size?: any): Field;
        public readonly Fields: Fields;
        public ForeignTable: string;
        public Name: string;
        public PartialReplica: boolean;
        public readonly Properties: Properties;
        public Table: string;
    }

    class Relations {
        private 'DAO.Relations_typekey': Relations;
        private constructor();
        public Append(Object: any): void;
        public readonly Count: number;
        public Delete(Name: string): void;
        public Item(Item: any): Relation;
        public Refresh(): void;
    }

    class TableDef {
        private 'DAO.TableDef_typekey': TableDef;
        private constructor();
        public Attributes: number;
        public readonly ConflictTable: string;
        public Connect: string;
        public CreateField(Name?: any, Type?: any, Size?: any): Field;
        public CreateIndex(Name?: any): Index;
        public CreateProperty(Name?: any, Type?: any, Value?: any, DDL?: any): Property;
        public readonly DateCreated: any;
        public readonly Fields: Fields;
        public readonly Indexes: Indexes;
        public readonly LastUpdated: any;
        public Name: string;
        public OpenRecordset(Type?: any, Options?: any): Recordset;
        public readonly Properties: Properties;
        public readonly RecordCount: number;
        public RefreshLink(): void;
        public ReplicaFilter: any;
        public SourceTableName: string;
        public readonly Updatable: boolean;
        public ValidationRule: string;
        public ValidationText: string;
    }

    class TableDefs {
        private 'DAO.TableDefs_typekey': TableDefs;
        private constructor();
        public Append(Object: any): void;
        public readonly Count: number;
        public Delete(Name: string): void;
        public Item(Item: any): TableDef;
        public Refresh(): void;
    }

    class User {
        private 'DAO.User_typekey': User;
        private constructor();
        public CreateGroup(Name?: any, PID?: any): Group;
        public readonly Groups: Groups;
        public Name: string;
        public NewPassword(bstrOld: string, bstrNew: string): void;
        public readonly Password: string;
        public readonly PID: string;
        public readonly Properties: Properties;
    }

    class Users {
        private 'DAO.Users_typekey': Users;
        private constructor();
        public Append(Object: any): void;
        public readonly Count: number;
        public Delete(Name: string): void;
        public Item(Item: any): User;
        public Refresh(): void;
    }

    class Workspace {
        private 'DAO.Workspace_typekey': Workspace;
        private constructor();
        public BeginTrans(): void;
        public Close(): void;

        /** @param number [Options=0] */
        public CommitTrans(Options?: number): void;
        public readonly Connections: Connections;
        public CreateDatabase(Name: string, Connect: string, Option?: any): Database;
        public CreateGroup(Name?: any, PID?: any): Group;
        public CreateUser(Name?: any, PID?: any, Password?: any): User;
        public readonly Databases: Databases;
        public DefaultCursorDriver: number;
        public readonly Groups: Groups;
        public readonly hEnv: number;
        public IsolateODBCTrans: number;
        public LoginTimeout: number;
        public Name: string;
        public OpenConnection(Name: string, Options?: any, ReadOnly?: any, Connect?: any): Connection;
        public OpenDatabase(Name: string, Options?: any, ReadOnly?: any, Connect?: any): Database;
        public readonly Properties: Properties;
        public Rollback(): void;
        public readonly Type: number;
        public readonly UserName: string;
        public readonly Users: Users;
    }

    class Workspaces {
        private 'DAO.Workspaces_typekey': Workspaces;
        private constructor();
        public Append(Object: any): void;
        public readonly Count: number;
        public Delete(Name: string): void;
        public Item(Item: any): Workspace;
        public Refresh(): void;
    }
}

interface ActiveXObject {
    new<K extends keyof ActiveXObjectNameMap = any>(progid: K): ActiveXObjectNameMap[K];
}

interface ActiveXObjectNameMap {
    'DAO.DBEngine': DAO.DBEngine;
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
