export = URLSearchParams;
/**
 * Classe auxiliar para a manipulação da *query string* de uma URL, baseado na
 * [classe original]{@link https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams}
 * especificada nas Web APIs do *Mozilla Developer Network*.
 * @param {string|Array<Array<string>>|Record<string, string>} [query] Uma query string, ou um array
 * cujos elementos são também arrays contendo um par [nome, valor], ou um objeto correspondendo a
 * um mapa de nomes e valores.
 * @constructor
 * @example
 *  const URLSearchParams = require('@nginstack/engine/lib/url/URLSearchParams.js');
 *  var params1 = new URLSearchParams('name=value');
 *  var params2 = new URLSearchParams([['name', value'], ['other', 'value2']]);
 *  var params3 = new URLSearchParams({name: "value"});
 */
declare function URLSearchParams(
    query?: string | string[][] | Record<string, string>
): void;
declare class URLSearchParams {
    /**
     * Classe auxiliar para a manipulação da *query string* de uma URL, baseado na
     * [classe original]{@link https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams}
     * especificada nas Web APIs do *Mozilla Developer Network*.
     * @param {string|Array<Array<string>>|Record<string, string>} [query] Uma query string, ou um array
     * cujos elementos são também arrays contendo um par [nome, valor], ou um objeto correspondendo a
     * um mapa de nomes e valores.
     * @constructor
     * @example
     *  const URLSearchParams = require('@nginstack/engine/lib/url/URLSearchParams.js');
     *  var params1 = new URLSearchParams('name=value');
     *  var params2 = new URLSearchParams([['name', value'], ['other', 'value2']]);
     *  var params3 = new URLSearchParams({name: "value"});
     */
    constructor(query?: string | string[][] | Record<string, string>);
    /** @private */
    private paramsMap_;
    /** @private */
    private paramsList_;
    private decode_;
    private encode_;
    /**
     * @type {Regex}
     * @private
     */
    private percentSignRegex_;
    private getPercentSignRegex_;
    /**
     * @type {Regex}
     * @private
     */
    private plusSignRegex_;
    private getPlusSignRegex_;
    /**
     * @type {Regex}
     * @private
     */
    private findRegex_;
    private getFindRegex_;
    private appendTo_;
    /**
     * Adiciona um parâmetro à lista
     * @param {string} name o nome do parâmetro
     * @param {*} value o valor do parâmetro
     */
    append(name: string, value: any): void;
    /**
     * Remove um parâmetro da lista
     * @param {string} name nome do parâmetro
     */
    delete(name: string): void;
    /**
     * @param {string} name nome do parâmetro
     * @returns {boolean} true se o parâmetro existe
     */
    has(name: string): boolean;
    /**
     * Retorna o valor associado a um parâmetro
     * @param {string} name Nome do parâmetro
     * @returns {*} o primeiro valor associado ao parâmetro, ou null se ele não existir
     */
    get(name: string): any;
    /**
     * Retorna todos os valores associados a um parâmetro
     * @param {string} name Nome do parâmetro
     * @returns {Array} todos os valores associados ao parâmetro name
     */
    getAll(name: string): any[];
    /**
     * Atribui um valor a um parâmetro
     * @param {string} name Nome do parâmetro
     * @param {*} value valor do parâmetro
     */
    set(name: string, value: any): void;
    /**
     * @returns {string} Query string, sem o '?'
     */
    toString(): string;
    /**
     * Itera sobre todos os parâmetros
     * @param {function(...*) :*} callback Função chamada para cada parâmetro
     * @param {Object} thisArg this usado na invocação de callback
     */
    forEach(callback: (...args: any[]) => any, thisArg: any): void;
}
