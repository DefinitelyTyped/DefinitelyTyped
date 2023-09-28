// Type definitions for proto-fetch 1.0
// Project: https://github.com/bergos/proto-fetch
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function factory(protocols: Record<string, (url: any, options?: any) => unknown>): typeof fetch;

export = factory;
