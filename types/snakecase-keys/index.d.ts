// Type definitions for snakecase-keys 2.1
// Project: https://github.com/bendrucker/snakecase-keys#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export = snakecaseKeys;

declare function snakecaseKeys(
    obj: object,
    options?: snakecaseKeys.Options
): { [key: string]: any };

declare namespace snakecaseKeys {
    interface Options {
        deep?: boolean;
        exclude?: Array<string | RegExp>;
    }
}
