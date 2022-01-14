export declare const YGAlignCount = 8;
export declare enum YGAlign {
    Auto = 0,
    FlexStart = 1,
    Center = 2,
    FlexEnd = 3,
    Stretch = 4,
    Baseline = 5,
    SpaceBetween = 6,
    SpaceAround = 7
}
export declare function YGAlignToString(value: YGAlign): string;
export declare const YGDimensionCount = 2;
export declare enum YGDimension {
    Width = 0,
    Height = 1
}
export declare function YGDimensionToString(value: YGDimension): string;
export declare enum YGDirection {
    Inherit = 0,
    LTR = 1,
    RTL = 2
}
export declare function YGDirectionToString(value: YGDirection): string;
export declare const YGDisplayCount = 2;
export declare enum YGDisplay {
    Flex = 0,
    None = 1
}
export declare function YGDisplayToString(value: YGDisplay): string;
export declare const YGEdgeCount = 9;
export declare enum YGEdge {
    Left = 0,
    Top = 1,
    Right = 2,
    Bottom = 3,
    Start = 4,
    End = 5,
    Horizontal = 6,
    Vertical = 7,
    All = 8
}
export declare function YGEdgeToString(value: YGEdge): string;
export declare const YGExperimentalFeatureCount = 1;
export declare enum YGExperimentalFeature {
    WebFlexBasis = 0
}
export declare function YGExperimentalFeatureToString(value: YGExperimentalFeature): string;
export declare const YGFlexDirectionCount = 4;
export declare enum YGFlexDirection {
    Column = 0,
    ColumnReverse = 1,
    Row = 2,
    RowReverse = 3
}
export declare function YGFlexDirectionToString(value: YGFlexDirection): string;
export declare const YGJustifyCount = 6;
export declare enum YGJustify {
    FlexStart = 0,
    Center = 1,
    FlexEnd = 2,
    SpaceBetween = 3,
    SpaceAround = 4,
    SpaceEvenly = 5
}
export declare function YGJustifyToString(value: YGJustify): string;
export declare const YGLogLevelCount = 6;
export declare enum YGLogLevel {
    Error = 0,
    Warn = 1,
    Info = 2,
    Debug = 3,
    Verbose = 4,
    Fatal = 5
}
export declare function YGLogLevelToString(value: YGLogLevel): string;
export declare const YGMeasureModeCount = 3;
export declare enum YGMeasureMode {
    Undefined = 0,
    Exactly = 1,
    AtMost = 2
}
export declare function YGMeasureModeToString(value: YGMeasureMode): string;
export declare const YGNodeTypeCount = 2;
export declare enum YGNodeType {
    Default = 0,
    Text = 1
}
export declare function YGNodeTypeToString(value: YGNodeType): string;
export declare const YGOverflowCount = 3;
export declare enum YGOverflow {
    Visible = 0,
    Hidden = 1,
    Scroll = 2
}
export declare function YGOverflowToString(value: YGOverflow): string;
export declare const YGPositionTypeCount = 2;
export declare enum YGPositionType {
    Static = 0,
    Relative = 1,
    Absolute = 2
}
export declare function YGPositionTypeToString(value: YGPositionType): string;
export declare const YGPrintOptionsCount = 3;
export declare enum YGPrintOptions {
    Layout = 1,
    Style = 2,
    Children = 4
}
export declare function YGPrintOptionsToString(value: YGPrintOptions): string;
export declare const YGUnitCount = 4;
export declare enum YGUnit {
    Undefined = 0,
    Point = 1,
    Percent = 2,
    Auto = 3
}
export declare function YGUnitToString(value: YGUnit): string;
export declare const YGWrapCount = 3;
export declare enum YGWrap {
    NoWrap = 0,
    Wrap = 1,
    WrapReverse = 2
}
export declare function YGWrapToString(value: YGWrap): string;
