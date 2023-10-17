declare namespace DevExpress.AspNetCore {
    enum BootstrapSchedulerGroupType {
        Date = "Date",
        None = "None",
        Resource = "Resource",
    }
    enum BootstrapSchedulerViewType {
        Day = "Day",
        WorkWeek = "WorkWeek",
        Week = "Week",
        Month = "Month",
        Timeline = "Timeline",
        FullWeek = "FullWeek",
        Agenda = "Agenda",
    }
    enum BootstrapSchedulerAppointmentType {
        Normal = "Normal",
        Pattern = "Pattern",
        Occurrence = "Occurrence",
        ChangedOccurrence = "ChangedOccurrence",
        DeletedOccurrence = "DeletedOccurrence",
    }
    enum BootstrapSchedulerRecurrenceRange {
        NoEndDate = "NoEndDate",
        OccurrenceCount = "OccurrenceCount",
        EndByDate = "EndByDate",
    }
    enum BootstrapSchedulerRecurrenceType {
        Daily = "Daily",
        Weekly = "Weekly",
        Monthly = "Monthly",
        Yearly = "Yearly",
        Hourly = "Hourly",
    }
    enum WeekDays {
        Sunday = 1,
        Monday = 2,
        Tuesday = 4,
        Wednesday = 8,
        Thursday = 16,
        Friday = 32,
        Saturday = 64,
        WeekendDays = 65,
        WorkDays = 62,
        EveryDay = 127,
    }
    enum WeekOfMonth {
        None = 0,
        First = 1,
        Second = 2,
        Third = 3,
        Fourth = 4,
        Last = 5,
    }
    enum BootstrapPopupControlCloseReason {
        API = "API",
        CloseButton = "CloseButton",
        OuterMouseClick = "OuterMouseClick",
        MouseOut = "MouseOut",
        Escape = "Escape",
    }

    const Utils: {
        getControls: () => Control[];
        getSerializedEditorValuesInContainer: (
            containerOrId: string | HTMLElement,
            processInvisibleEditors?: boolean,
        ) => any;
        getEditorValuesInContainer: (containerOrId: string | HTMLElement, processInvisibleEditors?: boolean) => any;
    };

    interface EventArgs {
        readonly sender: Control;
    }

    interface CancelEventArgs extends EventArgs {
        cancel: boolean;
    }

    interface BeginCallbackEventArgs extends EventArgs {
        readonly command: string;
    }

    interface ProcessingModeEventArgs extends EventArgs {
        processOnServer: boolean;
    }

    interface ProcessingModeCancelEventArgs extends ProcessingModeEventArgs {
        cancel: boolean;
    }

    interface GlobalBeginCallbackEventArgs extends BeginCallbackEventArgs {
        readonly control: Control;
    }

    interface EndCallbackEventArgs extends EventArgs { // tslint:disable-line:no-empty-interface
    }

    interface GlobalEndCallbackEventArgs extends EndCallbackEventArgs {
        readonly control: Control;
    }

    interface CustomDataCallbackEventArgs extends EventArgs {
        result: string;
    }

    interface CallbackErrorEventArgs extends EventArgs {
        handled: boolean;
        message: string;
    }

    interface GlobalCallbackErrorEventArgs extends CallbackErrorEventArgs {
        readonly control: Control;
    }

    interface EditValidationEventArgs extends EventArgs {
        errorText: string;
        isValid: boolean;
        value: string;
    }

    interface ValidationCompletedEventArgs extends EventArgs {
        readonly container: any;
        readonly firstInvalidControl: Control;
        readonly firstVisibleInvalidControl: Control;
        readonly invisibleControlsValidated: boolean;
        isValid: boolean;
        readonly validationGroup: string;
    }

    interface EditClickEventArgs extends EventArgs {
        readonly htmlElement: any;
        readonly htmlEvent: any;
    }

    interface EditKeyEventArgs extends EventArgs {
        readonly htmlEvent: any;
    }

    class Control {
        protected readonly instance: any;
        protected constructor(instance: any);
        readonly name: string;
        adjustControl(): void;
        getHeight(): number;
        getMainElement(): any;
        getParentControl(): any;
        getVisible(): boolean;
        getWidth(): number;
        inCallback(): boolean;
        sendMessageToAssistiveTechnology(message: string): void;
        setHeight(height: number): void;
        setVisible(visible: boolean): void;
        setWidth(width: number): void;
        on<K extends keyof ControlEventMap>(
            eventName: K,
            callback: (this: Control, args?: ControlEventMap[K]) => void,
        ): this;
        once<K extends keyof ControlEventMap>(
            eventName: K,
            callback: (this: Control, args?: ControlEventMap[K]) => void,
        ): this;
        off<K extends keyof ControlEventMap>(): this; // eslint-disable-line @definitelytyped/no-unnecessary-generics
        off<K extends keyof ControlEventMap>(eventName: K): this; // tslint:disable-line:unified-signatures no-unnecessary-generics
        off<K extends keyof ControlEventMap>(
            eventName: K,
            callback: (this: Control, args?: ControlEventMap[K]) => void, // tslint:disable-line:unified-signatures
        ): this;
    }
    interface ControlEventMap {
        "init": EventArgs;
    }

    class BootstrapClientEdit extends Control {
        focus(): void;
        getCaption(): string;
        getEnabled(): boolean;
        getErrorText(): string;
        getInputElement(): any;
        getIsValid(): boolean;
        getReadOnly(): boolean;
        getValue(): any;
        setCaption(caption: string): void;
        setEnabled(value: boolean): void;
        setErrorText(errorText: string): void;
        setIsValid(isValid: boolean): void;
        setReadOnly(readOnly: boolean): void;
        setValue(value: any): void;
        validate(): void;
        on<K extends keyof BootstrapClientEditEventMap>(
            eventName: K,
            callback: (this: BootstrapClientEdit, args?: BootstrapClientEditEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapClientEditEventMap>(
            eventName: K,
            callback: (this: BootstrapClientEdit, args?: BootstrapClientEditEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapClientEditEventMap>(
            eventName?: K,
            callback?: (this: BootstrapClientEdit, args?: BootstrapClientEditEventMap[K]) => void,
        ): this;
    }
    interface BootstrapClientEditEventMap extends ControlEventMap {
        "gotFocus": EventArgs;
        "lostFocus": EventArgs;
        "validation": EditValidationEventArgs;
        "valueChanged": ProcessingModeEventArgs;
    }

    interface AccordionItemEventArgs extends ProcessingModeEventArgs {
        readonly htmlElement: object;
        readonly htmlEvent: object;
        readonly item: BootstrapAccordionItem;
    }

    interface AccordionGroupEventArgs extends EventArgs {
        readonly group: BootstrapAccordionGroup;
    }

    interface AccordionGroupCancelEventArgs extends ProcessingModeCancelEventArgs {
        readonly group: BootstrapAccordionGroup;
    }

    interface AccordionGroupClickEventArgs extends AccordionGroupCancelEventArgs {
        readonly htmlElement: object;
        readonly htmlEvent: object;
    }

    class BootstrapAccordion extends Control {
        collapseAll(): void;
        expandAll(): void;
        getActiveGroup(): BootstrapAccordionGroup | null;
        getGroup(index: number): BootstrapAccordionGroup | null;
        getGroupByName(name: string): BootstrapAccordionGroup | null;
        getGroupCount(): number;
        getItemByName(name: string): BootstrapAccordionItem | null;
        getSelectedItem(): BootstrapAccordionItem | null;
        setActiveGroup(group: BootstrapAccordionGroup): void;
        setSelectedItem(item: BootstrapAccordionItem): void;
        on<K extends keyof BootstrapAccordionEventMap>(
            eventName: K,
            callback: (this: BootstrapAccordion, args?: BootstrapAccordionEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapAccordionEventMap>(
            eventName: K,
            callback: (this: BootstrapAccordion, args?: BootstrapAccordionEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapAccordionEventMap>(
            eventName?: K,
            callback?: (this: BootstrapAccordion, args?: BootstrapAccordionEventMap[K]) => void,
        ): this;
    }
    interface BootstrapAccordionEventMap extends ControlEventMap {
        "beginCallback": BeginCallbackEventArgs;
        "callbackError": CallbackErrorEventArgs;
        "endCallback": EndCallbackEventArgs;
        "expandedChanged": AccordionGroupEventArgs;
        "expandedChanging": AccordionGroupCancelEventArgs;
        "headerClick": AccordionGroupClickEventArgs;
        "itemClick": AccordionItemEventArgs;
    }

    class BootstrapAccordionGroup {
        protected readonly instance: any;
        protected constructor(instance: any);
        readonly index: number;
        readonly name: string;
        readonly navBar: BootstrapAccordion | null;
        getEnabled(): boolean;
        getExpanded(): boolean;
        getHeaderBadgeIconCssClass(): string;
        getHeaderBadgeText(): string;
        getItem(index: number): BootstrapAccordionItem | null;
        getItemByName(name: string): BootstrapAccordionItem | null;
        getItemCount(): number;
        getText(): string;
        getVisible(): boolean;
        setExpanded(value: boolean): void;
        setHeaderBadgeIconCssClass(cssClass: string): void;
        setHeaderBadgeText(text: string): void;
        setText(text: string): void;
        setVisible(value: boolean): void;
    }

    class BootstrapAccordionItem {
        protected readonly instance: any;
        protected constructor(instance: any);
        readonly group: BootstrapAccordionGroup | null;
        readonly index: number;
        readonly name: string;
        readonly navBar: BootstrapAccordion | null;
        getBadgeIconCssClass(): string;
        getBadgeText(): string;
        getEnabled(): boolean;
        getIconCssClass(): string;
        getImageUrl(): string;
        getNavigateUrl(): string;
        getText(): string;
        getVisible(): boolean;
        setBadgeIconCssClass(cssClass: string): void;
        setBadgeText(text: string): void;
        setEnabled(value: boolean): void;
        setIconCssClass(cssClass: string): void;
        setImageUrl(value: string): void;
        setNavigateUrl(value: string): void;
        setText(value: string): void;
        setVisible(value: boolean): void;
    }

    class BootstrapBinaryImage extends BootstrapClientEdit {
        clear(): void;
        getUploadedFileName(): string;
        getValue(): any;
        performCallback(data: any): Promise<void>;
        performCallback(data: any, onSuccess: () => void): void;
        setSize(width: number, height: number): void;
        setValue(value: any): void;
        on<K extends keyof BootstrapBinaryImageEventMap>(
            eventName: K,
            callback: (this: BootstrapBinaryImage, args?: BootstrapBinaryImageEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapBinaryImageEventMap>(
            eventName: K,
            callback: (this: BootstrapBinaryImage, args?: BootstrapBinaryImageEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapBinaryImageEventMap>(
            eventName?: K,
            callback?: (this: BootstrapBinaryImage, args?: BootstrapBinaryImageEventMap[K]) => void,
        ): this;
    }
    interface BootstrapBinaryImageEventMap extends BootstrapClientEditEventMap {
        "beginCallback": BeginCallbackEventArgs;
        "callbackError": CallbackErrorEventArgs;
        "click": EditClickEventArgs;
        "endCallback": EndCallbackEventArgs;
    }

    interface ButtonClickEventArgs extends ProcessingModeEventArgs {
        readonly cancelEventAndBubble: boolean;
    }

    class BootstrapButton extends Control {
        doClick(): void;
        focus(): void;
        getBadgeIconCssClass(): string;
        getBadgeText(): string;
        getChecked(): boolean;
        getEnabled(): boolean;
        getImageUrl(): string;
        getText(): string;
        setBadgeIconCssClass(cssClass: string): void;
        setBadgeText(text: string): void;
        setChecked(value: boolean): void;
        setEnabled(value: boolean): void;
        setImageUrl(value: string): void;
        setText(value: string): void;
        on<K extends keyof BootstrapButtonEventMap>(
            eventName: K,
            callback: (this: BootstrapButton, args?: BootstrapButtonEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapButtonEventMap>(
            eventName: K,
            callback: (this: BootstrapButton, args?: BootstrapButtonEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapButtonEventMap>(
            eventName?: K,
            callback?: (this: BootstrapButton, args?: BootstrapButtonEventMap[K]) => void,
        ): this;
    }
    interface BootstrapButtonEventMap extends ControlEventMap {
        "checkedChanged": ProcessingModeEventArgs;
        "click": ButtonClickEventArgs;
        "gotFocus": EventArgs;
        "lostFocus": EventArgs;
    }

    interface CalendarCustomDisabledDateEventArgs extends EventArgs {
        readonly date: Date;
        isDisabled: boolean;
    }

    class BootstrapCalendar extends BootstrapClientEdit {
        clearSelection(): void;
        deselectDate(date: Date): void;
        deselectRange(start: Date, end: Date): void;
        getEnabled(): boolean;
        getMaxDate(): Date;
        getMinDate(): Date;
        getSelectedDate(): Date;
        getSelectedDates(): Date[];
        getVisibleDate(): Date;
        isDateSelected(date: Date): boolean;
        selectDate(date: Date): void;
        selectRange(start: Date, end: Date): void;
        setEnabled(enabled: boolean): void;
        setMaxDate(date: Date): void;
        setMinDate(date: Date): void;
        setSelectedDate(date: Date): void;
        setVisibleDate(date: Date): void;
        on<K extends keyof BootstrapCalendarEventMap>(
            eventName: K,
            callback: (this: BootstrapCalendar, args?: BootstrapCalendarEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapCalendarEventMap>(
            eventName: K,
            callback: (this: BootstrapCalendar, args?: BootstrapCalendarEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapCalendarEventMap>(
            eventName?: K,
            callback?: (this: BootstrapCalendar, args?: BootstrapCalendarEventMap[K]) => void,
        ): this;
    }
    interface BootstrapCalendarEventMap extends BootstrapClientEditEventMap {
        "beginCallback": BeginCallbackEventArgs;
        "callbackError": CallbackErrorEventArgs;
        "customDisabledDate": CalendarCustomDisabledDateEventArgs;
        "endCallback": EndCallbackEventArgs;
        "keyDown": EditKeyEventArgs;
        "keyPress": EditKeyEventArgs;
        "keyUp": EditKeyEventArgs;
        "selectionChanged": ProcessingModeEventArgs;
        "visibleMonthChanged": ProcessingModeEventArgs;
    }

    interface GridToolbarItemClickEventArgs extends ProcessingModeEventArgs {
        readonly item: BootstrapMenuItem;
        readonly toolbarIndex: number;
        readonly toolbarName: string;
        usePostBack: boolean;
    }

    class BootstrapGridBase extends Control {
        getToolbar(index: number): BootstrapMenu | null;
        getToolbarByName(name: string): BootstrapMenu | null;
        on<K extends keyof BootstrapGridBaseEventMap>(
            eventName: K,
            callback: (this: BootstrapGridBase, args?: BootstrapGridBaseEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapGridBaseEventMap>(
            eventName: K,
            callback: (this: BootstrapGridBase, args?: BootstrapGridBaseEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapGridBaseEventMap>(
            eventName?: K,
            callback?: (this: BootstrapGridBase, args?: BootstrapGridBaseEventMap[K]) => void,
        ): this;
    }
    interface BootstrapGridBaseEventMap extends ControlEventMap {
        "toolbarItemClick": GridToolbarItemClickEventArgs;
    }

    interface CardViewColumnCancelEventArgs extends CancelEventArgs {
        readonly column: BootstrapCardViewColumn;
    }

    interface CardViewCardFocusingEventArgs extends CancelEventArgs {
        readonly htmlEvent: any;
        readonly visibleIndex: number;
    }

    interface CardViewCardClickEventArgs extends CancelEventArgs {
        readonly htmlEvent: any;
        readonly visibleIndex: number;
    }

    interface CardViewCustomButtonEventArgs extends ProcessingModeEventArgs {
        readonly buttonID: string;
        readonly visibleIndex: number;
    }

    interface CardViewSelectionEventArgs extends ProcessingModeEventArgs {
        readonly isAllRecordsOnPage: boolean;
        readonly isChangedOnServer: boolean;
        readonly isSelected: boolean;
        readonly visibleIndex: number;
    }

    interface CardViewFocusEventArgs extends ProcessingModeEventArgs {
        readonly isChangedOnServer: boolean;
    }

    interface CardViewBatchEditStartEditingEventArgs extends CancelEventArgs {
        readonly cardValues: any;
        focusedColumn: BootstrapCardViewColumn;
        readonly visibleIndex: number;
    }

    interface CardViewBatchEditEndEditingEventArgs extends CancelEventArgs {
        readonly cardValues: any;
        readonly visibleIndex: number;
    }

    interface CardViewBatchEditCardValidatingEventArgs extends EventArgs {
        readonly validationInfo: any;
        readonly visibleIndex: number;
    }

    interface CardViewBatchEditConfirmShowingEventArgs extends CancelEventArgs {
        readonly requestTriggerID: string;
    }

    interface CardViewBatchEditTemplateCellFocusedEventArgs extends EventArgs {
        readonly column: BootstrapCardViewColumn;
        handled: boolean;
    }

    interface CardViewBatchEditChangesSavingEventArgs extends CancelEventArgs {
        readonly deletedValues: any;
        readonly insertedValues: any;
        readonly updatedValues: any;
    }

    interface CardViewBatchEditChangesCancelingEventArgs extends CancelEventArgs {
        readonly deletedValues: any;
        readonly insertedValues: any;
        readonly updatedValues: any;
    }

    interface CardViewBatchEditCardInsertingEventArgs extends CancelEventArgs {
        readonly visibleIndex: number;
    }

    interface CardViewBatchEditCardDeletingEventArgs extends CancelEventArgs {
        readonly cardValues: any;
        readonly visibleIndex: number;
    }

    interface CardViewFocusedCellChangingEventArgs extends CancelEventArgs {
        readonly cellInfo: BootstrapCardViewCellInfo;
    }

    class BootstrapCardView extends BootstrapGridBase {
        readonly batchEditApi: BootstrapCardViewBatchEditApi | null;
        addNewCard(): void;
        applyFilter(filterExpression: string): void;
        applySearchPanelFilter(value: string): void;
        cancelEdit(): void;
        clearFilter(): void;
        closeFilterControl(): void;
        deleteCard(visibleIndex: number): void;
        deleteCardByKey(key: any): void;
        focus(): void;
        focusEditor(column: BootstrapCardViewColumn): void;
        focusEditor(columnIndex: number): void; // tslint:disable-line:unified-signatures
        focusEditor(columnFieldNameOrId: string): void; // tslint:disable-line:unified-signatures unified-signatures
        getCardKey(visibleIndex: number): string;
        getColumn(columnIndex: number): BootstrapCardViewColumn | null;
        getColumnByField(columnFieldName: string): BootstrapCardViewColumn | null;
        getColumnById(columnId: string): BootstrapCardViewColumn | null;
        getColumnCount(): number;
        getEditValue(column: BootstrapCardViewColumn): string;
        getEditValue(columnIndex: number): string; // tslint:disable-line:unified-signatures
        getEditValue(columnFieldNameOrId: string): string; // tslint:disable-line:unified-signatures unified-signatures
        getEditor(column: BootstrapCardViewColumn): BootstrapClientEdit;
        getEditor(columnIndex: number): BootstrapClientEdit; // tslint:disable-line:unified-signatures
        getEditor(columnFieldNameOrId: string): BootstrapClientEdit; // tslint:disable-line:unified-signatures unified-signatures
        getFocusedCardIndex(): number;
        getFocusedCell(): BootstrapCardViewCellInfo | null;
        getPageCount(): number;
        getPageIndex(): number;
        getPopupEditForm(): BootstrapPopupControl | null;
        getSelectedCardCount(): number;
        getSelectedKeysOnPage(): any[];
        getTopVisibleIndex(): number;
        getVerticalScrollPosition(): number;
        getVisibleCardsOnPage(): number;
        gotoPage(pageIndex: number): void;
        hideCustomizationWindow(): void;
        isCardSelectedOnPage(visibleIndex: number): boolean;
        isCustomizationWindowVisible(): boolean;
        isEditing(): boolean;
        isNewCardEditing(): boolean;
        moveColumn(column: BootstrapCardViewColumn): void;
        moveColumn(columnIndex: number): void; // tslint:disable-line:unified-signatures
        moveColumn(columnFieldNameOrId: string): void; // tslint:disable-line:unified-signatures unified-signatures
        moveColumn(column: BootstrapCardViewColumn, moveToColumnVisibleIndex: number): void; // tslint:disable-line:unified-signatures
        moveColumn(columnIndex: number, moveToColumnVisibleIndex: number): void; // tslint:disable-line:unified-signatures unified-signatures
        moveColumn(columnFieldNameOrId: string, moveToColumnVisibleIndex: number): void; // tslint:disable-line:unified-signatures unified-signatures unified-signatures
        moveColumn(column: BootstrapCardViewColumn, moveToColumnVisibleIndex: number, moveBefore: boolean): void; // tslint:disable-line:unified-signatures
        moveColumn(columnIndex: number, moveToColumnVisibleIndex: number, moveBefore: boolean): void; // tslint:disable-line:unified-signatures unified-signatures
        moveColumn(columnFieldNameOrId: string, moveToColumnVisibleIndex: number, moveBefore: boolean): void; // tslint:disable-line:unified-signatures unified-signatures unified-signatures
        nextPage(): void;
        performCallback(data: any): Promise<void>;
        performCallback(data: any, onSuccess: () => void): void;
        prevPage(): void;
        refresh(): void;
        selectAllCardsOnPage(): void;
        selectCardOnPage(visibleIndex: number): void;
        selectCardOnPage(visibleIndex: number, selected: boolean): void; // tslint:disable-line:unified-signatures
        selectCards(): void;
        selectCardsByKey(keys: any[]): void;
        selectCardsByKey(key: any): void; // tslint:disable-line:unified-signatures
        selectCardsByKey(keys: any[], selected: boolean): void; // tslint:disable-line:unified-signatures
        selectCardsByKey(key: any, selected: boolean): void; // tslint:disable-line:unified-signatures unified-signatures
        setEditValue(column: BootstrapCardViewColumn, value: string): void;
        setEditValue(columnIndex: number, value: string): void; // tslint:disable-line:unified-signatures
        setEditValue(columnFieldNameOrId: string, value: string): void; // tslint:disable-line:unified-signatures unified-signatures
        setFilterEnabled(isFilterEnabled: boolean): void;
        setFocusedCardIndex(visibleIndex: number): void;
        setFocusedCell(cardVisibleIndex: number, columnIndex: number): void;
        setSearchPanelCustomEditor(editor: BootstrapClientEdit): void;
        setVerticalScrollPosition(position: number): void;
        showCustomizationWindow(): void;
        showFilterControl(): void;
        sortBy(column: BootstrapCardViewColumn): void;
        sortBy(columnIndex: number): void; // tslint:disable-line:unified-signatures
        sortBy(columnFieldNameOrId: string): void; // tslint:disable-line:unified-signatures unified-signatures
        sortBy(column: BootstrapCardViewColumn, sortOrder: string): void; // tslint:disable-line:unified-signatures
        sortBy(columnIndex: number, sortOrder: string): void; // tslint:disable-line:unified-signatures unified-signatures
        sortBy(columnFieldNameOrId: string, sortOrder: string): void; // tslint:disable-line:unified-signatures unified-signatures unified-signatures
        sortBy(column: BootstrapCardViewColumn, sortOrder: string, reset: boolean): void; // tslint:disable-line:unified-signatures
        sortBy(columnIndex: number, sortOrder: string, reset: boolean): void; // tslint:disable-line:unified-signatures unified-signatures
        sortBy(columnFieldNameOrId: string, sortOrder: string, reset: boolean): void; // tslint:disable-line:unified-signatures unified-signatures unified-signatures
        sortBy(column: BootstrapCardViewColumn, sortOrder: string, reset: boolean, sortIndex: number): void; // tslint:disable-line:unified-signatures
        sortBy(columnIndex: number, sortOrder: string, reset: boolean, sortIndex: number): void; // tslint:disable-line:unified-signatures unified-signatures
        sortBy(columnFieldNameOrId: string, sortOrder: string, reset: boolean, sortIndex: number): void; // tslint:disable-line:unified-signatures unified-signatures unified-signatures
        startEditCard(visibleIndex: number): void;
        startEditCardByKey(key: any): void;
        unselectAllCardsOnPage(): void;
        unselectCardOnPage(visibleIndex: number): void;
        unselectCards(): void;
        unselectCardsByKey(keys: any[]): void;
        unselectCardsByKey(key: any): void; // tslint:disable-line:unified-signatures
        unselectFilteredCards(): void;
        updateEdit(): void;
        on<K extends keyof BootstrapCardViewEventMap>(
            eventName: K,
            callback: (this: BootstrapCardView, args?: BootstrapCardViewEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapCardViewEventMap>(
            eventName: K,
            callback: (this: BootstrapCardView, args?: BootstrapCardViewEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapCardViewEventMap>(
            eventName?: K,
            callback?: (this: BootstrapCardView, args?: BootstrapCardViewEventMap[K]) => void,
        ): this;
    }
    interface BootstrapCardViewEventMap extends BootstrapGridBaseEventMap {
        "batchEditCardDeleting": CardViewBatchEditCardDeletingEventArgs;
        "batchEditCardInserting": CardViewBatchEditCardInsertingEventArgs;
        "batchEditCardValidating": CardViewBatchEditCardValidatingEventArgs;
        "batchEditChangesCanceling": CardViewBatchEditChangesCancelingEventArgs;
        "batchEditChangesSaving": CardViewBatchEditChangesSavingEventArgs;
        "batchEditConfirmShowing": CardViewBatchEditConfirmShowingEventArgs;
        "batchEditEndEditing": CardViewBatchEditEndEditingEventArgs;
        "batchEditStartEditing": CardViewBatchEditStartEditingEventArgs;
        "batchEditTemplateCellFocused": CardViewBatchEditTemplateCellFocusedEventArgs;
        "beginCallback": BeginCallbackEventArgs;
        "callbackError": CallbackErrorEventArgs;
        "cardClick": CardViewCardClickEventArgs;
        "cardDblClick": CardViewCardClickEventArgs;
        "cardFocusing": CardViewCardFocusingEventArgs;
        "columnSorting": CardViewColumnCancelEventArgs;
        "customButtonClick": CardViewCustomButtonEventArgs;
        "customizationWindowCloseUp": EventArgs;
        "endCallback": EndCallbackEventArgs;
        "focusedCardChanged": CardViewFocusEventArgs;
        "focusedCellChanging": CardViewFocusedCellChangingEventArgs;
        "selectionChanged": CardViewSelectionEventArgs;
    }

    class BootstrapCardViewBatchEditApi {
        protected readonly instance: any;
        protected constructor(instance: any);
        addNewCard(): void;
        deleteCard(visibleIndex: number): void;
        deleteCardByKey(key: any): void;
        getCardVisibleIndices(includeDeleted: boolean): number[];
        getDeletedCardIndices(): number[];
        getInsertedCardIndices(): number[];
        isDeletedCard(visibleIndex: number): boolean;
        isNewCard(visibleIndex: number): boolean;
        recoverCard(visibleIndex: number): void;
        recoverCardByKey(key: any): void;
        validateCard(visibleIndex: number): boolean;
        validateCards(validateOnlyModified: boolean): boolean;
    }

    class BootstrapCardViewColumn {
        protected readonly instance: any;
        protected constructor(instance: any);
    }

    class BootstrapCardViewCellInfo {
        protected readonly instance: any;
        protected constructor(instance: any);
        readonly cardVisibleIndex: number;
        endEdit(): void;
        getCellTextContainer(visibleIndex: number, columnFieldNameOrId: string): any;
        getCellValue(visibleIndex: number, columnFieldNameOrId: string, initial: boolean): any;
        getColumnDisplayText(columnFieldNameOrId: string, value: any): string;
        getEditCellInfo(): BootstrapCardViewCellInfo | null;
        hasChanges(): boolean;
        moveFocusBackward(): boolean;
        moveFocusForward(): boolean;
        resetChanges(visibleIndex: number): void;
        resetChanges(visibleIndex: number, columnIndex: number): void; // tslint:disable-line:unified-signatures
        setCellValue(visibleIndex: number, columnFieldNameOrId: string, value: any): void;
        setCellValue(
            visibleIndex: number,
            columnFieldNameOrId: string,
            value: any,
            displayText: string,
            cancelCellHighlighting: boolean,
        ): void;
        startEdit(visibleIndex: number, columnIndex: number): void;
    }

    interface BootstrapChartEventArgsBase extends EventArgs {
        readonly component: any;
        readonly element: any;
    }

    interface BootstrapChartErrorEventArgs extends BootstrapChartEventArgsBase {
        readonly target: any;
    }

    interface BootstrapChartElementActionEventArgs extends BootstrapChartEventArgsBase {
        readonly target: any;
    }

    interface BootstrapChartElementClickEventArgs extends BootstrapChartElementActionEventArgs {
        readonly jQueryEvent: any;
    }

    interface BootstrapChartExportEventArgs extends BootstrapChartEventArgsBase {
        cancel: boolean;
        readonly data: any;
        readonly fileName: string;
        readonly format: string;
    }

    interface BootstrapChartOptionChangedEventArgs extends BootstrapChartEventArgsBase {
        readonly fullName: string;
        readonly name: string;
        readonly previousValue: any;
        readonly value: any;
    }

    interface BootstrapChartZoomEndEventArgs extends BootstrapChartEventArgsBase {
        readonly rangeEnd: any;
        readonly rangeStart: any;
    }

    class BootstrapChart extends Control {
        exportTo(format: string, fileName: string): void;
        getDataSource(): any;
        getInstance(): any;
        print(): void;
        setDataSource(dataSource: any): void;
        setOptions(options: any): void;
        on<K extends keyof BootstrapChartEventMap>(
            eventName: K,
            callback: (this: BootstrapChart, args?: BootstrapChartEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapChartEventMap>(
            eventName: K,
            callback: (this: BootstrapChart, args?: BootstrapChartEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapChartEventMap>(
            eventName?: K,
            callback?: (this: BootstrapChart, args?: BootstrapChartEventMap[K]) => void,
        ): this;
    }
    interface BootstrapChartEventMap extends ControlEventMap {
        "argumentAxisClick": BootstrapChartElementClickEventArgs;
        "disposing": BootstrapChartEventArgsBase;
        "done": BootstrapChartEventArgsBase;
        "drawn": BootstrapChartEventArgsBase;
        "exported": BootstrapChartEventArgsBase;
        "exporting": BootstrapChartExportEventArgs;
        "fileSaving": BootstrapChartExportEventArgs;
        "incidentOccurred": BootstrapChartErrorEventArgs;
        "init": BootstrapChartEventArgsBase;
        "legendClick": BootstrapChartElementClickEventArgs;
        "optionChanged": BootstrapChartOptionChangedEventArgs;
        "pointClick": BootstrapChartElementClickEventArgs;
        "pointHoverChanged": BootstrapChartElementActionEventArgs;
        "pointSelectionChanged": BootstrapChartElementActionEventArgs;
        "seriesClick": BootstrapChartElementClickEventArgs;
        "seriesHoverChanged": BootstrapChartElementActionEventArgs;
        "seriesSelectionChanged": BootstrapChartElementActionEventArgs;
        "tooltipHidden": BootstrapChartElementActionEventArgs;
        "tooltipShown": BootstrapChartElementActionEventArgs;
        "zoomEnd": BootstrapChartZoomEndEventArgs;
        "zoomStart": BootstrapChartEventArgsBase;
    }

    class BootstrapPolarChart extends Control {
        exportTo(format: string, fileName: string): void;
        getDataSource(): any;
        getInstance(): any;
        print(): void;
        setDataSource(dataSource: any): void;
        setOptions(options: any): void;
        on<K extends keyof BootstrapPolarChartEventMap>(
            eventName: K,
            callback: (this: BootstrapPolarChart, args?: BootstrapPolarChartEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapPolarChartEventMap>(
            eventName: K,
            callback: (this: BootstrapPolarChart, args?: BootstrapPolarChartEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapPolarChartEventMap>(
            eventName?: K,
            callback?: (this: BootstrapPolarChart, args?: BootstrapPolarChartEventMap[K]) => void,
        ): this;
    }
    interface BootstrapPolarChartEventMap extends ControlEventMap {
        "argumentAxisClick": BootstrapChartElementClickEventArgs;
        "disposing": BootstrapChartEventArgsBase;
        "done": BootstrapChartEventArgsBase;
        "drawn": BootstrapChartEventArgsBase;
        "exported": BootstrapChartEventArgsBase;
        "exporting": BootstrapChartExportEventArgs;
        "fileSaving": BootstrapChartExportEventArgs;
        "incidentOccurred": BootstrapChartErrorEventArgs;
        "init": BootstrapChartEventArgsBase;
        "legendClick": BootstrapChartElementClickEventArgs;
        "optionChanged": BootstrapChartOptionChangedEventArgs;
        "pointClick": BootstrapChartElementClickEventArgs;
        "pointHoverChanged": BootstrapChartElementActionEventArgs;
        "pointSelectionChanged": BootstrapChartElementActionEventArgs;
        "seriesClick": BootstrapChartElementClickEventArgs;
        "seriesHoverChanged": BootstrapChartElementActionEventArgs;
        "seriesSelectionChanged": BootstrapChartElementActionEventArgs;
        "tooltipHidden": BootstrapChartElementActionEventArgs;
        "tooltipShown": BootstrapChartElementActionEventArgs;
    }

    class BootstrapPieChart extends Control {
        exportTo(format: string, fileName: string): void;
        getDataSource(): any;
        getInstance(): any;
        print(): void;
        setDataSource(dataSource: any): void;
        setOptions(options: any): void;
        on<K extends keyof BootstrapPieChartEventMap>(
            eventName: K,
            callback: (this: BootstrapPieChart, args?: BootstrapPieChartEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapPieChartEventMap>(
            eventName: K,
            callback: (this: BootstrapPieChart, args?: BootstrapPieChartEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapPieChartEventMap>(
            eventName?: K,
            callback?: (this: BootstrapPieChart, args?: BootstrapPieChartEventMap[K]) => void,
        ): this;
    }
    interface BootstrapPieChartEventMap extends ControlEventMap {
        "disposing": BootstrapChartEventArgsBase;
        "done": BootstrapChartEventArgsBase;
        "drawn": BootstrapChartEventArgsBase;
        "exported": BootstrapChartEventArgsBase;
        "exporting": BootstrapChartExportEventArgs;
        "fileSaving": BootstrapChartExportEventArgs;
        "incidentOccurred": BootstrapChartErrorEventArgs;
        "init": BootstrapChartEventArgsBase;
        "legendClick": BootstrapChartElementClickEventArgs;
        "optionChanged": BootstrapChartOptionChangedEventArgs;
        "pointClick": BootstrapChartElementClickEventArgs;
        "pointHoverChanged": BootstrapChartElementActionEventArgs;
        "pointSelectionChanged": BootstrapChartElementActionEventArgs;
        "tooltipHidden": BootstrapChartElementActionEventArgs;
        "tooltipShown": BootstrapChartElementActionEventArgs;
    }

    class BootstrapCheckBox extends BootstrapClientEdit {
        getCheckState(): string;
        getChecked(): boolean;
        getText(): string;
        setCheckState(checkState: string): void;
        setChecked(isChecked: boolean): void;
        setText(text: string): void;
        on<K extends keyof BootstrapCheckBoxEventMap>(
            eventName: K,
            callback: (this: BootstrapCheckBox, args?: BootstrapCheckBoxEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapCheckBoxEventMap>(
            eventName: K,
            callback: (this: BootstrapCheckBox, args?: BootstrapCheckBoxEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapCheckBoxEventMap>(
            eventName?: K,
            callback?: (this: BootstrapCheckBox, args?: BootstrapCheckBoxEventMap[K]) => void,
        ): this;
    }
    interface BootstrapCheckBoxEventMap extends BootstrapClientEditEventMap {
        "checkedChanged": ProcessingModeEventArgs;
    }

    class BootstrapRadioButton extends BootstrapClientEdit {
        getCheckState(): string;
        getChecked(): boolean;
        getText(): string;
        setCheckState(checkState: string): void;
        setChecked(isChecked: boolean): void;
        setText(text: string): void;
        on<K extends keyof BootstrapRadioButtonEventMap>(
            eventName: K,
            callback: (this: BootstrapRadioButton, args?: BootstrapRadioButtonEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapRadioButtonEventMap>(
            eventName: K,
            callback: (this: BootstrapRadioButton, args?: BootstrapRadioButtonEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapRadioButtonEventMap>(
            eventName?: K,
            callback?: (this: BootstrapRadioButton, args?: BootstrapRadioButtonEventMap[K]) => void,
        ): this;
    }
    interface BootstrapRadioButtonEventMap extends BootstrapClientEditEventMap {
        "checkedChanged": ProcessingModeEventArgs;
    }

    class BootstrapComboBox extends BootstrapClientEdit {
        addItem(texts: string[]): number;
        addItem(text: string): number; // tslint:disable-line:unified-signatures
        addItem(texts: string[], value: any): number; // tslint:disable-line:unified-signatures
        addItem(text: string, value: any): number; // tslint:disable-line:unified-signatures unified-signatures
        addItem(texts: string[], value: any, iconCssClass: string): number; // tslint:disable-line:unified-signatures
        addItem(text: string, value: any, iconCssClass: string): number; // tslint:disable-line:unified-signatures unified-signatures
        addItemCssClass(index: number, className: string): void;
        addItemTextCellCssClass(itemIndex: number, textCellIndex: number, className: string): void;
        adjustDropDownWindow(): void;
        beginUpdate(): void;
        clearItems(): void;
        endUpdate(): void;
        ensureDropDownLoaded(callbackFunction: any): void;
        findItemByText(text: string): BootstrapListBoxItem | null;
        findItemByValue(value: any): BootstrapListBoxItem | null;
        getButtonVisible(number: number): boolean;
        getCaretPosition(): number;
        getItem(index: number): BootstrapListBoxItem | null;
        getItemBadgeIconCssClass(index: number): string;
        getItemBadgeText(index: number): string;
        getItemCount(): number;
        getSelectedIndex(): number;
        getSelectedItem(): BootstrapListBoxItem | null;
        getText(): string;
        hideDropDown(): void;
        insertItem(index: number, texts: string[]): void;
        insertItem(index: number, text: string): void; // tslint:disable-line:unified-signatures
        insertItem(index: number, texts: string[], value: any): void; // tslint:disable-line:unified-signatures
        insertItem(index: number, text: string, value: any): void; // tslint:disable-line:unified-signatures unified-signatures
        insertItem(index: number, texts: string[], value: any, iconCssClass: string): void; // tslint:disable-line:unified-signatures
        insertItem(index: number, text: string, value: any, iconCssClass: string): void; // tslint:disable-line:unified-signatures unified-signatures
        makeItemVisible(index: number): void;
        performCallback(data: any): Promise<void>;
        performCallback(data: any, onSuccess: () => void): void;
        removeItem(index: number): void;
        removeItemCssClass(index: number, className: string): void;
        removeItemTextCellCssClass(itemIndex: number, textCellIndex: number, className: string): void;
        selectAll(): void;
        setButtonVisible(number: number, value: boolean): void;
        setCaretPosition(position: number): void;
        setItemBadgeIconCssClass(index: number, cssClass: string): void;
        setItemBadgeText(index: number, text: string): void;
        setItemHtml(index: number, html: string): void;
        setItemTextCellHtml(itemIndex: number, textCellIndex: number, html: string): void;
        setItemTextCellTooltip(itemIndex: number, textCellIndex: number, tooltip: string): void;
        setItemTooltip(index: number, tooltip: string): void;
        setSelectedIndex(index: number): void;
        setSelectedItem(item: BootstrapListBoxItem): void;
        setSelection(startPos: number, endPos: number, scrollToSelection: boolean): void;
        setText(text: string, applyFilter: boolean): void;
        showDropDown(): void;
        on<K extends keyof BootstrapComboBoxEventMap>(
            eventName: K,
            callback: (this: BootstrapComboBox, args?: BootstrapComboBoxEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapComboBoxEventMap>(
            eventName: K,
            callback: (this: BootstrapComboBox, args?: BootstrapComboBoxEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapComboBoxEventMap>(
            eventName?: K,
            callback?: (this: BootstrapComboBox, args?: BootstrapComboBoxEventMap[K]) => void,
        ): this;
    }
    interface BootstrapComboBoxEventMap extends BootstrapClientEditEventMap {
        "beginCallback": BeginCallbackEventArgs;
        "buttonClick": ButtonEditClickEventArgs;
        "callbackError": CallbackErrorEventArgs;
        "closeUp": EventArgs;
        "customHighlighting": ListEditCustomHighlightingEventArgs;
        "dropDown": EventArgs;
        "endCallback": EndCallbackEventArgs;
        "itemFiltering": ListEditItemFilteringEventArgs;
        "keyDown": EditKeyEventArgs;
        "keyPress": EditKeyEventArgs;
        "keyUp": EditKeyEventArgs;
        "queryCloseUp": CancelEventArgs;
        "selectedIndexChanged": ProcessingModeEventArgs;
        "textChanged": ProcessingModeEventArgs;
        "userInput": EventArgs;
    }

    interface ParseDateEventArgs extends EventArgs {
        readonly date: Date;
        readonly handled: boolean;
        readonly value: string;
    }

    class BootstrapDateEdit extends BootstrapClientEdit {
        adjustDropDownWindow(): void;
        getButtonVisible(number: number): boolean;
        getCalendar(): BootstrapCalendar | null;
        getCaretPosition(): number;
        getDate(): Date;
        getMaxDate(): Date;
        getMinDate(): Date;
        getRangeDayCount(): number;
        getText(): string;
        getTimeEdit(): BootstrapTimeEdit | null;
        hideDropDown(): void;
        selectAll(): void;
        setButtonVisible(number: number, value: boolean): void;
        setCaretPosition(position: number): void;
        setDate(date: Date): void;
        setMaxDate(date: Date): void;
        setMinDate(date: Date): void;
        setSelection(startPos: number, endPos: number, scrollToSelection: boolean): void;
        setText(text: string): void;
        showDropDown(): void;
        on<K extends keyof BootstrapDateEditEventMap>(
            eventName: K,
            callback: (this: BootstrapDateEdit, args?: BootstrapDateEditEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapDateEditEventMap>(
            eventName: K,
            callback: (this: BootstrapDateEdit, args?: BootstrapDateEditEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapDateEditEventMap>(
            eventName?: K,
            callback?: (this: BootstrapDateEdit, args?: BootstrapDateEditEventMap[K]) => void,
        ): this;
    }
    interface BootstrapDateEditEventMap extends BootstrapClientEditEventMap {
        "buttonClick": ButtonEditClickEventArgs;
        "calendarCustomDisabledDate": CalendarCustomDisabledDateEventArgs;
        "closeUp": EventArgs;
        "dateChanged": ProcessingModeEventArgs;
        "dropDown": EventArgs;
        "keyDown": EditKeyEventArgs;
        "keyPress": EditKeyEventArgs;
        "keyUp": EditKeyEventArgs;
        "parseDate": ParseDateEventArgs;
        "queryCloseUp": CancelEventArgs;
        "textChanged": ProcessingModeEventArgs;
        "userInput": EventArgs;
    }

    class BootstrapDropDownEdit extends BootstrapClientEdit {
        adjustDropDownWindow(): void;
        getButtonVisible(number: number): boolean;
        getCaretPosition(): number;
        getKeyValue(): string;
        getText(): string;
        hideDropDown(): void;
        selectAll(): void;
        setButtonVisible(number: number, value: boolean): void;
        setCaretPosition(position: number): void;
        setKeyValue(keyValue: string): void;
        setSelection(startPos: number, endPos: number, scrollToSelection: boolean): void;
        setText(text: string): void;
        showDropDown(): void;
        on<K extends keyof BootstrapDropDownEditEventMap>(
            eventName: K,
            callback: (this: BootstrapDropDownEdit, args?: BootstrapDropDownEditEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapDropDownEditEventMap>(
            eventName: K,
            callback: (this: BootstrapDropDownEdit, args?: BootstrapDropDownEditEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapDropDownEditEventMap>(
            eventName?: K,
            callback?: (this: BootstrapDropDownEdit, args?: BootstrapDropDownEditEventMap[K]) => void,
        ): this;
    }
    interface BootstrapDropDownEditEventMap extends BootstrapClientEditEventMap {
        "buttonClick": ButtonEditClickEventArgs;
        "closeUp": EventArgs;
        "dropDown": EventArgs;
        "keyDown": EditKeyEventArgs;
        "keyPress": EditKeyEventArgs;
        "keyUp": EditKeyEventArgs;
        "queryCloseUp": CancelEventArgs;
        "textChanged": ProcessingModeEventArgs;
        "userInput": EventArgs;
    }

    class BootstrapFormLayout extends Control {
        getItemByName(name: string): BootstrapFormLayoutItem | null;
        on<K extends keyof BootstrapFormLayoutEventMap>(
            eventName: K,
            callback: (this: BootstrapFormLayout, args?: BootstrapFormLayoutEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapFormLayoutEventMap>(
            eventName: K,
            callback: (this: BootstrapFormLayout, args?: BootstrapFormLayoutEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapFormLayoutEventMap>(
            eventName?: K,
            callback?: (this: BootstrapFormLayout, args?: BootstrapFormLayoutEventMap[K]) => void,
        ): this;
    }
    interface BootstrapFormLayoutEventMap extends ControlEventMap { // tslint:disable-line:no-empty-interface
    }

    class BootstrapFormLayoutItem {
        protected readonly instance: any;
        protected constructor(instance: any);
        readonly formLayout: BootstrapFormLayout | null;
        readonly name: string;
        readonly parent: BootstrapFormLayoutItem | null;
        getCaption(): string;
        getItemByName(name: string): BootstrapFormLayoutItem | null;
        getVisible(): boolean;
        setCaption(caption: string): void;
        setVisible(value: boolean): void;
    }

    interface GridViewColumnCancelEventArgs extends CancelEventArgs {
        readonly column: BootstrapGridViewColumn;
    }

    interface GridViewColumnProcessingModeEventArgs extends ProcessingModeEventArgs {
        readonly column: BootstrapGridViewColumn;
    }

    interface GridViewRowCancelEventArgs extends CancelEventArgs {
        readonly visibleIndex: number;
    }

    interface GridViewSelectionEventArgs extends ProcessingModeEventArgs {
        readonly isAllRecordsOnPage: boolean;
        readonly isChangedOnServer: boolean;
        readonly isSelected: boolean;
        readonly visibleIndex: number;
    }

    interface GridViewFocusEventArgs extends ProcessingModeEventArgs {
        readonly isChangedOnServer: boolean;
    }

    interface GridViewRowFocusingEventArgs extends GridViewRowCancelEventArgs {
        readonly htmlEvent: any;
    }

    interface GridViewRowClickEventArgs extends GridViewRowCancelEventArgs {
        readonly htmlEvent: any;
    }

    interface GridViewContextMenuEventArgs extends EventArgs {
        readonly htmlEvent: any;
        readonly index: number;
        readonly menu: any;
        readonly objectType: string;
        showBrowserMenu: boolean;
    }

    interface GridViewContextMenuItemClickEventArgs extends ProcessingModeEventArgs {
        readonly elementIndex: number;
        handled: boolean;
        readonly item: BootstrapMenuItem;
        readonly objectType: string;
        usePostBack: boolean;
    }

    interface GridViewCustomButtonEventArgs extends ProcessingModeEventArgs {
        readonly buttonID: string;
        readonly visibleIndex: number;
    }

    interface GridViewColumnMovingEventArgs extends EventArgs {
        allow: boolean;
        readonly destinationColumn: BootstrapGridViewColumn;
        readonly isDropBefore: boolean;
        readonly isGroupPanel: boolean;
        readonly sourceColumn: BootstrapGridViewColumn;
    }

    interface GridViewBatchEditConfirmShowingEventArgs extends CancelEventArgs {
        readonly requestTriggerID: string;
    }

    interface GridViewBatchEditStartEditingEventArgs extends CancelEventArgs {
        focusedColumn: BootstrapGridViewColumn;
        readonly rowValues: any;
        readonly visibleIndex: number;
    }

    interface GridViewBatchEditEndEditingEventArgs extends CancelEventArgs {
        readonly rowValues: any;
        readonly visibleIndex: number;
    }

    interface GridViewBatchEditRowValidatingEventArgs extends EventArgs {
        readonly validationInfo: any;
        readonly visibleIndex: number;
    }

    interface GridViewBatchEditTemplateCellFocusedEventArgs extends EventArgs {
        readonly column: BootstrapGridViewColumn;
        handled: boolean;
    }

    interface GridViewBatchEditChangesSavingEventArgs extends CancelEventArgs {
        readonly deletedValues: any;
        readonly insertedValues: any;
        readonly updatedValues: any;
    }

    interface GridViewBatchEditChangesCancelingEventArgs extends CancelEventArgs {
        readonly deletedValues: any;
        readonly insertedValues: any;
        readonly updatedValues: any;
    }

    interface GridViewBatchEditRowInsertingEventArgs extends CancelEventArgs {
        readonly visibleIndex: number;
    }

    interface GridViewBatchEditRowDeletingEventArgs extends CancelEventArgs {
        readonly rowValues: any;
        readonly visibleIndex: number;
    }

    interface GridViewFocusedCellChangingEventArgs extends CancelEventArgs {
        readonly cellInfo: BootstrapGridViewCellInfo;
    }

    class BootstrapGridView extends BootstrapGridBase {
        readonly batchEditApi: BootstrapGridViewBatchEditApi | null;
        addNewRow(): void;
        applyFilter(filterExpression: string): void;
        applyOnClickRowFilter(): void;
        applySearchPanelFilter(value: string): void;
        autoFilterByColumn(column: BootstrapGridViewColumn, val: string): void;
        autoFilterByColumn(columnIndex: number, val: string): void; // tslint:disable-line:unified-signatures
        autoFilterByColumn(columnFieldNameOrId: string, val: string): void; // tslint:disable-line:unified-signatures unified-signatures
        cancelEdit(): void;
        clearFilter(): void;
        closeFilterControl(): void;
        collapseAll(): void;
        collapseAllDetailRows(): void;
        collapseDetailRow(visibleIndex: number): void;
        collapseRow(visibleIndex: number): void;
        collapseRow(visibleIndex: number, recursive: boolean): void; // tslint:disable-line:unified-signatures
        deleteRow(visibleIndex: number): void;
        deleteRowByKey(key: any): void;
        expandAll(): void;
        expandAllDetailRows(): void;
        expandDetailRow(visibleIndex: number): void;
        expandRow(visibleIndex: number): void;
        expandRow(visibleIndex: number, recursive: boolean): void; // tslint:disable-line:unified-signatures
        focus(): void;
        focusEditor(column: BootstrapGridViewColumn): void;
        focusEditor(columnIndex: number): void; // tslint:disable-line:unified-signatures
        focusEditor(columnFieldNameOrId: string): void; // tslint:disable-line:unified-signatures unified-signatures
        getAutoFilterEditor(column: BootstrapGridViewColumn): any;
        getAutoFilterEditor(columnIndex: number): any; // tslint:disable-line:unified-signatures
        getAutoFilterEditor(columnFieldNameOrId: string): any; // tslint:disable-line:unified-signatures unified-signatures
        getColumn(columnIndex: number): BootstrapGridViewColumn | null;
        getColumnByField(columnFieldName: string): BootstrapGridViewColumn | null;
        getColumnById(columnId: string): BootstrapGridViewColumn | null;
        getColumnCount(): number;
        getColumnLayout(): any;
        getEditValue(column: BootstrapGridViewColumn): string;
        getEditValue(columnIndex: number): string; // tslint:disable-line:unified-signatures
        getEditValue(columnFieldNameOrId: string): string; // tslint:disable-line:unified-signatures unified-signatures
        getEditor(column: BootstrapGridViewColumn): BootstrapClientEdit;
        getEditor(columnIndex: number): BootstrapClientEdit; // tslint:disable-line:unified-signatures
        getEditor(columnFieldNameOrId: string): BootstrapClientEdit; // tslint:disable-line:unified-signatures unified-signatures
        getFocusedCell(): BootstrapGridViewCellInfo | null;
        getFocusedRowIndex(): number;
        getHorizontalScrollPosition(): number;
        getPageCount(): number;
        getPageIndex(): number;
        getPopupEditForm(): BootstrapPopupControl | null;
        getRowIndicesVisibleInViewPort(includePartiallyVisible: boolean): number[];
        getRowKey(visibleIndex: number): string;
        getSelectedKeysOnPage(): any[];
        getSelectedRowCount(): number;
        getTopVisibleIndex(): number;
        getVerticalScrollPosition(): number;
        getVisibleRowsOnPage(): number;
        gotoPage(pageIndex: number): void;
        groupBy(column: BootstrapGridViewColumn): void;
        groupBy(columnIndex: number): void; // tslint:disable-line:unified-signatures
        groupBy(columnFieldNameOrId: string): void; // tslint:disable-line:unified-signatures unified-signatures
        groupBy(column: BootstrapGridViewColumn, groupIndex: number): void; // tslint:disable-line:unified-signatures
        groupBy(columnIndex: number, groupIndex: number): void; // tslint:disable-line:unified-signatures unified-signatures
        groupBy(columnFieldNameOrId: string, groupIndex: number): void; // tslint:disable-line:unified-signatures unified-signatures unified-signatures
        groupBy(column: BootstrapGridViewColumn, groupIndex: number, sortOrder: string): void; // tslint:disable-line:unified-signatures
        groupBy(columnIndex: number, groupIndex: number, sortOrder: string): void; // tslint:disable-line:unified-signatures unified-signatures
        groupBy(columnFieldNameOrId: string, groupIndex: number, sortOrder: string): void; // tslint:disable-line:unified-signatures unified-signatures unified-signatures
        hideCustomizationWindow(): void;
        isCustomizationWindowVisible(): boolean;
        isDataRow(visibleIndex: number): boolean;
        isEditing(): boolean;
        isGroupRow(visibleIndex: number): boolean;
        isGroupRowExpanded(visibleIndex: number): boolean;
        isNewRowEditing(): boolean;
        isRowSelectedOnPage(visibleIndex: number): boolean;
        makeRowVisible(visibleIndex: number): void;
        nextPage(): void;
        performCallback(data: any): Promise<void>;
        performCallback(data: any, onSuccess: () => void): void;
        prevPage(): void;
        refresh(): void;
        selectAllRowsOnPage(): void;
        selectRowOnPage(visibleIndex: number): void;
        selectRowOnPage(visibleIndex: number, selected: boolean): void; // tslint:disable-line:unified-signatures
        selectRows(): void;
        selectRowsByKey(keys: any[]): void;
        selectRowsByKey(key: any): void; // tslint:disable-line:unified-signatures
        selectRowsByKey(keys: any[], selected: boolean): void; // tslint:disable-line:unified-signatures
        selectRowsByKey(key: any, selected: boolean): void; // tslint:disable-line:unified-signatures unified-signatures
        setColumnLayout(columnLayout: any): void;
        setEditValue(column: BootstrapGridViewColumn, value: string): void;
        setEditValue(columnIndex: number, value: string): void; // tslint:disable-line:unified-signatures
        setEditValue(columnFieldNameOrId: string, value: string): void; // tslint:disable-line:unified-signatures unified-signatures
        setFilterEnabled(isFilterEnabled: boolean): void;
        setFixedColumnScrollableRows(scrollableRowSettings: any): void;
        setFocusedCell(rowVisibleIndex: number, columnIndex: number): void;
        setFocusedRowIndex(visibleIndex: number): void;
        setHorizontalScrollPosition(position: number): void;
        setSearchPanelCustomEditor(editor: BootstrapClientEdit): void;
        setVerticalScrollPosition(position: number): void;
        showCustomizationDialog(): void;
        showCustomizationWindow(): void;
        showFilterControl(): void;
        sortBy(column: BootstrapGridViewColumn): void;
        sortBy(columnIndex: number): void; // tslint:disable-line:unified-signatures
        sortBy(columnFieldNameOrId: string): void; // tslint:disable-line:unified-signatures unified-signatures
        sortBy(column: BootstrapGridViewColumn, sortOrder: string): void; // tslint:disable-line:unified-signatures
        sortBy(columnIndex: number, sortOrder: string): void; // tslint:disable-line:unified-signatures unified-signatures
        sortBy(columnFieldNameOrId: string, sortOrder: string): void; // tslint:disable-line:unified-signatures unified-signatures unified-signatures
        sortBy(column: BootstrapGridViewColumn, sortOrder: string, reset: boolean): void; // tslint:disable-line:unified-signatures
        sortBy(columnIndex: number, sortOrder: string, reset: boolean): void; // tslint:disable-line:unified-signatures unified-signatures
        sortBy(columnFieldNameOrId: string, sortOrder: string, reset: boolean): void; // tslint:disable-line:unified-signatures unified-signatures unified-signatures
        sortBy(column: BootstrapGridViewColumn, sortOrder: string, reset: boolean, sortIndex: number): void; // tslint:disable-line:unified-signatures
        sortBy(columnIndex: number, sortOrder: string, reset: boolean, sortIndex: number): void; // tslint:disable-line:unified-signatures unified-signatures
        sortBy(columnFieldNameOrId: string, sortOrder: string, reset: boolean, sortIndex: number): void; // tslint:disable-line:unified-signatures unified-signatures unified-signatures
        startEditRow(visibleIndex: number): void;
        startEditRowByKey(key: any): void;
        ungroup(column: BootstrapGridViewColumn): void;
        ungroup(columnIndex: number): void; // tslint:disable-line:unified-signatures
        ungroup(columnFieldNameOrId: string): void; // tslint:disable-line:unified-signatures unified-signatures
        unselectAllRowsOnPage(): void;
        unselectFilteredRows(): void;
        unselectRowOnPage(visibleIndex: number): void;
        unselectRows(): void;
        unselectRowsByKey(keys: any[]): void;
        unselectRowsByKey(key: any): void; // tslint:disable-line:unified-signatures
        updateEdit(): void;
        on<K extends keyof BootstrapGridViewEventMap>(
            eventName: K,
            callback: (this: BootstrapGridView, args?: BootstrapGridViewEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapGridViewEventMap>(
            eventName: K,
            callback: (this: BootstrapGridView, args?: BootstrapGridViewEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapGridViewEventMap>(
            eventName?: K,
            callback?: (this: BootstrapGridView, args?: BootstrapGridViewEventMap[K]) => void,
        ): this;
    }
    interface BootstrapGridViewEventMap extends BootstrapGridBaseEventMap {
        "batchEditChangesCanceling": GridViewBatchEditChangesCancelingEventArgs;
        "batchEditChangesSaving": GridViewBatchEditChangesSavingEventArgs;
        "batchEditConfirmShowing": GridViewBatchEditConfirmShowingEventArgs;
        "batchEditEndEditing": GridViewBatchEditEndEditingEventArgs;
        "batchEditRowDeleting": GridViewBatchEditRowDeletingEventArgs;
        "batchEditRowInserting": GridViewBatchEditRowInsertingEventArgs;
        "batchEditRowValidating": GridViewBatchEditRowValidatingEventArgs;
        "batchEditStartEditing": GridViewBatchEditStartEditingEventArgs;
        "batchEditTemplateCellFocused": GridViewBatchEditTemplateCellFocusedEventArgs;
        "beginCallback": BeginCallbackEventArgs;
        "callbackError": CallbackErrorEventArgs;
        "columnGrouping": GridViewColumnCancelEventArgs;
        "columnMoving": GridViewColumnMovingEventArgs;
        "columnResized": GridViewColumnProcessingModeEventArgs;
        "columnResizing": GridViewColumnCancelEventArgs;
        "columnSorting": GridViewColumnCancelEventArgs;
        "columnStartDragging": GridViewColumnCancelEventArgs;
        "contextMenu": GridViewContextMenuEventArgs;
        "contextMenuItemClick": GridViewContextMenuItemClickEventArgs;
        "customButtonClick": GridViewCustomButtonEventArgs;
        "customizationWindowCloseUp": EventArgs;
        "detailRowCollapsing": GridViewRowCancelEventArgs;
        "detailRowExpanding": GridViewRowCancelEventArgs;
        "endCallback": EndCallbackEventArgs;
        "focusedCellChanging": GridViewFocusedCellChangingEventArgs;
        "focusedRowChanged": GridViewFocusEventArgs;
        "rowClick": GridViewRowClickEventArgs;
        "rowCollapsing": GridViewRowCancelEventArgs;
        "rowDblClick": GridViewRowClickEventArgs;
        "rowExpanding": GridViewRowCancelEventArgs;
        "rowFocusing": GridViewRowFocusingEventArgs;
        "selectionChanged": GridViewSelectionEventArgs;
    }

    class BootstrapGridViewBatchEditApi {
        protected readonly instance: any;
        protected constructor(instance: any);
        addNewRow(): void;
        deleteRow(visibleIndex: number): void;
        deleteRowByKey(key: any): void;
        endEdit(): void;
        getCellTextContainer(visibleIndex: number, columnFieldNameOrId: string): any;
        getCellValue(visibleIndex: number, columnFieldNameOrId: string, initial: boolean): any;
        getColumnDisplayText(columnFieldNameOrId: string, value: any): string;
        getDeletedRowIndices(): number[];
        getEditCellInfo(): BootstrapGridViewCellInfo | null;
        getInsertedRowIndices(): number[];
        getRowVisibleIndices(includeDeleted: boolean): number[];
        hasChanges(): boolean;
        isDeletedRow(visibleIndex: number): boolean;
        isNewRow(visibleIndex: number): boolean;
        moveFocusBackward(): boolean;
        moveFocusForward(): boolean;
        recoverRow(visibleIndex: number): void;
        recoverRowByKey(key: any): void;
        resetChanges(visibleIndex: number): void;
        resetChanges(visibleIndex: number, columnIndex: number): void; // tslint:disable-line:unified-signatures
        setCellValue(visibleIndex: number, columnFieldNameOrId: string, value: any): void;
        setCellValue(
            visibleIndex: number,
            columnFieldNameOrId: string,
            value: any,
            displayText: string,
            cancelCellHighlighting: boolean,
        ): void;
        startEdit(visibleIndex: number, columnIndex: number): void;
        validateRow(visibleIndex: number): boolean;
        validateRows(validateOnlyModified: boolean): boolean;
    }

    class BootstrapGridViewColumn {
        protected readonly instance: any;
        protected constructor(instance: any);
        readonly fieldName: string;
        readonly index: number;
        readonly name: string;
        readonly visible: boolean;
    }

    class BootstrapGridViewCellInfo {
        protected readonly instance: any;
        protected constructor(instance: any);
        readonly rowVisibleIndex: number;
    }

    class BootstrapHyperLink extends Control {
        getBadgeIconCssClass(): string;
        getBadgeText(): string;
        getCaption(): string;
        getEnabled(): boolean;
        getNavigateUrl(): string;
        getText(): string;
        getValue(): any;
        setBadgeIconCssClass(cssClass: string): void;
        setBadgeText(text: string): void;
        setCaption(caption: string): void;
        setEnabled(value: boolean): void;
        setNavigateUrl(url: string): void;
        setText(text: string): void;
        setValue(value: any): void;
        on<K extends keyof BootstrapHyperLinkEventMap>(
            eventName: K,
            callback: (this: BootstrapHyperLink, args?: BootstrapHyperLinkEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapHyperLinkEventMap>(
            eventName: K,
            callback: (this: BootstrapHyperLink, args?: BootstrapHyperLinkEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapHyperLinkEventMap>(
            eventName?: K,
            callback?: (this: BootstrapHyperLink, args?: BootstrapHyperLinkEventMap[K]) => void,
        ): this;
    }
    interface BootstrapHyperLinkEventMap extends ControlEventMap {
        "click": EditClickEventArgs;
    }

    interface ListEditItemSelectedChangedEventArgs extends ProcessingModeEventArgs {
        readonly index: number;
        readonly isSelected: boolean;
    }

    interface ListEditCustomHighlightingEventArgs extends EventArgs {
        readonly filter: string;
        highlighting: any;
    }

    interface ListEditItemFilteringEventArgs extends EventArgs {
        readonly filter: string;
        isFit: boolean;
        readonly item: BootstrapListBoxItem;
    }

    class BootstrapListBox extends BootstrapClientEdit {
        addItem(texts: string[]): number;
        addItem(text: string): number; // tslint:disable-line:unified-signatures
        addItem(texts: string[], value: any): number; // tslint:disable-line:unified-signatures
        addItem(text: string, value: any): number; // tslint:disable-line:unified-signatures unified-signatures
        addItem(texts: string[], value: any, iconCssClass: string): number; // tslint:disable-line:unified-signatures
        addItem(text: string, value: any, iconCssClass: string): number; // tslint:disable-line:unified-signatures unified-signatures
        addItemCssClass(index: number, className: string): void;
        addItemTextCellCssClass(itemIndex: number, textCellIndex: number, className: string): void;
        beginUpdate(): void;
        clearItems(): void;
        endUpdate(): void;
        findItemByText(text: string): BootstrapListBoxItem | null;
        findItemByValue(value: any): BootstrapListBoxItem | null;
        getItem(index: number): BootstrapListBoxItem | null;
        getItemBadgeIconCssClass(index: number): string;
        getItemBadgeText(index: number): string;
        getItemCount(): number;
        getSelectedIndex(): number;
        getSelectedIndices(): number[];
        getSelectedItem(): BootstrapListBoxItem | null;
        getSelectedItems(): BootstrapListBoxItem[];
        getSelectedValues(): any[];
        insertItem(index: number, texts: string[]): void;
        insertItem(index: number, text: string): void; // tslint:disable-line:unified-signatures
        insertItem(index: number, texts: string[], value: any): void; // tslint:disable-line:unified-signatures
        insertItem(index: number, text: string, value: any): void; // tslint:disable-line:unified-signatures unified-signatures
        insertItem(index: number, texts: string[], value: any, iconCssClass: string): void; // tslint:disable-line:unified-signatures
        insertItem(index: number, text: string, value: any, iconCssClass: string): void; // tslint:disable-line:unified-signatures unified-signatures
        makeItemVisible(index: number): void;
        performCallback(data: any): Promise<void>;
        performCallback(data: any, onSuccess: () => void): void;
        removeItem(index: number): void;
        removeItemCssClass(index: number, className: string): void;
        removeItemTextCellCssClass(itemIndex: number, textCellIndex: number, className: string): void;
        selectAll(): void;
        selectIndices(indices: number[]): void;
        selectItems(items: BootstrapListBoxItem[]): void;
        selectValues(values: any[]): void;
        setItemBadgeIconCssClass(index: number, cssClass: string): void;
        setItemBadgeText(index: number, text: string): void;
        setItemHtml(index: number, html: string): void;
        setItemTextCellHtml(itemIndex: number, textCellIndex: number, html: string): void;
        setItemTextCellTooltip(itemIndex: number, textCellIndex: number, tooltip: string): void;
        setItemTooltip(index: number, tooltip: string): void;
        setSelectedIndex(index: number): void;
        setSelectedItem(item: BootstrapListBoxItem): void;
        unselectAll(): void;
        unselectIndices(indices: number[]): void;
        unselectItems(items: BootstrapListBoxItem[]): void;
        unselectValues(values: any[]): void;
        on<K extends keyof BootstrapListBoxEventMap>(
            eventName: K,
            callback: (this: BootstrapListBox, args?: BootstrapListBoxEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapListBoxEventMap>(
            eventName: K,
            callback: (this: BootstrapListBox, args?: BootstrapListBoxEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapListBoxEventMap>(
            eventName?: K,
            callback?: (this: BootstrapListBox, args?: BootstrapListBoxEventMap[K]) => void,
        ): this;
    }
    interface BootstrapListBoxEventMap extends BootstrapClientEditEventMap {
        "beginCallback": BeginCallbackEventArgs;
        "callbackError": CallbackErrorEventArgs;
        "customHighlighting": ListEditCustomHighlightingEventArgs;
        "endCallback": EndCallbackEventArgs;
        "itemDoubleClick": EventArgs;
        "itemFiltering": ListEditItemFilteringEventArgs;
        "keyDown": EditKeyEventArgs;
        "keyPress": EditKeyEventArgs;
        "keyUp": EditKeyEventArgs;
        "selectedIndexChanged": ProcessingModeEventArgs;
    }

    class BootstrapListBoxItem {
        protected readonly instance: any;
        protected constructor(instance: any);
        readonly iconCssClass: string;
        readonly imageUrl: string;
        readonly index: number;
        readonly listEditBase: BootstrapListBox | null;
        readonly text: string;
        readonly value: any;
        getColumnText(columnIndex: number): string;
        getColumnText(columnName: string): string; // tslint:disable-line:unified-signatures
        getFieldText(fieldIndex: number): string;
        getFieldText(fieldName: string): string; // tslint:disable-line:unified-signatures
    }

    class BootstrapCheckBoxList extends BootstrapListBox {
        getItem(index: number): BootstrapListBoxItem | null;
        getItemCount(): number;
        getSelectedIndices(): number[];
        getSelectedItems(): BootstrapListBoxItem[];
        getSelectedValues(): any[];
        selectAll(): void;
        selectIndices(indices: number[]): void;
        selectItems(items: BootstrapListBoxItem[]): void;
        selectValues(values: any[]): void;
        unselectAll(): void;
        unselectIndices(indices: number[]): void;
        unselectItems(items: BootstrapListBoxItem[]): void;
        unselectValues(values: any[]): void;
        on<K extends keyof BootstrapCheckBoxListEventMap>(
            eventName: K,
            callback: (this: BootstrapCheckBoxList, args?: BootstrapCheckBoxListEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapCheckBoxListEventMap>(
            eventName: K,
            callback: (this: BootstrapCheckBoxList, args?: BootstrapCheckBoxListEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapCheckBoxListEventMap>(
            eventName?: K,
            callback?: (this: BootstrapCheckBoxList, args?: BootstrapCheckBoxListEventMap[K]) => void,
        ): this;
    }
    interface BootstrapCheckBoxListEventMap extends BootstrapListBoxEventMap { // tslint:disable-line:no-empty-interface
    }

    class BootstrapRadioButtonList extends BootstrapListBox {
        getItem(index: number): BootstrapListBoxItem | null;
        getItemCount(): number;
        on<K extends keyof BootstrapRadioButtonListEventMap>(
            eventName: K,
            callback: (this: BootstrapRadioButtonList, args?: BootstrapRadioButtonListEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapRadioButtonListEventMap>(
            eventName: K,
            callback: (this: BootstrapRadioButtonList, args?: BootstrapRadioButtonListEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapRadioButtonListEventMap>(
            eventName?: K,
            callback?: (this: BootstrapRadioButtonList, args?: BootstrapRadioButtonListEventMap[K]) => void,
        ): this;
    }
    interface BootstrapRadioButtonListEventMap extends BootstrapListBoxEventMap { // tslint:disable-line:no-empty-interface
    }

    interface MenuItemEventArgs extends EventArgs {
        readonly item: BootstrapMenuItem;
    }

    interface MenuItemMouseEventArgs extends MenuItemEventArgs { // tslint:disable-line:no-empty-interface
    }

    interface MenuItemClickEventArgs extends ProcessingModeEventArgs {
        readonly htmlElement: object;
        readonly htmlEvent: object;
        readonly item: BootstrapMenuItem;
    }

    class BootstrapMenu extends Control {
        getItem(index: number): BootstrapMenuItem | null;
        getItemByName(name: string): BootstrapMenuItem | null;
        getItemCount(): number;
        getOrientation(): string;
        getRootItem(): BootstrapMenuItem | null;
        getSelectedItem(): BootstrapMenuItem | null;
        setOrientation(orientation: string): void;
        setSelectedItem(item: BootstrapMenuItem): void;
        on<K extends keyof BootstrapMenuEventMap>(
            eventName: K,
            callback: (this: BootstrapMenu, args?: BootstrapMenuEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapMenuEventMap>(
            eventName: K,
            callback: (this: BootstrapMenu, args?: BootstrapMenuEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapMenuEventMap>(
            eventName?: K,
            callback?: (this: BootstrapMenu, args?: BootstrapMenuEventMap[K]) => void,
        ): this;
    }
    interface BootstrapMenuEventMap extends ControlEventMap {
        "closeUp": MenuItemEventArgs;
        "itemClick": MenuItemClickEventArgs;
        "itemMouseOut": MenuItemMouseEventArgs;
        "itemMouseOver": MenuItemMouseEventArgs;
        "popUp": MenuItemEventArgs;
    }

    class BootstrapMenuItem {
        protected readonly instance: any;
        protected constructor(instance: any);
        readonly index: number;
        readonly indexPath: string;
        readonly menu: BootstrapMenu | null;
        readonly name: string;
        readonly parent: BootstrapMenuItem | null;
        getBadgeIconCssClass(): string;
        getBadgeText(): string;
        getChecked(): boolean;
        getEnabled(): boolean;
        getIconCssClass(): string;
        getImageUrl(): string;
        getItem(index: number): BootstrapMenuItem | null;
        getItemByName(name: string): BootstrapMenuItem | null;
        getItemCount(): number;
        getNavigateUrl(): string;
        getText(): string;
        getVisible(): boolean;
        setBadgeIconCssClass(cssClass: string): void;
        setBadgeText(text: string): void;
        setChecked(value: boolean): void;
        setEnabled(value: boolean): void;
        setIconCssClass(cssClass: string): void;
        setImageUrl(value: string): void;
        setNavigateUrl(value: string): void;
        setText(value: string): void;
        setVisible(value: boolean): void;
    }

    interface PopupWindowEventArgs extends EventArgs {
        readonly window: BootstrapPopupWindow;
    }

    interface PopupWindowCloseUpEventArgs extends PopupWindowEventArgs {
        readonly closeReason: BootstrapPopupControlCloseReason;
    }

    interface PopupWindowCancelEventArgs extends CancelEventArgs {
        readonly closeReason: BootstrapPopupControlCloseReason;
        readonly window: BootstrapPopupWindow;
    }

    interface PopupWindowPinnedChangedEventArgs extends PopupWindowEventArgs {
        readonly pinned: boolean;
    }

    interface PopupWindowResizeEventArgs extends PopupWindowEventArgs {
        readonly resizeState: number;
    }

    class BootstrapPopupControl extends Control {
        adjustSize(): void;
        bringToFront(): void;
        bringWindowToFront(window: BootstrapPopupWindow): void;
        getCollapsed(): boolean;
        getContentHeight(): number;
        getContentHtml(): string;
        getContentIFrame(): any;
        getContentIFrameWindow(): any;
        getContentUrl(): string;
        getContentWidth(): number;
        getCurrentPopupElement(): any;
        getCurrentPopupElementIndex(): number;
        getFooterImageUrl(): string;
        getFooterNavigateUrl(): string;
        getFooterText(): string;
        getHeaderImageUrl(): string;
        getHeaderNavigateUrl(): string;
        getHeaderText(): string;
        getMainElement(): any;
        getMaximized(): boolean;
        getPinned(): boolean;
        getPopUpReasonMouseEvent(): any;
        getWindow(index: number): BootstrapPopupWindow | null;
        getWindowByName(name: string): BootstrapPopupWindow | null;
        getWindowCollapsed(window: BootstrapPopupWindow): boolean;
        getWindowContentHeight(window: BootstrapPopupWindow): number;
        getWindowContentHtml(window: BootstrapPopupWindow): string;
        getWindowContentIFrame(window: BootstrapPopupWindow): any;
        getWindowContentUrl(window: BootstrapPopupWindow): string;
        getWindowContentWidth(window: BootstrapPopupWindow): number;
        getWindowCount(): number;
        getWindowCurrentPopupElement(window: BootstrapPopupWindow): any;
        getWindowCurrentPopupElementIndex(window: BootstrapPopupWindow): number;
        getWindowHeight(window: BootstrapPopupWindow): number;
        getWindowMaximized(window: BootstrapPopupWindow): boolean;
        getWindowPinned(window: BootstrapPopupWindow): boolean;
        getWindowPopUpReasonMouseEvent(window: BootstrapPopupWindow): any;
        getWindowWidth(window: BootstrapPopupWindow): number;
        hide(): void;
        hideWindow(window: BootstrapPopupWindow): void;
        isVisible(): boolean;
        isWindowVisible(window: BootstrapPopupWindow): boolean;
        performCallback(data: any): Promise<void>;
        performCallback(data: any, onSuccess: () => void): void;
        refreshContentUrl(): void;
        refreshPopupElementConnection(): void;
        refreshWindowContentUrl(window: BootstrapPopupWindow): void;
        setAdaptiveMaxHeight(maxHeight: number): void;
        setAdaptiveMaxHeight(maxHeight: string): void; // tslint:disable-line:unified-signatures
        setAdaptiveMaxWidth(maxWidth: number): void;
        setAdaptiveMaxWidth(maxWidth: string): void; // tslint:disable-line:unified-signatures
        setAdaptiveMinHeight(minHeight: number): void;
        setAdaptiveMinHeight(minHeight: string): void; // tslint:disable-line:unified-signatures
        setAdaptiveMinWidth(minWidth: number): void;
        setAdaptiveMinWidth(minWidth: string): void; // tslint:disable-line:unified-signatures
        setCollapsed(value: boolean): void;
        setContentHtml(html: string): void;
        setContentUrl(url: string): void;
        setFooterImageUrl(value: string): void;
        setFooterNavigateUrl(value: string): void;
        setFooterText(value: string): void;
        setHeaderImageUrl(value: string): void;
        setHeaderNavigateUrl(value: string): void;
        setHeaderText(value: string): void;
        setMaximized(value: boolean): void;
        setPinned(value: boolean): void;
        setPopupElementCssSelector(selector: string): void;
        setPopupElementID(popupElementId: string): void;
        setSize(width: number, height: number): void;
        setWindowAdaptiveMaxHeight(window: BootstrapPopupWindow, maxHeight: number): void;
        setWindowAdaptiveMaxHeight(window: BootstrapPopupWindow, maxHeight: string): void; // tslint:disable-line:unified-signatures
        setWindowAdaptiveMaxWidth(window: BootstrapPopupWindow, maxWidth: number): void;
        setWindowAdaptiveMaxWidth(window: BootstrapPopupWindow, maxWidth: string): void; // tslint:disable-line:unified-signatures
        setWindowAdaptiveMinHeight(window: BootstrapPopupWindow, minHeight: number): void;
        setWindowAdaptiveMinHeight(window: BootstrapPopupWindow, minHeight: string): void; // tslint:disable-line:unified-signatures
        setWindowAdaptiveMinWidth(window: BootstrapPopupWindow, minWidth: number): void;
        setWindowAdaptiveMinWidth(window: BootstrapPopupWindow, minWidth: string): void; // tslint:disable-line:unified-signatures
        setWindowCollapsed(window: BootstrapPopupWindow, value: boolean): void;
        setWindowContentHtml(window: BootstrapPopupWindow, html: string): void;
        setWindowContentUrl(window: BootstrapPopupWindow, url: string): void;
        setWindowMaximized(window: BootstrapPopupWindow, value: boolean): void;
        setWindowPinned(window: BootstrapPopupWindow, value: boolean): void;
        setWindowPopupElementID(window: BootstrapPopupWindow, popupElementId: string): void;
        setWindowSize(window: BootstrapPopupWindow, width: number, height: number): void;
        show(): void;
        showAtElement(htmlElement: any): void;
        showAtElementByID(id: string): void;
        showAtPos(x: number, y: number): void;
        showWindow(window: BootstrapPopupWindow): void;
        showWindow(window: BootstrapPopupWindow, popupElementIndex: number): void; // tslint:disable-line:unified-signatures
        showWindowAtElement(window: BootstrapPopupWindow, htmlElement: any): void;
        showWindowAtElementByID(window: BootstrapPopupWindow, id: string): void;
        showWindowAtPos(window: BootstrapPopupWindow, x: number, y: number): void;
        stretchVertically(): void;
        updatePosition(): void;
        updatePositionAtElement(htmlElement: any): void;
        updateWindowPosition(window: BootstrapPopupWindow): void;
        updateWindowPositionAtElement(window: BootstrapPopupWindow, htmlElement: any): void;
        windowStretchVertically(window: BootstrapPopupWindow): void;
        on<K extends keyof BootstrapPopupControlEventMap>(
            eventName: K,
            callback: (this: BootstrapPopupControl, args?: BootstrapPopupControlEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapPopupControlEventMap>(
            eventName: K,
            callback: (this: BootstrapPopupControl, args?: BootstrapPopupControlEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapPopupControlEventMap>(
            eventName?: K,
            callback?: (this: BootstrapPopupControl, args?: BootstrapPopupControlEventMap[K]) => void,
        ): this;
    }
    interface BootstrapPopupControlEventMap extends ControlEventMap {
        "afterResizing": PopupWindowEventArgs;
        "beforeResizing": PopupWindowEventArgs;
        "beginCallback": BeginCallbackEventArgs;
        "callbackError": CallbackErrorEventArgs;
        "closeUp": PopupWindowCloseUpEventArgs;
        "closing": PopupWindowCancelEventArgs;
        "endCallback": EndCallbackEventArgs;
        "pinnedChanged": PopupWindowPinnedChangedEventArgs;
        "popUp": PopupWindowEventArgs;
        "resize": PopupWindowResizeEventArgs;
        "shown": PopupWindowEventArgs;
    }

    class BootstrapPopupWindow {
        protected readonly instance: any;
        protected constructor(instance: any);
        readonly index: number;
        readonly name: string;
        readonly popupControl: BootstrapPopupControl | null;
        getFooterImageUrl(): string;
        getFooterNavigateUrl(): string;
        getFooterText(): string;
        getHeaderImageUrl(): string;
        getHeaderNavigateUrl(): string;
        getHeaderText(): string;
        setFooterImageUrl(value: string): void;
        setFooterNavigateUrl(value: string): void;
        setFooterText(value: string): void;
        setHeaderImageUrl(value: string): void;
        setHeaderNavigateUrl(value: string): void;
        setHeaderText(value: string): void;
    }

    class BootstrapPopupMenu extends BootstrapMenu {
        getCurrentPopupElement(): any;
        getCurrentPopupElementIndex(): number;
        getItem(index: number): BootstrapMenuItem | null;
        getItemByName(name: string): BootstrapMenuItem | null;
        getRootItem(): BootstrapMenuItem | null;
        getSelectedItem(): BootstrapMenuItem | null;
        hide(): void;
        refreshPopupElementConnection(): void;
        setPopupElementCssSelector(selector: string): void;
        setPopupElementID(popupElementId: string): void;
        setSelectedItem(item: BootstrapMenuItem): void;
        show(): void;
        showAtElement(htmlElement: any): void;
        showAtElementByID(id: string): void;
        showAtPos(x: number, y: number): void;
        on<K extends keyof BootstrapPopupMenuEventMap>(
            eventName: K,
            callback: (this: BootstrapPopupMenu, args?: BootstrapPopupMenuEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapPopupMenuEventMap>(
            eventName: K,
            callback: (this: BootstrapPopupMenu, args?: BootstrapPopupMenuEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapPopupMenuEventMap>(
            eventName?: K,
            callback?: (this: BootstrapPopupMenu, args?: BootstrapPopupMenuEventMap[K]) => void,
        ): this;
    }
    interface BootstrapPopupMenuEventMap extends BootstrapMenuEventMap { // tslint:disable-line:no-empty-interface
    }

    class BootstrapProgressBar extends Control {
        getCaption(): string;
        getDisplayText(): string;
        getEnabled(): boolean;
        getMaximum(): number;
        getMinimum(): number;
        getPercent(): number;
        getPosition(): number;
        getValue(): any;
        setCaption(caption: string): void;
        setCustomDisplayFormat(text: string): void;
        setEnabled(value: boolean): void;
        setMaximum(max: number): void;
        setMinMaxValues(minValue: number, maxValue: number): void;
        setMinimum(min: number): void;
        setPosition(position: number): void;
        setValue(value: any): void;
        on<K extends keyof BootstrapProgressBarEventMap>(
            eventName: K,
            callback: (this: BootstrapProgressBar, args?: BootstrapProgressBarEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapProgressBarEventMap>(
            eventName: K,
            callback: (this: BootstrapProgressBar, args?: BootstrapProgressBarEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapProgressBarEventMap>(
            eventName?: K,
            callback?: (this: BootstrapProgressBar, args?: BootstrapProgressBarEventMap[K]) => void,
        ): this;
    }
    interface BootstrapProgressBarEventMap extends ControlEventMap { // tslint:disable-line:no-empty-interface
    }

    interface ActiveViewChangingEventArgs extends EventArgs {
        cancel: boolean;
        readonly newView: BootstrapSchedulerViewType;
        readonly oldView: BootstrapSchedulerViewType;
    }

    interface AppointmentClickEventArgs extends EventArgs {
        readonly appointmentId: string;
        readonly handled: boolean;
        readonly htmlElement: object;
    }

    interface AppointmentDeletingEventArgs extends CancelEventArgs {
        readonly appointmentIds: object[];
    }

    interface AppointmentDragEventArgs extends EventArgs {
        allow: boolean;
        readonly dragInformation: BootstrapSchedulerAppointmentDragInfo[];
        readonly mouseEvent: any;
    }

    interface AppointmentDropEventArgs extends EventArgs {
        readonly dragInformation: BootstrapSchedulerAppointmentDragInfo[];
        handled: boolean;
        readonly operation: BootstrapSchedulerAppointmentOperation;
    }

    interface AppointmentResizeEventArgs extends EventArgs {
        readonly appointmentId: string;
        handled: boolean;
        readonly newInterval: BootstrapTimeInterval;
        readonly oldInterval: BootstrapTimeInterval;
        readonly operation: BootstrapSchedulerAppointmentOperation;
    }

    interface AppointmentResizingEventArgs extends EventArgs {
        allow: boolean;
        readonly appointmentId: string;
        readonly mouseEvent: any;
        readonly newInterval: BootstrapTimeInterval;
        readonly oldInterval: BootstrapTimeInterval;
    }

    interface AppointmentToolTipShowingEventArgs extends CancelEventArgs {
        readonly appointment: BootstrapSchedulerAppointment;
    }

    interface AppointmentsSelectionEventArgs extends EventArgs {
        readonly appointmentIds: string[];
    }

    interface CellClickEventArgs extends EventArgs {
        readonly htmlElement: object;
        readonly interval: BootstrapTimeInterval;
        readonly resource: string;
    }

    interface MenuItemClickedEventArgs extends EventArgs {
        handled: boolean;
        readonly itemName: string;
    }

    interface MoreButtonClickedEventArgs extends ProcessingModeEventArgs {
        handled: boolean;
        readonly interval: BootstrapTimeInterval;
        readonly resource: string;
        readonly targetDateTime: Date;
    }

    interface ShortcutEventArgs extends EventArgs {
        readonly commandName: string;
        readonly handled: boolean;
        readonly htmlEvent: object;
    }

    class BootstrapScheduler extends Control {
        appointmentFormCancel(): void;
        appointmentFormDelete(): void;
        appointmentFormSave(): void;
        changeFormContainer(container: any): void;
        changePopupMenuContainer(container: any): void;
        changeTimeZoneId(timeZoneId: string): void;
        changeToolTipContainer(container: any): void;
        deleteAppointment(apt: BootstrapSchedulerAppointment): void;
        deselectAppointmentById(aptId: any): void;
        getActiveViewType(): BootstrapSchedulerViewType;
        getAllDayAreaHeight(): number;
        getAppointmentById(id: any): BootstrapSchedulerAppointment | null;
        getAppointmentProperties(aptId: number, propertyNames: string[], onCallBack: any): string[];
        getGroupType(): BootstrapSchedulerGroupType;
        getResourceNavigatorVisible(): boolean;
        getScrollAreaHeight(): number;
        getSelectedAppointmentIds(): string[];
        getSelectedInterval(): BootstrapTimeInterval | null;
        getSelectedResource(): string;
        getToolbarVisible(): boolean;
        getTopRowTime(viewType: BootstrapSchedulerViewType): number;
        getVisibleAppointments(): BootstrapSchedulerAppointment[];
        getVisibleIntervals(): BootstrapTimeInterval[];
        goToDateFormApply(): void;
        goToDateFormCancel(): void;
        gotoDate(date: Date): void;
        gotoToday(): void;
        hideLoadingPanel(): void;
        inplaceEditFormCancel(): void;
        inplaceEditFormSave(): void;
        inplaceEditFormShowMore(): void;
        insertAppointment(apt: BootstrapSchedulerAppointment): void;
        navigateBackward(): void;
        navigateForward(): void;
        performCallback(parameter: string): void;
        refresh(): void;
        refreshClientAppointmentProperties(
            clientAppointment: BootstrapSchedulerAppointment,
            propertyNames: string[],
            onCallBack: any,
        ): void;
        reminderFormCancel(): void;
        reminderFormDismiss(): void;
        reminderFormDismissAll(): void;
        reminderFormSnooze(): void;
        selectAppointmentById(aptId: any): void;
        selectAppointmentById(aptId: any, scrollToSelection: boolean): void; // tslint:disable-line:unified-signatures
        setActiveViewType(value: BootstrapSchedulerViewType): void;
        setAllDayAreaHeight(height: number): void;
        setGroupType(value: BootstrapSchedulerGroupType): void;
        setHeight(height: number): void;
        setResourceNavigatorVisible(visible: boolean): void;
        setSelection(interval: BootstrapTimeInterval): void;
        setSelection(interval: BootstrapTimeInterval, resourceId: string): void; // tslint:disable-line:unified-signatures
        setSelection(interval: BootstrapTimeInterval, resourceId: string, scrollToSelection: boolean): void; // tslint:disable-line:unified-signatures
        setToolbarVisible(visible: boolean): void;
        setTopRowTime(duration: number): void;
        setTopRowTime(duration: number, viewType: BootstrapSchedulerViewType): void; // tslint:disable-line:unified-signatures
        setVisibleResources(resourceIds: string[]): void;
        showAppointmentFormByClientId(aptClientId: string): void;
        showAppointmentFormByServerId(aptServerId: string): void;
        showInplaceEditor(start: Date, end: Date): void;
        showInplaceEditor(start: Date, end: Date, resourceId: string): void; // tslint:disable-line:unified-signatures
        showLoadingPanel(): void;
        showSelectionToolTip(x: number, y: number): void;
        updateAppointment(apt: BootstrapSchedulerAppointment): void;
        on<K extends keyof BootstrapSchedulerEventMap>(
            eventName: K,
            callback: (this: BootstrapScheduler, args?: BootstrapSchedulerEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapSchedulerEventMap>(
            eventName: K,
            callback: (this: BootstrapScheduler, args?: BootstrapSchedulerEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapSchedulerEventMap>(
            eventName?: K,
            callback?: (this: BootstrapScheduler, args?: BootstrapSchedulerEventMap[K]) => void,
        ): this;
    }
    interface BootstrapSchedulerEventMap extends ControlEventMap {
        "activeViewChanged": EventArgs;
        "activeViewChanging": ActiveViewChangingEventArgs;
        "appointmentClick": AppointmentClickEventArgs;
        "appointmentDeleting": AppointmentDeletingEventArgs;
        "appointmentDoubleClick": AppointmentClickEventArgs;
        "appointmentDrag": AppointmentDragEventArgs;
        "appointmentDrop": AppointmentDropEventArgs;
        "appointmentResize": AppointmentResizeEventArgs;
        "appointmentResizing": AppointmentResizingEventArgs;
        "appointmentToolTipShowing": AppointmentToolTipShowingEventArgs;
        "appointmentsSelectionChanged": AppointmentsSelectionEventArgs;
        "beginCallback": BeginCallbackEventArgs;
        "callbackError": CallbackErrorEventArgs;
        "cellClick": CellClickEventArgs;
        "cellDoubleClick": CellClickEventArgs;
        "endCallback": EndCallbackEventArgs;
        "menuItemClicked": MenuItemClickedEventArgs;
        "moreButtonClicked": MoreButtonClickedEventArgs;
        "selectionChanged": EventArgs;
        "selectionChanging": EventArgs;
        "shortcut": ShortcutEventArgs;
        "visibleIntervalChanged": EventArgs;
    }

    class BootstrapTimeInterval {
        protected readonly instance: any;
        protected constructor(instance: any);
        contains(interval: BootstrapTimeInterval): boolean;
        equals(interval: BootstrapTimeInterval): boolean;
        getAllDay(): boolean;
        getDuration(): number;
        getEnd(): Date;
        getStart(): Date;
        intersectsWith(interval: BootstrapTimeInterval): boolean;
        intersectsWithExcludingBounds(interval: BootstrapTimeInterval): boolean;
        setAllDay(allDayValue: boolean): void;
        setDuration(value: number): void;
        setEnd(value: Date): void;
        setStart(value: Date): void;
    }

    class BootstrapSchedulerAppointment {
        protected readonly instance: any;
        protected constructor(instance: any);
        readonly appointmentId: string;
        readonly appointmentType: BootstrapSchedulerAppointmentType;
        readonly interval: BootstrapTimeInterval | null;
        readonly labelIndex: number;
        readonly resources: string[];
        readonly statusIndex: number;
        addResource(resourceId: object): void;
        getAllDay(): boolean;
        getAppointmentType(): BootstrapSchedulerAppointmentType;
        getDescription(): string;
        getDuration(): number;
        getEnd(): Date;
        getId(): any;
        getLabelId(): number;
        getLocation(): string;
        getRecurrenceInfo(): BootstrapSchedulerRecurrenceInfo | null;
        getRecurrencePattern(): BootstrapSchedulerAppointment | null;
        getResource(index: number): any;
        getStart(): Date;
        getStatusId(): number;
        getSubject(): string;
        setAllDay(allDay: boolean): void;
        setAppointmentType(type: BootstrapSchedulerAppointmentType): void;
        setDescription(description: string): void;
        setDuration(duration: number): void;
        setEnd(end: Date): void;
        setId(id: any): void;
        setLabelId(statusId: number): void;
        setLocation(location: string): void;
        setRecurrenceInfo(recurrenceInfo: BootstrapSchedulerRecurrenceInfo): void;
        setStart(start: Date): void;
        setStatusId(statusId: number): void;
        setSubject(subject: string): void;
    }

    class BootstrapSchedulerAppointmentDragInfo {
        protected readonly instance: any;
        protected constructor(instance: any);
        readonly appointmentId: string;
        readonly newInterval: BootstrapTimeInterval | null;
        readonly oldInterval: BootstrapTimeInterval | null;
    }

    class BootstrapSchedulerAppointmentOperation {
        protected readonly instance: any;
        protected constructor(instance: any);
        apply(): void;
        cancel(): void;
    }

    class BootstrapSchedulerRecurrenceInfo {
        protected readonly instance: any;
        protected constructor(instance: any);
        getDayNumber(): number;
        getDuration(): number;
        getEnd(): Date;
        getMonth(): number;
        getOccurrenceCount(): number;
        getPeriodicity(): number;
        getRange(): BootstrapSchedulerRecurrenceRange;
        getRecurrenceType(): BootstrapSchedulerRecurrenceType;
        getStart(): Date;
        getWeekDays(): WeekDays;
        getWeekOfMonth(): WeekOfMonth;
        setDayNumber(dayNumber: number): void;
        setDuration(duration: number): void;
        setEnd(end: Date): void;
        setMonth(month: number): void;
        setOccurrenceCount(occurrenceCount: number): void;
        setPeriodicity(periodicity: number): void;
        setRange(range: BootstrapSchedulerRecurrenceRange): void;
        setRecurrenceType(type: BootstrapSchedulerRecurrenceType): void;
        setStart(start: Date): void;
        setWeekDays(weekDays: WeekDays): void;
        setWeekOfMonth(weekOfMonth: WeekOfMonth): void;
    }

    class BootstrapSparkline extends Control {
        exportTo(fileName: string, format: string): void;
        getDataSource(): any;
        getInstance(): any;
        print(): void;
        setDataSource(dataSource: any): void;
        setOptions(options: any): void;
        on<K extends keyof BootstrapSparklineEventMap>(
            eventName: K,
            callback: (this: BootstrapSparkline, args?: BootstrapSparklineEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapSparklineEventMap>(
            eventName: K,
            callback: (this: BootstrapSparkline, args?: BootstrapSparklineEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapSparklineEventMap>(
            eventName?: K,
            callback?: (this: BootstrapSparkline, args?: BootstrapSparklineEventMap[K]) => void,
        ): this;
    }
    interface BootstrapSparklineEventMap extends ControlEventMap {
        "disposing": BootstrapChartEventArgsBase;
        "drawn": BootstrapChartEventArgsBase;
        "exported": BootstrapChartEventArgsBase;
        "exporting": BootstrapChartExportEventArgs;
        "fileSaving": BootstrapChartExportEventArgs;
        "incidentOccurred": BootstrapChartErrorEventArgs;
        "init": BootstrapChartEventArgsBase;
        "optionChanged": BootstrapChartOptionChangedEventArgs;
        "tooltipHidden": BootstrapChartEventArgsBase;
        "tooltipShown": BootstrapChartEventArgsBase;
    }

    class BootstrapTimeEdit extends BootstrapClientEdit {
        getButtonVisible(number: number): boolean;
        getCaretPosition(): number;
        getDate(): Date;
        getText(): string;
        selectAll(): void;
        setButtonVisible(number: number, value: boolean): void;
        setCaretPosition(position: number): void;
        setDate(date: Date): void;
        setSelection(startPos: number, endPos: number, scrollToSelection: boolean): void;
        setText(text: string): void;
        on<K extends keyof BootstrapTimeEditEventMap>(
            eventName: K,
            callback: (this: BootstrapTimeEdit, args?: BootstrapTimeEditEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapTimeEditEventMap>(
            eventName: K,
            callback: (this: BootstrapTimeEdit, args?: BootstrapTimeEditEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapTimeEditEventMap>(
            eventName?: K,
            callback?: (this: BootstrapTimeEdit, args?: BootstrapTimeEditEventMap[K]) => void,
        ): this;
    }
    interface BootstrapTimeEditEventMap extends BootstrapClientEditEventMap {
        "buttonClick": ButtonEditClickEventArgs;
        "dateChanged": ProcessingModeEventArgs;
        "keyDown": EditKeyEventArgs;
        "keyPress": EditKeyEventArgs;
        "keyUp": EditKeyEventArgs;
        "textChanged": ProcessingModeEventArgs;
        "userInput": EventArgs;
    }

    class BootstrapSpinEdit extends BootstrapClientEdit {
        getButtonVisible(number: number): boolean;
        getCaretPosition(): number;
        getMaxValue(): number;
        getMinValue(): number;
        getNumber(): number;
        getText(): string;
        selectAll(): void;
        setButtonVisible(number: number, value: boolean): void;
        setCaretPosition(position: number): void;
        setMaxValue(value: number): void;
        setMinValue(value: number): void;
        setNumber(number: number): void;
        setSelection(startPos: number, endPos: number, scrollToSelection: boolean): void;
        setText(text: string): void;
        setValue(number: number): void;
        on<K extends keyof BootstrapSpinEditEventMap>(
            eventName: K,
            callback: (this: BootstrapSpinEdit, args?: BootstrapSpinEditEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapSpinEditEventMap>(
            eventName: K,
            callback: (this: BootstrapSpinEdit, args?: BootstrapSpinEditEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapSpinEditEventMap>(
            eventName?: K,
            callback?: (this: BootstrapSpinEdit, args?: BootstrapSpinEditEventMap[K]) => void,
        ): this;
    }
    interface BootstrapSpinEditEventMap extends BootstrapClientEditEventMap {
        "buttonClick": ButtonEditClickEventArgs;
        "keyDown": EditKeyEventArgs;
        "keyPress": EditKeyEventArgs;
        "keyUp": EditKeyEventArgs;
        "numberChanged": ProcessingModeEventArgs;
        "textChanged": ProcessingModeEventArgs;
        "userInput": EventArgs;
    }

    interface TabControlTabEventArgs extends EventArgs {
        readonly tab: BootstrapTab;
    }

    interface TabControlTabCancelEventArgs extends ProcessingModeCancelEventArgs {
        reloadContentOnCallback: boolean;
        readonly tab: BootstrapTab;
    }

    interface TabControlTabClickEventArgs extends TabControlTabCancelEventArgs {
        readonly htmlElement: object;
        readonly htmlEvent: object;
    }

    class BootstrapTabControl extends Control {
        adjustSize(): void;
        getActiveTab(): BootstrapTab | null;
        getActiveTabIndex(): number;
        getTab(index: number): BootstrapTab | null;
        getTabByName(name: string): BootstrapTab | null;
        getTabCount(): number;
        setActiveTab(tab: BootstrapTab): void;
        setActiveTabIndex(index: number): void;
        on<K extends keyof BootstrapTabControlEventMap>(
            eventName: K,
            callback: (this: BootstrapTabControl, args?: BootstrapTabControlEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapTabControlEventMap>(
            eventName: K,
            callback: (this: BootstrapTabControl, args?: BootstrapTabControlEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapTabControlEventMap>(
            eventName?: K,
            callback?: (this: BootstrapTabControl, args?: BootstrapTabControlEventMap[K]) => void,
        ): this;
    }
    interface BootstrapTabControlEventMap extends ControlEventMap {
        "activeTabChanged": TabControlTabEventArgs;
        "activeTabChanging": TabControlTabCancelEventArgs;
        "beginCallback": BeginCallbackEventArgs;
        "callbackError": CallbackErrorEventArgs;
        "endCallback": EndCallbackEventArgs;
        "tabClick": TabControlTabClickEventArgs;
    }

    class BootstrapTab {
        protected readonly instance: any;
        protected constructor(instance: any);
        readonly index: number;
        readonly name: string;
        readonly tabControl: BootstrapTabControl | null;
        getActiveIconCssClass(): string;
        getActiveImageUrl(): string;
        getBadgeIconCssClass(): string;
        getBadgeText(): string;
        getEnabled(): boolean;
        getIconCssClass(): string;
        getImageUrl(): string;
        getNavigateUrl(): string;
        getText(): string;
        getVisible(): boolean;
        setActiveIconCssClass(cssClass: string): void;
        setActiveImageUrl(value: string): void;
        setBadgeIconCssClass(cssClass: string): void;
        setBadgeText(text: string): void;
        setEnabled(value: boolean): void;
        setIconCssClass(cssClass: string): void;
        setImageUrl(value: string): void;
        setNavigateUrl(value: string): void;
        setText(value: string): void;
        setVisible(value: boolean): void;
    }

    class BootstrapPageControl extends BootstrapTabControl {
        getActiveTab(): BootstrapTab | null;
        getTab(index: number): BootstrapTab | null;
        getTabByName(name: string): BootstrapTab | null;
        getTabContentHTML(tab: BootstrapTab): string;
        performCallback(data: any): Promise<void>;
        performCallback(data: any, onSuccess: () => void): void;
        setActiveTab(tab: BootstrapTab): void;
        setTabContentHTML(tab: BootstrapTab, html: string): void;
        on<K extends keyof BootstrapPageControlEventMap>(
            eventName: K,
            callback: (this: BootstrapPageControl, args?: BootstrapPageControlEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapPageControlEventMap>(
            eventName: K,
            callback: (this: BootstrapPageControl, args?: BootstrapPageControlEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapPageControlEventMap>(
            eventName?: K,
            callback?: (this: BootstrapPageControl, args?: BootstrapPageControlEventMap[K]) => void,
        ): this;
    }
    interface BootstrapPageControlEventMap extends BootstrapTabControlEventMap { // tslint:disable-line:no-empty-interface
    }

    class BootstrapTagBox extends BootstrapClientEdit {
        addItem(texts: string[]): number;
        addItem(text: string): number; // tslint:disable-line:unified-signatures
        addItem(texts: string[], value: any): number; // tslint:disable-line:unified-signatures
        addItem(text: string, value: any): number; // tslint:disable-line:unified-signatures unified-signatures
        addItem(texts: string[], value: any, iconCssClass: string): number; // tslint:disable-line:unified-signatures
        addItem(text: string, value: any, iconCssClass: string): number; // tslint:disable-line:unified-signatures unified-signatures
        addItemCssClass(index: number, className: string): void;
        addItemTextCellCssClass(itemIndex: number, textCellIndex: number, className: string): void;
        addTag(text: string): void;
        adjustDropDownWindow(): void;
        beginUpdate(): void;
        clearItems(): void;
        clearTagCollection(): void;
        endUpdate(): void;
        ensureDropDownLoaded(callbackFunction: any): void;
        findItemByText(text: string): BootstrapListBoxItem | null;
        findItemByValue(value: any): BootstrapListBoxItem | null;
        getButtonVisible(number: number): boolean;
        getCaretPosition(): number;
        getItem(index: number): BootstrapListBoxItem | null;
        getItemBadgeIconCssClass(index: number): string;
        getItemBadgeText(index: number): string;
        getItemCount(): number;
        getSelectedIndex(): number;
        getSelectedItem(): BootstrapListBoxItem | null;
        getTagCollection(): string[];
        getTagHtmlElement(index: number): any;
        getTagIndexByText(text: string): number;
        getTagRemoveButtonHtmlElement(index: number): any;
        getTagTextHtmlElement(index: number): any;
        getText(): string;
        getValue(): string;
        hideDropDown(): void;
        insertItem(index: number, texts: string[]): void;
        insertItem(index: number, text: string): void; // tslint:disable-line:unified-signatures
        insertItem(index: number, texts: string[], value: any): void; // tslint:disable-line:unified-signatures
        insertItem(index: number, text: string, value: any): void; // tslint:disable-line:unified-signatures unified-signatures
        insertItem(index: number, texts: string[], value: any, iconCssClass: string): void; // tslint:disable-line:unified-signatures
        insertItem(index: number, text: string, value: any, iconCssClass: string): void; // tslint:disable-line:unified-signatures unified-signatures
        isCustomTag(text: string, caseSensitive: boolean): boolean;
        makeItemVisible(index: number): void;
        performCallback(data: any): Promise<void>;
        performCallback(data: any, onSuccess: () => void): void;
        removeItem(index: number): void;
        removeItemCssClass(index: number, className: string): void;
        removeItemTextCellCssClass(itemIndex: number, textCellIndex: number, className: string): void;
        removeTag(index: number): void;
        removeTagByText(text: string): void;
        selectAll(): void;
        setButtonVisible(number: number, value: boolean): void;
        setCaretPosition(position: number): void;
        setItemBadgeIconCssClass(index: number, cssClass: string): void;
        setItemBadgeText(index: number, text: string): void;
        setItemHtml(index: number, html: string): void;
        setItemTextCellHtml(itemIndex: number, textCellIndex: number, html: string): void;
        setItemTextCellTooltip(itemIndex: number, textCellIndex: number, tooltip: string): void;
        setItemTooltip(index: number, tooltip: string): void;
        setSelectedIndex(index: number): void;
        setSelectedItem(item: BootstrapListBoxItem): void;
        setSelection(startPos: number, endPos: number, scrollToSelection: boolean): void;
        setTagCollection(collection: string[]): void;
        setText(text: string): void;
        setValue(value: string): void;
        showDropDown(): void;
        on<K extends keyof BootstrapTagBoxEventMap>(
            eventName: K,
            callback: (this: BootstrapTagBox, args?: BootstrapTagBoxEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapTagBoxEventMap>(
            eventName: K,
            callback: (this: BootstrapTagBox, args?: BootstrapTagBoxEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapTagBoxEventMap>(
            eventName?: K,
            callback?: (this: BootstrapTagBox, args?: BootstrapTagBoxEventMap[K]) => void,
        ): this;
    }
    interface BootstrapTagBoxEventMap extends BootstrapClientEditEventMap {
        "beginCallback": BeginCallbackEventArgs;
        "buttonClick": ButtonEditClickEventArgs;
        "callbackError": CallbackErrorEventArgs;
        "closeUp": EventArgs;
        "customHighlighting": ListEditCustomHighlightingEventArgs;
        "dropDown": EventArgs;
        "endCallback": EndCallbackEventArgs;
        "itemFiltering": ListEditItemFilteringEventArgs;
        "keyDown": EditKeyEventArgs;
        "keyPress": EditKeyEventArgs;
        "keyUp": EditKeyEventArgs;
        "queryCloseUp": CancelEventArgs;
        "selectedIndexChanged": ProcessingModeEventArgs;
        "tagsChanged": EventArgs;
        "textChanged": ProcessingModeEventArgs;
        "userInput": EventArgs;
    }

    interface ButtonEditClickEventArgs extends ProcessingModeEventArgs {
        readonly buttonIndex: number;
    }

    class BootstrapButtonEdit extends BootstrapClientEdit {
        getButtonVisible(number: number): boolean;
        getCaretPosition(): number;
        getText(): string;
        selectAll(): void;
        setButtonVisible(number: number, value: boolean): void;
        setCaretPosition(position: number): void;
        setSelection(startPos: number, endPos: number, scrollToSelection: boolean): void;
        setText(text: string): void;
        on<K extends keyof BootstrapButtonEditEventMap>(
            eventName: K,
            callback: (this: BootstrapButtonEdit, args?: BootstrapButtonEditEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapButtonEditEventMap>(
            eventName: K,
            callback: (this: BootstrapButtonEdit, args?: BootstrapButtonEditEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapButtonEditEventMap>(
            eventName?: K,
            callback?: (this: BootstrapButtonEdit, args?: BootstrapButtonEditEventMap[K]) => void,
        ): this;
    }
    interface BootstrapButtonEditEventMap extends BootstrapClientEditEventMap {
        "buttonClick": ButtonEditClickEventArgs;
        "keyDown": EditKeyEventArgs;
        "keyPress": EditKeyEventArgs;
        "keyUp": EditKeyEventArgs;
        "textChanged": ProcessingModeEventArgs;
        "userInput": EventArgs;
    }

    class BootstrapMemo extends BootstrapClientEdit {
        getCaretPosition(): number;
        getText(): string;
        selectAll(): void;
        setCaretPosition(position: number): void;
        setSelection(startPos: number, endPos: number, scrollToSelection: boolean): void;
        setText(text: string): void;
        on<K extends keyof BootstrapMemoEventMap>(
            eventName: K,
            callback: (this: BootstrapMemo, args?: BootstrapMemoEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapMemoEventMap>(
            eventName: K,
            callback: (this: BootstrapMemo, args?: BootstrapMemoEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapMemoEventMap>(
            eventName?: K,
            callback?: (this: BootstrapMemo, args?: BootstrapMemoEventMap[K]) => void,
        ): this;
    }
    interface BootstrapMemoEventMap extends BootstrapClientEditEventMap {
        "keyDown": EditKeyEventArgs;
        "keyPress": EditKeyEventArgs;
        "keyUp": EditKeyEventArgs;
        "textChanged": ProcessingModeEventArgs;
        "userInput": EventArgs;
    }

    class BootstrapTextBox extends BootstrapClientEdit {
        getCaretPosition(): number;
        getText(): string;
        selectAll(): void;
        setCaretPosition(position: number): void;
        setSelection(startPos: number, endPos: number, scrollToSelection: boolean): void;
        setText(text: string): void;
        on<K extends keyof BootstrapTextBoxEventMap>(
            eventName: K,
            callback: (this: BootstrapTextBox, args?: BootstrapTextBoxEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapTextBoxEventMap>(
            eventName: K,
            callback: (this: BootstrapTextBox, args?: BootstrapTextBoxEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapTextBoxEventMap>(
            eventName?: K,
            callback?: (this: BootstrapTextBox, args?: BootstrapTextBoxEventMap[K]) => void,
        ): this;
    }
    interface BootstrapTextBoxEventMap extends BootstrapClientEditEventMap {
        "keyDown": EditKeyEventArgs;
        "keyPress": EditKeyEventArgs;
        "keyUp": EditKeyEventArgs;
        "textChanged": ProcessingModeEventArgs;
        "userInput": EventArgs;
    }

    class BootstrapToolbar extends BootstrapMenu {
        on<K extends keyof BootstrapToolbarEventMap>(
            eventName: K,
            callback: (this: BootstrapToolbar, args?: BootstrapToolbarEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapToolbarEventMap>(
            eventName: K,
            callback: (this: BootstrapToolbar, args?: BootstrapToolbarEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapToolbarEventMap>(
            eventName?: K,
            callback?: (this: BootstrapToolbar, args?: BootstrapToolbarEventMap[K]) => void,
        ): this;
    }
    interface BootstrapToolbarEventMap extends BootstrapMenuEventMap { // tslint:disable-line:no-empty-interface
    }

    interface TreeViewNodeProcessingModeEventArgs extends ProcessingModeEventArgs {
        readonly node: BootstrapTreeViewNode;
    }

    interface TreeViewNodeClickEventArgs extends TreeViewNodeProcessingModeEventArgs {
        readonly htmlElement: any;
        readonly htmlEvent: any;
    }

    interface TreeViewNodeEventArgs extends EventArgs {
        readonly node: BootstrapTreeViewNode;
    }

    interface TreeViewNodeCancelEventArgs extends ProcessingModeCancelEventArgs {
        readonly node: BootstrapTreeViewNode;
    }

    class BootstrapTreeView extends Control {
        collapseAll(): void;
        expandAll(): void;
        getNode(index: number): BootstrapTreeViewNode | null;
        getNodeByName(name: string): BootstrapTreeViewNode | null;
        getNodeByText(text: string): BootstrapTreeViewNode | null;
        getNodeCount(): number;
        getRootNode(): BootstrapTreeViewNode | null;
        getSelectedNode(): BootstrapTreeViewNode | null;
        setSelectedNode(node: BootstrapTreeViewNode): void;
        on<K extends keyof BootstrapTreeViewEventMap>(
            eventName: K,
            callback: (this: BootstrapTreeView, args?: BootstrapTreeViewEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapTreeViewEventMap>(
            eventName: K,
            callback: (this: BootstrapTreeView, args?: BootstrapTreeViewEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapTreeViewEventMap>(
            eventName?: K,
            callback?: (this: BootstrapTreeView, args?: BootstrapTreeViewEventMap[K]) => void,
        ): this;
    }
    interface BootstrapTreeViewEventMap extends ControlEventMap {
        "beginCallback": BeginCallbackEventArgs;
        "callbackError": CallbackErrorEventArgs;
        "checkedChanged": TreeViewNodeProcessingModeEventArgs;
        "endCallback": EndCallbackEventArgs;
        "expandedChanged": TreeViewNodeEventArgs;
        "expandedChanging": TreeViewNodeCancelEventArgs;
        "nodeClick": TreeViewNodeClickEventArgs;
    }

    class BootstrapTreeViewNode extends Control {
        readonly index: number;
        readonly name: string;
        readonly parent: BootstrapTreeViewNode | null;
        readonly treeView: BootstrapTreeView | null;
        getBadgeIconCssClass(): string;
        getBadgeText(): string;
        getCheckState(): string;
        getChecked(): boolean;
        getEnabled(): boolean;
        getExpanded(): boolean;
        getHtmlElement(): any;
        getIconCssClass(): string;
        getImageUrl(): string;
        getNavigateUrl(): string;
        getNode(index: number): BootstrapTreeViewNode | null;
        getNodeByName(name: string): BootstrapTreeViewNode | null;
        getNodeByText(text: string): BootstrapTreeViewNode | null;
        getNodeCount(): number;
        getText(): string;
        getVisible(): boolean;
        setBadgeIconCssClass(cssClass: string): void;
        setBadgeText(text: string): void;
        setChecked(value: boolean): void;
        setEnabled(value: boolean): void;
        setExpanded(value: boolean): void;
        setIconCssClass(cssClass: string): void;
        setImageUrl(value: string): void;
        setNavigateUrl(value: string): void;
        setText(value: string): void;
        setVisible(value: boolean): void;
        on<K extends keyof BootstrapTreeViewNodeEventMap>(
            eventName: K,
            callback: (this: BootstrapTreeViewNode, args?: BootstrapTreeViewNodeEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapTreeViewNodeEventMap>(
            eventName: K,
            callback: (this: BootstrapTreeViewNode, args?: BootstrapTreeViewNodeEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapTreeViewNodeEventMap>(
            eventName?: K,
            callback?: (this: BootstrapTreeViewNode, args?: BootstrapTreeViewNodeEventMap[K]) => void,
        ): this;
    }
    interface BootstrapTreeViewNodeEventMap extends ControlEventMap { // tslint:disable-line:no-empty-interface
    }

    interface UploadControlFilesUploadStartEventArgs extends EventArgs {
        readonly cancel: boolean;
    }

    interface UploadControlFileUploadCompleteEventArgs extends EventArgs {
        readonly callbackData: string;
        readonly errorText: string;
        readonly inputIndex: number;
        readonly isValid: boolean;
    }

    interface UploadControlFilesUploadCompleteEventArgs extends EventArgs {
        readonly callbackData: string;
        readonly errorText: string;
    }

    interface UploadControlTextChangedEventArgs extends EventArgs {
        readonly inputIndex: number;
    }

    interface UploadControlUploadingProgressChangedEventArgs extends EventArgs {
        readonly currentFileContentLength: number;
        readonly currentFileName: string;
        readonly currentFileProgress: number;
        readonly currentFileUploadedContentLength: number;
        readonly fileCount: number;
        readonly progress: number;
        readonly totalContentLength: number;
        readonly uploadedContentLength: number;
    }

    interface UploadControlValidationErrorOccurredEventArgs extends EventArgs {
        errorText: string;
        readonly invalidFiles: BootstrapUploadControlInvalidFileInfo[];
        showAlert: boolean;
        readonly validationSettings: BootstrapUploadControlValidationSettings;
    }

    interface UploadControlDropZoneEnterEventArgs extends EventArgs {
        readonly dropZone: any;
    }

    interface UploadControlDropZoneLeaveEventArgs extends EventArgs {
        readonly dropZone: any;
    }

    class BootstrapUploadControl extends Control {
        addFileInput(): void;
        cancel(): void;
        clearText(): void;
        getAddButtonText(): string;
        getEnabled(): boolean;
        getFileInputCount(): number;
        getSelectedFiles(inputIndex: number): BootstrapUploadControlFile[];
        getText(index: number): string;
        getUploadButtonText(): string;
        removeFileFromSelection(fileIndex: number): void;
        removeFileFromSelection(file: BootstrapUploadControlFile): void; // tslint:disable-line:unified-signatures
        removeFileInput(index: number): void;
        setAddButtonText(text: string): void;
        setDialogTriggerID(ids: string): void;
        setEnabled(enabled: boolean): void;
        setFileInputCount(count: number): void;
        setUploadButtonText(text: string): void;
        upload(): void;
        on<K extends keyof BootstrapUploadControlEventMap>(
            eventName: K,
            callback: (this: BootstrapUploadControl, args?: BootstrapUploadControlEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapUploadControlEventMap>(
            eventName: K,
            callback: (this: BootstrapUploadControl, args?: BootstrapUploadControlEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapUploadControlEventMap>(
            eventName?: K,
            callback?: (this: BootstrapUploadControl, args?: BootstrapUploadControlEventMap[K]) => void,
        ): this;
    }
    interface BootstrapUploadControlEventMap extends ControlEventMap {
        "dropZoneEnter": UploadControlDropZoneEnterEventArgs;
        "dropZoneLeave": UploadControlDropZoneLeaveEventArgs;
        "fileInputCountChanged": EventArgs;
        "fileUploadComplete": UploadControlFileUploadCompleteEventArgs;
        "filesUploadComplete": UploadControlFilesUploadCompleteEventArgs;
        "filesUploadStart": UploadControlFilesUploadStartEventArgs;
        "textChanged": UploadControlTextChangedEventArgs;
        "uploadingProgressChanged": UploadControlUploadingProgressChangedEventArgs;
        "validationErrorOccurred": UploadControlValidationErrorOccurredEventArgs;
    }

    class BootstrapUploadControlFile extends Control {
        readonly name: string;
        readonly size: number;
        readonly sourceFileObject: any;
        on<K extends keyof BootstrapUploadControlFileEventMap>(
            eventName: K,
            callback: (this: BootstrapUploadControlFile, args?: BootstrapUploadControlFileEventMap[K]) => void,
        ): this;
        once<K extends keyof BootstrapUploadControlFileEventMap>(
            eventName: K,
            callback: (this: BootstrapUploadControlFile, args?: BootstrapUploadControlFileEventMap[K]) => void,
        ): this;
        off<K extends keyof BootstrapUploadControlFileEventMap>(
            eventName?: K,
            callback?: (this: BootstrapUploadControlFile, args?: BootstrapUploadControlFileEventMap[K]) => void,
        ): this;
    }
    interface BootstrapUploadControlFileEventMap extends ControlEventMap { // tslint:disable-line:no-empty-interface
    }

    class BootstrapUploadControlInvalidFileInfo extends Control {
        readonly fileName: string;
        readonly fileSize: number;
        on<K extends keyof BootstrapUploadControlInvalidFileInfoEventMap>(
            eventName: K,
            callback: (
                this: BootstrapUploadControlInvalidFileInfo,
                args?: BootstrapUploadControlInvalidFileInfoEventMap[K],
            ) => void,
        ): this;
        once<K extends keyof BootstrapUploadControlInvalidFileInfoEventMap>(
            eventName: K,
            callback: (
                this: BootstrapUploadControlInvalidFileInfo,
                args?: BootstrapUploadControlInvalidFileInfoEventMap[K],
            ) => void,
        ): this;
        off<K extends keyof BootstrapUploadControlInvalidFileInfoEventMap>(
            eventName?: K,
            callback?: (
                this: BootstrapUploadControlInvalidFileInfo,
                args?: BootstrapUploadControlInvalidFileInfoEventMap[K],
            ) => void,
        ): this;
    }
    interface BootstrapUploadControlInvalidFileInfoEventMap extends ControlEventMap { // tslint:disable-line:no-empty-interface
    }

    class BootstrapUploadControlValidationSettings extends Control {
        readonly allowedFileExtensions: string[];
        readonly invalidFileNameCharacters: string[];
        readonly maxFileCount: number;
        readonly maxFileSize: number;
        on<K extends keyof BootstrapUploadControlValidationSettingsEventMap>(
            eventName: K,
            callback: (
                this: BootstrapUploadControlValidationSettings,
                args?: BootstrapUploadControlValidationSettingsEventMap[K],
            ) => void,
        ): this;
        once<K extends keyof BootstrapUploadControlValidationSettingsEventMap>(
            eventName: K,
            callback: (
                this: BootstrapUploadControlValidationSettings,
                args?: BootstrapUploadControlValidationSettingsEventMap[K],
            ) => void,
        ): this;
        off<K extends keyof BootstrapUploadControlValidationSettingsEventMap>(
            eventName?: K,
            callback?: (
                this: BootstrapUploadControlValidationSettings,
                args?: BootstrapUploadControlValidationSettingsEventMap[K],
            ) => void,
        ): this;
    }
    interface BootstrapUploadControlValidationSettingsEventMap extends ControlEventMap { // tslint:disable-line:no-empty-interface
    }
}
