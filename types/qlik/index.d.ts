// Type definitions for non-npm package Qlik Sense 3.1
// Project: https://help.qlik.com/en-US/sense-developer/3.1/Content/APIs-and-SDKs.htm
// Definitions by: Ruben Slabbert <https://github.com/RubenSlabbert>, AginicX <https://github.com/AginicX>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import 'jquery';

export interface Size {
    qcx: number;
    qcy: number;
}

export interface NxValidationError {
    qErrorCode: number;
    qContext: string;
    qExtendedMessage: string;
}

export interface NxStateCounts {
    qLocked: number;
    qSelected: number;
    qOption: number;
    qDeselected: number;
    qAlternative: number;
    qExcluded: number;
    qSelectedExcluded: number;
    qLockedExcluded: number;
}

export interface FieldAttributes {
    qType: 'U' | 'A' | 'I' | 'R' | 'F' | 'M' | 'D' | 'T' | 'TS' | 'IV';
    qnDec: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
    qUseThou: 0 | 1;
    qFmt: string;
    qDec: string;
    qThou: string;
    qSAFEARRAY: any[];
}

export interface CharRange {
    qCharPos: number;
    qCharCount: number;
}

export interface NxHighlightRanges {
    qRanges: CharRange[];
}

export interface NxSimpleValue {
    qText: string;
    qNum: number;
}

export interface NxAttributeExpressionValues {
    qValues: NxSimpleValue[];
}

export type NxCellRows = NxCell[];

export interface NxGroupTail {
    qUp: number;
    qDown: number;
}

export interface Rect {
    qLeft: number;
    qTop: number;
    qWdith: number;
    qHeight: number;
}

export interface NxPivotDimensioncell {
    qText: string;
    qElemNo: number;
    qValue: number;
    qCanExpand: boolean;
    qCanCollapse: boolean;
    qType: 'V' | 'E' | 'N' | 'T' | 'P' | 'R' | 'U';
    qUp: number;
    qDown: number;
    qSubNodes: NxPivotDimensioncell[];
    qAttrExps: NxAttributeExpressionValues[];
    qAttrDims: NxAttributeDimValues[];
}

export interface NxPivotValuePoint {
    qLabel?: string;
    qText: string;
    qNum: number;
    qType: 'V' | 'E' | 'N' | 'T' | 'P' | 'R' | 'U';
    qAttrExps: NxAttributeExpressionValues;
}

export interface NxPivotPage {
    qLeft: NxPivotDimensioncell[];
    qTop: NxPivotDimensioncell[];
    qData: NxPivotValuePoint[];
    qArea: Rect;
}

export interface NxStackedPivotCell {
    qText: string;
    qElemNo: number;
    qValue: number;
    qCanExpand: boolean;
    qCanCollapse: boolean;
    qType: 'V' | 'E' | 'N' | 'T' | 'P' | 'R' | 'U';
    qMaxPos: number;
    qMinNeg: number;
    qUp: number;
    qDown: number;
    qRow: number;
    qSubNodes: NxStackedPivotCell[];
    qAttrExps: NxAttributeExpressionValues;
    qAttrDims: NxAttributeDimValues;
}

export interface NxStackPage {
    qData: NxStackedPivotCell[];
    qArea: Rect;
}

export interface NxCellPosition {
    qx: number;
    qy: number;
}

export interface NxDataPage {
    qMatrix: NxCellRows[];
    qTails: NxGroupTail[];
    qArea: Rect;
    qIsReduced: boolean;
}

export interface NxAttributeDimValues {
    qValues: NxSimpleDimValue[];
}

export interface NxSimpleDimValue {
    qText: string;
    qElemNo: number;
}

export interface NxCell {
    qText: string;
    qNum: number;
    qElemNumber: number;
    qState: 'L' | 'S' | 'O' | 'D' | 'A' | 'X' | 'XS' | 'XL';
    qIsEmpty: boolean;
    qIsTotalCell: boolean;
    qIsOtherCell: boolean;
    qFrequency: string;
    qHighlightRanges: NxHighlightRanges;
    qAttrExps: NxAttributeExpressionValues;
    qIsNull: boolean;
    qAttrDims: NxAttributeDimValues;
}

