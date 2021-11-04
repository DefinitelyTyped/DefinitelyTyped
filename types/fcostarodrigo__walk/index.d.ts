// Type definitions for @fcostarodrigo/walk 5.0
// Project: https://github.com/fcostarodrigo/walk#readme
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Walk {
    (path?: string, listFolders?: boolean, walkFolder?: (path: string) => boolean): AsyncIterable<string>;
}

declare const walk: Walk;

export = walk;
