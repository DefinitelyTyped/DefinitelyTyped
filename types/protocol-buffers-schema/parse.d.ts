import {Schema} from "./types"
declare namespace parse {
    export function parse(buffer: string | Buffer): Schema;
    export function stringify(schema: Schema): string;
}

declare function parse(buffer: string | Buffer): Schema;

export = parse;
