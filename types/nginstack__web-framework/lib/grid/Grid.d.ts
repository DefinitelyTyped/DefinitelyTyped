export = Grid;
declare function Grid(parent: any, name: string): void;
declare class Grid {
    constructor(parent: any, name: string);
    private logger_;
    private listenerCompareFunction;
    private duplicationHandling;
    private _getFieldByName;
    private toggledViewFieldsVisibility_;
    classDefManager: ClassDefManager;
    layout: LayoutConfig;
    protected arFields: ViewDefField[];
    private arTableViewFields;
    private arFormViewFields;
    private _permissionFilters;
    private fCanInsert;
    private fCanEdit;
    private fCanDelete;
    private changeCommands_;
    private buttons;
    private arButtons;
    private _fieldToLinkId;
    classesToValidatePermissions: any[];
    groups: FieldGroupSet;
    private reservedWords;
    private onGridDefinition;
    protected tableViewBuffer: TableViewBuffer;
    private aggregateBar;
    toolbar: {
        visible: boolean;
    };
    fields: FieldList;
    parent: any;
    process: Process;
    private _name;
    userPrefName: string;
    private fSelectedRecords;
    unselectableRecords: any[];
    title: string;
    private syncError_;
    private pairName_;
    private componentFactoryResolver_;
    private formViewBuffer_;
    private clientRecordCount;
    private clientPosition;
    private clientTitle_;
    private pendingFocus_;
    private savedState_;
    integerDatabaseType: string;
    private integerDatabaseType_;
    selectedRecords: string[];
    getSelectedRecords(opt_viewMode?: number): any[];
    getSelectedRecordsAtView(viewMode?: number): any[];
    hasDataSet(): boolean;
    private clientCanInsert_;
    private clientCanInvertSelection_;
    private clientCanShowLog_;
    private clientCanExport_;
    private clientCanToggleKey_;
    private clientCanDuplicate_;
    private clientCanDelete_;
    private clientCanConfirm_;
    private clientCanModify_;
    private clientFieldNames_;
    private hasCalculateField;
    private hasFieldWithInformedControl_;
    private hasFieldWithConditionalStyle_;
    private hasDetailField;
    private recentlyWritten_;
    private isFirstSync;
    private recentlyCreated_;
    private structureSent_;
    private fieldsHasChanged;
    private viewHasChanged;
    private viewChangedByUser;
    private canSync_;
    private syncOnlyCurrentRecord;
    private inLookup;
    private delayedOnAfterScrollEventCall_;
    private locateLastValue_;
    private locateLastBookmark_;
    private locateLastFoundField_;
    private searchTempDs;
    private toIgnoreBookmarks;
    userCanExport: boolean;
    toggleKeyButtonEnabled: boolean;
    private executePrepareOnFieldMethod;
    private useLocatePatternForAll;
    private firstRecNoOfView;
    private editingField;
    private _lookupCallerField;
    getLookupCallerField(): Field;
    private _reprepareFieldPermissions;
    private _reprepareGrid;
    private _preparedFieldsLength;
    private _syncOfGrLookupFromReadOnlyField;
    private stateProtectionId_;
    private stateProtectionLevel_;
    private doRefresh;
    autoPersist: boolean;
    private isLookupGrid_;
    private protectState_;
    private unprotectState_;
    private protectedEmit_;
    protected adaptEvent_(name: string, descriptor: AdapterDescriptor | Record<any, any>): void;
    onBeforeEdit: Event;
    onAfterEdit: Event;
    onBeforeInsert: Event;
    onAfterInsert: Event;
    onBeforeDelete: Event;
    onAfterDelete: Event;
    onBeforeCancel: Event;
    onAfterCancel: Event;
    onBeforePost: Event;
    onAfterPost: Event;
    onChangeView: Event;
    onBeforeScroll: Event;
    onAfterScroll: Event;
    onLocate: Event;
    onBeforeDuplicate: Event;
    onAfterDuplicate: Event;
    onShowLog: Event;
    onBeforeSelectRecord: Event;
    onAfterSelectRecord: Event;
    onDefineFields: Event;
    onBeforePrepare: Event;
    onAfterPrepare: Event;
    onBeforeExpand: Event;
    onAfterExpand: Event;
    onExport: Event;
    private getIndexOfDsKeyField;
    setFieldsProperties(...args: any[]): void;
    getFieldsByProperty(...args: any[]): Field[];
    private _translateFieldNamesToFieldObjectsArray;
    getKeyField(): Field;
    private setNewBufferFieldValue;
    private canShowButtonsBar;
    private resetPropertiesToResend;
    emit(event: any, ...args: any[]): any;
    collapseGroup(groupName: string): void;
    expandGroup(groupName: string): void;
    private upsertGridGroupCommand_;
    resetFields(): void;
    private deleteField;
    clearButtons(): void;
    private clearFields;
    private resetButtons;
    name: string;
    help:
        | {
            overview: string;
            buttons: Record<string, string>;
        }
        | string;
    private formatEventId;
    refresh(opt_force?: boolean): void;
    private fDs;
    tableViewFieldNames: string;
    formViewFieldNames: string;
    private backupState_;
    private restoreState_;
    allAlreadySelected_: boolean;
    private preserveFieldLinkIds_;
    ds: DataSet;
    definitionClass: number | null;
    definitionName: number | null;
    private syncDataSetReferenceToAggregates;
    column: number;
    span: string;
    breakLine: boolean;
    width: string;
    confirmDelete: boolean;
    confirmCancel: boolean;
    confirmChange: boolean;
    canShowLog: boolean;
    canDuplicate: boolean;
    readOnly: boolean;
    canModify: boolean;
    classKey: number;
    classDefinition: any;
    maxSelectedRecords: number;
    maxRecordCount: number;
    private _isVariableGrid;
    hasTableView: boolean;
    hasFormView: boolean;
    collapsed: boolean;
    canInsert: number;
    canEdit: number;
    canDelete: number;
    canExport: number;
    dataExporter: any;
    private canPost;
    canInvertSelection: boolean;
    automaticClearSelectedRecords: boolean;
    canPostDataSetOnEvents: boolean;
    private refreshFieldIndexCache;
    private lastDataSetId;
    private refreshHintFieldIndexes;
    hintFieldNames: string;
    private getHintValues_;
    automaticClearUnselectableRecords: boolean;
    viewMode: number;
    private handleEdition_;
    private handleEditingFieldName_;
    protected _scrollDetailGrids(): void;
    private updateDetailGrids;
    private handlePosition_;
    classKeyToValidatePermission: number | DBKey;
    private getCurrentBookmark;
    private handleSelectedRecords_;
    private getSelectionRecordsRange;
    private handleCollapsed_;
    private collapsed_;
    private handleFieldChange_;
    private refreshFields;
    private forceChangedFields;
    private getFieldState_;
    private _readOnlyOfFieldsHasChanged;
    private visible;
    private getCurrentRecNo_;
    private getRecordCount_;
    private alertKeyNotFoundOnce;
    private alertedKeys_;
    protected syncRecord_(
        dsSync: DataSet,
        records: RecordSync[],
        clientRow: number,
        isCurrentRecord: boolean,
    ): void;
    private calculateFirstRecNoOfView;
    private syncDataSetStateToBufferState;
    private syncPriorRecords_;
    private syncCurrentRecord_;
    private _isInserting;
    private createRecordBuffer_;
    private syncNextRecords_;
    private getGridSyncResponse_;
    private getGridSync_;
    private getFormViewSync_;
    private getTableViewSync_;
    protected sync_(): GridSyncResponse;
    private getAllGridsStructure_;
    private checkRefresh;
    private getChanges_;
    private updateFieldValue;
    edit(field?: GridField): void;
    protected newEvent_(
        type: string,
        opt_options?: {
            cancelable: boolean;
        },
    ): GridEvent;
    focus(options: FocusOptions): void;
    private protectFocus;
    private unprotectFocus;
    insert(): void;
    private _setFieldDefaultValue;
    private forEachDetail_;
    private _getAllDataSets;
    private _delMasterAndDetailRecords;
    private _deleteDetailGrids;
    private removeBookmarkFromSelectAndUnSelectedRecords;
    del(handleDetailGrid?: boolean): void;
    private delete;
    private editingOrInserting;
    post(doParentPost?: boolean, ...args: any[]): boolean;
    cancel(): void;
    getFieldsAsStringList(): StringList;
    private checkWordAvailability;
    field(name: string, opt_type?: string, opt_size?: number, ...args: any[]): Field | ViewDefField;
    protected locateField(fieldName: string): Field;
    private declareGetterAndSetter_;
    private _addField;
    private input;
    button(
        name: string,
        opt_target?: string | ((arg0: any) => any),
        opt_order?: number,
        opt_processKey?: number,
        opt_newTab?: boolean,
    ): Button;
    action(name: any, target: any, order: any, processKey: any, newTab: any): Button;
    visibleButtons: Array<Button | string>;
    visibleActions: Array<Button | string>;
    enabledButtons: Array<Button | string>;
    enabledActions: Array<Button | string>;
    private dsFieldTypeToFieldType;
    private _prepareGridEvents;
    private _applyGridDefinition;
    private _prepareFromClass;
    private _prepareFromDataSet;
    private _prepareAggregates;
    private _preparePermissionFilter;
    private _prepareFieldPermissions;
    private _fpvManager;
    private _prepareFieldFormAndTableViewable;
    private _prepareRequiredDataSetFields;
    private _requiredDataSetFieldsSatisfied;
    private _prepareDetailGrid;
    private _prepareTreeGrid;
    private _prepareDetailGrids;
    protected prepare(): void;
    persist(): number;
    private getGridStructure_;
    prepareFields_(): void;
    write(showInFormView?: boolean): void;
    private fViewMode;
    private sortFieldsAndDeclareUnnamedGroups_;
    private _hasScrollEvents;
    private _writeAndScrollDetails;
    private writeFormView;
    private writeTableView;
    private getFieldsStructure_;
    userKeyToValidatePermissions: number;
    validateFieldPermissions: boolean;
    private _classe;
    private _canInsertRecord;
    private _getSuggestedClassToInsertion;
    private permissionFilters;
    private _getClassKeyToValidate;
    private _validateNegativeKey;
    private _validateIfUserCanPost;
    private _validateJustToGroup;
    private _validateIfUserCanStartEdit;
    private _validateIfUserCanStartInsertAndReturnSuggestedClassKey;
    private _validateDelete;
    private _validateExport;
    private getUnfilledRequiredFields_;
    private postAtNavigation;
    private safeCallOnAfterScroll;
    private handleFirst_;
    private handleLast_;
    private handlePrior_;
    private handleNext_;
    private handleToggleView_;
    scroll(action: string | ((arg0: DataSet) => boolean)): boolean;
    first(): boolean;
    last(): boolean;
    next(): boolean;
    prior(): boolean;
    gotoBookmark(bookmark: string): boolean;
    tryGotoBookmark(bookmark: string): boolean;
    gotoRowId(rowId: number): boolean;
    tryGotoRowId(rowId: number): boolean;
    private collectAllRecordsToDuplicate_;
    private readCurrentRecordToDuplicate_;
    private handleDuplicate_;
    duplicateRecord(opt_bookmark?: string): void;
    private insertRecordsFromMap_;
    private handleInsert_;
    private handleDelete_;
    private handleConfirm_;
    private handleCancel_;
    private handleRecordsSelection_;
    private handleNavigation_;
    private handleOpenKey_;
    private handleFieldFocus_;
    private handleInvertSelection_;
    private handleUnselectAll_;
    private handleSelectAll_;
    private handleSelectRecord_;
    private _defaultOnShowLog;
    lookup(field: GridField): void;
    private handleLookup_;
    private endLookup;
    private handleLookupSelectAll_;
    expand(nodeValue: string): void;
    private colapse;
    collapse(nodeValue: string): void;
    private handleToggleTree_;
    private _locateField;
    private _locateValueAtField;
    private _compareNearestOrMatch;
    private _locateLookupField;
    private _locateCalculatedField;
    private _locateMemoField;
    private _isChildOfRoot;
    private _originalTreeClone;
    private _isChildOfRoots;
    private _defaultOnLocate;
    private _prepareIfNecessary;
    private handleSearch_;
    private _removeStrFromList;
    private calculateFieldIndexOrderAndDirection_;
    private handleIndex_;
    private handleUpdateAggregateValue_;
    private handleShowLog_;
    private handleExport_;
    private fieldIsVisibleInCurrentView_;
    private handleToggleKey_;
    private getFieldByNames_;
    private handleCommand_;
    private assign;
    private _close;
    private toString;
    private _ivfs;
    private exportersClass;
    private getExportFormatsOptions;
    private resetClientButtons_;
    private hasSelectEvents_;
    private handleSync_;
    private getActions;
    toggleKeyVisibility(): void;
    toggleFieldVisibility(field: string | Field): void;
    private finishToggleFieldVisibility_;
    private gridCommandMethods_;
}
declare namespace Grid {
    export {
        AdapterDescriptor,
        AggregatesSyncResponse,
        ALWAYS,
        Button,
        ErrorPayload,
        Event,
        ExportRequest,
        FieldFocusRequest,
        FieldServerState,
        FieldSync,
        FocusOptions,
        FORM_VIEW as FORMVIEW,
        FormViewSync,
        GridActionRequest,
        GridClientState,
        GridClientStructure,
        GridGroupState,
        GridServerState,
        GridState,
        GridSyncResponse,
        IndexRequest,
        LOCATE_ALL_FIELDS,
        LOCATE_EXACT,
        LOCATE_NEXT,
        LookupRequest,
        LookupResponse,
        MAX_VISIBLE_RECORD_COUNT,
        MDA_DELETE,
        MDA_ERROR,
        MDA_UNLINK,
        NEVER,
        OpenKeyRequest,
        persist,
        Process,
        RecordServerState,
        RecordSync,
        RefreshResponse,
        SearchRequest,
        SelectRecordRequest,
        TABLE_VIEW as TABLEVIEW,
        TableViewSync,
        TreeToggleRequest,
        TypedCommand,
        UpdateAggregateRequest,
        USER_PERMISSION,
        ViewDefField,
    };
}
import ClassDefManager = require("@nginstack/engine/lib/classdef/ClassDefManager.js");
import LayoutConfig = require("../process/LayoutConfig.js");
import FieldGroupSet = require("@nginstack/engine/lib/classdef/FieldGroupSet.js");
import TableViewBuffer = require("./TableViewBuffer.js");
import FieldList = require("@nginstack/engine/lib/classdef/FieldList.js");
import Field = require("@nginstack/engine/lib/classdef/Field.js");
import DataSet = require("@nginstack/engine/lib/dataset/DataSet.js");
import DBKey = require("@nginstack/engine/lib/dbkey/DBKey.js");
import GridField = require("./GridField.js");
import GridEvent = require("../classdef/GridEvent.js");
import StringList = require("@nginstack/engine/lib/string/StringList.js");
declare const FORM_VIEW: 0;
declare const TABLE_VIEW: 1;
declare let NEVER: number;
declare let ALWAYS: number;
declare let USER_PERMISSION: number;
declare const MDA_ERROR: 0;
declare const MDA_DELETE: 1;
declare const MDA_UNLINK: 2;
declare let LOCATE_ALL_FIELDS: number;
declare let LOCATE_EXACT: number;
declare let LOCATE_NEXT: number;
declare function persist(grids: Grid | Grid[]): number;
declare let MAX_VISIBLE_RECORD_COUNT: number;
interface RecordServerState {
    editing: boolean;
    locked: boolean;
    bookmark?: number;
    recNo?: number;
    checked?: boolean;
    enabled?: boolean;
}
interface FocusOptions {
    fieldName?: string;
    firstEditable?: boolean;
}
interface AggregatesSyncResponse {
    aggregates: Array<import("./AggregateBar").AggregateState>;
    gridName: string;
}
interface ErrorPayload {
    error: string;
    ticket: string;
    stackTrace?: string;
}
interface GridSyncResponse {
    gridName: string;
    state: GridServerState;
    errorState?: ErrorPayload;
    syncButtons?: {
        enabled?: string[];
        disabled?: string[];
    };
    linkFields?: boolean;
    pendingFocus?: FocusOptions;
    view?: FormViewSync | TableViewSync;
    complementarySync?: GridSyncResponse;
}
interface GridServerState {
    recordCount: number;
    bookmark: string;
    recNo: number;
    viewState?: string;
    allSelected?: boolean;
    readOnly?: boolean;
    canInsert?: boolean;
    canDelete?: boolean;
    canConfirm?: boolean;
    canDuplicate?: boolean;
    canInvertSelection?: boolean;
    canShowLog?: boolean;
    canExport?: boolean;
    canToggleKey?: boolean;
    hasSelectEvents?: boolean;
    selectedRecords?: string[];
}
interface FieldSync {
    fieldName: string;
    state?: FieldServerState;
    linkSet?: import("../anchor/LinkSet").FieldLinkSetData;
    value?: string;
    informed?: boolean;
    style?: {
        css?: Record<string, string>;
        error?: string;
    };
    thumbnail?: {
        urls?: string[];
        error?: boolean;
    };
    display?: string;
    syncCalculus?: {
        showError?: boolean;
        error?: string;
    };
}
interface FieldServerState {
    readOnly?: boolean;
    required?: boolean;
    width?: number;
    tableViewWidth?: number;
}
interface RecordSync {
    dataIndex: number;
    state: RecordServerState;
    fields: FieldSync[];
    tooltip?: string;
    isCurrentRecord?: boolean;
}
interface FormViewSync {
    type: string;
    fields: FieldSync[];
}
interface TableViewSync {
    type: string;
    records: RecordSync[];
    maxRecordsDelta?: number;
    lastIndex?: number;
}
interface SelectRecordRequest {
    bookmark: string;
    rangeSelection?: boolean;
}
interface GridActionRequest {
    action: string;
}
interface ExportRequest {
    exportType: number;
}
interface UpdateAggregateRequest {
    fieldName: string;
    value: string;
}
interface IndexRequest {
    fieldName: string;
    composite?: boolean;
}
interface SearchRequest {
    value: string;
    fieldName: string;
    allFields?: boolean;
}
interface TreeToggleRequest {
    node: number;
}
interface LookupRequest {
    fieldName: string;
    value: string;
    openLookup: boolean;
}
interface LookupResponse {
    gridName: string;
    fieldName: string;
    empty?: boolean;
    emptyMessage?: string;
    fastSelect?: boolean;
    limited?: boolean;
    limit?: number;
}
interface OpenKeyRequest {
    fieldName: string;
}
interface FieldFocusRequest {
    fieldName: string;
}
interface GridClientState {
    title: string;
    readOnly: boolean;
    viewMode: string;
    hasTableView: boolean;
    hasFormView: boolean;
    hasDetailField: boolean;
    hasValidatePermission: boolean;
    hasHintFieldNames: boolean;
    hasAggregateBar: boolean;
    collapsed: boolean;
    width: number;
    hasButtonsBar: boolean;
    trapArrowFocus: boolean;
    exportOptions: any;
    maxRecordCount: number;
    visible?: boolean;
    hasScrollEvents?: boolean;
    hasSelectEvents?: boolean;
    hasDataSet?: boolean;
    hasKey?: boolean;
    hasRowBasedReadOnlyFields?: boolean;
}
interface GridClientStructure {
    name: string;
    parentName: string | null;
    state: GridClientState;
    fields: Array<import("./GridField").FieldClientStructure>;
}
interface RefreshResponse {
    gridName: string;
    grids: GridClientStructure[];
}
interface GridGroupState {
    gridName: string;
    id: string;
    collapsed: boolean;
}
type TypedCommand = import("../process/Process").TypedCommand;
interface GridState {
    dataSetId: number | null;
    rowId: number | null;
    selectedRecords: string[];
}
type AdapterDescriptor = import("@nginstack/engine/lib/event/AdapterDescriptor");
type Event = import("@nginstack/engine/lib/event/Event");
type Button = import("../button/Button");
type ViewDefField = import("../classdef/ViewDefField");
type Process = import("../process/Process");
