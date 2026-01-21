export = LegacyMethod;
/** @module @nginstack/engine/lib/event/LegacyMethod */
/**
 * Classe que representa um método (função de um objeto) no JavaScript. Sua finalidade
 * é contornar uma deficiência da linguagem javaScript que não permite criar uma referência
 * a um método. Quando um método é atribuído a uma variável, apenas a referência a função
 * é armazenada e a propriedade "this" será nula quando a função for executada.
 * @example
 * var Method = require('@nginstack/engine/lib/event/LegacyMethod');
 * var method = new Method(Math.pow, Math);
 * method.call(2, 2);
 * @param {function(...*):*} func Função do objeto
 * @param {Object} object Objeto proprietário da função
 * @constructor
 * @deprecated Utilize o método *bind* da função para indicar o valor de this durante a sua
 * execução.
 */
declare function LegacyMethod(func: (...args: any[]) => any, object: any): void;
declare class LegacyMethod {
    /** @module @nginstack/engine/lib/event/LegacyMethod */
    /**
     * Classe que representa um método (função de um objeto) no JavaScript. Sua finalidade
     * é contornar uma deficiência da linguagem javaScript que não permite criar uma referência
     * a um método. Quando um método é atribuído a uma variável, apenas a referência a função
     * é armazenada e a propriedade "this" será nula quando a função for executada.
     * @example
     * var Method = require('@nginstack/engine/lib/event/LegacyMethod');
     * var method = new Method(Math.pow, Math);
     * method.call(2, 2);
     * @param {function(...*):*} func Função do objeto
     * @param {Object} object Objeto proprietário da função
     * @constructor
     * @deprecated Utilize o método *bind* da função para indicar o valor de this durante a sua
     * execução.
     */
    constructor(func: (...args: any[]) => any, object: any);
    /**
     * Referência a função.
     */
    method: (...arg0: any[]) => any;
    /**
     * Referência ao objeto.
     */
    object: any;
    /**
     * Executa o método com os parâmetros informados.
     */
    call(...args: any[]): any;
}
