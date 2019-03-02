// Type definitions for yoga-layout 1.9
// Project: https://github.com/facebook/yoga#readme
// Definitions by: tnobody <https://github.com/tnobody>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export const ALIGN_AUTO: 0;
export const ALIGN_COUNT: 8;
export const ALIGN_FLEX_START: 1;
export const ALIGN_CENTER: 2;
export const ALIGN_FLEX_END: 3;
export const ALIGN_STRETCH: 4;
export const ALIGN_BASELINE: 5;
export const ALIGN_SPACE_BETWEEN: 6;
export const ALIGN_SPACE_AROUND: 7;
export const DIMENSION_COUNT: 2;
export const DIMENSION_WIDTH: 0;
export const DIMENSION_HEIGHT: 1;
export const DIRECTION_COUNT: 3;
export const DIRECTION_INHERIT: 0;
export const DIRECTION_LTR: 1;
export const DIRECTION_RTL: 2;
export const DISPLAY_COUNT: 2;
export const DISPLAY_FLEX: 0;
export const DISPLAY_NONE: 1;
export const EDGE_COUNT: 9;
export const EDGE_LEFT: 0;
export const EDGE_TOP: 1;
export const EDGE_RIGHT: 2;
export const EDGE_BOTTOM: 3;
export const EDGE_START: 4;
export const EDGE_END: 5;
export const EDGE_HORIZONTAL: 6;
export const EDGE_VERTICAL: 7;
export const EDGE_ALL: 8;
export const EXPERIMENTAL_FEATURE_COUNT: 1;
export const EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS: 0;
export const FLEX_DIRECTION_COUNT: 4;
export const FLEX_DIRECTION_COLUMN: 0;
export const FLEX_DIRECTION_COLUMN_REVERSE: 1;
export const FLEX_DIRECTION_ROW: 2;
export const FLEX_DIRECTION_ROW_REVERSE: 3;
export const JUSTIFY_COUNT: 6;
export const JUSTIFY_FLEX_START: 0;
export const JUSTIFY_CENTER: 1;
export const JUSTIFY_FLEX_END: 2;
export const JUSTIFY_SPACE_BETWEEN: 3;
export const JUSTIFY_SPACE_AROUND: 4;
export const JUSTIFY_SPACE_EVENLY: 5;
export const LOG_LEVEL_COUNT: 6;
export const LOG_LEVEL_ERROR: 0;
export const LOG_LEVEL_WARN: 1;
export const LOG_LEVEL_INFO: 2;
export const LOG_LEVEL_DEBUG: 3;
export const LOG_LEVEL_VERBOSE: 4;
export const LOG_LEVEL_FATAL: 5;
export const MEASURE_MODE_COUNT: 3;
export const MEASURE_MODE_UNDEFINED: 0;
export const MEASURE_MODE_EXACTLY: 1;
export const MEASURE_MODE_AT_MOST: 2;
export const NODE_TYPE_COUNT: 2;
export const NODE_TYPE_DEFAULT: 0;
export const NODE_TYPE_TEXT: 1;
export const OVERFLOW_COUNT: 3;
export const OVERFLOW_VISIBLE: 0;
export const OVERFLOW_HIDDEN: 1;
export const OVERFLOW_SCROLL: 2;
export const POSITION_TYPE_COUNT: 2;
export const POSITION_TYPE_RELATIVE: 0;
export const POSITION_TYPE_ABSOLUTE: 1;
export const PRINT_OPTIONS_COUNT: 3;
export const PRINT_OPTIONS_LAYOUT: 1;
export const PRINT_OPTIONS_STYLE: 2;
export const PRINT_OPTIONS_CHILDREN: 4;
export const UNIT_COUNT: 4;
export const UNIT_UNDEFINED: 0;
export const UNIT_POINT: 1;
export const UNIT_PERCENT: 2;
export const UNIT_AUTO: 3;
export const WRAP_COUNT: 3;
export const WRAP_NO_WRAP: 0;
export const WRAP_WRAP: 1;
export const WRAP_WRAP_REVERSE: 2;

