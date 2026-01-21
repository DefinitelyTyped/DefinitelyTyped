export = Attr;
/**
 * Este tipo representa um atributo de elemento DOM como um objeto. Na maioria dos métodos DOM,
 * você provavelmente irá retornar diretamente o atributo como uma string
 * (e.g., Element.getAttribute(), mas certas funções, como
 * {@link module:@nginstack/engine/lib/dom/Element~Element#getAttributeNode}, ou métodos
 * de iteração retornam tipos Attr.
 *
 * A classe Attr herda as propriedades e métodos de {@link module:@nginstack/engine/lib/dom/Node~Node}.
 *
 * Documentação adaptada de [Attr](https://developer.mozilla.org/pt-BR/docs/Web/API/Attr)
 * dos [Mozilla Contributors](https://developer.mozilla.org/pt-BR/docs/Web/API/Attr$history) e
 * licenciada sob [CC-BY-SA 2.5](http://creativecommons.org/licenses/by-sa/2.5/).
 * @constructor
 * @extends Node
 */
declare function Attr(): void;
declare class Attr {
    /**
     * O nome do atributo.
     * @type {string}
     * @readonly
     */
    readonly name: string;
    /**
     * O valor do atributo.
     * @type {string}
     * @readonly
     */
    readonly value: string;
}
