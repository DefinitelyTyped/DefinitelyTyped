export const VERSION: string;

export interface CustomType {
    typeOf: string;
    validate: (input: unknown) => boolean;
}

export interface CustomTypes {
    [typeName: string]: CustomType;
}

export interface Options {
    customTypes?: CustomTypes;
}

export function typeCheck(type: string, input: unknown, options?: Options): boolean;

// This is, in fact, a single element tuple.
// eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
export type ParsedType = [ParsedTypeData];

export interface ParsedTypeData {
    type: string;
}

export function parseType(type: string): ParsedType;

export function parsedTypeCheck(parsedType: ParsedType, input: string, options?: Options): boolean;
