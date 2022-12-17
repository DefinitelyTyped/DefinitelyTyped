export interface Format {
    type: string;
    attributes?: Record<string, string> | undefined;
    unregisteredAttributes?: Record<string, string> | undefined;
    object?: boolean | undefined;
}

export interface Value {
    activeFormats?: readonly Format[] | undefined;
    end?: number | undefined;
    formats: ReadonlyArray<Format[] | undefined>;
    replacements: ReadonlyArray<Format[] | undefined>;
    start?: number | undefined;
    text: string;
}

/**
 * Create a `RichText` value from an `Element` tree (DOM), an HTML string or a
 * plain text string, with optionally a `Range` object to set the selection.
 *
 * @remarks
 * If called without any input, an empty value will be created.
 *
 * If `multilineTag` is provided, any content of direct children whose type matches
 * `multilineTag` will be separated by two newlines. The optional functions can
 * be used to filter out content.
 *
 * A value will have the following shape, which you are strongly encouraged not
 * to modify without the use of helper functions:
 *
 * ```js
 * {
 *   text: string,
 *   formats: Array,
 *   replacements: Array,
 *   ?start: number,
 *   ?end: number,
 * }
 * ```
 *
 * As you can see, text and formatting are separated. `text` holds the text,
 * including any replacement characters for objects and lines. `formats`,
 * `objects` and `lines` are all sparse arrays of the same length as `text`. It
 * holds information about the formatting at the relevant text indices. Finally
 * `start` and `end` state which text indices are selected. They are only
 * provided if a `Range` was given.
 */
export function create(args?: { text: string }): Value;
export function create(args?: { html: string }): Value; // tslint:disable-line:unified-signatures
export function create(args?: {
    element: Element;
    multilineTag?: keyof HTMLElementTagNameMap | undefined;
    multilineWrapperTags?: ReadonlyArray<keyof HTMLElementTagNameMap> | undefined;
    range?: Range | undefined;
}): Value; // tslint:disable-line:unified-signatures
