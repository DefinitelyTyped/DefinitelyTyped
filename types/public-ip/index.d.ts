// Type definitions for public-ip 2.3
// Project: https://github.com/sindresorhus/public-ip#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function v4(options?: Options): Promise<string>;
export function v6(options?: Options): Promise<string>;

export interface Options {
    https?: boolean;
    timeout?: number;
}
