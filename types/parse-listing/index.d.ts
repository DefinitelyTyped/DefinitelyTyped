// Type definitions for parse-listing 1.1
// Project: https://github.com/sergi/parse-listing
// Definitions by: Maxime Lebastard <https://github.com/maximelebastard>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface File {
    type: nodeTypes;
    size: string;
    name: string;
    time: number;
    owner?: string;
    group?: string;
    userPermissions?: Permissions;
    groupPermissions?: Permissions;
    otherPermissions?: Permissions;
}

export interface Permissions {
    read: boolean;
    write: boolean;
    exec: boolean;
}

export type ParsingCallback = (err: Error | null, result: File[]) => void;

export enum nodeTypes {
    FILE_TYPE = 0,
    DIRECTORY_TYPE = 1,
    SYMBOLIC_LINK_TYPE = 2,
    UNKNOWN_TYPE = 3,
}

export enum permissions {
    READ_PERMISSION = 0,
    WRITE_PERMISSION = 1,
    EXECUTE_PERMISSION = 2,
}

export enum access {
    USER_ACCESS = 0,
    GROUP_ACCESS = 1,
    WORLD_ACCESS = 2,
}

/**
 * Parses `unix`/`windows` FTP `STAT` and `LIST` responses either in a single string (entries will be
 * split by newlines) or in an array of strings. Invokes the callback when all the entries have been processed.
 *
 * @param listing FTP file entry lines.
 * @param callback Callback function with error or result.
 */
export function parseFtpEntries(listing: string | readonly string[], callback: ParsingCallback): void;

/**
 * Parses a list of entries from `ls`/`dir` either in a single string (entries will be split by newlines)
 * or in an array of strings. Invokes the callback when all the entries have been processed.
 *
 * @param entries File entry lines.
 * @param callback Callback function with error or result.
 *
 * @example
 * import * as Parser from "parse-listing";
 *
 * // Yeah yeah, multiline strings would make Crockford mad, I know.
 * const str = "drwxr-xr-x    5 1001     1001         4096 Jan 09 11:52 .\r\n\
 * drwxr-xr-x    4 0        0            4096 Sep 19 13:50 ..\r\n\
 * -rw-------    1 1001     1001         1118 Jan 09 12:09 .bash_history\r\n\
 * -rw-------    1 1001     1001          943 Jan 09 11:52 .viminfo\r\n\
 * drwxrwxr-x    5 1001     1001         4096 Jan 09 11:52 inaccessible\r\n\
 * drwxrwxrwx    2 1001     1001         4096 Sep 21 11:20 project1\r\n\
 * drwx------    2 1001     1001         4096 Oct 19 16:17 project2\r\n";
 *
 * Parser.parseEntries(str, (err, entryArray) => {
 *   entryArray.forEach((entry, i) => {
 *     console.log("Name:",entry.name);
 *     console.log("Type", entry.type);
 *     console.log("Size:", entry.size);
 *   });
 * });
 */
export function parseEntries(entries: string | readonly string[], callback: ParsingCallback): void;

/**
 * Parses a single string such as:
 * ```
 * drwxrwxrwx 2 1001 1001 4096 Sep 21 11:20 project
 * ```
 * There is no need to specify whether the entry is in UNIX or MS-DOS/Windows format.
 * The parser will find out by itself, it selects which parser to use depending on the first character
 * of the line to parse.
 *
 * @param entry File entry line.
 */
export function parseEntry(entry: string): File | null;
