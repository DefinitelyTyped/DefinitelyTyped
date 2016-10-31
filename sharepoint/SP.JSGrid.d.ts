// Type definitions for SharePoint JSOM 
// Project: https://github.com/gandjustas/sptypescript
// Definitions by: Stanislav Vyshchepan <http://blog.gandjustas.ru>, Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../microsoft-ajax/Microsoft.Ajax.d.ts" />
declare namespace SP {
    export namespace JsGrid {

        export enum TextDirection {
            Default, //0,
            RightToLeft, //1,
            LeftToRight //2
        }

        export enum PaneId {
            MainGrid, //0,
            PivotedGrid, //1,
            Gantt //2
        }

        export enum PaneLayout {
            GridOnly, //0,
            GridAndGantt, //1,
            GridAndPivotedGrid //2

        }
        export enum EditMode {
            ReadOnly, //0,
            ReadWrite, //1,
            ReadOnlyDefer, //2,
            ReadWriteDefer, //3,
            Defer //4
        }

        export enum GanttDrawBarFlags {
            LeftLink, //0x01,
            RightLink //0x02

        }
        export enum GanttBarDateType {
            Start, //0,
            End //1
        }

        export enum ValidationState {
            Valid, //0,
            Pending, //1,
            Invalid //2
        }

        export enum HierarchyMode {
            None, //0,
            Standard, //1,
            Grouping //2
        }

        export enum EditActorWriteType {
            Both, //1,
            LocalizedOnly, //2,
            DataOnly, //3,
            Either //4
        }

        export enum EditActorReadType {
            Both, //1,
            LocalizedOnly, //2,
            DataOnly //3
        }

        export enum EditActorUpdateType {
            Committed, //0,
            Uncommitted, //1
        }

        export enum SortMode {
            Ascending, //1,
            Descending, //-1,
            None //0
        }

        export class RowHeaderStyleId {
            static Transfer: string; //'Transfer',
            static Conflict: string; //'Conflict'

        }

        export class RowHeaderAutoStyleId {
            static Dirty: string; //'Dirty',
            static Error: string; //'Error',
            static NewRow: string; //'NewRow'
        }

        export enum RowHeaderStatePriorities {
            Dirty, //10,
            Transfer, //30,
            CellError, //40,
            Conflict, //50,
            RowError, //60,
            NewRow //90
        }

        export enum UpdateSerializeMode {
            Cancel, //0,
            Default, //1,
            PropDataOnly, //2,
            PropLocalizedOnly, //3,
            PropBoth //4
        }

        export enum UpdateTrackingMode {
            PropData, //2,
            PropLocalized, //3,
            PropBoth //4
        }

        export class UserAction {
            static UserEdit: string; //'User Edit':string;
            static DeleteRecord: string; //'Delete Record':string;
            static InsertRecord: string; //'Insert Record':string;
            static Indent: string; //'Indent':string;
            static Outdent: string; //'Outdent':string;
            static Fill: string; //'Fill':string;
            static Paste: string; //'Paste':string;
            static CutPaste: string; //'Cut/Paste'
        }

        export enum ReadOnlyActiveState {
            ReadOnlyActive, //0,
            ReadOnlyDisabled, //1
        }

        export interface IValue {
            data?: any;
            localized?: string;
        }
        export enum SelectionTypeFlags {
            MultipleCellRanges,
            MultipleRowRanges,
            MultipleColRanges
        }


        export class JsGridControl {
            constructor(parentNode: HTMLElement, bShowLoadingBanner: boolean);
            /** Returns true if Init method has been executed successfully */
            IsInitialized(): boolean;
            /** Replaces the control TableCache object with the provided one */
            ResetData(cache: SP.JsGrid.TableCache): void;
            /** Initialize the control */
            Init(parameters: SP.JsGrid.JsGridControl.Parameters): void;
            Cleanup(): void;
            /** Removes all event handlers and markup associated with the control */
            Dispose(): void;

            // todo
            NotifyDataAvailable(): void;
            NotifySave(): void;
            NotifyHide(): void;
            NotifyResize(): void;
            ClearTableView(): void;
            HideInitialLoadingBanner(): void;
            ShowInitialGridErrorMsg(errorMsg: string): void;
            ShowGridErrorMsg(errorMsg: string): void;
            LaunchPrintView(
                additionalScriptFiles: any,
                beforeInitFnName: any,
                beforeInitFnArgsObj: any,
                title: string,
                bEnableGantt: boolean,
                optGanttDelegateNames?: any,
                optInitTableViewParamsFnName?: any,
                optInitTableViewParamsFnArgsObj?: any,
                optInitGanttStylesFnName?: any,
                optInitGanttStylesFnArgsObj?: any): void;
            GetAllDataJson(fnOnFinished: any, optFnGetCellStyleID?: any): void;
            SetTableView(tableViewParams: any): void;
            SetRowView(rowViewParam: any): void;

            /** Enable grid after Disable. */
            Enable(): void;
            /** Covers the grid with the semi-transparent panel, preventing any operations with it.
                Additionally, displays loading animated gif and optMsg as the message next to it.
                If optMsg is not specified, displays "Loading..." text. */
            Disable(optMsg?: string): void;
            /** Enables grid editing */
            EnableEditing(): void;
            /** Disables grid editing: all the records become readonly */
            DisableEditing(): void;
            /** Switches the currently selected cell into edit mode: displays edit control and sets focus into it.
                Returns true if success. */
            TryBeginEdit(): boolean;
            FinalizeEditing(fnContinue: Function, fnError: Function): void;
            /** Get diff tracker object that tracks changes to the grid data. */
            GetDiffTracker(): SP.JsGrid.Internal.DiffTracker;
            /** Moves focus to the JsGrid control */
            Focus(): void;

            /** Try saving the new record row (aka entry row) if it was edited. */
            TryCommitFirstEntryRecords(fnCommitComplete: { (): void }): void;
            /** Removes all new record rows (aka entry rows), including unsaved and even empty ones.
                The latter seems to be a bug, as I haven't found any easy way to restore the empty entry row. */
            ClearUncommitedEntryRecords(): void;
            /** Returns true if there are any unsaved new record rows (aka entry rows). */
            AnyUncommitedEntryRecords(): boolean;


            // todo
            AnyUncomittedProvisionalRecords(): boolean;

            /** Gets record based on the recordKey
                @recordKey internal unique id of a row. You can get recordKey from view index via GetRecordKeyByViewIndex method. */
            GetRecord(recordKey: number): IRecord;
            /** Get entry record with the specified key.
                Entry record is a special type of record because it represents a new record that doesn't exist yet. */
            GetEntryRecord(key: any): any;
            /** Determine if the specified record key identifies valid entry row. */
            IsEntryRecord(recordKey: number): boolean;
            /** Determine whether the specified cell is editable. */
            IsCellEditable(record: IRecord, fieldKey: string, optPaneId?: any): boolean;
            /** Adds one of builtin row state indicator icons into the row header.
                Please pass one of the values of SP.JsGrid.RowHeaderStyleId
                Row header is the leftmost gray column of the table. */
            AddBuiltInRowHeaderState(recordKey: number, rowHeaderStateId: string): void;
            /** Adds the specified state into the row header.
                There can be several row header states for one row. Only one is shown (according to the Priority).
                Row header is the leftmost gray column of the table. */
            AddRowHeaderState(recordKey: number, rowHeaderState: SP.JsGrid.RowHeaderState): void;
            /** Removes header state with specified id from the row. */
            RemoveRowHeaderState(recordKey: number, rowHeaderStateId: string): void;

