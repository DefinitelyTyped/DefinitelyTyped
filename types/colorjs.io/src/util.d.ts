export { default as multiplyMatrices } from './multiply-matrices';

/**
 * Check if a value is a string
 * @param str Value to check
 */
export function isString(str: any): str is string;

/**
 * Find the internal JavaScript `[[Class]]` of an object
 * @param o Value to check
 */
export function type(o: any): string;

/**
 * Round a number to an amount of significant digits
 * @param n The number to round
 * @param precision The amount of significant digits
 */
export function toPrecision(n: number, precision: number): number;

/**
 * Parse a CSS function regardless of its name and arguments
 * @param str String to parse
 */
export function parseFunction(str: string): {
    name: string;
    rawName: string;
    rawArgs: string;
    args: Array<
        | string
        | (number & {
              type?: '<angle>' | '<number>' | '<percentage>' | undefined;
              unit?: 'deg' | undefined;
              alpha?: true | undefined;
          })
    >;
};

/**
 * Get the last element of an array
 * @param arr The array
 */
export function last<T>(arr: [...any[], T]): T;

export function interpolate(start: number, end: number, p: number): number;

export function interpolateInv(start: number, end: number, value: number): number;

export function mapRange(from: [number, number], to: [number, number], value: number): number;

export function parseCoordGrammar(coordGrammars: string[]): string[];
