// Type definitions for Platform 1.0.0
// Project: https://github.com/bestiejs/platform.js
// Definitions by: Jake Hickman <https://github.com/JakeH/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface PlatformStatic {
    description?: string;
    layout?: string;
    manufacturer?: string;
    name?: string;
    prerelease?: string;
    product?: string;
    ua?: string;
    version?: string;
    os?: PlatformOS;
    parse?(ua: string): PlatformStatic;
    toString?(): string;
}

interface PlatformOS {
    architecture?: number; //platform's docs say this is a string, but their code doesn't agree
    family?: string;
    version?: string;
    toString(): string;
}

declare var platform: PlatformStatic;


