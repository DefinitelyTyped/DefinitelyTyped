import { Handler, Request } from "express";

export interface SetVersionByQueryParamOptions {
    removeQueryParam: boolean;
}

export type CustomParsingFunction = (header: Request["headers"]["accept"]) => string;

export function setVersion(version: string): Handler;

export function setVersionByHeader(headerName?: string): Handler;

export function setVersionByQueryParam(queryParam?: string, options?: SetVersionByQueryParamOptions): Handler;

export function setVersionByAcceptHeader(customParsingFunction?: CustomParsingFunction): Handler;

export function formatVersion(version: object | string): string;
