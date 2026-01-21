export = JSTokenWord;
/**
 * @typedef {import('./JSSpecialWord')} JSSpecialWord
 * @private
 */
/**
 * Token identificado pela classe {@link JSScanner}.
 * @constructor
 */
declare function JSTokenWord(): void;
declare class JSTokenWord {
    /**
     * Retorna o string que representa o token.
     */
    str: any;
    /**
     * Se o token corrente for uma palavra chave ou operador, este atributo irá retornar um objeto com
     * as informações da palavra chave ou operador.
     * Se o token corrente NÃO for um palavra chave ou operador, este atributo irá retornar
     * <em>undefined</em>.
     * @type {JSSpecialWord}
     */
    specialWord: JSSpecialWord;
    /**
     * Retorna o tipo do token. O valor retornado deve ser comparado com os atributos
     * estáticos da classe JSTokenType.
     * @type {string}
     */
    tokenType: string;
    /**
     * Caso o token atual for um string literal e se esta string possui <i>escape chars</i>
     * este propriedade será true, caso contrário esta propriedade será false.
     */
    escapeChars: any;
}
declare namespace JSTokenWord {
    export { JSSpecialWord };
}
type JSSpecialWord = import('./JSSpecialWord');
