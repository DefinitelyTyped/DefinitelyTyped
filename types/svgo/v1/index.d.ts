// Type definitions for svgo 1.3
// Project: https://github.com/svg/svgo
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 Gilad Gray <https://github.com/giladgray>
//                 Aankhen <https://github.com/Aankhen>
//                 Jan Karres <https://github.com/jankarres>
//                 Gavin Gregory <https://github.com/gavingregory>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

interface PluginCleanupAttrs {
    cleanupAttrs: boolean | object;
}

interface PluginInlineStyles {
    inlineStyles: boolean | object;
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

interface PluginConvertEllipseToCircle {
    /** convert ellipse with equal radius measures to circle */
    convertEllipseToCircle: boolean | object;
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

interface PluginPrefixIds {
    /** prefix IDs and classes with the SVG filename or an arbitrary string     */
    prefixIds: boolean | object;
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

interface PluginSortDefsChildren {
    /** sort children of <defs> in order to improve compression */
    sortDefsChildren: boolean | object;
}

interface PluginRemoveDimensions {
    removeDimensions: boolean | object;
}

interface PluginRemoveAttrs {
    removeAttrs: boolean | object;
}

interface PluginRemoveAttributesBySelector {
    removeAttributesBySelector: boolean | object;
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

interface PluginRemoveOffCanvasPaths {
    removeOffCanvasPaths: boolean | object;
}

interface PluginRemoveStyleElement {
    removeStyleElement: boolean | object;
}

interface PluginRemoveScriptElement {
    removeScriptElement: boolean | object;
}

interface PluginReusePaths {
    reusePaths: boolean | object;
}

interface SvgInfo {
    path?: string | undefined;
}

interface OptimizedSvg {
    data: string;
    info: {
        width: string;
        height: string;
    };
    path?: string | undefined;
}

declare class SVGO {
    static Config(config?: SVGO.Options): SVGO.Options;
    constructor(config?: SVGO.Options);
    optimize(svgString: string, info?: SvgInfo): Promise<OptimizedSvg>;
}

declare namespace SVGO {
    type PluginConfig =
        | PluginCleanupAttrs
        | PluginInlineStyles
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
        | PluginConvertEllipseToCircle
        | PluginConvertPathData
        | PluginConvertTransform
        | PluginRemoveUnknownsAndDefaults
        | PluginRemoveNonInheritableGroupAttrs
        | PluginRemoveUselessStrokeAndFill
        | PluginRemoveUnusedNS
        | PluginPrefixIds
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
        | PluginSortDefsChildren
        | PluginRemoveDimensions
        | PluginRemoveAttrs
        | PluginRemoveAttributesBySelector
        | PluginRemoveElementsByAttr
        | PluginAddClassesToSVGElement
        | PluginAddAttributesToSVGElement
        | PluginRemoveOffCanvasPaths
        | PluginRemoveStyleElement
        | PluginRemoveScriptElement
        | PluginReusePaths;

    interface Js2SvgOptions {
        /** @default '<!DOCTYPE' */
        doctypeStart?: string | undefined;
        /** @default '>' */
        doctypeEnd?: string | undefined;
        /** @default '<?' */
        procInstStart?: string | undefined;
        /** @default '?>' */
        procInstEnd?: string | undefined;
        /** @default '<' */
        tagOpenStart?: string | undefined;
        /** @default '>' */
        tagOpenEnd?: string | undefined;
        /** @default '</' */
        tagCloseStart?: string | undefined;
        /** @default '>' */
        tagCloseEnd?: string | undefined;
        /** @default '<' */
        tagShortStart?: string | undefined;
        /** @default '/>' */
        tagShortEnd?: string | undefined;
        /** @default '="' */
        attrStart?: string | undefined;
        /** @default '"' */
        attrEnd?: string | undefined;
        /** @default '<!--' */
        commentStart?: string | undefined;
        /** @default '-->' */
        commentEnd?: string | undefined;
        /** @default '<![CDATA[' */
        cdataStart?: string | undefined;
        /** @default ']]>' */
        cdataEnd?: string | undefined;
        /** @default '' */
        textStart?: string | undefined;
        /** @default '' */
        textEnd?: string | undefined;
        /** @default 4 */
        indent?: number | undefined;
        /** @default /[&'"<>]/g */
        regEntities?: RegExp | undefined;
        /** @default /[&"<>]/g */
        regValEntities?: RegExp | undefined;
        /** @default encodeEntity */
        encodeEntity?: ((char?: string) => string) | undefined;
        /** @default false */
        pretty?: boolean | undefined;
        /** @default true */
        useShortTags?: boolean | undefined;
    }

    interface Svg2JsOptions {
        /** @default true */
        strict?: boolean | undefined;
        /** @default false */
        trim?: boolean | undefined;
        /** @default true */
        normalize?: boolean | undefined;
        /** @default true */
        lowercase?: boolean | undefined;
        /** @default true */
        xmlns?: boolean | undefined;
        /** @default true */
        position?: boolean | undefined;
    }

    interface Options {
        /** Output as Data URI string. */
        datauri?: 'base64' | 'enc' | 'unenc' | undefined;

        /** Precision of floating point numbers. Will be passed to each plugin that suppors this param. */
        floatPrecision?: number | undefined;

        /** Use full set of plugins. */
        full?: boolean | undefined;

        /** Pass over SVGs multiple times to ensure all optimizations are applied */
        multipass?: boolean | undefined;

        /** Options for rendering optimized SVG from AST. */
        js2svg?: Js2SvgOptions | undefined;

        /**
         * Individual plugin configurations.
         * For specific options, see plugin source in https://github.com/svg/svgo/tree/master/plugins.
         */
        plugins?: PluginConfig[] | undefined;

        /** Options for parsing original SVG into AST. */
        svg2js?: Svg2JsOptions | undefined;
    }
}

export = SVGO;
