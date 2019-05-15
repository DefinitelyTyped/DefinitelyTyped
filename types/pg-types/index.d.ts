// Type definitions for pg-types 1.11
// Project: https://github.com/brianc/node-pg-types
// Definitions by: James Bracy <https://github.com/waratuman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type TypeParser = (value: any) => any;

export function getTypeParser(oid: number, format: string): TypeParser;

export function setTypeParser(oid: number, format: string, parseFn: TypeParser): void;
export function setTypeParser(oid: number, parseFn: TypeParser): void;

export namespace arrayParser {
    function create(source: any, transform: TypeParser): { parse(): any[] };
}
