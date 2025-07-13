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
    private changes;
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
    private pairName_;
    private componentFactoryResolver_;
    private formViewBuffer_;
    private clientBof;
    private clientEof;
    private clientRecNo;
    private clientRecordCount;
    private clientPosition;
    private clientCollapsed;
    private clientTitle_;
    private pendingFocus_;
    private savedState_;
    integerDatabaseType: string;
    private integerDatabaseType_;
    selectedRecords: string[];
    getSelectedRecords(opt_viewMode?: number): any[];
    getSelectedRecordsAtView(viewMode?: number): any[];
    hasDataSet(): boolean;
    private clientCanInsert;
    private clientCanDelete;
    private clientCanPost;
    private clientCanModify;
    private clientCanShowLog;
    private clientCanExport;
    private hasCalculateField;
    private hasFieldWithInformedControl_;
    private hasDetailField;
    private recentlyWritten_;
    private isFirstSync;
    private recentlyCreated;
    private written_;
    private fieldsHasChanged;
    private viewHasChanged;
    private viewChangedByUser;
    private canSync;
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
    private preserveFieldLinkIds_;
    ds: DataSet;
    definitionClass: number | null;
    definitionName: number | null;
    private syncDataSetReferenceToAggregates;
    column: number;
    span: string;
    breakLine: boolean;
    cssClass: string;
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
    private getHintValues;
    automaticClearUnselectableRecords: boolean;
    viewMode: number;
    private handleEdition;
    private handleEditingFieldName;
    protected _scrollDetailGrids(): void;
    private updateDetailGrids;
    private handlePosition;
    classKeyToValidatePermission: number | DBKey;
    private getCurrentBookmark;
    private handleRecordSelection;
    private getSelectionRecordsRange;
    private handleCollapsed;
    private collapsed_;
    private handleInput;
    private handleGridSynchronize;
    private handleGridSynchronizeFunctions;
    private refreshFields;
    private forceChangedFields;
    private syncButtons;
    private syncGridFocus_;
    private formSyncRefreshNavButtonsView;
    private syncFieldProperties_;
    private _readOnlyOfFieldsHasChanged;
    private getFormViewDataSynchronize;
    private visible;
    private formSync_;
    private tabSyncRefreshNavButtonsView;
    private tabSyncAddRemoveRows;
    private tabSyncClearInactiveRows_;
    private getCurrentRecNo_;
    private getRecordCount_;
    private alertKeyNotFoundOnce;
    private alertedKeys_;
    protected tabSyncBufferUpdate(
        dsSync: any,
        records: any,
        clientRow: any,
        isCurrentRecord: any,
    ): void;
    private calculateFirstRecNoOfView;
    private syncDataSetStateToBufferState;
    private tableSync_;
    selectedRecordsChanged: boolean;
    private tableSyncPriorRecords_;
    private tableSyncCurrentRecord_;
    private _isInserting;
    private _newTableViewRecordBuffer;
    private tableSyncNextRecords_;
    private getTableRecordsSyncCommands_;
    protected sync_(formSync: any, tableSync: any): void;
    allAlreadySelected_: boolean;
    private checkRefresh;
    private _getChanges;
    private syncCheckBufferChange;
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
    post(opt_doParentPost?: boolean, ...args: any[]): boolean;
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
    write(opt_showInFormView?: boolean, opt_noWriteInClient?: boolean): void;
    private fViewMode;
    private _sortFieldsAndDeclareUnnamedGroups;
    private _hasScrollEvents;
    private _writeAndScrollDetails;
    private writeFormView;
    private writeTableView;
    private writeFields;
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
    private validateFields;
    private validateRequiredFields;
    private _getRequiredFieldsNotFilled;
    private postAtNavigation;
    private safeCallOnAfterScroll;
    private handleFirst;
    private handleLast;
    private handlePrior;
    private handleNext;
    private handleChangeView;
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
    private handleDuplicateRecord_;
    duplicateRecord(opt_bookmark?: string): void;
    private insertRecordsFromMap_;
    private handleInsert;
    private handleDelete;
    private handlePost;
    private handleCancel;
    private handleInvertSelection;
    private handleUnselectAll;
    private handleSelectAll;
    private handleSetsOrRetrievesAll;
    private handleSelectRecord;
    private fieldAction;
    private _defaultOnShowLog;
    lookup(field: GridField): void;
    private _handleLookup;
    private endLookup;
    private selectAllOnLookup;
    expand(nodeValue: string): void;
    colapse(nodeValue: string): void;
    private handleTreeViewToggle;
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
    private locate;
    private _removeStrFromList;
    private _getFieldIndexOrder;
    private index;
    private updateAggregateValue;
    private handleLog;
    private handleExport;
    private fieldIsVisibleInCurrentView_;
    private handleToggleKey_;
    private getFieldByNames_;
    private handleAction;
    private handleGridActionsFunctions;
    private assign;
    private _close;
    private toString;
    private _ivfs;
    private exportersClass;
    private getExportFormatsOptions;
    private _resetClientButtons;
    private _hasSelectEvents;
    private handleSync;
    private getActions;
    toggleKeyVisibility(): void;
    toggleFieldVisibility(field: string | Field): void;
    private finishToggleFieldVisibility_;
}
declare namespace Grid {
    export {
        AdapterDescriptor,
        ALWAYS,
        Button,
        Event,
        FocusOptions,
        FORM_VIEW as FORMVIEW,
        GridState,
        LOCATE_ALL_FIELDS,
        LOCATE_EXACT,
        LOCATE_NEXT,
        MAX_VISIBLE_RECORD_COUNT,
        MDA_DELETE,
        MDA_ERROR,
        MDA_UNLINK,
        NEVER,
        persist,
        Process,
        RecordData,
        TABLE_VIEW as TABLEVIEW,
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
interface RecordData {
    bookmark: number;
    recNo: number;
    checked: boolean;
    enabled: boolean;
    editing: boolean;
    locked: boolean;
}
interface FocusOptions {
    fieldName?: string;
    firstEditable?: boolean;
}
type AdapterDescriptor = import("@nginstack/engine/lib/event/AdapterDescriptor");
type Event = import("@nginstack/engine/lib/event/Event");
type Button = import("../button/Button");
type ViewDefField = import("../classdef/ViewDefField");
type Process = import("../process/Process");
interface GridState {
    dataSetId: number | null;
    rowId: number | null;
    selectedRecords: string[];
}