            GetCheckSelectionManager(): any;
            UpdateProperties(propertyUpdates: any, changeName: any, optChangeKey?: any): any;
            GetLastRecordKey(): string;
            InsertProvisionalRecordBefore(beforeRecordKey: number, newRecord: any, initialValues: any): any;
            InsertProvisionalRecordAfter(afterRecordKey: number, newRecord: any, initialValues: any): any;
            IsProvisionalRecordKey(recordKey: number): boolean;
            InsertRecordBefore(beforeRecordKey: number, newRecord: any, optChangeKey?: any): any;
            InsertRecordAfter(afterRecordKey: number, newRecord: any, optChangeKey?: any): any;
            InsertHiddenRecord(recordKey: number, changeKey: any, optAfterRecordKey?: any): any;
            DeleteRecords(recordKeys: any, optChangeKey?: any): any;
            IndentRecords(recordKeys: any, optChangeKey?: any): any;
            OutdentRecords(recordKeys: any, optChangeKey?: any): any;
            ReorderRecords(beginRecordKey: number, endRecordKey: number, afterRecordKey: number, bSelectAfterwards: boolean): any;
            GetContiguousRowSelectionWithoutEntryRecords(): { begin: any; end: any; keys: any };
            CanMoveRecordsUpByOne(recordKeys: any): boolean;
            CanMoveRecordsDownByOne(recordKeys: any): boolean;
            MoveRecordsUpByOne(recordKeys: any): any;
            MoveRecordsDownByOne(recordKeys: any): any;
            GetReorderRange(recordKeys: any): any;
            GetNodeExpandCollapseState(recordKey: number): any;
            ToggleExpandCollapse(recordKey: number): void;

            /** Attach event handler to a particular event type */
            AttachEvent(eventType: JsGrid.EventType, fnOnEvent: { (args: IEventArgs): void }): void;
            /** Detach a previously set event handler */
            DetachEvent(eventType: JsGrid.EventType, fnOnEvent: any): void;

            /** Set a delegate. Delegates are way to replace default functionality with custom one. */
            SetDelegate(delegateKey: JsGrid.DelegateType, fn: any): void;
            /** Get current delegate. */
            GetDelegate(delegateKey: JsGrid.DelegateType): any;

            /** Re-render the specified row in the view. */
            RefreshRow(recordKey: number): void;
            /** Re-render all rows in the view.
                It can be used e.g. if you have some custom display controls and they are rendered differently depending on some external settings.
                In this case, if you update the external settings, obviously you have to then update the view for these settings to take effect. */
            RefreshAllRows(): void;
            /** Clears undo queue, and also differencies tracker state and versions manager state. */
            ClearChanges(): void;

            GetGanttZoomLevel(): any;
            SetGanttZoomLevel(level: any): void;
            ScrollGanttToDate(date: any): void;

            /** Get top record view index.
                You can then use GetRecordKeyByViewIndex to convert this value into the recordKey. */
            GetTopRecordIndex(): number;
            /** Get number of rows displayed in the current view. */
            GetViewRecordCount(): number;
            /** Get record key for a row that is specified by the viewIdx.
                viewIdx - index of the row in the view, use GetTopRecordIndex to get the first one.
                Returns recordKey, which is a unique numeric identifier of a row within a dataset.
                Main difference between viewIdx and recordKey is that viewIdx is only unique within a view,
                e.g. if you do paging, it can be same for different records.
             */
            GetRecordKeyByViewIndex(viewIdx: number): number;
            /** Opposite to GetRecordKeyByViewIndex, resolves the view index of the record based on record key.
                recordKey - unique numeric identifier of a row in the current dataset.
                Returns viewIdx - index of the row in the current view */
            GetViewIndexOfRecord(recordKey: number): number;
            /** Get top row index. Usually returns 0.
                You can then use GetRecordKeyByViewIndex to convert this value into the recordKey. */
            GetTopRowIndex(): number;

            GetOutlineLevel(record: any): any;
            GetSplitterPosition(): any;
            SetSplitterPosition(pos: any): void;
            GetLeftColumnIndex(optPaneId?: any): any;
            EnsurePaneWidth(): void;

            /** Show a previously hidden column at a specified position.
                If atIdx is not defined, column will be shown at it's previous position. */
            ShowColumn(columnKey: string, atIdx?: number): void;
            /** Hide the specified column from grid */
            HideColumn(columnKey: string): void;
            /** Update column descriptions */
            UpdateColumns(columnInfoCollection: ColumnInfoCollection): void;
            GetColumns(optPaneId?: string): ColumnInfo[];
            /** Get ColumnInfo object by fieldKey
                @fieldKey when working with SharePoint data sources, fieldKey corresponds to field internal name */
            GetColumnByFieldKey(fieldKey: string, optPaneId?: any): ColumnInfo;
            /** Adds a column, based on the specified grid field */
            AddColumn(columnInfo: ColumnInfo, gridField: GridField): void;

            /** Switches column header in rename mode, showing textbox and thus giving the user possibility to rename this column. */
            RenameColumn(columnKey: string): void;
            /** Shows a dialog where user can reorder columns and change their widths. */
            ShowColumnConfigurationDialog(): void;


            /** Returns true, if there are any errors in the JsGrid */
            AnyErrors(): boolean;
            /** Returns true, if there are any errors in a specified row */
            AnyErrorsInRecord(recordKey: number): boolean;
            /** Set error for the specified by recordKey and fieldKey cell.
                Returns id of the error, so that later you can clear the error using this id. */
            SetCellError(recordKey: number, fieldKey: string, errorMessage: string): number;
            /** Set error for the specified by recordKey row.
                In the leftmost column of this row, exclamation mark error indicator will appear.
                Clicking on this indicator will cause the specified error message appear in form of a reddish tooltip.
                Returns id of the error, so that later you can clear the error using this id. */
            SetRowError(recordKey: number, errorMessage: string): number;
            /** Clear specified by id error that was previously set on the specified by recordKey and fieldKey cell. */
            ClearCellError(recordKey: number, fieldKey: string, id: number): void;
            /** Clear all errors in the specified cell. */
            ClearAllErrorsOnCell(recordKey: number, fieldKey: string): void;
            /** Clear specified by id error that was previously set on the specified by recordKey row. */
            ClearRowError(recordKey: number, id: number): void;
            /** Clear all errors in the specified row. */
            ClearAllErrorsOnRow(recordKey: number): void;
            /** Get error message for the specified cell.
                If many errors are set on the cell, only first is returned.
                If there are no errors in the cell, returns null. */
            GetCellErrorMessage(recordKey: number, fieldKey: string): string;
            /** Get error message for the specified row.
                If many errors are set on the row, only first is returned.
                If there are no errors in the row, returns null. */
            GetRowErrorMessage(recordKey: number): string;
            /** This method is used mostly when you have a rather tall JSGrid and you want to ensure that user sees
                that some error has occured.
                You can specify the minId or/and filter function.
                If minId is specified, method searches for an error with first id which is greater than minId.
                Scrolls to the Returns the id of the found record.
                If there aren't any errors, that satisfy the conditions, method does nothing and returns null. */
            ScrollToAndExpandNextError(minId?: number, fnFilter?: { (recordKey: number, fieldKey: string, id: number): boolean }): any;
            /** Same as ScrollToAndExpandNextError, but searches within the specified record.
                recordKey should be not null, otherwise you'll get an exception.
                bDontExpand controls whether the error tooltip will be shown (if bDontExpand=true, tooltip will not be shown). */
            ScrollToAndExpandNextErrorOnRecord(minId?: number, recordKey?: number, fnFilter?: { (recordKey: number, fieldKey: string, id: number): boolean }, bDontExpand?: boolean): any;

