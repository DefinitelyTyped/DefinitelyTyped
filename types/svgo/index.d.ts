// Type definitions for svgo 2.6
// Project: https://github.com/svg/svgo
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 Gilad Gray <https://github.com/giladgray>
//                 Aankhen <https://github.com/Aankhen>
//                 Jan Karres <https://github.com/jankarres>
//                 Gavin Gregory <https://github.com/gavingregory>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Remco Haszing <https://github.com/remcohaszing>
//                 Petr Zahradník <https://github.com/petrzjunior>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

export interface DefaultPlugin<N extends string, P = never> {
    active?: boolean | undefined;
    name: N;
    params?: P | undefined;
}

/**
 * adds attributes to an outer <svg> element
 */
export type AddAttributesToSVGElementPlugin = DefaultPlugin<
    'addAttributesToSVGElement',
    { attribute: string | Record<string, null | string> } | { attributes: Array<string | Record<string, null | string>> }
>;

/**
 * adds classnames to an outer <svg> element
 */
export type AddClassesToSVGElementPlugin = DefaultPlugin<
    'addClassesToSVGElement',
    { className: string; classNames?: never; } | { className?: never; classNames: string[]; }
>;

/**
 * cleanups attributes from newlines, trailing and repeating spaces
 */
export type CleanupAttrsPlugin = DefaultPlugin<
    'cleanupAttrs',
    {
        /** @default true */
        newlines?: boolean | undefined;
        /** @default true */
        trim?: boolean | undefined;
        /** @default true */
        spaces?: boolean | undefined;
    }
>;

/**
 * remove or cleanup enable-background attribute when possible
 */
export type CleanupEnableBackgroundPlugin = DefaultPlugin<'cleanupEnableBackground'>;

/**
 * removes unused IDs and minifies used
 */
export type CleanupIDsPlugin = DefaultPlugin<
    'cleanupIDs',
    {
        /** @default true */
        remove?: boolean | undefined;
        /** @default true */
        minify?: boolean | undefined;
        /** @default '' */
        prefix?: string | undefined;
        /** @default [] */
        preserve?: any[] | undefined;
        /** @default [] */
        preservePrefixes?: any[] | undefined;
        /** @default false */
        force?: boolean | undefined;
    }
>;

/**
 * rounds list of values to the fixed precision
 */
export type CleanupListOfValuesPlugin = DefaultPlugin<
    'cleanupListOfValues',
    {
        /** @default 3 */
        floatPrecision?: number | undefined;
        /** @default true */
        leadingZero?: boolean | undefined;
        /** @default true */
        defaultPx?: boolean | undefined;
        /** @default true */
        convertToPx?: boolean | undefined;
    }
>;

/**
 * rounds numeric values to the fixed precision, removes default ‘px’ units
 */
export type CleanupNumericValuesPlugin = DefaultPlugin<
    'cleanupNumericValues',
    {
        /** @default 3 */
        floatPrecision?: number | undefined;
        /** @default true */
        leadingZero?: boolean | undefined;
        /** @default true */
        defaultPx?: boolean | undefined;
        /** @default true */
        convertToPx?: boolean | undefined;
    }
>;

/**
 * collapses useless groups
 */
export type CollapseGroupsPlugin = DefaultPlugin<'collapseGroups'>;

/**
 * converts colors: rgb() to #rrggbb and #rrggbb to #rgb
 */
export type ConvertColorsPlugin = DefaultPlugin<
    'convertColors',
    {
        /** @default false */
        currentColor?: boolean | undefined;
        /** @default true */
        names2hex?: boolean | undefined;
        /** @default true */
        rgb2hex?: boolean | undefined;
        /** @default true */
        shorthex?: boolean | undefined;
        /** @default true */
        shortname?: boolean | undefined;
    }
>;

/**
 * converts non-eccentric <ellipse>s to <circle>s
 */
export type ConvertEllipseToCirclePlugin = DefaultPlugin<'convertEllipseToCircle'>;

/**
 * optimizes path data: writes in shorter form, applies transformations
 */
