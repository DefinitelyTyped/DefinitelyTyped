// Type definitions for DevExpress ASP.NET MVC web controls.
// Project: https://www.devexpress.com/Products/NET/Controls/ASP/MVC/
// Definitions by: Sheron Benedict <https://github.com/INullable>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// DX Globals
declare var ASPx: ASPxStatic;
declare var ASPxClientControl: ASPxClientControlStatic;
declare var ASPxClientUtils: ASPxClientUtils;
declare var MVCxClientGlobalEvents: MVCxClientGlobalEvents;
declare var ASPxClientEdit: ASPxClientEditStatic;

interface ASPxStatic {
    RunStartupScripts(): void;
}

interface ASPxClientControlsInitializedEventArgs {
    isCallback: boolean;
}

interface ASPxClientGridViewBatchEditApi {
    StartEdit(visibleIndex: number, columnIndex: number): void;
    SetCellValue(visibleIndex: number, columnFieldNameOrId: string, value: any, displayText?: string): void;
    EndEdit(): void;
    HasChanges(visibleIndex?: number, columnFieldNameOrId?: string): boolean;
    ValidateRow(visibleIndex: number): boolean;
    ValidateRows(): boolean;
}

interface MVCxClientGlobalEvents {
    AddControlsInitializedEventHandler(handler: (sender?: any, e?: ASPxClientControlsInitializedEventArgs) => void): void;
}

interface ASPxClientControlCollection {
    GetByName(name: string): ASPxClientControl;
    elements: ASPxClientControl[];
    Remove(control: ASPxClientControl): void;
    ForEachControl(processFunc: (control: ASPxClientControl) => void, context?: any): void;
}

interface ASPxClientControl {
    // Properties
    name: string;

    // Methods
    AdjustControl(): void;
    GetMainElement(): HTMLElement;
    GetVisible(): boolean;
    SetVisible(visibility: boolean): void;
    InCallback(): boolean;
    SetWidth(height: number): void;
    SetHeight(height: number): void;

    // Events
    Init: ASPxClientEvent;
}

interface ASPxClientControlStatic {
    GetControlCollection(): ASPxClientControlCollection;
    AdjustControls(): void;
}

interface ASPxClientEditBase extends ASPxClientControl {
    GetCaption(): string;
    SetCaption(caption: string): void;

    GetEnabled(): boolean;
    SetEnabled(enabled: boolean): any;

    GetValue(): any;
    SetValue(value: any): any;
}

interface ASPxClientEdit extends ASPxClientEditBase {
    // Methods
    GetInputElement(): any;

    ValidateGroup(groupName: string): any;
    Validate(): void;
    SetErrorText(errorText: string): any;

    GetIsValid(): boolean;
    SetIsValid(isValid: boolean): any;

    // Events
    Validation: ASPxClientEvent;
    ValueChanged: ASPxClientEvent;
}

interface ASPxClientEditStatic {
    AreEditorsValid(): boolean;
    AreEditorsValid(container: HTMLElement, validationGroup?: string, checkInvisibleEditors?: boolean): boolean;

    ClearEditorsInContainer(container: HTMLElement, validationGroup?: string, clearInvisibleEditors?: boolean): void;
    ClearGroup(validationGroup: string, clearInvisibleEditors?: boolean): void;

    ValidateEditorsInContainer(container: HTMLElement, validationGroup?: string, validateInvisibleEditors?: boolean): boolean;
    ValidateGroup(validationGroup: string, validateInvisibleEditors?: boolean): boolean;
}

interface ASPxClientTextEdit extends ASPxClientEdit {
}

interface ASPxClientTextBoxBase extends ASPxClientTextEdit {
}

interface ASPxClientButtonEditBase extends ASPxClientTextBoxBase {
}

interface ASPxClientDropDownEditBase extends ASPxClientButtonEditBase {
}

interface ASPxClientComboBox extends ASPxClientDropDownEditBase {
    GetSelectedIndex(): number;
    SetSelectedIndex(index: number): void;

    SelectedIndexChanged: ASPxClientEvent;
}

interface ASPxClientListEdit extends ASPxClientEdit {
    GetSelectedIndex(): number;
    SetSelectedIndex(index: number): void;
}

interface ASPxClientCheckListBase extends ASPxClientListEdit {
    GetItem(index: number): any;
    GetItemCount(): number;
}

interface ASPxClientDockZone extends ASPxClientControl {
    // Methods
    IsVertical(): boolean;
}