interface ConstantsStatic {
   readonly ALIGN_AUTO: typeof ALIGN_AUTO;
   readonly ALIGN_COUNT: typeof ALIGN_COUNT;
   readonly ALIGN_FLEX_START: typeof ALIGN_FLEX_START;
   readonly ALIGN_CENTER: typeof ALIGN_CENTER;
   readonly ALIGN_FLEX_END: typeof ALIGN_FLEX_END;
   readonly ALIGN_STRETCH: typeof ALIGN_STRETCH;
   readonly ALIGN_BASELINE: typeof ALIGN_BASELINE;
   readonly ALIGN_SPACE_BETWEEN: typeof ALIGN_SPACE_BETWEEN;
   readonly ALIGN_SPACE_AROUND: typeof ALIGN_SPACE_AROUND;
   readonly DIMENSION_COUNT: typeof DIMENSION_COUNT;
   readonly DIMENSION_WIDTH: typeof DIMENSION_WIDTH;
   readonly DIMENSION_HEIGHT: typeof DIMENSION_HEIGHT;
   readonly DIRECTION_COUNT: typeof DIRECTION_COUNT;
   readonly DIRECTION_INHERIT: typeof DIRECTION_INHERIT;
   readonly DIRECTION_LTR: typeof DIRECTION_LTR;
   readonly DIRECTION_RTL: typeof DIRECTION_RTL;
   readonly DISPLAY_COUNT: typeof DISPLAY_COUNT;
   readonly DISPLAY_FLEX: typeof DISPLAY_FLEX;
   readonly DISPLAY_NONE: typeof DISPLAY_NONE;
   readonly EDGE_COUNT: typeof EDGE_COUNT;
   readonly EDGE_LEFT: typeof EDGE_LEFT;
   readonly EDGE_TOP: typeof EDGE_TOP;
   readonly EDGE_RIGHT: typeof EDGE_RIGHT;
   readonly EDGE_BOTTOM: typeof EDGE_BOTTOM;
   readonly EDGE_START: typeof EDGE_START;
   readonly EDGE_END: typeof EDGE_END;
   readonly EDGE_HORIZONTAL: typeof EDGE_HORIZONTAL;
   readonly EDGE_VERTICAL: typeof EDGE_VERTICAL;
   readonly EDGE_ALL: typeof EDGE_ALL;
   readonly EXPERIMENTAL_FEATURE_COUNT: typeof EXPERIMENTAL_FEATURE_COUNT;
   readonly EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS: typeof EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS;
   readonly FLEX_DIRECTION_COUNT: typeof FLEX_DIRECTION_COUNT;
   readonly FLEX_DIRECTION_COLUMN: typeof FLEX_DIRECTION_COLUMN;
   readonly FLEX_DIRECTION_COLUMN_REVERSE: typeof FLEX_DIRECTION_COLUMN_REVERSE;
   readonly FLEX_DIRECTION_ROW: typeof FLEX_DIRECTION_ROW;
   readonly FLEX_DIRECTION_ROW_REVERSE: typeof FLEX_DIRECTION_ROW_REVERSE;
   readonly JUSTIFY_COUNT: typeof JUSTIFY_COUNT;
   readonly JUSTIFY_FLEX_START: typeof JUSTIFY_FLEX_START;
   readonly JUSTIFY_CENTER: typeof JUSTIFY_CENTER;
   readonly JUSTIFY_FLEX_END: typeof JUSTIFY_FLEX_END;
   readonly JUSTIFY_SPACE_BETWEEN: typeof JUSTIFY_SPACE_BETWEEN;
   readonly JUSTIFY_SPACE_AROUND: typeof JUSTIFY_SPACE_AROUND;
   readonly JUSTIFY_SPACE_EVENLY: typeof JUSTIFY_SPACE_EVENLY;
   readonly LOG_LEVEL_COUNT: typeof LOG_LEVEL_COUNT;
   readonly LOG_LEVEL_ERROR: typeof LOG_LEVEL_ERROR;
   readonly LOG_LEVEL_WARN: typeof LOG_LEVEL_WARN;
   readonly LOG_LEVEL_INFO: typeof LOG_LEVEL_INFO;
   readonly LOG_LEVEL_DEBUG: typeof LOG_LEVEL_DEBUG;
   readonly LOG_LEVEL_VERBOSE: typeof LOG_LEVEL_VERBOSE;
   readonly LOG_LEVEL_FATAL: typeof LOG_LEVEL_FATAL;
   readonly MEASURE_MODE_COUNT: typeof MEASURE_MODE_COUNT;
   readonly MEASURE_MODE_UNDEFINED: typeof MEASURE_MODE_UNDEFINED;
   readonly MEASURE_MODE_EXACTLY: typeof MEASURE_MODE_EXACTLY;
   readonly MEASURE_MODE_AT_MOST: typeof MEASURE_MODE_AT_MOST;
   readonly NODE_TYPE_COUNT: typeof NODE_TYPE_COUNT;
   readonly NODE_TYPE_DEFAULT: typeof NODE_TYPE_DEFAULT;
   readonly NODE_TYPE_TEXT: typeof NODE_TYPE_TEXT;
   readonly OVERFLOW_COUNT: typeof OVERFLOW_COUNT;
   readonly OVERFLOW_VISIBLE: typeof OVERFLOW_VISIBLE;
   readonly OVERFLOW_HIDDEN: typeof OVERFLOW_HIDDEN;
   readonly OVERFLOW_SCROLL: typeof OVERFLOW_SCROLL;
   readonly POSITION_TYPE_COUNT: typeof POSITION_TYPE_COUNT;
   readonly POSITION_TYPE_RELATIVE: typeof POSITION_TYPE_RELATIVE;
   readonly POSITION_TYPE_ABSOLUTE: typeof POSITION_TYPE_ABSOLUTE;
   readonly PRINT_OPTIONS_COUNT: typeof PRINT_OPTIONS_COUNT;
   readonly PRINT_OPTIONS_LAYOUT: typeof PRINT_OPTIONS_LAYOUT;
   readonly PRINT_OPTIONS_STYLE: typeof PRINT_OPTIONS_STYLE;
   readonly PRINT_OPTIONS_CHILDREN: typeof PRINT_OPTIONS_CHILDREN;
   readonly UNIT_COUNT: typeof UNIT_COUNT;
   readonly UNIT_UNDEFINED: typeof UNIT_UNDEFINED;
   readonly UNIT_POINT: typeof UNIT_POINT;
   readonly UNIT_PERCENT: typeof UNIT_PERCENT;
   readonly UNIT_AUTO: typeof UNIT_AUTO;
   readonly WRAP_COUNT: typeof WRAP_COUNT;
   readonly WRAP_NO_WRAP: typeof WRAP_NO_WRAP;
   readonly WRAP_WRAP: typeof WRAP_WRAP;
   readonly WRAP_WRAP_REVERSE: typeof WRAP_WRAP_REVERSE;
}

