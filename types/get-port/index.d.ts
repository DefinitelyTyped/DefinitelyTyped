// Type definitions for get-port 4.0
// Project: https://github.com/sindresorhus/get-port
// Definitions by: York Yao <https://github.com/plantain-00>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function getPort(options?: {
    port?: number | ReadonlyArray<number>;
    host?: string;
}): Promise<number>;

export = getPort;
