/// <reference path="jquery-1.8.d.ts"/>

// Type definitions for jQueryUI 1.9
// Project: http://jqueryui.com/
// Definitions: https://github.com/borisyankov/DefinitelyTyped


// Widget //////////////////////////////////////////////////

interface Widget {

    // Methods
    destroy();
    disable();
    enable();
    option(optionName: string): any;
    option(): any;
    option(optionName: string, value: any): void;
    option(options: any): void;
    refresh(): void;
    widget(): JQuery;

    // Events
    create(event: Event, ui): void;
}


// Accordion //////////////////////////////////////////////////

interface Accordion extends Widget {

    // Options
    active?: any; // bool or number
    animate?: any; // bool, number, string or object
    collapsible?: bool;
    disabled?: bool;
    event?: string;
    header?: any; // TODO: Selector
    heightStyle?: string;
    icons?: any;

    // Methods
    destroy();
    disable();
    enable();
    option(optionName: string): any;
    option(): any;
    option(optionName: string, value: any): void;
    option(options: any): void;
    refresh();
    widget(): JQuery;

    // Events
    activate(event: Event, ui): void;
    beforeActivate(event: Event, ui): void;
    create(event: Event, ui): void;
}


// Autocomplete //////////////////////////////////////////////////

interface Autocomplete {

    // Options
    appendTo?: any; //Selector;
    autoFocus?: bool;
    delay?: number;
    disabled?: bool;
    minLength?: number;
    position?: any; // TODO: JqueryPosition
    source?: any; // [], string or ()

    // Methods
    close();
    destroy();
    disable();
    enable();
    option(optionName: string): any;
    option(): any;
    option(optionName: string, value: any): void;
    option(options: any): void;
    search(value?: string);
    widget(): JQuery;

    // Events
    change(event: Event, ui): void;
    close(event: Event, ui): void;
    create(event: Event, ui): void;
    focus(event: Event, ui): void;
    open(event: Event, ui): void;
    response(event: Event, ui): void;
    search(event: Event, ui): void;
    select(event: Event, ui): void;
}


// Button //////////////////////////////////////////////////

interface Button {

    // Options
    disabled?: bool;
    icons?: any;
    label?: string;
    text?: bool;

    // Methods
    destroy();
    disable();
    enable();
    option(optionName: string): any;
    option(): any;
    option(optionName: string, value: any): void;
    option(options: any): void;
    refresh();
    widget(): JQuery;

    // Events
    create(event: Event, ui): void;
}


// Datepicker //////////////////////////////////////////////////

interface Datepicker {

    // Options
    altFieldType?: any; // Selecotr, jQuery or Element
    altFormat?: string;
    appendText?: string;
    autoSize?: bool;
    beforeShow?: (input: Element, inst: any) => void;
    beforeShowDay?: (date: Date) => void;
    buttonImage?: string;
    buttonImageOnly?: bool;
    buttonText?: string;
    calculateWeek?: () => any;
    changeMonth?: bool;
    changeYear?: bool;
    closeText?: string;
    constrainInput?: bool;
    currentText?: string;
    dateFormat?: string;
    dayNames?: string[];
    dayNamesMin?: string[];
    dayNamesShort?: string[];
    defaultDateType?: any; // Date, number or string
    duration?: string;
    firstDay?: number;
    gotoCurrent?: bool;
    hideIfNoPrevNext?: bool;
    isRTL?: bool;
    maxDate?: any; // Date, number or string
    minDate?: any; // Date, number or string
    monthNames?: string[];
    monthNamesShort?: string[];
    navigationAsDateFormat?: bool;
    nextText?: string;
    numberOfMonths?: any; // number or []
    onChangeMonthYear?: (year: number, month: number, inst: any) => void;
    onClose?: (dateText: string, inst: any) => void;
    onSelect?: (dateText: string, inst: any) => void;
    prevText?: string;
    selectOtherMonths?: bool;
    shortYearCutoff?: any; // number or string
    showAnim?: string;
    showButtonPanel?: bool;
    showCurrentAtPos?: number;
    showMonthAfterYear?: bool;
    showOn?: string;
    showOptions?: any; // TODO
    showOtherMonths?: bool;
    showWeek?: bool;
    stepMonths?: number;
    weekHeader?: string;
    yearRange?: string;
    yearSuffix?: string;

