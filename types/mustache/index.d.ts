// Type definitions for Mustache 4.1.0
// Project: https://github.com/janl/mustache.js
// Definitions by: Mark Ashley Bell <https://github.com/markashleybell>,
//                 Manuel Thalmann <https://github.com/manuth>,
//                 Phillip Johnsen <https://github.com/phillipj>
//                 Steve Dignam <https://github.com/sbdchd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

/**
 * Provides the functionality to render templates with `{{mustaches}}`.
 */
interface MustacheStatic {
    /**
     * The name of the module.
     */
    readonly name: string;

    /**
     * The version of the module.
     */
    readonly version: string;

    /**
     * The default opening and closing tags used while parsing the templates.
     *
     * Different default tags can be overridden by setting this field. They will have effect on all subsequent
     * calls to `.render()` or `.parse()`, unless custom tags are given as arguments to those functions.
     *
     * Default value is `[ "{{", "}}" ]`.
     */
    tags: OpeningAndClosingTags;

    /**
     * A simple string scanner that is used by the template parser to find tokens in template strings.
     */
    Scanner: typeof MustacheScanner;

    /**
     * Represents a rendering context by wrapping a view object and maintaining a reference to the parent context.
     */
    Context: typeof MustacheContext;

    /**
     * A Writer knows how to take a stream of tokens and render them to a `string`, given a context.
     *
     * It also maintains a cache of templates to avoid the need to parse the same template twice.
     */
    Writer: typeof MustacheWriter;

    /**
     * HTML escaping by default, can be overriden by setting Mustache.escape explicitly or providing the `options`
     * argument with an `escape` function when invoking Mustache.render().
     *
     * Escaping can be avoided when needed by using `{{{ value }}}` or `{{& value }}` in templates.
     *
     * @param value
     * The value to escape into a string.
     */
    escape: EscapeFunction;

    /**
     * Clears all cached templates in this writer.
     */
    clearCache(): void;

    /**
     * Customise the template caching behaviour by either:
     *
     * disable it completely by setting it to `undefined`
     *
     * -- or --
     *
     * provide a custom cache strategy that satisfies the `TemplateCache` interface
     */
    templateCache: TemplateCache | undefined;

    /**
     * Parses and caches the given template in the default writer and returns the array of tokens it contains.
     *
     * Doing this ahead of time avoids the need to parse templates on the fly as they are rendered.
     *
     * @param template
     * The template to parse.
     *
     * @param tags
     * The tags to use.
     */
    parse(template: string, tags?: OpeningAndClosingTags): TemplateSpans;

    /**
     * Renders the `template` with the given `view` and `partials` using the default writer.
     *
     * @param template
     * The template to render.
     *
     * @param view
     * The view to render the template with.
     *
     * @param partials
     * Either an object that contains the names and templates of partials that are used in a template
     *
     * -- or --
     *
     * A function that is used to load partial template on the fly that takes a single argument: the name of the partial.
     *
     * @param tagsOrOptions
     * The delimeter tags to use or options overriding global defaults.
     */
    render(
        template: string,
        view: any | MustacheContext,
        partials?: PartialsOrLookupFn,
        tagsOrOptions?: OpeningAndClosingTags | RenderOptions,
    ): string;
}

/**
 * A simple string scanner that is used by the template parser to find tokens in template strings.
 */
declare class MustacheScanner {
    string: string;
    tail: string;
    pos: number;

    /**
     * Initializes a new instance of the `MustacheScanner` class.
     */
    constructor(string: string);

    /**
     * Returns `true` if the tail is empty (end of string).
     */
    eos(): boolean;

    /**
     * Tries to match the given regular expression at the current position.
     *
     * @param re
     * The regex-pattern to match.
     *
     * @returns
     * The matched text if it can match, the empty string otherwise.
     */
    scan(re: RegExp): string;

    /**
     * Skips all text until the given regular expression can be matched.
     *
     * @param re
     * The regex-pattern to match.
     *
     * @returns
     * Returns the skipped string, which is the entire tail if no match can be made.
     */
    scanUntil(re: RegExp): string;
}

/**
 * Represents a rendering context by wrapping a view object and maintaining a reference to the parent context.
 */
declare class MustacheContext {
    view: any;
    parent: MustacheContext | undefined;

    /**
     * Initializes a new instance of the `MustacheContext` class.
     */
    constructor(view: any, parentContext?: MustacheContext);

    /**
     * Creates a new context using the given view with this context as the parent.
     *
     * @param view
     * The view to create the new context with.
     */
    push(view: any): MustacheContext;

    /**
     * Returns the value of the given name in this context, traversing up the context hierarchy if the value is absent in this context's view.
     *
     * @param name
     * The name to look up.
     */
    lookup(name: string): any;
}

/**
 * A Writer knows how to take a stream of tokens and render them to a `string`, given a context.
 *
 * It also maintains a cache of templates to avoid the need to parse the same template twice.
 */
declare class MustacheWriter {
    /**
     * Initializes a new instance of the `MustacheWriter` class.
     */
    constructor();

    /**
     * Clears all cached templates in this writer.
     */
    clearCache(): void;

    /**
     * Parses and caches the given `template` and returns the array of tokens that is generated from the parse.
     *
     * @param template
     * The template to parse.
     *
     * @param tags
     * The tags to use.
     */
    parse(template: string, tags?: OpeningAndClosingTags): any;

