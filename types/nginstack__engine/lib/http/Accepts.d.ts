export = Accepts;
/**
 * @typedef {import('./Request')} Request
 * @private
 */
/**
 * Possui o intuito de realizada validações do cabeçalho Accepts em requisições HTTP.
 * @param {Request} request Request da transação HTTP.
 * @constructor
 */
declare function Accepts(request: Request): void;
declare class Accepts {
    /**
     * @typedef {import('./Request')} Request
     * @private
     */
    /**
     * Possui o intuito de realizada validações do cabeçalho Accepts em requisições HTTP.
     * @param {Request} request Request da transação HTTP.
     * @constructor
     */
    constructor(request: Request);
    /** @private */
    private acceptHeader_;
    /**
     * Extensões de arquivos suportadas pelo Protocolo HTTP, mapeando o tipo de arquivo para o código
     * completo do tipo de mídia.
     * @type {Object<string>}
     * @private
     */
    private mediaTypeMap_;
    private extToMime_;
    private removeSuffix_;
    private mediaTypeEquals_;
    /**
     * Busca o primeiro MediaType presente no Accept da requisição HTTP.
     * @example
     *  var Accepts = require('@nginstack/engine/lib/http/Accepts');
     *  var accepts = new Accepts(request);
     *  var test = accepts.type(['application/json', 'text', 'xml'])
     * @param {Array|string} extensions Type ou MediaType a ser procurado na requisição HTTP.
     * @return {string|undefined} Retorna o primeiro elemento na ordem de MediaType sugerido.
     */
    type(extensions: any[] | string): string | undefined;
}
declare namespace Accepts {
    export { Request };
}
type Request = import('./Request');
