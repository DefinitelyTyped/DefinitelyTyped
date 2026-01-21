export = Node;
/**
 * @typedef {import('./NodeList')} NodeList
 * @private
 */
/**
 * @typedef {import('./Document')} Document
 * @private
 */
/**
 * @typedef {'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'|'12'} NodeType
 * @private
 */
/**
 * Node é uma interface da qual diversos tipos do DOM herdam, e que permite que esses tipos
 * sejam tratados de forma similar, por exemplo, herdando os mesmos métodos ou sendo testados
 * da mesma forma.
 *
 * Todos os tipos a seguir herdam essa interface e seus métodos e propriedades (apesar de que
 * alguns podem devolver null em casos particulares em que o método ou a propriedade não
 * são relevantes; ou lançar uma exceção quando adicionando um filho a um tipo de nó que não
 * pode ter filhos): Document, Element, Attr, CharacterData (do qual Text, Comment, e
 * CDATASection herdam), ProcessingInstruction, DocumentFragment, DocumentType,
 * Notation, Entity, EntityReference.
 *
 * Documentação adaptada de [Node](https://developer.mozilla.org/pt-BR/docs/Web/API/Node)
 * dos [Mozilla Contributors](https://developer.mozilla.org/pt-BR/docs/Web/API/Node$history) e
 * licenciada sob [CC-BY-SA 2.5](http://creativecommons.org/licenses/by-sa/2.5/).
 * @constructor
 */