    // Methods
    destroy();
    dialog(date: any, onSelect?: (), settings?: any, pos?: any);
    getDate(): Date;
    hide(): void;
    isDisabled(): bool;
    refresh(): void;
    setDate(date: Date): void;
    show();

    // Events
}


// Dialog //////////////////////////////////////////////////

interface Dialog {

    // Options
    autoOpen?: bool;
    buttons?: any; // object or []
    closeOnEscape?: bool;
    closeText?: string;
    dialogClass?: string;
    disabled?: bool;
    draggable?: bool;
    height?: any; // number or string
    maxHeight?: number;
    maxWidth?: number;
    minHeight?: number;
    minWidth?: number;
    modal?: bool;
    position?: any; // object, string or []
    resizable?: bool;
    show?: any; // number, string or object
    stack?: bool;
    title?: string;
    width?: number;
    zIndex?: number;

    // Methods
    close(): void;
    destroy(): void;
    disable(): void;
    enable(): void;
    isOpen(): bool;
    moveToTop(): void;
    open(): void;
    option(optionName: string): any;
    option(): any;
    option(optionName: string, value: any): void;
    option(options: any): void;
    widget(): JQuery;

    // Events
    beforeClose(event: Event, ui): void;
    close(event: Event, ui): void;
    create(event: Event, ui): void;
    drag(event: Event, ui): void;
    dragStart(event: Event, ui): void;
    dragStop(event: Event, ui): void;
    focus(event: Event, ui): void;
    open(event: Event, ui): void;
    resize(event: Event, ui): void;
    resizeStart(event: Event, ui): void;
    resizeStop(event: Event, ui): void;
}


// Draggable //////////////////////////////////////////////////

interface DraggableEventUIParam {
    helper: JQuery;
    position: { top: number; left: number; };
    offset: { top: number; left: number; };
}

interface DraggableEvent {
    (event: Event, ui: DraggableEventUIParam): void;
}

interface Draggable {

    // Options
    disabled?: bool;
    addClasses?: bool;
    appendTo?: any;
    axis?: string;
    cancel?: string;
    connectToSortable?: string;
    containment?: any;
    cursor?: string;
    cursorAt?: any;
    delay?: number;
    distance?: number;
    grid?: number[];
    handle?: any;
    helper?: any;
    iframeFix?: any;
    opacity?: number;
    refreshPositions?: bool;
    revert?: any;
    revertDuration?: number;
    scope?: string;
    scroll?: bool;
    scrollSensitivity?: number;
    scrollSpeed?: number;
    snap?: any;
    snapMode?: string;
    snapTolerance?: number;
    stack?: string;
    zIndex?: number;

    // Events
    create?: DraggableEvent;
    start?: DraggableEvent;
    drag?: DraggableEvent;
    stop?: DraggableEvent;
}


// Droppable //////////////////////////////////////////////////

interface DroppableEventUIParam {
    draggable: JQuery;
    helper: JQuery;
    position: { top: number; left: number; };
    offset: { top: number; left: number; };
}

interface DroppableEvent {
    (event: Event, ui: DroppableEventUIParam): void;
}

interface Droppable {

    // Options
    disabled?: bool;
    accept?: any;
    activeClass?: string;
    greedy?: bool;
    hoverClass?: string;
    scope?: string;
    tolerance?: string;

    // Events
    create?: DroppableEvent;
    activate?: DroppableEvent;
    deactivate?: DroppableEvent;
    over?: DroppableEvent;
    out?: DroppableEvent;
    drop?: DroppableEvent;
}

interface JQueryDatePickerDefaults {
    closeText: string;
    prevText: string;
    nextText: string;
    currentText: string;
    monthNames: string[];
    monthNamesShort: string[];
    dayNames: string[];
    dayNamesShort: string[];
    dayNamesMin: string[];
    weekHeader: string;
    dateFormat: string;
    firstDay: number;
    isRTL: bool;
    showMonthAfterYear: bool;
    yearSuffix: string;
}

interface JQueryDatePicker {
    regional: any;
    setDefaults(JQueryDatePickerDefaults);
}


// Menu //////////////////////////////////////////////////

interface Menu {

    // Options
    disabled?: bool;
    icons?: any;
    menus?: string;
    position?: any; // TODO
    role?: string;

