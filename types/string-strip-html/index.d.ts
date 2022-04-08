// Type definitions for string-strip-html 5.0
// Project: https://gitlab.com/codsen/codsen/tree/master/packages/string-strip-html
// Definitions by: Chris Shaw <https://github.com/chris-shaw-2011>
//                 Brian Crosby <https://github.com/brian-captain-crosby>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/** Strips HTML tags from strings. */
declare function stringStripHtml(str: string, originalOpts?: Options): Output;

interface Options {
    /** These tags will not be removed */
    ignoreTags?: string[];

    /** If one or more tag names are given here, only these tags will be stripped, nothing else */
    onlyStripTags?: string[];

    /** These tags will be removed from the opening tag up to closing tag, including content in-between opening and closing tags. Set it to something falsey to turn it off. */
    stripTogetherWithTheirContents?: string[] | false;

    /** By default, all escaped HTML entities for example &pound; input will be recursively decoded before HTML-stripping. You can turn it off here if you don't need it. */
    skipHtmlDecoding?: boolean;

    /** Used mainly in automated setups. It ensures non-spaces are not trimmed from the outer edges of a string. */
    trimOnlySpaces?: boolean;

    /** Used to customise the output of link URL's: to enable the feature, also customise the URL location and wrapping. */
    dumpLinkHrefsNearby?: DumpLinkHrefsNearby | false;

    /**
     * The function to call to control the strip behaviour.
     *
     * Gives you full control of the output and lets you tweak it.
     * See the dedicated chapter below called "opts.cb" with explanation and examples.
     */
    cb?: (input: CallbackInput) => void | null | false;
}

interface DumpLinkHrefsNearby {
    /**
     * By default, this function is disabled - URL's are not inserted nearby.
     *
     * Set it to Boolean true to enable it.
     */
    enabled?: boolean;

    /**
     * By default, URL is inserted after any whatever was left after stripping the particular linked piece of code.
     * If you want, you can force all inserted URL's to be on a new line, separated by a blank line.
     */
    putOnNewLine?: boolean;

    /**
     * This string (default is an empty string) will be inserted in front of every URL.
     *
     * Set it to any string you want, for example [.
     */
    wrapHeads?: string;

    /**
     * This string (default is an empty string) will be inserted straight after every URL.
     *
     * Set it to any string you want, for example ].
     */
    wrapTails?: string;
}

interface CallbackInput {
    /** The HTML tag found */
    tag: Tag;

    /** The index in the input string to start deleting from */
    deleteFrom: number;

    /** The index in the input string to stop deleting */
    deleteTo: number;

    /** The string to replace the tag with */
    insert: string;

    /** The range configuration */
    rangesArr: Range;

    /**
     * The value returned by the default strip function.
     *
     * [deleteFrom, deleteTo, insert]
     */
    proposedReturn: [number, number, string | undefined];
}

interface Tag {
    attributes: TagAttribute[];
    lastClosingBracketAt: number;
    lastOpeningBracketAt: number;
    slashPresent: boolean;
    leftOuterWhitespace: number;
    onlyPlausible: boolean;
    nameStarts: number;
    nameContainsLetters: boolean;
    nameEnds: number;
    name: string;
}

interface TagAttribute {
    nameStarts: number;
    nameEnds: number;
    equalsAt: number;
    name: string;
    valueStarts: number;
    valueEnds: number;
    value: string;
}

interface Range {
    opts: {
        /**
         * If set to true, if to-be-added string (3rd element in the range array) contains only whitespace (trim()s to empty string),
         * replace it with: either line break \n (if there's at least one line break or \r in it) or with a single space (all other cases).
         * Same applies when we have a string, surrounded by whitespace. That whitespace will be replaced with space or line break.
         *
         * Default: false
         */
        limitToBeAddedWhitespace: boolean;

        /**
         * This is the number of maximum consecutive line breaks allowed in collapsed result.
         * Practically, setting this to 2 would allow single blank lines in the output (for example, between paragraphs).
         *
         * Default: 1
         */
        limitLinebreaksCount: number;

        /**
         * Default mode, 1 is concatenate clashing values, but alternative mode 2 is newer value overwrites older.
         *
         * Default: 1
         */
        mergeType: number;
    };
}

interface Output {
    /**
     * Plain object
     *
     * For example, { timeTakenInMilliseconds: 6 }
     */
    log: Log;

    /** The string version where all ranges were applied to it. */
    result: string;

    /**
     * Array of one or more string range arrays OR null
     *
     * For example, if characters from index 0 to 5 and 30 to 35 were deleted, that would be [[0, 5], [30, 35]]
     */
    ranges: [[number, number, string | undefined]] | null;

    /**
     * Array of zero or more arrays
     *
     * For example, [[0, 5], [30, 35]]. If you String.slice() each pair, you'll get HTML tag values.
     */
    allTagLocations: [[number, number]];

    /**
     * Array of zero or more arrays
     *
     * Only the tags that ended up stripped will be reported here.
     * Takes into account opts.ignoreTags and opts.onlyStripTags, unlike allTagLocations above. For example, [[0, 5], [30, 35]].
     */
    filteredTagLocations: [[number, number]];
}

interface Log {
    timeTakenInMilliseconds: number;
}

export = stringStripHtml;
