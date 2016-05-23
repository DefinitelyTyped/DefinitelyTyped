// Type definitions for dotenv 2.0.0
// Project: https://github.com/motdotla/dotenv
// Definitions by: Jussi Kinnula <https://github.com/jussikinnula/>
// Definitions: https://github.com/jussikinnula/DefinitelyTyped

export function config(options?: dotenvOptions): boolean;

interface dotenvOptions {
    silent?: boolean;
    path?: string;
    encoding?: string;
}
