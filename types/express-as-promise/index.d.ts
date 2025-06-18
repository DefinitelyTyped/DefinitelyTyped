import { Express } from "express";
import { Server } from "http";

declare class ExpressAsPromise {
    server: Server | null;
    app: Express;

    get host(): string;
    get port(): string;
    get url(): string;

    listen(port?: number, host?: string): Promise<string>;
    stop(): Promise<void>;
    fetch(pathname: string, options?: RequestInit): Promise<Response>;

    static withServer(callback: (server: ExpressAsPromise) => Promise<void>): Promise<void>;
}

export = ExpressAsPromise;
