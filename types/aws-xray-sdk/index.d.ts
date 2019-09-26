// Type definitions for aws-xray-sdk 2.3
// Project: https://github.com/aws/aws-xray-sdk-node
// Definitions by: Scott Jones <https://github.com/scottdj92>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/index.d.ts"/>
import { RequestHandler } from "express";

export as namespace myLib;

export function enableManualMode(): void;
export function enableAutomaticMode(): void;
export function setSegment(): Segment;
export function getSegment(): Segment;
export function setDaemonAddress(daemonAddress: string): void;
export function setLogger(logger: any): void;
export function captureHTTPsGlobal(httpModule: typeof import("http") | typeof import("https")): void;

export const middleware: ExpressMiddleware;

export class Segment {
    constructor(name: string, rootId?: number, parentId?: number);
}

export interface ExpressMiddleware {
    openSegment(defaultName: string): RequestHandler;
    closeSegment(): RequestHandler;
}
