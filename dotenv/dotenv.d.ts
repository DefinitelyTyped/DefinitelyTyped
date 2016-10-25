// Type definitions for dotenv 2.0.0
// Project: https://github.com/motdotla/dotenv
// Definitions by: Jussi Kinnula <https://github.com/jussikinnula/>
// Definitions: https://github.com/jussikinnula/DefinitelyTyped

interface dotenvOptions {
    silent?: boolean;
    path?: string;
    encoding?: string;
}

declare module 'dotenv' {
    export function config(options?: dotenvOptions): boolean;
}
