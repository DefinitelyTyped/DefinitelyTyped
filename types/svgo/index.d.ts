// Type definitions for svgo 2.3
// Project: https://github.com/svg/svgo
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 Gilad Gray <https://github.com/giladgray>
//                 Aankhen <https://github.com/Aankhen>
//                 Jan Karres <https://github.com/jankarres>
//                 Gavin Gregory <https://github.com/gavingregory>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Remco Haszing <https://github.com/remcohaszing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface DefaultPlugin<N extends string, P = never> {
    active?: boolean;
    name: N;
    params?: P;
}

/**
 * adds attributes to an outer <svg> element
 */
export type AddAttributesToSVGElementPlugin = DefaultPlugin<'addAttributesToSVGElement'>;

/**
 * adds classnames to an outer <svg> element
 */
export type AddClassesToSVGElementPlugin = DefaultPlugin<'addClassesToSVGElement'>;

/**
 * cleanups attributes from newlines, trailing and repeating spaces
 */
export type CleanupAttrsPlugin = DefaultPlugin<
    'cleanupAttrs',
    {
        /** @default true */
        newlines?: boolean;
        /** @default true */
        trim?: boolean;
        /** @default true */
        spaces?: boolean;
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
        remove?: boolean;
        /** @default true */
        minify?: boolean;
        /** @default '' */
        prefix?: string;
        /** @default [] */
        preserve?: any[];
        /** @default [] */
        preservePrefixes?: any[];
        /** @default false */
        force?: boolean;
    }
>;

/**
 * rounds list of values to the fixed precision
 */
export type CleanupListOfValuesPlugin = DefaultPlugin<
    'cleanupListOfValues',
    {
        /** @default 3 */
        floatPrecision?: number;
        /** @default true */
        leadingZero?: boolean;
        /** @default true */
        defaultPx?: boolean;
        /** @default true */
        convertToPx?: boolean;
    }
>;

/**
 * rounds numeric values to the fixed precision, removes default ‘px’ units
 */
export type CleanupNumericValuesPlugin = DefaultPlugin<
    'cleanupNumericValues',
    {
        /** @default 3 */
        floatPrecision?: number;
        /** @default true */
        leadingZero?: boolean;
        /** @default true */
        defaultPx?: boolean;
        /** @default true */
        convertToPx?: boolean;
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
        currentColor?: boolean;
        /** @default true */
        names2hex?: boolean;
        /** @default true */
        rgb2hex?: boolean;
        /** @default true */
        shorthex?: boolean;
        /** @default true */
        shortname?: boolean;
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
        applyTransforms?: boolean;
        /** @default true */
        applyTransformsStroked?: boolean;
        makeArcs?: {
            /** @default 2.5 */
            threshold?: number;
            /** @default 0.5 */
            tolerance?: number;
        };
        /** @default true */
        straightCurves?: boolean;
        /** @default true */
        lineShorthands?: boolean;
        /** @default true */
        curveSmoothShorthands?: boolean;
        /** @default 3 */
        floatPrecision?: number;
        /** @default 5 */
        transformPrecision?: number;
        /** @default true */
        removeUseless?: boolean;
        /** @default true */
        collapseRepeated?: boolean;
        /** @default true */
        utilizeAbsolute?: boolean;
        /** @default true */
        leadingZero?: boolean;
        /** @default true */
        negativeExtraSpace?: boolean;
        /** @default false */
        noSpaceAfterFlags?: boolean;
        /** @default false */
        forceAbsolutePath?: boolean;
    }
>;

/**
 * converts basic shapes to more compact path form
 */
export type ConvertShapeToPathPlugin = DefaultPlugin<
    'convertShapeToPath',
    {
        /** @default false */
        convertArcs?: boolean;
    }
>;

/**
 * converts style to attributes
 */
export type ConvertStyleToAttrsPlugin = DefaultPlugin<
    'convertStyleToAttrs',
    {
        /** @default false */
        keepImportant?: boolean;
    }
>;

/**
 * collapses multiple transformations and optimizes it
 */
