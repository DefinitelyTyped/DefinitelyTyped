export = DocumentFragment;
/**
 * A interface do DocumentFragment representa um objeto de documento mínimo que não possui pai. É
 * usada como uma versão leve de Document para armazenar fragmentos bem formados ou
 * fragmentos potencialmente mal formados de XML.
 *
 * A classe DocumentFragment herda as propriedades e métodos de {@link module:@nginstack/engine/lib/dom/Node~Node}.
 *
 * Documentação adaptada de
 * [DocumentFragment](https://developer.mozilla.org/pt-BR/docs/Web/API/DocumentFragment) dos
 * [Mozilla Contributors](https://developer.mozilla.org/pt-BR/docs/Web/API/DocumentFragment$history) e
 * licenciada sob [CC-BY-SA 2.5](http://creativecommons.org/licenses/by-sa/2.5/).
 * @constructor
 * @extends Node
 */
declare function DocumentFragment(): void;
declare class DocumentFragment {}
