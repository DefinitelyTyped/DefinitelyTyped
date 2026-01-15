export = GridField;
declare function GridField(name: string, type: string, size: number | null, ...args: any[]): void;
declare class GridField {
    constructor(name: string, type: string, size: number | null, ...args: any[]);
    private logger_;
    value: any;
    private beforeValue;
    private clientValue;
    private clientCanModify;
    private clientRequired;
    private clientWidth_;
    private clientTableViewWidth_;
    private fieldIndexCache;
    private _readOnlyChangedByGrid;
    calcError: string;
    private indexData_;
    private dispatchEvent;
    private handleFocus_;
    private handleOpenKey_;
    canModify: boolean;
    prepare_(): void;
    private getStructure_;
    alignment: any;
    private written_;
    lookup(): void;
    grid: DetailGrid;
    private tree;
    private defaultLookupMultipleInsertListener_;
    private checkIfCanModify_;
    private calc;
    changed: any;
    private requiresFilling;
    private appendInTreeStructure;
    private prepareTreeView;
    fieldIndexesToTreeSync: any[];
    dsOriginalTree: any;
    dsTreeIndexSuffix: string;
    dsTreeStructure: DataSet;
    private _checkInformedFields;
    private validateClassFieldChange_;
    validateInput: any;
    protected _checkSaveInputAsDefault(context: {
        processKey: number;
        interactionName: string;
        gridName: string;
    }): void;
    private loadSavedProfileValues;
    emit(event: any, ...args: any[]): any;
    focus(): void;
    private notFoundKeysCache_;
    private lastDBCacheRefresh_;
    private dbCacheKeyExists_;
    private valueToServerValue;
    private valueToClientValue;
    private validateLookupLicenseDependencies_;
    setValue(value: any, ...args: any[]): void;
    inSetValue: boolean;
    resyncPending: boolean;
    setValueOnly(value: any): void;
    getValue(): any;
    private fillFirstValue;
    fillingFirstValue: boolean;
    private getUserInformedProperty;
    private checkValueError;
    private getLookupDisplay;
    getSavedValue(context: { processKey: number; interactionName: string; gridName: string }): any;
    private getFileDisplay;
    getComboValue(value: any): number | Record<any, any>;
    private getComboDisplay;
    private refreshClientValue;
    private removeClassEvents;
    private getComboOptionDisplay;
    private configWidth_;
    width: any;
    tableViewWidth: any;
    private width_;
}
declare namespace GridField {
    export {
        LookupMultipleInsertEvent,
        DetailGrid,
        FieldInitialState,
        FieldClientStructure,
        FieldIndexData,
    };
}
import DataSet = require('@nginstack/engine/lib/dataset/DataSet.js');
type LookupMultipleInsertEvent = import('../classdef/LookupMultipleInsertEvent');
type DetailGrid = import('./DetailGrid');
interface FieldInitialState {
    column: number;
    group: any;
    breakLine: boolean;
    label: string;
    labelPosition: string;
    wrap: boolean;
    enterKeyAction: string;
    calculated: boolean;
    alignment: string;
    tableViewable: boolean;
    formViewable: boolean;
    withLink: boolean;
    required: boolean;
    controlType: string;
    readOnly: boolean;
    autoTrim: boolean;
    hasFocusEvents: boolean;
    validationType: string;
    indexDirection?: {
        NONE: number;
        UP: number;
        DOWN: number;
        LEFT: number;
        RIGHT: number;
    };
    positionAtIndex?: number;
    aggregate?: {
        description?: string;
        decimalPrecision?: number;
        type?: string;
        readOnly?: boolean;
        alignment?: string;
    };
    tableViewLabel?: string;
    displayFormat?: string;
    rangeLimit?: any;
    thumbnail: {
        visible: boolean;
        zoomMaxHeight?: number;
        zoomMaxWidth?: number;
        zoomOnHover?: boolean;
    };
    hasLookup?: boolean;
    max?: number;
    min?: number;
    lookupDisplay?: string;
    caseType?: string;
    width: number | string;
    tableViewWidth: number | string;
    height?: string;
    rows?: number;
    negativeInRed?: boolean;
    decimalPrecision?: number;
    minDecimalPrecision?: number;
    maxDecimalPrecision?: number;
    lookupType?: string;
}
interface FieldClientStructure {
    name: string;
    type: string;
    size: number;
    state: FieldInitialState;
}
interface FieldIndexData {
    order: number;
    direction: number;
}
