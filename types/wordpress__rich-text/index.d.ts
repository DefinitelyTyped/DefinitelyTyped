import { dispatch, select, StoreDescriptor } from "@wordpress/data";
import { ComponentType } from "react";
import { create, Format, Value } from "./create";

export { create, Format, Value };
export * from "./component";

declare module "@wordpress/data" {
    function dispatch(key: "core/rich-text"): typeof import("./store/actions");
    function select(key: "core/rich-text"): typeof import("./store/selectors");
}

export interface RichTextStoreDescriptor extends StoreDescriptor {
    name: "core/rich-text";
}

// eslint-disable-next-line @definitelytyped/no-declare-current-package
declare module "@wordpress/rich-text" {
    const store: RichTextStoreDescriptor;
}

export interface FormatProps {
    value: Value;
    isActive: boolean;
    activeAttributes: Record<string, string>;
    onChange(value: Value): void;
}

export interface FormatConfiguration {
    tagName: keyof HTMLElementTagNameMap & string;
    className: string | null;
    title: string;
    keywords?: [string] | [string, string] | [string, string, string] | undefined;
    object?: boolean | undefined;
    /**
     * Maps react prop name to html attribute name.
     *
     * { className: 'class' } => <tag class={<className attr here>}></tag>
     */
    attributes?: Record<string, string> | undefined;
    edit: ComponentType<FormatProps>;
}

export interface NamedFormatConfiguration extends FormatConfiguration {
    name: string;
}

/**
 * Apply a format object to a Rich Text value from the given `startIndex` to the
 * given `endIndex`. Indices are retrieved from the selection if none are
 * provided.
 *
 * @param value - Value to modify.
 * @param format - Format to apply.
 * @param [startIndex] - Start index.
 * @param [endIndex] - End index.
 *
 * @returns A new `Value` with the format applied.
 */
export function applyFormat(value: Value, format: Format, startIndex?: number, endIndex?: number): Value;

/**
 * Combine all Rich Text values into one. This is similar to
 * `String.prototype.concat`.
 *
 * @param values - `Value`s to combine.
 *
 * @returns A new value combining all given records.
 */
export function concat(...values: readonly Value[]): Value;

/**
 * Gets the format object by type at the start of the selection. This can be
 * used to get e.g. the URL of a link format at the current selection, but also
 * to check if a format is active at the selection.
 *
 * @param value - `Value` to inspect.
 * @param formatType - `Format` type to look for.
 *
 * @returns Active format object of the specified type, or undefined.
 */
export function getActiveFormat(value: Value, formatType: string): Format | undefined;

/**
 * Gets the all format objects at the start of the selection.
 *
 * @param value Value to inspect.
 * @param EMPTY_ACTIVE_FORMATS Array to return if there are no active formats.
 *
 * @return Active format objects.
 */
export function getActiveFormats(value: Value, EMPTY_ACTIVE_FORMATS?: Format[]): Format[];

/**
 * Gets the active object, if there is any.
 *
 * @param value - `Value` to inspect.
 *
 * @returns Active object, or `undefined`.
 */
export function getActiveObject(value: Value): object | undefined;

/**
 * Get the textual content of a Rich Text value. This is similar to
 * `Element.textContent`.
 *
 * @param value - `Value` to use.
 *
 * @returns The text content.
 */
export function getTextContent(value: Value): string;

/**
 * Insert a Rich Text value, an HTML string, or a plain text string, into a
 * Rich Text value at the given `startIndex`. Any content between `startIndex`
 * and `endIndex` will be removed. Indices are retrieved from the selection if
 * none are provided.
 *
 * @param value - Value to modify.
 * @param valueToInsert - Value to insert.
 * @param [startIndex] - Start index.
 * @param [endIndex] - End index.
 *
 * @returns A new `Value` with the value inserted.
 */
export function insert(value: Value, valueToInsert: Value, startIndex?: number, endIndex?: number): Value;

/**
 * Insert a `Format` as an object into a Rich Text value at the given
 * `startIndex`. Any content between `startIndex` and `endIndex` will be
 * removed. Indices are retrieved from the selection if none are provided.
 *
 * @param value - Value to modify.
 * @param formatToInsert - Format to insert as object.
 * @param [startIndex] - Start index.
 * @param [endIndex] - End index.
 *
 * @returns A new `Value` with the `Format` inserted.
 */
export function insertObject(value: Value, formatToInsert: Format): Value;

