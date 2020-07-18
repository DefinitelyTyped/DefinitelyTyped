// Type definitions for react-calendar-timeline v0.26.6
// Project: https://github.com/namespace-ee/react-calendar-timeline
// Definitions by: Rajab Shakirov <https://github.com/radziksh>
//                 Alex Maclean <https://github.com/acemac>
//                 Andrii Los <https://github.com/rip21>
//                 Jon Caruana <https://github.com/joncar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import * as React from 'react';
import { Moment } from 'moment';

declare module 'react-calendar-timeline' {
    type Id = number | string;

    export interface TimelineGroupBase {
        id: Id;
        title: React.ReactNode;
        rightTitle?: React.ReactNode;
    }

    export interface TimelineItemBase<DateType> {
        id: Id;
        group: Id;
        title?: React.ReactNode;
        start_time: DateType;
        end_time: DateType;
        canMove?: boolean;
        canResize?: boolean | 'left' | 'right' | 'both';
        canChangeGroup?: boolean;
        className?: string;
        style?: React.CSSProperties;
        itemProps?: React.HTMLAttributes<HTMLDivElement>;
    }

    export type TimelineItem<CustomItemFields, DateType = number> = TimelineItemBase<DateType> & CustomItemFields;
    export type TimelineGroup<CustomGroupFields> = TimelineGroupBase & CustomGroupFields;

    export interface TimelineContext {
        timelineWidth: number;
        visibleTimeStart: number;
        visibleTimeEnd: number;
        canvasTimeStart: number;
        canvasTimeEnd: number;
    }

    export interface ItemContext {
        dimensions: {
            collisionLeft: number;
            collisionWidth: number;
            height: number;
            isDragging: boolean;
            left: number;
            order: {
                group: {
                    id: string;
                };
                index: number;
            };
            originalLeft: number;
            stack: boolean;
            top: number | null;
            width: number;
        };
        useResizeHandle: boolean;
        title: string;
        canMove: boolean;
        canResizeLeft: boolean;
        canResizeRight: boolean;
        selected: boolean;
        dragging: boolean;
        dragStart: {
            x: number;
            y: number;
        };
        dragTime: number;
        dragGroupDelta: number;
        resizing: boolean;
        resizeEdge: 'left' | 'right';
        resizeStart: number;
        resizeTime: number;
        width: boolean;
    }

    export interface TimeFormat {
        long: string;
        mediumLong: string;
        medium: string;
        short: string;
    }

    export interface LabelFormat {
        year: TimeFormat;
        month: TimeFormat;
        week: TimeFormat;
        day: TimeFormat;
        hour: TimeFormat;
        minute: TimeFormat;
    }

    export interface ItemRendererGetItemPropsReturnType {
        key: Id;
        ref: React.Ref<any>;
        className: string;
        onMouseDown: React.MouseEventHandler;
        onMouseUp: React.MouseEventHandler;
        onTouchStart: React.TouchEventHandler;
        onTouchEnd: React.TouchEventHandler;
        onDoubleClick: React.MouseEventHandler;
        onContextMenu: React.ReactEventHandler;
        style: React.CSSProperties;
    }

    export type GetItemsProps = Partial<Omit<ItemRendererGetItemPropsReturnType, 'key' | 'ref'>>;

    export interface ItemRendererGetResizePropsReturnType {
        left?: {
            ref: React.Ref<any>;
            className: string;
            style: React.CSSProperties;
        };
        right?: {
            ref: React.Ref<any>;
            className: string;
            style: React.CSSProperties;
        };
    }

    export type GetResizeProps = {
        leftStyle?: React.CSSProperties;
        rightStyle?: React.CSSProperties;
        leftClassName?: string;
        rightClassName?: string;
    };

    export interface ReactCalendarItemRendererProps<
        CustomItem extends TimelineItemBase<any> = TimelineItemBase<number>
    > {
        item: CustomItem;
        itemContext: ItemContext;
        getItemProps: (
            props: GetItemsProps,
        ) => {
            key: Id;
            ref: React.Ref<any>;
            className: string;
            onMouseDown: React.MouseEventHandler;
            onMouseUp: React.MouseEventHandler;
            onTouchStart: React.TouchEventHandler;
            onTouchEnd: React.TouchEventHandler;
            onDoubleClick: React.MouseEventHandler;
            onContextMenu: React.ReactEventHandler;
            style: React.CSSProperties;
        };
        getResizeProps: (propsOverride?: GetResizeProps) => ItemRendererGetResizePropsReturnType;
    }