            GetFocusedItem(): any;
            SendKeyDownEvent(eventInfo: Sys.UI.DomEvent): any;
            /** Moves cursor to entry record (the row that is used to add new records) */
            JumpToEntryRecord(): void;

            SelectRowRange(rowIdx1: number, rowIdx2: number, bAppend: boolean, optPaneId?: string): void;
            SelectColumnRange(colIdx1: number, colIdx2: number, bAppend: boolean, optPaneId?: string): void;
            SelectCellRange(rowIdx1: number, rowIdx2: number, colIdx1: number, colIdx2: number, bAppend: boolean, optPaneId?: string): void;
            SelectRowRangeByKey(rowKey1: any, rowKey2: any, bAppend: boolean, optPaneId?: string): void;
            SelectColumnRangeByKey(colKey1: any, colKey2: any, bAppend: boolean, optPaneId?: string): void;
            SelectCellRangeByKey(recordKey1: string, recordKey2: string, colKey1: any, colKey2: any, bAppend: boolean, optPaneId?: string): void;

            ChangeKeys(oldKey: any, newKey: any): void;
            GetSelectedRowRanges(optPaneId?: any): any;
            GetSelectedColumnRanges(optPaneId?: any): any;
            GetSelectedRanges(optPaneId?: any): any;
            MarkPropUpdateInvalid(recordKey: number, fieldKey: any, changeKey: any, optErrorMsg?: any): any;
            GetCurrentChangeKey(): any;
            CreateAndSynchronizeToNewChangeKey(): any;
            CreateDataUpdateCmd(bUseCustomInitialUpdate: boolean): any;
            IsChangeKeyApplied(changeKey: any): any;
            GetChangeKeyForVersion(version: any): any;
            TryReadPropForChangeKey(recordKey: number, fieldKey: any, changeKey: any): any;
            GetUnfilteredHierarchyMap(): any;
            GetHierarchyState(bDecompressGuidKeys: boolean): any;
            IsGroupingRecordKey(recordKey: number): boolean;
            IsGroupingColumnKey(recordKey: number): boolean;
            GetSelectedRecordKeys(bDuplicatesAllowed: boolean): any;
            /** Cut data from currently selected cells into the clipboard.
                Will not work if current selection contains entry row or readonly cells. */
            CutToClipboard(): void;
            /** Copy data from currently selected cells into the clipboard. */
            CopyToClipboard(): void;
            /** Paste data from clipboard into currently selected cells. */
            PasteFromClipboard(): void;
            TryRestoreFocusAfterInsertOrDeleteColumns(origFocus: any): void;
            /** Get undo manager for performing undo/redo operations programmatically. */
            GetUndoManager(): SP.JsGrid.CommandManager;
            /** Gets number of records visible in the current view, including the entry row. */
            GetVisibleRecordCount(): number;
            /** Returns index of the system RecordIndicatorCheckBoxColumn. If not present in the view, returns null. */
            GetRecordIndicatorCheckBoxColumnIndex(): number;
            /** Determines if the specified record is visible in the current view. */
            IsRecordVisibleInView(recordKey: number): boolean;
            GetHierarchyQueryObject(): any;
            GetSpCsrRenderCtx(): any;
        }

        export interface IChangeKey {
            Reserve(): void;
            Release(): void;
            GetVersionNumber(): number;
            CompareTo(changeKey: IChangeKey): number;
        }

        export enum EventType {
            OnCellFocusChanged,
            OnRowFocusChanged,
            OnCellEditBegin,
            OnCellEditCompleted,
            OnRightClick,
            OnPropertyChanged,
            OnRecordInserted,
            OnRecordDeleted,
            OnRecordChecked,
            OnCellErrorStateChanged,
            OnEntryRecordAdded,
            OnEntryRecordCommitted,
            OnEntryRecordPropertyChanged,
            OnRowErrorStateChanged,
            OnDoubleClick,
            OnBeforeGridDispose,
            OnSingleCellClick,
            OnInitialChangesForChangeKeyComplete,
            OnVacateChange,
            OnGridErrorStateChanged,
            OnSingleCellKeyDown,
            OnRecordsReordered,
            OnBeforePropertyChanged,
            OnRowEscape,
            OnBeginRenameColumn,
            OnEndRenameColumn,
            OnPasteBegin,
            OnPasteEnd,
            OnBeginRedoDataUpdateChange,
            OnBeginUndoDataUpdateChange
        }

        export enum DelegateType {
            ExpandColumnMenu,
            AddColumnMenuItems,
            Sort,
            Filter,
            InsertRecord,
            DeleteRecords,
            IndentRecords,
            OutdentRecords,
            IsRecordInsertInView,
            ExpandDelayLoadedHierarchyNode,
            AutoFilter,
            ExpandConflictResolution,
            GetAutoFilterEntries,
            LaunchFilterDialog,
            ShowColumnConfigurationDialog,
            GetRecordEditMode,
            GetGridRowStyleId,
            CreateEntryRecord,
            TryInsertEntryRecord,
            WillAddColumnMenuItems,
            NextPage,
            AddNewColumn,
            RemoveColumnFromView,
            ReorderColumnPositionInView,
            TryCreateProvisionalRecord,
            CanReorderRecords,
            AddNewColumnMenuItems,
            TryBeginPaste,
            AllowSelectionChange,
            GetFieldEditMode,
            GetFieldReadOnlyActiveState,
            OnBeforeRecordReordered
        }

        export enum ClickContext {
            SelectAllSquare,
            RowHeader,
            ColumnHeader,
            Cell,
            Gantt,
            Other
        }

        export class RowHeaderState {
            constructor(id: string, img: SP.JsGrid.Image, priority: SP.JsGrid.RowHeaderStatePriorities, tooltip: string, fnOnClick: { (eventInfo: Sys.UI.DomEvent, recordKey: number): void });
            GetId(): string;
            GetImg(): SP.JsGrid.Image;
            GetPriority(): SP.JsGrid.RowHeaderStatePriorities;
            GetOnClick(): { (eventInfo: Sys.UI.DomEvent, recordKey: number): void };
            GetTooltip(): string;
            toString(): string;
        }

        export class Image {
            /** optOuterCssNames and optImgCssNames are strings that contain css class names separated by spaces.
                optImgCssNames are applied to the img tag.
                if bIsClustered, image is rendered inside div, and optOuterCssNames are applied to the div. */
            constructor(imgSrc: string, bIsClustered: boolean, optOuterCssNames: string, optImgCssNames: string, bIsAnimated: boolean);
            imgSrc: string;
            bIsClustered: boolean;
            optOuterCssNames: string;
            imgCssNames: string;
            bIsAnimated: boolean;
            /** Renders the image with specified alternative text and on-click handler.
                If bHideTooltip == false, then alternative text is also shown as the tooltip (title attribute). */
            Render(altText: string, clickFn: { (eventInfo: Sys.UI.DomEvent): void }, bHideTooltip: boolean): HTMLElement;
        }

