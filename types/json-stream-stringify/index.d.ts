// Type definitions for json-stream-stringify 2.0
// Project: https://github.com/Faleij/json-stream-stringify#readme
// Definitions by: Sega Yuu <https://github.com/segayuu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2
/// <reference types="node" />
import { Readable } from "stream";

export default class JsonStreamStringify extends Readable {
    constructor(value: any, replacer?: ((key: any, value: any) => any) | any[], spaces?: string | number, cycle?: boolean);
    path(): [string, number];
}
