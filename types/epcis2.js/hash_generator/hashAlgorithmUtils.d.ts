/**
 * The list of fields that will be ignored in the pre-hashed string
 * @type {string[]}
 */
export const toBeIgnored: string[];
export function isAString(obj: any): boolean;
export function removeWhiteSpaceAtTheBeginningOrEndOfString(obj: any): any;
export function convertEpcUriToDlUri(obj: any, throwError: boolean): any;
export function isADate(obj: any): boolean;
export function removeTimeZoneProperty(date: string): string;
export function addATrailingZ(date: string): string;
export function addMillisecondPrecisionToDate(date: string): string;
export function formatTheDate(obj: any): any;
export function listOfStringToPreHashLexicalOrderedString(strings: []): string;
export function getEventContexts(object: {}): {};
