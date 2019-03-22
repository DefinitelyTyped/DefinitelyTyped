// Type definitions for directory-exists 2.0
// Project: https://github.com/timmydoza/directory-exists
// Definitions by: Gao Yong <https://github.com/gaoyonggege>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function directoryExists (directory: string, callback?: Function): Promise<boolean>;
declare namespace directoryExists {
    export function sync (directory: string): boolean;
}

export = directoryExists;