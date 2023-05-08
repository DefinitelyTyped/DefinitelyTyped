// Type definitions for greenlock-express 4.0
// Project: https://git.rootprojects.org/root/greenlock-express.js.git
// Definitions by: Joseph Hendrix <https://github.com/hendrixjoseph>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { RequestListener } from 'http';

export interface opts {
    packageRoot: string;
    maintainerEmail: string;
    configDir: string;
    cluster: boolean;
    workers?: number;
}

export interface serve {
    ready: (app?: RequestListener) => serve;
    master: (app?: RequestListener) => serve;
    serve: (app: RequestListener) => void;
}

export interface greenlock {
    init: (o: (opts | (() => opts))) => serve;
}

declare const gl: greenlock;

export default gl;
