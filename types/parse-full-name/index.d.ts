// Type definitions for parse-full-name 1.2
// Project: https://github.com/dschnelldavis/parse-full-name
// Definitions by: n8 <https://github.com/n8Guy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.0

export type partToReturn =
    | 'title'
    | 'first'
    | 'middle'
    | 'last'
    | 'nick'
    | 'suffix'
    | 'error'
    | 'all';

export interface Name {
    title?: string;
    first?: string;
    middle?: string;
    last?: string;
    nick?: string;
    suffix?: string;
    error?: [];
}

/**
 * Parses a string containing a person's full name, in any format
 * @param nameToParse The name to be parsed
 * @param partToReturn The name of a single part to return
 * @param fixCase Fix case of output name
 * @param stopOnError Makes parsing errors throw JavaScript errors
 * @param useLongLists Use long prefix, suffix, and title lists
 */
export function parseFullName(
    nameToParse: string,
    partToReturn?: partToReturn,
    fixCase?: boolean,
    stopOnError?: boolean,
    useLongLists?: boolean
): Name;
