// Type definitions for react-big-scheduler 0.2
// Project: https://github.com/StephenChou1017/react-big-scheduler
// Definitions by: Trent Jones <https://github.com/FizzBuzz791>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import * as moment from 'moment';

export default class Scheduler extends React.Component<SchedulerProps, any> {}

export interface SchedulerProps {
    schedulerData: SchedulerData;
    prevClick(schedulerData: SchedulerData): void;
    nextClick(schedulerData: SchedulerData): void;
    onSelectDate(schedulerData: SchedulerData, date: string): void;
    onViewChange(schedulerData: SchedulerData, view: View): void;
    eventItemClick?(schedulerData: SchedulerData, event: Event): void;
    eventItemTemplateResolver?(
        schedulerData: SchedulerData,
        event: Event,
        bgColor: string,
        isStart: boolean,
        isEnd: boolean,
        mustAddCssClass: string,
        mustBeHeight: number,
        agendaMaxEventWidth: number,
    ): void;
    eventItemPopoverTemplateResolver?(
        schedulerData: SchedulerData,
        eventItem: Event,
        title: string,
        start: moment.Moment,
        end: moment.Moment,
        statusColor: string,
    ): void;
}

export class SchedulerData {
    localeMoment(date: string): moment.Moment;
    cellUnit: CellUnits;
    viewType: ViewTypes;
    startDate: string;

    constructor(
        date?: string,
        viewType?: ViewTypes,
        showAgenda?: boolean,
        isEventPerspective?: boolean,
        newConfig?: SchedulerDataConfig,
        newBehaviours?: object,
        localeMoment?: typeof moment,
    );

    setResources(resources: Resource[]): void;
    setEvents(events: Event[]): void;
    prev(): void;
    next(): void;
    setViewType(viewType?: ViewTypes, showAgenda?: boolean, isEventPerspective?: boolean): void;
    setDate(date?: string): void;
}

export enum CellUnits {
    Day,
    Hour,
}

export enum ViewTypes {
    Day,
    Week,
    Month,
    Quarter,
    Year,
    Custom,
    Custom1,
    Custom2,
}

export interface View {
    viewName?: string | undefined;
    viewType: ViewTypes;
    showAgenda: boolean;
    isEventPerspective: boolean;
}

export interface Event {
    id: number;
    start: string;
    end: string;
    resourceId: string;
    title: string;
    bgColor?: string | undefined;
    rrule?: string | undefined;
}

export interface Resource {
    id: string;
    name: string;
}

export interface SchedulerDataConfig {
    schedulerWidth?: number | string | undefined;
    schedulerMaxHeight?: number | undefined;
    tableHeaderHeight?: number | undefined;
    agendaResourceTableWidth?: number | undefined;
    agendaMaxEventWidth?: number | undefined;
    dayResourceTableWidth?: number | undefined;
    weekResourceTableWidth?: number | undefined;
    monthResourceTableWidth?: number | undefined;
    yearResourceTableWidth?: number | undefined;
    quarterResourceTableWidth?: number | undefined;
    dayCellWidth?: number | undefined;
    weekCellWidth?: number | undefined;
    monthCellWidth?: number | undefined;
    yearCellWidth?: number | undefined;
    quarterCellWidth?: number | undefined;
    dayMaxEvents?: number | undefined;
    weekMaxEvents?: number | undefined;
    monthMaxEvents?: number | undefined;
    yearMaxEvents?: number | undefined;
    quarterMaxEvents?: number | undefined;
    eventItemHeight?: number | undefined;
    eventItemLineHeight?: number | undefined;
    nonAgendaSlotMinHeight?: number | undefined;
    dayStartFrom?: number | undefined;
    dayStopTo?: number | undefined;
    defaultEventBgColor?: string | undefined;
    selectedAreaColor?: string | undefined;
    nonWorkingTimeHeadColor?: string | undefined;
    nonWorkingTimeHeadBgColor?: string | undefined;
    nonWorkingTimeBodyBgColor?: string | undefined;
    summaryColor?: string | undefined;
    summaryPos?: SummaryPos | undefined;
    startResizable?: boolean | undefined;
    endResizable?: boolean | undefined;
    movable?: boolean | undefined;
    creatable?: boolean | undefined;
    crossResourceMove?: boolean | undefined;
    checkConflict?: boolean | undefined;
    scrollToSpecialMomentEnabled?: boolean | undefined;
    eventItemPopoverEnabled?: boolean | undefined;
    calendarPopoverEnabled?: boolean | undefined;
    recurringEventsEnabled?: boolean | undefined;
    headerEnabled?: boolean | undefined;
    displayWeekend?: boolean | undefined;
    relativeMove?: boolean | undefined;
    minuteStep?: number | undefined;
    views?: View[] | undefined;
    resourceName?: string | undefined;
}

export enum SummaryPos {
    Top,
    TopRight,
    TopLeft,
    Bottom,
    BottomRight,
    BottomLeft,
}

export interface SchedulerDataBehaviors {
    isNonWorkingTimeFunc?(schedulerData: SchedulerData, time: string): boolean;
    getCustomDateFunc?(
        schedulerData: SchedulerData,
        num: number,
        date?: string,
    ): { startDate: string; endDate: string; cellUnit: CellUnits };
}
