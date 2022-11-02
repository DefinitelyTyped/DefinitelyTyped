export = ViewDefField;
declare function ViewDefField(
    name: string,
    type: string,
    size: number | null,
    ...args: any[]
): void;
declare class ViewDefField {
    constructor(name: string, type: string, size: number | null, ...args: any[]);
    private inheritedClassDefEvents_;
    private superRegisterEvents_;
    private typesThatNotSupportUnderscoreAtName_;
    private protectState_;
    private unprotectState_;
    private defaultAdapterDescriptor_;
    private unrestrictedOn_;
    private registerEvents_;
    duplicationHandling: any;
    private _propertiesToAssign;
    private _ownControlledProperties;
    resyncPending: boolean;
    private logger_;
    showGlobalActions: boolean;
    visible: boolean;
    duplicateMode: string;
    tableViewable: boolean;
    formViewable: boolean;
    requiredDataSetFields: string;
    private arRequiredDataSetFields;
    alignment: string;
    height: number;
    width: number;
    enterKeyAction:
        | {
              IGNORE: string;
              NEWLINE: string;
              DONE: string;
          }
        | string;
    private tableViewLabel;
    controlType: string;
    private controlType_;
    treeParentFieldName: string;
    treeChildFieldName: string;
    treeRootValues: any;
    private maxSize;
    private maxFiles;
    private canLocate;
    changed: boolean;
    private changeable;
    private totalContent;
    zoomMaxHeight: number | string | null;
    zoomMaxWidth: number | string | null;
    tableViewHeight: number | string | null;
    tableViewWidth: number;
    parent: Grid | ViewDef;
    editable: boolean;
    isCalculated: boolean;
    hasEvent(eventName: string): boolean;
    saveInputAsDefault: boolean;
    emptyResultMessage: string;
    labelCssClass: string;
    labelPosition: string;
    negativeInRed: boolean;
    column: number;
    breakLine: boolean;
    hasInformedControl: boolean;
    allowMultipleInsert: boolean;
    wrap: boolean;
    private classDef;
    private lastMasterFieldValues;
    private nextField;
    private priorField;
    private nextEditableField;
    private priorEditableField;
    private tableViewIndex;
    private inTableView;
    private inSetValue;
    cssClass: string;
    private _index;
    detailIndexFieldNames: string;
    detailDescendingIndexFieldNames: string;
    masterDetailMaxRecordCount: number;
    private _createEvent;
    onOpenKey: Event;
    onCalculate: Event;
    onGetTreeIcon: Event;
    onFocus: Event;
    onBlur: Event;
    onLookupMultipleInsert: Event;
    onDefineGrid: Event;
    links: AnchorCollection;
    private getIsDataSetField;
    private _getClassDef;
    thumbnail: CellThumbnail;
    hasLookupDisplayEvent(): boolean;
    hasLinks: boolean;
    canHaveGlobalActions(): boolean;
    getGlobalActionClassKey(opt_key?: number): number;
    getGlobalActionRegisterKey(opt_key?: number): number | null;
    link: Link;
    linkParametersValuesFieldNames: any[];
    private _originalAssignTo;
    assignTo(field: any, ...args: any[]): void;
    private originalChangeFieldType_;
    protected changeFieldType_(type: any, fieldName: any, ...args: any[]): void;
    private tableViewable_;
    readOnly: boolean;
    private superGetIsDataBaseField_;
    getIsDataBaseField(): boolean;
    viewMode: number;
    aggregate: FieldAggregator;
    isGrid(): boolean;
    isTree(): boolean;
    isKey(): boolean;
    isMasterDetail(): boolean;
}
declare namespace ViewDefField {
    export { VM_THUMBNAIL, VM_LIST, FieldAggregator, Event, ViewDef, Grid, Link };
}
type Grid = import('../grid/Grid');
type ViewDef = import('./ViewDef');
type Event = import('@nginstack/engine/lib/event/Event');
import AnchorCollection = require('../anchor/AnchorCollection.js');
import CellThumbnail = require('./CellThumbnail.js');
type Link = import('../anchor/Link');
type FieldAggregator = import('../field-aggregator/FieldAggregator');
declare var VM_THUMBNAIL: number;
declare var VM_LIST: number;