declare function Node(): void;
declare class Node {
    /**
     * Retorna uma DOMString contendo o nome do elemento, do Node. A estrutura do nome irá mudar
     * conforme o tipo do elemento. Veja as diferenças na documentação do método Node.nodeName.
     * @type {string}
     * @readonly
     */
    readonly nodeName: string;
    /**
     * Retorna um número inteiro representando o tipo do nó. Os valores possíveis são:
     *
     * * **ELEMENT_NODE**: 1
     * * **ATTRIBUTE_NODE**: 2
     * * **TEXT_NODE**: 3
     * * **CDATA_SECTION_NODE**: 4
     * * **ENTITY_REFERENCE_NODE**: 5
     * * **ENTITY_NODE**: 6
     * * **PROCESSING_INSTRUCTION_NODE**: 7
     * * **COMMENT_NODE**: 8
     * * **DOCUMENT_NODE**: 9
     * * **DOCUMENT_TYPE_NODE**: 10
     * * **DOCUMENT_FRAGMENT_NODE**: 11
     * * **NOTATION_NODE**: 12
     * @type {NodeType|''}
     * @readonly
     */
    readonly nodeType: NodeType | '';
    /**
     * Retorna ou define o valor do nó atual.
     * @readonly
     * @type {string}
     */
    readonly nodeValue: string;
    /**
     * Retorna um Node que é pai desse nó. Se não existe tal nó, como, por exemplo, se esse nó é o
     * topo da árvore ou se ele não participa de uma árvore, essa propriedade retorna null.
     * @type {Node}
     * @readonly
     */
    readonly parentNode: Node;
    /**
     * Retorna um objeto NodeList "vivo" contendo todos os filhos deste nó. Dizer que um objeto
     * NodeList é vivo significa que se houver alguma mudança em um dos filhos deste nó, o objeto
     * NodeList é automaticamente atualizado com tais mudanças.
     * @type {NodeList}
     * @readonly
     */
    readonly childNodes: NodeList;
    /**
     * Retorna um Node representando o primeiro filho direto do nó ou null, caso o nó não tenha
     * nenhum filho.
     * @type {Node}
     * @readonly
     */
    readonly firstChild: Node;
    /**
     * Retorna um Node representando o último filho direto do elemento ou null, caso o elemento
     * não tenha nenhum filho.
     * @type {Node}
     * @readonly
     */
    readonly lastChild: Node;
    /**
     * Retorna um Node representando o nó anterior em uma árvore ou null se não existe tal nodo.
     * @type {Node}
     * @readonly
     */
    readonly previousSibling: Node;
    /**
     * Retorna um Node representando o próximo nó em uma árvore ou null se não existe tal nodo.
     * @type {Node}
     * @readonly
     */
    readonly nextSibling: Node;
    /**
     * Retorna o Document qual esse nó pertence. Se o nó em si é um documento, retorna null.
     * @type {Document}
     * @readonly
     */
    readonly ownerDocument: Document;
    /**
     * O espaço de nomes URI desse nó, ou null se não estiver no espaço de nomes.
     * @type {string}
     * @readonly
     * @deprecated
     */
    readonly namespaceURI: string;
    /**
     * É um DOMString representando o espaço de nomes do nó, ou null se nenhum prefixo é especificado.
     * @type {string}
     * @readonly
     */
    readonly prefix: string;
    /**
     * Coloca o nó e todos os nós filhos nas suas formas normalizadas. Em uma subárvore normalizada
     * não há nós do tipo Text vazios, nem há nós adjacentes desse mesmo tipo.
     */
    normalize(): void;
    /**
     * Adiciona o nó especificado, antes de um elemento de referência, como filho do nó atual.
     * @param {Node} newChild O nó a ser inserido.
     * @param {Node} refChild O nó antes do qual o *newChild* será inserido.
     * @return {Node} O nó sendo inserido, que é *newChild*.
     */
    insertBefore(newChild: Node, refChild: Node): Node;
    /**
     * Substitui o elemento filho especificado por outro.
     * @param {Node} newChild É o novo elemento que será inserido no lugar do *oldChild*. Se já existir
     * no DOM, será removido primeiro para depois ser inserido.
     * @param {Node} oldChild É o elemento existente que será substituído.
     * @return {Node} É o elemento substituído. É o mesmo elemento que *oldChild*.
     */
    replaceChild(): Node;
    /**
     * Remove um nó filho do DOM. Devolve o nó removido.
     * @param {Node} oldChild É o nó filho a ser removido do DOM.
     * @return {Node} Contém uma referência ao nó filho removido.
     */
    removeChild(): Node;
    /**
     * Adiciona um nó ao final da lista de filhos de um nó pai especificado.
     *
     * Se filho é uma referência a um nó existente no documento, appendChild vai movê-lo de sua
     * posição atual para a nova posição (i.e, não é necessário remover o nó de seu pai atual
     * antes de adicioná-lo a outro nó).
     *
     * Isso também significa que um nó não pode estar em dois lugares do documento ao mesmo tempo.
     * Assim, se o nó já tem um pai, ele é primeiro removido para, só então, ser adicionado na
     * nova posição.
     *
     * Você pode usar o método {@link #cloneNode} para criar uma cópia do nó antes de adicioná-lo ao
     * novo pai. Note que cópias feitas com o método cloneNode não serão mantidas sincronizadas
     * automaticamente.
     * @param {Node} newChild É o nó a ser adicionado como filho de elemento.
     * @return {Node} Nó adicionado no DOM, o mesmo que foi informado em *newChild*.
     */
    appendChild(): Node;
    /**
     * Duplica um elemento node (nó) da estrutura de um documento DOM. Ele retorna um clone do
     * elemento para o qual foi invocado.
     * @param {boolean} deep Indica se os elementos filhos do nó que está sendo clonado devem ser
     * clonados juntos. Informe false para clonar apenas o nó específico dispensando, assim, qualquer
     * elemento DOM filho.
     * @return {Node} O novo elemento node (nó) resultado da clonagem.
     */
    cloneNode(): Node;
    /**
     * Este método retorna um valor booleano indicando se o nó corrente tem filhos ou não.
     * @return {boolean} True se o nó tiver filhos.
     */
    hasChildNodes(): boolean;
}
declare namespace Node {
    export {
        ELEMENT_NODE,
        ATTRIBUTE_NODE,
        TEXT_NODE,
        CDATA_SECTION_NODE,
        ENTITY_REFERENCE_NODE,
        ENTITY_NODE,
        PROCESSING_INSTRUCTION_NODE,
        COMMENT_NODE,
        DOCUMENT_NODE,
        DOCUMENT_TYPE_NODE,
        DOCUMENT_FRAGMENT_NODE,
        NOTATION_NODE,
        NodeList,
        Document,
        NodeType,
    };
}
declare let ELEMENT_NODE: number;
declare let ATTRIBUTE_NODE: number;
declare let TEXT_NODE: number;
declare let CDATA_SECTION_NODE: number;
declare let ENTITY_REFERENCE_NODE: number;
declare let ENTITY_NODE: number;
declare let PROCESSING_INSTRUCTION_NODE: number;
declare let COMMENT_NODE: number;
declare let DOCUMENT_NODE: number;
declare let DOCUMENT_TYPE_NODE: number;
declare let DOCUMENT_FRAGMENT_NODE: number;
declare let NOTATION_NODE: number;
type NodeList = import('./NodeList');
type Document = import('./Document');
type NodeType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
