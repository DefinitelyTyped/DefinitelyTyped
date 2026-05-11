import express = require("express");

declare global {
    namespace Express {
        interface Request {
            flash(message?: string): { [key: string]: string[] };
            flash(event: string, message: string | string[]): any;
        }
    }
}

declare function flash(): express.RequestHandler;

export = flash;