export type ConvertPathDataPlugin = DefaultPlugin<
    'convertPathData',
    {
        /** @default true */
        applyTransforms?: boolean | undefined;
        /** @default true */
        applyTransformsStroked?: boolean | undefined;
        makeArcs?:
        | {
            /** @default 2.5 */
            threshold?: number | undefined;
            /** @default 0.5 */
            tolerance?: number | undefined;
        }
        | undefined;
        /** @default true */
        straightCurves?: boolean | undefined;
        /** @default true */
        lineShorthands?: boolean | undefined;
        /** @default true */
        curveSmoothShorthands?: boolean | undefined;
        /** @default 3 */
        floatPrecision?: number | undefined;
        /** @default 5 */
        transformPrecision?: number | undefined;
        /** @default true */
        removeUseless?: boolean | undefined;
        /** @default true */
        collapseRepeated?: boolean | undefined;
        /** @default true */
        utilizeAbsolute?: boolean | undefined;
        /** @default true */
        leadingZero?: boolean | undefined;
        /** @default true */
        negativeExtraSpace?: boolean | undefined;
        /** @default false */
        noSpaceAfterFlags?: boolean | undefined;
        /** @default false */
        forceAbsolutePath?: boolean | undefined;
    }
>;

/**
 * converts basic shapes to more compact path form
 */
export type ConvertShapeToPathPlugin = DefaultPlugin<
    'convertShapeToPath',
    {
        /** @default false */
        convertArcs?: boolean | undefined;
    }
>;

/**
 * converts style to attributes
 */
export type ConvertStyleToAttrsPlugin = DefaultPlugin<
    'convertStyleToAttrs',
    {
        /** @default false */
        keepImportant?: boolean | undefined;
    }
>;

/**
 * collapses multiple transformations and optimizes it
 */
export type ConvertTransformPlugin = DefaultPlugin<
    'convertTransform',
    {
        /** @default true */
        convertToShorts?: boolean | undefined;
        /** @default 3 */
        floatPrecision?: number | undefined;
        /** @default 5 */
        transformPrecision?: number | undefined;
        /** @default true */
        matrixToTransform?: boolean | undefined;
        /** @default true */
        shortTranslate?: boolean | undefined;
        /** @default true */
        shortScale?: boolean | undefined;
        /** @default true */
        shortRotate?: boolean | undefined;
        /** @default true */
        removeUseless?: boolean | undefined;
        /** @default true */
        collapseIntoOne?: boolean | undefined;
        /** @default true */
        leadingZero?: boolean | undefined;
        /** @default false */
        negativeExtraSpace?: boolean | undefined;
    }
>;

/**
 * inline styles (additional options)
 */
export type InlineStylesPlugin = DefaultPlugin<
    'inlineStyles',
    {
        /** @default true */
        onlyMatchedOnce?: boolean | undefined;
        /** @default true */
        removeMatchedSelectors?: boolean | undefined;
        /** @default ['', 'screen'] */
        useMqs?: string[] | undefined;
        /** @default [''] */
        usePseudos?: string[] | undefined;
    }
>;

/**
 * merges multiple paths in one if possible
 */
export type MergePathsPlugin = DefaultPlugin<
    'mergePaths',
    {
        /** @default true */
        collapseRepeated?: boolean | undefined;
        /** @default false */
        force?: boolean | undefined;
        /** @default true */
        leadingZero?: boolean | undefined;
        /** @default true */
        negativeExtraSpace?: boolean | undefined;
        /** @default false */
        noSpaceAfterFlags?: boolean | undefined;
    }
>;

/**
 * merge multiple style elements into one
 */
export type MergeStylesPlugin = DefaultPlugin<'mergeStyles'>;

/**
 * minifies styles and removes unused styles based on usage data
 */
export type MinifyStylesPlugin = DefaultPlugin<
    'minifyStyles',
    {
        usage: {
            /** @default false */
            force?: boolean | undefined;
            /** @default true */
            ids?: boolean | undefined;
            /** @default true */
            classes?: boolean | undefined;
            /** @default true */
            tags?: boolean | undefined;
        };
    }
>;

/**
 * moves elements attributes to the existing group wrapper
 */
export type MoveElemsAttrsToGroupPlugin = DefaultPlugin<'moveElemsAttrsToGroup'>;

/**
 * moves some group attributes to the content elements
 */
export type MoveGroupAttrsToElemsPlugin = DefaultPlugin<'moveGroupAttrsToElems'>;

/**
 * undefined
 */
export type PluginsPlugin = DefaultPlugin<'plugins'>;

export interface XastDoctype {
    type: 'doctype';
    name: string;
    data: {
        doctype: string;
    };
}

export interface XastInstruction {
    type: 'instruction';
    name: string;
    value: string;
}

export interface XastComment {
    type: 'comment';
    value: string;
}

export interface XastCdata {
    type: 'cdata';
    value: string;
}

export interface XastText {
    type: 'text';
    value: string;
}

