// Type definitions for @fullcalendar/vue 4.4
// Project: https://github.com/fullcalendar/fullcalendar-vue#readme
// Definitions by: Nader Al-Shamma <https://github.com/nadershamma>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Vue, { VueConstructor } from 'vue';

export as namespace FullCalendarComponent;

interface PropsDef {
    header: object;
    footer: object;
    customButtons: object;
    buttonIcons: object;
    themeSystem: object;
    bootstrapFontAwesome: object;
    firstDay: object;
    dir: object;
    weekends: object;
    hiddenDays: object;
    fixedWeekCount: object;
    weekNumbers: object;
    weekNumbersWithinDays: object;
    weekNumberCalculation: object;
    businessHours: object;
    showNonCurrentDates: object;
    height: object;
    contentHeight: object;
    aspectRatio: object;
    handleWindowResize: object;
    windowResizeDelay: object;
    eventLimit: object;
    eventLimitClick: object;
    timeZone: object;
    now: object;
    defaultView: object;
    allDaySlot: object;
    allDayText: object;
    slotDuration: object;
    slotLabelFormat: object;
    slotLabelInterval: object;
    snapDuration: object;
    scrollTime: object;
    minTime: object;
    maxTime: object;
    slotEventOverlap: object;
    listDayFormat: object;
    listDayAltFormat: object;
    noEventsMessage: object;
    defaultDate: object;
    nowIndicator: object;
    visibleRange: object;
    validRange: object;
    dateIncrement: object;
    dateAlignment: object;
    duration: object;
    dayCount: object;
    locales: object;
    locale: object;
    eventTimeFormat: object;
    columnHeader: object;
    columnHeaderFormat: object;
    columnHeaderText: object;
    columnHeaderHtml: object;
    titleFormat: object;
    weekLabel: object;
    displayEventTime: object;
    displayEventEnd: object;
    eventLimitText: object;
    dayPopoverFormat: object;
    navLinks: object;
    navLinkDayClick: object;
    navLinkWeekClick: object;
    selectable: object;
    selectMirror: object;
    unselectAuto: object;
    unselectCancel: object;
    defaultAllDayEventDuration: object;
    defaultTimedEventDuration: object;
    cmdFormatter: object;
    defaultRangeSeparator: object;
    selectConstraint: object;
    selectOverlap: object;
    selectAllow: object;
    editable: object;
    eventStartEditable: object;
    eventDurationEditable: object;
    eventConstraint: object;
    eventOverlap: object;
    eventAllow: object;
    eventClassName: object;
    eventClassNames: object;
    eventBackgroundColor: object;
    eventBorderColor: object;
    eventTextColor: object;
    eventColor: object;
    events: object;
    eventSources: object;
    allDayDefault: object;
    startParam: object;
    endParam: object;
    lazyFetching: object;
    nextDayThreshold: object;
    eventOrder: object;
    rerenderDelay: object;
    dragRevertDuration: object;
    dragScroll: object;
    longPressDelay: object;
    eventLongPressDelay: object;
    droppable: object;
    dropAccept: object;
    eventDataTransform: object;
    allDayMaintainDuration: object;
    eventResizableFromStart: object;
    timeGridEventMinHeight: object;
    allDayHtml: object;
    eventDragMinDistance: object;
    eventResourceEditable: object;
    eventSourceFailure: object;
    eventSourceSuccess: object;
    forceEventDuration: object;
    progressiveEventRendering: object;
    selectLongPressDelay: object;
    selectMinDistance: object;
    timeZoneParam: object;
    titleRangeSeparator: object;
    // compound OptionsInput...
    buttonText: object;
    views: object;
    plugins: object;
    // scheduler...
    schedulerLicenseKey: object;
    resources: object;
    resourceLabelText: object;
    resourceOrder: object;
    filterResourcesWithEvents: object;
    resourceText: object;
    resourceGroupField: object;
    resourceGroupText: object;
    resourceAreaWidth: object;
    resourceColumns: object;
    resourcesInitiallyExpanded: object;
    slotWidth: object;
    datesAboveResources: object;
    googleCalendarApiKey: object;
    refetchResourcesOnNavigate: object;
    // used to be emissions but are now props...
    datesRender: object;
    datesDestroy: object;
    dayRender: object;
    eventRender: object;
    eventDestroy: object;
    viewSkeletonRender: object;
    viewSkeletonDestroy: object;
    resourceRender: object;
}

interface PropIsDeep {
    header: boolean;
    footer: boolean;
    events: boolean;
    eventSources: boolean;
    resources: boolean;
}

interface EmissionUseProp {
    datesRender: boolean;
    datesDestroy: boolean;
    dayRender: boolean;
    eventRender: boolean;
    eventDestroy: boolean;
    viewSkeletonRender: boolean;
    viewSkeletonDestroy: boolean;
    resourceRender: boolean;
}

interface CalendarComponent extends Vue {
    buildCalendarOptions: () => void;
    recordDirtyOption: (optionName: any, newVal: any) => void;
    renderDirty: () => void;
    getApi: () => any;
}

export type FullCalendarComponent = CalendarComponent;
export const PROP_DEFS: PropsDef;
export const PROP_IS_DEEP: PropIsDeep;
export const EMISSION_NAMES: string[];
export const EMISSION_USE_PROP: EmissionUseProp;

export function intall(Vue: () => Vue): void;

export const FullCalendar: VueConstructor;
export default FullCalendar;
