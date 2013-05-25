// Type definitions for jQueryUI 1.9
// Project: http://jqueryui.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>


// Accordion //////////////////////////////////////////////////

interface AccordionOptions {
    active?: any; // bool or number
    animate?: any; // bool, number, string or object
    collapsible?: bool;
    disabled?: bool;
    event?: string;
    header?: string;
    heightStyle?: string;
    icons?: any;
}

interface AccordionUIParams {
    newHeader: JQuery;
    oldHeader: JQuery;
    newPanel: JQuery;
    oldPanel: JQuery;
}

interface AccordionEvent {
    (event: Event, ui: AccordionUIParams): void;
}

interface AccordionEvents {
    activate?: AccordionEvent;
    beforeActivate?: AccordionEvent;
    create?: AccordionEvent;
}

interface Accordion extends Widget, AccordionOptions, AccordionEvents {
}


// Autocomplete //////////////////////////////////////////////////

interface AutocompleteOptions {
    appendTo?: any; //Selector;
    autoFocus?: bool;
    delay?: number;
    disabled?: bool;
    minLength?: number;
    position?: string;
    source?: any; // [], string or ()
}

interface AutocompleteUIParams {

}

interface AutocompleteEvent {
    (event: Event, ui: AutocompleteUIParams): void;
}

interface AutocompleteEvents {
    change?: AutocompleteEvent;
    close?: AutocompleteEvent;
    create?: AutocompleteEvent;
    focus?: AutocompleteEvent;
    open?: AutocompleteEvent;
    response?: AutocompleteEvent;
    search?: AutocompleteEvent;
    select?: AutocompleteEvent;
}

interface Autocomplete extends Widget, AutocompleteOptions, AutocompleteEvents {
    escapeRegex: (string) => string;
}


// Button //////////////////////////////////////////////////

interface ButtonOptions {
    disabled?: bool;
    icons?: any;
    label?: string;
    text?: bool;
}

interface Button extends Widget, ButtonOptions {
}


// Datepicker //////////////////////////////////////////////////

interface DatepickerOptions {
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
}

interface DatepickerFormatDateOptions {
    dayNamesShort?: string[];
    dayNames?: string[];
    monthNamesShort?: string[];
    monthNames?: string[];
}

interface Datepicker extends Widget, DatepickerOptions {
    regional: { [languageCod3: string]: any; };
    setDefaults(defaults: DatepickerOptions);
    formatDate(format: string, date: Date, settings?: DatepickerFormatDateOptions): string;
    parseDate(format: string, date: string, settings?: DatepickerFormatDateOptions): Date;
    iso8601Week(date: Date): void;
    noWeekends(): void;
}


// Dialog //////////////////////////////////////////////////

interface DialogOptions {
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
    width?: any; // number or string
    zIndex?: number;
}

interface DialogUIParams {
}

interface DialogEvent {
    (event: Event, ui: DialogUIParams): void;
}

interface DialogEvents {
    beforeClose?: DialogEvent;
    close?: DialogEvent;
    create?: DialogEvent;
    drag?: DialogEvent;
    dragStart?: DialogEvent;
    dragStop?: DialogEvent;
    focus?: DialogEvent;
    open?: DialogEvent;
    resize?: DialogEvent;
    resizeStart?: DialogEvent;
    resizeStop?: DialogEvent;
}

interface Dialog extends Widget, DialogOptions, DialogEvents {
}


// Draggable //////////////////////////////////////////////////

interface DraggableEventUIParams {
    helper: JQuery;
    position: { top: number; left: number; };
    offset: { top: number; left: number; };
}

interface DraggableEvent {
    (event: Event, ui: DraggableEventUIParams): void;
}

interface DraggableOptions {
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
}

interface DraggableEvents {
    create?: DraggableEvent;
    start?: DraggableEvent;
    drag?: DraggableEvent;
    stop?: DraggableEvent;
}

