// Type definitions for whitelist-object 1.0
// Project: https://github.com/conorhastings/whitelist-object#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = whitelistObject;

declare function whitelistObject(
    object: { [key: string]: any },
    keys: ReadonlyArray<string>,
    shallow?: boolean
): { [key: string]: any };
