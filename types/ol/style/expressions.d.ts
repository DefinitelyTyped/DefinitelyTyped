import { Color } from '../color';

/**
 * Base type used for literal style parameters; can be a number literal or the output of an operator,
 * which in turns takes {@link ExpressionValue} arguments.
 * The following operators can be used:
 *
 * Reading operators:
 *
 * ['get', 'attributeName'] fetches a feature attribute (it will be prefixed by a_ in the shader)
 * Note: those will be taken from the attributes provided to the renderer
 * ['var', 'varName'] fetches a value from the style variables, or 0 if undefined
 * ['time'] returns the time in seconds since the creation of the layer
 * ['zoom'] returns the current zoom level
 * ['resolution'] returns the current resolution
 *
 *
 * Math operators:
 *
 * ['*', value1, value2] multiplies value1 by value2
 * ['/', value1, value2] divides value1 by value2
 * ['+', value1, value2] adds value1 and value2
 * ['-', value1, value2] subtracts value2 from value1
 * ['clamp', value, low, high] clamps value between low and high
 * ['%', value1, value2] returns the result of value1 % value2 (modulo)
 * ['^', value1, value2] returns the value of value1 raised to the value2 power
 *
 *
 * Transform operators:
 *
 * ['case', condition1, output1, ...conditionN, outputN, fallback] selects the first output whose corresponding
 * condition evaluates to true. If no match is found, returns the fallback value.
 * All conditions should be boolean, output and fallback can be any kind.
 * ['match', input, match1, output1, ...matchN, outputN, fallback] compares the input value against all
 * provided matchX values, returning the output associated with the first valid match. If no match is found,
 * returns the fallback value.
 * input and matchX values must all be of the same type, and can be number or string. outputX and
 * fallback values must be of the same type, and can be of any kind.
 * ['interpolate', interpolation, input, stop1, output1, ...stopN, outputN] returns a value by interpolating between
 * pairs of inputs and outputs; interpolation can either be ['linear'] or ['exponential', base] where base is
 * the rate of increase from stop A to stop B (i.e. power to which the interpolation ratio is raised); a value
 * of 1 is equivalent to ['linear'].
 * input and stopX values must all be of type number. outputX values can be number or color values.
 * Note: input will be clamped between stop1 and stopN, meaning that all output values will be comprised
 * between output1 and outputN.
 *
 *
 * Logical operators:
 *
 * ['<', value1, value2] returns true if value1 is strictly lower than value2, or false otherwise.
 * ['<=', value1, value2] returns true if value1 is lower than or equals value2, or false otherwise.
 * ['>', value1, value2] returns true if value1 is strictly greater than value2, or false otherwise.
 * ['>=', value1, value2] returns true if value1 is greater than or equals value2, or false otherwise.
 * ['==', value1, value2] returns true if value1 equals value2, or false otherwise.
 * ['!=', value1, value2] returns true if value1 does not equal value2, or false otherwise.
 * ['!', value1] returns false if value1 is true or greater than 0, or true otherwise.
 * ['all', value1, value2, ...] returns true if all the inputs are true, false otherwise.
 * ['any', value1, value2, ...] returns true if any of the inputs are true, false otherwise.
 * ['between', value1, value2, value3] returns true if value1 is contained between value2 and value3
 * (inclusively), or false otherwise.
 *
 *
 * Conversion operators:
 *
 * ['array', value1, ...valueN] creates a numerical array from number values; please note that the amount of
 * values can currently only be 2, 3 or 4.
 * ['color', red, green, blue, alpha] creates a color value from number values; the alpha parameter is
 * optional; if not specified, it will be set to 1.
 * Note: red, green and blue components must be values between 0 and 255; alpha between 0 and 1.
 *
 *
 *
 * Values can either be literals or another operator, as they will be evaluated recursively.
 * Literal values can be of the following types:
 *
 * boolean
 * number
 * string
 * {@link module:ol/color~Color}
 *
 */
export type ExpressionValue = any[] | Color | string | number | boolean;
/**
 * An operator declaration must contain two methods: getReturnType which returns a type based on
 * the operator arguments, and toGlsl which returns a GLSL-compatible string.
 * Note: both methods can process arguments recursively.
 */
export interface Operator {
    getReturnType: (p0: ExpressionValue[]) => ValueTypes | number;
    toGlsl: (p0: ParsingContext, p1: ExpressionValue[], p2?: ValueTypes) => string;
}
/**
 * Context available during the parsing of an expression.
 */
export interface ParsingContext {
    inFragmentShader?: boolean;
    variables: string[];
    attributes: string[];
    stringLiteralsMap: { [key: string]: number };
}
/**
 * Operator declarations
 */
export const Operators: { [key: string]: Operator };
/**
 * Possible inferred types from a given value or expression.
 * Note: these are binary flags.
 */
export enum ValueTypes {
    NUMBER = 1,
    STRING = 2,
    COLOR = 4,
    BOOLEAN = 8,
    NUMBER_ARRAY = 16,
    ANY = 31,
    NONE = 0,
}
/**
 * Will return the number array as a float with a dot separator, concatenated with ', '.
 */
export function arrayToGlsl(array: number[]): string;
/**
 * Will normalize and converts to string a vec4 color array compatible with GLSL.
 */
export function colorToGlsl(color: string | Color): string;
/**
 * Recursively parses a style expression and outputs a GLSL-compatible string. Takes in a parsing context that
 * will be read and modified during the parsing operation.
 */
export function expressionToGlsl(
    context: ParsingContext,
    value: ExpressionValue,
    typeHint?: ValueTypes | number,
): string;
/**
 * Returns a stable equivalent number for the string literal.
 */
export function getStringNumberEquivalent(context: ParsingContext, string: string): number;
/**
 * Returns the possible types for a given value (each type being a binary flag)
 * To test a value use e.g. getValueType(v) & ValueTypes.BOOLEAN
 */
export function getValueType(value: ExpressionValue): ValueTypes | number;
/**
 * Checks if only one value type is enabled in the input number.
 */
export function isTypeUnique(valueType: ValueTypes | number): boolean;
/**
 * Will return the number as a float with a dot separator, which is required by GLSL.
 */
export function numberToGlsl(v: number): string;
/**
 * Returns a stable equivalent number for the string literal, for use in shaders. This number is then
 * converted to be a GLSL-compatible string.
 */
export function stringToGlsl(context: ParsingContext, string: string): string;