export interface NxAttrExprInfo {
    qMin: number;
    qMax: number;
    qContinuousAxes: boolean;
    qIsCyclic: boolean;
    qFallbackTitle: string;
}

export interface NxAttrDimInfo {
    qCardinal: number;
    qSize: Size;
    qFallbackTitle: string;
    qLocked: boolean;
    qError: NxValidationError;
}

export interface ColumnInfo {
    qFallbackTitle: string;
    qApprMaxGlyphCount: number;
    qCardinal: string;
    qSortIndicator: 'N' | 'A' | 'D';
    qNumFormat: FieldAttributes;
    qIsAutoFormat: boolean;
    qMin: number;
    qMax: number;
    qError: NxValidationError;
    qReverseSort: boolean;
    qAttrExprInfo: NxAttrExprInfo[];
    qAttrDimInfo: NxAttrDimInfo[];
}

export interface NxDimensionInfo extends ColumnInfo {
    qLocker: string;
    qGroupFallbackTitles: string[];
    qGroupPos: number;
    qStateCounts: NxStateCounts;
    qTags: string[];
    qDimensionType: 'D' | 'N' | 'T';
    qGrouping: 'N' | 'H' | 'C';
    qIsSemantic: boolean;
    qGroupFieldDefs: string[];
    qContinuousAxes: boolean;
    qIsCyclic: boolean;
    qDerivedField: boolean;
}

export type NxMeasureInfo = ColumnInfo;

export interface HyperCube {
    qStateName: string;
    qSize: Size;
    qError: NxValidationError;
    qDimensionInfo: NxDimensionInfo[];
    qMeasureInfo: NxMeasureInfo[];
    qEffectiveInterColumnSortOrder: number[];
    qGrandTotalRow: NxCell[];
    qDataPages: NxDataPage[];
    qPivotDataPages: NxPivotPage[];
    qStackedDataPages: NxStackPage[];
    qMode: 'S' | 'P' | 'K';
    qNoOfLeftDims: number;
    qIndentMode: boolean;
    qLastExpandedPos: NxCellPosition;
    qHasOtherValues: boolean;
}

export interface NxInfo {
    qId: string;
    qType: string;
}

export interface NxCurrentSelectionItem {
    qTotal: number;
    qIsNum?: boolean;
    qField: string;
    qLocked?: boolean;
    qOneAndOnlyOne?: boolean;
    qTextSearch?: string;
    qSelectedCount: number;
    qSelected: string;
    qRangeInfo: RangeSelectInfo[];
    qSortIndex: number;
    qStateCounts: NxStateCounts;
    qSelectedFieldSelectionInfo: NxFieldSelectionInfo[];
    qNotSelectedFieldSelectionInfo: NxFieldSelectionInfo[];
    qSelectionThreshold: number;
}

export interface RangeSelectInfo {
    qRangeLo: number;
    qRangeHi: number;
    qMeasure: string;
}

export interface NxFieldSelectionInfo {
    qName: string;
    qFieldSelectionmode: 'NORMAL' | 'AND' | 'NOT';
}

export interface Selectionobject {
    qBackCount: number;
    qForwardCount: number;
    qSelections: NxCurrentSelectionItem[];
}

export interface Layout {
    qHyperCube: HyperCube;
    qInfo: NxInfo;
    qSelectionInfo: Selectionobject;
}

export interface ValueExpr {
    qv: string;
}

export interface SortCriteria {
    qSortByState: -1 | 0 | 1;
    qSortByFrequency: -1 | 0 | 1;
    qSortByNumeric: -1 | 0 | 1;
    qSortByAscii: -1 | 0 | 1;
    qSortByLoadOrder: -1 | 0 | 1;
    qSortByExpression: -1 | 0 | 1;
    qExpression: ValueExpr;
}

export interface NxInlineDimensionDef {
    qGrouping: 'N' | 'H' | 'C';
    qFieldDefs: string[];
    qSortCriteries: SortCriteria[];
    qNumberPresentations: FieldAttributes[];
    qReverseSort: boolean;
    qActiveField: number;
}

