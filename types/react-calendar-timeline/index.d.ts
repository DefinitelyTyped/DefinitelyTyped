// Type definitions for react-calendar-timeline v0.15.12
// Project: https://github.com/namespace-ee/react-calendar-timeline
// Definitions by: Rajab Shakirov <https://github.com/radziksh>
//				   Alex Maclean <https://github.com/acemac>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

/// <reference types="react"/>

declare module "react-calendar-timeline" {

  export interface TimelineGroup {
    id: number;
    title: string | JSX.Element;
  }

  export interface TimelineItem {
    id: number;
    group: number;
    title?: string | JSX.Element;
    start_time: any;
    end_time: any;
    canMove?: boolean;
    canResize?: boolean;
    canChangeGroup?: boolean;
    className?: string;
  }

  export interface TimelineContext {
    visibletimeStart: number,
    visibleTimeEnd: number,
    timelineWidth: number
  }

  export interface ReactCalendarTimelineProps {
      groups: TimelineGroup[];
      items: TimelineItem[];
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
      onItemMove?(itemId:number, dragTime:number, newGroupOrder:number): any;
      onItemResize?(itemId:number, newResizeEnd: number, edge: "left" | "right"): any;
      onItemSelect?(itemId:number, e: any, time: number): any;
      onItemClick?(itemId:number, e: any, time: number): any;
      onCanvasClick?(groupId:number, time:number, e:any): any;
      onItemDoubleClick?(itemId:number, e: any, time: number): any;
      moveResizeValidator?(action:"move" | "resize", itemId:number, time:number, resizeEdge: "left" | "right"): any;
      defaultTimeStart?: any;
      defaultTimeEnd?: any;
      visibleTimeStart?: number;
      visibleTimeEnd?: number;
      onTimeChange?(visibleTimeStart: number, visibleTimeEnd: number, updateScrollCanvas: (start: number, end: number) => void): any;
      onTimeInit?(visibleTimeStart: number, visibleTimeEnd: number): any;
      onBoundsChange?(canvasTimeStart: number, canvasTimeEnd: number): any;
      children?: any;
      fullUpdate?: boolean;
      itemRenderer?: (item: TimelineItem, context: TimelineContext) => JSX.Element;
      groupRenderer?: (group: TimelineGroup, isRightSidebar: boolean) => JSX.Element;
  }
  let ReactCalendarTimeline : React.ClassicComponentClass<ReactCalendarTimelineProps>;
  export default ReactCalendarTimeline;
}
