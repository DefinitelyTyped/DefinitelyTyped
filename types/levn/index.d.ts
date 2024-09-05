import { CustomType, ParsedType, ParsedTypeData } from "type-check";

export interface CastableCustomType extends CustomType {
    cast: (input: unknown) => ParsedTypeData;
}

export interface ParseOptions {
    customTypes?: Record<string, CastableCustomType> | undefined;
    explicit?: boolean | undefined;
}

export function parse(
    type: string,
    string: string,
    options?: ParseOptions,
): unknown;

export function parsedTypeParse(
    parsedType: ParsedType,
    input: string,
    options?: ParseOptions,
): unknown;

export const VERSION: string;