export interface OtherTotalSpecProp {
    qOtherMode: 'OTHER_OFF' | 'OTHER_COUNTED'
    | 'OTHER_ABS_LIMITED' | 'OTHER_ABS_ACC_TARGET'
    | 'OTHER_REL_LIMITED' | 'OTHER_REL_ACC_TARGET';
    qOtherCounted: ValueExpr;
    qOtherLimit: ValueExpr;
    qOtherLimitMode: 'OTHER_GE_LIMIT' | 'OTHER_LE_LIMIT' | 'OTHER_GT_LIMIT' | 'OTHER_LT_LIMIT';
    qSupressOther: boolean;
    qForceBadValueKeeping: boolean;
    qApplyEvenWhenPossiblyWrongResult: boolean;
    qGlobalOtherGrouping: boolean;
    qOtherCollapseInnerDimensions: boolean;
    qOtherSortMode: 'OTHER_SORT_DEFAULT' | 'OTHER_SORT_DESCENDING' | 'OTHER_SORT_ASCENDING';
    qTotalMode: 'TOTAL_OFF' | 'TOTAL_EXPR';
    qReferencedExpression: string;
}

export interface NxAttrExprDef {
    qExpression: string;
    qLibraryId: string;
}

export interface NxAttrDimDef {
    qDef: string;
    qLibraryId: string;
    qSortBy: SortCriteria;
}

export interface NxDimension {
    qLibraryId: string;
    qDef: NxInlineDimensionDef;
    qNullSuppression: boolean;
    qOtherTotalSpec: OtherTotalSpecProp;
    qShowAll: boolean;
    qOtherLabel: string;
    qTotalLabel: string;
    qCalcCond: ValueExpr;
    qAttributeExpressions: NxAttrExprDef[];
    qAttributeDimensions: NxAttrDimDef[];
}

export interface NxMeasure {
    qLibraryId: string;
    qDef: NxInlineMeasureDef;
    qSortBy: SortCriteria;
    qAttributeExpressions: NxAttrExprDef[];
    qCalcCond: ValueExpr;
    qAttributeDimensions: NxAttrDimDef[];
}

export interface NxInlineMeasureDef {
    qcx: number;
    qcy: number;
}

export interface NxPage {
    qLeft?: number;
    qTop?: number;
    qWidth?: number;
    qHeight?: number;
}

export interface HyperCubeDef {
    qStateName?: string;
    qDimensions?: NxDimension[];
    qMeasures?: NxMeasure[];
    qInterColumnSortOrder?: number[];
    qSuppressZero?: boolean;
    qSupressMissing?: boolean;
    qInitialDataFetch?: NxPage[];
    qMode?: 'S' | 'P' | 'K';
    qNoOfLeftDims?: number;
    qAlwaysFullyExpanded?: boolean;
    qMaxStackedCells?: number;
    qPopulateMissing?: boolean;
    qShowTotalsAbove?: boolean;
    qIndentMode?: boolean;
    qCalcCond?: ValueExpr;
    qSortByYValue?: -1 | 0 | 1;
}

export interface NxAutoSortByStateDef {
    qDisplayNumberOfRows: number;
}

export interface NxListobjectExpressionDef {
    qExpr: string;
    qLibraryId: string;
}

export interface ListobjectDef {
    qStateName: string;
    qLibraryId: string;
    qDef: NxInlineDimensionDef;
    qAutoSortByState: NxAutoSortByStateDef;
    qFrequencyMode: 'NX_FREQUENCY_NONE' | 'NX_FREQUENCY_VALUE' | 'NX_FREQUENCY_PERCENT' | 'NX_FREQUENCY_RELATIVE';
    qShowAlternatives: boolean;
    qInitialDataFetch: NxPage[];
    qExpressions: NxListobjectExpressionDef[];
}

export interface InitialPropertiesHyperCube {
    qHyperCubeDef: HyperCubeDef;

    [key: string]: any;
}

