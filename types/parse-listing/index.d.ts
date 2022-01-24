// Type definitions for parse-listing 1.1
// Project: https://github.com/sergi/parse-listing
// Definitions by: Maxime Lebastard <https://github.com/maximelebastard>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface File {
    type: NODE_TYPES;
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

export type ParsingCallback = (err: Error, result: File[]) => void;

export enum NODE_TYPES {
    FILE_TYPE = 0,
    DIRECTORY_TYPE = 1,
    SYMBOLIC_LINK_TYPE = 2,
    UNKNOWN_TYPE = 3,
}
export enum PERMISSIONS {
    READ_PERMISSION = 0,
    WRITE_PERMISSION = 1,
    EXECUTE_PERMISSION = 2,
}
export enum ACCESS {
    USER_ACCESS = 0,
    GROUP_ACCESS = 1,
    WORLD_ACCESS = 2,
}

export function parseFtpEntries(listing: string, callback: ParsingCallback): void;
export function parseEntries(listing: string, callback: ParsingCallback): void;
export function parseEntry(listing: string, callback: ParsingCallback): void;