declare const Constans: ConstantsStatic;

export type YogaJustifyContent =
    | typeof JUSTIFY_CENTER
    | typeof JUSTIFY_FLEX_END
    | typeof JUSTIFY_FLEX_START
    | typeof JUSTIFY_SPACE_AROUND
    | typeof JUSTIFY_SPACE_BETWEEN
    | typeof JUSTIFY_SPACE_EVENLY;

export type YogaAlign =
    | typeof ALIGN_AUTO
    | typeof ALIGN_BASELINE
    | typeof ALIGN_CENTER
    | typeof ALIGN_FLEX_END
    | typeof ALIGN_FLEX_START
    | typeof ALIGN_SPACE_AROUND
    | typeof ALIGN_SPACE_BETWEEN
    | typeof ALIGN_STRETCH;

export type YogaFlexDirection =
    | typeof FLEX_DIRECTION_COLUMN
    | typeof FLEX_DIRECTION_COLUMN_REVERSE
    | typeof FLEX_DIRECTION_COUNT
    | typeof FLEX_DIRECTION_ROW
    | typeof FLEX_DIRECTION_ROW_REVERSE;

export type YogaDirection =
    | typeof DIRECTION_INHERIT
    | typeof DIRECTION_LTR
    | typeof DIRECTION_RTL;