    export interface ReactCalendarGroupRendererProps<CustomGroup extends TimelineGroupBase = TimelineGroupBase> {
        group: CustomGroup;
        isRightSidebar?: boolean;
    }

    export interface OnItemDragObjectBase {
        eventType: 'move' | 'resize';
        itemId: Id;
        time: number;
    }

    export interface OnItemDragObjectMove extends OnItemDragObjectBase {
        eventType: 'move';
        newGroupOrder: number;
    }

    export interface OnItemDragObjectResize extends OnItemDragObjectBase {
        eventType: 'resize';
        edge?: 'left' | 'right';
    }

    export interface TimelineKeys {
        groupIdKey: string;
        groupTitleKey: string;
        groupRightTitleKey: string;
        itemIdKey: string;
        itemTitleKey: string;
        itemDivTitleKey: string;
        itemGroupKey: string;
        itemTimeStartKey: string;
        itemTimeEndKey: string;
    }

    export interface ReactCalendarTimelineProps<
        CustomItem extends TimelineItemBase<any> = TimelineItemBase<number>,
        CustomGroup extends TimelineGroupBase = TimelineGroupBase
    > {
        groups: CustomGroup[];
        items: CustomItem[];
        keys?: TimelineKeys;
        defaultTimeStart?: Date | Moment;
        defaultTimeEnd?: Date | Moment;
        visibleTimeStart?: Date | Moment | number;
        visibleTimeEnd?: Date | Moment | number;
        selected?: number[];
        sidebarWidth?: number;
        sidebarContent?: React.ReactNode;
        rightSidebarWidth?: number;
        rightSidebarContent?: React.ReactNode;
        dragSnap?: number;
        minResizeWidth?: number;
        lineHeight?: number;
        itemHeightRatio?: number;
        minZoom?: number;
        maxZoom?: number;
        clickTolerance?: number;
        canMove?: boolean;
        canChangeGroup?: boolean;
        canResize?: false | true | 'left' | 'right' | 'both';
        useResizeHandle?: boolean;
        stackItems?: boolean;
        traditionalZoom?: boolean;
        itemTouchSendsClick?: boolean;
        timeSteps?: TimelineTimeSteps;
        scrollRef?: React.Ref<any>;
        onItemDrag?(itemDragObject: OnItemDragObjectMove | OnItemDragObjectResize): void;
        onItemMove?(itemId: Id, dragTime: number, newGroupOrder: number): void;
        onItemResize?(itemId: Id, endTimeOrStartTime: number, edge: 'left' | 'right'): void;
        onItemSelect?(itemId: Id, e: any, time: number): void;
        onItemDeselect?(e: React.SyntheticEvent): void;
        onItemClick?(itemId: Id, e: React.SyntheticEvent, time: number): void;
        onItemDoubleClick?(itemId: Id, e: React.SyntheticEvent, time: number): void;
        onItemContextMenu?(itemId: Id, e: React.SyntheticEvent, time: number): void;
        onCanvasClick?(groupId: Id, time: number, e: React.SyntheticEvent): void;
        onCanvasDoubleClick?(groupId: Id, time: number, e: React.SyntheticEvent): void;
        onCanvasContextMenu?(groupId: Id, time: number, e: React.SyntheticEvent): void;
        onZoom?(timelineContext: TimelineContext): void;
        moveResizeValidator?(
            action: 'move' | 'resize',
            itemId: Id,
            time: number,
            resizeEdge: 'left' | 'right',
        ): number;
        onTimeChange?(
            visibleTimeStart: number,
            visibleTimeEnd: number,
            updateScrollCanvas: (start: number, end: number) => void,
        ): any;
        onBoundsChange?(canvasTimeStart: number, canvasTimeEnd: number): any;
        itemRenderer?: (props: ReactCalendarItemRendererProps<CustomItem>) => React.ReactNode;
        groupRenderer?: (props: ReactCalendarGroupRendererProps<CustomGroup>) => React.ReactNode;
        resizeDetector?: (containerResizeDetector: any) => void;
        verticalLineClassNamesForTime?: (start: number, end: number) => string[] | undefined;
        horizontalLineClassNamesForGroup?: (group: CustomGroup) => string[];

        // Fields that are in propTypes but not documented
        headerRef?: React.Ref<any>;
    }

