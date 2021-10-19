// Type definitions for jaro-winkler 0.2.8
// Project: https://github.com/jordanthomas/jaro-winkler
// Definitions by: akii0008 <https://github.com/akii0008>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "jaro-winkler" {
  /**
   * Takes two strings and compares them. Returns a value from 0 to 1, 0 meaning that
   * the strings are not at all similar.
   * 
   * @param {string} x First string
   * @param {string} y Second string
   * @returns {number} 0 to 1
   */
  export default function distance(x: string, y: string): number
}