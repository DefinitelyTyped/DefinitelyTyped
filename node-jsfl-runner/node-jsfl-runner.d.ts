// Type definitions for node-jsfl-runner
// Project: https://www.npmjs.com/package/node-jsfl-runner
// Definitions by: Michael Randolph <https://github.com/mrand01>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
declare module "node-jsfl-runner" {
  interface JSFL {
    init: (...args: any[]) => void;
    [index: string]: any;
  }
  
  /**
   * Creates a JSFL file from a JSFL object
   * @param jsfl A valid JSFL object
   * @param fileName Path to output JSFL file location
   * @param initParams Parameters to pass to JSFL init function
   * @param callback Callback
   */
  function createJSFL(jsfl: JSFL, fileName: string, initParams: Array<any>, callback: (err: NodeJS.ErrnoException) => void): void;
  
  /**
   * Deletes a JSFL file
   * @param fileName Path to JSFL file to delete
   * @param callback Callback
   */
  function deleteJSFL(fileName: string, callback: (err: NodeJS.ErrnoException) => void): void;
  
  /**
   * Runs a JSFL file
   * @param fileName Path to JSFL file to run
   * @param callback Callback
   */
  function runJSFL(fileName: string, callback: (err: NodeJS.ErrnoException) => void): void;
}