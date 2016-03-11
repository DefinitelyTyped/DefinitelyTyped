// Type definitions for DevExpress ASP.NET web controls (Classic and MVC)
// Project: https://www.devexpress.com/Products/NET/Controls/ASP/MVC/
// Definitions by: Sheron Benedict <https://github.com/INullable>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// DX Globals
declare var ASPx: DevExpress.Web.Scripts.ASPxStatic;
declare var ASPxClientControl: DevExpress.Web.Scripts.ASPxClientControlStatic;
declare var ASPxClientUtils: DevExpress.Web.Scripts.ASPxClientUtils;
declare var ASPxClientGlobalEvents: DevExpress.Web.Scripts.ASPxClientGlobalEvents;
declare var ASPxClientEdit: DevExpress.Web.Scripts.ASPxClientEditStatic;

declare module DevExpress.Web.Scripts {
    export interface ASPxStatic {
        RunStartupScripts(): void;
    }

    export interface ASPxClientControlStatic {
        GetControlCollection(): ASPxClientControlCollection;
        AdjustControls(): void;
    }

    export interface ASPxClientUtils {
        AttachEventToElement(element: HTMLElement, eventName: string, method: Function): void;
        IsExists(element: ASPxClientControl): boolean;
        GetEventX(htmlEvent: Event): number;
        GetEventY(htmlEvent: Event): number;
    }

    export interface ASPxClientGlobalEvents {
        AddControlsInitializedEventHandler(handler: (sender?: any, e?: ASPxClientControlsInitializedEventArgs) => void): void;
    }

    export interface ASPxClientEditStatic {
        AreEditorsValid(): boolean;
        AreEditorsValid(container: HTMLElement, validationGroup?: string, checkInvisibleEditors?: boolean): boolean;

        ClearEditorsInContainer(container: HTMLElement, validationGroup?: string, clearInvisibleEditors?: boolean): void;
        ClearGroup(validationGroup: string, clearInvisibleEditors?: boolean): void;

        ValidateEditorsInContainer(container: HTMLElement, validationGroup?: string, validateInvisibleEditors?: boolean): boolean;
        ValidateGroup(validationGroup: string, validateInvisibleEditors?: boolean): boolean;
    }

    export interface ASPxClientControlsInitializedEventArgs {
        isCallback: boolean;
    }

    export interface ASPxClientGridViewBatchEditApi {
        StartEdit(visibleIndex: number, columnIndex: number): void;
        SetCellValue(visibleIndex: number, columnFieldNameOrId: string, value: any, displayText?: string): void;
        EndEdit(): void;
        HasChanges(visibleIndex?: number, columnFieldNameOrId?: string): boolean;
        ValidateRow(visibleIndex: number): boolean;
        ValidateRows(): boolean;
    }

    export interface ASPxClientControlCollection {
        GetByName(name: string): ASPxClientControl;
        elements: ASPxClientControl[];
        Remove(control: ASPxClientControl): void;
        ForEachControl(processFunc: (control: ASPxClientControl) => void, context?: any): void;
    }

    export interface ASPxClientControl {
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
    
    export interface ASPxClientEditBase extends ASPxClientControl {
        GetCaption(): string;
        SetCaption(caption: string): void;

        GetEnabled(): boolean;
        SetEnabled(enabled: boolean): any;

        GetValue(): any;
        SetValue(value: any): any;
    }

    export interface ASPxClientEdit extends ASPxClientEditBase {
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

    export interface ASPxClientTextEdit extends ASPxClientEdit {
    }

    export interface ASPxClientTextBoxBase extends ASPxClientTextEdit {
    }

    export interface ASPxClientButtonEditBase extends ASPxClientTextBoxBase {
    }

    export interface ASPxClientDropDownEditBase extends ASPxClientButtonEditBase {
    }

    export interface ASPxClientComboBox extends ASPxClientDropDownEditBase {
        GetSelectedIndex(): number;
        SetSelectedIndex(index: number): void;

        SelectedIndexChanged: ASPxClientEvent;
    }

