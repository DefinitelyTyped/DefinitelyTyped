// Type definitions for string-strip-html 4.3
// Project: https://gitlab.com/codsen/codsen/tree/master/packages/string-strip-html
// Definitions by: Chris Shaw <https://github.com/chris-shaw-2011>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function stringStripHtml(str: string, originalOpts?: Options): string;

interface Options {
    ignoreTags?: string[];
    onlyStripTags?: string[];
    stripTogetherWithTheirContents?: string[] | false;
    skipHtmlDecoding?: boolean;
    returnRangeOnly?: boolean;
    trimOnlySpaces?: boolean;
    dumpLinkHrefsNearby?: DumpLinkHrefsNearby | false;
}

interface DumpLinkHrefsNearby {
    enabled?: boolean;
    putOnNewLine?: boolean;
    wrapHeads?: string;
    wrapTails?: string;
}

export = stringStripHtml;
