// Type definitions for yoga-layout 1.9
// Project: https://github.com/facebook/yoga#readme
// Definitions by: tnobody <https://github.com/tnobody>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Constans {
    static readonly ALIGN_AUTO: 0;
    static readonly ALIGN_COUNT: 8;
    static readonly ALIGN_FLEX_START: 1;
    static readonly ALIGN_CENTER: 2;
    static readonly ALIGN_FLEX_END: 3;
    static readonly ALIGN_STRETCH: 4;
    static readonly ALIGN_BASELINE: 5;
    static readonly ALIGN_SPACE_BETWEEN: 6;
    static readonly ALIGN_SPACE_AROUND: 7;

    static readonly DIMENSION_COUNT: 2;
    static readonly DIMENSION_WIDTH: 0;
    static readonly DIMENSION_HEIGHT: 1;

    static readonly DIRECTION_COUNT: 3;
    static readonly DIRECTION_INHERIT: 0;
    static readonly DIRECTION_LTR: 1;
    static readonly DIRECTION_RTL: 2;

    static readonly DISPLAY_COUNT: 2;
    static readonly DISPLAY_FLEX: 0;
    static readonly DISPLAY_NONE: 1;

    static readonly EDGE_COUNT: 9;
    static readonly EDGE_LEFT: 0;
    static readonly EDGE_TOP: 1;
    static readonly EDGE_RIGHT: 2;
    static readonly EDGE_BOTTOM: 3;
    static readonly EDGE_START: 4;
    static readonly EDGE_END: 5;
    static readonly EDGE_HORIZONTAL: 6;
    static readonly EDGE_VERTICAL: 7;
    static readonly EDGE_ALL: 8;

    static readonly EXPERIMENTAL_FEATURE_COUNT: 1;
    static readonly EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS: 0;

    static readonly FLEX_DIRECTION_COUNT: 4;
    static readonly FLEX_DIRECTION_COLUMN: 0;
    static readonly FLEX_DIRECTION_COLUMN_REVERSE: 1;
    static readonly FLEX_DIRECTION_ROW: 2;
    static readonly FLEX_DIRECTION_ROW_REVERSE: 3;

    static readonly JUSTIFY_COUNT: 6;
    static readonly JUSTIFY_FLEX_START: 0;
    static readonly JUSTIFY_CENTER: 1;
    static readonly JUSTIFY_FLEX_END: 2;
    static readonly JUSTIFY_SPACE_BETWEEN: 3;
    static readonly JUSTIFY_SPACE_AROUND: 4;
    static readonly JUSTIFY_SPACE_EVENLY: 5;

    static readonly LOG_LEVEL_COUNT: 6;
    static readonly LOG_LEVEL_ERROR: 0;
    static readonly LOG_LEVEL_WARN: 1;
    static readonly LOG_LEVEL_INFO: 2;
    static readonly LOG_LEVEL_DEBUG: 3;
    static readonly LOG_LEVEL_VERBOSE: 4;
    static readonly LOG_LEVEL_FATAL: 5;

    static readonly MEASURE_MODE_COUNT: 3;
    static readonly MEASURE_MODE_UNDEFINED: 0;
    static readonly MEASURE_MODE_EXACTLY: 1;
    static readonly MEASURE_MODE_AT_MOST: 2;

    static readonly NODE_TYPE_COUNT: 2;
    static readonly NODE_TYPE_DEFAULT: 0;
    static readonly NODE_TYPE_TEXT: 1;

    static readonly OVERFLOW_COUNT: 3;
    static readonly OVERFLOW_VISIBLE: 0;
    static readonly OVERFLOW_HIDDEN: 1;
    static readonly OVERFLOW_SCROLL: 2;

    static readonly POSITION_TYPE_COUNT: 2;
    static readonly POSITION_TYPE_RELATIVE: 0;
    static readonly POSITION_TYPE_ABSOLUTE: 1;

    static readonly PRINT_OPTIONS_COUNT: 3;
    static readonly PRINT_OPTIONS_LAYOUT: 1;
    static readonly PRINT_OPTIONS_STYLE: 2;
    static readonly PRINT_OPTIONS_CHILDREN: 4;

    static readonly UNIT_COUNT: 4;
    static readonly UNIT_UNDEFINED: 0;
    static readonly UNIT_POINT: 1;
    static readonly UNIT_PERCENT: 2;
    static readonly UNIT_AUTO: 3;

    static readonly WRAP_COUNT: 3;
    static readonly WRAP_NO_WRAP: 0;
    static readonly WRAP_WRAP: 1;
    static readonly WRAP_WRAP_REVERSE: 2;
}

