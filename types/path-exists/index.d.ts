// Type definitions for path-exists 3.0
// Project: https://github.com/sindresorhus/path-exists
// Definitions by: Shogo Iwano <https://github.com/shiwano>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pathExists;

declare function pathExists(path: string): Promise<boolean>;

declare namespace pathExists {
    function sync(path: string): boolean;
}
