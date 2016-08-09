// Type definitions for ajv
// Project: https://github.com/sindresorhus/get-port
// Definitions by: York Yao <https://github.com/plantain-00/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "get-port" {
    var getPort: () => PromiseLike<number>
    export = getPort;
}