        export interface IEventArgs { }
        export namespace EventArgs {
            export class OnEntryRecordAdded implements IEventArgs {
                constructor(recordKey: number);
                recordKey: number;
            }

            export class CellFocusChanged implements IEventArgs {
                constructor(newRecordKey: number, newFieldKey: string, oldRecordKey: number, oldFieldKey: string);
                newRecordKey: number;
                newFieldKey: string;
                oldRecordKey: number;
                oldFieldKey: string;
            }
            export class RowFocusChanged implements IEventArgs {
                constructor(newRecordKey: number, oldRecordKey: number);
                newRecordKey: number;
                oldRecordKey: number;
            }
            export class CellEditBegin implements IEventArgs {
                constructor(recordKey: number, fieldKey: string);
                recordKey: number;
                fieldKey: string;
            }
            export class CellEditCompleted implements IEventArgs {
                constructor(recordKey: number, fieldKey: string, changeKey: JsGrid.IChangeKey, bCancelled: boolean);
                recordKey: number;
                fieldKey: string;
                changeKey: JsGrid.IChangeKey;
                bCancelled: boolean;
            }
            export class Click implements IEventArgs {
                constructor(eventInfo: Sys.UI.DomEvent, context: JsGrid.ClickContext, recordKey: number, fieldKey: string);
                eventInfo: Sys.UI.DomEvent;
                context: JsGrid.ClickContext;
                recordKey: number;
                fieldKey: string;
            }
            export class PropertyChanged implements IEventArgs {
                constructor(recordKey: number, fieldKey: string, oldProp: SP.JsGrid.Internal.PropertyUpdate, newProp: SP.JsGrid.Internal.PropertyUpdate, propType: SP.JsGrid.IPropertyType, changeKey: SP.JsGrid.IChangeKey, validationState: SP.JsGrid.ValidationState);
                recordKey: number;
                fieldKey: string;
                oldProp: SP.JsGrid.Internal.PropertyUpdate;
                newProp: SP.JsGrid.Internal.PropertyUpdate;
                propType: SP.JsGrid.IPropertyType;
                changeKey: SP.JsGrid.IChangeKey;
                validationState: SP.JsGrid.ValidationState;
            }
            export class RecordInserted implements IEventArgs {
                constructor(recordKey: number, recordIdx: number, afterRecordKey: number, changeKey: JsGrid.IChangeKey);
                recordKey: number;
                recordIdx: number;
                afterRecordKey: number;
                changeKey: JsGrid.IChangeKey;
            }
            export class RecordDeleted implements IEventArgs {
                constructor(recordKey: number, recordIdx: number, changeKey: JsGrid.IChangeKey);
                recordKey: number;
                recordIdx: number;
                changeKey: JsGrid.IChangeKey;
            }
            export class RecordChecked implements IEventArgs {
                constructor(recordKeySet: SP.Utilities.Set, bChecked: boolean);
                recordKeySet: SP.Utilities.Set;
                bChecked: boolean;
            }
            export class OnCellErrorStateChanged implements IEventArgs {
                constructor(recordKey: number, fieldKey: string, bAddingError: boolean, bCellCurrentlyHasError: boolean, bCellHadError: boolean, errorId: number);
                recordKey: number;
                fieldKey: string;
                bAddingError: boolean;
                bCellCurrentlyHasError: boolean;
                bCellHadError: boolean;
                errorId: number;
            }
            export class OnRowErrorStateChanged implements IEventArgs {
                constructor(recordKey: number, bAddingError: boolean, bErrorCurrentlyInRow: boolean, bRowHadError: boolean, errorId: number, message: string);
                recordKey: number;
                bAddingError: boolean;
                bErrorCurrentlyInRow: boolean;
                bRowHadError: boolean;
                errorId: number;
                message: string;
            }
            export class OnEntryRecordCommitted implements IEventArgs {
                constructor(origRecKey: string, recordKey: number, changeKey: JsGrid.IChangeKey);
                originalRecordKey: number;
                recordKey: number;
                changeKey: JsGrid.IChangeKey
            }
            export class SingleCellClick implements IEventArgs {
                constructor(eventInfo: Sys.UI.DomEvent, recordKey: number, fieldKey: string);
                eventInfo: Sys.UI.DomEvent;
                recordKey: number;
                fieldKey: string;
            }
            export class PendingChangeKeyInitiallyComplete implements IEventArgs {
                constructor(changeKey: JsGrid.IChangeKey);
                changeKey: JsGrid.IChangeKey
            }
            export class VacateChange implements IEventArgs {
                constructor(changeKey: JsGrid.IChangeKey);
                changeKey: JsGrid.IChangeKey
            }
            export class GridErrorStateChanged implements IEventArgs {
                constructor(bAnyErrors: boolean);
                bAnyErrors: boolean;
            }
            export class SingleCellKeyDown implements IEventArgs {
                constructor(eventInfo: Sys.UI.DomEvent, recordKey: number, fieldKey: string);
                eventInfo: Sys.UI.DomEvent;
                recordKey: number;
                fieldKey: string;
            }
            export class OnRecordsReordered implements IEventArgs {
                constructor(recordKeys: string[], changeKey: JsGrid.IChangeKey);
                reorderedKeys: string[];
                changeKey: JsGrid.IChangeKey;
            }
            export class OnRowEscape implements IEventArgs {
                constructor(recordKey: number);
                recordKey: number;
            }
            export class OnEndRenameColumn implements IEventArgs {
                constructor(columnKey: string, originalColumnTitle: string, newColumnTitle: string);
                columnKey: string;
                originalColumnTitle: string;
                newColumnTitle: string;
            }
            export class OnBeginRedoDataUpdateChange implements IEventArgs {
                constructor(changeKey: JsGrid.IChangeKey);
                changeKey: JsGrid.IChangeKey
            }
            export class OnBeginUndoDataUpdateChange implements IEventArgs {
                constructor(changeKey: JsGrid.IChangeKey);
                changeKey: JsGrid.IChangeKey
            }

        }

        export namespace JsGridControl {
            export class Parameters {
                tableCache: SP.JsGrid.TableCache;
                name: any; // TODO
                bNotificationsEnabled: boolean;
                styleManager: IStyleManager;
                minHeaderHeight: number;
                minRowHeight: number;
                commandMgr: SP.JsGrid.CommandManager;
                enabledRowHeaderAutoStates: SP.Utilities.Set;
                tableViewParams: TableViewParameters;
                bEnableDiffTracking: boolean;
                isRTL: boolean;

            }
            export class TableViewParameters {
                paneLayout: SP.JsGrid.PaneLayout;
                defaultEditMode: SP.JsGrid.EditMode;
                allowedSelectionTypes: SP.JsGrid.SelectionTypeFlags;

                bMovableColumns: boolean;
                bResizableColumns: boolean;
                bHidableColumns: boolean;
                bSortableColumns: boolean;
                bAutoFilterableColumns: boolean;
                bRowHeadersEnabled: boolean;
                bRecordIndicatorCheckboxesEnabled: boolean;
                bFillControlEnabled: boolean;
                bEditingEnabled: boolean;
                bNewRowEnabled: boolean;