interface ASPxDockManager {
    // Events
    AfterDock: ASPxClientEvent;
    AfterFloat: ASPxClientEvent;
    PanelClosing: ASPxClientEvent;
    EndPanelDragging: ASPxClientEvent;

    // Methods
    GetPanels(): ASPxClientDockPanel[];
    GetPanels(filterPredicate: Function): ASPxClientDockPanel[];
    GetPanelByUID(uniqueId: string): ASPxClientDockPanel;
}

interface ASPxClientGenericEvent<S extends ASPxClientControl, E extends ASPxClientEventArgs> {
    AddHandler(handler: (s: S, e: E) => void): void;
    RemoveHandler(handler: (s: S, e: E) => void): void;
    ClearHandlers(): void;
}

interface ASPxClientEvent extends ASPxClientGenericEvent<ASPxClientControl, ASPxClientEventArgs> {
}

interface ASPxClientEventArgs {
}

interface ASPxClientCancelEventArgs {
    cancel: boolean;
}

interface ASPxClientGridViewBatchEditStartEditingEventArgs extends ASPxClientCancelEventArgs {
    focusedColumn: ASPxClientGridViewColumn;
    rowValues: ASPxClientGridViewRowValues;
    visibleIndex: number;
}

interface ASPxClientGridViewRowValues {
    [columnIndex: string]: ASPxClientGridViewRowValue;
}

interface ASPxClientGridViewRowValue {
    value: string;
    text: string;
}

interface ASPxClientBeginCallbackEventArgs extends ASPxClientEventArgs {
    // Properties
    command: any;
    customArgs: any;
}

interface ASPxClientEndCallbackEventArgs extends ASPxClientEventArgs {
}

interface ASPxClientPopupControlBase extends ASPxClientControl {
    // Properties
    IsVisible: boolean;

    // Methods

    Show(): void;
    Hide(): void;
    PerformCallback(): void;

    // Events
    BeginCallback: ASPxClientEvent;
    EndCallback: ASPxClientEvent;
    Closing: ASPxClientEvent;
}

interface ASPxClientDockPanel extends ASPxClientPopupControlBase {
    // Properties
    panelUID: string;

    // Methods
    MakeFloat(): any;
    MakeFloat(x: number, y: number): any;

    ShowAtPos(x: number, y: number): any;
}

interface ASPxPopupControl extends ASPxClientPopupControlBase {
    CallbackRouteValues: any;
}

interface ASPxClientLoadingPanel extends ASPxClientControl {
    // Methods
    Show(): void;
    ShowInElement(htmlElement: HTMLElement): any;
    Hide(): void;
}

interface ASPxClientCheckBox extends ASPxClientControl {
    // Methods
    GetChecked(): boolean;
    GetCheckState(): string;

    SetChecked(isChecked: boolean): any;
    SetCheckState(checkState: string): any;

    // Events
    CheckedChanged: ASPxClientGenericEvent<ASPxClientCheckBox, ASPxClientEventArgs>;
}

interface ASPxClientRadioButton extends ASPxClientCheckBox {
}

interface ASPxClientLabel {
    // Methods
    SetText(text: String): void;
}

declare enum CheckState {
    Checked,

    Indeterminate,

    Unchecked
}

interface ASPxClientTab extends ASPxClientControl {
    name: string;
    index: number;
    tabControl: ASPxClientPageControl;
}

interface ASPxClientPageControl extends ASPxClientControl {
    // Methods
    AdjustSize(): void;
    GetActiveTab(): ASPxClientTab;
    GetActiveTabIndex(): number;
    SetActiveTabIndex(index: number): any;

    GetTabByName(name: string): ASPxClientTab;
    GetTab(index: number): ASPxClientTab;

    SetTabContentHTML(tab: ASPxClientTab, html: string): any;

    // Events
    ActiveTabChanging: ASPxClientEvent;
    ActiveTabChanged: ASPxClientEvent;
}

interface ASPxClientTabControlTabCancelEventArgs extends ASPxClientEventArgs {
    cancel: boolean;
    processOnServer: boolean;
    reloadContentOnCallback: boolean;
    tab: ASPxClientTab;
}

interface ASPxClientTabControlTabEventArgs extends ASPxClientEventArgs {
    tab: ASPxClientTab;
}

interface ASPxClientCallbackPanel extends ASPxClientControl {
    // Methods
    PerformCallback(): any;

