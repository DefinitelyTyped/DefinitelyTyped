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
    defaultAdapterDescriptor_: any;
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
    private tableViewLabel;
    controlType: string;
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
    link: any;
    linkParametersValuesFieldNames: any[];
    private _originalAssignTo;
    assignTo(field: any, ...args: any[]): void;
    private originalChangeFieldType_;
    protected changeFieldType_(type: any, fieldName: any, ...args: any[]): void;
    tableViewable_: boolean;
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
    export {
        DEFAULT_DUPLICATE_MODES_,
        VM_THUMBNAIL,
        VM_LIST,
        _FIELD_DEFAULT_WIDTH_LIMIT,
        DEFAULTS_BY_TYPE_,
        FieldAggregator,
        Event,
        ViewDef,
        Grid,
    };
}
type Grid = import('../grid/Grid');
type ViewDef = import('./ViewDef');
type Event = import('@nginstack/engine/lib/event/Event');
import AnchorCollection = require('../anchor/AnchorCollection.js');
import CellThumbnail = require('./CellThumbnail.js');
type FieldAggregator = import('../field-aggregator/FieldAggregator');
declare namespace DEFAULT_DUPLICATE_MODES_ {
    const IKEY: string;
    const CHAVE: string;
    const IVERSION: string;
    const VERSAO: string;
    const ICODE: string;
    const CODIGO: string;
    const NOME: string;
    const INAME: string;
    const TITULO: string;
}
type DEFAULT_DUPLICATE_MODES_ = string;
declare var VM_THUMBNAIL: number;
declare var VM_LIST: number;
declare var _FIELD_DEFAULT_WIDTH_LIMIT: number;
declare namespace DEFAULTS_BY_TYPE_ {
    namespace width {
        const integer: number;
        const int32: number;
        const int64: number;
        const date: number;
        const number: number;
        const latitude: number;
        const longitude: number;
        const angle: number;
        const boolean: number;
        const combo: number;
        const memo: number;
        const file: string;
    }
    namespace alignment {
        const integer_1: string;
        export { integer_1 as integer };
        const int32_1: string;
        export { int32_1 as int32 };
        const int64_1: string;
        export { int64_1 as int64 };
        const latitude_1: string;
        export { latitude_1 as latitude };
        const longitude_1: string;
        export { longitude_1 as longitude };
        const angle_1: string;
        export { angle_1 as angle };
        const number_1: string;
        export { number_1 as number };
        const date_1: string;
        export { date_1 as date };
        const boolean_1: string;
        export { boolean_1 as boolean };
        const combo_1: string;
        export { combo_1 as combo };
        const file_1: string;
        export { file_1 as file };
    }
    namespace height {
        const file_2: string;
        export { file_2 as file };
    }
}
