// Type definitions for aws-xray-sdk 2.3
// Project: https://github.com/aws/aws-xray-sdk-node
// Definitions by: Scott Jones <https://github.com/scottdj92>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/index.d.ts"/>

declare module "aws-xray-sdk" {

    import { RequestHandler } from "express";
    import { IncomingMessage, ServerResponse } from "http";

    export function enableManualMode(): void;
    export function enableAutomaticMode(): void;
    export function setSegment(): Segment;
    export function getSegment(): Segment;
    export function setDaemonAddress(daemonAddress: string): void;
    export function setLogger(logger: any): void;
    export function captureHTTPsGlobal(httpModule: typeof import("http") | typeof import("https")): void;
    export function setAWSWhitelist(path: string): void;
    export function setAWSWhitelist(json: JSON): void;
    export function appendAWSWhitelist(path: string): void;
    export function appendAWSWhitelist(json: JSON): void;
    export function setStreamingThreshold(threshold: number): void;
    export function getNamespace(): any;
    export function capturePromise(): void;

    export const express: ExpressMiddleware;

    export class Segment {
        constructor(name: string, rootId?: number, parentId?: number);
        addAnnotationKey(key: string, value: boolean | string | number): void;
        addError(err: Error | string, remote?: boolean): void;
        addErrorFlag(): void;
        addFaultFlag(): void;
        addIncomingRequestData(data: IncomingRequestData): void;
        addMetadata(key: string, value: object | null, namespace?: string): void;
        addNewSubsegment(name: string): void;
        addPluginData(data: object): void;
        addSubsegment(subsegment: any): void;
        addThrottleFlag(): void;
        close(err?: Error | string, remote?: boolean): void;
        decrementCounter(): void;
        flush(): void;
        incrementCounter(additional?: number): void;
        isClosed(): boolean;
        removeSubsegment(): void;
        setSDKData(data: object): void;
        setServiceData(data: object): void;
    }

    export interface ExpressMiddleware {
        openSegment(defaultName: string): RequestHandler;
        closeSegment(): RequestHandler;
        enableDynamicNaming(pattern: string): void;
        disableCentralizedSampling(): void;
        setSamplingRules(path: string): void;
        setSamplingRules(json: JSON): void;
    }

    export class IncomingRequestData {
        constructor(req: IncomingMessage);
        close(res: ServerResponse): void;
    }
}
