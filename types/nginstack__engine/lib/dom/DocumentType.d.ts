export = DocumentType;
/**
 * @typedef {import('./NamedNodeMap')} NamedNodeMap
 * @private
 */
/**
 * A interface DocumentType representa um objeto Node contendo o *doctype* do documento.
 *
 * A classe DocumentType herda as propriedades e métodos de {@link module:@nginstack/engine/lib/dom/Node~Node}.
 *
 * Documentação adaptada de [DocumentType](https://developer.mozilla.org/pt-BR/docs/Web/API/DocumentType)
 * dos [Mozilla Contributors](https://developer.mozilla.org/pt-BR/docs/Web/API/DocumentType$history) e
 * licenciada sob [CC-BY-SA 2.5](http://creativecommons.org/licenses/by-sa/2.5/).
 * @extends Node
 * @constructor
 */
declare function DocumentType(): void;
declare class DocumentType {
    /**
     * Nome do tipo do documento. Por exemplo: será "html" para <!DOCTYPE HTML>.
     * @type {string}
     */
    name: string;
    /**
     * NamedNodeMap das entidades declaradas no DTD. Cada nó neste mapa implementa a interface
     * {@link module:@nginstack/engine/lib/dom/Entity~Entity}.
     * @type {NamedNodeMap}
     */
    entities: NamedNodeMap;
    /**
     * NamedNodeMap das notações declaradas no DTD. Cada nó neste mapa implementa a interface
     * {@link module:@nginstack/engine/lib/dom/Notation~Notation}.
     * @type {NamedNodeMap}
     */
    notations: NamedNodeMap;
}
declare namespace DocumentType {
    export { NamedNodeMap };
}
type NamedNodeMap = import('./NamedNodeMap');
