/// <reference types="node" />

import { Busboy, BusboyConfig } from "busboy";
import { RequestHandler } from "express";
import * as http from "http";

declare function connectBusboy(options?: connectBusboy.ConnectBusboyOptions): RequestHandler;

declare namespace connectBusboy {
    interface ConnectBusboyOptions extends BusboyConfig {
        immediate?: boolean | undefined;
    }
}

declare global {
    namespace Express {
        interface Request {
            busboy: Busboy;
        }
    }
}

export = connectBusboy;
