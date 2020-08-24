import { Color } from '../color';

export type ExpressionValue = any[] | Color | string | number | boolean;
export interface Operator {
    getReturnType: (p0: ExpressionValue[]) => ValueTypes | number;
    toGlsl: (p0: ParsingContext, p1: ExpressionValue[], p2?: ValueTypes) => string;
}
export interface ParsingContext {
    inFragmentShader?: boolean;
    variables: string[];
    attributes: string[];
    stringLiteralsMap: { [key: string]: number };
}
export enum ValueTypes {
    NUMBER = 1,
    STRING = 2,
    COLOR = 4,
    BOOLEAN = 8,
    NUMBER_ARRAY = 16,
    ANY = 31,
    NONE = 0,
}
export function arrayToGlsl(array: number[]): string;
export function colorToGlsl(color: string | Color): string;
export function expressionToGlsl(
    context: ParsingContext,
    value: ExpressionValue,
    typeHint?: ValueTypes | number,
): string;
export function getStringNumberEquivalent(context: ParsingContext, string: string): number;
export function getValueType(value: ExpressionValue): ValueTypes | number;
export function isTypeUnique(valueType: ValueTypes | number): boolean;
export function numberToGlsl(v: number): string;
export function stringToGlsl(context: ParsingContext, string: string): string;
