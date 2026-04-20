/**
 * The main parser for MJML.
 * This version doesn't contain any of the core components registered in the 'mjml' package.
 */
export default function mjml2html(
    input: string | MJMLJsonObject,
    options?: MJMLParsingOptions,
): Promise<MJMLParseResults>;

/**
 * Options passed as an object to the mjml2html function
 *
 * https://documentation.mjml.io/#inside-node-js
 */
export interface MJMLParsingOptions {
    /**
     * Default fonts imported in the HTML rendered by HTML
     * ie. { 'Open Sans': 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700' }
     *
     * default: @see https://github.com/mjmlio/mjml/blob/master/packages/mjml-core/src/index.js
     */
    fonts?: { [key: string]: string } | undefined;

    /**
     * Option to keep comments in the HTML output
     * default: true
     */
    keepComments?: boolean | undefined;

    /**
     * Beautify the HTML output using prettier (parser: 'html', printWidth: 240).
     * Mutually exclusive with minify — if minify is true, beautify is skipped.
     * Note: the CLI defaults this to true; the programmatic API defaults to false.
     * default: false
     */
    beautify?: boolean | undefined;

    /**
     * Minify the HTML output using htmlnano (with cssnano-preset-lite for CSS).
     * Takes priority over beautify when both are true.
     * default: false
     */
    minify?: boolean | undefined;

    /**
     * Options passed to htmlnano when minify is true.
     * The minifyCss field accepts false, true, 'lite', or a cssnano options object.
     * All htmlnano v3 options are accepted.
     */
    minifyOptions?: MJMLMinifyOptions | undefined;

    /**
     * How to validate your MJML
     *
     * skip: your document is rendered without going through validation
     * soft: your document is going through validation and is rendered, even if it has errors
     * strict: your document is going through validation and is not rendered if it has any error
     *
     * default: soft
     */
    validationLevel?: "strict" | "soft" | "skip" | undefined;

    /**
     * Full path of the specified file to use when resolving paths from mj-include components
     * default: '.'
     */
    filePath?: string | undefined;
    /**
     * The path or directory of the .mjmlconfig file
     * default: process.cwd()
     */
    mjmlConfigPath?: string | undefined;

    /**
     * Use the config attribute defined in the .mjmlconfig file.
     * The config passed into mjml2html overrides the .mjmlconfig.
     * default: false
     */
    useMjmlConfigOptions?: boolean | undefined;

    /**
     * optional setting when inlining css, see mjml-cli documentation for more info
     */
    juicePreserveTags?: { [index: string]: { start: string; end: string } } | undefined;
    juiceOptions?: any;

    /**
     * undocumented
     * a function returning html skeleton
     * default: see mjml-core/src/helpers/skeleton.js
     */
    skeleton?: string | (() => string) | undefined;

    actualPath?: string | undefined;
    /**
     * undocumented
     * ignore mj-include elements
     * default: false
     */
    ignoreIncludes?: any;
    /**
     * see mjml-parser-xml
     */
    preprocessors?: Array<((xml: string) => string)> | undefined;

    /**
     * Add media queries specific to printer when converting mjml into html. When enabling this option,
     * the html might not be compatible with all email clients anymore.
     */
    printerSupport?: boolean | undefined;
}

export interface MJMLMinifyOptions {
    collapseWhitespace?: boolean | undefined;
    /**
     * CSS minification options passed to cssnano-preset-lite.
     * Accepts false (disable), true/'lite' (use lite preset), or a cssnano options object.
     * @see https://cssnano.co/docs/presets
     */
    minifyCss?: boolean | "lite" | { preset?: any; plugins?: any[]; configFile?: string } | undefined;
    /** @deprecated use minifyCss instead */
    minifyCSS?: boolean | undefined;
    removeEmptyAttributes?: boolean | undefined;
    minifyJs?: boolean | undefined;
    removeComments?: false | "safe" | "all" | undefined;
}

export interface MJMLParseResults {
    html: string;
    json: MJMLJsonObject;
    errors: MJMLParseError[];
}

export interface MJMLParseError {
    line: number;
    message: string;
    tagName: string;
    formattedMessage: string;
}

export type MJMLJsonObject = MJMLJsonWithChildren | MJMLJsonWithContent | MJMLJsonSelfClosingTag;

export interface MJMLJsonWithChildren {
    tagName: string;
    attributes: Record<string, unknown>;
    children: MJMLJsonObject[];
}

export interface MJMLJsonWithContent {
    tagName: string;
    attributes: Record<string, unknown>;
    content: string;
}

export interface MJMLJsonSelfClosingTag {
    tagName: string;
    attributes: Record<string, unknown>;
}

/**
 * An map of elements to handling component available to be used in mjml
 */
export const components: { [componentName: string]: Component | undefined };

/**
 * Registers a component for use in mjml
 */
export function registerComponent(ComponentClass: typeof Component, options?: { registerDependencies?: boolean }): void;

export abstract class BodyComponent extends Component {
    constructor(initialData: unknown);

    getStyles(): {};

    /**
     * takes a style attribute and tries to parse it's value
     * ie. padding="1 2 3 4"
     * getShorthandAttrValue("padding","left") => 1
     */
    getShorthandAttrValue(attribute: any, direction: any): number;

    getShorthandBorderValue(direction: any): number;

    getBoxWidths(): {
        totalWidth: number;
        borders: number;
        paddings: number;
        box: number;
    };

    htmlAttributes(attributes: any): any;

    styles(styles: any): any;

    renderChildren(
        children?: [],
        options?: {
            props?: Component["props"] | undefined;
            renderer?: ((component: Component) => any) | undefined;
            attributes?: Record<string, string> | undefined;
            rawXML?: boolean | undefined;
        },
    ): string;
}

export abstract class HeadComponent extends Component {
    constructor(initialData: unknown);

    handlerChildren(): any;

    render(): string;
}

export abstract class Component {
    static getTagName(): any;

    static isRawElement(): boolean;

    static defaultAttributes: { [prop: string]: string | undefined };

    props: {
        children: any;
        /** is first child */
        first: boolean;
        index: number;
        /** is last child */
        last: boolean;
        /** number of sibling elements */
        sibling: number;
        nonRawSiblings: number;
    };
    attributes: Record<string, string>;
    context: any;

    constructor(initialData: unknown);

    getChildContext(): any;

    getAttribute(name: any): any;

    getContent(): any;

    /**
     * Use if you want the CSS to be registered once
     *
     * @returns string css style string
     */
    headStyle(breakpoint: number): string;

    /**
     * Use if you need custom styles for every instance of a component
     *
     * @returns string css style string
     */
    componentHeadStyle(breakpoint: number): string;

    /**
     * If you want to return mjml from a component, it needs to be processed first, ie.
     *
     * render() {
     *   return this.renderMJML('<mj-text>hello world</mj-text>');
     * }
     */
    renderMJML(mjml: string, options?: {}): string;

    /**
     * Expected to return an html string
     * @see renderMJML for returning an mjml string
     */
    abstract render(): string;
}

export function suffixCssClasses(classes: string, suffix: string): string;
