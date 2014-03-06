// Type definitions for jQueryUI 1.9
// Project: http://jqueryui.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

declare module JQueryUI {
    // Accordion //////////////////////////////////////////////////

    interface AccordionOptions {
        active?: any; // boolean or number
        animate?: any; // boolean, number, string or object
        collapsible?: boolean;
        disabled?: boolean;
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
        autoFocus?: boolean;
        delay?: number;
        disabled?: boolean;
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
        escapeRegex: (value: string) => string;
    }


    // Button //////////////////////////////////////////////////

    interface ButtonOptions {
        disabled?: boolean;
        icons?: any;
        label?: string;
        text?: boolean;
    }

    interface Button extends Widget, ButtonOptions {
    }


    // Datepicker //////////////////////////////////////////////////

    interface DatepickerOptions {
        altFieldType?: any; // Selecotr, jQuery or Element
        altFormat?: string;
        appendText?: string;
        autoSize?: boolean;
        beforeShow?: (input: Element, inst: any) => void;
        beforeShowDay?: (date: Date) => void;
        buttonImage?: string;
        buttonImageOnly?: boolean;
        buttonText?: string;
        calculateWeek?: () => any;
        changeMonth?: boolean;
        changeYear?: boolean;
        closeText?: string;
        constrainInput?: boolean;
        currentText?: string;
        dateFormat?: string;
        dayNames?: string[];
        dayNamesMin?: string[];
        dayNamesShort?: string[];
        defaultDateType?: any; // Date, number or string
        duration?: string;
        firstDay?: number;
        gotoCurrent?: boolean;
        hideIfNoPrevNext?: boolean;
        isRTL?: boolean;
        maxDate?: any; // Date, number or string
        minDate?: any; // Date, number or string
        monthNames?: string[];
        monthNamesShort?: string[];
        navigationAsDateFormat?: boolean;
        nextText?: string;
        numberOfMonths?: any; // number or []
        onChangeMonthYear?: (year: number, month: number, inst: any) => void;
        onClose?: (dateText: string, inst: any) => void;
        onSelect?: (dateText: string, inst: any) => void;
        prevText?: string;
        selectOtherMonths?: boolean;
        shortYearCutoff?: any; // number or string
        showAnim?: string;
        showButtonPanel?: boolean;
        showCurrentAtPos?: number;
        showMonthAfterYear?: boolean;
        showOn?: string;
        showOptions?: any; // TODO
        showOtherMonths?: boolean;
        showWeek?: boolean;
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
        setDefaults(defaults: DatepickerOptions): void;
        formatDate(format: string, date: Date, settings?: DatepickerFormatDateOptions): string;
        parseDate(format: string, date: string, settings?: DatepickerFormatDateOptions): Date;
        iso8601Week(date: Date): number;
        noWeekends(): void;
    }


    // Dialog //////////////////////////////////////////////////

    interface DialogOptions {
        autoOpen?: boolean;
        buttons?: any; // object or []
        closeOnEscape?: boolean;
        closeText?: string;
        dialogClass?: string;
        disabled?: boolean;
        draggable?: boolean;
        height?: any; // number or string
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        modal?: boolean;
        position?: any; // object, string or []
        resizable?: boolean;
        show?: any; // number, string or object
        stack?: boolean;
        title?: string;
        width?: any; // number or string
        zIndex?: number;

        close?: DialogEvent;
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
        disabled?: boolean;
        addClasses?: boolean;
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
        refreshPositions?: boolean;
        revert?: any;
        revertDuration?: number;
        scope?: string;
        scroll?: boolean;
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
        disabled?: boolean;
        accept?: any;
        activeClass?: string;
        greedy?: boolean;
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
        disabled?: boolean;
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
        disabled?: boolean;
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
        animate?: boolean;
        animateDuration?: any; // number or string
        animateEasing?: string;
        aspectRatio?: any; // boolean or number
        autoHide?: boolean;
        cancel?: string;
        containment?: any; // Selector, Element or string
        delay?: number;
        disabled?: boolean;
        distance?: number;
        ghost?: boolean;
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
        autoRefresh?: boolean;
        cancel?: string;
        delay?: number;
        disabled?: boolean;
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
        animate?: any; // boolean, string or number
        disabled?: boolean;
        max?: number;
        min?: number;
        orientation?: string;
        range?: any; // boolean or string
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
        cancel?: any; // Selector
        connectWith?: any; // Selector
        containment?: any; // Element, Selector or string
        cursor?: string;
        cursorAt?: any;
        delay?: number;
        disabled?: boolean;
        distance?: number;
        dropOnEmpty?: boolean;
        forceHelperSize?: boolean;
        forcePlaceholderSize?: boolean;
        grid?: number[];
        handle?: any; // Selector or Element
        items?: any; // Selector
        opacity?: number;
        placeholder?: string;
        revert?: any; // boolean or number
        scroll?: boolean;
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
        (event: JQueryEventObject, ui: SortableUIParams): void;
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
        disabled?: boolean;
        icons?: any;
        incremental?: any; // boolean or ()
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
        active?: any; // boolean or number
        collapsible?: boolean;
        disabled?: any; // boolean or []
        event?: string;
        heightStyle?: string;
        hide?: any; // boolean, number, string or object
        show?: any; // boolean, number, string or object

