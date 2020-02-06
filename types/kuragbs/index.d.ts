// Type definitions for non-npm package kuragbs 1.0
// Project: Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.
// Definitions by: Brian Phung <https://github.com/brian-phung>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ Note that ES6 modules cannot directly export class objects.
 *~ This file should be imported using the CommonJS-style:
 *~   import x = require('someLibrary');
 *~
 *~ Refer to the documentation to understand common
 *~ workarounds for this limitation of ES6 modules.
 */

/*~ If this module is a UMD module that exposes a global variable 'myClassLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace GBS;

/// <reference types="google-apps-script" />
declare type Sheet = GoogleAppsScript.Spreadsheet.Sheet;
declare type Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet;
export declare class ActiveSpreadApp {
    id: string | undefined;
    spread: Spreadsheet;
    currentSheet: Sheet | undefined;
    constructor();
    onGetActiveSpread(): Spreadsheet;
    onGetSheetValues(sheetName: string, sheetRange: string): any[][] | null;
    onGetSheetValuesAndFormulas(sheetName: string, sheetRange: string): any[][][] | null;
}
export {};