interface Draggable extends Widget, DraggableOptions, DraggableEvent {
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

interface DroppableOptions {
    disabled?: bool;
    accept?: any;
    activeClass?: string;
    greedy?: bool;
    hoverClass?: string;
    scope?: string;
    tolerance?: string;
}

interface DroppableEvents {
    create?: DroppableEvent;
    activate?: DroppableEvent;
    deactivate?: DroppableEvent;
    over?: DroppableEvent;
    out?: DroppableEvent;
    drop?: DroppableEvent;
}

interface Droppable extends Widget, DroppableOptions, DroppableEvents {
}

// Menu //////////////////////////////////////////////////

interface MenuOptions {
    disabled?: bool;
    icons?: any;
    menus?: string;
    position?: any; // TODO
    role?: string;
}

interface MenuUIParams {
}

interface MenuEvent {
    (event: Event, ui: MenuUIParams): void;
}

interface MenuEvents {
    blur?: MenuEvent;
    create?: MenuEvent;
    focus?: MenuEvent;
    select?: MenuEvent;
}

interface Menu extends Widget, MenuOptions, MenuEvents {
}


// Progressbar //////////////////////////////////////////////////

interface ProgressbarOptions {
    disabled?: bool;
    value?: number;
}

interface ProgressbarUIParams {
}

interface ProgressbarEvent {
    (event: Event, ui: ProgressbarUIParams): void;
}

interface ProgressbarEvents {
    change?: ProgressbarEvent;
    complete?: ProgressbarEvent;
    create?: ProgressbarEvent;
}

interface Progressbar extends Widget, ProgressbarOptions, ProgressbarEvents {
}


// Resizable //////////////////////////////////////////////////

interface ResizableOptions {
    alsoResize?: any; // Selector, JQuery or Element
    animate?: bool;
    animateDuration?: any; // number or string
    animateEasing?: string;
    aspectRatio?: any; // bool or number
    autoHide?: bool;
    cancel?: string;
    containment?: any; // Selector, Element or string
    delay?: number;
    disabled?: bool;
    distance?: number;
    ghost?: bool;
    grid?: any;
    handles?: any; // string or object
    helper?: string;
    maxHeight?: number;
    maxWidth?: number;
    minHeight?: number;
    minWidth?: number;
}

interface ResizableUIParams {
    element: JQuery;
    helper: JQuery;
    originalElement: JQuery;
    originalPosition: any;
    originalSize: any;
    position: any;
    size: any;
}

interface ResizableEvent {
    (event: Event, ui: ResizableUIParams): void;
}

interface ResizableEvents {
    resize?: ResizableEvent;
    start?: ResizableEvent;
    stop?: ResizableEvent;
}

interface Resizable extends Widget, ResizableOptions, ResizableEvents {
}


// Selectable //////////////////////////////////////////////////

interface SelectableOptions {
    autoRefresh?: bool;
    cancel?: string;
    delay?: number;
    disabled?: bool;
    distance?: number;
    filter?: string;
    tolerance?: string;
}

interface SelectableEvents {
    selected? (event: Event, ui: { selected?: Element; }): void;
    selecting? (event: Event, ui: { selecting?: Element; }): void;
    start? (event: Event, ui: any): void;
    stop? (event: Event, ui: any): void;
    unselected? (event: Event, ui: { unselected: Element; }): void;
    unselecting? (event: Event, ui: { unselecting: Element; }): void;
}

interface Selectable extends Widget, SelectableOptions, SelectableEvents {
}

// Slider //////////////////////////////////////////////////

interface SliderOptions {
    animate?: any; // bool, string or number
    disabled?: bool;
    max?: number;
    min?: number;
    orientation?: string;
    range?: any; // bool or string
    step?: number;
    // value?: number;
    // values?: number[];
}

interface SliderUIParams {
}

interface SliderEvent {
    (event: Event, ui: SliderUIParams): void;
}

interface SliderEvents {
    change?: SliderEvent;
    create?: SliderEvent;
    slide?: SliderEvent;
    start?: SliderEvent;
    stop?: SliderEvent;
}

interface Slider extends Widget, SliderOptions, SliderEvents {
}


// Sortable //////////////////////////////////////////////////

interface SortableOptions {
    appendTo?: any; // jQuery, Element, Selector or string
    axis?: string;
    cancel?: string;
    connectWith?: string;
    containment?: any; // Element, Selector or string
    cursor?: string;
    cursorAt?: any;
    delay?: number;
    disabled?: bool;
    distance?: number;
    dropOnEmpty?: bool;
    forceHelperSize?: bool;
    forcePlaceholderSize?: bool;
    grid?: number[];
    handle?: any; // Selector or Element
    items?: any; // Selector
    opacity?: number;
    placeholder?: string;
    revert?: any; // bool or number
    scroll?: bool;
    scrollSensitivity?: number;
    scrollSpeed?: number;
    tolerance?: string;
    zIndex?: number;
}

interface SortableUIParams {
    helper: JQuery;
    item: JQuery;
    offset: any;
    position: any;
    originalPosition: any;
    sender: JQuery;
	placeholder: JQuery;
}

interface SortableEvent {
    (event: Event, ui: SortableUIParams): void;
}

interface SortableEvents {
    activate?: SortableEvent;
    beforeStop?: SortableEvent;
    change?: SortableEvent;
    deactivate?: SortableEvent;
    out?: SortableEvent;
    over?: SortableEvent;
    receive?: SortableEvent;
    remove?: SortableEvent;
    sort?: SortableEvent;
    start?: SortableEvent;
    stop?: SortableEvent;
    update?: SortableEvent;
}

interface Sortable extends Widget, SortableOptions, SortableEvents {
}


// Spinner //////////////////////////////////////////////////

interface SpinnerOptions {
    culture?: string;
    disabled?: bool;
    icons?: any;
    incremental?: any; // bool or ()
    max?: any; // number or string
    min?: any; // number or string
    numberFormat?: string;
    page?: number;
    step?: any; // number or string
}

interface SpinnerUIParams {
}

interface SpinnerEvent {
    (event: Event, ui: SpinnerUIParams): void;
}

interface SpinnerEvents {
    spin?: SpinnerEvent;
    start?: SpinnerEvent;
    stop?: SpinnerEvent;
}

interface Spinner extends Widget, SpinnerOptions, SpinnerEvents {
}


// Tabs //////////////////////////////////////////////////

interface TabsOptions {
    active?: any; // bool or number
    collapsible?: bool;
    disabled?: any; // bool or []
    event?: string;
    heightStyle?: string;
    hide?: any; // bool, number, string or object
    show?: any; // bool, number, string or object
}

interface TabsUIParams {
}

interface TabsEvent {
    (event: Event, ui: TabsUIParams): void;
}

interface TabsEvents {
    activate?: TabsEvent;
    beforeActivate?: TabsEvent;
    beforeLoad?: TabsEvent;
    load?: TabsEvent;
}

interface Tabs extends Widget, TabsOptions, TabsEvents {
}


// Tooltip //////////////////////////////////////////////////

interface TooltipOptions {
    content?: any; // () or string
    disabled?: bool;
    hide?: any; // bool, number, string or object
    items?: string;
    position?: any; // TODO
    show?: any; // bool, number, string or object
    tooltipClass?: string;
    track?: bool;
}

interface TooltipUIParams {
}

interface TooltipEvent {
    (event: Event, ui: TooltipUIParams): void;
}

interface TooltipEvents {
    close?: TooltipEvent;
    open?: TooltipEvent;
}

interface Tooltip extends Widget, TooltipOptions, TooltipEvents {
}


// Effects //////////////////////////////////////////////////

interface EffectOptions {
    effect: string;
    easing?: string;
    duration: any;
    complete: Function;
}

interface BlindEffect {
    direction?: string;
}

interface BounceEffect {
    distance?: number;
    times?: number;
}

interface ClipEffect {
    direction?: number;
}

interface DropEffect {
    direction?: number;
}

interface ExplodeEffect {
    pieces?: number;
}

interface FadeEffect { }

interface FoldEffect {
    size?: any;
    horizFirst?: bool;
}

interface HighlightEffect {
    color?: string;
}

interface PuffEffect {
    percent?: number;
}

interface PulsateEffect {
    times?: number;
}

interface ScaleEffect {
    direction?: string;
    origin?: string[];
    percent?: number;
    scale?: string;
}

interface ShakeEffect {
    direction?: string;
    distance?: number;
    times?: number;
}

interface SizeEffect {
    to?: any;
    origin?: string[];
    scale?: string;
}

interface SlideEffect {
    direction?: string;
    distance?: number;
}

interface TransferEffect {
    className?: string;
    to?: string;
}

interface JQueryPositionOptions {
    my?: string;
    at?: string;
    of?: any;
    collision?: string;
    using?: Function;
    within?: any;
}


// UI //////////////////////////////////////////////////

interface MouseOptions {
    cancel?: string;
    delay?: number;
    distance?: number;
}

interface keyCode {
    BACKSPACE: number;
    COMMA: number;
    DELETE: number;
    DOWN: number;
    END: number;
    ENTER: number;
    ESCAPE: number;
    HOME: number;
    LEFT: number;
    NUMPAD_ADD: number;
    NUMPAD_DECIMAL: number;
    NUMPAD_DIVIDE: number;
    NUMPAD_ENTER: number;
    NUMPAD_MULTIPLY: number;
    NUMPAD_SUBTRACT: number;
    PAGE_DOWN: number;
    PAGE_UP: number;
    PERIOD: number;
    RIGHT: number;
    SPACE: number;
    TAB: number;
    UP: number;
}

interface UI {
    mouse(method: string): JQuery;
    mouse(options: MouseOptions): JQuery;
    mouse(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    mouse(optionLiteral: string, optionValue: any): any;

    accordion: Accordion;
    autocomplete: Autocomplete;
    button: Button;
    buttonset: Button;
    datepicker: Datepicker;
    dialog: Dialog;
    keyCode: keyCode    ;
    menu: Menu;
    progressbar: Progressbar;
    slider: Slider;
    spinner: Spinner;
    tabs: Tabs;
    tooltip: Tooltip;
    version: string;
}


// Widget //////////////////////////////////////////////////

interface WidgetOptions {
    disabled?: bool;
    hide?: any;
    show?: any;
}

interface Widget {
    (methodName: string): JQuery;
    (options: WidgetOptions): JQuery;
    (options: AccordionOptions): JQuery;
    (optionLiteral: string, optionName: string): any;
    (optionLiteral: string, options: WidgetOptions): any;
    (optionLiteral: string, optionName: string, optionValue: any): JQuery;

