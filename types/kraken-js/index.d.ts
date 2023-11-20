import { Express } from "express";

declare function k(options?: k.Options | string): Express;

declare namespace k {
    interface Kraken extends Express {
        kraken: Kraken;
    }

    interface Options {
        protocols?: object | undefined;
        basedir?: string | undefined;
        configdir?: string | undefined;
        mountpath?: string | undefined;
        inheritViews?: boolean | undefined;
        startupHeaders?: { [key: string]: string } | undefined;
        onconfig?(config: Map<string, any>, next: (err: Error | null, config?: object) => any): any;
        uncaughtException?(err: Error): any;
    }
}

export = k;
