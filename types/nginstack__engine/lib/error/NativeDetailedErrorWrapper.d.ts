export = NativeDetailedErrorWrapper;
/**
 * Classe auxiliar para criar classes filhas de DetailedError.
 *
 * Essa classe é um artifício utilizado para contornar a limitação do iJavaScript de não permitir
 * classes filhas das nativas.
 * @extends DetailedError
 * @deprecated Prefira utilizar {@link module:@nginstack/engine/lib/error/DetailedErrorBase}.
 */
declare function NativeDetailedErrorWrapper(
    error: any,
    solution: any,
    details: any,
    code: any
): void;
declare class NativeDetailedErrorWrapper {
    /**
     * Classe auxiliar para criar classes filhas de DetailedError.
     *
     * Essa classe é um artifício utilizado para contornar a limitação do iJavaScript de não permitir
     * classes filhas das nativas.
     * @extends DetailedError
     * @deprecated Prefira utilizar {@link module:@nginstack/engine/lib/error/DetailedErrorBase}.
     */
    constructor(error: any, solution: any, details: any, code: any);
    /** @private */
    private _name;
    /** @private */
    private _error;
    /** @private */
    private _solution;
    /** @private */
    private _details;
    /** @private */
    private _sourceLocation;
    /** @private */
    private _code;
    private _setName;
    toString(): any;
    toHtmlString(): any;
    toSqlString(): any;
}