    export interface ASPxClientListEdit extends ASPxClientEdit {
        GetSelectedIndex(): number;
        SetSelectedIndex(index: number): void;
    }

    export interface ASPxClientCheckListBase extends ASPxClientListEdit {
        GetItem(index: number): any;
        GetItemCount(): number;
    }

    export interface ASPxClientDockZone extends ASPxClientControl {
        // Methods
        IsVertical(): boolean;
    }

    export interface ASPxDockManager {
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

    export interface ASPxClientGenericEvent<S extends ASPxClientControl, E extends ASPxClientEventArgs> {
        AddHandler(handler: (s: S, e: E) => void): void;
        RemoveHandler(handler: (s: S, e: E) => void): void;
        ClearHandlers(): void;
    }

    export interface ASPxClientEvent extends ASPxClientGenericEvent<ASPxClientControl, ASPxClientEventArgs> {
    }

    export interface ASPxClientEventArgs {
    }

    export interface ASPxClientCancelEventArgs {
        cancel: boolean;
    }

    export interface ASPxClientGridViewBatchEditStartEditingEventArgs extends ASPxClientCancelEventArgs {
        focusedColumn: ASPxClientGridViewColumn;
        rowValues: ASPxClientGridViewRowValues;
        visibleIndex: number;
    }

    export interface ASPxClientGridViewRowValues {
        [columnIndex: string]: ASPxClientGridViewRowValue;
    }

    export interface ASPxClientGridViewRowValue {
        value: string;
        text: string;
    }

    export interface ASPxClientBeginCallbackEventArgs extends ASPxClientEventArgs {
        // Properties
        command: any;
        customArgs: any;
    }

    export interface ASPxClientEndCallbackEventArgs extends ASPxClientEventArgs {
    }

    export interface ASPxClientPopupControlBase extends ASPxClientControl {
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

    export interface ASPxClientDockPanel extends ASPxClientPopupControlBase {
        // Properties
        panelUID: string;

        // Methods
        MakeFloat(): any;
        MakeFloat(x: number, y: number): any;

        ShowAtPos(x: number, y: number): any;
    }

    export interface ASPxPopupControl extends ASPxClientPopupControlBase {
        CallbackRouteValues: any;
    }

    export interface ASPxClientLoadingPanel extends ASPxClientControl {
        // Methods
        Show(): void;
        ShowInElement(htmlElement: HTMLElement): any;
        Hide(): void;
    }

    export interface ASPxClientCheckBox extends ASPxClientControl {
        // Methods
        GetChecked(): boolean;
        GetCheckState(): string;

        SetChecked(isChecked: boolean): any;
        SetCheckState(checkState: string): any;

        // Events
        CheckedChanged: ASPxClientGenericEvent<ASPxClientCheckBox, ASPxClientEventArgs>;
    }

    export interface ASPxClientRadioButton extends ASPxClientCheckBox {
    }

    export interface ASPxClientLabel {
        // Methods
        SetText(text: String): void;
    }

    export enum CheckState {
        Checked,

        Indeterminate,

        Unchecked
    }

    export interface ASPxClientTab extends ASPxClientControl {
        name: string;
        index: number;
        tabControl: ASPxClientPageControl;
    }

    export interface ASPxClientPageControl extends ASPxClientControl {
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

    export interface ASPxClientTabControlTabCancelEventArgs extends ASPxClientEventArgs {
        cancel: boolean;
        processOnServer: boolean;
        reloadContentOnCallback: boolean;
        tab: ASPxClientTab;
    }

    export interface ASPxClientTabControlTabEventArgs extends ASPxClientEventArgs {
        tab: ASPxClientTab;
    }

    export interface ASPxClientCallbackPanel extends ASPxClientControl {
        // Methods
        PerformCallback(): any;

        // Events
        BeginCallback: ASPxClientEvent;
        CallbackError: ASPxClientEvent;
        EndCallback: ASPxClientEvent;
    }

    export interface ASPxClientCallbackErrorEventArgs extends ASPxClientEventArgs {
        handled: boolean;
        message: string;
    }

