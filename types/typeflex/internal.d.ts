import { YGMeasureMode, YGEdge, YGDimension } from './enums';
export declare class YGCachedMeasurement {
    availableWidth: number;
    availableHeight: number;
    widthMeasureMode: YGMeasureMode;
    heightMeasureMode: YGMeasureMode;
    computedWidth: number;
    computedHeight: number;
    constructor();
    isEqual(measurement: YGCachedMeasurement): boolean;
    clone(): YGCachedMeasurement;
}
export declare const leading: [YGEdge.Top, YGEdge.Bottom, YGEdge.Left, YGEdge.Right];
export declare const trailing: [YGEdge.Bottom, YGEdge.Top, YGEdge.Right, YGEdge.Left];
export declare const pos: [YGEdge.Top, YGEdge.Bottom, YGEdge.Left, YGEdge.Right];
export declare const dim: [YGDimension.Height, YGDimension.Height, YGDimension.Width, YGDimension.Width];
export declare const YG_MAX_CACHED_RESULT_COUNT = 16;
export declare const kDefaultFlexGrow = 0;
export declare const kDefaultFlexShrink = 0;
export declare const kWebDefaultFlexShrink = 1;