export type XastChild =
    | XastDoctype
    | XastInstruction
    | XastComment
    | XastCdata
    | XastText
    | XastElement;

export interface XastElement {
    type: 'element';
    name: string;
    attributes: Record<string, string>;
    children: XastChild[];
}

export interface PluginInfo {
    path?: string;
    multipassCount: number;
}

/**
 * prefix IDs
 */
export type PrefixIdsPlugin = DefaultPlugin<
    'prefixIds',
    {
        prefix?: boolean | string | ((node: XastElement, info: PluginInfo) => string) | undefined;
        /** @default '__' */
        delim?: string | undefined;
        /** @default true */
        prefixIds?: boolean | undefined;
        /** @default true */
        prefixClassNames?: boolean | undefined;
    }
>;

/**
 * removes attributes of elements that match a css selector
 */
export type RemoveAttributesBySelectorPlugin = DefaultPlugin<'removeAttributesBySelector'>;

/**
 * removes specified attributes
 */
export type RemoveAttrsPlugin = DefaultPlugin<
    'removeAttrs',
    {
        /** @default ':' */
        elemSeparator?: string | undefined;
        /** @default false */
        preserveCurrentColor?: boolean | undefined;
        /** @default [] */
        attrs: string | string[];
    }
>;

/**
 * removes comments
 */
export type RemoveCommentsPlugin = DefaultPlugin<'removeComments'>;

/**
 * removes <desc>
 */
export type RemoveDescPlugin = DefaultPlugin<
    'removeDesc',
    {
        /** @default true */
        removeAny?: boolean | undefined;
    }
>;

/**
 * removes width and height in presence of viewBox (opposite to removeViewBox, disable it first)
 */
export type RemoveDimensionsPlugin = DefaultPlugin<'removeDimensions'>;

/**
 * removes doctype declaration
 */
export type RemoveDoctypePlugin = DefaultPlugin<'removeDoctype'>;

/**
 * removes editors namespaces, elements and attributes
 */
export type RemoveEditorsNSDataPlugin = DefaultPlugin<
    'removeEditorsNSData',
    {
        /** @default [] */
        additionalNamespaces?: any[] | undefined;
    }
>;

/**
 * removes arbitrary elements by ID or className (disabled by default)
 */
export type RemoveElementsByAttrPlugin = DefaultPlugin<
    'removeElementsByAttr',
    {
        /** @default [] */
        id?: any[] | undefined;
        /** @default [] */
        class?: any[] | undefined;
    }
>;

/**
 * removes empty attributes
 */
export type RemoveEmptyAttrsPlugin = DefaultPlugin<'removeEmptyAttrs'>;

/**
 * removes empty container elements
 */
export type RemoveEmptyContainersPlugin = DefaultPlugin<'removeEmptyContainers'>;

/**
 * removes empty <text> elements
 */
export type RemoveEmptyTextPlugin = DefaultPlugin<
    'removeEmptyText',
    {
        /** @default true */
        text?: boolean | undefined;
        /** @default true */
        tspan?: boolean | undefined;
        /** @default true */
        tref?: boolean | undefined;
    }
>;

/**
 * removes hidden elements (zero sized, with absent attributes)
 */
export type RemoveHiddenElemsPlugin = DefaultPlugin<
    'removeHiddenElems',
    {
        /** @default true */
        isHidden?: boolean | undefined;
        /** @default true */
        displayNone?: boolean | undefined;
        /** @default true */
        opacity0?: boolean | undefined;
        /** @default true */
        circleR0?: boolean | undefined;
        /** @default true */
        ellipseRX0?: boolean | undefined;
        /** @default true */
        ellipseRY0?: boolean | undefined;
        /** @default true */
        rectWidth0?: boolean | undefined;
        /** @default true */
        rectHeight0?: boolean | undefined;
        /** @default true */
        patternWidth0?: boolean | undefined;
        /** @default true */
        patternHeight0?: boolean | undefined;
        /** @default true */
        imageWidth0?: boolean | undefined;
        /** @default true */
        imageHeight0?: boolean | undefined;
        /** @default true */
        pathEmptyD?: boolean | undefined;
        /** @default true */
        polylineEmptyPoints?: boolean | undefined;
        /** @default true */
        polygonEmptyPoints?: boolean | undefined;
    }
>;

/**
 * removes <metadata>
 */
export type RemoveMetadataPlugin = DefaultPlugin<'removeMetadata'>;

/**
 * removes non-inheritable group’s presentational attributes
 */
export type RemoveNonInheritableGroupAttrsPlugin = DefaultPlugin<'removeNonInheritableGroupAttrs'>;