export type YogaFlexWrap =
    | typeof WRAP_NO_WRAP
    | typeof WRAP_WRAP
    | typeof WRAP_WRAP_REVERSE;

export type YogaEdge =
    | typeof EDGE_LEFT
    | typeof EDGE_TOP
    | typeof EDGE_RIGHT
    | typeof EDGE_BOTTOM
    | typeof EDGE_START
    | typeof EDGE_END
    | typeof EDGE_HORIZONTAL
    | typeof EDGE_VERTICAL
    | typeof EDGE_ALL;

export type YogaDisplay =
    | typeof DISPLAY_FLEX
    | typeof DISPLAY_NONE;

export type YogaUnit =
    | typeof UNIT_AUTO
    | typeof UNIT_PERCENT
    | typeof UNIT_POINT
    | typeof UNIT_UNDEFINED;

export type YogaOverflow =
    | typeof OVERFLOW_HIDDEN
    | typeof OVERFLOW_SCROLL
    | typeof OVERFLOW_VISIBLE;

export type YogaPositionType =
    | typeof POSITION_TYPE_ABSOLUTE
    | typeof POSITION_TYPE_RELATIVE;

export type YogaExperimentalFeature = typeof EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS;

export interface YogaNode {
    calculateLayout(
        width?: number,
        height?: number,
        direction?: YogaDirection,
    ): void;
    copyStyle(node: YogaNode): void;
    free(): void;
    freeRecursive(): void;
    getAlignContent(): YogaAlign;
    getAlignItems(): YogaAlign;
    getAlignSelf(): YogaAlign;
    getAspectRatio(): number;
    getBorder(edge: YogaEdge): number;
    getChild(index: number): YogaNode;
    getChildCount(): number;
    getComputedBorder(edge: YogaEdge): number;
    getComputedBottom(): number;
    getComputedHeight(): number;
    getComputedLayout(): Layout;
    getComputedLeft(): number;
    getComputedMargin(edge: YogaEdge): number;
    getComputedPadding(edge: YogaEdge): number;
    getComputedRight(): number;
    getComputedTop(): number;
    getComputedWidth(): number;
    getDisplay(): YogaDisplay;
    getFlexBasis(): number;
    getFlexDirection(): YogaFlexDirection;
    getFlexGrow(): number;
    getFlexShrink(): number;
    getFlexWrap(): YogaFlexWrap;
    getHeight(): Value;
    getJustifyContent(): YogaJustifyContent;
    getMargin(edge: YogaEdge): Value;
    getMaxHeight(): Value;
    getMaxWidth(): Value;
    getMinHeight(): Value;
    getMinWidth(): Value;
    getOverflow(): YogaOverflow;
    getPadding(edge: YogaEdge): Value;
    getParent(): YogaNode | null;
    getPosition(edge: YogaEdge): Value;
    getPositionType(): YogaPositionType;
    getWidth(): Value;
    insertChild(child: YogaNode, index: number): void;
    isDirty(): boolean;
    markDirty(): void;
    removeChild(child: YogaNode): void;
    reset(): void;
    setAlignContent(alignContent: YogaAlign): void;
    setAlignItems(alignItems: YogaAlign): void;
    setAlignSelf(alignSelf: YogaAlign): void;
    setAspectRatio(aspectRatio: number): void;
    setBorder(edge: YogaEdge, borderWidth: number): void;
    setDisplay(display: YogaDisplay): void;
    setFlex(flex: number): void;
    setFlexBasis(flexBasis: number | string): void;
    setFlexBasisPercent(flexBasis: number): void;
    setFlexDirection(flexDirection: YogaFlexDirection): void;
    setFlexGrow(flexGrow: number): void;
    setFlexShrink(flexShrink: number): void;
    setFlexWrap(flexWrap: YogaFlexWrap): void;
    setHeight(height: number | string): void;
    setHeightAuto(): void;
    setHeightPercent(height: number): void;
    setJustifyContent(justifyContent: YogaJustifyContent): void;
    setMargin(edge: YogaEdge, margin: number): void;
    setMarginAuto(edge: YogaEdge): void;
    setMarginPercent(edge: YogaEdge, margin: number): void;
    setMaxHeight(maxHeight: number | string): void;
    setMaxHeightPercent(maxHeight: number): void;
    setMaxWidth(maxWidth: number | string): void;
    setMaxWidthPercent(maxWidth: number): void;
    setMeasureFunc(measureFunc: (() => any) | null): void;
    setMinHeight(minHeight: number | string): void;
    setMinHeightPercent(minHeight: number): void;
    setMinWidth(minWidth: number | string): void;
    setMinWidthPercent(minWidth: number): void;
    setOverflow(overflow: YogaOverflow): void;
    setPadding(edge: YogaEdge, padding: number | string): void;
    setPaddingPercent(edge: YogaEdge, padding: number): void;
    setPosition(edge: YogaEdge, position: number | string): void;
    setPositionPercent(edge: YogaEdge, position: number): void;
    setPositionType(positionType: YogaPositionType): void;
    setWidth(width: number | string): void;
    setWidthAuto(): void;
    setWidthPercent(width: number): void;
    unsetMeasureFun(): void;
}

