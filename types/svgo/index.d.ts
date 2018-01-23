// Type definitions for svgo 1.0
// Project: https://github.com/svg/svgo
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 Gilad Gray <https://github.com/giladgray>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

interface PluginCleanupAttrs {
    cleanupAttrs: boolean | object;
}

interface PluginRemoveDoctype {
    removeDoctype: boolean | object;
}

interface PluginRemoveXMLProcInst {
    removeXMLProcInst: boolean | object;
}

interface PluginRemoveComments {
    removeComments: boolean | object;
}

interface PluginRemoveMetadata {
    removeMetadata: boolean | object;
}

interface PluginRemoveTitle {
    removeTitle: boolean | object;
}

interface PluginRemoveDesc {
    removeDesc: boolean | object;
}

interface PluginRemoveUselessDefs {
    removeUselessDefs: boolean | object;
}

interface PluginRemoveXMLNS {
    removeXMLNS: boolean | object;
}

interface PluginRemoveEditorsNSData {
    removeEditorsNSData: boolean | object;
}

interface PluginRemoveEmptyAttrs {
    removeEmptyAttrs: boolean | object;
}

interface PluginRemoveHiddenElems {
    removeHiddenElems: boolean | object;
}

interface PluginRemoveEmptyText {
    removeEmptyText: boolean | object;
}

interface PluginRemoveEmptyContainers {
    removeEmptyContainers: boolean | object;
}

interface PluginRemoveViewBox {
    removeViewBox: boolean | object;
}

interface PluginCleanupEnableBackground {
    cleanupEnableBackground: boolean | object;
}

interface PluginMinifyStyles {
    minifyStyles: boolean | object;
}

interface PluginConvertStyleToAttrs {
    convertStyleToAttrs: boolean | object;
}

interface PluginConvertColors {
    convertColors: boolean | object;
}

interface PluginConvertPathData {
    convertPathData: boolean | object;
}

interface PluginConvertTransform {
    convertTransform: boolean | object;
}

interface PluginRemoveUnknownsAndDefaults {
    removeUnknownsAndDefaults: boolean | object;
}

interface PluginRemoveNonInheritableGroupAttrs {
    removeNonInheritableGroupAttrs: boolean | object;
}

interface PluginRemoveUselessStrokeAndFill {
    removeUselessStrokeAndFill: boolean | object;
}

interface PluginRemoveUnusedNS {
    removeUnusedNS: boolean | object;
}

interface PluginCleanupIDs {
    cleanupIDs: boolean | object;
}

interface PluginCleanupNumericValues {
    cleanupNumericValues: boolean | object;
}

interface PluginCleanupListOfValues {
    cleanupListOfValues: boolean | object;
}

interface PluginMoveElemsAttrsToGroup {
    moveElemsAttrsToGroup: boolean | object;
}

interface PluginMoveGroupAttrsToElems {
    moveGroupAttrsToElems: boolean | object;
}

interface PluginCollapseGroups {
    collapseGroups: boolean | object;
}

interface PluginRemoveRasterImages {
    removeRasterImages: boolean | object;
}

interface PluginMergePaths {
    mergePaths: boolean | object;
}

interface PluginConvertShapeToPath {
    convertShapeToPath: boolean | object;
}

interface PluginSortAttrs {
    sortAttrs: boolean | object;
}

interface PluginTransformsWithOnePath {
    transformsWithOnePath: boolean | object;
}

interface PluginRemoveDimensions {
    removeDimensions: boolean | object;
}

interface PluginRemoveAttrs {
    removeAttrs: boolean | object;
}

interface PluginRemoveElementsByAttr {
    removeElementsByAttr: boolean | object;
}

interface PluginAddClassesToSVGElement {
    addClassesToSVGElement: boolean | object;
}

interface PluginAddAttributesToSVGElement {
    addAttributesToSVGElement: boolean | object;
}

interface PluginRemoveStyleElement {
    removeStyleElement: boolean | object;
}

interface PluginRemoveScriptElement {
    removeScriptElement: boolean | object;
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

interface Js2SvgOptions {
    /** @default '<!DOCTYPE' */
    doctypeStart?: string;
    /** @default '>' */
    doctypeEnd?: string;
    /** @default '<?' */
    procInstStart?: string;
    /** @default '?>' */
    procInstEnd?: string;
    /** @default '<' */
    tagOpenStart?: string;
    /** @default '>' */
    tagOpenEnd?: string;
    /** @default '</' */
    tagCloseStart?: string;
    /** @default '>' */
    tagCloseEnd?: string;
    /** @default '<' */
    tagShortStart?: string;
    /** @default '/>' */
    tagShortEnd?: string;
    /** @default '="' */
    attrStart?: string;
    /** @default '"' */
    attrEnd?: string;
    /** @default '<!--' */
    commentStart?: string;
    /** @default '-->' */
    commentEnd?: string;
    /** @default '<![CDATA[' */
    cdataStart?: string;
    /** @default ']]>' */
    cdataEnd?: string;
    /** @default '' */
    textStart?: string;
    /** @default '' */
    textEnd?: string;
    /** @default 4 */
    indent?: number;
    /** @default /[&'"<>]/g */
    regEntities?: RegExp;
    /** @default /[&"<>]/g */
    regValEntities?: RegExp;
    /** @default encodeEntity */
    encodeEntity?: (char?: string) => string;
    /** @default false */
    pretty?: boolean;
    /** @default true */
    useShortTags?: boolean;
}

interface Svg2JsOptions {
    /** @default true */
    strict?: boolean;
    /** @default false */
    trim?: boolean;
    /** @default true */
    normalize?: boolean;
    /** @default true */
    lowercase?: boolean;
    /** @default true */
    xmlns?: boolean;
    /** @default true */
    position?: boolean;
}

interface Options {
    /** Output as Data URI string. */
    datauri?: "base64" | "enc" | "unenc";

    /** Precision of floating point numbers. Will be passed to each plugin that suppors this param. */
    floatPrecision?: number;

    /** Use full set of plugins. */
    full?: boolean;

    /** Options for rendering optimized SVG from AST. */
    js2svg?: Js2SvgOptions;

    /**
     * Individual plugin configurations.
     * For specific options, see plugin source in https://github.com/svg/svgo/tree/master/plugins.
     */
    plugins?: PluginConfig[];

    /** Options for parsing original SVG into AST. */
    svg2js?: Svg2JsOptions;
}

interface SvgInfo {
    path?: string;
}

interface OptimizedSvg {
    data: string;
    info: object;
}

declare class SVGO {
    constructor(options?: Options);
    optimize(svgString: string, info: SvgInfo): Promise<OptimizedSvg>;
}

export = SVGO;
