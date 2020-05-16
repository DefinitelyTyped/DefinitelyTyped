// Type definitions for sic-list 0.5
// Project: https://github.com/596050/sic
// Definitions by: TP <https://github.com/596050>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Expects a two-digit sic code. Returns the description for that sic. If not found, it returns undefined.
 */
export function getDescription(code: string): string | undefined;

/**
 * Expects the English sic description. Returns the code for that sic. If not found, it returns undefined.
 */
export function getCode(description: string): string | undefined;

/**
 * Returns an array of all sic descriptions.
 */
export function getDescriptions(): string[];

/**
 * Returns an array of all sic codes.
 */
export function getCodes(): string[];

/**
 * Returns a key-value object of all sics using the description as key.
 */
export function getDescriptionList(): { [description: string]: string };

/**
 * Returns a key-value object of all sics using the code as key.
 */
export function getCodeList(): { [code: string]: string };

/**
 * Returns an array of all sic information, in the same format as it gets imported.
 */
export function getData(): Array<{ code: string; description: string }>;

/**
 * Expects an array of code and sic description pairs to add to the list. Doesn't return anything.
 */
export function overwrite(sics: ReadonlyArray<{ code: string; description: string }>): void;
