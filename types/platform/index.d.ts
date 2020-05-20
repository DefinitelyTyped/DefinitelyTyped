// Type definitions for Platform 1.3
// Project: https://github.com/bestiejs/platform.js
// Definitions by: Jake Hickman <https://github.com/JakeH>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare interface Platform {
    description?: string;
    layout?: string;
    manufacturer?: string;
    name?: string;
    prerelease?: string;
    product?: string;
    ua?: string;
    version?: string;
    os?: {
        architecture?: number;
        family?: string;
        version?: string;
        toString(): string;
    };
    parse(ua: string): Platform;
    toString(): string;
}

declare var platform: Platform;

declare module "platform" {
    export = platform;
}

