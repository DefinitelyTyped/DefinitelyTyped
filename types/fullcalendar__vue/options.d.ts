export type direction = 'ltr' | 'rtl';
export type LocaleCodeArg = string | string[];
export type LocaleSingularArg = LocaleCodeArg | RawLocale;
export type DurationInput = DurationObjectInput | string | number;
export type DateInput = Date | string | number | number[];
export type FuncFormatterFunc = (arg: any) => string;
export type FormatterInput = object | string | FuncFormatterFunc;
export type OverlapFunc = (stillEvent: any, movingEvent: any) => boolean;
export type AllowFunc = (span: any, movingEvent: any) => boolean;

export interface DurationObjectInput {
    years?: number;
    year?: number;
    months?: number;
    month?: number;
    weeks?: number;
    week?: number;
    days?: number;
    day?: number;
    hours?: number;
    hour?: number;
    minutes?: number;
    minute?: number;
    seconds?: number;
    second?: number;
    milliseconds?: number;
    millisecond?: number;
    ms?: number;
}

export interface DateRangeInput {
    start?: DateInput;
    end?: DateInput;
}

export interface ToolbarInput {
    left: string;
    center: string;
    right: string;
}

export interface CustomButton {
    text?: string;
    click?: () => any;
    icon?: any;
    bootstrapFontAwesome?: any;
}

export interface CustomButtons {
    [key: string]: CustomButton;
}

export interface ButtonIcons {
    prev?: string;
    next?: string;
    prevYear?: string;
    nextYear?: string;
}

export interface BootstrapFontAwesome {
    close?: string;
    prev?: string;
    next?: string;
    prevYear?: string;
    nextYear?: string;
}

export interface RawLocale {
    code: string;
    [otherProp: string]: any;
}

