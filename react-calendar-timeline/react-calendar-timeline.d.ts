// Type definitions for react-calendar-timeline v0.7.9
// Project: https://github.com/namespace-ee/react-calendar-timeline
// Definitions by: Rajab Shakirov <https://github.com/radziksh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "react-calendar-timeline" {
    interface ReactCalendarTimeline {
        groups?:any;
        items?:{
            id: number;
            group: number;
            title?: string;
            start_time: any;
            end_time: any;
            canMove?: boolean;
            canResize?: boolean;
            canChangeGroup?: boolean;
            className?: string;
        }[];
        keys?:{
            groupIdKey: string;
            groupTitleKey: string;
            itemIdKey: string;
            itemTitleKey: string;
            itemGroupKey: string;
            itemTimeStartKey: string;
            itemTimeEndKey: string;
        };
        sidebarWidth?: number;
        dragSnap?: number;
        minResizeWidth?: number;
        fixedHeader?: "fixed" | "none";
        zIndexStart?: number;
        lineHeight?: number;
        headerLabelGroupHeight?: number;
        headerLabelHeight?: number;
        itemHeightRatio?: number;
        minZoom?: number;
        maxZoom?: number;
        canMove?: boolean;
        canChangeGroup?: boolean;
        canResize?: boolean;
        useResizeHandle?: boolean;
        stackItems?: boolean;
        traditionalZoom?: boolean;
        itemTouchSendsClick?: boolean;
        onItemMove?(itemId, dragTime, newGroupOrder): any;
        onItemResize?(itemId, newResizeEnd): any;
        onItemSelect?(itemId): any;
        onItemClick?(itemId): any;
        onCanvasClick?(groupId, time, e): any;
        onItemDoubleClick?(itemId): any;
        moveResizeValidator?(action, itemId, time): any;
        defaultTimeStart: any;
        defaultTimeEnd: any;
        visibleTimeStart?: any;
        visibleTimeEnd?: any;
        onTimeChange?(visibleTimeStart, visibleTimeEnd): any;
        onTimeInit?(visibleTimeStart, visibleTimeEnd): any;
        onBoundsChange?(canvasTimeStart, canvasTimeEnd): any;
        children?: any;
    }

    let DatePicker: __React.ClassicComponentClass<ReactCalendarTimeline>;
    export = DatePicker;
}