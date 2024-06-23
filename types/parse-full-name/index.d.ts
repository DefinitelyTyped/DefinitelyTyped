export type partToReturn =
    | "title"
    | "first"
    | "middle"
    | "last"
    | "nick"
    | "suffix"
    | "error"
    | "all";

export interface Name {
    title?: string | undefined;
    first?: string | undefined;
    middle?: string | undefined;
    last?: string | undefined;
    nick?: string | undefined;
    suffix?: string | undefined;
    error?: [] | undefined;
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
    fixCase?: boolean | -1 | 0 | 1,
    stopOnError?: boolean | 0 | 1,
    useLongLists?: boolean | 0 | 1,
): Name;
