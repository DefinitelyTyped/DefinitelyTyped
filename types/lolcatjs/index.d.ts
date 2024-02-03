/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
/*~ export as namespace myLib; */

/*~ If this module has methods, declare them as functions like so.
 */

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

/*~ You can declare properties of the module using const, let, or var */
export const sleep: number | null;

/*~ If there are types, properties, or methods inside dotted names
 *~ of the module, declare them inside a 'namespace'.
 */
export namespace subProp {
  /*~ For example, given this definition, someone could write:
   *~   import { subProp } from 'yourModule';
   *~   subProp.foo();
   *~ or
   *~   import * as yourMod from 'yourModule';
   *~   yourMod.subProp.foo();
   */
  function foo(): void;
}
