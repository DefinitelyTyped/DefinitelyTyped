// Type definitions for svgo 0.7
// Project: https://github.com/svg/svgo
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

interface PluginCleanupAttrs {
    cleanupAttrs: object;
}

interface PluginRemoveDoctype {
    removeDoctype: object;
}

interface PluginRemoveXMLProcInst {
    removeXMLProcInst: object;
}

interface PluginRemoveComments {
    removeComments: object;
}

interface PluginRemoveMetadata {
    removeMetadata: object;
}

interface PluginRemoveTitle {
    removeTitle: object;
}

interface PluginRemoveDesc {
    removeDesc: object;
}

interface PluginRemoveUselessDefs {
    removeUselessDefs: object;
}

interface PluginRemoveXMLNS {
    removeXMLNS: object;
}

interface PluginRemoveEditorsNSData {
    removeEditorsNSData: object;
}

interface PluginRemoveEmptyAttrs {
    removeEmptyAttrs: object;
}

interface PluginRemoveHiddenElems {
    removeHiddenElems: object;
}

interface PluginRemoveEmptyText {
    removeEmptyText: object;
}

interface PluginRemoveEmptyContainers {
    removeEmptyContainers: object;
}

interface PluginRemoveViewBox {
    removeViewBox: object;
}

interface PluginCleanupEnableBackground {
    cleanupEnableBackground: object;
}

interface PluginMinifyStyles {
    minifyStyles: object;
}

interface PluginConvertStyleToAttrs {
    convertStyleToAttrs: object;
}

interface PluginConvertColors {
    convertColors: object;
}

interface PluginConvertPathData {
    convertPathData: object;
}

interface PluginConvertTransform {
    convertTransform: object;
}

interface PluginRemoveUnknownsAndDefaults {
    removeUnknownsAndDefaults: object;
}

interface PluginRemoveNonInheritableGroupAttrs {
    removeNonInheritableGroupAttrs: object;
}

interface PluginRemoveUselessStrokeAndFill {
    removeUselessStrokeAndFill: object;
}

interface PluginRemoveUnusedNS {
    removeUnusedNS: object;
}

interface PluginCleanupIDs {
    cleanupIDs: object;
}

interface PluginCleanupNumericValues {
    cleanupNumericValues: object;
}

interface PluginCleanupListOfValues {
    cleanupListOfValues: object;
}

interface PluginMoveElemsAttrsToGroup {
    moveElemsAttrsToGroup: object;
}

interface PluginMoveGroupAttrsToElems {
    moveGroupAttrsToElems: object;
}

interface PluginCollapseGroups {
    collapseGroups: object;
}

interface PluginRemoveRasterImages {
    removeRasterImages: object;
}

interface PluginMergePaths {
    mergePaths: object;
}

interface PluginConvertShapeToPath {
    convertShapeToPath: object;
}

interface PluginSortAttrs {
    sortAttrs: object;
}

interface PluginTransformsWithOnePath {
    transformsWithOnePath: object;
}

interface PluginRemoveDimensions {
    removeDimensions: object;
}

interface PluginRemoveAttrs {
    removeAttrs: object;
}

interface PluginRemoveElementsByAttr {
    removeElementsByAttr: object;
}

interface PluginAddClassesToSVGElement {
    addClassesToSVGElement: object;
}

interface PluginAddAttributesToSVGElement {
    addAttributesToSVGElement: object;
}

interface PluginRemoveStyleElement {
    removeStyleElement: object;
}

interface PluginRemoveScriptElement {
    removeScriptElement: object;
}

type PluginConfig =
    | PluginCleanupAttrs
    | PluginRemoveDoctype
    | PluginRemoveXMLProcInst
    | PluginRemoveComments
    | PluginRemoveMetadata
    | PluginRemoveTitle
    | PluginRemoveDesc
    | PluginRemoveUselessDefs
    | PluginRemoveXMLNS
    | PluginRemoveEditorsNSData
    | PluginRemoveEmptyAttrs
    | PluginRemoveHiddenElems
    | PluginRemoveEmptyText
    | PluginRemoveEmptyContainers
    | PluginRemoveViewBox
    | PluginCleanupEnableBackground
    | PluginMinifyStyles
    | PluginConvertStyleToAttrs
    | PluginConvertColors
    | PluginConvertPathData
    | PluginConvertTransform
    | PluginRemoveUnknownsAndDefaults
    | PluginRemoveNonInheritableGroupAttrs
    | PluginRemoveUselessStrokeAndFill
    | PluginRemoveUnusedNS
    | PluginCleanupIDs
    | PluginCleanupNumericValues
    | PluginCleanupListOfValues
    | PluginMoveElemsAttrsToGroup
    | PluginMoveGroupAttrsToElems
    | PluginCollapseGroups
    | PluginRemoveRasterImages
    | PluginMergePaths
    | PluginConvertShapeToPath
    | PluginSortAttrs
    | PluginTransformsWithOnePath
    | PluginRemoveDimensions
    | PluginRemoveAttrs
    | PluginRemoveElementsByAttr
    | PluginAddClassesToSVGElement
    | PluginAddAttributesToSVGElement
    | PluginRemoveStyleElement
    | PluginRemoveScriptElement;

interface Options {
    datauri?: string;
    floatPrecision?: number;
    full?: boolean;
    plugins?: PluginConfig[];
}

declare class SVGO {
    constructor(options?: Options);
    optimize(code: string, callback: (result: any) => void): void;
}

export = SVGO;
