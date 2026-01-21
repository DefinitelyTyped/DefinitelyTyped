export = FatalError;
/**
 * Erro fatal que não pode ser recuperado pelo usuário.
 * @constructor
 * @extends DetailedError
 */
declare function FatalError(...args: any[]): void;
declare class FatalError {
    /**
     * Erro fatal que não pode ser recuperado pelo usuário.
     * @constructor
     * @extends DetailedError
     */
    constructor(...args: any[]);
    /** @private */
    private _name;
}