    (name: string, prototype: any): JQuery;
    (name: string, base: Function, prototype: any): JQuery;
}

////////////////////////////////////////////////////////////////////////////////////////////////////

interface JQuery {

    accordion(): JQuery;
    accordion(methodName: string): JQuery;
    accordion(options: AccordionOptions): JQuery;
    accordion(optionLiteral: string, optionName: string): any;
    accordion(optionLiteral: string, options: AccordionOptions): any;
    accordion(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    autocomplete(): JQuery;
    autocomplete(methodName: string): JQuery;
    autocomplete(options: AutocompleteOptions): JQuery;
    autocomplete(optionLiteral: string, optionName: string): any;
    autocomplete(optionLiteral: string, options: AutocompleteOptions): any;
    autocomplete(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    button(): JQuery;
    button(methodName: string): JQuery;
    button(options: ButtonOptions): JQuery;
    button(optionLiteral: string, optionName: string): any;
    button(optionLiteral: string, options: ButtonOptions): any;
    button(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    buttonset(): JQuery;
    buttonset(methodName: string): JQuery;
    buttonset(options: ButtonOptions): JQuery;
    buttonset(optionLiteral: string, optionName: string): any;
    buttonset(optionLiteral: string, options: ButtonOptions): any;
    buttonset(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    datepicker(): JQuery;
    datepicker(methodName: string): JQuery;
    datepicker(options: DatepickerOptions): JQuery;
    datepicker(optionLiteral: string, optionName: string): any;
    datepicker(optionLiteral: string, options: DatepickerOptions): any;
    datepicker(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    dialog(): JQuery;
    dialog(methodName: string): JQuery;
    dialog(options: DialogOptions): JQuery;
    dialog(optionLiteral: string, optionName: string): any;
    dialog(optionLiteral: string, options: DialogOptions): any;
    dialog(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    draggable(): JQuery;
    draggable(methodName: string): JQuery;
    draggable(options: DraggableOptions): JQuery;
    draggable(optionLiteral: string, optionName: string): any;
    draggable(optionLiteral: string, options: DraggableOptions): any;
    draggable(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    droppable(): JQuery;
    droppable(methodName: string): JQuery;
    droppable(options: DroppableOptions): JQuery;
    droppable(optionLiteral: string, optionName: string): any;
    droppable(optionLiteral: string, options: DraggableOptions): any;
    droppable(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    menu(): JQuery;
    menu(methodName: string): JQuery;
    menu(options: MenuOptions): JQuery;
    menu(optionLiteral: string, optionName: string): any;
    menu(optionLiteral: string, options: MenuOptions): any;
    menu(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    progressbar(): JQuery;
    progressbar(methodName: string): JQuery;
    progressbar(options: ProgressbarOptions): JQuery;
    progressbar(optionLiteral: string, optionName: string): any;
    progressbar(optionLiteral: string, options: ProgressbarOptions): any;
    progressbar(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    resizable(): JQuery;
    resizable(methodName: string): JQuery;
    resizable(options: ResizableOptions): JQuery;
    resizable(optionLiteral: string, optionName: string): any;
    resizable(optionLiteral: string, options: ResizableOptions): any;
    resizable(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    selectable(): JQuery;
    selectable(methodName: string): JQuery;
    selectable(options: SelectableOptions): JQuery;
    selectable(optionLiteral: string, optionName: string): any;
    selectable(optionLiteral: string, options: SelectableOptions): any;
    selectable(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    slider(): JQuery;
    slider(methodName: string): JQuery;
    slider(options: SliderOptions): JQuery;
    slider(optionLiteral: string, optionName: string): any;
    slider(optionLiteral: string, options: SliderOptions): any;
    slider(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    sortable(): JQuery;
    sortable(methodName: string): JQuery;
    sortable(options: SortableOptions): JQuery;
    sortable(optionLiteral: string, optionName: string): any;
    sortable(optionLiteral: string, options: SortableOptions): any;
    sortable(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    spinner(): JQuery;
    spinner(methodName: string): JQuery;
    spinner(options: SpinnerOptions): JQuery;
    spinner(optionLiteral: string, optionName: string): any;
    spinner(optionLiteral: string, options: SpinnerOptions): any;
    spinner(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    tabs(): JQuery;
    tabs(methodName: string): JQuery;
    tabs(options: TabsOptions): JQuery;
    tabs(optionLiteral: string, optionName: string): any;
    tabs(optionLiteral: string, options: TabsOptions): any;
    tabs(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    tooltip(): JQuery;
    tooltip(methodName: string): JQuery;
    tooltip(options: TooltipOptions): JQuery;
    tooltip(optionLiteral: string, optionName: string): any;
    tooltip(optionLiteral: string, options: TooltipOptions): any;
    tooltip(optionLiteral: string, optionName: string, optionValue: any): JQuery;


    addClass(classNames: string, speed?: number, callback?: Function): JQuery;
    addClass(classNames: string, speed?: string, callback?: Function): JQuery;
    addClass(classNames: string, speed?: number, easing?: string, callback?: Function): JQuery;
    addClass(classNames: string, speed?: string, easing?: string, callback?: Function): JQuery;

    removeClass(classNames: string, speed?: number, callback?: Function): JQuery;
    removeClass(classNames: string, speed?: string, callback?: Function): JQuery;
    removeClass(classNames: string, speed?: number, easing?: string, callback?: Function): JQuery;
    removeClass(classNames: string, speed?: string, easing?: string, callback?: Function): JQuery;

    switchClass(removeClassName: string, addClassName: string, duration?: number, easing?: string, complete?: Function): JQuery;
    switchClass(removeClassName: string, addClassName: string, duration?: string, easing?: string, complete?: Function): JQuery;

    toggleClass(className: string, duration?: number, easing?: string, complete?: Function): JQuery;
    toggleClass(className: string, duration?: string, easing?: string, complete?: Function): JQuery;
    toggleClass(className: string, aswitch?: bool, duration?: number, easing?: string, complete?: Function): JQuery;
    toggleClass(className: string, aswitch?: bool, duration?: string, easing?: string, complete?: Function): JQuery;

    effect(options: any): JQuery;
    effect(effect: string, options?: any, duration?: number, complete?: Function): JQuery;
    effect(effect: string, options?: any, duration?: string, complete?: Function): JQuery;

    hide(options: any): JQuery;
    hide(effect: string, options?: any, duration?: number, complete?: Function): JQuery;
    hide(effect: string, options?: any, duration?: string, complete?: Function): JQuery;

    show(options: any): JQuery;
    show(effect: string, options?: any, duration?: number, complete?: Function): JQuery;
    show(effect: string, options?: any, duration?: string, complete?: Function): JQuery;

    toggle(options: any): JQuery;
    toggle(effect: string, options?: any, duration?: number, complete?: Function): JQuery;
    toggle(effect: string, options?: any, duration?: string, complete?: Function): JQuery;

    position(options: JQueryPositionOptions): JQuery;

    enableSelection(): JQuery;
    disableSelection(): JQuery;
    focus(delay: number, callback?: Function): JQuery;
    uniqueId(): JQuery;
    removeUniqueId(): JQuery;
    scrollParent(): JQuery;
    zIndex(): JQuery;
    zIndex(zIndex: number): JQuery;

    widget: Widget;

    jQuery: JQueryStatic;
}

interface JQueryStatic {
    ui: UI;
    datepicker: Datepicker;
    widget: Widget;
    Widget: Widget;
}