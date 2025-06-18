// Project: lolcatjs
/**
 * Takes a frequency and an index and returns an RGB color.
 * @param freq
 * @param i
 * @returns An object representing an RGB color.
 */
export function rainbow(freq: number, i: number): Rgb;

/**
 * Takes a character and an RGB color and writes it to the stdout.
 * @param char
 * @param colors
 * @returns void
 */
export function colorize(char: string, colors: Rgb): void;

/**
 *  Takes a string and an RGB color and writes it to the stdout.
 * @param colorize
 * @param line
 * @returns void
 */
export function printlnPlain(colorize: ColorizeFunction, line: string[]): void;

/**
 * Takes a colorize function and a line, and prints the line with an animation if sleep is true.
 * @param colorize
 * @param line
 * @returns void
 */
export function printlnAnimated(colorize: ColorizeFunction, line: string[]): void;

/**
 * Takes a line and prints it to the stdout.
 * @param line
 * @returns void
 */
export function printIn(line: string[]): void;

/**
 * Reads data from the stdin, splits it into lines, and prints each line.
 * @returns Promise<void>
 */
export function fromPipe(): Promise<void>;

/**
 * Reads data from a file, splits it into lines, and prints each line.
 * @param file
 * @returns Promise<void>
 */
export function fromFile(file: string): Promise<void>;

/**
 * Takes a string, splits it into lines, and prints each line.
 * @param string
 * @returns void
 */
export function fromString(string: string): void;

/**
 * Initializes the module, tries to require the 'sleep' module for animations.
 * If the 'sleep' module is not available, it falls back to no animations.
 * @returns null
 */
export function init(): null;

/*~ You can declare types that are available via importing the module */
export interface Options {
    animate: boolean;
    duration: number;
    seed: number;
    speed: number;
    spread: number;
    freq: number;
    debug: boolean;
}

export interface Rgb {
    red: number;
    green: number;
    blue: number;
}

export type ColorizeFunction = (char: string, colors: Rgb) => void;

/*~ You can declare properties of the module using const, let, or var */
export const sleep: number | null;
export const options: Options;
export const colors: Rgb;
