export = JSSpecialWord;
/**
 * Representa uma palavra chave da linguagem JavaScript
 * @constructor
 */
declare function JSSpecialWord(): void;
declare class JSSpecialWord {
    /**
     * String que representa a palavra chave.
     * @type {string}
     */
    name: string;
    /**
     * Retorna o tipo do token. O valor retornado deve ser comparado com os atributos
     * estáticos da classe JSTokenType.
     * @type {string}
     */
    tokenType: string;
}
