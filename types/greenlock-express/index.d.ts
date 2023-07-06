// Type definitions for greenlock-express 4.0
// Project: https://git.rootprojects.org/root/greenlock-express.js.git
// Definitions by: Joseph Hendrix <https://github.com/hendrixjoseph>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { RequestListener } from 'http';

export interface Options {
    packageRoot: string;
    maintainerEmail: string;
    configDir: string;
    cluster: boolean;
    workers?: number;
}

export interface Serve {
    ready: (app?: RequestListener) => Serve;
    master: (app?: RequestListener) => Serve;
    serve: (app: RequestListener) => void;
}

export function init(o: (Options | (() => Options))): Serve;
