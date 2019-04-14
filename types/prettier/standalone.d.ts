import { CursorOptions, CursorResult, Options, Plugin } from './';

type Omit<GType, GKeys extends keyof GType> = Pick<
    GType,
    Exclude<keyof GType, GKeys>
>;

type MakeRequired<GType extends {}, GKeys extends keyof GType> = Omit<
    GType,
    GKeys
> &
    { [P in GKeys]-?: GType[P] };

type MR<GType extends { parser?: any }> = MakeRequired<GType, 'parser'>;

/**
 * formatWithCursor both formats the code, and translates a cursor position from unformatted code to formatted code.
 * This is useful for editor integrations, to prevent the cursor from moving when code is formatted
 *
 * The cursorOffset option should be provided, to specify where the cursor is. This option cannot be used with rangeStart and rangeEnd.
 *
 * ```js
 * prettier.formatWithCursor(" 1", { cursorOffset: 2, parser: "babel" });
 * ```
 * `-> { formatted: '1;\n', cursorOffset: 1 }`
 */
export function formatWithCursor(
    source: string,
    options: MR<CursorOptions>,
): CursorResult;

/**
 * `format` is used to format text using Prettier. [Options](https://github.com/prettier/prettier#options) may be provided to override the defaults.
 */
export function format(source: string, options?: MR<Options>): string;

/**
 * `check` checks to see if the file has been formatted with Prettier given those options and returns a `Boolean`.
 * This is similar to the `--list-different` parameter in the CLI and is useful for running Prettier in CI scenarios.
 */
export function check(source: string, options?: MR<Options>): boolean;

export { Plugin };