    /**
     * High-level method that is used to render the given `template` with the given `view`.
     *
     * @param template
     * The template to render.
     *
     * @param view
     * The view to render the template with.
     *
     * @param partials
     * Either an object that contains the names and templates of partials that are used in a template
     *
     * -- or --
     *
     * A function that is used to load partial template on the fly that takes a single argument: the name of the partial.
     *
     * @param tags
     * The tags to use.
     */
    render(
        template: string,
        view: any | MustacheContext,
        partials?: PartialsOrLookupFn,
        config?: OpeningAndClosingTags | RenderOptions,
    ): string;

    /**
     * Low-level method that renders the given array of `tokens` using the given `context` and `partials`.
     *
     * @param tokens
     * The tokens to render.
     *
     * @param context
     * The context to use for rendering the tokens.
     *
     * @param partials
     * The partials to use for rendering the tokens.
     *
     * @param originalTemplate
     * An object used to extract the portion of the original template that was contained in a higher-order section.
     *
     * If the template doesn't use higher-order sections, this argument may be omitted.
     */
    renderTokens(
        tokens: string[][],
        context: MustacheContext,
        partials?: PartialsOrLookupFn,
        originalTemplate?: string,
        config?: RenderOptions,
    ): string;

    /**
     * Renders a section block.
     *
     * @param token
     * The token to render.
     *
     * @param context
     * The context to use for rendering the token.
     *
     * @param partials
     * The partials to use for rendering the token.
     *
     * @param originalTemplate
     * An object used to extract the portion of the original template that was contained in a higher-order section.
     */
    renderSection(
        token: string[],
        context: MustacheContext,
        partials?: PartialsOrLookupFn,
        originalTemplate?: string,
        config?: RenderOptions,
    ): string;

    /**
     * Renders an inverted section block.
     *
     * @param token
     * The token to render.
     *
     * @param context
     * The context to use for rendering the token.
     *
     * @param partials
     * The partials to use for rendering the token.
     *
     * @param originalTemplate
     * An object used to extract the portion of the original template that was contained in a higher-order section.
     */
    renderInverted(
        token: string[],
        context: MustacheContext,
        partials?: PartialsOrLookupFn,
        originalTemplate?: string,
        config?: RenderOptions,
    ): string;

    /**
     * Adds indentation to each line of the given partial.
     *
     * @param partial
     * The partial to indent.
     *
     * @param indentation
     * String containing a combination of spaces and tabs to use as indentation.
     *
     * @param lineHasNonSpace
     * Whether to indent lines that are empty.
     */
    indentPartial(partial: string, indentation: string, lineHasNonSpace: boolean): string;

    /**
     * Renders a partial.
     *
     * @param token
     * The token to render.
     *
     * @param context
     * The context to use for rendering the token.
     *
     * @param partials
     * The partials to use for rendering the token.
     *
     * @param tags
     * The tags to use.
     */
    renderPartial(
        token: string[],
        context: MustacheContext,
        partials?: PartialsOrLookupFn,
        config?: OpeningAndClosingTags | RenderOptions,
    ): string;

    /**
     * Renders an unescaped value.
     *
     * @param token
     * The token to render.
     *
     * @param context
     * The context to use for rendering the token.
     */
    unescapedValue(token: string[], context: MustacheContext): string;

    /**
     * Renders an escaped value.
     *
     * @param token
     * The token to render.
     *
     * @param context
     * The context to use for rendering the token.
     */
    escapedValue(
        token: string[],
        context: MustacheContext,
        config?: RenderOptions,
    ): string;

    /**
     * Renders a raw token.
     *
     * @param token
     * The token to render.
     */
    rawValue(token: string[]): string;
}

type RAW_VALUE = 'text';
type ESCAPED_VALUE = 'name';
type UNESCAPED_VALUE = '&';
type SECTION = '#';
type INVERTED = '^';
type COMMENT = '!';
type PARTIAL = '>';
type EQUAL = '=';

type TemplateSpanType = RAW_VALUE | ESCAPED_VALUE | SECTION | UNESCAPED_VALUE | INVERTED | COMMENT | PARTIAL | EQUAL;

type TemplateSpans = Array<
    | [TemplateSpanType, string, number, number]
    | [TemplateSpanType, string, number, number, TemplateSpans, number]
    | [TemplateSpanType, string, number, number, string, number, boolean]
>;

/**
 * Function responsible for escaping values from the view into the rendered output when templates
 * has `{{ value }}` in them.
 */
type EscapeFunction = (value: any) => string;

/**
 * An array of two strings, representing the opening and closing tags respectively, to be used in the templates being rendered.
 */
type OpeningAndClosingTags = [string, string];

/**
 * Whenever partials are provided, it can either be an object that contains the names and templates of partials that are used in tempaltes
 *
 * -- or --
 *
 * A function that is used to load partial template on the fly that takes a single argument: the name of the partial.
 */
type PartialsOrLookupFn = Record<string, string> | PartialLookupFn;
type PartialLookupFn = (partialName: string) => string | undefined;

interface RenderOptions {
    escape?: EscapeFunction | undefined;
    tags?: OpeningAndClosingTags | undefined;
}

interface TemplateCache {
    set(cacheKey: string, value: string): void;
    get(cacheKey: string): string | undefined;
    clear(): void;
}

/**
 * Provides the functionality to render templates with `{{mustaches}}`.
 */
declare var Mustache: MustacheStatic;
export = Mustache;
export as namespace Mustache;
