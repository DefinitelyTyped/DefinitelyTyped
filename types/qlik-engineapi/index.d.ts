// Type definitions for qlik-engineapi 3.2
// Project: http://help.qlik.com/en-US/sense-developer/3.2/Subsystems/EngineAPI/Content/introducing-engine-API.htm
// Definitions by: Konrad Mattheis <https://github.com/konne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace EngineAPI {
    type CommandType = "JsonRequest" | "GetCustomCaption" | "IsConnected" | "DisableQlikViewSelectButton" | "HaveStarField";
    type LogonType = "LOG_ON_SERVICE_USER" | "LOG_ON_CURRENT_USER";
    type NxGrpType = "N" | "H" | "C" | string;
    type FieldAttributesType = "U" | "A" | "I" | "R" | "F" | "M" | "D" | "T" | "TS" | "IV";
    type FileDataFormatType = "CSV" | "FIX" | "DIF" | "EXCEL_BIFF" | "EXCEL_OOXML" | "HTML" | "XML" | "QVX" | "JSON" | "KML";
    type TableRecordKeyType = "NOT_KEY" | "ANY_KEY" | "PRIMARY_KEY" | "PERFECT_KEY";
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
    type MTType = "N" | "D" | "R";
    type MachineModeType = "CONNECT_DEFAULT" | "CONNECT_64" | "CONNECT_32";
    type InteractionType = "IT_SCRIPTLINE" | "IT_MSGBOX" | "IT_BREAK" | "IT_END";
    type ErrorDataCodeType = "0" | "1" | "2";
    type FunctionGroupType = "ALL" | "U" | "NONE" | "AGGR" | "NUM" | "RNG" | "EXP" | "TRIG" | "FIN" | "MATH" | "COUNT" | "STR" | "MAPP" |
        "RCRD" | "CND" | "LOG" | "NULL" | "SYS" | "FILE" | "TBL" | "DATE" | "NUMI" | "FRMT" | "CLR" | "RNK";
    type DimensionType = "D" | "N" | "T";
    type NxHypercubeMode = "P" | "K" | "S" | string;
    type FrequencyModeType = "NX_FREQUENCY_NONE" | "NX_FREQUENCY_VALUE" | "NX_FREQUENCY_PERCENT" | "NX_FREQUENCY_RELATIVE";

    type TypeSortDirection = "1" | "-1" | "0";

    interface INxRange {
        qCount: number;
        qFrom: number;
    }

    interface IExpressionResult {
        qBadFieldNames: INxRange[];
    }

    interface ICheckExpressionResult extends IExpressionResult {
        qDangerousFieldNames: INxRange[];
        qErrorMsg: string;
    }

    interface ICheckNumberOrExpressionResult extends IExpressionResult {
        qErrorMsg: string;
    }

    interface IScriptSyntaxError {
        qErrLen: number;
        qTabIx: number;
        qLineInTab: number;
        qColInLine: number;
        qTextPos: number;
        qSecondaryFailure: boolean;
    }

    interface INxMeta {
        qName?: string;
    }

    interface INxMetaTitleDescription extends INxMeta {
        title: string;
        description: string;
    }

    interface INxMetaTitleDescriptionTag extends INxMetaTitleDescription {
        tags: string[];
    }

    interface IConnection {
        qId: string;
        qName: string;
        qConnectionString: string;
        qType: string;
        qUserName: string;
        qPassword: string;
        qModifiedDate: string;
        qMeta: INxMeta;
        qLogOn: LogonType;
    }

    interface INxLibraryDimensionDef {
        qGrouping: NxGrpType;
        qFieldDefs: string[];
        qFieldLabels: string[];
    }

    interface IGenericProperties {
        qInfo: INxInfo;

        // ?Dynamic properties?
        [qMetaDef: string]: any;
    }

    interface IGenericBookmarkProperties extends IGenericProperties {
    }

    interface IGenericDimensionProperties extends IGenericProperties {
        qDim: INxLibraryDimensionDef;
    }

    interface IGenericMeasureProperties extends IGenericProperties {
        qMeasure: INxLibraryMeasureDef;
    }

    interface IGenericObjectProperties extends IGenericProperties {
        qExtendsId?: string;
    }

    interface IGenericVariableProperties extends IGenericProperties {
        qName: string;
        qComment: string;
        qNumberPresentation: IFieldAttributes;
        qIncludeInBookmark: boolean;
        qDefinition: string;
    }

    interface IFieldAttributes {
        qType: FieldAttributesType;
        qnDec: number;
        qUseThou: boolean;
        qFmt: string;
        qDec: string;
        qThou: string;
        qSAFEARRAY: any[];
    }

    interface INxInfo {
        qId?: string;
        qType: string;
    }

    interface IDoReloadExParams {
        qMode: number;
        qPartial: boolean;
        qDebug: boolean;
    }

    interface IDoReloadExResult {
        qSuccess: boolean;
        qScriptLogFile: string;
    }

    interface IFieldValue {
        qText: string;
        qIsNumeric: boolean;
        qNumber: number;
    }

    interface INxMatchingFieldInfo {
        qName: string;
        qTags: string[];
    }

    interface INxAppLayout {
        qTitle: string;
        qFileName: string;
        qLastReloadTime: string;
        qModified: boolean;
        qHasScript: boolean;
        qStateNames: string[];
        qMeta: INxMeta;
        qLocaleInfo: ILocaleInfo;
        qHasData: boolean;
        qReadOnly: boolean;
        qIsOpenedWithoutData: boolean;
        qThumbnail: IStaticContentUrl;
    }

    interface INxAppProperties {
        qTitle: string;
        qLastReloadTime: string;
        qThumbnail: IStaticContentUrlDef;
        qMigrationHash: string;
        qSavedInProductVersion: string;
    }

    interface IAssociationScore {
        qFieldPairName: string;
        qScoreSummary: number;
        qField1Scores: IFieldScores;
        qField2Scores: IFieldScores;
    }

    interface IFieldScores {
        qFieldName: string;
        qCardinalRatio: number;
        qSymbolScore: number;
        qRowScore: number;
    }

    interface IContentLibraryListItem {
        qName: string;
        qAppSpecific: boolean;
        qMeta: INxMeta;
    }

    interface IContentLibraryList {
        qItems: IContentLibraryListItem;
    }

    interface IDatabaseInfo {
        qDBMSName: string;
        qDBUsage: boolean;
        qOwnerUsage: boolean;
        qDBSeparator: string;
        qOwnerSeparator: string;
        qDBFirst: boolean;
        qQuotePreffix: string;
        qQuoteSuffix: string;
        qSpecialChars: string;
        qDefaultDatabase: string;
        qKeywords: string[];
    }

    interface IDatabaseOwner {
        qName: string;
    }

    interface IDatabase {
        qName: string;
        qIsDefault: boolean;
    }

    interface IDataField {
        qName: string;
        qIsKey: boolean;
        qOriginalFieldName: string;
    }

    interface IDataRecord {
        qValues: string[];
    }

    interface IDataTable {
        qName: string;
        qType: string;
    }

    interface IFieldDescription {
        qInternalNumber: number;
        qName: string;
        qSrcTables: string[];
        qIsSystem?: boolean;
        qIsHidden?: boolean;
        qIsSemantic?: boolean;
        qDistinctOnly?: boolean;
        qCardinal: number;
        qTotalCount: number;
        qIsLocked?: boolean;
        qAlwaysOneSelected?: boolean;
        qAndMode?: boolean;
        qIsNumeric?: boolean;
        qComment: string;
        qTags: string[];
        qIsDefinitionOnly?: boolean;
    }

    interface IDelimiterInfo {
        qName: string;
        qScriptCode: string;
        qNumber: number;
        qIsMultiple: boolean;
    }

    interface IFileDataFormat {
        qType: FileDataFormatType;
        qLabel: string;
        qQuote: string;
        qComment: string;
        qDelimiter: IDelimiterInfo;
        qCodePage: number;
        qHeaderSize: number;
        qRecordSize: number;
        qTabSize: number;
        qIgnoreEOF: boolean;
        qFixedWidthDelimiters: string;
    }

    interface IDataTableEx {
        qName: string;
        qFields: IDataField[];
        qFormatSpec: string;
    }

    interface IFolderItem {
        qName: string;
        qType: FolderItemType;
    }

    interface IStaticContentList {
        qItems: IStaticContentListItem;
    }

    interface IStaticContentListItem {
        qUrlDef: string;
        qUrl: string;
    }

    interface IStaticContentUrl {
        qUrl: string;
    }

    interface IStaticContentUrlDef {
        qUrl: string;
    }

    interface ICalenderStrings {
        qDayNames: string[];
        qMonthNames: string[];
        qLongDayNames: string[];
        qLongMonthNames: string[];
    }

    interface ILocaleInfo {
        qDecimalSep: string;
        qThousandSep: string;
        qListSep: string;
        qMoneyDecimalSep: string;
        qMoneyThousandSep: string;
        qCurrentYear: number;
        qMoneyFmt: string;
        qTimeFmt: string;
        qDateFmt: string;
        qTimestampFmt: string;
        qCalendarStrings: ICalenderStrings;
        qFirstWeekDay: boolean;
        qBrokenWeeks: number;
        qReferenceDay: number;
        qFirstMonthOfYear: number;
        qCollation: string;
    }

    interface IMediaListItem {
        qUrlDef: string;
        qUrl: string;
    }

    interface IMediaList {
        qItems: IMediaListItem[];
    }

    interface IEditorBreakpoint {
        qbufferName: string;
        qlineIx: number;
        qEnabled: boolean;
    }

    interface ITableRow {
        vqValue: IFieldValue[];
    }

    interface ISize {
        qcx: number;
        qcy: number;
    }

    interface IDerivedFieldsInTableData {
        qDefinitionName: string;
        qTags: string[];
        qActive: boolean;
    }

    interface IFieldInTableData {
        qName: string;
        qOriginalFields: string[];
        qPresent: boolean;
        qHasNull: boolean;
        qHasWild: boolean;
        qHasDuplicates: boolean;
        qIsSynthetic: boolean;
        qInformationDensity: number;
        qnNonNulls: number;
        qnRows: number;
        qSubsetRatio: number;
        qnTotalDistinctValues: number;
        qnPresentDistinctValues: number;
        qKeyType: TableRecordKeyType;
        qComment: string;
        qTags: string[];
        qDerivedFields: IDerivedFieldsInTableData;
    }

    interface IPoint {
        qx: number;
        qy: number;
    }

    interface ITableRecord {
        qName: string;
        qLoose: boolean;
        qNoOfRows: number;
        qFields: IFieldInTableData[];
        qPos: IPoint;
        qComment: string;
        qIsDirectDiscovery: boolean;
        qIsSynthetic: boolean;
    }

    interface ISourceKeyRecord {
        qKeyFields: string[];
        qTables: string[];
    }

    interface ITextMacro {
        qTag: string;
        qRefSeqNo: number;
        qSetSeqNo: number;
        qDisplayString: string;
        qIsSystem: boolean;
        qIsReserved: boolean;
    }

    interface IRect {
        qLeft: number;
        qTop: number;
        qWidth: number;
        qHeight: number;
    }

    interface ITableViewTableWinSaveInfo {
        qPos: IRect;
        qCaption: string;
    }

    interface ITableViewBroomPointSaveInfo {
        qPos: IPoint;
        qTable: string;
        qFields: string[];
    }

    interface ITableViewConnectionPointSaveInfo {
        qPos: IPoint;
        qFields: string[];
    }

    interface ITableViewSaveInfo {
        qTables: ITableViewTableWinSaveInfo[];
        qBroomPoints: ITableViewBroomPointSaveInfo[];
        qConnectionPoints: ITableViewConnectionPointSaveInfo[];
        qZoomFactor: number;
    }

    interface ITableViewCtlSaveInfo {
        qInternalView: ITableViewSaveInfo;
        qSourceView: ITableViewSaveInfo;
    }

    interface ITableViewDlgSaveInfo {
        qPos: IRect;
        qCtlInfo: ITableViewCtlSaveInfo;
        qMode: number;
    }

    interface ISearchCombinationOptions {
        qSearchFields: string[];
        qContext: ContextType;
    }

    interface ISearchGroupOptions {
        qGroupType: any;
        qOffset: number;
        qCount: number;
    }

    interface ISearchGroupItemOptions {
        qGroupItemType: IGenericObject;
        qOffset: number;
        qCount: number;
    }

    interface ISearchPage {
        qOffset: number;
        qCount: number;
        qMaxNbrFieldMatches: number;
        qGroupOptions: ISearchGroupOptions[];
        qGroupItemOptions: ISearchGroupItemOptions[];
    }

    interface ISearchFieldDictionary {
        qField: number;
        qResult: ISearchTermResult[];
    }

    interface ISearchCharRange {
        qCharPos: number;
        qCharCount: number;
        qTerm: number;
    }

    interface ISearchTermResult {
        qText: string;
        qElemNumber: number;
        qRanges: ISearchCharRange[];
    }

    interface ISearchMatchCombinations {
        qSearchMatchCombinations: ISerachMatchCombination[];
    }

    interface ISerachMatchCombination {
        qId: number;
        qFieldMatches: ISerachFieldMatch[];
    }

    interface ISerachFieldMatch {
        qField: number;
        qValues: number[];
        qTerms: number[];
        qNoOfMatches: number;
    }

    interface ISearchAssociationResult {
        qFieldNames: string[];
        qSearchTerms: string[];
        qFieldDictionaries: ISearchFieldDictionary[];
        qSearchTermsMatched: ISearchMatchCombinations[];
        qTotalSearchResults: number;
    }

    interface ISearchObjectOptions {
        qAttributes: string[];
    }

    interface ISearchAttribute {
        qKey: string;
        qValue: string;
    }

    interface ISearchGroupItemMatch {
        qText: string;
        qAttributes: ISearchAttribute[];
        qRanges: ISearchCharRange[];
    }

    interface ISearchGroupItem {
        qItemType: SearchObjectsItemType;
        qTotalNumberOfMatches: number;
        qIdentifier: string;
        qItemMatches: ISearchGroupItemMatch[];
        qSearchTermsMatched: number[];
    }

    interface ISearchGroup {
        qId: number;
        qGroupType: SearchObjectsGroupType;
        qSearchTermsMatched: number[];
        qTotalNumberOfItems: number;
        qItems: ISearchGroupItem[];
    }

    interface ISearchResult {
        qSearchTerms: string[];
        qTotalNumberOfGroups: number;
        qSearchGroupArray: ISearchGroup;
    }

    interface ISearchSuggestItem {
        qValue: string;
        qTerm: number;
    }

    interface ISearchSuggestionResult {
        qSuggestions: ISearchSuggestItem[];
        qFieldNames: string[];
    }

    interface IApp {
        global: IGlobal;

        abortModal(qAccept: boolean): Promise<void>;
        addAlternateState(qStateName: string): Promise<void>;
        addFieldFromExpression(qName: string, qExpr: string): Promise<boolean>;
        applyBookmark(qId: string): Promise<boolean>;
        backCount(): Promise<number>;
        back(): Promise<void>;
        checkExpression(qExpr: string, qLabels?: string[]): Promise<ICheckExpressionResult>;
        checkNumberOrExpression(qExpr: string): Promise<ICheckNumberOrExpressionResult>;
        checkScriptSyntax(): Promise<IScriptSyntaxError[]>;
        clearAll(qLockedAlso: boolean, qStateName?: string): Promise<void>;
        clearUndoBuffer(): Promise<void>;
        cloneBookmark(qId: string): Promise<string>;
        cloneDimension(qId: string): Promise<string>;
        cloneMeasure(qId: string): Promise<string>;
        cloneObject(qId: string): Promise<string>;
        commitDraft(qId: string): Promise<void>;
        createBookmark(qProp: IGenericBookmarkProperties): Promise<IGenericBookmark>;
        createConnection(qConnection: IConnection): Promise<string>;
        createDimension(qProp: IGenericDimensionProperties): Promise<IGenericDimension>;
        createDraft(qId: string): Promise<string>;
        createMeasure(qProp: IGenericMeasureProperties): Promise<IGenericMeasure>;
        createObject(qProp: IGenericObjectProperties): Promise<IGenericObject>;
        createSessionObject(qProp: IGenericObjectProperties): Promise<IGenericObject>;
        createSessionVariable(qProp: IGenericVariableProperties): Promise<IGenericVariable>;
        createVariable(qName: string): Promise<boolean>;
        createVariableEx(qProp: IGenericVariableProperties): Promise<INxInfo>;
        deleteConnection(qConnectionId: string): Promise<void>;
        destroyBookmark(qId: string): Promise<boolean>;
        destroyDimension(qId: string): Promise<boolean>;
        destroyDraft(qId: string, qSourceId: string): Promise<boolean>;
        destroyMeasure(qId: string): Promise<boolean>;
        destroyObject(qId: string): Promise<boolean>;
        destroySessionObject(qId: string): Promise<boolean>;
        destroySessionVariable(qId: string): Promise<boolean>;
        destroyVariableById(qId: string): Promise<boolean>;
        destroyVariableByName(qName: string): Promise<boolean>;
        doReload(qMode?: number, qPartial?: boolean, qDebug?: boolean): Promise<boolean>;
        doReloadEx(qParams?: IDoReloadExParams): Promise<IDoReloadExResult>;
        doSave(qFileName?: string): Promise<void>;
        evaluate(qExpression: string): Promise<string>;
        evaluateEx(qExpression: string): Promise<IFieldValue>;
        findMatchingFields(qFieldName: string, qTags: string[]): Promise<INxMatchingFieldInfo[]>;
        forward(): Promise<void>;
        forwardCount(): Promise<number>;
        getAllInfos(): Promise<INxInfo[]>;
        getAppLayout(): Promise<INxAppLayout>;
        getAppProperties(): Promise<INxAppProperties>;
        getAssociationScores(qTable1: string, qTable2: string): Promise<IAssociationScore>;
        getBookmark(qId: string): Promise<IGenericBookmark>;
        getConnection(qConnectionId: string): Promise<IConnection>;
        getConnections(): Promise<IConnection[]>;
        getContentLibraries(): Promise<IContentLibraryList>;
        getDatabaseInfo(qConnectionId: string): Promise<IDatabaseInfo>;
        getDatabaseOwners(qConnectionId: string, qDatabase?: string): Promise<IDatabaseOwner[]>;
        getDatabases(qConnectionId: string): Promise<IDatabase[]>;
        getDatabaseTableFields(qConnectionId: string, qTable: string, qDatabase?: string, qOwner?: string): Promise<IDataField[]>;
        getDatabaseTablePreview(qConnectionId: string, qTable: string, qDatabase?: string, qOwner?: string): Promise<IDataRecord[]>;
        getDatabaseTables(qConnectionId: string, qDatabase?: string, qOwner?: string): Promise<IDataTable[]>;
        getDimension(qId: string): Promise<IGenericDimension>;
        getEmptyScript(qLocalizedMainSection?: string): Promise<string>;
        getFavoriteVariables(): Promise<string[]>;
        getFieldDescription(qFieldName: string): Promise<IFieldDescription>;
        getField(qFieldName: string, qStateName?: string): Promise<IField>;
        getFileTableFields(qConnectionId: string, qDataFormat: IFileDataFormat, qTable: string, qRelativePath?: string): Promise<IDataField[]> | Promise<string>;
        getFileTablePreview(qConnectionId: string, qRelativePath: string, qDataFormat: IFileDataFormat, qTable: string): Promise<IDataRecord[]> | Promise<string>;
        getFileTablesEx(qConnectionId: string, qRelativePath: string, qDataFormat: IFileDataFormat): Promise<IDataTableEx[]>;
        getFileTables(qConnectionId: string, qRelativePath: string, qDataFormat: IFileDataFormat): Promise<IDataTable[]>;
        getFolderItemsForConnection(qConnectionId: string, qRelativePath: string): Promise<IFolderItem[]>;
        getIncludeFileContent(qLibPath: string): Promise<string>;
        getLibraryContent(qName: string): Promise<IStaticContentList>;
        getLocaleInfo(): Promise<ILocaleInfo>;
        getLooselyCoupledVector(): Promise<number[]>;
        getMatchingFields(qTags: string[], qMatchingFieldMode?: boolean): Promise<INxMatchingFieldInfo[]>;
        getMediaList(): Promise<MediaList[]> | Promise<boolean>;
        getMeasure(qId: string): Promise<IGenericMeasure>;
        getObject(qId: string): Promise<IGenericObject>;
        getProperties(): Promise<INxAppProperties>;
        getScriptBreakpoints(): Promise<IEditorBreakpoint[]>;
        getScript(): Promise<string>;
        getTableData(qOffset: number, qRows: number, qSyntheticMode: boolean, qTableName: string): Promise<ITableRow[]>;
        getTablesAndKeys(qWindowSize: ISize, qNullSize: ISize, qCellHeight: number, qSyntheticMode: boolean, qIncludeSysVars: boolean): Promise<ITableRecord[]> | Promise<ISourceKeyRecord[]>;
        getTextMacros(): Promise<ITextMacro[]>;
        getVariable(qName: string): Promise<IVariable>;
        getVariableById(qId: string): Promise<IGenericVariable>;
        getVariableByName(qName: string): Promise<IGenericVariable>;
        getViewDlgSaveInfo(): Promise<ITableViewDlgSaveInfo>;
        guessFileType(qConnectionId: string, qRelativePath: string): Promise<IFileDataFormat>;
        lockAll(qStateName: string): Promise<void>;
        modifyConnection(qConnectionId: string, qConnection: IConnection, qOverrideCredentials: boolean): Promise<void>;
        publish(qStreamId: string, qName: string): Promise<void>;
        redo(): Promise<boolean>;
        removeAlternateState(qStateName: string): Promise<void>;
        removeVariable(qName: string): Promise<boolean>;
        resume(): Promise<void>;
        saveObjects(): Promise<void>;
        searchAssociations(qOptions: ISearchCombinationOptions, qTerms: string[], qPage: ISearchPage): Promise<void>;
        searchObjects(qOptions: ISearchObjectOptions, qTerms: string[], qPage: ISearchPage): Promise<ISearchResult>;
        searchResults(qOptions: ISearchCombinationOptions, qTerms: string[], qPage: ISearchPage): Promise<ISearchResult>;
        searchSuggest(qOptions: ISearchCombinationOptions, qTerms: string[]): Promise<ISearchSuggestionResult>;
        selectAssociations(qOptions: ISearchCombinationOptions, qTerms: string[], qMatchIx: number, qSoftLock: boolean): Promise<void>;
        sendGenericCommandToCustomConnector(qProvider: string, qCommand: CommandType, qMethod: string, qParameters: string[], qAppendConnection: string[]): Promise<string>;
        /**
         * Sets properties to an app.
         * @param {Number} qProp - Information about the properties of an app. / NxAppProperties
         * @return {Promise}
         */
        setAppProperties(qProp: INxAppProperties): Promise<void>;
        setFavoriteVariables(qNames: string[]): Promise<void>;
        setFetchLimit(qLimit: number): Promise<void>;
        setLooselyCoupledVector(qv: number[]): Promise<boolean>;
        setScriptBreakpoints(qBreakpoints: IEditorBreakpoint[]): Promise<void>;
        setScript(qScript: string): Promise<void>;
        setViewDlgSaveInfo(qInfo: ITableViewDlgSaveInfo): Promise<void>;
        undo(): Promise<boolean>;
        unlockAll(qStateName: string): Promise<void>;
        unPublish(): Promise<void>;
    }

    interface INxFieldProperties {
        qOneAndOnlyOne: boolean;
    }

    interface IField {
        clearAllButThis(qSoftLock?: boolean): Promise<boolean>;
        clear(): Promise<boolean>;
        getAndMode(): Promise<boolean>;
        getCardinal(): Promise<number>;
        getNxProperties(): Promise<INxFieldProperties>;
        lock(): Promise<boolean>;
        lowLevelSelect(qValues: number[], qToggleMode: boolean, qSoftLock?: boolean): Promise<boolean>;
        selectAll(qSoftLock?: boolean): Promise<boolean>;
        selectAlternative(qSoftLock?: boolean): Promise<boolean>;
        selectExcluded(qSoftLock?: boolean): Promise<boolean>;
        select(qMatch: string, qSoftLock?: boolean, qExcludedValuesMode?: number): Promise<boolean>;
        selectPossible(qSoftLock?: boolean): Promise<boolean>;
        selectValues(qFieldValues: IFieldValue[], qToggleMode?: boolean, qSoftLock?: boolean): Promise<boolean>;
        setAndMode(qAndMode: boolean): Promise<void>;
        setNxProperties(qProperties: INxFieldProperties): Promise<void>;
        toggleSelect(qMatch: string, qSoftLock?: boolean, qExcludedValuesMode?: number): Promise<boolean>;
        unlock(): Promise<boolean>;
    }

    interface INxPatch {
        qOp: NxPatchOpType;
        qPath: string;
        qValue: string;
    }

    interface IAlternateStateData {
        qStateName: string;
        qFieldItems: IBookmarkFieldItem[];
    }

    interface IBookmarkVariableItem {
        qName: string;
        qValue: IFieldValue;
    }

    interface IBookmarkFieldItem {
        qDef: IFieldDefEx;
        qLocked: boolean;
        qSelectInfo: ISelectInfo;
        qValues: IFieldValue[];
        qExcludedValues: IFieldValue[];
        qAndMode: boolean;
        qOneAndOnlyOne: boolean;
    }

    interface IFieldDefEx {
        qName: string;
        qType: FieldDefExType;
    }

    interface ISelectInfo {
        qTextSearch: string;
        qRangeLo: number;
        qRangeHi: number;
        qNumberFormat: IFieldAttributes;
        qRangeInfo: INxRangeSelectInfo[];
        qContinuousRangeInfo: IRange[];
    }

    interface INxBookmark {
        qStateData: IAlternateStateData[];
        qUtcModifyTime: number;
        qVariableItems: IBookmarkVariableItem[];
    }

    interface IGenericBaseLayout {
        qInfo: INxInfo;
        qMeta: INxMeta;
    }

    interface IGenericBookmarkLayout extends IGenericBaseLayout {
        qMeta: INxMetaTitleDescription;
        qBookmark: INxBookmark;
    }

    interface IGenericBookmark {
        apply(): Promise<boolean>;
        applyPatches(qPatches: INxPatch[]): Promise<void>;
        getInfo(): Promise<INxInfo>;
        getLayout(): Promise<IGenericBookmarkLayout>;
        getProperties(): Promise<IGenericBookmarkProperties>;
        publish(): Promise<void>;
        setProperties(qProp: IGenericBookmarkProperties): Promise<void>;
        unPublish(): Promise<void>;
    }

    interface IGenericBookmarkEntry {
        qProperties: IGenericBookmarkProperties;
        qBookmark: INxBookmark;
    }

    interface IGenericDimensionInfo {
        qApprMaxGlyphCount: number;
        qCardinal: number;
        qTags: string[];
        qIsSemantic: boolean;
        qAndMode: boolean;
    }

    interface IGenericDimensionLayout extends IGenericBaseLayout {
        qDim: INxLibraryMeasureDef;
        qDimInfos: IGenericDimensionInfo[];
    }

    interface INxLinkedObjectInfo {
        qRootId: string;
        qInfo: INxInfo;
    }

    interface IGenericDimension {
        applyPatches(qPatches: INxPatch[]): Promise<void>;
        getDimension(): Promise<IGenericDimension>;
        getInfo(): Promise<INxInfo>;
        getLayout(): Promise<IGenericDimensionLayout>;
        getLinkedObjects(): Promise<INxLinkedObjectInfo[]>;
        getProperties(): Promise<IGenericDimensionProperties>;
        publish(): Promise<void>;
        setProperties(): Promise<IGenericDimensionProperties>;
        unPublish(): Promise<void>;
    }

    interface IGenericObjectEntry {
        qProperty: IGenericObjectProperties;
        qChildren: IGenericObjectEntry[];
        qEmbeddedSnapshotRef: IGenericBookmarkEntry;
    }

    interface INxPage {
        qLeft: number;
        qTop: number;
        qWidth: number;
        qHeight: number;
    }

    interface INxViewPort {
        qWidth: number;
        qHeight: number;
        qZoomLevel: number;
    }

    interface INxDataAreaPage {
        qLeft: number;
        qTop: number;
        qWidth: number;
        qHeight: number;
    }

    interface INxHighlightRanges {
        qRanges: ICharRange[];
    }

    interface ICharRange {
        qCharPos: number;
        qCharCount: number;
    }

    interface INxAttributeExpressionValues {
        qValues: INxSimpleValue[];
    }

    interface INxSimpleValue {
        qText: string;
        qNum: number;
    }

    interface INxCell {
        qText: string;
        qNum: number;
        qElemNumber: number;
        qState: NxCellStateType;
        qIsEmpty: boolean;
        qIsTotalCell: boolean;
        qIsOtherCell: boolean;
        qFrequency: string;
        qHighlightRanges: INxHighlightRanges;
        qAttrExps: INxAttributeExpressionValues;
        qIsNull: boolean;
        qAttrDims: INxAttributeExpressionValues;
    }

    interface INxCellRows {
        NxCellRows: INxCell[];
    }

    interface INxDataPage {
        qMatrix: INxCellRows[];
        qTails: INxGroupTail[];
        qArea: IRect;
        qIsReduced: boolean;
    }

    interface INxGroupTail {
        qUp: number;
        qDown: number;
    }

    interface IContinuousDataOptions {
        qStart: number;
        qEnd: number;
        qNbrPoints: number;
        qMaxNbrTicks: number;
    }

    interface INxAxisTicks {
        qName: string;
        qTicks: INxTickCell[];
        qTags: string[];
    }

    interface INxTickCell {
        qText: string;
        qStart: number;
        qEnd: number;
    }

    interface INxAxisData {
        qAxis: INxAxisTicks[];
    }

    interface INxAttributeDimValues {
        qValues: INxSimpleDimValue[];
    }

    interface INxSimpleDimValue {
        qText: string;
        qElemNo: number;
    }

    interface INxPivotDimensionCell {
        qText: string;
        qElemNo: number;
        qValue: number;
        qCanExpand: boolean;
        qCanCollapse: boolean;
        qType: NxCellType;
        qUp: number;
        qDown: number;
        qSubNodes: INxPivotDimensionCell[];
        qAttrExps: INxAttributeExpressionValues[];
        qAttrDims: INxAttributeDimValues[];
    }

    interface INxPivotPage {
        qLeft: INxPivotDimensionCell[];
        qTop: INxPivotDimensionCell[];
        qData: INxPivotValuePoint[];
        qArea: IRect;
    }

    interface INxStackedPivotCell {
        qText: string;
        qElemNo: number;
        qValue: number;
        qCanExpand: boolean;
        qCanCollapse: boolean;
        qType: NxCellType;
        qMaxPos: number;
        qMinNeg: number;
        qUp: number;
        qDown: number;
        qRow: number;
        qSubNodes: INxStackedPivotCell[];
        qAttrExps: INxAttributeExpressionValues;
        qAttrDims: INxAttributeDimValues;
    }

    interface INxStackPage {
        qData: INxStackedPivotCell[];
        qArea: IRect;
    }

    interface IGenericObjectLayout extends IGenericBaseLayout {
        qExtendsId: string;
        qHasSoftPatches: boolean;
        qError: INxLayoutErrors;
        qSelectionInfo: INxSelectionInfo;
    }

    interface INxLayoutErrors {
        ErrorCode: number;
    }

    interface INxSelectionInfo {
        qInSelections: boolean;
        qMadeSelections: boolean;
    }

    interface IRangeSelectInfo {
        qRange: IRange;
    }

    interface INxMultiRangeSelectInfo extends IRangeSelectInfo {
        qColumnsToSelect: number;
    }

    interface INxRangeSelectInfo extends IRangeSelectInfo {
        qMeasureIx: number;
    }

    interface INxContinuousRangeSelectInfo extends IRangeSelectInfo {
        qDimIx: number;
    }

    interface IRange {
        qMin: number;
        qMax: number;
        qMinInclEq: boolean;
        qMaxInclEq: boolean;
    }

    interface INxSelectionCell {
        qType: NxSelectionCellType;
        qCol: number;
        qRow: number;
    }

    interface IImplementOn {
        // ? not in Docu
        on(event: "changed" | "closed", func: () => void): void;

        // ? not in Docu
        id: string;
    }

    interface IGenericObject extends IImplementOn {
        app: IApp;

        abortListObjectSearch(qPath: string): Promise<void>;
        acceptListObjectSearch(qPath: string, qToggleMode: boolean, qSoftLock?: boolean): Promise<void>;
        applyPatches(qPatches: INxPatch[], qSoftPatch?: boolean): Promise<void>;
        beginSelections(qPaths: string[]): Promise<void>;
        clearSelections(qPath: string, qColIndices?: number[]): Promise<void>;
        clearSoftPatches(): Promise<void>;
        collapseLeft(qPath: string, qRow: number, qCol: number, qAll: boolean): Promise<void>;
        collapseTop(qPath: string, qRow: number, qCol: number, qAll: boolean): Promise<void>;
        copyFrom(qFromId: IGenericObjectProperties): Promise<void>;
        createChild(qProp: IGenericObjectProperties, qPropForThis?: IGenericObjectProperties): Promise<IGenericObject>;
        destroyAllChildren(qPropForThis?: IGenericObjectProperties): Promise<void>;
        destroyChild(qid: string, qPropForThis?: IGenericObjectProperties): Promise<boolean>;
        drillUp(qPath: string, qDimNo: number, qNbrSteps: number): Promise<void>;
        embedSnapshotObject(qId: string): Promise<void>;
        endSelections(qAccept: boolean): Promise<void>;
        expandLeft(qPath: string, qRow: number, qCol: number, qAll: boolean): Promise<void>;
        expandTop(qPath: string, qRow: number, qCol: number, qAll: boolean): Promise<void>;
        exportData(qFileType: FileType, qPath: string, qFileName?: string, qExportState?: ExportStateType): Promise<string>;
        getChildInfos(): Promise<INxInfo[]>;
        getChild(qId: string): Promise<IGenericObject>;
        getEffectiveProperties(): Promise<IGenericObjectProperties>;
        getFullPropertyTree(): Promise<IGenericObjectEntry>;
        getHyperCubeBinnedData(qPath: string,
                               qPages: INxPage[],
                               qViewport: INxViewPort,
                               qDataRanges: INxDataAreaPage,
                               qMaxNbrCells: number,
                               qQueryLevel: number,
                               qBinningMethod: number): Promise<INxDataPage[]>;
        getHyperCubeContinuousData(qPath: string, qOptions: IContinuousDataOptions[]): Promise<boolean> | Promise<INxDataPage[]> | Promise<INxAxisData[]>;
        getHyperCubeData(qPath: string, qPages: INxPage[]): Promise<INxDataPage[]>;
        getHyperCubePivotData(qPath: string, qPages: INxPage[]): Promise<INxPivotPage[]>;
        getHyperCubeReducedData(qPath: string, qPages: INxPage[], qZoomFactor: number, qReductionMode: ReductionModeType): Promise<INxDataPage[]>;
        getHyperCubeStackData(qPath: string, qPages: INxPage[], qMaxNbrCells?: number): Promise<INxStackPage[]>;
        getInfo(): Promise<INxInfo>;
        getLayout(): Promise<IGenericBaseLayout>;
        getLinkedObjects(): Promise<INxLinkedObjectInfo[]>;
        getListObjectContinuousData(qPath: string, qOptions: IContinuousDataOptions): Promise<INxDataPage[]> | Promise<INxAxisData[]>;
        getListObjectData(qPath: string, qPages: INxPage[]): Promise<INxDataPage[]>;
        getProperties(): Promise<IGenericObjectProperties>;
        getSnapshotObject(): Promise<IGenericBookmark>;
        lock(qPath: string, qColIndices: number[]): Promise<void>;
        publish(): Promise<void>;
        multiRangeSelectHyperCubeValues(qPath: string, qRanges: INxMultiRangeSelectInfo, qDeselectOnlyOneSelected: boolean, qColumnsToSelect?: number[], qOrMode?: boolean): Promise<boolean>;
        rangeSelectHyperCubeValues(qPath: string, qRanges: INxRangeSelectInfo[], qDeselectOnlyOneSelected: boolean, qColumnsToSelect?: number[], qOrMode?: boolean): Promise<boolean>;
        resetMadeSelections(): Promise<void>;
        searchListObjectFor(qPath: string, qMatch: string): Promise<boolean>;
        selectHyperCubeCells(qPath: string, qRowIndices: number[], qColIndices: number[], qSoftLock: boolean, qDeselectOnlyOneSelected: boolean): Promise<boolean>;
        selectHyperCubeContinuousRange(qPath: string, qRanges: INxContinuousRangeSelectInfo[], qSoftLock: boolean): Promise<boolean>;
        selectHyperCubeValues(qPath: string, qDimNo: number, qValues: number[], qToggleMode: boolean): Promise<boolean>;
        selectListObjectAll(qPath: string, qSoftLock?: boolean): Promise<boolean>;
        selectListObjectAlternative(qPath: string, qSoftLock?: boolean): Promise<boolean>;
        selectListObjectContinuousRange(qPath: string, qRanges: Range[], qSoftLock?: boolean): Promise<boolean>;
        selectListObjectExcluded(qPath: string, qSoftLock?: boolean): Promise<boolean>;
        selectListObjectPossible(qPath: string, qSoftLock?: boolean): Promise<boolean>;
        selectListObjectValues(qPath: string, qValues: number[], qToggleMode: boolean, qSoftLock?: boolean): Promise<boolean>;
        selectPivotCells(qPath: string, qSelections: INxSelectionCell[], qDeselectOnlyOneSelected: boolean, qSoftLock?: boolean): Promise<boolean>;
        setChildArrayOrder(qIds: string[]): Promise<void>;
        setFullPropertyTree(qPropEntry: IGenericObjectEntry): Promise<void>;
        setProperties(qProp: IGenericObjectProperties): Promise<void>;
        unlock(qPath: string, qColIndices: number[]): Promise<void>;
        unPublish(): Promise<void>;
    }

    interface IGenericMeasureLayout extends IGenericBaseLayout {
        qMeasure: INxLibraryMeasureDef;
    }

    interface IGenericVariableLayout extends IGenericBaseLayout {
        qText: string;
        qNum: number;
        qIsScriptCreated: boolean;
    }

    interface INxLibraryMeasureDef {
        qLabel: string;
        qDef: string;
        qGrouping: NxGrpType;
        qExpressions: string[];
        qActiveExpression: number;
    }

    interface IGenericMeasure extends IImplementOn {
        applyPatches(qPatches: INxPatch[]): Promise<void>;
        getInfo(): Promise<INxInfo>;
        getLayout(): Promise<IGenericMeasureLayout>;
        getLinkedObjects(): Promise<INxLinkedObjectInfo>;
        getMeasure(): Promise<INxLibraryMeasureDef>;
        getProperties(): Promise<IGenericMeasureProperties>;
        publish(): Promise<void>;
        setProperties(qProp: IGenericMeasureProperties): Promise<void>;
        unPublish(): Promise<void>;
    }

    interface IGenericVariable extends IImplementOn {
        applyPatches(qPatches: INxPatch[]): Promise<void>;
        getInfo(): Promise<INxInfo>;
        getLayout(): Promise<IGenericVariableLayout>;
        getProperties(): Promise<IGenericVariableProperties>;
        publish(): Promise<void>;
        setDualValue(qText: string, qNum: number): Promise<void>;
        setNumValue(qVal: number): Promise<void>;
        setProperties(qProp: IGenericVariableProperties): Promise<void>;
        setStringValue(qVal: string): Promise<void>;
        unPublish(): Promise<void>;
    }

    interface IAlfaNumString {
        qString: string;
        qIsNum: boolean;
    }

    interface INxVariableProperties {
        qName: string;
        qNumberPresentation: IFieldAttributes;
        qIncludeInBookmark: boolean;
        qUsePredefListedValues: boolean;
        qPreDefinedList: string[];
    }

    interface IVariable extends IImplementOn {
        forceContent(qs: string, qd: number): Promise<void>;
        getContent(): Promise<IAlfaNumString>;
        getNxProperties(): Promise<INxVariableProperties>;
        getRawContent(): string;
        setContent(qContent: string, qUpdateMRU: boolean): Promise<boolean>;
        setNxProperties(qProperties: INxVariableProperties): Promise<void>;
    }

    interface IAppEntry {
        qID: string;
        qTitle: string;
        qPath: string;
        qLastReloadTime: string;
        qReadOnly: boolean;
        qMeta: INxMeta;
        qThumbnail: IStaticContentUrl;
    }

    interface IBNFDef {
        qBnf: number[];
        qNbr: number;
        qPNbr: number;
        qHelpId: number;
        qName: string;
        qStr: string;
        qIsBnfRule?: boolean;
        qScriptStatement?: boolean;
        qControlStatement?: boolean;
        qBnfLiteral?: boolean;
        qQvFunc?: boolean;
        qAggrFunc?: boolean;
        qFG: FunctionGroupType;
        qFieldFlag?: boolean;
        qMT: MTType;
        qDepr?: boolean;
    }

    interface ICustomConnector {
        qProvider: string;
        qParent: string;
        qDisplayName: string;
        qMachineMode: MachineModeType;
    }

    interface IDocListEntry {
        qDocName: string;
        qConnectedUsers: number;
        qFileTime: number;
        qFileSize: number;
        qDocId: string;
        qMeta: INxMeta;
        qLastReloadTime: string;
        qReadOnly: boolean;
        qTitle: string;
        qThumbnail: IStaticContentUrl;
    }

    interface IInteractDef {
        qType?: InteractionType;
        qTitle?: string;
        qMsg?: string;
        qButtons?: number;
        qLine?: string;
        qOldLineNr?: number;
        qNewLineNr?: number;
        qPath?: string;
        qHidden?: boolean;
        qResult: number;
        qInput?: string;
    }

    interface IDriveInfo {
        qDrive: string;
        qType: string;
        qName: string;
    }

    interface IOdbcDsn {
        qName: string;
        qDescription: string;
        qBit32: boolean;
        qUserOnly: boolean;
    }

    interface IOleDbProvider {
        qName: string;
        qDescription: string;
        qBit32: boolean;
    }

    interface IErrorData {
        qErrorString: string;
        qLineEnd: string;
        qLine: string;
        qErrorDataCode: ErrorDataCodeType;
    }

    interface IProgressMessage {
        qMessageCode: number;
        qMessageParameters: string[];
    }

    interface IProgressData {
        qStarted: boolean;
        qFinished: boolean;
        qCompleted: number;
        qTotal: number;
        qKB: number;
        qMillisecs: number;
        qUserInteractionWanted: boolean;
        qPersistentProgress: string;
        qTransientProgress: string;
        qErrorData: IErrorData[];
        qPersistentProgressMessages: IProgressMessage[];
        qTransientProgressMessage: IProgressMessage;
    }

    interface INxStreamListEntry {
        qName: string;
        qId: string;
    }

    interface ICodePage {
        qNumber: number;
        qName: string;
        qDescription: string;
    }

    interface IFunction {
        qName: string;
        qGroup: FunctionGroupType;
        qSignature: string;
    }

    interface IGlobal {
        abortAll(): Promise<void>;
        allowCreateApp(): Promise<boolean>;
        cancelReload(): Promise<void>;
        cancelRequest(qRequestId: number): Promise<void>;
        configureReload(qCancelOnScriptError: boolean, qUseErrorData: boolean, qInteractOnError: boolean): Promise<void>;
        copyApp(qTargetAppId: string, qSrcAppId: string, qIds: string[]): Promise<boolean>;
        createApp(qAppName: string, qLocalizedScriptMainSection: string): Promise<any>; // ?Result
        createDocEx(qDocName: string, qUserName?: string, qPassword?: string, qSerial?: string, qLocalizedScriptMainSection?: string): Promise<IApp>;
        createSessionApp(): Promise<IApp>;
        createSessionAppFromApp(qSrcAppId: string): Promise<IApp>;
        deleteApp(qAppId: string): Promise<boolean>;
        exportApp(qTargetPath: string, qSrcAppId: string, qIds: string[]): Promise<boolean>;
        getActiveDoc(): Promise<IApp | string>; // ?Result
        getAppEntry(qAppID: string): Promise<IAppEntry>;
        getAuthenticatedUser(): Promise<string>;
        getBNF(qBnfType: BnfType): Promise<IBNFDef>;
        getCustomConnectors(qReloadList: boolean): Promise<ICustomConnector[]>;
        getDatabasesFromConnectionString(qConnection: IConnection): Promise<IDatabase[]>;
        getDefaultAppFolder(): Promise<string>;
        getDocList(): Promise<IDocListEntry>;
        getFolderItemsForPath(qPath: string): Promise<IFolderItem>;
        getFunctions(qGroup?: FunctionGroupType): Promise<IFunction | undefined>;
        getInteract(qRequestId: number): Promise<IInteractDef>;
        getLogicalDriveStrings(): Promise<IDriveInfo[]>;
        getOdbcDsns(): Promise<IOdbcDsn[]>;
        getOleDbProviders(): Promise<IOleDbProvider[]>;
        getProgress(qRequestId: number): Promise<IProgressData>;
        getStreamList(): Promise<INxStreamListEntry[]>;
        getSupportedCodePages(): Promise<ICodePage[]>;
        getUniqueID(): Promise<string>;
        interactDone(qRequestId: number, qDef: IInteractDef): Promise<void>;
        isDesktopMode(): Promise<boolean>;
        isPersonalMode(): Promise<boolean>;
        isValidConnectionString(qConnection: IConnection): Promise<boolean>;
        openDoc(qDocName: string, qUserName?: string, qPassword?: string, qSerial?: string, qNoData?: boolean): Promise<IApp>;
        oSName(): Promise<string>;
        oSVersion(): Promise<string>;
        productVersion(): Promise<string>;
        qTProduct(): Promise<string>;
        qvVersion(): Promise<string>;
        reloadExtensionList(): Promise<void>;
        replaceAppFromID(qTargetAppId: string, qSrcAppID: string, qIds: string[]): Promise<boolean>;
        shutdownProcess(): Promise<void>;
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
        qNumFormat: FieldAttributesType;

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

    interface INxAttrDimInfo {
        /**
         * Cardinality of the attribute expression.
         * 	Integer
         */
        qCardinal: number;

        /**
         * Number of rows.
         * 	Size
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

    interface INxInlineDimensionDef {
        qGrouping?: NxGrpType;
        qFieldDefs?: string[];
        qFieldLabels?: string[];
        qSortCriterias?: ISortCriteria;
        qNumberPresentations?: IFieldAttributes[];
        qReverseSort?: boolean;
        qActiveField?: number;
    }

    interface IHyperCubeDimensionqDef extends INxInlineDimensionDef {
        autoSort?: boolean;
        cId?: string;
        othersLabel?: IStringExpressionContainer;
    }

    interface IOtherTotalSpecProp {
        qOtherMode: OtherModeType;
        qOtherCounted: string;
        qOtherLimit: string;
        qOtherLimitMode: OtherLimitModeType;
        qSuppressOther: boolean;
        qForceBadValueKeeping: boolean;
        qApplyEvenWhenPossiblyWrongResult: boolean;
        qGlobalOtherGrouping: boolean;
        qOtherCollapseInnerDimensions: boolean;
        qOtherSortMode: OtherSortModeType;
        qTotalMode: TotalModeType;
        qReferencedExpression: string;
    }

    interface INxAttrExprDef {
        qExpression: string;
        qLibraryId_: string;
    }

    interface INxAttrDimDef {
        qDef: string;
        qLibraryId: string;
        qSortBy: ISortCriteria;
    }

    interface INxDimension {
        qLibraryId?: string;
        qDef: INxInlineDimensionDef;
        qNullSuppression?: boolean;
        qOtherTotalSpec?: IOtherTotalSpecProp;
        qShowAll?: boolean;
        qOtherLabel?: IStringExpressionContainer;
        qTotalLabel?: IStringExpressionContainer;
        qCalcCond?: IValueExpr;
        qAttributeExpressions?: INxAttrExprDef[];
        qAttributeDimensions?: INxAttrDimDef[];

        qIncludeElemValue?: boolean; // ?Nicht in Doku
        qShowTotal?: boolean; // ?Nicht in Doku
    }

    interface INxCellPosition {
        qx: number;
        qy: number;
    }

    interface IValueExpr {
        qv: string;
    }

    interface ISortCriteria {
        qSortByState?: TypeSortDirection;
        qSortByFrequency?: TypeSortDirection;
        qSortByNumeric?: TypeSortDirection;
        qSortByAscii?: TypeSortDirection;
        qSortByLoadOrder?: TypeSortDirection;
        qSortByExpression?: TypeSortDirection;
        qExpression?: IValueExpr;

        qSortByGreyness?: TypeSortDirection; // ?Nicht in Doku
    }

    interface IStringExpressionContainer {
        qStringExpression: string;
    }

    interface ICustomErrorMessage {
        calcCond: string;
    }

    interface INxMeasure {
        qLibraryId?: string;
        qDef: INxInlineMeasureDef;
        qSortBy?: ISortCriteria;
        qAttributeExpressions?: INxAttrExprDef[];
        qCalcCond?: IValueExpr;
        qAttributeDimensions?: INxAttrDimDef[];
    }

    interface INxInlineMeasureDef {
        qLabel?: string;
        qDescription?: string;
        qTags?: string[];
        qGrouping: NxGrpType;
        qDef: string;
        qNumFormat?: IFieldAttributes;
        qRelative?: boolean;
        qBrutalSum?: boolean;
        qAggrFunc?: string;
        qAccumulate?: number;
        qReverseSort?: boolean;
        qActiveExpression?: number;
        qExpressions?: string[];
    }

    interface IHyperCubeMeasureqDef extends INxInlineMeasureDef {
        autoSort?: boolean;
        cId?: string;
        numFormatFromTemplate?: boolean;
    }

    interface IHyperCubeMeasureDef extends INxMeasure {
        qDef: IHyperCubeMeasureqDef;
    }

    interface INxPivotValuePoint {
        qLabel: string;
        qText: string;
        qNum: number;
        qType: NxCellType;
        qAttrExps: INxAttributeExpressionValues;
    }

    interface INxContainerEntry<T> {
        qInfo: INxInfo;
        qMeta: INxMeta;
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
    interface IListObject {
        qStateName: string;
        qSize: ISize;
        qError: INxValidationError;
        qDimensionInfo: INxDimensionInfo;
        qExpressions: INxListObjectExpression[];
        qDataPages: INxDataPage[];
    }

    interface INxListObjectExpression {
        qExpr: string;
        qError: INxLayoutErrors;
    }

    interface IGenericListLayout extends IGenericBaseLayout {
        qListObject: IListObject;
    }

    interface INxAutoSortByStateDef {
        qDisplayNumberOfRows: number;
    }

    interface INxListObjectExpressionDef {
        qExpr: string;
        qLibraryId: string;
    }

    interface IListObjectDef {
        qStateName: string;
        qLibraryId: string;
        qDef: INxInlineDimensionDef;
        qAutoSortByState: INxAutoSortByStateDef;
        qFrequencyMode: FrequencyModeType;
        qShowAlternatives: boolean;
        qInitialDataFetch: INxPage[];
        qExpressions?: INxListObjectExpressionDef[];
    }

    interface IGenericListProperties extends IGenericProperties {
        qListObjectDef: IListObjectDef;
    }

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

    interface IHyperCube {
        qStateName: string;
        qSize: ISize;
        qError: INxValidationError;
        qDimensionInfo: INxDimensionInfo[];
        qMeasureInfo: INxMeasureInfo;
        qEffectiveInterColumnSortOrder: number[];
        qGrandTotalRow: INxCell[];
        qDataPages: INxDataPage[];
        qPivotDataPages: INxPivotPage[];
        qStackedDataPages: INxStackPage[];
        qMode: NxHypercubeMode;
        qNoOfLeftDims: number;
        qIndentMode: boolean;
        qLastExpandedPos: INxCellPosition;
        qHasOtherValues: boolean;
    }

    interface IGenericHyperCubeLayout extends IGenericObjectLayout {
        qHyperCube: IHyperCube;
    }

    interface IHyperCubeDef {
        qStateName: string;
        qDimensions: INxDimension[];
        qMeasures: INxMeasure[];
        qInterColumnSortOrder: number[];
        qSuppressZero: boolean;
        qSuppressMissing: boolean;
        qInitialDataFetch: INxPage[];
        qMode: NxHypercubeMode;
        qNoOfLeftDims: number;
        qAlwaysFullyExpanded: boolean;
        qMaxStackedCells: number;
        qPopulateMissing: boolean;
        qShowTotalsAbove: boolean;
        qIndentMode: boolean;
        qCalcCond: IValueExpr;
        qSortbyYValue: string;

        qPseudoDimPos: number; // ?Dokufehler
        qReductionMode: ReductionModeType; // ?Dokufehler
    }

    interface IVisualizationHyperCubeDef extends IHyperCubeDef {
        customErrorMessage: ICustomErrorMessage;
        qDimensions: IHyperCubeDimensionDef[];
        qMeasures: IHyperCubeMeasureDef[];
        qLayoutExclude: any;
    }

    interface IGenericHyperCubeProperties extends IGenericObjectProperties {
        qHyperCubeDef: IVisualizationHyperCubeDef;
    }

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

    interface INxCurrentSelectionItem {
        qTotal: number;
        qIsNum: boolean;
        qField: string;
        qLocked: boolean;
        qOneAndOnlyOne: boolean;
        qTextSearch: string;
        qSelectedCount: number;
        qSelected: string;
        qRangeInfo: IRangeSelectInfo[];
        qSortIndex: number;
        qStateCounts: INxStateCounts;
        qSelectedFieldSelectionInfo: INxFieldSelectionInfo[];
        qNotSelectedFieldSelectionInfo: INxFieldSelectionInfo[];
        qSelectionThreshold: number;
    }

    interface INxFieldSelectionInfo {
        qName: string;
        qFieldSelectionMode: FieldSelectionModeType;
    }

    interface IGenericSelectionNxInfo extends INxInfo {
        qType: "CurrentSelection";
    }

    interface IGenericSelectionListProperties extends IGenericObjectProperties {
        qInfo: IGenericSelectionNxInfo;
        qSelectionObjectDef: any;
    }

    interface ISelectionListObject {
        qBackCount: number;
        qForwardCount: number;
        qSelections: INxCurrentSelectionItem[];
    }

    interface IGenericSelectionListLayout extends IGenericObjectLayout {
        qSelectionObject: ISelectionListObject;
    }

    interface ISelectionListObject extends IGenericObject {
        getLayout(): Promise<IGenericSelectionListLayout>;
    }

    interface IApp {
        createObject(qProp: IGenericSelectionListProperties): Promise<ISelectionListObject>;
        createSessionObject(qProp: IGenericSelectionListProperties): Promise<ISelectionListObject>;
    }
}
//#endregion

//#region BookmarkListObject
declare namespace EngineAPI {
    interface IBookmarkList {
        qItems: IGenericBookmarkLayout[];
    }

    interface IGenericBookmarkListLayout extends IGenericBaseLayout {
        qBookmarkList: IBookmarkList;
    }

    interface IGenericBookmarkListNxInfo extends INxInfo {
        qType: "BookmarkList";
    }

    interface IGenericBookmarkListProperties extends IGenericProperties {
        qInfo: IGenericBookmarkListNxInfo;
        qBookmarkListDef: IBookmarkListDef;
    }

    interface IBookmarkListDef {
        qType: "bookmark";
        // qData: nicht dokumentiert
        // example from websocket
        // qData: { title: "/qMetaDef/title", description: "/qMetaDef/description", sheetId: "/sheetId", title: "/qMetaDef/title" }
    }

    interface IBookmarkListObject extends IGenericObject {
        getLayout(): Promise<IGenericBookmarkListLayout>;
    }

    interface IApp {
        createObject(qProp: IGenericBookmarkListProperties): Promise<IBookmarkListObject>;
        createSessionObject(qProp: IGenericBookmarkListProperties): Promise<IBookmarkListObject>;
    }
}
//#endregion

//#region MeassureListObject
declare namespace EngineAPI {
    interface IMeassureListItemLayout extends IGenericBaseLayout {
        qMeta: INxMetaTitleDescriptionTag;
        qData: null;
    }

    interface IMeassureList {
        qItems: IMeassureListItemLayout[];
    }

    interface IGenericMeasureListLayout extends IGenericBaseLayout {
        qMeassureListObject: IMeassureList;
    }

    interface IGenericMeassureListNxInfo extends INxInfo {
        qType: "MeasureList";
    }

    interface IGenericMeasureListProperties extends IGenericProperties {
        qInfo: IGenericMeassureListNxInfo;
        qMeasureListDef: IMeasureListDef;
    }

    interface IMeasureListDef {
        qType: "measure";
        // qData: INxMeasure[]; nicht dokumentiert
        // example from websocket
        // qData : { title: "/qMetaDef/title", tags: "/qMetaDef/tags" }
    }

    interface IMeassureListObject extends IGenericObject {
        getLayout(): Promise<IGenericMeasureListLayout>;
    }

    interface IApp {
        createObject(qProp: IGenericMeasureListProperties): Promise<IMeassureListObject>;
        createSessionObject(qProp: IGenericMeasureListProperties): Promise<IMeassureListObject>;
    }
}
//#endregion

//#region DimensionsListObject
declare namespace EngineAPI {
    interface IDimensionItemLayout {
        qMeta: INxMetaTitleDescriptionTag;
        qData: null;
    }

    interface IDimensionList {
        qItems: IDimensionItemLayout[];
    }

    interface IGenericDimensionListLayout extends IGenericBaseLayout {
        qDimensionsListObject: IDimensionList;
    }

    interface IGenericDimensionListNxInfo extends INxInfo {
        qType: "DimensionList";
    }

    interface IGenericDimensionsListProperties extends IGenericProperties {
        qInfo: IGenericMeassureListNxInfo;
        qDimensionListDef: IDimensionListDef;
    }

    interface IDimensionListDef {
        qType: "dimension";
        // qData: INxDimension[]; nicht dokumentiert
    }

    interface IDimensionListObject extends IGenericObject {
        getLayout(): Promise<IGenericDimensionListLayout>;
    }

    interface IApp {
        createObject(qProp: IGenericDimensionsListProperties): Promise<IDimensionListObject>;
        createSessionObject(qProp: IGenericDimensionsListProperties): Promise<IDimensionListObject>;
    }
}
//#endregion

//#region VariableListObject
declare namespace EngineAPI {
    interface INxVariableListItem {
        qName: string;
        qDescription: string;
        qDefinition: string;
        qIsConfig?: boolean;
        qIsReserved?: boolean;
        qMeta?: INxMeta;
        qInfo: INxInfo;
        qData: any; // ? nicht dokumentiert
        qIsScriptCreated: boolean;
    }

    interface IVariableListObject {
        qItems: INxVariableListItem[];
    }

    interface IGenericVariableLayout extends IGenericObjectLayout {
        qVariableListObject: IVariableListObject;
    }

    interface IGenericVariableListProperties extends IGenericProperties {
        qVariableListDef: IVariableListDef;
    }

    interface IVariableListDef {
        qType: string;
        qShowReserved: boolean;
        qShowConfig: boolean;
        qData: any; // ?nicht dokumentiert
    }

    interface IVariableListObject extends IGenericObject {
        getLayout(): Promise<IGenericVariableLayout>;
    }

    interface IApp {
        createObject(qProp: IGenericVariableListProperties): Promise<IVariableListObject>;
        createSessionObject(qProp: IGenericVariableListProperties): Promise<IVariableListObject>;
    }
}
//#endregion

//#region FieldListObject
declare namespace EngineAPI {
    interface IFieldListObject {
        qItems: INxFieldDescription[];
    }

    interface IGenericFieldLayout extends IGenericObjectLayout {
        qFieldListObject: IFieldListObject;
    }

    interface IGenericFieldListProperties extends IGenericProperties {
        qFieldListDef: IFieldListDef;
    }

    interface INxFieldDescription {
        qIsSemantic: boolean;
        qIsHidden: boolean;
        qIsSystem: boolean;
        qAndMode?: boolean;
        qName: string;
        qCardinal: number;
        qTags: string[];
        qIsDefinitionOnly: boolean;
        qDerivedFieldData: INxDerivedFieldDescriptionList;
        qIsDetail: boolean;
        qIsImplicit: boolean;
    }

    interface INxDerivedFieldDescriptionList {
        qDerivedFieldLists: INxDerivedFieldsData[];
    }

    interface INxDerivedField {
        qId: string;
        qName: string;
        qMethod: string;
        qExpr: string;
        qTags: string[];
    }

    interface INxDerivedGroup {
        qId: string;
        qName: string;
        qGrouping: NxGrpType;
        qFieldDefs: string[];
    }

    interface INxDerivedFieldsData {
        qDerivedDefinitionName: string;
        qFieldDefs: INxDerivedField[];
        qGroupDefs: INxDerivedGroup[];
        qTags: string[];
    }

    interface IFieldListDef {
        qShowSystem?: boolean;
        qShowHidden?: boolean;
        qShowSemantic?: boolean;
        qShowSrcTables?: boolean;
        qShowDefinitionOnly?: boolean;
        qShowDerivedFields?: boolean;
        qShowImplicit?: boolean;
    }

    interface IApp {
        createObject(qProp: IGenericFieldListProperties): Promise<IFieldListObject>;
        createSessionObject(qProp: IGenericFieldListProperties): Promise<IFieldListObject>;
    }
}
//#endregion
