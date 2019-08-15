// Type definitions for fs-readdir-recursive 1.0
// Project: https://github.com/fs-utils/fs-readdir-recursive
// Definitions by: Paolo Scanferla <https://github.com/pscanf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function readdirRecursive(
    path: string,
    filter?: (path: string) => boolean
): string[];

export = readdirRecursive;