                checkSelectionCheckboxHiddenRecordKeys: string[];
                checkSelectionCheckboxDisabledRecordKeys: string[];
                checkSelectionCheckedRecordKeys: string[];

                keyFieldName: string;
                gridFieldMap: { [name: string]: GridField };

                columns: ColumnInfoCollection;
                messageOverrides: any; //TODO
                operationalConstantsFieldKeyMap: any; //TODO

                ganttParams: GanttParameters;
                pivotedGridParams: PivotedGridParameters;
                rowViewParams: RowViewParameters;
            }
            export class PivotedGridParameters {
        	    //this.dateRange = null;
             //   this.ganttBarStyles = null;
             //   this.ganttZoomLevel = 3;
             //   this.fnRenderGanttRow = null;
             //   this.fnGetGanttBarDate = null;
             //   this.fnGetGanttBarStyleIds = null;
             //   this.fnGetPredecessors = null;
             //   this.workDayStart = _spRegionalSettings.workDayStart;
             //   this.workDayEnd = _spRegionalSettings.workDayEnd;
             //   this.fieldKeyRedrawFilter = null;
            }

            export class GanttParameters {
                columns: ColumnInfoCollection;
            }

            export class RowViewParameters {
                hierarchyMode: SP.JsGrid.HierarchyMode;
                view: any;

                topViewIdx: number;


                groupingLevel: any;
                groupingRecordKeyPrefix: any;
                autoFilterState: any;
                unfilteredHierarchyMgr: any;
                hierarchyDelayLoadKeys: any;
                hierarchyState: any;
                sortState: any;
                filterState: any;
                autoFilterEntries: any;
                filteredDescCounts: any;

            }
        }

        export class CommandManager {
            // todo
        }

        export class TableCache {
            // todo
        }

        export interface IStyleManager {
            gridPaneStyle: IStyleType.GridPane;
            columnHeaderStyleCollection: {
                normal: IStyleType.Header;
                normalHover: IStyleType.Header;
                partSelected: IStyleType.Header;
                partSelectedHover: IStyleType.Header;
                allSelected: IStyleType.Header;
                allSelectedHover: IStyleType.Header;
            };
            rowHeaderStyleCollection: {
                normal: IStyleType.Header;
                normalHover: IStyleType.Header;
                partSelected: IStyleType.Header;
                partSelectedHover: IStyleType.Header;
                allSelected: IStyleType.Header;
                allSelectedHover: IStyleType.Header;
            };
            splitterStyleCollection: {
                normal: IStyleType.Splitter;
                normalHandle: IStyleType.SplitterHandle;
                hover: IStyleType.Splitter;
                hoverHandle: IStyleType.SplitterHandle;
                dra: IStyleType.Splitter;
                dragHandle: IStyleType.SplitterHandle;
            };
            defaultCellStyle: IStyleType.Cell;
            readOnlyCellStyle: IStyleType.Cell;
            readOnlyFocusedCellStyle: IStyleType.Cell;
            timescaleTierStyle: IStyleType.TimescaleTier;
            groupingStyles: any[];
            widgetDockStyle: IStyleType.Widget;
            widgetDockHoverStyle: IStyleType.Widget;
            widgetDockPressedStyle: IStyleType.Widget;
            RegisterCellStyle(styleId: string, cellStyle: IStyleType.Cell): void;
            GetCellStyle(styleId: string): IStyleType.Cell;
            UpdateSplitterStyleFromCss(styleObject: IStyleType.Splitter, splitterStyleNameCollection: any): void;
            UpdateHeaderStyleFromCss(styleObject: IStyleType.Header, headerStyleNameCol: any): void;
            UpdateGridPaneStyleFromCss(styleObject: IStyleType.GridPane, gridStyleNameCollection: any): void;
            UpdateDefaultCellStyleFromCss(styleObject: IStyleType.Cell, cssClass: string): void;
            UpdateGroupStylesFromCss(styleObject: IStyleType.Cell, prefix: string): void;
        }

        export interface IStyleType { }
        export namespace IStyleType {
            export interface Splitter extends IStyleType {
                outerBorderColor: any;
                leftInnerBorderColor: any;
                innerBorderColor: any;
                backgroundColor: any;
            }
            export interface SplitterHandle extends IStyleType {
                outerBorderColor: any;
                leftInnerBorderColor: any;
                innerBorderColor: any;
                backgroundColor: any;
                gripUpperColor: any;
                gripLowerColor: any;
            }
            export interface GridPane {
                verticalBorderColor: any;
                verticalBorderStyle: any;
                horizontalBorderColor: any;
                horizontalBorderStyle: any;
                backgroundColor: any;
                columnDropIndicatorColor: any;
                rowDropIndicatorColor: any;
                linkColor: any;
                visitedLinkColor: any;
                copyRectForeBorderColor: any;
                copyRectBackBorderColor: any;
                focusRectBorderColor: any;
                selectionRectBorderColor: any;
                selectedCellBgColor: any;
                readonlySelectionRectBorderColor: any;
                changeHighlightCellBgColor: any;
                fillRectBorderColor: any;
                errorRectBorderColor: any;
            }
            export interface Header {
                font: any;
                fontSize: any;
                fontWeight: any;
                textColor: any;
                backgroundColor: any;
                outerBorderColor: any;
                innerBorderColor: any;
                eyeBrowBorderColor: any;
                eyeBrowColor: any;
                menuColor: any;
                menuBorderColor: any;
                resizeColor: any;
                resizeBorderColor: any;
                menuHoverColor: any;
                menuHoverBorderColor: any;
                resizeHoverColor: any;
                resizeHoverBorderColor: any;
                eyeBrowHoverColor: any;
                eyeBrowHoverBorderColor: any;
                elementClickColor: any;
                elementClickBorderColor: any;
            }
            export interface Cell extends IStyleType {
                /** -> CSS font-family */
                font: any;
                /** -> CSS font-size */
                fontSize: any;
                /** -> CSS font-weight */
                fontWeight: any;
                /** -> CSS font-style */
                fontStyle: any;
                /** -> CSS color */
                textColor: any;
                /** -> CSS background-color */
                backgroundColor: any;
                /** -> CSS text-align */
                textAlign: any;
            }
            export interface Widget {
                backgroundColor: any;
                borderColor: any;
            }
            export interface RowHeaderStyle {
                backgroundColor: any;
                outerBorderColor: any;
                innerBorderColor: any;
            }
            export interface TimescaleTier {
                font: any;
                fontSize: any;
                fontWeight: any;
                textColor: any;
                backgroundColor: any;
                verticalBorderColor: any;
                verticalBorderStyle: any;
                horizontalBorderColor: any;
                horizontalBorderStyle: any;
                outerBorderColor: any;
                todayLineColor: any;
            }
        }

        export class Style {

            static Type: {
                Splitter: IStyleType.Splitter;
                SplitterHandle: IStyleType.SplitterHandle;
                GridPane: IStyleType.GridPane;
                Header: IStyleType.Header;
                RowHeaderStyle: IStyleType.RowHeaderStyle;
                TimescaleTier: IStyleType.TimescaleTier;
                Cell: IStyleType.Cell;
                Widget: IStyleType.Widget;
            };