export class Layout {
    readonly left: number;
    readonly right: number;
    readonly top: number;
    readonly bottom: number;
    readonly width: number;
    readonly height: number;
    constructor(
        left: number,
        right: number,
        top: number,
        bottom: number,
        width: number,
        height: number,
    );

    fromJs(expose: (
        left: number,
        right: number,
        top: number,
        bottom: number,
        width: number,
        height: number,
    ) => any): void;

    toString(): string;
}

export class Size {
    static fromJS(dim: { width: number, height: number }): Size;

    readonly width: number;
    readonly height: number;

    constructor(width: number, height: number);

    fromJS(expose: (width: number, height: number) => any): void;

    toString(): string;
}

export class Value {
    readonly unit: YogaUnit | number;
    readonly value: number;

    constructor(unit: YogaUnit | number, value: number);

    fromJS(expose: (unit: YogaUnit | number, value: number) => any): void;

    toString(): string;
    valueOf(): number;
}

export interface YogaConfig {
    isExperimentalFeatureEnabled(feature: YogaExperimentalFeature): boolean;
    setExperimentalFeatureEnabled(
        feature: YogaExperimentalFeature,
        enabled: boolean,
    ): void;
    setPointScaleFactor(factor: number): void;
}

interface NodeStatic {
    create(): YogaNode;
    createDefault(): YogaNode;
    createWithConfig(config: YogaConfig): YogaNode;
    destroy(node: YogaNode): any;
}

export const Node: NodeStatic;

interface ConfigStatic {
    create(): YogaConfig;
    destroy(config: YogaConfig): any;
}

export const Config: ConfigStatic;

interface YogaStatic extends ConstantsStatic {
    Node: typeof Node;
    Config: typeof Config;
    Layout: typeof Layout;
    Size: typeof Size;
    Value: typeof Value;
    getInstanceCount(): number;
}

declare const Yoga: YogaStatic;

export default Yoga;