/**
 * removes elements that are drawn outside of the viewbox (disabled by default)
 */
export type RemoveOffCanvasPathsPlugin = DefaultPlugin<'removeOffCanvasPaths'>;

/**
 * removes raster images (disabled by default)
 */
export type RemoveRasterImagesPlugin = DefaultPlugin<'removeRasterImages'>;

/**
 * removes <script> elements (disabled by default)
 */
export type RemoveScriptElementPlugin = DefaultPlugin<'removeScriptElement'>;

/**
 * removes <style> element (disabled by default)
 */
export type RemoveStyleElementPlugin = DefaultPlugin<'removeStyleElement'>;

/**
 * removes <title>
 */
export type RemoveTitlePlugin = DefaultPlugin<'removeTitle'>;

/**
 * removes unknown elements content and attributes, removes attrs with default values
 */
export type RemoveUnknownsAndDefaultsPlugin = DefaultPlugin<
    'removeUnknownsAndDefaults',
    {
        /** @default true */
        unknownContent?: boolean | undefined;
        /** @default true */
        unknownAttrs?: boolean | undefined;
        /** @default true */
        defaultAttrs?: boolean | undefined;
        /** @default true */
        uselessOverrides?: boolean | undefined;
        /** @default true */
        keepDataAttrs?: boolean | undefined;
        /** @default true */
        keepAriaAttrs?: boolean | undefined;
        /** @default false */
        keepRoleAttr?: boolean | undefined;
    }
>;

/**
 * removes unused namespaces declaration
 */
export type RemoveUnusedNSPlugin = DefaultPlugin<'removeUnusedNS'>;

/**
 * removes elements in <defs> without id
 */
export type RemoveUselessDefsPlugin = DefaultPlugin<'removeUselessDefs'>;

/**
 * removes useless stroke and fill attributes
 */
export type RemoveUselessStrokeAndFillPlugin = DefaultPlugin<
    'removeUselessStrokeAndFill',
    {
        /** @default true */
        stroke?: boolean | undefined;
        /** @default true */
        fill?: boolean | undefined;
        /** @default false */
        removeNone?: boolean | undefined;
        /** @default false */
        hasStyleOrScript?: boolean | undefined;
    }
>;

/**
 * removes viewBox attribute when possible
 */
export type RemoveViewBoxPlugin = DefaultPlugin<'removeViewBox'>;

/**
 * removes xmlns attribute (for inline svg, disabled by default)
 */
export type RemoveXMLNSPlugin = DefaultPlugin<'removeXMLNS'>;

/**
 * removes XML processing instructions
 */
export type RemoveXMLProcInstPlugin = DefaultPlugin<'removeXMLProcInst'>;

/**
 * finds <path> elements with the same d, fill, and stroke, and converts them to <use> elements referencing a single <path> def.
 */
export type ReusePathsPlugin = DefaultPlugin<'reusePaths'>;

/**
 * sorts element attributes (disabled by default)
 */
export type SortAttrsPlugin = DefaultPlugin<
    'sortAttrs',
    {
        /**
         * @default ['id', 'width', 'height', 'x', 'x1', 'x2', 'y', 'y1', 'y2', 'cx', 'cy', 'r', 'fill', 'stroke', 'marker', 'd', 'points']
         */
        order?: string[] | undefined;
    }
>;

/**
 * sorts children of <defs> to improve compression
 */
export type SortDefsChildrenPlugin = DefaultPlugin<'sortDefsChildren'>;

export interface Preset<N extends string, P = never> {
    name: N;
    params?: P | undefined;
}

/**
 * plugins which are enabled in default preset
 */
export type DefaultPresetPlugins =
    | CleanupAttrsPlugin
    | CleanupEnableBackgroundPlugin
    | CleanupIDsPlugin
    | CleanupNumericValuesPlugin
    | CollapseGroupsPlugin
    | ConvertColorsPlugin
    | ConvertEllipseToCirclePlugin
    | ConvertPathDataPlugin
    | ConvertShapeToPathPlugin
    | ConvertTransformPlugin
    | InlineStylesPlugin
    | MergePathsPlugin
    | MergeStylesPlugin
    | MinifyStylesPlugin
    | MoveElemsAttrsToGroupPlugin
    | MoveGroupAttrsToElemsPlugin
    | RemoveCommentsPlugin
    | RemoveDescPlugin
    | RemoveDoctypePlugin
    | RemoveEditorsNSDataPlugin
    | RemoveEmptyAttrsPlugin
    | RemoveEmptyContainersPlugin
    | RemoveEmptyTextPlugin
    | RemoveHiddenElemsPlugin
    | RemoveMetadataPlugin
    | RemoveNonInheritableGroupAttrsPlugin
    | RemoveTitlePlugin
    | RemoveUnknownsAndDefaultsPlugin
    | RemoveUnusedNSPlugin
    | RemoveUselessDefsPlugin
    | RemoveUselessStrokeAndFillPlugin
    | RemoveViewBoxPlugin
    | RemoveXMLProcInstPlugin
    | SortDefsChildrenPlugin;