    export interface ASPxClientProcessingModeEventArgs extends ASPxClientEventArgs {
        processOnServer: boolean;
    }
    
    export interface ASPxClientDateEdit extends ASPxClientEdit {
        GetDate(): Date;
        SetDate(date: Date): any;
    }

    export interface ASPxClientEditValidationEventArgs {
        errorText: string;
        isValid: boolean;
        value: any;
    }

    export interface ASPxClientGridViewColumn {
        fieldName: string;
        index: number;
        name: string;
        visible: boolean;
    }

    export interface ASPxClientGridView extends ASPxClientControl {
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

    export interface ASPxClientGridViewColumnCancelEventArgs extends ASPxClientCancelEventArgs {
        column: ASPxClientGridViewColumn;
    }

    export interface ASPxClientGridViewRowClickEventArgs {
        cancel: boolean;
        htmlEvent: Event;
        visibleIndex: number;
    }

    export interface ASPxClientGridViewSelectionEventArgs {
        isAllRecordsOnPage: boolean;
        isChangedOnServer: boolean;
        isSelected: boolean;
        processOnServer: boolean;
        visibleIndex: number;
    }

    export interface ASPxClientGridViewCustomButtonEventArgs {
        buttonID: string;
        processOnServer: boolean;
        visibleIndex: number;
    }

    export interface ASPxClientGridViewContextMenuEventArgs {
        htmlEvent: Event;
        index: number;
        objectType: string;
    }

    export interface ASPxClientMenuItemClickEventArgs extends ASPxClientProcessingModeEventArgs {
        htmlElement: HTMLElement;
        htmlEvent: Event;
        item: ASPxClientMenuItem;
    }

    export interface ASPxClientPopupMenu extends ASPxClientMenuBase {
        // Methods
        ShowAtElement(htmlElement: HTMLElement): any;
        ShowAtElementByID(id: string): any;
        ShowAtPos(x: number, y: number): any;
    }

    export interface ASPxClientMenuItem {
        index: number;
        menu: ASPxClientMenuBase;
        name: string;
        parent: ASPxClientMenuItem;

        GetEnabled(): boolean;
        SetEnabled(enable: boolean): any;
    }

    export interface ASPxClientMenuBase extends ASPxClientControl {
        // Methods
        GetItemByName(name: string): ASPxClientMenuItem;

        // Events
        ItemClick: ASPxClientGenericEvent<ASPxClientMenuBase, ASPxClientMenuItemClickEventArgs>;
        PopUp: ASPxClientEvent;
    }

    export interface ASPxClientRadioButtonList extends ASPxClientCheckListBase {
    }
}

declare module DevExpress.XtraCharts.Web.Scripts {
    export interface ASPxClientWebChartElement {
        chart: ASPxClientWebChart;
    }

    export interface ASPxClientWebChartRequiredElement extends ASPxClientWebChartElement {
    }

    export interface ASPxClientWebChart extends ASPxClientWebChartRequiredElement {
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

    export interface ASPxClientWebChartHitInfo {
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

    export interface ASPxClientSeriesPoint extends ASPxClientWebChartRequiredElement {
        argument: any;
        color: any;
        percentValue: any;
        series: any;
        toolTipHint: any;
        toolTipText: any;
        values: Object[];
    }

    export interface ASPxClientWebChartControlHotTrackEventArgs extends DevExpress.Web.Scripts.ASPxClientProcessingModeEventArgs {
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

    export interface ASPxClientWebChartControl extends DevExpress.Web.Scripts.ASPxClientControl {
        // Methods
        SetCursor(cursor: string): any;
        InCallback(): boolean;
        PerformCallback(): void;

        // Events
        BeginCallback: DevExpress.Web.Scripts.ASPxClientEvent;
        EndCallback: DevExpress.Web.Scripts.ASPxClientEvent;
        ObjectHotTracked: DevExpress.Web.Scripts.ASPxClientEvent;
        ObjectSelected: DevExpress.Web.Scripts.ASPxClientEvent;
    }
}