/**
 * Check if the selection of a Rich Text value is collapsed or not. Collapsed
 * means that no characters are selected, but there is a caret present. If there
 * is no selection, `undefined` will be returned. This is similar to
 * `window.getSelection().isCollapsed()`.
 *
 * @param value - The rich text value to check.
 *
 * @returns `true` if the selection is collapsed, `false` if not, `undefined`
 * if there is no selection.
 */
export function isCollapsed(value: Value): boolean | undefined;

/**
 * Check if a Rich Text value is Empty, meaning it contains no text or any
 * objects (such as images).
 *
 * @param value - `Value` to use.
 *
 * @returns `true` if the value is empty, `false` if not.
 */
export function isEmpty(value: Value): boolean;

/**
 * Combine an array of Rich Text values into one, optionally separated by
 * `separator`, which can be a Rich Text value, HTML string, or plain text
 * string. This is similar to `Array.prototype.join`.
 *
 * @param values - An array of values to join.
 * @param [separator] - Separator string or value.
 *
 * @returns A new combined `Value`.
 */
export function join(values: readonly Value[], separator?: Value | string): Value;

/**
 * Registers a new format provided a unique name and an object defining its
 * behavior.
 *
 * @param name - Format name.
 * @param config - Format settings.
 *
 * @returns `NamedFormatConfiguration` if successful, otherwise `undefined`.
 */
export function registerFormatType(name: string, config: FormatConfiguration): NamedFormatConfiguration | undefined;

/**
 * Remove content from a Rich Text value between the given `startIndex` and
 * `endIndex`. Indices are retrieved from the selection if none are provided.
 *
 * @param value - Value to modify.
 * @param [startIndex] - Start index.
 * @param [endIndex] - End index.
 *
 * @returns A new `Value` with the content removed.
 */
export function remove(value: Value, startIndex?: number, endIndex?: number): Value;

/**
 * Remove any format object from a Rich Text value by type from the given
 * `startIndex` to the given `endIndex`. Indices are retrieved from the
 * selection if none are provided.
 *
 * @param value - Value to modify.
 * @param formatType - Format type to remove.
 * @param [startIndex] - Start index.
 * @param [endIndex] - End index.
 *
 * @returns A new `value` with the format applied.
 */
export function removeFormat(value: Value, formatType: string, startIndex?: number, endIndex?: number): Value;

/**
 * Search a Rich Text value and replace the match(es) with `replacement`. This
 * is similar to `String.prototype.replace`.
 *
 * @param value - The value to modify.
 * @param pattern - Treated as a verbatim string and is not interpreted as a
 *                  regular expression. Only the first occurrence will be replaced.
 * @param replacement - The match or matches are replaced with the specified or
 *                      the value returned by the specified function.
 *
 * @returns A new value with replacements applied.
 */
export function replace(
    value: Value,
    pattern: string | RegExp,
    replacement: ((match: string, ...args: any[]) => string) | string,
): Value;

/**
 * Slice a Rich Text value from `startIndex` to `endIndex`. Indices are
 * retrieved from the selection if none are provided. This is similar to
 * `String.prototype.slice`.
 *
 * @param value - Value to modify.
 * @param [startIndex] - Start index.
 * @param [endIndex] - End index.
 *
 * @returns A new extracted value.
 */
export function slice(value: Value, startIndex?: number, endIndex?: number): Value;

/**
 * Split a Rich Text value in two at the given `startIndex` and `endIndex`, or
 * split at the given separator. This is similar to `String.prototype.split`.
 * Indices are retrieved from the selection if none are provided.
 *
 * @param value - Value to modify.
 * @param [separator] - Start index, or string at which to split.
 * @param [limit] - End index.
 *
 * @returns An array of new values.
 */
export function split(value: Value, separator?: string | number, limit?: number): Value[];

/**
 * Create an HTML string from a Rich Text value. If a `multilineTag` is
 * provided, text separated by a line separator will be wrapped in it.
 *
 * @returns HTML string.
 */
export function toHTMLString(args: { value: Value; multilineTag?: keyof HTMLElementTagNameMap | undefined }): string;

/**
 * Toggles a format object to a Rich Text value at the current selection.
 *
 * @param value - `Value` to modify.
 * @param format - `Format` to apply or remove.
 *
 * @returns A new value with the format applied or removed.
 */
export function toggleFormat(value: Value, format: Format): Value;

/**
 * Unregisters a format.
 *
 * @param name - `Format` name.
 *
 * @returns The previous format value, if it has been successfully
 *   unregistered; otherwise `undefined`.
 */
export function unregisterFormatType(name: string): NamedFormatConfiguration | undefined;