/**
 * default plugin preset, customize plugin options by overriding them
 */
export type PresetDefault = Preset<
    'preset-default',
    {
        floatPrecision?: number | undefined;
        overrides?: { [P in DefaultPresetPlugins['name']]?: false | DefaultPresetPlugins['params'] };
    }
>;

export type DefaultPlugins =
    | DefaultPresetPlugins
    | PresetDefault
    | AddAttributesToSVGElementPlugin
    | AddClassesToSVGElementPlugin
    | CleanupListOfValuesPlugin
    | ConvertStyleToAttrsPlugin
    | PrefixIdsPlugin
    | RemoveAttributesBySelectorPlugin
    | RemoveAttrsPlugin
    | RemoveDimensionsPlugin
    | RemoveElementsByAttrPlugin
    | RemoveOffCanvasPathsPlugin
    | RemoveRasterImagesPlugin
    | RemoveScriptElementPlugin
    | RemoveStyleElementPlugin
    | RemoveXMLNSPlugin
    | ReusePathsPlugin
    | SortAttrsPlugin;

export interface CustomPlugin<P extends object = never> {
    name: string;
    type: 'perItem' | 'perItemReverse' | 'full';
    params?: P | undefined;
    fn: (ast: any, params: P, info: any) => any;
}

export interface SvgoParserError extends Error {
    reason: string;
    line: number;
    column: number;
    source: string;
}

export interface OptimizedError {
    error: string;
    modernError: SvgoParserError;
}

export interface OptimizedSvg {
    data: string;
    info: {
        width: string;
        height: string;
    };
    path?: string | undefined;
    modernError: undefined;
    error: undefined;
}

export type Plugin = DefaultPlugins | DefaultPlugins['name'] | CustomPlugin;

export interface Js2SvgOptions {
    /** @default '<!DOCTYPE' */
    doctypeStart?: string | undefined;
    /** @default '>' */
    doctypeEnd?: string | undefined;
    /**
     * Allows to customize end of line characters which is usually resolved by os.EOL in node.
     */
    eol?: 'lf' | 'crlf' | undefined;
    /**
     * Ensures SVG output has a final newline which is required for some tools like git.
     */
    finalNewline?: boolean | undefined;
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

export interface Svg2JsOptions {
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

/**
 * If plugins field is specified default list is fully overrided. To extend default list use extendDefaultPlugins
 * utility.
 *
 * To disable one of default plugins use active field.
 *
 * @deprecated Use `preset-default` plugin instead
 */
export function extendDefaultPlugins(plugins: Plugin[]): Plugin[];

export interface OptimizeOptions {
    /** Output as Data URI string. */
    datauri?: 'base64' | 'enc' | 'unenc' | undefined;

    /** Precision of floating point numbers. Will be passed to each plugin that suppors this param. */
    floatPrecision?: number | undefined;

    /** Use full set of plugins. */
    full?: boolean | undefined;

    path?: string | undefined;

    /** Pass over SVGs multiple times to ensure all optimizations are applied */
    multipass?: boolean | undefined;

    /** Options for rendering optimized SVG from AST. */
    js2svg?: Js2SvgOptions | undefined;

    /**
     * Individual plugin configurations.
     * For specific options, see plugin source in https://github.com/svg/svgo/tree/master/plugins.
     */
    plugins?: Plugin[] | undefined;

    /** Options for parsing original SVG into AST. */
    svg2js?: Svg2JsOptions | undefined;
}

/* The core of SVGO is optimize function. */
export function optimize(svgString: string | Buffer, options?: OptimizeOptions): OptimizedSvg | OptimizedError;

/**
 * If you write a tool on top of svgo you might need a way to load svgo config.
 *
 * You can also specify relative or absolute path and customize current working directory.
 */
export function loadConfig(configFile: string, cwd?: string): Promise<OptimizeOptions>;
export function loadConfig(): Promise<OptimizeOptions | null>;