        activate?: TabsEvent;
    }

    interface TabsUIParams {
        newTab: JQuery;
        oldTab: JQuery;
        newPanel: JQuery;
        oldPanel: JQuery;
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
        disabled?: boolean;
        hide?: any; // boolean, number, string or object
        items?: string;
        position?: any; // TODO
        show?: any; // boolean, number, string or object
        tooltipClass?: string;
        track?: boolean;
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
        horizFirst?: boolean;
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

    interface KeyCode {
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
        keyCode: KeyCode;
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
        disabled?: boolean;
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

}

interface JQuery {

    accordion(): JQuery;
    accordion(methodName: 'destroy'): void;
    accordion(methodName: 'disable'): void;
    accordion(methodName: 'enable'): void;
    accordion(methodName: 'refresh'): void;
    accordion(methodName: 'widget'): JQuery;
    accordion(methodName: string): JQuery;
    accordion(options: JQueryUI.AccordionOptions): JQuery;
    accordion(optionLiteral: string, optionName: string): any;
    accordion(optionLiteral: string, options: JQueryUI.AccordionOptions): any;
    accordion(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    autocomplete(): JQuery;
    autocomplete(methodName: 'close'): void;
    autocomplete(methodName: 'destroy'): void;
    autocomplete(methodName: 'disable'): void;
    autocomplete(methodName: 'enable'): void;
    autocomplete(methodName: 'search', value?: string): void;
    autocomplete(methodName: 'widget'): JQuery;
    autocomplete(methodName: string): JQuery;
    autocomplete(options: JQueryUI.AutocompleteOptions): JQuery;
    autocomplete(optionLiteral: string, optionName: string): any;
    autocomplete(optionLiteral: string, options: JQueryUI.AutocompleteOptions): any;
    autocomplete(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    button(): JQuery;
    button(methodName: 'destroy'): void;
    button(methodName: 'disable'): void;
    button(methodName: 'enable'): void;
    button(methodName: 'refresh'): void;
    button(methodName: 'widget'): JQuery;
    button(methodName: string): JQuery;
    button(options: JQueryUI.ButtonOptions): JQuery;
    button(optionLiteral: string, optionName: string): any;
    button(optionLiteral: string, options: JQueryUI.ButtonOptions): any;
    button(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    buttonset(): JQuery;
    buttonset(methodName: 'destroy'): void;
    buttonset(methodName: 'disable'): void;
    buttonset(methodName: 'enable'): void;
    buttonset(methodName: 'refresh'): void;
    buttonset(methodName: 'widget'): JQuery;
    buttonset(methodName: string): JQuery;
    buttonset(options: JQueryUI.ButtonOptions): JQuery;
    buttonset(optionLiteral: string, optionName: string): any;
    buttonset(optionLiteral: string, options: JQueryUI.ButtonOptions): any;
    buttonset(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    datepicker(): JQuery;
    datepicker(methodName: 'destroy'): void;
    datepicker(methodName: 'dialog', date?: Date, onSelect?: () => void , pos?: any): void;
    datepicker(methodName: 'dialog', date?: string, onSelect?: () => void , pos?: any): void;
    datepicker(methodName: 'getDate'): Date;
    datepicker(methodName: 'hide'): void;
    datepicker(methodName: 'isDisabled'): boolean;
    datepicker(methodName: 'refresh'): void;
    datepicker(methodName: 'setDate', date: Date): void;
    datepicker(methodName: 'setDate', date: string): void;
    datepicker(methodName: 'show'): void;
    datepicker(methodName: 'widget'): JQuery;
    datepicker(methodName: string): JQuery;
    datepicker(options: JQueryUI.DatepickerOptions): JQuery;
    datepicker(optionLiteral: string, optionName: string): any;
    datepicker(optionLiteral: string, options: JQueryUI.DatepickerOptions): any;
    datepicker(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    dialog(): JQuery;
    dialog(methodName: 'close'): JQuery;
    dialog(methodName: 'destroy'): JQuery;
    dialog(methodName: 'isOpen'): boolean;
    dialog(methodName: 'moveToTop'): JQuery;
    dialog(methodName: 'open'): JQuery;
    dialog(methodName: 'widget'): JQuery;
    dialog(methodName: string): JQuery;
    dialog(options: JQueryUI.DialogOptions): JQuery;
    dialog(optionLiteral: string, optionName: string): any;
    dialog(optionLiteral: string, options: JQueryUI.DialogOptions): any;
    dialog(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    draggable(): JQuery;
    draggable(methodName: 'destroy'): void;
    draggable(methodName: 'disable'): void;
    draggable(methodName: 'enable'): void;
    draggable(methodName: 'widget'): JQuery;
    draggable(methodName: string): JQuery;
    draggable(options: JQueryUI.DraggableOptions): JQuery;
    draggable(optionLiteral: string, optionName: string): any;
    draggable(optionLiteral: string, options: JQueryUI.DraggableOptions): any;
    draggable(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    droppable(): JQuery;
    droppable(methodName: 'destroy'): void;
    droppable(methodName: 'disable'): void;
    droppable(methodName: 'enable'): void;
    droppable(methodName: 'widget'): JQuery;
    droppable(methodName: string): JQuery;
    droppable(options: JQueryUI.DroppableOptions): JQuery;
    droppable(optionLiteral: string, optionName: string): any;
    droppable(optionLiteral: string, options: JQueryUI.DraggableOptions): any;
    droppable(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    menu(): JQuery;
    menu(methodName: 'blur'): void;
    menu(methodName: 'collapse', event?: JQueryEventObject): void;
    menu(methodName: 'collapseAll', event?: JQueryEventObject, all?: boolean): void;
    menu(methodName: 'destroy'): void;
    menu(methodName: 'disable'): void;
    menu(methodName: 'enable'): void;
    menu(methodName: string, event: JQueryEventObject, item: JQuery): void;
    menu(methodName: 'focus', event: JQueryEventObject, item: JQuery): void;
    menu(methodName: 'isFirstItem'): boolean;
    menu(methodName: 'isLastItem'): boolean;
    menu(methodName: 'next', event?: JQueryEventObject): void;
    menu(methodName: 'nextPage', event?: JQueryEventObject): void;
    menu(methodName: 'previous', event?: JQueryEventObject): void;
    menu(methodName: 'previousPage', event?: JQueryEventObject): void;
    menu(methodName: 'refresh'): void;
    menu(methodName: 'select', event?: JQueryEventObject): void;
    menu(methodName: 'widget'): JQuery;
    menu(methodName: string): JQuery;
    menu(options: JQueryUI.MenuOptions): JQuery;
    menu(optionLiteral: string, optionName: string): any;
    menu(optionLiteral: string, options: JQueryUI.MenuOptions): any;
    menu(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    progressbar(): JQuery;
    progressbar(methodName: 'destroy'): void;
    progressbar(methodName: 'disable'): void;
    progressbar(methodName: 'enable'): void;
    progressbar(methodName: 'refresh'): void;
    progressbar(methodName: 'value'): any; // number or boolean
    progressbar(methodName: 'value', value: number): void;
    progressbar(methodName: 'value', value: boolean): void;
    progressbar(methodName: 'widget'): JQuery;
    progressbar(methodName: string): JQuery;
    progressbar(options: JQueryUI.ProgressbarOptions): JQuery;
    progressbar(optionLiteral: string, optionName: string): any;
    progressbar(optionLiteral: string, options: JQueryUI.ProgressbarOptions): any;
    progressbar(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    resizable(): JQuery;
    resizable(methodName: 'destroy'): void;
    resizable(methodName: 'disable'): void;
    resizable(methodName: 'enable'): void;
    resizable(methodName: 'widget'): JQuery;
    resizable(methodName: string): JQuery;
    resizable(options: JQueryUI.ResizableOptions): JQuery;
    resizable(optionLiteral: string, optionName: string): any;
    resizable(optionLiteral: string, options: JQueryUI.ResizableOptions): any;
    resizable(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    selectable(): JQuery;
    selectable(methodName: 'destroy'): void;
    selectable(methodName: 'disable'): void;
    selectable(methodName: 'enable'): void;
    selectable(methodName: 'widget'): JQuery;
    selectable(methodName: string): JQuery;
    selectable(options: JQueryUI.SelectableOptions): JQuery;
    selectable(optionLiteral: string, optionName: string): any;
    selectable(optionLiteral: string, options: JQueryUI.SelectableOptions): any;
    selectable(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    slider(): JQuery;
    slider(methodName: 'destroy'): void;
    slider(methodName: 'disable'): void;
    slider(methodName: 'enable'): void;
    slider(methodName: 'refresh'): void;
    slider(methodName: 'value'): number;
    slider(methodName: 'value', value: number): void;
    slider(methodName: 'values'): Array<number>;
    slider(methodName: 'values', index: number): number;
    slider(methodName: string, index: number, value: number): void;
    slider(methodName: 'values', index: number, value: number): void;
    slider(methodName: string, values: Array<number>): void;
    slider(methodName: 'values', values: Array<number>): void;
    slider(methodName: 'widget'): JQuery;
    slider(methodName: string): JQuery;
    slider(options: JQueryUI.SliderOptions): JQuery;
    slider(optionLiteral: string, optionName: string): any;
    slider(optionLiteral: string, options: JQueryUI.SliderOptions): any;
    slider(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    sortable(): JQuery;
    sortable(methodName: 'destroy'): void;
    sortable(methodName: 'disable'): void;
    sortable(methodName: 'enable'): void;
    sortable(methodName: 'widget'): JQuery;
    sortable(methodName: 'toArray'): string[];
    sortable(methodName: string): JQuery;
    sortable(options: JQueryUI.SortableOptions): JQuery;
    sortable(optionLiteral: string, optionName: string): any;
    sortable(optionLiteral: string, options: JQueryUI.SortableOptions): any;
    sortable(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    spinner(): JQuery;
    spinner(methodName: 'destroy'): void;
    spinner(methodName: 'disable'): void;
    spinner(methodName: 'enable'): void;
    spinner(methodName: 'pageDown', pages?: number): void;
    spinner(methodName: 'pageUp', pages?: number): void;
    spinner(methodName: 'stepDown', steps?: number): void;
    spinner(methodName: 'stepUp', steps?: number): void;
    spinner(methodName: 'value'): number;
    spinner(methodName: 'value', value: number): void;
    spinner(methodName: 'widget'): JQuery;
    spinner(methodName: string): JQuery;
    spinner(options: JQueryUI.SpinnerOptions): JQuery;
    spinner(optionLiteral: string, optionName: string): any;
    spinner(optionLiteral: string, options: JQueryUI.SpinnerOptions): any;
    spinner(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    tabs(): JQuery;
    tabs(methodName: 'destroy'): void;
    tabs(methodName: 'disable'): void;
    tabs(methodName: 'enable'): void;
    tabs(methodName: 'load', index: number): void;
    tabs(methodName: 'refresh'): void;
    tabs(methodName: 'widget'): JQuery;
    tabs(methodName: string): JQuery;
    tabs(options: JQueryUI.TabsOptions): JQuery;
    tabs(optionLiteral: string, optionName: string): any;
    tabs(optionLiteral: string, options: JQueryUI.TabsOptions): any;
    tabs(optionLiteral: string, optionName: string, optionValue: any): JQuery;

    tooltip(): JQuery;
    tooltip(methodName: 'destroy'): void;
    tooltip(methodName: 'disable'): void;
    tooltip(methodName: 'enable'): void;
    tooltip(methodName: 'open'): void;
    tooltip(methodName: 'close'): void;
    tooltip(methodName: 'widget'): JQuery;
    tooltip(methodName: string): JQuery;
    tooltip(options: JQueryUI.TooltipOptions): JQuery;
    tooltip(optionLiteral: string, optionName: string): any;
    tooltip(optionLiteral: string, options: JQueryUI.TooltipOptions): any;
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
    toggleClass(className: string, aswitch?: boolean, duration?: number, easing?: string, complete?: Function): JQuery;
    toggleClass(className: string, aswitch?: boolean, duration?: string, easing?: string, complete?: Function): JQuery;

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

    position(options: JQueryUI.JQueryPositionOptions): JQuery;

    enableSelection(): JQuery;
    disableSelection(): JQuery;
    focus(delay: number, callback?: Function): JQuery;
    uniqueId(): JQuery;
    removeUniqueId(): JQuery;
    scrollParent(): JQuery;
    zIndex(): JQuery;
    zIndex(zIndex: number): JQuery;

    widget: JQueryUI.Widget;

    jQuery: JQueryStatic;
}

interface JQueryStatic {
    ui: JQueryUI.UI;
    datepicker: JQueryUI.Datepicker;
    widget: JQueryUI.Widget;
    Widget: JQueryUI.Widget;
}
