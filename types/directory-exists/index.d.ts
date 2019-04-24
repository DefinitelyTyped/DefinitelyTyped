// Type definitions for directory-exists 2.0.1
// Project: https://github.com/timmydoza/directory-exists
// Definitions by: gaoyonggege <https://github.com/gaoyonggege>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace directoryExists;

export = directoryExists;

declare function directoryExists(directory: string): Promise<boolean>;
declare function directoryExists(directory: string, callback: (exists: boolean)=>{}): void;

declare namespace directoryExists {
    export function sync(directory: string): boolean;
}
