/// <reference types="express" />

declare namespace Express {
    export interface Request {
        flash(): { [key: string]: string[] };
        flash(message: string): string[];
        flash(type: string, message: string[] | string): number;
        flash(type: string, format: string, ...args: any[]): number;
    }
}

declare module "connect-flash" {
    import express = require("express");
    interface IConnectFlashOptions {
        unsafe?: boolean | undefined;
    }
    function e(options?: IConnectFlashOptions): express.RequestHandler;
    export = e;
}
