export = RequestBody;
/**
 * @typedef {import('./Request')} Request
 * @private
 */
/**
 * Classe auxiliar para ler o corpo de uma requisição HTTP, permitindo ler o conteúdo em outros
 * formatos.
 *
 * Caso o corpo da requisição seja codificado em um código diferente ISO-8859-1, ele será convertido
 * para esse padrão para que possa ser tratado corretamente pelos códigos do Engine.
 * @param {Request} request Requisição que contém o corpo a ser tratado.
 * @constructor
 */
declare function RequestBody(request: Request): void;
declare class RequestBody {
    /**
     * @typedef {import('./Request')} Request
     * @private
     */
    /**
     * Classe auxiliar para ler o corpo de uma requisição HTTP, permitindo ler o conteúdo em outros
     * formatos.
     *
     * Caso o corpo da requisição seja codificado em um código diferente ISO-8859-1, ele será convertido
     * para esse padrão para que possa ser tratado corretamente pelos códigos do Engine.
     * @param {Request} request Requisição que contém o corpo a ser tratado.
     * @constructor
     */
    constructor(request: Request);
    /** @private */
    private request_;
    /**
     * Interpreta o corpo da requisição como JSON e retorna em um objeto JavaScript.
     * @return {Object}
     */
    asJson(): any;
    /**
     * Interpreta o corpo da requisição como texto (text/plain) e retorna uma string com o conteúdo.
     * @return {string}
     */
    asText(): string;
    /**
     * Retorna o corpo da requisição como um arquivo temporário.
     * @example
     * const request = require('@nginstack/engine/context/request.js');
     * const file = request.body.asFile();
     * try {
     *   const content = file.read();
     * } finally {
     *   file.close();
     * }
     * @return {File}
     */
    asFile(): File;
}
declare namespace RequestBody {
    export { Request };
}
import File = require('../io/File.js');
type Request = import('./Request');
