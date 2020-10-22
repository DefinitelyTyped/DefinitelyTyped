// Type definitions for react-big-scheduler 0.2
// Project: https://github.com/StephenChou1017/react-big-scheduler
// Definitions by: Trent Jones <https://github.com/FizzBuzz791>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import * as moment from "moment";

export class Scheduler extends React.Component<SchedulerProps, any> { }

export interface SchedulerProps {
    schedulerData: SchedulerData;
    prevClick(schedulerData: SchedulerData): void;
    nextClick(schedulerData: SchedulerData): void;
    onSelectDate(schedulerData: SchedulerData, date: string): void;
    onViewChange(schedulerData: SchedulerData, view: View): void;
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
        localeMoment?: typeof moment
    );

    setResources(resources: Resource[]): void;
    setEvents(events: Event[]): void;
    prev(): void;
    next(): void;
    setViewType(
        viewType?: ViewTypes,
        showAgenda?: boolean,
        isEventPerspective?: boolean
    ): void;
    setDate(date?: string): void;
}

export enum CellUnits {
    Day,
    Hour
}

export enum ViewTypes {
    Day,
    Week,
    Month,
    Quarter,
    Year,
    Custom,
    Custom1,
    Custom2
}

export interface View {
    viewName?: string;
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
    bgColor?: string;
    rrule?: string;
}

export interface Resource {
    id: string;
    name: string;
}

export interface SchedulerDataConfig {
    schedulerWidth?: number | string;
    schedulerMaxHeight?: number;
    tableHeaderHeight?: number;
    agendaResourceTableWidth?: number;
    agendaMaxEventWidth?: number;
    dayResourceTableWidth?: number;
    weekResourceTableWidth?: number;
    monthResourceTableWidth?: number;
    yearResourceTableWidth?: number;
    quarterResourceTableWidth?: number;
    dayCellWidth?: number;
    weekCellWidth?: number;
    monthCellWidth?: number;
    yearCellWidth?: number;
    quarterCellWidth?: number;
    dayMaxEvents?: number;
    weekMaxEvents?: number;
    monthMaxEvents?: number;
    yearMaxEvents?: number;
    quarterMaxEvents?: number;
    eventItemHeight?: number;
    eventItemLineHeight?: number;
    nonAgendaSlotMinHeight?: number;
    dayStartFrom?: number;
    dayStopTo?: number;
    defaultEventBgColor?: string;
    selectedAreaColor?: string;
    nonWorkingTimeHeadColor?: string;
    nonWorkingTimeHeadBgColor?: string;
    nonWorkingTimeBodyBgColor?: string;
    summaryColor?: string;
    summaryPos?: SummaryPos;
    startResizable?: boolean;
    endResizable?: boolean;
    movable?: boolean;
    creatable?: boolean;
    crossResourceMove?: boolean;
    checkConflict?: boolean;
    scrollToSpecialMomentEnabled?: boolean;
    eventItemPopoverEnabled?: boolean;
    calendarPopoverEnabled?: boolean;
    recurringEventsEnabled?: boolean;
    headerEnabled?: boolean;
    displayWeekend?: boolean;
    relativeMove?: boolean;
    minuteStep?: number;
    views?: View[];
    resourceName?: string;
}

export enum SummaryPos {
    Top,
    TopRight,
    TopLeft,
    Bottom,
    BottomRight,
    BottomLeft
}

export interface SchedulerDataBehaviors {
    isNonWorkingTimeFunc?(schedulerData: SchedulerData, time: string): boolean;
    getCustomDateFunc?(
        schedulerData: SchedulerData,
        num: number,
        date?: string
    ): { startDate: string; endDate: string; cellUnit: CellUnits };
}
