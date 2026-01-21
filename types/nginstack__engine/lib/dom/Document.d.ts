export = Document;
/**
 * @typedef {import('./Attr')} Attr
 * @private
 */
/**
 * @typedef {import('./NodeList')} NodeList
 * @private
 */
/**
 * @typedef {import('./DocumentType')} DocumentType
 * @private
 */
/**
 * @typedef {import('./Element')} Element
 * @private
 */
/**
 * @typedef {import('./DocumentFragment')} DocumentFragment
 * @private
 */
/**
 * @typedef {import('./Text')} Text
 * @private
 */
/**
 * @typedef {import('./Comment')} Comment
 * @private
 */
/**
 * @typedef {import('./CDATASection')} CDATASection
 * @private
 */
/**
 * @typedef {import('./ProcessingInstruction')} ProcessingInstruction
 * @private
 */
/**
 * @typedef {import('./EntityReference')} EntityReference
 * @private
 */
/**
 * Para cada documento XML carregado, existe um objeto Document. A interface Document
 * serve como um ponto de entrada para o conteúdo ad árvore DOM que representa o XML e provê
 * funcionalidades globais ao documento, como criar novos elementos.
 *
 * A classe Document herda as propriedades e métodos de {@link module:@nginstack/engine/lib/dom/Node~Node}.
 *
 * Documentação adaptada de [Document](https://developer.mozilla.org/pt-BR/docs/Web/API/Document)
 * dos [Mozilla Contributors](https://developer.mozilla.org/pt-BR/docs/Web/API/Document$history) e
 * licenciada sob [CC-BY-SA 2.5](http://creativecommons.org/licenses/by-sa/2.5/).
 * @constructor
 * @extends Node
 */
declare function Document(): void;
declare class Document {
    /**
     * Instância de {@link module:@nginstack/engine/lib/dom/DocumentType~DocumentType} associada a este
     * documento. Para documentos XML sem uma declaração de tipo de documento ele retornará null.
     * Para documentos HTML, uma instância de DocumentType pode ser retornada, independente da
     * presença ou ausência da declaração de tipo de documento no HTML.
     *
     * Provê acesso direto ao nó do tipo {@link module:@nginstack/engine/lib/dom/DocumentType~DocumentType},
     * filho deste documento.
     * @type {DocumentType}
     * @readonly
     */
    readonly doctype: DocumentType;
    /**
     * Retorna o elemento que é o filho direto do documento. Para documentos HTML, ele é normalmente
     * o elemento que representa a tag HTML.
     * @type {Element}
     */
    documentElement: Element;
    /**
     * Cria uma nova instância de {@link module:@nginstack/engine/lib/dom/Element~Element} com o nome de tag
     * informado.
     * @param {string} tagName O nome do tipo de elemento a ser instanciado.
     * @return {Element} Elemento criado.
     */
    createElement(tagName: string): Element;
    /**
     * Cria uma instância de {@link module:@nginstack/engine/lib/dom/DocumentFragment~DocumentFragment} vazia.
     * @return {DocumentFragment} Fragmento de documento criado.
     */
    createDocumentFragment(): DocumentFragment;
    /**
     * Cria uma instância de {@link module:@nginstack/engine/lib/dom/Text~Text} com o conteúdo informado.
     * @param {string} data Conteúdo do elemento a ser criado.
     * @return {Text} Nó do tipo Text criado.
     */
    createTextNode(data: string): Text;
    /**
     * Cria uma instância de {@link module:@nginstack/engine/lib/dom/Comment~Comment} com o conteúdo informado.
     * @param {string} data Conteúdo do elemento a ser criado.
     * @return {Comment} Nó do tipo Comment criado.
     */
    createComment(data: string): Comment;
    /**
     * Cria uma instância de {@link module:@nginstack/engine/lib/dom/CDATASection~CDATASection} com o conteúdo
     * informado.
     * @param {string} data Conteúdo do elemento a ser criado.
     * @return {CDATASection} Nó do tipo CDATASection criado.
     */
    createCDATASection(data: string): CDATASection;
    /**
     * Cria uma instância de
     * {@link module:@nginstack/engine/lib/dom/ProcessingInstruction~ProcessingInstruction} com o *target* e
     * *data* informados.
     * @param {string} target Target da nova instrução de processamento.
     * @param {string} data Dados da nova instrução de processamento.
     * @return {ProcessingInstruction} Nó de instrução de processamento criado.
     */
    createProcessingInstruction(target: string, data: string): ProcessingInstruction;
    /**
     * Cria uma instância de {@link module:@nginstack/engine/lib/dom/Attr~Attr} com o nome informado.
     * @param {string} name Nome do novo atributo a ser criado.
     * @return {Attr} Atributo criado.
     */
    createAttribute(name: string): Attr;
    /**
     * Cria uma instância de {@link module:@nginstack/engine/lib/dom/EntityReference~EntityReference} com o
     * nome informado.
     * @param {string} name Nome da entidade referenciada.
     * @return {EntityReference} Nova instância de EntityReference.
     */
    createEntityReference(name: string): EntityReference;
    /**
     * Retorna um {@link module:@nginstack/engine/lib/dom/NodeList~NodeList} de todos os elementos que possuam
     * o nome de tag informado na ordem em que foram encontrados no documento.
     * @param {string} tagName Nome da tag a ser pesquisada.
     * @return {NodeList} Elementos que possuem a tag informada.
     */
    getElementsByTagName(tagName: string): NodeList;
    /**
     * Obtém o elemento que possui o id informado. Se não existir um elemento com o id informado, será
     * retornado null. O comportamento quando há mais de um elemento com o mesmo id é indefinido.
     * @param {string} elementId Id do elemento pesquisado.
     * @return {Element} Elemento com o id informado ou null caso não haja um.
     */
    getElementById(elementId: string): Element;
    /**
     * Carrega um documento XML a partir de um arquivo local.
     * @param {string} path Path do arquivo XML relativo ao Engine em execução.
     * @return {boolean} True se o arquivo pode ser carregado com sucesso.
     */
    load(path: string): boolean;
    /**
     * Carrega um documento XML a partir de uma string com o seu conteúdo. Será gerado um erro
     * caso o XML seja inválido.
     * @param {string} xml Conteúdo XML a ser carregado.
     */
    loadXML(xml: string): void;
}
declare namespace Document {
    export {
        Attr,
        NodeList,
        DocumentType,
        Element,
        DocumentFragment,
        Text,
        Comment,
        CDATASection,
        ProcessingInstruction,
        EntityReference,
    };
}
type Attr = import('./Attr');
type NodeList = import('./NodeList');
type DocumentType = import('./DocumentType');
type Element = import('./Element');
type DocumentFragment = import('./DocumentFragment');
type Text = import('./Text');
type Comment = import('./Comment');
type CDATASection = import('./CDATASection');
type ProcessingInstruction = import('./ProcessingInstruction');
type EntityReference = import('./EntityReference');
