export = Element;
/**
 * @typedef {import('./Attr')} Attr
 * @private
 */
/**
 * @typedef {import('./NamedNodeMap')} NamedNodeMap
 * @private
 */
/**
 * @typedef {import('./NodeList')} NodeList
 * @private
 */
/**
 * Element é a classe base mais geral da qual todos os objetos em um Document herdam. Ela somente
 * tem métodos e propriedades comuns para todos os tipos de elementos. Classes específicas herdam
 * de Element. Por exemplo, a interface HTMLElement é a interface base para elementos HTML, enquanto
 * a interface SVGElement é a base para todos os elementos SVG. A maioria das funcionalidades é
 * especificada mais abaixo da hierarquia de classes.
 *
 * A classe Element herda as propriedades e métodos de {@link module:@nginstack/engine/lib/dom/Node~Node}.
 *
 * Documentação adaptada de [Element](https://developer.mozilla.org/pt-BR/docs/Web/API/Element)
 * dos [Mozilla Contributors](https://developer.mozilla.org/pt-BR/docs/Web/API/Element$history) e
 * licenciada sob [CC-BY-SA 2.5](http://creativecommons.org/licenses/by-sa/2.5/).
 * @constructor
 * @extends Node
 * @deprecated Esta funcionalidade é obsoleta pela especificação e seu uso é desencorajado, pois
 * poderá ser removida no futuro.
 */
declare function Element(): void;
declare class Element {
    /**
     * Nome da tag para o elemento em questão.
     * @type {string}
     */
    tagName: string;
    /**
     * Retorna uma coleção de todos os atributos registrados para um nó especificado. É um
     * {@link module:@nginstack/engine/lib/dom/NamedNodeMap~NamedNodeMap}, e não um Array, então não há os
     * métodos de um Array e os nós indexados {@link module:@nginstack/engine/lib/dom/Attr~Attr} podem ser
     * diferentes entre os navegadores. Para ser mais específico, attributes é um par de
     * chave/valor de strings que representa qualquer informação relacionada ao atributo.
     * @type {NamedNodeMap}
     */
    attributes: NamedNodeMap;
    /**
     * Obtém o valor de um atributo a partir do seu nome.
     * @param {string} qualifiedName Nome do atributo do qual se deseja obter o valor.
     * @return {string} Valor do atributo. Será retornada uma string vazia caso o atributo não exista.
     */
    getAttribute(qualifiedName: string): string;
    /**
     * Adiciona um novo atributo ou modifica o valor de um atributo existente.
     * @param {string} qualifiedName Nome do atributo ao qual se deseja atribuir o valor.
     * @param {string} value Novo valor do atributo.
     */
    setAttribute(qualifiedName: string, value: string): void;
    /**
     * Remove um atributo do elemento.
     * @param {string} qualifiedName Nome do atributo que será removido.
     */
    removeAttribute(qualifiedName: string): void;
    /**
     * Retorna o atributo informado como uma instância de {@link module:@nginstack/engine/lib/dom/Attr~Attr}.
     * @param {string} qualifiedName Nome do atributo que será obtido.
     * @return {Attr} Instância de Attr representando o nome e valor do atributo.
     */
    getAttributeNode(qualifiedName: string): Attr;
    /**
     * Adiciona ou substitui um atributo do elemento fazendo uso de uma instância de
     * {@link module:@nginstack/engine/lib/dom/Attr~Attr}.
     * @param {Attr} attr Novo valor do atributo que será adicionado ou substituído.
     * @return {Attr} Atributo que foi substituído, caso houvesse um anterior antes da atribuição.
     */
    setAttributeNode(attr: Attr): Attr;
    /**
     * Retorna uma {@link module:@nginstack/engine/lib/dom/NodeList~NodeList}  com todos os elementos na
     * ordem em que foram definidos no documento com o nome de tag informado e que estão contidos na
     * subárvore deste elemento.
     * @param {string} tagName O nome da tag para realizar a pesquisa. O valor especial "*" obtém todas
     * as tags. Para XML, o parâmetro tagName é case-sensitive, em outros casos ele dependerá
     * da sensibilidade ao case da linguagem markup utilizada.
     * @return {NodeList} Lista com os elementos com a tag informada.
     */
    getElementsByTagName(tagName: string): NodeList;
}
declare namespace Element {
    export { Attr, NamedNodeMap, NodeList };
}
type Attr = import('./Attr');
type NamedNodeMap = import('./NamedNodeMap');
type NodeList = import('./NodeList');