export interface InitialPropertiesListobject {
    qListobjectDef: ListobjectDef;

    [key: string]: any;
}

export type InitialProperties = InitialPropertiesHyperCube | InitialPropertiesListobject;

export interface SnapshotLegacy {
    canTakeSnapshot: boolean;
}

export type SupportFunction = (layout: Layout) => boolean;
export type SupportItem = boolean | SupportFunction;

export interface Support {
    snapshot: SupportItem | SnapshotLegacy;
    export: SupportItem;
    exportData: SupportItem;
}

export type Paint = (
    this: ExtensionContext,
    $element?: JQuery,
    layout?: Layout,
    qDimensionInfo?: NxDimensionInfo,
    qMeasureInfo?: NxDimensionInfo,
    qMatrix?: NxCellRows[],
    dimensions?: NxCell[],
    measures?: NxCell[],
    qSize?: Size,
    qId?: string,
    qSelectionInfo?: Selectionobject
) => void;

export interface VisualizationCommon {
    qHyperCubeDef: HyperCubeDef;
    title: string;
    showTitles: boolean;
    subtitle: string;
    footnote: string;
}

// TODO: Other types of visualizations
export type VisualizationOptions = VisualizationCommon;

// TODO: Figure out other types
export type ShowFunction = (layout: Layout, cls: any, obj: any) => boolean
    | ((measure: NxMeasure) => boolean);

export interface CustomPropertyCommon {
    type?: 'string' | 'integer' | 'number' | 'array' | 'boolean' | 'items';
    ref?: string;
    label?: string;
    show?: boolean | ShowFunction;
}

export interface CustomPropertyString extends CustomPropertyCommon {
    type: 'string';
    expression?: 'always' | 'optional' | '';
    maxLength?: number;
    defaultValue?: string;
}

export interface CustomPropertyInteger extends CustomPropertyCommon {
    type: 'integer';
    component?: string;
    min?: string;
    max?: string;
    defaultValue?: number;
}

export interface CustomPropertyNumber extends CustomPropertyCommon {
    type: 'number';
    component?: string;
    min?: string;
    max?: string;
    defaultValue?: number;
}

export interface CustomPropertyArray extends CustomPropertyCommon {
    type: 'array';
    component?: undefined;
    itemTitleRef?: string;
    allowAdd?: boolean;
    allowRemove?: boolean;
    addTranslation?: string;
    allowMove?: boolean;
}

export interface CustomPropertyButton extends CustomPropertyCommon {
    component: 'button';
    action(data: VisualizationOptions): void;
}

export interface ButtonGroupOption {
    value: string;
    label: string;
    tooltip: string;
}

export interface CustomPropertyButtonGroup extends CustomPropertyCommon {
    type: 'string';
    component: 'buttongroup';
    defaultValue?: string;
    options?: ButtonGroupOption[] | (() => ButtonGroupOption[]);
}

export interface CustomPropertyCheckbox extends CustomPropertyCommon {
    type: 'boolean';
    defaultValue?: boolean;
}

export interface CustomPropertyColorPicker extends CustomPropertyCommon {
    type: 'integer';
    component: 'color-picker';
    defaultValue?: number;
}

export interface CustomPropertyOption {
    value: string;
    label: string;
}

export type CustomPropertyOptions = CustomPropertyOption[] | (() => CustomPropertyOption[]);

export interface CustomPropertyDropdown extends CustomPropertyCommon {
    type: 'string';
    ref: string;
    component: 'dropdown';
    defaultValue?: string;
    options?: CustomPropertyOptions;
}

export interface CustomPropertyLink extends CustomPropertyCommon {
    component: 'link';
    url?: string;
}

export interface CustomProperyMedia extends CustomPropertyCommon {
    type: 'string';
    component: 'media';
    layoutRef?: string;
}

export interface CustomPropertyRadio extends CustomPropertyCommon {
    type: 'string';
    component: 'radiobuttons';
    defaultValue?: string;
    options?: CustomPropertyOptions;
}

export interface CustomPropertySlider extends CustomPropertyCommon {
    type: 'number';
    component: 'slider';
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
}

