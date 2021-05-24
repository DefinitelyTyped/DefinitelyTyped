// Type definitions for Tableau's Javascript API version 2.8.1
// Project: https://github.com/tableau-developers/ts-types-tableau-js-api, https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api.htm
// Definitions by: John Hegele <https://github.com/jhegele>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Type definitions were built using Tableau's API documentation as a reference:
 * 
 * https://help.tableau.com/v2021.1/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm
 * 
 * Where possible, the structure of the type definition mirros what is present
 * the documentation. The file structure also attempts to (largely) mirror the
 * structure of the documentation. The Viz Classes category is located in the
 * viz.d.ts file and the Sheet Classes category is located in the sheet.d.ts
 * file, e.g.
 * 
 * For ease of managing and updating these defintions in the future, all enums 
 * have been split out into enums.d.ts.
 * 
 * There are some undocumented classes and methods in Tableau's Javascript API
 * (tableau.Version(), e.g.). Because those classes and methods are not 
 * included in Tableau's public documentation, they have been intentionally
 * excluded here.
 */

export as namespace tableau;

export * from './enums';
export * from './viz';