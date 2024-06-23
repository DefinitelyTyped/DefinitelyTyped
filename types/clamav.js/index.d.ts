/// <reference types="node" />

import { ReadStream } from "fs";
import { Stream } from "stream";

export interface ClamScanner {
    port: 3310 | number;
    host: string | "localhost";
    scan: (object: ReadStream | Stream | string, callback: (error: Error, object: any, result: string) => any) => void;
}
export function createScanner(port: number, host: string): ClamScanner;
export function ping(port: number, host: string, timeout: number, callback: (error?: Error) => any): void;
export function version(
    port: number,
    host: string,
    timeout: number,
    callback: (error?: Error, status?: string) => any,
): void;

export class ClamAVChannel {
    _transform(chunk: number, encoding: any, callback: () => any): void;
    _flush(callback: () => any): void;
}

export function clamavstreamscan(
    port: number,
    host: string,
    stream: Stream | ReadStream,
    complete: (stream: Stream | ReadStream) => any,
    object: any,
    callback: (error: Error, object: any, result: string) => any,
): void;
export function clamavfilescan(
    port: number,
    host: string,
    filename: string,
    callback: (error: Error, object: any, result: string) => any,
): void;
export function clamavpathscan(
    port: number,
    host: string,
    pathname: string,
    callback: (error: Error, object: any, result: string) => any,
): void;