export interface CustomPropertyRangeSlider extends CustomPropertyCommon {
    type: 'array';
    component: 'slider';
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
}

export interface CustomPropertySwitch extends CustomPropertyCommon {
    type: 'boolean';
    component: 'switch';
    defaultValue?: string;
    options?: CustomPropertyOptions;
}

export interface CustomPropertyText extends CustomPropertyCommon {
    component: 'text';
}

export interface CustomPropertyTextArea extends CustomPropertyCommon {
    type: 'string';
    component: 'textarea';
    rows?: number;
    maxlength?: number;
    defaultValue?: string;
}

export interface CustomPropertyExpression extends CustomPropertyCommon {
    type: undefined;
    component: 'expression';
    expressionType: 'dimension' | 'measure' | 'StringExpr' | 'ValueExpr' | 'ValueExpression' | 'StringExpression';
    defaultValue?: string;
}

export interface CustomPropertyItems extends CustomPropertyCommon {
    type: 'items';
    items: {
        [key: string]: CustomProperty;
    };
}

export type CustomProperty = CustomPropertyString | CustomPropertyInteger | CustomPropertyNumber
    | CustomPropertyArray | CustomPropertyButton | CustomPropertyButtonGroup
    | CustomPropertyCheckbox | CustomPropertyColorPicker | CustomPropertyDropdown
    | CustomPropertyLink | CustomProperyMedia | CustomPropertyRadio
    | CustomPropertySlider | CustomPropertyRangeSlider | CustomPropertySwitch
    | CustomPropertyText | CustomPropertyTextArea | CustomPropertyExpression
    | CustomPropertyItems;

export interface Definition {
    type: 'items';
    component: 'accordion';
    items: {
        data?: {
            uses: 'data';
        };
        dimensions?: {
            uses: 'dimensions';
            ref?: string;
            min?: number;
            max?: number;
            items?: {
                [key: string]: CustomProperty;
            }
        };
        measures?: {
            uses: 'measures';
            ref?: string;
            min?: number;
            max?: number;
            items?: {
                [key: string]: CustomProperty;
            }
        };
        sorting?: {
            uses: 'sorting';
            items?: {
                [key: string]: CustomProperty;
            }
        };
        settings?: {
            uses: 'settings';
            items?: {
                [key: string]: CustomProperty;
            }
        };
    };
}

export interface Extension {
    initialProperties: InitialProperties;
    definition: Definition;
    paint: Paint;
    support?: Support;
}

export interface Patch {
    qOp: 'add' | 'remove' | 'replace';
    qPath: string;
    qValue: string;
}

export interface BackendApi {
    abortSearch(): void;
    acceptSearch(toggleMode: boolean): void;
    applyPatches(qPatches: Patch[], qSoftPatch: boolean): Promise<any>;
    clearSelections(): void;
    clearSoftPatches(): Promise<any>;
    collapseLeft(qRow: number, qCol: number, qAll?: boolean): Promise<any>;
    collapseTop(qRow: number, qCol: number, qAll?: boolean): Promise<any>;
    eachDataRow(callback: (i: number, d: NxCellRows) => boolean | void): NxCellRows;
    expandLeft(qRow: number, qCol: number, qAll?: boolean): Promise<any>;
    expandTop(qRow: number, qCol: number, qAll?: boolean): Promise<any>;
    getData(qPages: NxPage[]): Promise<NxDataPage[]>;
    getDataRow(rownum: number): NxCellRows | null;
    getDimensionInfos(): NxDimensionInfo[];
    getMeasureInfos(): NxMeasureInfo[];
    getPivotData(qPages: NxPage[]): Promise<NxPivotPage>;
    // TODO: getProperties(): Promise<Properties>;
    // TODO: getReducedData(qPages: NxPage[], qZoomFactor: number, qReductionMode: 'N' | 'D1' | 'S' | 'C' | 'ST'): Promise<ReducedDataPage>;
    getRowCount(): number;
    getStackeddata(qPages: NxPage[], qMaxNbrCells: number): Promise<NxStackPage>;
    hasSelections(): boolean;
    save(): Promise<undefined>;
    search(term: string): void;
    // TODO: selectRange(qRanges: Ranges, qOrMode: boolean): void;
    selectValues(qDimNo: number, qValues: number[], qToggleMode: boolean): void;
    selectProperties(props: {}): Promise<any>;
}

