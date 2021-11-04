import { Schema } from "./types";
declare namespace parse {
    function parse(buffer: string | Buffer): Schema;
    function stringify(schema: Schema): string;
}

declare function parse(buffer: string | Buffer): Schema;

export = parse;
