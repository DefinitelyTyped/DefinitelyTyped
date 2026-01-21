export function fail(message?: string): never;
export function ok(value: any, message?: string): void;
export function equal(value: any, expected: any, message?: string): void;
export function notEqual(value: any, expected: any, message?: string): void;
export function strictEqual(value: any, expected: any, message?: string): void;
export function notStrictEqual(value: any, expected: any, message?: string): void;
export function throwsExceptions(func: () => any, message?: string): void;
/**
 * Classe de erro padrão do 'assert'.
 * @param {Object} options Objeto com os dados resultante do teste de assertividade
 * (no caso de erro).
 * @constructor
 * @private
 */
export function AssertionError(options: any): void;
export class AssertionError {
    /**
     * Classe de erro padrão do 'assert'.
     * @param {Object} options Objeto com os dados resultante do teste de assertividade
     * (no caso de erro).
     * @constructor
     * @private
     */
    private constructor();
    /** @private */
    private _name;
    /** @private */
    private _error;
    /** @private */
    private _details;
}
