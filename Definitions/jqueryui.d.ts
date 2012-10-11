/// <reference path="jquery.d.ts"/>

// Partial typing for the jQueryUI library, version 1.8.x

interface DraggableEventUIParam {
    helper: JQuery;
    position: { top: number; left: number;};
    offset: { top: number; left: number;};
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
    drag?:  DraggableEvent;
    stop?:  DraggableEvent;
}

interface DroppableEventUIParam {
    draggable: JQuery;
    helper: JQuery;
    position: { top: number; left: number;};
    offset: { top: number; left: number;};
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
