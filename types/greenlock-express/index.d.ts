import { RequestListener } from "http";

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

export function init(o: Options | (() => Options)): Serve;
