export = EventTypeError;
/**
 * Erro indicando que o tipo do evento é inválido ou não foi registrado.
 * @param {string} error
 * @param {string} solution
 * @param {string} details
 * @param {string|number} code
 * @constructor
 * @extends DetailedError
 */
declare function EventTypeError(
    error: string,
    solution: string,
    details: string,
    code: string | number
): void;
declare class EventTypeError {
    /**
     * Erro indicando que o tipo do evento é inválido ou não foi registrado.
     * @param {string} error
     * @param {string} solution
     * @param {string} details
     * @param {string|number} code
     * @constructor
     * @extends DetailedError
     */
    constructor(error: string, solution: string, details: string, code: string | number);
    /** @private */
    private _name;
}
