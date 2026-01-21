export = JSScanner;
/**
 * @typedef {import('./JSTokenWord')} JSTokenWord
 * @private
 */
/**
 * Classe que realiza a análise léxica (identificação e extração de pedaços de código) da
 * linguagem javascript.
 * @example
 * var JSScanner = require('@nginstack/engine/lib/compiler/ijs/JSScanner');
 *
 * // O exemplo abaixo extrai todas a variáveis do código e as armazena no Array
 * variables.
 * var scanner = new JSScanner();
 * scanner.prepare('for (var i = 0; i < 10; i++) { var x = i * 2 }');
 *
 * var token;
 * var variables = [];
 * while ((token = scanner.nextToken()) !== JSTokenType.NONE) {
 *   if (token === JSTokenType.IDENTIFIER) {
 *     if (variables.indexOf(scanner.tokenWord.str) === -1) {
 *       variables.push(scanner.tokenWord.str);
 *     }
 *   }
 * }
 * variables; //O resultado será: i, x
 * @constructor
 */
declare function JSScanner(): void;
declare class JSScanner {
    /**
     * Prepara o código fonte para ser varrido pelo JSScanner
     * @param {string} source Código fonte que será preparado para ser varrido.
     */
    prepare(source: string): void;
    /**
     * Obtém o próximo token(pedaço atômico do código fonte).
     * Os valores deste campo devem ser testados com as propriedades estáticas da classe
     * JSTokenType
     * @return {string} Próximo token do código fonte.
     */
    nextToken(): string;
    /**
     * Se houver, remove o código fonte atual que está preparado para ser varrido pelo
     * JSScanner.
     */
    clear(): void;
    /**
     * Informa se o último token lido inicia uma linha. A linha 1(um) não é considerada.
     * <br>
     * O exemplo abaixo lista todos os strings de token que iniciam uma nova linha que não senha a
     * linha 1.
     * <br>
     * @type {boolean}
     * @example
     * var JSScanner = require('@nginstack/engine/lib/compiler/ijs/JSScanner');
     * var scanner = new JSScanner();
     * scanner.prepare( "for(var i = 0; i < 10; i++) {
     *    var x = i * 2;
     *    if (false) {
     *    }
     * }");
     *
     * var result = '';
     * while (scanner.nextToken() !== JSTokenType.NONE) {
     *    if (scanner.lineBreaks) {
     *       result += scanner.tokenWord.str + '\r\n';
     *    }
     * }
     *
     * result  //O resultado será: <b>for, var, if, }, }</b>
     */
    lineBreaks: boolean;
    /**
     * Informa se o último token lido é uma string com quebra de linha.
     * <br>
     * O exemplo abaixo lista todas as string que possuem quebra de linha.
     * <br>
     * @type {boolean}
     * @example
     * var JSScanner = require('@nginstack/engine/lib/compiler/ijs/JSScanner');
     * var scanner = new JSScanner()
     * scanner.prepare("
     *  var str1 = 'str 1'
     *  var str1 = 'str
     *    2'
     *  var str1 = 'str 3'
     *  var str1 = 'str
     *    4'
     * ");
     * var result = ""
     * while (scanner.nextToken() !== JSTokenType.NONE) {
     *   if (scanner.lineBreaksInsideString) {
     *     result += scanner.tokenWord.str + "\r\n";
     *   }
     * }
     * result  //O resultado será <b>str 2 str 4</b>
     */
    lineBreaksInsideString: boolean;
    /**
     * Retorna posição do varredor dentro do código fonte.
     * A posição é zero indexada.
     * @type {number}
     */
    position: number;
    /**
     * Retorna o token atual
     * @type {string}
     */
    token: string;
    /**
     * Retorna o código fonte preparado
     * @type {string}
     */
    source: string;
    /**
     * Objeto com informações da palavra do token
     * @type {JSTokenWord}
     */
    tokenWord: JSTokenWord;
}
declare namespace JSScanner {
    export { JSTokenWord };
}
type JSTokenWord = import('./JSTokenWord');
