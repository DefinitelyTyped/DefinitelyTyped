// Type definitions for base64-js v0.0.8
// Project: https://github.com/beatgammit/base64-js
// Definitions by: Jamie Couperwhite <https://github.com/jamcoupe>
// Definitions: https://github.com/borisyankov/DefinitelyTyped



declare module base64js {

  function fromByteArray(array: Uint8Array): string;

  function toByteArray(base64: string): Uint8Array;

}
