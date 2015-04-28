// Type definitions for node-uuid.js
// Project: https://github.com/broofa/node-uuid
// Definitions by: Jeff May <https://github.com/jeffmay>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

interface UUIDOptions {

    /**
     * Node id as Array of 6 bytes (per 4.1.6).
     * Default: Randomly generated ID. See note 1.
     */
    node?: any[]

    /**
     * (Number between 0 - 0x3fff) RFC clock sequence.
     * Default: An internally maintained clockseq is used.
     */
    clockseq?: number

    /**
     * (Number | Date) Time in milliseconds since unix Epoch.
     * Default: The current time is used.
     */
    msecs?: any

    /**
     * (Number between 0-9999) additional time, in 100-nanosecond units. Ignored if msecs is unspecified.
     * Default: internal uuid counter is used, as per 4.2.1.2.
     */
    nsecs?: number
}

interface UUID {
    v1(options?: UUIDOptions): string
    v1(options?: UUIDOptions, buffer?: number[], offset?: number): number[]
    v1(options?: UUIDOptions, buffer?: Buffer, offset?: number): Buffer

    v2(options?: UUIDOptions): string
    v2(options?: UUIDOptions, buffer?: number[], offset?: number): number[]
    v2(options?: UUIDOptions, buffer?: Buffer, offset?: number): Buffer

    v3(options?: UUIDOptions): string
    v3(options?: UUIDOptions, buffer?: number[], offset?: number): number[]
    v3(options?: UUIDOptions, buffer?: Buffer, offset?: number): Buffer

    v4(options?: UUIDOptions): string
    v4(options?: UUIDOptions, buffer?: number[], offset?: number): number[]
    v4(options?: UUIDOptions, buffer?: Buffer, offset?: number): Buffer

    parse(id: string, buffer?: number[], offset?: number): number[]
    parse(id: string, buffer?: Buffer, offset?: number): Buffer

    unparse(buffer: number[], offset?: number): string
    unparse(buffer: Buffer, offset?: number): string
}

declare module "node-uuid" {
    var uuid: UUID;
    export = uuid;
}