    // Events
    BeginCallback: ASPxClientEvent;
    CallbackError: ASPxClientEvent;
    EndCallback: ASPxClientEvent;
}

interface ASPxClientCallbackErrorEventArgs extends ASPxClientEventArgs {
    handled: boolean;
    message: string;
}

interface ASPxClientProcessingModeEventArgs extends ASPxClientEventArgs {
    processOnServer: boolean;
}

interface ASPxClientWebChartElement {
    chart: ASPxClientWebChart;
}

interface ASPxClientWebChartRequiredElement extends ASPxClientWebChartElement {
}

interface ASPxClientWebChart extends ASPxClientWebChartRequiredElement {
    annotations: any;
    appearanceName: any;
    chart: any;
    chartControl: any;
    crosshairOptions: any;
    cssPostfix: any;
    diagram: any;
    legend: any;
    paletteName: any;
    selectionMode: any;
    series: any;
    showCrosshair: any;
    showPointToolTip: any;
    showSeriesToolTip: any;
    titles: any;
    toolTipController: any;
    toolTipPosition: any;
}

interface ASPxClientWebChartHitInfo {
    annotation: any;
    axis: any;
    axisLabelItem: any;
    axisTitle: any;
    chart: any;
    chartTitle: any;
    constantLine: any;
    diagram: any;
    hyperlink: any;
    inAnnotation: boolean;
    inAxis: boolean;
    inAxisLabelItem: boolean;
    inAxisTitle: boolean;
    inChart: boolean;
    inChartTitle: boolean;
    inConstantLine: boolean;
    inDiagram: boolean;
    indicator: boolean;
    inHyperlink: boolean;
    inIndicator: boolean;
    inLegend: boolean;
    inNonDefaultPane: boolean;
    inSeries: boolean;
    inSeriesLabel: boolean;
    inSeriesPoint: boolean;
    inSeriesTitle: boolean;
    legend: any;
    nonDefaultPane: any;
    series: any;
    seriesLabel: any;
    seriesPoint: any;
    seriesTitle: any;
}

interface ASPxClientSeriesPoint extends ASPxClientWebChartRequiredElement {
    argument: any;
    color: any;
    percentValue: any;
    series: any;
    toolTipHint: any;
    toolTipText: any;
    values: Object[];
}

interface ASPxClientWebChartControlHotTrackEventArgs extends ASPxClientProcessingModeEventArgs {
    absoluteX: number;
    absoluteY: number;
    additionalHitObject: ASPxClientSeriesPoint;
    cancel: boolean;
    chart: ASPxClientWebChart;
    hitInfo: ASPxClientWebChartHitInfo;
    hitObject: any;
    htmlElement: any;
    x: number;
    y: number;
}

interface ASPxClientWebChartControl extends ASPxClientControl {
    // Methods
    SetCursor(cursor: string): any;
    InCallback(): boolean;
    PerformCallback(): void;

    // Events
    BeginCallback: ASPxClientEvent;
    EndCallback: ASPxClientEvent;
    ObjectHotTracked: ASPxClientEvent;
    ObjectSelected: ASPxClientEvent;
}

interface ASPxClientDateEdit extends ASPxClientEdit {
    GetDate(): Date;
    SetDate(date: Date): any;
}

interface ASPxClientEditValidationEventArgs {
    errorText: string;
    isValid: boolean;
    value: any;
}

interface ASPxClientUtils {
    AttachEventToElement(element: HTMLElement, eventName: string, method: Function): void;
    IsExists(element: ASPxClientControl): boolean;
    GetEventX(htmlEvent: Event): number;
    GetEventY(htmlEvent: Event): number;
}

interface ASPxClientGridViewColumn {
    fieldName: string;
    index: number;
    name: string;
    visible: boolean;
}

interface ASPxClientGridView extends ASPxClientControl {
    // Properties
    batchEditApi: ASPxClientGridViewBatchEditApi;
    VisibleRowCount: number;

    // Methods
    visibleStartIndex: number;
    GetVisibleRowsOnPage(): number;

    SetFocusedRowIndex(visibleIndex: number): void;
    GetFocusedRowIndex(): number;

    GetRowKey(visibleIndex: number): string;
    GetRowValues(visibleIndex: number, fieldNames: string, onCallback: Function): void;

    StartEditRowByKey(key: any): void;
    UpdateEdit(): void;
    CancelEdit(): void;

