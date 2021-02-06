/**
 * Left-pads the time component with zeroes.
 *
 * @param timeComponent The time component, will be coerced to a string.
 * @param count The expected number of digits.
 */
declare function padTimeComponent(timeComponent: unknown, count?: number): string;
export = padTimeComponent;