export interface ExtensionContext {
    $element: JQuery;
    $scope: any;
    _inAnalysisState: boolean;
    _inEditState: boolean;
    _interactionState: number;
    _on: boolean;
    backendApi: BackendApi;
    // TODO: options: ExtensionOptions;
    paint: Paint;
    selectionsEnabled: boolean;
    toggleLasso(): void;

    selectValues(dimNo: number, values: number[], toggleMode: boolean): void;

    // TODO: LOTS MORE
}

export interface QDimensionCell {
    qText: string;
    qElemNumber: number;
    qState: string;
    qNum?: number;

    select(): void;
}

export interface QMeasureCell {
    qText: string;
    qNum?: number;

    getPercent(): number;
    getPercentOfMax(): number;
}

export interface QRow {
    dimensions: QDimensionCell[];
    measures: QMeasureCell[];
    cells: Array<QDimensionCell | QMeasureCell>;
}

export interface QHeader {
    qFallbackTitle: string;
    qSortIndicator: 'A' | 'B';
    isOrderedBy: boolean;
    qReverseSort: boolean;
    col: number;
    qCardinal?: number;
    qStateCounts?: { [state: string]: number };
    // field?: Field
    qMin?: number;
    qMax?: number;
    errorCode?: number;
    errorMessage?: number;

    orderBy(): void;
    reverseOrder(): void;
    selectRange(min: number, max: number, inclMin: boolean, inclMax: boolean): Promise<any>;
}

export interface ExportDataOptions {
    format: 'OOXML' | 'CSV_C' | 'CSV_T';
    filename?: string;
    state: 'A' | 'P';
    download: boolean;
}

export interface QTable {
    rows: QRow[];
    headers: QHeader[];
    totals: QMeasureCell[];
    rowCount: number;
    colCount: number;

    exportData(options: ExportDataOptions, callback: (url: string) => void): void;
    getColByName(fld: string): number | undefined;
    getMoreData(): void;
}

export interface Variable {
    qContent: {
        qIsNum: boolean;
        qString: string;
    };
}

export interface QFieldValue {
    qText: string;
    qElemNumber: number;
    qState: any; // TODO
    qNum?: string;
    qFrequency?: string;

    select(toggle?: boolean, softlock?: boolean): Promise<any>;
}

export interface GetDataOptions {
    rows: number;
    frequencyMode: 'V' | 'P' | 'R' | 'N';
}

export interface QField {
    rows?: QFieldValue[];
    rowCount?: number;
    qStateCounts?: { [state: string]: number; };

    clear(): Promise<any>;
    clearOther(softlock: boolean): Promise<any>;
    getData(options: GetDataOptions): this;
    getMoreData(): this;
    lock(): Promise<any>;
    select(values: number[], toggle?: boolean, softlock?: boolean): Promise<any>;
    selectAll(softlock?: boolean): Promise<any>;
    selectAlternative(softlock?: boolean): Promise<any>;
    selectExcluded(softlock?: boolean): Promise<any>;
    selectMatch(match: string, softlock?: boolean): Promise<any>;
    selectPossible(softlock?: boolean): Promise<any>;
    selectValues(values: QFieldValue[], toggle?: boolean, softlock?: boolean): Promise<any>;
    toggleSelect(match: string, softlock?: boolean): Promise<any>;
    unlock(): Promise<any>;
}

export type ListTypes = 'FieldList' | 'MeasureList' | 'DimensionList' | 'BookmarkList'
    | 'Selectionobject' | 'SnapshotList' | 'MediaList' | 'sheet'
    | 'Materobject' | 'VariableList' | 'story';

