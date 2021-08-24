// Type definitions for uuid-with-v6 1.1
// Project: https://github.com/kurttheviking/uuid-with-v6-js#readme
// Definitions by: Kael Shipman <https://github.com/kael-shipman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export * from "uuid";

export interface V6SetupOpts {
    disableRandom: boolean;
}

export function v6(): string;
export function v6setup(opts?: Partial<V6SetupOpts>): typeof v6;
