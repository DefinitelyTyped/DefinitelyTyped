import connectBusboy = require("connect-busboy");
import express = require("express");

export interface ExpressBusboyOptions extends connectBusboy.ConnectBusboyOptions {
    upload?: boolean;
    path?: string;
    allowedPath?: string | RegExp | ((url: string) => boolean);
    restrictMultiple?: boolean;
    mimeTypeLimit?: string | string[];
    strip?: (value: string, type?: string) => string;
}

export function extend(app: express.Application, options?: ExpressBusboyOptions): express.Application;
