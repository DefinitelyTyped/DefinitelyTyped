// Type definitions for codeclimate 0.3
// Project: https://github.com/codeclimate/platform
// Definitions by: Remco Haszing <https://github.com/remcohaszing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * An issue represents a single instance of a real or potential code problem, detected by a static analysis Engine.
 *
 * @see https://github.com/codeclimate/platform/blob/master/spec/analyzers/SPEC.md#issues
 */
export interface Issue {
    /**
     * Must always be `"issue"`.
     */
    type: 'issue';

    /**
     * A unique name representing the static analysis check that emitted this issue.
     */
    check_name: string;

    /**
     * A string explaining the issue that was detected.
     *
     * Descriptions must be a single line of text (no newlines), with no HTML formatting contained within. Ideally, descriptions should be fewer than 70 characters long, but this is not a requirement.
     *
     * Descriptions support one type of basic Markdown formatting, which is the use of backticks to produce inline <code> tags that are rendered in a fixed width font. Identifiers like class, method
     * and variable names should be wrapped within backticks whenever possible for optimal rendering by tools that consume Engines data.
     *
     * @see https://github.com/codeclimate/platform/blob/master/spec/analyzers/SPEC.md#descriptions
     */
    description: string;

    /**
     * A markdown snippet describing the issue, including deeper explanations and links to other resources.
     */
    content?: Content;

    /**
     * At least one {@link Category} indicating the nature of the issue being reported.
     */
    categories: Category[];

    /**
     * A {@link Location} object representing the place in the source code where the issue was discovered.
     */
    location: Location;

    /**
     * Other locations is an optional array of {@link Location} objects.
     */
    other_locations?: Location[];

    /**
     * A {@link Trace} object representing other interesting source code locations related to this issue.
     */
    trace?: Trace;

    /**
     * An integer indicating a rough estimate of how long it would take to resolve the reported issue.
     *
     * Remediation points are an abstract, relative scale to express the estimated time it would take for a developer to resolve an issue. They are abstract because they do not map directly to
     * absolute time durations like minutes and hours. Providing remediation points is optional, but they can be useful to certain tools that consume Engines data and generate reports related to the
     * level of effort required to improve a codebase (like CodeClimate.com).
     *
     * Here are some guidelines to compute appropriate remediation points values for an Issue:
     *
     * * The more local an issue is, generally the easier it is to fix. For example, issues that only require consideration of a single line tend to be easier to fix than issues that potentially
     *   affect an entire function, class, module, or program.
     *
     * The baseline remediation points value is 50,000, which is the time it takes to fix a trivial code style issue like a missing semicolon on a single line, including the time for the developer to
     * open the code, make the change, and confidently commit the fix. All other remediation points values are expressed in multiples of that Basic Remediation Point Value.
     */
    remediation_points?: number;

    /**
     * A {@link Severity} string describing the potential impact of the issue found.
     */
    severity?: Severity;

    /**
     * A unique, deterministic identifier for the specific issue being reported to allow a user to exclude it from future analyses.
     */
    fingerprint?: string;
}

/**
 * Issues must be associated with one or more categories.
 *
 * @see https://github.com/codeclimate/platform/blob/master/spec/analyzers/SPEC.md#categories
 */
export type Category =
    | 'Bug Risk'
    | 'Clarity'
    | 'Compatibility'
    | 'Complexity'
    | 'Duplication'
    | 'Performance'
    | 'Security'
    | 'Style';

/**
 * Locations refer to ranges of a source code file. A Location contains a `path` and a source range (expressed as `lines` or `positions`). Here's an example location:
 *
 * ```json
 * {
 *   "path": "path/to/file.css",
 *   "lines": {
 *     "begin": 13,
 *     "end": 14
 *   }
 * }
 * ```
 * And another:
 *
 * ```json
 * {
 *   "path": "path/to/file.css",
 *   "positions": {
 *     "begin": {
 *       "line": 3,
 *       "column": 10
 *     },
 *     "end": {
 *       "line": 4,
 *       "column": 12
 *     }
 *   }
 * }
 * ```
 *
 * All Locations require a `path` property, which is the file path relative to `/code`.
 *
 * Locations of the first form (_line-based_ locations) emit a beginning and end line number for the issue, which form a range. Line numbers are 1-based, so the first line of a file would be
 * represented by `1`. Line ranges are evaluated inclusively, so a range of `{"begin": 9, "end": 11}` would represent lines 9, 10 and 11.
 *
 * Locations in the second form (_position-based_ locations) allow more precision by including references to the specific characters that form the source code range representing the issue.
 *
 * @see https://github.com/codeclimate/platform/blob/master/spec/analyzers/SPEC.md#locations
 */
export type Location =
    | { path: string; lines: { begin: number; end: number } }
    | { path: string; positions: { begin: Position; end: Position } };

/**
 * Positions refer to specific characters within a source file, and can be expressed in two ways:
 *
 * 1. Line and column coordinates. (You can roughly think of these as X/Y axis.)
 * 2. Absolute character offsets, for the _entire source buffer_.
 *
 * For example:
 *
 * ```json
 * {
 *   "line": 3,
 *   "column": 10
 * }
 * ```
 *
 * Or:
 *
 * ```json
 * {
 *   "offset": 4
 * }
 * ```
 *
 * Line and column numbers are 1-based. Therefore, * a Position of `{ "line": 2, "column": 3 }` represents the third character on the second line of the file.
 *
 * Offsets, however are 0-based. A Position of `{ "offset": 4 }` represents the _fifth_ character in the file. Importantly, the `offset` is from the beginning of the file, not the beginning of a line.
 * Newline characters (and all characters) count when computing an offset.
 *
 * @see https://github.com/codeclimate/platform/blob/master/spec/analyzers/SPEC.md#positions
 */
export type Position = { line: number; column: number } | { offset: number };

/**
 * Content gives more information about the issue's check, including a description of the issue, how to fix it, and relevant links. They are expressed as a hash with a `body` key.
 *
 * @see https://github.com/codeclimate/platform/blob/master/spec/analyzers/SPEC.md#contents
 */
export interface Content {
    /**
     * The value of this key should be a [Markdown](http://daringfireball.net/projects/markdown/) document. For example:
     *
     * ```json
     * {
     *   "body": "This cop checks that the ABC size of methods is not higher than the configured maximum. The ABC size is based on assignments, branches (method calls), and conditions."
     * }
     * ```
     */
    body: string;
}

/**
 * Some engines require the ability to refer to other source locations in describing an issue. For this reason, an `Issue` object can have an associated `Trace`, a data structure meant to represent
 * ordered or unordered lists of source code locations.
 */
export interface Trace {
    /**
     * An array of {@link Location} objects.
     */
    locations: Location[];

    /**
     * When `true`, this `Trace` object will be treated like an ordered stacktrace by the CLI and the Code Climate UI.
     *
     * @default false
     */
    stacktrace?: boolean;
}

export type Severity = 'info' | 'minor' | 'major' | 'critical' | 'blocker';