    export interface TimelineTimeSteps {
        second: number;
        minute: number;
        hour: number;
        day: number;
        month: number;
        year: number;
    }

    export class TimelineMarkers extends React.Component {}

    export interface CustomMarkerChildrenProps {
        styles: React.CSSProperties;
        date: number;
    }
    export interface MarkerProps {
        date: Date | number;
        children?: (props: CustomMarkerChildrenProps) => React.ReactNode;
    }

    export class CustomMarker extends React.Component<MarkerProps> {}

    export interface TodayMarkerProps extends MarkerProps {
        interval?: number;
    }
    export class TodayMarker extends React.Component<TodayMarkerProps> {}

    export type CursorMarkerProps = Omit<MarkerProps, 'date'>;
    export class CursorMarker extends React.Component<CursorMarkerProps> {}

    export interface TimelineHeadersProps {
        style?: React.CSSProperties;
        className?: string;
        calendarHeaderStyle?: React.CSSProperties;
        calendarHeaderClassName?: string;
        headerRef?: React.Ref<any>;
    }
    export class TimelineHeaders extends React.Component<TimelineHeadersProps> {}

    export type TimelineHeaderProps = TimelineHeadersProps;

    export interface SidebarHeaderChildrenFnProps<Data> {
        getRootProps: (propsToOverride?: { style: React.CSSProperties }) => { style: React.CSSProperties };
        data: Data;
    }

    export interface SidebarHeaderProps<Data> {
        variant?: 'left' | 'right';
        headerData?: Data;
        children: (props: SidebarHeaderChildrenFnProps<Data>) => React.ReactNode;
    }
    export class SidebarHeader<Data = any> extends React.Component<SidebarHeaderProps<Data>> {}

    export type Unit = 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year';

    export interface IntervalContext {
        interval: { startTime: number; endTime: number; labelWidth: number; left: number };
        intervalText: string;
    }
    export interface GetIntervalProps {
        interval?: Interval;
        style?: React.CSSProperties;
        onClick?: React.MouseEventHandler;
    }
    export interface IntervalRenderer<Data> {
        intervalContext: IntervalContext;
        getIntervalProps: (props?: GetIntervalProps) => Required<GetIntervalProps> & { key: string | number };
        data?: Data;
    }
    export interface DateHeaderProps<Data> {
        style?: React.CSSProperties;
        className?: string;
        unit?: Unit | 'primaryHeader';
        labelFormat?: string | (([startTime, endTime]: [Moment, Moment], unit: Unit, labelWidth: number) => string);
        intervalRenderer?: (props?: IntervalRenderer<Data>) => React.ReactNode;
        headerData?: Data;
        children?: (props: SidebarHeaderChildrenFnProps<Data>) => React.ReactNode;
        height?: number;
    }
    export class DateHeader<Data = any> extends React.Component<DateHeaderProps<Data>> {}
    export interface Interval {
        startTime: Moment;
        endTime: Moment;
    }
    export interface HeaderContext {
        intervals: { startTime: Moment; endTime: Moment }[];
        unit: string;
    }
    export interface CustomHeaderPropsChildrenFnProps<Data> {
        timelineContext: TimelineContext;
        headerContext: HeaderContext;
        getIntervalProps: (props?: GetIntervalProps) => Required<GetIntervalProps> & { key: string | number };
        getRootProps: (propsToOverride?: { style: React.CSSProperties }) => { style: React.CSSProperties };
        showPeriod: (startDate: Moment | number, endDate: Moment | number) => void;
        data: Data;
    }
    export interface CustomHeaderProps<Data> {
        unit?: Unit;
        headerData?: Data;
        height?: number;
        children: (props?: CustomHeaderPropsChildrenFnProps<Data>) => React.ReactNode;
    }
    export class CustomHeader<Data = any> extends React.Component<CustomHeaderProps<Data>> {}

    export const defaultKeys: TimelineKeys;
    export const defaultTimeSteps: TimelineTimeSteps;
    export const defaultHeaderFormats: LabelFormat;

    export default class ReactCalendarTimeline<
        CustomItem extends TimelineItemBase<any> = TimelineItemBase<number>,
        CustomGroup extends TimelineGroupBase = TimelineGroupBase
    > extends React.Component<ReactCalendarTimelineProps<CustomItem, CustomGroup>> {}
}
