// Type definitions for get-port 4.0
// Project: https://github.com/sindresorhus/get-port
// Definitions by: York Yao <https://github.com/plantain-00/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "get-port" {
    var getPort: (options?: { port?: number | ReadonlyArray<number>, host?: string }) => PromiseLike<number>
    export = getPort;
}
