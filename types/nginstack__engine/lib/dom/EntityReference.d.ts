export = EntityReference;
/**
 * Nós do tipo EntityReference podem ser utilizados para representar uma referência a uma entidade
 * na árvore. Note que referências textuais e referências para entidades pré-definidas são
 * consideradas para serem expandidas pelos processadores HTML ou XML então os caracteres
 * são representados pela sua equivalência Unicode em vez uma referência de entidade.
 *
 * A classe EntityReference herda as propriedades e métodos de {@link module:@nginstack/engine/lib/dom/Node~Node}.
 *
 * Documentação adaptada de [EntityReference](https://developer.mozilla.org/pt-BR/docs/Web/API/EntityReference)
 * dos [Mozilla Contributors](https://developer.mozilla.org/pt-BR/docs/Web/API/EntityReference$history) e
 * licenciada sob [CC-BY-SA 2.5](http://creativecommons.org/licenses/by-sa/2.5/).
 * @constructor
 * @extends Node
 * @deprecated Esta funcionalidade é obsoleta pela especificação e seu uso é desencorajado, pois
 * poderá ser removida no futuro.
 */
declare function EntityReference(): void;
declare class EntityReference {}
