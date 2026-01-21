export = DetailedErrorBase;
/**
 * Classe auxiliar que permite criar uma classe que herde da DetailedError nativa. O Engine JS
 * não permite herdar classes nativas diretamente.
 * @example
 * var DetailedErrorBase = require('@nginstack/engine/lib/error/DetailedErrorBase');
 * var inherits = require('@nginstack/engine/lib/object/inherits');
 *
 * var MyError = function (error, solution, details, code) {
 *   DetailedErrorBase.call(this, 'MyError', error, solution, details, code);
 * };
 * inherits(MyError, DetailedErrorBase);
 * @constructor
 */
declare function DetailedErrorBase(
    name: any,
    error: any,
    solution: any,
    details: any,
    code: any
): void;
declare class DetailedErrorBase {
    /**
     * Classe auxiliar que permite criar uma classe que herde da DetailedError nativa. O Engine JS
     * não permite herdar classes nativas diretamente.
     * @example
     * var DetailedErrorBase = require('@nginstack/engine/lib/error/DetailedErrorBase');
     * var inherits = require('@nginstack/engine/lib/object/inherits');
     *
     * var MyError = function (error, solution, details, code) {
     *   DetailedErrorBase.call(this, 'MyError', error, solution, details, code);
     * };
     * inherits(MyError, DetailedErrorBase);
     * @constructor
     */
    constructor(name: any, error: any, solution: any, details: any, code: any);
    /** @private */
    private _name;
    /** @private */
    private _error;
    /** @private */
    private _solution;
    /** @private */
    private _details;
    /** @private */
    private _code;
    /** @private */
    private _sourceLocation;
    toString(): any;
    toHtmlString(): any;
    toSqlString(): any;
}