export type Yoga$JustifyContent =
    | typeof Constans.JUSTIFY_CENTER
    | typeof Constans.JUSTIFY_FLEX_END
    | typeof Constans.JUSTIFY_FLEX_START
    | typeof Constans.JUSTIFY_SPACE_AROUND
    | typeof Constans.JUSTIFY_SPACE_BETWEEN
    | typeof Constans.JUSTIFY_SPACE_EVENLY;

export type Yoga$Align =
    | typeof Constans.ALIGN_AUTO
    | typeof Constans.ALIGN_BASELINE
    | typeof Constans.ALIGN_CENTER
    | typeof Constans.ALIGN_FLEX_END
    | typeof Constans.ALIGN_FLEX_START
    | typeof Constans.ALIGN_SPACE_AROUND
    | typeof Constans.ALIGN_SPACE_BETWEEN
    | typeof Constans.ALIGN_STRETCH;

export type Yoga$FlexDirection =
    | typeof Constans.FLEX_DIRECTION_COLUMN
    | typeof Constans.FLEX_DIRECTION_COLUMN_REVERSE
    | typeof Constans.FLEX_DIRECTION_COUNT
    | typeof Constans.FLEX_DIRECTION_ROW
    | typeof Constans.FLEX_DIRECTION_ROW_REVERSE;

export type Yoga$Direction =
    | typeof Constans.DIRECTION_INHERIT
    | typeof Constans.DIRECTION_LTR
    | typeof Constans.DIRECTION_RTL;

export type Yoga$FlexWrap =
    | typeof Constans.WRAP_NO_WRAP
    | typeof Constans.WRAP_WRAP
    | typeof Constans.WRAP_WRAP_REVERSE;

export type Yoga$Edge =
    | typeof Constans.EDGE_LEFT
    | typeof Constans.EDGE_TOP
    | typeof Constans.EDGE_RIGHT
    | typeof Constans.EDGE_BOTTOM
    | typeof Constans.EDGE_START
    | typeof Constans.EDGE_END
    | typeof Constans.EDGE_HORIZONTAL
    | typeof Constans.EDGE_VERTICAL
    | typeof Constans.EDGE_ALL;

export type Yoga$Display =
    | typeof Constans.DISPLAY_FLEX
    | typeof Constans.DISPLAY_NONE;

export type Yoga$Unit =
    | typeof Constans.UNIT_AUTO
    | typeof Constans.UNIT_PERCENT
    | typeof Constans.UNIT_POINT
    | typeof Constans.UNIT_UNDEFINED;

export type Yoga$Overflow =
    | typeof Constans.OVERFLOW_HIDDEN
    | typeof Constans.OVERFLOW_SCROLL
    | typeof Constans.OVERFLOW_VISIBLE;

export type Yoga$PositionType =
    | typeof Constans.POSITION_TYPE_ABSOLUTE
    | typeof Constans.POSITION_TYPE_RELATIVE;

export type Yoga$ExperimentalFeature = typeof Constans.EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS;

