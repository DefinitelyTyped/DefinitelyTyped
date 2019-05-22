// Type definitions for json-stream-stringify 2.0
// Project: https://github.com/Faleij/json-stream-stringify#readme
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />
import { Readable } from "stream";

export default class JsonStreamStringify extends Readable {
    constructor(value: any, replacer?: ((key: any, value: any) => any) | any[], spaces?: string | number, cycle?: boolean);
    path(): [string, number];
}