            static SetRTL: { (rtlObject: any): void; };
            static MakeJsGridStyleManager: { (): IStyleManager };
            static CreateStyleFromCss: { (styleType: IStyleType, cssStyleName: string, optExistingStyle?: any, optClassId?: any): any; };
            static CreateStyle: { (styleType: IStyleType, styleProps: any): any; };
            static MergeCellStyles: { (majorStyle: any, minorStyle: any): any; };
            static ApplyCellStyle: { (td: HTMLTableCellElement, style: any): void; };
            static ApplyRowHeaderStyle: { (domObj: HTMLElement, style: any, fnGetHeaderSibling: Function): void; };
            static ApplyCornerHeaderBorderStyle: { (domObj: HTMLElement, colStyle: any, rowStyle: any): void; };
            static ApplyHeaderInnerBorderStyle: { (domObj: HTMLElement, bIsRowHeader: any, headerObject: any): void };
            static ApplyColumnContextMenuStyle: { (domObj: HTMLElement, style: any): void };
            static ApplySplitterStyle: { (domObj: HTMLElement, style: any): void };
            static MakeBorderString: { (width: number, style: string, color: string): string };
            static GetCellStyleDefaultBackgroundColor: { (): string };

        }

        export class ColumnInfoCollection {
            constructor(colInfoArray: any[]);
            GetColumnByKey(key: string): any;
            GetColumnArray(bVisibleOnly?: boolean): any[];
            GetColumnMap(): { [key: string]: any; };
            AppendColumn(colInfo: any): void;
            InsertColumnAt(idx: number, colInfo: any): void;
            RemoveColumn(key: string): void;
            /** Returns null if the specified column is not found or hidden. */
            GetColumnPosition(key: string): number;
        }

        export class ColumnInfo {
            constructor(name: string, imgSrc: string, key: string, width: number);
            /** Column title */
            name: string;
            /** Column image URL.
                If not null, the column header cell will show the image instead of title text.
                If the title is defined at the same time as the imgSrc, the title will be shown as a tooltip. */
            imgSrc: string;
            /** Custom image HTML.
                If you define this in addition to the imgSrc attribute, then instead of standard img tag
                the custom HTML defined by this field will be used. */
            imgRawSrc: string;
            /** Column identifier */
            columnKey: string;
            /** Field keys of the fields, that are displayed in this column */
            fieldKeys: string[];
            /** Width of the column */
            width: number;
            bOpenMenuOnContentClick: boolean;
            /** always returns 'column' */
            ColumnType(): string;
            /** true by default */
            isVisible: boolean;
            /** true by default */
            isHidable: boolean;
            /** true by default */
            isResizable: boolean;
            /** true by default */
            isSortable: boolean;
            /** true by default */
            isAutoFilterable: boolean;
            /** false by default */
            isFooter: boolean;
            /** determine whether the cells in this column should be clickable */
            fnShouldLinkSingleValue: { (record: IRecord, fieldKey: string, dataValue: any, localizedValue: any): boolean };
            /** if a particular cell is determined as clickable by fnShouldLinkSingleValue, this function will be called when the cell is clicked */
            fnSingleValueClicked: { (record: IRecord, fieldKey: string, dataValue: any, localizedValue: any): void };
            /** this is used when you need to make some of the cells in the column readonly, but at the same time keep others editable */
            fnGetCellEditMode: { (record: IRecord, fieldKey: string): JsGrid.EditMode };
            /** this function should return name of the display control for the given cell in the column
                the name should be previously associated with the display control via SP.JsGrid.PropertyType.Utils.RegisterDisplayControl method */
            fnGetDisplayControlName: { (record: IRecord, fieldKey: string): string };
            /** this function should return name of the edit control for the given cell in the column
                the name should be previously associated with the edit control via SP.JsGrid.PropertyType.Utils.RegisterEditControl method */
            fnGetEditControlName: { (record: IRecord, fieldKey: string): string };
            /** set widget control names for a particular cell
                widgets are basically in-cell buttons with associated popup controls, e.g. date selector or address book button
                standard widget ids are defined in the SP.JsGrid.WidgetControl.Type enumeration
                it is also possible to create your own widgets 
                usually this function is not used, and instead, widget control names are determined via PropertyType
             */
            fnGetWidgetControlNames: { (record: IRecord, fieldKey: string): string[] };
            /** this function should return id of the style for the given cell in the column
                styles and their ids are registered for a JsGridControl via jsGridParams.styleManager.RegisterCellStyle method */
            fnGetCellStyleId: { (record: IRecord, fieldKey: string, dataValue: any): string };
            /** set custom tooltip for the given cell in the column. by default, localized value is displayed as the tooltip */
            fnGetSingleValueTooltip: { (record: IRecord, fieldKey: string, dataValue: any, localizedValue: any): string };
        }


        export interface IRecord {
            /** True if this is an entry row */
            bIsNewRow: boolean;

            /** Please use SetProp and GetProp */
            properties: { [fieldKey: string]: IPropertyBase };

            /** returns recordKey */
            key(): number;
            /** returns raw data value for the specified field */
            GetDataValue(fieldKey: string): any;
            /** returns localized text value for the specified field */
            GetLocalizedValue(fieldKey: string): string;
            /** returns true if data value for the specified field is available */
            HasDataValue(fieldKey: string): boolean;
            /** returns true if localized text value for the specified field is available */
            HasLocalizedValue(fieldKey: string): boolean;

            GetProp(fieldKey: string): IPropertyBase;
            SetProp(fieldKey: string, prop: IPropertyBase): void;

            /** Update the specified field with the specified value */
            AddFieldValue(fieldKey: string, value: any): void;
            /** Removes value of the specified field.
                Does not refresh the view. */
            RemoveFieldValue(fieldKey: string): void;
        }


        export class RecordFactory {
            constructor(gridFieldMap: any, keyColumnName: string, fnGetPropType: any);
            gridFieldMap: any;
            /** Create a new record */
            MakeRecord(dataPropMap: any, localizedPropMap: any, bKeepRawData: boolean): IRecord;
        }

        export interface IPropertyBase {
            HasLocalizedValue(): boolean;
            HasDataValue(): boolean;
            Clone(): IPropertyBase;
            /** dataValue actually is cloned */
            Update(dataValue: any, localizedValue: string): void;
            GetLocalized(): string;
            GetData(): any;
        }

        export class Property {
            static MakeProperty(dataValue: any, localizedValue: string, bHasDataValue: boolean, bHasLocalizedValue: boolean, propType: any): IPropertyBase;
            static MakePropertyFromGridField(gridField: any, dataValue: any, localizedVal: string, optPropType?: any): IPropertyBase;
        }

        export class GridField {
            constructor(key: string, hasDataValue: boolean, hasLocalizedValue: boolean, textDirection: TextDirection, defaultCellStyleId?: any, editMode?: EditMode, dateOnly?: boolean, csrInfo?: any);
            key: string;
            hasDataValue: boolean;
            hasLocalizedValue: boolean;
            textDirection: TextDirection;
            dateOnly: boolean;
            csrInfo: any;
            GetEditMode(): EditMode;
            SetEditMode(mode: EditMode): void;
            GetDefaultCellStyleId(): any;
            CompareSingleDataEqual(dataValue1: any, dataValue2: any): boolean;
            GetPropType(): any;
            GetSingleValuePropType(): any;
            GetMultiValuePropType(): any;
            SetSingleValuePropType(svPropType: any): void;
            SetIsMultiValue(listSeparator: any): void;
            GetIsMultiValue(): boolean;
        }