export interface Yoga$Node {
    calculateLayout(
        width?: number,
        height?: number,
        direction?: Yoga$Direction,
    ): void;
    copyStyle(node: Yoga$Node): void;
    free(): void;
    freeRecursive(): void;
    getAlignContent(): Yoga$Align;
    getAlignItems(): Yoga$Align;
    getAlignSelf(): Yoga$Align;
    getAspectRatio(): number;
    getBorder(edge: Yoga$Edge): number;
    getChild(index: number): Yoga$Node;
    getChildCount(): number;
    getComputedBorder(edge: Yoga$Edge): number;
    getComputedBottom(): number;
    getComputedHeight(): number;
    getComputedLayout(): Layout;
    getComputedLeft(): number;
    getComputedMargin(edge: Yoga$Edge): number;
    getComputedPadding(edge: Yoga$Edge): number;
    getComputedRight(): number;
    getComputedTop(): number;
    getComputedWidth(): number;
    getDisplay(): Yoga$Display;
    getFlexBasis(): number;
    getFlexDirection(): Yoga$FlexDirection;
    getFlexGrow(): number;
    getFlexShrink(): number;
    getFlexWrap(): Yoga$FlexWrap;
    getHeight(): Value;
    getJustifyContent(): Yoga$JustifyContent;
    getMargin(edge: Yoga$Edge): Value;
    getMaxHeight(): Value;
    getMaxWidth(): Value;
    getMinHeight(): Value;
    getMinWidth(): Value;
    getOverflow(): Yoga$Overflow;
    getPadding(edge: Yoga$Edge): Value;
    getParent(): Yoga$Node | null;
    getPosition(edge: Yoga$Edge): Value;
    getPositionType(): Yoga$PositionType;
    getWidth(): Value;
    insertChild(child: Yoga$Node, index: number): void;
    isDirty(): boolean;
    markDirty(): void;
    removeChild(child: Yoga$Node): void;
    reset(): void;
    setAlignContent(alignContent: Yoga$Align): void;
    setAlignItems(alignItems: Yoga$Align): void;
    setAlignSelf(alignSelf: Yoga$Align): void;
    setAspectRatio(aspectRatio: number): void;
    setBorder(edge: Yoga$Edge, borderWidth: number): void;
    setDisplay(display: Yoga$Display): void;
    setFlex(flex: number): void;
    setFlexBasis(flexBasis: number | string): void;
    setFlexBasisPercent(flexBasis: number): void;
    setFlexDirection(flexDirection: Yoga$FlexDirection): void;
    setFlexGrow(flexGrow: number): void;
    setFlexShrink(flexShrink: number): void;
    setFlexWrap(flexWrap: Yoga$FlexWrap): void;
    setHeight(height: number | string): void;
    setHeightAuto(): void;
    setHeightPercent(height: number): void;
    setJustifyContent(justifyContent: Yoga$JustifyContent): void;
    setMargin(edge: Yoga$Edge, margin: number): void;
    setMarginAuto(edge: Yoga$Edge): void;
    setMarginPercent(edge: Yoga$Edge, margin: number): void;
    setMaxHeight(maxHeight: number | string): void;
    setMaxHeightPercent(maxHeight: number): void;
    setMaxWidth(maxWidth: number | string): void;
    setMaxWidthPercent(maxWidth: number): void;
    setMeasureFunc(measureFunc: Function | null): void;
    setMinHeight(minHeight: number | string): void;
    setMinHeightPercent(minHeight: number): void;
    setMinWidth(minWidth: number | string): void;
    setMinWidthPercent(minWidth: number): void;
    setOverflow(overflow: Yoga$Overflow): void;
    setPadding(edge: Yoga$Edge, padding: number | string): void;
    setPaddingPercent(edge: Yoga$Edge, padding: number): void;
    setPosition(edge: Yoga$Edge, position: number | string): void;
    setPositionPercent(edge: Yoga$Edge, position: number): void;
    setPositionType(positionType: Yoga$PositionType): void;
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
    ) => any): void

    toString(): string;

}

export class Size {
    static fromJS(dim: { width: number, height: number }): Size

    readonly width: number;
    readonly height: number;

    constructor(width: number, height: number);

    fromJs(expose: (width: number, height: number) => any): void;

    toString(): string;
}

export class Value {
    readonly unit: Yoga$Unit | number;
    readonly value: number;

    constructor(unit: Yoga$Unit | number, value: number);

    fromJs(expose: (unit: Yoga$Unit | number, value: number) => any): void;

    toString(): string;
    valueOf(): number;
}

export interface Yoga$Config {
    isExperimentalFeatureEnabled(feature: Yoga$ExperimentalFeature): boolean;
    setExperimentalFeatureEnabled(
        feature: Yoga$ExperimentalFeature,
        enabled: boolean,
    ): void
    setPointScalFactor(factor: number): void
}


export class Node {
    static create(): Yoga$Node;
    static createDefault(): Yoga$Node;
    static createWithConfig(config: Yoga$Config): Yoga$Node;
    static destroy(node: Yoga$Node): any;
}

export class Config {
    static create(): Yoga$Config;
    static destroy(config: Yoga$Config): any;
}

export default class Yoga extends Constans {
    static Node: typeof Node;
    static Config: typeof Config;
    static Layout: typeof Layout;
    static Size: typeof Size;
    static Value: typeof Value;
    getInstanceCount(): number
}