export type ConvertTransformPlugin = DefaultPlugin<
    'convertTransform',
    {
        /** @default true */
        convertToShorts?: boolean;
        /** @default 3 */
        floatPrecision?: number;
        /** @default 5 */
        transformPrecision?: number;
        /** @default true */
        matrixToTransform?: boolean;
        /** @default true */
        shortTranslate?: boolean;
        /** @default true */
        shortScale?: boolean;
        /** @default true */
        shortRotate?: boolean;
        /** @default true */
        removeUseless?: boolean;
        /** @default true */
        collapseIntoOne?: boolean;
        /** @default true */
        leadingZero?: boolean;
        /** @default false */
        negativeExtraSpace?: boolean;
    }
>;

/**
 * inline styles (additional options)
 */
export type InlineStylesPlugin = DefaultPlugin<
    'inlineStyles',
    {
        /** @default true */
        onlyMatchedOnce?: boolean;
        /** @default true */
        removeMatchedSelectors?: boolean;
        /** @default ['', 'screen'] */
        useMqs?: string[];
        /** @default [''] */
        usePseudos?: string[];
    }
>;

/**
 * merges multiple paths in one if possible
 */
export type MergePathsPlugin = DefaultPlugin<
    'mergePaths',
    {
        /** @default true */
        collapseRepeated?: boolean;
        /** @default false */
        force?: boolean;
        /** @default true */
        leadingZero?: boolean;
        /** @default true */
        negativeExtraSpace?: boolean;
        /** @default false */
        noSpaceAfterFlags?: boolean;
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
            force?: boolean;
            /** @default true */
            ids?: boolean;
            /** @default true */
            classes?: boolean;
            /** @default true */
            tags?: boolean;
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

/**
 * prefix IDs
 */
export type PrefixIdsPlugin = DefaultPlugin<
    'prefixIds',
    {
        /** @default '__' */
        delim?: string;
        /** @default true */
        prefixIds?: boolean;
        /** @default true */
        prefixClassNames?: boolean;
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
        elemSeparator?: string;
        /** @default false */
        preserveCurrentColor?: boolean;
        /** @default [] */
        attrs?: any[];
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
        removeAny?: boolean;
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
        additionalNamespaces?: any[];
    }
>;

/**
 * removes arbitrary elements by ID or className (disabled by default)
 */
export type RemoveElementsByAttrPlugin = DefaultPlugin<
    'removeElementsByAttr',
    {
        /** @default [] */
        id?: any[];
        /** @default [] */
        class?: any[];
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
        text?: boolean;
        /** @default true */
        tspan?: boolean;
        /** @default true */
        tref?: boolean;
    }
>;

/**
 * removes hidden elements (zero sized, with absent attributes)
 */
export type RemoveHiddenElemsPlugin = DefaultPlugin<
    'removeHiddenElems',
    {
        /** @default true */
        isHidden?: boolean;
        /** @default true */
        displayNone?: boolean;
        /** @default true */
        opacity0?: boolean;
        /** @default true */
        circleR0?: boolean;
        /** @default true */
        ellipseRX0?: boolean;
        /** @default true */
        ellipseRY0?: boolean;
        /** @default true */
        rectWidth0?: boolean;
        /** @default true */
        rectHeight0?: boolean;
        /** @default true */
        patternWidth0?: boolean;
        /** @default true */
        patternHeight0?: boolean;
        /** @default true */
        imageWidth0?: boolean;
        /** @default true */
        imageHeight0?: boolean;
        /** @default true */
        pathEmptyD?: boolean;
        /** @default true */
        polylineEmptyPoints?: boolean;
        /** @default true */
        polygonEmptyPoints?: boolean;
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
        unknownContent?: boolean;
        /** @default true */
        unknownAttrs?: boolean;
        /** @default true */
        defaultAttrs?: boolean;
        /** @default true */
        uselessOverrides?: boolean;
        /** @default true */
        keepDataAttrs?: boolean;
        /** @default true */
        keepAriaAttrs?: boolean;
        /** @default false */
        keepRoleAttr?: boolean;
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
        stroke?: boolean;
        /** @default true */
        fill?: boolean;
        /** @default false */
        removeNone?: boolean;
        /** @default false */
        hasStyleOrScript?: boolean;
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
 * Finds <path> elements with the same d, fill, and stroke, and converts them to <use> elements referencing a single <path> def.
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
        order?: string[];
    }
>;

/**
 * Sorts children of <defs> to improve compression
 */
export type SortDefsChildrenPlugin = DefaultPlugin<'sortDefsChildren'>;

export type DefaultPlugins =
    | AddAttributesToSVGElementPlugin
    | AddClassesToSVGElementPlugin
    | CleanupAttrsPlugin
    | CleanupEnableBackgroundPlugin
    | CleanupIDsPlugin
    | CleanupListOfValuesPlugin
    | CleanupNumericValuesPlugin
    | CollapseGroupsPlugin
    | ConvertColorsPlugin
    | ConvertEllipseToCirclePlugin
    | ConvertPathDataPlugin
    | ConvertShapeToPathPlugin
    | ConvertStyleToAttrsPlugin
    | ConvertTransformPlugin
    | InlineStylesPlugin
    | MergePathsPlugin
    | MergeStylesPlugin
    | MinifyStylesPlugin
    | MoveElemsAttrsToGroupPlugin
    | MoveGroupAttrsToElemsPlugin
    | PrefixIdsPlugin
    | RemoveAttributesBySelectorPlugin
    | RemoveAttrsPlugin
    | RemoveAttrsPlugin
    | RemoveCommentsPlugin
    | RemoveDescPlugin
    | RemoveDimensionsPlugin
    | RemoveDoctypePlugin
    | RemoveEditorsNSDataPlugin
    | RemoveElementsByAttrPlugin
    | RemoveEmptyAttrsPlugin
    | RemoveEmptyContainersPlugin
    | RemoveEmptyTextPlugin
    | RemoveHiddenElemsPlugin
    | RemoveMetadataPlugin
    | RemoveNonInheritableGroupAttrsPlugin
    | RemoveOffCanvasPathsPlugin
    | RemoveRasterImagesPlugin
    | RemoveScriptElementPlugin
    | RemoveStyleElementPlugin
    | RemoveTitlePlugin
    | RemoveUnknownsAndDefaultsPlugin
    | RemoveUnusedNSPlugin
    | RemoveUselessDefsPlugin
    | RemoveUselessStrokeAndFillPlugin
    | RemoveViewBoxPlugin
    | RemoveXMLNSPlugin
    | RemoveXMLProcInstPlugin
    | ReusePathsPlugin
    | SortAttrsPlugin
    | SortDefsChildrenPlugin;

export interface CustomPlugin<P extends object = never> {
    name: string;
    type: 'perItem' | 'perItemReverse' | 'full';
    params?: P;
    fn: (ast: any, params: P, info: any) => any;
}

export interface OptimizedSvg {
    data: string;
    info: {
        width: string;
        height: string;
    };
    path?: string;
}

export type Plugin = DefaultPlugins | DefaultPlugins['name'] | CustomPlugin;

export interface Js2SvgOptions {
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

export interface Svg2JsOptions {
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

/**
 * If plugins field is specified default list is fully overrided. To extend default list use extendDefaultPlugins
 * utility.
 *
 * To disable one of default plugins use active field.
 */
export function extendDefaultPlugins(plugins: Plugin[]): Plugin[];

export interface OptimizeOptions {
    /** Output as Data URI string. */
    datauri?: 'base64' | 'enc' | 'unenc';

    /** Precision of floating point numbers. Will be passed to each plugin that suppors this param. */
    floatPrecision?: number;

    /** Use full set of plugins. */
    full?: boolean;

    path?: string;

    /** Pass over SVGs multiple times to ensure all optimizations are applied */
    multipass?: boolean;

    /** Options for rendering optimized SVG from AST. */
    js2svg?: Js2SvgOptions;

    /**
     * Individual plugin configurations.
     * For specific options, see plugin source in https://github.com/svg/svgo/tree/master/plugins.
     */
    plugins?: Plugin[];

    /** Options for parsing original SVG into AST. */
    svg2js?: Svg2JsOptions;
}

/* The core of SVGO is optimize function. */
export function optimize(svgString: string, options?: OptimizeOptions): OptimizedSvg;

/**
 * If you write a tool on top of svgo you might need a way to load svgo config.
 *
 * You can also specify relative or absolute path and customize current working directory.
 */
export function loadConfig(configFile: string, cwd?: string): Promise<OptimizeOptions>;