        export interface IEditActorGridContext {
            jsGridObj: JsGridControl;
            parentNode: HTMLElement;
            styleManager: IStyleManager;
            RTL: any;
            emptyValue: any;
            bLightFocus: boolean;
            OnKeyDown: { (domEvent: Sys.UI.DomEvent): void; };
        }

        export interface IEditControlGridContext extends IEditActorGridContext {
            OnActivateActor(): void;
            OnDeactivateActor(): void;
        }

        export interface IPropertyType {
            ID: string;
            BeginValidateNormalizeConvert(recordKey: number, fieldKey: string, newValue: any, bIsLocalized: boolean, fnCallback: { (args: { isValid: boolean; dataValue: any; normalizedLocValue: string }): void; }, fnError: any): void;
        }

        export interface ILookupPropertyType extends IPropertyType {
            GetItems(fnCallback: any): void;
            DataToLocalized(dataValue: any): string;
            LocalizedToData(localized: string): any;
            GetImageSource(record: IRecord, dataValue: any): string;
            GetStyleId(dataValue: any): string;
            GetIsLimitedToList(): boolean;
            GetSerializableLookupPropType(): { items: any[]; id: string; bLimitToList: boolean };
        }

        export interface IMultiValuePropertyType extends IPropertyType {
            bMultiValue: boolean;
            separator: string;
            singleValuePropType: string;
            GetSerializableMultiValuePropType(): { singleValuePropTypeID: string; separatorChar: string; bDelayInit: boolean; };
            InitSingleValuePropType(): void;
            LocStrToLocStrArray(locStr: string): string[];
            LocStrArrayToLocStr(locStrArray: string[]): string;
        }

        export class PropertyType {
            /** Lookup property type factory, based on SP.JsGrid.PropertyType.LookupTable class.
                displayCtrlName should be one of the following: SP.JsGrid.DisplayControl.Type.Image, SP.JsGrid.DisplayControl.Type.ImageText or SP.JsGrid.DisplayControl.Type.Text
             */
            static RegisterNewLookupPropType(id: string, items: any[], displayCtrlName: string, bLimitToList: boolean): void;

            /** Register a custom property type. */
            static RegisterNewCustomPropType(propType: IPropertyType, displayCtrlName: string, editControlName: string, widgetControlNames: string[]): void;

            /** Register a custom property type, where display and edit controls, and also widgets, are derived from the specified parent property type. */
            static RegisterNewDerivedCustomPropType(propType: IPropertyType, baseTypeName: string): void;
        }

        export namespace PropertyType {
            export class String implements IPropertyType {
                constructor();
                ID: string;
                BeginValidateNormalizeConvert(recordKey: number, fieldKey: string, newValue: any, bIsLocalized: boolean, fnCallback: { (args: { isValid: boolean; dataValue: any; normalizedLocValue: string }): void; }, fnError: any): void;
                toString(): string;
            }
            export class LookupTable implements ILookupPropertyType {
                constructor(items: any[], id: string, bLimitToList: boolean);
                ID: string;
                BeginValidateNormalizeConvert(recordKey: number, fieldKey: string, newValue: any, bIsLocalized: boolean, fnCallback: { (args: { isValid: boolean; dataValue: any; normalizedLocValue: string }): void; }, fnError: any): void;
                GetItems(fnCallback: any): void;
                DataToLocalized(dataValue: any): string;
                LocalizedToData(localized: string): any;
                GetImageSource(record: IRecord, dataValue: any): string;
                GetStyleId(dataValue: any): string;
                GetIsLimitedToList(): boolean;
                GetSerializableLookupPropType(): { items: any[]; id: string; bLimitToList: boolean };

            }
            export class CheckBoxBoolean implements IPropertyType {
                constructor();
                ID: string;
                BeginValidateNormalizeConvert(recordKey: number, fieldKey: string, newValue: any, bIsLocalized: boolean, fnCallback: { (args: { isValid: boolean; dataValue: any; normalizedLocValue: string }): void; }, fnError: any): void;
                DataToLocalized(dataValue: any): string;
                GetBool(dataValue: any): boolean;
                toString(): string;
            }
            export class DropDownBoolean implements IPropertyType {
                constructor();
                ID: string;
                BeginValidateNormalizeConvert(recordKey: number, fieldKey: string, newValue: any, bIsLocalized: boolean, fnCallback: { (args: { isValid: boolean; dataValue: any; normalizedLocValue: string }): void; }, fnError: any): void;
                DataToLocalized(dataValue: any): string;
                GetBool(dataValue: any): boolean;
                toString(): string;
            }
            export class MultiValuePropType implements IMultiValuePropertyType {
                ID: string;
                BeginValidateNormalizeConvert(recordKey: number, fieldKey: string, newValue: any, bIsLocalized: boolean, fnCallback: { (args: { isValid: boolean; dataValue: any; normalizedLocValue: string }): void; }, fnError: any): void;
                bMultiValue: boolean;
                separator: string;
                singleValuePropType: string;
                GetSerializableMultiValuePropType(): { singleValuePropTypeID: string; separatorChar: string; bDelayInit: boolean; };
                InitSingleValuePropType(): void;
                LocStrToLocStrArray(locStr: string): string[];
                LocStrArrayToLocStr(locStrArray: string[]): string;
            }
            export class HyperLink implements IPropertyType {
                ID: string;
                BeginValidateNormalizeConvert(recordKey: number, fieldKey: string, newValue: any, bIsLocalized: boolean, fnCallback: { (args: { isValid: boolean; dataValue: any; normalizedLocValue: string }): void; }, fnError: any): void;
                bHyperlink: boolean;
                DataToLocalized(dataValue: any): string;
                GetAddress(dataValue: any): string;
                /** Returns string like this: '"http://site.com, Site title"' */
                GetCopyValue(record: IRecord, dataValue: any, locValue: string): string;
                toString(): string;
            }


            export class Utils {
                static RegisterDisplayControl(name: string, singleton: any, requiredFunctionNames: string[]): void;
                static RegisterEditControl(name: string, factory: (gridContext: IEditControlGridContext, gridTextInputElement: HTMLElement) => IEditControl, requiredFunctionNames: string[]): void;
                static RegisterWidgetControl(name: string, factory: { (ddContext: any): IPropertyType; }, requiredFunctionNames: string[]): void;

                static UpdateDisplayControlForPropType(propTypeName: string, displayControlType: string): void;
            }
        }

        export namespace WidgetControl {
            export class Type {
                static Demo: string;
                static Date: string;
                static AddressBook: string;
                static Hyperlink: string;
            }
        }