export interface CalendarProps {
    header?: ToolbarInput | boolean;
    footer?: ToolbarInput | boolean;
    customButtons?: CustomButtons;
    buttonIcons?: ButtonIcons | boolean;
    themeSystem?: string;
    bootstrapFontAwesome?: BootstrapFontAwesome | boolean;
    firstDay?: number;
    dir?: direction;
    weekends?: boolean;
    hiddenDays?: number[];
    fixedWeekCount?: boolean;
    weekNumbers?: boolean;
    weekNumbersWithinDays?: boolean;
    weekNumberCalculation?: 'local' | 'ISO' | ((m: Date) => number);
    businessHours?: any;
    showNonCurrentDates?: boolean;
    height?: number | 'auto' | 'parent' | (() => number);
    contentHeight?: number | 'auto' | (() => number);
    aspectRatio?: number;
    handleWindowResize?: boolean;
    windowResizeDelay?: number;
    eventLimit?: boolean | number;
    eventLimitClick?:
        | 'popover'
        | 'week'
        | 'day'
        | 'timeGridWeek'
        | 'timeGridDay'
        | string
        | ((arg: {
              date: Date;
              allDay: boolean;
              dayEl: HTMLElement;
              moreEl: HTMLElement;
              segs: any[];
              hiddenSegs: any[];
              jsEvent: MouseEvent;
              view: any;
          }) => void);
    timeZone?: string | boolean;
    now?: DateInput | (() => DateInput);
    defaultView?: string;
    allDaySlot?: boolean;
    allDayText?: string;
    slotDuration?: DurationInput;
    slotLabelFormat?: FormatterInput;
    slotLabelInterval?: DurationInput;
    snapDuration?: DurationInput;
    scrollTime?: DurationInput;
    minTime?: DurationInput;
    maxTime?: DurationInput;
    slotEventOverlap?: boolean;
    listDayFormat?: FormatterInput | boolean;
    listDayAltFormat?: FormatterInput | boolean;
    noEventsMessage?: string;
    defaultDate?: DateInput;
    nowIndicator?: boolean;
    visibleRange?: ((currentDate: Date) => DateRangeInput) | DateRangeInput;
    validRange?: DateRangeInput;
    dateIncrement?: DurationInput;
    dateAlignment?: string;
    duration?: DurationInput;
    dayCount?: number;
    locales?: RawLocale[];
    locale?: LocaleSingularArg;
    eventTimeFormat?: FormatterInput;
    columnHeader?: boolean;
    columnHeaderFormat?: FormatterInput;
    columnHeaderText?: string | ((date: DateInput) => string);
    columnHeaderHtml?: string | ((date: DateInput) => string);
    titleFormat?: FormatterInput;
    weekLabel?: string;
    displayEventTime?: boolean;
    displayEventEnd?: boolean;
    eventLimitText?: string | ((eventCnt: number) => string);
    dayPopoverFormat?: FormatterInput;
    navLinks?: boolean;
    navLinkDayClick?: string | ((date: Date, jsEvent: Event) => void);
    navLinkWeekClick?: string | ((weekStart: any, jsEvent: Event) => void);
    selectable?: boolean;
    selectMirror?: boolean;
    unselectAuto?: boolean;
    unselectCancel?: string;
    defaultAllDayEventDuration?: DurationInput;
    defaultTimedEventDuration?: DurationInput;
    cmdFormatter?: string;
    defaultRangeSeparator?: string;
    selectConstraint?: any;
    selectOverlap?: boolean | OverlapFunc;
    selectAllow?: AllowFunc;
    editable?: boolean;
    eventStartEditable?: boolean;
    eventDurationEditable?: boolean;
    eventConstraint?: any;
    eventOverlap?: boolean | OverlapFunc;
    eventAllow?: AllowFunc;
    eventClassName?: string[] | string;
    eventClassNames?: string[] | string;
    eventBackgroundColor?: string;
    eventBorderColor?: string;
    eventTextColor?: string;
    eventColor?: string;
    events?: any;
    eventSources?: any[];
    allDayDefault?: boolean;
    startParam?: string;
    endParam?: string;
    lazyFetching?: boolean;
    nextDayThreshold?: DurationInput;
    eventOrder?: string | Array<((a: any, b: any) => number) | (string | ((a: any, b: any) => number))>;
    rerenderDelay?: number | null;
    dragRevertDuration?: number;
    dragScroll?: boolean;
    longPressDelay?: number;
    eventLongPressDelay?: number;
    droppable?: boolean;
    dropAccept?: string | ((draggable: any) => boolean);
    eventDataTransform?: any;
    allDayMaintainDuration?: boolean;
    eventResizableFromStart?: boolean;
    timeGridEventMinHeight?: number;
    allDayHtml?: string;
    eventDragMinDistance?: number;
    eventSourceFailure?: any;
    eventSourceSuccess?: any;
    forceEventDuration?: boolean;
    progressiveEventRendering?: boolean;
    selectLongPressDelay?: number;
    selectMinDistance?: number;
    timeZoneParam?: string;
    titleRangeSeparator?: string;
    // compound OptionsInput...
    buttonText?: any;
    views?: any;
    plugins?: any;
    // scheduler...
    schedulerLicenseKey?: any;
    resources?: any;
    resourceLabelText?: any;
    resourceOrder?: any;
    filterResourcesWithEvents?: any;
    resourceText?: any;
    resourceGroupField?: any;
    resourceGroupText?: any;
    resourceAreaWidth?: any;
    resourceColumns?: any;
    resourcesInitiallyExpanded?: any;
    slotWidth?: any;
    datesAboveResources?: any;
    googleCalendarApiKey?: any;
    refetchResourcesOnNavigate?: any;
    // used to be emissions but are now props...
    datesRender?: any;
    datesDestroy?: any;
    dayRender?: any;
    eventRender?: any;
    eventDestroy?: any;
    viewSkeletonRender?: any;
    viewSkeletonDestroy?: any;
    resourceRender?: any;
}