export interface App {
    addAlternateState(qStateName: string): Promise<any>;
    back(): Promise<any>;
    clearrAll(lockedAlso?: boolean, state?: string): Promise<any>;
    close(): void;
    createCube(qHyperCubeDef: HyperCubeDef, callback?: (hypercube: HyperCube) => void): Promise<any>; // TODO: Returns Promise<object Model>
    // TODO: createGenericobject
    // TODO: createList(qListobjectDef: ListobjectDef, callback?: (hypercube: TODO) => void): Promise<any>;
    // TODO: createTable(dimensions: Array<string | NxDimension>, measures: Array<string | NxMeasure>, options?: object): QTable;
    destroySession(id: string): Promise<any>;
    doReload(qMode?: '0' | '1' | '2', qPartial?: boolean, qDebug?: boolean): Promise<any>;
    doSave(qFileName?: string): Promise<any>;
    field(field: string, state?: string): QField;
    forward(): Promise<any>;
    getAppLayout(callback: (layout: Layout) => void): Promise<any>;
    // getAppobjectList(type: 'sheet' | 'masterobject', callback: (list: ))
    getFullPropertyTree(id: string): Promise<any>;
    // getList(type: ListTypes, callback): Promise<any>;
    getobject(elem?: HTMLElement | string, id?: string | 'CurrentSelections', options?: { noInteraction?: boolean, noSelections?: boolean }): Promise<any>;
    getobjectProperties(id: string): Promise<any>;
    getSnapshot(elem?: HTMLElement | string, id?: string): Promise<any>;
    lockAll(state?: string): Promise<any>;
    removeAlternateState(qStateName: string): Promise<any>;
    // searchResults(qTerms: any[], qPage)
    // searchSuggest(qTerms: any[], qOptions: { qSearchFields: any[] }, ): Promise<any>;
    // selectAssociations
    // selectionState(state?: string): QSelectionState;
    unlockAll(state?: string): Promise<any>;

    variable: {
        getContent(variable: string, callback: (value: Variable, app: App) => void): Promise<any>;
        setContent(variable: string, value: string): void;
    };
}

export function callRepository(path: string, method: string, body: string): Promise<any>;
export function currApp(reference: object): App;

export interface GetAppConfig {
    host?: string;
    port: string | number;
    prefix?: string;
    isSecure?: boolean;
    openWithoutData?: boolean;
    identity?: string;
}

export function getAppList(callback: App[], config: GetAppConfig): void;

// TODO: fix any
export function getExtensionList(callback: any[]): Promise<any>;

export type Global = any;

export interface GetGlobalConfig {
    host: string;
    port: string;
    prefix: string;
    isSecure: boolean;
    identity: string;
}

export function getGlobal(config: GetGlobalConfig): Global;
export function openApp(appId: string, config: GetAppConfig): App;
export function registerExtension(id: string, impl: Extension, metadata: object): void;
export function resize(ID?: string): void;

export namespace LanguageCodes {
    type German = 'de' | 'de-DE';
    type English = 'en' | 'en-US';
    type Spanish = 'es' | 'es-ES';
    type French = 'fr' | 'fr-FR';
    type Italian = 'it' | 'it-IT';
    type Japanese = 'ja' | 'ja-JP';
    type Korean = 'ko' | 'ko-KR';
    type Dutch = 'nl' | 'nl-NL';
    type Polish = 'pl' | 'pl-PL';
    type BrazilianPortuguese = 'pt' | 'pt-BR';
    type Russian = 'ru' | 'ru-RU';
    type Swedish = 'sv' | 'sv-SE';
    type Turkish = 'ts' | 'ts-TR';
    type SimplifiedChinese = 'zh-CN';
    type TraditionalChinese = 'zh-TW';

    type ALL = German | English | Spanish | French | Italian | Japanese
        | Korean | Dutch | Polish | BrazilianPortuguese | Russian
        | Swedish | Turkish | SimplifiedChinese | TraditionalChinese;
}
export function setLanguage(lang: LanguageCodes.ALL): void;

export interface Error {
    code: any; // TODO: Find out if String or number
    message: string;
}
export function setOnError(onError: (error: Error) => void, onWarning: (warning: string) => void): void;
export function table(ext: object, path?: string): void;