    SelectRowOnPage(visibleIndex: number): void;
    SelectRows(visibleIndices: Int32Array): void;
    SelectRowsByKey(keys: Object[]): void;
    GetColumn(columnIndex: number): ASPxClientGridViewColumn;
    GetColumnByField(columnFieldName: string): ASPxClientGridViewColumn;

    GetSelectedRowCount(): number;
    GetSelectedKeysOnPage(): Object[];
    IsRowSelectedOnPage(visibleIndex: number): boolean;
    UnselectRows(): void;

    AddNewRow(): void;
    DeleteRow(visibleIndex: number): void;
    DeleteRowByKey(key: any): void;

    PerformCallback(args?: string): void;
    GetValuesOnCustomCallback(args: any, onCompleteCallback: Function): any;
    GetSelectedFieldValues(fieldNames: string, onCallback: (result: Object[]) => void): any;

    Refresh(): void;

    // Events
    BeginCallback: ASPxClientEvent;
    EndCallback: ASPxClientGenericEvent<ASPxClientGridView, ASPxClientEventArgs>;
    CallbackError: ASPxClientGenericEvent<ASPxClientGridView, ASPxClientCallbackErrorEventArgs>;
    RowClick: ASPxClientGenericEvent<ASPxClientGridView, ASPxClientGridViewRowClickEventArgs>;
    RowDblClick: ASPxClientGenericEvent<ASPxClientGridView, ASPxClientGridViewRowClickEventArgs>;
    ContextMenu: ASPxClientGenericEvent<ASPxClientGridView, ASPxClientGridViewContextMenuEventArgs>;
    RowDeleting: ASPxClientEvent;
    SelectionChanged: ASPxClientGenericEvent<ASPxClientGridView, ASPxClientGridViewSelectionEventArgs>;
    CustomButtonClick: ASPxClientEvent;
    ColumnResized: ASPxClientEvent;
    BatchEditStartEditing: ASPxClientGenericEvent<ASPxClientGridView, ASPxClientGridViewBatchEditStartEditingEventArgs>;
    BatchEditEndEditing: ASPxClientEvent;
    BatchEditRowValidating: ASPxClientEvent;
    ColumnResizing: ASPxClientGenericEvent<ASPxClientGridView, ASPxClientGridViewColumnCancelEventArgs>;
    BatchEditConfirmShowing: ASPxClientGenericEvent<ASPxClientGridView, ASPxClientGridViewBatchEditStartEditingEventArgs>;
}

interface ASPxClientGridViewColumnCancelEventArgs extends ASPxClientCancelEventArgs {
    column: ASPxClientGridViewColumn;
}

interface ASPxClientGridViewRowClickEventArgs {
    cancel: boolean;
    htmlEvent: Event;
    visibleIndex: number;
}

interface ASPxClientGridViewSelectionEventArgs {
    isAllRecordsOnPage: boolean;
    isChangedOnServer: boolean;
    isSelected: boolean;
    processOnServer: boolean;
    visibleIndex: number;
}

interface ASPxClientGridViewCustomButtonEventArgs {
    buttonID: string;
    processOnServer: boolean;
    visibleIndex: number;
}

interface ASPxClientGridViewContextMenuEventArgs {
    htmlEvent: Event;
    index: number;
    objectType: string;
}

interface ASPxClientMenuItemClickEventArgs extends ASPxClientProcessingModeEventArgs {
    htmlElement: HTMLElement;
    htmlEvent: Event;
    item: ASPxClientMenuItem;
}

interface ASPxClientPopupMenu extends ASPxClientMenuBase {
    // Methods
    ShowAtElement(htmlElement: HTMLElement): any;
    ShowAtElementByID(id: string): any;
    ShowAtPos(x: number, y: number): any;
}

interface ASPxClientMenuItem {
    index: number;
    menu: ASPxClientMenuBase;
    name: string;
    parent: ASPxClientMenuItem;

    GetEnabled(): boolean;
    SetEnabled(enable: boolean): any;
}

interface ASPxClientMenuBase extends ASPxClientControl {
    // Methods
    GetItemByName(name: string): ASPxClientMenuItem;

    // Events
    ItemClick: ASPxClientGenericEvent<ASPxClientMenuBase, ASPxClientMenuItemClickEventArgs>;
    PopUp: ASPxClientEvent;
}

interface ASPxClientRadioButtonList extends ASPxClientCheckListBase {
}

