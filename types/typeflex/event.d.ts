import { YGMeasureMode } from './enums';
import { YGConfig } from './ygconfig';
import { YGNode } from './ygnode';
export declare enum LayoutType {
    kLayout = 0,
    kMeasure = 1,
    kCachedLayout = 2,
    kCachedMeasure = 3
}
export declare enum LayoutPassReason {
    kInitial = 0,
    kAbsLayout = 1,
    kStretch = 2,
    kMultilineStretch = 3,
    kFlexLayout = 4,
    kMeasureChild = 5,
    kAbsMeasureChild = 6,
    kFlexMeasure = 7
}
declare type LayoutPassCounts = [number, number, number, number, number, number, number, number];
export declare class LayoutData {
    layouts: number;
    measures: number;
    maxMeasureCache: number;
    cachedLayouts: number;
    cachedMeasures: number;
    measureCallbacks: number;
    measureCallbackReasonsCount: LayoutPassCounts;
    constructor(layouts?: number, measures?: number, maxMeasureCache?: number, cachedLayouts?: number, cachedMeasures?: number, measureCallbacks?: number, measureCallbackReasonsCount?: LayoutPassCounts);
}
export declare function LayoutPassReasonToString(value: LayoutPassReason): string;
export declare enum EventType {
    NodeAllocation = 0,
    NodeDeallocation = 1,
    NodeLayout = 2,
    LayoutPassStart = 3,
    LayoutPassEnd = 4,
    MeasureCallbackStart = 5,
    MeasureCallbackEnd = 6,
    NodeBaselineStart = 7,
    NodeBaselineEnd = 8
}
interface Subscriber {
    (node: YGNode, type: EventType, data: any): void;
}
export declare class YGEvent {
    static reset(): void;
    static subscribe(subscriber: Subscriber): void;
    static publish(node: YGNode, eventType: EventType, eventData?: EventData): void;
}
export declare type EventData = NodeAllocationData | NodeDeallocationData | LayoutPassStartData | LayoutPassEndData | MeasureCallbackEndData | NodeLayoutData;
export interface NodeAllocationData {
    config: YGConfig;
}
export interface NodeDeallocationData {
    config: YGConfig;
}
export interface LayoutPassStartData {
    layoutContext: any;
}
export interface LayoutPassEndData {
    layoutContext: any;
    layoutData: LayoutData;
}
export interface MeasureCallbackEndData {
    layoutContext: any;
    width: number;
    widthMeasureMode: YGMeasureMode;
    height: number;
    heightMeasureMode: YGMeasureMode;
    measuredWidth: number;
    measuredHeight: number;
    reason: LayoutPassReason;
}
export interface NodeLayoutData {
    layoutType: LayoutType;
    layoutContext: any;
}
export {};