        export namespace Internal {
            export class DiffTracker {
                constructor(objBag: any, fnGetChange: Function);
                ExternalAPI: {
                    AnyChanges(): boolean;
                    ChangeKeySliceInfo(): any;
                    ChangeQuery(): any;
                    EventSliceInfo(): any;
                    GetChanges(optStartEvent: any, optEndEvent: any, optRecordKeys: any, bFirstStartEvent: boolean, bStartInclusive: boolean, bEndInclusive: boolean, bIncludeInvalidPropUpdates: boolean, bLastEndEvent: boolean): any;
                    GetChangesAsJson(changeQuery: any, optfnPreProcessUpdateForSerialize?: any): string;
                    GetUniquePropertyChanges(changeQuery: any, optfnFilter?: any): any;
                    RegisterEvent(changeKey: IChangeKey, eventObject: any): void;
                    UnregisterEvent(changeKey: IChangeKey, eventObject: any): void;
                };
                Clear(): void;
                NotifySynchronizeToChange(changeKey: IChangeKey): void;
                NotifyRollbackChange(changeKey: IChangeKey): void;
                NotifyVacateChange(changeKey: IChangeKey): void;
            }

            export class PropertyUpdate implements IValue {
                constructor(data: any, localized: string);
                data: any;
                localized: string;
            }
        }

        export interface IEditActorCellContext {
            propType: IPropertyType;
            originalValue: IValue;
            record: IRecord;
            column: ColumnInfo;
            field: GridField;
            fieldKey: string;
            cellExpandSpace: { left: number; top: number; fight: number; bottom: number; };
            SetCurrentValue(value: any): void;
        }

        export interface IEditControlCellContext extends IEditActorCellContext {
            cellWidth: number;
            cellHeight: number;
            cellStyle: any; //TODO: Determine correct type
            cellRect: any;
            NotifyExpandControl(): void;
            NotifyEditComplete(): void;
            Show(element: HTMLElement): void;
            Hide(element: HTMLElement): void;
        }


        export namespace EditControl {

        }

        export interface IEditControl {
            SupportedWriteMode?: SP.JsGrid.EditActorWriteType;
            SupportedReadMode?: SP.JsGrid.EditActorReadType;
            GetCellContext?(): IEditControlCellContext;
            GetOriginalValue?(): IValue;
            SetValue?(value: IValue): void;
            Dispose(): void;
            GetInputElement?(): HTMLElement;
            Focus?(eventInfo: Sys.UI.DomEvent): void;
            BindToCell(cellContext: IEditControlCellContext): void;
            OnBeginEdit(eventInfo: Sys.UI.DomEvent): void;
            Unbind(): void;
            OnEndEdit(): void;
            OnCellMove?(): void;
            OnValueChanged?(newValue: IValue): void;
            IsCurrentlyUsingGridTextInputElement?(): boolean;
            SetSize?(width: number, height: number): void;
        }


        export class StaticDataSource {
            constructor(jsGridData: IGridData, optFnGetPropType?: Function);
            AddColumn(gridField: SP.JsGrid.GridField, values: IValue[]):void;
            RemoveColumn(fieldKey: string):void;
            InitJsGridParams(optGridParams?: JsGridControl.Parameters): JsGridControl.Parameters;
        }

        export interface IGridData {
            MetaData: IGridMetadata

            Fields: IFieldInfo[];
            Columns: IColumnInfo[];

            LocalizedTable: any[];
            UnlocalizedTable: any[];
            ViewInfo: any[];

            MultiValueSeparator?: string;
            LookupTableInfo?: ILookupTableInfo[];
            PivotedColumns?: ColumnInfo[];
            PaneLayout?: PaneLayout;
            GanttInfo?: any;
            AutoFilterableColumns?: boolean;
            AutoFilterState?: any;
            SortState?: any[];
            HierarchyState?: any;
            TopRecord?: number;
            RecordCount?: number;
            AdditionalParams?: any;
            CellStyles?: any;
            GroupingGridRowStyleIds?: any[];
            UnfilteredHierarchy?: any;
            AutoFilterEntries?: any;

            ViewDepKeys?: any[];
        }

        export interface IColumnInfo {
            /** Column title */
            name: string;
            /** Column image URL.
                If not null, the column header cell will show the image instead of title text.
                If the title is defined at the same time as the imgSrc, the title will be shown as a tooltip. */
            imgSrc?: string;
            /** Column identifier */
            columnKey: string;
            /** Column identifier */
            fieldKey: string;
            /** Field keys of the fields, that are displayed in this column */
            fieldKeys: string[];
            /** Width of the column */
            width: number;
            /** true by default */
            isVisible?: boolean;
            /** true by default */
            isHidable?: boolean;
            /** true by default */
            isResizable?: boolean;
            /** true by default */
            isSortable?: boolean;
            /** true by default */
            isAutoFilterable?: boolean;
            /** false by default */
            isFooter?: boolean;
        }

        export interface IGridMetadata {
            KeyColumnName: string;
            IsGanttEnabled?: boolean;
            IsHierarchyEnabled?: boolean;
            IsSorted?: boolean;
            GroupingLevel?: number;
            GroupingPrefix?: string;
            RecordKeyHash?: string;
            RecordKeyOrderChanged?: any;
            GridOperationalConstantsFieldKeyMap?: { [index: number]: string };

        }

        export interface IFieldInfo {
            fieldKey: string;
            propertyTypeId: string;
            editMode?: EditMode;
            hasDataValue?: boolean;
            hasLocalizedValue?: boolean;
            multiValue?: boolean;
            textDirection?: TextDirection;
            dateOnly?: boolean;
            defaultCellStyleId?: any;

        }

        export interface ILookupTableInfo {
            id: string;
            showImage?: boolean;
            showText?: boolean;
            limitToList?: boolean;
            lookup: ILookupInfo[];
        }
        export interface ILookupInfo {
            localString: string;
            value: number;
        }


    }

    export namespace Utilities {
        export class Set {
            constructor(items?: { [item: string]: number });
            constructor(items?: { [item: number]: number });
            /** Returns true if the set is empty */
            IsEmpty(): boolean;
            /** Returns first item in the set */
            First(): any;
            /** Returns the underlying collection of items as dictionary.
                Items are the keys, and values are always 1.
                So the return value may be either { [item: string]: number } or { [item: number]: number } */
            GetCollection(): any;
            /** Returns all items from the set as an array */
            ToArray(): any[];
            /** Adds all items from array to the set, and returns the set */
            AddArray(array: any[]): SP.Utilities.Set;
            /** Adds an item to the set */
            Add(item: any): any;
            /** Removes the specified item from the set and returns the removed item */
            Remove(item: any): any;
            /** Clears all the items from set */
            Clear(): SP.Utilities.Set;
            /** Returns true if item exists in this set */
            Contains(item: any): boolean;
            /** Returns a copy of this set */
            Clone(): SP.Utilities.Set;
            /** Returns a set that contains all the items that exist only in one of the sets (this and other), but not in both */
            SymmetricDifference(otherSet: SP.Utilities.Set): SP.Utilities.Set; 
            /** Returns a set that contains all the items that are in this set but not in the otherSet */
            Difference(otherSet: SP.Utilities.Set): SP.Utilities.Set;
            /** Returns a new set, that contains items from this set and otherSet */
            Union(otherSet: SP.Utilities.Set): SP.Utilities.Set;
            /** Adds all items from otherSet to this set, and returns this set */
            UnionWith(otherSet: SP.Utilities.Set): SP.Utilities.Set;
            /** Returns a new set, that contains only items that exist both in this set and the otherSet */
            Intersection(otherSet: SP.Utilities.Set): SP.Utilities.Set;
        }
    }
}



