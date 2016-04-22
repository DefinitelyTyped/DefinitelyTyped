// Type definitions for loggly 1.0.8
// Project: https://github.com/nodejitsu/node-loggly
// Definitions by: Ray Martone <https://github.com/rmartone>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface LogglyOptions {
    token: string;
    subdomain: string;
    tags?: string[];
    json?: boolean;
    host?: string;
    auth?: {
        username: string;
        password: string;
    }
}

interface Loggly {
    log(message: any, tags?: string[], callback?: (err: any, results: any) => void): void;
    log(message: any, callback?: (err: any, results: any) => void): void;
}

declare function createClient(options: LogglyOptions): Loggly;
