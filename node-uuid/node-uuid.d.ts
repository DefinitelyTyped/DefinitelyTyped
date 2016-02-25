// Type definitions for node-uuid.js
// Project: https://github.com/broofa/node-uuid
// Definitions by: Jeff May <https://github.com/jeffmay>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="./node-uuid-base.d.ts" />
/// <reference path="./node-uuid-cjs.d.ts" />

/**
 * Definitions for use in node environment
 *
 * !! For browser enviroments, use node-uuid-global or node-uuid-cjs
 */
declare module __NodeUUID {
    /**
     * Overloads for node environment
     * We need to duplicate some declarations because
     * interface merging doesn't work with overloads
     */
    interface UUID {
        v1(options?: UUIDOptions): string;
        v1(options?: UUIDOptions, buffer?: number[], offset?: number): number[];
        v1(options?: UUIDOptions, buffer?: Buffer, offset?: number): Buffer;

        v4(options?: UUIDOptions): string;
        v4(options?: UUIDOptions, buffer?: number[], offset?: number): number[];
        v4(options?: UUIDOptions, buffer?: Buffer, offset?: number): Buffer;

        parse(id: string, buffer?: number[], offset?: number): number[];
        parse(id: string, buffer?: Buffer, offset?: number): Buffer;

        unparse(buffer: number[], offset?: number): string;
        unparse(buffer: Buffer, offset?: number): string;
    }
}