    // Methods    
    blur(event?: Event): void;
    collapse(event?: Event): void;
    blurAll(event?: Event, all?: bool): void;
    destroy();
    disable();
    enable();
    expand(event?: Event): void;
    focus(event?: Event, item?: JQuery): void;
    isFirstItem(): bool;
    isLastItem(): bool;
    next(event?: Event): void;
    nextPage(event?: Event): void;
    option(optionName: string): any;
    option(): any;
    option(optionName: string, value: any): void;
    option(options: any): void;
    previous(event?: Event): void;
    previousPage(event?: Event): void;
    refresh(): void;
    select(event?: Event): void;
    widget(): JQuery;

    // Events
    blur(event: Event, ui): void;
    create(event: Event, ui): void;
    focus(event: Event, ui): void;
    select(event: Event, ui): void;    
}


// Progressbar //////////////////////////////////////////////////

interface Progressbar {

    // Options
    disabled?: bool;
    value?: number;

    // Methods    
    destroy();
    disable();
    enable();    
    option(optionName: string): any;
    option(): any;
    option(optionName: string, value: any): void;
    option(options: any): void;
    value(): number;
    value(newValue: number): void;
    widget(): JQuery;

    // Events
    change(event: Event, ui): void;
    complete(event: Event, ui): void;
    create(event: Event, ui): void;
}


// Slider //////////////////////////////////////////////////

interface Slider extends Widget {

    // Options
    animate?: any; // bool, string or number
    disabled?: bool; 
    max?: number;
    min?: number;
    orientation?: string;
    range?: any; // bool or string
    step?: number;
    value?: number;
    values?: number[];

    // Methods    
    value(): number;
    value(newValue: number): void;
    values(): number[];
    values(index: number): number;
    values(index: number, newValue: number): void;
    values(newValues: numbers[]): void;

    // Events
    change(event: Event, ui): void;
    create(event: Event, ui): void;   
    slide(event: Event, ui): void;   
    start(event: Event, ui): void;
    stop(event: Event, ui): void;
}


// Spinner //////////////////////////////////////////////////

interface Spinner {

    // Options
    culture?: string;
    disabled?: bool;
    icons?: any;
    incremental?: any; // bool or ()
    max?: any; // number or string
    min?: any; // number or string
    numberFormat?: string;
    page?: number;
    step?: any; // number or string

    // Methods    
    pageDown(pages?: number): void;
    pageUp(pages?: number): void;
    stepDown(steps?: number): void;
    stepUp(steps?: number): void;
    value(): number;
    value(newValue: number): void;

    // Events
    spin(event: Event, ui): void;
    start(event: Event, ui): void;
    stop(event: Event, ui): void;
}


// Tabs //////////////////////////////////////////////////

interface Tabs {

    // Options
    active?: any; // bool or number
    collapsible?: bool;
    disabled?: any; // bool or []
    event?: string;
    heightStyle?: string;
    hide?: any; // bool, number, string or object
    show?: any; // bool, number, string or object

    // Methods    
    disable(index: any): void;
    enable(index: any): void;
    load(index: any): void;

    // Events
    activate(event: Event, ui): void;
    beforeActivate(event: Event, ui): void;
    beforeLoad(event: Event, ui): void;
    load(event: Event, ui): void;
}


// Tooltip //////////////////////////////////////////////////

interface Tooltip {

    // Options
    content?: any; // () or string
    disabled?: bool;
    hide?: any; // bool, number, string or object
    items?: any; // TODO Selector
    position?: any; // TODO
    show?: any; // bool, number, string or object
    tooltipClass?: string;
    track?: bool;

    // Methods    
    close(event?: Event): void;
    open(event?: Event): void;

    // Events
    close(event: Event, ui): void;
    open(event: Event, ui): void;
}


////////////////////////////////////////////////////////////////////////////////////////////////////

interface JQuery {
    draggable(options: Draggable): JQuery;
    draggable(optionLiteral: string, options: Draggable): JQuery;
    draggable(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    draggable(optionLiteral: string, optionName: string): any;
    // draggable(methodName: string): any;
    droppable(options: Droppable): JQuery;
    droppable(optionLiteral: string, options: Draggable): JQuery;
    droppable(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    droppable(optionLiteral: string, optionName: string): any;
    droppable(methodName: string): any;

    autocomplete(any): void;
    datepicker(any): void;
}

interface JQueryStatic {
    datepicker: JQueryDatePicker;
}
